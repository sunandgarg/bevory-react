import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const generatedColumns: Record<string, string> = {
  filter_slug: "VARCHAR(191) GENERATED ALWAYS AS (NULLIF(JSON_UNQUOTE(JSON_EXTRACT(data, '$.slug')), 'null')) VIRTUAL",
  filter_city_id: "VARCHAR(191) GENERATED ALWAYS AS (NULLIF(JSON_UNQUOTE(JSON_EXTRACT(data, '$.city_id')), 'null')) VIRTUAL",
  filter_product_id: "VARCHAR(191) GENERATED ALWAYS AS (NULLIF(JSON_UNQUOTE(JSON_EXTRACT(data, '$.product_id')), 'null')) VIRTUAL",
  filter_price_available: "TINYINT GENERATED ALWAYS AS (CASE JSON_UNQUOTE(JSON_EXTRACT(data, '$.price_available')) WHEN 'true' THEN 1 WHEN 'false' THEN 0 ELSE NULL END) VIRTUAL",
  filter_requires_review: "TINYINT GENERATED ALWAYS AS (CASE JSON_UNQUOTE(JSON_EXTRACT(data, '$.requires_review')) WHEN 'true' THEN 1 WHEN 'false' THEN 0 ELSE NULL END) VIRTUAL",
};

const indexes: Record<string, string> = {
  idx_cr_table_slug: "(table_name, filter_slug)",
  idx_cr_table_city_availability: "(table_name, filter_city_id, filter_price_available, filter_requires_review)",
  idx_cr_table_product_city: "(table_name, filter_product_id, filter_city_id)",
};

const rows = async <T>(sql: string) => prisma.$queryRawUnsafe<T[]>(sql);

try {
  const existingColumns = new Set((await rows<{ COLUMN_NAME: string }>(
    "SELECT COLUMN_NAME FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'content_records'",
  )).map(({ COLUMN_NAME }) => COLUMN_NAME));
  const missingColumns = Object.entries(generatedColumns).filter(([name]) => !existingColumns.has(name));
  if (missingColumns.length) {
    const definitions = missingColumns.map(([name, definition]) => `ADD COLUMN \`${name}\` ${definition}`).join(", ");
    await prisma.$executeRawUnsafe(`ALTER TABLE content_records ${definitions}`);
    console.log(`Added ${missingColumns.length} generated filter columns.`);
  }

  const existingIndexes = new Set((await rows<{ INDEX_NAME: string }>(
    "SELECT DISTINCT INDEX_NAME FROM information_schema.STATISTICS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'content_records'",
  )).map(({ INDEX_NAME }) => INDEX_NAME));
  for (const [name, definition] of Object.entries(indexes)) {
    if (existingIndexes.has(name)) continue;
    await prisma.$executeRawUnsafe(`CREATE INDEX \`${name}\` ON content_records ${definition}`);
    console.log(`Created ${name}.`);
  }

  const analyzed = await rows<Record<string, unknown>>("ANALYZE TABLE content_records");
  console.log("Analyzed content_records.", analyzed);
} finally {
  await prisma.$disconnect();
}
