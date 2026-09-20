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
  validatePublicBaseUrl,
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
const maxInputPixels = Number(process.env.IMAGE_MIGRATION_MAX_INPUT_PIXELS || 50_000_000);
const immutableCacheControl = "public, max-age=31536000, immutable";

if (apply && uploadOnly) throw new Error("Choose either --apply or --upload-only");
if (!Number.isInteger(quality) || quality < 90 || quality > 100) {
  throw new Error("IMAGE_MIGRATION_QUALITY must be an integer from 90 to 100");
}
if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 8) {
  throw new Error("IMAGE_MIGRATION_CONCURRENCY must be an integer from 1 to 8");
}
if (!Number.isInteger(maxSourceBytes) || maxSourceBytes < 1 || maxSourceBytes > 50 * 1024 * 1024) {
  throw new Error("IMAGE_MIGRATION_MAX_SOURCE_BYTES must be an integer from 1 to 52428800");
}
if (!Number.isInteger(maxInputPixels) || maxInputPixels < targetLongEdge || maxInputPixels > 100_000_000) {
  throw new Error("IMAGE_MIGRATION_MAX_INPUT_PIXELS must be an integer from 3840 to 100000000");
}

const requiredEnv = (name: string) => {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} is required`);
  return value;
};

const bucket = shouldUpload ? requiredEnv("S3_BUCKET") : process.env.S3_BUCKET?.trim() || "dry-run";
const region = shouldUpload ? requiredEnv("S3_REGION") : process.env.S3_REGION?.trim() || "ap-south-1";
const publicBaseUrl = validatePublicBaseUrl(shouldUpload
  ? requiredEnv("IMAGE_PUBLIC_URL")
  : process.env.IMAGE_PUBLIC_URL?.trim() || process.env.S3_PUBLIC_URL?.trim() || "https://bevory.in/media");
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

type ExistingObject = {
  key: string;
  width?: number;
  height?: number;
};

let existingObjectsMissingDimensionMetadata = 0;

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
    if (Number.isFinite(advertisedLength) && advertisedLength > maxSourceBytes) {
      await response.body?.cancel();
      throw new Error(`Source exceeds ${maxSourceBytes} bytes`);
    }
    if (!response.body) throw new Error(`Empty response body from ${current}`);
    const reader = response.body.getReader();
    const chunks: Buffer[] = [];
    let totalBytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > maxSourceBytes) {
        await reader.cancel();
        throw new Error(`Source exceeds ${maxSourceBytes} bytes while streaming`);
      }
      chunks.push(Buffer.from(value));
    }
    if (!totalBytes) throw new Error("Source image was empty");
    return Buffer.concat(chunks, totalBytes);
  }
  throw new Error(`Too many redirects for ${sourceUrl}`);
};

const inspectExistingObject = async (key: string): Promise<ExistingObject | null> => {
  let head;
  try {
    head = await s3.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
  } catch (error) {
    const status = (error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode;
    if (status === 404) return null;
    const message = error instanceof Error ? error.message : String(error);
    if (status === 403) {
      throw new Error(`Cannot validate s3://${bucket}/${key}: HeadObject was denied (check s3:GetObject and s3:ListBucket)`);
    }
    throw new Error(`Cannot validate s3://${bucket}/${key}${status ? ` (HTTP ${status})` : ""}: ${message}`);
  }

  const expectedContentType = key.endsWith(".png") ? "image/png" : "image/jpeg";
  const contentType = head.ContentType?.split(";", 1)[0].trim().toLowerCase();
  const migrationVersion = head.Metadata?.["migration-version"];
  if (migrationVersion !== "2") {
    throw new Error(`Existing s3://${bucket}/${key} has migration-version=${migrationVersion || "missing"}; expected 2`);
  }
  if (contentType !== expectedContentType) {
    throw new Error(`Existing s3://${bucket}/${key} has ContentType=${contentType || "missing"}; expected ${expectedContentType}`);
  }
  if (head.CacheControl !== immutableCacheControl) {
    throw new Error(`Existing s3://${bucket}/${key} has CacheControl=${head.CacheControl || "missing"}; expected ${immutableCacheControl}`);
  }

  const widthValue = head.Metadata?.["output-width"];
  const heightValue = head.Metadata?.["output-height"];
  if (!widthValue && !heightValue) {
    existingObjectsMissingDimensionMetadata++;
    return { key };
  }
  const width = Number(widthValue);
  const height = Number(heightValue);
  if (
    !Number.isInteger(width)
    || width < 1
    || !Number.isInteger(height)
    || height < 1
    || Math.max(width, height) !== targetLongEdge
  ) {
    throw new Error(`Existing s3://${bucket}/${key} has invalid output dimensions ${widthValue || "missing"}x${heightValue || "missing"}`);
  }
  return { key, width, height };
};

