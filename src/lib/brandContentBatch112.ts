import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_112 = [
  ["sauza", "Sauza", "Mexico", "Tequila", "brand-expansion-sauza"],
  ["tres-generaciones", "Tres Generaciones", "Mexico", "Tequila", "brand-expansion-tres-generaciones"],
  ["dusse", "D'USSÉ", "France", "Cognac", "brand-expansion-dusse"],
  ["cazadores", "Cazadores", "Mexico", "Tequila", "brand-expansion-cazadores"],
  ["st-germain", "ST-GERMAIN", "France", "Liqueurs", "brand-expansion-st-germain"],
  ["noilly-prat", "Noilly Prat", "France", "Vermouth", "brand-expansion-noilly-prat"],
  ["santa-teresa", "Santa Teresa", "Venezuela", "Rum", "brand-expansion-santa-teresa"],
  ["perrier-jouet", "Perrier-Jouet", "France", "Champagne", "brand-expansion-perrier-jouet"],
  ["grand-marnier", "Grand Marnier", "France", "Liqueurs", "brand-expansion-grand-marnier"],
  ["frangelico", "Frangelico", "Italy", "Liqueurs", "brand-expansion-frangelico"],
] as const;

export const BRAND_LOGOS_BATCH_112: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_112: Record<string, string[]> = {
  sauza: [
    "https://www.sauzatequila.com/heritage",
    "https://www.casasauza.com/en/tequila-distillery-since-1873-jalisco",
  ],
  "tres-generaciones": [
    "https://www.tresgeneraciones.com/",
    "https://www.tresgeneraciones.com/meet-the-dons",
  ],
  dusse: [
    "https://www.dusse.com/our-story/",
  ],
  cazadores: [
    "https://www.cazadores.com/us/en/culture/our-story/",
    "https://www.cazadores.com/mx/es/our-tequila/tequila-cristalino/",
  ],
  "st-germain": [
    "https://www.stgermainliqueur.com/us/en/faq/",
    "https://www.stgermainliqueur.com/fr/fr",
  ],
  "noilly-prat": [
    "https://www.noillyprat.com/",
    "https://www.noillyprat.com/fr/fr/heritage/",
  ],
  "santa-teresa": [
    "https://www.santateresarum.com/es/es/heritage/",
    "https://www.santateresarum.com/faq/",
  ],
  "perrier-jouet": [
    "https://www.perrier-jouet.com/en-us/the-house/history",
    "https://www.perrier-jouet.com/en-us/faq",
  ],
  "grand-marnier": [
    "https://www.grandmarnier.com/en-us/grand-heritage/",
    "https://www.grandmarnier.com/en-us/our-collection/cordon-rouge/",
  ],
  frangelico: [
    "https://frangelico.com/en-us/about/",
  ],
};

