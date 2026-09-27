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
import { BRAND_CONTENT_BATCH_51, BRAND_LOGOS_BATCH_51 } from "./brandContentBatch51.js";
import { BRAND_CONTENT_BATCH_52 } from "./brandContentBatch52.js";
import { BRAND_CONTENT_BATCH_53 } from "./brandContentBatch53.js";
import { BRAND_CONTENT_BATCH_54 } from "./brandContentBatch54.js";
import { BRAND_CONTENT_BATCH_55 } from "./brandContentBatch55.js";
import { BRAND_CONTENT_BATCH_56 } from "./brandContentBatch56.js";
import { BRAND_CONTENT_BATCH_57 } from "./brandContentBatch57.js";
import { BRAND_CONTENT_BATCH_58 } from "./brandContentBatch58.js";
import { BRAND_CONTENT_BATCH_59 } from "./brandContentBatch59.js";
import { BRAND_CONTENT_BATCH_60 } from "./brandContentBatch60.js";
import { BRAND_CONTENT_BATCH_61 } from "./brandContentBatch61.js";
import { BRAND_CONTENT_BATCH_62 } from "./brandContentBatch62.js";
import { BRAND_CONTENT_BATCH_63 } from "./brandContentBatch63.js";
import { BRAND_CONTENT_BATCH_64 } from "./brandContentBatch64.js";
import { BRAND_CONTENT_BATCH_65 } from "./brandContentBatch65.js";
import { BRAND_CONTENT_BATCH_66 } from "./brandContentBatch66.js";
import { BRAND_CONTENT_BATCH_67 } from "./brandContentBatch67.js";
import { BRAND_CONTENT_BATCH_68 } from "./brandContentBatch68.js";
import { BRAND_CONTENT_BATCH_69 } from "./brandContentBatch69.js";
import { BRAND_CONTENT_BATCH_70 } from "./brandContentBatch70.js";
import { BRAND_CONTENT_BATCH_71 } from "./brandContentBatch71.js";
import { BRAND_CONTENT_BATCH_72 } from "./brandContentBatch72.js";
import { BRAND_CONTENT_BATCH_73 } from "./brandContentBatch73.js";
import { BRAND_CONTENT_BATCH_74 } from "./brandContentBatch74.js";
import { BRAND_CONTENT_BATCH_75 } from "./brandContentBatch75.js";
import { BRAND_CONTENT_BATCH_76 } from "./brandContentBatch76.js";
import { BRAND_CONTENT_BATCH_77 } from "./brandContentBatch77.js";
import { BRAND_CONTENT_BATCH_78 } from "./brandContentBatch78.js";
import { BRAND_CONTENT_BATCH_79 } from "./brandContentBatch79.js";
import { BRAND_CONTENT_BATCH_80 } from "./brandContentBatch80.js";
import { BRAND_CONTENT_BATCH_81 } from "./brandContentBatch81.js";
import { BRAND_CONTENT_BATCH_82 } from "./brandContentBatch82.js";
import { BRAND_CONTENT_BATCH_83 } from "./brandContentBatch83.js";
import { BRAND_CONTENT_BATCH_84 } from "./brandContentBatch84.js";
import { BRAND_CONTENT_BATCH_85 } from "./brandContentBatch85.js";
import { BRAND_CONTENT_BATCH_86 } from "./brandContentBatch86.js";
import { BRAND_CONTENT_BATCH_87 } from "./brandContentBatch87.js";
import { BRAND_CONTENT_BATCH_88 } from "./brandContentBatch88.js";
import { BRAND_CONTENT_BATCH_89 } from "./brandContentBatch89.js";
import { BRAND_CONTENT_BATCH_90 } from "./brandContentBatch90.js";
import { BRAND_CONTENT_BATCH_91 } from "./brandContentBatch91.js";
import { BRAND_CONTENT_BATCH_92 } from "./brandContentBatch92.js";
import { BRAND_CONTENT_BATCH_93 } from "./brandContentBatch93.js";
import { BRAND_CONTENT_BATCH_94 } from "./brandContentBatch94.js";
import { BRAND_CONTENT_BATCH_95 } from "./brandContentBatch95.js";
import { BRAND_CONTENT_BATCH_96 } from "./brandContentBatch96.js";
import { BRAND_CONTENT_BATCH_97 } from "./brandContentBatch97.js";
import { BRAND_CONTENT_BATCH_98 } from "./brandContentBatch98.js";
import { BRAND_CONTENT_BATCH_99 } from "./brandContentBatch99.js";
import { BRAND_CONTENT_BATCH_100 } from "./brandContentBatch100.js";
import { BRAND_CONTENT_BATCH_101 } from "./brandContentBatch101.js";
import { BRAND_CONTENT_BATCH_102 } from "./brandContentBatch102.js";
import { BRAND_CONTENT_BATCH_103 } from "./brandContentBatch103.js";
import { BRAND_CONTENT_BATCH_104 } from "./brandContentBatch104.js";
import { BRAND_CONTENT_BATCH_105 } from "./brandContentBatch105.js";
import { BRAND_CONTENT_BATCH_106 } from "./brandContentBatch106.js";
import { BRAND_CONTENT_BATCH_107 } from "./brandContentBatch107.js";
import { BRAND_CONTENT_BATCH_108 } from "./brandContentBatch108.js";
import { BRAND_CONTENT_BATCH_109 } from "./brandContentBatch109.js";
import { BRAND_CONTENT_BATCH_110 } from "./brandContentBatch110.js";
import { BRAND_CONTENT_BATCH_111 } from "./brandContentBatch111.js";
import { BRAND_CONTENT_BATCH_112 } from "./brandContentBatch112.js";
import { BRAND_CONTENT_BATCH_113 } from "./brandContentBatch113.js";
import { BRAND_CONTENT_BATCH_114 } from "./brandContentBatch114.js";
import { BRAND_CONTENT_BATCH_115 } from "./brandContentBatch115.js";
import { BRAND_CONTENT_BATCH_116 } from "./brandContentBatch116.js";
import { BRAND_CONTENT_BATCH_117 } from "./brandContentBatch117.js";
import { BRAND_CONTENT_BATCH_118 } from "./brandContentBatch118.js";
import { BRAND_CONTENT_BATCH_119 } from "./brandContentBatch119.js";
import { BRAND_CONTENT_BATCH_120 } from "./brandContentBatch120.js";
import { BRAND_CONTENT_BATCH_121 } from "./brandContentBatch121.js";
import { BRAND_CONTENT_BATCH_122 } from "./brandContentBatch122.js";
import { BRAND_CONTENT_BATCH_123 } from "./brandContentBatch123.js";
import { BRAND_CONTENT_BATCH_124 } from "./brandContentBatch124.js";
import { BRAND_CONTENT_BATCH_125 } from "./brandContentBatch125.js";
import { BRAND_CONTENT_BATCH_126 } from "./brandContentBatch126.js";
import { BRAND_CONTENT_BATCH_127 } from "./brandContentBatch127.js";
import { BRAND_CONTENT_BATCH_128 } from "./brandContentBatch128.js";
import { BRAND_CONTENT_BATCH_129 } from "./brandContentBatch129.js";
import { BRAND_CONTENT_BATCH_130 } from "./brandContentBatch130.js";
import { BRAND_CONTENT_BATCH_131 } from "./brandContentBatch131.js";
import { BRAND_CONTENT_BATCH_132 } from "./brandContentBatch132.js";
import { BRAND_CONTENT_BATCH_133 } from "./brandContentBatch133.js";

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
      || BRAND_CONTENT_BATCH_50[definition.slug]
      || BRAND_CONTENT_BATCH_51[definition.slug]
      || BRAND_CONTENT_BATCH_52[definition.slug]
      || BRAND_CONTENT_BATCH_53[definition.slug]
      || BRAND_CONTENT_BATCH_54[definition.slug]
      || BRAND_CONTENT_BATCH_55[definition.slug]
      || BRAND_CONTENT_BATCH_56[definition.slug]
      || BRAND_CONTENT_BATCH_57[definition.slug]
      || BRAND_CONTENT_BATCH_58[definition.slug]
      || BRAND_CONTENT_BATCH_59[definition.slug]
      || BRAND_CONTENT_BATCH_60[definition.slug]
      || BRAND_CONTENT_BATCH_61[definition.slug]
      || BRAND_CONTENT_BATCH_62[definition.slug]
      || BRAND_CONTENT_BATCH_63[definition.slug]
      || BRAND_CONTENT_BATCH_64[definition.slug]
      || BRAND_CONTENT_BATCH_65[definition.slug]
      || BRAND_CONTENT_BATCH_66[definition.slug]
      || BRAND_CONTENT_BATCH_67[definition.slug]
      || BRAND_CONTENT_BATCH_68[definition.slug]
      || BRAND_CONTENT_BATCH_69[definition.slug]
      || BRAND_CONTENT_BATCH_70[definition.slug]
      || BRAND_CONTENT_BATCH_71[definition.slug]
      || BRAND_CONTENT_BATCH_72[definition.slug]
      || BRAND_CONTENT_BATCH_73[definition.slug]
      || BRAND_CONTENT_BATCH_74[definition.slug]
      || BRAND_CONTENT_BATCH_75[definition.slug]
      || BRAND_CONTENT_BATCH_76[definition.slug]
      || BRAND_CONTENT_BATCH_77[definition.slug]
      || BRAND_CONTENT_BATCH_78[definition.slug]
      || BRAND_CONTENT_BATCH_79[definition.slug]
      || BRAND_CONTENT_BATCH_80[definition.slug]
      || BRAND_CONTENT_BATCH_81[definition.slug]
      || BRAND_CONTENT_BATCH_82[definition.slug]
      || BRAND_CONTENT_BATCH_83[definition.slug]
      || BRAND_CONTENT_BATCH_84[definition.slug]
      || BRAND_CONTENT_BATCH_85[definition.slug]
      || BRAND_CONTENT_BATCH_86[definition.slug]
      || BRAND_CONTENT_BATCH_87[definition.slug]
      || BRAND_CONTENT_BATCH_88[definition.slug]
      || BRAND_CONTENT_BATCH_89[definition.slug]
      || BRAND_CONTENT_BATCH_90[definition.slug]
      || BRAND_CONTENT_BATCH_91[definition.slug]
      || BRAND_CONTENT_BATCH_92[definition.slug]
      || BRAND_CONTENT_BATCH_93[definition.slug]
      || BRAND_CONTENT_BATCH_94[definition.slug]
      || BRAND_CONTENT_BATCH_95[definition.slug]
      || BRAND_CONTENT_BATCH_96[definition.slug]
      || BRAND_CONTENT_BATCH_97[definition.slug]
      || BRAND_CONTENT_BATCH_98[definition.slug]
      || BRAND_CONTENT_BATCH_99[definition.slug]
      || BRAND_CONTENT_BATCH_100[definition.slug]
      || BRAND_CONTENT_BATCH_101[definition.slug]
      || BRAND_CONTENT_BATCH_102[definition.slug]
      || BRAND_CONTENT_BATCH_103[definition.slug]
      || BRAND_CONTENT_BATCH_104[definition.slug]
      || BRAND_CONTENT_BATCH_105[definition.slug]
      || BRAND_CONTENT_BATCH_106[definition.slug]
      || BRAND_CONTENT_BATCH_107[definition.slug]
      || BRAND_CONTENT_BATCH_108[definition.slug]
      || BRAND_CONTENT_BATCH_109[definition.slug]
      || BRAND_CONTENT_BATCH_110[definition.slug]
      || BRAND_CONTENT_BATCH_111[definition.slug]
      || BRAND_CONTENT_BATCH_112[definition.slug]
      || BRAND_CONTENT_BATCH_113[definition.slug]
      || BRAND_CONTENT_BATCH_114[definition.slug]
      || BRAND_CONTENT_BATCH_115[definition.slug]
      || BRAND_CONTENT_BATCH_116[definition.slug]
      || BRAND_CONTENT_BATCH_117[definition.slug]
      || BRAND_CONTENT_BATCH_118[definition.slug]
      || BRAND_CONTENT_BATCH_119[definition.slug]
      || BRAND_CONTENT_BATCH_120[definition.slug]
      || BRAND_CONTENT_BATCH_121[definition.slug]
      || BRAND_CONTENT_BATCH_122[definition.slug]
      || BRAND_CONTENT_BATCH_123[definition.slug]
      || BRAND_CONTENT_BATCH_124[definition.slug]
      || BRAND_CONTENT_BATCH_125[definition.slug]
      || BRAND_CONTENT_BATCH_126[definition.slug]
      || BRAND_CONTENT_BATCH_127[definition.slug]
      || BRAND_CONTENT_BATCH_128[definition.slug]
      || BRAND_CONTENT_BATCH_129[definition.slug]
      || BRAND_CONTENT_BATCH_130[definition.slug]
      || BRAND_CONTENT_BATCH_131[definition.slug]
      || BRAND_CONTENT_BATCH_132[definition.slug]
      || BRAND_CONTENT_BATCH_133[definition.slug],
    );

    for (const field of contentFields) {
      if (refreshPublicContent || !hasValue(previous[field])) next[field] = built[field];
    }
    if (BRAND_CONTENT_BATCH_41[definition.slug] || BRAND_CONTENT_BATCH_42[definition.slug] || BRAND_CONTENT_BATCH_43[definition.slug] || BRAND_CONTENT_BATCH_44[definition.slug] || BRAND_CONTENT_BATCH_45[definition.slug] || BRAND_CONTENT_BATCH_46[definition.slug] || BRAND_CONTENT_BATCH_47[definition.slug] || BRAND_CONTENT_BATCH_48[definition.slug] || BRAND_CONTENT_BATCH_49[definition.slug] || BRAND_CONTENT_BATCH_50[definition.slug] || BRAND_CONTENT_BATCH_51[definition.slug] || BRAND_CONTENT_BATCH_52[definition.slug] || BRAND_CONTENT_BATCH_53[definition.slug] || BRAND_CONTENT_BATCH_54[definition.slug] || BRAND_CONTENT_BATCH_55[definition.slug] || BRAND_CONTENT_BATCH_56[definition.slug] || BRAND_CONTENT_BATCH_57[definition.slug] || BRAND_CONTENT_BATCH_58[definition.slug] || BRAND_CONTENT_BATCH_59[definition.slug] || BRAND_CONTENT_BATCH_60[definition.slug] || BRAND_CONTENT_BATCH_61[definition.slug] || BRAND_CONTENT_BATCH_62[definition.slug] || BRAND_CONTENT_BATCH_63[definition.slug] || BRAND_CONTENT_BATCH_64[definition.slug] || BRAND_CONTENT_BATCH_65[definition.slug] || BRAND_CONTENT_BATCH_66[definition.slug] || BRAND_CONTENT_BATCH_67[definition.slug] || BRAND_CONTENT_BATCH_68[definition.slug] || BRAND_CONTENT_BATCH_69[definition.slug] || BRAND_CONTENT_BATCH_70[definition.slug] || BRAND_CONTENT_BATCH_71[definition.slug] || BRAND_CONTENT_BATCH_72[definition.slug] || BRAND_CONTENT_BATCH_73[definition.slug] || BRAND_CONTENT_BATCH_74[definition.slug] || BRAND_CONTENT_BATCH_75[definition.slug] || BRAND_CONTENT_BATCH_76[definition.slug] || BRAND_CONTENT_BATCH_77[definition.slug] || BRAND_CONTENT_BATCH_78[definition.slug] || BRAND_CONTENT_BATCH_79[definition.slug] || BRAND_CONTENT_BATCH_80[definition.slug] || BRAND_CONTENT_BATCH_81[definition.slug] || BRAND_CONTENT_BATCH_82[definition.slug] || BRAND_CONTENT_BATCH_83[definition.slug] || BRAND_CONTENT_BATCH_84[definition.slug] || BRAND_CONTENT_BATCH_85[definition.slug] || BRAND_CONTENT_BATCH_86[definition.slug] || BRAND_CONTENT_BATCH_87[definition.slug] || BRAND_CONTENT_BATCH_88[definition.slug] || BRAND_CONTENT_BATCH_89[definition.slug] || BRAND_CONTENT_BATCH_90[definition.slug] || BRAND_CONTENT_BATCH_91[definition.slug] || BRAND_CONTENT_BATCH_92[definition.slug] || BRAND_CONTENT_BATCH_93[definition.slug] || BRAND_CONTENT_BATCH_94[definition.slug] || BRAND_CONTENT_BATCH_95[definition.slug] || BRAND_CONTENT_BATCH_96[definition.slug] || BRAND_CONTENT_BATCH_97[definition.slug] || BRAND_CONTENT_BATCH_98[definition.slug] || BRAND_CONTENT_BATCH_99[definition.slug] || BRAND_CONTENT_BATCH_100[definition.slug] || BRAND_CONTENT_BATCH_101[definition.slug] || BRAND_CONTENT_BATCH_102[definition.slug] || BRAND_CONTENT_BATCH_103[definition.slug] || BRAND_CONTENT_BATCH_104[definition.slug] || BRAND_CONTENT_BATCH_105[definition.slug] || BRAND_CONTENT_BATCH_106[definition.slug] || BRAND_CONTENT_BATCH_107[definition.slug] || BRAND_CONTENT_BATCH_108[definition.slug] || BRAND_CONTENT_BATCH_109[definition.slug] || BRAND_CONTENT_BATCH_110[definition.slug] || BRAND_CONTENT_BATCH_111[definition.slug] || BRAND_CONTENT_BATCH_112[definition.slug] || BRAND_CONTENT_BATCH_113[definition.slug] || BRAND_CONTENT_BATCH_114[definition.slug] || BRAND_CONTENT_BATCH_115[definition.slug] || BRAND_CONTENT_BATCH_116[definition.slug] || BRAND_CONTENT_BATCH_117[definition.slug] || BRAND_CONTENT_BATCH_118[definition.slug] || BRAND_CONTENT_BATCH_119[definition.slug] || BRAND_CONTENT_BATCH_120[definition.slug] || BRAND_CONTENT_BATCH_121[definition.slug] || BRAND_CONTENT_BATCH_122[definition.slug] || BRAND_CONTENT_BATCH_123[definition.slug] || BRAND_CONTENT_BATCH_124[definition.slug] || BRAND_CONTENT_BATCH_125[definition.slug] || BRAND_CONTENT_BATCH_126[definition.slug] || BRAND_CONTENT_BATCH_127[definition.slug] || BRAND_CONTENT_BATCH_128[definition.slug] || BRAND_CONTENT_BATCH_129[definition.slug] || BRAND_CONTENT_BATCH_130[definition.slug] || BRAND_CONTENT_BATCH_131[definition.slug] || BRAND_CONTENT_BATCH_132[definition.slug] || BRAND_CONTENT_BATCH_133[definition.slug]) next.brand_name = built.brand_name;
    if (refreshPublicContent || !hasValue(previous.logo_emoji)) next.logo_emoji = built.logo_emoji;
    // Preserve existing images except exact batch 51 slug URLs confirmed broken.
    const brokenBatch51Logo = Boolean(BRAND_LOGOS_BATCH_51[definition.slug])
      && previous.logo_url === `https://static.livcheers.com/static/content/images/brand/${definition.slug}.webp`;
    const refreshLogo = (!hasValue(previous.logo_url) || brokenBatch51Logo)
      && built.logo_identity_verified === true && hasValue(built.logo_url);
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
