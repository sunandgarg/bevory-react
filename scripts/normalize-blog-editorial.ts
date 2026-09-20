import "dotenv/config";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Prisma, PrismaClient } from "@prisma/client";
import { normalizeBlogContent } from "../src/lib/articleEditorial.js";

const apply = process.argv.includes("--apply");
const prisma = new PrismaClient();

try {
  const records = await prisma.contentRecord.findMany({ where: { tableName: "blog_posts" } });
  const reviewedAt = new Date().toISOString();
  const changes = records.flatMap((record) => {
    const data = record.data as Record<string, unknown>;
    if (data.is_published !== true || typeof data.content !== "string") return [];
    const next = {
      ...data,
      content: normalizeBlogContent(data.content),
      author: typeof data.author === "string" && data.author.trim() ? data.author : "BevOry Editorial Team",
      reviewed_by: "BevOry Editorial Team",
      facts_last_reviewed: reviewedAt.slice(0, 10),
      editorial_standard_version: 2,
    };
    return JSON.stringify(next) === JSON.stringify(data) ? [] : [{ record, next }];
  });

  console.log(JSON.stringify({ publishedRecords: records.filter((record) => (record.data as Record<string, unknown>).is_published === true).length, recordsToUpdate: changes.length, apply }, null, 2));
  if (apply && changes.length) {
    const bucket = process.env.S3_BUCKET?.trim();
    const region = process.env.S3_REGION?.trim();
    if (!bucket || !region) throw new Error("S3_BUCKET and S3_REGION are required for the pre-change backup");
    const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim();
    const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim();
    if (Boolean(accessKeyId) !== Boolean(secretAccessKey)) throw new Error("Both S3 access-key variables are required together");
    const s3 = new S3Client({
      region,
      credentials: accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined,
    });
    const backupKey = `content-backups/blog-before-editorial-v2-${reviewedAt.replace(/[:.]/g, "-")}.json`;
    await s3.send(new PutObjectCommand({
      Bucket: bucket,
      Key: backupKey,
      Body: JSON.stringify(changes.map(({ record }) => ({ key: record.key, data: record.data })), null, 2),
      ContentType: "application/json",
      CacheControl: "private, no-store",
    }));
    await prisma.$transaction(changes.map(({ record, next }) => prisma.contentRecord.update({
      where: { key: record.key },
      data: { data: next as Prisma.InputJsonObject, updatedAt: new Date(reviewedAt) },
    })));
    console.log(JSON.stringify({ updated: changes.length, backup: `s3://${bucket}/${backupKey}` }, null, 2));
  }
} finally {
  await prisma.$disconnect();
}