export const BRAND_CONTENT_BATCH_112: Record<string, BrandPublicContent> = {
  sauza: {
    description: "Sauza is a Jalisco tequila house founded by Don Cenobio Sauza at La Perseverancia in 1873. Now part of Suntory Global Spirits, it is one of the historic names that helped take tequila beyond Mexico.",
    story: "Don Cenobio Sauza bought La Antigua Cruz in Tequila, Jalisco and renamed it La Perseverancia. The Sauza family later became tied to tequila's export story and to the legal identity of tequila as a Mexican agave spirit.",
    tastingNotes: [
      { title: "Agave And Citrus", description: "Sauza's unaged styles lean toward cooked agave, lime peel and clean pepper." },
      { title: "Mellow Oak", description: "Gold and rested expressions add vanilla, light caramel and a softer finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Blanco in a Margarita or Paloma; pour rested styles over one cube with a lime twist." },
      { subheading: "Food", description: "Pair with tandoori prawns, chilli paneer, fish tacos or roasted corn chaat." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chilli paneer", "fish tacos", "roasted corn chaat", "fresh salsa"] }],
    whyChoose: "Sauza gives drinkers a classic Jalisco tequila name with a long distilling lineage.",
    faqs: [
      { question: "Where is Sauza Tequila from?", answer: "Sauza comes from Tequila, Jalisco, where Don Cenobio Sauza founded La Perseverancia in 1873." },
      { question: "Who owns Sauza today?", answer: "Sauza is part of Suntory Global Spirits." },
    ],
    finalVerdict: "Choose Sauza when you want a historic Mexican tequila for citrusy cocktails and easy agave-led serves.",
    metaTitle: "Sauza Tequila Guide | BevOry",
    metaDescription: "Explore Sauza tequila history, tasting notes, cocktail serves, Indian pairings and city prices.",
  },
  "tres-generaciones": {
    description: "Tres Generaciones is a premium tequila label built around three generations of the Sauza family. It honours Don Cenobio, Don Eladio and Don Francisco Javier Sauza through a polished Jalisco agave style.",
    story: "The brand name points directly to the three Sauza dons who shaped the family's tequila story from 1873 onward. Don Francisco Javier Sauza created Tres Generaciones to mark that inheritance of distilling skill and export ambition.",
    tastingNotes: [
      { title: "Bright Agave", description: "Plata-style pours show roasted agave, citrus and clean herbal lift." },
      { title: "Rested Spice", description: "Reposado and Anejo styles move toward vanilla, baking spice, oak and soft pepper." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat in a small tequila glass, or build a Tommy's Margarita when the expression has enough agave weight." },
      { subheading: "Food", description: "Pair with galouti kebabs, grilled prawns, paneer tikka or citrus-led ceviche." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "grilled prawns", "paneer tikka", "ceviche", "lime pickle tacos"] }],
    whyChoose: "Tres Generaciones suits drinkers who want Sauza heritage in a more premium tequila format.",
    faqs: [
      { question: "What does Tres Generaciones mean?", answer: "The name refers to three generations of the Sauza tequila family." },
      { question: "Which family created Tres Generaciones?", answer: "Tres Generaciones is linked to Don Cenobio, Don Eladio and Don Francisco Javier Sauza." },
    ],
    finalVerdict: "Tres Generaciones is a sharp pick for agave drinkers who want family history with cocktail-ready polish.",
    metaTitle: "Tres Generaciones Tequila Guide | BevOry",
    metaDescription: "Explore Tres Generaciones tequila history, tasting notes, serving ideas, pairings and city prices.",
  },
  dusse: {
    description: "D'USSÉ is a modern Cognac made at the Chateau de Cognac in France. Conceived by cellar master Michel Casavecchia, it presents Cognac in a contemporary bottle while staying rooted in one of the region's old houses.",
    story: "The Chateau de Cognac sits on the Charente River and has a long history in Cognac maturation. D'USSÉ uses that cellar setting to frame a richer, smoother house style aimed at neat pours and premium cocktails.",
    tastingNotes: [
      { title: "Dried Fruit", description: "Expect apricot, raisin and orange peel around a rounded grape-brandy core." },
      { title: "Wood Spice", description: "Oak brings vanilla, toasted spice and a warm, polished finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass, over one large cube, or in a Sidecar-style cocktail." },
      { subheading: "Food", description: "Pair with mutton seekh, dark chocolate, fig tart or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "dark chocolate", "fig tart", "aged cheddar", "roast duck"] }],
    whyChoose: "D'USSÉ is Cognac for drinkers who like classic French depth in a sleek modern package.",
    faqs: [
      { question: "Where is D'USSÉ made?", answer: "D'USSÉ is crafted at the Chateau de Cognac in France." },
      { question: "Who created D'USSÉ?", answer: "D'USSÉ was conceived by cellar master Michel Casavecchia." },
    ],
    finalVerdict: "D'USSÉ is a stylish Cognac choice for neat sipping, rich snacks and spirit-forward cocktails.",
    metaTitle: "D'USSÉ Cognac Guide | BevOry",
    metaDescription: "Explore D'USSÉ Cognac history, tasting notes, serving ideas, pairings and city prices.",
  },
  cazadores: {
    description: "Cazadores is a tequila brand from Arandas in Los Altos de Jalisco, Mexico. Its story begins with Don Jose Maria Banuelos, who developed the family recipe in 1922 among blue agave fields.",
    story: "Cazadores takes its name from the stag that became the brand's visual signature. The brand keeps its roots in Arandas, a highland tequila town known for red soils and aromatic agave.",
    tastingNotes: [
      { title: "Highland Agave", description: "Cooked blue agave, citrus and herbal pepper give the blanco style its lifted profile." },
      { title: "Oak And Spice", description: "Rested expressions add vanilla, baking spice and a rounder mid-palate." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Blanco in a Paloma or Margarita; sip Reposado with one cube and a grapefruit peel." },
      { subheading: "Food", description: "Pair with chicken tacos, tandoori prawns, salsa verde or smoked paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tacos", "tandoori prawns", "salsa verde", "smoked paneer", "grilled pineapple"] }],
    whyChoose: "Cazadores brings highland Jalisco character into a familiar tequila range.",
    faqs: [
      { question: "Where is Cazadores Tequila from?", answer: "Cazadores comes from Arandas in Los Altos de Jalisco, Mexico." },
      { question: "Who created the Cazadores recipe?", answer: "Don Jose Maria Banuelos developed the recipe in 1922." },
    ],
    finalVerdict: "Cazadores is a dependable tequila for bright Palomas, spicy snacks and agave-forward pours.",
    metaTitle: "Cazadores Tequila Guide | BevOry",
    metaDescription: "Explore Cazadores tequila notes, Arandas history, cocktail serves, pairings and city prices.",
  },
  "st-germain": {
    description: "ST-GERMAIN is a French elderflower liqueur made with hand-picked wild Sambucus nigra elderflowers. The brand is owned by Bacardi and is widely used as a floral modifier in spritzes, highballs and sparkling cocktails.",
    story: "Created for bartenders who wanted a fresh elderflower note, ST-GERMAIN turned a seasonal French blossom into a global cocktail ingredient. Its tall Art Deco-style bottle has become almost as recognisable as the elderflower spritz it helped popularise.",
    tastingNotes: [
      { title: "Elderflower Lift", description: "Fresh elderflower, pear, lychee and citrus peel give the liqueur its fragrant opening." },
      { title: "Soft Sweetness", description: "The palate is gentle and floral, with enough sweetness to round sparkling wine and soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build a spritz with sparkling wine, soda and lemon; use a smaller pour in gin highballs." },
      { subheading: "Food", description: "Pair with goat cheese, papdi chaat, grilled prawns or lemon tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["goat cheese", "papdi chaat", "grilled prawns", "lemon tart", "fresh berries"] }],
    whyChoose: "ST-GERMAIN adds clean elderflower aroma without overpowering citrus, gin or sparkling wine.",
    faqs: [
      { question: "What is ST-GERMAIN made from?", answer: "ST-GERMAIN is made with hand-picked wild elderflowers." },
      { question: "How do you drink ST-GERMAIN?", answer: "It works best in spritzes, sparkling cocktails and light gin or vodka highballs." },
    ],
    finalVerdict: "ST-GERMAIN is the bottle to reach for when a cocktail needs floral brightness and soft sweetness.",
    metaTitle: "ST-GERMAIN Liqueur Guide | BevOry",
    metaDescription: "Explore ST-GERMAIN elderflower notes, spritz ideas, food pairings and city prices.",
  },
  "noilly-prat": {
    description: "Noilly Prat is a French vermouth house based in Marseillan on the Mediterranean coast. Its wine-based aperitif style traces back to Joseph Noilly's early 19th-century work with dry, aromatised wines.",
    story: "The house moved its vermouth ageing to Marseillan, where sea air and outdoor maturation became part of its identity. Louis Noilly and Claudius Prat later gave the brand its lasting name and helped establish it as a reference point for dry vermouth.",
    tastingNotes: [
      { title: "Dry Herbs", description: "Original dry styles bring chamomile, bitter herbs, citrus peel and a saline edge." },
      { title: "Wine Freshness", description: "The palate stays wine-led, crisp and lightly bitter rather than syrupy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Keep chilled after opening; pour over ice with lemon, or use in a Martini." },
      { subheading: "Food", description: "Pair with olives, tandoori fish, herbed mushrooms or soft goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["olives", "tandoori fish", "herbed mushrooms", "soft goat cheese", "fried calamari"] }],
    whyChoose: "Noilly Prat is a classic French vermouth for Martinis, aperitif pours and seafood-led snacks.",
    faqs: [
      { question: "Where is Noilly Prat made?", answer: "Noilly Prat is made in Marseillan in the South of France." },
      { question: "What is Noilly Prat used for?", answer: "It is commonly used as a dry vermouth in Martinis and chilled aperitif serves." },
    ],
    finalVerdict: "Noilly Prat is a smart bottle for crisp aperitifs and clean, dry Martini-style cocktails.",
    metaTitle: "Noilly Prat Vermouth Guide | BevOry",
    metaDescription: "Explore Noilly Prat vermouth history, tasting notes, Martini serves, pairings and city prices.",
  },
  "santa-teresa": {
    description: "Santa Teresa is a Venezuelan rum house rooted in Hacienda Santa Teresa, founded in 1796. Its best-known premium expression, Santa Teresa 1796, uses a triple-aged solera process for a smooth aged-rum profile.",
    story: "The Santa Teresa story runs through the Vollmer family, Venezuelan sugarcane country and the Aragua valley. The hacienda identity gives the brand a strong estate-led voice in the global rum category.",
    tastingNotes: [
      { title: "Dark Sugar", description: "Caramel, molasses, dried fruit and toasted oak form the centre of the aged-rum profile." },
      { title: "Rounded Spice", description: "Soft vanilla, nutmeg and cocoa notes carry into a balanced finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip aged expressions neat in a rocks glass, or add one cube for a softer edge." },
      { subheading: "Food", description: "Pair with pork vindaloo, grilled pineapple, dark chocolate or spiced pecans." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork vindaloo", "grilled pineapple", "dark chocolate", "spiced pecans", "roast pork"] }],
    whyChoose: "Santa Teresa offers Venezuelan rum depth with an estate story that goes back to 1796.",
    faqs: [
      { question: "Where is Santa Teresa rum from?", answer: "Santa Teresa rum comes from Venezuela, with roots at Hacienda Santa Teresa." },
      { question: "What is Santa Teresa 1796 known for?", answer: "Santa Teresa 1796 is known for its triple-aged solera process." },
    ],
    finalVerdict: "Santa Teresa is a strong choice for drinkers who want smooth Venezuelan rum with real aged depth.",
    metaTitle: "Santa Teresa Rum Guide | BevOry",
    metaDescription: "Explore Santa Teresa rum history, solera style, tasting notes, pairings and city prices.",
  },
  "perrier-jouet": {
    description: "Perrier-Jouet is a Champagne house founded in Epernay in 1811 by Pierre-Nicolas Perrier and Rose-Adelaide Jouet. Now part of Pernod Ricard, it is known for elegant, floral cuvees and the anemone bottle design associated with Belle Epoque.",
    story: "The founders shared interests in nature, art and wine, themes that still shape the house's identity. In 1902, Emile Galle designed the Japanese anemone motif that later became one of Champagne's most recognisable luxury visuals.",
    tastingNotes: [
      { title: "Floral Champagne", description: "The house style leans toward white flowers, orchard fruit, citrus and a fine mousse." },
      { title: "Chardonnay Lift", description: "Chardonnay-led cuvees bring freshness, mineral tension and a clean, elegant finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill well and serve in a tulip or white wine glass to preserve aroma." },
      { subheading: "Food", description: "Pair with tandoori prawns, oysters, fried chicken, brie or strawberry tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "oysters", "fried chicken", "brie", "strawberry tart"] }],
    whyChoose: "Perrier-Jouet is Champagne for drinkers who like floral elegance, art-house heritage and fine bubbles.",
    faqs: [
      { question: "When was Perrier-Jouet founded?", answer: "Perrier-Jouet was founded in Epernay in 1811." },
      { question: "Who founded Perrier-Jouet?", answer: "Pierre-Nicolas Perrier and Rose-Adelaide Jouet founded the Champagne house." },
    ],
    finalVerdict: "Perrier-Jouet is best for celebrations that call for graceful Champagne rather than heavy richness.",
    metaTitle: "Perrier-Jouet Champagne Guide | BevOry",
    metaDescription: "Explore Perrier-Jouet Champagne history, floral tasting notes, pairings and city prices.",
  },
  "grand-marnier": {
    description: "Grand Marnier is a French orange liqueur created in 1880 by Louis-Alexandre Marnier Lapostolle. Its signature Cordon Rouge combines Cognac with bitter orange liqueur and sugar.",
    story: "The Lapostolle family began with fruit liqueurs near Paris before Louis-Alexandre Marnier Lapostolle married Cognac depth with exotic bitter orange. The red ribbon, wax seal and rounded bottle became part of the brand's Cordon Rouge identity.",
    tastingNotes: [
      { title: "Bitter Orange", description: "Bright orange peel, marmalade and citrus oil sit clearly above the Cognac base." },
      { title: "Cognac Warmth", description: "Hazelnut, toffee, vanilla and gentle oak add body beyond a simple triple sec style." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, add to a Sidecar or Margarita, or drizzle a small pour over dessert." },
      { subheading: "Food", description: "Pair with duck, dark chocolate, orange cake, gulab jamun or aged gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["duck", "dark chocolate", "orange cake", "gulab jamun", "aged gouda"] }],
    whyChoose: "Grand Marnier adds Cognac weight and bitter-orange clarity where ordinary orange liqueur feels thin.",
    faqs: [
      { question: "What is Grand Marnier made from?", answer: "Grand Marnier Cordon Rouge blends Cognac with bitter orange liqueur and sugar." },
      { question: "Who created Grand Marnier?", answer: "Louis-Alexandre Marnier Lapostolle created Grand Marnier in 1880." },
    ],
    finalVerdict: "Grand Marnier is the orange liqueur to use when a cocktail or dessert needs Cognac-backed depth.",
    metaTitle: "Grand Marnier Liqueur Guide | BevOry",
    metaDescription: "Explore Grand Marnier orange liqueur notes, Cognac history, cocktail ideas and city prices.",
  },
  frangelico: {
    description: "Frangelico is an Italian hazelnut liqueur associated with the Piedmont region of northern Italy. It blends hazelnut distillate with cocoa, vanilla, roasted coffee and other flavouring preparations.",
    story: "The brand's monk-shaped bottle nods to Piedmont folklore and the area's old monastic traditions. Its flavour story is tied to northern Italian hazelnuts, dessert culture and after-dinner liqueur service.",
    tastingNotes: [
      { title: "Hazelnut Core", description: "Roasted hazelnut leads clearly, supported by cocoa and vanilla sweetness." },
      { title: "Coffee Finish", description: "A light roasted-coffee note keeps the finish warm and dessert-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, over ice, in an espresso cocktail, or as a small after-dinner pour." },
      { subheading: "Food", description: "Pair with tiramisu, dark chocolate, kesar kulfi, vanilla ice cream or roasted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tiramisu", "dark chocolate", "kesar kulfi", "vanilla ice cream", "roasted almonds"] }],
    whyChoose: "Frangelico is the go-to hazelnut liqueur for coffee drinks, dessert pairings and nut-led cocktails.",
    faqs: [
      { question: "What does Frangelico taste like?", answer: "Frangelico tastes of roasted hazelnut with cocoa, vanilla and coffee notes." },
      { question: "Where is Frangelico from?", answer: "Frangelico is an Italian liqueur associated with Piedmont in northern Italy." },
    ],
    finalVerdict: "Frangelico is a dessert-friendly Italian liqueur that brings clear hazelnut flavour without needing a complicated serve.",
    metaTitle: "Frangelico Liqueur Guide | BevOry",
    metaDescription: "Explore Frangelico hazelnut notes, Italian origin, dessert pairings, cocktails and city prices.",
  },
};
