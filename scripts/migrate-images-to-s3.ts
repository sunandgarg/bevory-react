import "dotenv/config";
import { createHash } from "node:crypto";
import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { HeadObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Prisma, PrismaClient } from "@prisma/client";
import sharp from "sharp";
import {
  applyImageTargets,
  collectImageTargets,
  imageObjectKey,
  imageObjectKeyCandidates,
  publicObjectUrl,
  youtubeThumbnailUrl,
  type ImageOutputExtension,
  type ImageTarget,
} from "./image-migration-lib.js";

const prisma = new PrismaClient();
const args = new Set(process.argv.slice(2));
const apply = args.has("--apply");
const uploadOnly = args.has("--upload-only");
const shouldUpload = apply || uploadOnly;
const targetLongEdge = 3840;
const quality = Number(process.env.IMAGE_MIGRATION_QUALITY || 95);
const concurrency = Number(process.env.IMAGE_MIGRATION_CONCURRENCY || 4);
const maxSourceBytes = Number(process.env.IMAGE_MIGRATION_MAX_SOURCE_BYTES || 25 * 1024 * 1024);

if (apply && uploadOnly) throw new Error("Choose either --apply or --upload-only");
if (!Number.isInteger(quality) || quality < 90 || quality > 100) {
  throw new Error("IMAGE_MIGRATION_QUALITY must be an integer from 90 to 100");
}
if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 12) {
  throw new Error("IMAGE_MIGRATION_CONCURRENCY must be an integer from 1 to 12");
}

const requiredEnv = (name: string) => {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} is required`);
  return value;
};

const bucket = shouldUpload ? requiredEnv("S3_BUCKET") : process.env.S3_BUCKET?.trim() || "dry-run";
const region = shouldUpload ? requiredEnv("S3_REGION") : process.env.S3_REGION?.trim() || "ap-south-1";
const publicBaseUrl = shouldUpload
  ? requiredEnv("IMAGE_PUBLIC_URL")
  : process.env.IMAGE_PUBLIC_URL?.trim() || process.env.S3_PUBLIC_URL?.trim() || "https://media.bevory.in";
const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim();
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim();
if (Boolean(accessKeyId) !== Boolean(secretAccessKey)) {
  throw new Error("S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY must be provided together");
}
const s3 = new S3Client({
  region,
  endpoint: process.env.S3_ENDPOINT?.trim() || undefined,
  forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
  credentials: accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined,
});

type JsonObject = Record<string, unknown>;
type RecordPlan = {
  key: string;
  tableName: string;
  recordId: string;
  original: JsonObject;
  targets: ImageTarget[];
};
type AssetPlan = {
  sourceUrl: string;
  tableName: string;
  recordId: string;
};
type AssetResult = AssetPlan & {
  uploaded: boolean;
  objectKey?: string;
  publicUrl?: string;
  outputFormat?: ImageOutputExtension;
  inputBytes?: number;
  outputBytes?: number;
  width?: number;
  height?: number;
  error?: string;
};

const jsonObject = (value: Prisma.JsonValue): JsonObject => (
  value && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : {}
);

const addYouTubeFallback = (tableName: string, row: JsonObject, targets: ImageTarget[]) => {
  if (tableName !== "video_reviews" || row.thumbnail_url) return targets;
  const sourceUrl = youtubeThumbnailUrl(row.youtube_url);
  const fallback: ImageTarget | null = sourceUrl
    ? { kind: "field", path: ["thumbnail_url"], sourceUrl }
    : null;
  return fallback ? [...targets, fallback] : targets;
};

const isPrivateV4 = (address: string) => {
  const parts = address.split(".").map(Number);
  return parts[0] === 10
    || parts[0] === 127
    || (parts[0] === 169 && parts[1] === 254)
    || (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31)
    || (parts[0] === 192 && parts[1] === 168)
    || (parts[0] === 100 && parts[1] >= 64 && parts[1] <= 127)
    || parts[0] >= 224;
};

const isPrivateAddress = (address: string) => {
  if (isIP(address) === 4) return isPrivateV4(address);
  const normalized = address.toLowerCase();
  if (normalized.startsWith("::ffff:")) return isPrivateV4(normalized.slice(7));
  return normalized === "::" || normalized === "::1" || normalized.startsWith("fc")
    || normalized.startsWith("fd") || normalized.startsWith("fe8") || normalized.startsWith("fe9")
    || normalized.startsWith("fea") || normalized.startsWith("feb");
};

const assertPublicUrl = async (url: URL) => {
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("Only HTTP(S) image URLs are supported");
  const addresses = isIP(url.hostname)
    ? [{ address: url.hostname }]
    : await lookup(url.hostname, { all: true, verbatim: true });
  if (!addresses.length || addresses.some(({ address }) => isPrivateAddress(address))) {
    throw new Error(`Blocked private or unresolvable image host: ${url.hostname}`);
  }
};

const downloadImage = async (sourceUrl: string) => {
  let current = new URL(sourceUrl);
  for (let redirects = 0; redirects <= 5; redirects++) {
    await assertPublicUrl(current);
    const response = await fetch(current, {
      redirect: "manual",
      signal: AbortSignal.timeout(30_000),
      headers: { "user-agent": "BevoryImageMigration/1.0 (+https://bevory.in)" },
    });
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) throw new Error(`Redirect from ${current} omitted Location`);
      current = new URL(location, current);
      continue;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status} from ${current}`);
    const contentType = response.headers.get("content-type")?.split(";")[0].trim().toLowerCase() || "";
    if (!contentType.startsWith("image/")) throw new Error(`Unexpected content type ${contentType || "unknown"}`);
    const advertisedLength = Number(response.headers.get("content-length") || 0);
    if (advertisedLength > maxSourceBytes) throw new Error(`Source exceeds ${maxSourceBytes} bytes`);
    const body = Buffer.from(await response.arrayBuffer());
    if (!body.length || body.length > maxSourceBytes) throw new Error(`Invalid source size ${body.length}`);
    return body;
  }
  throw new Error(`Too many redirects for ${sourceUrl}`);
};

