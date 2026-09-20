import { describe, expect, it } from "vitest";
import { parseSearchIntent, productMatchesIntent } from "./searchDemand";

describe("search demand normalization", () => {
  it("removes location and price language while preserving product intent", () => {
    expect(parseSearchIntent("All seasons whisky 180ml price in Nagpur")).toMatchObject({
      text: "all seasons whisky",
      volumeMl: 180,
      lookupTerm: "seasons",
    });
  });

  it("normalizes high-impression misspellings", () => {
    expect(parseSearchIntent("megdol no 1 price").text).toBe("mcdowell no 1");
    expect(parseSearchIntent("casberg bear").text).toBe("carlsberg beer");
    expect(parseSearchIntent("johnny walker blonde").text).toBe("johnnie walker blonde");
  });

  it("matches globally known sizes even when a city has no price", () => {
    const intent = parseSearchIntent("McDowells No 1 whisky 180ml price");
    expect(productMatchesIntent({
      brand: "McDowells",
      name: "Mc Dowells No 1 Whisky",
      available_volumes_ml: [750, 375, 180],
    }, intent)).toBe(true);
  });
});
