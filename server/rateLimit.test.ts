import type { NextFunction, Request, Response } from "express";
import { describe, expect, it } from "vitest";
import { createRateLimit } from "./rateLimit.js";

describe("rate limiting", () => {
  it("returns 429 with a retry delay after the configured limit", () => {
    const middleware = createRateLimit({ windowMs: 60_000, max: 2, message: "Slow down" });
    const headers = new Map<string, string>();
    let statusCode = 200;
    let payload: unknown;
    let nextCalls = 0;
    const request = { ip: "127.0.0.1", socket: {} } as Request;
    const response = {
      setHeader: (name: string, value: string) => headers.set(name.toLowerCase(), value),
      status(code: number) {
        statusCode = code;
        return this;
      },
      json(body: unknown) {
        payload = body;
        return this;
      },
    } as unknown as Response;
    const next = (() => { nextCalls += 1; }) as NextFunction;

    middleware(request, response, next);
    middleware(request, response, next);
    middleware(request, response, next);

    expect(nextCalls).toBe(2);
    expect(statusCode).toBe(429);
    expect(headers.get("retry-after")).toBeTruthy();
    expect(headers.get("ratelimit-limit")).toBe("2");
    expect(headers.get("ratelimit-remaining")).toBe("0");
    expect(payload).toMatchObject({ error: { message: "Slow down" } });
  });
});
