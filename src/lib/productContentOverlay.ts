import { PRODUCT_BATCH_CONTENT, productContentBatchVersion } from "./productContentBatches.js";

// Read-time overlay: deliberately reversible and leaves catalogue identity, images,
// variants and prices untouched. It can be removed without a data migration.
export const applyProductContentOverlay = (row: Record<string, unknown>): Record<string, unknown> => {
  const detail = PRODUCT_BATCH_CONTENT[String(row.slug ?? "")];
  if (!detail) return row;
  return {
    ...row,
    description: detail.shortOverview,
    production_note: detail.craftStory,
    aroma_note: detail.tastingNotes.nose,
    flavour_note: detail.tastingNotes.palate,
    finish_note: detail.tastingNotes.finish,
    serving_temperature: detail.servingGuide.idealTemperature,
    glassware: detail.servingGuide.glassware,
    serving_guide: detail.servingGuide.recommendation,
    food_pairings: detail.foodPairings,
    who_may_enjoy: detail.whyBuyThis,
    faqs: detail.faqs,
    meta_title: detail.metaTitle,
    meta_description: detail.metaDescription,
    type_tag: detail.category,
    product_content_version: productContentBatchVersion(String(row.slug ?? "")),
    // Remove old generated category boilerplate rather than mixing it with
    // bottle-specific editorial. The reviewed fields above replace it.
    taste_profile: null,
    tasting_notes: null,
    colour_note: null,
    texture_note: null,
    ingredients_note: null,
    cocktail_uses: null,
    label_guidance: null,
    type_description: null,
  };
};
