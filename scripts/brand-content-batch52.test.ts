import { describe, expect, it } from "vitest";
import {
  BRAND_CONTENT_BATCH_52,
  BRAND_IDENTITIES_BATCH_52,
  BRAND_LOGOS_BATCH_52,
  BRAND_SOURCES_BATCH_52,
} from "../src/lib/brandContentBatch52.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

describe("brand batch 52", () => {
  it("revalidates 30 existing brands with complete consumer-facing fields", () => {
    expect(BRAND_IDENTITIES_BATCH_52).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_52).sort()).toEqual(BRAND_IDENTITIES_BATCH_52.map(([slug]) => slug).sort());
    expect(Object.keys(BRAND_SOURCES_BATCH_52).sort()).toEqual(BRAND_IDENTITIES_BATCH_52.map(([slug]) => slug).sort());
    expect(BRAND_LOGOS_BATCH_52).toEqual({});
    for (const [slug] of BRAND_IDENTITIES_BATCH_52) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      const row = buildBrandExpansionData(definition!);
      expect(row.content_version).toBe("brand-public-ui-v3-batch-52");
      expect(auditPublicBrandFields(row), slug).toEqual([]);
      expect(row.country_flag).toBeTruthy();
    }
  });
});
