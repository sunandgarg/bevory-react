import "dotenv/config";
import { createHash } from "node:crypto";
import { HeadObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Prisma, PrismaClient } from "@prisma/client";
import sharp from "sharp";
import {
  assertPublicHttpUrl,
  imageObjectKey,
  publicObjectUrl,
  validatePublicBaseUrl,
  type ImageOutputExtension,
} from "./image-migration-lib.js";

const args = process.argv.slice(2);
const valueFor = (flag: string) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};
const productId = valueFor("--product-id");
const imageUrl = valueFor("--image-url");
const sourcePage = valueFor("--source-page");
const apply = args.includes("--apply");
const targetLongEdge = Number(valueFor("--target-long-edge") || 1440);
const maxSourceBytes = 25 * 1024 * 1024;
const cacheControl = "public, max-age=31536000, immutable";

if (!productId || !imageUrl || !sourcePage) {
  throw new Error("Provide --product-id, --image-url, and --source-page. Add --apply to upload and save.");
}
const image = new URL(imageUrl);
const source = new URL(sourcePage);
if (image.protocol !== "https:" || source.protocol !== "https:") {
  throw new Error("Verified product images and source pages must use HTTPS.");
}
if (!Number.isInteger(targetLongEdge) || targetLongEdge < 720 || targetLongEdge > 3840) {
  throw new Error("--target-long-edge must be an integer from 720 to 3840.");
}

const requiredEnv = (name: string) => {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} is required with --apply`);
  return value;
};

const downloadImage = async (initialUrl: URL) => {
  let current = initialUrl;
  for (let redirects = 0; redirects <= 5; redirects++) {
    await assertPublicHttpUrl(current);
    const response = await fetch(current, {
      redirect: "manual",
      signal: AbortSignal.timeout(30_000),
      headers: { "user-agent": "BevoryVerifiedImage/1.0 (+https://bevory.in)" },
    });
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) throw new Error(`Redirect from ${current} omitted Location`);
      current = new URL(location, current);
      continue;
    }
    if (!response.ok) throw new Error(`Image verification failed: HTTP ${response.status}`);
    const contentType = response.headers.get("content-type")?.split(";")[0].trim().toLowerCase() || "";
    if (!contentType.startsWith("image/")) throw new Error(`Expected an image, received ${contentType || "unknown"}`);
    const advertisedLength = Number(response.headers.get("content-length") || 0);
    if (advertisedLength > maxSourceBytes) throw new Error("Source image exceeds 25 MB");
    const bytes = Buffer.from(await response.arrayBuffer());
    if (!bytes.length || bytes.length > maxSourceBytes) throw new Error("Source image is empty or exceeds 25 MB");
    return bytes;
  }
  throw new Error("Image source redirected too many times");
};

const sourceBytes = await downloadImage(image);
const pipeline = sharp(sourceBytes, { animated: false, limitInputPixels: 50_000_000 });
const metadata = await pipeline.metadata();
const outputFormat: ImageOutputExtension = metadata.hasAlpha ? "png" : "jpg";
const resized = pipeline
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
  : resized.jpeg({ quality: 92, progressive: true, chromaSubsampling: "4:4:4", mozjpeg: true }))
  .toBuffer({ resolveWithObject: true });
if (!converted.info.width || !converted.info.height) throw new Error("Image conversion produced no dimensions");

const configuredPublicBaseUrl = process.env.IMAGE_PUBLIC_URL?.trim() || process.env.S3_PUBLIC_URL?.trim();
if (apply && !configuredPublicBaseUrl) {
  throw new Error("IMAGE_PUBLIC_URL or S3_PUBLIC_URL is required with --apply");
}
const publicBaseUrl = validatePublicBaseUrl(configuredPublicBaseUrl || "https://bevory.in/media");
const objectKey = imageObjectKey("products", productId, image.toString(), outputFormat);
const firstPartyUrl = publicObjectUrl(publicBaseUrl, objectKey);

const prisma = new PrismaClient();
try {
  const key = `products:${productId}`;
  const record = await prisma.contentRecord.findUnique({ where: { key } });
  if (!record) throw new Error(`Product ${productId} was not found.`);
  const existing = record.data && typeof record.data === "object" && !Array.isArray(record.data)
    ? record.data as Prisma.JsonObject
    : {};
  if (existing.is_active === false) {
    throw new Error(`Product ${productId} is inactive; repair canonical product ${String(existing.canonical_product_id || "unknown")}.`);
  }

  const summary = {
    mode: apply ? "apply" : "dry-run",
    productId,
    product: `${String(existing.brand || "")} ${String(existing.name || "")}`.trim(),
    inputBytes: sourceBytes.length,
    inputDimensions: `${metadata.width || "unknown"}x${metadata.height || "unknown"}`,
    outputBytes: converted.data.length,
    outputDimensions: `${converted.info.width}x${converted.info.height}`,
    outputFormat,
    objectKey,
    firstPartyUrl,
  };
  if (!apply) {
    console.log(JSON.stringify(summary, null, 2));
    process.exitCode = 0;
  } else {
    const bucket = requiredEnv("S3_BUCKET");
    const region = requiredEnv("S3_REGION");
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
    let alreadyPresent = false;
    try {
      await s3.send(new HeadObjectCommand({ Bucket: bucket, Key: objectKey }));
      alreadyPresent = true;
    } catch (error) {
      const status = (error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode;
      if (status !== 404) throw error;
    }
    if (!alreadyPresent) {
      await s3.send(new PutObjectCommand({
        Bucket: bucket,
        Key: objectKey,
        Body: converted.data,
        ContentType: outputFormat === "png" ? "image/png" : "image/jpeg",
        CacheControl: cacheControl,
        Metadata: {
          "source-sha256": createHash("sha256").update(image.toString()).digest("hex"),
          "migration-version": "verified-product-image-v1",
          "output-format": outputFormat,
          "output-width": String(converted.info.width),
          "output-height": String(converted.info.height),
          "resize-kernel": "lanczos3",
        },
      }));
    }

    const verifiedAt = new Date().toISOString();
    const updated = await prisma.contentRecord.updateMany({
      where: { key, updatedAt: record.updatedAt },
      data: {
        data: {
          ...existing,
          image_url: firstPartyUrl,
          image_source_url: image.toString(),
          image_source_page: source.toString(),
          image_identity_verified: true,
          image_verified_at: verifiedAt,
          image_migrated_at: verifiedAt,
          image_storage_provider: "s3",
          image_storage_status: "first_party",
          image_target_width: Math.max(converted.info.width, converted.info.height),
          updated_at: verifiedAt,
        },
      },
    });
    if (updated.count !== 1) {
      throw new Error(`Product ${productId} changed during upload; the database record was not replaced`);
    }
    console.log(JSON.stringify({ ...summary, alreadyPresent, verifiedAt }, null, 2));
  }
} finally {
  await prisma.$disconnect();
}
