import "dotenv/config";
import { Prisma, PrismaClient } from "@prisma/client";
import { BRAND_EXPANSION } from "../src/lib/brandExpansion.js";

type JsonObject = Record<string, unknown>;

type CatalogueRow = {
  id: string;
  data: JsonObject;
};

const editorialBrandIds = new Set(BRAND_EXPANSION.map((brand) => brand.recordId));
const editorialBrandSlugs = new Set(BRAND_EXPANSION.map((brand) => brand.slug));

export const hasManagedBrandEditorial = (brand: CatalogueRow) => editorialBrandIds.has(brand.id)
  || editorialBrandSlugs.has(String(brand.data.slug ?? ""))
  || /^brand-public-ui-/.test(String(brand.data.content_version ?? ""));

type CategoryGuidance = {
  emoji: string;
  profile: string;
  compare: string;
  serving: string;
  pairings: Array<{ title: string; items: string[] }>;
};

export type BrandProfileInput = {
  brand: CatalogueRow;
  products: CatalogueRow[];
  categoriesById: Map<string, JsonObject>;
  subcategoriesById: Map<string, JsonObject>;
};

export type GeneratedBrandProfile = {
  description: string;
  story: string;
  tasting_notes: Array<{ title: string; description: string }>;
  how_to_enjoy: Array<{ subheading: string; description: string }>;
  pairing_ideas: Array<{ title: string; items: string[] }>;
  why_choose: string;
  faqs: Array<{ question: string; answer: string }>;
  final_verdict: string;
  meta_title: string;
  meta_description: string;
  logo_emoji: string;
  image_url: string | null;
  featured_product_id: string | null;
};

const prisma = new PrismaClient();

const WHISKY_GUIDANCE: CategoryGuidance = {
  emoji: "🥃",
  profile: "Whisky character can move from light grain and orchard-fruit notes to malt, spice, smoke and oak. The exact profile depends on the expression, maturation and bottling strength.",
  compare: "Compare the whisky style, age statement where one is declared, cask information, bottling strength and bottle size. Similar-looking labels can deliver quite different flavour profiles.",
  serving: "Begin with a small measure in a clean tulip or rocks glass. Try it neat first, then add a little water or serve as a highball when that suits the bottle and your preference.",
  pairings: [
    { title: "Savoury options", items: ["grilled paneer", "roasted mushrooms", "smoked cheese", "kebabs"] },
    { title: "Lighter bites", items: ["salted nuts", "dark chocolate", "dried fruit", "mild hard cheese"] },
  ],
};

const WINE_GUIDANCE: CategoryGuidance = {
  emoji: "🍷",
  profile: "Wine aroma, acidity, sweetness, tannin and body depend on the grape, region, vintage and winemaking style. Each label should be assessed on its own details.",
  compare: "Compare colour or style, grape information, region, vintage where stated, sweetness level and bottle size. These details are more useful than judging the range by one bottle.",
  serving: "Serve sparkling, white and rose styles cool, while most reds show better slightly below warm room temperature. Use clean glassware and adjust the temperature for the specific label.",
  pairings: [
    { title: "Fresh and lighter dishes", items: ["salads", "grilled vegetables", "soft cheese", "lightly spiced starters"] },
    { title: "Richer dishes", items: ["tomato-based pasta", "mushroom dishes", "grilled meats", "aged cheese"] },
  ],
};

