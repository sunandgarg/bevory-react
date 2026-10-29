import { describe, expect, it } from "vitest";
import { marketingLeadSchema } from "./marketingLead.js";
import { queryAccessAllowed, type QueryPayload } from "./data.js";

const valid = {
  name: "Ada Kumar",
  email: "Ada@Example.com",
  mobile: "+91 9876543210",
  city: "Mumbai",
  adult: true,
  consent: true,
};

describe("marketing lead boundaries", () => {
  it("normalizes a valid, consented signup", () => {
    expect(marketingLeadSchema.parse(valid)).toMatchObject({ email: "ada@example.com", mobile: "9876543210" });
    expect(marketingLeadSchema.parse({ ...valid, mobile: "09876543210" }).mobile).toBe("9876543210");
  });

  it.each([
    { ...valid, consent: false },
    { ...valid, adult: false },
    { ...valid, city: "Unknown" },
    { ...valid, mobile: "12345" },
    { ...valid, website: "spam" },
  ])("rejects invalid or unconsented data", (input) => {
    expect(marketingLeadSchema.safeParse(input).success).toBe(false);
  });

  it("keeps saved contact details admin-only", () => {
    const query: QueryPayload = { table: "marketing_leads", operation: "select" };
    expect(queryAccessAllowed(query, false, false)).toBe(false);
    expect(queryAccessAllowed(query, true, false)).toBe(false);
    expect(queryAccessAllowed(query, true, true)).toBe(true);
  });
});