const findExistingObjectKey = async (asset: AssetPlan) => {
  for (const key of imageObjectKeyCandidates(asset.tableName, asset.recordId, asset.sourceUrl)) {
    const existing = await inspectExistingObject(key);
    if (existing) return existing;
  }
  return null;
};

const migrateAsset = async (asset: AssetPlan): Promise<AssetResult> => {
  try {
    const existingObjectKey = await findExistingObjectKey(asset);
    if (existingObjectKey) {
      const outputFormat: ImageOutputExtension = existingObjectKey.key.endsWith(".png") ? "png" : "jpg";
      return {
        ...asset,
        uploaded: false,
        objectKey: existingObjectKey.key,
        publicUrl: publicObjectUrl(publicBaseUrl, existingObjectKey.key),
        outputFormat,
        width: existingObjectKey.width,
        height: existingObjectKey.height,
      };
    }

    const source = await downloadImage(asset.sourceUrl);
    const sharpOptions = { animated: false, limitInputPixels: maxInputPixels } as const;
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
      CacheControl: immutableCacheControl,
      Metadata: {
        "source-sha256": createHash("sha256").update(asset.sourceUrl).digest("hex"),
        "migration-version": "2",
        "output-format": outputFormat,
        "output-width": String(converted.info.width),
        "output-height": String(converted.info.height),
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
    return { key: record.key, tableName: record.tableName, recordId: record.recordId, targets };
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
      existingObjectsMissingDimensionMetadata,
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
    if (existingObjectsMissingDimensionMetadata) {
      console.warn(
        `${existingObjectsMissingDimensionMetadata} validated migration-v2 objects predate dimension metadata; `
        + "they were accepted because format, content type, and cache policy matched",
      );
    }
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
      await prisma.$transaction(async (transaction) => {
        for (let index = 0; index < plans.length; index += 100) {
          const chunk = plans.slice(index, index + 100);
          const currentRecords = await transaction.contentRecord.findMany({
            where: { key: { in: chunk.map((plan) => plan.key) } },
            select: {
              key: true,
              tableName: true,
              data: true,
              updatedAt: true,
            },
          });
          const currentByKey = new Map(currentRecords.map((record) => [record.key, record]));
          for (const plan of chunk) {
            const current = currentByKey.get(plan.key);
            if (!current) throw new Error(`Content record ${plan.key} was deleted while images were uploading`);
            const currentData = jsonObject(current.data);
            const currentTargets = addYouTubeFallback(
              current.tableName,
              currentData,
              collectImageTargets(currentData, publicBaseUrl),
            );
            if (!currentTargets.length) continue;
            const data = applyImageTargets(currentData, currentTargets, migratedUrls);
            data.image_migrated_at = timestamp;
            data.image_storage_provider = "s3";
            const updated = await transaction.contentRecord.updateMany({
              where: { key: plan.key, updatedAt: current.updatedAt },
              data: {
                data: data as Prisma.InputJsonObject,
                updatedAt: new Date(),
              },
            });
            if (updated.count !== 1) {
              throw new Error(`Content record ${plan.key} changed during cutover; the entire cutover was rolled back`);
            }
          }
          console.log(`Prepared ${Math.min(index + chunk.length, plans.length)}/${plans.length} database records`);
        }
      }, { maxWait: 10_000, timeout: 300_000 });
      console.log(`Atomically updated ${plans.length}/${plans.length} database records`);
    }
  }
} finally {
  await prisma.$disconnect();
}
