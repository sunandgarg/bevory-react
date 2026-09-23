import { describe, expect, it } from "vitest";
import { buildAdminSummary } from "./adminSummary.js";

describe("buildAdminSummary", () => {
  it("fills missing tables with zero", () => {
    expect(buildAdminSummary([
      { tableName: "products", _count: { _all: 42 } },
      { tableName: "cities", _count: { _all: 3 } },
    ])).toMatchObject({ products: 42, cities: 3, categories: 0, brand_spotlights: 0 });
  });
});
