import { describe, expect, it } from "vitest";
import { DEFAULT_LEAD_FILTERS, filterMarketingLeads, indiaDateKey, LEAD_CSV_COLUMNS, leadConsent, leadDateTime, leadState, marketingLeadCsvRow, summarizeMarketingLeads, type MarketingLead } from "./marketingLeads";

const makeLead = (values: Partial<MarketingLead> = {}): MarketingLead => ({
  id: "one", name: "Sample Person", email: "sample@example.invalid", mobile: "9000000000",
  city: "Delhi", consented_at: "2026-11-06T18:45:00Z", contact_verified: false, age_confirmed: true,
  ...values,
});
const leads = [
  makeLead(),
  makeLead({ id: "two", name: "Another Person", city: "Mumbai", email: "another@example.invalid", consented_at: "2026-11-05T10:00:00Z", contact_verified: true }),
  makeLead({ id: "three", name: "Third Person", city: "Delhi", mobile: "9000000003", consented_at: "2026-10-01T10:00:00Z", age_confirmed: undefined }),
];

describe("city lead filters", () => {
  it.each(["sample", "SAMPLE@EXAMPLE", "9000000000", " Delhi "])("searches contact fields and city for %s", search => {
    expect(filterMarketingLeads(leads, { ...DEFAULT_LEAD_FILTERS, search }).map(lead => lead.id)).toContain("one");
  });

  it("combines city, verification and date filters", () => {
    expect(filterMarketingLeads(leads, { ...DEFAULT_LEAD_FILTERS, city: "Delhi", verification: "unverified", from: "2026-11-07", to: "2026-11-07" }).map(lead => lead.id)).toEqual(["one"]);
    expect(filterMarketingLeads(leads, { ...DEFAULT_LEAD_FILTERS, verification: "verified" }).map(lead => lead.id)).toEqual(["two"]);
  });

  it("uses inclusive India calendar dates, including the end of the day", () => {
    const records = [makeLead({ id: "start", consented_at: "2026-11-06T18:30:00Z" }), makeLead({ id: "end", consented_at: "2026-11-07T18:29:59Z" }), makeLead({ id: "next", consented_at: "2026-11-07T18:30:00Z" })];
    expect(filterMarketingLeads(records, { ...DEFAULT_LEAD_FILTERS, from: "2026-11-07", to: "2026-11-07" }).map(lead => lead.id)).toEqual(["end", "start"]);
  });

  it("sorts without mutating input", () => {
    expect(filterMarketingLeads(leads, DEFAULT_LEAD_FILTERS).map(lead => lead.id)).toEqual(["one", "two", "three"]);
    expect(filterMarketingLeads(leads, { ...DEFAULT_LEAD_FILTERS, sort: "oldest" }).map(lead => lead.id)).toEqual(["three", "two", "one"]);
    expect(filterMarketingLeads(leads, { ...DEFAULT_LEAD_FILTERS, sort: "name" }).map(lead => lead.id)).toEqual(["two", "one", "three"]);
    expect(leads[0].id).toBe("one");
  });

  it("handles missing dates and an inverted range without a crash", () => {
    expect(indiaDateKey("bad-date")).toBe("");
    expect(filterMarketingLeads([makeLead({ consented_at: "bad-date" })], { ...DEFAULT_LEAD_FILTERS, from: "2026-11-01" })).toEqual([]);
    expect(filterMarketingLeads(leads, { ...DEFAULT_LEAD_FILTERS, from: "2026-11-07", to: "2026-11-01" })).toEqual([]);
    expect(filterMarketingLeads([], DEFAULT_LEAD_FILTERS)).toEqual([]);
  });
});

describe("city lead summaries and exports", () => {
  it("shows separate date and time in IST regardless of the browser timezone", () => {
    const parts = leadDateTime("2026-11-06T18:45:09Z");
    expect(parts.date).toBe("07 Nov 2026");
    expect(parts.time).toMatch(/^12:15:09\s?am$/i);
    expect(leadDateTime("invalid")).toEqual({ date: "Not recorded", time: "Not recorded" });
    expect(leadDateTime(null)).toEqual({ date: "Not recorded", time: "Not recorded" });
  });

  it("looks up state from the selected city without guessing unknown locations", () => {
    expect(leadState("Mumbai")).toBe("Maharashtra");
    expect(leadState(" noida ")).toBe("Uttar Pradesh");
    expect(leadState("Delhi")).toBe("Delhi");
    expect(leadState("Unknown city")).toBe("Not recorded");
    expect(leadState("")).toBe("Not recorded");
    expect(filterMarketingLeads(leads, { ...DEFAULT_LEAD_FILTERS, search: "maharashtra" }).map(lead => lead.id)).toEqual(["two"]);
  });

  it("shows recorded consent only when its timestamp is available", () => {
    expect(leadConsent(makeLead())).toBe("Recorded");
    expect(leadConsent(makeLead({ consented_at: "" }))).toBe("Not recorded");
    expect(leadConsent(makeLead({ consented_at: "invalid" }))).toBe("Not recorded");
    expect(leadConsent(makeLead({ consented_at: null }))).toBe("Not recorded");
  });

  it("exports separate contact, date, time, state and consent fields", () => {
    const row = marketingLeadCsvRow(makeLead());
    expect(row.Name).toBe("Sample Person");
    expect(row.Email).toBe("sample@example.invalid");
    expect(row.Mobile).toBe("9000000000");
    expect(row["Signup date (IST)"]).toBe("07 Nov 2026");
    expect(row["Signup time (IST)"]).toMatch(/^12:15:00\s?am$/i);
    expect(row["State / UT (from city)"]).toBe("Delhi");
    expect(row["Offer consent"]).toBe("Recorded");
    expect(row.Source).toBe("City offers form");
  });

  it("counts today's signups in India time and the last seven calendar days", () => {
    expect(summarizeMarketingLeads(leads, new Date("2026-11-07T00:00:00Z"))).toEqual({
      total: 3, todayCount: 1, weekCount: 2, verifiedCount: 1, cities: [["Delhi", 2], ["Mumbai", 1]],
    });
  });

  it("does not count future or invalid timestamps in recent totals", () => {
    const records = [makeLead({ consented_at: "invalid" }), makeLead({ id: "future", consented_at: "2027-01-01" })];
    expect(summarizeMarketingLeads(records, new Date("2026-11-07")).weekCount).toBe(0);
  });

  it("does not infer age or verification when fields are absent", () => {
    const row = marketingLeadCsvRow(makeLead({ contact_verified: undefined, age_confirmed: undefined }));
    expect(row["Contact verification"]).toBe("Unverified");
    expect(row["Age confirmation"]).toBe("Not recorded");
    expect(Object.keys(row)).toEqual(LEAD_CSV_COLUMNS);
  });

  it.each(["=1+1", "+1+1", "-1+1", "@SUM(1)", "  =1", "\tname", "\rname"])("neutralizes spreadsheet formula input %j", name => {
    expect(marketingLeadCsvRow(makeLead({ name })).Name.startsWith("'")).toBe(true);
  });
});
