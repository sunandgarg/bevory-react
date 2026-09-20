import { afterEach, describe, expect, it, vi } from "vitest";
import { proxyMediaRequest } from "./[[path]].js";

const env = {
  API_ORIGIN: "https://api.bevory.in",
  ORIGIN_VERIFY_SECRET: "origin-secret",
};
const mediaUrl = "https://bevory.in/media/migrated-images/table/record/0123456789abcdefabcd.jpg";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("Cloudflare media proxy", () => {
  it("serves a full cache hit without contacting the origin", async () => {
    const cache = {
      match: vi.fn(async () => new Response("cached", {
        status: 200,
        headers: {
          ETag: '"cached-etag"',
          "Content-Type": "text/html",
          "Set-Cookie": "should-not-leak=1",
        },
      })),
      put: vi.fn(),
    };
    const originFetch = vi.fn();
    vi.stubGlobal("caches", { default: cache });
    vi.stubGlobal("fetch", originFetch);

    const response = await proxyMediaRequest(new Request(mediaUrl), env, vi.fn());

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("cached");
    expect(response.headers.get("x-bevory-cache")).toBe("HIT");
    expect(response.headers.get("cache-control")).toBe("public, max-age=31536000, s-maxage=31536000, immutable");
    expect(response.headers.get("content-type")).toBe("image/jpeg");
    expect(response.headers.get("set-cookie")).toBeNull();
    expect(originFetch).not.toHaveBeenCalled();
    expect(cache.put).not.toHaveBeenCalled();
  });

  it("normalizes migrated query variants to one cache key", async () => {
    const cache = {
      match: vi.fn(async () => undefined),
      put: vi.fn(async () => undefined),
    };
    const originFetch = vi.fn(async (_url: string) => new Response("origin", {
      status: 200,
      headers: { "Content-Type": "image/jpeg", "Content-Length": "6" },
    }));
    const deferred: Promise<unknown>[] = [];
    vi.stubGlobal("caches", { default: cache });
    vi.stubGlobal("fetch", originFetch);

    const variants = [`${mediaUrl}?ignored=1`, `${mediaUrl}?ignored=2&anything=yes`];
    const responses = await Promise.all(variants.map((url) => proxyMediaRequest(
      new Request(url),
      env,
      (promise: Promise<unknown>) => deferred.push(promise),
    )));
    await Promise.all(deferred);

    expect(responses.every((response) => response.status === 200)).toBe(true);
    expect(responses.every((response) => response.headers.get("cache-control")?.includes("immutable"))).toBe(true);
    expect(cache.match).toHaveBeenCalledTimes(2);
    expect(cache.put).toHaveBeenCalledTimes(2);
    expect(cache.match.mock.calls.map(([key]) => (key as Request).url)).toEqual([mediaUrl, mediaUrl]);
    expect(cache.put.mock.calls.map(([key]) => (key as Request).url)).toEqual([mediaUrl, mediaUrl]);
    expect(originFetch.mock.calls.map(([url]) => url)).toEqual(
      variants.map((url) => url.replace("https://bevory.in", "https://api.bevory.in")),
    );
  });

  it("bypasses cache for ranges and forwards only safe validators", async () => {
    const cache = { match: vi.fn(), put: vi.fn() };
    const originFetch = vi.fn(async () => new Response("part", {
      status: 206,
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Range": "bytes 0-3/10",
        "Content-Length": "4",
        "Set-Cookie": "should-not-leak=1",
      },
    }));
    vi.stubGlobal("caches", { default: cache });
    vi.stubGlobal("fetch", originFetch);
    const request = new Request(mediaUrl, {
      headers: {
        Range: "bytes=0-3",
        "If-None-Match": '"media-etag"',
        Cookie: "session=private",
        Authorization: "Bearer private",
      },
    });

    const response = await proxyMediaRequest(request, env, vi.fn());

    expect(response.status).toBe(206);
    expect(await response.text()).toBe("part");
    expect(response.headers.get("x-bevory-cache")).toBe("MISS");
    expect(response.headers.get("set-cookie")).toBeNull();
    expect(cache.match).not.toHaveBeenCalled();
    expect(cache.put).not.toHaveBeenCalled();
    const [originUrl, init] = originFetch.mock.calls[0];
    const headers = new Headers(init?.headers);
    expect(originUrl).toBe(mediaUrl.replace("https://bevory.in", "https://api.bevory.in"));
    expect(headers.get("range")).toBe("bytes=0-3");
    expect(headers.get("if-none-match")).toBe('"media-etag"');
    expect(headers.get("x-bevory-origin-verify")).toBe("origin-secret");
    expect(headers.get("cookie")).toBeNull();
    expect(headers.get("authorization")).toBeNull();
  });

  it("drops Range and returns a complete 200 when If-Range is present", async () => {
    const cache = { match: vi.fn(), put: vi.fn() };
    const originFetch = vi.fn(async (_url: string, init?: RequestInit) => {
      const headers = new Headers(init?.headers);
      expect(headers.get("range")).toBeNull();
      expect(headers.get("if-range")).toBe('"possibly-stale-etag"');
      return new Response("complete", {
        status: 200,
        headers: { "Content-Type": "text/html", "Content-Length": "8" },
      });
    });
    vi.stubGlobal("caches", { default: cache });
    vi.stubGlobal("fetch", originFetch);

    const response = await proxyMediaRequest(new Request(mediaUrl, {
      headers: { Range: "bytes=0-3", "If-Range": '"possibly-stale-etag"' },
    }), env, vi.fn());

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("complete");
    expect(response.headers.get("content-type")).toBe("image/jpeg");
    expect(cache.match).not.toHaveBeenCalled();
    expect(cache.put).not.toHaveBeenCalled();
  });

  it.each([
    ["If-Match", '"required-etag"'],
    ["If-Unmodified-Since", "Sun, 20 Sep 2026 00:00:00 GMT"],
  ])("bypasses cache and passes through 412 for %s", async (headerName, headerValue) => {
    const cache = { match: vi.fn(), put: vi.fn() };
    const originFetch = vi.fn(async (_url: string, init?: RequestInit) => {
      expect(new Headers(init?.headers).get(headerName)).toBe(headerValue);
      return new Response(null, { status: 412 });
    });
    vi.stubGlobal("caches", { default: cache });
    vi.stubGlobal("fetch", originFetch);

    const response = await proxyMediaRequest(new Request(mediaUrl, {
      headers: { [headerName]: headerValue },
    }), env, vi.fn());

    expect(response.status).toBe(412);
    expect(response.headers.get("x-bevory-cache")).toBe("MISS");
    expect(response.headers.get("cache-control")).toBe("private, no-store");
    expect(cache.match).not.toHaveBeenCalled();
    expect(cache.put).not.toHaveBeenCalled();
  });

  it.each([
    ["If-None-Match", '"current-etag"'],
    ["If-Modified-Since", "Sun, 20 Sep 2026 00:00:00 GMT"],
  ])("bypasses Cache API and passes through 304 for %s", async (headerName, headerValue) => {
    const cache = { match: vi.fn(), put: vi.fn() };
    const originFetch = vi.fn(async (_url: string, init?: RequestInit) => {
      expect(new Headers(init?.headers).get(headerName)).toBe(headerValue);
      return new Response(null, { status: 304, headers: { ETag: '"current-etag"' } });
    });
    vi.stubGlobal("caches", { default: cache });
    vi.stubGlobal("fetch", originFetch);

    const response = await proxyMediaRequest(new Request(mediaUrl, {
      headers: { [headerName]: headerValue },
    }), env, vi.fn());

    expect(response.status).toBe(304);
    expect(response.headers.get("x-bevory-cache")).toBe("MISS");
    expect(response.headers.get("cache-control")).toContain("immutable");
    expect(cache.match).not.toHaveBeenCalled();
    expect(cache.put).not.toHaveBeenCalled();
  });

  it("normalizes mutable query variants while retaining revalidation", async () => {
    const mutableUrl = "https://bevory.in/media/images/cocktails/owned-photo.jpg";
    const cache = {
      match: vi.fn(async () => undefined),
      put: vi.fn(async () => undefined),
    };
    const originFetch = vi.fn(async (_url: string) => new Response("mutable", {
      status: 200,
      headers: { "Content-Type": "text/html" },
    }));
    const deferred: Promise<unknown>[] = [];
    vi.stubGlobal("caches", { default: cache });
    vi.stubGlobal("fetch", originFetch);

    const variants = [`${mutableUrl}?version=1`, `${mutableUrl}?version=2&arbitrary=yes`];
    const responses = await Promise.all(variants.map((url) => proxyMediaRequest(
      new Request(url),
      env,
      (promise: Promise<unknown>) => deferred.push(promise),
    )));
    await Promise.all(deferred);

    expect(responses.every((response) => response.status === 200)).toBe(true);
    expect(responses.every((response) => (
      response.headers.get("cache-control") === "public, max-age=300, s-maxage=300, must-revalidate"
    ))).toBe(true);
    expect(responses.every((response) => response.headers.get("content-type") === "image/jpeg")).toBe(true);
    expect(cache.match.mock.calls.map(([key]) => (key as Request).url)).toEqual([mutableUrl, mutableUrl]);
    expect(cache.put.mock.calls.map(([key]) => (key as Request).url)).toEqual([mutableUrl, mutableUrl]);
    expect(originFetch.mock.calls.map(([url]) => url)).toEqual(
      variants.map((url) => url.replace("https://bevory.in", "https://api.bevory.in")),
    );
  });

  it("bypasses cache for HEAD while retaining immutable response headers", async () => {
    const cache = { match: vi.fn(), put: vi.fn() };
    const originFetch = vi.fn(async () => new Response(null, {
      status: 200,
      headers: { "Content-Length": "10", ETag: '"media-etag"' },
    }));
    vi.stubGlobal("caches", { default: cache });
    vi.stubGlobal("fetch", originFetch);

    const response = await proxyMediaRequest(new Request(mediaUrl, { method: "HEAD" }), env, vi.fn());

    expect(response.status).toBe(200);
    expect(response.headers.get("x-bevory-cache")).toBe("MISS");
    expect(response.headers.get("cache-control")).toContain("immutable");
    expect(cache.match).not.toHaveBeenCalled();
    expect(cache.put).not.toHaveBeenCalled();
  });
});
