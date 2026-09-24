import { describe, expect, it } from "vitest";
import { BRAND_CONTENT_BATCH_59, BRAND_IDENTITIES_BATCH_59, BRAND_LOGOS_BATCH_59, BRAND_SOURCES_BATCH_59 } from "../src/lib/brandContentBatch59.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

const blocked = /editorial guardrail|database|portfolio-level|what to compare|do not infer|missing data|the producer does not publish|according to sources|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i;

describe("brand batch 59", () => {
  it("refreshes 30 complete guides without inventing logos", () => {
    expect(BRAND_IDENTITIES_BATCH_59).toHaveLength(30);
    const slugs = BRAND_IDENTITIES_BATCH_59.map(([slug]) => slug).sort();
    expect(Object.keys(BRAND_CONTENT_BATCH_59).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_SOURCES_BATCH_59).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_LOGOS_BATCH_59)).toHaveLength(2);

    for (const [slug] of BRAND_IDENTITIES_BATCH_59) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      const content = BRAND_CONTENT_BATCH_59[slug];
      const row = buildBrandExpansionData(definition!);
      expect(row.content_version).toBe("brand-public-ui-v3-batch-59");
      expect(auditPublicBrandFields(row), slug).toEqual([]);
      expect(BRAND_SOURCES_BATCH_59[slug].length).toBeGreaterThan(0);
      expect(JSON.stringify(content), slug).not.toMatch(blocked);
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(row.logo_url).toBe(BRAND_LOGOS_BATCH_59[slug] ?? null);
      expect(row.country_flag_url).toMatch(/^https:/);
    }
  });
});
