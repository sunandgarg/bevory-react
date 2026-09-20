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
  it("keeps an unpriced city variant visible without indexing or inventing a price", () => {
    const seo = dynamicProductSeo(
      "/mumbai/product/johnnie-walker-black-label/180ml",
      productIndex,
    );
    expect(seo?.robots).toContain("noindex, follow");
    expect(seo?.body.join(" ")).toContain("does not yet have a verified price");
    expect(JSON.stringify(seo?.structuredData)).not.toContain('"offers"');
  });

  it("keeps unknown sizes out of the index", () => {
    expect(dynamicProductSeo(
      "/mumbai/product/johnnie-walker-black-label/100ml",
      productIndex,
    )).toBeNull();
  });

  it("emits only exact first-party /media product images", () => {
    const external = dynamicProductSeo("/gurgaon/product/johnnie-walker-black-label", {
      ...productIndex,
      products: {
        ...productIndex.products,
        "johnnie-walker-black-label": {
          ...productIndex.products["johnnie-walker-black-label"],
          image: "https://images.example/black-label.jpg",
        },
      },
    });
    expect(external?.image).toBeUndefined();
    expect(JSON.stringify(external?.structuredData)).not.toContain("images.example");

    const firstParty = dynamicProductSeo("/gurgaon/product/johnnie-walker-black-label", {
      ...productIndex,
      products: {
        ...productIndex.products,
        "johnnie-walker-black-label": {
          ...productIndex.products["johnnie-walker-black-label"],
          image: "https://bevory.in/media/migrated-images/products/black-label/photo.jpg",
        },
      },
    });
    expect(firstParty?.image).toBe("https://bevory.in/media/migrated-images/products/black-label/photo.jpg");
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
    expect(legacyRedirectPath("/gurgaon/", productIndex)).toBe("/gurgaon");
    expect(legacyRedirectPath("/product/not-a-real-product", productIndex)).toBeNull();
  });
});
