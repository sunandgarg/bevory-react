import { describe, expect, it } from "vitest";
import { BRAND_CONTENT_BATCH_92, BRAND_IDENTITIES_BATCH_92, BRAND_LOGOS_BATCH_92, BRAND_SOURCES_BATCH_92 } from "../src/lib/brandContentBatch92.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

const blocked = /editorial guardrail|database|portfolio-level|what to compare|do not infer|missing data|the producer does not publish|according to sources|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i;

describe("brand batch 92", () => {
  it("adds 10 complete guides and leaves unverified logos empty", () => {
    expect(BRAND_IDENTITIES_BATCH_92).toHaveLength(10);
    const slugs = BRAND_IDENTITIES_BATCH_92.map(([slug]) => slug).sort();
    expect(Object.keys(BRAND_CONTENT_BATCH_92).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_SOURCES_BATCH_92).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_LOGOS_BATCH_92)).toHaveLength(0);

    for (const [slug] of BRAND_IDENTITIES_BATCH_92) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      const content = BRAND_CONTENT_BATCH_92[slug];
      const row = buildBrandExpansionData(definition!);
      expect(row.content_version).toBe("brand-public-ui-v3-batch-92");
      expect(row.logo_url).toBeNull();
      expect(row.logo_identity_verified).toBe(false);
      expect(row.logo_asset_status).toBe("missing_verified_asset");
      expect(auditPublicBrandFields(row), slug).toEqual([]);
      expect(BRAND_SOURCES_BATCH_92[slug].length).toBeGreaterThan(0);
      expect(JSON.stringify(content), slug).not.toMatch(blocked);
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(JSON.stringify(row.country_flag_url)).toMatch(/https:/);
    }
  });
});
