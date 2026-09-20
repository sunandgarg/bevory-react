import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

type UploadInput = {
  uploadsRoot: string;
  bucket: string;
  filePath: string;
  mimeType: string;
  body: Buffer;
};

type StorageConfiguration = {
  configured: boolean;
  error?: string;
  bucket?: string;
  region?: string;
  publicUrl?: string;
  credentials?: {
    accessKeyId: string;
    secretAccessKey: string;
  };
};

const normalizedMediaBase = (value: string | undefined) => {
  if (!value) return undefined;
  try {
    const parsed = new URL(value);
    const pathname = parsed.pathname.replace(/\/+$/, "") || "/";
    if (
      parsed.protocol !== "https:"
      || parsed.username
      || parsed.password
      || parsed.search
      || parsed.hash
      || pathname !== "/media"
    ) return undefined;
    return `${parsed.origin}/media`;
  } catch {
    return undefined;
  }
};

const storageConfiguration = (): StorageConfiguration => {
  const bucket = process.env.S3_BUCKET?.trim();
  const region = process.env.S3_REGION?.trim();
  const configuredPublicUrl = process.env.S3_PUBLIC_URL?.trim();
  const publicUrl = normalizedMediaBase(configuredPublicUrl);
  const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim();
  const missing = [
    ["S3_BUCKET", bucket],
    ["S3_REGION", region],
    ["S3_PUBLIC_URL", publicUrl],
  ].filter(([, value]) => !value).map(([name]) => name);
  if (configuredPublicUrl && !publicUrl) {
    return { configured: false, error: "S3_PUBLIC_URL must be an HTTPS origin plus the exact /media path" };
  }
  if (missing.length) {
    return { configured: false, error: `missing ${missing.join(", ")}` };
  }
  if (Boolean(accessKeyId) !== Boolean(secretAccessKey)) {
    return {
      configured: false,
      error: "S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY must be provided together (or both omitted for the AWS credential chain)",
    };
  }
  return {
    configured: true,
    bucket,
    region,
    publicUrl,
    credentials: accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined,
  };
};

export const objectStorageConfigured = () => storageConfiguration().configured;

export const storedImagePathMatchesType = (filePath: string, mimeType: string) => {
  const extension = path.extname(filePath).toLowerCase();
  if (mimeType === "image/png") return extension === ".png";
  if (mimeType === "image/jpeg") return extension === ".jpg" || extension === ".jpeg";
  return false;
};

const publicObjectUrl = (baseUrl: string, key: string) => {
  const base = baseUrl.replace(/\/$/, "");
  return `${base}/${key.split("/").map(encodeURIComponent).join("/")}`;
};

export const storeUpload = async (input: UploadInput) => {
  const configuration = storageConfiguration();
  if (configuration.configured) {
    const key = `${input.bucket}/${input.filePath}`;
    const client = new S3Client({
      region: configuration.region!,
      endpoint: process.env.S3_ENDPOINT?.trim() || undefined,
      forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
      credentials: configuration.credentials,
    });
    await client.send(new PutObjectCommand({
      Bucket: configuration.bucket!,
      Key: key,
      Body: input.body,
      ContentType: input.mimeType,
      CacheControl: "public, max-age=31536000, immutable",
    }));
    return { provider: "s3" as const, publicUrl: publicObjectUrl(configuration.publicUrl!, key) };
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error(`S3 object storage is required in production: ${configuration.error || "invalid configuration"}`);
  }

  const destination = path.join(input.uploadsRoot, input.bucket, input.filePath);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, input.body);
  const encoded = [input.bucket, ...input.filePath.split("/")].map(encodeURIComponent).join("/");
  return { provider: "local" as const, publicUrl: `/uploads/${encoded}` };
};
