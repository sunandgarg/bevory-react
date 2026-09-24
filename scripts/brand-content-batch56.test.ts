import { describe, expect, it } from "vitest";
import { BRAND_CONTENT_BATCH_56, BRAND_IDENTITIES_BATCH_56, BRAND_LOGOS_BATCH_56, BRAND_SOURCES_BATCH_56 } from "../src/lib/brandContentBatch56.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

const blocked = /editorial guardrail|database|portfolio-level|what to compare|do not infer|missing data|the producer does not publish|according to sources|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i;

describe("brand batch 56", () => {
  it("revises 30 complete guides without assigning guessed logos", () => {
    expect(BRAND_IDENTITIES_BATCH_56).toHaveLength(30);
    const slugs = BRAND_IDENTITIES_BATCH_56.map(([slug]) => slug).sort();
    expect(Object.keys(BRAND_CONTENT_BATCH_56).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_SOURCES_BATCH_56).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_LOGOS_BATCH_56)).toHaveLength(23);

    for (const [slug] of BRAND_IDENTITIES_BATCH_56) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      const row = buildBrandExpansionData(definition!);
      expect(row.content_version).toBe("brand-public-ui-v3-batch-56");
      expect(auditPublicBrandFields(row), slug).toEqual([]);
      expect(row.country_flag_url).toMatch(/^https:/);
      expect(BRAND_SOURCES_BATCH_56[slug].length).toBeGreaterThan(0);
      expect(JSON.stringify(BRAND_CONTENT_BATCH_56[slug]), slug).not.toMatch(blocked);
      expect(BRAND_CONTENT_BATCH_56[slug].metaTitle.length).toBeLessThanOrEqual(60);
      expect(BRAND_CONTENT_BATCH_56[slug].metaDescription.length).toBeLessThanOrEqual(155);
      expect(row.logo_url).toBe(BRAND_LOGOS_BATCH_56[slug] ?? null);
    }
  });
});
