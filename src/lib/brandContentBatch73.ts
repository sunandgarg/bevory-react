import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_73 = [
  ["chantilli", "Chantilli", "India", "White Wine", "pending-chantilli"],
  ["charger", "Charger", "Scotland", "Beer", "pending-charger"],
  ["charles-de", "Charles De", "France", "Champagne", "pending-charles-de"],
  ["charles-rousseau", "Charles Rousseau", "France", "Wine", "pending-charles-rousseau"],
  ["charles-roux", "Charles Roux", "France", "Sparkling Wine", "pending-charles-roux"],
  ["charlie-mist", "Charlie Mist", "India", "Vodka", "pending-charlie-mist"],
  ["charlie-s-aged", "Charlie's Aged", "India", "Rum", "pending-charlie-s-aged"],
  ["charlie-superior", "Charlie Superior", "India", "Vodka", "pending-charlie-superior"],
  ["chateau", "Chateau", "France", "Wine", "pending-chateau"],
  ["chateauneuf", "Chateauneuf", "France", "Red Wine", "pending-chateauneuf"],
] as const;

export const BRAND_LOGOS_BATCH_73: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_73: Record<string, string[]> = {
  chantilli: [
    "https://www.chateauindage.in/chantilli-chenin-blanc.html",
    "https://www.bevory.in/agra/brand/chantilli",
  ],
  charger: [
    "https://www.bevory.in/agra/brand/charger",
    "https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2025/05/price-list-.pdf",
  ],
  "charles-de": [
    "https://champagnedecazanove.com/en/",
    "https://maisons-champagne.com/fr/maison/charles-de-cazanove",
    "https://www.bevory.in/agra/brand/charles-de",
  ],
  "charles-rousseau": [
    "https://www.vivino.com/en/wineries/charles-rousseau",
    "https://flipsydee.com/product.php?brand=charles_rousseau",
    "https://www.bevory.in/agra/brand/charles-rousseau",
  ],
  "charles-roux": [
    "https://internationalcellars.com/wp-content/uploads/2018/05/Charles_Roux_Blanc_de_Blancs_Brut.pdf",
    "https://www.bevory.in/agra/brand/charles-roux",
  ],
  "charlie-mist": [
    "https://delhiexcise.gov.in/pdf/Price_25thNov.pdf",
    "https://www.bevory.in/agra/brand/charlie-mist",
  ],
  "charlie-s-aged": [
    "https://delhiexcise.gov.in/pdf/Price_25thNov.pdf",
    "https://www.bevory.in/agra/brand/charlie-s-aged",
  ],
  "charlie-superior": [
    "https://charliespirits.in/collection/charlie-superior-grain-vodka/",
    "https://www.bevory.in/agra/brand/charlie-superior",
  ],
  chateau: [
    "https://factsheets.wine/2021-csm-columbia-valley-riesling-5061",
    "https://www.bevory.in/agra/brand/chateau",
  ],
  chateauneuf: [
    "https://www.chateauneuf.com/",
    "https://brotte.com/domaine-barville/",
    "https://www.bevory.in/agra/brand/chateauneuf",
  ],
};

