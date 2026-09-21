export type BrandExpansionDefinition = {
  recordId: string;
  brandName: string;
  slug: string;
  country: string;
  categories: string[];
  owner?: string;
  officialUrl: string;
  profile: string;
  positioning: string;
  serve: string;
  pairings: string[];
  logoEmoji: string;
};

const brand = (
  recordId: string,
  brandName: string,
  slug: string,
  country: string,
  categories: string[],
  officialUrl: string,
  profile: string,
  positioning: string,
  serve: string,
  pairings: string[],
  logoEmoji: string,
  owner?: string,
): BrandExpansionDefinition => ({
  recordId,
  brandName,
  slug,
  country,
  categories,
  officialUrl,
  profile,
  positioning,
  serve,
  pairings,
  logoEmoji,
  owner,
});

export const BRAND_EXPANSION: BrandExpansionDefinition[] = [
  brand("brand-expansion-old-admiral", "Old Admiral", "old-admiral", "India", ["Brandy"], "https://radicokhaitan.com/about-us/what-we-do/", "A brandy entry in Radico Khaitan's domestic portfolio, with the category's familiar fruit, warmth and oak-led possibilities.", "It gives BevOry readers another Indian brandy entry alongside the bottle sizes and local records that may be added later.", "Serve a modest measure in a clean brandy glass, or use it in a measured brandy and ginger ale style long drink.", ["grilled kebabs", "mild cheese", "dried fruit", "dark chocolate"], "🥃", "Radico Khaitan"),
  brand("brand-expansion-regal-talon", "Regal Talon", "regal-talon", "India", ["Whisky"], "https://radicokhaitan.com/about-us/what-we-do/", "An Indian whisky label from Radico Khaitan's wider portfolio. The individual expression should be read from its current bottle label rather than assumed from the brand name.", "Its useful place in a price guide is as a separate label that can be compared by style, size and city availability.", "Start with a small neat pour, then try water or soda if the bottle's character suits a longer serve.", ["spiced paneer", "roasted nuts", "smoked cheese", "grilled meats"], "🥃", "Radico Khaitan"),
  brand("brand-expansion-whytehall", "Whytehall", "whytehall", "India", ["Brandy"], "https://radicokhaitan.com/about-us/what-we-do/", "An Indian brandy label in Radico Khaitan's portfolio. Brandy profiles can move from fresh fruit and floral notes to caramel, spice and oak depending on the expression.", "The brand is best compared by the exact product, declared strength and bottle size, not by a generic brand-level tasting claim.", "Use a modest neat serve or a simple brandy highball with controlled sweetness.", ["roast chicken", "mushroom dishes", "fruit cake", "aged cheese"], "🥃", "Radico Khaitan"),
  brand("brand-expansion-pluton-bay", "Pluton Bay", "pluton-bay", "India", ["Rum"], "https://radicokhaitan.com/about-us/what-we-do/", "A rum label from Radico Khaitan's portfolio. Rum may show light sugarcane character, molasses, tropical fruit, spice or oak depending on the bottle.", "It adds a distinct Indian rum option for readers comparing lighter mixed serves with fuller, darker styles.", "Use a measured serve over ice or in a highball, keeping the mixer proportion moderate.", ["barbecue", "grilled pineapple", "spiced starters", "dark chocolate"], "🥃", "Radico Khaitan"),
  brand("brand-expansion-ankahi", "Ankahi", "ankahi", "India", ["Liqueurs"], "https://radicokhaitan.com/about-us/what-we-do/", "An Indian liqueur label introduced in Radico Khaitan's recent portfolio updates. Exact flavour, strength and bottle sizes should follow the current product label.", "A liqueur page should help readers understand the flavour family and serve without filling gaps with invented tasting notes.", "Serve a small measure chilled or use it as a measured cocktail ingredient after checking the label's flavour profile.", ["dark chocolate", "fresh berries", "vanilla desserts", "salted nuts"], "🍹", "Radico Khaitan"),
  brand("brand-expansion-morpheus-blue", "Morpheus Blue", "morpheus-blue", "India", ["Brandy"], "https://radicokhaitan.com/about-us/what-we-do/", "A premium brandy expression in Radico Khaitan's Morpheus family. The exact maturity and strength belong to the individual bottle and should not be inferred from the name alone.", "The page is useful for comparing the Morpheus range once verified products and local prices are connected.", "Begin neat in a small tulip glass, then adjust with a little water or use a restrained after-dinner serve.", ["dark chocolate", "roasted nuts", "aged cheese", "fruit desserts"], "🥃", "Radico Khaitan"),
  brand("brand-expansion-four-seasons", "Four Seasons", "four-seasons", "India", ["Wine"], "https://www.groverzampa.in/", "An Indian wine brand associated with the Sahyadri wine region and now connected with the wider Grover Zampa wine business. Current product availability should be checked by label and city.", "It belongs in a wine directory because grape, style, vintage and bottle size are more useful comparison points than a broad brand promise.", "Serve whites and rose wines chilled, and give fuller reds a little time in the glass before pairing them with food.", ["grilled vegetables", "mild cheese", "tomato-based pasta", "roasted chicken"], "🍷", "Grover Zampa"),
  brand("brand-expansion-zinzi", "Zinzi", "zinzi", "India", ["Wine"], "https://www.groverzampa.in/", "An Indian wine label associated with the Four Seasons wine business. Exact grape, style and strength vary by bottle and should be taken from the current label.", "It gives BevOry a dedicated place for a wine label that can later be connected to verified products and city prices.", "Follow the bottle's temperature guidance and use a clean wine glass. Keep the serve measured and food-led.", ["salads", "grilled paneer", "light pasta", "soft cheese"], "🍷", "Grover Zampa"),
  brand("brand-expansion-vallonne", "Vallonne", "vallonne", "India", ["Wine"], "https://www.vallonnevineyards.com/", "An Indian winery and wine label associated with estate-led still wines. Product-level details such as grape, vintage and bottle size should be confirmed separately for each listing.", "Its wines are best organised by grape, colour, vintage and style so readers can compare the bottle rather than rely on a generic brand description.", "Serve at the temperature suited to the specific wine style, with whites and rose chilled and fuller reds slightly below warm room temperature.", ["herbed vegetables", "grilled fish", "mild curry", "aged cheese"], "🍷"),
  brand("brand-expansion-charosa", "Charosa", "charosa", "India", ["Wine"], "https://charosavineyards.com/", "An Indian wine label from the Nashik wine region. Its range should be read through the current grape, vintage, colour and style information on each bottle.", "A dedicated brand page helps readers discover a regional Indian winery while keeping product facts tied to the individual label.", "Use a clean wine glass and serve the bottle at the temperature recommended for its colour and style.", ["grilled vegetables", "spiced fish", "paneer starters", "mild hard cheese"], "🍷"),
  brand("brand-expansion-vinsura", "Vinsura", "vinsura", "India", ["Wine"], "https://www.vinsurawines.com/", "An Indian winery and label from the Nashik wine region. Grape, vintage and style are product-specific, so BevOry should keep those details attached to each bottle.", "The brand adds another regional wine option for readers comparing Indian wines by style, size and city availability.", "Serve the bottle at the temperature suited to its colour and label guidance, then pair it with food that matches its acidity and body.", ["salads", "grilled vegetables", "tomato pasta", "roast chicken"], "🍷"),
  brand("brand-expansion-suntory-toki", "Suntory Toki", "suntory-toki", "Japan", ["World Whisky"], "https://house.suntory.com/whiskies/suntory-toki", "A Japanese whisky blend from the House of Suntory, presented as a bright, mixable style in the producer's portfolio.", "Its identity is especially useful for readers comparing Japanese whisky intended for highballs with richer, more oak-led pours.", "Try a measured neat pour first, then a chilled highball with plenty of ice and a clean, dry soda.", ["yakitori", "tempura", "grilled mushrooms", "lightly spiced snacks"], "🥃", "Suntory Global Spirits"),
  brand("brand-expansion-hakushu", "Hakushu", "hakushu", "Japan", ["Single Malts"], "https://house.suntory.com/whiskies/hakushu", "A Japanese single malt whisky from the House of Suntory. The exact expression, age statement and bottling strength must be confirmed from the bottle being listed.", "It gives the Japanese single malt section a dedicated page without treating every Hakushu expression as identical.", "Use a clean tulip glass and begin neat. A few drops of water can open the aroma when the specific bottling benefits from it.", ["sushi", "grilled fish", "mild cheese", "roasted vegetables"], "🥃", "Suntory Global Spirits"),
  brand("brand-expansion-ao", "Ao", "ao", "Japan", ["World Whisky"], "https://house.suntory.com/whiskies/ao", "A world whisky from the House of Suntory. It is best described through the current label, blend information and bottling strength rather than a fixed universal tasting claim.", "The brand is a useful guide for readers exploring blends that draw on more than one whisky tradition.", "Try a measured neat pour or a restrained highball, then compare how dilution changes the profile.", ["grilled meats", "soy-glazed dishes", "roasted nuts", "dark chocolate"], "🥃", "Suntory Global Spirits"),
  brand("brand-expansion-kakubin", "Kakubin", "kakubin", "Japan", ["Japanese Whisky"], "https://www.suntory.com/brands/kakubin/", "A Japanese whisky label from Suntory, commonly associated with long mixed serves. Exact strength and product details should follow the local bottle label.", "It belongs in a city-aware catalogue because pack size, local price and availability can vary even when the label is familiar.", "Use it in a measured highball with cold soda and a large, clear ice cube, or taste a small pour neat first.", ["yakitori", "fried chicken", "grilled vegetables", "salty snacks"], "🥃", "Suntory"),
  brand("brand-expansion-knob-creek", "Knob Creek", "knob-creek", "United States", ["Bourbon"], "https://www.knobcreek.com/", "An American bourbon whiskey brand from Suntory Global Spirits. Age statements, proof and expression names vary across the range.", "The brand should be compared expression by expression, especially when a single family includes different proofs and maturation details.", "Serve a modest neat pour in a rocks glass, add a little water if preferred, or use a measured whiskey cocktail.", ["barbecue", "blue cheese", "roast meats", "pecan desserts"], "🥃", "Suntory Global Spirits"),
  brand("brand-expansion-basil-haydens", "Basil Hayden's", "basil-haydens", "United States", ["Bourbon"], "https://www.basilhaydenbourbon.com/", "An American bourbon brand from Suntory Global Spirits. The range includes expression-specific grain, proof and maturation details that belong on individual product pages.", "Its lighter, more approachable positioning makes the exact bottling important when comparing it with fuller, higher-proof bourbons.", "Start neat or over one large cube, then use a measured serve in a simple Old Fashioned-style drink.", ["smoked chicken", "roasted nuts", "apple dessert", "aged cheddar"], "🥃", "Suntory Global Spirits"),
  brand("brand-expansion-gentleman-jack", "Gentleman Jack", "gentleman-jack", "United States", ["Whiskey"], "https://www.jackdaniels.com/en-us/whiskey/gentleman-jack", "A Tennessee whiskey expression from the Jack Daniel's family. Product-level details such as proof and bottle size should be attached to the exact listing.", "A dedicated profile prevents the expression from being lost inside a broad Jack Daniel's brand page and makes variant comparison clearer.", "Serve a small pour neat or over ice, or use it in a balanced whiskey highball.", ["barbecue", "fried chicken", "smoked cheese", "pecan pie"], "🥃", "Brown-Forman"),
  brand("brand-expansion-courvoisier", "Courvoisier", "courvoisier", "France", ["Cognac"], "https://www.courvoisier.com/", "A Cognac house with expression-specific blends and age categories. The current label should control any claim about age, cru, blend or strength.", "Cognac is best compared by the stated category, maturation information, bottle size and intended serve.", "Serve a modest measure in a tulip glass, or use a younger style in a measured Sidecar-style cocktail.", ["dark chocolate", "roast duck", "dried fruit", "aged cheese"], "🥃"),
  brand("brand-expansion-hornitos", "Hornitos", "hornitos", "Mexico", ["Tequila"], "https://www.hornitostequila.com/", "A tequila brand from the Sauza family and Suntory Global Spirits. Blanco, reposado and other expressions should be kept separate when products are added.", "The useful comparison is between tequila styles, maturation and bottle size, not between a brand name and a generic agave flavour.", "Use a measured pour in a Margarita or Paloma, or taste a style neat from a small glass.", ["salsa", "grilled corn", "tacos", "citrus-led salads"], "🌵", "Suntory Global Spirits"),
  brand("brand-expansion-sauza", "Sauza", "sauza", "Mexico", ["Tequila"], "https://www.sauzatequila.com/", "A tequila brand from the Sauza family. Product pages should distinguish blanco, reposado and other expressions and should not combine their prices.", "It gives readers a separate entry point for a long-established tequila family while keeping each bottle technically specific.", "Use a measured serve in a Margarita or Paloma, or sip the exact expression neat with a little time in the glass.", ["salsa", "grilled seafood", "chilli paneer", "roasted peppers"], "🌵", "Suntory Global Spirits"),
  brand("brand-expansion-tres-generaciones", "Tres Generaciones", "tres-generaciones", "Mexico", ["Tequila"], "https://www.tresgeneraciones.com/", "A premium tequila label from the Sauza family. The expression, maturation and bottling strength should be confirmed for each product record.", "It belongs in the premium tequila directory as a separate brand page, with product-specific information kept clear.", "Taste a small neat measure first, then use it in a spirit-forward agave cocktail if the expression suits it.", ["ceviche", "grilled prawns", "fresh salsa", "citrus desserts"], "🌵", "Suntory Global Spirits"),
  brand("brand-expansion-dusse", "D'USSÉ", "dusse", "France", ["Cognac"], "https://www.dusse.com/", "A Cognac brand with a contemporary presentation. Exact age category, blend and strength should be taken from the individual bottle label.", "Its page should help readers compare Cognac by expression and serve, without making one broad tasting claim for the entire range.", "Serve a modest neat pour, over one large cube, or in a measured Sidecar-style cocktail.", ["dark chocolate", "roast meats", "dried fruit", "aged cheese"], "🥃", "Bacardi"),
  brand("brand-expansion-cazadores", "Cazadores", "cazadores", "Mexico", ["Tequila"], "https://www.tequilacazadores.com/", "A tequila brand with expression-specific blanco, reposado and aged styles. The exact bottle label should control all product facts.", "A separate page makes it easier to compare agave style, maturation, format and city-level availability.", "Use a measured pour in a Margarita or Paloma, or sip the stated expression neat.", ["tacos", "grilled vegetables", "citrus salad", "smoked cheese"], "🌵", "Bacardi"),
  brand("brand-expansion-st-germain", "ST-GERMAIN", "st-germain", "France", ["Liqueurs"], "https://www.stgermainliqueur.com/", "A French elderflower liqueur brand. Sweetness, flavour and strength should be read from the current product label and used carefully in mixed drinks.", "Its role is primarily as a measured flavour component, so cocktail balance matters as much as the brand name.", "Use a small measured amount in a spritz, highball or sparkling serve, and reduce other sweet ingredients.", ["goat cheese", "fresh berries", "citrus desserts", "light salads"], "🍹", "Bacardi"),
  brand("brand-expansion-noilly-prat", "Noilly Prat", "noilly-prat", "France", ["Vermouth"], "https://www.noillyprat.com/", "A French vermouth brand with style-specific expressions. Vermouth is wine-based, so storage, freshness and the exact bottle matter after opening.", "A dedicated page helps readers compare dry, sweet or other expressions by cocktail role and serving method.", "Serve chilled in a small measure, use it in a Martini-style drink, or pair it with soda and citrus when the label suits that serve.", ["olives", "seafood", "soft cheese", "herbed vegetables"], "🍸", "Bacardi"),
  brand("brand-expansion-santa-teresa", "Santa Teresa", "santa-teresa", "Venezuela", ["Rum"], "https://www.santateresarum.com/", "A Venezuelan rum brand with expression-specific aged and blended releases. The stated maturation and bottle details should remain tied to each product.", "It adds an international rum option for readers comparing aged, sipping and cocktail-friendly styles.", "Taste a small measure neat or over one cube, then use lighter expressions in a measured rum cocktail.", ["dark chocolate", "grilled pineapple", "roast pork", "spiced desserts"], "🥃"),
  brand("brand-expansion-perrier-jouet", "Perrier-Jouët", "perrier-jouet", "France", ["Champagne"], "https://www.perrier-jouet.com/", "A Champagne house in Pernod Ricard's India portfolio. Cuvée, vintage, colour and bottle size should be recorded separately when products are added.", "The brand is best compared by cuvée style, vintage where stated, sweetness and serving temperature.", "Chill thoroughly and serve in a clean flute or white wine glass, depending on the style and occasion.", ["oysters", "soft cheese", "fried starters", "fruit-led desserts"], "🍾", "Pernod Ricard"),
  brand("brand-expansion-grand-marnier", "Grand Marnier", "grand-marnier", "France", ["Liqueurs"], "https://www.grandmarnier.com/", "A French orange liqueur brand. Expression, sweetness and strength should be confirmed at product level before being used in a recipe or price guide.", "Its clearest use is as a measured orange component in cocktails and desserts, rather than as an unqualified substitute for every orange liqueur.", "Use a small measured pour in a Margarita or Sidecar-style drink, or serve carefully with ice.", ["dark chocolate", "orange desserts", "duck", "aged cheese"], "🍹", "Campari Group"),
  brand("brand-expansion-frangelico", "Frangelico", "frangelico", "Italy", ["Liqueurs"], "https://www.frangelico.com/", "An Italian hazelnut liqueur brand. The exact sweetness and strength should be taken from the current bottle label.", "It offers a distinct nut-led liqueur option for cocktails, coffee serves and dessert pairings.", "Serve a small chilled measure, pour over ice, or add a measured amount to coffee and dessert cocktails.", ["tiramisu", "dark chocolate", "vanilla ice cream", "roasted nuts"], "🍹", "Campari Group"),
  brand("brand-expansion-casamigos", "Casamigos", "casamigos", "Mexico", ["Tequila"], "https://www.casamigos.com/", "A tequila brand with expression-specific agave spirits. Blanco, reposado, anejo and flavoured releases should be kept as separate products.", "The comparison should focus on expression, maturation, declared strength, bottle size and intended serve.", "Use a measured pour in a Margarita or Paloma, or taste the specific expression neat from a small glass.", ["guacamole", "grilled seafood", "fresh salsa", "roasted peppers"], "🌵", "Diageo"),
  brand("brand-expansion-bumbu", "Bumbu", "bumbu", "Barbados", ["Rum"], "https://bumbu.com/", "A rum brand with expression-specific products. Product pages should distinguish rum style, sweetness, declared strength and bottle format.", "It gives the rum directory another international option while keeping tasting language tied to each expression.", "Use a measured serve over ice or in a restrained rum cocktail, and avoid adding sweetness without checking the bottle's profile.", ["banana desserts", "dark chocolate", "grilled pineapple", "spiced nuts"], "🥃"),
  brand("brand-expansion-chairmans-reserve", "Chairman's Reserve", "chairmans-reserve", "Saint Lucia", ["Rum"], "https://www.chairmansreserverum.com/", "A rum brand from Saint Lucia Distillers with product-specific blends and maturation details. The current label should control each product record.", "It is best compared by expression, blend, maturation, strength and bottle size rather than by colour alone.", "Taste a measured pour neat or over one cube, and use lighter expressions in a carefully balanced cocktail.", ["grilled meats", "roasted banana", "dark chocolate", "spiced dishes"], "🥃", "Saint Lucia Distillers"),
  brand("brand-expansion-dead-mans-fingers", "Dead Man's Fingers", "dead-mans-fingers", "United Kingdom", ["Rum"], "https://deadmansfingers.com/", "A rum brand with flavoured and spiced expressions. Each flavour should be listed separately because sweetness and serving use can change significantly.", "The range is most useful to compare by flavour, sweetness, strength, bottle size and cocktail role.", "Chill and serve a measured amount over ice or with a simple mixer that does not hide the stated flavour.", ["barbecue", "fried chicken", "chocolate desserts", "spiced nuts"], "🥃", "Halewood Artisanal Spirits"),
  brand("brand-expansion-pussers", "Pusser's", "pussers", "British Virgin Islands", ["Rum"], "https://pussers.com/", "A rum brand with naval-style heritage and expression-specific bottlings. Current strength, age and blend details belong to the product label.", "It gives readers a dedicated guide to fuller rum styles and classic rum cocktail applications.", "Try a modest neat measure, over ice, or in a measured rum cocktail with restrained sweetness.", ["barbecue", "grilled seafood", "salted caramel", "dark chocolate"], "🥃"),
  brand("brand-expansion-sailor-jerry", "Sailor Jerry", "sailor-jerry", "United States", ["Rum"], "https://sailorjerry.com/", "A spiced rum brand. Spicing, sweetness and strength should be treated as product-level details rather than assumed for every release.", "It is useful for readers comparing spiced rum in simple mixed drinks and food-led serves.", "Use a measured serve with cola, ginger beer or citrus, while keeping extra sweetener modest.", ["barbecue", "ginger desserts", "grilled pineapple", "spiced snacks"], "🥃", "William Grant & Sons"),
  brand("brand-expansion-michelob-ultra", "Michelob Ultra", "michelob-ultra", "United States", ["Beer"], "https://www.michelobultra.com/", "A beer brand from AB InBev. Exact style, strength, pack format and local availability should be verified for each Indian market.", "A city-aware page can separate the brand from other AB InBev beer labels and show only verified local records.", "Serve well chilled in a clean beer glass or directly from the pack, following the label and local availability.", ["burgers", "grilled corn", "salads", "crispy starters"], "🍺", "AB InBev"),
  brand("brand-expansion-goose-island", "Goose Island", "goose-island", "United States", ["Beer"], "https://www.gooseisland.com/", "A craft beer brand with beer-style-specific releases. Product pages should identify the beer style, pack size, strength and freshness guidance.", "The brand belongs in a craft beer directory where readers can compare styles rather than treating every beer as a standard lager.", "Chill to suit the style and pour into a clean glass with room for aroma and head.", ["pizza", "fried chicken", "spiced starters", "aged cheese"], "🍺", "AB InBev"),
];

