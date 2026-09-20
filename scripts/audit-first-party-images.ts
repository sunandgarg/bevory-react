import "dotenv/config";

const appUrl = process.env.APP_URL?.trim();
if (!appUrl) throw new Error("APP_URL is required for the first-party image audit");
const runtimeServerRoot = "../dist-server/server";
const [{ prisma }, { validateFirstPartyImages }] = await Promise.all([
  import(`${runtimeServerRoot}/db.js`),
  import(`${runtimeServerRoot}/data.js`),
]);

try {
  const records = await prisma.contentRecord.findMany({
    orderBy: [{ tableName: "asc" }, { recordId: "asc" }],
    select: { tableName: true, recordId: true, data: true },
  });
  const failures: Array<{ tableName: string; recordId: string; error: string }> = [];
  for (const record of records) {
    try {
      validateFirstPartyImages(record.data, appUrl);
    } catch (error) {
      failures.push({
        tableName: record.tableName,
        recordId: record.recordId,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
  console.log(JSON.stringify({ records: records.length, failures: failures.length }, null, 2));
  if (failures.length) {
    console.error(JSON.stringify({ failures: failures.slice(0, 100) }, null, 2));
    throw new Error(`${failures.length} records contain non-first-party rendered image references`);
  }
} finally {
  await prisma.$disconnect();
}
