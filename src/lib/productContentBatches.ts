import { PRODUCT_BATCH_CONTENT as BATCH_01 } from "./productContentBatch01.js";
import { PRODUCT_BATCH_CONTENT as BATCH_02 } from "./productContentBatch02.js";
import { PRODUCT_BATCH_CONTENT as BATCH_03 } from "./productContentBatch03.js";
import { PRODUCT_BATCH_CONTENT as BATCH_04 } from "./productContentBatch04.js";
import { PRODUCT_BATCH_CONTENT as BATCH_05 } from "./productContentBatch05.js";
import { PRODUCT_BATCH_CONTENT as BATCH_06 } from "./productContentBatch06.js";
import { PRODUCT_BATCH_CONTENT as BATCH_07 } from "./productContentBatch07.js";
import { PRODUCT_BATCH_CONTENT as BATCH_08 } from "./productContentBatch08.js";
import { PRODUCT_BATCH_CONTENT as BATCH_09 } from "./productContentBatch09.js";
import { PRODUCT_BATCH_CONTENT as BATCH_10 } from "./productContentBatch10.js";
import { PRODUCT_BATCH_CONTENT as BATCH_11 } from "./productContentBatch11.js";
import { PRODUCT_BATCH_CONTENT as BATCH_12 } from "./productContentBatch12.js";
import { PRODUCT_BATCH_CONTENT as BATCH_13 } from "./productContentBatch13.js";
import { PRODUCT_BATCH_CONTENT as BATCH_14 } from "./productContentBatch14.js";
import { PRODUCT_BATCH_CONTENT as BATCH_15 } from "./productContentBatch15.js";
import { PRODUCT_BATCH_CONTENT as BATCH_16 } from "./productContentBatch16.js";
import { PRODUCT_BATCH_CONTENT as BATCH_17 } from "./productContentBatch17.js";
import { PRODUCT_BATCH_CONTENT as BATCH_18 } from "./productContentBatch18.js";
import { PRODUCT_BATCH_CONTENT as BATCH_19 } from "./productContentBatch19.js";
import { PRODUCT_BATCH_CONTENT as BATCH_20 } from "./productContentBatch20.js";
import { PRODUCT_BATCH_CONTENT as BATCH_21 } from "./productContentBatch21.js";
import { PRODUCT_BATCH_CONTENT as BATCH_22 } from "./productContentBatch22.js";
import { PRODUCT_BATCH_CONTENT as BATCH_23 } from "./productContentBatch23.js";
import { PRODUCT_BATCH_CONTENT as BATCH_24 } from "./productContentBatch24.js";
import { PRODUCT_BATCH_CONTENT as BATCH_25 } from "./productContentBatch25.js";
import { PRODUCT_BATCH_CONTENT as BATCH_26 } from "./productContentBatch26.js";
import { PRODUCT_BATCH_CONTENT as BATCH_27 } from "./productContentBatch27.js";
import { PRODUCT_BATCH_CONTENT as BATCH_28 } from "./productContentBatch28.js";
import { PRODUCT_BATCH_CONTENT as BATCH_29 } from "./productContentBatch29.js";
import { PRODUCT_BATCH_CONTENT as BATCH_30 } from "./productContentBatch30.js";
import { PRODUCT_BATCH_CONTENT as BATCH_31 } from "./productContentBatch31.js";
import { PRODUCT_BATCH_CONTENT as BATCH_32 } from "./productContentBatch32.js";
import { PRODUCT_BATCH_CONTENT as BATCH_33 } from "./productContentBatch33.js";
import { PRODUCT_BATCH_CONTENT as BATCH_34 } from "./productContentBatch34.js";
import { PRODUCT_BATCH_CONTENT as BATCH_35 } from "./productContentBatch35.js";
import { PRODUCT_BATCH_CONTENT as BATCH_36 } from "./productContentBatch36.js";
import { PRODUCT_BATCH_CONTENT as BATCH_37 } from "./productContentBatch37.js";
import { PRODUCT_BATCH_CONTENT as BATCH_38 } from "./productContentBatch38.js";
import { PRODUCT_BATCH_CONTENT as BATCH_39 } from "./productContentBatch39.js";
import { PRODUCT_BATCH_CONTENT as BATCH_40 } from "./productContentBatch40.js";

