import { describe, expect, it } from "vitest";
import { PRODUCT_BATCH_CONTENT } from "./productContentBatch01.js";
import { applyProductContentOverlay } from "./productContentOverlay.js";

const banned = /symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|liquid gold|rich tapestry|whether you're|BevOry has not assigned|A verified ingredient statement|Availability is not assumed|Adults can compare like with like|Information pending verification/i;

describe("researched product batch 01", () => {
  it("contains exactly 30 complete, distinct catalogue records", () => {
    const entries = Object.entries(PRODUCT_BATCH_CONTENT);
    expect(entries).toHaveLength(30);
    expect(new Set(entries.map(([slug]) => slug)).size).toBe(30);
    for (const [slug, item] of entries) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
      for (const value of [item.productName, item.category, item.shortOverview, item.craftStory,
        item.tastingNotes.nose, item.tastingNotes.palate, item.tastingNotes.finish,
        item.servingGuide.glassware, item.servingGuide.idealTemperature,
        item.servingGuide.recommendation, item.whyBuyThis,
        item.metaTitle, item.metaDescription]) {
        expect(value.trim(), slug).not.toBe("");
        expect(value, slug).not.toMatch(banned);
      }
      expect(item.foodPairings.length, slug).toBeGreaterThanOrEqual(4);
      expect(item.foodPairings.length, slug).toBeLessThanOrEqual(5);
      expect(item.foodPairings.every((value) => value.trim().length > 0), slug).toBe(true);
      expect(item.faqs, slug).toHaveLength(2);
      expect(item.faqs.every(({ question, answer }) => question.trim() && answer.trim()), slug).toBe(true);
      expect(item.metaTitle, slug).toBe(`${item.productName} Price, Taste & Review | BevOry`);
      expect(item.metaTitle.length, slug).toBeLessThanOrEqual(60);
      expect(item.metaDescription.length, slug).toBeLessThanOrEqual(155);
    }
  });

  it("replaces generic copy but preserves catalogue and price identity", () => {
    const original = { slug: "johnnie-walker-black-label-6e8300f", id: "test-id", name: "Black Label", price: 123,
      description: "Generic filler", taste_profile: "Generic filler", ingredients_note: "Generic filler" };
    const result = applyProductContentOverlay(original);
    expect(result.id).toBe("test-id");
    expect(result.price).toBe(123);
    expect(result.description).toContain("Black Label");
    expect(result.taste_profile).toBeNull();
    expect(result.ingredients_note).toBeNull();
    expect(original.description).toBe("Generic filler");
  });
});