const objectExists = async (key: string) => {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
    return true;
  } catch (error) {
    const status = (error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode;
    if (status === 404) return false;
    throw error;
  }
};

const findExistingObjectKey = async (asset: AssetPlan) => {
  for (const key of imageObjectKeyCandidates(asset.tableName, asset.recordId, asset.sourceUrl)) {
    if (await objectExists(key)) return key;
  }
  return null;
};

const migrateAsset = async (asset: AssetPlan): Promise<AssetResult> => {
  try {
    const existingObjectKey = await findExistingObjectKey(asset);
    if (existingObjectKey) {
      const outputFormat: ImageOutputExtension = existingObjectKey.endsWith(".png") ? "png" : "jpg";
      return {
        ...asset,
        uploaded: false,
        objectKey: existingObjectKey,
        publicUrl: publicObjectUrl(publicBaseUrl, existingObjectKey),
        outputFormat,
      };
    }

    const source = await downloadImage(asset.sourceUrl);
    const sharpOptions = { animated: false, limitInputPixels: 100_000_000 } as const;
    const metadata = await sharp(source, sharpOptions).metadata();
    const outputFormat: ImageOutputExtension = metadata.hasAlpha ? "png" : "jpg";
    const objectKey = imageObjectKey(asset.tableName, asset.recordId, asset.sourceUrl, outputFormat);
    const resized = sharp(source, sharpOptions)
      .rotate()
      .resize({
        width: targetLongEdge,
        height: targetLongEdge,
        fit: "inside",
        withoutEnlargement: false,
        kernel: sharp.kernel.lanczos3,
      })
      .toColorspace("srgb");
    const converted = await (outputFormat === "png"
      ? resized.png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
      : resized.jpeg({
        quality,
        progressive: true,
        chromaSubsampling: "4:4:4",
        mozjpeg: true,
      }))
      .toBuffer({ resolveWithObject: true });
    if (!converted.info.width || !converted.info.height) throw new Error("Image conversion produced no dimensions");
    if (Math.max(converted.info.width, converted.info.height) !== targetLongEdge) {
      throw new Error(`Image conversion produced ${converted.info.width}x${converted.info.height}, not a ${targetLongEdge}px long edge`);
    }
    await s3.send(new PutObjectCommand({
      Bucket: bucket,
      Key: objectKey,
      Body: converted.data,
      ContentType: outputFormat === "png" ? "image/png" : "image/jpeg",
      CacheControl: "public, max-age=31536000, immutable",
      Metadata: {
        "source-sha256": createHash("sha256").update(asset.sourceUrl).digest("hex"),
        "migration-version": "2",
        "output-format": outputFormat,
        "resize-kernel": "lanczos3",
      },
    }));
    return {
      ...asset,
      uploaded: true,
      objectKey,
      publicUrl: publicObjectUrl(publicBaseUrl, objectKey),
      outputFormat,
      inputBytes: source.length,
      outputBytes: converted.data.length,
      width: converted.info.width,
      height: converted.info.height,
    };
  } catch (error) {
    return { ...asset, uploaded: false, error: error instanceof Error ? error.message : String(error) };
  }
};

