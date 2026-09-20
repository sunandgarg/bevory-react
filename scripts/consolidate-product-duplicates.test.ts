import { describe, expect, it } from "vitest";
import { highConfidenceDuplicateGroups, semanticProductKey } from "./consolidate-product-duplicates";

const product = (id: string, brand: string, name: string, image = "https://bevory.in/media/product.jpg") => ({
  id,
  table: "products",
  data: {
    id,
    slug: `${id}-slug`,
    brand,
    name,
    category_id: "beer",
    sub_category_id: "lager",
    image_url: image,
    available_volumes_ml: [650],
    is_active: true,
  },
});

const price = (id: string, productId: string, amount: number) => ({
  id,
  table: "product_prices",
  data: { id, product_id: productId, city_id: "delhi", volume_ml: 650, price: amount },
});

describe("product duplicate consolidation", () => {
  it("treats repeated brand text as the same semantic product", () => {
    expect(semanticProductKey("Fosters", "Gold Select Strong Beer"))
      .toBe(semanticProductKey("Fosters", "Fosters Gold Select Strong Beer"));
  });

  it("accepts matching evidence but sends price conflicts to review", () => {
    const products = [
      product("one", "Fosters", "Gold Select Strong Beer"),
      product("two", "Fosters", "Fosters Gold Select Strong Beer"),
    ];
    const safe = highConfidenceDuplicateGroups(products, [price("p1", "one", 120), price("p2", "two", 120)]);
    expect(safe.safe).toHaveLength(1);
    expect(safe.review).toHaveLength(0);

    const conflict = highConfidenceDuplicateGroups(products, [price("p1", "one", 120), price("p2", "two", 140)]);
    expect(conflict.safe).toHaveLength(0);
    expect(conflict.review[0].reason).toBe("same-city price conflict");
  });
});
