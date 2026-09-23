import "dotenv/config";
import { Prisma, PrismaClient } from "@prisma/client";

type JsonObject = Record<string, unknown>;

const prisma = new PrismaClient();
const apply = process.argv.includes("--apply");
const now = new Date().toISOString();
const REFERENCE_TABLES = ["products", "sub_categories", "party_recommendations", "preferred_brands"];

const asObject = (value: Prisma.JsonValue): JsonObject => (
  value && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : {}
);

try {
  const categories = await prisma.contentRecord.findMany({
    where: { tableName: "categories" },
    orderBy: { recordId: "asc" },
  });
  const canonical = categories.find((record) => asObject(record.data).slug === "beers");
  const legacy = categories.find((record) => asObject(record.data).slug === "beer");
  if (!canonical) throw new Error("Canonical beers category was not found");

  const canonicalData = asObject(canonical.data);
  const updates: Array<{ key: string; data: JsonObject }> = [{
    key: canonical.key,
    data: {
      ...canonicalData,
      name: "Beer",
      slug: "beers",
      is_active: true,
      taxonomy_normalized_at: now,
      updated_at: now,
    },
  }];

  let referencesMoved = 0;
  if (legacy) {
    const legacyData = asObject(legacy.data);
    updates.push({
      key: legacy.key,
      data: {
        ...legacyData,
        is_active: false,
        canonical_category_id: canonical.recordId,
        canonical_category_slug: "beers",
        replaced_by_imported_taxonomy: true,
        taxonomy_normalized_at: now,
        updated_at: now,
      },
    });

    const references = await prisma.contentRecord.findMany({
      where: { tableName: { in: REFERENCE_TABLES } },
      orderBy: [{ tableName: "asc" }, { recordId: "asc" }],
    });
    for (const record of references) {
      const data = asObject(record.data);
      if (String(data.category_id ?? "") !== legacy.recordId) continue;
      updates.push({
        key: record.key,
        data: { ...data, category_id: canonical.recordId, taxonomy_normalized_at: now, updated_at: now },
      });
      referencesMoved += 1;
    }
  }

  console.log(JSON.stringify({
    mode: apply ? "apply" : "dry-run",
    canonicalCategoryId: canonical.recordId,
    canonicalNameBefore: canonicalData.name,
    canonicalNameAfter: "Beer",
    legacyCategoryId: legacy?.recordId ?? null,
    legacyCategoryRetainedInactive: Boolean(legacy),
    referencesMoved,
    recordsPlanned: updates.length,
  }, null, 2));

  if (apply) {
    await prisma.$transaction(updates.map((update) => prisma.contentRecord.update({
      where: { key: update.key },
      data: { data: update.data as Prisma.InputJsonObject },
    })));
  }
} finally {
  await prisma.$disconnect();
}
