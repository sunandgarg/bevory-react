export type MarketingLead = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  city: string;
  consented_at: string;
  contact_verified?: boolean;
  age_confirmed?: boolean;
};

export type LeadFilters = {
  search: string;
  city: string;
  verification: string;
  from: string;
  to: string;
  sort: string;
};

export const DEFAULT_LEAD_FILTERS: LeadFilters = {
  search: "", city: "all", verification: "all", from: "", to: "", sort: "newest",
};

const indiaDateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit",
});

export const indiaDateKey = (value: string | Date): string => {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "";
  return indiaDateFormatter.format(date);
};

export const filterMarketingLeads = (leads: MarketingLead[], filters: LeadFilters): MarketingLead[] => {
  const search = filters.search.trim().toLowerCase();
  return leads.filter((lead) => {
    if (search && ![lead.name, lead.email, lead.mobile, lead.city].some(value => (value || "").toLowerCase().includes(search))) return false;
    if (filters.city !== "all" && lead.city !== filters.city) return false;
    if (filters.verification === "verified" && lead.contact_verified !== true) return false;
    if (filters.verification === "unverified" && lead.contact_verified === true) return false;
    const date = indiaDateKey(lead.consented_at);
    return (!filters.from || (date && date >= filters.from)) && (!filters.to || (date && date <= filters.to));
  }).sort((a, b) => {
    if (filters.sort === "name") return (a.name || "").localeCompare(b.name || "") || a.id.localeCompare(b.id);
    const time = (value: string) => new Date(value).getTime() || 0;
    const difference = time(b.consented_at) - time(a.consented_at);
    return (filters.sort === "oldest" ? -difference : difference) || a.id.localeCompare(b.id);
  });
};

export const summarizeMarketingLeads = (leads: MarketingLead[], now = new Date()) => {
  const today = indiaDateKey(now);
  const weekStart = indiaDateKey(new Date(now.getTime() - 6 * 86400000));
  const cities = new Map<string, number>();
  let todayCount = 0;
  let weekCount = 0;
  let verifiedCount = 0;
  for (const lead of leads) {
    const date = indiaDateKey(lead.consented_at);
    if (date === today) todayCount++;
    if (date >= weekStart && date <= today) weekCount++;
    if (lead.contact_verified === true) verifiedCount++;
    if (lead.city) cities.set(lead.city, (cities.get(lead.city) || 0) + 1);
  }
  return {
    total: leads.length, todayCount, weekCount, verifiedCount,
    cities: [...cities].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
  };
};

const spreadsheetText = (value: string) => {
  const text = (value || "").replace(/\r/g, "\n");
  return /^\s*[=+\-@]/.test(text) || /^[\t\n]/.test(text) ? `'${text}` : text;
};

export const marketingLeadCsvRow = (lead: MarketingLead): Record<string, string> => Object.fromEntries(
  Object.entries({
    "Lead ID": lead.id, Name: lead.name, Email: lead.email, Mobile: lead.mobile, City: lead.city,
    "Consent recorded (UTC)": lead.consented_at,
    "Contact verification": lead.contact_verified === true ? "Verified" : "Unverified",
    "Age confirmation": lead.age_confirmed === true ? "Self-confirmed 25+" : "Not recorded",
  }).map(([key, value]) => [key, spreadsheetText(value)]),
);

export const LEAD_CSV_COLUMNS = Object.keys(marketingLeadCsvRow({
  id: "", name: "", email: "", mobile: "", city: "", consented_at: "",
}));
