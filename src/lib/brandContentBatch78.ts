import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_78 = [
  ["doga", "Doga", "Italy", "Wine", "pending-doga"],
  ["dom-senor", "Dom Senor", "India", "Rum", "pending-dom-senor"],
  ["domaine", "Domaine", "France", "Wine", "pending-domaine"],
  ["domenico", "Domenico", "Italy", "Wine", "pending-domenico"],
  ["don-angel", "Don Angel", "Mexico", "Tequila", "pending-don-angel"],
  ["don-roberto", "Don Roberto", "Mexico", "Tequila", "pending-don-roberto"],
  ["don-romeo", "Don Romeo", "Mexico", "Tequila", "pending-don-romeo"],
  ["dos-flamos", "Dos Flamos", "Mexico", "Tequila", "pending-dos-flamos"],
  ["dot", "Dot", "India", "Made in India Whisky", "pending-dot"],
  ["double-blue", "Double Blue", "India", "Made in India Whisky", "pending-double-blue"],
] as const;

export const BRAND_LOGOS_BATCH_78: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_78: Record<string, string[]> = {
  doga: [
    "https://www.livcheers.com/hyderabad/liquor/doga-jolo-750ml",
    "https://www.opiciwinesandspirits.com/wines/dogajolo/",
    "https://www.bevory.in/agra/brand/doga",
  ],
  "dom-senor": [
    "https://www.livcheers.com/bhopal/liquor/dom-senor-premium-xxx-rum-375ml",
    "https://www.livcheers.com/indore/brand/dom-senor",
    "https://www.bevory.in/agra/brand/dom-senor",
  ],
  domaine: [
    "https://www.livcheers.com/goa/liquor/domaine-vacheron-sancerre-blanc-wine-750ml",
    "https://www.europeancellars.com/producer/domaine-vacheron/",
    "https://www.bevory.in/agra/brand/domaine",
  ],
  domenico: [
    "https://domenicoclerico.com/en/wines/",
    "https://www.livcheers.com/gurgaon/liquor/domenico-clerico-barolo-ginestra-2004-750ml",
    "https://www.bevory.in/agra/brand/domenico",
  ],
  "don-angel": [
    "https://www.livcheers.com/kolkata/liquor/don-angel-bianco-tequila-1000ML",
    "https://tsbcl.nic.in/open_record.php?ID=249",
    "https://www.bevory.in/agra/brand/don-angel",
  ],
  "don-roberto": [
    "https://tequiladonroberto.com/products",
    "https://www.trademarkia.com/owners/productora-don-roberto-sa-de-cv",
    "https://www.bevory.in/agra/brand/don-roberto",
  ],
  "don-romeo": [
    "https://www.donromeotequila.com/about",
    "https://www.donromeotequila.com/",
    "https://www.bevory.in/agra/brand/don-romeo",
  ],
  "dos-flamos": [
    "https://dosflamos.com/",
    "https://www.livcheers.com/kolkata/liquor/don-angel-bianco-tequila-1000ML",
    "https://www.bevory.in/agra/brand/dos-flamos",
  ],
  dot: [
    "https://www.livcheers.com/delhi/liquor/dot-whisky-180ml",
    "https://www.bevory.in/agra/brand/dot",
  ],
  "double-blue": [
    "https://adsspirits.com/double-blue/",
    "https://www.livcheers.com/mumbai/liquor/double-blue-180ml",
    "https://www.bevory.in/agra/brand/double-blue",
  ],
};