export const PRODUCT_BATCH_CONTENT = { ...BATCH_01, ...BATCH_02, ...BATCH_03, ...BATCH_04, ...BATCH_05, ...BATCH_06, ...BATCH_07, ...BATCH_08, ...BATCH_09, ...BATCH_10, ...BATCH_11, ...BATCH_12, ...BATCH_13, ...BATCH_14, ...BATCH_15, ...BATCH_16, ...BATCH_17, ...BATCH_18, ...BATCH_19, ...BATCH_20, ...BATCH_21, ...BATCH_22, ...BATCH_23, ...BATCH_24, ...BATCH_25, ...BATCH_26, ...BATCH_27, ...BATCH_28, ...BATCH_29, ...BATCH_30, ...BATCH_31, ...BATCH_32, ...BATCH_33, ...BATCH_34, ...BATCH_35, ...BATCH_36, ...BATCH_37, ...BATCH_38, ...BATCH_39, ...BATCH_40 };
export const productContentBatchVersion = (slug: string): string | null =>
  slug in BATCH_40 ? "researched-product-batch-40" : productContentBatchVersionThrough39(slug);
const productContentBatchVersionThrough39 = (slug: string): string | null =>
  slug in BATCH_39 ? "researched-product-batch-39" : productContentBatchVersionThrough38(slug);
const productContentBatchVersionThrough38 = (slug: string): string | null =>
  slug in BATCH_38 ? "researched-product-batch-38" : productContentBatchVersionThrough37(slug);
const productContentBatchVersionThrough37 = (slug: string): string | null =>
  slug in BATCH_37 ? "researched-product-batch-37" : productContentBatchVersionThrough36(slug);
const productContentBatchVersionThrough36 = (slug: string): string | null =>
  slug in BATCH_36 ? "researched-product-batch-36" : productContentBatchVersionThrough35(slug);
const productContentBatchVersionThrough35 = (slug: string): string | null =>
  slug in BATCH_35 ? "researched-product-batch-35" : slug in BATCH_34 ? "researched-product-batch-34" : slug in BATCH_33 ? "researched-product-batch-33" : slug in BATCH_32 ? "researched-product-batch-32" : slug in BATCH_31 ? "researched-product-batch-31" : slug in BATCH_30 ? "researched-product-batch-30" : slug in BATCH_29 ? "researched-product-batch-29" : slug in BATCH_28 ? "researched-product-batch-28" : slug in BATCH_27 ? "researched-product-batch-27" : slug in BATCH_26 ? "researched-product-batch-26" : slug in BATCH_25 ? "researched-product-batch-25" : slug in BATCH_24 ? "researched-product-batch-24" : slug in BATCH_23 ? "researched-product-batch-23" : slug in BATCH_22 ? "researched-product-batch-22" : slug in BATCH_21 ? "researched-product-batch-21" : slug in BATCH_20 ? "researched-product-batch-20" : slug in BATCH_19 ? "researched-product-batch-19" : slug in BATCH_18 ? "researched-product-batch-18" : slug in BATCH_17 ? "researched-product-batch-17" : slug in BATCH_16 ? "researched-product-batch-16" : slug in BATCH_15 ? "researched-product-batch-15" : slug in BATCH_14 ? "researched-product-batch-14" : slug in BATCH_13 ? "researched-product-batch-13" : slug in BATCH_12 ? "researched-product-batch-12" : slug in BATCH_11 ? "researched-product-batch-11" : slug in BATCH_10 ? "researched-product-batch-10" : slug in BATCH_09 ? "researched-product-batch-09" : slug in BATCH_08 ? "researched-product-batch-08" : slug in BATCH_07 ? "researched-product-batch-07" : slug in BATCH_06 ? "researched-product-batch-06" : slug in BATCH_05 ? "researched-product-batch-05" : slug in BATCH_04 ? "researched-product-batch-04" : slug in BATCH_03 ? "researched-product-batch-03" : slug in BATCH_02 ? "researched-product-batch-02" : slug in BATCH_01 ? "researched-product-batch-01" : null;
