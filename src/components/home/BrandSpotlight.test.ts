import { describe, expect, it } from "vitest";
import { youtubeEmbedUrl } from "@/lib/youtube";

describe("youtubeEmbedUrl", () => {
  it("normalizes videos and Shorts to privacy-enhanced embeds", () => {
    expect(youtubeEmbedUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
      .toBe("https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0");
    expect(youtubeEmbedUrl("https://youtube.com/shorts/dQw4w9WgXcQ"))
      .toBe("https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0");
    expect(youtubeEmbedUrl("https://youtu.be/dQw4w9WgXcQ"))
      .toBe("https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0");
  });

  it("rejects non-YouTube and malformed links", () => {
    expect(youtubeEmbedUrl("https://example.com/watch?v=dQw4w9WgXcQ")).toBeNull();
    expect(youtubeEmbedUrl("not a URL")).toBeNull();
  });
});
