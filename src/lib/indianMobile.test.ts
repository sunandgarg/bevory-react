import { describe, expect, it } from "vitest";
import { normalizeIndianMobile } from "./indianMobile";

describe("Indian mobile prefill", () => {
  it.each([
    ["9876543210", "9876543210"],
    ["09876543210", "9876543210"],
    ["+91 98765 43210", "9876543210"],
    ["919876543210", "9876543210"],
  ])("normalizes %s", (input, expected) => {
    expect(normalizeIndianMobile(input)).toBe(expected);
  });

  it("leaves invalid long values for server validation", () => {
    expect(normalizeIndianMobile("987654321099")).toBe("987654321099");
  });
});
