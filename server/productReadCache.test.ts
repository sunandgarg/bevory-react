import { afterEach, describe, expect, it, vi } from "vitest";
import { prisma } from "./db.js";
import { invalidateProductReadCache, readTable } from "./data.js";

afterEach(() => {
  vi.restoreAllMocks();
  invalidateProductReadCache();
});

describe("product reads", () => {
  it("shares concurrent reads and reloads after invalidation", async () => {
    const read = vi.spyOn(prisma.contentRecord, "findMany").mockResolvedValue([
      { data: { id: "a", name: "Test product", category_id: "spirits" } },
    ] as never);

    const [first, second] = await Promise.all([
      readTable("products", [{ column: "category_id", operator: "eq", value: "spirits" }]),
      readTable("products", [{ column: "category_id", operator: "eq", value: "wine" }]),
    ]);
    expect(read).toHaveBeenCalledTimes(1);
    expect(first).toEqual(second);

    invalidateProductReadCache();
    await readTable("products");
    expect(read).toHaveBeenCalledTimes(2);
  });

  it("retries after a failed read", async () => {
    const read = vi.spyOn(prisma.contentRecord, "findMany")
      .mockRejectedValueOnce(new Error("Database busy"))
      .mockResolvedValueOnce([{ data: { id: "a" } }] as never);

    await expect(readTable("products")).rejects.toThrow("Database busy");
    await expect(readTable("products")).resolves.toEqual([{ id: "a" }]);
    expect(read).toHaveBeenCalledTimes(2);
  });
});
