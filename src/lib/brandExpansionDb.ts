import { Prisma, PrismaClient } from "@prisma/client";
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

  for (const definition of BRAND_EXPANSION) {
    const existing = existingBrands.find(({ data }) => {
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
      || BRAND_CONTENT_BATCH_12[definition.slug],
    );

    for (const field of contentFields) {
      if (refreshPublicContent || !hasValue(previous[field])) next[field] = built[field];
    }
    if (refreshPublicContent || !hasValue(previous.logo_emoji)) next.logo_emoji = built.logo_emoji;
    if (refreshPublicContent || !hasValue(previous.logo_url)) next.logo_url = built.logo_url;
    if (refreshPublicContent) {
      next.logo_source_tier = built.logo_source_tier;
      next.logo_source_page = built.logo_source_page;
      next.logo_asset_status = built.logo_asset_status;
      next.logo_identity_verified = built.logo_identity_verified;
      next.logo_verified_at = built.logo_verified_at;
    }
    if (!hasValue(previous.is_active)) next.is_active = true;
    if (!hasValue(previous.show_in_spotlight)) next.show_in_spotlight = false;
    if (!hasValue(previous.order_index)) next.order_index = 0;
    if (!hasValue(previous.logo_asset_status)) next.logo_asset_status = built.logo_asset_status;
    if (!hasValue(previous.image_license_status)) next.image_license_status = built.image_license_status;
    if (!hasValue(previous.logo_identity_verified)) next.logo_identity_verified = built.logo_identity_verified;
    if (!hasValue(previous.logo_verified_at)) next.logo_verified_at = built.logo_verified_at;
    if (!hasValue(previous.content_updated_at)) next.content_updated_at = now;

    const recordId = existing?.recordId ?? definition.recordId;
    next.id = recordId;
    next.brand_name = previous.brand_name ?? definition.brandName;
    next.slug = previous.slug ?? definition.slug;
    next.created_at = previous.created_at ?? now;
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
    createdIds,
    updatedIds,
  };
}
