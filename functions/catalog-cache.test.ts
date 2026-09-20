import { afterEach, describe, expect, it, vi } from "vitest";
import { proxyApiRequest } from "./[[path]].js";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("Cloudflare catalogue cache", () => {
  it("versions the edge cache key without forwarding the private cache marker", async () => {
    const cache = {
      match: vi.fn(async () => undefined),
      put: vi.fn(async () => undefined),
    };
    const originFetch = vi.fn(async () => Response.json({ products: [] }));
    const deferred: Promise<unknown>[] = [];
    vi.stubGlobal("caches", { default: cache });
    vi.stubGlobal("fetch", originFetch);

    const publicUrl = "https://bevory.in/api/catalog/gurgaon?category=beer";
    const response = await proxyApiRequest(
      new Request(publicUrl),
      { API_ORIGIN: "https://api.bevory.in", ORIGIN_VERIFY_SECRET: "secret" },
      (promise: Promise<unknown>) => deferred.push(promise),
    );
    await Promise.all(deferred);

    expect(response.status).toBe(200);
    const cacheUrl = (cache.match.mock.calls[0][0] as Request).url;
    expect(cacheUrl).toContain("__bevory_catalog_cache=20260920-cold-start-v2");
    expect(cacheUrl).toContain("category=beer");
    expect(originFetch.mock.calls[0][0]).toBe("https://api.bevory.in/api/catalog/gurgaon?category=beer");
  });

  it("serves catalogues from the edge cache with a long stale window", async () => {
    const cached = Response.json({ data: { products: [] }, error: null }, {
      headers: { "cache-control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400" },
    });
    const cache = {
      match: vi.fn(async () => cached),
      put: vi.fn(async () => undefined),
    };
    const originFetch = vi.fn();
    vi.stubGlobal("caches", { default: cache });
    vi.stubGlobal("fetch", originFetch);

    const response = await proxyApiRequest(
      new Request("https://bevory.in/api/catalog/delhi?view=home"),
      { API_ORIGIN: "https://api.bevory.in", ORIGIN_VERIFY_SECRET: "secret" },
      () => undefined,
    );

    expect(response.headers.get("x-bevory-cache")).toBe("HIT");
    expect(response.headers.get("cache-control")).toContain("stale-while-revalidate=86400");
    expect(originFetch).not.toHaveBeenCalled();
  });
});
