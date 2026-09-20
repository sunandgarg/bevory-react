import { EventEmitter, once } from "node:events";
import { Readable, Writable } from "node:stream";
import type { RequestHandler } from "express";
import { describe, expect, it, vi } from "vitest";
import {
  createMediaHandler,
  isAllowedMediaKey,
  mediaKeyFromRequestUrl,
  normalizeByteRange,
  type MediaObjectStore,
} from "./media.js";

const migratedKey = "migrated-images/content-records/record-123/0123456789abcdefabcd.jpg";
const uploadKey = "images/cocktails/1723456789-owned-photo.png";

const createStore = (): MediaObjectStore => ({
  getObject: vi.fn(async () => ({
    body: Readable.from(["test"]),
    contentLength: 4,
    etag: '"media-etag"',
    lastModified: new Date("2026-09-20T00:00:00.000Z"),
    statusCode: 200,
  })),
  headObject: vi.fn(async () => ({
    contentLength: 4,
    etag: '"media-etag"',
    lastModified: new Date("2026-09-20T00:00:00.000Z"),
    statusCode: 200,
  })),
});

class TestRequest extends EventEmitter {
  constructor(
    readonly method: string,
    readonly originalUrl: string,
    private readonly headers: Record<string, string> = {},
  ) {
    super();
  }

  get(name: string) {
    return this.headers[name.toLowerCase()];
  }
}

class TestResponse extends Writable {
  statusCode = 200;
  headersSent = false;
  private readonly headers = new Map<string, string>();
  private readonly chunks: Buffer[] = [];

  status(code: number) {
    this.statusCode = code;
    return this;
  }

  setHeader(name: string, value: string | number | readonly string[]) {
    this.headers.set(name.toLowerCase(), Array.isArray(value) ? value.join(", ") : String(value));
    return this;
  }

  getHeader(name: string) {
    return this.headers.get(name.toLowerCase());
  }

  removeHeader(name: string) {
    this.headers.delete(name.toLowerCase());
  }

  text() {
    return Buffer.concat(this.chunks).toString("utf8");
  }

  override _write(chunk: Buffer | string, _encoding: BufferEncoding, callback: (error?: Error | null) => void) {
    this.headersSent = true;
    this.chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    callback();
  }

  override _final(callback: (error?: Error | null) => void) {
    this.headersSent = true;
    callback();
  }
}

const invokeHandler = async (
  handler: RequestHandler,
  options: { method?: string; url?: string; headers?: Record<string, string> } = {},
) => {
  const request = new TestRequest(
    options.method || "GET",
    options.url || `/media/${migratedKey}`,
    Object.fromEntries(Object.entries(options.headers || {}).map(([name, value]) => [name.toLowerCase(), value])),
  );
  const response = new TestResponse();
  await Promise.resolve(handler(request as never, response as never, vi.fn()));
  if (!response.writableFinished && !response.destroyed) await once(response, "finish");
  return response;
};

describe("media key policy", () => {
  it.each([
    migratedKey,
    "migrated-images/a/b/ffffffffffffffffffff.png",
    `migrated-images/${`a${"b".repeat(70)}-`}/${`c${"d".repeat(70)}-`}/0123456789abcdefabcd.jpg`,
    uploadKey,
    "images/Brands/nested/owned.photo-2.jpeg",
  ])("allows %s", (key) => {
    expect(isAllowedMediaKey(key)).toBe(true);
  });

  it.each([
    "manifest.json",
    "manifests/migration.json",
    "backups/media.jpg",
    "other/image.jpg",
    "migrated-images/a/b/0123456789abcdefabcd.webp",
    "migrated-images/a/b/0123456789abcdefabc.jpg",
    "migrated-images/a/b/0123456789abcdefabcD.jpg",
    "images/../private.jpg",
    "images/%2e%2e/private.jpg",
    "images/folder%2Fphoto.jpg",
    "images/folder%5Cphoto.jpg",
    "images/photo%00.jpg",
    "images/.hidden.jpg",
    "images/photo.webp",
  ])("rejects %s", (key) => {
    expect(isAllowedMediaKey(key)).toBe(false);
  });

  it("extracts only an allowlisted raw /media path", () => {
    expect(mediaKeyFromRequestUrl(`/media/${uploadKey}?v=1`)).toBe(uploadKey);
    expect(mediaKeyFromRequestUrl("/media/images/%2e%2e/private.jpg")).toBeNull();
    expect(mediaKeyFromRequestUrl(`/not-media/${uploadKey}`)).toBeNull();
  });
});

describe("media byte ranges", () => {
  it.each([
    [undefined, undefined],
    ["bytes=0-499", "bytes=0-499"],
    ["bytes=500-", "bytes=500-"],
    ["bytes=-500", "bytes=-500"],
    ["bytes=0-0", "bytes=0-0"],
  ])("normalizes %s", (input, expected) => {
    expect(normalizeByteRange(input)).toBe(expected);
  });

  it.each([
    "bytes=0-1,4-5",
    "items=0-1",
    "bytes=-",
    "bytes=9-2",
    "bytes=-0",
  ])("rejects %s", (input) => {
    expect(normalizeByteRange(input)).toBeNull();
  });
});

