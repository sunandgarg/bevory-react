import "dotenv/config";
import { Prisma, PrismaClient } from "@prisma/client";
import { fullProductName } from "../src/lib/productName.js";

type JsonObject = Record<string, unknown>;

type CatalogueRow = {
  id: string;
  data: JsonObject;
};

type ProductGuidance = {
  emoji: string;
  profile: string;
  colour: string;
  aroma: string;
  flavour: string;
  texture: string;
  finish: string;
  servingTemperature: string;
  glassware: string;
  serving: string;
  cocktailUse: string;
  pairings: string[];
  compare: string;
};

export type ProductProfileInput = {
  product: CatalogueRow;
  categoriesById: Map<string, JsonObject>;
  subcategoriesById: Map<string, JsonObject>;
};

export type GeneratedProductProfile = {
  description: string;
  taste_profile: string;
  tasting_notes: string;
  type_tag: string;
  type_description: string;
  colour_note: string;
  aroma_note: string;
  flavour_note: string;
  texture_note: string;
  finish_note: string;
  ingredients_note: string;
  production_note: string;
  serving_temperature: string;
  glassware: string;
  serving_guide: string;
  food_pairings: string[];
  cocktail_uses: string;
  who_may_enjoy: string;
  label_guidance: string;
  responsible_notice: string;
  faqs: Array<{ question: string; answer: string }>;
  meta_title: string;
  meta_description: string;
  primary_keyword: string;
  h1: string;
  author_line: string;
  recommended_schema_types: string[];
  internal_link_suggestions: string[];
  image_emoji: string;
};

const prisma = new PrismaClient();

const WHISKY: ProductGuidance = {
  emoji: "🥃",
  profile: "Whisky can range from light grain and orchard-fruit notes to malt, spice, smoke and oak. Maturation, cask choice and bottling strength shape the individual expression.",
  colour: "Whisky colour may range from pale gold to deep amber. Colour alone does not establish age or quality.",
  aroma: "look for grain, malt, fruit, spice, smoke or oak only where they are present in the poured sample",
  flavour: "compare sweetness, cereal character, fruit, spice, oak and any smoky notes without assuming they apply to every bottle",
  texture: "Body can feel light, rounded, oily or full, depending on the style and strength",
  finish: "The finish may be short, warming, spicy, smoky or oak-led and should be assessed on the exact expression",
  servingTemperature: "Cool room temperature, with water or ice if preferred",
  glassware: "Tulip-shaped tasting glass or a clean rocks glass",
  serving: "Begin with a modest measure and try it neat before adding a little water. A highball can suit lighter styles, while ice is a matter of preference rather than a quality test.",
  cocktailUse: "Use only when the exact whisky style suits the recipe. Highballs and spirit-forward classics are useful starting points, with sweetness adjusted to the bottle.",
  pairings: ["grilled paneer", "roasted mushrooms", "kebabs", "smoked cheese", "salted nuts", "dark chocolate"],
  compare: "Compare the whisky style, age statement where declared, cask information, ABV and bottle size.",
};

const RED_WINE: ProductGuidance = {
  emoji: "🍷",
  profile: "Red wine varies in fruit character, acidity, tannin, body and oak influence. Grape variety, region, vintage and winemaking choices all matter.",
  colour: "Red wine may range from ruby and garnet to deeper purple or brick tones, depending on grape, age and condition.",
  aroma: "look for fresh or dried fruit, floral, herbal, spice and oak notes that are actually present",
  flavour: "compare fruit intensity, acidity, tannin, alcohol warmth and any savoury or oak character",
  texture: "Body can range from light and supple to structured and full, while tannin may feel soft, firm or drying",
  finish: "The finish may be fruit-led, savoury, spicy or oak-influenced and varies by wine and vintage",
  servingTemperature: "Usually 14 to 18°C, adjusted for body and style",
  glassware: "Clean red-wine glass with enough bowl space for aroma",
  serving: "Serve slightly below warm room temperature. Taste before deciding whether aeration or decanting is useful, since not every red benefits from extended air.",
  cocktailUse: "Red wine is normally best assessed as wine first. Use it in a wine cocktail only when the recipe specifically calls for that style and vintage character is not being masked.",
  pairings: ["tomato-based pasta", "mushroom dishes", "grilled meats", "paneer tikka", "aged cheese", "lentil dishes"],
  compare: "Compare grape or blend, region, vintage where stated, body, sweetness, bottle size and serving context.",
};

