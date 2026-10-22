export const bevoryRating = (product: { bevory_rating?: unknown; bevory_rating_note?: unknown }) => {
  const score = Number(product.bevory_rating);
  const note = typeof product.bevory_rating_note === "string" ? product.bevory_rating_note.trim() : "";
  return product.bevory_rating != null && Number.isFinite(score) && score >= 1 && score <= 5
    && Math.abs(Math.round(score * 100) - score * 100) < 1e-8 && note.length >= 20 ? score : null;
};
