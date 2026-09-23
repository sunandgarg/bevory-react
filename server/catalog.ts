import type { Request, Response } from "express";
import type { Prisma } from "@prisma/client";
import { findIndexedContentData, prisma, toRecordData } from "./db.js";

type CatalogRow = Record<string, unknown>;

type CatalogVariant = {
  volume: string;
  volume_ml: number | null;
  price: number;
  mrp: number | null;
};

type CachedCatalog = {
  expiresAt: number;
  payload: ReturnType<typeof buildCityCatalog>;
};

type CatalogView = "full" | "home" | "category";

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const PUBLIC_CACHE_CONTROL = "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400";
const cityCatalogCache = new Map<string, CachedCatalog>();
const cityCatalogBuilds = new Map<string, Promise<ReturnType<typeof buildCityCatalog>>>();
let cacheGeneration = 0;

const jsonRows = (records: Array<{ data: Prisma.JsonValue }>) =>
  records.map(({ data }) => toRecordData(data));

const isActive = (row: CatalogRow) => row.is_active !== false;

const canonicalCategoryName = (row: CatalogRow) => (
  String(row.slug ?? "").toLowerCase() === "beers" ? "Beer" : row.name
);

const preferredVariant = (left: CatalogVariant, right: CatalogVariant) => {
  const leftPreferred = left.volume_ml === 750 ? 1 : 0;
  const rightPreferred = right.volume_ml === 750 ? 1 : 0;
  return rightPreferred - leftPreferred || (right.volume_ml ?? 0) - (left.volume_ml ?? 0);
};

export const buildCityCatalog = (
  prices: CatalogRow[],
  products: CatalogRow[],
  categories: CatalogRow[],
  subcategories: CatalogRow[],
) => {
  const variantsByProduct = new Map<string, CatalogVariant[]>();
  for (const row of prices) {
    if (row.price_available === false || row.requires_review === true) continue;
    const productId = String(row.product_id ?? "");
    const price = Number(row.price);
    if (!productId || !Number.isFinite(price) || price <= 0) continue;
    const variants = variantsByProduct.get(productId) ?? [];
    variants.push({
      volume: String(row.volume || `${row.volume_ml || ""}ml`),
      volume_ml: row.volume_ml == null ? null : Number(row.volume_ml),
      price,
      mrp: row.mrp == null ? null : Number(row.mrp),
    });
    variantsByProduct.set(productId, variants);
  }

  const categoryById = new Map(categories.filter(isActive).map((row) => [String(row.id), row]));
  const subcategoryById = new Map(subcategories.filter(isActive).map((row) => [String(row.id), row]));
  const availableProducts: CatalogRow[] = products
    .filter((row) => isActive(row) && variantsByProduct.has(String(row.id)))
    .map<CatalogRow>((row) => {
      const variants = (variantsByProduct.get(String(row.id)) ?? []).sort(preferredVariant);
      const preferred = variants[0];
      const category = categoryById.get(String(row.category_id ?? ""));
      const subcategory = subcategoryById.get(String(row.sub_category_id ?? ""));
      return {
        id: row.id,
        name: row.name,
        slug: row.slug,
        brand: row.brand,
        brand_id: row.brand_id ?? null,
        category_id: row.category_id ?? null,
        sub_category_id: row.sub_category_id ?? null,
        price: preferred?.price ?? null,
        mrp: preferred?.mrp ?? null,
        volume: preferred?.volume ?? row.volume ?? null,
        rating: row.rating ?? null,
        review_count: row.review_count ?? null,
        image_emoji: row.image_emoji ?? null,
        image_url: row.image_url ?? null,
        origin: row.origin ?? null,
        origin_flag: row.origin_flag ?? null,
        abv: row.abv ?? null,
        age: row.age ?? null,
        type_tag: row.type_tag ?? null,
        taste_profile: row.taste_profile ?? null,
        is_trending: row.is_trending === true,
        is_all_time_favourite: row.is_all_time_favourite === true,
        available_variants: variants,
        category: category ? {
          name: canonicalCategoryName(category),
          slug: category.slug,
          emoji: category.emoji ?? null,
        } : null,
        sub_category: subcategory ? {
          name: subcategory.name,
          slug: subcategory.slug ?? null,
          emoji: subcategory.emoji ?? null,
        } : null,
      };
    })
    .sort((left, right) => (
      String(left.brand ?? "").localeCompare(String(right.brand ?? ""))
      || String(left.name ?? "").localeCompare(String(right.name ?? ""))
    ));

  const activeCategories = categories
    .filter(isActive)
    .sort((left, right) => Number(left.order_index ?? 0) - Number(right.order_index ?? 0))
    .map((row) => ({
      id: row.id,
      name: canonicalCategoryName(row),
      slug: row.slug,
      emoji: row.emoji ?? null,
      image_url: row.image_url ?? null,
      description: row.description ?? null,
    }));

  return {
    categories: activeCategories,
    products: availableProducts,
    totalProducts: availableProducts.length,
  };
};