const WHITE_WINE: ProductGuidance = {
  emoji: "🥂",
  profile: "White wine can be crisp and citrus-led, floral, tropical, mineral, creamy or gently sweet. Grape, region, vintage and winemaking style determine the exact balance.",
  colour: "White wine may appear nearly colourless, straw, lemon or gold. Deeper colour does not by itself indicate better quality.",
  aroma: "look for citrus, orchard fruit, tropical fruit, floral, herbal, mineral or oak notes only where evident",
  flavour: "compare acidity, fruit, sweetness, texture and any lees or oak influence",
  texture: "Body can range from lean and refreshing to rounded, creamy or rich",
  finish: "The finish may be crisp, fruity, mineral, creamy or gently sweet depending on the label",
  servingTemperature: "Usually 7 to 12°C, with fuller styles served slightly warmer",
  glassware: "Clean white-wine glass with a moderate bowl",
  serving: "Chill the wine, but avoid serving it so cold that aroma disappears. Let a fuller bottle warm slightly in the glass if needed.",
  cocktailUse: "Use in spritzes or wine cocktails only when the recipe suits the wine's sweetness and acidity. Avoid masking a delicate bottle with heavy mixers.",
  pairings: ["grilled vegetables", "soft cheese", "seafood", "light pasta", "mild paneer dishes", "fresh salads"],
  compare: "Compare grape or blend, region, vintage where stated, sweetness, acidity, bottle size and serving temperature.",
};

const ROSE_WINE: ProductGuidance = {
  emoji: "🍷",
  profile: "Rose wine may be dry or gently sweet, with red-fruit, citrus, floral and savoury notes varying by grape and winemaking method.",
  colour: "Rose can range from pale onion skin and salmon to vivid pink. Colour is a style cue, not a quality score.",
  aroma: "look for red berries, citrus, flowers, herbs or light spice where present",
  flavour: "compare fruit, freshness, acidity, sweetness and any savoury edge",
  texture: "Most styles are light to medium-bodied, though structure and richness vary",
  finish: "The finish may be crisp, fruity, floral or lightly savoury",
  servingTemperature: "Usually 7 to 10°C",
  glassware: "Clean white-wine or universal wine glass",
  serving: "Serve well chilled but not icy. Allow a fuller rose a few minutes in the glass so its aroma is not muted.",
  cocktailUse: "A dry rose can work in a light spritz when the recipe preserves its acidity. Sweeter styles need less added syrup or liqueur.",
  pairings: ["salads", "grilled vegetables", "light pasta", "soft cheese", "tandoori starters", "fruit-based dishes"],
  compare: "Compare grape or blend, sweetness, acidity, region, vintage where stated and bottle size.",
};

const SPARKLING_WINE: ProductGuidance = {
  emoji: "🥂",
  profile: "Sparkling wine balances bubbles, acidity, fruit and sweetness. Grape blend, production method, ageing and dosage affect the final style.",
  colour: "Sparkling wine may range from pale straw to gold or pink, depending on grape and style.",
  aroma: "look for citrus, orchard fruit, flowers, bread-like notes or berries where they are present",
  flavour: "compare freshness, fruit, sweetness, mousse and any savoury or pastry character",
  texture: "Bubbles may feel fine and creamy or lively and brisk",
  finish: "The finish may be dry, fruity, mineral, creamy or gently sweet",
  servingTemperature: "Usually 6 to 10°C",
  glassware: "Tulip-shaped sparkling-wine glass or a clean white-wine glass",
  serving: "Chill thoroughly, open carefully and pour down the side of the glass in stages. A tulip shape preserves bubbles while allowing more aroma than a very narrow flute.",
  cocktailUse: "Use in a spritz or sparkling cocktail only when the recipe matches the wine's sweetness. Add sparkling wine last and stir gently to preserve carbonation.",
  pairings: ["salted nuts", "soft cheese", "fried starters", "seafood", "lightly spiced snacks", "fruit tart"],
  compare: "Compare sweetness level, grape blend, production method where stated, bottle size and serving occasion.",
};

const BEER: ProductGuidance = {
  emoji: "🍺",
  profile: "Beer can be crisp and lightly malted, hoppy, fruity, roasted, sour or full-bodied. Malt, hops, yeast, strength and serving condition shape the glass.",
  colour: "Beer colour can range from pale straw to amber, brown or opaque black, depending on malt and style.",
  aroma: "look for malt, hops, fruit, spice, roast or fermentation character appropriate to the style",
  flavour: "compare malt sweetness, hop bitterness, fruit, roast, acidity and alcohol warmth",
  texture: "Body may be light, creamy, crisp, chewy or effervescent, with carbonation playing a major role",
  finish: "The finish can be dry, bitter, malty, fruity, roasted or warming",
  servingTemperature: "Serve chilled, with fuller or darker styles slightly warmer than light lager",
  glassware: "Clean beer glass with space for the head",
  serving: "Chill to suit the style and pour into a clean glass with room for foam. Avoid freezing the glass, which can mute aroma and disturb carbonation.",
  cocktailUse: "Use in a beer cocktail only when the recipe complements the beer style. Citrus and spice can suit lighter beers, while dark beer needs richer ingredients.",
  pairings: ["pizza", "burgers", "fried snacks", "grilled corn", "tandoori starters", "spiced paneer"],
  compare: "Compare beer style, ABV where declared, bitterness, pack size, freshness guidance and serving condition.",
};

