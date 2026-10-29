import { afterEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import GuideAd from "./GuideAd";

afterEach(() => vi.unstubAllGlobals());

describe("guide ad consent", () => {
  it("does not render an ad without age and ad consent", () => {
    vi.stubGlobal("localStorage", { getItem: () => null });
    expect(renderToStaticMarkup(<GuideAd />)).toBe("");
  });

  it("renders the requested BevOry units after explicit consent", () => {
    vi.stubGlobal("window", {});
    vi.stubGlobal("localStorage", { getItem: (key: string) => key === "bevory-ads-consent-v2" ? "granted" : "verified" });
    for (const [placement, slot] of [["top", "3094605531"], ["middle", "5618816199"], ["bottom", "7907948513"]] as const) {
      const html = renderToStaticMarkup(<GuideAd placement={placement} />);
      expect(html).toContain('data-ad-client="ca-pub-4858806955717066"');
      expect(html).toContain(`data-ad-slot="${slot}"`);
    }
  });
});
