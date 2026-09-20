import "dotenv/config";
import { createHash } from "node:crypto";
import { Prisma, PrismaClient } from "@prisma/client";
import { fullProductName } from "../src/lib/productName.js";

type JsonObject = Record<string, unknown>;
type CatalogueRow = { id: string; table: string; data: JsonObject };
type PlannedRecord = { tableName: string; recordId: string; data: JsonObject };

const prisma = new PrismaClient();

const REFERENCE_FIELDS: Record<string, string[]> = {
  blog_posts: ["linked_product_id"],
  brand_spotlights: ["featured_product_id"],
  preferred_brands: ["product_id"],
  product_reviews: ["product_id"],
  user_favorites: ["product_id"],
  video_reviews: ["product_id"],
};

const clean = (value: unknown) => String(value ?? "").replace(/\s+/g, " ").trim();
const slugify = (value: string) => value
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/&/g, " and ")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");
const identity = (value: string) => value
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/&/g, "and")
  .replace(/[^a-z0-9]+/g, "");
const jsonObject = (value: Prisma.JsonValue): JsonObject => (
  value && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : {}
);
const hasContent = (value: unknown) => Array.isArray(value)
  ? value.length > 0
  : value !== null && value !== undefined && clean(value).length > 0;
const uniqueValues = (values: unknown[]) => [...new Map(values
  .filter((value) => value !== null && value !== undefined && clean(value).length > 0)
  .map((value) => [JSON.stringify(value), value])).values()];

export const semanticProductKey = (brand: unknown, name: unknown) => (
  identity(fullProductName(clean(brand), clean(name)))
);

const stableId = (namespace: string, value: string) => {
  const digest = createHash("sha256").update(value).digest("hex").slice(0, 24);
  return `lc-${namespace}-${digest}`;
};

const volumeMl = (data: JsonObject) => {
  const numeric = Number(data.volume_ml);
  if (Number.isFinite(numeric) && numeric > 0) return Math.round(numeric);
  const match = clean(data.volume).match(/([0-9]+(?:\.[0-9]+)?)\s*(ml|l)\b/i);
  if (!match) return null;
  const amount = Number(match[1]);
  return Math.round(match[2].toLowerCase() === "l" ? amount * 1000 : amount);
};

const priceLocationKey = (row: CatalogueRow) => {
  const size = volumeMl(row.data);
  return `${clean(row.data.city_id)}|${size ?? clean(row.data.volume).toLowerCase()}`;
};

const productVolumes = (data: JsonObject) => {
  const values = Array.isArray(data.available_volumes_ml) ? data.available_volumes_ml : [];
  return values.map(Number).filter((value) => Number.isFinite(value) && value > 0);
};

const canonicalScore = (product: CatalogueRow, prices: CatalogueRow[]) => {
  const brand = clean(product.data.brand);
  const name = clean(product.data.name);
  const nameRepeatsBrand = slugify(name).startsWith(slugify(brand));
  return (
    prices.length * 1_000_000
    + productVolumes(product.data).length * 10_000
    + (hasContent(product.data.image_url) ? 1_000 : 0)
    + (nameRepeatsBrand ? 0 : 100)
    - clean(product.data.slug).length
  );
};

const mergeProductData = (canonical: CatalogueRow, duplicates: CatalogueRow[], now: string) => {
  const merged: JsonObject = { ...canonical.data };
  for (const duplicate of duplicates) {
    for (const [key, value] of Object.entries(duplicate.data)) {
      if (["id", "slug", "brand", "name", "brand_id", "created_at"].includes(key)) continue;
      if (Array.isArray(value)) {
        const existing = Array.isArray(merged[key]) ? merged[key] as unknown[] : [];
        merged[key] = uniqueValues([...existing, ...value]);
      } else if (!hasContent(merged[key]) && hasContent(value)) {
        merged[key] = value;
      }
    }
  }
  const aliases = uniqueValues([
    ...(Array.isArray(merged.product_aliases) ? merged.product_aliases : []),
    ...duplicates.filter((item) => item.id !== canonical.id).map((item) => item.data.slug),
  ]).map(String);
  merged.id = canonical.id;
  merged.available_volumes_ml = [...new Set(duplicates.flatMap((item) => productVolumes(item.data)))]
    .sort((left, right) => right - left);
  merged.product_aliases = aliases;
  merged.consolidated_from_ids = uniqueValues([
    ...(Array.isArray(merged.consolidated_from_ids) ? merged.consolidated_from_ids : []),
    ...duplicates.filter((item) => item.id !== canonical.id).map((item) => item.id),
  ]).map(String);
  merged.canonical_product_identity = semanticProductKey(merged.brand, merged.name);
  merged.consolidated_at = now;
  merged.updated_at = now;
  merged.is_active = true;
  return merged;
};

