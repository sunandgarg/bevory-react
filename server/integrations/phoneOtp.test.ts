import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "../db.js";
import { CURRENT_POLICY_VERSION, findOrCreatePhoneUser } from "../auth.js";
import { phoneOtpConfigured, sendPhoneOtp, verifyPhoneOtp } from "./phoneOtp.js";

const testPhone = "+919000000001";
const currentAcceptance = {
  accepted: true as const,
  termsVersion: CURRENT_POLICY_VERSION,
  privacyVersion: CURRENT_POLICY_VERSION,
};
const describeWithDatabase = process.env.DATABASE_URL ? describe : describe.skip;

describeWithDatabase("phone OTP", () => {
  const previousNodeEnv = process.env.NODE_ENV;
  const previousTestCode = process.env.OTP_TEST_CODE;

  beforeAll(async () => {
    process.env.NODE_ENV = "test";
    process.env.OTP_TEST_CODE = "123456";
    await prisma.otpChallenge.deleteMany({ where: { phone: testPhone } });
    const existing = await prisma.user.findUnique({ where: { phone: testPhone } });
    if (existing) {
      await prisma.contentRecord.deleteMany({ where: { key: `profiles:${existing.id}` } });
      await prisma.user.delete({ where: { id: existing.id } });
    }
  });

  afterAll(async () => {
    await prisma.otpChallenge.deleteMany({ where: { phone: testPhone } });
    const existing = await prisma.user.findUnique({ where: { phone: testPhone } });
    if (existing) {
      await prisma.contentRecord.deleteMany({ where: { key: `profiles:${existing.id}` } });
      await prisma.user.delete({ where: { id: existing.id } });
    }
    if (previousNodeEnv === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = previousNodeEnv;
    if (previousTestCode === undefined) delete process.env.OTP_TEST_CODE;
    else process.env.OTP_TEST_CODE = previousTestCode;
    await prisma.$disconnect();
  });

  it("creates and verifies an expiring local test challenge", async () => {
    expect(phoneOtpConfigured()).toBe(true);
    const sent = await sendPhoneOtp(testPhone);
    expect(sent).toEqual({ phone: testPhone, expiresIn: 600 });
    await expect(verifyPhoneOtp(testPhone, "000000")).rejects.toThrow("Invalid verification code");
    await expect(verifyPhoneOtp(testPhone, "123456")).resolves.toBe(testPhone);
    expect(await prisma.otpChallenge.count({ where: { phone: testPhone } })).toBe(0);
  });

  it("links a phone account without overwriting existing profile fields", async () => {
    const user = await findOrCreatePhoneUser(testPhone, currentAcceptance);
    expect(user.user_metadata).toMatchObject({
      terms_version: CURRENT_POLICY_VERSION,
      privacy_version: CURRENT_POLICY_VERSION,
      policy_acceptance: { source: "phone_otp" },
    });
    await prisma.contentRecord.update({
      where: { key: `profiles:${user.id}` },
      data: { data: { id: user.id, phone: testPhone, favorite_city: "Gurgaon" } },
    });
    const signedIn = await findOrCreatePhoneUser(testPhone);
    expect(signedIn.id).toBe(user.id);
    expect(signedIn.user_metadata.policy_acceptance_history).toHaveLength(1);
    const updated = await findOrCreatePhoneUser(testPhone, currentAcceptance);
    expect(updated.user_metadata).toMatchObject({
      terms_version: CURRENT_POLICY_VERSION,
      privacy_version: CURRENT_POLICY_VERSION,
    });
    expect(updated.user_metadata.policy_acceptance_history).toHaveLength(1);
    const profile = await prisma.contentRecord.findUnique({ where: { key: `profiles:${user.id}` } });
    expect(profile?.data).toMatchObject({ favorite_city: "Gurgaon" });
  });
});
