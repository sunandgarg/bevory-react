import { Prisma, PrismaClient } from "@prisma/client";
import { isDeepStrictEqual } from "node:util";
import { BRAND_EXPANSION, buildBrandExpansionData } from "./brandExpansion.js";
import { BRAND_CONTENT_BATCH_01 } from "./brandContentBatch01.js";
import { BRAND_CONTENT_BATCH_02 } from "./brandContentBatch02.js";
import { BRAND_CONTENT_BATCH_03 } from "./brandContentBatch03.js";
import { BRAND_CONTENT_BATCH_04 } from "./brandContentBatch04.js";
import { BRAND_CONTENT_BATCH_05 } from "./brandContentBatch05.js";
import { BRAND_CONTENT_BATCH_06 } from "./brandContentBatch06.js";
import { BRAND_CONTENT_BATCH_07 } from "./brandContentBatch07.js";
import { BRAND_CONTENT_BATCH_08 } from "./brandContentBatch08.js";
import { BRAND_CONTENT_BATCH_09 } from "./brandContentBatch09.js";
import { BRAND_CONTENT_BATCH_10 } from "./brandContentBatch10.js";
import { BRAND_CONTENT_BATCH_11 } from "./brandContentBatch11.js";
import { BRAND_CONTENT_BATCH_12 } from "./brandContentBatch12.js";
import { BRAND_CONTENT_BATCH_13 } from "./brandContentBatch13.js";
import { BRAND_CONTENT_BATCH_14 } from "./brandContentBatch14.js";
import { BRAND_CONTENT_BATCH_15 } from "./brandContentBatch15.js";
import { BRAND_CONTENT_BATCH_16 } from "./brandContentBatch16.js";
import { BRAND_CONTENT_BATCH_17 } from "./brandContentBatch17.js";
import { BRAND_CONTENT_BATCH_18 } from "./brandContentBatch18.js";
import { BRAND_CONTENT_BATCH_19 } from "./brandContentBatch19.js";
import { BRAND_CONTENT_BATCH_20 } from "./brandContentBatch20.js";
import { BRAND_CONTENT_BATCH_21 } from "./brandContentBatch21.js";
import { BRAND_CONTENT_BATCH_22 } from "./brandContentBatch22.js";
import { BRAND_CONTENT_BATCH_23 } from "./brandContentBatch23.js";
import { BRAND_CONTENT_BATCH_24 } from "./brandContentBatch24.js";
import { BRAND_CONTENT_BATCH_25 } from "./brandContentBatch25.js";
import { BRAND_CONTENT_BATCH_26 } from "./brandContentBatch26.js";
import { BRAND_CONTENT_BATCH_27 } from "./brandContentBatch27.js";
import { BRAND_CONTENT_BATCH_28 } from "./brandContentBatch28.js";
import { BRAND_CONTENT_BATCH_29 } from "./brandContentBatch29.js";
import { BRAND_CONTENT_BATCH_30 } from "./brandContentBatch30.js";
import { BRAND_CONTENT_BATCH_31 } from "./brandContentBatch31.js";
import { BRAND_CONTENT_BATCH_32 } from "./brandContentBatch32.js";
import { BRAND_CONTENT_BATCH_33 } from "./brandContentBatch33.js";
import { BRAND_CONTENT_BATCH_34 } from "./brandContentBatch34.js";
import { BRAND_CONTENT_BATCH_35 } from "./brandContentBatch35.js";
import { BRAND_CONTENT_BATCH_36 } from "./brandContentBatch36.js";
import { BRAND_CONTENT_BATCH_37 } from "./brandContentBatch37.js";
import { BRAND_CONTENT_BATCH_38 } from "./brandContentBatch38.js";
import { BRAND_CONTENT_BATCH_39 } from "./brandContentBatch39.js";
import { BRAND_CONTENT_BATCH_40 } from "./brandContentBatch40.js";
import { BRAND_CONTENT_BATCH_41 } from "./brandContentBatch41.js";
import { BRAND_CONTENT_BATCH_42 } from "./brandContentBatch42.js";
import { BRAND_CONTENT_BATCH_43 } from "./brandContentBatch43.js";
import { BRAND_CONTENT_BATCH_44 } from "./brandContentBatch44.js";
import { BRAND_CONTENT_BATCH_45 } from "./brandContentBatch45.js";
import { BRAND_CONTENT_BATCH_46 } from "./brandContentBatch46.js";
import { BRAND_CONTENT_BATCH_47 } from "./brandContentBatch47.js";
import { BRAND_CONTENT_BATCH_48 } from "./brandContentBatch48.js";
import { BRAND_CONTENT_BATCH_49 } from "./brandContentBatch49.js";
import { BRAND_CONTENT_BATCH_50 } from "./brandContentBatch50.js";

