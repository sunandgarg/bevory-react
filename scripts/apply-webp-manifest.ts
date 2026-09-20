import "dotenv/config";
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Prisma, PrismaClient } from "@prisma/client";

type JsonObject = Record<string, unknown>;
type Manifest = {
  version: number;
  quality: number;
  originalsRetained: boolean;
  failures: number;
  assets: Array<{ key: string; targetKey: string; status: string }>;
};

const manifestKey = process.env.WEBP_MANIFEST_KEY?.trim();
if (!manifestKey) throw new Error("WEBP_MANIFEST_KEY is required");
const bucket = process.env.S3_BUCKET?.trim();
const region = process.env.S3_REGION?.trim();
if (!bucket || !region) throw new Error("S3_BUCKET and S3_REGION are required");
const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim();
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim();
if (Boolean(accessKeyId) !== Boolean(secretAccessKey)) throw new Error("Both S3 access-key variables are required together");
const s3 = new S3Client({
  region,
  credentials: accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined,
});
const prisma = new PrismaClient();

const bodyString = async (body: unknown) => {
  if (!body || typeof (body as { transformToString?: unknown }).transformToString !== "function") {
    throw new Error("S3 returned an unreadable manifest");
  }
  return (body as { transformToString: () => Promise<string> }).transformToString();
};

const replaceStrings = (value: unknown, replacements: Array<[string, string]>): unknown => {
  if (typeof value === "string") {
    return replacements.reduce((current, [source, target]) => current.split(source).join(target), value);
  }
  if (Array.isArray(value)) return value.map((item) => replaceStrings(item, replacements));
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, replaceStrings(item, replacements)]));
};

try {
  const object = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: manifestKey }));
  const manifest = JSON.parse(await bodyString(object.Body)) as Manifest;
  if (manifest.version !== 1 || manifest.quality !== 95 || !manifest.originalsRetained || manifest.failures !== 0) {
    throw new Error("Manifest failed the Q95, originals-retained, or completeness safety gate");
  }
  const successful = manifest.assets.filter((asset) => ["created", "existing"].includes(asset.status));
  const replacements = successful.flatMap((asset): Array<[string, string]> => [
    [`/media/${asset.key}`, `/media/${asset.targetKey}`],
    [`https://bevory.in/media/${asset.key}`, `https://bevory.in/media/${asset.targetKey}`],
  ]);
  const records = await prisma.contentRecord.findMany();
  const timestamp = new Date().toISOString();
  const changes = records.flatMap((record) => {
    const original = record.data as JsonObject;
    const replaced = replaceStrings(original, replacements) as JsonObject;
    if (JSON.stringify(replaced) === JSON.stringify(original)) return [];
    return [{
      record,
      next: {
        ...replaced,
        image_derivative_format: "webp",
        image_derivative_quality: 95,
        image_original_retained: true,
        image_derivative_migrated_at: timestamp,
      } as JsonObject,
    }];
  });

  const backupKey = `content-backups/image-urls-before-webp-q95-${timestamp.replace(/[:.]/g, "-")}.json`;
  await s3.send(new PutObjectCommand({
    Bucket: bucket,
    Key: backupKey,
    Body: JSON.stringify(changes.map(({ record }) => ({ key: record.key, data: record.data })), null, 2),
    ContentType: "application/json",
    CacheControl: "private, no-store",
  }));
  await prisma.$transaction(async (transaction) => {
    for (let index = 0; index < changes.length; index += 100) {
      for (const { record, next } of changes.slice(index, index + 100)) {
        await transaction.contentRecord.update({
          where: { key: record.key },
          data: { data: next as Prisma.InputJsonObject, updatedAt: new Date(timestamp) },
        });
      }
    }
  }, { maxWait: 10_000, timeout: 300_000 });
  console.log(JSON.stringify({ manifestKey, backupKey, recordsUpdated: changes.length, originalsRetained: true }, null, 2));
} finally {
  await prisma.$disconnect();
}