export const highConfidenceDuplicateGroups = (products: CatalogueRow[], prices: CatalogueRow[]) => {
  const pricesByProduct = new Map<string, CatalogueRow[]>();
  for (const price of prices) {
    const productId = clean(price.data.product_id);
    const rows = pricesByProduct.get(productId) ?? [];
    rows.push(price);
    pricesByProduct.set(productId, rows);
  }
  const grouped = new Map<string, CatalogueRow[]>();
  for (const product of products.filter((item) => item.data.is_active !== false)) {
    const key = semanticProductKey(product.data.brand, product.data.name);
    if (!key) continue;
    const rows = grouped.get(key) ?? [];
    rows.push(product);
    grouped.set(key, rows);
  }

  const safe: Array<{ key: string; products: CatalogueRow[]; canonical: CatalogueRow }> = [];
  const review: Array<{ key: string; reason: string; products: string[] }> = [];
  for (const [key, group] of grouped) {
    if (group.length < 2) continue;
    const categories = new Set(group.map((item) => clean(item.data.category_id)).filter(Boolean));
    const subcategories = new Set(group.map((item) => clean(item.data.sub_category_id)).filter(Boolean));
    const images = new Set(group.map((item) => clean(item.data.image_url)).filter(Boolean));
    if (categories.size !== 1) {
      review.push({ key, reason: "category conflict", products: group.map((item) => clean(item.data.slug)) });
      continue;
    }
    if (images.size > 1 || (!images.size && subcategories.size > 1)) {
      review.push({ key, reason: images.size > 1 ? "image conflict" : "unverified identity", products: group.map((item) => clean(item.data.slug)) });
      continue;
    }
    const priceGroups = new Map<string, CatalogueRow[]>();
    for (const product of group) {
      for (const price of pricesByProduct.get(product.id) ?? []) {
        const locationKey = priceLocationKey(price);
        const rows = priceGroups.get(locationKey) ?? [];
        rows.push(price);
        priceGroups.set(locationKey, rows);
      }
    }
    const hasPriceConflict = [...priceGroups.values()].some((rows) => (
      new Set(rows.map((row) => Number(row.data.price)).filter((value) => Number.isFinite(value) && value > 0)).size > 1
    ));
    if (hasPriceConflict) {
      review.push({ key, reason: "same-city price conflict", products: group.map((item) => clean(item.data.slug)) });
      continue;
    }
    const canonical = [...group].sort((left, right) => (
      canonicalScore(right, pricesByProduct.get(right.id) ?? [])
      - canonicalScore(left, pricesByProduct.get(left.id) ?? [])
      || left.id.localeCompare(right.id)
    ))[0];
    safe.push({ key, products: group, canonical });
  }
  return { safe, review, pricesByProduct };
};

