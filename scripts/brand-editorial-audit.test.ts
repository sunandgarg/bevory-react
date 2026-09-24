import { describe, expect, it } from "vitest";
import { auditCatalogueRows, auditPublicBrandFields } from "./brand-editorial-audit-lib.js";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";

describe("whole-catalogue editorial audit", () => {
  it("scans all locally authored guides without confusing audit fields with public text", () => {
    for (const definition of BRAND_EXPANSION) {
      expect(auditPublicBrandFields({ ...buildBrandExpansionData(definition), source_snapshot: "Editorial guardrail" }), definition.slug).toEqual([]);
    }
  });

  it("finds legacy prose even when every field is populated", () => {
    const row = buildBrandExpansionData(BRAND_EXPANSION[0]);
    expect(auditPublicBrandFields({ ...row, story: "Adults can compare like with like. Availability is not assumed across India." }))
      .toContain("public_language:story:adults can compare like with like,availability is not assumed across india");
  });

  it("catches whitespace, malformed notes and empty nested fields", () => {
    const row = buildBrandExpansionData(BRAND_EXPANSION[0]);
    const issues = auditPublicBrandFields({ ...row, description: " ", tasting_notes: [{ title: "Aroma", description: "" }, "spice"], faqs: [{ question: "Where?", answer: "" }, {}], pairing_ideas: [{ title: "Food", items: [] }] });
    expect(issues).toEqual(expect.arrayContaining(["empty_or_invalid:description", "invalid_note:tasting_notes:0", "invalid_note:tasting_notes:1", "invalid_faq:0", "invalid_faq:1", "invalid_pairing:0"]));
  });

  it("reports every row and marks ambiguous names without mutating or merging them", () => {
    const rows = [{ id: "1", brand_name: "All", slug: "all" }, { id: "2", brand_name: "Ciroc", slug: "ciroc" }, { id: "3", brand_name: "Cîroc", slug: "ciroc-second" }, { id: "4", brand_name: "06", slug: "06" }];
    const before = structuredClone(rows);
    const result = auditCatalogueRows(rows);
    expect(result).toHaveLength(4);
    expect(result[0].identityReview).toContain("possible_category_or_region");
    expect(result[1].identityReview).toContain("duplicate_normalized_name");
    expect(result[3].identityReview).toContain("numeric_name_requires_identity_check");
    expect(rows).toEqual(before);
  });
});
