import { describe, expect, it } from "vitest";
import { BRAND_CONTENT_BATCH_123, BRAND_IDENTITIES_BATCH_123, BRAND_LOGOS_BATCH_123, BRAND_SOURCES_BATCH_123 } from "../src/lib/brandContentBatch123.js";
import { BRAND_CONTENT_BATCH_127, BRAND_LOGOS_BATCH_127 } from "../src/lib/brandContentBatch127.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

const blocked = /editorial guardrail|database|portfolio-level|what to compare|do not infer|missing data|the producer does not publish|according to sources|according to the source|according to references|sources suggest|does not publish|does not state|not provided|product route|\broute\b|\bpage\b|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're|ultimate|perfect for any occasion|harmonious blend|A brand can contain more than one style|Start with the individual bottle|Check BevOry for reviewed city-level prices|represented on BevOry across/i;

describe("brand batch 123", () => {
  it("refreshes 10 guides and only carries verified existing logos", () => {
    expect(BRAND_IDENTITIES_BATCH_123).toHaveLength(10);
    const slugs = BRAND_IDENTITIES_BATCH_123.map(([slug]) => slug).sort();
    expect(Object.keys(BRAND_CONTENT_BATCH_123).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_SOURCES_BATCH_123).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_LOGOS_BATCH_123)).toEqual(["morpheus-blue"]);

    for (const [slug] of BRAND_IDENTITIES_BATCH_123) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      const content = BRAND_CONTENT_BATCH_123[slug];
      const refreshed = Boolean(BRAND_CONTENT_BATCH_127[slug]);
      const logo = refreshed ? (BRAND_LOGOS_BATCH_127[slug] ?? null) : BRAND_LOGOS_BATCH_123[slug] ?? null;
      const row = buildBrandExpansionData(definition!);
      expect(row.content_version).toBe(refreshed ? "brand-public-ui-v3-batch-127" : "brand-public-ui-v3-batch-123");
      expect(row.logo_url).toBe(logo);
      expect(row.logo_identity_verified).toBe(Boolean(logo));
      expect(row.logo_asset_status).toBe(logo ? "verified_remote_asset" : "missing_verified_asset");
      expect(auditPublicBrandFields(row), slug).toEqual([]);
      expect(BRAND_SOURCES_BATCH_123[slug].length).toBeGreaterThan(0);
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
