import { describe, expect, it } from "vitest";
import { hasContentAds } from "./contentAdRoute";

describe("public content ads", () => {
  it("keeps the root and city homepages ad-free", () => {
    expect(hasContentAds("/")).toBe(false);
    expect(hasContentAds("/mumbai")).toBe(false);
    expect(hasContentAds("/delhi")).toBe(false);
  });

  it("does not place ads on private or utility routes", () => {
    for (const path of ["/auth", "/profile", "/settings", "/privacy-policy", "/contact", "/search", "/admin"]) {
      expect(hasContentAds(path)).toBe(false);
    }
  });

  it("allows ads on editorial and catalogue content", () => {
    for (const path of ["/guide", "/guide/whisky-price-in-gurgaon-2026", "/cocktails", "/mumbai/category/vodka", "/mumbai/product/absolut-citron", "/mumbai/brand/absolut"]) {
      expect(hasContentAds(path)).toBe(true);
    }
  });
});
