import { describe, expect, it } from "vitest";
import {
  dynamicProductSeo,
  enrichProductSeo,
  legacyRedirectPath,
  productAliasBucketForPath,
  productContentBucketForPath,
} from "./[[path]].js";

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

  it("loads editorial content from a small product shard and avoids repeated brand names", () => {
    expect(productContentBucketForPath("/delhi/product/johnnie-walker-gold-label/750ml"))
      .toBe("product-content-j");
    expect(productAliasBucketForPath("/delhi/product/johnnie-walker-gold-label/750ml"))
      .toBe("product-alias-j");
    const path = "/delhi/product/johnnie-walker-gold-label";
    const base = dynamicProductSeo(path, {
      brandsById: {},
      products: {
        "johnnie-walker-gold-label": {
          name: "Johnnie Walker Gold Label",
          brand: "Johnnie Walker",
          description: "Whisky product guide.",
          volumes: ["750ml"],
          prices: { delhi: { "750ml": 4500 } },
        },
      },
    });
    const enriched = enrichProductSeo(path, base, {
      "johnnie-walker-gold-label": {
        description: "A catalogue-grounded product overview.",
        faqs: [{ question: "Which size is listed?", answer: "The catalogue lists 750ml." }],
      },
    });

    expect(base.heading).toBe("Johnnie Walker Gold Label price in Delhi");
    expect(enriched.body).toContain("A catalogue-grounded product overview.");
    expect(enriched.faqs).toHaveLength(1);
  });

  it("redirects a retired city product slug while preserving its bottle size", () => {
    expect(legacyRedirectPath("/delhi/product/old-black-label/750ml", {
      products: {},
      brandsById: {},
      aliases: { "old-black-label": "johnnie-walker-black-label" },
    })).toBe("/delhi/product/johnnie-walker-black-label/750ml");
  });
});
