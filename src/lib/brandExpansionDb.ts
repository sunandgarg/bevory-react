import { Prisma, PrismaClient } from "@prisma/client";
import { BRAND_EXPANSION, buildBrandExpansionData } from "./brandExpansion.js";

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

    for (const field of contentFields) {
      if (!hasValue(previous[field])) next[field] = built[field];
    }
    if (!hasValue(previous.logo_emoji)) next.logo_emoji = built.logo_emoji;
    if (!hasValue(previous.is_active)) next.is_active = true;
    if (!hasValue(previous.show_in_spotlight)) next.show_in_spotlight = false;
    if (!hasValue(previous.order_index)) next.order_index = 0;
    if (!hasValue(previous.logo_asset_status)) next.logo_asset_status = built.logo_asset_status;
    if (!hasValue(previous.image_license_status)) next.image_license_status = built.image_license_status;
    if (!hasValue(previous.logo_identity_verified)) next.logo_identity_verified = false;
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