export const invalidateCatalogCache = () => {
  cacheGeneration += 1;
  cityCatalogCache.clear();
  cityCatalogBuilds.clear();
};

const toCatalogCard = (product: CatalogRow) => ({
  id: product.id,
  name: product.name,
  slug: product.slug,
  brand: product.brand,
  brand_id: product.brand_id ?? null,
  category_id: product.category_id ?? null,
  sub_category_id: product.sub_category_id ?? null,
  price: product.price ?? null,
  mrp: product.mrp ?? null,
  volume: product.volume ?? null,
  rating: product.rating ?? null,
  image_emoji: product.image_emoji ?? null,
  image_url: product.image_url ?? null,
  origin: product.origin ?? null,
  origin_flag: product.origin_flag ?? null,
  type_tag: product.type_tag ?? null,
  is_trending: product.is_trending === true,
  is_all_time_favourite: product.is_all_time_favourite === true,
  category: product.category ?? null,
  sub_category: product.sub_category ?? null,
});

export const buildHomeCatalog = (catalog: ReturnType<typeof buildCityCatalog>) => {
  const productsPerCategory = 8;
  const counts = new Map<string, number>();
  const categoryCounts = catalog.products.reduce<Record<string, number>>((result, product) => {
    const categoryId = String(product.category_id ?? "");
    if (categoryId) result[categoryId] = (result[categoryId] ?? 0) + 1;
    return result;
  }, {});
  const brandNames = [...new Set(catalog.products.map((product) => String(product.brand ?? "").trim()).filter(Boolean))];
  const products = [...catalog.products]
    .sort((left, right) => (
      Number(right.is_trending === true) - Number(left.is_trending === true)
      || Number(right.rating ?? 0) - Number(left.rating ?? 0)
      || String(left.name ?? "").localeCompare(String(right.name ?? ""))
    ))
    .filter((product) => {
      const categorySlug = String((product.category as CatalogRow | null)?.slug ?? "uncategorized");
      const current = counts.get(categorySlug) ?? 0;
      if (current >= productsPerCategory) return false;
      counts.set(categorySlug, current + 1);
      return true;
    });

  return { ...catalog, products: products.map(toCatalogCard), categoryCounts, brandNames };
};

export const buildCategoryCatalog = (catalog: ReturnType<typeof buildCityCatalog>, categorySlug: string) => {
  const matchesCategory = (slug: string) => categorySlug === "wine"
    ? slug === "wine" || slug.includes("wine") || slug === "champagne"
    : slug === categorySlug;
  const products = catalog.products.filter((product) => (
    matchesCategory(String((product.category as CatalogRow | null)?.slug ?? ""))
  ));
  return {
    categories: catalog.categories.filter((category) => matchesCategory(String(category.slug ?? ""))),
    products: products.map(toCatalogCard),
    totalProducts: products.length,
  };
};

export const paginateCatalog = <T extends { products: CatalogRow[]; totalProducts: number }>(
  payload: T,
  offset: number,
  limit: number,
) => ({
  ...payload,
  products: payload.products.slice(offset, offset + limit),
  offset,
  limit,
  hasMore: offset + limit < payload.totalProducts,
});

const catalogCacheKey = (cityId: string, view: CatalogView, categorySlug = "") => (
  view === "category" ? `${cityId}:category:${categorySlug}` : `${cityId}:${view}`
);

