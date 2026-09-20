import { describe, expect, it } from "vitest";
import {
  legacyRedirectPath,
  resolveDynamicProductSeo,
  resolveSeo,
  rewriteSeoDocument,
  seoBucketForPath,
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
  it("selects city product shards", () => {
    expect(seoBucketForPath("/mangalore/product/8-pm-whisky-503f9e4/375ml"))
      .toBe("mangalore-product-8");
    expect(seoBucketForPath("/hubli-dharwad/category/whisky")).toBe("hubli-dharwad-pages");
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
});
