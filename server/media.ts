import { timingSafeEqual } from "node:crypto";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import {
  GetObjectCommand,
  HeadObjectCommand,
  S3Client,
  type GetObjectCommandOutput,
  type HeadObjectCommandOutput,
} from "@aws-sdk/client-s3";
import type { RequestHandler } from "express";

const ONE_YEAR_SECONDS = 31_536_000;
const IMMUTABLE_CACHE_CONTROL = `public, max-age=${ONE_YEAR_SECONDS}, s-maxage=${ONE_YEAR_SECONDS}, immutable`;
const REVALIDATING_CACHE_CONTROL = "public, max-age=300, s-maxage=300, must-revalidate";
const MIGRATED_KEY = /^migrated-images\/[a-z0-9][a-z0-9-]{0,71}\/[a-z0-9][a-z0-9-]{0,71}\/[a-f0-9]{20}\.(?:jpg|png)$/;
const SAFE_UPLOAD_SEGMENT = "[A-Za-z0-9_-](?:[A-Za-z0-9._-]{0,126}[A-Za-z0-9_-])?";
const UPLOAD_KEY = new RegExp(`^images/(?:${SAFE_UPLOAD_SEGMENT}/)*${SAFE_UPLOAD_SEGMENT}\\.(?:jpg|jpeg|png)$`);

export type MediaMetadata = {
  contentLength?: number;
  contentRange?: string;
  etag?: string;
  lastModified?: Date;
  statusCode?: number;
};

export type MediaConditions = {
  ifMatch?: string;
  ifNoneMatch?: string;
  ifModifiedSince?: Date;
  ifUnmodifiedSince?: Date;
};

export type MediaObject = MediaMetadata & { body: Readable };

export interface MediaObjectStore {
  getObject(
    key: string,
    options: { range?: string; conditions: MediaConditions; signal: AbortSignal },
  ): Promise<MediaObject>;
  headObject(
    key: string,
    options: { conditions: MediaConditions; signal: AbortSignal },
  ): Promise<MediaMetadata>;
}

export const isAllowedMediaKey = (key: string) => {
  if (!key || key.length > 512 || key.includes("%") || key.includes("\\") || key.includes("\0")) return false;
  if (key.split("/").some((segment) => segment === "." || segment === "..")) return false;
  return MIGRATED_KEY.test(key) || UPLOAD_KEY.test(key);
};

export const mediaKeyFromRequestUrl = (originalUrl: string) => {
  const rawPath = originalUrl.split("?", 1)[0];
  if (!rawPath.startsWith("/media/")) return null;
  const key = rawPath.slice("/media/".length);
  return isAllowedMediaKey(key) ? key : null;
};

export const normalizeByteRange = (header: string | undefined) => {
  if (header === undefined) return undefined;
  const value = header.trim();
  const match = /^bytes=(\d*)-(\d*)$/.exec(value);
  if (!match || (!match[1] && !match[2])) return null;
  try {
    if (match[1] && match[2] && BigInt(match[1]) > BigInt(match[2])) return null;
    if (!match[1] && BigInt(match[2]) === 0n) return null;
  } catch {
    return null;
  }
  return value;
};

const httpDate = (value: string | undefined) => {
  if (!value) return undefined;
  const parsed = new Date(value);
  return Number.isNaN(parsed.valueOf()) ? undefined : parsed;
};

const requestConditions = (getHeader: (name: string) => string | undefined): MediaConditions => ({
  ifMatch: getHeader("if-match"),
  ifNoneMatch: getHeader("if-none-match"),
  ifModifiedSince: httpDate(getHeader("if-modified-since")),
  ifUnmodifiedSince: httpDate(getHeader("if-unmodified-since")),
});

const matchesSecret = (supplied: string, expected: string) => {
  const suppliedBuffer = Buffer.from(supplied);
  const expectedBuffer = Buffer.from(expected);
  return suppliedBuffer.length === expectedBuffer.length
    && timingSafeEqual(suppliedBuffer, expectedBuffer);
};

let memoizedS3Client: S3Client | undefined;

const configuredS3Client = () => {
  if (memoizedS3Client) return memoizedS3Client;
  const region = process.env.S3_REGION?.trim();
  if (!region) throw new Error("S3_REGION is not configured");
  const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim();
  if (Boolean(accessKeyId) !== Boolean(secretAccessKey)) {
    throw new Error("S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY must be provided together");
  }
  memoizedS3Client = new S3Client({
    region,
    endpoint: process.env.S3_ENDPOINT?.trim() || undefined,
    forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
    credentials: accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined,
  });
  return memoizedS3Client;
};

const configuredBucket = () => {
  const bucket = process.env.S3_BUCKET?.trim();
  if (!bucket) throw new Error("S3_BUCKET is not configured");
  return bucket;
};

const metadataFromOutput = (output: GetObjectCommandOutput | HeadObjectCommandOutput): MediaMetadata => ({
  contentLength: output.ContentLength,
  contentRange: "ContentRange" in output ? output.ContentRange : undefined,
  etag: output.ETag,
  lastModified: output.LastModified,
  statusCode: output.$metadata.httpStatusCode,
});

