import { describe, expect, it } from "vitest";
import { buildCategoryCatalog, buildCityCatalog, buildHomeCatalog, paginateCatalog } from "./catalog.js";

describe("buildCityCatalog", () => {
  it("returns only active products with approved city prices", () => {
    const result = buildCityCatalog(
      [
        { product_id: "p1", price: 900, volume: "750ml", volume_ml: 750, price_available: true },
        { product_id: "p1", price: 460, volume: "375ml", volume_ml: 375, price_available: true },
        { product_id: "p2", price: 10, volume: "750ml", volume_ml: 750, price_available: true, requires_review: true },
      ],
      [
        { id: "p1", brand: "Antiquity", name: "Blue", category_id: "c1", sub_category_id: "s1", is_active: true, source_urls: ["internal"] },
        { id: "p2", brand: "Review", name: "Pending", category_id: "c1", is_active: true },
      ],
      [{ id: "c1", name: "Whisky", slug: "whisky", emoji: null, is_active: true, order_index: 1 }],
      [{ id: "s1", name: "Blended", slug: "blended", emoji: null, is_active: true }],
    );

    expect(result.totalProducts).toBe(1);
    expect(result.products[0]).toMatchObject({
      id: "p1",
      price: 900,
      volume: "750ml",
      category: { slug: "whisky" },
      sub_category: { slug: "blended" },
    });
    expect(result.products[0].available_variants).toHaveLength(2);
    expect(result.products[0]).not.toHaveProperty("source_urls");
  });

  it("uses lean card records for home and category views", () => {
    const catalog = buildCityCatalog(
      [{ product_id: "p1", price: 900, volume: "750ml", volume_ml: 750, price_available: true }],
      [{ id: "p1", brand: "Antiquity", name: "Blue", category_id: "c1", is_active: true, taste_profile: ["oak"], abv: 42 }],
      [{ id: "c1", name: "Whisky", slug: "whisky", is_active: true }],
      [],
    );

    const home = buildHomeCatalog(catalog);
    const category = buildCategoryCatalog(catalog, "whisky");
    expect(home.products[0]).not.toHaveProperty("available_variants");
    expect(home.products[0]).not.toHaveProperty("taste_profile");
    expect(category.products[0]).not.toHaveProperty("abv");
    expect(category.categories).toHaveLength(1);
  });

  it("returns deterministic 15-product pages with a continuation signal", () => {
    const products = Array.from({ length: 45 }, (_, index) => ({ id: `p${index + 1}` }));
    const firstPage = paginateCatalog({ products, totalProducts: products.length }, 0, 15);
    const lastPage = paginateCatalog({ products, totalProducts: products.length }, 30, 15);

    expect(firstPage.products).toHaveLength(15);
    expect(firstPage.products[14]).toEqual({ id: "p15" });
    expect(firstPage.hasMore).toBe(true);
    expect(lastPage.products).toHaveLength(15);
    expect(lastPage.hasMore).toBe(false);
  });
});
