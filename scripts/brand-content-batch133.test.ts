import { describe, expect, it } from "vitest";
import { BRAND_CONTENT_BATCH_133, BRAND_IDENTITIES_BATCH_133, BRAND_LOGOS_BATCH_133, BRAND_SOURCES_BATCH_133 } from "../src/lib/brandContentBatch133.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

const blocked = /editorial guardrail|database|portfolio-level|what to compare|do not infer|missing data|the producer does not publish|according to sources|according to the source|according to references|sources suggest|does not publish|does not state|not provided|product route|\broute\b|\bpage\b|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're|ultimate|perfect for any occasion|harmonious blend|A brand can contain more than one style|Start with the individual bottle|Check BevOry for reviewed city-level prices|represented on BevOry across/i;

describe("brand batch 133", () => {
  it("refreshes 10 guides and keeps only verified logo assets", () => {
    expect(BRAND_IDENTITIES_BATCH_133).toHaveLength(10);
    const slugs = BRAND_IDENTITIES_BATCH_133.map(([slug]) => slug).sort();
    expect(Object.keys(BRAND_CONTENT_BATCH_133).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_SOURCES_BATCH_133).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_LOGOS_BATCH_133).sort()).toEqual(["kendall-jackson", "krsma", "moet-and-chandon"]);

    for (const [slug] of BRAND_IDENTITIES_BATCH_133) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      const content = BRAND_CONTENT_BATCH_133[slug];
      const row = buildBrandExpansionData(definition!);
      expect(row.content_version).toBe("brand-public-ui-v3-batch-133");
      expect(row.logo_url).toBe(BRAND_LOGOS_BATCH_133[slug] ?? null);
      expect(row.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_133[slug]));
      expect(row.logo_asset_status).toBe(BRAND_LOGOS_BATCH_133[slug] ? "verified_remote_asset" : "missing_verified_asset");
      expect(auditPublicBrandFields(row), slug).toEqual([]);
      expect(BRAND_SOURCES_BATCH_133[slug].length).toBeGreaterThan(0);
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
