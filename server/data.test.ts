import { describe, expect, it } from "vitest";
import {
  applySelection,
  databaseWhereForFilters,
  matchesFilter,
  parseSelection,
  queryAccessAllowed,
  scopeWriteInput,
  validateFirstPartyImages,
  type QueryPayload,
} from "./data.js";

describe("first-party rendered image validation", () => {
  const appUrl = "https://bevory.in/admin";

  it("allows relative images and exact APP_URL-origin images recursively", () => {
    expect(() => validateFirstPartyImages({
      image_url: "/media/images/product.jpg",
      coverImageUrl: "https://bevory.in/media/covers/guide.png",
      gallery_images: ["images/one.jpg", "../media/two.png"],
      story: [{ type: "image", url: "/media/stories/three.jpg", alt: "Serving suggestion" }],
      branding: {
        header: {
          logo: { type: "image", lightImageUrl: "/media/branding/light.png", darkImageUrl: "/media/branding/dark.png" },
        },
      },
      content: [
        '<p><img loading="lazy" src="/media/articles/four.jpg" alt="Article"></p>',
        "<div style=\"background-image: url('/media/backgrounds/five.png')\"></div>",
      ],
    }, appUrl)).not.toThrow();
  });

  it.each([
    [{ image_url: "https://images.example/product.jpg" }, "image_url"],
    [{ logo_url: "//images.example/logo.png" }, "logo_url"],
    [{ nested: { avatar: "http://bevory.in/media/avatar.jpg" } }, "avatar"],
    [{ item: { type: "image", url: "https://other.example/story.jpg" } }, "url"],
    [{ content: '<img src="https://other.example/article.jpg">' }, "<img src>"],
    [{ content: '<img srcset="/media/one.jpg 1x, https://other.example/two.jpg 2x">' }, "<img srcset>"],
    [{ content: "<div style=\"background:url(https://other.example/hero.jpg)\"></div>" }, "css-url"],
    [{ content: "<img src=\"https&colon;&sol;&sol;other.example/entity.jpg\">" }, "<img src>"],
    [{ content: "<img src=\"https&colon//other.example/named-no-semicolon.jpg\">" }, "<img src>"],
    [{ content: "<img src=\"https&#58//other.example/decimal.jpg\">" }, "<img src>"],
    [{ content: "<img src=\"https&#x3a//other.example/hex.jpg\">" }, "<img src>"],
    [{ content: "<div style=\"background:url(https&#58//other.example/css.jpg)\"></div>" }, "css-url"],
    [{ content: "<div style=\"background:u/**/rl(https://other.example/comment.jpg)\"></div>" }, "css-url"],
    [{ content: "<div style=\"background:u\\72l(https\\3a \\2f \\2f other.example/escaped.jpg)\"></div>" }, "css-url"],
    [{ content: "<div style=\"background-image:image-set('https://other.example/two-x.jpg' 2x)\"></div>" }, "CSS image-set"],
    [{ content: "<div style=\"background-image:-webkit-image-set('/media/one-x.jpg' 1x)\"></div>" }, "CSS image-set"],
    [{ content: "<img src=\"https://other.example/unclosed.jpg>" }, "Image markup"],
    [{ favicon_url: "data:image/png;base64,abcd" }, "favicon_url"],
    [{ photo_url: "https://other.example/photo.jpg" }, "photo_url"],
    [{ image1_url: "https://other.example/alternate.jpg" }, "image1_url"],
  ] as const)("rejects non-first-party rendered image references in %j", (value, location) => {
    expect(() => validateFirstPartyImages(value, appUrl)).toThrow(location);
  });

  it("does not reject ordinary external links, videos, or provenance fields", () => {
    expect(() => validateFirstPartyImages({
      website_url: "https://partner.example/about",
      href: "https://partner.example/story",
      link_url: "https://partner.example/story",
      video_url: "https://www.youtube.com/watch?v=abc123",
      youtube_embed_url: "https://www.youtube-nocookie.com/embed/abc123",
      story: { type: "video", url: "https://www.youtube.com/watch?v=abc123" },
      source_image_url: "https://catalog.example/original.jpg",
      image_provenance_url: "https://rights.example/license/123",
      source: { html: '<img src="https://archive.example/original.jpg">' },
      imageWithSource: {
        type: "image",
        url: "/media/licensed/local-copy.jpg",
        source_url: "https://rights.example/original.jpg",
      },
      artwork: {
        image: {
          url: "/media/licensed/second-copy.jpg",
          source_url: "https://catalog.example/original.jpg",
          provenance_url: "https://rights.example/license/456",
        },
      },
      content: '<a href="https://partner.example/story">Read the source</a>',
    }, appUrl)).not.toThrow();
  });

  it("compares origins exactly and rejects protocol-relative and credentialed lookalikes", () => {
    expect(() => validateFirstPartyImages({ image: "https://bevory.in.evil.example/media/a.jpg" }, appUrl))
      .toThrow(/must be local/);
    expect(() => validateFirstPartyImages({ image: "//bevory.in/media/a.jpg" }, appUrl))
      .toThrow(/must be local/);
    expect(() => validateFirstPartyImages({ image: "https://user@bevory.in/media/a.jpg" }, appUrl))
      .toThrow(/must be local/);
  });
});

