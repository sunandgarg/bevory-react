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

describe("brand expansion editorial data", () => {
  it("contains the planned brands once with stable slugs", () => {
    expect(BRAND_EXPANSION).toHaveLength(118);
    expect(new Set(BRAND_EXPANSION.map((brand) => brand.slug)).size).toBe(BRAND_EXPANSION.length);
    expect(BRAND_EXPANSION.every((brand) => /^https:\/\//.test(brand.officialUrl))).toBe(true);
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
      expect(data.logo_url).toMatch(/^https:\/\//);
      expect(["verified_remote_asset", "livcheers_slug_asset_pending_verification"]).toContain(data.logo_asset_status);
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
        expect(data.content_version).toBe(version);
        expect(data.logo_url).toMatch(/^https:\/\//);
        expect(data.logo_identity_verified).toBe(verifiedLogo);
        expect(data.logo_asset_status).toBe(verifiedLogo ? "verified_remote_asset" : "livcheers_slug_asset_pending_verification");
      }
    }
  });

  it("keeps the latest batches free from filler and missing-data commentary", () => {
    const blocked = /symphony|testament|ultimate|nestled|delve|embark|elevate your senses|harmonious blend|perfect for any occasion|dance on the palate|rich tapestry|whether you(?:'|’)re|a brand can contain more than one style|start with the individual bottle|bevory does not fill missing technical facts|adults can compare like with like|availability is not assumed across india|read the individual label before buying|keep the exact record separate|check bevory for reviewed city-level prices|the producer does not publish|no tasting notes found in reviewed material|style label remains at whisky|does not publish|does not state|not provided|missing data|sources? suggest|according to/i;
    for (const batch of [BRAND_CONTENT_BATCH_08, BRAND_CONTENT_BATCH_09, BRAND_CONTENT_BATCH_10, BRAND_CONTENT_BATCH_11, BRAND_CONTENT_BATCH_12]) {
      const contentEntries = Object.values(batch);
      expect(new Set(contentEntries.map((content) => content.metaTitle)).size).toBe(contentEntries.length);
      expect(new Set(contentEntries.map((content) => content.metaDescription)).size).toBe(contentEntries.length);
      for (const content of contentEntries) {
        expect(JSON.stringify(content)).not.toMatch(blocked);
        if (batch === BRAND_CONTENT_BATCH_10 || batch === BRAND_CONTENT_BATCH_11 || batch === BRAND_CONTENT_BATCH_12) expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      }
    }
  });

  it("enforces the strict public contract for batches 11 and 12", () => {
    const sentenceCount = (value: string) => value.match(/[.!?](?:\s|$)/g)?.length ?? 0;
    for (const batch of [BRAND_CONTENT_BATCH_11, BRAND_CONTENT_BATCH_12]) {
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
        expect(content.pairingIdeas[0]?.items.length).toBeGreaterThanOrEqual(4);
        expect(sentenceCount(content.whyChoose)).toBe(1);
        expect(sentenceCount(content.finalVerdict)).toBe(1);
        expect(content.metaTitle.length).toBeLessThanOrEqual(60);
        expect(content.metaDescription.length).toBeLessThanOrEqual(155);
        expect(content.metaDescription).toMatch(/city prices on BevOry\.$/);
      }
    }
  });

  it("keeps batch 12 content and logo assets in separate contracts", () => {
    expect(Object.keys(BRAND_LOGOS_BATCH_12)).toEqual(Object.keys(BRAND_CONTENT_BATCH_12));
    for (const [slug, content] of Object.entries(BRAND_CONTENT_BATCH_12)) {
      expect(Object.hasOwn(content, "logoUrl")).toBe(false);
      expect(BRAND_LOGOS_BATCH_12[slug]).toMatch(/^https:\/\//);
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
});
