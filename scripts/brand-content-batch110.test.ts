import { describe, expect, it } from "vitest";
import { BRAND_CONTENT_BATCH_110, BRAND_IDENTITIES_BATCH_110, BRAND_LOGOS_BATCH_110, BRAND_SOURCES_BATCH_110 } from "../src/lib/brandContentBatch110.js";
import { BRAND_CONTENT_BATCH_123, BRAND_LOGOS_BATCH_123 } from "../src/lib/brandContentBatch123.js";
import { BRAND_CONTENT_BATCH_124, BRAND_LOGOS_BATCH_124 } from "../src/lib/brandContentBatch124.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

const blocked = /editorial guardrail|database|portfolio-level|what to compare|do not infer|missing data|the producer does not publish|according to sources|according to the source|according to references|sources suggest|does not publish|does not state|not provided|product route|\broute\b|\bpage\b|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're|ultimate|perfect for any occasion|harmonious blend|A brand can contain more than one style|Start with the individual bottle|Check BevOry for reviewed city-level prices|represented on BevOry across/i;

describe("brand batch 110", () => {
  it("refreshes 10 complete guides and leaves unverified logos empty", () => {
    expect(BRAND_IDENTITIES_BATCH_110).toHaveLength(10);
    const slugs = BRAND_IDENTITIES_BATCH_110.map(([slug]) => slug).sort();
    expect(Object.keys(BRAND_CONTENT_BATCH_110).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_SOURCES_BATCH_110).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_LOGOS_BATCH_110)).toHaveLength(0);

    for (const [slug] of BRAND_IDENTITIES_BATCH_110) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      const content = BRAND_CONTENT_BATCH_110[slug];
      const row = buildBrandExpansionData(definition!);
      const refreshed124 = Boolean(BRAND_CONTENT_BATCH_124[slug]);
      const refreshed123 = Boolean(BRAND_CONTENT_BATCH_123[slug]);
      const logo = refreshed124 ? (BRAND_LOGOS_BATCH_124[slug] ?? null) : refreshed123 ? (BRAND_LOGOS_BATCH_123[slug] ?? null) : null;
      expect(row.content_version).toBe(refreshed124 ? "brand-public-ui-v3-batch-124" : refreshed123 ? "brand-public-ui-v3-batch-123" : "brand-public-ui-v3-batch-110");
      expect(row.logo_url).toBe(logo);
      expect(row.logo_identity_verified).toBe(Boolean(logo));
      expect(row.logo_asset_status).toBe(logo ? "verified_remote_asset" : "missing_verified_asset");
      expect(auditPublicBrandFields(row), slug).toEqual([]);
      expect(BRAND_SOURCES_BATCH_110[slug].length).toBeGreaterThan(0);
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
