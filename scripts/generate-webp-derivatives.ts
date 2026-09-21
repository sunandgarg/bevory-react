import "dotenv/config";
import { createHash } from "node:crypto";
import {
  GetObjectCommand,
  HeadObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import sharp from "sharp";

const apply = process.argv.includes("--apply");
const quality = 95;
const concurrency = Math.max(1, Math.min(8, Number(process.env.WEBP_CONCURRENCY || 4)));
const bucket = process.env.S3_BUCKET?.trim() || "bevory-uploads-091199627263-ap-south-1";
const region = process.env.S3_REGION?.trim() || "ap-south-1";
const immutableCacheControl = "public, max-age=31536000, immutable";
const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim();
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim();
if (Boolean(accessKeyId) !== Boolean(secretAccessKey)) throw new Error("Both S3 access-key variables are required together");

const s3 = new S3Client({
  region,
  credentials: accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined,
});

type SourceObject = { key: string; size: number; etag: string };
type DerivativeResult = SourceObject & {
  targetKey: string;
  outputBytes?: number;
  width?: number;
  height?: number;
  status: "created" | "existing" | "planned" | "failed";
  error?: string;
};

const targetKeyFor = (key: string) => key.replace(/\.(?:jpe?g|png)$/i, ".webp");

const bodyBuffer = async (body: unknown) => {
  if (!body || typeof (body as { transformToByteArray?: unknown }).transformToByteArray !== "function") {
    throw new Error("S3 returned an unreadable object body");
  }
  return Buffer.from(await (body as { transformToByteArray: () => Promise<Uint8Array> }).transformToByteArray());
};

const listSources = async () => {
  const results: SourceObject[] = [];
  let continuationToken: string | undefined;
  do {
    const page = await s3.send(new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: "migrated-images/",
      ContinuationToken: continuationToken,
    }));
    for (const item of page.Contents ?? []) {
      if (!item.Key || !/\.(?:jpe?g|png)$/i.test(item.Key)) continue;
      results.push({ key: item.Key, size: Number(item.Size ?? 0), etag: String(item.ETag ?? "").replace(/"/g, "") });
    }
    continuationToken = page.NextContinuationToken;
  } while (continuationToken);
  return results;
};

const existingDerivative = async (source: SourceObject, targetKey: string) => {
  try {
    const head = await s3.send(new HeadObjectCommand({ Bucket: bucket, Key: targetKey }));
    return head.ContentType === "image/webp"
      && head.CacheControl === immutableCacheControl
      && head.Metadata?.["derivative-version"] === "1"
      && head.Metadata?.["source-key-sha256"] === createHash("sha256").update(source.key).digest("hex")
      && head.Metadata?.["webp-quality"] === String(quality)
      ? head
      : null;
  } catch (error) {
    const status = (error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode;
    if (status === 404) return null;
    throw error;
  }
};

const convert = async (source: SourceObject): Promise<DerivativeResult> => {
  const targetKey = targetKeyFor(source.key);
  try {
    const existing = await existingDerivative(source, targetKey);
    if (existing) {
      return {
        ...source,
        targetKey,
        outputBytes: Number(existing.ContentLength ?? 0),
        width: Number(existing.Metadata?.["output-width"] ?? 0) || undefined,
        height: Number(existing.Metadata?.["output-height"] ?? 0) || undefined,
        status: "existing",
      };
    }
    if (!apply) return { ...source, targetKey, status: "planned" };

    const object = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: source.key }));
    const input = await bodyBuffer(object.Body);
    const converted = await sharp(input, { animated: false, limitInputPixels: 60_000_000 })
      .rotate()
      .toColorspace("srgb")
      .webp({ quality, alphaQuality: 100, smartSubsample: true, effort: 4 })
      .toBuffer({ resolveWithObject: true });
    await s3.send(new PutObjectCommand({
      Bucket: bucket,
      Key: targetKey,
      Body: converted.data,
      ContentType: "image/webp",
      CacheControl: immutableCacheControl,
      Metadata: {
        "derivative-version": "1",
        "source-key-sha256": createHash("sha256").update(source.key).digest("hex"),
        "source-etag": source.etag,
        "webp-quality": String(quality),
        "output-width": String(converted.info.width),
        "output-height": String(converted.info.height),
        "original-retained": "true",
      },
    }));
    return {
      ...source,
      targetKey,
      outputBytes: converted.data.length,
      width: converted.info.width,
      height: converted.info.height,
      status: "created",
    };
  } catch (error) {
    return { ...source, targetKey, status: "failed", error: error instanceof Error ? error.message : String(error) };
  }
};

const pool = async (sources: SourceObject[]) => {
  const results = new Array<DerivativeResult>(sources.length);
  let next = 0;
  let completed = 0;
  await Promise.all(Array.from({ length: concurrency }, async () => {
    while (next < sources.length) {
      const index = next++;
      results[index] = await convert(sources[index]);
      completed++;
      if (completed % 50 === 0 || completed === sources.length) {
        console.log(`Processed ${completed}/${sources.length} S3 masters`);
      }
    }
  }));
  return results;
};

const sources = await listSources();
const results = await pool(sources);
const failures = results.filter((result) => result.status === "failed");
const manifest = {
  version: 1,
  generatedAt: new Date().toISOString(),
  mode: apply ? "apply" : "dry-run",
  bucket,
  region,
  format: "webp",
  quality,
  originalsRetained: true,
  sourceCount: sources.length,
  created: results.filter((result) => result.status === "created").length,
  existing: results.filter((result) => result.status === "existing").length,
  planned: results.filter((result) => result.status === "planned").length,
  failures: failures.length,
  sourceBytes: results.reduce((sum, result) => sum + result.size, 0),
  outputBytes: results.reduce((sum, result) => sum + Number(result.outputBytes ?? 0), 0),
  assets: results,
};

let manifestKey: string | null = null;
if (apply) {
  manifestKey = `migration-manifests/webp-q95-${manifest.generatedAt.replace(/[:.]/g, "-")}.json`;
  await s3.send(new PutObjectCommand({
    Bucket: bucket,
    Key: manifestKey,
    Body: JSON.stringify(manifest, null, 2),
    ContentType: "application/json",
    CacheControl: "private, no-store",
  }));
}
console.log(JSON.stringify({ ...manifest, assets: undefined, manifestKey }, null, 2));
if (failures.length) {
  console.error(JSON.stringify({ failures: failures.slice(0, 30) }, null, 2));
  process.exitCode = 1;
}