const runPool = async <T, R>(items: T[], worker: (item: T) => Promise<R>) => {
  const results: R[] = new Array(items.length);
  let index = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (index < items.length) {
      const current = index++;
      results[current] = await worker(items[current]);
      if ((current + 1) % 100 === 0 || current + 1 === items.length) {
        console.log(`Processed ${current + 1}/${items.length} unique images`);
      }
    }
  }));
  return results;
};

const uploadManifest = async (manifest: JsonObject) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const key = `migration-manifests/image-migration-${timestamp}.json`;
  await s3.send(new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: JSON.stringify(manifest, null, 2),
    ContentType: "application/json",
    CacheControl: "private, no-store",
  }));
  return key;
};

try {
  const records = await prisma.contentRecord.findMany({ orderBy: [{ tableName: "asc" }, { recordId: "asc" }] });
  const plans: RecordPlan[] = records.map((record) => {
    const original = jsonObject(record.data);
    const targets = addYouTubeFallback(
      record.tableName,
      original,
      collectImageTargets(original, publicBaseUrl),
    );
    return { key: record.key, tableName: record.tableName, recordId: record.recordId, original, targets };
  }).filter((plan) => plan.targets.length > 0);

  const assetsBySource = new Map<string, AssetPlan>();
  for (const plan of plans) {
    for (const target of plan.targets) {
      if (assetsBySource.has(target.sourceUrl)) continue;
      assetsBySource.set(target.sourceUrl, {
        sourceUrl: target.sourceUrl,
        tableName: plan.tableName,
        recordId: plan.recordId,
      });
    }
  }
  const assets = [...assetsBySource.values()];
  const domains = Object.fromEntries([...assets.reduce((counts, asset) => {
    const host = new URL(asset.sourceUrl).hostname.toLowerCase();
    counts.set(host, (counts.get(host) || 0) + 1);
    return counts;
  }, new Map<string, number>())].sort((left, right) => right[1] - left[1]));

  console.log(JSON.stringify({
    mode: apply ? "apply" : uploadOnly ? "upload-only" : "dry-run",
    records: plans.length,
    references: plans.reduce((sum, plan) => sum + plan.targets.length, 0),
    uniqueImages: assets.length,
    targetLongEdge,
    quality,
    resizeKernel: "lanczos3",
    outputFormats: ["lossless-png-for-alpha", "progressive-jpeg-4:4:4"],
    publicBaseUrl,
    domains,
  }, null, 2));

  if (!shouldUpload) process.exitCode = 0;
  else {
    const results = await runPool(assets, migrateAsset);
    const failures = results.filter((result) => result.error);
    const summary = {
      generatedAt: new Date().toISOString(),
      mode: apply ? "apply" : "upload-only",
      targetLongEdge,
      quality,
      resizeKernel: "lanczos3",
      outputFormats: ["lossless-png-for-alpha", "progressive-jpeg-4:4:4"],
      publicBaseUrl,
      records: plans.length,
      references: plans.reduce((sum, plan) => sum + plan.targets.length, 0),
      uniqueImages: results.length,
      uploaded: results.filter((result) => result.uploaded).length,
      alreadyPresent: results.filter((result) => !result.uploaded && !result.error).length,
      failures: failures.length,
      inputBytes: results.reduce((sum, result) => sum + (result.inputBytes || 0), 0),
      outputBytes: results.reduce((sum, result) => sum + (result.outputBytes || 0), 0),
      assets: results,
      originals: plans.map((plan) => ({
        key: plan.key,
        tableName: plan.tableName,
        recordId: plan.recordId,
        targets: plan.targets,
      })),
    };
    const manifestKey = await uploadManifest(summary as unknown as JsonObject);
    console.log(JSON.stringify({ manifestKey, ...summary, assets: undefined, originals: undefined }, null, 2));
    if (failures.length) {
      console.error(JSON.stringify({ failures: failures.slice(0, 50) }, null, 2));
      throw new Error(`${failures.length} images failed; database URLs were not changed`);
    }
    if (apply) {
      const migratedUrls = new Map(results.map((result) => {
        if (!result.publicUrl) throw new Error(`Missing public URL for ${result.sourceUrl}`);
        return [result.sourceUrl, result.publicUrl];
      }));
      const timestamp = new Date().toISOString();
      for (let index = 0; index < plans.length; index += 100) {
        const chunk = plans.slice(index, index + 100);
        await prisma.$transaction(chunk.map((plan) => {
          const data = applyImageTargets(plan.original, plan.targets, migratedUrls);
          data.image_migrated_at = timestamp;
          data.image_storage_provider = "s3";
          return prisma.contentRecord.update({
            where: { key: plan.key },
            data: { data: data as Prisma.InputJsonObject },
          });
        }));
        console.log(`Updated ${Math.min(index + chunk.length, plans.length)}/${plans.length} database records`);
      }
    }
  }
} finally {
  await prisma.$disconnect();
}
