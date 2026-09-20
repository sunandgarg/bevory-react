import { describe, expect, it } from "vitest";
import { buildBrandProfile } from "./enrich-brand-content.js";

const category = { id: "whisky", data: { id: "whisky", name: "World Whisky", slug: "world-whisky" } };
const subcategory = { id: "bourbon", data: { id: "bourbon", name: "Bourbon", slug: "world-whisky-bourbon" } };

describe("brand content enrichment", () => {
  it("builds a factual catalogue profile without unsupported origin claims", () => {
    const profile = buildBrandProfile({
      brand: { id: "brand-1", data: { brand_name: "Example Reserve" } },
      products: [
        {
          id: "product-1",
          data: {
            name: "Classic",
            brand_id: "brand-1",
            category_id: "whisky",
            sub_category_id: "bourbon",
            available_volumes_ml: [180, 750],
            image_url: "https://bevory.in/media/example.jpg",
            image_identity_verified: true,
          },
        },
      ],
      categoriesById: new Map([[category.id, category.data]]),
      subcategoriesById: new Map([[subcategory.id, subcategory.data]]),
    });

    expect(profile.description).toContain("Example Reserve Classic");
    expect(profile.description).toContain("180ml");
    expect(profile.description).toContain("750ml");
    expect(profile.story).toContain("Bourbon");
    expect(profile.image_url).toBe("https://bevory.in/media/example.jpg");
    expect(profile.featured_product_id).toBe("product-1");
    expect(profile.faqs).toHaveLength(5);
    expect(profile.meta_title.length).toBeLessThanOrEqual(60);
    expect(profile.meta_title).toMatch(/BevOry$/);
    expect(profile.meta_description.length).toBeLessThanOrEqual(160);
    const publishedText = JSON.stringify({
      description: profile.description,
      story: profile.story,
      tasting_notes: profile.tasting_notes,
      how_to_enjoy: profile.how_to_enjoy,
      pairing_ideas: profile.pairing_ideas,
      why_choose: profile.why_choose,
      faqs: profile.faqs,
      final_verdict: profile.final_verdict,
      meta_title: profile.meta_title,
      meta_description: profile.meta_description,
    });
    expect(publishedText).not.toMatch(/[\u2013\u2014]/);
    expect(publishedText).not.toMatch(/according to|sources suggest|https?:\/\//i);
    expect(profile).not.toHaveProperty("country");
  });

  it("keeps long-brand metadata within search display limits", () => {
    const profile = buildBrandProfile({
      brand: { id: "brand-2", data: { brand_name: "An Exceptionally Long Beverage Brand Name Created for Testing" } },
      products: [{ id: "product-2", data: { name: "Bottle", brand_id: "brand-2", category_id: "whisky", volume: "750ml" } }],
      categoriesById: new Map([[category.id, category.data]]),
      subcategoriesById: new Map(),
    });

    expect(profile.meta_title.length).toBeLessThanOrEqual(60);
    expect(profile.meta_description.length).toBeLessThanOrEqual(160);
  });
});
