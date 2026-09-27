import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_76 = [
  ["courrier-napoleon", "Courrier Napoleon", "India", "Brandy", "pending-courrier-napoleon"],
  ["crazy-rose", "Crazy Rose", "France", "Rose Wine", "pending-crazy-rose"],
  ["crimson", "Crimson", "India", "Brandy", "pending-crimson"],
  ["dabang", "Dabang", "India", "Beers", "pending-dabang"],
  ["daily-special", "Daily Special", "India", "Brandy", "pending-daily-special"],
  ["dame-de-clermont", "Dame De Clermont", "France", "Wine", "pending-dame-de-clermont"],
  ["dante", "Dante", "Italy", "Red Wine", "pending-dante"],
  ["db", "DB", "Australia", "Rose Wine", "pending-db"],
  ["de-los-dorados", "De Los Dorados", "Mexico", "Tequila", "pending-de-los-dorados"],
  ["delhi-6", "Delhi-6", "Bhutan", "Beers", "pending-delhi-6"],
] as const;

export const BRAND_LOGOS_BATCH_76: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_76: Record<string, string[]> = {
  "courrier-napoleon": [
    "https://www.bseindia.com/bseplus/AnnualReport/507205/74209507205_01_09_22.pdf",
    "https://www.bseindia.com/bseplus/AnnualReport/507205/72290507205.pdf",
    "https://www.bevory.in/agra/brand/courrier-napoleon",
  ],
  "crazy-rose": [
    "https://www.domaine-tropez.com/fr/crazy-rose",
    "https://www.wineenthusiast.com/buying-guide/domaine-tropez-2022-crazy-tropez-rose-mediterranee/",
    "https://www.bevory.in/agra/brand/crazy-rose",
  ],
  crimson: [
    "https://tsbcl.nic.in/open_record.php?ID=108",
    "https://www.livcheers.com/hyderabad/liquor/crimson-vsop-mature-french-brandy-375ml",
    "https://www.bevory.in/agra/brand/crimson",
  ],
  dabang: [
    "https://mycorporateinfo.com/proprietor/mount-everest-breweries-limited/772803",
    "https://www.livcheers.com/warangal/liquor/dabang-premium-strong-beer-500ml",
    "https://www.bevory.in/agra/brand/dabang",
  ],
  "daily-special": [
    "https://www.livcheers.com/warangal/liquor/daily-special-vsop-bio-brandy-180ml",
    "https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2025/05/price-list-.pdf",
    "https://www.bevory.in/agra/brand/daily-special",
  ],
  "dame-de-clermont": [
    "https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2025/05/price-list-.pdf",
    "https://www.bevory.in/agra/brand/dame-de-clermont",
  ],
  dante: [
    "https://danterivetti.com/en/wines",
    "https://www.wineenthusiast.com/buying-guide/dante-rivetti-2010-bricco-neive-riserva-nebbiolo-barbaresco/",
    "https://www.bevory.in/agra/brand/dante",
  ],
  db: [
    "https://www.farmstone.co.jp/catalog/db-rose/",
    "https://www.bevory.in/agra/brand/db",
  ],
  "de-los-dorados": [
    "https://tequilacofradia.com/nuestras-marcas/",
    "https://tequilacofradia.com/",
    "https://www.bevory.in/agra/brand/de-los-dorados",
  ],
  "delhi-6": [
    "https://en.nbd.ltd/trader/info/NBDX2H172824246",
    "https://www.bevory.in/agra/brand/delhi-6",
  ],
};

