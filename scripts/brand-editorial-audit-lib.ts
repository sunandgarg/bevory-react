export type BrandAuditRow = Record<string, unknown>;

export const publicBrandFields = [
  "description", "story", "tasting_notes", "how_to_enjoy", "pairing_ideas",
  "why_choose", "faqs", "final_verdict", "meta_title", "meta_description",
] as const;

const banned = /\b(?:symphony|testament|delve|nestled|embark)\b|elevate your senses|dance on the palate|rich tapestry|whether you['’]re|editorial guardrail|portfolio-level|what to compare|published (?:profile|range|collection)|the reviewed material|the producer does not publish|no tasting notes found|style label remains at whisky|keep the exact record|read the individual label|start with the individual bottle|its pages are best read|a brand can contain more than one style|represented on BevOry across|adults can compare like with like|availability is not assumed across India|BevOry does not fill missing technical facts|check BevOry for reviewed city-level prices|\bdatabase\b/gi;
const text = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;
const object = (value: unknown): value is BrandAuditRow => Boolean(value) && typeof value === "object" && !Array.isArray(value);

export function auditPublicBrandFields(row: BrandAuditRow): string[] {
  const issues: string[] = [];
  const arrays = new Set(["tasting_notes", "how_to_enjoy", "pairing_ideas", "faqs"]);
  for (const field of publicBrandFields) {
    const value = row[field];
    if (arrays.has(field) ? !Array.isArray(value) || !value.length : !text(value)) issues.push(`empty_or_invalid:${field}`);
    const matches = JSON.stringify(value ?? "").match(banned);
    if (matches) issues.push(`public_language:${field}:${[...new Set(matches.map((item) => item.toLowerCase()))].join(",")}`);
  }
  for (const field of ["tasting_notes", "how_to_enjoy", "faqs"] as const) {
    if (!Array.isArray(row[field]) || row[field].length !== 2) issues.push(`count:${field}:expected_two`);
  }
  for (const field of ["tasting_notes", "how_to_enjoy"] as const) {
    if (!Array.isArray(row[field])) continue;
    row[field].forEach((note, index) => {
      if (!object(note) || !text(note.description) || !(text(note.title) || text(note.subheading))) issues.push(`invalid_note:${field}:${index}`);
    });
  }
  if (Array.isArray(row.faqs)) row.faqs.forEach((faq, index) => {
    if (!object(faq) || !text(faq.question) || !text(faq.answer)) issues.push(`invalid_faq:${index}`);
  });
  if (Array.isArray(row.pairing_ideas)) row.pairing_ideas.forEach((pairing, index) => {
    if (!object(pairing) || !text(pairing.title) || !Array.isArray(pairing.items) || !pairing.items.length || !pairing.items.every(text)) issues.push(`invalid_pairing:${index}`);
  });
  if (typeof row.meta_title === "string" && row.meta_title.length > 60) issues.push("length:meta_title:over_60");
  if (typeof row.meta_description === "string" && row.meta_description.length > 155) issues.push("length:meta_description:over_155");
  return issues;
}

// These are review candidates, not permission to delete or merge catalogue rows.
const categoryOrRegionNames = new Set(["all", "absinthe", "alsace", "alto adige", "amaretto", "amaro", "amarone", "barolo", "sambuca"]);
const normalizeName = (name: unknown) => String(name ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

export function auditCatalogueRows(rows: BrandAuditRow[]) {
  const names = new Map<string, string[]>();
  const slugs = new Map<string, string[]>();
  for (const row of rows) {
    const name = normalizeName(row.brand_name);
    if (name) names.set(name, [...(names.get(name) ?? []), String(row.id)]);
    if (text(row.slug)) slugs.set(row.slug, [...(slugs.get(row.slug) ?? []), String(row.id)]);
  }
  return rows.map((row) => {
    const name = normalizeName(row.brand_name);
    const identityReview: string[] = [];
    if (!name) identityReview.push("missing_name");
    if (categoryOrRegionNames.has(name)) identityReview.push("possible_category_or_region");
    if (/^\d+$/.test(name)) identityReview.push("numeric_name_requires_identity_check");
    if ((names.get(name)?.length ?? 0) > 1) identityReview.push("duplicate_normalized_name");
    if ((slugs.get(String(row.slug))?.length ?? 0) > 1) identityReview.push("duplicate_slug");
    return {
      id: row.id, slug: row.slug, name: row.brand_name,
      liveVersion: row.content_version ?? null,
      publicFieldIssues: auditPublicBrandFields(row),
      missingAssets: ["logo_url", "country", "country_flag_url"].filter((field) => !text(row[field])),
      identityReview,
    };
  });
}