const main = async () => {
  const apply = process.argv.includes("--apply");
  const now = new Date().toISOString();
  const tableNames = ["products", "product_prices", ...Object.keys(REFERENCE_FIELDS)];
  const records = await prisma.contentRecord.findMany({
    where: { tableName: { in: tableNames } },
  });
  const rows: CatalogueRow[] = records.map((record) => ({
    id: record.recordId,
    table: record.tableName,
    data: jsonObject(record.data),
  }));
  const products = rows.filter((row) => row.table === "products");
  const prices = rows.filter((row) => row.table === "product_prices");
  const { safe, review, pricesByProduct } = highConfidenceDuplicateGroups(products, prices);
  const planned = new Map<string, PlannedRecord>();
  const oldToCanonical = new Map<string, { id: string; slug: string }>();
  let priceTargets = 0;
  let retiredPriceRows = 0;

  const setRecord = (tableName: string, recordId: string, data: JsonObject) => {
    planned.set(`${tableName}:${recordId}`, { tableName, recordId, data });
  };

  for (const group of safe) {
    const canonicalSlug = clean(group.canonical.data.slug);
    const merged = mergeProductData(group.canonical, group.products, now);
    setRecord("products", group.canonical.id, merged);
    for (const duplicate of group.products) {
      if (duplicate.id === group.canonical.id) continue;
      oldToCanonical.set(duplicate.id, { id: group.canonical.id, slug: canonicalSlug });
      setRecord("products", duplicate.id, {
        ...duplicate.data,
        is_active: false,
        canonical_product_id: group.canonical.id,
        canonical_slug: canonicalSlug,
        duplicate_reason: "same normalised full name, category and verified image",
        consolidated_at: now,
        updated_at: now,
      });
    }

    const groupedPrices = new Map<string, CatalogueRow[]>();
    for (const product of group.products) {
      for (const price of pricesByProduct.get(product.id) ?? []) {
        const key = priceLocationKey(price);
        const entries = groupedPrices.get(key) ?? [];
        entries.push(price);
        groupedPrices.set(key, entries);
      }
    }
    for (const priceRows of groupedPrices.values()) {
      const winner = [...priceRows].sort((left, right) => {
        const score = (row: CatalogueRow) => (
          (row.data.price_available === false ? 0 : 100)
          + (row.data.requires_review === true ? 0 : 50)
          + (clean(row.data.product_id) === group.canonical.id ? 20 : 0)
        );
        return score(right) - score(left)
          || clean(right.data.updated_at).localeCompare(clean(left.data.updated_at))
          || left.id.localeCompare(right.id);
      })[0];
      const size = volumeMl(winner.data);
      if (!size || !clean(winner.data.city_id)) continue;
      const targetId = stableId("price", `${group.canonical.id}|${clean(winner.data.city_id)}|${size}`);
      const targetData: JsonObject = {
        ...winner.data,
        id: targetId,
        product_id: group.canonical.id,
        volume_ml: size,
        volume: clean(winner.data.volume) || `${size}ml`,
        consolidated_from_price_ids: uniqueValues(priceRows.map((row) => row.id)).map(String),
        consolidated_at: now,
        updated_at: now,
      };
      setRecord("product_prices", targetId, targetData);
      priceTargets += 1;
      for (const source of priceRows) {
        if (source.id === targetId) continue;
        setRecord("product_prices", source.id, {
          ...source.data,
          price_available: false,
          is_active: false,
          canonical_price_id: targetId,
          canonical_product_id: group.canonical.id,
          consolidated_at: now,
          updated_at: now,
        });
        retiredPriceRows += 1;
      }
    }
  }

  let referencesUpdated = 0;
  for (const row of rows) {
    const fields = REFERENCE_FIELDS[row.table];
    if (!fields) continue;
    let changed = false;
    const next = { ...row.data };
    for (const field of fields) {
      const canonical = oldToCanonical.get(clean(next[field]));
      if (!canonical) continue;
      next[field] = canonical.id;
      changed = true;
    }
    if (changed) {
      next.updated_at = now;
      setRecord(row.table, row.id, next);
      referencesUpdated += 1;
    }
  }

  if (apply) {
    const updates = [...planned.values()];
    for (let index = 0; index < updates.length; index += 100) {
      const batch = updates.slice(index, index + 100);
      await prisma.$transaction(batch.map((record) => prisma.contentRecord.upsert({
        where: { key: `${record.tableName}:${record.recordId}` },
        update: { data: record.data as Prisma.InputJsonObject },
        create: {
          key: `${record.tableName}:${record.recordId}`,
          tableName: record.tableName,
          recordId: record.recordId,
          data: record.data as Prisma.InputJsonObject,
        },
      })));
    }
  }

  console.log(JSON.stringify({
    mode: apply ? "apply" : "dry-run",
    activeProductsBefore: products.filter((item) => item.data.is_active !== false).length,
    safeDuplicateGroups: safe.length,
    duplicateProductsConsolidated: [...oldToCanonical].length,
    activeProductsAfter: products.filter((item) => item.data.is_active !== false).length - oldToCanonical.size,
    canonicalPriceRows: priceTargets,
    retiredDuplicatePriceRows: retiredPriceRows,
    referencesUpdated,
    recordsPlanned: planned.size,
    reviewGroups: review.length,
    review,
  }, null, 2));
};

if (process.env.NODE_ENV !== "test" && process.argv[1]?.includes("consolidate-product-duplicates")) {
  main().finally(() => prisma.$disconnect());
}
