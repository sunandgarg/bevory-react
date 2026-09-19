import "dotenv/config";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const cityNames = (process.env.AUDIT_CITIES ?? "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);
const since = Date.parse(process.env.AUDIT_SINCE ?? "");
const expectedPrices = Number(process.env.AUDIT_EXPECTED_PRICES || 0);

if (!cityNames.length) throw new Error("AUDIT_CITIES must contain at least one city name.");
if (!Number.isFinite(since)) throw new Error("AUDIT_SINCE must be an ISO timestamp.");

const jsonObject = (value: Prisma.JsonValue): Prisma.JsonObject =>
  value && typeof value === "object" && !Array.isArray(value) ? value as Prisma.JsonObject : {};

try {
  const records = await prisma.contentRecord.findMany({
    where: {
      tableName: {
        in: ["brand_spotlights", "categories", "cities", "product_prices", "products", "sub_categories"],
      },
    },
  });
  const rows = records.map((record) => ({
    id: record.recordId,
    table: record.tableName,
    data: jsonObject(record.data),
  }));
  const byTable = (table: string) => rows.filter((row) => row.table === table);
  const cityById = new Map(byTable("cities").map((row) => [row.id, String(row.data.name ?? "")]));
  const targetCityIds = new Set(
    [...cityById].filter(([_id, name]) => cityNames.includes(name)).map(([id]) => id),
  );
  const productById = new Map(byTable("products").map((row) => [row.id, row]));
  const brandById = new Map(byTable("brand_spotlights").map((row) => [row.id, row]));
  const importedPrices = byTable("product_prices").filter((row) => (
    targetCityIds.has(String(row.data.city_id ?? ""))
    && row.data.imported_from === "livcheers_csv"
    && Date.parse(String(row.data.updated_at ?? "")) >= since
  ));
  const positivePrices = importedPrices.filter((row) => (
    row.data.price_available !== false && Number(row.data.price) > 0
  ));
  const priceKeys = positivePrices.map((row) => (
    `${row.data.city_id}|${row.data.product_id}|${row.data.volume_ml}`
  ));
  const duplicatePriceKeys = priceKeys.length - new Set(priceKeys).size;
  const missingProductReferences = positivePrices.filter((row) => (
    !productById.has(String(row.data.product_id ?? ""))
  )).length;
  const targetProductIds = new Set(positivePrices.map((row) => String(row.data.product_id ?? "")));
  const targetProducts = [...targetProductIds]
    .map((id) => productById.get(id))
    .filter((row): row is NonNullable<typeof row> => Boolean(row));
  const missingVerifiedImages = targetProducts.filter((row) => (
    row.data.image_identity_verified !== true || !String(row.data.image_url ?? "").trim()
  ));
  const targetBrandIds = new Set(targetProducts.map((row) => String(row.data.brand_id ?? "")).filter(Boolean));
  const missingVerifiedBrandLogos = [...targetBrandIds].filter((id) => {
    const brand = brandById.get(id);
    return !brand || brand.data.logo_identity_verified !== true || !String(brand.data.logo_url ?? "").trim();
  });
  const citySummary = [...targetCityIds].map((cityId) => {
    const prices = positivePrices.filter((row) => String(row.data.city_id) === cityId);
    return {
      city: cityById.get(cityId),
      prices: prices.length,
      publicPrices: prices.filter((row) => row.data.requires_review !== true).length,
      reviewOnlyPrices: prices.filter((row) => row.data.requires_review === true).length,
      products: new Set(prices.map((row) => String(row.data.product_id))).size,
    };
  }).sort((left, right) => String(left.city).localeCompare(String(right.city)));
  const allPrices = byTable("product_prices").filter((row) => (
    row.data.price_available !== false && Number(row.data.price) > 0
  ));
  const result = {
    auditedSince: new Date(since).toISOString(),
    citySummary,
    importedPrices: positivePrices.length,
    publicImportedPrices: positivePrices.filter((row) => row.data.requires_review !== true).length,
    reviewOnlyImportedPrices: positivePrices.filter((row) => row.data.requires_review === true).length,
    importedProducts: targetProducts.length,
    duplicatePriceKeys,
    missingProductReferences,
    missingVerifiedImages: missingVerifiedImages.length,
    missingVerifiedImageProducts: missingVerifiedImages.slice(0, 20).map((row) => ({
      id: row.id,
      brand: row.data.brand,
      name: row.data.name,
    })),
    brandsUsed: targetBrandIds.size,
    missingVerifiedBrandLogos: missingVerifiedBrandLogos.length,
    global: {
      cities: byTable("cities").length,
      categories: byTable("categories").filter((row) => row.data.is_active !== false).length,
      subcategories: byTable("sub_categories").filter((row) => row.data.is_active !== false).length,
      brands: byTable("brand_spotlights").filter((row) => row.data.is_active !== false).length,
      products: byTable("products").filter((row) => row.data.is_active !== false).length,
      prices: allPrices.length,
      publicPrices: allPrices.filter((row) => row.data.requires_review !== true).length,
      reviewOnlyPrices: allPrices.filter((row) => row.data.requires_review === true).length,
    },
  };

  console.log(JSON.stringify(result, null, 2));
  if (expectedPrices && positivePrices.length !== expectedPrices) {
    throw new Error(`Expected ${expectedPrices} imported prices, found ${positivePrices.length}.`);
  }
  if (duplicatePriceKeys || missingProductReferences || missingVerifiedImages.length) {
    throw new Error("Catalog import integrity checks failed.");
  }
} finally {
  await prisma.$disconnect();
}
