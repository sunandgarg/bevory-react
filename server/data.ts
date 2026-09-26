import type { Response } from "express";
import { Prisma } from "@prisma/client";
import { randomUUID } from "node:crypto";
import type { AuthenticatedRequest } from "./auth.js";
import { userIsAdmin } from "./auth.js";
import { findIndexedContentData, prisma, toRecordData } from "./db.js";
import { invalidateCatalogCache } from "./catalog.js";
import { applyProductContentOverlay } from "../src/lib/productContentOverlay.js";
import { getProductRoutes, invalidateProductRoutes } from "./productRoutes.js";

const TABLES = new Set([
  "announcements", "app_settings", "blog_posts", "brand_spotlights", "categories",
  "cheers_guides", "cities", "cocktails", "comparisons", "content_drafts", "countries",
  "help_support_items", "notifications", "party_recommendations", "preferred_brands",
  "product_prices", "product_reviews", "product_types", "products", "profiles",
  "recent_searches", "saved_locations", "spiritz_magazine", "states", "sub_categories",
  "user_favorites", "user_permissions", "user_preferences", "user_roles", "video_categories",
  "video_creators", "video_reviews",
]);

const USER_TABLES = new Set([
  "comparisons", "notifications", "preferred_brands", "profiles", "recent_searches",
  "saved_locations", "user_favorites", "user_permissions", "user_preferences", "user_roles",
]);

const CATALOG_TABLES = new Set(["categories", "product_prices", "products", "sub_categories"]);
const ADMIN_READ_TABLES = new Set(["content_drafts", "party_recommendations"]);
const OPERATIONS = new Set(["select", "insert", "update", "delete", "upsert"]);

const UNIQUE_COLUMNS: Record<string, string> = {
  app_settings: "key",
  blog_posts: "slug",
  brand_spotlights: "slug",
  categories: "slug",
  cheers_guides: "slug",
  cocktails: "slug",
  countries: "code",
  products: "slug",
  spiritz_magazine: "slug",
  sub_categories: "slug",
  video_creators: "slug",
  video_reviews: "slug",
};

export type Filter = {
  column?: string;
  operator: string;
  value?: unknown;
  filters?: Filter[];
};

export type QueryPayload = {
  table: string;
  operation: "select" | "insert" | "update" | "delete" | "upsert";
  values?: Record<string, unknown> | Array<Record<string, unknown>>;
  filters?: Filter[];
  orders?: Array<{ column: string; ascending?: boolean }>;
  limit?: number;
  range?: [number, number];
  select?: string;
  count?: "exact";
  head?: boolean;
  onConflict?: string;
};

type Selection = {
  outputKey: string;
  sourceKey: string;
  nested?: Selection[];
  wildcard?: boolean;
};

const splitSelection = (value: string) => {
  const parts: string[] = [];
  let depth = 0;
  let start = 0;
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] === "(") depth += 1;
    else if (value[index] === ")") depth = Math.max(0, depth - 1);
    else if (value[index] === "," && depth === 0) {
      parts.push(value.slice(start, index));
      start = index + 1;
    }
  }
  parts.push(value.slice(start));
  return parts.map((part) => part.trim()).filter(Boolean);
};

export const parseSelection = (value = "*"): Selection[] => splitSelection(value).map((token) => {
  if (token === "*") return { outputKey: "*", sourceKey: "*", wildcard: true };
  const relation = token.match(/^([a-zA-Z0-9_]+)(?::([a-zA-Z0-9_]+))?(?:!inner)?\(([\s\S]*)\)$/);
  if (relation) {
    return {
      outputKey: relation[1],
      sourceKey: relation[2] ?? relation[1],
      nested: parseSelection(relation[3]),
    };
  }
  const key = token.replace(/!inner$/, "").trim();
  return { outputKey: key, sourceKey: key };
});

