import { describe, expect, it } from "vitest";
import { dynamicProductSeo, legacyRedirectPath } from "./[[path]].js";

const productIndex = {
  brandsById: { "78575e48-2b55-4a22-9970-39dd28d337e6": "peter-scot" },
  products: {
    "johnnie-walker-black-label": {
      name: "Black Label",
      brand: "Johnnie Walker",
      description: "Blended Scotch whisky.",
      categoryName: "Whisky",
      categorySlug: "whisky",
      volumes: ["750ml", "180ml"],
      prices: { delhi: { "180ml": 900 }, gurgaon: { "750ml": 3200 } },
    },
  },
};

describe("SEO routing", () => {
  it("creates indexable city variant metadata without inventing a price", () => {
    const seo = dynamicProductSeo(
      "/mumbai/product/johnnie-walker-black-label/180ml",
      productIndex,
    );
    expect(seo?.robots).toContain("index, follow");
    expect(seo?.body.join(" ")).toContain("does not yet have a verified price");
    expect(JSON.stringify(seo?.structuredData)).not.toContain('"offers"');
  });

  it("keeps unknown sizes out of the index", () => {
    expect(dynamicProductSeo(
      "/mumbai/product/johnnie-walker-black-label/100ml",
      productIndex,
    )).toBeNull();
  });

  it("redirects UUID brands and legacy products to readable canonical paths", () => {
    expect(legacyRedirectPath(
      "/brand/78575e48-2b55-4a22-9970-39dd28d337e6",
      productIndex,
    )).toBe("/gurgaon/brand/peter-scot");
    expect(legacyRedirectPath(
      "/product/johnnie-walker-blonde",
      productIndex,
    )).toBe("/gurgaon/product/johnnie-walker-blonde-f5823b7");
  });
});
