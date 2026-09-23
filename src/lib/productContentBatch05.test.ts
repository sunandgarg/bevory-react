import { describe, expect, it } from "vitest";
import { PRODUCT_BATCH_CONTENT as BATCH_01 } from "./productContentBatch01.js";
import { PRODUCT_BATCH_CONTENT as BATCH_02 } from "./productContentBatch02.js";
import { PRODUCT_BATCH_CONTENT as BATCH_03 } from "./productContentBatch03.js";
import { PRODUCT_BATCH_CONTENT as BATCH_04 } from "./productContentBatch04.js";
import { PRODUCT_BATCH_CONTENT as BATCH_05 } from "./productContentBatch05.js";
import { applyProductContentOverlay } from "./productContentOverlay.js";

const banned = /symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|liquid gold|rich tapestry|whether you're|BevOry has not assigned|A verified ingredient statement|Availability is not assumed|Adults can compare like with like|Information pending verification/i;

describe("researched product batch 05", () => {
  it("contains 30 new, complete records", () => {
    const entries = Object.entries(BATCH_05);
    expect(entries).toHaveLength(30);
    for (const [slug, item] of entries) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
      expect(slug in BATCH_01 || slug in BATCH_02 || slug in BATCH_03 || slug in BATCH_04, slug).toBe(false);
      const fields = [item.productName, item.category, item.shortOverview, item.craftStory,
        item.tastingNotes.nose, item.tastingNotes.palate, item.tastingNotes.finish,
        item.servingGuide.glassware, item.servingGuide.idealTemperature,
        item.servingGuide.recommendation, item.whyBuyThis,
        item.metaTitle, item.metaDescription, ...item.foodPairings,
        ...item.faqs.flatMap(({ question, answer }) => [question, answer])];
      for (const value of fields) {
        expect(value.trim(), slug).not.toBe("");
        expect(value, slug).not.toMatch(banned);
      }
      expect(item.foodPairings.length, slug).toBeGreaterThanOrEqual(4);
      expect(item.foodPairings.length, slug).toBeLessThanOrEqual(5);
      expect(item.faqs, slug).toHaveLength(2);
      expect(item.metaTitle, slug).toBe(`${item.productName} Price, Taste & Review | BevOry`);
      expect(item.metaTitle.length, slug).toBeLessThanOrEqual(60);
      expect(item.metaDescription.length, slug).toBeLessThanOrEqual(155);
    }
  });

  it("overlays editorial without changing price or identity", () => {
    const original = { slug: "don-julio-blanco-274c610", id: "id", price: 123, description: "generic" };
    const result = applyProductContentOverlay(original);
    expect(result.id).toBe("id");
    expect(result.price).toBe(123);
    expect(result.product_content_version).toBe("researched-product-batch-05");
    expect(result.description).toContain("Don Julio Blanco");
    expect(original.description).toBe("generic");
  });
});
