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

  it("uses Beer as the display name for the canonical beers slug", () => {
    const catalog = buildCityCatalog(
      [{ product_id: "beer-1", price: 180, volume_ml: 650, price_available: true }],
      [{ id: "beer-1", name: "Lager", category_id: "beer-category", is_active: true }],
      [{ id: "beer-category", name: "Beers", slug: "beers", is_active: true }],
      [],
    );

    expect(catalog.categories[0]).toMatchObject({ name: "Beer", slug: "beers" });
    expect(catalog.products[0].category).toMatchObject({ name: "Beer", slug: "beers" });
  });

  it("groups every wine category into the virtual wine catalog", () => {
    const catalog = buildCityCatalog(
      [
        { product_id: "red", price: 900, volume_ml: 750, price_available: true },
        { product_id: "white", price: 1100, volume_ml: 750, price_available: true },
        { product_id: "sparkling", price: 1800, volume_ml: 750, price_available: true },
        { product_id: "champagne", price: 5000, volume_ml: 750, price_available: true },
        { product_id: "whisky", price: 1200, volume_ml: 750, price_available: true },
      ],
      [
        { id: "red", name: "Red", category_id: "red-category", is_active: true },
        { id: "white", name: "White", category_id: "white-category", is_active: true },
        { id: "sparkling", name: "Sparkling", category_id: "sparkling-category", is_active: true },
        { id: "champagne", name: "Champagne", category_id: "champagne-category", is_active: true },
        { id: "whisky", name: "Whisky", category_id: "whisky-category", is_active: true },
      ],
      [
        { id: "red-category", name: "Red Wine", slug: "red-wine", is_active: true },
        { id: "white-category", name: "White Wine", slug: "white-wine", is_active: true },
        { id: "sparkling-category", name: "Sparkling Wine", slug: "sparkling-wine", is_active: true },
        { id: "champagne-category", name: "Champagne", slug: "champagne", is_active: true },
        { id: "whisky-category", name: "Whisky", slug: "whisky", is_active: true },
      ],
      [],
    );

    const wineCatalog = buildCategoryCatalog(catalog, "wine");
    expect(wineCatalog.products.map((product) => product.id)).toEqual(["champagne", "red", "sparkling", "white"]);
    expect(wineCatalog.categories.map((category) => category.slug)).toEqual([
      "red-wine",
      "white-wine",
      "sparkling-wine",
      "champagne",
    ]);
    expect(wineCatalog.totalProducts).toBe(4);
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
