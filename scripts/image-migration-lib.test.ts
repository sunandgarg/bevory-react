import { describe, expect, it } from "vitest";
import {
  applyImageTargets,
  collectImageTargets,
  imageObjectKey,
  imageObjectKeyCandidates,
  isExternalHttpUrl,
  publicObjectUrl,
  validatePublicBaseUrl,
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
    const targets = collectImageTargets(row, "https://bevory.in/media");
    expect(targets.map((target) => target.sourceUrl)).toEqual([
      "https://third.example/product.jpg",
      "https://third.example/article.png",
      "https://third.example/logo.png",
    ]);
  });

  it("finds typed image story URLs without treating video stories as images", () => {
    const row = {
      stories: [
        { type: "image", url: "https://third.example/story.jpg", duration: 5 },
        { type: "video", url: "https://third.example/story.mp4", duration: 8 },
      ],
    };
    const targets = collectImageTargets(row, "https://bevory.in/media");
    expect(targets).toEqual([{
      kind: "field",
      path: ["stories", 0, "url"],
      sourceUrl: "https://third.example/story.jpg",
      sourceValue: "https://third.example/story.jpg",
    }]);
  });

  it("finds alternate image containers, unquoted markup, srcset, CSS, and protocol-relative URLs", () => {
    const row = {
      heroPictures: [{ src: "//cdn.third.example/hero.png" }],
      image_source_url: "https://third.example/provenance.jpg",
      content: [
        "<img src=https://third.example/plain.jpg srcset='https://third.example/small.jpg 1x, //cdn.third.example/large.jpg 2x'>",
        "<div style=\"background-image: url(https://third.example/background.png)\"></div>",
      ].join(""),
    };
    const targets = collectImageTargets(row, "https://bevory.in/media");
    expect(targets.map((target) => target.sourceUrl)).toEqual([
      "https://cdn.third.example/hero.png",
      "https://third.example/plain.jpg",
      "https://third.example/small.jpg",
      "https://cdn.third.example/large.jpg",
      "https://third.example/background.png",
    ]);
    expect(targets.map((target) => target.sourceValue)).toEqual([
      "//cdn.third.example/hero.png",
      "https://third.example/plain.jpg",
      "https://third.example/small.jpg",
      "//cdn.third.example/large.jpg",
      "https://third.example/background.png",
    ]);
  });

  it("decodes HTML entities in external image fields while retaining the original replacement text", () => {
    const row = { poster_url: "https&#58;//third.example/poster.jpg" };
    const [target] = collectImageTargets(row, "https://bevory.in/media");
    expect(target).toEqual({
      kind: "field",
      path: ["poster_url"],
      sourceUrl: "https://third.example/poster.jpg",
      sourceValue: "https&#58;//third.example/poster.jpg",
    });
  });

  it.each([
    "photos", "pictures", "covers", "thumbnails", "avatars", "favicons",
    "banners", "backgrounds", "posters", "icons",
  ])("finds external URLs inside the %s image container", (field) => {
    const targets = collectImageTargets({ [field]: ["https://third.example/a.jpg"] }, "https://bevory.in/media");
    expect(targets.map((target) => target.sourceUrl)).toEqual(["https://third.example/a.jpg"]);
  });

  it("canonicalizes a protocol-relative first-party media URL instead of falsely certifying it", () => {
    const [target] = collectImageTargets({ image: "//bevory.in/media/a.jpg" }, "https://bevory.in/media");
    expect(target).toMatchObject({
      kind: "field",
      sourceUrl: "https://bevory.in/media/a.jpg",
      sourceValue: "//bevory.in/media/a.jpg",
    });
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

  it("replaces only the exact rendered image tokens", () => {
    const short = "https://third.example/a.jpg";
    const long = "https://third.example/a.jpg?size=2";
    const row = {
      content: `<a href="${short}">source</a><img src="${short}"><img srcset="${long} 2x">`,
    };
    const next = applyImageTargets(
      row,
      collectImageTargets(row, "https://bevory.in/media"),
      new Map([
        [short, "https://bevory.in/media/short.jpg"],
        [long, "https://bevory.in/media/long.jpg"],
      ]),
    );
    expect(next.content).toBe(
      `<a href="${short}">source</a>`
      + '<img src="https://bevory.in/media/short.jpg">'
      + '<img srcset="https://bevory.in/media/long.jpg 2x">',
    );
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
    const publicBaseUrl = "https://bevory.in/media";
    expect(isExternalHttpUrl("https://bevory.in/media/a.jpg", publicBaseUrl)).toBe(false);
    expect(isExternalHttpUrl("https://bevory.in/media-library/a.jpg", publicBaseUrl)).toBe(true);
    expect(isExternalHttpUrl("https://bevory.in/uploads/a.jpg", publicBaseUrl)).toBe(true);
    expect(isExternalHttpUrl("http://bevory.in/media/a.jpg", publicBaseUrl)).toBe(true);
    expect(isExternalHttpUrl("https://cdn.bevory.in/media/a.jpg", publicBaseUrl)).toBe(true);
    expect(isExternalHttpUrl("https://example.com/a.png", publicBaseUrl)).toBe(true);
    expect(isExternalHttpUrl("//example.com/a.png", publicBaseUrl)).toBe(true);
  });

  it("validates the exact public HTTPS media base", () => {
    expect(validatePublicBaseUrl("https://bevory.in/media/")).toBe("https://bevory.in/media");
    expect(publicObjectUrl("https://bevory.in/media", "migrated-images/a b/c.jpg"))
      .toBe("https://bevory.in/media/migrated-images/a%20b/c.jpg");
    expect(() => validatePublicBaseUrl("http://bevory.in/media")).toThrow(/HTTPS origin/);
    expect(() => validatePublicBaseUrl("https://bevory.in")).toThrow(/\/media path/);
    expect(() => validatePublicBaseUrl("not a url")).toThrow(/valid HTTPS URL/);
  });

  it("merges replacements into freshly-read data and preserves concurrent fields", () => {
    const fresh = {
      title: "Edited while uploads ran",
      image_url: "https://third.example/product.jpg",
      nested: { untouched: true },
    };
    const next = applyImageTargets(
      fresh,
      collectImageTargets(fresh, "https://bevory.in/media"),
      new Map([["https://third.example/product.jpg", "https://bevory.in/media/product.jpg"]]),
    );
    expect(next).toEqual({
      title: "Edited while uploads ran",
      image_url: "https://bevory.in/media/product.jpg",
      nested: { untouched: true },
    });
  });

  it("fails safely when a freshly-read image changed to an asset that was not uploaded", () => {
    const fresh = { image_url: "https://third.example/new-image.jpg" };
    expect(() => applyImageTargets(
      fresh,
      collectImageTargets(fresh, "https://bevory.in/media"),
      new Map([["https://third.example/old-image.jpg", "https://bevory.in/media/old-image.jpg"]]),
    )).toThrow(/Missing migrated URL for https:\/\/third\.example\/new-image\.jpg/);
  });
});
