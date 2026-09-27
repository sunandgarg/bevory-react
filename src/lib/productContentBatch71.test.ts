import { describe, expect, it } from "vitest";
import { PRODUCT_BATCH_CONTENT as BATCH_71 } from "./productContentBatch71.js";
import { PRODUCT_BATCH_CONTENT as ALL, productContentBatchVersion } from "./productContentBatches.js";

const banned = /symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|liquid gold|rich tapestry|whether you're|BevOry has not assigned|A verified ingredient statement|Availability is not assumed|Adults can compare like with like|Information pending verification|database|scraper|duplicate listings|missing price|unverified facts|catalogue/i;

describe("researched product batch 71", () => {
  it("contains 10 complete, previously uncovered editorial profiles", () => {
    const earlier = Object.entries(import.meta.glob<{ PRODUCT_BATCH_CONTENT: Record<string, unknown> }>("./productContentBatch[0-7][0-9].ts", { eager: true }))
      .filter(([path]) => !path.endsWith("productContentBatch71.ts"))
      .map(([, batch]) => batch);
    const entries = Object.entries(BATCH_71);
    expect(entries).toHaveLength(10);
    for (const [slug, item] of entries) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
      expect(earlier.some((batch) => slug in batch.PRODUCT_BATCH_CONTENT), slug).toBe(false);
      expect(ALL[slug], slug).toBe(item);
      expect(productContentBatchVersion(slug), slug).toBe("researched-product-batch-71");
      const fields = [
        item.productName, item.category, item.shortOverview, item.craftStory,
        item.tastingNotes.nose, item.tastingNotes.palate, item.tastingNotes.finish,
        item.servingGuide.glassware, item.servingGuide.idealTemperature,
        item.servingGuide.recommendation, item.whyBuyThis, item.metaTitle,
        item.metaDescription, ...item.foodPairings,
        ...item.faqs.flatMap(({ question, answer }) => [question, answer]),
      ];
      for (const value of fields) {
        expect(value.trim(), slug).not.toBe("");
        expect(value, slug).not.toMatch(banned);
      }
      expect(item.foodPairings, slug).toHaveLength(4);
      expect(item.faqs, slug).toHaveLength(2);
      expect(item.metaTitle.length, slug).toBeLessThanOrEqual(60);
      expect(item.metaDescription.length, slug).toBeLessThanOrEqual(155);
    }
  });
});