const buildCatalogPayload = async (cityId: string, view: CatalogView, categorySlug = "") => {
  const priceRecords = await findIndexedContentData("product_prices", {
    city_id: cityId,
    price_available: true,
  }) ?? await prisma.contentRecord.findMany({
    where: {
      tableName: "product_prices",
      AND: [
        { data: { path: "$.city_id", equals: cityId } },
        { data: { path: "$.price_available", equals: true } },
        { NOT: { data: { path: "$.requires_review", equals: true } } },
      ],
    },
    select: { data: true },
  });
  const prices = jsonRows(priceRecords);
  const productIds = [...new Set(prices.map((row) => String(row.product_id ?? "")).filter(Boolean))];

  const [productRecords, categoryRecords, subcategoryRecords] = await Promise.all([
    productIds.length
      ? prisma.contentRecord.findMany({
          where: { tableName: "products", recordId: { in: productIds } },
          select: { data: true },
        })
      : Promise.resolve([]),
    prisma.contentRecord.findMany({ where: { tableName: "categories" }, select: { data: true } }),
    prisma.contentRecord.findMany({ where: { tableName: "sub_categories" }, select: { data: true } }),
  ]);

  const fullCatalog = buildCityCatalog(
    prices,
    jsonRows(productRecords),
    jsonRows(categoryRecords),
    jsonRows(subcategoryRecords),
  );
  if (view === "home") return buildHomeCatalog(fullCatalog);
  if (view === "category") return buildCategoryCatalog(fullCatalog, categorySlug);
  return fullCatalog;
};

const getCatalogPayload = async (cityId: string, view: CatalogView, categorySlug = "") => {
  const cacheKey = catalogCacheKey(cityId, view, categorySlug);
  const cached = cityCatalogCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.payload;

  const inFlight = cityCatalogBuilds.get(cacheKey);
  if (inFlight) return inFlight;

  const generation = cacheGeneration;
  const build = buildCatalogPayload(cityId, view, categorySlug)
    .then((payload) => {
      if (generation === cacheGeneration) {
        cityCatalogCache.set(cacheKey, { payload, expiresAt: Date.now() + CACHE_TTL_MS });
      }
      return payload;
    })
    .finally(() => {
      if (cityCatalogBuilds.get(cacheKey) === build) cityCatalogBuilds.delete(cacheKey);
    });
  cityCatalogBuilds.set(cacheKey, build);
  return build;
};

export const prewarmCityHomeCatalogs = async () => {
  const cityRecords = await prisma.contentRecord.findMany({
    where: { tableName: "cities" },
    select: { recordId: true, data: true },
  });
  const cityIds = cityRecords
    .filter(({ data }) => toRecordData(data).is_visible !== false)
    .map(({ recordId, data }) => String(toRecordData(data).id ?? recordId).trim())
    .filter(Boolean);

  for (let index = 0; index < cityIds.length; index += 2) {
    await Promise.allSettled(cityIds.slice(index, index + 2).map((cityId) => (
      getCatalogPayload(cityId, "home")
    )));
  }
  return cityIds.length;
};

export const cityCatalogHandler = async (req: Request, res: Response) => {
  const cityId = String(req.params.cityId ?? "").trim();
  const requestedView = String(req.query.view ?? "full");
  const categorySlug = String(req.query.category ?? "").trim().toLowerCase();
  const view: CatalogView = requestedView === "home" ? "home" : requestedView === "category" && categorySlug ? "category" : "full";
  const requestedLimit = Number(req.query.limit);
  const requestedOffset = Number(req.query.offset);
  const paginated = Number.isInteger(requestedLimit) && requestedLimit > 0;
  const limit = paginated ? Math.min(requestedLimit, 50) : 0;
  const offset = Number.isInteger(requestedOffset) && requestedOffset > 0 ? requestedOffset : 0;
  if (!cityId || cityId.length > 191 || !/^[a-zA-Z0-9_-]+$/.test(cityId)) {
    return res.status(400).json({ data: null, error: { message: "A valid city is required" } });
  }
  if (view === "category" && (categorySlug.length > 100 || !/^[a-z0-9-]+$/.test(categorySlug))) {
    return res.status(400).json({ data: null, error: { message: "A valid category is required" } });
  }

  try {
    const payload = await getCatalogPayload(cityId, view, categorySlug);
    const responsePayload = paginated && view !== "home"
      ? paginateCatalog(payload, offset, limit)
      : payload;
    res.set("Cache-Control", PUBLIC_CACHE_CONTROL);
    return res.json({ data: responsePayload, error: null });
  } catch (error) {
    return res.status(500).json({
      data: null,
      error: { message: error instanceof Error ? error.message : "Catalogue unavailable" },
    });
  }
};
