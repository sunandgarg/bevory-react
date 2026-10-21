import { afterEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import GuideAd from "./GuideAd";

afterEach(() => vi.unstubAllGlobals());

describe("guide ad consent", () => {
  it("does not render an ad without age and ad consent", () => {
    vi.stubGlobal("localStorage", { getItem: () => null });
    expect(renderToStaticMarkup(<GuideAd />)).toBe("");
  });

  it("renders only the BevOry unit after explicit consent", () => {
    vi.stubGlobal("localStorage", { getItem: (key: string) => key === "bevory-ads-consent-v1" ? "granted" : "verified" });
    const html = renderToStaticMarkup(<GuideAd />);
    expect(html).toContain('data-ad-client="ca-pub-4858806955717066"');
    expect(html).toContain('data-ad-slot="7233877704"');
  });
});
