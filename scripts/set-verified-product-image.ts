import "dotenv/config";
import { Prisma, PrismaClient } from "@prisma/client";

const args = process.argv.slice(2);
const valueFor = (flag: string) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};
const productId = valueFor("--product-id");
const imageUrl = valueFor("--image-url");
const sourcePage = valueFor("--source-page");

if (!productId || !imageUrl || !sourcePage) {
  throw new Error("Provide --product-id, --image-url, and --source-page.");
}

const image = new URL(imageUrl);
if (image.protocol !== "https:" || image.hostname !== "static.livcheers.com") {
  throw new Error("Verified product images must use the Livcheers HTTPS image host.");
}
const source = new URL(sourcePage);
if (source.protocol !== "https:" || source.hostname !== "www.livcheers.com") {
  throw new Error("The image source page must be an HTTPS Livcheers product page.");
}
const response = await fetch(image, { method: "HEAD", signal: AbortSignal.timeout(20_000) });
if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
  throw new Error(`Image verification failed: HTTP ${response.status}`);
}

const prisma = new PrismaClient();
try {
  const key = `products:${productId}`;
  const record = await prisma.contentRecord.findUnique({ where: { key } });
  if (!record) throw new Error(`Product ${productId} was not found.`);
  const existing = record.data && typeof record.data === "object" && !Array.isArray(record.data)
    ? record.data as Prisma.JsonObject
    : {};
  const verifiedAt = new Date().toISOString();
  await prisma.contentRecord.update({
    where: { key },
    data: {
      data: {
        ...existing,
        image_url: image.toString(),
        image_source_url: image.toString(),
        image_source_page: source.toString(),
        image_identity_verified: true,
        image_verified_at: verifiedAt,
        image_target_width: 720,
        updated_at: verifiedAt,
      },
    },
  });
  console.log(JSON.stringify({ productId, imageUrl: image.toString(), sourcePage: source.toString(), verifiedAt }));
} finally {
  await prisma.$disconnect();
}
