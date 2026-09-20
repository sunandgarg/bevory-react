import { describe, expect, it } from "vitest";
import { fullProductName } from "./productName";

describe("fullProductName", () => {
  it("does not repeat a brand already present in the product name", () => {
    expect(fullProductName("Johnnie Walker", "Johnnie Walker Gold Reserve"))
      .toBe("Johnnie Walker Gold Reserve");
    expect(fullProductName("Sula", "Sula Syrah"))
      .toBe("Sula Syrah");
  });

  it("adds the brand when the product name is distinct", () => {
    expect(fullProductName("Johnnie Walker", "Black Label"))
      .toBe("Johnnie Walker Black Label");
    expect(fullProductName("Old Monk", "The Legend"))
      .toBe("Old Monk The Legend");
  });
});
