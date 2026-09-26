type ProductIdentity = { slug?: unknown; is_active?: unknown; canonical_slug?: unknown };

export const withoutImportSuffix = (slug: string) => slug.replace(/-[a-f0-9]{7}$/i, "");

// Keep storage IDs/slugs stable. Only unambiguous names receive a shorter URL.
export const buildProductRoutes = (products: ProductIdentity[]) => {
  const storedByUrl = new Map<string, string>();
  const publicByStored = new Map<string, string>();
  const groups = new Map<string, string[]>();
  const reserved = new Set(products.map(product => String(product.slug || "")));
  for (const product of products) {
    const slug = String(product.slug || "");
    if (!slug || product.is_active === false) continue;
    storedByUrl.set(slug, slug);
    publicByStored.set(slug, slug);
    const base = withoutImportSuffix(slug);
    groups.set(base, [...(groups.get(base) || []), slug]);
  }
  for (const [base, slugs] of groups) {
    if (slugs.length !== 1 || !base || (base !== slugs[0] && reserved.has(base))) continue;
    storedByUrl.set(base, slugs[0]);
    publicByStored.set(slugs[0], base);
  }
  // Previously consolidated products keep their existing redirects, without chains.
  const aliases = new Map(products.filter(product => product.canonical_slug)
    .map(product => [String(product.slug), String(product.canonical_slug)]));
  for (const [alias, target] of aliases) {
    let current = target;
    const visited = new Set([alias]);
    while (aliases.has(current) && !visited.has(current)) {
      visited.add(current);
      current = aliases.get(current)!;
    }
    if (!visited.has(current) && publicByStored.has(current)) storedByUrl.set(alias, current);
  }
  return { storedByUrl, publicByStored };
};

export type ProductRoutes = ReturnType<typeof buildProductRoutes>;

export const publicProductPath = (value: string, routes: ProductRoutes) => value.replace(
  /^(https:\/\/bevory\.in)?(\/[^/]+\/product\/)([^/?#]+)(?=\/|\?|#|$)/,
  (match, origin, prefix, slug) => {
    const stored = routes.storedByUrl.get(slug);
    return stored ? `${origin || ""}${prefix}${routes.publicByStored.get(stored) || stored}` : match;
  },
);

// Canonicals, breadcrumbs and structured-data URLs must agree with the address bar.
export const mapProductUrls = <T>(value: T, routes: ProductRoutes): T => {
  if (typeof value === "string") return publicProductPath(value, routes) as T;
  if (Array.isArray(value)) return value.map(item => mapProductUrls(item, routes)) as T;
  if (value && typeof value === "object") return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, mapProductUrls(item, routes)]),
  ) as T;
  return value;
};