const GIN: ProductGuidance = {
  emoji: "🍸",
  profile: "Gin is juniper-led, while citrus, floral, herbal, earthy and spice notes vary widely between expressions.",
  colour: "Most unaged gin is clear, while flavoured or matured expressions may carry colour from ingredients or cask contact.",
  aroma: "look for juniper alongside citrus peel, flowers, herbs, roots or spice where present",
  flavour: "compare botanical intensity, citrus, sweetness, spice, bitterness and alcohol warmth",
  texture: "Body may feel lean, silky, oily or full depending on distillation and strength",
  finish: "The finish may be dry, citrus-led, herbal, floral, spicy or warming",
  servingTemperature: "Chilled or served over plenty of fresh ice",
  glassware: "Highball, Copa-style glass or a chilled cocktail glass",
  serving: "Try a measured serve with a neutral tonic and simple garnish, or taste a small amount with water before mixing. Match tonic sweetness and garnish to the specific botanical profile.",
  cocktailUse: "Common starting points include a Gin and Tonic, Martini, Gimlet or Collins-style drink. Keep other ingredients measured so the gin remains identifiable.",
  pairings: ["citrus salads", "grilled vegetables", "herbed paneer", "seafood starters", "olives", "soft cheese"],
  compare: "Compare gin style, botanical emphasis, flavouring, ABV where declared and bottle size.",
};

const VODKA: ProductGuidance = {
  emoji: "🍸",
  profile: "Vodka is usually clean and restrained, although texture, base material and added flavours can create noticeable differences.",
  colour: "Plain vodka is generally clear. Flavoured products may differ, so use the current label and poured sample.",
  aroma: "look for a clean base, light grain or fruit character, and any declared flavouring",
  flavour: "compare neutrality, sweetness, flavour intensity and alcohol warmth",
  texture: "Texture can feel lean, silky, creamy or viscous depending on the product and serving temperature",
  finish: "The finish may be clean, warming, lightly sweet or flavour-led",
  servingTemperature: "Well chilled, over ice or mixed when the style suits it",
  glassware: "Small chilled glass, rocks glass or highball",
  serving: "Serve a measured amount well chilled, over ice or in a balanced mixed drink. Flavoured vodka often needs less syrup or sweet mixer.",
  cocktailUse: "Use in a Mule, Highball, Bloody Mary or other measured cocktail that suits the exact flavour. Check whether the bottle is plain or flavoured before choosing mixers.",
  pairings: ["pickles", "olives", "smoked fish", "salted nuts", "tandoori starters", "spiced paneer"],
  compare: "Compare plain and flavoured styles, base material where declared, texture, ABV and bottle size.",
};

const RUM: ProductGuidance = {
  emoji: "🥃",
  profile: "Rum may be light and clean, rich and molasses-led, fruity, spiced or oak-influenced. Production style and maturation matter more than colour alone.",
  colour: "Rum may be clear, gold, amber or dark. Colour alone does not verify age or cask history.",
  aroma: "look for cane sweetness, fruit, spice, caramel, oak or grassy notes where present",
  flavour: "compare sweetness, fruit, spice, oak, ester character and alcohol warmth",
  texture: "Body can range from light and crisp to rounded, oily or rich",
  finish: "The finish may be clean, fruity, spicy, oaky, sweet or warming",
  servingTemperature: "Cool room temperature, over ice or mixed when the style suits it",
  glassware: "Tulip-shaped tasting glass, rocks glass or highball",
  serving: "Try a modest measure before mixing. Lighter styles may suit a Daiquiri or Highball, while fuller expressions can be served over ice when appropriate.",
  cocktailUse: "Daiquiri, Highball and tropical formats are useful starting points, but mixer sweetness should be reduced for rich or flavoured rum.",
  pairings: ["barbecue", "grilled pineapple", "roasted meats", "jerk-style vegetables", "dark chocolate", "toasted coconut"],
  compare: "Compare white, gold, dark, spiced, flavoured and aged styles, plus ABV and bottle size.",
};

const TEQUILA: ProductGuidance = {
  emoji: "🌵",
  profile: "Agave spirits can show fresh vegetal, peppery, citrus, earthy, smoky or oak-led notes depending on category and maturation.",
  colour: "Unaged agave spirit is usually clear, while rested or aged styles may show straw to amber tones.",
  aroma: "look for cooked or fresh agave, citrus, pepper, herbs, earth, smoke or oak where present",
  flavour: "compare agave character, sweetness, pepper, citrus, smoke, oak and alcohol warmth",
  texture: "Body may feel crisp, oily, rounded or rich depending on style and maturation",
  finish: "The finish may be peppery, vegetal, citrus-led, smoky, oaky or warming",
  servingTemperature: "Cool room temperature or lightly chilled, depending on style",
  glassware: "Small tulip-shaped agave glass, rocks glass or cocktail glass",
  serving: "Sip a measured serve from a small glass, or use it in a balanced Margarita or Paloma. Fresh citrus and moderate sweetness help preserve the agave character.",
  cocktailUse: "A Margarita or Paloma is a practical starting point. Match the recipe to blanco, reposado, anejo, mezcal or flavoured styles rather than treating them as interchangeable.",
  pairings: ["salsa", "grilled corn", "citrus salad", "chilli paneer", "barbecue", "roasted peppers"],
  compare: "Check whether the bottle is tequila, mezcal or another agave style, then compare maturation, ABV and size.",
};