export const BRAND_CONTENT_BATCH_76: Record<string, BrandPublicContent> = {
  "courrier-napoleon": {
    description: "Courrier Napoleon is an Indian-market French-style brandy label from Tilaknagar Industries. BevOry lists Finest Courrier Napoleon Brandy in 750 ml format.",
    story: "Tilaknagar Industries has long used French brandy cues across its brandy portfolio, including Mansion House and Courrier Napoleon. Company reports describe Courrier Napoleon Brandy Red and Green as grape-spirit brandies shaped by wooden-cask maturation, honeyed sweetness and vanilla-led oak notes.",
    tastingNotes: [
      { title: "Grape Brandy Core", description: "Raisin, dried grape, honey and mellow fruit sit at the centre of the brandy profile." },
      { title: "Oak And Vanilla", description: "Toasted wood, vanilla and gentle spice give the finish a warm, after-dinner feel." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small brandy glass, over ice, or with warm water on a cool evening." },
      { subheading: "Food", description: "Pair with pepper chicken, mutton fry, plum cake, roasted cashews or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "mutton fry", "plum cake", "roasted cashews", "dark chocolate"] }],
    whyChoose: "Courrier Napoleon is a recognisable Indian brandy choice for drinkers who like grape-spirit warmth and oak sweetness.",
    faqs: [
      { question: "What is Courrier Napoleon?", answer: "Courrier Napoleon is a French-style brandy label from Tilaknagar Industries." },
      { question: "Which Courrier Napoleon bottle is listed on BevOry?", answer: "BevOry lists Finest Courrier Napoleon Brandy in 750 ml format." },
    ],
    finalVerdict: "Courrier Napoleon is a solid brandy pick for neat pours, ice serves and spicy Indian snacks.",
    metaTitle: "Courrier Napoleon Brandy Guide | BevOry",
    metaDescription: "Explore Courrier Napoleon brandy notes, serving ideas, snack pairings and city prices on BevOry.",
  },
  "crazy-rose": {
    description: "Crazy Rose is listed on BevOry through Crazy Tropez Rose Wine, a French rose connected with Domaine Tropez near Saint-Tropez. The current Domaine Tropez Crazy Rose is an AOC Cotes de Provence wine made from Grenache and Cinsault.",
    story: "Domaine Tropez presents Crazy Rose as a Provence-style rose built around pale colour, aromatic freshness and summer drinking. Its winemaking uses gentle pressing, cold settling and temperature-controlled fermentation to protect citrus and fruit notes.",
    tastingNotes: [
      { title: "Provence Colour", description: "Pale salmon-pink colour, citrus, red fruit and exotic-fruit aromas keep the wine bright." },
      { title: "Fresh Finish", description: "Grenache adds soft fruit while Cinsault keeps the palate light, crisp and easy to chill." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a white-wine glass, ideally around 8-10°C." },
      { subheading: "Food", description: "Pair with grilled prawns, citrus salad, chicken tikka, goat cheese or tomato bruschetta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled prawns", "citrus salad", "chicken tikka", "goat cheese", "tomato bruschetta"] }],
    whyChoose: "Crazy Rose is a crisp French rose for warm afternoons, seafood plates and lighter Indian starters.",
    faqs: [
      { question: "What grape varieties are used in Crazy Rose?", answer: "Domaine Tropez lists Crazy Rose as 60% Grenache and 40% Cinsault." },
      { question: "How should Crazy Rose be served?", answer: "Serve it well chilled in a white-wine glass with seafood, salads or light snacks." },
    ],
    finalVerdict: "Crazy Rose is a breezy Provence-style rose for chilled service, seafood and easy outdoor meals.",
    metaTitle: "Crazy Rose Wine Guide | BevOry",
    metaDescription: "Explore Crazy Rose tasting notes, Provence style, food pairings and city prices on BevOry.",
  },
  crimson: {
    description: "Crimson is an Indian-market brandy label listed on BevOry through Crimson VSOP Mature French Brandy. Telangana beverage records show the same product name across 180 ml, 375 ml and 750 ml bottle formats.",
    story: "Crimson sits in the VSOP French-brandy style used widely in South Indian retail markets. The BevOry listing focuses on its mature brandy positioning, warm fruit profile and familiar neat-or-ice service.",
    tastingNotes: [
      { title: "VSOP Brandy Style", description: "Dried fruit, caramel, vanilla and soft oak spice give the brandy a rounded profile." },
      { title: "Mellow Finish", description: "A smooth, warming finish suits slow sipping or a simple ice serve." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, with ice, or with a small splash of warm water." },
      { subheading: "Food", description: "Pair with chicken 65, pepper mutton, fruit cake, roasted peanuts or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken 65", "pepper mutton", "fruit cake", "roasted peanuts", "dark chocolate"] }],
    whyChoose: "Crimson is a straightforward VSOP-style brandy for drinkers who want warm fruit, oak and spice.",
    faqs: [
      { question: "What is Crimson VSOP Mature French Brandy?", answer: "It is a brandy label listed on BevOry under Crimson, with 750 ml availability shown on the brand page." },
      { question: "What food pairs with Crimson brandy?", answer: "Spicy fried chicken, pepper mutton, roasted nuts and dark chocolate suit its warm brandy style." },
    ],
    finalVerdict: "Crimson works best as a familiar brandy pour with ice, warm water and spicy Indian food.",
    metaTitle: "Crimson Brandy Guide | BevOry",
    metaDescription: "Explore Crimson VSOP brandy notes, serving ideas, Indian snack pairings and city prices on BevOry.",
  },
  dabang: {
    description: "Dabang is an Indian beer label listed on BevOry through Dabang Premium Strong Beer. Trademark portfolios connect the Dabang Premium Strong Beer mark with Mount Everest Breweries Limited.",
    story: "Dabang belongs to India's strong-beer segment, where 500 ml cans and 650 ml bottles are common sharing formats. The product name points to a bolder lager-style beer made for chilled service with salty and spicy food.",
    tastingNotes: [
      { title: "Strong Beer Profile", description: "Malt sweetness, grain, light bitterness and a fuller body define the strong-beer style." },
      { title: "Cold Finish", description: "Served chilled, it finishes crisp enough for fried snacks and tandoori flavours." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a clean beer mug or straight from a chilled can." },
      { subheading: "Food", description: "Pair with chilli chicken, masala peanuts, tandoori momos, paneer tikka or spicy fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "masala peanuts", "tandoori momos", "paneer tikka", "spicy fries"] }],
    whyChoose: "Dabang is a bold Indian strong beer for chilled service and high-spice snack plates.",
    faqs: [
      { question: "What Dabang product is listed on BevOry?", answer: "BevOry lists Dabang Premium Strong Beer in 500 ml and 650 ml formats." },
      { question: "What food works with Dabang beer?", answer: "Spicy snacks such as chilli chicken, paneer tikka, masala peanuts and fries work well." },
    ],
    finalVerdict: "Dabang Premium Strong Beer is built for cold pours, loud snacks and casual Indian beer occasions.",
    metaTitle: "Dabang Beer Guide | BevOry",
    metaDescription: "Explore Dabang Premium Strong Beer notes, serving style, snack pairings and city prices on BevOry.",
  },
  "daily-special": {
    description: "Daily Special is an Indian brandy label listed on BevOry through Daily Special VSOP Bio Brandy. Livcheers product data places it under brandy, with 180 ml, 375 ml and 750 ml formats visible.",
    story: "Daily Special uses VSOP and Bio cues to frame the bottle as a fruit-led, softer brandy option. The BevOry listing keeps the page focused on its everyday brandy role: simple service, dessert pairing and local price comparison.",
    tastingNotes: [
      { title: "Fruit-Led Brandy", description: "Green apple, pear, citrus and light floral notes make the style fresher than heavier oak-led brandies." },
      { title: "Honeyed Finish", description: "Honey, ginger and a clean finish suit ice serves and after-dinner sipping." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, on ice, or with warm water in a small brandy glass." },
      { subheading: "Food", description: "Pair with apple tart, gulab jamun, roasted almonds, grilled chicken or paneer malai tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["apple tart", "gulab jamun", "roasted almonds", "grilled chicken", "paneer malai tikka"] }],
    whyChoose: "Daily Special is a lighter brandy pick for drinkers who prefer fruit, honey and a clean finish.",
    faqs: [
      { question: "What is Daily Special on BevOry?", answer: "BevOry lists Daily Special VSOP Bio Brandy." },
      { question: "How do you serve Daily Special brandy?", answer: "Serve it neat, over ice, or with warm water alongside dessert or roasted nuts." },
    ],
    finalVerdict: "Daily Special is a fruit-forward brandy for simple serves, sweets and light snack pairing.",
    metaTitle: "Daily Special Brandy Guide | BevOry",
    metaDescription: "Explore Daily Special VSOP Bio Brandy notes, serving ideas, pairings and city prices on BevOry.",
  },
  "dame-de-clermont": {
    description: "Dame De Clermont is a French wine label listed on BevOry through red and white wine bottles. Local route data shows Dame De Clermont Red Wine and Dame De Clermont White Wine in 750 ml format.",
    story: "Dame De Clermont is best approached as a simple French table-wine range rather than a single grape expression. The red and white listings give shoppers a direct choice between chilled white service and softer red-wine pairing.",
    tastingNotes: [
      { title: "Red Wine", description: "Red-fruit, plum, light spice and smooth tannins make the red suitable for everyday dinners." },
      { title: "White Wine", description: "Citrus, apple, pear and a clean finish keep the white bright for chilled service." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve the white chilled and the red slightly cool in standard wine glasses." },
      { subheading: "Food", description: "Pair the red with chicken curry or mushroom pasta; pair the white with fish tikka, paneer malai or citrus salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken curry", "mushroom pasta", "fish tikka", "paneer malai", "citrus salad"] }],
    whyChoose: "Dame De Clermont is an easy French wine page for choosing between red and white dinner bottles.",
    faqs: [
      { question: "Which Dame De Clermont wines are listed on BevOry?", answer: "BevOry lists Dame De Clermont Red Wine and Dame De Clermont White Wine." },
      { question: "How should Dame De Clermont White Wine be served?", answer: "Serve it chilled with fish tikka, paneer malai, salads or light snacks." },
    ],
    finalVerdict: "Dame De Clermont is a simple French red-and-white wine choice for casual meals and chilled service.",
    metaTitle: "Dame De Clermont Wine Guide | BevOry",
    metaDescription: "Explore Dame De Clermont red and white wine notes, pairings and city prices on BevOry.",
  },
  dante: {
    description: "Dante is listed on BevOry through Dante Rivetti Barbaresco Bricco di Neive Riserva and Dante Chianti. The strongest verified producer match is Dante Rivetti, a Piedmont winery based in Neive, Italy.",
    story: "Dante Rivetti works from Bricco di Neive, a noted Barbaresco area in Piedmont, with wines including Barbaresco DOCG, Barolo DOCG, Langhe Nebbiolo, Barbera d'Alba and Arneis. The Barbaresco Bricco di Neive Riserva is a Nebbiolo-led cellar wine from the hills around Neive.",
    tastingNotes: [
      { title: "Barbaresco Riserva", description: "Dried cherry, berry, sage, tobacco, leather and firm Nebbiolo tannins shape the serious red-wine profile." },
      { title: "Chianti Direction", description: "Cherry, herbs, red plum and brisk acidity make the Chianti side brighter and more food-driven." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Barbaresco in a wide red-wine glass at 16-18°C and give mature bottles time to open." },
      { subheading: "Food", description: "Pair with galouti kebabs, truffle pasta, lamb chops, mushroom risotto or aged parmesan." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "truffle pasta", "lamb chops", "mushroom risotto", "aged parmesan"] }],
    whyChoose: "Dante is a strong Italian red-wine page for comparing Nebbiolo depth with brighter Chianti-style food pairing.",
    faqs: [
      { question: "Where is Dante Rivetti based?", answer: "Dante Rivetti is based in Neive in Piedmont, Italy." },
      { question: "What grape is Barbaresco made from?", answer: "Barbaresco is made from Nebbiolo." },
    ],
    finalVerdict: "Dante is best for Italian red-wine drinkers who want structure, acidity and serious food compatibility.",
    metaTitle: "Dante Italian Wine Guide | BevOry",
    metaDescription: "Explore Dante Rivetti Barbaresco and Chianti notes, Italian pairings and city prices on BevOry.",
  },
  db: {
    description: "DB is listed on BevOry through DB Rose in 750 ml format. Public retail listings show DB Rose as a bottled rose wine, and BevOry places it in the rose-wine category.",
    story: "DB Rose is a compact, label-led rose listing rather than a broad portfolio page. The useful buying context is style: chilled rose, light fruit, easy food pairing and a clear 750 ml format.",
    tastingNotes: [
      { title: "Rose Fruit", description: "Strawberry, red cherry, citrus and soft floral notes give the wine a light, approachable feel." },
      { title: "Chilled Finish", description: "A crisp, dry-to-off-dry finish keeps it comfortable with snacks and seafood." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass, around 8-10°C." },
      { subheading: "Food", description: "Pair with prawns koliwada, chicken salad, paneer tikka, sushi or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["prawns koliwada", "chicken salad", "paneer tikka", "sushi", "goat cheese"] }],
    whyChoose: "DB Rose is a simple chilled rose option for light food and casual pours.",
    faqs: [
      { question: "What DB product is listed on BevOry?", answer: "BevOry lists DB Rose in 750 ml format." },
      { question: "How should DB Rose be served?", answer: "Serve it chilled with seafood, salads, paneer tikka or soft cheese." },
    ],
    finalVerdict: "DB Rose is an easy chilled wine for seafood, light starters and relaxed drinking.",
    metaTitle: "DB Rose Wine Guide | BevOry",
    metaDescription: "Explore DB Rose tasting notes, chilled serving ideas, food pairings and city prices on BevOry.",
  },
  "de-los-dorados": {
    description: "De Los Dorados is a Mexican tequila label from La Cofradia, listed on BevOry through De Los Dorados Tequila Silver. La Cofradia presents the range in Silver and Gold expressions.",
    story: "The name refers to Los Dorados, the mounted guard associated with Pancho Villa during the Mexican Revolution. La Cofradia describes the brand as exported to more than 17 countries, with formats including 50 ml, 700 ml, 750 ml, 1 litre, 1.75 litre and 5 litre.",
    tastingNotes: [
      { title: "Silver Tequila", description: "Cooked agave, lime peel, white pepper and fresh herbal notes give the silver expression a clean profile." },
      { title: "Cocktail Edge", description: "A crisp agave finish makes it suitable for Margaritas, Palomas and chilled shots." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, sip in a small glass, or mix into a Margarita with lime and orange liqueur." },
      { subheading: "Food", description: "Pair with tacos al pastor, tandoori prawns, chicken tikka, guacamole or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tacos al pastor", "tandoori prawns", "chicken tikka", "guacamole", "chilli paneer"] }],
    whyChoose: "De Los Dorados is a Mexican silver tequila pick for fresh agave cocktails and bright spicy food pairings.",
    faqs: [
      { question: "Who makes De Los Dorados tequila?", answer: "De Los Dorados is part of the La Cofradia tequila portfolio in Mexico." },
      { question: "Which De Los Dorados bottle is listed on BevOry?", answer: "BevOry lists De Los Dorados Tequila Silver in 750 ml format." },
    ],
    finalVerdict: "De Los Dorados Silver is a clean tequila choice for Margaritas, Palomas and spicy party food.",
    metaTitle: "De Los Dorados Tequila Guide | BevOry",
    metaDescription: "Explore De Los Dorados Silver tequila notes, cocktail ideas, pairings and city prices on BevOry.",
  },
  "delhi-6": {
    description: "Delhi-6 is a strong beer label listed on BevOry through Delhi-6 Ultra Super Strong Beer. Trade data references Delhi 6 Ultra Super Strong Beer in 650 ml bottles exported from Bhutan.",
    story: "Delhi-6 uses an Old Delhi name for a modern strong-beer format. The BevOry listing is clear and narrow: Ultra Super Strong Beer in a 650 ml bottle, built for chilled service with spicy snacks.",
    tastingNotes: [
      { title: "Strong Lager Body", description: "Grainy malt, light sweetness, firm body and mild bitterness define the beer's strong-lager lane." },
      { title: "Cold Snap", description: "The finish is best when very cold, cutting through fried food and chilli heat." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a clean mug or straight from a chilled 650 ml bottle." },
      { subheading: "Food", description: "Pair with chicken tikka, seekh kebab, masala fries, chilli paneer or momos." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "seekh kebab", "masala fries", "chilli paneer", "momos"] }],
    whyChoose: "Delhi-6 is a bold strong beer for chilled pours and high-spice North Indian snacks.",
    faqs: [
      { question: "What Delhi-6 product is listed on BevOry?", answer: "BevOry lists Delhi-6 Ultra Super Strong Beer in 650 ml format." },
      { question: "What food pairs with Delhi-6 beer?", answer: "Chicken tikka, seekh kebab, masala fries, chilli paneer and momos suit its strong-beer style." },
    ],
    finalVerdict: "Delhi-6 Ultra Super Strong Beer is a cold, snack-friendly strong beer for casual group serves.",
    metaTitle: "Delhi-6 Beer Guide | BevOry",
    metaDescription: "Explore Delhi-6 Ultra Super Strong Beer notes, serving style, snack pairings and city prices on BevOry.",
  },
};
