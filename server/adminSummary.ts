export const ADMIN_SUMMARY_TABLES = [
  "products",
  "categories",
  "cities",
  "profiles",
  "product_reviews",
  "blog_posts",
  "brand_spotlights",
  "cocktails",
] as const;

export type AdminSummaryKey = typeof ADMIN_SUMMARY_TABLES[number];

export const buildAdminSummary = (
  groups: Array<{ tableName: string; _count: { _all: number } }>,
) => Object.fromEntries(
  ADMIN_SUMMARY_TABLES.map((table) => [
    table,
    groups.find((group) => group.tableName === table)?._count._all ?? 0,
  ]),
) as Record<AdminSummaryKey, number>;
