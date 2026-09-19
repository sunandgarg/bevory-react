import { describe, expect, it } from "vitest";
import { legacyRedirectPath, resolveSeo, rewriteSeoDocument, seoBucketForPath } from "./seo.js";

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
        title: "8 Pm Whisky 375ml Price in Mangalore | Bevory",
        description: "Compare the reviewed local bottle price.",
        heading: "8 Pm Whisky 375ml price in Mangalore",
        breadcrumbs: [{ name: "Home", path: "/" }, { name: "Mangalore", path: "/mangalore" }],
        structuredData: { "@type": "Product", name: "8 Pm Whisky 375ml" },
      },
    });
    const html = rewriteSeoDocument(template, seo);

    expect(html).toContain("<title>8 Pm Whisky 375ml Price in Mangalore | Bevory</title>");
    expect(html).toContain(`href="https://bevory.in${path}"`);
    expect(html).toContain("<h1>8 Pm Whisky 375ml price in Mangalore</h1>");
    expect(html).toContain('"@type":"Product"');
  });

  it("keeps private and unknown routes out of the index", () => {
    expect(resolveSeo("/admin", {}).robots).toContain("noindex");
    expect(resolveSeo("/not-a-real-page", {}).robots).toContain("noindex");
  });

  it("redirects root and legacy state URLs to city-first routes", () => {
    expect(legacyRedirectPath("/")).toBe("/gurgaon");
    expect(legacyRedirectPath("/haryana")).toBe("/gurgaon");
    expect(legacyRedirectPath("/haryana/whisky/scotch/black-dog-123")).toBe("/gurgaon/product/black-dog-123");
  });
});
