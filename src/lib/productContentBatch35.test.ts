import { describe, expect, it } from "vitest";
import { PRODUCT_BATCH_CONTENT as BATCH_35 } from "./productContentBatch35.js";
import { PRODUCT_BATCH_CONTENT as ALL, productContentBatchVersion } from "./productContentBatches.js";

const banned = /symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|liquid gold|rich tapestry|whether you're|BevOry has not assigned|A verified ingredient statement|Availability is not assumed|Adults can compare like with like|Information pending verification|database|scraper|catalogue|duplicate listings/i;

describe("researched product batch 35", () => {
  it("contains 30 complete, distinct editorial records", () => {
    const entries = Object.entries(BATCH_35);
    expect(entries).toHaveLength(30);
    for (const [slug, item] of entries) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
      expect(ALL[slug], slug).toBe(item);
      expect(productContentBatchVersion(slug), slug).toBe("researched-product-batch-35");
      const fields = [item.productName, item.category, item.shortOverview, item.craftStory,
        item.tastingNotes.nose, item.tastingNotes.palate, item.tastingNotes.finish,
        item.servingGuide.glassware, item.servingGuide.idealTemperature,
        item.servingGuide.recommendation, item.whyBuyThis, item.metaTitle,
        item.metaDescription, ...item.foodPairings,
        ...item.faqs.flatMap(({ question, answer }) => [question, answer])];
      for (const value of fields) {
        expect(value.trim(), slug).not.toBe("");
        expect(value, slug).not.toMatch(banned);
      }
      expect(item.foodPairings.length, slug).toBeGreaterThanOrEqual(4);
      expect(item.foodPairings.length, slug).toBeLessThanOrEqual(5);
      expect(item.faqs, slug).toHaveLength(2);
      expect(item.metaTitle.length, slug).toBeLessThanOrEqual(60);
      expect(item.metaDescription.length, slug).toBeLessThanOrEqual(155);
    }
  });
});