describe("query field selection", () => {
  it("projects only requested scalar fields", () => {
    expect(applySelection([{
      id: "category-1",
      name: "Gin",
      description: "Botanical spirits",
      products: [{ id: "product-1", name: "Sample" }],
    }], "id, name")).toEqual([{ id: "category-1", name: "Gin" }]);
  });

  it("projects aliased nested relations without leaking other fields", () => {
    expect(applySelection([{
      id: "city-1",
      name: "Kolkata",
      state: { id: "state-1", name: "West Bengal", code: "WB" },
    }], "id, name, state:states(name)")).toEqual([{
      id: "city-1",
      name: "Kolkata",
      state: { name: "West Bengal" },
    }]);
    expect(parseSelection("*, states!inner(name)")[1]).toMatchObject({
      outputKey: "states",
      sourceKey: "states",
    });
  });
});

describe("query compatibility filters", () => {
  const row = {
    id: "product-1",
    name: "Johnnie Walker Blonde",
    price: 2499,
    tags: ["whisky", "scotch"],
    published: true,
  };

  it("matches equality and numeric comparisons", () => {
    expect(matchesFilter(row, { column: "id", operator: "eq", value: "product-1" })).toBe(true);
    expect(matchesFilter(row, { column: "price", operator: "gte", value: 2000 })).toBe(true);
  });

  it("matches case-insensitive wildcard searches", () => {
    expect(matchesFilter(row, { column: "name", operator: "ilike", value: "%walker%" })).toBe(true);
  });

  it("matches contained array values", () => {
    expect(matchesFilter(row, { column: "tags", operator: "contains", value: ["scotch"] })).toBe(true);
  });

  it("matches grouped OR conditions", () => {
    expect(matchesFilter(row, {
      operator: "or",
      filters: [
        { column: "id", operator: "eq", value: "other" },
        { column: "published", operator: "eq", value: true },
      ],
    })).toBe(true);
  });

  it("pushes safe equality filters into MySQL while retaining compatibility filters", () => {
    expect(databaseWhereForFilters("product_prices", [
      { column: "product_id", operator: "eq", value: "product-1" },
      { column: "city_id", operator: "eq", value: "city-1" },
      { column: "requires_review", operator: "neq", value: true },
      { column: "unsafe.path", operator: "eq", value: "ignored" },
    ])).toEqual({
      tableName: "product_prices",
      AND: [
        { data: { path: "$.product_id", equals: "product-1" } },
        { data: { path: "$.city_id", equals: "city-1" } },
      ],
    });

    expect(databaseWhereForFilters("products", [
      { column: "id", operator: "eq", value: "product-1" },
    ])).toEqual({
      tableName: "products",
      AND: [{ recordId: "product-1" }],
    });
  });
});

