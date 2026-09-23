import { PRODUCT_BATCH_CONTENT as BATCH_01 } from "./productContentBatch01.js";
import { PRODUCT_BATCH_CONTENT as BATCH_02 } from "./productContentBatch02.js";
import { PRODUCT_BATCH_CONTENT as BATCH_03 } from "./productContentBatch03.js";
import { PRODUCT_BATCH_CONTENT as BATCH_04 } from "./productContentBatch04.js";
import { PRODUCT_BATCH_CONTENT as BATCH_05 } from "./productContentBatch05.js";
import { PRODUCT_BATCH_CONTENT as BATCH_06 } from "./productContentBatch06.js";
import { PRODUCT_BATCH_CONTENT as BATCH_07 } from "./productContentBatch07.js";
import { PRODUCT_BATCH_CONTENT as BATCH_08 } from "./productContentBatch08.js";

export const PRODUCT_BATCH_CONTENT = { ...BATCH_01, ...BATCH_02, ...BATCH_03, ...BATCH_04, ...BATCH_05, ...BATCH_06, ...BATCH_07, ...BATCH_08 };
export const productContentBatchVersion = (slug: string): string | null =>
  slug in BATCH_08 ? "researched-product-batch-08" : slug in BATCH_07 ? "researched-product-batch-07" : slug in BATCH_06 ? "researched-product-batch-06" : slug in BATCH_05 ? "researched-product-batch-05" : slug in BATCH_04 ? "researched-product-batch-04" : slug in BATCH_03 ? "researched-product-batch-03" : slug in BATCH_02 ? "researched-product-batch-02" : slug in BATCH_01 ? "researched-product-batch-01" : null;