const BRANDY: ProductGuidance = {
  emoji: "🥃",
  profile: "Brandy can show fresh or dried fruit, floral, spice and oak character, with texture and maturity varying by origin and expression.",
  colour: "Brandy often ranges from pale gold to deep amber, though colour does not prove age or quality.",
  aroma: "look for grape or fruit character, dried fruit, flowers, spice, caramel or oak where present",
  flavour: "compare fruit, sweetness, spice, oak, alcohol warmth and any savoury notes",
  texture: "Body may be light, rounded, silky or full",
  finish: "The finish may be fruity, spicy, oaky, warming or gently sweet",
  servingTemperature: "Cool room temperature, without overheating the glass",
  glassware: "Tulip-shaped brandy or tasting glass",
  serving: "Pour a modest measure into a tulip-shaped glass and allow it to open naturally. Avoid heating the bowl aggressively, which can emphasise alcohol over aroma.",
  cocktailUse: "Younger styles may suit a Sidecar or other classic brandy cocktail. More mature or delicate bottles are better assessed before adding mixers.",
  pairings: ["dark chocolate", "dried fruit", "nuts", "aged cheese", "mushroom dishes", "fruit cake"],
  compare: "Compare declared brandy style, origin or appellation, maturation statement, ABV and bottle size.",
};

const LIQUEUR: ProductGuidance = {
  emoji: "🍹",
  profile: "Liqueurs may be fruit-led, herbal, creamy, coffee-flavoured, nutty or spice-forward. Sweetness and strength differ substantially.",
  colour: "Colour varies with the flavour family, ingredients and any colouring declared on the label.",
  aroma: "look for the stated fruit, herb, cream, coffee, nut or spice character",
  flavour: "compare sweetness, flavour intensity, bitterness, acidity and alcohol warmth",
  texture: "Body may be light and syrupy, creamy, rich or viscous",
  finish: "The finish may be sweet, herbal, fruity, creamy, bitter or spice-led",
  servingTemperature: "Chilled, over ice or measured into a mixed drink",
  glassware: "Small liqueur glass, rocks glass or suitable cocktail glass",
  serving: "Use a small chilled measure, pour over ice or add carefully to a cocktail. Reduce other sweet ingredients when the liqueur is already rich.",
  cocktailUse: "Treat the liqueur as a flavour and sweetness component rather than a direct base-spirit replacement. Measure carefully and rebalance citrus or dilution.",
  pairings: ["dark chocolate", "coffee desserts", "fruit tart", "vanilla ice cream", "salted nuts", "aged cheese"],
  compare: "Compare flavour family, ingredient and allergen information, sweetness, ABV and bottle size.",
};

const READY_TO_DRINK: ProductGuidance = {
  emoji: "🥤",
  profile: "Ready-to-drink beverages are pre-mixed and can range from light citrus coolers to sweeter or more spirit-forward canned cocktails.",
  colour: "Colour varies by flavour and formulation. Check the pack rather than inferring ingredients from appearance.",
  aroma: "look for the declared fruit, botanical, malt, wine or spirit-led character",
  flavour: "compare sweetness, acidity, carbonation, flavour intensity and alcohol warmth",
  texture: "Body is often light and carbonated, though creamy or richer products also exist",
  finish: "The finish may be crisp, sweet, fruity, bitter or warming",
  servingTemperature: "Thoroughly chilled unless the pack states otherwise",
  glassware: "Clean highball or tumbler, or the original pack where appropriate",
  serving: "Chill thoroughly and serve as directed on the pack, either straight or over fresh ice. Do not add extra spirit to a beverage that is already pre-mixed.",
  cocktailUse: "The product is already mixed, so additional ingredients are usually unnecessary. A simple citrus garnish or fresh ice may be enough when the label permits.",
  pairings: ["nachos", "grilled corn", "vegetable skewers", "crispy starters", "fruit platter", "mild cheese"],
  compare: "Compare flavour, ABV, sugar or allergen information where shown, carbonation and pack size.",
};

const SAKE: ProductGuidance = {
  emoji: "🍶",
  profile: "Sake may be clean, rice-led, fruity, floral, savoury or gently sweet. Rice polishing, brewing style and serving temperature influence the experience.",
  colour: "Most sake is clear to pale straw, though style and age can change appearance.",
  aroma: "look for rice, fruit, flowers, herbs, cereal or savoury notes where present",
  flavour: "compare sweetness, acidity, umami, fruit and alcohol warmth",
  texture: "Body may be light and crisp, silky, creamy or rich",
  finish: "The finish may be clean, dry, fruity, savoury or gently sweet",
  servingTemperature: "Follow the label for chilled, room-temperature or warm service",
  glassware: "Small clean sake cup, wine glass or tasting glass",
  serving: "Follow the label for chilled, room-temperature or warm service. Avoid heating a delicate aromatic style aggressively.",
  cocktailUse: "Use in a sake cocktail only when the recipe respects its sweetness and aroma. Start with simple citrus, tea or light fruit components.",
  pairings: ["mushrooms", "grilled fish", "tofu", "soy-seasoned vegetables", "sushi", "steamed dumplings"],
  compare: "Compare stated sake style, polishing information, sweetness or dryness cues, serving guidance and bottle size.",
};