export const BRAND_CONTENT_BATCH_78: Record<string, BrandPublicContent> = {
  doga: {
    description: "Doga is the BevOry brand page for Doga Jolo, a wine entry connected with the Dogajolo style made famous by Carpineto in Tuscany. The page is useful for drinkers comparing a Tempranillo and Grenache-led red wine profile in Indian cities.",
    story: "Dogajolo takes its name from the Italian word for the wooden stave used in oak casks. The style is built around youthful fruit, gentle oak influence and a modern Tuscan drinking mood rather than a heavy cellar-wine frame.",
    tastingNotes: [
      { title: "Red Fruit", description: "Cherry, plum, coffee and vanilla notes sit over a medium body." },
      { title: "Soft Spice", description: "Grenache-style warmth and oak spice keep the finish rounded rather than sharp." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red wine glass, especially in warm weather." },
      { subheading: "Food", description: "Pair with seekh kebab, mushroom pizza, tomato pasta, grilled chicken or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "mushroom pizza", "tomato pasta", "grilled chicken", "aged cheddar"] }],
    whyChoose: "Doga works for drinkers who want a fruit-forward imported red that can handle Indian snacks and casual dinners.",
    faqs: [
      { question: "What style is Doga Jolo?", answer: "It is shown as a Tempranillo and Grenache blend with a medium-bodied red wine profile." },
      { question: "What should I eat with Doga?", answer: "Try seekh kebab, grilled chicken, mushroom pizza or tomato-led pasta." },
    ],
    finalVerdict: "Doga is a friendly red-wine pick when you want fruit, spice and an easy food match.",
    metaTitle: "Doga Wine Guide | BevOry",
    metaDescription: "Explore Doga Jolo wine notes, Tuscan-style context, food pairings, serving ideas and city prices on BevOry.",
  },
  "dom-senor": {
    description: "Dom Senor is an Indian rum brand listed on BevOry through Dom Senor Premium XXX Rum. It sits in the dark-rum and blended Indian rum space, with 375 ml and 750 ml formats visible across Indian retail listings.",
    story: "Dom Senor is built for the Indian rum drinker who wants a fuller, sweeter profile for cola, ice or soda serves. Its Premium XXX Rum listing leans on oak, caramel and tropical-fruit cues rather than a dry agricole style.",
    tastingNotes: [
      { title: "Caramel Rum", description: "Oak, caramel, molasses sweetness and tropical fruit notes lead the profile." },
      { title: "Spiced Warmth", description: "A soft spice line and lingering sweetness make it comfortable in cola or ginger ale." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice with cola, ginger ale or soda, with a squeeze of lime." },
      { subheading: "Food", description: "Pair with Koliwada prawns, chilli paneer, chicken lollipop, pork chilli or salted peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Koliwada prawns", "chilli paneer", "chicken lollipop", "pork chilli", "salted peanuts"] }],
    whyChoose: "Dom Senor is a straightforward Indian rum choice for sweet-spiced mixed drinks and fried snacks.",
    faqs: [
      { question: "What type of drink is Dom Senor?", answer: "Dom Senor Premium XXX Rum is a rum-style spirit listed in the blended Indian category." },
      { question: "How should Dom Senor be served?", answer: "It suits ice, cola, ginger ale or soda with lime." },
    ],
    finalVerdict: "Dom Senor is made for easy rum serves where caramel sweetness and spice are welcome.",
    metaTitle: "Dom Senor Rum Guide | BevOry",
    metaDescription: "Explore Dom Senor Premium XXX Rum notes, serving ideas, Indian food pairings and city prices on BevOry.",
  },
  domaine: {
    description: "Domaine is a French wine brand page on BevOry led by Domaine Vacheron Sancerre Blanc. The listing points to Loire Valley Sauvignon Blanc, with biodynamic farming and Sancerre minerality at the center of the style.",
    story: "Domaine Vacheron is a respected Sancerre estate run by the Vacheron family in the Loire Valley. The domaine is known for Sauvignon Blanc shaped by limestone and silex soils, with work in biodynamic farming noted by specialist wine importers.",
    tastingNotes: [
      { title: "Sancerre Citrus", description: "Grapefruit, lemon, lime and pear come through with a brisk, dry line." },
      { title: "Mineral Edge", description: "Flinty texture and sea-salt freshness give the wine a clean, precise finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white wine glass, not ice-cold, so the citrus and mineral notes stay clear." },
      { subheading: "Food", description: "Pair with tandoori fish, goat cheese, grilled prawns, lemon chicken or asparagus risotto." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "goat cheese", "grilled prawns", "lemon chicken", "asparagus risotto"] }],
    whyChoose: "Domaine is the page to use when you want crisp French white wine with Sancerre precision.",
    faqs: [
      { question: "Which Domaine wine is listed on BevOry?", answer: "The page includes Domaine Vacheron Sancerre Blanc, a Loire Valley Sauvignon Blanc." },
      { question: "What food pairs with Domaine Sancerre?", answer: "Tandoori fish, goat cheese, prawns and lemon-led dishes are strong matches." },
    ],
    finalVerdict: "Domaine is a clean, mineral white-wine choice for seafood, cheese and sharper Indian starters.",
    metaTitle: "Domaine Wine Guide | BevOry",
    metaDescription: "Explore Domaine Vacheron Sancerre notes, Loire Valley style, food pairings and city prices on BevOry.",
  },
  domenico: {
    description: "Domenico is the BevOry page for Domenico Clerico, an Italian wine name associated with Barolo from Monforte d'Alba in Piedmont. The listed bottles include Barolo Ginestra expressions made from Nebbiolo.",
    story: "Domenico Clerico built its reputation around individual vineyard character in the Langhe. The estate's own range includes Barolo wines from Ginestra, Pajana, Bussia and other respected Barolo sites.",
    tastingNotes: [
      { title: "Nebbiolo Power", description: "Dark cherry, rose, leather, tar and spice shape the Barolo profile." },
      { title: "Firm Structure", description: "High acidity and firm tannins give the wine a long, savoury finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Decant mature Barolo gently and serve in a large red wine glass." },
      { subheading: "Food", description: "Pair with mutton rogan josh, lamb chops, mushroom risotto, truffle pasta or aged parmesan." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "lamb chops", "mushroom risotto", "truffle pasta", "aged parmesan"] }],
    whyChoose: "Domenico is for drinkers comparing serious Piedmont reds with depth, tannin and savoury complexity.",
    faqs: [
      { question: "What grape is used in Domenico Clerico Barolo?", answer: "Barolo is made from Nebbiolo grown in the Barolo zone of Piedmont." },
      { question: "What food suits Domenico Barolo?", answer: "Rich lamb, mushroom dishes, truffle pasta and aged hard cheeses work well." },
    ],
    finalVerdict: "Domenico brings classic Barolo intensity for meals that can stand up to Nebbiolo tannin.",
    metaTitle: "Domenico Wine Guide | BevOry",
    metaDescription: "Explore Domenico Clerico Barolo notes, Nebbiolo style, serving tips, pairings and city prices on BevOry.",
  },
  "don-angel": {
    description: "Don Angel is a Mexican tequila brand page on BevOry, led by Don Angel Bianco and Don Angel Oro listings. The Indian listings place it in imported tequila, with blanco-style serves built around clean agave and citrus.",
    story: "Don Angel appears in Indian hotel, retail and excise listings as an imported tequila option. The brand is most useful for drinkers comparing accessible tequila for Margaritas, Palomas and chilled shots.",
    tastingNotes: [
      { title: "Fresh Agave", description: "Cooked agave, citrus peel and herbal notes define the blanco-style profile." },
      { title: "Cocktail Finish", description: "Clean pepper and lime-like brightness keep it sharp in mixed drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use in Margaritas, Palomas or Ranch Water, or sip chilled with lime." },
      { subheading: "Food", description: "Pair with fish tacos, chicken tikka, ceviche, nachos, or chilli garlic prawns." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "chicken tikka", "ceviche", "nachos", "chilli garlic prawns"] }],
    whyChoose: "Don Angel is a handy tequila page for citrus-led cocktails and Mexican-style food pairings.",
    faqs: [
      { question: "What type of tequila is Don Angel Bianco?", answer: "It is a blanco-style tequila listing with clean agave, citrus and herbal notes." },
      { question: "Which cocktails suit Don Angel?", answer: "Margarita, Paloma, Ranch Water and Tequila Collins are natural fits." },
    ],
    finalVerdict: "Don Angel is a practical tequila choice when the plan is fresh lime, salt and bright cocktails.",
    metaTitle: "Don Angel Tequila Guide | BevOry",
    metaDescription: "Explore Don Angel tequila notes, Margarita serves, food pairings and city prices on BevOry.",
  },
  "don-roberto": {
    description: "Don Roberto is a Mexican tequila house tied to Productora Don Roberto, S.A. de C.V. Its portfolio includes Don Roberto 1924 Plata, Reposado, Anejo, Cristalino and extra-aged tequila expressions.",
    story: "Productora Don Roberto is based in Jalisco, the Mexican heartland of tequila. The house works across 100% agave styles, from bright plata tequila to oak-influenced reposado and anejo releases.",
    tastingNotes: [
      { title: "Plata Style", description: "Fresh agave, citrus, green herbs and pepper sit at the front." },
      { title: "Aged Releases", description: "Reposado and anejo styles bring vanilla, toasted oak, baking spice and cooked agave sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Plata in a Margarita or Paloma; pour Reposado and Anejo neat or over a large cube." },
      { subheading: "Food", description: "Pair with lamb tacos, tandoori prawns, paneer tikka, grilled corn or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb tacos", "tandoori prawns", "paneer tikka", "grilled corn", "dark chocolate"] }],
    whyChoose: "Don Roberto gives tequila drinkers a full Jalisco ladder from clean Plata to richer aged bottlings.",
    faqs: [
      { question: "Where is Don Roberto tequila from?", answer: "Don Roberto is linked to Productora Don Roberto in Jalisco, Mexico." },
      { question: "Which Don Roberto style is best for cocktails?", answer: "Plata is the cleanest choice for Margaritas and Palomas." },
    ],
    finalVerdict: "Don Roberto is a useful tequila brand for comparing both bright cocktail pours and oak-aged sipping styles.",
    metaTitle: "Don Roberto Tequila Guide | BevOry",
    metaDescription: "Explore Don Roberto tequila styles, Jalisco origin, tasting notes, pairings and city prices on BevOry.",
  },
  "don-romeo": {
    description: "Don Romeo is a Mexican tequila brand from Casa Maestri, connected with agave fields in San Julian, Jalisco. The range includes Blanco, Reposado and Anejo tequila styles.",
    story: "Don Romeo was developed by the Maestri-Villanueva couple and made at Casa Maestri. Its identity leans into traditional tequila craft, oak-aged richness and the romance of Jalisco agave country.",
    tastingNotes: [
      { title: "Agave Core", description: "Cooked agave, earth, spice and citrus sit at the centre of the blanco style." },
      { title: "Oak Richness", description: "Aged bottlings bring vanilla, chocolate, hazelnut and a silky texture." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Blanco in Ranch Water or Palomas; pour Reposado and Anejo neat in a small tulip glass." },
      { subheading: "Food", description: "Pair with al pastor tacos, chicken tikka, grilled prawns, quesadillas or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["al pastor tacos", "chicken tikka", "grilled prawns", "quesadillas", "salted almonds"] }],
    whyChoose: "Don Romeo suits drinkers who want tequila with clear agave character and a richer aged side.",
    faqs: [
      { question: "Who makes Don Romeo tequila?", answer: "Don Romeo is made at Casa Maestri in Mexico." },
      { question: "What are common Don Romeo styles?", answer: "The range includes Blanco, Reposado and Anejo tequila." },
    ],
    finalVerdict: "Don Romeo is a confident Jalisco tequila page for both bright long drinks and oak-led sipping.",
    metaTitle: "Don Romeo Tequila Guide | BevOry",
    metaDescription: "Explore Don Romeo tequila from Casa Maestri, tasting notes, cocktail serves, pairings and city prices.",
  },
  "dos-flamos": {
    description: "Dos Flamos is a Mexican tequila brand produced by La Cofradia in Jalisco. Its story draws on twin-flame folklore, while its tequila credentials rest on blue Weber agave and regulated tequila production.",
    story: "La Cofradia has distilled tequila in Jalisco for more than half a century. Dos Flamos uses the visual language of volcano, agave and Mexican folklore to frame a modern imported tequila range.",
    tastingNotes: [
      { title: "Blanco Freshness", description: "Blue agave, lime peel, white pepper and herbal notes give the blanco style a clean profile." },
      { title: "Oro Warmth", description: "Gold and aged-leaning serves add vanilla, caramel and soft spice around the agave core." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Blanco in Margaritas and Palomas; serve Oro with ice, soda or citrus." },
      { subheading: "Food", description: "Pair with achari paneer tikka, fish tacos, nachos, grilled prawns or chicken quesadillas." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["achari paneer tikka", "fish tacos", "nachos", "grilled prawns", "chicken quesadillas"] }],
    whyChoose: "Dos Flamos is a bright imported tequila option with a clear Jalisco production story.",
    faqs: [
      { question: "Where is Dos Flamos produced?", answer: "Dos Flamos is produced by La Cofradia in Jalisco, Mexico." },
      { question: "What cocktails suit Dos Flamos Blanco?", answer: "Margaritas, Palomas and Ranch Water are the easiest fits." },
    ],
    finalVerdict: "Dos Flamos is a lively tequila pick for citrus cocktails, spicy snacks and agave-first serves.",
    metaTitle: "Dos Flamos Tequila Guide | BevOry",
    metaDescription: "Explore Dos Flamos tequila, Jalisco production, tasting notes, cocktail serves and city prices.",
  },
  dot: {
    description: "Dot is an Indian whisky brand listed on BevOry through Dot Whisky in 180 ml and 750 ml formats. It appears in the blended Indian category, with orchard-fruit, vanilla and oak-led tasting cues.",
    story: "Dot is a compact Indian whisky listing made for straightforward city-level comparison. The page works best for drinkers choosing an everyday whisky for soda, water, ice or simple cocktails.",
    tastingNotes: [
      { title: "Fruit And Oak", description: "Orchard fruit, toasted oak and vanilla custard give the whisky a rounded first impression." },
      { title: "Caramel Spice", description: "Caramel, cinnamon and gentle heat carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, water, soda or in a simple whisky highball." },
      { subheading: "Food", description: "Pair with tandoori chicken, masala papad, chilli paneer, kebab rolls or roasted peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "masala papad", "chilli paneer", "kebab rolls", "roasted peanuts"] }],
    whyChoose: "Dot is a simple Indian whisky page for comparing familiar bottle sizes and easy mixed serves.",
    faqs: [
      { question: "What type of whisky is Dot?", answer: "Dot is listed as a blended Indian whisky on BevOry." },
      { question: "How should Dot Whisky be served?", answer: "Serve with ice, water, soda or as a highball." },
    ],
    finalVerdict: "Dot is a no-fuss whisky choice for highballs, snacks and casual pours.",
    metaTitle: "Dot Whisky Guide | BevOry",
    metaDescription: "Explore Dot Whisky notes, serving ideas, Indian snack pairings and city prices on BevOry.",
  },
  "double-blue": {
    description: "Double Blue is an Indian premium whisky from ADS Spirits, launched in March 2014. The brand is built from Indian grain spirits, peated malt influence and Scotch malts in a smooth blended style.",
    story: "ADS Spirits presents Double Blue as its first premium whisky. The whisky combines selected Indian grain spirit with imported Scotch malts, with copper pot still and bourbon-cask language used in the brand's own material.",
    tastingNotes: [
      { title: "Amber Sweetness", description: "Honey, fruit, vanilla and chocolate sit over a deep amber whisky base." },
      { title: "Light Oak", description: "Floral lift, oak, spice and boiled-sweet notes round out the palate." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat, on ice, with soda or as a whisky highball." },
      { subheading: "Food", description: "Pair with chicken tikka, mutton sukka, galouti kebab, cheese toast or masala peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "mutton sukka", "galouti kebab", "cheese toast", "masala peanuts"] }],
    whyChoose: "Double Blue is a strong Indian whisky page for drinkers comparing premium everyday blends.",
    faqs: [
      { question: "Who makes Double Blue whisky?", answer: "Double Blue is made by ADS Spirits." },
      { question: "When was Double Blue launched?", answer: "ADS Spirits describes Double Blue as its first premium whisky, launched in March 2014." },
    ],
    finalVerdict: "Double Blue is a smooth Indian whisky built for classic soda serves and spicy food.",
    metaTitle: "Double Blue Whisky Guide | BevOry",
    metaDescription: "Explore Double Blue whisky by ADS Spirits, tasting notes, serving ideas, pairings and city prices.",
  },
};
