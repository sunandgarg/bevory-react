import { describe, expect, it } from "vitest";
import {
  enrichProductSeo,
  legacyRedirectPath,
  isCrawlerUserAgent,
  productAliasBucketForPath,
  productContentBucketForPath,
  rememberRecentPromise,
  resolveDynamicProductSeo,
  resolveSeo,
  rewriteSeoDocument,
  seoBucketForPath,
  stripCrawlerHydration,
} from "./seo.js";

const template = `<!doctype html><html><head>
<link rel="canonical" href="https://bevory.in/" />
<title>Default</title>
<meta name="description" content="Default">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Default">
<meta property="og:description" content="Default">
<meta property="og:url" content="https://bevory.in/">
<meta property="og:image" content="https://bevory.in/og-image.png">
<meta name="twitter:title" content="Default">
<meta name="twitter:description" content="Default">
<meta name="twitter:image" content="https://bevory.in/og-image.png">
</head><body><div id="root"><h1>Default</h1></div><script type="module" src="/app.js"></script></body></html>`;

describe("origin SEO rendering", () => {
  it("bounds the parsed SEO shard cache and refreshes recent entries", () => {
    const cache = new Map<string, Promise<number>>();
    rememberRecentPromise(cache, "a", Promise.resolve(1), 2);
    rememberRecentPromise(cache, "b", Promise.resolve(2), 2);
    rememberRecentPromise(cache, "a", cache.get("a")!, 2);
    rememberRecentPromise(cache, "c", Promise.resolve(3), 2);

    expect([...cache.keys()]).toEqual(["a", "c"]);
  });

  it("serves crawler SEO without booting the interactive application", () => {
    expect(isCrawlerUserAgent("Mozilla/5.0 (compatible; Googlebot/2.1)")).toBe(true);
    expect(isCrawlerUserAgent("Mozilla/5.0 Chrome/153 Safari/537.36")).toBe(false);

    const html = stripCrawlerHydration(template);
    expect(html).not.toContain('type="module"');
    expect(html).toContain("<title>Default</title>");
  });

  it("selects city product shards", () => {
    expect(seoBucketForPath("/mangalore/product/8-pm-whisky-503f9e4/375ml"))
      .toBe("mangalore-product-8");
    expect(seoBucketForPath("/hubli-dharwad/category/whisky")).toBe("hubli-dharwad-pages");
    expect(productContentBucketForPath("/mangalore/product/8-pm-whisky-503f9e4/375ml"))
      .toBe("product-content-8");
    expect(productAliasBucketForPath("/mangalore/product/8-pm-whisky-503f9e4/375ml"))
      .toBe("product-alias-8");
  });

  it("renders exact metadata, canonical URL and schema", () => {
    const path = "/mangalore/product/8-pm-whisky-503f9e4/375ml";
    const seo = resolveSeo(path, {
      [path]: {
        title: "8 Pm Whisky 375ml Price in Mangalore | BevOry",
        description: "Compare the reviewed local bottle price.",
        heading: "8 Pm Whisky 375ml price in Mangalore",
        breadcrumbs: [{ name: "Home", path: "/" }, { name: "Mangalore", path: "/mangalore" }],
        structuredData: { "@type": "Product", name: "8 Pm Whisky 375ml" },
      },
    });
    const html = rewriteSeoDocument(template, seo);

    expect(html).toContain("<title>8 Pm Whisky 375ml Price in Mangalore | BevOry</title>");
    expect(html).toContain(`href="https://bevory.in${path}"`);
    expect(html).toContain("<h1>8 Pm Whisky 375ml price in Mangalore</h1>");
    expect(html).toContain('"@type":"Product"');
  });

  it("keeps private and unknown routes out of the index", () => {
    expect(resolveSeo("/admin", {}).robots).toContain("noindex");
    expect(resolveSeo("/not-a-real-page", {}).robots).toContain("noindex");
    expect(resolveSeo("/not-a-real-page", {}).statusCode).toBe(404);
  });

  it("publishes the complete legal suite as indexable canonical routes", () => {
    const legalPaths = [
      "/terms",
      "/privacy-policy",
      "/disclaimer",
      "/cookie-policy",
      "/responsible-drinking",
      "/intellectual-property",
      "/community-guidelines",
      "/source-disclosure",
      "/grievance-redressal",
    ];

    for (const path of legalPaths) {
      const seo = resolveSeo(path, {});
      expect(seo.statusCode).toBeUndefined();
      expect(seo.robots).toContain("index, follow");
      expect(seo.canonicalPath).toBe(path);
      expect(seo.title).toContain("BevOry");
    }
  });

  it("redirects root and legacy state URLs to city-first routes", () => {
    expect(legacyRedirectPath("/")).toBe("/gurgaon");
    expect(legacyRedirectPath("/haryana")).toBe("/gurgaon");
    expect(legacyRedirectPath("/haryana/whisky/scotch/black-dog-123")).toBe("/gurgaon/product/black-dog-123");
    expect(legacyRedirectPath("/brand/peter-scot")).toBe("/gurgaon/brand/peter-scot");
    expect(legacyRedirectPath("/brand/78575e48-2b55-4a22-9970-39dd28d337e6", {
      brandsById: { "78575e48-2b55-4a22-9970-39dd28d337e6": "peter-scot" },
      products: {},
    })).toBe("/gurgaon/brand/peter-scot");
    expect(legacyRedirectPath("/product/johnnie-walker-blonde"))
      .toBe("/gurgaon/product/johnnie-walker-blonde-f5823b7");
    expect(legacyRedirectPath("/gurgaon/")).toBe("/gurgaon");
    expect(legacyRedirectPath("/product/not-a-real-product")).toBeNull();
    expect(legacyRedirectPath("/delhi/product/old-black-label/750ml", {
      brandsById: {},
      products: {},
      aliases: { "old-black-label": "johnnie-walker-black-label" },
    })).toBe("/delhi/product/johnnie-walker-black-label/750ml");
  });

  it("keeps known unpriced variants visible without indexing or creating an Offer", () => {
    const seo = resolveDynamicProductSeo("/mumbai/product/black-label/180ml", {
      brandsById: {},
      products: {
        "black-label": {
          name: "Black Label",
          brand: "Johnnie Walker",
          description: "Blended Scotch whisky.",
          categoryName: "Whisky",
          categorySlug: "whisky",
          volumes: ["750ml", "180ml"],
          prices: { delhi: { "180ml": 900 }, gurgaon: { "750ml": 3200 } },
        },
      },
    });
    expect(seo?.robots).toContain("noindex, follow");
    expect(seo?.body?.join(" ")).toContain("does not yet have a verified price");
    expect(JSON.stringify(seo?.structuredData)).not.toContain('"offers"');
    expect(resolveDynamicProductSeo("/mumbai/product/black-label/100ml", {
      brandsById: {},
      products: {
        "black-label": {
          name: "Black Label",
          brand: "Johnnie Walker",
          description: "Blended Scotch whisky.",
          volumes: ["750ml", "180ml"],
          prices: {},
        },
      },
    })).toBeNull();
  });

  it("keeps known but locally unpriced products visible and out of the index", () => {
    const seo = resolveDynamicProductSeo("/mumbai/product/black-label/180ml", {
      brandsById: {},
      products: {
        "black-label": {
          name: "Black Label",
          brand: "Johnnie Walker",
          description: "Blended Scotch whisky.",
          volumes: ["180ml"],
          prices: { delhi: { "180ml": 900 } },
        },
      },
    });
    expect(seo?.robots).toContain("noindex, follow");
    expect(seo?.body?.join(" ")).toContain("does not yet have a verified price");
  });

  it("adds product editorial content and matching FAQ schema to the initial HTML", () => {
    const path = "/delhi/product/johnnie-walker-black-label";
    const base = resolveSeo(path, {
      [path]: {
        title: "Johnnie Walker Black Label Price in Delhi | BevOry",
        description: "Compare reviewed local prices.",
        heading: "Johnnie Walker Black Label price in Delhi",
        body: ["Reviewed Delhi price guidance."],
        breadcrumbs: [{ name: "Home", path: "/" }],
        structuredData: { "@type": "ProductGroup", name: "Johnnie Walker Black Label" },
      },
    });
    const enriched = enrichProductSeo(path, base, {
      "johnnie-walker-black-label": {
        description: "A catalogue-grounded product overview.",
        tasteProfile: "General style guidance, not a bottle-specific tasting claim.",
        faqs: [{ question: "Which sizes are listed?", answer: "Known sizes are shown on the page." }],
      },
    });
    const html = rewriteSeoDocument(template, enriched);

    expect(enriched.body).toContain("A catalogue-grounded product overview.");
    expect(html).toContain("Common questions");
    expect(html).toContain('"@type":"FAQPage"');
    expect(html).toContain("Which sizes are listed?");
  });
});
