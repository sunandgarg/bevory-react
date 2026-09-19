import { readFile } from "node:fs/promises";
import path from "node:path";

const SITE_ORIGIN = "https://bevory.in";

type Breadcrumb = { name: string; path: string };
type SeoRoute = {
  title: string;
  description: string;
  heading: string;
  canonicalPath: string;
  robots: string;
  breadcrumbs: Breadcrumb[];
  body?: string[];
  image?: string;
  structuredData?: Record<string, unknown>;
};

type GeneratedSeoRoute = Partial<SeoRoute> & Pick<SeoRoute, "title" | "description" | "heading">;
type SeoRouteMap = Record<string, GeneratedSeoRoute>;

const cityNames = new Map([
  ["agra", "Agra"], ["asansol", "Asansol"], ["bangalore", "Bangalore"],
  ["bhopal", "Bhopal"], ["delhi", "Delhi"], ["faridabad", "Faridabad"],
  ["ghaziabad", "Ghaziabad"], ["goa", "Goa"], ["gurgaon", "Gurgaon"],
  ["gwalior", "Gwalior"], ["hubli-dharwad", "Hubli Dharwad"],
  ["hyderabad", "Hyderabad"], ["indore", "Indore"], ["jabalpur", "Jabalpur"],
  ["jaipur", "Jaipur"], ["jodhpur", "Jodhpur"], ["kanpur", "Kanpur"],
  ["kolkata", "Kolkata"], ["kota", "Kota"], ["lucknow", "Lucknow"],
  ["mangalore", "Mangalore"], ["mumbai", "Mumbai"], ["mysore", "Mysore"],
  ["nagpur", "Nagpur"], ["nashik", "Nashik"], ["noida", "Noida"],
  ["pune", "Pune"], ["thane", "Thane"], ["udaipur", "Udaipur"],
  ["warangal", "Warangal"],
]);

const stateDefaultCities = new Map([
  ["haryana", "gurgaon"],
  ["karnataka", "bangalore"],
  ["madhya-pradesh", "indore"],
  ["maharashtra", "mumbai"],
  ["rajasthan", "jaipur"],
  ["telangana", "hyderabad"],
  ["uttar-pradesh", "lucknow"],
  ["west-bengal", "kolkata"],
  ["india", "gurgaon"],
]);

const staticSeo: Record<string, [string, string]> = {
  "/categories": ["Drink Categories & Prices | Bevory", "Browse spirits, wine, beer and ready-to-drink categories with local price guides."],
  "/brands": ["Beverage Brands & Products | Bevory", "Explore beverage brands, product ranges and locally available bottle prices on Bevory."],
  "/guide": ["Bevory Guide | Drinks, Prices & Serving Advice", "Read practical beverage guides, tasting notes and responsible serving advice from Bevory."],
  "/cocktails": ["Cocktail Recipes & Drink Ideas | Bevory", "Discover cocktail recipes, ingredients and serving ideas for your next gathering."],
  "/party-planner": ["Drinks Party Planner | Bevory", "Estimate drinks and compare locally priced products for your guest count and budget."],
  "/help": ["Help & Support | Bevory", "Get help using Bevory's local beverage price guide and planning tools."],
  "/contact": ["Contact Bevory", "Contact the Bevory team about product information, corrections or support."],
  "/privacy-policy": ["Privacy Policy | Bevory", "Read how Bevory handles personal data and privacy."],
  "/terms": ["Terms of Use | Bevory", "Read the terms that apply when using Bevory."],
  "/disclaimer": ["Information Disclaimer | Bevory", "Read important information about Bevory price guides and beverage content."],
};

const privatePrefixes = [
  "/admin", "/auth", "/favorites", "/locations", "/notifications", "/profile",
  "/recent", "/search", "/settings",
];

const humanize = (value: string) => value
  .split("-")
  .filter(Boolean)
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(" ");

