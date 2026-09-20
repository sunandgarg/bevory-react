import "dotenv/config";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Prisma, PrismaClient } from "@prisma/client";
import { buildCocktailEditorial } from "../src/lib/cocktailEditorial.js";

type JsonObject = Record<string, unknown>;

const prisma = new PrismaClient();
const apply = process.argv.includes("--apply");
const normalizedName = (value: unknown) => String(value ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "").trim();
const slugify = (value: unknown) => String(value ?? "")
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const asObject = (value: Prisma.JsonValue): JsonObject => (
  value && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : {}
);

const qualityScore = (data: JsonObject) => {
  const canonicalSlug = slugify(data.name);
  const ingredients = Array.isArray(data.ingredients) ? data.ingredients.length : 0;
  return (String(data.slug ?? "") === canonicalSlug ? 100 : 0)
    + (String(data.image_url ?? "").startsWith("https://bevory.in/media/") ? 40 : 0)
    + Math.min(20, ingredients * 2)
    + Math.min(20, String(data.instructions ?? "").length / 20)
    + Math.min(10, String(data.description ?? "").length / 30);
};

const safeDescription = (value: unknown) => String(value ?? "")
  .replace(/\bdangerously easy to drink\b/gi, "balanced and easy to approach")
  .replace(/[\u2013\u2014]/g, ",")
  .replace(/\s+/g, " ")
  .trim();

try {
  const records = await prisma.contentRecord.findMany({
    where: { tableName: "cocktails" },
    orderBy: { recordId: "asc" },
  });
  const grouped = new Map<string, typeof records>();
  for (const record of records) {
    const key = normalizedName(asObject(record.data).name) || record.recordId;
    grouped.set(key, [...(grouped.get(key) ?? []), record]);
  }

  const winners = new Map<string, string>();
  for (const group of grouped.values()) {
    const winner = [...group].sort((left, right) => (
      qualityScore(asObject(right.data)) - qualityScore(asObject(left.data))
    ))[0];
    for (const record of group) winners.set(record.key, winner.key);
  }

  const updatedAt = new Date().toISOString();
  const plans = records.map((record) => {
    const original = asObject(record.data);
    const winnerKey = winners.get(record.key)!;
    const winner = records.find((candidate) => candidate.key === winnerKey)!;
    const winnerData = asObject(winner.data);
    const isWinner = record.key === winnerKey;
    const editorial = buildCocktailEditorial(original);
    const next: JsonObject = {
      ...original,
      ...editorial,
      description: safeDescription(original.description),
      is_active: isWinner,
      duplicate_of_slug: isWinner ? null : String(winnerData.slug ?? winner.recordId),
      editorial_standard: "BevOry India metric recipe standard v1",
      editorial_updated_at: updatedAt,
      updated_at: updatedAt,
    };
    return { record, original, next };
  });

  const beforeText = JSON.stringify(records.map((record) => asObject(record.data)));
  const afterText = JSON.stringify(plans.map((plan) => plan.next));
  const summary = {
    mode: apply ? "apply" : "dry-run",
    records: records.length,
    activeRecipes: plans.filter((plan) => plan.next.is_active === true).length,
    duplicateRecipesHidden: plans.filter((plan) => plan.next.is_active === false).length,
    ounceMentionsBefore: (beforeText.match(/\boz\b/gi) ?? []).length,
    ounceMentionsAfter: (afterText.match(/\boz\b/gi) ?? []).length,
    metricIngredientLists: plans.filter((plan) => (
      Array.isArray(plan.next.ingredients) && plan.next.ingredients.some((value) => /\bml\b/i.test(String(value)))
    )).length,
  };
  console.log(JSON.stringify(summary, null, 2));

  if (apply) {
    const bucket = process.env.S3_BUCKET?.trim();
    const region = process.env.S3_REGION?.trim();
    if (!bucket || !region) throw new Error("S3_BUCKET and S3_REGION are required for the pre-change backup");
    const timestamp = updatedAt.replace(/[:.]/g, "-");
    const backupKey = `content-backups/cocktails-before-metric-normalization-${timestamp}.json`;
    const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim();
    const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim();
    if (Boolean(accessKeyId) !== Boolean(secretAccessKey)) throw new Error("Both S3 access-key variables are required together");
    const s3 = new S3Client({
      region,
      credentials: accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined,
    });
    await s3.send(new PutObjectCommand({
      Bucket: bucket,
      Key: backupKey,
      Body: JSON.stringify(records.map((record) => ({ key: record.key, data: record.data })), null, 2),
      ContentType: "application/json",
      CacheControl: "private, no-store",
    }));
    await prisma.$transaction(plans.map(({ record, next }) => prisma.contentRecord.update({
      where: { key: record.key },
      data: { data: next as Prisma.InputJsonObject, updatedAt: new Date(updatedAt) },
    })));
    console.log(JSON.stringify({ backup: `s3://${bucket}/${backupKey}`, updated: plans.length }, null, 2));
  }
} finally {
  await prisma.$disconnect();
}