const GUIDANCE: Record<string, CategoryGuidance> = {
  "blended-scotch": WHISKY_GUIDANCE,
  "made-in-india-whisky": WHISKY_GUIDANCE,
  "single-malts": WHISKY_GUIDANCE,
  "world-whisky": WHISKY_GUIDANCE,
  whisky: WHISKY_GUIDANCE,
  "red-wine": WINE_GUIDANCE,
  "white-wine": WINE_GUIDANCE,
  "rose-wine": WINE_GUIDANCE,
  "sparkling-wine": WINE_GUIDANCE,
  champagne: WINE_GUIDANCE,
  wine: WINE_GUIDANCE,
  beer: {
    emoji: "🍺",
    profile: "Beer can range from crisp and lightly malted to hoppy, fruity, roasted or full-bodied. Malt, hops, yeast, strength and serving condition shape the individual glass.",
    compare: "Compare the beer style, strength where declared, pack size and freshness guidance. Lager, wheat beer, ale, stout and fruit-led styles should not be treated as one flavour profile.",
    serving: "Chill to suit the style and pour into a clean glass with room for the head. Very cold service can mute aroma, particularly in fuller ales and darker beers.",
    pairings: [
      { title: "Casual plates", items: ["pizza", "burgers", "fried snacks", "grilled corn"] },
      { title: "Indian favourites", items: ["tandoori starters", "chaat", "kebabs", "spiced paneer"] },
    ],
  },
  beers: {
    emoji: "🍺",
    profile: "Beer can range from crisp and lightly malted to hoppy, fruity, roasted or full-bodied. Malt, hops, yeast, strength and serving condition shape the individual glass.",
    compare: "Compare the beer style, strength where declared, pack size and freshness guidance. Lager, wheat beer, ale, stout and fruit-led styles should not be treated as one flavour profile.",
    serving: "Chill to suit the style and pour into a clean glass with room for the head. Very cold service can mute aroma, particularly in fuller ales and darker beers.",
    pairings: [
      { title: "Casual plates", items: ["pizza", "burgers", "fried snacks", "grilled corn"] },
      { title: "Indian favourites", items: ["tandoori starters", "chaat", "kebabs", "spiced paneer"] },
    ],
  },
  gin: {
    emoji: "🍸",
    profile: "Gin is defined by a juniper-led botanical profile, but citrus, floral, herbal, earthy and spice notes vary widely between expressions.",
    compare: "Compare the stated gin style, botanical emphasis, flavouring, bottling strength and bottle size. A London dry expression can behave very differently from a flavoured or Old Tom style.",
    serving: "Try a measured serve with plenty of ice and a neutral tonic, or use the bottle in a Martini, Gimlet or Collins-style drink. Keep garnish simple enough to let the gin remain recognisable.",
    pairings: [
      { title: "Bright flavours", items: ["citrus salads", "grilled vegetables", "herbed paneer", "seafood starters"] },
      { title: "Light snacks", items: ["olives", "soft cheese", "cucumber bites", "salted nuts"] },
    ],
  },
  vodka: {
    emoji: "🍸",
    profile: "Vodka is usually clean and restrained, although texture, base material and added flavours can create noticeable differences between bottles.",
    compare: "Compare plain and flavoured expressions, declared strength, texture, bottle size and intended use. Check the label rather than assuming every vodka is neutral.",
    serving: "Serve well chilled in a small glass, over ice, or in measured mixed drinks such as a Highball, Mule or Bloody Mary. Flavoured bottles may need less additional sweetness.",
    pairings: [
      { title: "Clean, salty flavours", items: ["pickles", "olives", "smoked fish", "salted nuts"] },
      { title: "Spiced plates", items: ["tandoori starters", "pepper chicken", "spiced paneer", "crispy potatoes"] },
    ],
  },
  rum: {
    emoji: "🥃",
    profile: "Rum may be light and clean, rich and molasses-led, fruity, spiced or oak-influenced. Production style and maturation matter more than colour alone.",
    compare: "Compare white, gold, dark, spiced and aged styles, along with declared strength and bottle size. Colour does not by itself establish age or quality.",
    serving: "Use lighter styles in a Daiquiri or Highball, while fuller bottles may suit slow sipping over ice. Match the serve to the expression and avoid masking it with excessive sweetness.",
    pairings: [
      { title: "Smoky and savoury", items: ["barbecue", "jerk-style vegetables", "grilled pineapple", "roasted meats"] },
      { title: "Sweet finish", items: ["dark chocolate", "caramel pudding", "banana desserts", "toasted coconut"] },
    ],
  },
  tequila: {
    emoji: "🌵",
    profile: "Agave spirits can show fresh vegetal, peppery, citrus, earthy, smoky or oak-led notes depending on category and maturation.",
    compare: "Check whether the bottle is tequila or mezcal, then compare blanco, reposado, anejo or other stated styles, declared strength and bottle size.",
    serving: "Sip a measured serve from a small glass, or use it in a Margarita, Paloma or spirit-forward agave cocktail. Fresh lime and moderate sweetness usually keep the base spirit clear.",
    pairings: [
      { title: "Fresh and spicy", items: ["salsa", "grilled corn", "citrus salad", "chilli paneer"] },
      { title: "Charred flavours", items: ["barbecue", "roasted peppers", "grilled seafood", "smoked cheese"] },
    ],
  },
  brandy: {
    emoji: "🥃",
    profile: "Brandy can present dried fruit, fresh grape, floral, spice and oak notes, with texture and maturity varying by origin and individual expression.",
    compare: "Compare the declared brandy style, region or appellation, maturation statement where provided, bottling strength and bottle size.",
    serving: "Serve a modest measure neat in a tulip-shaped glass, with a little water if preferred, or use younger styles in classic mixed drinks. Avoid overheating the glass.",
    pairings: [
      { title: "After-dinner pairings", items: ["dark chocolate", "dried fruit", "nuts", "aged cheese"] },
      { title: "Rich dishes", items: ["mushroom dishes", "roast meats", "caramel desserts", "fruit cake"] },
    ],
  },
  liqueurs: {
    emoji: "🍹",
    profile: "Liqueurs may be fruit-led, herbal, creamy, coffee-flavoured, nutty or spice-forward. Sweetness and strength differ substantially between expressions.",
    compare: "Compare the flavour family, dairy or allergen information where relevant, declared strength, sweetness and bottle size. Intended cocktail use can also guide the choice.",
    serving: "Use a small chilled measure, pour over ice, or add carefully to cocktails and coffee-style drinks. Reduce other sweet ingredients when the liqueur is already rich.",
    pairings: [
      { title: "Dessert matches", items: ["dark chocolate", "coffee desserts", "fruit tart", "vanilla ice cream"] },
      { title: "Simple contrasts", items: ["salted nuts", "aged cheese", "fresh berries", "citrus cake"] },
    ],
  },
  "ready-to-drink": {
    emoji: "🥤",
    profile: "Ready-to-drink beverages are pre-mixed for convenience and can range from light, citrus-led coolers to sweeter or spirit-forward canned cocktails.",
    compare: "Check the flavour, declared strength, sugar information where shown, pack size and whether the drink is carbonated. Similar flavours can differ greatly in sweetness.",
    serving: "Chill thoroughly and serve directly from the pack or over fresh ice, following the label instructions. Do not add extra spirit to a drink that is already pre-mixed.",
    pairings: [
      { title: "Easy snacks", items: ["nachos", "grilled corn", "vegetable skewers", "crispy starters"] },
      { title: "Fresh plates", items: ["fruit platter", "salads", "light sandwiches", "mild cheese"] },
    ],
  },
  sake: {
    emoji: "🍶",
    profile: "Sake may be clean, rice-led, fruity, floral, savoury or gently sweet. Rice polishing, brewing style and serving temperature influence the experience.",
    compare: "Compare the stated sake style, polishing information where supplied, sweetness or dryness cues, serving guidance and bottle size.",
    serving: "Follow the label for chilled, room-temperature or warm service. Use a small clean glass or sake cup and avoid heating delicate aromatic styles too aggressively.",
    pairings: [
      { title: "Umami-rich dishes", items: ["mushrooms", "grilled fish", "tofu", "soy-seasoned vegetables"] },
      { title: "Lighter plates", items: ["sushi", "salads", "steamed dumplings", "mild cheese"] },
    ],
  },
};