const FALLBACK: ProductGuidance = {
  emoji: "🍷",
  profile: "Aroma, flavour, sweetness, body and finish vary by beverage style. The current product label is the authority for exact technical details.",
  colour: "Appearance varies by category, ingredients and production method.",
  aroma: "identify only the fruit, grain, botanical, spice, fermentation or oak notes actually present",
  flavour: "compare sweetness, acidity, bitterness, flavour intensity and alcohol warmth",
  texture: "Body may range from light and crisp to rounded or full",
  finish: "The finish should be assessed on the exact product rather than inferred from the brand name",
  servingTemperature: "Follow the current product label",
  glassware: "Clean glassware appropriate to the beverage style",
  serving: "Follow the current product label, begin with a modest measure and adjust temperature, dilution or mixer choice to the individual style.",
  cocktailUse: "Use in a mixed drink only when the recipe clearly suits the product category and declared flavour.",
  pairings: ["grilled vegetables", "mild cheese", "roasted nuts", "spiced starters", "mushroom dishes", "dark chocolate"],
  compare: "Compare category, style, ABV where declared, bottle size, ingredients and intended serving method.",
};

const GUIDANCE: Record<string, ProductGuidance> = {
  "blended-scotch": WHISKY,
  "made-in-india-whisky": WHISKY,
  "single-malts": WHISKY,
  "world-whisky": WHISKY,
  whisky: WHISKY,
  "red-wine": RED_WINE,
  "white-wine": WHITE_WINE,
  "rose-wine": ROSE_WINE,
  "sparkling-wine": SPARKLING_WINE,
  champagne: SPARKLING_WINE,
  beer: BEER,
  beers: BEER,
  gin: GIN,
  vodka: VODKA,
  rum: RUM,
  tequila: TEQUILA,
  brandy: BRANDY,
  liqueurs: LIQUEUR,
  "ready-to-drink": READY_TO_DRINK,
  sake: SAKE,
};

const jsonObject = (value: Prisma.JsonValue): JsonObject => (
  value && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : {}
);

const clean = (value: unknown) => String(value ?? "")
  .replace(/[\u2013\u2014]/g, ",")
  .replace(/\s+/g, " ")
  .trim();

const identity = (value: unknown) => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "");

const hasContent = (value: unknown) => {
  if (Array.isArray(value)) return value.length > 0;
  return clean(value).length > 0;
};

const unique = (values: string[]) => [...new Set(values.map(clean).filter(Boolean))];

const humanList = (values: string[], limit = values.length) => (
  new Intl.ListFormat("en-IN", { style: "long", type: "conjunction" }).format(unique(values).slice(0, limit))
);

const formatVolume = (value: number) => {
  if (value === 1000) return "1 litre (1,000ml)";
  if (value > 1000 && value % 1000 === 0) return `${value / 1000} litres (${value.toLocaleString("en-IN")}ml)`;
  return `${value.toLocaleString("en-IN")}ml`;
};

const volumeMl = (value: unknown) => {
  const match = clean(value).match(/([0-9]+(?:\.[0-9]+)?)\s*(ml|l)\b/i);
  if (!match) return null;
  const amount = Number(match[1]);
  return Math.round(match[2].toLowerCase() === "l" ? amount * 1000 : amount);
};

const productVolumes = (data: JsonObject) => {
  const listed = Array.isArray(data.available_volumes_ml)
    ? data.available_volumes_ml.map(Number).filter((value) => Number.isFinite(value) && value > 0)
    : [];
  const fallback = volumeMl(data.volume);
  return [...new Set(fallback ? [...listed, fallback] : listed)].sort((left, right) => left - right);
};

const seededIndex = (value: string, length: number) => {
  let hash = 0;
  for (const character of value) hash = ((hash * 31) + character.charCodeAt(0)) >>> 0;
  return length ? hash % length : 0;
};

const trimAtWord = (value: string, maxLength: number) => {
  const normalized = clean(value);
  if (normalized.length <= maxLength) return normalized;
  const sliced = normalized.slice(0, maxLength - 3);
  const shortened = sliced.replace(/\s+\S*$/, "").replace(/[,:;.]$/, "").trim() || sliced.trim();
  return `${shortened}...`;
};

const buildMetaTitle = (name: string) => {
  const options = [
    `${name}: Sizes & Prices | BevOry`,
    `${name} Price & Product Guide | BevOry`,
    `${name} Product Guide | BevOry`,
  ];
  const matching = options.find((value) => value.length <= 60);
  if (matching) return matching;
  const suffix = " | BevOry";
  const available = 60 - suffix.length;
  const base = trimAtWord(name, available).replace(/\.\.\.$/, "");
  return `${base.slice(0, available).trim()}${suffix}`;
};