const commandConditions = (conditions: MediaConditions) => ({
  IfMatch: conditions.ifMatch,
  IfNoneMatch: conditions.ifNoneMatch,
  IfModifiedSince: conditions.ifModifiedSince,
  IfUnmodifiedSince: conditions.ifUnmodifiedSince,
});

const defaultMediaStore: MediaObjectStore = {
  async getObject(key, { range, conditions, signal }) {
    const output = await configuredS3Client().send(new GetObjectCommand({
      Bucket: configuredBucket(),
      Key: key,
      Range: range,
      ...commandConditions(conditions),
    }), { abortSignal: signal });
    if (!output.Body || typeof (output.Body as Readable).pipe !== "function") {
      throw new Error("S3 returned an unreadable media body");
    }
    return { ...metadataFromOutput(output), body: output.Body as Readable };
  },
  async headObject(key, { conditions, signal }) {
    const output = await configuredS3Client().send(new HeadObjectCommand({
      Bucket: configuredBucket(),
      Key: key,
      ...commandConditions(conditions),
    }), { abortSignal: signal });
    return metadataFromOutput(output);
  },
};

const applyResponseHeaders = (
  res: Parameters<RequestHandler>[1],
  key: string,
  metadata: MediaMetadata,
) => {
  res.setHeader("Accept-Ranges", "bytes");
  res.setHeader(
    "Cache-Control",
    key.startsWith("migrated-images/") ? IMMUTABLE_CACHE_CONTROL : REVALIDATING_CACHE_CONTROL,
  );
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.removeHeader("Set-Cookie");
  res.setHeader("Content-Type", key.endsWith(".png") ? "image/png" : "image/jpeg");
  if (metadata.contentLength !== undefined) res.setHeader("Content-Length", String(metadata.contentLength));
  if (metadata.contentRange) res.setHeader("Content-Range", metadata.contentRange);
  if (metadata.etag) res.setHeader("ETag", metadata.etag);
  if (metadata.lastModified) res.setHeader("Last-Modified", metadata.lastModified.toUTCString());
};

const applyErrorHeaders = (res: Parameters<RequestHandler>[1]) => {
  res.setHeader("Accept-Ranges", "bytes");
  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.removeHeader("Set-Cookie");
};

const upstreamErrorStatus = (error: unknown) => {
  const candidate = error as { name?: string; $metadata?: { httpStatusCode?: number } };
  const upstreamStatus = candidate?.$metadata?.httpStatusCode;
  if (upstreamStatus === 404 || candidate?.name === "NoSuchKey" || candidate?.name === "NotFound") return 404;
  if (upstreamStatus === 416 || candidate?.name === "InvalidRange") return 416;
  if (upstreamStatus === 304 || upstreamStatus === 412) return upstreamStatus;
  return 502;
};

export const createMediaHandler = (options: {
  store?: MediaObjectStore;
  production?: boolean;
  originVerifySecret?: string;
} = {}): RequestHandler => {
  const store = options.store || defaultMediaStore;
  const production = options.production ?? process.env.NODE_ENV === "production";
  const originVerifySecret = options.originVerifySecret ?? process.env.ORIGIN_VERIFY_SECRET?.trim();

  return async (req, res) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      applyErrorHeaders(res);
      res.setHeader("Allow", "GET, HEAD");
      res.status(405).end();
      return;
    }

    if (production) {
      if (!originVerifySecret) {
        applyErrorHeaders(res);
        res.status(503).end();
        return;
      }
      if (!matchesSecret(req.get("x-bevory-origin-verify") || "", originVerifySecret)) {
        applyErrorHeaders(res);
        res.status(404).end();
        return;
      }
    }

    const key = mediaKeyFromRequestUrl(req.originalUrl);
    if (!key) {
      applyErrorHeaders(res);
      res.status(404).end();
      return;
    }

    const requestedRange = normalizeByteRange(req.get("range"));
    if (requestedRange === null) {
      applyErrorHeaders(res);
      res.status(416).end();
      return;
    }
    // The object URLs are stable, but without evaluating If-Range against S3
    // metadata the only safe response is the complete representation.
    const range = req.get("if-range") ? undefined : requestedRange;

    const abortController = new AbortController();
    const abortUpstream = () => abortController.abort();
    req.once("aborted", abortUpstream);
    res.once("close", abortUpstream);

    try {
      const conditions = requestConditions((name) => req.get(name));
      if (req.method === "HEAD") {
        const metadata = await store.headObject(key, { conditions, signal: abortController.signal });
        applyResponseHeaders(res, key, metadata);
        res.status(200).end();
        return;
      }

      const object = await store.getObject(key, { range, conditions, signal: abortController.signal });
      applyResponseHeaders(res, key, object);
      res.status(object.statusCode === 206 || object.contentRange ? 206 : 200);
      await pipeline(object.body, res);
    } catch (error) {
      if (abortController.signal.aborted || res.destroyed) return;
      if (res.headersSent) {
        res.destroy(error instanceof Error ? error : undefined);
        return;
      }
      applyErrorHeaders(res);
      res.status(upstreamErrorStatus(error)).end();
    } finally {
      req.off("aborted", abortUpstream);
      res.off("close", abortUpstream);
    }
  };
};
