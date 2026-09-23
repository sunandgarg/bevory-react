import { describe, expect, it } from "vitest";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { BRAND_CONTENT_BATCH_01 } from "../src/lib/brandContentBatch01.js";
import { BRAND_CONTENT_BATCH_02 } from "../src/lib/brandContentBatch02.js";
import { BRAND_CONTENT_BATCH_03 } from "../src/lib/brandContentBatch03.js";
import { BRAND_CONTENT_BATCH_04 } from "../src/lib/brandContentBatch04.js";
import { BRAND_CONTENT_BATCH_05 } from "../src/lib/brandContentBatch05.js";
import { BRAND_CONTENT_BATCH_06 } from "../src/lib/brandContentBatch06.js";

describe("brand expansion editorial data", () => {
  it("contains the planned brands once with stable slugs", () => {
    expect(BRAND_EXPANSION).toHaveLength(58);
    expect(new Set(BRAND_EXPANSION.map((brand) => brand.slug)).size).toBe(BRAND_EXPANSION.length);
    expect(BRAND_EXPANSION.every((brand) => /^https:\/\//.test(brand.officialUrl))).toBe(true);
  });

  it("keeps published copy within the editorial constraints", () => {
    for (const definition of BRAND_EXPANSION) {
      const data = buildBrandExpansionData(definition, "2026-09-21T00:00:00.000Z");
      const publishedKeys = [
        "description", "story", "tasting_notes", "how_to_enjoy", "pairing_ideas",
        "why_choose", "faqs", "final_verdict", "meta_title", "meta_description",
      ] as const;
      const text = JSON.stringify(Object.fromEntries(publishedKeys.map((key) => [key, data[key]])));
      expect(text).not.toMatch(/[\u2013\u2014]/);
      expect(text).not.toMatch(/according to|sources suggest|references/i);
      expect(data.meta_title.length).toBeLessThanOrEqual(60);
      expect(data.meta_description.length).toBeLessThanOrEqual(160);
      expect(data.logo_url).toMatch(/^https:\/\/static\.livcheers\.com\/static\/content\/images\/brand\/.+\.webp$/);
      expect(data.logo_identity_verified).toBe(false);
      expect(data.logo_asset_status).toBe("livcheers_slug_asset_pending_verification");
    }
  });

  it("keeps all refreshed batches complete and consumer-facing", () => {
    const publicFields = ["description", "story", "tasting_notes", "how_to_enjoy", "pairing_ideas", "why_choose", "faqs", "final_verdict"] as const;
    const internalLanguage = /editorial guardrail|database|portfolio-level|what to compare|internal wiki|exact product record|do not infer/i;

    for (const [batch, version, expectedCount] of [
      [BRAND_CONTENT_BATCH_01, "brand-public-ui-v3-batch-01", 10],
      [BRAND_CONTENT_BATCH_02, "brand-public-ui-v3-batch-02", 10],
      [BRAND_CONTENT_BATCH_03, "brand-public-ui-v3-batch-03", 10],
      [BRAND_CONTENT_BATCH_04, "brand-public-ui-v3-batch-04", 8],
      [BRAND_CONTENT_BATCH_05, "brand-public-ui-v3-batch-05", 10],
      [BRAND_CONTENT_BATCH_06, "brand-public-ui-v3-batch-06", 10],
    ] as const) {
      expect(Object.keys(batch)).toHaveLength(expectedCount);
      for (const slug of Object.keys(batch)) {
        const definition = BRAND_EXPANSION.find((brand) => brand.slug === slug);
        expect(definition).toBeDefined();
        const data = buildBrandExpansionData(definition!, "2026-09-22T00:00:00.000Z");
        for (const field of publicFields) {
          expect(data[field]).toBeTruthy();
          expect(JSON.stringify(data[field])).not.toMatch(internalLanguage);
        }
        expect(data.content_version).toBe(version);
        expect(data.logo_url).toMatch(/^https:\/\/static\.livcheers\.com\/static\/content\/images\/brand\/.+\.webp$/);
      }
    }
  });
});
