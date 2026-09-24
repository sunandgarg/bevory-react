import { describe, expect, it } from "vitest";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { BRAND_CONTENT_BATCH_01 } from "../src/lib/brandContentBatch01.js";
import { BRAND_CONTENT_BATCH_02 } from "../src/lib/brandContentBatch02.js";
import { BRAND_CONTENT_BATCH_03 } from "../src/lib/brandContentBatch03.js";
import { BRAND_CONTENT_BATCH_04 } from "../src/lib/brandContentBatch04.js";
import { BRAND_CONTENT_BATCH_05 } from "../src/lib/brandContentBatch05.js";
import { BRAND_CONTENT_BATCH_06 } from "../src/lib/brandContentBatch06.js";
import { BRAND_CONTENT_BATCH_07 } from "../src/lib/brandContentBatch07.js";
import { BRAND_CONTENT_BATCH_08 } from "../src/lib/brandContentBatch08.js";
import { BRAND_CONTENT_BATCH_09 } from "../src/lib/brandContentBatch09.js";
import { BRAND_CONTENT_BATCH_10 } from "../src/lib/brandContentBatch10.js";
import { BRAND_CONTENT_BATCH_11 } from "../src/lib/brandContentBatch11.js";
import { BRAND_CONTENT_BATCH_12, BRAND_LOGOS_BATCH_12 } from "../src/lib/brandContentBatch12.js";
import { BRAND_CONTENT_BATCH_13, BRAND_LOGOS_BATCH_13 } from "../src/lib/brandContentBatch13.js";
import { BRAND_CONTENT_BATCH_14, BRAND_LOGOS_BATCH_14 } from "../src/lib/brandContentBatch14.js";
import { BRAND_CONTENT_BATCH_15, BRAND_LOGOS_BATCH_15 } from "../src/lib/brandContentBatch15.js";
import { BRAND_CONTENT_BATCH_16, BRAND_LOGOS_BATCH_16 } from "../src/lib/brandContentBatch16.js";
import { BRAND_CONTENT_BATCH_17, BRAND_SOURCES_BATCH_17, BRAND_LOGOS_BATCH_17 } from "../src/lib/brandContentBatch17.js";
import { BRAND_CONTENT_BATCH_18, BRAND_SOURCES_BATCH_18, BRAND_LOGOS_BATCH_18 } from "../src/lib/brandContentBatch18.js";
import { BRAND_CONTENT_BATCH_19, BRAND_SOURCES_BATCH_19, BRAND_LOGOS_BATCH_19 } from "../src/lib/brandContentBatch19.js";
import { BRAND_CONTENT_BATCH_20, BRAND_SOURCES_BATCH_20, BRAND_LOGOS_BATCH_20 } from "../src/lib/brandContentBatch20.js";
import { BRAND_CONTENT_BATCH_21, BRAND_IDENTITIES_BATCH_21, BRAND_SOURCES_BATCH_21, BRAND_LOGOS_BATCH_21 } from "../src/lib/brandContentBatch21.js";
import { BRAND_CONTENT_BATCH_22, BRAND_IDENTITIES_BATCH_22, BRAND_SOURCES_BATCH_22, BRAND_LOGOS_BATCH_22 } from "../src/lib/brandContentBatch22.js";
import { BRAND_CONTENT_BATCH_23, BRAND_IDENTITIES_BATCH_23, BRAND_SOURCES_BATCH_23, BRAND_LOGOS_BATCH_23 } from "../src/lib/brandContentBatch23.js";
import { BRAND_CONTENT_BATCH_24, BRAND_IDENTITIES_BATCH_24, BRAND_SOURCES_BATCH_24, BRAND_LOGOS_BATCH_24 } from "../src/lib/brandContentBatch24.js";
import { BRAND_CONTENT_BATCH_25, BRAND_IDENTITIES_BATCH_25, BRAND_SOURCES_BATCH_25, BRAND_LOGOS_BATCH_25 } from "../src/lib/brandContentBatch25.js";
import { BRAND_CONTENT_BATCH_26, BRAND_IDENTITIES_BATCH_26, BRAND_SOURCES_BATCH_26, BRAND_LOGOS_BATCH_26 } from "../src/lib/brandContentBatch26.js";
import { BRAND_CONTENT_BATCH_27, BRAND_IDENTITIES_BATCH_27, BRAND_SOURCES_BATCH_27, BRAND_LOGOS_BATCH_27 } from "../src/lib/brandContentBatch27.js";
import { BRAND_CONTENT_BATCH_28, BRAND_IDENTITIES_BATCH_28, BRAND_SOURCES_BATCH_28, BRAND_LOGOS_BATCH_28 } from "../src/lib/brandContentBatch28.js";
import { BRAND_CONTENT_BATCH_29, BRAND_IDENTITIES_BATCH_29, BRAND_SOURCES_BATCH_29, BRAND_LOGOS_BATCH_29 } from "../src/lib/brandContentBatch29.js";
import { BRAND_CONTENT_BATCH_30, BRAND_IDENTITIES_BATCH_30, BRAND_SOURCES_BATCH_30, BRAND_LOGOS_BATCH_30 } from "../src/lib/brandContentBatch30.js";
import { BRAND_CONTENT_BATCH_31, BRAND_IDENTITIES_BATCH_31, BRAND_SOURCES_BATCH_31, BRAND_LOGOS_BATCH_31 } from "../src/lib/brandContentBatch31.js";
import { BRAND_CONTENT_BATCH_32, BRAND_IDENTITIES_BATCH_32, BRAND_SOURCES_BATCH_32, BRAND_LOGOS_BATCH_32 } from "../src/lib/brandContentBatch32.js";
import { BRAND_CONTENT_BATCH_33, BRAND_IDENTITIES_BATCH_33, BRAND_SOURCES_BATCH_33, BRAND_LOGOS_BATCH_33 } from "../src/lib/brandContentBatch33.js";
import { BRAND_CONTENT_BATCH_34, BRAND_IDENTITIES_BATCH_34, BRAND_SOURCES_BATCH_34, BRAND_LOGOS_BATCH_34 } from "../src/lib/brandContentBatch34.js";
import { BRAND_CONTENT_BATCH_35, BRAND_IDENTITIES_BATCH_35, BRAND_SOURCES_BATCH_35, BRAND_LOGOS_BATCH_35 } from "../src/lib/brandContentBatch35.js";
import { BRAND_CONTENT_BATCH_36, BRAND_IDENTITIES_BATCH_36, BRAND_SOURCES_BATCH_36, BRAND_LOGOS_BATCH_36 } from "../src/lib/brandContentBatch36.js";
import { BRAND_CONTENT_BATCH_37, BRAND_IDENTITIES_BATCH_37, BRAND_SOURCES_BATCH_37, BRAND_LOGOS_BATCH_37 } from "../src/lib/brandContentBatch37.js";
import { BRAND_CONTENT_BATCH_38, BRAND_IDENTITIES_BATCH_38, BRAND_SOURCES_BATCH_38, BRAND_LOGOS_BATCH_38 } from "../src/lib/brandContentBatch38.js";
import { BRAND_CONTENT_BATCH_39, BRAND_IDENTITIES_BATCH_39, BRAND_SOURCES_BATCH_39, BRAND_LOGOS_BATCH_39 } from "../src/lib/brandContentBatch39.js";
import { BRAND_CONTENT_BATCH_40, BRAND_IDENTITIES_BATCH_40, BRAND_SOURCES_BATCH_40, BRAND_LOGOS_BATCH_40 } from "../src/lib/brandContentBatch40.js";
import { BRAND_CONTENT_BATCH_41, BRAND_IDENTITIES_BATCH_41, BRAND_SOURCES_BATCH_41, BRAND_LOGOS_BATCH_41 } from "../src/lib/brandContentBatch41.js";
import { BRAND_CONTENT_BATCH_42, BRAND_IDENTITIES_BATCH_42, BRAND_SOURCES_BATCH_42, BRAND_LOGOS_BATCH_42 } from "../src/lib/brandContentBatch42.js";
import { BRAND_CONTENT_BATCH_43, BRAND_IDENTITIES_BATCH_43, BRAND_SOURCES_BATCH_43, BRAND_LOGOS_BATCH_43 } from "../src/lib/brandContentBatch43.js";
import { BRAND_CONTENT_BATCH_44, BRAND_IDENTITIES_BATCH_44, BRAND_SOURCES_BATCH_44, BRAND_LOGOS_BATCH_44 } from "../src/lib/brandContentBatch44.js";
import { BRAND_CONTENT_BATCH_45, BRAND_IDENTITIES_BATCH_45, BRAND_SOURCES_BATCH_45, BRAND_LOGOS_BATCH_45 } from "../src/lib/brandContentBatch45.js";
import { BRAND_CONTENT_BATCH_46, BRAND_IDENTITIES_BATCH_46, BRAND_SOURCES_BATCH_46, BRAND_LOGOS_BATCH_46 } from "../src/lib/brandContentBatch46.js";
import { BRAND_CONTENT_BATCH_47, BRAND_IDENTITIES_BATCH_47, BRAND_SOURCES_BATCH_47, BRAND_LOGOS_BATCH_47 } from "../src/lib/brandContentBatch47.js";
import { BRAND_CONTENT_BATCH_48, BRAND_IDENTITIES_BATCH_48, BRAND_SOURCES_BATCH_48, BRAND_LOGOS_BATCH_48 } from "../src/lib/brandContentBatch48.js";
import { BRAND_CONTENT_BATCH_49, BRAND_IDENTITIES_BATCH_49, BRAND_SOURCES_BATCH_49, BRAND_LOGOS_BATCH_49 } from "../src/lib/brandContentBatch49.js";
import { BRAND_CONTENT_BATCH_50, BRAND_IDENTITIES_BATCH_50, BRAND_SOURCES_BATCH_50, BRAND_LOGOS_BATCH_50 } from "../src/lib/brandContentBatch50.js";
import { BRAND_CONTENT_BATCH_51, BRAND_LOGOS_BATCH_51 } from "../src/lib/brandContentBatch51.js";
import { BRAND_CONTENT_BATCH_52 } from "../src/lib/brandContentBatch52.js";
import { BRAND_CONTENT_BATCH_53, BRAND_LOGOS_BATCH_53 } from "../src/lib/brandContentBatch53.js";
import { BRAND_CONTENT_BATCH_54, BRAND_LOGOS_BATCH_54 } from "../src/lib/brandContentBatch54.js";
import { BRAND_CONTENT_BATCH_55, BRAND_LOGOS_BATCH_55 } from "../src/lib/brandContentBatch55.js";
import { BRAND_CONTENT_BATCH_56, BRAND_LOGOS_BATCH_56 } from "../src/lib/brandContentBatch56.js";
import { BRAND_CONTENT_BATCH_57, BRAND_LOGOS_BATCH_57 } from "../src/lib/brandContentBatch57.js";
import { BRAND_CONTENT_BATCH_58, BRAND_LOGOS_BATCH_58 } from "../src/lib/brandContentBatch58.js";
import { BRAND_CONTENT_BATCH_59, BRAND_LOGOS_BATCH_59 } from "../src/lib/brandContentBatch59.js";
import { BRAND_CONTENT_BATCH_60, BRAND_LOGOS_BATCH_60 } from "../src/lib/brandContentBatch60.js";
import { VERIFIED_BRAND_LOGO_REPAIRS } from "../src/lib/brandLogoRepairs.js";

