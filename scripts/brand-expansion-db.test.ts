import { describe, expect, it, vi } from "vitest";
import type { PrismaClient } from "@prisma/client";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { applyBrandExpansion } from "../src/lib/brandExpansionDb.js";

const oldDate = "2026-09-20T00:00:00.000Z";
const newDate = "2026-09-24T00:00:00.000Z";
const database = () => {
  const rows = BRAND_EXPANSION.map((definition) => ({ recordId: definition.recordId, data: buildBrandExpansionData(definition, oldDate) }));
  const upsert = vi.fn(async () => ({}));
  const prisma = { contentRecord: { findMany: vi.fn(async () => rows), upsert } } as unknown as PrismaClient;
  return { rows, upsert, prisma };
};

describe("brand editorial refresh", () => {
  it("refreshes batch 55 copy without replacing a stored logo", async () => {
    const { prisma, rows, upsert } = database();
    const stored = rows.find((item) => item.data.slug === "aberlour")!;
    const verified = rows.find((item) => item.data.slug === "3-kilos")!;
    const pending = rows.find((item) => item.data.slug === "appleton-estate")!;
    stored.data.logo_url = "https://bevory.in/media/aberlour-existing.webp";
    stored.data.description = "Old copy";
    verified.data.logo_url = null;
    pending.data.logo_url = null;
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    expect(updates.find((data) => data.slug === "aberlour")?.content_version).toBe("brand-public-ui-v3-batch-55");
    expect(updates.find((data) => data.slug === "aberlour")?.logo_url).toBe(stored.data.logo_url);
    expect(updates.find((data) => data.slug === "3-kilos")?.logo_url).toBe("https://3kilos.de/wp-content/uploads/2024/04/cropped-3-KILOS-VODKA-LOGO-PRIMARY-583x1024.png");
    expect(updates.find((data) => data.slug === "appleton-estate")).toBeUndefined();
  });
  it("refreshes batch 54 copy, preserves stored logos and fills only checked empty slots", async () => {
    const { prisma, rows, upsert } = database();
    const stored = rows.find((item) => item.data.slug === "remy-martin")!;
    const verified = rows.find((item) => item.data.slug === "cazulo")!;
    const pending = rows.find((item) => item.data.slug === "1800-tequila")!;
    stored.data.logo_url = "https://bevory.in/media/remy-existing.webp";
    stored.data.description = "Old copy";
    verified.data.logo_url = null;
    pending.data.logo_url = null;
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    expect(updates.find((data) => data.slug === "remy-martin")?.content_version).toBe("brand-public-ui-v3-batch-54");
    expect(updates.find((data) => data.slug === "remy-martin")?.logo_url).toBe(stored.data.logo_url);
    expect(updates.find((data) => data.slug === "cazulo")?.logo_url).toBe("https://cazulofeni.com/images/cazulo-logo.png");
    expect(updates.find((data) => data.slug === "1800-tequila")).toBeUndefined();
  });
  it("refreshes batch 53 copy while preserving a stored logo", async () => {
    const { prisma, rows, upsert } = database();
    const row = rows.find((item) => item.data.slug === "akashi")!;
    row.data.description = "Old public copy";
    row.data.logo_url = "https://bevory.in/media/akashi-existing.webp";
    await applyBrandExpansion(prisma, newDate);
    const updated = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data).find((data) => data.slug === "akashi");
    expect(updated?.content_version).toBe("brand-public-ui-v3-batch-53");
    expect(updated?.description).not.toBe("Old public copy");
    expect(updated?.logo_url).toBe(row.data.logo_url);
  });
  it("fills only visually verified missing batch 53 logos", async () => {
    const { prisma, rows, upsert } = database();
    const verified = rows.find((item) => item.data.slug === "gekkeikan")!;
    const unverified = rows.find((item) => item.data.slug === "nikka")!;
    verified.data.logo_url = null;
    unverified.data.logo_url = null;
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    expect(updates.find((data) => data.slug === "gekkeikan")?.logo_url).toBe("https://www.gekkeikan.com/lib/img/common/header/img_logo.svg");
    expect(updates.find((data) => data.slug === "nikka")).toBeUndefined();
  });
  it("refreshes batch 52 public fields without touching a stored logo", async () => {
    const { prisma, rows, upsert } = database();
    const row = rows.find((item) => item.data.slug === "penfolds")!;
    row.data.description = "Old public copy";
    row.data.logo_url = "https://bevory.in/media/penfolds-existing.webp";
    await applyBrandExpansion(prisma, newDate);
    const updated = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data).find((data) => data.slug === "penfolds");
    expect(updated?.content_version).toBe("brand-public-ui-v3-batch-52");
    expect(updated?.description).not.toBe("Old public copy");
    expect(updated?.logo_url).toBe(row.data.logo_url);
  });
  it("refreshes batch 51 copy and preserves a stored logo", async () => {
    const { prisma, rows, upsert } = database();
    const row = rows.find((item) => item.data.slug === "old-admiral")!;
    row.data.logo_url = "https://bevory.in/media/old-admiral-original.webp";
    row.data.description = "Old public copy";
    await applyBrandExpansion(prisma, newDate);
    const updated = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data).find((data) => data.slug === "old-admiral");
    expect(updated?.content_version).toBe("brand-public-ui-v3-batch-51");
    expect(updated?.description).not.toBe("Old public copy");
    expect(updated?.logo_url).toBe(row.data.logo_url);
  });

  it("repairs only the known broken Morpheus Blue logo URL", async () => {
    const { prisma, rows, upsert } = database();
    const row = rows.find((item) => item.data.slug === "morpheus-blue")!;
    row.data.logo_url = "https://static.livcheers.com/static/content/images/brand/morpheus-blue.webp";
    await applyBrandExpansion(prisma, newDate);
    const updated = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data).find((data) => data.slug === "morpheus-blue");
    expect(updated?.logo_url).toBe("https://static.livcheers.com/static/content/images/brand/morpheus.webp");
    row.data.logo_url = "https://bevory.in/media/morpheus-custom.webp";
    row.data.description = "Old public copy";
    upsert.mockClear();
    await applyBrandExpansion(prisma, newDate);
    const preserved = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data).find((data) => data.slug === "morpheus-blue");
    expect(preserved?.logo_url).toBe("https://bevory.in/media/morpheus-custom.webp");
  });
  it("replaces the broken Piccini slug image without replacing a custom logo", async () => {
    const { prisma, rows, upsert } = database();
    const row = rows.find((item) => item.data.slug === "piccini")!;
    row.data.logo_url = "https://static.livcheers.com/static/content/images/brand/piccini.webp";
    await applyBrandExpansion(prisma, newDate);
    const updated = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data).find((data) => data.slug === "piccini");
    expect(updated?.logo_url).toBe("https://www.winesellersltd.com/wp-content/uploads/2023/06/Piccini_logo.png");
    expect(updated?.logo_source_tier).toBe("verified_third_party");
    row.data.logo_url = "https://bevory.in/media/piccini-custom.webp";
    row.data.description = "Old public copy";
    upsert.mockClear();
    await applyBrandExpansion(prisma, newDate);
    const preserved = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data).find((data) => data.slug === "piccini");
    expect(preserved?.logo_url).toBe("https://bevory.in/media/piccini-custom.webp");
  });
  it("refreshes batch 50 copy without changing an older brand's stored logo", async () => {
    const { prisma, rows, upsert } = database();
    const sauza = rows.find((item) => item.data.slug === "sauza")!;
    sauza.data.logo_url = "https://bevory.in/media/sauza-existing.webp";
    sauza.data.logo_identity_verified = true;
    sauza.data.description = "Old public copy";
    await applyBrandExpansion(prisma, newDate);
    const call = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>)[0][0];
    expect(call.update.data.content_version).toBe("brand-public-ui-v3-batch-50");
    expect(call.update.data.logo_url).toBe(sauza.data.logo_url);
    expect(call.update.data.logo_identity_verified).toBe(true);
  });
  it("does not rewrite unchanged records or timestamps", async () => {
    const { prisma, upsert } = database();
    const result = await applyBrandExpansion(prisma, newDate);
    expect(result.unchanged).toBe(BRAND_EXPANSION.length);
    expect(upsert).not.toHaveBeenCalled();
  });

  it("updates revised public content, preserves the ID and records its actual update date", async () => {
    const { prisma, rows, upsert } = database();
    const row = rows.find((item) => item.data.slug === "3-kilos")!;
    row.data.description = "Old generated description.";
    row.data.brand_name = "Older spelling";
    row.data.logo_url = "https://bevory.in/media/verified-logo.webp";
    row.data.logo_identity_verified = true;
    const result = await applyBrandExpansion(prisma, newDate);
    expect(result.updated).toBe(1);
    expect(result.created).toBe(0);
    const call = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>)[0][0];
    expect(call.update.data.description).not.toBe("Old generated description.");
    expect(call.update.data.id).toBe(row.recordId);
    expect(call.update.data.content_updated_at).toBe(newDate);
    expect(call.update.data.created_at).toBe(oldDate);
    expect(call.update.data.logo_url).toBe("https://bevory.in/media/verified-logo.webp");
    expect(call.update.data.logo_verified_at).toBe(oldDate);
  });

  it("does not replace an existing image with an unverified slug URL", async () => {
    const { prisma, rows, upsert } = database();
    const row = rows.find((item) => item.data.slug === "after-dark")!;
    row.data.logo_url = "https://bevory.in/media/existing-logo.webp";
    row.data.description = "Old copy";
    await applyBrandExpansion(prisma, newDate);
    const call = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>)[0][0];
    expect(call.update.data.logo_url).toBe(row.data.logo_url);
    expect(call.update.data.logo_identity_verified).toBe(false);
  });

  it("does not replace any existing image when a new verified logo is available", async () => {
    const { prisma, rows, upsert } = database();
    const row = rows.find((item) => item.data.slug === "drambuie")!;
    row.data.logo_url = "https://bevory.in/media/old-drambuie-logo.webp";
    row.data.logo_identity_verified = false;
    row.data.description = "Old copy";
    await applyBrandExpansion(prisma, newDate);
    const call = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>)[0][0];
    expect(call.update.data.logo_url).toBe(row.data.logo_url);
    expect(call.update.data.logo_identity_verified).toBe(false);
  });

  it("fills a blank image only from a verified asset", async () => {
    const { prisma, rows, upsert } = database();
    const checked = rows.find((item) => item.data.slug === "drambuie")!;
    const unresolved = rows.find((item) => item.data.slug === "yamazaki")!;
    checked.data.logo_url = null;
    unresolved.data.logo_url = null;
    unresolved.data.description = "Old copy";
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    expect(updates.find((data) => data.slug === "drambuie")?.logo_url).toBe(buildBrandExpansionData(BRAND_EXPANSION.find((item) => item.slug === "drambuie")!).logo_url);
    expect(updates.find((data) => data.slug === "yamazaki")?.logo_url).toBeNull();
  });

  it("preserves Havana's stored image while filling only verified batch 47 slots", async () => {
    const { prisma, rows, upsert } = database();
    const havana = rows.find((item) => item.data.slug === "havana")!;
    const terry = rows.find((item) => item.data.slug === "terry-sent-me")!;
    const celia = rows.find((item) => item.data.slug === "celia")!;
    havana.data.logo_url = "https://bevory.in/media/existing-havana.jpg";
    havana.data.description = "Old copy";
    terry.data.logo_url = null;
    celia.data.logo_url = null;
    celia.data.description = "Old copy";
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    expect(updates.find((data) => data.slug === "havana")?.logo_url).toBe(havana.data.logo_url);
    expect(updates.find((data) => data.slug === "terry-sent-me")?.logo_url).toBe(buildBrandExpansionData(BRAND_EXPANSION.find((item) => item.slug === "terry-sent-me")!).logo_url);
    expect(updates.find((data) => data.slug === "celia")?.logo_url).toBeNull();
  });

  it("keeps existing batch 48 logos and fills only De Luze's verified blank slot", async () => {
    const { prisma, rows, upsert } = database();
    const existing = rows.find((item) => item.data.slug === "cazcar")!;
    const verified = rows.find((item) => item.data.slug === "deluze")!;
    const unresolved = rows.find((item) => item.data.slug === "satiwa")!;
    existing.data.logo_url = "https://bevory.in/media/cazcar-existing.webp";
    existing.data.description = "Old copy";
    verified.data.logo_url = null;
    unresolved.data.logo_url = null;
    unresolved.data.description = "Old copy";
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    expect(updates.find((data) => data.slug === "cazcar")?.logo_url).toBe(existing.data.logo_url);
    expect(updates.find((data) => data.slug === "deluze")?.logo_url).toBe(buildBrandExpansionData(BRAND_EXPANSION.find((item) => item.slug === "deluze")!).logo_url);
    expect(updates.find((data) => data.slug === "satiwa")?.logo_url).toBeNull();
  });

  it("refreshes batch 49 copy without changing a stored brand logo", async () => {
    const { prisma, rows, upsert } = database();
    const row = rows.find((item) => item.data.slug === "absolut")!;
    row.data.logo_url = "https://bevory.in/media/absolut-existing.webp";
    row.data.description = "Old copy";
    await applyBrandExpansion(prisma, newDate);
    const call = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>)[0][0];
    expect(call.update.data.description).not.toBe("Old copy");
    expect(call.update.data.logo_url).toBe(row.data.logo_url);
    expect(call.update.data.content_version).toBe("brand-public-ui-v3-batch-49");
  });

  it("preserves batch 21 stored logos while filling only verified blank slots", async () => {
    const { prisma, rows, upsert } = database();
    const existing = rows.find((item) => item.data.slug === "benromach")!;
    const verified = rows.find((item) => item.data.slug === "beronia")!;
    const unresolved = rows.find((item) => item.data.slug === "barsol")!;
    existing.data.logo_url = "https://bevory.in/media/benromach-existing.jpg";
    existing.data.description = "Old copy";
    verified.data.logo_url = null;
    unresolved.data.logo_url = null;
    unresolved.data.description = "Old copy";
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    expect(updates.find((data) => data.slug === "benromach")?.logo_url).toBe(existing.data.logo_url);
    expect(updates.find((data) => data.slug === "beronia")?.logo_url).toBe(buildBrandExpansionData(BRAND_EXPANSION.find((item) => item.slug === "beronia")!).logo_url);
    expect(updates.find((data) => data.slug === "barsol")?.logo_url).toBeNull();
  });

  it("preserves the existing Uluvka image while refreshing batch 32 content", async () => {
    const { prisma, rows, upsert } = database();
    const row = rows.find((item) => item.data.slug === "uluvka")!;
    const existingLogo = "https://bevory.in/media/migrated-images/brand-spotlights/lc-brand-6e4d766a7ebe1e75be5408fb/b01ef21bdd950669140d.jpg";
    row.data.logo_url = existingLogo;
    row.data.description = "Old copy";
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    expect(updates.find((data) => data.slug === "uluvka")?.logo_url).toBe(existingLogo);
  });

  it("preserves both stored batch 41 logos during the content refresh", async () => {
    const { prisma, rows, upsert } = database();
    const logos = new Map([
      ["cutty-stark", "https://bevory.in/media/cutty-stark-existing.jpg"],
      ["mitchers", "https://bevory.in/media/mitchers-existing.jpg"],
    ]);
    for (const [slug, url] of logos) {
      const row = rows.find((item) => item.data.slug === slug)!;
      row.data.logo_url = url;
      row.data.logo_identity_verified = true;
      row.data.description = "Old copy";
    }
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    for (const [slug, url] of logos) {
      expect(updates.find((data) => data.slug === slug)?.logo_url).toBe(url);
    }
    expect(updates.find((data) => data.slug === "cutty-stark")?.brand_name).toBe("Cutty Sark");
    expect(updates.find((data) => data.slug === "mitchers")?.brand_name).toBe("Michter's");
  });

  it("preserves the two stored batch 42 logos and leaves other blank slots empty", async () => {
    const { prisma, rows, upsert } = database();
    const logos = new Map([
      ["heradura", "https://bevory.in/media/herradura-existing.jpg"],
      ["mountain-oak", "https://bevory.in/media/mountain-oak-existing.jpg"],
    ]);
    for (const [slug, url] of logos) {
      const row = rows.find((item) => item.data.slug === slug)!;
      row.data.logo_url = url;
      row.data.description = "Old copy";
    }
    const blank = rows.find((item) => item.data.slug === "old-port")!;
    blank.data.logo_url = null;
    blank.data.description = "Old copy";
    const verified = rows.find((item) => item.data.slug === "blue-riband")!;
    verified.data.logo_url = null;
    verified.data.description = "Old copy";
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    for (const [slug, url] of logos) expect(updates.find((data) => data.slug === slug)?.logo_url).toBe(url);
    expect(updates.find((data) => data.slug === "old-port")?.logo_url).toBeNull();
    expect(updates.find((data) => data.slug === "blue-riband")?.logo_url).toBe(buildBrandExpansionData(BRAND_EXPANSION.find((item) => item.slug === "blue-riband")!).logo_url);
  });

  it("keeps existing batch 43 logos and fills only a verified empty slot", async () => {
    const { prisma, rows, upsert } = database();
    rows.find((item) => item.data.slug === "romanov")!.data.logo_url = "https://bevory.in/media/romanov-existing.jpg";
    rows.find((item) => item.data.slug === "glenfiddich-the")!.data.logo_url = null;
    rows.find((item) => item.data.slug === "susegado")!.data.logo_url = null;
    rows.find((item) => item.data.slug === "susegado")!.data.description = "Old copy";
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    expect(updates.find((data) => data.slug === "romanov")?.logo_url).toBe("https://bevory.in/media/romanov-existing.jpg");
    expect(updates.find((data) => data.slug === "glenfiddich-the")?.logo_url).toBe("https://static.livcheers.com/static/content/images/brand/glenfiddich.webp");
    expect(updates.find((data) => data.slug === "susegado")?.logo_url).toBeNull();
  });

  it("matches a known stable ID before a colliding display name", async () => {
    const { prisma, rows, upsert } = database();
    const target = rows.find((item) => item.data.slug === "3-kilos")!;
    rows[0].data.brand_name = target.data.brand_name;
    target.data.slug = "historical-3-kilos-slug";
    target.data.brand_name = "Historical display name";
    await applyBrandExpansion(prisma, newDate);
    const updates = (upsert.mock.calls as unknown as Array<[{ update: { data: Record<string, unknown> } }]>).map(([call]) => call.update.data);
    expect(updates.find((data) => data.id === target.recordId)?.brand_name).toBe("3 Kilos");
    expect(updates.find((data) => data.id === target.recordId)?.slug).toBe("historical-3-kilos-slug");
  });
});
