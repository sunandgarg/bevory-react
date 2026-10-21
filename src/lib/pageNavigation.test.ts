import { describe, expect, it } from "vitest";
import { pageKey, pathForCity, productHeadingFromSlug, recordPageVisit } from "./pageNavigation";

describe("city-preserving page navigation", () => {
  const product = "johnnie-walker-and-sons-king-georg-v-50f12db";

  it("keeps a single product visit when the city or bottle size changes", () => {
    let visits = recordPageVisit([], "/", "POP");
    visits = recordPageVisit(visits, "/gurgaon/category/world-whisky?sort=price", "PUSH");
    visits = recordPageVisit(visits, `/gurgaon/product/${product}`, "PUSH");
    visits = recordPageVisit(visits, `/bangalore/product/${product}`, "REPLACE");
    visits = recordPageVisit(visits, `/bangalore/product/${product}/750ml`, "PUSH");
    expect(visits).toHaveLength(3);
    visits.pop();
    const destination = pathForCity(visits.at(-1)!, "bangalore");
    expect(destination).toBe("/bangalore/category/world-whisky?sort=price");
    visits = recordPageVisit(visits, destination, "REPLACE");
    visits.pop();
    expect(pathForCity(visits.at(-1)!, "bangalore")).toBe("/");
  });

  it("preserves search state and keeps unrelated pages when selecting a city", () => {
    expect(pathForCity("/search?q=black&sort=price", "bangalore")).toBe("/search?q=black&sort=price");
    expect(pathForCity("/guide", "bangalore")).toBe("/guide");
    expect(pathForCity(`/gurgaon/product/${product}/750ml?source=search`, "bangalore"))
      .toBe(`/bangalore/product/${product}/750ml?source=search`);
    expect(pathForCity("/category/beers", "bangalore")).toBe("/bangalore/category/beers");
    expect(pathForCity("/gurgaon", "bangalore")).toBe("/");
  });

  it("recognises the root and city homepages as the same page", () => {
    expect(pageKey("/bangalore")).toBe(pageKey("/"));
    expect(recordPageVisit(["/", "/search", `/bangalore/product/${product}`], "/search?q=gin", "POP"))
      .toEqual(["/", "/search?q=gin"]);
  });

  it("hides imported URL IDs in loading headings without stripping age or product numbers", () => {
    expect(productHeadingFromSlug(product)).toBe("Johnnie Walker And Sons King Georg V");
    expect(productHeadingFromSlug("glenfiddich-18")).toBe("Glenfiddich 18");
    expect(productHeadingFromSlug("1664-blanc")).toBe("1664 Blanc");
  });
});