const buildMetaDescription = (name: string, classification: string, sizesText: string) => {
  const options = [
    `Explore ${name}, listed as ${classification}, with known sizes ${sizesText}, serving guidance and reviewed city prices where available.`,
    `See ${name} product details, known bottle sizes, general tasting guidance and reviewed local prices by city on BevOry.`,
    `Compare ${name} sizes, style guidance and reviewed city prices on BevOry. Unavailable prices are shown clearly.`,
  ];
  return options.find((value) => value.length >= 140 && value.length <= 160)
    ?? options.find((value) => value.length <= 160)
    ?? trimAtWord(options[2], 160);
};

const classificationText = (categoryName: string, styleName: string) => (
  identity(categoryName) === identity(styleName) || !styleName
    ? categoryName
    : `${styleName} within ${categoryName}`
);

const descriptionFor = (
  seed: string,
  name: string,
  classification: string,
  sizesText: string,
) => {
  const variants = [
    `${name} is listed on BevOry as ${classification}. Known bottle formats include ${sizesText}. This page helps legally aged adults compare reviewed city prices, bottle sizes and practical serving information without assuming availability across India.`,
    `BevOry catalogues ${name} under ${classification}, with known sizes including ${sizesText}. Use the city selector to compare reviewed local price records, then check the current bottle label for technical details before serving.`,
    `For adults comparing ${classification}, ${name} is available in the BevOry catalogue with known formats such as ${sizesText}. Local price coverage varies by city, retailer, taxes, bottle size and date, so a missing price is shown clearly rather than estimated.`,
    `${name} appears in BevOry's ${classification} catalogue in known sizes including ${sizesText}. The product page separates verified city pricing from general style guidance so readers can compare the listing without treating unverified facts as certain.`,
  ];
  return variants[seededIndex(seed, variants.length)];
};

