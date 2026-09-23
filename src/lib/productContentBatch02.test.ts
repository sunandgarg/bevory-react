import { describe, expect, it } from "vitest";
import { PRODUCT_BATCH_CONTENT as BATCH_01 } from "./productContentBatch01.js";
import { PRODUCT_BATCH_CONTENT as BATCH_02 } from "./productContentBatch02.js";
import { applyProductContentOverlay } from "./productContentOverlay.js";

const banned = /symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|liquid gold|rich tapestry|whether you're|BevOry has not assigned|A verified ingredient statement|Availability is not assumed|Adults can compare like with like|Information pending verification/i;

describe("researched product batch 02", () => {
  it("contains 30 new, complete records", () => {
    const entries = Object.entries(BATCH_02);
    expect(entries).toHaveLength(30);
    expect(entries.every(([slug]) => !(slug in BATCH_01))).toBe(true);
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
      expect(item.metaTitle, slug).toMatch(/ Price, (Taste & )?Review \| BevOry$/);
      expect(item.metaTitle.length, slug).toBeLessThanOrEqual(60);
      expect(item.metaDescription.length, slug).toBeLessThanOrEqual(155);
    }
  });

  it("overlays editorial without changing price or identity", () => {
    const original = { slug: "glenmorangie-signet-8ee8eec", id: "id", price: 123, description: "generic" };
    const result = applyProductContentOverlay(original);
    expect(result.id).toBe("id");
    expect(result.price).toBe(123);
    expect(result.product_content_version).toBe("researched-product-batch-02");
    expect(result.description).toContain("Signet");
    expect(original.description).toBe("generic");
  });
});
