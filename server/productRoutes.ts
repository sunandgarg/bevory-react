import { prisma } from "./db.js";
import { buildProductRoutes, type ProductRoutes } from "../src/lib/productRoutes.js";

let cached: { expires: number; routes: Promise<ProductRoutes> } | undefined;

export const invalidateProductRoutes = () => { cached = undefined; };

export const getProductRoutes = (): Promise<ProductRoutes> => {
  if (cached && cached.expires > Date.now()) return cached.routes;
  const routes = prisma.$queryRaw<Array<{ slug: string; active: number | null; canonicalSlug: string | null }>>`
    SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.slug')) AS slug,
      JSON_EXTRACT(data, '$.is_active') = true AS active,
      JSON_UNQUOTE(JSON_EXTRACT(data, '$.canonical_slug')) AS canonicalSlug
    FROM content_records WHERE table_name = 'products'
  `.then(rows => buildProductRoutes(rows.map(row => ({
    slug: row.slug,
    is_active: row.active == null || Boolean(Number(row.active)),
    canonical_slug: row.canonicalSlug,
  })))).catch(error => { cached = undefined; throw error; });
  cached = { expires: Date.now() + 5 * 60 * 1000, routes };
  return routes;
};
