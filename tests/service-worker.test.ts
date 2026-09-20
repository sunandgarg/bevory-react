import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it, vi } from "vitest";

const workerSource = readFileSync(new URL("../public/sw.js", import.meta.url), "utf8");
const migratedUrl = "https://bevory.in/media/migrated-images/table/record/0123456789abcdefabcd.jpg";
const mutableUrl = "https://bevory.in/media/images/cocktails/owned-photo.jpg";
const uploadUrl = "https://bevory.in/uploads/legacy-photo.jpg";

type WorkerFetchEvent = {
  request: Request;
  respondWith: ReturnType<typeof vi.fn>;
  waitUntil: ReturnType<typeof vi.fn>;
};

const loadWorker = (options: {
  cached?: Response;
  cachePut?: (key: Request, response: Response) => Promise<void>;
  network: () => Response;
}) => {
  const listeners = new Map<string, (event: WorkerFetchEvent) => void>();
  const cache = {
    addAll: vi.fn(async () => undefined),
    delete: vi.fn(async () => true),
    keys: vi.fn(async () => []),
    match: vi.fn(async () => options.cached?.clone()),
    put: vi.fn(async (key: Request, response: Response) => {
      if (response.status === 206) throw new TypeError("Cache Storage rejects partial responses");
      if (options.cachePut) await options.cachePut(key, response);
    }),
  };
  const cacheStorage = {
    delete: vi.fn(async () => true),
    keys: vi.fn(async () => []),
    open: vi.fn(async () => cache),
  };
  const networkFetch = vi.fn(async () => options.network());
  const scope = {
    addEventListener: vi.fn((type: string, listener: (event: WorkerFetchEvent) => void) => {
      listeners.set(type, listener);
    }),
    clients: { claim: vi.fn() },
    location: { origin: "https://bevory.in" },
    skipWaiting: vi.fn(),
  };

  runInNewContext(workerSource, {
    Date,
    Headers,
    JSON,
    Promise,
    Request,
    Response,
    URL,
    caches: cacheStorage,
    fetch: networkFetch,
    parseInt,
    self: scope,
  });

  const fetchHandler = listeners.get("fetch");
  if (!fetchHandler) throw new Error("Service worker did not register a fetch handler");

  const startDispatch = (request: Request) => {
    let intercepted: Promise<Response> | undefined;
    const event: WorkerFetchEvent = {
      request,
      respondWith: vi.fn((response: Response | Promise<Response>) => {
        intercepted = Promise.resolve(response);
      }),
      waitUntil: vi.fn(),
    };
    fetchHandler(event);
    const response = intercepted || networkFetch(request);
    return { event, response };
  };

  const dispatch = async (request: Request) => {
    const started = startDispatch(request);
    return { event: started.event, response: await started.response };
  };

  return { cache, cacheStorage, dispatch, networkFetch, startDispatch };
};