const FALLBACK_GUIDANCE: CategoryGuidance = {
  emoji: "🍷",
  profile: "Aroma, flavour, sweetness, body and finish vary by product style. Treat each label as its own expression and use the producer's current bottle information for exact details.",
  compare: "Compare the beverage style, declared strength, bottle size, ingredients or production notes shown on the label, and the purpose for which you plan to serve it.",
  serving: "Follow the bottle's serving guidance, use clean glassware and begin with a modest measure. Adjust temperature, dilution and mixer choice to the individual style.",
  pairings: [
    { title: "Lighter options", items: ["salads", "mild cheese", "roasted nuts", "grilled vegetables"] },
    { title: "Richer options", items: ["spiced starters", "mushroom dishes", "grilled meats", "dark chocolate"] },
  ],
};

const jsonObject = (value: Prisma.JsonValue): JsonObject => (
  value && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : {}
);

const clean = (value: unknown) => String(value ?? "")
  .replace(/[\u2013\u2014]/g, ",")
  .replace(/\s+/g, " ")
  .trim();

const identity = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "");

const unique = (values: string[]) => [...new Set(values.map(clean).filter(Boolean))];

const humanList = (values: string[], limit = 4) => {
  const selected = unique(values).slice(0, limit);
  return new Intl.ListFormat("en-IN", { style: "long", type: "conjunction" }).format(selected);
};

