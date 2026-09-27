import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_119 = [
  ["courvoisier", "Courvoisier", "France", "Cognac", "brand-expansion-courvoisier"],
  ["hornitos", "Hornitos", "Mexico", "Tequila", "brand-expansion-hornitos"],
  ["sauza", "Sauza", "Mexico", "Tequila", "brand-expansion-sauza"],
  ["tres-generaciones", "Tres Generaciones", "Mexico", "Tequila", "brand-expansion-tres-generaciones"],
  ["dusse", "D'USSÉ", "France", "Cognac", "brand-expansion-dusse"],
  ["cazadores", "Cazadores", "Mexico", "Tequila", "brand-expansion-cazadores"],
  ["st-germain", "St-Germain", "France", "Liqueur", "brand-expansion-st-germain"],
  ["noilly-prat", "Noilly Prat", "France", "Vermouth", "brand-expansion-noilly-prat"],
  ["santa-teresa", "Santa Teresa", "Venezuela", "Rum", "brand-expansion-santa-teresa"],
  ["perrier-jouet", "Perrier-Jouët", "France", "Champagne", "brand-expansion-perrier-jouet"],
] as const;

export const BRAND_LOGOS_BATCH_119: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_119: Record<string, string[]> = {
  courvoisier: [
    "https://www.courvoisier.com/en-gb/heritage/",
    "https://www.maisons-cognac.fr/en/maison/maison-courvoisier/",
  ],
  hornitos: ["https://www.hornitostequila.com/about-us"],
  sauza: [
    "https://www.sauzatequila.com/heritage",
    "https://www.suntoryglobalspirits.com/en-in/our-brands/tequila",
  ],
  "tres-generaciones": [
    "https://www.tresgeneraciones.com/",
    "https://www.suntoryglobalspirits.com/en-in/our-brands/tequila",
  ],
  dusse: ["https://www.dusse.com/our-story/"],
  cazadores: ["https://www.cazadores.com/us/en/culture/our-story/"],
  "st-germain": ["https://www.stgermainliqueur.com/us/en/about/"],
  "noilly-prat": [
    "https://www.noillyprat.com/fr/fr/heritage/",
    "https://www.noillyprat.com/fr/fr/",
  ],
  "santa-teresa": [
    "https://www.santateresarum.com/uk/en/heritage/",
    "https://www.santateresarum.com/faq/",
  ],
  "perrier-jouet": ["https://www.perrier-jouet.com/en-ww/the-house/history"],
};

