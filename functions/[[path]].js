const SITE_ORIGIN = "https://bevory.in";
const seoRoutesCache = new Map();
let productIndexPromise;

const isDocumentRequest = (request) =>
  request.method === "GET" && (request.headers.get("accept") || "").includes("text/html");

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

const staticSeo = {
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

const humanize = (value) => value
  .split("-")
  .filter(Boolean)
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(" ");

const shortTitle = (value) => value.length <= 60 ? value : `${value.slice(0, 57).trim()}...`;
const shortDescription = (value) => value.length <= 160 ? value : `${value.slice(0, 157).trim()}...`;

const escapeHtml = (value) => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");

const seoBucketForPath = (pathname) => {
  const parts = pathname.split("/").filter(Boolean);
  const citySlug = parts[0];
  if (!cityNames.has(citySlug)) return "content";
  if (parts[1] === "product" && parts[2]) {
    const initial = parts[2].charAt(0).toLowerCase();
    return `${citySlug}-product-${/[a-z0-9]/.test(initial) ? initial : "other"}`;
  }
  return `${citySlug}-pages`;
};

const loadSeoRoutes = async (env, pathname) => {
  const bucket = seoBucketForPath(pathname);
  if (seoRoutesCache.has(bucket)) return seoRoutesCache.get(bucket);
  try {
    const response = await env.ASSETS.fetch(new Request(`${SITE_ORIGIN}/seo-routes/${bucket}.json`));
    const routes = response.ok ? await response.json() : {};
    seoRoutesCache.set(bucket, routes);
    return routes;
  } catch {
    return {};
  }
};

const loadProductIndex = async (env) => {
  if (!productIndexPromise) {
    productIndexPromise = env.ASSETS.fetch(new Request(`${SITE_ORIGIN}/seo-routes/product-index.json`))
      .then((response) => response.ok ? response.json() : { products: {}, brandsById: {} })
      .catch(() => ({ products: {}, brandsById: {} }));
  }
  return productIndexPromise;
};

const dynamicProductSeo = (pathname, productIndex) => {
  const parts = pathname.split("/").filter(Boolean);
  if (!cityNames.has(parts[0]) || parts[1] !== "product" || !parts[2] || parts.length > 4) return null;
  const citySlug = parts[0];
  const cityName = cityNames.get(citySlug);
  const productSlug = parts[2];
  const requestedVolume = parts[3]?.toLowerCase();
  const product = productIndex.products?.[productSlug];
  if (!product) return null;

  const productName = `${product.brand || ""} ${product.name || ""}`.trim();
  const knownVolumes = Array.isArray(product.volumes) ? product.volumes : [];
  const knownVolume = requestedVolume
    ? knownVolumes.find((value) => value.toLowerCase().replace(/\s+/g, "") === requestedVolume)
    : null;
  if (requestedVolume && !knownVolume) return null;

  const cityPrices = product.prices?.[citySlug] || {};
  const selectedPrice = requestedVolume ? cityPrices[requestedVolume] : null;
  const pricedSizes = Object.entries(cityPrices);
  const knownSizesText = knownVolumes.length ? knownVolumes.join(", ") : "size information pending";
  const otherCities = Object.entries(product.prices || {})
    .filter(([slug]) => slug !== citySlug)
    .flatMap(([slug, values]) => {
      const price = requestedVolume ? values?.[requestedVolume] : Object.values(values || {})[0];
      return price ? [`${cityNames.get(slug) || humanize(slug)} at ₹${Number(price).toLocaleString("en-IN")}`] : [];
    })
    .slice(0, 6);
  const canonicalPath = `/${citySlug}/product/${productSlug}${requestedVolume ? `/${requestedVolume}` : ""}`;
  const sizeLabel = knownVolume || "";
  const priceStatement = selectedPrice
    ? `The reviewed indicative ${sizeLabel} price in ${cityName} is ₹${Number(selectedPrice).toLocaleString("en-IN")}.`
    : requestedVolume
      ? `${sizeLabel} is a known bottle size, but Bevory does not yet have a verified price for it in ${cityName}.`
      : pricedSizes.length
        ? `Verified ${cityName} prices are currently listed for ${pricedSizes.map(([size]) => size).join(", ")}.`
        : `The product is known nationally, but Bevory does not yet have a verified local price for ${cityName}.`;
  const structuredData = requestedVolume ? {
    "@type": "Product",
    name: `${productName} ${sizeLabel}`,
    description: `${productName} ${sizeLabel} price and availability guide for ${cityName}.`,
    brand: { "@type": "Brand", name: product.brand },
    ...(product.image ? { image: product.image } : {}),
    sku: `${productSlug}-${requestedVolume}-${citySlug}`,
    size: sizeLabel,
    url: `${SITE_ORIGIN}${canonicalPath}`,
    isVariantOf: { "@type": "ProductGroup", name: productName, productGroupID: productSlug },
    ...(selectedPrice ? {
      offers: {
        "@type": "Offer",
        url: `${SITE_ORIGIN}${canonicalPath}`,
        price: Number(selectedPrice),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        areaServed: { "@type": "City", name: cityName },
      },
    } : {}),
  } : {
    "@type": "ProductGroup",
    name: productName,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    ...(product.image ? { image: product.image } : {}),
    productGroupID: productSlug,
    variesBy: ["https://schema.org/size"],
    url: `${SITE_ORIGIN}${canonicalPath}`,
  };

  return {
    title: `${productName}${sizeLabel ? ` ${sizeLabel}` : ""} Price in ${cityName} | Bevory`,
    description: shortDescription(`${productName}${sizeLabel ? ` ${sizeLabel}` : ""} price guide for ${cityName}. ${priceStatement} Known sizes: ${knownSizesText}.`),
    heading: `${productName}${sizeLabel ? ` ${sizeLabel}` : ""} price in ${cityName}`,
    canonicalPath,
    robots: selectedPrice || (!requestedVolume && pricedSizes.length)
      ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      : "noindex, follow, max-image-preview:large",
    body: [
      priceStatement,
      `Known bottle sizes for ${productName}: ${knownSizesText}. A dash means unavailable, not zero.`,
      ...(otherCities.length ? [`Prices are also listed in other cities, including ${otherCities.join("; ")}.`] : []),
    ],
    ...(product.image ? { image: product.image } : {}),
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: cityName, path: `/${citySlug}` },
      ...(product.categorySlug ? [{ name: product.categoryName, path: `/${citySlug}/category/${product.categorySlug}` }] : []),
      { name: productName, path: `/${citySlug}/product/${productSlug}` },
      ...(sizeLabel ? [{ name: sizeLabel, path: canonicalPath }] : []),
    ],
    structuredData,
  };
};