const projectRow = (row: Record<string, unknown>, selection: Selection[]): Record<string, unknown> => {
  const projected: Record<string, unknown> = selection.some(({ wildcard }) => wildcard) ? { ...row } : {};
  for (const field of selection) {
    if (field.wildcard) continue;
    const value = row[field.outputKey] ?? row[field.sourceKey];
    if (field.nested) {
      projected[field.outputKey] = Array.isArray(value)
        ? value.map((item) => item && typeof item === "object"
          ? projectRow(item as Record<string, unknown>, field.nested!)
          : item)
        : value && typeof value === "object"
          ? projectRow(value as Record<string, unknown>, field.nested)
          : value ?? null;
    } else if (field.sourceKey in row || field.outputKey in row) {
      projected[field.outputKey] = value;
    }
  }
  return projected;
};

export const applySelection = (rows: Array<Record<string, unknown>>, value = "*") => {
  const selection = parseSelection(value);
  return rows.map((row) => projectRow(row, selection));
};

const jsonSafe = (value: Record<string, unknown>) =>
  JSON.parse(JSON.stringify(value)) as Prisma.InputJsonObject;

const stripCredentialFields = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(stripCredentialFields);
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(Object.entries(value as Record<string, unknown>)
    .filter(([key]) => !/(secret|token|password|credential|service.?account|api.?key)/i.test(key))
    .map(([key, nested]) => [key, stripCredentialFields(nested)]));
};

const safeTableInput = (table: string, value: Record<string, unknown>) =>
  table === "app_settings"
    ? stripCredentialFields(value) as Record<string, unknown>
    : value;

const IMAGE_FIELD_TOKENS = new Set([
  "image", "images", "logo", "logos", "cover", "thumbnail", "avatar", "favicon",
  "covers", "thumbnails", "avatars", "favicons", "photo", "photos", "picture", "pictures",
  "banner", "banners", "hero", "heroes", "background", "backgrounds", "poster", "posters",
  "icon", "icons",
]);
const EXTERNAL_REFERENCE_FIELD_TOKENS = new Set([
  "source", "provenance", "page", "link", "video", "youtube",
]);
const IMAGE_OBJECT_URL_KEYS = new Set(["url", "src", "href"]);

const fieldTokens = (field: string) => field
  .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
  .toLowerCase()
  .split(/[^a-z0-9]+/)
  .filter(Boolean);

const imageField = (field: string) => {
  const tokens = fieldTokens(field);
  return tokens.some((token) => (
    IMAGE_FIELD_TOKENS.has(token)
    || /^(?:images?|logos?|covers?|thumbnails?|avatars?|favicons?|photos?|pictures?|banners?|heroes?|backgrounds?|posters?|icons?)\d+$/.test(token)
  ))
    && !tokens.some((token) => EXTERNAL_REFERENCE_FIELD_TOKENS.has(token));
};

const externalReferenceField = (field: string) => fieldTokens(field)
  .some((token) => EXTERNAL_REFERENCE_FIELD_TOKENS.has(token));