export const buildProductProfile = ({
  product,
  categoriesById,
  subcategoriesById,
}: ProductProfileInput): GeneratedProductProfile => {
  const data = product.data;
  const brandName = clean(data.brand) || "Brand not stated";
  const productName = clean(data.name) || "Product";
  const name = fullProductName(brandName, productName);
  const category = categoriesById.get(clean(data.category_id)) ?? {};
  const subcategory = subcategoriesById.get(clean(data.sub_category_id)) ?? {};
  const categoryName = clean(category.name) || "Alcoholic Beverages";
  const categorySlug = clean(category.slug);
  const styleName = clean(subcategory.name) || clean(data.type_tag) || categoryName;
  const classification = classificationText(categoryName, styleName);
  const guidance = GUIDANCE[categorySlug] ?? FALLBACK;
  const volumes = productVolumes(data);
  const sizesText = humanList(volumes.map(formatVolume), 8) || clean(data.volume) || "the size shown on the current bottle";
  const seed = `${product.id}|${brandName}|${productName}`;
  const abv = Number(data.abv);
  const verifiedAbv = Number.isFinite(abv) && abv > 0 ? `${abv}% ABV` : null;
  const verifiedOrigin = hasContent(data.origin) ? clean(data.origin) : null;
  const verifiedAge = hasContent(data.age) ? clean(data.age) : null;
  const missingChecks = [
    !verifiedAbv ? "ABV" : "",
    !verifiedOrigin ? "origin" : "",
    !verifiedAge ? "age statement" : "",
    !hasContent(data.ingredients) ? "ingredients and allergens" : "",
    !hasContent(data.production_method) ? "production or maturation method" : "",
  ].filter(Boolean);
  const labelGuidance = missingChecks.length
    ? `Check the current bottle or pack for ${humanList(missingChecks)}. These details are not inferred from the brand, category, colour or price.`
    : "Confirm the current bottle or pack before serving because labels and market specifications can change.";
  const description = descriptionFor(seed, name, classification, sizesText);
  const tasteOpenings = [
    `Style context for ${name}: ${guidance.profile}`,
    `${name} sits in the ${classification} section of the catalogue. ${guidance.profile}`,
    `For comparison purposes, ${name} uses the general sensory context of ${classification}. ${guidance.profile}`,
  ];
  const tasteProfile = `${tasteOpenings[seededIndex(`${seed}|taste`, tasteOpenings.length)]} This is category-level guidance, not a claim that every bottle has the same profile.`;
  const tastingOpenings = [
    `A verified bottle-specific tasting panel is not stored for ${name}.`,
    `BevOry has not assigned a bottle-specific tasting claim to ${name}.`,
    `The catalogue does not contain a verified sensory panel for this exact ${name} listing.`,
  ];
  const tastingNotes = `${tastingOpenings[seededIndex(`${seed}|notes`, tastingOpenings.length)]} When assessing the product, ${guidance.aroma}. On the palate, ${guidance.flavour}. ${guidance.texture}. ${guidance.finish}.`;
  const typeDescription = `${styleName} is the current catalogue classification for ${name}. It helps readers compare products by style, but the current bottle label remains the authority for legal category, ingredients and technical specifications.`;
  const servingGuide = `${guidance.serving} Suggested starting glassware: ${guidance.glassware.toLowerCase()}. Suggested temperature: ${guidance.servingTemperature.toLowerCase()}.`;
  const whoMayEnjoy = `${name} may suit legally aged adults comparing ${classification} who want to choose by style, known bottle size and verified local price coverage. This is an independent comparison aid, not a quality ranking or encouragement to consume alcohol.`;
  const ingredientsNote = hasContent(data.ingredients)
    ? `The stored ingredient information for this listing is: ${clean(data.ingredients)}. Confirm the current label for changes and allergen declarations.`
    : `A verified ingredient or raw-material statement is not stored for ${name}. Check the current label for ingredients, additives and allergens before serving.`;
  const productionNote = hasContent(data.production_method)
    ? `The stored production information is: ${clean(data.production_method)}. Confirm the current label for market-specific changes.`
    : `A bottle-specific production or maturation method is not verified for ${name}. Do not infer distillation, ageing, cask, grape, grain or botanical details from the category alone.`;
  const priceAnswer = `Choose a city and bottle size on BevOry to see whether a reviewed local price is available. Prices can vary by state, retailer, taxes and date; BevOry does not invent a price for an uncovered location.`;
  const faqs = [
    {
      question: `What type of drink is ${name}?`,
      answer: `${name} is currently listed as ${classification} in the BevOry catalogue. Classification helps with comparison and should be checked against the current product label.`,
    },
    {
      question: `Which ${name} bottle sizes are listed?`,
      answer: `Known catalogue sizes include ${sizesText}. A size can be known nationally even when BevOry does not yet have a reviewed price for it in the selected city.`,
    },
    {
      question: `What is the price of ${name} in my city?`,
      answer: priceAnswer,
    },
    {
      question: `What is the alcohol percentage of ${name}?`,
      answer: verifiedAbv
        ? `${name} is listed at ${verifiedAbv}. Check the current bottle because strength can differ by expression or market.`
        : `The exact ABV is not verified in this listing. Read the percentage printed on the current bottle or pack rather than applying another product's strength to ${name}.`,
    },
    {
      question: `How should ${name} be served?`,
      answer: `${guidance.serving} Follow the current label and keep servings measured.`,
    },
    {
      question: `What food can be paired with ${name}?`,
      answer: `General ${classification} pairing ideas include ${humanList(guidance.pairings, 6)}. Adjust for the actual flavour, sweetness and strength of the bottle in front of you.`,
    },
  ].map((item) => ({ question: clean(item.question), answer: clean(item.answer) }));
  const originSuggestion = verifiedOrigin ? `${verifiedOrigin} origin information` : `${name} label details`;

  return {
    description: clean(description),
    taste_profile: clean(tasteProfile),
    tasting_notes: clean(tastingNotes),
    type_tag: styleName,
    type_description: clean(typeDescription),
    colour_note: clean(guidance.colour),
    aroma_note: clean(guidance.aroma),
    flavour_note: clean(guidance.flavour),
    texture_note: clean(guidance.texture),
    finish_note: clean(guidance.finish),
    ingredients_note: clean(ingredientsNote),
    production_note: clean(productionNote),
    serving_temperature: clean(guidance.servingTemperature),
    glassware: clean(guidance.glassware),
    serving_guide: clean(servingGuide),
    food_pairings: guidance.pairings.map(clean),
    cocktail_uses: clean(guidance.cocktailUse),
    who_may_enjoy: clean(whoMayEnjoy),
    label_guidance: clean(labelGuidance),
    responsible_notice: "Alcohol is intended only for adults of legal drinking age. Drink responsibly. Never drink and drive. Legal drinking ages and alcohol regulations vary by state and union territory in India.",
    faqs,
    meta_title: buildMetaTitle(name),
    meta_description: buildMetaDescription(name, classification, sizesText),
    primary_keyword: `${name} price`,
    h1: `${name} Price, Sizes and Product Guide`,
    author_line: "BevOry Editorial",
    recommended_schema_types: ["Product", "FAQPage", "BreadcrumbList"],
    internal_link_suggestions: unique([
      `${brandName} products`,
      `${categoryName} prices`,
      `${styleName} products`,
      originSuggestion,
      "Beverage serving and responsible drinking guide",
    ]),
    image_emoji: clean(category.emoji) || guidance.emoji,
  };
};

const generatedKeys: Array<keyof GeneratedProductProfile> = [
  "description", "taste_profile", "tasting_notes", "type_tag", "type_description",
  "colour_note", "aroma_note", "flavour_note", "texture_note", "finish_note",
  "ingredients_note", "production_note", "serving_temperature", "glassware",
  "serving_guide", "food_pairings", "cocktail_uses", "who_may_enjoy",
  "label_guidance", "responsible_notice", "faqs", "meta_title", "meta_description",
  "primary_keyword", "h1", "author_line", "recommended_schema_types",
  "internal_link_suggestions", "image_emoji",
];