export const BRAND_CONTENT_BATCH_73: Record<string, BrandPublicContent> = {
  chantilli: {
    description: "Chantilli is listed on BevOry through Chantilli Chenin Blanc, an Indian white wine from the Sahyadri Valley. The label is tied to Chateau Indage and Oniv Beverages, with Chenin Blanc handled as a medium-dry, tropical-fruited white.",
    story: "Chantilli belongs to the older Indian wine wave that helped make Chenin Blanc familiar on local shelves. The official wine sheet describes stainless-steel fermentation at controlled temperature and lees ageing in tank, keeping the wine fresh while adding a little roundness.",
    tastingNotes: [
      { title: "Chenin Fruit", description: "Tropical fruit, apple, pear and citrus give the wine a bright white-wine profile." },
      { title: "Rounded Finish", description: "Soft acidity, a light oak touch and lees texture make the palate fuller than a razor-sharp dry white." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass, around 8-10°C." },
      { subheading: "Food", description: "Pair with Goan prawn curry, paneer tikka, mild Thai curry, seafood pizza or grilled pomfret." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Goan prawn curry", "paneer tikka", "mild Thai curry", "seafood pizza", "grilled pomfret"] }],
    whyChoose: "Chantilli is a familiar Indian Chenin Blanc for drinkers who want tropical fruit, soft acidity and spicy-food flexibility.",
    faqs: [
      { question: "What grape is used in Chantilli Chenin Blanc?", answer: "Chantilli Chenin Blanc is made from Chenin Blanc grown for an Indian medium-dry white wine style." },
      { question: "What food pairs with Chantilli?", answer: "Seafood, paneer tikka, mild curries, pizza and grilled fish suit its tropical fruit and rounded acidity." },
    ],
    finalVerdict: "Chantilli is a practical Indian white wine for chilled pours with curry, seafood and casual dinners.",
    metaTitle: "Chantilli Chenin Blanc Guide | BevOry",
    metaDescription: "Explore Chantilli Chenin Blanc notes, Indian wine style, food pairings and city prices on BevOry.",
  },
  charger: {
    description: "Charger is listed on BevOry through Charger Scottish Beer in 500 ml format. The product sits in the strong imported-beer lane, with a fuller body and more weight than a regular mild lager.",
    story: "Charger Scottish Beer appears in Indian price and duty-free listings, giving the public facts a narrow but useful frame. Its role is simple: a cold, malt-forward beer for shoppers who want strength and body rather than a delicate lager.",
    tastingNotes: [
      { title: "Malt Weight", description: "Grain, biscuit malt and light caramel bring a fuller beer profile." },
      { title: "Strong Beer Finish", description: "A warming finish and moderate bitterness work best when the bottle is served very cold." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a lager glass or straight from a cold bottle." },
      { subheading: "Food", description: "Pair with chicken wings, masala fries, seekh kebab, fish fry or salted peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken wings", "masala fries", "seekh kebab", "fish fry", "salted peanuts"] }],
    whyChoose: "Charger is a fuller Scottish beer option for drinkers who prefer a cold, stronger lager-style pour.",
    faqs: [
      { question: "What is Charger listed as on BevOry?", answer: "Charger is listed as Charger Scottish Beer in 500 ml format." },
      { question: "How should Charger Scottish Beer be served?", answer: "Serve it very cold with salty or spicy snacks so the malt body stays refreshing." },
    ],
    finalVerdict: "Charger is best for cold-beer drinkers who want stronger malt body with bar snacks.",
    metaTitle: "Charger Scottish Beer Guide | BevOry",
    metaDescription: "Explore Charger Scottish Beer notes, cold serves, snack pairings and city prices on BevOry.",
  },
  "charles-de": {
    description: "Charles De is listed on BevOry through Charles de Cazanove, a Champagne house founded in 1811 and based in Reims. The bottle sits in the classic French sparkling-wine lane, built around fine bubbles, citrus freshness and pastry notes.",
    story: "Charles de Cazanove traces its name to Charles Gabriel de Cazanove, with the Rapeneau family taking over the house in 2003. Its Champagne identity is rooted in Reims and the traditional Champagne method, not in a generic sparkling-wine shortcut.",
    tastingNotes: [
      { title: "Champagne Citrus", description: "Green apple, lemon, grapefruit and white flowers give the wine a fresh lift." },
      { title: "Brioche And Mousse", description: "Fine bubbles, biscuit, cocoa and vanilla-like pastry notes add texture on the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a tulip glass or flute." },
      { subheading: "Food", description: "Pair with tandoori prawns, fried chicken, brie, sushi or lemon tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "fried chicken", "brie", "sushi", "lemon tart"] }],
    whyChoose: "Charles De is a Champagne-led BevOry page for drinkers who want Reims heritage and crisp, food-friendly bubbles.",
    faqs: [
      { question: "What is Charles De on BevOry?", answer: "Charles De refers to Charles de Cazanove Champagne listed on BevOry." },
      { question: "Where is Charles de Cazanove based?", answer: "Charles de Cazanove is a French Champagne house based in Reims." },
    ],
    finalVerdict: "Charles De is a clean Champagne pick for celebrations, seafood and crisp aperitif drinking.",
    metaTitle: "Charles De Champagne Guide | BevOry",
    metaDescription: "Explore Charles de Cazanove Champagne notes, serving ideas, food pairings and city prices on BevOry.",
  },
  "charles-rousseau": {
    description: "Charles Rousseau is a French wine label listed on BevOry through Cabernet Sauvignon, Merlot and Chardonnay bottles. Public retailer and wine catalogue listings place Charles Rousseau in France's Languedoc-led value wine space.",
    story: "The range gives Indian shoppers familiar international grapes under a French label rather than a single-estate cru story. Cabernet Sauvignon, Merlot and Chardonnay make the page useful for quick comparison across red and white table-wine styles.",
    tastingNotes: [
      { title: "French Reds", description: "Cabernet and Merlot bring blackcurrant, plum, soft spice and rounded tannins." },
      { title: "Chardonnay Pour", description: "Chardonnay leans toward apple, citrus, pear and a smooth, easy finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled; pour Merlot and Cabernet slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair reds with lamb kebab, mushroom pasta or roast chicken; pair Chardonnay with malai tikka or grilled fish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb kebab", "mushroom pasta", "roast chicken", "malai tikka", "grilled fish"] }],
    whyChoose: "Charles Rousseau is a simple French wine route for comparing Cabernet, Merlot and Chardonnay without overcomplicating dinner.",
    faqs: [
      { question: "Which Charles Rousseau wines are listed on BevOry?", answer: "BevOry lists Charles Rousseau Cabernet Sauvignon, Merlot and Chardonnay entries." },
      { question: "What food pairs with Charles Rousseau wines?", answer: "The reds suit lamb, mushrooms and roast chicken, while Chardonnay works with fish, creamy chicken and paneer dishes." },
    ],
    finalVerdict: "Charles Rousseau is an approachable French wine page for grape-led everyday pairing.",
    metaTitle: "Charles Rousseau Wine Guide | BevOry",
    metaDescription: "Explore Charles Rousseau Cabernet, Merlot and Chardonnay notes, pairings and city prices on BevOry.",
  },
  "charles-roux": {
    description: "Charles Roux is listed on BevOry through Blanc Brut and Rose Brut sparkling wines. The Blanc de Blancs Brut is documented as a white sparkling wine made from Chardonnay and Aligote.",
    story: "Charles Roux sits in the French sparkling-wine category rather than Champagne. The style is built for chilled service, lively bubbles and easy aperitif pairing, with Blanc Brut and Rose Brut giving shoppers two clear choices.",
    tastingNotes: [
      { title: "Blanc Brut", description: "Apple, citrus, pear and light biscuit notes come through the Chardonnay-Aligote blend." },
      { title: "Rose Brut", description: "Red berries, cranberry and a crisp sparkling finish make the rose side brighter and fruitier." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a flute or tulip glass." },
      { subheading: "Food", description: "Pair with cheese toast, fried prawns, chicken popcorn, strawberry salad or paneer pakora." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["cheese toast", "fried prawns", "chicken popcorn", "strawberry salad", "paneer pakora"] }],
    whyChoose: "Charles Roux is a handy French sparkling option when you want brut bubbles without moving into Champagne pricing.",
    faqs: [
      { question: "What type of wine is Charles Roux?", answer: "Charles Roux is listed on BevOry as French sparkling wine, including Blanc Brut and Rose Brut." },
      { question: "What grapes are in Charles Roux Blanc de Blancs Brut?", answer: "The Blanc de Blancs Brut is made from Chardonnay and Aligote." },
    ],
    finalVerdict: "Charles Roux is a crisp sparkling-wine pick for chilled pours, snacks and casual celebrations.",
    metaTitle: "Charles Roux Sparkling Guide | BevOry",
    metaDescription: "Explore Charles Roux Blanc Brut and Rose Brut notes, food pairings and city prices on BevOry.",
  },
  "charlie-mist": {
    description: "Charlie Mist is listed on BevOry through Charlie Mist Citrus Green Apple Vodka. Delhi excise listings identify it as an Indian green-apple-flavoured vodka sold in multiple bottle sizes.",
    story: "Charlie Mist belongs to India's flavoured-vodka shelf, where green apple brings aroma, sweetness and cocktail convenience. It is made for mixers and chilled party serves rather than neutral Martini-style drinking.",
    tastingNotes: [
      { title: "Green Apple", description: "Tart apple candy, citrus and light grain spirit shape the nose and palate." },
      { title: "Sweet Vodka Finish", description: "The finish is clean, lightly sweet and built for soda, Sprite-style mixers or juice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda, lemon-lime mixer or cranberry juice over ice." },
      { subheading: "Food", description: "Pair with chilli potato, chicken momos, peri-peri fries, paneer popcorn or fruit chaat." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli potato", "chicken momos", "peri-peri fries", "paneer popcorn", "fruit chaat"] }],
    whyChoose: "Charlie Mist is for drinkers who want a sweet green-apple vodka that mixes quickly.",
    faqs: [
      { question: "What flavour is Charlie Mist?", answer: "Charlie Mist is listed as a green-apple-flavoured vodka." },
      { question: "Which mixers suit Charlie Mist?", answer: "Soda, lemon-lime mixers, cranberry juice and apple juice work well with its green-apple profile." },
    ],
    finalVerdict: "Charlie Mist is a party-style apple vodka for chilled mixers and spicy snacks.",
    metaTitle: "Charlie Mist Vodka Guide | BevOry",
    metaDescription: "Explore Charlie Mist Green Apple Vodka notes, mixer ideas, snack pairings and city prices on BevOry.",
  },
  "charlie-s-aged": {
    description: "Charlie's Aged is listed on BevOry through Charlie's Aged XXX Rum in 750 ml format. Delhi excise listings also show Charlie XXX Superior Rum as an Indian rum line, placing the brand firmly in the local dark-rum category.",
    story: "Charlie's Aged belongs to the Indian XXX rum style built for cola, water, ice and winter-friendly mixed drinks. The public facts support a practical rum guide: caramel warmth, spice and easy pairing with fried or grilled snacks.",
    tastingNotes: [
      { title: "Dark Rum Warmth", description: "Caramel, molasses, vanilla and light oak-like spice give the rum its familiar dark profile." },
      { title: "Cola-Friendly Finish", description: "A sweet, warming finish makes it suitable for cola, lime or simple punch serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice with cola and lime, or mix into a simple dark-rum punch." },
      { subheading: "Food", description: "Pair with chilli chicken, pork vindaloo, masala peanuts, barbecue paneer or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "pork vindaloo", "masala peanuts", "barbecue paneer", "dark chocolate"] }],
    whyChoose: "Charlie's Aged is a straightforward Indian dark rum for cola serves and spicy bar snacks.",
    faqs: [
      { question: "What type of rum is Charlie's Aged?", answer: "Charlie's Aged is listed on BevOry as XXX Rum in 750 ml format." },
      { question: "What mixer works with Charlie's Aged Rum?", answer: "Cola, lime, soda and simple fruit punch builds suit its caramel-and-spice style." },
    ],
    finalVerdict: "Charlie's Aged works best as a dark-rum mixer for casual evenings and bold snacks.",
    metaTitle: "Charlie's Aged Rum Guide | BevOry",
    metaDescription: "Explore Charlie's Aged XXX Rum notes, cola serves, food pairings and city prices on BevOry.",
  },
  "charlie-superior": {
    description: "Charlie Superior is listed on BevOry through Charlie Superior Grain Vodka, an Indian vodka made from grain spirit. The official Charlie Spirits page presents it as a clear, neutral 750 ml vodka with a smooth grain base.",
    story: "Charlie Superior sits in the Indian premium grain-vodka lane, where clarity, neutral flavour and cocktail flexibility matter most. Its brand page highlights grain spirit and clean texture, making it better suited to highballs and Martini-style serves than sweet liqueur-like drinking.",
    tastingNotes: [
      { title: "Neutral Grain", description: "Clean grain, light creaminess and faint pepper keep the vodka crisp." },
      { title: "Smooth Heat", description: "A gentle warmth on the finish helps it stand up to soda, tonic and citrus." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, with soda and lime, tonic, or in a dry Vodka Martini." },
      { subheading: "Food", description: "Pair with tandoori prawns, cheese nachos, chicken tikka, cucumber salad or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "cheese nachos", "chicken tikka", "cucumber salad", "salted almonds"] }],
    whyChoose: "Charlie Superior is a clean Indian grain vodka for simple highballs and crisp cocktails.",
    faqs: [
      { question: "What is Charlie Superior Grain Vodka made from?", answer: "Charlie Superior is presented as an Indian vodka made from grain spirit." },
      { question: "How should Charlie Superior be served?", answer: "Serve it chilled with soda, tonic, lime or in a clean vodka cocktail." },
    ],
    finalVerdict: "Charlie Superior is the better Charlie pick when you want neutral vodka instead of a flavoured pour.",
    metaTitle: "Charlie Superior Vodka Guide | BevOry",
    metaDescription: "Explore Charlie Superior Grain Vodka notes, serving ideas, pairings and city prices on BevOry.",
  },
  chateau: {
    description: "Chateau on BevOry is a broad wine route covering chateau-labelled bottles such as Chateau Ste. Michelle Riesling and French chateau reds. The page spans Washington Riesling, Bordeaux-style wines and Rhone-linked listings, so the useful lens is estate-labelled wine rather than one single producer.",
    story: "In wine language, chateau usually signals an estate or property name, especially in France, while Chateau Ste. Michelle brings the term into Washington's Columbia Valley. BevOry's Chateau page helps shoppers compare that estate-led naming across white, red and rose bottles.",
    tastingNotes: [
      { title: "Riesling Side", description: "Chateau Ste. Michelle-style Riesling brings lime, peach, apple and bright acidity." },
      { title: "French Chateau Reds", description: "Bordeaux and Rhone-style entries lean into black fruit, plum, herbs, oak spice and tannin." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Riesling chilled; pour chateau reds slightly cool and let structured bottles breathe." },
      { subheading: "Food", description: "Pair Riesling with Thai curry or tandoori fish; pair reds with lamb chops, mushroom biryani or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Thai curry", "tandoori fish", "lamb chops", "mushroom biryani", "aged cheddar"] }],
    whyChoose: "Chateau is useful when you want to compare estate-labelled wines across white, red and rose styles.",
    faqs: [
      { question: "What does Chateau cover on BevOry?", answer: "The Chateau route covers estate-labelled wines, including Chateau Ste. Michelle Riesling and French chateau-style red and rose listings." },
      { question: "How should Chateau wines be served?", answer: "Serve whites chilled, and serve structured reds slightly cool with enough time in the glass to open." },
    ],
    finalVerdict: "Chateau is a comparison-friendly wine route for shoppers moving between Riesling freshness and estate red-wine structure.",
    metaTitle: "Chateau Wine Guide | BevOry",
    metaDescription: "Explore Chateau wines, Riesling and red-wine styles, food pairings and city prices on BevOry.",
  },
  chateauneuf: {
    description: "Chateauneuf is listed on BevOry through Chateauneuf-du-Pape wines such as Domaine Barville and Chemin des Papes. The appellation sits in France's southern Rhone and is known for Grenache-led red blends supported by Syrah and Mourvedre.",
    story: "Chateauneuf-du-Pape became one of France's earliest wine AOCs in 1936, spread across communes including Chateauneuf-du-Pape, Orange, Courthezon, Bedarrides and Sorgues. Domaine Barville belongs to Maison Brotte's family property west of the village, with parcels on red clay, rounded stones and limestone soils.",
    tastingNotes: [
      { title: "Southern Rhone Fruit", description: "Black cherry, raspberry, plum and dried herbs give the reds a warm Mediterranean core." },
      { title: "GSM Structure", description: "Grenache richness, Syrah spice and Mourvedre depth bring firm body, savoury tannins and a long finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve at 16-18°C in a large red-wine glass and decant young bottles if they feel tight." },
      { subheading: "Food", description: "Pair with mutton raan, galouti kebab, lamb stew, roast mushrooms or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton raan", "galouti kebab", "lamb stew", "roast mushrooms", "aged cheddar"] }],
    whyChoose: "Chateauneuf is for drinkers who want powerful southern Rhone reds with Grenache fruit, spice and dinner-table depth.",
    faqs: [
      { question: "What is Chateauneuf-du-Pape wine?", answer: "Chateauneuf-du-Pape is a southern Rhone AOC known mainly for Grenache-led red blends with Syrah and Mourvedre." },
      { question: "What food pairs with Chateauneuf-du-Pape?", answer: "Rich lamb dishes, kebabs, roast mushrooms, hard cheese and slow-cooked mutton pair well with its body and tannin." },
    ],
    finalVerdict: "Chateauneuf is a serious French red-wine choice for slow dinners, grilled meats and robust Indian dishes.",
    metaTitle: "Chateauneuf-du-Pape Guide | BevOry",
    metaDescription: "Explore Chateauneuf-du-Pape notes, Rhone grape styles, pairings and city prices on BevOry.",
  },
};
