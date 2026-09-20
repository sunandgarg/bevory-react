import { describe, expect, it } from "vitest";
import { buildProductProfile } from "./enrich-product-content";

const categories = new Map([
  ["cat-whisky", { name: "Blended Scotch", slug: "blended-scotch", emoji: "🥃" }],
]);

const subcategories = new Map([
  ["sub-blended", { name: "Blended Scotch", slug: "blended-scotch" }],
]);

describe("buildProductProfile", () => {
  it("builds a complete catalogue-grounded product profile without inventing technical facts", () => {
    const profile = buildProductProfile({
      product: {
        id: "product-black-label",
        data: {
          brand: "Johnnie Walker",
          name: "Black Label",
          category_id: "cat-whisky",
          sub_category_id: "sub-blended",
          available_volumes_ml: [180, 750, 1000],
          volume: "750ml",
        },
      },
      categoriesById: categories,
      subcategoriesById: subcategories,
    });

    expect(profile.description).toContain("Johnnie Walker Black Label");
    expect(profile.description).toContain("180ml");
    expect(profile.description).toContain("750ml");
    expect(profile.description).toContain("1 litre (1,000ml)");
    expect(profile.taste_profile).toContain("category-level guidance");
    expect(profile.tasting_notes).toContain("not");
    expect(profile.label_guidance).toContain("ABV");
    expect(profile.label_guidance).toContain("origin");
    expect(profile.label_guidance).toContain("age statement");
    expect(profile.faqs).toHaveLength(6);
    expect(profile.food_pairings.length).toBeGreaterThanOrEqual(4);
    expect(profile.meta_title.length).toBeLessThanOrEqual(60);
    expect(profile.meta_description.length).toBeLessThanOrEqual(160);
    expect(profile.meta_title).toContain("BevOry");
  });

  it("keeps published content free of citations, external links and prohibited dash punctuation", () => {
    const profile = buildProductProfile({
      product: {
        id: "product-sula",
        data: {
          brand: "Sula",
          name: "Sula Syrah",
          category_id: "cat-whisky",
          sub_category_id: "sub-blended",
          available_volumes_ml: [750],
        },
      },
      categoriesById: categories,
      subcategoriesById: subcategories,
    });
    const published = JSON.stringify(profile);

    expect(profile.h1).toBe("Sula Syrah Price, Sizes and Product Guide");
    expect(published).not.toMatch(/[\u2013\u2014]/);
    expect(published).not.toMatch(/https?:\/\/|www\./i);
    expect(published).not.toMatch(/\baccording to\b|\bsources? suggest\b|\bsource:/i);
  });
});