const routeSeo = (pathname, seoRoutes = {}) => {
  const cleanPath = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  const parts = cleanPath.split("/").filter(Boolean).map((part) => {
    try {
      return decodeURIComponent(part);
    } catch {
      return part;
    }
  });
  const seo = {
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

  return { ...seo, robots: "noindex, follow, max-image-preview:large", statusCode: 404 };
};

const routeSchema = (seo) => {
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

const seoShell = (seo) => {
  const body = Array.isArray(seo.body) && seo.body.length ? seo.body : [seo.description];
  const image = seo.image
    ? `<img src="${escapeHtml(seo.image)}" alt="${escapeHtml(seo.heading)}" width="720" height="720" style="display:block;width:min(100%,360px);height:auto;object-fit:contain;margin:20px 0" />`
    : "";
  return `
  <main aria-label="Bevory page summary" style="max-width:760px;margin:0 auto;padding:24px;font-family:system-ui,sans-serif;line-height:1.55">
    <h1>${escapeHtml(seo.heading)}</h1>
    ${image}
    ${body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n    ")}
    <nav aria-label="Explore Bevory">
      <a href="/categories">Categories</a> | <a href="/brands">Brands</a> | <a href="/guide">Guide</a> | <a href="/party-planner">Party planner</a>
    </nav>
  </main>`;
};

const legacyProductTargets = new Map([
  ["all-seasons-reserve-whisky-750ml", "/gurgaon/brand/all-season"],
  ["johnnie-walker-gold-label-reserve-375ml", "/gurgaon/product/johnnie-walker-gold-reserve-abc15db"],
  ["royal-challenge-select-premium-750ml", "/gurgaon/brand/royal-challenge"],
  ["johnnie-walker-blonde", "/gurgaon/product/johnnie-walker-blonde-f5823b7"],
  ["something-special-750ml", "/gurgaon/product/something-special-something-special-e89fcdb/750ml"],
  ["cragganmore-12-b2", "/gurgaon/product/cragganmore-cragganmore-12-yrs-9577524/750ml"],
  ["bowmore-classic-e15e35", "/gurgaon/brand/bowmore"],
  ["springbank-single-malt-750ml-t1", "/gurgaon/category/whisky"],
  ["haywards-fine-180ml", "/gurgaon/product/haywards-haywards-fine-brandy-c11d5b5/180ml"],
  ["royal-stag-deluxe-whisky-180ml", "/gurgaon/brand/royal-stag"],
  ["mcdowell-s-no-1-platinum-750ml", "/gurgaon/product/mcdowells-mcdowell-no1-platinum-bfe18c0/750ml"],
]);

const legacyRedirectPath = (pathname, productIndex = { products: {}, brandsById: {} }) => {
  const cleanPath = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  const parts = cleanPath.split("/").filter(Boolean);

  if (cleanPath === "/") return "/gurgaon";

  if (parts.length === 1 && stateDefaultCities.has(parts[0])) {
    return `/${stateDefaultCities.get(parts[0])}`;
  }

  if (parts[0] === "brand" && parts[1]) {
    const slug = /^[0-9a-f-]{36}$/i.test(parts[1])
      ? productIndex.brandsById?.[parts[1]]
      : parts[1];
    return slug ? `/gurgaon/brand/${slug}` : null;
  }

  if (parts[0] === "category" && parts[1]) {
    return `/gurgaon/category/${parts.slice(1).join("/")}`;
  }

  if (parts[0] === "product" && parts[1]) {
    return legacyProductTargets.get(parts[1])
      || (productIndex.products?.[parts[1]] ? `/gurgaon/product/${parts[1]}` : null);
  }

  let stateSlug;
  let productSlug;
  if (parts[0] === "bevory" && parts.length === 5) {
    [, stateSlug, , , productSlug] = parts;
  } else if (parts.length === 4 && !["category", "product"].includes(parts[1])) {
    [stateSlug, , , productSlug] = parts;
  }
  if (!stateSlug || !productSlug) return cleanPath !== pathname ? cleanPath : null;

  const fixedTarget = legacyProductTargets.get(productSlug);
  if (fixedTarget) return fixedTarget.replace(/^\/gurgaon/, `/${stateDefaultCities.get(stateSlug) || "gurgaon"}`);
  const preferredCity = stateDefaultCities.get(stateSlug)
    || (cityNames.has(stateSlug) ? stateSlug : null);
  return preferredCity ? `/${preferredCity}/product/${productSlug}` : (cleanPath !== pathname ? cleanPath : null);
};

const legacyRedirectNeedsIndex = (pathname) => {
  const parts = pathname.split("/").filter(Boolean);
  return (parts[0] === "brand" && /^[0-9a-f-]{36}$/i.test(parts[1] || ""))
    || parts[0] === "product"
    || parts[0] === "bevory"
    || (parts.length === 4 && !["category", "product"].includes(parts[1]));
};

const proxyApiRequest = async (request, env, waitUntil) => {
  if (!env.API_ORIGIN || !env.ORIGIN_VERIFY_SECRET) {
    return Response.json({ error: "API origin is not configured" }, { status: 503 });
  }

  const incomingUrl = new URL(request.url);
  const cacheableCatalog = request.method === "GET"
    && incomingUrl.pathname.startsWith("/api/catalog/")
    && !request.headers.has("authorization");
  const cacheKey = cacheableCatalog ? new Request(incomingUrl.toString(), { method: "GET" }) : null;

  if (cacheKey) {
    try {
      const cached = await caches.default.match(cacheKey);
      if (cached) {
        const headers = new Headers(cached.headers);
        headers.set("x-bevory-cache", "HIT");
        return new Response(cached.body, { status: cached.status, headers });
      }
    } catch {
      // Cache API can be unavailable in local Pages emulation.
    }
  }

  const originUrl = new URL(env.API_ORIGIN);
  originUrl.pathname = incomingUrl.pathname;
  originUrl.search = incomingUrl.search;

  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.set("x-bevory-origin-verify", env.ORIGIN_VERIFY_SECRET);
  headers.set("x-forwarded-host", incomingUrl.host);
  headers.set("x-forwarded-proto", "https");
  if (cacheableCatalog) headers.delete("cookie");

  const init = {
    method: request.method,
    headers,
    redirect: "manual",
  };
  if (request.method !== "GET" && request.method !== "HEAD") init.body = request.body;

  const originResponse = await fetch(originUrl.toString(), init);
  const responseHeaders = new Headers(originResponse.headers);
  responseHeaders.set("x-content-type-options", "nosniff");
  responseHeaders.set("referrer-policy", "strict-origin-when-cross-origin");
  responseHeaders.set("x-bevory-cache", "MISS");
  if (cacheableCatalog && originResponse.ok) {
    responseHeaders.delete("set-cookie");
    responseHeaders.set("cache-control", "public, max-age=60, s-maxage=300, stale-while-revalidate=600");
  } else {
    responseHeaders.set("cache-control", "private, no-store");
  }

  const response = new Response(originResponse.body, {
    status: originResponse.status,
    statusText: originResponse.statusText,
    headers: responseHeaders,
  });

  if (cacheKey && originResponse.ok) {
    try {
      waitUntil(caches.default.put(cacheKey, response.clone()));
    } catch {
      // The origin response is still valid when edge cache storage fails.
    }
  }
  return response;
};

const rewriteDocument = (response, url, routeData) => {
  const seo = { ...routeData };
  seo.title = shortTitle(seo.title);
  seo.description = shortDescription(seo.description);
  const canonical = `${SITE_ORIGIN}${seo.canonicalPath}`;
  const shareImage = seo.image || `${SITE_ORIGIN}/og-image.png`;
  const schema = JSON.stringify(routeSchema(seo)).replace(/</g, "\\u003c");
  const headers = new Headers(response.headers);
  headers.delete("etag");
  headers.set("cache-control", seo.statusCode === 404
    ? "private, no-store"
    : "public, max-age=0, must-revalidate");

  const htmlResponse = new Response(response.body, {
    status: seo.statusCode || response.status,
    statusText: response.statusText,
    headers,
  });

  return new HTMLRewriter()
    .on("title", { element: (element) => element.setInnerContent(seo.title) })
    .on('meta[name="description"]', { element: (element) => element.setAttribute("content", seo.description) })
    .on('meta[property="og:title"]', { element: (element) => element.setAttribute("content", seo.title) })
    .on('meta[property="og:description"]', { element: (element) => element.setAttribute("content", seo.description) })
    .on('meta[property="og:url"]', { element: (element) => element.setAttribute("content", canonical) })
    .on('meta[property="og:image"]', { element: (element) => element.setAttribute("content", shareImage) })
    .on('meta[name="twitter:title"]', { element: (element) => element.setAttribute("content", seo.title) })
    .on('meta[name="twitter:description"]', { element: (element) => element.setAttribute("content", seo.description) })
    .on('meta[name="twitter:image"]', { element: (element) => element.setAttribute("content", shareImage) })
    .on('meta[name="robots"]', { element: (element) => element.setAttribute("content", seo.robots) })
    .on('link[rel="canonical"]', { element: (element) => element.setAttribute("href", canonical) })
    .on("head", {
      element: (element) => element.append(
        `<script id="bevory-route-schema" type="application/ld+json">${schema}</script>`,
        { html: true },
      ),
    })
    .on("#root", { element: (element) => element.setInnerContent(seoShell(seo), { html: true }) })
    .transform(htmlResponse);
};

export async function onRequest({ request, env, waitUntil }) {
  const url = new URL(request.url);

  if (url.hostname === "www.bevory.in") {
    url.hostname = "bevory.in";
    return Response.redirect(url.toString(), 308);
  }

  if (url.pathname === "/api" || url.pathname.startsWith("/api/")) {
    return proxyApiRequest(request, env, waitUntil);
  }

  if (isDocumentRequest(request)) {
    const productIndex = legacyRedirectNeedsIndex(url.pathname)
      ? await loadProductIndex(env)
      : { products: {}, brandsById: {} };
    const redirectPath = legacyRedirectPath(url.pathname, productIndex);
    if (redirectPath && redirectPath !== url.pathname) {
      url.pathname = redirectPath;
      return Response.redirect(url.toString(), 308);
    }
  }

  const seoRoutes = isDocumentRequest(request) ? await loadSeoRoutes(env, url.pathname) : {};

  let response = await env.ASSETS.fetch(request);
  if (response.status === 404 && isDocumentRequest(request)) {
    const appShellUrl = new URL("/index.html", url);
    response = await env.ASSETS.fetch(new Request(appShellUrl, request));
  }

  if (!isDocumentRequest(request) || !response.ok) return response;
  const generatedSeo = routeSeo(url.pathname, seoRoutes);
  const productIndex = generatedSeo.robots.startsWith("noindex") && /^\/[a-z-]+\/product\//.test(url.pathname)
    ? await loadProductIndex(env)
    : null;
  const dynamicSeo = productIndex
    ? dynamicProductSeo(url.pathname, productIndex)
    : null;
  return rewriteDocument(response, url, dynamicSeo || generatedSeo);
}

export { dynamicProductSeo, legacyRedirectPath };
