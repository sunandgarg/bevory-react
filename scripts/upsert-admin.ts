import "dotenv/config";
import { randomUUID } from "node:crypto";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD;
const fullName = process.env.ADMIN_FULL_NAME?.trim() || "BevOry Administrator";

if (!email) throw new Error("ADMIN_EMAIL is required");
if (!password) throw new Error("ADMIN_PASSWORD is required");
if (password.length < 8) throw new Error("ADMIN_PASSWORD must be at least 8 characters");

const now = new Date().toISOString();
const existing = await prisma.user.findUnique({ where: { email } });
const userId = existing?.id ?? randomUUID();
const passwordHash = await bcrypt.hash(password, 12);

try {
  await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      metadata: { ...(existing?.metadata && typeof existing.metadata === "object" ? existing.metadata : {}), full_name: fullName },
    },
    create: {
      id: userId,
      email,
      passwordHash,
      metadata: { full_name: fullName },
    },
  });

  await prisma.contentRecord.upsert({
    where: { key: `profiles:${userId}` },
    update: {
      data: {
        id: userId,
        email,
        full_name: fullName,
        updated_at: now,
      },
    },
    create: {
      key: `profiles:${userId}`,
      tableName: "profiles",
      recordId: userId,
      data: {
        id: userId,
        email,
        full_name: fullName,
        created_at: now,
        updated_at: now,
      },
    },
  });

  await prisma.contentRecord.upsert({
    where: { key: `user_roles:${userId}-admin` },
    update: {
      data: {
        id: `${userId}-admin`,
        user_id: userId,
        role: "admin",
        updated_at: now,
      },
    },
    create: {
      key: `user_roles:${userId}-admin`,
      tableName: "user_roles",
      recordId: `${userId}-admin`,
      data: {
        id: `${userId}-admin`,
        user_id: userId,
        role: "admin",
        created_at: now,
        updated_at: now,
      },
    },
  });

  console.log(JSON.stringify({ email, role: "admin", status: "ready" }));
} finally {
  await prisma.$disconnect();
}