export const BRAND_CONTENT_BATCH_119: Record<string, BrandPublicContent> = {
  courvoisier: {
    description: "Courvoisier is a Cognac house based in Jarnac, France, with a range that spans VS, VSOP, XO and older house expressions. The spirit is made from grape eaux-de-vie from the Cognac region, then blended for a polished fruit-and-oak style.",
    story: "Félix Courvoisier and Jules Gallois moved the business to Jarnac in 1828 after the family's earlier Paris wine and spirits trade. Courvoisier's imperial association with Napoleon III became part of its public identity, but the house remains rooted in Charente craft.",
    tastingNotes: [
      { title: "VS And Cocktails", description: "Bright grape fruit, vanilla, light oak and citrus-friendly spice make the younger style useful in Sidecars and long drinks." },
      { title: "VSOP And XO", description: "Riper orchard fruit, dried apricot, toasted wood, cocoa and gentle baking spice build a rounder sipping profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use VS in a Sidecar or highball; pour VSOP and XO neat in a tulip glass with a little time to open." },
      { subheading: "Food", description: "Pair with galouti kebabs, duck seekh, aged cheddar, orange tart or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "duck seekh", "aged cheddar", "orange tart", "dark chocolate"] }],
    whyChoose: "Courvoisier is a classic Jarnac Cognac for drinkers moving between cocktail-friendly VS and softer sipping blends.",
    faqs: [
      { question: "Where is Courvoisier made?", answer: "Courvoisier is based in Jarnac in France's Cognac region." },
      { question: "Is Courvoisier a brandy?", answer: "Yes. Cognac is a protected style of grape brandy made in the Cognac region of France." },
    ],
    finalVerdict: "Courvoisier gives Cognac drinkers a reliable path from citrus cocktails to after-dinner pours.",
    metaTitle: "Courvoisier Cognac Guide | BevOry",
    metaDescription: "Explore Courvoisier Cognac from Jarnac, VS and VSOP styles, serving ideas, pairings and city prices on BevOry.",
  },
  hornitos: {
    description: "Hornitos is a Jalisco tequila label from the Sauza family, made with blue Weber agave. It covers clear Plata tequila and oak-rested styles built for Margaritas, Palomas and easy sipping.",
    story: "Don Francisco Javier Sauza launched Hornitos on Mexican Independence Day in 1950. The name refers to small ovens used for cooking agave, linking the brand to tequila's production language as well as Sauza history.",
    tastingNotes: [
      { title: "Plata", description: "Clean agave, lime peel, pepper and fresh herbal notes keep the unaged tequila sharp and bright." },
      { title: "Reposado", description: "Oak resting adds vanilla, roasted agave, mild caramel and softer spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Shake Plata in a Margarita or build a Paloma; pour Reposado over ice when you want a slower drink." },
      { subheading: "Food", description: "Pair with tandoori prawns, fish tacos, achari paneer, grilled pineapple chaat or corn ribs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "fish tacos", "achari paneer", "grilled pineapple chaat", "corn ribs"] }],
    whyChoose: "Hornitos is a practical agave pick when you want Sauza heritage in bright cocktail-friendly tequila.",
    faqs: [
      { question: "Who created Hornitos?", answer: "Don Francisco Javier Sauza launched Hornitos in 1950." },
      { question: "What is Hornitos made from?", answer: "Hornitos tequila is made from blue Weber agave in Jalisco, Mexico." },
    ],
    finalVerdict: "Hornitos works best when fresh agave, citrus and spicy snacks are on the table.",
    metaTitle: "Hornitos Tequila Guide | BevOry",
    metaDescription: "Explore Hornitos tequila, Sauza family history, Plata and Reposado notes, pairings and city prices on BevOry.",
  },
  sauza: {
    description: "Sauza is one of Mexico's historic tequila names, founded in Tequila, Jalisco. Its range includes blanco, gold and aged expressions connected to the La Perseverancia distillery.",
    story: "Don Cenobio Sauza founded La Perseverancia in 1873 and helped push tequila beyond Jalisco. Later generations of the Sauza family built the name into one of the best-known tequila houses in global bars.",
    tastingNotes: [
      { title: "Blanco", description: "Fresh agave, citrus, white pepper and herbal notes keep the clear style direct." },
      { title: "Gold And Rested Styles", description: "Softer sweetness, vanilla, gentle oak and cooked agave sit well in mixed drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use blanco in Margaritas and Palomas; pour rested styles with ice, soda or grapefruit." },
      { subheading: "Food", description: "Pair with chicken tacos, chilli paneer, salsa verde, tandoori corn or prawn ceviche." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tacos", "chilli paneer", "salsa verde", "tandoori corn", "prawn ceviche"] }],
    whyChoose: "Sauza brings a long Jalisco lineage to straightforward tequila serves.",
    faqs: [
      { question: "When was Sauza founded?", answer: "Don Cenobio Sauza founded La Perseverancia in 1873." },
      { question: "Where is Sauza tequila from?", answer: "Sauza comes from Tequila in Jalisco, Mexico." },
    ],
    finalVerdict: "Sauza is the easy tequila choice for Margaritas, Palomas and agave-forward party pours.",
    metaTitle: "Sauza Tequila Guide | BevOry",
    metaDescription: "Explore Sauza tequila from Jalisco, La Perseverancia history, serving ideas, pairings and city prices on BevOry.",
  },
  "tres-generaciones": {
    description: "Tres Generaciones is a super-premium tequila from the Sauza family. It is triple distilled and named for three generations of Sauza tequila-making: Don Cenobio, Don Eladio and Don Francisco Javier.",
    story: "The brand honors the family line that helped establish tequila as Mexico's signature spirit. Its current identity sits above Sauza's mainstream range, with blanco and aged styles made for neat pours as well as refined agave cocktails.",
    tastingNotes: [
      { title: "Plata", description: "Roasted agave, citrus, cracked pepper and a clean mineral note define the clear style." },
      { title: "Aged Expressions", description: "Vanilla, spice, cooked agave and light oak add roundness without losing the agave core." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat from a small glass, serve over one cube, or use Plata in a precise Margarita." },
      { subheading: "Food", description: "Pair with ceviche, tandoori prawns, lamb barbacoa, guacamole or grilled pineapple." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["ceviche", "tandoori prawns", "lamb barbacoa", "guacamole", "grilled pineapple"] }],
    whyChoose: "Tres Generaciones is the Sauza-family step up for drinkers who want cleaner texture and more polish.",
    faqs: [
      { question: "What does Tres Generaciones mean?", answer: "It means three generations, honoring the Sauza family line in tequila." },
      { question: "Is Tres Generaciones triple distilled?", answer: "Yes. Tres Generaciones is presented as a triple-distilled tequila." },
    ],
    finalVerdict: "Tres Generaciones suits agave fans who want Sauza history in a more polished tequila style.",
    metaTitle: "Tres Generaciones Tequila Guide | BevOry",
    metaDescription: "Explore Tres Generaciones tequila, Sauza family roots, triple distillation, pairings and city prices on BevOry.",
  },
  dusse: {
    description: "D'USSÉ is a Cognac brand produced at the historic Château de Cognac in France. Its VSOP leads the range with a modern, cocktail-aware style built around oak, spice and rounded fruit.",
    story: "Château de Cognac has centuries of cellaring heritage on the Charente River. D'USSÉ uses that setting for a contemporary Cognac identity that moves easily between neat pours, Sidecars and lemonade highballs.",
    tastingNotes: [
      { title: "Oak And Spice", description: "Toasted oak, cinnamon, clove and vanilla give the Cognac its warm frame." },
      { title: "Fruit Core", description: "Apricot, raisin, honeyed grape and orange peel keep the palate smooth and generous." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat in a tulip glass, serve over one large cube, or mix in a D'USSÉ Sidecar." },
      { subheading: "Food", description: "Pair with mutton galouti, roast duck, dark chocolate mousse, dried figs or aged gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton galouti", "roast duck", "dark chocolate mousse", "dried figs", "aged gouda"] }],
    whyChoose: "D'USSÉ is a polished Cognac for drinkers who want a modern bottle that still works neat.",
    faqs: [
      { question: "Where is D'USSÉ made?", answer: "D'USSÉ is produced at Château de Cognac in France." },
      { question: "How should D'USSÉ VSOP be served?", answer: "D'USSÉ VSOP works neat, over ice, in a Sidecar or in a lemonade highball." },
    ],
    finalVerdict: "D'USSÉ brings oak, fruit and spice into a Cognac style that feels comfortable in cocktails and sipping serves.",
    metaTitle: "D'USSÉ Cognac Guide | BevOry",
    metaDescription: "Explore D'USSÉ Cognac from Château de Cognac, VSOP notes, serving ideas, pairings and city prices on BevOry.",
  },
  cazadores: {
    description: "Cazadores is a tequila from Arandas in Los Altos de Jalisco, Mexico. The range is built around 100 percent agave styles including blanco, reposado and more mature expressions.",
    story: "Don José María Bañuelos created the Cazadores recipe in 1922 in the highlands of Jalisco. Arandas remains central to the brand's identity, from agave farming to the community around production.",
    tastingNotes: [
      { title: "Highland Agave", description: "Cooked agave, citrus, pepper and herbal lift give the blanco style its clean edge." },
      { title: "Rested Tequila", description: "Reposado and aged styles bring vanilla, soft oak, caramel and baking spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use blanco in a Margarita or Paloma; sip reposado over ice with a slice of orange." },
      { subheading: "Food", description: "Pair with fish tacos, achari prawns, paneer fajitas, guacamole or smoky corn." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "achari prawns", "paneer fajitas", "guacamole", "smoky corn"] }],
    whyChoose: "Cazadores is for tequila drinkers who like bright highland agave with enough structure for cocktails.",
    faqs: [
      { question: "Where is Cazadores tequila made?", answer: "Cazadores is tied to Arandas in the Los Altos highlands of Jalisco, Mexico." },
      { question: "Who created Cazadores?", answer: "Don José María Bañuelos created the Cazadores recipe in 1922." },
    ],
    finalVerdict: "Cazadores brings Arandas agave character to Margaritas, Palomas and spicy food.",
    metaTitle: "Cazadores Tequila Guide | BevOry",
    metaDescription: "Explore Cazadores tequila from Arandas, Jalisco, tasting notes, food pairings and city prices on BevOry.",
  },
  "st-germain": {
    description: "St-Germain is a French elderflower liqueur made with fresh elderflowers handpicked in spring. It was launched by Robert Cooper in 2007 and quickly became a modern bar staple.",
    story: "The name nods to Saint-Germain-des-Prés, the Paris district associated with writers, artists and cafe culture. Its tall faceted bottle and floral profile made the liqueur easy to recognize in spritzes and sparkling cocktails.",
    tastingNotes: [
      { title: "Elderflower", description: "Fresh elderflower gives soft floral lift without becoming heavy or perfumed." },
      { title: "Fruit And Citrus", description: "Pear, lychee, peach and lemon notes make the liqueur bright in sparkling serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build a St-Germain Spritz with sparkling wine, soda and ice, or use a small measure in gin cocktails." },
      { subheading: "Food", description: "Pair with goat cheese, fruit chaat, tandoori prawns, lemon tart or cucumber sandwiches." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["goat cheese", "fruit chaat", "tandoori prawns", "lemon tart", "cucumber sandwiches"] }],
    whyChoose: "St-Germain adds fresh elderflower aroma to sparkling drinks without needing a complicated recipe.",
    faqs: [
      { question: "What is St-Germain made from?", answer: "St-Germain is a French liqueur made with fresh elderflowers." },
      { question: "What is the best-known St-Germain serve?", answer: "The St-Germain Spritz is the signature serve, usually built with sparkling wine and soda." },
    ],
    finalVerdict: "St-Germain is the bottle to reach for when a cocktail needs floral freshness and gentle fruit.",
    metaTitle: "St-Germain Liqueur Guide | BevOry",
    metaDescription: "Explore St-Germain elderflower liqueur, Spritz serves, tasting notes, pairings and city prices on BevOry.",
  },
  "noilly-prat": {
    description: "Noilly Prat is a French vermouth house associated with Marseillan in southern France. Its wine-based aperitifs use outdoor ageing for Original Dry and Extra Dry, plus botanical maceration by dodinage.",
    story: "Joseph Noilly created the dry vermouth style in 1813, and the house later developed its Marseillan ageing site near the Étang de Thau. The brand remains important to Martinis, aperitif serves and French vermouth history.",
    tastingNotes: [
      { title: "Dry Vermouth", description: "White wine, chamomile, citrus peel, herbs and light salinity give the dry style its snap." },
      { title: "Sweet And Amber Styles", description: "Richer expressions bring orange, spice, dried fruit and bittersweet herbal depth." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled over ice with citrus, mix with tonic, or use dry vermouth in a Martini." },
      { subheading: "Food", description: "Pair with olives, tandoori prawns, fried calamari, goat cheese or herbed mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["olives", "tandoori prawns", "fried calamari", "goat cheese", "herbed mushrooms"] }],
    whyChoose: "Noilly Prat is a benchmark French vermouth for Martinis and relaxed aperitif drinking.",
    faqs: [
      { question: "Where is Noilly Prat made?", answer: "Noilly Prat is associated with Marseillan in southern France." },
      { question: "What is dodinage?", answer: "Dodinage is the house's manual botanical mixing process used during vermouth production." },
    ],
    finalVerdict: "Noilly Prat is essential when a drink needs dry wine character, herbs and aperitif bite.",
    metaTitle: "Noilly Prat Vermouth Guide | BevOry",
    metaDescription: "Explore Noilly Prat French vermouth, Marseillan heritage, Martini serves, pairings and city prices on BevOry.",
  },
  "santa-teresa": {
    description: "Santa Teresa is a Venezuelan rum house rooted in Hacienda Santa Teresa, founded in 1796. Its best-known premium expression, Santa Teresa 1796, uses a triple-aged solera process.",
    story: "Gustav Julius Vollmer arrived in Venezuela in 1830 and married Panchita Rivas, linking the Vollmer family to the estate's rum history. The hacienda in Aragua remains the home of Santa Teresa's sugarcane and rum identity.",
    tastingNotes: [
      { title: "Solera Rum", description: "Dark fruit, toffee, vanilla, toasted oak and orange peel give Santa Teresa 1796 its polished depth." },
      { title: "Dry Finish", description: "Cocoa, tobacco leaf, baking spice and a clean dry close keep the sweetness controlled." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip aged rum neat in a rocks glass, add one cube, or use it in a spirit-forward rum Old Fashioned." },
      { subheading: "Food", description: "Pair with pork vindaloo, grilled pineapple, dark chocolate, coffee kulfi or smoked almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork vindaloo", "grilled pineapple", "dark chocolate", "coffee kulfi", "smoked almonds"] }],
    whyChoose: "Santa Teresa is a Venezuelan rum pick for drinkers who want aged depth without sticky sweetness.",
    faqs: [
      { question: "Where is Santa Teresa rum from?", answer: "Santa Teresa rum is from Venezuela, with roots at Hacienda Santa Teresa in Aragua." },
      { question: "What is Santa Teresa 1796 known for?", answer: "Santa Teresa 1796 is known for its triple-aged solera process." },
    ],
    finalVerdict: "Santa Teresa brings Venezuelan rum heritage into a dry, polished aged-rum profile.",
    metaTitle: "Santa Teresa Rum Guide | BevOry",
    metaDescription: "Explore Santa Teresa Venezuelan rum, 1796 solera style, tasting notes, pairings and city prices on BevOry.",
  },
  "perrier-jouet": {
    description: "Perrier-Jouët is a Champagne house founded in Épernay in 1811 by Pierre-Nicolas Perrier and Rose-Adélaïde Jouët. The maison is known for Chardonnay-led elegance and the Belle Epoque bottles decorated with Japanese anemones.",
    story: "The founders linked Champagne with art, nature and precise vineyard selection from the beginning. Perrier-Jouët later became closely associated with Côte des Blancs Chardonnay, especially through Belle Epoque Blanc de Blancs.",
    tastingNotes: [
      { title: "Chardonnay Lift", description: "White flowers, lemon, pear, chalk and fresh pastry give many cuvées their elegant line." },
      { title: "Belle Epoque Style", description: "Vintage cuvées add peach, almond, honeyed citrus and fine mousse while staying floral." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a tulip glass so the bubbles, fruit and floral notes have room." },
      { subheading: "Food", description: "Pair with tandoori prawns, sushi, oysters, brie, truffle fries or lemon tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "sushi", "oysters", "brie", "truffle fries", "lemon tart"] }],
    whyChoose: "Perrier-Jouët is Champagne for drinkers who like floral Chardonnay finesse and art-led house identity.",
    faqs: [
      { question: "Where is Perrier-Jouët based?", answer: "Perrier-Jouët is based in Épernay in France's Champagne region." },
      { question: "When was Perrier-Jouët founded?", answer: "Pierre-Nicolas Perrier and Rose-Adélaïde Jouët founded the house in 1811." },
    ],
    finalVerdict: "Perrier-Jouët is a refined Champagne choice when freshness, flowers and fine bubbles matter.",
    metaTitle: "Perrier-Jouët Champagne Guide | BevOry",
    metaDescription: "Explore Perrier-Jouët Champagne from Épernay, Chardonnay style, Belle Epoque notes and city prices on BevOry.",
  },
};
