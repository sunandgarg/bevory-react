export type CocktailEditorialInput = {
  name?: unknown;
  base_spirit?: unknown;
  description?: unknown;
  ingredients?: unknown;
  instructions?: unknown;
};

const hindiTerms: Array<[RegExp, string]> = [
  [/\bblack salt\b(?!\s*\()/gi, "black salt (Kala namak)"],
  [/\bgreen chill(?:i|y)\b(?!\s*\()/gi, "green chilli (Hari mirch)"],
  [/\bcurry leaves?\b(?!\s*\()/gi, "curry leaves (Kadi patta)"],
  [/\braw mango\b(?!\s*\()/gi, "raw mango (Kaccha aam)"],
  [/\bcoriander\b(?!\s*\()/gi, "coriander (Dhania)"],
  [/\bcardamom\b(?!\s*\()/gi, "cardamom (Elaichi)"],
  [/\bsaffron\b(?!\s*\()/gi, "saffron (Kesar)"],
  [/\bcumin\b(?!\s*\()/gi, "cumin (Jeera)"],
  [/\bginger\b(?!\s*\()/gi, "ginger (Adrak)"],
  [/\bmint\b(?!\s*\()/gi, "mint (Pudina)"],
];

const formatMl = (amount: number) => {
  const value = Math.round(amount * 2) / 2;
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
};

export const ouncesToMl = (value: string) => value.replace(
  /\b(\d+(?:\.\d+)?)\s*(?:fl\s*)?oz\b/gi,
  (_match, rawAmount: string) => `${formatMl(Number(rawAmount) * 30)} ml`,
);

export const annotateIndianIngredients = (value: string) => hindiTerms.reduce(
  (current, [pattern, replacement]) => current.replace(pattern, replacement),
  value,
);

export const normalizeIngredient = (value: string) => annotateIndianIngredients(ouncesToMl(value))
  .replace(/\s+/g, " ")
  .trim();

const inferredGlassware = (instructions: string) => {
  const options: Array<[RegExp, string]> = [
    [/\bcoupe\b/i, "Chilled coupe glass"],
    [/\bmartini glass\b/i, "Chilled martini glass"],
    [/\bhighball\b/i, "Highball glass"],
    [/\bcollins\b/i, "Collins glass"],
    [/\brocks glass\b/i, "Rocks glass"],
    [/\bwine glass\b/i, "Wine glass"],
    [/\bchampagne flute\b|\bflute\b/i, "Champagne flute"],
    [/\bcopper mug\b/i, "Copper mug"],
    [/\bhurricane glass\b/i, "Hurricane glass"],
    [/\bjulep cup\b/i, "Julep cup"],
  ];
  return options.find(([pattern]) => pattern.test(instructions))?.[1] ?? null;
};

const inferredIce = (instructions: string) => {
  if (/crushed ice/i.test(instructions)) return "Crushed ice";
  if (/large (?:ice )?cube|large ice/i.test(instructions)) return "One large clear ice cube";
  if (/strain into (?:a )?chilled/i.test(instructions)) return "Cubed ice for mixing; serve without ice";
  if (/\bwith ice\b|\bover ice\b|\bfill .* ice\b/i.test(instructions)) return "Fresh cubed ice";
  return null;
};

const inferredMethod = (instructions: string) => {
  if (/dry shake/i.test(instructions)) return "Dry shake, then shake with ice";
  if (/\bshake\b/i.test(instructions)) return "Shake";
  if (/\bstir\b/i.test(instructions)) return "Stir";
  if (/\bblend\b/i.test(instructions)) return "Blend";
  if (/\bbuild\b/i.test(instructions)) return "Build in the glass";
  if (/\bmuddle\b/i.test(instructions)) return "Muddle";
  if (/\bswizzle\b/i.test(instructions)) return "Swizzle";
  return "Follow the measured steps in order";
};

const inferredGarnish = (instructions: string) => {
  const match = instructions.match(/garnish (?:with|using) ([^.]+)(?:\.|$)/i);
  return match?.[1]?.trim() || null;
};

const pairingIdeas: Record<string, string[]> = {
  whiskey: ["paneer tikka", "kebabs", "roasted nuts"],
  whisky: ["paneer tikka", "kebabs", "roasted nuts"],
  vodka: ["tandoori starters", "crispy potatoes", "lightly spiced paneer"],
  rum: ["barbecue", "grilled pineapple", "spiced kebabs"],
  gin: ["cucumber chaat", "grilled vegetables", "herbed paneer"],
  tequila: ["grilled corn", "salsa", "chilli paneer"],
  mezcal: ["grilled corn", "smoked paneer", "roasted peppers"],
  brandy: ["dark chocolate", "dried fruit", "aged cheese"],
  wine: ["mushroom dishes", "cheese", "lightly spiced starters"],
};

export const buildCocktailEditorial = (input: CocktailEditorialInput) => {
  const instructions = ouncesToMl(String(input.instructions ?? "")).replace(/\s+/g, " ").trim();
  const ingredients = Array.isArray(input.ingredients)
    ? input.ingredients.map((item) => normalizeIngredient(String(item))).filter(Boolean)
    : [];
  const baseSpirit = String(input.base_spirit ?? "").trim();
  const spiritKey = baseSpirit.toLowerCase();
  const foodPairings = pairingIdeas[spiritKey] ?? ["salted nuts", "grilled vegetables", "mildly spiced starters"];
  const hasSimpleSyrup = ingredients.some((ingredient) => /simple syrup/i.test(ingredient));
  const carbonated = ingredients.some((ingredient) => /soda|tonic|ginger beer|sparkling|champagne|prosecco/i.test(ingredient));
  const hasEgg = ingredients.some((ingredient) => /egg white/i.test(ingredient));

  return {
    ingredients,
    instructions,
    glassware: inferredGlassware(instructions),
    ice: inferredIce(instructions),
    method: inferredMethod(instructions),
    garnish: inferredGarnish(instructions),
    equipment: [
      /shake/i.test(instructions) ? "Cocktail shaker" : null,
      /stir/i.test(instructions) ? "Mixing glass and bar spoon" : null,
      /strain/i.test(instructions) ? "Cocktail strainer" : null,
      /muddle/i.test(instructions) ? "Muddler" : null,
      /blend/i.test(instructions) ? "Blender" : null,
      "30 ml and 15 ml measures",
    ].filter(Boolean),
    substitutions: hasSimpleSyrup
      ? ["Simple syrup can be made with equal parts sugar (Chini) and water by volume, then cooled before use."]
      : ["Use the stated spirit and liqueur style where possible; an equal-volume swap can change sweetness, aroma and strength."],
    common_mistakes: [
      "Measure every liquid in ml instead of free-pouring.",
      carbonated ? "Add the carbonated ingredient last and stir gently so it stays lively." : "Use fresh ice and stop mixing before the drink becomes watery.",
      hasEgg ? "Use a fresh, clean egg and avoid raw egg if you are pregnant, immunocompromised or otherwise medically advised against it." : null,
    ].filter(Boolean),
    food_pairings: foodPairings,
    variations: ["After tasting the listed recipe, adjust citrus or sweetness in 5 ml steps and record the change."],
    responsible_notice: "For adults who meet the legal drinking age in their state or Union Territory. Measure serves, pace consumption, and never drink and drive.",
    units: "metric",
  };
};