const decodeHtmlEntities = (value: string) => value.replace(
  /&(?:#(\d+);?|#x([\da-f]+);?|(?:colon|sol|tab|newline|amp|quot|apos);?)/gi,
  (entity, decimal: string | undefined, hexadecimal: string | undefined) => {
    if (decimal) return String.fromCodePoint(Number.parseInt(decimal, 10));
    if (hexadecimal) return String.fromCodePoint(Number.parseInt(hexadecimal, 16));
    const named: Record<string, string> = {
      "&colon;": ":",
      "&sol;": "/",
      "&tab;": "\t",
      "&newline;": "\n",
      "&amp;": "&",
      "&quot;": "\"",
      "&apos;": "'",
    };
    const normalizedEntity = entity.endsWith(";") ? entity.toLowerCase() : `${entity.toLowerCase()};`;
    return named[normalizedEntity] ?? entity;
  },
);

const assertFirstPartyImageUrl = (value: string, path: string, appOrigin: string) => {
  const candidate = decodeHtmlEntities(value).trim();
  if (!candidate) return;
  if (candidate.startsWith("//") || candidate.startsWith("\\\\") || candidate.includes("\\")) {
    throw new Error(`Image URL at ${path} must be local or use ${appOrigin}`);
  }

  let parsed: URL;
  try {
    parsed = new URL(candidate, `${appOrigin}/`);
  } catch {
    throw new Error(`Image URL at ${path} is invalid`);
  }
  if (
    !["http:", "https:"].includes(parsed.protocol)
    || parsed.origin !== appOrigin
    || parsed.username
    || parsed.password
  ) {
    throw new Error(`Image URL at ${path} must be local or use ${appOrigin}`);
  }
};

const attributeValues = (tag: string, attribute: "src" | "srcset") => {
  const values: string[] = [];
  const pattern = new RegExp(
    `(?:\\s|/)${attribute}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'=<>\u0060]+))`,
    "gi",
  );
  for (const match of tag.matchAll(pattern)) values.push(match[1] ?? match[2] ?? match[3] ?? "");
  return values;
};

const normalizeCssForUrlScan = (value: string) => decodeHtmlEntities(value)
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(
    /\\(?:([\da-f]{1,6})(?:\r\n|[\t\n\f\r ])?|([^\r\n\f])|(?:\r\n|[\n\f\r]))/gi,
    (_escape, hexadecimal: string | undefined, escapedCharacter: string | undefined) => {
      if (hexadecimal) {
        const codePoint = Number.parseInt(hexadecimal, 16);
        return codePoint > 0 && codePoint <= 0x10ffff ? String.fromCodePoint(codePoint) : "�";
      }
      return escapedCharacter ?? "";
    },
  );

const assertEmbeddedImageUrls = (value: string, path: string, appOrigin: string) => {
  const imageStarts = [...value.matchAll(/<img\b/gi)];
  const imageTags = [...value.matchAll(/<img\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi)];
  if (imageStarts.length !== imageTags.length) {
    throw new Error(`Image markup at ${path} is invalid`);
  }
  for (const tagMatch of imageTags) {
    const tag = tagMatch[0];
    for (const source of attributeValues(tag, "src")) {
      assertFirstPartyImageUrl(source, `${path}.<img src>`, appOrigin);
    }
    for (const sourceSet of attributeValues(tag, "srcset")) {
      for (const source of sourceSet.split(",").map((item) => item.trim().split(/\s+/)[0]).filter(Boolean)) {
        assertFirstPartyImageUrl(source, `${path}.<img srcset>`, appOrigin);
      }
    }
  }

  const normalizedCss = normalizeCssForUrlScan(value);
  if (/(?:^|[^\w-])(?:-webkit-)?image-set\s*\(/i.test(normalizedCss)) {
    throw new Error(`CSS image-set at ${path} is not allowed`);
  }
  const cssUrlPattern = /\burl\(\s*(?:"([^"]*)"|'([^']*)'|([^\s"')]+))\s*\)/gi;
  for (const match of normalizedCss.matchAll(cssUrlPattern)) {
    assertFirstPartyImageUrl(match[1] ?? match[2] ?? match[3] ?? "", `${path}.css-url`, appOrigin);
  }
};

const looksLikeImageReference = (value: string) => (
  /^(?:https?:|\/\/|\\\\|\/|\.\.?(?:\/|\\))/i.test(value.trim())
  || /\.(?:avif|gif|jpe?g|png|svg|webp)(?:[?#].*)?$/i.test(value.trim())
);

/**
 * Enforces the persistence boundary for rendered images. External URLs remain
 * valid in ordinary links, video fields and explicit source/provenance fields.
 */
export const validateFirstPartyImages = (
  value: unknown,
  appUrl = process.env.APP_URL || "http://localhost:8080",
) => {
  let appOrigin: string;
  try {
    appOrigin = new URL(appUrl).origin;
  } catch {
    throw new Error("APP_URL must be a valid absolute URL");
  }

  const visit = (
    nested: unknown,
    path: string,
    expectImageUrl = false,
    imageContainer = false,
    skipEmbeddedImages = false,
  ): void => {
    if (typeof nested === "string") {
      if (expectImageUrl) assertFirstPartyImageUrl(nested, path, appOrigin);
      if (!skipEmbeddedImages) assertEmbeddedImageUrls(nested, path, appOrigin);
      return;
    }
    if (Array.isArray(nested)) {
      nested.forEach((item, index) => visit(
        item,
        `${path}[${index}]`,
        expectImageUrl,
        imageContainer,
        skipEmbeddedImages,
      ));
      return;
    }
    if (!nested || typeof nested !== "object") return;

    const record = nested as Record<string, unknown>;
    const typedImage = String(record.type ?? "").toLowerCase() === "image";
    const objectIsImage = imageContainer || typedImage;
    for (const [key, child] of Object.entries(record)) {
      const keyIsImage = imageField(key);
      const keyIsExternalReference = externalReferenceField(key);
      const imageObjectUrl = objectIsImage && IMAGE_OBJECT_URL_KEYS.has(key.toLowerCase());
      const nestedImageContainer = keyIsImage && child != null && typeof child === "object";
      const nestedStringInImageContainer = objectIsImage
        && !keyIsExternalReference
        && typeof child === "string"
        && looksLikeImageReference(child);
      visit(
        child,
        `${path}.${key}`,
        keyIsImage || imageObjectUrl || nestedStringInImageContainer,
        nestedImageContainer,
        typedImage ? false : skipEmbeddedImages || keyIsExternalReference,
      );
    }
  };

  visit(value, "$root");
};

const PUBLIC_REVIEW_INSERT_COLUMNS = new Set([
  "product_id", "rating", "reviewer_name", "content", "taste_rating", "value_rating", "rebuy_rating",
  "is_approved", "is_featured", "is_reported",
]);

const publicReviewReport = (payload: QueryPayload) => {
  if (payload.table !== "product_reviews" || payload.operation !== "update") return false;
  const changes = Array.isArray(payload.values) ? payload.values[0] : payload.values;
  const filters = payload.filters ?? [];
  return Boolean(
    changes
    && changes.is_reported === true
    && Object.keys(changes).every((key) => ["is_reported", "report_reason", "reported_at"].includes(key))
    && filters.length === 1
    && filters[0].column === "id"
    && filters[0].operator === "eq"
    && typeof filters[0].value === "string"
    && filters[0].value.length > 0,
  );
};

const publicReviewInsert = (payload: QueryPayload) =>
  payload.table === "product_reviews"
  && payload.operation === "insert"
  && Boolean(payload.values)
  && (!Array.isArray(payload.values) || payload.values.length === 1);

export const queryAccessAllowed = (payload: QueryPayload, hasUser: boolean, isAdmin: boolean) => {
  if (!OPERATIONS.has(payload.operation)) return false;
  if (isAdmin) return true;
  if (payload.operation === "select" && ADMIN_READ_TABLES.has(payload.table)) return false;
  if (payload.operation === "select" && !USER_TABLES.has(payload.table)) return true;
  if (payload.table === "product_reviews") {
    return publicReviewInsert(payload) || publicReviewReport(payload);
  }
  if (!hasUser) return false;
  return USER_TABLES.has(payload.table)
    && payload.table !== "user_roles"
    && payload.table !== "user_permissions";
};

const boundedRating = (value: unknown, field: string) => {
  if (value == null || value === "") return null;
  const rating = Number(value);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) throw new Error(`${field} must be an integer from 1 to 5`);
  return rating;
};

const sanitizePublicReviewInsert = (input: Record<string, unknown>): Record<string, unknown> => {
  const unexpected = Object.keys(input).filter((key) => !PUBLIC_REVIEW_INSERT_COLUMNS.has(key));
  if (unexpected.length) throw new Error(`Unsupported public review field: ${unexpected[0]}`);
  const productId = String(input.product_id ?? "").trim();
  const reviewerName = String(input.reviewer_name ?? "").trim();
  const content = input.content == null ? null : String(input.content).trim() || null;
  const rating = boundedRating(input.rating, "Rating");
  if (!productId || productId.length > 191) throw new Error("A valid product is required");
  if (reviewerName.length < 2 || reviewerName.length > 100) throw new Error("Reviewer name must be 2 to 100 characters");
  if (rating == null) throw new Error("Rating is required");
  if (content && content.length > 2_000) throw new Error("Review content must be at most 2000 characters");
  return {
    product_id: productId,
    rating,
    reviewer_name: reviewerName,
    content,
    taste_rating: boundedRating(input.taste_rating, "Taste rating"),
    value_rating: boundedRating(input.value_rating, "Value rating"),
    rebuy_rating: boundedRating(input.rebuy_rating, "Rebuy rating"),
    is_approved: false,
    is_featured: false,
    is_reported: false,
  };
};

export const scopeWriteInput = (
  payload: QueryPayload,
  input: Record<string, unknown>,
  authUserId: string | undefined,
  isAdmin: boolean,
): Record<string, unknown> => {
  const safeInput = safeTableInput(payload.table, input);
  if (isAdmin) return safeInput;
  if (payload.table === "product_reviews" && payload.operation === "insert") {
    return sanitizePublicReviewInsert(safeInput);
  }
  if (payload.table === "product_reviews" && publicReviewReport(payload)) {
    return {
      is_reported: true,
      report_reason: String(safeInput.report_reason || "Inappropriate content").trim().slice(0, 500),
      reported_at: new Date().toISOString(),
    };
  }
  if (authUserId && USER_TABLES.has(payload.table)) {
    if (payload.table === "profiles") return { ...safeInput, id: authUserId };
    const { id: _untrustedId, ...ownedInput } = safeInput;
    return { ...ownedInput, user_id: authUserId };
  }
  return safeInput;
};

const comparable = (value: unknown) => value instanceof Date ? value.toISOString() : value;

const JSON_FILTER_COLUMN = /^[A-Za-z_][A-Za-z0-9_]*$/;
const isJsonScalar = (value: unknown): value is string | number | boolean => (
  typeof value === "string" || typeof value === "number" || typeof value === "boolean"
);

export const databaseWhereForFilters = (
  tableName: string,
  filters: Filter[] = [],
): Prisma.ContentRecordWhereInput => {
  const pushedFilters: Prisma.ContentRecordWhereInput[] = [];
  for (const filter of filters) {
    if (
      filter.operator !== "eq"
      || !filter.column
      || !JSON_FILTER_COLUMN.test(filter.column)
      || !isJsonScalar(filter.value)
    ) continue;

    if (filter.column === "id" && typeof filter.value === "string") {
      pushedFilters.push({ recordId: filter.value });
      continue;
    }

    pushedFilters.push({
      data: {
        path: `$.${filter.column}`,
        equals: filter.value,
      },
    });
  }

  return pushedFilters.length
    ? { tableName, AND: pushedFilters }
    : { tableName };
};

export const matchesFilter = (row: Record<string, unknown>, filter: Filter): boolean => {
  if (filter.operator === "or") return (filter.filters ?? []).some((part) => matchesFilter(row, part));
  const actual = comparable(row[filter.column ?? ""]);
  const expected = comparable(filter.value);
  switch (filter.operator) {
    case "eq": return actual === expected;
    case "neq": return actual !== expected;
    case "gt": return Number(actual) > Number(expected);
    case "gte": return Number(actual) >= Number(expected);
    case "lt": return Number(actual) < Number(expected);
    case "lte": return Number(actual) <= Number(expected);
    case "is": return expected === null ? actual == null : actual === expected;
    case "in": return Array.isArray(expected) && expected.some((item) => item === actual);
    case "ilike": {
      const needle = String(expected ?? "").replaceAll("%", "").toLowerCase();
      return String(actual ?? "").toLowerCase().includes(needle);
    }
    case "contains": return Array.isArray(actual) && Array.isArray(expected)
      && expected.every((item) => actual.includes(item));
    default: return false;
  }
};

const readTable = async (tableName: string, filters: Filter[] = []) => {
  const indexedFilters = Object.fromEntries(filters.flatMap((filter) => (
    filter.operator === "eq" && filter.column && isJsonScalar(filter.value)
      ? [[filter.column, filter.value]]
      : []
  )));
  const records = await findIndexedContentData(tableName, indexedFilters)
    ?? await prisma.contentRecord.findMany({
      where: databaseWhereForFilters(tableName, filters),
      select: { data: true },
    });
  return records.map(({ data }) => {
    const row = toRecordData(data);
    return tableName === "products" ? applyProductContentOverlay(row) : row;
  });
};

const attachRelationships = async (
  table: string,
  rows: Array<Record<string, unknown>>,
  selection: Selection[],
) => {
  const relationTables = new Set<string>();
  const belongsTo: Record<string, Array<{ aliases: string[]; foreignKey: string; target: string }>> = {
    blog_posts: [{ aliases: ["product", "products"], foreignKey: "linked_product_id", target: "products" }],
    brand_spotlights: [{ aliases: ["product", "products"], foreignKey: "featured_product_id", target: "products" }],
    cities: [{ aliases: ["state", "states"], foreignKey: "state_id", target: "states" }],
    comparisons: [{ aliases: ["city", "cities"], foreignKey: "city_id", target: "cities" }],
    party_recommendations: [{ aliases: ["category", "categories"], foreignKey: "category_id", target: "categories" }],
    preferred_brands: [
      { aliases: ["category", "categories"], foreignKey: "category_id", target: "categories" },
      { aliases: ["product", "products"], foreignKey: "product_id", target: "products" },
    ],
    product_prices: [
      { aliases: ["city", "cities"], foreignKey: "city_id", target: "cities" },
      { aliases: ["product", "products"], foreignKey: "product_id", target: "products" },
    ],
    product_reviews: [{ aliases: ["product", "products"], foreignKey: "product_id", target: "products" }],
    products: [
      { aliases: ["category", "categories"], foreignKey: "category_id", target: "categories" },
      { aliases: ["sub_category", "sub_categories"], foreignKey: "sub_category_id", target: "sub_categories" },
      { aliases: ["product_type", "type", "product_types"], foreignKey: "type_id", target: "product_types" },
    ],
    saved_locations: [{ aliases: ["city", "cities"], foreignKey: "city_id", target: "cities" }],
    states: [{ aliases: ["country", "countries"], foreignKey: "country_id", target: "countries" }],
    sub_categories: [{ aliases: ["category", "categories"], foreignKey: "category_id", target: "categories" }],
    user_favorites: [
      { aliases: ["cocktail", "cocktails"], foreignKey: "cocktail_id", target: "cocktails" },
      { aliases: ["product", "products"], foreignKey: "product_id", target: "products" },
    ],
    video_reviews: [
      { aliases: ["category", "video_categories"], foreignKey: "category_id", target: "video_categories" },
      { aliases: ["creator", "video_creators"], foreignKey: "creator_id", target: "video_creators" },
      { aliases: ["product", "products"], foreignKey: "product_id", target: "products" },
    ],
  };

  const relationSelections = selection.filter((field) => field.nested);
  const requestedRelations = (relation: { aliases: string[]; target: string }) => relationSelections.filter((field) => (
    relation.aliases.includes(field.outputKey)
    || relation.aliases.includes(field.sourceKey)
    || relation.target === field.sourceKey
  ));
  for (const relation of belongsTo[table] ?? []) {
    if (requestedRelations(relation).length) relationTables.add(relation.target);
  }
  const requestedProducts = table === "categories"
    ? relationSelections.filter((field) => field.outputKey === "products" || field.sourceKey === "products")
    : [];
  if (requestedProducts.length) relationTables.add("products");
  if ([...relationTables].includes("cities") || table === "cities") relationTables.add("states");
  if ([...relationTables].includes("states") || table === "states") relationTables.add("countries");
  const lookup = new Map<string, Array<Record<string, unknown>>>();
  await Promise.all([...relationTables].map(async (name) => lookup.set(name, await readTable(name))));

  const withNestedRelations = (target: string, related: Record<string, unknown> | null) => {
    if (!related) return null;
    if (target === "cities") {
      const state = lookup.get("states")?.find((candidate) => candidate.id === related.state_id) ?? null;
      return { ...related, state, states: state };
    }
    if (target === "states") {
      const country = lookup.get("countries")?.find((candidate) => candidate.id === related.country_id) ?? null;
      return { ...related, country, countries: country };
    }
    return related;
  };

  return rows.map((row) => {
    const enriched = { ...row };
    for (const relation of belongsTo[table] ?? []) {
      const requested = requestedRelations(relation);
      if (!requested.length) continue;
      const related = lookup.get(relation.target)?.find((candidate) => candidate.id === row[relation.foreignKey]) ?? null;
      const nested = withNestedRelations(relation.target, related);
      for (const field of requested) enriched[field.outputKey] = nested;
    }
    if (requestedProducts.length) {
      const products = (lookup.get("products") ?? []).filter((product) => product.category_id === row.id);
      for (const field of requestedProducts) enriched[field.outputKey] = products;
    }
    return enriched;
  });
};

const canAccess = async (req: AuthenticatedRequest, payload: QueryPayload, isAdmin: boolean) => {
  return queryAccessAllowed(payload, Boolean(req.authUser), isAdmin);
};

const applyUserScope = (req: AuthenticatedRequest, payload: QueryPayload, rows: Array<Record<string, unknown>>, isAdmin: boolean) => {
  if (isAdmin) return rows;
  if (payload.table === "product_reviews") {
    return rows.filter((row) => row.is_approved === true && row.is_reported !== true);
  }
  if (payload.table === "app_settings") {
    return rows.map((row) => stripCredentialFields(row) as Record<string, unknown>);
  }
  if (!req.authUser || !USER_TABLES.has(payload.table)) return rows;
  if (payload.table === "profiles") return rows.filter((row) => row.id === req.authUser!.id);
  return rows.filter((row) => row.user_id === req.authUser!.id);
};

const findUpsertRecord = async (table: string, row: Record<string, unknown>, onConflict?: string) => {
  if (row.id) return prisma.contentRecord.findUnique({ where: { key: `${table}:${String(row.id)}` } });
  const uniqueColumn = onConflict || UNIQUE_COLUMNS[table];
  if (!uniqueColumn || row[uniqueColumn] == null) return null;
  const existing = await prisma.contentRecord.findMany({ where: { tableName: table } });
  return existing.find(({ data }) => toRecordData(data)[uniqueColumn] === row[uniqueColumn]) ?? null;
};

export const queryHandler = async (req: AuthenticatedRequest, res: Response) => {
  const payload = req.body as QueryPayload | undefined;
  if (!payload || typeof payload !== "object") {
    return res.status(400).json({ data: null, error: { message: "A query payload is required" } });
  }
  if (!TABLES.has(payload.table)) return res.status(400).json({ data: null, error: { message: "Unknown table" } });
  if (!OPERATIONS.has(payload.operation)) {
    return res.status(400).json({ data: null, error: { message: "Unknown operation" } });
  }
  const isAdmin = req.authUser ? await userIsAdmin(req.authUser.id) : false;
  if (!await canAccess(req, payload, isAdmin)) {
    return res.status(req.authUser ? 403 : 401).json({ data: null, error: { message: "Not authorized" } });
  }

  try {
    if (payload.operation === "select") {
      const productRoutes = payload.table === "products" ? await getProductRoutes() : null;
      const filters = (payload.filters ?? []).map(filter => (
        productRoutes && filter.column === "slug" && filter.operator === "eq" && typeof filter.value === "string"
          ? { ...filter, value: productRoutes.storedByUrl.get(filter.value) || filter.value }
          : filter
      ));
      let rows = applyUserScope(req, payload, await readTable(payload.table, filters), isAdmin);
      rows = rows.filter((row) => filters.every((filter) => matchesFilter(row, filter)));
      if (productRoutes) rows = rows.map(row => ({ ...row, public_slug: productRoutes.publicByStored.get(String(row.slug)) || row.slug }));
      const count = rows.length;
      for (const order of [...(payload.orders ?? [])].reverse()) {
        rows.sort((left, right) => {
          const a = left[order.column];
          const b = right[order.column];
          const result = a == null ? 1 : b == null ? -1 : a < b ? -1 : a > b ? 1 : 0;
          return order.ascending === false ? -result : result;
        });
      }
      if (payload.range) rows = rows.slice(payload.range[0], payload.range[1] + 1);
      else if (payload.limit != null) rows = rows.slice(0, payload.limit);
      const selection = parseSelection(payload.select);
      rows = await attachRelationships(payload.table, rows, selection);
      rows = rows.map((row) => projectRow(row, selection));
      return res.json({ data: payload.head ? null : rows, error: null, count });
    }

    if (payload.operation === "insert" || payload.operation === "upsert") {
      const inputRows = Array.isArray(payload.values) ? payload.values : [payload.values ?? {}];
      const result: Array<Record<string, unknown>> = [];
      for (const input of inputRows) {
        const now = new Date().toISOString();
        const scoped = scopeWriteInput(payload, input, req.authUser?.id, isAdmin);
        const existing = payload.operation === "upsert"
          ? await findUpsertRecord(payload.table, scoped, payload.onConflict)
          : null;
        const recordId = String(existing?.recordId ?? scoped.id ?? randomUUID());
        const previous = existing ? toRecordData(existing.data) : {};
        const data = jsonSafe({
          ...previous,
          ...scoped,
          id: recordId,
          created_at: previous.created_at ?? scoped.created_at ?? now,
          updated_at: scoped.updated_at ?? now,
        });
        validateFirstPartyImages(data);
        await prisma.contentRecord.upsert({
          where: { key: `${payload.table}:${recordId}` },
          update: { data },
          create: { key: `${payload.table}:${recordId}`, tableName: payload.table, recordId, data },
        });
        result.push(data as Record<string, unknown>);
      }
      if (CATALOG_TABLES.has(payload.table)) invalidateCatalogCache();
      if (payload.table === "products") invalidateProductRoutes();
      return res.json({ data: result, error: null, count: result.length });
    }

    const records = await prisma.contentRecord.findMany({ where: { tableName: payload.table } });
    const matches = records.filter(({ data }) => {
      const row = toRecordData(data);
      if (!isAdmin && USER_TABLES.has(payload.table)) {
        if (payload.table === "profiles" && row.id !== req.authUser?.id) return false;
        if (payload.table !== "profiles" && row.user_id !== req.authUser?.id) return false;
      }
      return (payload.filters ?? []).every((filter) => matchesFilter(row, filter));
    });

    if (payload.operation === "update") {
      const rawChanges = Array.isArray(payload.values) ? payload.values[0] : payload.values ?? {};
      const changes = scopeWriteInput(payload, rawChanges, req.authUser?.id, isAdmin);
      const updated: Array<Record<string, unknown>> = [];
      for (const record of matches) {
        const data = jsonSafe({ ...toRecordData(record.data), ...changes, updated_at: new Date().toISOString() });
        validateFirstPartyImages(data);
        await prisma.contentRecord.update({ where: { key: record.key }, data: { data } });
        updated.push(data as Record<string, unknown>);
      }
      if (CATALOG_TABLES.has(payload.table)) invalidateCatalogCache();
      if (payload.table === "products") invalidateProductRoutes();
      return res.json({ data: updated, error: null, count: updated.length });
    }

    await prisma.contentRecord.deleteMany({ where: { key: { in: matches.map((record) => record.key) } } });
    if (CATALOG_TABLES.has(payload.table)) invalidateCatalogCache();
    if (payload.table === "products") invalidateProductRoutes();
    return res.json({ data: matches.map(({ data }) => toRecordData(data)), error: null, count: matches.length });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Database query failed";
    return res.status(400).json({ data: null, error: { message } });
  }
};

export const exportAllTables = async () => {
  const records = await prisma.contentRecord.findMany({ orderBy: [{ tableName: "asc" }, { recordId: "asc" }] });
  const data: Record<string, Array<Record<string, unknown>>> = {};
  for (const record of records) {
    (data[record.tableName] ??= []).push(toRecordData(record.data));
  }
  return data;
};

export const importAllTables = async (tables: Record<string, Array<Record<string, unknown>>>) => {
  const results: Record<string, { inserted: number; errors: number }> = {};
  for (const [tableName, rows] of Object.entries(tables)) {
    if (!TABLES.has(tableName)) continue;
    results[tableName] = { inserted: 0, errors: 0 };
    for (const row of rows) {
      try {
        const recordId = String(row.id ?? randomUUID());
        const data = jsonSafe({ ...row, id: recordId });
        validateFirstPartyImages(data);
        await prisma.contentRecord.upsert({
          where: { key: `${tableName}:${recordId}` },
          update: { data },
          create: { key: `${tableName}:${recordId}`, tableName, recordId, data },
        });
        results[tableName].inserted++;
      } catch {
        results[tableName].errors++;
      }
    }
  }
  return results;
};
