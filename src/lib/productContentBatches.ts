import { PRODUCT_BATCH_CONTENT as BATCH_01 } from "./productContentBatch01.js";
import { PRODUCT_BATCH_CONTENT as BATCH_02 } from "./productContentBatch02.js";
import { PRODUCT_BATCH_CONTENT as BATCH_03 } from "./productContentBatch03.js";

export const PRODUCT_BATCH_CONTENT = { ...BATCH_01, ...BATCH_02, ...BATCH_03 };
export const productContentBatchVersion = (slug: string): string | null =>
  slug in BATCH_03 ? "researched-product-batch-03" : slug in BATCH_02 ? "researched-product-batch-02" : slug in BATCH_01 ? "researched-product-batch-01" : null;
