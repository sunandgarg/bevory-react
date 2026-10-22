import { describe, expect, it } from "vitest";
import { bevoryRating } from "./bevoryRating";

describe("BevOry editorial rating", () => {
  const note = "Editor evaluated product quality and value.";

  it("shows only an evaluated score", () => {
    expect(bevoryRating({ bevory_rating: 4.85, bevory_rating_note: note })).toBe(4.85);
    expect(bevoryRating({ bevory_rating: 4.85 })).toBeNull();
    expect(bevoryRating({ bevory_rating: 5.5, bevory_rating_note: note })).toBeNull();
    expect(bevoryRating({ bevory_rating: 4.555, bevory_rating_note: note })).toBeNull();
  });
});