describe("media service-worker passthrough", () => {
  it.each([
    ["https://bevory.in/gurgaon", "document"],
    ["https://bevory.in/assets/index-current.js", "script"],
    ["https://bevory.in/assets/index-current.css", "style"],
  ])("leaves %s to the HTTP cache instead of serving a stale shell", async (url, destination) => {
    const worker = loadWorker({
      cached: new Response("stale", { status: 200 }),
      network: () => new Response("fresh", { status: 200 }),
    });
    const request = new Request(url);
    Object.defineProperty(request, "destination", { value: destination });

    const { event, response } = await worker.dispatch(request);

    expect(event.respondWith).not.toHaveBeenCalled();
    expect(await response.text()).toBe("fresh");
    expect(worker.cache.match).not.toHaveBeenCalled();
  });

  it("leaves a cold Range request to the network and preserves its 206", async () => {
    const worker = loadWorker({
      network: () => new Response("part", {
        status: 206,
        headers: { "Content-Range": "bytes 0-3/10" },
      }),
    });

    const { event, response } = await worker.dispatch(new Request(migratedUrl, {
      headers: { Range: "bytes=0-3" },
    }));

    expect(event.respondWith).not.toHaveBeenCalled();
    expect(response.status).toBe(206);
    expect(await response.text()).toBe("part");
    expect(worker.cacheStorage.open).not.toHaveBeenCalled();
    expect(worker.cache.put).not.toHaveBeenCalled();
  });

  it.each([mutableUrl, uploadUrl])("does not replace a warm Range request for %s", async (url) => {
    const worker = loadWorker({
      cached: new Response("full", { status: 200 }),
      network: () => new Response("part", {
        status: 206,
        headers: { "Content-Range": "bytes 4-7/10" },
      }),
    });

    const { event, response } = await worker.dispatch(new Request(url, {
      headers: { Range: "bytes=4-7" },
    }));

    expect(event.respondWith).not.toHaveBeenCalled();
    expect(response.status).toBe(206);
    expect(await response.text()).toBe("part");
    expect(worker.cache.match).not.toHaveBeenCalled();
    expect(worker.cache.put).not.toHaveBeenCalled();
  });

  it.each([
    ["If-Range", '"possibly-stale"', 200],
    ["If-Match", '"required"', 412],
    ["If-None-Match", '"current"', 304],
    ["If-Modified-Since", "Sun, 20 Sep 2026 00:00:00 GMT", 304],
    ["If-Unmodified-Since", "Sun, 20 Sep 2026 00:00:00 GMT", 412],
  ])("bypasses a warm cache for %s", async (header, value, status) => {
    const worker = loadWorker({
      cached: new Response("full", { status: 200 }),
      network: () => new Response(status === 200 ? "network" : null, { status }),
    });

    const { event, response } = await worker.dispatch(new Request(migratedUrl, {
      headers: { [header]: value },
    }));

    expect(event.respondWith).not.toHaveBeenCalled();
    expect(response.status).toBe(status);
    expect(worker.networkFetch).toHaveBeenCalledOnce();
    expect(worker.cache.match).not.toHaveBeenCalled();
    expect(worker.cache.put).not.toHaveBeenCalled();
  });

  it("still intercepts and caches an ordinary media GET", async () => {
    const worker = loadWorker({
      network: () => new Response("full", { status: 200 }),
    });

    const { event, response } = await worker.dispatch(new Request(migratedUrl));

    expect(event.respondWith).toHaveBeenCalledOnce();
    expect(response.status).toBe(200);
    expect(worker.cacheStorage.open).toHaveBeenCalledOnce();
    expect(worker.cache.match).toHaveBeenCalledOnce();
    expect(worker.cache.put).toHaveBeenCalledOnce();
  });

  it("returns a successful immutable response when its cache write fails", async () => {
    const worker = loadWorker({
      cachePut: async () => {
        throw new Error("quota exceeded");
      },
      network: () => new Response("fresh", { status: 200 }),
    });

    const started = worker.startDispatch(new Request(migratedUrl));
    const response = await started.response;
    const lifetimePromise = started.event.waitUntil.mock.calls[0][0] as Promise<void>;

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("fresh");
    await expect(lifetimePromise).resolves.toBeUndefined();
  });

  it("keeps waitUntil pending through a delayed mutable cache write", async () => {
    let finishWrite = () => undefined;
    let markWriteStarted = () => undefined;
    const delayedWrite = new Promise<void>((resolve) => {
      finishWrite = resolve;
    });
    const writeStarted = new Promise<void>((resolve) => {
      markWriteStarted = resolve;
    });
    const worker = loadWorker({
      cachePut: async () => {
        markWriteStarted();
        await delayedWrite;
      },
      network: () => new Response("fresh", { status: 200 }),
    });

    const started = worker.startDispatch(new Request(mutableUrl));
    let responseSettled = false;
    const responsePromise = started.response.then((response) => {
      responseSettled = true;
      return response;
    });
    await writeStarted;
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(started.event.waitUntil).toHaveBeenCalledOnce();
    const lifetimePromise = started.event.waitUntil.mock.calls[0][0] as Promise<void>;
    let lifetimeSettled = false;
    void lifetimePromise.then(() => {
      lifetimeSettled = true;
    });
    await Promise.resolve();
    const responseSettledBeforeWrite = responseSettled;
    const lifetimeSettledBeforeWrite = lifetimeSettled;

    finishWrite();
    const [response] = await Promise.all([responsePromise, lifetimePromise]);
    expect(responseSettledBeforeWrite).toBe(true);
    expect(lifetimeSettledBeforeWrite).toBe(false);
    expect(await response.text()).toBe("fresh");
    expect(lifetimeSettled).toBe(true);
  });

  it("does not fail a response when the mutable cache write fails", async () => {
    const worker = loadWorker({
      cachePut: async () => {
        throw new Error("quota exceeded");
      },
      network: () => new Response("fresh", { status: 200 }),
    });

    const started = worker.startDispatch(new Request(mutableUrl));
    const response = await started.response;
    const lifetimePromise = started.event.waitUntil.mock.calls[0][0] as Promise<void>;

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("fresh");
    await expect(lifetimePromise).resolves.toBeUndefined();
  });
});