const sentenceCase = (value: string) => value ? `${value[0].toUpperCase()}${value.slice(1)}` : value;

const volumeMl = (value: unknown) => {
  const match = clean(value).match(/([0-9]+(?:\.[0-9]+)?)\s*(ml|l)\b/i);
  if (!match) return null;
  const amount = Number(match[1]);
  return Math.round(match[2].toLowerCase() === "l" ? amount * 1000 : amount);
};

const formatVolume = (value: number) => {
  if (value === 1000) return "1 litre (1,000ml)";
  if (value > 1000 && value % 1000 === 0) return `${value / 1000} litres (${value.toLocaleString("en-IN")}ml)`;
  return `${value.toLocaleString("en-IN")}ml`;
};

const fullProductName = (brandName: string, productName: string) => {
  const brandKey = identity(brandName);
  const productKey = identity(productName);
  const brandTokens = new Set(brandName.toLowerCase().match(/[a-z0-9]+/g) ?? []);
  const productTokens = new Set(productName.toLowerCase().match(/[a-z0-9]+/g) ?? []);
  const sharedTokens = [...brandTokens].filter((token) => productTokens.has(token)).length;
  const overlap = sharedTokens / Math.max(1, Math.min(brandTokens.size, productTokens.size));
  return productKey.startsWith(brandKey) || overlap >= 0.5
    ? productName
    : `${brandName} ${productName}`.trim();
};

const trimAtWord = (value: string, maxLength: number) => {
  const normalized = clean(value);
  if (normalized.length <= maxLength) return normalized;
  const shortened = normalized.slice(0, maxLength - 1).replace(/\s+\S*$/, "").replace(/[,:;]$/, "");
  return `${shortened}.`;
};

const metaTitle = (brandName: string) => {
  const options = [
    `${brandName} Products, Sizes & Prices | BevOry`,
    `${brandName} Products & Prices | BevOry`,
    `${brandName} Brand Guide | BevOry`,
  ];
  const matching = options.find((value) => value.length <= 60);
  if (matching) return matching;
  const suffix = " | BevOry";
  const shortenedBrand = trimAtWord(brandName, 60 - suffix.length).replace(/\.$/, "");
  return `${shortenedBrand}${suffix}`;
};

const metaDescription = (brandName: string, categoryNames: string[]) => {
  const categoryText = humanList(categoryNames, 2).toLowerCase() || "beverage";
  const options = [
    `Explore ${brandName} products across ${categoryText}, plus bottle sizes and serving guidance. Reviewed local prices appear by city where available.`,
    `Compare ${brandName} products, known bottle sizes and serving guidance on BevOry. Reviewed local prices are shown by city where available.`,
    `Explore ${brandName} products and bottle sizes on BevOry, with serving guidance and reviewed local prices where available.`,
  ];
  return options.find((value) => value.length <= 160) ?? trimAtWord(options[2], 160);
};

