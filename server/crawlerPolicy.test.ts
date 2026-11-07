import type { NextFunction, Request, Response } from "express";
import { expect, it, vi } from "vitest";
import { denyUnlicensedCrawler } from "./crawlerPolicy.js";

it("denies declared extraction clients but keeps visitors, search and robots.txt accessible", () => {
  const response = { setHeader: vi.fn(), status: vi.fn().mockReturnThis(), type: vi.fn().mockReturnThis(), send: vi.fn() } as unknown as Response;
  const run = (agent: string, path = "/guide") => {
    const next = vi.fn();
    denyUnlicensedCrawler({ path, header: () => agent } as unknown as Request, response, next as NextFunction);
    return next;
  };
  for (const agent of ["GPTBot/1.4", "Mozilla/5.0 (compatible; AhrefsBot/7.0)", "CCBot/2.0", "OAI-SearchBot/1.4"]) {
    expect(run(agent)).not.toHaveBeenCalled();
    expect(response.status).toHaveBeenCalledWith(403);
  }
  for (const agent of ["Mozilla/5.0", "Googlebot/2.1", "bingbot/2.0", "Mediapartners-Google"]) expect(run(agent)).toHaveBeenCalled();
  expect(run("GPTBot/1.4", "/robots.txt")).toHaveBeenCalled();
});
