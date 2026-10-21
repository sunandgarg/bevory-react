import { describe, expect, it } from "vitest";
import { buildProductRoutes, mapProductUrls, publicProductPath, withoutImportSuffix } from "./productRoutes";

describe("stable product identities with clean public URLs", () => {
  const slug = "johnnie-walker-red-label-721d6b0";
  it("resolves the old and clean name to exactly the same storage slug", () => {
    const routes = buildProductRoutes([{ slug }]);
    expect(routes.storedByUrl.get(slug)).toBe(slug);
    expect(routes.storedByUrl.get("johnnie-walker-red-label")).toBe(slug);
    expect(publicProductPath(`/pune/product/${slug}/750ml?ref=search#price`, routes))
      .toBe("/pune/product/johnnie-walker-red-label/750ml?ref=search#price");
  });
  it("never guesses between two active products with the same name", () => {
    const routes = buildProductRoutes([{ slug: "example-111aaaa" }, { slug: "example-222bbbb" }]);
    expect(routes.storedByUrl.has("example")).toBe(false);
    expect(routes.publicByStored.get("example-111aaaa")).toBe("example-111aaaa");
  });
  it("preserves existing clean slugs and age/size numbers", () => {
    const routes = buildProductRoutes([{ slug: "example" }, { slug: "example-111aaaa" }]);
    expect(routes.storedByUrl.get("example")).toBe("example");
    expect(routes.publicByStored.get("example-111aaaa")).toBe("example-111aaaa");
    expect(withoutImportSuffix("glenfiddich-18")).toBe("glenfiddich-18");
    expect(withoutImportSuffix("old-monk-180ml-90c0ee8")).toBe("old-monk-180ml");
  });
  it("retains consolidated aliases without redirect loops", () => {
    const routes = buildProductRoutes([
      { slug },
      { slug: "old-red", is_active: false, canonical_slug: slug },
      { slug: "older-red", is_active: false, canonical_slug: "old-red" },
      { slug: "cycle-a", is_active: false, canonical_slug: "cycle-b" },
      { slug: "cycle-b", is_active: false, canonical_slug: "cycle-a" },
    ]);
    expect(publicProductPath("/pune/product/older-red/750ml", routes)).toBe("/pune/product/johnnie-walker-red-label/750ml");
    expect(routes.storedByUrl.has("cycle-a")).toBe(false);
  });
  it("updates canonical, breadcrumbs and schema URLs without altering SKU identity", () => {
    const routes = buildProductRoutes([{ slug }]);
    const result = mapProductUrls({ canonicalPath: `/pune/product/${slug}`, schema: { url: `https://bevory.in/pune/product/${slug}/750ml`, sku: slug } }, routes);
    expect(result.canonicalPath).toBe("/pune/product/johnnie-walker-red-label");
    expect(result.schema.url).toBe("https://bevory.in/pune/product/johnnie-walker-red-label/750ml");
    expect(result.schema.sku).toBe(slug);
  });
});