const categoryCounts = (products: CatalogueRow[]) => {
  const counts = new Map<string, number>();
  for (const product of products) {
    const id = clean(product.data.category_id);
    if (id) counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return [...counts].sort((left, right) => right[1] - left[1]);
};

const primaryGuidance = (categorySlugs: string[]) => (
  categorySlugs.map((slug) => GUIDANCE[slug]).find(Boolean) ?? FALLBACK_GUIDANCE
);

export const buildBrandProfile = ({ brand, products, categoriesById, subcategoriesById }: BrandProfileInput): GeneratedBrandProfile => {
  const brandName = clean(brand.data.brand_name) || "This brand";
  const rankedCategoryIds = categoryCounts(products).map(([id]) => id);
  const categories = rankedCategoryIds.map((id) => categoriesById.get(id)).filter(Boolean) as JsonObject[];
  const categoryNames = unique(categories.map((category) => clean(category.name)));
  const categorySlugs = unique(categories.map((category) => clean(category.slug)));
  const subcategoryNames = unique(products
    .map((product) => subcategoriesById.get(clean(product.data.sub_category_id)))
    .filter(Boolean)
    .map((subcategory) => clean(subcategory?.name)));
  const guidance = primaryGuidance(categorySlugs);
  const productNames = unique(products.map((product) => fullProductName(brandName, clean(product.data.name))));
  const sizes = [...new Set(products.flatMap((product) => {
    const listed = Array.isArray(product.data.available_volumes_ml)
      ? product.data.available_volumes_ml.map(Number).filter((value) => Number.isFinite(value) && value > 0)
      : [];
    const fallback = volumeMl(product.data.volume);
    return fallback ? [...listed, fallback] : listed;
  }))].sort((left, right) => left - right);
  const representative = [...products].sort((left, right) => {
    const leftImage = left.data.image_identity_verified === true && clean(left.data.image_url).startsWith("https://bevory.in/media/") ? 1 : 0;
    const rightImage = right.data.image_identity_verified === true && clean(right.data.image_url).startsWith("https://bevory.in/media/") ? 1 : 0;
    const leftPreferred = Array.isArray(left.data.available_volumes_ml) && left.data.available_volumes_ml.includes(750) ? 1 : 0;
    const rightPreferred = Array.isArray(right.data.available_volumes_ml) && right.data.available_volumes_ml.includes(750) ? 1 : 0;
    return rightImage - leftImage || rightPreferred - leftPreferred || clean(left.data.name).localeCompare(clean(right.data.name));
  })[0] ?? null;
  const verifiedImage = representative?.data.image_identity_verified === true
    && clean(representative.data.image_url).startsWith("https://bevory.in/media/")
    ? clean(representative.data.image_url)
    : null;
  const categoriesText = humanList(categoryNames, 4) || "beverage styles";
  const stylesText = humanList(subcategoryNames, 5);
  const productsText = humanList(productNames, 4) || `${brandName} labels`;
  const sizesText = humanList(sizes.map(formatVolume), 6) || "sizes shown on each product page";
  const rangeDetail = stylesText
    ? `The listed styles include ${stylesText}.`
    : `The exact style is shown on each product page.`;
  const description = clean(
    `${brandName} is represented on BevOry across ${categoriesText}. Current listings include ${productsText}, with known bottle formats such as ${sizesText}. Use the city selector to see reviewed local prices where available.`,
  );
  const story = clean(
    `The ${brandName} range on BevOry is organised by product style and bottle format so adults can compare like with like. ${rangeDetail} Availability is not assumed across India: a bottle or size appears with a local price only where BevOry has a reviewed city record. Product labels remain the authority for current strength, ingredients and production details.`,
  );
  const tastingNotes = [
    {
      title: "Profile varies by expression",
      description: `${guidance.profile} This is a general style guide, not a claim that every ${brandName} bottle tastes the same.`,
    },
    {
      title: "Useful points to compare",
      description: guidance.compare,
    },
    {
      title: "Read the individual label",
      description: `Check the specific ${brandName} product page and bottle label for declared alcohol strength, age, ingredients, vintage or maturation details. BevOry does not fill missing technical facts with estimates.`,
    },
  ].map((item) => ({ ...item, description: clean(item.description) }));
  const howToEnjoy = [
    { subheading: "Match the serve to the style", description: guidance.serving },
    {
      subheading: "Compare before choosing",
      description: `Start with the exact ${brandName} expression, then check its style and size. A serve that works for one bottle may not suit another product in the same range.`,
    },
    {
      subheading: "Keep the occasion responsible",
      description: "Use measured servings, alternate with water and never drink before driving. Alcohol is intended only for adults who have reached the legal drinking age in their location.",
    },
  ].map((item) => ({ ...item, description: clean(item.description) }));
  const whyChoose = clean(
    `${brandName} is worth comparing when you are exploring ${categoriesText} and want to check product styles, known bottle sizes and city-specific price records in one place. The useful distinction lies in the individual expression: compare ${stylesText || "the listed style"}, format and verified local availability instead of treating the brand as a single flavour profile.`,
  );
  const faqs = [
    {
      question: `What type of alcohol is ${brandName}?`,
      answer: `BevOry currently classifies ${brandName} listings across ${categoriesText}. ${rangeDetail} Categories reflect the products in the present catalogue and may expand when another verified label is added.`,
    },
    {
      question: `Which ${brandName} products are listed on BevOry?`,
      answer: `Current examples include ${productsText}. Open the brand page for the latest catalogue, then select an individual product to compare its known sizes and local price status.`,
    },
    {
      question: `Which ${brandName} bottle sizes are available?`,
      answer: `Known catalogue sizes include ${sizesText}. A size can be listed nationally even when a reviewed price is not yet available in the selected city, so check the city-specific product page before relying on availability.`,
    },
    {
      question: `How should ${brandName} be served?`,
      answer: `${guidance.serving} Always follow the current product label and adjust the serve to the specific expression rather than the brand name alone.`,
    },
    {
      question: `What is the price of ${brandName} in my city?`,
      answer: `Choose your city on BevOry and open the relevant ${brandName} product and size. Prices can vary by state, retailer, taxes, bottle size and date; BevOry shows a numeric price only where a reviewed local record is available.`,
    },
  ].map((item) => ({ question: clean(item.question), answer: clean(item.answer) }));
  const finalVerdict = clean(
    `${brandName} should be approached as a range of individual products, not as one fixed taste. BevOry's catalogue is most useful for narrowing the choice by ${stylesText || "style"}, bottle size and city-level price availability. Confirm the current bottle label and local retail details before making a decision.`,
  );

  return {
    description,
    story,
    tasting_notes: tastingNotes,
    how_to_enjoy: howToEnjoy,
    pairing_ideas: guidance.pairings,
    why_choose: whyChoose,
    faqs,
    final_verdict: finalVerdict,
    meta_title: metaTitle(brandName),
    meta_description: metaDescription(brandName, categoryNames),
    logo_emoji: guidance.emoji,
    image_url: verifiedImage,
    featured_product_id: representative?.id ?? null,
  };
};

const hasContent = (value: unknown) => {
  if (Array.isArray(value)) return value.length > 0;
  return clean(value).length > 0;
};

const applyGeneratedField = (data: JsonObject, generated: JsonObject, key: string, force: boolean) => {
  if (force || !hasContent(data[key])) data[key] = generated[key];
};

const validatePublishedContent = (data: JsonObject) => {
  const keys = ["description", "story", "tasting_notes", "how_to_enjoy", "pairing_ideas", "why_choose", "faqs", "final_verdict", "meta_title", "meta_description"];
  const content = JSON.stringify(Object.fromEntries(keys.map((key) => [key, data[key]])));
  const violations: string[] = [];
  if (/[\u2013\u2014]/.test(content)) violations.push("dash punctuation");
  if (/https?:\/\/|www\./i.test(content)) violations.push("external link");
  if (/\baccording to\b|\bsources? suggest\b|\breferences?\b/i.test(content)) violations.push("source language");
  if (clean(data.meta_title).length > 60) violations.push("meta title length");
  if (clean(data.meta_description).length > 160) violations.push("meta description length");
  if (violations.length) throw new Error(`${clean(data.brand_name)} failed editorial validation: ${violations.join(", ")}`);
};

const main = async () => {
  const args = new Set(process.argv.slice(2));
  const apply = args.has("--apply");
  const force = args.has("--force");
  const records = await prisma.contentRecord.findMany({
    where: { tableName: { in: ["brand_spotlights", "categories", "products", "sub_categories"] } },
  });
  const rows = records.map((record) => ({ id: record.recordId, table: record.tableName, data: jsonObject(record.data) }));
  const brands = rows.filter((row) => row.table === "brand_spotlights").map(({ id, data }) => ({ id, data }));
  const products = rows.filter((row) => row.table === "products" && row.data.is_active !== false).map(({ id, data }) => ({ id, data }));
  const categoriesById = new Map(rows.filter((row) => row.table === "categories").map((row) => [row.id, row.data]));
  const subcategoriesById = new Map(rows.filter((row) => row.table === "sub_categories").map((row) => [row.id, row.data]));
  const productsByBrandId = new Map<string, CatalogueRow[]>();
  for (const product of products) {
    const brandId = clean(product.data.brand_id);
    if (!brandId) continue;
    const grouped = productsByBrandId.get(brandId) ?? [];
    grouped.push(product);
    productsByBrandId.set(brandId, grouped);
  }
  const now = new Date().toISOString();
  const updates: Array<{ id: string; data: JsonObject }> = [];
  const report = {
    mode: apply ? "apply" : "dry-run",
    brands: brands.length,
    enriched: 0,
    editorialBrandsProtected: 0,
    withoutProducts: 0,
    representativeImagesAdded: 0,
    verifiedLogosPreserved: 0,
    countriesPreserved: 0,
    countryClaimsOmitted: 0,
    officialLinksPreserved: 0,
  };

  for (const brand of brands) {
    // Catalogue-derived templates must never replace the separately edited guides, even with --force.
    if (hasManagedBrandEditorial(brand)) {
      report.editorialBrandsProtected += 1;
      continue;
    }
    const linkedProducts = productsByBrandId.get(brand.id) ?? [];
    if (!linkedProducts.length) {
      report.withoutProducts += 1;
      continue;
    }
    const generated = buildBrandProfile({ brand, products: linkedProducts, categoriesById, subcategoriesById });
    const next: JsonObject = { ...brand.data };
    const generatedObject = generated as unknown as JsonObject;
    for (const key of [
      "description", "story", "tasting_notes", "how_to_enjoy", "pairing_ideas",
      "why_choose", "faqs", "final_verdict", "meta_title", "meta_description", "logo_emoji",
    ]) applyGeneratedField(next, generatedObject, key, force);
    if (!hasContent(next.image_url) && generated.image_url) {
      next.image_url = generated.image_url;
      next.image_identity_verified = true;
      next.image_storage_provider = "s3";
      report.representativeImagesAdded += 1;
    }
    if (!hasContent(next.featured_product_id) && generated.featured_product_id) next.featured_product_id = generated.featured_product_id;
    next.content_version = "catalogue-profile-v1";
    next.content_updated_at = now;
    next.content_basis = "verified BevOry catalogue fields";
    next.history_claims_included = false;
    next.id = brand.id;
    next.updated_at = now;
    if (hasContent(next.logo_url)) report.verifiedLogosPreserved += 1;
    if (hasContent(next.country)) report.countriesPreserved += 1;
    else report.countryClaimsOmitted += 1;
    if (hasContent(next.link_url)) report.officialLinksPreserved += 1;
    validatePublishedContent(next);
    updates.push({ id: brand.id, data: next });
    report.enriched += 1;
  }

  if (apply) {
    for (let index = 0; index < updates.length; index += 100) {
      const batch = updates.slice(index, index + 100);
      await prisma.$transaction(batch.map((item) => prisma.contentRecord.update({
        where: { key: `brand_spotlights:${item.id}` },
        data: { data: item.data as Prisma.InputJsonObject },
      })));
    }
  }

  console.log(JSON.stringify(report, null, 2));
};

if (process.env.NODE_ENV !== "test" && process.argv[1]?.includes("enrich-brand-content")) {
  main().finally(() => prisma.$disconnect());
}
