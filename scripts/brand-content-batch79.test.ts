import { describe, expect, it } from "vitest";
import { BRAND_CONTENT_BATCH_79, BRAND_IDENTITIES_BATCH_79, BRAND_LOGOS_BATCH_79, BRAND_SOURCES_BATCH_79 } from "../src/lib/brandContentBatch79.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

const blocked = /editorial guardrail|database|portfolio-level|what to compare|do not infer|missing data|the producer does not publish|according to sources|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i;

describe("brand batch 79", () => {
  it("adds 10 complete guides and leaves unverified logos empty", () => {
    expect(BRAND_IDENTITIES_BATCH_79).toHaveLength(10);
    const slugs = BRAND_IDENTITIES_BATCH_79.map(([slug]) => slug).sort();
    expect(Object.keys(BRAND_CONTENT_BATCH_79).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_SOURCES_BATCH_79).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_LOGOS_BATCH_79)).toHaveLength(0);

    for (const [slug] of BRAND_IDENTITIES_BATCH_79) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      const content = BRAND_CONTENT_BATCH_79[slug];
      const row = buildBrandExpansionData(definition!);
      expect(row.content_version).toBe("brand-public-ui-v3-batch-79");
      expect(row.logo_url).toBeNull();
      expect(row.logo_identity_verified).toBe(false);
      expect(row.logo_asset_status).toBe("missing_verified_asset");
      expect(auditPublicBrandFields(row), slug).toEqual([]);
      expect(BRAND_SOURCES_BATCH_79[slug].length).toBeGreaterThan(0);
      expect(JSON.stringify(content), slug).not.toMatch(blocked);
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(row.country_flag_url).toMatch(/^https:/);
    }
  });
});
