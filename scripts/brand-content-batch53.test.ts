import { describe, expect, it } from "vitest";
import {
  BRAND_CONTENT_BATCH_53,
  BRAND_IDENTITIES_BATCH_53,
  BRAND_LOGOS_BATCH_53,
  BRAND_SOURCES_BATCH_53,
} from "../src/lib/brandContentBatch53.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

describe("brand batch 53", () => {
  it("revalidates 30 existing brands without replacing their logos", () => {
    expect(BRAND_IDENTITIES_BATCH_53).toHaveLength(30);
    const slugs = BRAND_IDENTITIES_BATCH_53.map(([slug]) => slug).sort();
    expect(Object.keys(BRAND_CONTENT_BATCH_53).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_SOURCES_BATCH_53).sort()).toEqual(slugs);
    expect(Object.keys(BRAND_LOGOS_BATCH_53)).toHaveLength(6);
    expect(BRAND_LOGOS_BATCH_53.pasqua).toBeUndefined();
    for (const [slug] of BRAND_IDENTITIES_BATCH_53) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      const row = buildBrandExpansionData(definition!);
      expect(row.content_version).toBe("brand-public-ui-v3-batch-53");
      expect(auditPublicBrandFields(row), slug).toEqual([]);
      expect(row.country_flag_url).toMatch(/^https:/);
      expect(BRAND_SOURCES_BATCH_53[slug].length).toBeGreaterThan(0);
    }
  });
});