const shortTitle = (value: string) => value.length <= 60 ? value : `${value.slice(0, 57).trim()}...`;
const shortDescription = (value: string) => value.length <= 160 ? value : `${value.slice(0, 157).trim()}...`;

const escapeHtml = (value: unknown) => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");

export const seoBucketForPath = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean);
  const citySlug = parts[0];
  if (!cityNames.has(citySlug)) return "content";
  if (parts[1] === "product" && parts[2]) {
    const initial = parts[2].charAt(0).toLowerCase();
    return `${citySlug}-product-${/[a-z0-9]/.test(initial) ? initial : "other"}`;
  }
  return `${citySlug}-pages`;
};

export const resolveSeo = (pathname: string, seoRoutes: SeoRouteMap = {}): SeoRoute => {
  const cleanPath = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  const parts = cleanPath.split("/").filter(Boolean).map((part) => {
    try {
      return decodeURIComponent(part);
    } catch {
      return part;
    }
  });
  const seo: SeoRoute = {
    title: "Bevory | Compare Local Beverage Prices",
    description: "Compare local beverage prices, bottle sizes and brands with Bevory's city-aware price guide.",
    heading: "Compare local beverage prices with Bevory",
    canonicalPath: cleanPath,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    breadcrumbs: [{ name: "Home", path: "/" }],
  };

  const generated = seoRoutes[cleanPath];
  if (generated) {
    return {
      ...seo,
      ...generated,
      canonicalPath: cleanPath,
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      breadcrumbs: Array.isArray(generated.breadcrumbs) ? generated.breadcrumbs : seo.breadcrumbs,
    };
  }

  if (privatePrefixes.some((prefix) => cleanPath === prefix || cleanPath.startsWith(`${prefix}/`))) {
    return { ...seo, robots: "noindex, follow, max-image-preview:large" };
  }
  if (cleanPath === "/") return seo;

  if (staticSeo[cleanPath]) {
    const [title, description] = staticSeo[cleanPath];
    return {
      ...seo,
      title,
      description,
      heading: title.replace(/ \| Bevory$/, ""),
      breadcrumbs: [...seo.breadcrumbs, { name: humanize(parts[0]), path: cleanPath }],
    };
  }

  return { ...seo, robots: "noindex, follow, max-image-preview:large" };
};

const routeSchema = (seo: SeoRoute) => {
  const canonical = `${SITE_ORIGIN}${seo.canonicalPath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        name: seo.title,
        description: seo.description,
        url: canonical,
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: seo.breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_ORIGIN}${item.path}`,
        })),
      },
      ...(seo.structuredData ? [seo.structuredData] : []),
    ],
  };
};

const seoShell = (seo: SeoRoute) => {
  const body = Array.isArray(seo.body) && seo.body.length ? seo.body : [seo.description];
  const image = seo.image
    ? `<img src="${escapeHtml(seo.image)}" alt="${escapeHtml(seo.heading)}" width="720" height="720" style="display:block;width:min(100%,360px);height:auto;object-fit:contain;margin:20px 0" />`
    : "";
  return `<div id="root">
  <main aria-label="Bevory page summary" style="max-width:760px;margin:0 auto;padding:24px;font-family:system-ui,sans-serif;line-height:1.55">
    <h1>${escapeHtml(seo.heading)}</h1>
    ${image}
    ${body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n    ")}
    <nav aria-label="Explore Bevory">
      <a href="/categories">Categories</a> | <a href="/brands">Brands</a> | <a href="/guide">Guide</a> | <a href="/party-planner">Party planner</a>
    </nav>
  </main>
</div>
    `;
};

const setAttribute = (html: string, tagPattern: RegExp, attribute: string, value: string) => html.replace(
  tagPattern,
  (tag) => {
    const escaped = escapeHtml(value);
    const attributePattern = new RegExp(`\\s${attribute}=(['"]).*?\\1`, "i");
    return attributePattern.test(tag)
      ? tag.replace(attributePattern, ` ${attribute}="${escaped}"`)
      : tag.replace(/\s*\/?>(\s*)$/, ` ${attribute}="${escaped}" />$1`);
  },
);