describe("media handler", () => {
  it("streams a full GET with immutable image headers", async () => {
    const store = createStore();
    const response = await invokeHandler(createMediaHandler({ store, production: false }));
    expect(response.statusCode).toBe(200);
    expect(response.text()).toBe("test");
    expect(response.getHeader("content-type")).toBe("image/jpeg");
    expect(response.getHeader("content-length")).toBe("4");
    expect(response.getHeader("etag")).toBe('"media-etag"');
    expect(response.getHeader("last-modified")).toBe("Sun, 20 Sep 2026 00:00:00 GMT");
    expect(response.getHeader("accept-ranges")).toBe("bytes");
    expect(response.getHeader("cache-control")).toBe("public, max-age=31536000, s-maxage=31536000, immutable");
    expect(response.getHeader("x-content-type-options")).toBe("nosniff");
    expect(response.getHeader("set-cookie")).toBeUndefined();
    expect(store.getObject).toHaveBeenCalledOnce();
    expect(store.headObject).not.toHaveBeenCalled();
  });

  it("derives the image type from the allowlisted extension, never S3 metadata", async () => {
    const store = createStore();
    vi.mocked(store.getObject).mockResolvedValueOnce(Object.assign({
      body: Readable.from(["safe"]),
      contentLength: 4,
      statusCode: 200,
    }, {
      contentType: "text/html",
    }));
    const response = await invokeHandler(createMediaHandler({ store, production: false }));
    expect(response.statusCode).toBe(200);
    expect(response.getHeader("content-type")).toBe("image/jpeg");
    expect(response.getHeader("x-content-type-options")).toBe("nosniff");
  });

  it("uses HeadObject and sends no body for HEAD", async () => {
    const store = createStore();
    const response = await invokeHandler(createMediaHandler({ store, production: false }), {
      method: "HEAD",
      url: `/media/${uploadKey}`,
    });
    expect(response.statusCode).toBe(200);
    expect(response.text()).toBe("");
    expect(response.getHeader("content-type")).toBe("image/png");
    expect(response.getHeader("content-length")).toBe("4");
    expect(response.getHeader("cache-control")).toBe("public, max-age=300, s-maxage=300, must-revalidate");
    expect(store.headObject).toHaveBeenCalledOnce();
    expect(store.getObject).not.toHaveBeenCalled();
  });

  it("forwards one valid range and maps the S3 response to 206", async () => {
    const store = createStore();
    vi.mocked(store.getObject).mockResolvedValueOnce({
      body: Readable.from(["part"]),
      contentLength: 4,
      contentRange: "bytes 0-3/10",
      statusCode: 206,
    });
    const response = await invokeHandler(createMediaHandler({ store, production: false }), {
      headers: { Range: "bytes=0-3" },
    });
    expect(response.statusCode).toBe(206);
    expect(response.text()).toBe("part");
    expect(response.getHeader("content-range")).toBe("bytes 0-3/10");
    expect(response.getHeader("content-length")).toBe("4");
    expect(store.getObject).toHaveBeenCalledWith(migratedKey, expect.objectContaining({ range: "bytes=0-3" }));
  });

  it("returns the complete object when If-Range cannot be evaluated safely", async () => {
    const store = createStore();
    const response = await invokeHandler(createMediaHandler({ store, production: false }), {
      headers: { Range: "bytes=0-3", "If-Range": '"stale-etag"' },
    });
    expect(response.statusCode).toBe(200);
    expect(response.text()).toBe("test");
    expect(store.getObject).toHaveBeenCalledWith(migratedKey, expect.objectContaining({ range: undefined }));
  });

  it("rejects invalid or multiple ranges before S3", async () => {
    const store = createStore();
    const response = await invokeHandler(createMediaHandler({ store, production: false }), {
      headers: { Range: "bytes=0-1,4-5" },
    });
    expect(response.statusCode).toBe(416);
    expect(response.getHeader("cache-control")).toBe("private, no-store");
    expect(store.getObject).not.toHaveBeenCalled();
    expect(store.headObject).not.toHaveBeenCalled();
  });

  it("returns 405 for methods other than GET and HEAD", async () => {
    const store = createStore();
    const response = await invokeHandler(createMediaHandler({ store, production: false }), { method: "POST" });
    expect(response.statusCode).toBe(405);
    expect(response.getHeader("allow")).toBe("GET, HEAD");
    expect(store.getObject).not.toHaveBeenCalled();
    expect(store.headObject).not.toHaveBeenCalled();
  });

  it("rejects disallowed prefixes before S3", async () => {
    const store = createStore();
    const handler = createMediaHandler({ store, production: false });
    for (const url of [
      "/media/backups/private.jpg",
      "/media/manifests/private.jpg",
      "/media/images/../private.jpg",
      "/media/images/%2e%2e/private.jpg",
      "/media/images/folder%5cprivate.jpg",
      "/media/images/photo%00.jpg",
    ]) {
      expect((await invokeHandler(handler, { url })).statusCode).toBe(404);
    }
    expect(store.getObject).not.toHaveBeenCalled();
    expect(store.headObject).not.toHaveBeenCalled();
  });

  it.each([
    [404, 404],
    [416, 416],
    [412, 412],
    [403, 502],
    [500, 502],
  ])("maps an upstream %i to %i", async (upstream, expected) => {
    const store = createStore();
    vi.mocked(store.getObject).mockRejectedValueOnce(Object.assign(new Error("S3 error"), {
      $metadata: { httpStatusCode: upstream },
    }));
    const response = await invokeHandler(createMediaHandler({ store, production: false }));
    expect(response.statusCode).toBe(expected);
    expect(response.getHeader("cache-control")).toBe("private, no-store");
  });

  it("requires the timing-safe origin secret in production", async () => {
    const store = createStore();
    const handler = createMediaHandler({ store, production: true, originVerifySecret: "edge-secret" });
    expect((await invokeHandler(handler)).statusCode).toBe(404);
    const response = await invokeHandler(handler, {
      headers: { "x-bevory-origin-verify": "edge-secret" },
    });
    expect(response.statusCode).toBe(200);
    expect(store.getObject).toHaveBeenCalledOnce();
  });
});
