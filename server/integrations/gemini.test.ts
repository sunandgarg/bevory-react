import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  configuredGeminiModels,
  generateGeminiJson,
  generateGeminiText,
  geminiConfigured,
} from "./gemini.js";

const originalKey = process.env.GEMINI_API_KEY;
const originalModel = process.env.GEMINI_MODEL;

describe("Gemini integration", () => {
  beforeEach(() => {
    process.env.GEMINI_API_KEY = "test-server-key";
    delete process.env.GEMINI_MODEL;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    if (originalKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = originalKey;
    if (originalModel === undefined) delete process.env.GEMINI_MODEL;
    else process.env.GEMINI_MODEL = originalModel;
  });

  it("uses the cost-efficient model with a current Flash-Lite fallback", () => {
    expect(geminiConfigured()).toBe(true);
    expect(configuredGeminiModels()).toEqual(["gemini-3.1-flash-lite", "gemini-3.5-flash-lite"]);
  });

  it("keeps the API key in a server request header and parses text", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({
      candidates: [{ content: { parts: [{ text: "Grounded answer" }] } }],
    }), { status: 200, headers: { "Content-Type": "application/json" } }));
    vi.stubGlobal("fetch", fetchMock);

    const response = await generateGeminiText("Question");

    expect(response).toEqual({ text: "Grounded answer", model: "gemini-3.1-flash-lite" });
    const [, init] = fetchMock.mock.calls[0];
    expect((init.headers as Record<string, string>)["x-goog-api-key"]).toBe("test-server-key");
    expect(String(init.body)).not.toContain("test-server-key");
  });

  it("falls back to the current Flash-Lite model when the cheapest model is unavailable", async () => {
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: { message: "Model unavailable" } }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }))
      .mockResolvedValueOnce(new Response(JSON.stringify({
        candidates: [{ content: { parts: [{ text: "Fallback answer" }] } }],
      }), { status: 200, headers: { "Content-Type": "application/json" } }));
    vi.stubGlobal("fetch", fetchMock);

    const response = await generateGeminiText("Question");

    expect(response.model).toBe("gemini-3.5-flash-lite");
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("parses structured JSON output", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({
      candidates: [{ content: { parts: [{ text: "{\"selections\":[]}" }] } }],
    }), { status: 200, headers: { "Content-Type": "application/json" } })));

    const response = await generateGeminiJson<{ selections: unknown[] }>("Plan", {
      type: "object",
      properties: { selections: { type: "array", items: { type: "string" } } },
      required: ["selections"],
    });

    expect(response.data).toEqual({ selections: [] });
  });
});
