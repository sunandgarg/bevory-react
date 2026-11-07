import type { NextFunction, Request, Response } from "express";
import { describe, expect, it, vi } from "vitest";
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

  it("separates verified visitor keys behind a shared reverse proxy", () => {
    const middleware = createRateLimit({ windowMs: 60_000, max: 1, message: "Slow down", key: (req) => req.header("cf-connecting-ip") || "proxy" });
    const next = vi.fn();
    const response = { setHeader: vi.fn(), status: vi.fn().mockReturnThis(), json: vi.fn() } as unknown as Response;
    const request = (ip: string) => ({ ip: "proxy", socket: {}, header: () => ip }) as unknown as Request;
    middleware(request("1.1.1.1"), response, next);
    middleware(request("2.2.2.2"), response, next);
    middleware(request("1.1.1.1"), response, next);
    expect(next).toHaveBeenCalledTimes(2);
    expect(response.status).toHaveBeenCalledWith(429);
    expect(response.setHeader).toHaveBeenCalledWith("Cache-Control", "private, no-store");
  });
});
