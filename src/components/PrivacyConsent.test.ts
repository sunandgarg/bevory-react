import { afterEach, expect, it, vi } from "vitest";
import { parseConsentChoice, savePrivacyChoice } from "./PrivacyConsent";

afterEach(() => vi.unstubAllGlobals());

it("requires a fresh choice for stale or malformed consent values", () => {
  for (const value of [null, "true", "yes", "accepted", ""]) expect(parseConsentChoice(value)).toBeNull();
  expect(parseConsentChoice("granted")).toBe("granted");
  expect(parseConsentChoice("denied")).toBe("denied");
});

it.each([false, true])("sends the real choice after updating consent, even when storage is blocked: %s", storageBlocked => {
  const setItem = vi.fn(() => { if (storageBlocked) throw new Error("Storage disabled"); });
  const gtag = vi.fn();
  const dispatchEvent = vi.fn();
  vi.stubGlobal("localStorage", { setItem });
  vi.stubGlobal("window", {
    gtag, dispatchEvent,
    location: { origin: "https://bevory.in", pathname: "/guide", search: "?email=private@example.invalid", hash: "#token" },
  });
  savePrivacyChoice("granted", "denied");
  expect(gtag).toHaveBeenNthCalledWith(1, "consent", "update", {
    analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });
  expect(gtag).toHaveBeenNthCalledWith(2, "event", "privacy_choice", {
    send_to: "G-QPBTP7TCDV", analytics_choice: "granted", ads_choice: "denied", page_location: "https://bevory.in/guide",
  });
  expect(gtag).toHaveBeenCalledTimes(2);
  expect(setItem).toHaveBeenCalledWith("bevory-analytics-consent-v1", "granted");
  expect(dispatchEvent.mock.calls[0][0].type).toBe("bevory:ad-consent-changed");
});

it("keeps a rejected choice denied instead of upgrading it for measurement", () => {
  const gtag = vi.fn();
  vi.stubGlobal("localStorage", { setItem: vi.fn() });
  vi.stubGlobal("window", { gtag, dispatchEvent: vi.fn(), location: { origin: "https://bevory.in", pathname: "/" } });
  savePrivacyChoice("denied", "denied");
  expect(gtag.mock.calls[0][2].analytics_storage).toBe("denied");
  expect(gtag.mock.calls[1][2].analytics_choice).toBe("denied");
  expect(gtag.mock.calls.some(call => call[1] === "page_view")).toBe(false);
});
