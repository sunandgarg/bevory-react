import { describe, expect, it } from "vitest";
import { normalizeBlogContent } from "./articleEditorial";

describe("normalizeBlogContent", () => {
  it("uses metric measures and Indian ingredient annotations", () => {
    const result = normalizeBlogContent("Mix 1 oz spirit with mint and coriander.");
    expect(result).toContain("30 ml spirit");
    expect(result).toContain("mint (Pudina)");
    expect(result).toContain("coriander (Dhania)");
  });

  it("removes transient prices from markdown tables", () => {
    expect(normalizeBlogContent("| Bottle | Rs. 1, 500 - 2, 000 |")).toContain("Check current city listing");
  });

  it("adds the safety note once", () => {
    const once = normalizeBlogContent("Useful article copy.");
    expect(normalizeBlogContent(once).match(/## Editorial and safety note/g)).toHaveLength(1);
  });
});

