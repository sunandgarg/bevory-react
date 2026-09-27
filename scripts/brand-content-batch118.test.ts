import { describe, expect, it } from "vitest";
import { BRAND_CONTENT_BATCH_118, BRAND_IDENTITIES_BATCH_118, BRAND_LOGOS_BATCH_118, BRAND_SOURCES_BATCH_118 } from "../src/lib/brandContentBatch118.js";
import { BRAND_CONTENT_BATCH_125, BRAND_LOGOS_BATCH_125 } from "../src/lib/brandContentBatch125.js";
import { BRAND_CONTENT_BATCH_127, BRAND_LOGOS_BATCH_127 } from "../src/lib/brandContentBatch127.js";
import { BRAND_CONTENT_BATCH_128, BRAND_LOGOS_BATCH_128 } from "../src/lib/brandContentBatch128.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

const blocked = /editorial guardrail|database|portfolio-level|what to compare|do not infer|missing data|the producer does not publish|according to sources|according to the source|according to references|sources suggest|does not publish|does not state|not provided|product route|\broute\b|\bpage\b|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're|ultimate|perfect for any occasion|harmonious blend|A brand can contain more than one style|Start with the individual bottle|Check BevOry for reviewed city-level prices|represented on BevOry across/i;

describe("brand batch 118", () => {
  it("refreshes 10 older guides and leaves unverified logo slots empty", () => {
    expect(BRAND_IDENTITIES_BATCH_118).toHaveLength(10);
    const slugs = BRAND_IDENTITIES_BATCH_118.map(([slug]) => slug).sort();
    expect(Object.keys(BRAND_CONTENT_BATCH_118).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_SOURCES_BATCH_118).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_LOGOS_BATCH_118).sort()).toEqual([]);

    for (const [slug] of BRAND_IDENTITIES_BATCH_118) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      const content = BRAND_CONTENT_BATCH_118[slug];
      const row = buildBrandExpansionData(definition!);
      const refreshed128 = Boolean(BRAND_CONTENT_BATCH_128[slug]);
      const refreshed127 = Boolean(BRAND_CONTENT_BATCH_127[slug]);
      const refreshed125 = Boolean(BRAND_CONTENT_BATCH_125[slug]);
      const logo = refreshed128 ? (BRAND_LOGOS_BATCH_128[slug] ?? null) : refreshed127 ? (BRAND_LOGOS_BATCH_127[slug] ?? null) : refreshed125 ? (BRAND_LOGOS_BATCH_125[slug] ?? null) : null;
      expect(row.content_version).toBe(refreshed128 ? "brand-public-ui-v3-batch-128" : refreshed127 ? "brand-public-ui-v3-batch-127" : refreshed125 ? "brand-public-ui-v3-batch-125" : "brand-public-ui-v3-batch-118");
      expect(row.logo_url).toBe(logo);
      expect(row.logo_identity_verified).toBe(Boolean(logo));
      expect(row.logo_asset_status).toBe(logo ? "verified_remote_asset" : "missing_verified_asset");
      expect(auditPublicBrandFields(row), slug).toEqual([]);
      expect(BRAND_SOURCES_BATCH_118[slug].length).toBeGreaterThan(0);
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
