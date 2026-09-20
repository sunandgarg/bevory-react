import { describe, expect, it } from "vitest";
import { signUp } from "./auth.js";

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
});
