import { afterEach, describe, expect, it, vi } from "vitest";
import { browserStorage } from "./browserStorage";

afterEach(() => vi.unstubAllGlobals());
describe("storage-disabled visits", () => {
  it("keeps reads and writes usable when storage access throws", () => {
    vi.stubGlobal("localStorage", new Proxy({}, { get() { throw new Error("Storage blocked"); } }));
    expect(browserStorage.get("consent")).toBeNull();
    expect(() => browserStorage.set("consent", "denied")).not.toThrow();
    expect(() => browserStorage.remove("consent")).not.toThrow();
  });
});
