import { Prisma, PrismaClient } from "@prisma/client";

declare global {
  var __bevoryPrisma: PrismaClient | undefined;
}

export const prisma = globalThis.__bevoryPrisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.__bevoryPrisma = prisma;
}

export const toRecordData = (value: unknown): Record<string, unknown> =>
  value && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {};

const indexedJsonColumns = {
  slug: "filter_slug",
  city_id: "filter_city_id",
  product_id: "filter_product_id",
  price_available: "filter_price_available",
  requires_review: "filter_requires_review",
} as const;

type IndexedJsonField = keyof typeof indexedJsonColumns;
type IndexedJsonValue = string | number | boolean;
let indexedJsonColumnsAvailable = true;

export const indexedContentFilterEntries = (filters: Record<string, unknown>) => (
  Object.entries(filters).flatMap(([field, value]) => (
    field in indexedJsonColumns
    && (typeof value === "string" || typeof value === "number" || typeof value === "boolean")
      ? [[field as IndexedJsonField, value as IndexedJsonValue] as const]
      : []
  ))
);

export const findIndexedContentData = async (
  tableName: string,
  filters: Record<string, unknown>,
): Promise<Array<{ data: Prisma.JsonValue }> | null> => {
  const entries = indexedContentFilterEntries(filters);
  if (!indexedJsonColumnsAvailable || !entries.length) return null;

  const conditions: Prisma.Sql[] = [Prisma.sql`table_name = ${tableName}`];
  for (const [field, rawValue] of entries) {
    const column = Prisma.raw(indexedJsonColumns[field]);
    const value = typeof rawValue === "boolean" ? Number(rawValue) : rawValue;
    conditions.push(Prisma.sql`${column} = ${value}`);
  }

  try {
    return await prisma.$queryRaw<Array<{ data: Prisma.JsonValue }>>(
      Prisma.sql`SELECT data FROM content_records WHERE ${Prisma.join(conditions, " AND ")}`,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (/unknown column ['`]?filter_/i.test(message)) {
      indexedJsonColumnsAvailable = false;
      return null;
    }
    throw error;
  }
};
