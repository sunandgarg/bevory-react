import { describe, expect, it } from "vitest";
import {
  applyImageTargets,
  collectImageTargets,
  imageObjectKey,
  imageObjectKeyCandidates,
  isExternalHttpUrl,
  youtubeThumbnailUrl,
} from "./image-migration-lib.js";

describe("image migration helpers", () => {
  it("finds image fields and embedded images while preserving provenance fields", () => {
    const row = {
      image_url: "https://third.example/product.jpg",
      image_source_url: "https://third.example/original.jpg",
      content: '<p><img src="https://third.example/article.png"></p>',
      nested: [{ logoUrl: "https://third.example/logo.png" }],
    };
    const targets = collectImageTargets(row, "https://media.bevory.in");
    expect(targets.map((target) => target.sourceUrl)).toEqual([
      "https://third.example/product.jpg",
      "https://third.example/article.png",
      "https://third.example/logo.png",
    ]);
  });

  it("replaces fields and HTML without mutating the original row", () => {
    const row = {
      image_url: "https://third.example/product.jpg",
      content: '<img src="https://third.example/article.png">',
    };
    const targets = collectImageTargets(row);
    const next = applyImageTargets(row, targets, new Map([
      ["https://third.example/product.jpg", "https://media.bevory.in/product.jpg"],
      ["https://third.example/article.png", "https://media.bevory.in/article.png"],
    ]));
    expect(next.image_url).toBe("https://media.bevory.in/product.jpg");
    expect(next.content).toContain("https://media.bevory.in/article.png");
    expect(row.image_url).toBe("https://third.example/product.jpg");
  });

  it("creates stable format-aware object keys and YouTube thumbnails", () => {
    expect(imageObjectKey("Products", "A Product", "https://example.com/a.jpg", "jpg"))
      .toMatch(/^migrated-images\/products\/a-product\/[a-f0-9]{20}\.jpg$/);
    expect(imageObjectKey("Products", "A Product", "https://example.com/a.jpg", "png"))
      .toMatch(/^migrated-images\/products\/a-product\/[a-f0-9]{20}\.png$/);
    expect(imageObjectKeyCandidates("Products", "A Product", "https://example.com/a.jpg"))
      .toEqual([
        expect.stringMatching(/\.png$/),
        expect.stringMatching(/\.jpg$/),
      ]);
    expect(youtubeThumbnailUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
      .toBe("https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg");
  });

  it("skips the configured media host", () => {
    expect(isExternalHttpUrl("https://media.bevory.in/a.jpg", "https://media.bevory.in")).toBe(false);
    expect(isExternalHttpUrl("https://example.com/a.png", "https://media.bevory.in")).toBe(true);
  });
});
