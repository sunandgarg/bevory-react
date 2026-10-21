const categoryImages: Record<string, string> = {
  Whiskey: "/category-cutouts/world-whisky.png",
  Rum: "/category-cutouts/rum.png",
  Vodka: "/category-cutouts/vodka.png",
  Gin: "/category-cutouts/gin.png",
  Wine: "/category-cutouts/red-wine.png",
  Beer: "/category-cutouts/beers.png",
  Cocktails: "/category-cutouts/liqueurs.png",
  Guides: "/category-cutouts/sparkling-wine.png",
  News: "/category-cutouts/ready-to-drink.png",
};

export const guideImage = (cover: string | null, category: string | null) =>
  cover || categoryImages[category || ""] || "/category-cutouts/world-whisky.png";
