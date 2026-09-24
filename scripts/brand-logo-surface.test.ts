import { describe, expect, it } from "vitest";
import { brandLogoNeedsDarkSurface, getBrandLogoSources } from "../src/lib/brandAssets.js";

describe("white brand marks", () => {
  it("gives only the inspected light assets a contrasting surface", () => {
    expect(brandLogoNeedsDarkSurface("https://www.agavalestequila.com/image/6795185.1610451419000/Agavales_white.png")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://armanddebrignac.com/wp-content/uploads/2026/02/Secondary-Logo.svg")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://argentowine.com/wp-content/themes/argento-2012/images/logo.png")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://www.kilchomandistillery.com/wp-content/uploads/2018/04/logo.svg")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://ricasoli.com/wp-content/uploads/2018/03/IST_RICASOLI_NEW__bianco.png")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://www.beronia.com/sites/default/files/styles/logo_header/public/2021-07/logotipo-beronia-blanco.png?itok=9GpuOZfr")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://fourpillarsgin.com/cdn/shop/files/logo-full.svg")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://loveblockwine.com/wp-content/uploads/logo.svg")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://nemiroff.vodka/wp-content/uploads/2024/03/logo.svg")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://olddurbar.com/wp-content/themes/starter/imagio_s/img/logo/old_durbar_logo-1.svg")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://ouzo.plomari-media.gr/wp-content/uploads/2026/07/WHITE-TRANSlogo_final-30-11-20_OUT_ENG-21.png")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://querciabella.com/wp-content/themes/querciabella-theme/img/logo-full.svg")).toBe(true);
    expect(brandLogoNeedsDarkSurface("https://static.livcheers.com/static/content/images/brand/agavales.webp")).toBe(false);
    expect(brandLogoNeedsDarkSurface(null)).toBe(false);
  });

  it("does not invent a logo URL when none was verified", () => {
    expect(getBrandLogoSources({ slug: "passport", brandName: "Passport", logoUrl: null })).toEqual([]);
    expect(getBrandLogoSources({ slug: "glenfiddich", brandName: "Glenfiddich", logoUrl: null })).toEqual(["https://static.livcheers.com/static/content/images/brand/glenfiddich.webp"]);
  });
});
