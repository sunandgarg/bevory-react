import { describe, expect, it } from "vitest";
import {
  DEFAULT_PUBLIC_MEDIA_BASE,
  parsePublicMediaBase,
  validSitemapImageUrl,
} from "./sitemap-images.js";

describe("sitemap image URLs", () => {
  it("accepts only the exact HTTPS media base configuration", () => {
    expect(parsePublicMediaBase("https://bevory.in/media/")).toBe(DEFAULT_PUBLIC_MEDIA_BASE);
    expect(parsePublicMediaBase("https://media.bevory.in/media")).toBe("https://media.bevory.in/media");
    expect(parsePublicMediaBase("http://bevory.in/media")).toBeNull();
    expect(parsePublicMediaBase("https://bevory.in/uploads")).toBeNull();
    expect(parsePublicMediaBase("https://bevory.in/media?token=value")).toBeNull();
  });

  it("normalizes first-party relative and absolute image URLs", () => {
    expect(validSitemapImageUrl("/media/migrated-images/a/photo.jpg"))
      .toBe("https://bevory.in/media/migrated-images/a/photo.jpg");
    expect(validSitemapImageUrl("https://bevory.in/media/images/logo.png"))
      .toBe("https://bevory.in/media/images/logo.png");
  });

  it.each([
    "https://images.example/photo.jpg",
    "http://bevory.in/media/photo.jpg",
    "//bevory.in/media/photo.jpg",
    "https://bevory.in/uploads/photo.jpg",
    "https://bevory.in/media-library/photo.jpg",
    "https://bevory.in/media/photo.jpg?variant=external",
    "data:image/png;base64,abc",
  ])("omits invalid or external image %s", (value) => {
    expect(validSitemapImageUrl(value)).toBeNull();
  });

  it("supports an explicitly configured public media base without accepting other hosts", () => {
    const mediaBase = "https://media.bevory.in/media";
    expect(validSitemapImageUrl("https://media.bevory.in/media/products/a.jpg", mediaBase))
      .toBe("https://media.bevory.in/media/products/a.jpg");
    expect(validSitemapImageUrl("https://bevory.in/media/products/a.jpg", mediaBase)).toBeNull();
    expect(validSitemapImageUrl("https://attacker.example/media/products/a.jpg", mediaBase)).toBeNull();
  });
});
