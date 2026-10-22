import { describe, expect, it } from "vitest";
import { foodPairingPosition } from "./foodPairingVisual";

describe("food pairing visuals", () => {
  it("matches common pairings to their illustrative food style", () => {
    expect(foodPairingPosition("malai paneer tikka")).toBe("0% 0%");
    expect(foodPairingPosition("tandoori prawns")).toBe("33.333% 0%");
    expect(foodPairingPosition("coastal rava-fried fish")).toBe("100% 0%");
    expect(foodPairingPosition("dark chocolate with orange")).toBe("100% 50%");
    expect(foodPairingPosition("badam halwa")).toBe("100% 50%");
    expect(foodPairingPosition("lemon rice")).toBe("33.333% 100%");
  });

  it("still provides an illustration when a pairing is unfamiliar", () => {
    expect(foodPairingPosition("something new")).toBe("100% 100%");
  });
});
