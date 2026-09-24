import { readFile, mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { BRAND_CONTENT_BATCH_17 } from "../src/lib/brandContentBatch17.js";
import { BRAND_CONTENT_BATCH_18 } from "../src/lib/brandContentBatch18.js";
import { BRAND_CONTENT_BATCH_19 } from "../src/lib/brandContentBatch19.js";
import { BRAND_CONTENT_BATCH_20 } from "../src/lib/brandContentBatch20.js";
import { BRAND_CONTENT_BATCH_21 } from "../src/lib/brandContentBatch21.js";
import { BRAND_CONTENT_BATCH_22 } from "../src/lib/brandContentBatch22.js";
import { BRAND_CONTENT_BATCH_23 } from "../src/lib/brandContentBatch23.js";
import { BRAND_CONTENT_BATCH_24 } from "../src/lib/brandContentBatch24.js";
import { BRAND_CONTENT_BATCH_25 } from "../src/lib/brandContentBatch25.js";
import { BRAND_CONTENT_BATCH_26 } from "../src/lib/brandContentBatch26.js";
import { BRAND_CONTENT_BATCH_27 } from "../src/lib/brandContentBatch27.js";
import { BRAND_CONTENT_BATCH_28 } from "../src/lib/brandContentBatch28.js";
import { BRAND_CONTENT_BATCH_29 } from "../src/lib/brandContentBatch29.js";
import { BRAND_CONTENT_BATCH_30 } from "../src/lib/brandContentBatch30.js";
import { BRAND_CONTENT_BATCH_31 } from "../src/lib/brandContentBatch31.js";
import { BRAND_CONTENT_BATCH_32 } from "../src/lib/brandContentBatch32.js";
import { BRAND_CONTENT_BATCH_33 } from "../src/lib/brandContentBatch33.js";
import { BRAND_CONTENT_BATCH_34 } from "../src/lib/brandContentBatch34.js";
import { BRAND_CONTENT_BATCH_35 } from "../src/lib/brandContentBatch35.js";
import { BRAND_CONTENT_BATCH_36 } from "../src/lib/brandContentBatch36.js";
import { BRAND_CONTENT_BATCH_37 } from "../src/lib/brandContentBatch37.js";
import { BRAND_CONTENT_BATCH_38 } from "../src/lib/brandContentBatch38.js";
import { BRAND_CONTENT_BATCH_39 } from "../src/lib/brandContentBatch39.js";
import { BRAND_CONTENT_BATCH_40 } from "../src/lib/brandContentBatch40.js";
import { BRAND_CONTENT_BATCH_41 } from "../src/lib/brandContentBatch41.js";
import { BRAND_CONTENT_BATCH_42 } from "../src/lib/brandContentBatch42.js";
import { BRAND_CONTENT_BATCH_43 } from "../src/lib/brandContentBatch43.js";
import { BRAND_CONTENT_BATCH_44 } from "../src/lib/brandContentBatch44.js";
import { BRAND_CONTENT_BATCH_45 } from "../src/lib/brandContentBatch45.js";
import { BRAND_CONTENT_BATCH_46 } from "../src/lib/brandContentBatch46.js";
import { BRAND_CONTENT_BATCH_47 } from "../src/lib/brandContentBatch47.js";
import { BRAND_CONTENT_BATCH_48 } from "../src/lib/brandContentBatch48.js";
import { BRAND_CONTENT_BATCH_49 } from "../src/lib/brandContentBatch49.js";
import { BRAND_CONTENT_BATCH_50 } from "../src/lib/brandContentBatch50.js";
import { auditCatalogueRows, auditPublicBrandFields, publicBrandFields as publicFields } from "./brand-editorial-audit-lib.js";

// A structural scan is not a factual sign-off. Keep the two statuses separate.

type Row = Record<string, unknown>;
type LogoCheck = { slug: string; url: string; status?: number; width?: number; height?: number; error?: string };
const snapshotPath = process.argv[2];
if (!snapshotPath) throw new Error("Usage: node --import tsx scripts/audit-brand-editorial.ts <public-catalogue.json> [logo-checks.json ...]");
const snapshot = JSON.parse(await readFile(snapshotPath, "utf8")) as { data: Row[]; error?: unknown; count?: number };
if (snapshot.error || !Array.isArray(snapshot.data)) throw new Error("Invalid catalogue snapshot");
if (snapshot.count !== undefined && snapshot.count !== snapshot.data.length) throw new Error("Incomplete catalogue snapshot");
if (new Set(snapshot.data.map((row) => row.id)).size !== snapshot.data.length) throw new Error("Duplicate snapshot IDs");
const logoChecks = new Map<string, LogoCheck>();
for (const filename of process.argv.slice(3)) {
  for (const item of JSON.parse(await readFile(filename, "utf8")) as LogoCheck[]) logoChecks.set(item.slug, item);
}
const results = BRAND_EXPANSION.map((definition) => {
  const local = buildBrandExpansionData(definition);
  const live = snapshot.data.find((row) => row.id === definition.recordId) ?? snapshot.data.find((row) => row.slug === definition.slug);
  const issues = auditPublicBrandFields(local);
  if (!local.country_flag_url) issues.push("country_flag_url:missing");
  const check = logoChecks.get(definition.slug);
  const storedLogo = typeof live?.logo_url === "string" && live.logo_url.trim() ? live.logo_url : null;
  const effectiveLogo = storedLogo ?? local.logo_url;
  const checkedCurrentUrl = check?.url === effectiveLogo;
  const logoFetch = checkedCurrentUrl && check.status === 200 && check.width && check.height ? "decodable" : checkedCurrentUrl ? "failed" : "not_checked";
  const tinyRaster = checkedCurrentUrl && check.width && check.height && Math.max(check.width, check.height) < 100;
  const logoNeedsWork = (!storedLogo && (!local.logo_url || !local.logo_identity_verified)) || logoFetch === "failed" || tinyRaster;
  return {
    slug: definition.slug,
    name: definition.brandName,
    batch: local.content_version,
    structuralIssues: issues,
    recordId: definition.recordId,
    contentResearch: BRAND_CONTENT_BATCH_42[definition.slug] ? "researched_batch_42" : BRAND_CONTENT_BATCH_41[definition.slug] ? "researched_batch_41" : BRAND_CONTENT_BATCH_40[definition.slug] ? "researched_batch_40" : BRAND_CONTENT_BATCH_39[definition.slug] ? "researched_batch_39" : BRAND_CONTENT_BATCH_38[definition.slug] ? "researched_batch_38" : BRAND_CONTENT_BATCH_37[definition.slug] ? "researched_batch_37" : BRAND_CONTENT_BATCH_36[definition.slug] ? "researched_batch_36" : BRAND_CONTENT_BATCH_35[definition.slug] ? "researched_batch_35" : BRAND_CONTENT_BATCH_34[definition.slug] ? "researched_batch_34" : BRAND_CONTENT_BATCH_33[definition.slug] ? "researched_batch_33" : BRAND_CONTENT_BATCH_32[definition.slug] ? "researched_batch_32" : BRAND_CONTENT_BATCH_31[definition.slug] ? "researched_batch_31" : BRAND_CONTENT_BATCH_30[definition.slug] ? "researched_batch_30" : BRAND_CONTENT_BATCH_29[definition.slug] ? "researched_batch_29" : BRAND_CONTENT_BATCH_28[definition.slug] ? "researched_batch_28" : BRAND_CONTENT_BATCH_27[definition.slug] ? "researched_batch_27" : BRAND_CONTENT_BATCH_26[definition.slug] ? "researched_batch_26" : BRAND_CONTENT_BATCH_25[definition.slug] ? "researched_batch_25" : BRAND_CONTENT_BATCH_24[definition.slug] ? "researched_batch_24" : BRAND_CONTENT_BATCH_23[definition.slug] ? "researched_batch_23" : BRAND_CONTENT_BATCH_22[definition.slug] ? "researched_batch_22" : BRAND_CONTENT_BATCH_21[definition.slug] ? "researched_batch_21" : BRAND_CONTENT_BATCH_20[definition.slug] ? "researched_batch_20" : BRAND_CONTENT_BATCH_19[definition.slug] ? "researched_batch_19" : BRAND_CONTENT_BATCH_18[definition.slug] ? "researched_batch_18" : BRAND_CONTENT_BATCH_17[definition.slug] ? "researched_batch_17" : "previous_batch_requires_full_factual_revalidation",
    flagPresent: Boolean(local.country_flag_url),
    logoUrl: effectiveLogo,
    existingStoredLogo: Boolean(storedLogo),
    logoFetch,
    logoIdentityVerified: storedLogo ? live?.logo_identity_verified === true : local.logo_identity_verified,
    logoNeedsWork,
    logoCheck: check ?? null,
    liveVersion: live?.content_version ?? null,
    changedPublicFields: publicFields.filter((field) => !isDeepStrictEqual(local[field], live?.[field])),
    liveMatchesLocal: Boolean(live) && publicFields.every((field) => isDeepStrictEqual(local[field], live?.[field])),
  };
});
for (const row of results) {
  if (BRAND_CONTENT_BATCH_43[row.slug]) row.contentResearch = "researched_batch_43";
  if (BRAND_CONTENT_BATCH_44[row.slug]) row.contentResearch = "researched_batch_44";
  if (BRAND_CONTENT_BATCH_45[row.slug]) row.contentResearch = "researched_batch_45";
  if (BRAND_CONTENT_BATCH_46[row.slug]) row.contentResearch = "researched_batch_46";
  if (BRAND_CONTENT_BATCH_47[row.slug]) row.contentResearch = "researched_batch_47";
  if (BRAND_CONTENT_BATCH_48[row.slug]) row.contentResearch = "researched_batch_48";
  if (BRAND_CONTENT_BATCH_49[row.slug]) row.contentResearch = "researched_batch_49";
  if (BRAND_CONTENT_BATCH_50[row.slug]) row.contentResearch = "researched_batch_50";
}
const covered = new Set(BRAND_EXPANSION.map((item) => item.slug));
const coveredIds = new Set(BRAND_EXPANSION.map((item) => item.recordId));
const catalogueAudit = auditCatalogueRows(snapshot.data).map((row) => ({ ...row, locallyAuthored: coveredIds.has(String(row.id)) || covered.has(String(row.slug)) }));
const remaining = catalogueAudit.filter((row) => !row.locallyAuthored);
const summary = {
  generatedAt: new Date().toISOString(),
  snapshotPath: path.resolve(snapshotPath),
  snapshotModifiedAt: (await stat(snapshotPath)).mtime.toISOString(),
  catalogueRows: snapshot.data.length,
  locallyAuthored: results.length,
  newBatch: Object.keys(BRAND_CONTENT_BATCH_50).length,
  newlyAuthoredThisBatch: 0,
  revisedExistingThisBatch: Object.keys(BRAND_CONTENT_BATCH_50).length,
  outsideAuthoredSet: remaining.length,
  liveMatchesLocal: results.filter((item) => item.liveMatchesLocal).length,
  structuralIssues: results.filter((item) => item.structuralIssues.length).length,
  liveRowsWithPublicFieldIssues: catalogueAudit.filter((row) => row.publicFieldIssues.length).length,
  liveRowsWithMissingAssets: catalogueAudit.filter((row) => row.missingAssets.length).length,
  identityReviewCandidates: catalogueAudit.filter((row) => row.identityReview.length).length,
  logoFollowUps: results.filter((item) => item.logoNeedsWork).length,
  logoAssetsNotCheckedByThisAudit: results.filter((item) => item.logoFetch === "not_checked").length,
  previousBrandsNeedingFullFactRevalidation: results.filter((item) => item.contentResearch.startsWith("previous")).length,
  deployment: "not_published_by_this_audit",
  caveat: "Catalogue row counts are not a deduplicated count of distinct brands. Passing structural checks does not certify facts, logo rights, SEO ranking or AI-detector results.",
};
const directory = path.resolve("docs/editorial/reports");
await mkdir(directory, { recursive: true });
await writeFile(path.join(directory, "brand-progress.json"), JSON.stringify({ summary, brands: results, catalogueAudit, remainingCatalogueRows: remaining }, null, 2) + "\n");
await writeFile(path.join(directory, "batch-25-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_25, null, 2) + "\n");
await writeFile(path.join(directory, "batch-26-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_26, null, 2) + "\n");
await writeFile(path.join(directory, "batch-27-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_27, null, 2) + "\n");
await writeFile(path.join(directory, "batch-28-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_28, null, 2) + "\n");
await writeFile(path.join(directory, "batch-29-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_29, null, 2) + "\n");
await writeFile(path.join(directory, "batch-30-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_30, null, 2) + "\n");
await writeFile(path.join(directory, "batch-31-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_31, null, 2) + "\n");
await writeFile(path.join(directory, "batch-32-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_32, null, 2) + "\n");
await writeFile(path.join(directory, "batch-33-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_33, null, 2) + "\n");
await writeFile(path.join(directory, "batch-34-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_34, null, 2) + "\n");
await writeFile(path.join(directory, "batch-35-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_35, null, 2) + "\n");
await writeFile(path.join(directory, "batch-37-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_37, null, 2) + "\n");
await writeFile(path.join(directory, "batch-38-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_38, null, 2) + "\n");
await writeFile(path.join(directory, "batch-39-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_39, null, 2) + "\n");
await writeFile(path.join(directory, "batch-40-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_40, null, 2) + "\n");
await writeFile(path.join(directory, "batch-41-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_41, null, 2) + "\n");
await writeFile(path.join(directory, "batch-42-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_42, null, 2) + "\n");
await writeFile(path.join(directory, "batch-43-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_43, null, 2) + "\n");
await writeFile(path.join(directory, "batch-44-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_44, null, 2) + "\n");
await writeFile(path.join(directory, "batch-45-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_45, null, 2) + "\n");
await writeFile(path.join(directory, "batch-46-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_46, null, 2) + "\n");
await writeFile(path.join(directory, "batch-47-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_47, null, 2) + "\n");
await writeFile(path.join(directory, "batch-48-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_48, null, 2) + "\n");
await writeFile(path.join(directory, "batch-49-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_49, null, 2) + "\n");
await writeFile(path.join(directory, "batch-50-public-content.json"), JSON.stringify(BRAND_CONTENT_BATCH_50, null, 2) + "\n");
await writeFile(path.join(directory, "brand-progress.md"), [
  "# Brand Editorial Progress", "", "**NOT COMPLETE: production authentication and earlier-brand factual/logo review remain open.**", "",
  `- Catalogue rows: ${summary.catalogueRows}`,
  `- Locally authored guides: ${summary.locallyAuthored}; revised existing guides in batch 50: ${summary.revisedExistingThisBatch}; newly authored: ${summary.newlyAuthoredThisBatch}`,
  `- Catalogue rows outside the authored set: ${summary.outsideAuthoredSet}`,
  `- Local guides matching the captured live public content: ${summary.liveMatchesLocal}`,
  `- Structural follow-ups: ${summary.structuralIssues}; logo follow-ups: ${summary.logoFollowUps}; logo assets not checked by this audit: ${summary.logoAssetsNotCheckedByThisAudit}`,
  `- Earlier guides still requiring full factual revalidation: ${summary.previousBrandsNeedingFullFactRevalidation}`,
  `- Live rows with public-field issues: ${summary.liveRowsWithPublicFieldIssues}`,
  `- Live rows with missing logo/country/flag fields: ${summary.liveRowsWithMissingAssets}`,
  `- Identity-review candidates (not automatically merged or deleted): ${summary.identityReviewCandidates}`,
  "", summary.caveat, "", "## This Batch", "",
  ...results.filter((row) => BRAND_CONTENT_BATCH_50[row.slug]).map((row) => `- ${row.name}: full content written; flag present; logo ${row.logoNeedsWork ? "needs follow-up" : row.logoFetch === "decodable" ? "decodable in this audit" : row.existingStoredLogo ? "existing URL preserved; not checked in this audit" : "verified candidate; not checked in this audit"}; ${row.liveMatchesLocal ? "matches snapshot" : "not published"}.`),
  "", "## All Earlier Brands", "",
  ...results.filter((row) => !BRAND_CONTENT_BATCH_50[row.slug]).map((row) => `- ${row.name}: ${row.structuralIssues.length ? row.structuralIssues.join("; ") : "structural scan passed"}; logo ${row.logoNeedsWork ? "needs follow-up" : row.logoFetch === "decodable" ? "decodable in this audit" : "not checked in this audit"}; ${row.contentResearch}.`),
  "", "## Remaining Catalogue Rows", "",
  "These entries have not been rewritten. Each has a row in the accompanying JSON with exact public-field, asset and identity-review findings.", "",
  ...remaining.map((row) => `- ${row.name} (${row.slug}): ${row.publicFieldIssues.length} public-field issues; ${row.missingAssets.length ? `missing ${row.missingAssets.join(", ")}` : "asset URLs present, not verified"}${row.identityReview.length ? `; ${row.identityReview.join(", ")}` : ""}.`),
  "", "## Publication", "",
  "This read-only audit does not publish data. The last deployment attempt was blocked by expired AWS authentication and rejected SSH keys; authentication must be checked again before publication. No schema push, seed, database reset or production write is part of this audit.",
  "After authentication, take a database backup, deploy the tested source, run brands:expand without db:setup, regenerate affected prerendered brand pages, and compare the live API and HTML against the saved content.", "",
].join("\n"));
console.log(JSON.stringify(summary, null, 2));
