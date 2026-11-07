import { expect, it } from "vitest";
import { parseConsentChoice } from "./PrivacyConsent";

it("requires a fresh choice for stale or malformed consent values", () => {
  for (const value of [null, "true", "yes", "accepted", ""]) expect(parseConsentChoice(value)).toBeNull();
  expect(parseConsentChoice("granted")).toBe("granted");
  expect(parseConsentChoice("denied")).toBe("denied");
});