const clean = (value: string) => value
  .replace(/[\u2013\u2014]/g, ",")
  .replace(/\s+/g, " ")
  .trim();

const truncateAtWord = (value: string, maxLength: number) => {
  const normalized = clean(value);
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).replace(/\s+\S*$/, "").replace(/[,:;]$/, "")}.`;
};

const categoryEmoji = (categories: string[], fallback: string) => {
  const category = categories[0]?.toLowerCase() ?? "";
  if (category.includes("beer")) return "🍺";
  if (category.includes("wine") || category.includes("champagne")) return "🍷";
  if (category.includes("tequila")) return "🌵";
  if (category.includes("liqueur") || category.includes("vermouth")) return "🍹";
  return fallback;
};

export const buildBrandExpansionData = (definition: BrandExpansionDefinition, now = new Date().toISOString()) => {
  const categoryText = definition.categories.join(", ");
  const ownerText = definition.owner ? ` It is associated with ${definition.owner}.` : "";
  const metaTitle = truncateAtWord(`${definition.brandName} Brand Guide | BevOry`, 60);
  const metaDescription = truncateAtWord(
    `Explore ${definition.brandName} products, styles, serving ideas and city-level price availability on BevOry.`,
    160,
  );
  return {
    id: definition.recordId,
    brand_name: definition.brandName,
    slug: definition.slug,
    logo_emoji: categoryEmoji(definition.categories, definition.logoEmoji),
    logo_url: null,
    image_url: null,
    description: clean(`${definition.brandName} is listed on BevOry under ${categoryText}. ${definition.profile}${ownerText}`),
    story: clean(`${definition.positioning} The page keeps brand context separate from product-specific facts, so strength, ingredients, age, vintage, format and local price are added only when verified for the individual bottle.`),
    country: definition.country,
    link_url: definition.officialUrl,
    tasting_notes: [
      { title: "Style context", description: clean(definition.profile) },
      { title: "Compare the expression", description: clean("A brand can contain more than one style. Compare the exact product, declared strength, bottle size and any stated maturation or flavour information." ) },
      { title: "Label-led detail", description: clean("Use the current product label for technical facts. This page does not invent a tasting experience or fill missing details with estimates.") },
    ],
    how_to_enjoy: [
      { subheading: "Start with the individual bottle", description: clean(definition.serve) },
      { subheading: "Keep the serve measured", description: clean("Use a modest serving, clean glassware and water alongside the drink. Match the mixer and temperature to the product style.") },
      { subheading: "Check local availability", description: clean("Prices, bottle sizes and legal availability can vary by state, retailer, city and date. BevOry shows a numeric local price only when a reviewed record exists.") },
    ],
    pairing_ideas: [{ title: "Food pairing ideas", items: definition.pairings }],
    why_choose: clean(`${definition.brandName} is worth comparing when you want to explore ${categoryText.toLowerCase()} through the exact product, bottle size and serving style. BevOry keeps city-level price information separate so an unavailable local price is not presented as an estimate.`),
    faqs: [
      { question: `What is ${definition.brandName}?`, answer: clean(`${definition.brandName} is listed on BevOry under ${categoryText}. ${definition.profile}`) },
      { question: `How should ${definition.brandName} be served?`, answer: clean(definition.serve) },
      { question: `Does BevOry show ${definition.brandName} prices in every city?`, answer: clean("Only reviewed positive local price records are shown as prices. A product or brand can be discoverable without a numeric price when the selected city has no verified record.") },
      { question: `What should I check before choosing a ${definition.brandName} product?`, answer: clean("Check the exact expression, bottle size, declared strength, label details, local price date and applicable state rules before making a decision.") },
    ],
    final_verdict: clean(`${definition.brandName} should be approached as a range of individual products, not as one fixed taste. Compare the exact expression, size and local availability, then follow the current bottle label for technical and serving details.`),
    meta_title: metaTitle,
    meta_description: metaDescription,
    is_active: true,
    show_in_spotlight: false,
    order_index: 0,
    official_source_page: definition.officialUrl,
    logo_asset_status: "pending_first_party_verification",
    logo_identity_verified: false,
    logo_verified_at: null,
    image_license_status: "pending_rights_verification",
    content_version: "brand-expansion-v1",
    content_basis: "verified brand portfolio facts and conservative editorial guidance",
    content_updated_at: now,
    created_at: now,
    updated_at: now,
  };
};