export const rewriteSeoDocument = (template: string, route: SeoRoute) => {
  const seo = {
    ...route,
    title: shortTitle(route.title),
    description: shortDescription(route.description),
  };
  const canonical = `${SITE_ORIGIN}${seo.canonicalPath}`;
  const shareImage = seo.image || `${SITE_ORIGIN}/og-image.png`;
  const schema = JSON.stringify(routeSchema(seo)).replace(/</g, "\\u003c");

  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = setAttribute(html, /<meta\s+name=["']description["'][^>]*>/i, "content", seo.description);
  html = setAttribute(html, /<meta\s+name=["']robots["'][^>]*>/i, "content", seo.robots);
  html = setAttribute(html, /<meta\s+property=["']og:title["'][^>]*>/i, "content", seo.title);
  html = setAttribute(html, /<meta\s+property=["']og:description["'][^>]*>/i, "content", seo.description);
  html = setAttribute(html, /<meta\s+property=["']og:url["'][^>]*>/i, "content", canonical);
  html = setAttribute(html, /<meta\s+property=["']og:image["'][^>]*>/i, "content", shareImage);
  html = setAttribute(html, /<meta\s+name=["']twitter:title["'][^>]*>/i, "content", seo.title);
  html = setAttribute(html, /<meta\s+name=["']twitter:description["'][^>]*>/i, "content", seo.description);
  html = setAttribute(html, /<meta\s+name=["']twitter:image["'][^>]*>/i, "content", shareImage);
  html = setAttribute(html, /<link\s+rel=["']canonical["'][^>]*>/i, "href", canonical);
  html = html.replace(
    /<\/head>/i,
    `  <script id="bevory-route-schema" type="application/ld+json">${schema}</script>\n</head>`,
  );

  return html.replace(/<div id=["']root["']>[\s\S]*?<\/div>/i, seoShell(seo).trimEnd());
};

export const legacyRedirectPath = (pathname: string) => {
  const cleanPath = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  const parts = cleanPath.split("/").filter(Boolean);

  if (cleanPath === "/") return "/gurgaon";
  if (parts.length === 1 && stateDefaultCities.has(parts[0])) {
    return `/${stateDefaultCities.get(parts[0])}`;
  }

  let stateSlug: string | undefined;
  let productSlug: string | undefined;
  if (parts[0] === "bevory" && parts.length === 5) {
    [, stateSlug, , , productSlug] = parts;
  } else if (parts.length === 4 && !["category", "product"].includes(parts[1])) {
    [stateSlug, , , productSlug] = parts;
  }
  if (!stateSlug || !productSlug) return null;

  const preferredCity = stateDefaultCities.get(stateSlug)
    || (cityNames.has(stateSlug) ? stateSlug : null);
  return preferredCity ? `/${preferredCity}/product/${productSlug}` : null;
};

export const createSeoRenderer = (clientDist: string) => {
  const template = readFile(path.join(clientDist, "index.html"), "utf8");
  const seoRoutesCache = new Map<string, Promise<SeoRouteMap>>();

  const loadSeoRoutes = (pathname: string) => {
    const bucket = seoBucketForPath(pathname);
    let routes = seoRoutesCache.get(bucket);
    if (!routes) {
      routes = readFile(path.join(clientDist, "seo-routes", `${bucket}.json`), "utf8")
        .then((value) => JSON.parse(value) as SeoRouteMap)
        .catch(() => ({}));
      seoRoutesCache.set(bucket, routes);
    }
    return routes;
  };

  return async (pathname: string) => rewriteSeoDocument(
    await template,
    resolveSeo(pathname, await loadSeoRoutes(pathname)),
  );
};