describe("brand expansion editorial data", () => {
  it("contains the planned brands once with stable slugs", () => {
    expect(BRAND_EXPANSION).toHaveLength(1126);
    expect(new Set(BRAND_EXPANSION.map((brand) => brand.slug)).size).toBe(BRAND_EXPANSION.length);
    expect(BRAND_EXPANSION.every((brand) => /^https:\/\//.test(brand.officialUrl))).toBe(true);
  });

  it("refuses to synthesize fallback copy for an unauthored brand", () => {
    expect(() => buildBrandExpansionData({ ...BRAND_EXPANSION[0], slug: "unresearched-brand" }))
      .toThrow("refusing to publish template copy");
  });

  it("keeps published copy within the editorial constraints", () => {
    for (const definition of BRAND_EXPANSION) {
      const data = buildBrandExpansionData(definition, "2026-09-21T00:00:00.000Z");
      const publishedKeys = [
        "description", "story", "tasting_notes", "how_to_enjoy", "pairing_ideas",
        "why_choose", "faqs", "final_verdict", "meta_title", "meta_description",
      ] as const;
      const text = JSON.stringify(Object.fromEntries(publishedKeys.map((key) => [key, data[key]])));
      expect(text).not.toMatch(/[\u2013\u2014]/);
      expect(text).not.toMatch(/according to (?:the )?(?:source|references?)|sources suggest/i);
      expect(data.meta_title.length).toBeLessThanOrEqual(60);
      expect(data.meta_description.length).toBeLessThanOrEqual(160);
      if (BRAND_CONTENT_BATCH_60[definition.slug]) {
        const verifiedLogo = BRAND_LOGOS_BATCH_60[definition.slug];
        expect(data.logo_url).toBe(verifiedLogo ?? null);
        expect(data.logo_identity_verified).toBe(Boolean(verifiedLogo));
        expect(data.logo_asset_status).toBe(verifiedLogo ? "verified_remote_asset" : "missing_verified_asset");
        continue;
      }
      if (BRAND_CONTENT_BATCH_59[definition.slug]) {
        const verifiedLogo = BRAND_LOGOS_BATCH_59[definition.slug];
        expect(data.logo_url).toBe(verifiedLogo ?? null);
        expect(data.logo_identity_verified).toBe(Boolean(verifiedLogo));
        expect(data.logo_asset_status).toBe(verifiedLogo ? "verified_remote_asset" : "missing_verified_asset");
        continue;
      }
      if (BRAND_CONTENT_BATCH_58[definition.slug]) {
        const verifiedLogo = BRAND_LOGOS_BATCH_58[definition.slug];
        expect(data.logo_url).toBe(verifiedLogo ?? null);
        expect(data.logo_identity_verified).toBe(Boolean(verifiedLogo));
        expect(data.logo_asset_status).toBe(verifiedLogo ? "verified_remote_asset" : "missing_verified_asset");
        continue;
      }
      if (BRAND_CONTENT_BATCH_57[definition.slug]) {
        const verifiedLogo = BRAND_LOGOS_BATCH_57[definition.slug];
        expect(data.logo_url).toBe(verifiedLogo ?? null);
        expect(data.logo_identity_verified).toBe(Boolean(verifiedLogo));
        expect(data.logo_asset_status).toBe(verifiedLogo ? "verified_remote_asset" : "missing_verified_asset");
        continue;
      }
      if (BRAND_CONTENT_BATCH_56[definition.slug]) {
        const verifiedLogo = BRAND_LOGOS_BATCH_56[definition.slug];
        expect(data.logo_url).toBe(verifiedLogo ?? null);
        expect(data.logo_identity_verified).toBe(Boolean(verifiedLogo));
        expect(data.logo_asset_status).toBe(verifiedLogo ? "verified_remote_asset" : "missing_verified_asset");
        continue;
      }
      if (BRAND_CONTENT_BATCH_55[definition.slug]) {
        const verifiedLogo = BRAND_LOGOS_BATCH_55[definition.slug];
        expect(data.logo_url).toBe(verifiedLogo ?? null);
        expect(data.logo_identity_verified).toBe(Boolean(verifiedLogo));
        expect(data.logo_asset_status).toBe(verifiedLogo ? "verified_remote_asset" : "missing_verified_asset");
        continue;
      }
      if (BRAND_CONTENT_BATCH_54[definition.slug]) {
        const verifiedLogo = BRAND_LOGOS_BATCH_54[definition.slug];
        expect(data.logo_url).toBe(verifiedLogo ?? null);
        expect(data.logo_identity_verified).toBe(Boolean(verifiedLogo));
        expect(data.logo_asset_status).toBe(verifiedLogo ? "verified_remote_asset" : "missing_verified_asset");
        continue;
      }
      if (BRAND_CONTENT_BATCH_53[definition.slug]) {
        const verifiedLogo = BRAND_LOGOS_BATCH_53[definition.slug];
        expect(data.logo_url).toBe(verifiedLogo ?? null);
        expect(data.logo_identity_verified).toBe(Boolean(verifiedLogo));
        expect(data.logo_asset_status).toBe(verifiedLogo ? "verified_remote_asset" : "missing_verified_asset");
        continue;
      }
      if ((BRAND_CONTENT_BATCH_20[definition.slug] && !BRAND_LOGOS_BATCH_20[definition.slug]) || (BRAND_CONTENT_BATCH_21[definition.slug] && !BRAND_LOGOS_BATCH_21[definition.slug]) || (BRAND_CONTENT_BATCH_22[definition.slug] && !BRAND_LOGOS_BATCH_22[definition.slug]) || (BRAND_CONTENT_BATCH_23[definition.slug] && !BRAND_LOGOS_BATCH_23[definition.slug]) || (BRAND_CONTENT_BATCH_24[definition.slug] && !BRAND_LOGOS_BATCH_24[definition.slug]) || BRAND_CONTENT_BATCH_25[definition.slug] || BRAND_CONTENT_BATCH_26[definition.slug] || BRAND_CONTENT_BATCH_27[definition.slug] || BRAND_CONTENT_BATCH_28[definition.slug] || BRAND_CONTENT_BATCH_29[definition.slug] || BRAND_CONTENT_BATCH_30[definition.slug] || (BRAND_CONTENT_BATCH_31[definition.slug] && !BRAND_LOGOS_BATCH_31[definition.slug]) || (BRAND_CONTENT_BATCH_32[definition.slug] && !BRAND_LOGOS_BATCH_32[definition.slug]) || (BRAND_CONTENT_BATCH_33[definition.slug] && !BRAND_LOGOS_BATCH_33[definition.slug]) || (BRAND_CONTENT_BATCH_34[definition.slug] && !BRAND_LOGOS_BATCH_34[definition.slug]) || (BRAND_CONTENT_BATCH_35[definition.slug] && !BRAND_LOGOS_BATCH_35[definition.slug] && definition.slug !== "sula" && definition.slug !== "svedka") || (BRAND_CONTENT_BATCH_36[definition.slug] && !BRAND_LOGOS_BATCH_36[definition.slug]) || (BRAND_CONTENT_BATCH_37[definition.slug] && !BRAND_LOGOS_BATCH_37[definition.slug]) || (BRAND_CONTENT_BATCH_38[definition.slug] && !BRAND_LOGOS_BATCH_38[definition.slug]) || (BRAND_CONTENT_BATCH_39[definition.slug] && !BRAND_LOGOS_BATCH_39[definition.slug]) || (BRAND_CONTENT_BATCH_40[definition.slug] && !BRAND_LOGOS_BATCH_40[definition.slug]) || (BRAND_CONTENT_BATCH_41[definition.slug] && !BRAND_LOGOS_BATCH_41[definition.slug]) || (BRAND_CONTENT_BATCH_42[definition.slug] && !BRAND_LOGOS_BATCH_42[definition.slug]) || (BRAND_CONTENT_BATCH_43[definition.slug] && !BRAND_LOGOS_BATCH_43[definition.slug]) || (BRAND_CONTENT_BATCH_44[definition.slug] && !BRAND_LOGOS_BATCH_44[definition.slug]) || (BRAND_CONTENT_BATCH_45[definition.slug] && !BRAND_LOGOS_BATCH_45[definition.slug]) || (BRAND_CONTENT_BATCH_46[definition.slug] && !BRAND_LOGOS_BATCH_46[definition.slug]) || (BRAND_CONTENT_BATCH_47[definition.slug] && !BRAND_LOGOS_BATCH_47[definition.slug]) || (BRAND_CONTENT_BATCH_48[definition.slug] && !BRAND_LOGOS_BATCH_48[definition.slug])) expect(data.logo_url).toBeNull();
      else if (BRAND_CONTENT_BATCH_53[definition.slug] && !BRAND_LOGOS_BATCH_53[definition.slug]) expect(data.logo_url).toBeNull();
      else expect(data.logo_url).toMatch(/^https:\/\//);
      expect(["verified_remote_asset", "livcheers_slug_asset_pending_verification", "missing_verified_asset"]).toContain(data.logo_asset_status);
      expect(data.logo_identity_verified).toBe(data.logo_asset_status === "verified_remote_asset");
    }
  });

  it("keeps all refreshed batches complete and consumer-facing", () => {
    const publicFields = ["description", "story", "tasting_notes", "how_to_enjoy", "pairing_ideas", "why_choose", "faqs", "final_verdict"] as const;
    const internalLanguage = /editorial guardrail|database|portfolio-level|what to compare|internal wiki|exact product record|do not infer|the reviewed material does not state|bevory does not assume|keep the exact record/i;

    for (const [batch, version, expectedCount, verifiedLogo] of [
      [BRAND_CONTENT_BATCH_01, "brand-public-ui-v3-batch-01", 10, false],
      [BRAND_CONTENT_BATCH_02, "brand-public-ui-v3-batch-02", 10, false],
      [BRAND_CONTENT_BATCH_03, "brand-public-ui-v3-batch-03", 10, false],
      [BRAND_CONTENT_BATCH_04, "brand-public-ui-v3-batch-04", 8, false],
      [BRAND_CONTENT_BATCH_05, "brand-public-ui-v3-batch-05", 10, false],
      [BRAND_CONTENT_BATCH_06, "brand-public-ui-v3-batch-06", 10, false],
      [BRAND_CONTENT_BATCH_07, "brand-public-ui-v3-batch-07", 10, true],
      [BRAND_CONTENT_BATCH_08, "brand-public-ui-v3-batch-08", 10, true],
      [BRAND_CONTENT_BATCH_09, "brand-public-ui-v3-batch-09", 10, true],
      [BRAND_CONTENT_BATCH_10, "brand-public-ui-v3-batch-10", 10, true],
      [BRAND_CONTENT_BATCH_11, "brand-public-ui-v3-batch-11", 10, true],
      [BRAND_CONTENT_BATCH_12, "brand-public-ui-v3-batch-12", 10, true],
      [BRAND_CONTENT_BATCH_13, "brand-public-ui-v3-batch-13", 20, true],
      [BRAND_CONTENT_BATCH_14, "brand-public-ui-v3-batch-14", 20, true],
      [BRAND_CONTENT_BATCH_15, "brand-public-ui-v3-batch-15", 20, true],
      [BRAND_CONTENT_BATCH_16, "brand-public-ui-v3-batch-16", 20, true],
    ] as const) {
      expect(Object.keys(batch)).toHaveLength(expectedCount);
      for (const slug of Object.keys(batch)) {
        const definition = BRAND_EXPANSION.find((brand) => brand.slug === slug);
        expect(definition).toBeDefined();
        const data = buildBrandExpansionData(definition!, "2026-09-22T00:00:00.000Z");
        for (const field of publicFields) {
          expect(data[field]).toBeTruthy();
          expect(JSON.stringify(data[field])).not.toMatch(internalLanguage);
        }
        expect(data.content_version).toBe(BRAND_CONTENT_BATCH_55[slug] ? "brand-public-ui-v3-batch-55" : BRAND_CONTENT_BATCH_54[slug] ? "brand-public-ui-v3-batch-54" : BRAND_CONTENT_BATCH_53[slug] ? "brand-public-ui-v3-batch-53" : BRAND_CONTENT_BATCH_52[slug] ? "brand-public-ui-v3-batch-52" : BRAND_CONTENT_BATCH_51[slug] ? "brand-public-ui-v3-batch-51" : BRAND_CONTENT_BATCH_50[slug] ? "brand-public-ui-v3-batch-50" : BRAND_CONTENT_BATCH_49[slug] ? "brand-public-ui-v3-batch-49" : BRAND_CONTENT_BATCH_35[slug] ? "brand-public-ui-v3-batch-35" : version);
        if (BRAND_CONTENT_BATCH_55[slug] && !BRAND_LOGOS_BATCH_55[slug]) expect(data.logo_url).toBeNull();
        else if (BRAND_CONTENT_BATCH_54[slug] && !BRAND_LOGOS_BATCH_54[slug]) expect(data.logo_url).toBeNull();
        else if (BRAND_CONTENT_BATCH_53[slug] && !BRAND_LOGOS_BATCH_53[slug]) expect(data.logo_url).toBeNull();
        else expect(data.logo_url).toMatch(/^https:\/\//);
        const logoVerified = BRAND_CONTENT_BATCH_55[slug] ? Boolean(BRAND_LOGOS_BATCH_55[slug]) : BRAND_CONTENT_BATCH_54[slug] ? Boolean(BRAND_LOGOS_BATCH_54[slug]) : BRAND_CONTENT_BATCH_53[slug] ? Boolean(BRAND_LOGOS_BATCH_53[slug]) : BRAND_CONTENT_BATCH_35[slug] ? Boolean(BRAND_LOGOS_BATCH_35[slug] || VERIFIED_BRAND_LOGO_REPAIRS[slug]) : verifiedLogo || Boolean(BRAND_LOGOS_BATCH_51[slug] || VERIFIED_BRAND_LOGO_REPAIRS[slug]);
        expect(data.logo_identity_verified).toBe(logoVerified);
        expect(data.logo_asset_status).toBe(logoVerified ? "verified_remote_asset" : BRAND_CONTENT_BATCH_55[slug] || BRAND_CONTENT_BATCH_54[slug] || BRAND_CONTENT_BATCH_53[slug] ? "missing_verified_asset" : "livcheers_slug_asset_pending_verification");
      }
    }
  });

  it("keeps the latest batches free from filler and missing-data commentary", () => {
    const blocked = /symphony|testament|ultimate|nestled|delve|embark|elevate your senses|harmonious blend|perfect for any occasion|dance on the palate|rich tapestry|whether you(?:'|’)re|a brand can contain more than one style|start with the individual bottle|bevory does not fill missing technical facts|adults can compare like with like|availability is not assumed across india|read the individual label before buying|keep the exact record separate|check bevory for reviewed city-level prices|the producer does not publish|no tasting notes found in reviewed material|style label remains at whisky|does not publish|does not state|not provided|missing data|sources? suggest|according to/i;
    for (const batch of [BRAND_CONTENT_BATCH_08, BRAND_CONTENT_BATCH_09, BRAND_CONTENT_BATCH_10, BRAND_CONTENT_BATCH_11, BRAND_CONTENT_BATCH_12, BRAND_CONTENT_BATCH_13, BRAND_CONTENT_BATCH_14, BRAND_CONTENT_BATCH_15, BRAND_CONTENT_BATCH_16]) {
      const contentEntries = Object.values(batch);
      expect(new Set(contentEntries.map((content) => content.metaTitle)).size).toBe(contentEntries.length);
      expect(new Set(contentEntries.map((content) => content.metaDescription)).size).toBe(contentEntries.length);
      for (const content of contentEntries) {
        expect(JSON.stringify(content)).not.toMatch(blocked);
        if (batch === BRAND_CONTENT_BATCH_10 || batch === BRAND_CONTENT_BATCH_11 || batch === BRAND_CONTENT_BATCH_12 || batch === BRAND_CONTENT_BATCH_13 || batch === BRAND_CONTENT_BATCH_14 || batch === BRAND_CONTENT_BATCH_15 || batch === BRAND_CONTENT_BATCH_16) expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      }
    }
  });

  it("enforces the strict public contract for batches 11 through 18", () => {
    const sentenceCount = (value: string) => value.match(/[.!?](?:\s|$)/g)?.length ?? 0;
    for (const batch of [BRAND_CONTENT_BATCH_11, BRAND_CONTENT_BATCH_12, BRAND_CONTENT_BATCH_13, BRAND_CONTENT_BATCH_14, BRAND_CONTENT_BATCH_15, BRAND_CONTENT_BATCH_16, BRAND_CONTENT_BATCH_17, BRAND_CONTENT_BATCH_18, BRAND_CONTENT_BATCH_19, BRAND_CONTENT_BATCH_20, BRAND_CONTENT_BATCH_21, BRAND_CONTENT_BATCH_22, BRAND_CONTENT_BATCH_23, BRAND_CONTENT_BATCH_24, BRAND_CONTENT_BATCH_25, BRAND_CONTENT_BATCH_26, BRAND_CONTENT_BATCH_27, BRAND_CONTENT_BATCH_28, BRAND_CONTENT_BATCH_29, BRAND_CONTENT_BATCH_30, BRAND_CONTENT_BATCH_31, BRAND_CONTENT_BATCH_32, BRAND_CONTENT_BATCH_33, BRAND_CONTENT_BATCH_34, BRAND_CONTENT_BATCH_35, BRAND_CONTENT_BATCH_36, BRAND_CONTENT_BATCH_37, BRAND_CONTENT_BATCH_38, BRAND_CONTENT_BATCH_39, BRAND_CONTENT_BATCH_40, BRAND_CONTENT_BATCH_41, BRAND_CONTENT_BATCH_42, BRAND_CONTENT_BATCH_43, BRAND_CONTENT_BATCH_44, BRAND_CONTENT_BATCH_45, BRAND_CONTENT_BATCH_46, BRAND_CONTENT_BATCH_47, BRAND_CONTENT_BATCH_48, BRAND_CONTENT_BATCH_49, BRAND_CONTENT_BATCH_50]) {
      for (const content of Object.values(batch)) {
        expect(sentenceCount(content.description)).toBeGreaterThanOrEqual(2);
        expect(sentenceCount(content.description)).toBeLessThanOrEqual(3);
        expect(sentenceCount(content.story)).toBeGreaterThanOrEqual(2);
        expect(sentenceCount(content.story)).toBeLessThanOrEqual(3);
        expect(content.tastingNotes).toHaveLength(2);
        expect(content.tastingNotes.every((note) => Boolean(note.title?.trim()) && Boolean(note.description.trim()))).toBe(true);
        expect(content.howToEnjoy).toHaveLength(2);
        expect(content.howToEnjoy.every((note) => Boolean(note.subheading?.trim()) && Boolean(note.description.trim()))).toBe(true);
        expect(content.faqs).toHaveLength(2);
        expect(content.faqs.every((faq) => Boolean(faq.question.trim()) && Boolean(faq.answer.trim()))).toBe(true);
        expect(content.pairingIdeas.every((pairing) => Boolean(pairing.title.trim()) && pairing.items.every((item) => Boolean(item.trim())))).toBe(true);
        expect(content.pairingIdeas[0]?.items.length).toBeGreaterThanOrEqual(batch === BRAND_CONTENT_BATCH_44 || batch === BRAND_CONTENT_BATCH_45 || batch === BRAND_CONTENT_BATCH_46 || batch === BRAND_CONTENT_BATCH_47 || batch === BRAND_CONTENT_BATCH_48 || batch === BRAND_CONTENT_BATCH_49 || batch === BRAND_CONTENT_BATCH_50 ? 3 : 4);
        expect(sentenceCount(content.whyChoose)).toBe(1);
        expect(sentenceCount(content.finalVerdict)).toBe(1);
        expect(content.metaTitle.length).toBeLessThanOrEqual(60);
        expect(content.metaDescription.length).toBeLessThanOrEqual(155);
        expect(content.metaDescription).toMatch(/city prices on BevOry\.$/);
      }
    }
  });

  it("wires all twenty new guides to existing identities and keeps research internal", () => {
    expect(Object.keys(BRAND_CONTENT_BATCH_17)).toHaveLength(20);
    for (const [slug, content] of Object.entries(BRAND_CONTENT_BATCH_17)) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      expect(definition.recordId).toMatch(/^lc-brand-/);
      const data = buildBrandExpansionData(definition);
      expect(data.description).toBe(BRAND_CONTENT_BATCH_55[slug]?.description ?? content.description);
      expect(data.tasting_notes).toEqual(BRAND_CONTENT_BATCH_55[slug]?.tastingNotes ?? content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe(BRAND_CONTENT_BATCH_55[slug] ? "brand-public-ui-v3-batch-55" : "brand-public-ui-v3-batch-17");
      expect(BRAND_SOURCES_BATCH_17[slug].length).toBeGreaterThan(0);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_CONTENT_BATCH_55[slug] ? BRAND_LOGOS_BATCH_55[slug] : BRAND_LOGOS_BATCH_17[slug]));
      expect(JSON.stringify(content)).not.toMatch(/editorial guardrail|published profile|database|the producer does not|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
  });

  it("wires batch 18 full content, flags and only checked logo assets", () => {
    expect(Object.keys(BRAND_CONTENT_BATCH_18)).toHaveLength(20);
    for (const [slug, content] of Object.entries(BRAND_CONTENT_BATCH_18)) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toMatch(/^lc-brand-/);
      expect(data.description).toBe((BRAND_CONTENT_BATCH_58[slug] ?? BRAND_CONTENT_BATCH_57[slug] ?? content).description);
      expect(data.story).toBe(content.story);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.how_to_enjoy).toEqual(content.howToEnjoy);
      expect(data.pairing_ideas).toEqual(content.pairingIdeas);
      expect(data.faqs).toEqual(content.faqs);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe(BRAND_CONTENT_BATCH_56[slug] ? "brand-public-ui-v3-batch-56" : "brand-public-ui-v3-batch-18");
      expect(BRAND_SOURCES_BATCH_18[slug].length).toBeGreaterThan(0);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_18[slug]));
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
  });

  it("wires batch 19 to the existing catalogue identities", () => {
    expect(Object.keys(BRAND_CONTENT_BATCH_19)).toHaveLength(20);
    for (const [slug, content] of Object.entries(BRAND_CONTENT_BATCH_19)) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      expect(definition).toBeDefined();
      const data = buildBrandExpansionData(definition);
      expect(data.description).toBe((BRAND_CONTENT_BATCH_57[slug] ?? BRAND_CONTENT_BATCH_56[slug] ?? content).description);
      expect(data.story).toBe(content.story);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.how_to_enjoy).toEqual(content.howToEnjoy);
      expect(data.pairing_ideas).toEqual(content.pairingIdeas);
      expect(data.faqs).toEqual(content.faqs);
      expect(data.content_version).toBe(BRAND_CONTENT_BATCH_57[slug] ? "brand-public-ui-v3-batch-57" : BRAND_CONTENT_BATCH_56[slug] ? "brand-public-ui-v3-batch-56" : "brand-public-ui-v3-batch-19");
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(BRAND_SOURCES_BATCH_19[slug].length).toBeGreaterThan(0);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_19[slug]));
    }
  });

  it("wires batch 20 to exact catalogue identities without guessing missing logos", () => {
    expect(Object.keys(BRAND_CONTENT_BATCH_20)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_20)).toHaveLength(10);
    for (const [slug, content] of Object.entries(BRAND_CONTENT_BATCH_20)) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      expect(definition).toBeDefined();
      const data = buildBrandExpansionData(definition);
      expect(data.description).toBe((BRAND_CONTENT_BATCH_58[slug] ?? BRAND_CONTENT_BATCH_57[slug] ?? content).description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.content_version).toBe(BRAND_CONTENT_BATCH_58[slug] ? "brand-public-ui-v3-batch-58" : BRAND_CONTENT_BATCH_57[slug] ? "brand-public-ui-v3-batch-57" : "brand-public-ui-v3-batch-20");
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(BRAND_SOURCES_BATCH_20[slug].length).toBeGreaterThan(0);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_20[slug]));
    }
  });

  it("wires batch 21 and only proposes logos for previously empty rows", () => {
    expect(BRAND_IDENTITIES_BATCH_21).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_21)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_21).sort()).toEqual(["barone-ricasoli", "beronia"]);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_21) {
      const content = BRAND_CONTENT_BATCH_21[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_21[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe((BRAND_CONTENT_BATCH_59[slug] ?? BRAND_CONTENT_BATCH_58[slug] ?? content).description);
      expect(data.story).toBe(content.story);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.how_to_enjoy).toEqual(content.howToEnjoy);
      expect(data.pairing_ideas).toEqual(content.pairingIdeas);
      expect(data.faqs).toEqual(content.faqs);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe(BRAND_CONTENT_BATCH_59[slug] ? "brand-public-ui-v3-batch-59" : BRAND_CONTENT_BATCH_58[slug] ? "brand-public-ui-v3-batch-58" : "brand-public-ui-v3-batch-21");
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_21[slug] ?? null);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_21)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 22 without inventing logos for unresolved rows", () => {
    expect(BRAND_IDENTITIES_BATCH_22).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_22)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_22).sort()).toEqual(["four-pillars", "frescobaldi", "hakutsuru", "inglenook"]);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_22) {
      const content = BRAND_CONTENT_BATCH_22[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_22[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe((BRAND_CONTENT_BATCH_60[slug] ?? BRAND_CONTENT_BATCH_59[slug] ?? content).description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe(BRAND_CONTENT_BATCH_60[slug] ? "brand-public-ui-v3-batch-60" : BRAND_CONTENT_BATCH_59[slug] ? "brand-public-ui-v3-batch-59" : "brand-public-ui-v3-batch-22");
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_22[slug] ?? null);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_22)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 23 content while only supplying verified logos for blank rows", () => {
    expect(BRAND_IDENTITIES_BATCH_23).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_23)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_23)).toHaveLength(12);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_23) {
      const content = BRAND_CONTENT_BATCH_23[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_23[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe((BRAND_CONTENT_BATCH_60[slug] ?? content).description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe(BRAND_CONTENT_BATCH_60[slug] ? "brand-public-ui-v3-batch-60" : "brand-public-ui-v3-batch-23");
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_23[slug] ?? null);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_23)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 24 and preserves the 23 already-stored logos", () => {
    expect(BRAND_IDENTITIES_BATCH_24).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_24)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_24)).toHaveLength(6);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_24) {
      const content = BRAND_CONTENT_BATCH_24[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_24[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-24");
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_24[slug] ?? null);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_24)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires all 30 batch 25 guides without proposing replacement logos", () => {
    expect(BRAND_IDENTITIES_BATCH_25).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_25)).toHaveLength(30);
    expect(BRAND_LOGOS_BATCH_25).toEqual({});
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_25) {
      const content = BRAND_CONTENT_BATCH_25[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_25[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-25");
      expect(data.logo_url).toBeNull();
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_25)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires all 30 batch 26 guides without replacing stored logos", () => {
    expect(BRAND_IDENTITIES_BATCH_26).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_26)).toHaveLength(30);
    expect(BRAND_LOGOS_BATCH_26).toEqual({});
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_26) {
      const content = BRAND_CONTENT_BATCH_26[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_26[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-26");
      expect(data.logo_url).toBeNull();
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_26)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires all 30 batch 27 guides without replacing stored logos", () => {
    expect(BRAND_IDENTITIES_BATCH_27).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_27)).toHaveLength(30);
    expect(BRAND_LOGOS_BATCH_27).toEqual({});
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_27) {
      const content = BRAND_CONTENT_BATCH_27[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_27[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-27");
      expect(data.logo_url).toBeNull();
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_27)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires all 30 batch 28 guides without replacing stored logos", () => {
    expect(BRAND_IDENTITIES_BATCH_28).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_28)).toHaveLength(30);
    expect(BRAND_LOGOS_BATCH_28).toEqual({});
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_28) {
      const content = BRAND_CONTENT_BATCH_28[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_28[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-28");
      expect(data.logo_url).toBeNull();
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_28)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires all 30 batch 29 guides without replacing stored logos", () => {
    expect(BRAND_IDENTITIES_BATCH_29).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_29)).toHaveLength(30);
    expect(BRAND_LOGOS_BATCH_29).toEqual({});
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_29) {
      const content = BRAND_CONTENT_BATCH_29[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_29[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-29");
      expect(data.logo_url).toBeNull();
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_29)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires all 30 batch 30 guides without guessing logos", () => {
    expect(BRAND_IDENTITIES_BATCH_30).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_30)).toHaveLength(30);
    expect(BRAND_LOGOS_BATCH_30).toEqual({});
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_30) {
      const content = BRAND_CONTENT_BATCH_30[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_30[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-30");
      expect(data.logo_url).toBeNull();
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_30)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires all 30 batch 31 guides with only verified logos", () => {
    expect(BRAND_IDENTITIES_BATCH_31).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_31)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_31)).toHaveLength(8);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_31) {
      const content = BRAND_CONTENT_BATCH_31[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_31[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-31");
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_31[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_31[slug]));
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_31)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 32 content and only checked logos to exact catalogue IDs", () => {
    expect(BRAND_IDENTITIES_BATCH_32).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_32)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_32)).toHaveLength(7);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_32) {
      const content = BRAND_CONTENT_BATCH_32[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_32[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-32");
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_32[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_32[slug]));
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_32)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 33 content and only visually checked logos to exact catalogue IDs", () => {
    expect(BRAND_IDENTITIES_BATCH_33).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_33)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_33)).toHaveLength(7);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_33) {
      const content = BRAND_CONTENT_BATCH_33[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_33[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-33");
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_33[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_33[slug]));
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_33)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 34 content and only visually checked logos to exact catalogue IDs", () => {
    expect(BRAND_IDENTITIES_BATCH_34).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_34)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_34)).toHaveLength(14);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_34) {
      const content = BRAND_CONTENT_BATCH_34[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_34[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-34");
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_34[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_34[slug]));
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_34)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 35 content and only visually checked logos to exact catalogue IDs", () => {
    expect(BRAND_IDENTITIES_BATCH_35).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_35)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_35)).toHaveLength(16);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_35) {
      const content = BRAND_CONTENT_BATCH_35[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(slug === "sula" || slug === "svedka" ? `brand-expansion-${slug}` : `lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_35[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-35");
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_35[slug] ?? (slug === "sula" || slug === "svedka" ? `https://static.livcheers.com/static/content/images/brand/${slug}.webp` : null));
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_35[slug] || VERIFIED_BRAND_LOGO_REPAIRS[slug]));
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_35)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 36 content and only producer-identified logos to blank catalogue rows", () => {
    expect(BRAND_IDENTITIES_BATCH_36).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_36)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_36)).toHaveLength(9);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_36) {
      const content = BRAND_CONTENT_BATCH_36[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_36[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.tasting_notes).toEqual(content.tastingNotes);
      expect(data.country_flag_url).toMatch(/^https:/);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-36");
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_36[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_36[slug]));
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_36)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 37 with full public content and only exact producer marks", () => {
    expect(BRAND_IDENTITIES_BATCH_37).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_37)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_37)).toHaveLength(6);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_37) {
      const content = BRAND_CONTENT_BATCH_37[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_37[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_37[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_37[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-37");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_37)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 38 with full public content and preserves blank unverified logos", () => {
    expect(BRAND_IDENTITIES_BATCH_38).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_38)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_38)).toHaveLength(7);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_38) {
      const content = BRAND_CONTENT_BATCH_38[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_38[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_38[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_38[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-38");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_38)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("wires batch 39 with full public content and preserves blank unverified logos", () => {
    expect(BRAND_IDENTITIES_BATCH_39).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_39)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_39)).toHaveLength(2);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_39) {
      const content = BRAND_CONTENT_BATCH_39[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_39[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_39[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_39[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-39");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_39)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });

  it("keeps batch 12 content and logo assets in separate contracts", () => {
    expect(Object.keys(BRAND_LOGOS_BATCH_12)).toEqual(Object.keys(BRAND_CONTENT_BATCH_12));
    for (const [slug, content] of Object.entries(BRAND_CONTENT_BATCH_12)) {
      expect(Object.hasOwn(content, "logoUrl")).toBe(false);
      expect(BRAND_LOGOS_BATCH_12[slug]).toMatch(/^https:\/\//);
    }
  });

  it("keeps batch 13 content and logo assets in separate contracts", () => {
    expect(Object.keys(BRAND_LOGOS_BATCH_13)).toEqual(Object.keys(BRAND_CONTENT_BATCH_13));
    for (const [slug, content] of Object.entries(BRAND_CONTENT_BATCH_13)) {
      expect(Object.hasOwn(content, "logoUrl")).toBe(false);
      expect(BRAND_LOGOS_BATCH_13[slug]).toMatch(/^https:\/\//);
    }
  });

  it("keeps batch 14 content and logo assets in separate contracts", () => {
    expect(Object.keys(BRAND_LOGOS_BATCH_14)).toEqual(Object.keys(BRAND_CONTENT_BATCH_14));
    for (const [slug, content] of Object.entries(BRAND_CONTENT_BATCH_14)) {
      expect(Object.hasOwn(content, "logoUrl")).toBe(false);
      expect(BRAND_LOGOS_BATCH_14[slug]).toMatch(/^https:\/\//);
    }
  });

  it("keeps batch 15 content and logo assets in separate contracts", () => {
    expect(Object.keys(BRAND_LOGOS_BATCH_15)).toEqual(Object.keys(BRAND_CONTENT_BATCH_15));
    for (const [slug, content] of Object.entries(BRAND_CONTENT_BATCH_15)) {
      expect(Object.hasOwn(content, "logoUrl")).toBe(false);
      expect(BRAND_LOGOS_BATCH_15[slug]).toMatch(/^https:\/\//);
    }
  });

  it("keeps batch 16 content and logo assets in separate contracts", () => {
    expect(Object.keys(BRAND_LOGOS_BATCH_16)).toEqual(Object.keys(BRAND_CONTENT_BATCH_16));
    for (const [slug, content] of Object.entries(BRAND_CONTENT_BATCH_16)) {
      expect(Object.hasOwn(content, "logoUrl")).toBe(false);
      expect(BRAND_LOGOS_BATCH_16[slug]).toMatch(/^https:\/\//);
    }
  });

  it("keeps batch 12 free from repeated catalogue formulas", () => {
    const formula = /suits? drinkers|strong choice|useful (?:step|introduction)|practical route|gives drinkers|made for (?:gin|wine|whisky|beer|rum|tequila) drinkers|clear route/i;
    const servingHeadings = Object.values(BRAND_CONTENT_BATCH_12).flatMap((content) => content.howToEnjoy.map((note) => note.subheading));

    expect(new Set(servingHeadings).size).toBe(servingHeadings.length);
    for (const content of Object.values(BRAND_CONTENT_BATCH_12)) {
      expect(JSON.stringify(content)).not.toMatch(formula);
    }
  });

  it("keeps batch 13 free from repeated catalogue formulas", () => {
    const formula = /suits? drinkers|strong choice|useful (?:step|introduction)|practical route|gives drinkers|made for (?:gin|wine|whisky|beer|rum|tequila) drinkers|clear route/i;
    const servingHeadings = Object.values(BRAND_CONTENT_BATCH_13).flatMap((content) => content.howToEnjoy.map((note) => note.subheading));

    expect(new Set(servingHeadings).size).toBe(servingHeadings.length);
    for (const content of Object.values(BRAND_CONTENT_BATCH_13)) {
      expect(JSON.stringify(content)).not.toMatch(formula);
    }
  });

  it("keeps batch 14 free from repeated catalogue formulas", () => {
    const formula = /suits? drinkers|strong choice|useful (?:step|introduction)|practical route|gives drinkers|made for (?:gin|wine|whisky|beer|rum|tequila) drinkers|clear route/i;
    const servingHeadings = Object.values(BRAND_CONTENT_BATCH_14).flatMap((content) => content.howToEnjoy.map((note) => note.subheading));

    expect(new Set(servingHeadings).size).toBe(servingHeadings.length);
    for (const content of Object.values(BRAND_CONTENT_BATCH_14)) {
      expect(JSON.stringify(content)).not.toMatch(formula);
    }
  });

  it("keeps batch 15 free from repeated catalogue formulas", () => {
    const formula = /suits? drinkers|strong choice|useful (?:step|introduction)|practical route|gives drinkers|made for (?:gin|wine|whisky|beer|rum|tequila) drinkers|clear route/i;
    const servingHeadings = Object.values(BRAND_CONTENT_BATCH_15).flatMap((content) => content.howToEnjoy.map((note) => note.subheading));

    expect(new Set(servingHeadings).size).toBe(servingHeadings.length);
    for (const content of Object.values(BRAND_CONTENT_BATCH_15)) {
      expect(JSON.stringify(content)).not.toMatch(formula);
    }
  });

  it("keeps batch 16 free from repeated catalogue formulas", () => {
    const formula = /suits? drinkers|strong choice|useful (?:step|introduction)|practical route|gives drinkers|made for (?:gin|wine|whisky|beer|rum|tequila) drinkers|clear route/i;
    const servingHeadings = Object.values(BRAND_CONTENT_BATCH_16).flatMap((content) => content.howToEnjoy.map((note) => note.subheading));

    expect(new Set(servingHeadings).size).toBe(servingHeadings.length);
    for (const content of Object.values(BRAND_CONTENT_BATCH_16)) {
      expect(JSON.stringify(content)).not.toMatch(formula);
    }
  });
  it("wires batch 40 without replacing existing brand logos", () => {
    expect(BRAND_IDENTITIES_BATCH_40).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_40)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_40)).toHaveLength(1);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_40) {
      const content = BRAND_CONTENT_BATCH_40[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_40[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_40[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_40[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-40");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_40)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
  it("wires batch 41 with complete public content and no guessed logos", () => {
    expect(BRAND_IDENTITIES_BATCH_41).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_41)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_41)).toHaveLength(0);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_41) {
      const content = BRAND_CONTENT_BATCH_41[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_41[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBeNull();
      expect(data.content_version).toBe("brand-public-ui-v3-batch-41");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_41)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
  it("wires batch 42 with complete content and leaves unverified logo slots empty", () => {
    expect(BRAND_IDENTITIES_BATCH_42).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_42)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_42)).toHaveLength(3);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_42) {
      const content = BRAND_CONTENT_BATCH_42[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_42[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_42[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_42[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-42");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_42)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
  it("wires batch 43 without guessing missing logos", () => {
    expect(BRAND_IDENTITIES_BATCH_43).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_43)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_43)).toHaveLength(3);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_43) {
      const content = BRAND_CONTENT_BATCH_43[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_43[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_43[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_43[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-43");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_43)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
  it("wires batch 44 without guessing missing logos", () => {
    expect(BRAND_IDENTITIES_BATCH_44).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_44)).toHaveLength(30);
    for (const [slug, , , , id] of BRAND_IDENTITIES_BATCH_44) {
      const content = BRAND_CONTENT_BATCH_44[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(BRAND_SOURCES_BATCH_44[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_44[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_44[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-44");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_44)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
  it("wires batch 45 to exact catalogue rows without replacing stored logos", () => {
    expect(BRAND_IDENTITIES_BATCH_45).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_45)).toHaveLength(30);
    for (const [slug, name, , , id] of BRAND_IDENTITIES_BATCH_45) {
      const content = BRAND_CONTENT_BATCH_45[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(data.brand_name).toBe(name);
      expect(BRAND_SOURCES_BATCH_45[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_45[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_45[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-45");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_45)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
  it("wires batch 46 with complete copy and only checked logo candidates", () => {
    expect(BRAND_IDENTITIES_BATCH_46).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_46)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_46).sort()).toEqual(["invincible", "pursue"]);
    for (const [slug, name, , , id] of BRAND_IDENTITIES_BATCH_46) {
      const content = BRAND_CONTENT_BATCH_46[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(data.brand_name).toBe(name);
      expect(BRAND_SOURCES_BATCH_46[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_46[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_46[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-46");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_46)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
  it("wires batch 47 with complete consumer copy and three verified logos", () => {
    expect(BRAND_IDENTITIES_BATCH_47).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_47)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_47).sort()).toEqual(["ayakiku", "strelley-farm", "terry-sent-me"]);
    for (const [slug, name, , , id] of BRAND_IDENTITIES_BATCH_47) {
      const content = BRAND_CONTENT_BATCH_47[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(data.brand_name).toBe(name);
      expect(BRAND_SOURCES_BATCH_47[slug].length).toBeGreaterThan(0);
      expect(Object.keys(content).sort()).toEqual(["description", "story", "tastingNotes", "howToEnjoy", "pairingIdeas", "whyChoose", "faqs", "finalVerdict", "metaTitle", "metaDescription"].sort());
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_47[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_47[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-47");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_47)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
  it("wires batch 48 with 30 researched guides and no guessed logos", () => {
    expect(BRAND_IDENTITIES_BATCH_48).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_48)).toHaveLength(30);
    expect(Object.keys(BRAND_LOGOS_BATCH_48)).toEqual(["deluze"]);
    for (const [slug, name, , , id] of BRAND_IDENTITIES_BATCH_48) {
      const content = BRAND_CONTENT_BATCH_48[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`lc-brand-${id}`);
      expect(data.brand_name).toBe(name);
      expect(BRAND_SOURCES_BATCH_48[slug].length).toBeGreaterThan(0);
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.pairingIdeas[0]?.items.length).toBeGreaterThanOrEqual(3);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toBe(BRAND_LOGOS_BATCH_48[slug] ?? null);
      expect(data.logo_identity_verified).toBe(Boolean(BRAND_LOGOS_BATCH_48[slug]));
      expect(data.content_version).toBe("brand-public-ui-v3-batch-48");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_48)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
  it("wires batch 49 without replacing stored logos", () => {
    expect(BRAND_IDENTITIES_BATCH_49).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_49)).toHaveLength(30);
    expect(BRAND_LOGOS_BATCH_49).toEqual({});
    for (const [slug] of BRAND_IDENTITIES_BATCH_49) {
      const content = BRAND_CONTENT_BATCH_49[slug];
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      expect(definition.recordId).toBe(`brand-expansion-${slug}`);
      expect(BRAND_SOURCES_BATCH_49[slug].length).toBeGreaterThan(0);
      expect(content.tastingNotes).toHaveLength(2);
      expect(content.howToEnjoy).toHaveLength(2);
      expect(content.faqs).toHaveLength(2);
      expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      expect(data.description).toBe(content.description);
      expect(data.logo_url).toMatch(/^https:\/\//);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-49");
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_49)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
  it("wires 30 revised batch 50 guides without proposing logo replacements", () => {
    expect(BRAND_IDENTITIES_BATCH_50).toHaveLength(30);
    expect(Object.keys(BRAND_CONTENT_BATCH_50)).toHaveLength(30);
    expect(BRAND_LOGOS_BATCH_50).toEqual({});
    for (const [slug] of BRAND_IDENTITIES_BATCH_50) {
      const definition = BRAND_EXPANSION.find((item) => item.slug === slug)!;
      const data = buildBrandExpansionData(definition);
      const content = BRAND_CONTENT_BATCH_50[slug];
      expect(BRAND_SOURCES_BATCH_50[slug].length).toBeGreaterThan(0);
      expect(data.description).toBe(content.description);
      expect(data.content_version).toBe("brand-public-ui-v3-batch-50");
      expect(data.logo_url).toMatch(/^https:\/\//);
    }
    expect(JSON.stringify(BRAND_CONTENT_BATCH_50)).not.toMatch(/editorial guardrail|database|the producer does not|no tasting notes found|read the individual label|symphony|testament|delve|nestled|embark|elevate your senses|dance on the palate|rich tapestry|whether you're/i);
  });
});
