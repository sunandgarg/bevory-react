import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { objectStorageConfigured, storedImagePathMatchesType, storeUpload } from "./storage.js";

const tempRoots: string[] = [];
const storageEnvKeys = [
  "NODE_ENV",
  "S3_BUCKET",
  "S3_REGION",
  "S3_PUBLIC_URL",
  "S3_ACCESS_KEY_ID",
  "S3_SECRET_ACCESS_KEY",
] as const;
const previousEnv = new Map(storageEnvKeys.map((key) => [key, process.env[key]]));

beforeEach(() => {
  process.env.NODE_ENV = "test";
  for (const key of storageEnvKeys.slice(1)) delete process.env[key];
});

afterEach(async () => {
  await Promise.all(tempRoots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
  for (const key of storageEnvKeys) {
    const value = previousEnv.get(key);
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

describe("upload storage", () => {
  it("requires the stored extension to match the verified image type", () => {
    expect(storedImagePathMatchesType("catalog/photo.png", "image/png")).toBe(true);
    expect(storedImagePathMatchesType("catalog/photo.jpg", "image/jpeg")).toBe(true);
    expect(storedImagePathMatchesType("catalog/photo.jpeg", "image/jpeg")).toBe(true);
    expect(storedImagePathMatchesType("catalog/photo.png", "image/jpeg")).toBe(false);
    expect(storedImagePathMatchesType("catalog/photo.jpg", "image/png")).toBe(false);
    expect(storedImagePathMatchesType("catalog/photo.webp", "image/webp")).toBe(false);
  });

  it("uses local persistent storage when S3 is not fully configured", async () => {
    expect(objectStorageConfigured()).toBe(false);
    const uploadsRoot = await mkdtemp(path.join(tmpdir(), "bevory-storage-"));
    tempRoots.push(uploadsRoot);
    const stored = await storeUpload({
      uploadsRoot,
      bucket: "images",
      filePath: "tests/image.png",
      mimeType: "image/png",
      body: Buffer.from("verified-image"),
    });
    expect(stored).toEqual({ provider: "local", publicUrl: "/uploads/images/tests/image.png" });
    expect(await readFile(path.join(uploadsRoot, "images/tests/image.png"), "utf8")).toBe("verified-image");
  });

  it("supports the AWS default credential chain when core S3 settings are complete", () => {
    process.env.S3_BUCKET = "bevory-images";
    process.env.S3_REGION = "ap-south-1";
    process.env.S3_PUBLIC_URL = "https://bevory.in/media";
    expect(objectStorageConfigured()).toBe(true);
  });

  it("accepts an explicit access-key pair but rejects a partial pair", () => {
    process.env.S3_BUCKET = "bevory-images";
    process.env.S3_REGION = "ap-south-1";
    process.env.S3_PUBLIC_URL = "https://bevory.in/media";
    process.env.S3_ACCESS_KEY_ID = "example-access-key";
    expect(objectStorageConfigured()).toBe(false);
    process.env.S3_SECRET_ACCESS_KEY = "example-secret-key";
    expect(objectStorageConfigured()).toBe(true);
  });

  it("rejects public bases outside the first-party HTTPS /media path", () => {
    process.env.S3_BUCKET = "bevory-images";
    process.env.S3_REGION = "ap-south-1";
    process.env.S3_PUBLIC_URL = "http://bevory.in/media";
    expect(objectStorageConfigured()).toBe(false);
    process.env.S3_PUBLIC_URL = "https://bevory.in/uploads";
    expect(objectStorageConfigured()).toBe(false);
    process.env.S3_PUBLIC_URL = "https://bevory.in/media/";
    expect(objectStorageConfigured()).toBe(true);
  });

  it("fails closed instead of writing to local disk in production", async () => {
    process.env.NODE_ENV = "production";
    const uploadsRoot = await mkdtemp(path.join(tmpdir(), "bevory-storage-"));
    tempRoots.push(uploadsRoot);
    await expect(storeUpload({
      uploadsRoot,
      bucket: "images",
      filePath: "tests/image.png",
      mimeType: "image/png",
      body: Buffer.from("verified-image"),
    })).rejects.toThrow(/S3 object storage is required in production: missing S3_BUCKET, S3_REGION, S3_PUBLIC_URL/);
  });
});