const applyGeneratedField = (
  data: JsonObject,
  generated: GeneratedProductProfile,
  key: keyof GeneratedProductProfile,
  force: boolean,
) => {
  if (force || !hasContent(data[key])) data[key] = generated[key];
};

const validatePublishedContent = (data: JsonObject) => {
  const content = JSON.stringify(Object.fromEntries(generatedKeys.map((key) => [key, data[key]])));
  const violations: string[] = [];
  if (/[\u2013\u2014]/.test(content)) violations.push("dash punctuation");
  if (/https?:\/\/|www\./i.test(content)) violations.push("external link");
  if (/\baccording to\b|\bsources? suggest\b|\breferences?\b|\bsource:/i.test(content)) violations.push("source language");
  if (clean(data.meta_title).length > 60) violations.push("meta title length");
  if (clean(data.meta_description).length > 160) violations.push("meta description length");
  if (!Array.isArray(data.faqs) || data.faqs.length < 5) violations.push("FAQ count");
  if (!Array.isArray(data.food_pairings) || data.food_pairings.length < 4) violations.push("pairing count");
  if (violations.length) {
    throw new Error(`${fullProductName(clean(data.brand), clean(data.name))} failed editorial validation: ${violations.join(", ")}`);
  }
};

const main = async () => {
  const args = new Set(process.argv.slice(2));
  const apply = args.has("--apply");
  const force = args.has("--force");
  const records = await prisma.contentRecord.findMany({
    where: { tableName: { in: ["categories", "products", "sub_categories"] } },
  });
  const rows = records.map((record) => ({
    id: record.recordId,
    table: record.tableName,
    data: jsonObject(record.data),
  }));
  const products = rows
    .filter((row) => row.table === "products" && row.data.is_active !== false)
    .map(({ id, data }) => ({ id, data }));
  const categoriesById = new Map(rows
    .filter((row) => row.table === "categories")
    .map((row) => [row.id, row.data]));
  const subcategoriesById = new Map(rows
    .filter((row) => row.table === "sub_categories")
    .map((row) => [row.id, row.data]));
  const now = new Date().toISOString();
  const updates: Array<{ id: string; data: JsonObject }> = [];
  const report = {
    mode: apply ? "apply" : "dry-run",
    products: products.length,
    enriched: 0,
    unchanged: 0,
    verifiedImagesPreserved: 0,
    imageFallbacks: 0,
    verifiedAbvPreserved: 0,
    verifiedAgePreserved: 0,
    verifiedOriginPreserved: 0,
    abvClaimsOmitted: 0,
    ageClaimsOmitted: 0,
    originClaimsOmitted: 0,
  };

  for (const product of products) {
    const generated = buildProductProfile({ product, categoriesById, subcategoriesById });
    const next: JsonObject = { ...product.data };
    for (const key of generatedKeys) applyGeneratedField(next, generated, key, force);
    next.product_content_version = "catalogue-product-profile-v1";
    next.content_basis = "verified BevOry catalogue fields and category-level editorial guidance";
    next.sensory_claim_scope = "general category guidance, not a bottle-specific tasting claim";
    next.technical_verification_status = "label check required for unstored facts";
    next.id = product.id;

    if (hasContent(next.image_url)) report.verifiedImagesPreserved += 1;
    else report.imageFallbacks += 1;
    if (Number(next.abv) > 0) report.verifiedAbvPreserved += 1;
    else report.abvClaimsOmitted += 1;
    if (hasContent(next.age)) report.verifiedAgePreserved += 1;
    else report.ageClaimsOmitted += 1;
    if (hasContent(next.origin)) report.verifiedOriginPreserved += 1;
    else report.originClaimsOmitted += 1;
    validatePublishedContent(next);

    const comparableBefore = { ...product.data };
    const comparableAfter = { ...next };
    delete comparableBefore.updated_at;
    delete comparableBefore.content_updated_at;
    delete comparableAfter.updated_at;
    delete comparableAfter.content_updated_at;
    if (JSON.stringify(comparableBefore) === JSON.stringify(comparableAfter)) {
      report.unchanged += 1;
      continue;
    }
    next.content_updated_at = now;
    next.updated_at = now;
    updates.push({ id: product.id, data: next });
    report.enriched += 1;
  }

  if (apply) {
    for (let index = 0; index < updates.length; index += 50) {
      const batch = updates.slice(index, index + 50);
      await prisma.$transaction(batch.map((item) => prisma.contentRecord.update({
        where: { key: `products:${item.id}` },
        data: { data: item.data as Prisma.InputJsonObject },
      })));
    }
  }

  console.log(JSON.stringify(report, null, 2));
};

if (process.env.NODE_ENV !== "test" && process.argv[1]?.includes("enrich-product-content")) {
  main().finally(() => prisma.$disconnect());
}
