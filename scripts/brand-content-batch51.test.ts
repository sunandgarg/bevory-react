import { describe, expect, it } from "vitest";
import {
  BRAND_CONTENT_BATCH_51,
  BRAND_IDENTITIES_BATCH_51,
  BRAND_LOGOS_BATCH_51,
  BRAND_SOURCES_BATCH_51,
} from "../src/lib/brandContentBatch51.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { auditPublicBrandFields } from "./brand-editorial-audit-lib.js";

describe("brand batch 51", () => {
  it("provides researched public content for exactly 30 existing brands", () => {
    expect(BRAND_IDENTITIES_BATCH_51).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_51).sort()).toEqual(BRAND_IDENTITIES_BATCH_51.map(([slug]) => slug).sort());
    expect(Object.keys(BRAND_SOURCES_BATCH_51).sort()).toEqual(BRAND_IDENTITIES_BATCH_51.map(([slug]) => slug).sort());
    expect(BRAND_LOGOS_BATCH_51).toEqual({
      "morpheus-blue": "https://static.livcheers.com/static/content/images/brand/morpheus.webp",
      piccini: "https://www.winesellersltd.com/wp-content/uploads/2023/06/Piccini_logo.png",
    });
    for (const [slug] of BRAND_IDENTITIES_BATCH_51) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
      expect(definition, slug).toBeDefined();
      expect(auditPublicBrandFields(buildBrandExpansionData(definition!)), slug).toEqual([]);
      expect(buildBrandExpansionData(definition!).content_version).toBe("brand-public-ui-v3-batch-51");
    }
  });
});
