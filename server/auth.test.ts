import { afterEach, describe, expect, it, vi } from "vitest";
import { prisma } from "./db.js";
import {
  createOAuthState,
  CURRENT_POLICY_VERSION,
  recordPolicyAcceptance,
  resolveJwtSecret,
  signUp,
  validatePolicyAcceptanceBeforePhoneOtp,
  verifyOAuthState,
  withPolicyAcceptance,
} from "./auth.js";

const currentAcceptance = {
  accepted: true as const,
  termsVersion: CURRENT_POLICY_VERSION,
  privacyVersion: CURRENT_POLICY_VERSION,
};

afterEach(() => vi.restoreAllMocks());

describe("sign-up validation", () => {
  it("requires password-backed email signup", async () => {
    await expect(signUp({})).rejects.toThrow("A valid email is required");
    await expect(signUp({ phone: "+919000000001", password: "long-enough-password" }))
      .rejects.toThrow("A valid email is required");
    await expect(signUp({ email: "person@example.com" })).rejects.toThrow("Password is required");
    await expect(signUp({ email: "person@example.com", password: "short" }))
      .rejects.toThrow("Password must be at least 8 characters");
    await expect(signUp({ email: "person@example.com", phone: "+919000000001", password: "long-enough-password" }))
      .rejects.toThrow("Phone sign-up must use OTP verification");
  });

  it("requires explicit acceptance of the current policies before database access", async () => {
    await expect(signUp({ email: "person@example.com", password: "long-enough-password" }))
      .rejects.toThrow("accept the current Terms and Privacy Policy");
    await expect(signUp({
      email: "person@example.com",
      password: "long-enough-password",
      policyAcceptance: { ...currentAcceptance, termsVersion: "2025-01-01" },
    }))
      .rejects.toThrow("accept the current Terms and Privacy Policy");
  });
});

describe("policy acceptance records", () => {
  it("uses a server timestamp and preserves prior metadata and acceptance history", () => {
    const prior = {
      terms_version: "2025-01-01",
      privacy_version: "2025-01-01",
      accepted_at: "2025-01-02T03:04:05.000Z",
      source: "email_signup" as const,
    };
    const recorded = recordPolicyAcceptance(
      currentAcceptance,
      "google",
      new Date("2026-09-20T12:34:56.000Z"),
    );
    const metadata = withPolicyAcceptance({
      favorite_city: "Gurgaon",
      policy_acceptance_history: [prior],
    }, recorded);

    expect(metadata).toMatchObject({
      favorite_city: "Gurgaon",
      terms_version: CURRENT_POLICY_VERSION,
      privacy_version: CURRENT_POLICY_VERSION,
      policy_accepted_at: "2026-09-20T12:34:56.000Z",
      policy_acceptance: recorded,
      policy_acceptance_history: [prior, recorded],
    });
  });

  it("rejects missing acceptance for a new phone account before OTP verification", async () => {
    const lookup = vi.spyOn(prisma.user, "findUnique").mockResolvedValue(null);
    await expect(validatePolicyAcceptanceBeforePhoneOtp("+919000000001", undefined))
      .rejects.toThrow("accept the current Terms and Privacy Policy");
    expect(lookup).toHaveBeenCalledOnce();
  });

  it("keeps the first immutable record for a policy-version pair", () => {
    const first = recordPolicyAcceptance(
      currentAcceptance,
      "google",
      new Date("2026-09-20T12:34:56.000Z"),
    );
    const repeated = recordPolicyAcceptance(
      currentAcceptance,
      "phone_otp",
      new Date("2026-09-21T12:34:56.000Z"),
    );
    const metadata = withPolicyAcceptance({
      policy_acceptance: first,
      policy_acceptance_history: [first, repeated],
    }, repeated);

    expect(metadata.policy_acceptance).toEqual(first);
    expect(metadata.policy_accepted_at).toBe(first.accepted_at);
    expect(metadata.policy_acceptance_history).toEqual([first]);
  });

  it("carries acceptance through signed Google OAuth state", () => {
    const redirectTo = "https://bevory.in/auth";
    const state = createOAuthState(redirectTo, currentAcceptance, "browser-bound-nonce");
    expect(verifyOAuthState(state, "browser-bound-nonce")).toEqual({
      redirectTo,
      policyAcceptance: currentAcceptance,
    });
    expect(() => verifyOAuthState(state, "different-nonce")).toThrow("Invalid OAuth state");
    expect(() => verifyOAuthState(state, undefined)).toThrow("Invalid OAuth state");
  });
});

describe("JWT secret validation", () => {
  it("rejects missing, placeholder, short, and low-diversity production secrets", () => {
    expect(() => resolveJwtSecret("production", undefined)).toThrow("JWT_SECRET");
    expect(() => resolveJwtSecret("production", "replace-this-before-shared-use")).toThrow("JWT_SECRET");
    expect(() => resolveJwtSecret("production", "short-secret")).toThrow("JWT_SECRET");
    expect(() => resolveJwtSecret("production", "a".repeat(64))).toThrow("JWT_SECRET");
  });

  it("accepts a sufficiently strong production secret and retains a local fallback", () => {
    const strongSecret = "3fD9!qW2#vL8@pR4$xT7&nM1*zK6_cB0";
    expect(resolveJwtSecret("production", strongSecret)).toBe(strongSecret);
    expect(resolveJwtSecret("test", undefined)).toBe("bevory-local-development-only");
  });
});
