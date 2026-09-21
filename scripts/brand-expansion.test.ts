import { describe, expect, it } from "vitest";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";

describe("brand expansion editorial data", () => {
  it("contains the planned brands once with stable slugs", () => {
    expect(BRAND_EXPANSION).toHaveLength(38);
    expect(new Set(BRAND_EXPANSION.map((brand) => brand.slug)).size).toBe(BRAND_EXPANSION.length);
    expect(BRAND_EXPANSION.every((brand) => /^https:\/\//.test(brand.officialUrl))).toBe(true);
  });

  it("keeps published copy within the editorial constraints", () => {
    for (const definition of BRAND_EXPANSION) {
      const data = buildBrandExpansionData(definition, "2026-09-21T00:00:00.000Z");
      const publishedKeys = [
        "description", "story", "tasting_notes", "how_to_enjoy", "pairing_ideas",
        "why_choose", "faqs", "final_verdict", "meta_title", "meta_description",
      ] as const;
      const text = JSON.stringify(Object.fromEntries(publishedKeys.map((key) => [key, data[key]])));
      expect(text).not.toMatch(/[\u2013\u2014]/);
      expect(text).not.toMatch(/according to|sources suggest|references/i);
      expect(data.meta_title.length).toBeLessThanOrEqual(60);
      expect(data.meta_description.length).toBeLessThanOrEqual(160);
      expect(data.logo_url).toBeNull();
      expect(data.logo_identity_verified).toBe(false);
      expect(data.logo_asset_status).toBe("pending_first_party_verification");
    }
  });
});