describe("query authorization", () => {
  const payload = (overrides: Partial<QueryPayload>): QueryPayload => ({
    table: "products",
    operation: "select",
    ...overrides,
  });

  it("forces non-admin user writes into the authenticated user's scope", () => {
    const favorite = scopeWriteInput(
      payload({ table: "user_favorites", operation: "insert" }),
      { id: "victim-record", product_id: "product-1", user_id: "victim-user" },
      "actor-user",
      false,
    );
    expect(favorite).toMatchObject({ product_id: "product-1", user_id: "actor-user" });
    expect(favorite).not.toHaveProperty("id");

    const profile = scopeWriteInput(
      payload({ table: "profiles", operation: "upsert" }),
      { id: "victim-user", full_name: "Changed" },
      "actor-user",
      false,
    );
    expect(profile).toMatchObject({ id: "actor-user", full_name: "Changed" });
  });

  it("does not let anonymous or normal users mutate privileged records", () => {
    expect(queryAccessAllowed(payload({ table: "products", operation: "update" }), false, false)).toBe(false);
    expect(queryAccessAllowed(payload({ table: "user_roles", operation: "insert" }), true, false)).toBe(false);
    expect(queryAccessAllowed(payload({ table: "products", operation: "delete" }), true, false)).toBe(false);
    expect(queryAccessAllowed(payload({ table: "products", operation: "delete" }), true, true)).toBe(true);
    expect(queryAccessAllowed(payload({ operation: "drop" as QueryPayload["operation"] }), true, true)).toBe(false);
  });

  it("allows safe public review inserts but rejects public upserts and deletes", () => {
    const publicInsert = payload({
      table: "product_reviews",
      operation: "insert",
      values: { product_id: "product-1", rating: 5, reviewer_name: "Guest" },
    });
    expect(queryAccessAllowed(publicInsert, false, false)).toBe(true);
    expect(queryAccessAllowed(payload({
      ...publicInsert,
      values: [
        { product_id: "product-1", rating: 5, reviewer_name: "Guest" },
        { product_id: "product-1", rating: 4, reviewer_name: "Other" },
      ],
    }), false, false)).toBe(false);
    expect(queryAccessAllowed(payload({ table: "product_reviews", operation: "upsert" }), false, false)).toBe(false);
    expect(queryAccessAllowed(payload({ table: "product_reviews", operation: "delete" }), false, false)).toBe(false);

    const review = scopeWriteInput(
      payload({ table: "product_reviews", operation: "insert" }),
      {
        product_id: "product-1",
        rating: 5,
        reviewer_name: "Guest",
        content: "Excellent",
      },
      undefined,
      false,
    );
    expect(review).toMatchObject({ is_approved: false, is_featured: false, is_reported: false });
    const forcedSafe = scopeWriteInput(
      payload({ table: "product_reviews", operation: "insert" }),
      { product_id: "product-1", rating: 5, reviewer_name: "Guest", is_featured: true },
      undefined,
      false,
    );
    expect(forcedSafe).toMatchObject({ is_featured: false, is_reported: false });
    expect(() => scopeWriteInput(
      payload({ table: "product_reviews", operation: "insert" }),
      { product_id: "product-1", rating: 5, reviewer_name: "Guest", role: "admin" },
      undefined,
      false,
    )).toThrow("Unsupported public review field");
  });

  it("only allows a tightly scoped public review report update", () => {
    const report = payload({
      table: "product_reviews",
      operation: "update",
      values: { is_reported: true, report_reason: "Spam" },
      filters: [{ column: "id", operator: "eq", value: "review-1" }],
    });
    expect(queryAccessAllowed(report, false, false)).toBe(true);
    expect(queryAccessAllowed(payload({
      ...report,
      values: { is_reported: false },
    }), false, false)).toBe(false);
    expect(queryAccessAllowed(payload({
      ...report,
      values: { is_reported: true, is_approved: false },
    }), false, false)).toBe(false);
    expect(queryAccessAllowed(payload({
      ...report,
      filters: [],
    }), false, false)).toBe(false);
  });

  it("keeps draft and recommendation tables admin-only", () => {
    expect(queryAccessAllowed(payload({ table: "content_drafts" }), false, false)).toBe(false);
    expect(queryAccessAllowed(payload({ table: "party_recommendations" }), true, false)).toBe(false);
    expect(queryAccessAllowed(payload({ table: "content_drafts" }), true, true)).toBe(true);
  });

  it("rejects unknown filter operators instead of matching every record", () => {
    expect(matchesFilter(
      { id: "product-1" },
      { column: "id", operator: "unknown", value: "product-1" },
    )).toBe(false);
  });
});