type JsonObject = Prisma.JsonObject;

const recordData = (value: Prisma.JsonValue | undefined): JsonObject => (
  value && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : {}
);

const slugify = (value: unknown) => String(value ?? "")
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const sameSlug = (left: unknown, right: string) => slugify(left) === slugify(right);

const hasValue = (value: unknown) => {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "string") return value.trim().length > 0;
  return value !== null && value !== undefined;
};

const contentFields = [
  "description",
  "story",
  "tasting_notes",
  "how_to_enjoy",
  "pairing_ideas",
  "why_choose",
  "faqs",
  "final_verdict",
  "meta_title",
  "meta_description",
  "country",
  "country_flag",
  "country_flag_url",
  "link_url",
  "official_source_page",
  "content_version",
  "content_basis",
] as const;

export async function applyBrandExpansion(prisma: PrismaClient, now = new Date().toISOString()) {
  const existingBrands = await prisma.contentRecord.findMany({
    where: { tableName: "brand_spotlights" },
  });
  const createdIds: string[] = [];
  const updatedIds: string[] = [];
  const unchangedIds: string[] = [];

  for (const definition of BRAND_EXPANSION) {
    const existing = existingBrands.find((row) => row.recordId === definition.recordId) ?? existingBrands.find(({ data }) => {
      const value = recordData(data);
      return sameSlug(value.slug, definition.slug) || sameSlug(value.brand_name, definition.brandName);
    });
    const previous = recordData(existing?.data);
    const built = buildBrandExpansionData(definition, now) as JsonObject;
    const next: JsonObject = { ...built, ...previous };
    const refreshPublicContent = Boolean(
      BRAND_CONTENT_BATCH_01[definition.slug]
      || BRAND_CONTENT_BATCH_02[definition.slug]
      || BRAND_CONTENT_BATCH_03[definition.slug]
      || BRAND_CONTENT_BATCH_04[definition.slug]
      || BRAND_CONTENT_BATCH_05[definition.slug]
      || BRAND_CONTENT_BATCH_06[definition.slug]
      || BRAND_CONTENT_BATCH_07[definition.slug]
      || BRAND_CONTENT_BATCH_08[definition.slug]
      || BRAND_CONTENT_BATCH_09[definition.slug]
      || BRAND_CONTENT_BATCH_10[definition.slug]
      || BRAND_CONTENT_BATCH_11[definition.slug]
      || BRAND_CONTENT_BATCH_12[definition.slug]
      || BRAND_CONTENT_BATCH_13[definition.slug]
      || BRAND_CONTENT_BATCH_14[definition.slug]
      || BRAND_CONTENT_BATCH_15[definition.slug]
      || BRAND_CONTENT_BATCH_16[definition.slug]
      || BRAND_CONTENT_BATCH_17[definition.slug]
      || BRAND_CONTENT_BATCH_18[definition.slug]
      || BRAND_CONTENT_BATCH_19[definition.slug]
      || BRAND_CONTENT_BATCH_20[definition.slug]
      || BRAND_CONTENT_BATCH_21[definition.slug]
      || BRAND_CONTENT_BATCH_22[definition.slug]
      || BRAND_CONTENT_BATCH_23[definition.slug]
      || BRAND_CONTENT_BATCH_24[definition.slug]
      || BRAND_CONTENT_BATCH_25[definition.slug]
      || BRAND_CONTENT_BATCH_26[definition.slug]
      || BRAND_CONTENT_BATCH_27[definition.slug]
      || BRAND_CONTENT_BATCH_28[definition.slug]
      || BRAND_CONTENT_BATCH_29[definition.slug]
      || BRAND_CONTENT_BATCH_30[definition.slug]
      || BRAND_CONTENT_BATCH_31[definition.slug]
      || BRAND_CONTENT_BATCH_32[definition.slug]
      || BRAND_CONTENT_BATCH_33[definition.slug]
      || BRAND_CONTENT_BATCH_34[definition.slug]
      || BRAND_CONTENT_BATCH_35[definition.slug]
      || BRAND_CONTENT_BATCH_36[definition.slug]
      || BRAND_CONTENT_BATCH_37[definition.slug]
      || BRAND_CONTENT_BATCH_38[definition.slug]
      || BRAND_CONTENT_BATCH_39[definition.slug]
      || BRAND_CONTENT_BATCH_40[definition.slug]
      || BRAND_CONTENT_BATCH_41[definition.slug]
      || BRAND_CONTENT_BATCH_42[definition.slug]
      || BRAND_CONTENT_BATCH_43[definition.slug]
      || BRAND_CONTENT_BATCH_44[definition.slug]
      || BRAND_CONTENT_BATCH_45[definition.slug]
      || BRAND_CONTENT_BATCH_46[definition.slug]
      || BRAND_CONTENT_BATCH_47[definition.slug]
      || BRAND_CONTENT_BATCH_48[definition.slug]
      || BRAND_CONTENT_BATCH_49[definition.slug]
      || BRAND_CONTENT_BATCH_50[definition.slug],
    );

    for (const field of contentFields) {
      if (refreshPublicContent || !hasValue(previous[field])) next[field] = built[field];
    }
    if (BRAND_CONTENT_BATCH_41[definition.slug] || BRAND_CONTENT_BATCH_42[definition.slug] || BRAND_CONTENT_BATCH_43[definition.slug] || BRAND_CONTENT_BATCH_44[definition.slug] || BRAND_CONTENT_BATCH_45[definition.slug] || BRAND_CONTENT_BATCH_46[definition.slug] || BRAND_CONTENT_BATCH_47[definition.slug] || BRAND_CONTENT_BATCH_48[definition.slug] || BRAND_CONTENT_BATCH_49[definition.slug] || BRAND_CONTENT_BATCH_50[definition.slug]) next.brand_name = built.brand_name;
    if (refreshPublicContent || !hasValue(previous.logo_emoji)) next.logo_emoji = built.logo_emoji;
    // Existing image identity wins; an empty slot accepts only a checked asset.
    const refreshLogo = !hasValue(previous.logo_url) && built.logo_identity_verified === true && hasValue(built.logo_url);
    if (refreshLogo) next.logo_url = built.logo_url;
    else if (!hasValue(previous.logo_url)) next.logo_url = null;
    if (refreshLogo) {
      next.logo_source_tier = built.logo_source_tier;
      next.logo_source_page = built.logo_source_page;
      next.logo_asset_status = built.logo_asset_status;
      next.logo_identity_verified = built.logo_identity_verified;
      next.logo_verified_at = built.logo_verified_at;
    } else if (hasValue(previous.logo_url)) {
      next.logo_source_tier = previous.logo_source_tier ?? "existing";
      next.logo_source_page = previous.logo_source_page ?? previous.logo_url;
      next.logo_asset_status = previous.logo_asset_status ?? "existing_asset_not_reverified";
      next.logo_identity_verified = previous.logo_identity_verified ?? (previous.logo_url === built.logo_url && built.logo_identity_verified === true);
      next.logo_verified_at = previous.logo_verified_at ?? null;
    } else {
      next.logo_source_tier = null;
      next.logo_source_page = null;
      next.logo_asset_status = "missing_verified_asset";
      next.logo_identity_verified = false;
      next.logo_verified_at = null;
    }
    if (!hasValue(previous.is_active)) next.is_active = true;
    if (!hasValue(previous.show_in_spotlight)) next.show_in_spotlight = false;
    if (!hasValue(previous.order_index)) next.order_index = 0;
    if (!hasValue(previous.image_license_status)) next.image_license_status = built.image_license_status;
    const contentChanged = contentFields.some((field) => !isDeepStrictEqual(previous[field], next[field]));
    if (contentChanged || !hasValue(previous.content_updated_at)) next.content_updated_at = now;

    const recordId = existing?.recordId ?? definition.recordId;
    next.id = recordId;
    next.brand_name = refreshPublicContent ? definition.brandName : previous.brand_name ?? definition.brandName;
    next.slug = previous.slug ?? definition.slug;
    next.created_at = previous.created_at ?? now;
    next.updated_at = previous.updated_at ?? now;
    if (existing && isDeepStrictEqual(previous, next)) {
      unchangedIds.push(recordId);
      continue;
    }
    next.updated_at = now;

    await prisma.contentRecord.upsert({
      where: { key: `brand_spotlights:${recordId}` },
      update: { data: next, updatedAt: new Date(now) },
      create: {
        key: `brand_spotlights:${recordId}`,
        tableName: "brand_spotlights",
        recordId,
        data: next,
        updatedAt: new Date(now),
      },
    });

    if (existing) updatedIds.push(recordId);
    else createdIds.push(recordId);
  }

  return {
    requested: BRAND_EXPANSION.length,
    created: createdIds.length,
    updated: updatedIds.length,
    unchanged: unchangedIds.length,
    createdIds,
    updatedIds,
    unchangedIds,
  };
}
