import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { applyBrandExpansion } from "../src/lib/brandExpansionDb.js";

const prisma = new PrismaClient();

try {
  const result = await applyBrandExpansion(prisma);
  console.log(JSON.stringify(result, null, 2));
} finally {
  await prisma.$disconnect();
}
