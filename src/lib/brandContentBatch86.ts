import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_86 = [
  ["golden-star", "Golden Star", "India", "Indian Whisky", "pending-golden-star"],
  ["golden-wings", "Golden Wings", "India", "Indian Whisky", "pending-golden-wings"],
  ["good-man", "Good Man", "India", "Brandy", "pending-good-man"],
  ["governors", "Governors", "India", "Indian Whisky", "pending-governors"],
  ["gr", "GR", "India", "Indian Spirits", "pending-gr"],
  ["gr-genius", "GR Genius", "India", "Indian Spirits", "pending-gr-genius"],
  ["gran-sello", "Gran Sello", "Spain", "Wine", "pending-gran-sello"],
  ["grandreale", "Grandreale", "Italy", "Sparkling Wine", "pending-grandreale"],
  ["graysons", "Graysons", "India", "Brandy", "pending-graysons"],
  ["green", "Green", "India", "Indian Spirits", "pending-green"],
] as const;

export const BRAND_LOGOS_BATCH_86: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_86: Record<string, string[]> = {
  "golden-star": [
    "https://www.livcheers.com/delhi/liquor/golden-star-premium-whisky-750ml",
    "https://www.bevory.in/gurgaon/product/golden-star-premium-whisky-5f4f4b6",
  ],
  "golden-wings": [
    "https://www.quickcompany.in/trademarks/1672317-golden-wings",
    "https://delhiexcise.gov.in/pdf/Price_25thNov.pdf",
    "https://www.bevory.in/gurgaon/product/golden-wings-whisky-9f9fa70",
  ],
  "good-man": [
    "https://www.livcheers.com/bangalore/liquor/good-man-premium-blended-brandy-750ml",
    "https://caskcartel.com/products/good-man-premium-blended-brandy-700ml",
    "https://www.bevory.in/gurgaon/product/good-man-premium-blended-brandy-94cdd37",
  ],
  governors: [
    "https://www.globusspirits.com/documents/Globus-Spirit-AR-24-25-8mb.pdf",
    "https://tsbcl.nic.in/open_record.php?ID=272",
    "https://www.bevory.in/gurgaon/product/governors-reserve-rare-8bbbb7e",
  ],
  gr: [
    "https://www.bevory.in/gurgaon/brand/gr",
    "https://www.bevory.in/jaipur/brand/gr",
  ],
  "gr-genius": [
    "https://www.livcheers.com/indore/liquor/gr-genius-xxx-rum-750ml",
    "https://www.livcheers.com/nagpur/category/made-in-india-whisky",
    "https://www.bevory.in/gurgaon/product/gr-genius-xxx-rum-364ff6d",
  ],
  "gran-sello": [
    "https://araex.araex.com/bodegas/gran-sello/",
    "https://araex.com/en/vinos/gran-sello-white-macabeo-verdejo/",
    "https://www.bevory.in/gurgaon/product/gran-sello-macabeo-verdejo-wine-e8e68d2",
  ],
  grandreale: [
    "https://www.gancia.it/en/gancia-products/sparkling-wines/gancia-metodo-charmat-en/grand-reale-dolce/",
    "https://www.bevory.in/gurgaon/product/grandreale-brut-c230fbc",
    "https://www.bevory.in/gurgaon/product/grandreale-dolce-3a06307",
  ],
  graysons: [
    "https://www.livcheers.com/mysore/liquor/graysons-kingswell-gold-brandy-750ml",
    "https://pourbud.com/drinks/graysons-kings-crest-indian-brandy",
    "https://www.bevory.in/gurgaon/product/graysons-kingswell-gold-brandy-0f1c3f1",
  ],
  green: [
    "https://www.bevory.in/gurgaon/brand/green",
    "https://www.bevory.in/jabalpur/brand/green",
  ],
};

export const BRAND_CONTENT_BATCH_86: Record<string, BrandPublicContent> = {
  "golden-star": {
    description: "Golden Star is an Indian whisky label listed on BevOry through Golden Star Premium Whisky in 750 ml format. It sits in the blended Indian whisky lane, with grain sweetness, light spice and simple highball service at the centre.",
    story: "Golden Star appears in Indian price and discovery listings as a value-minded premium whisky. The name suits a straightforward house-pour style made for soda, ice and spicy snacks.",
    tastingNotes: [
      { title: "Mellow Grain", description: "Caramel, cereal grain, vanilla and light citrus shape the opening." },
      { title: "Warm Spice", description: "Pepper, toasted oak and a gentle sweet finish keep it easy with mixers." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, ice or ginger ale in a tall glass." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, paneer pakora, egg bhurji or cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "paneer pakora", "egg bhurji", "cheese toast"] }],
    whyChoose: "Golden Star is a practical Indian whisky choice for relaxed mixed serves and quick city-price comparison.",
    faqs: [
      { question: "What is Golden Star Premium Whisky?", answer: "Golden Star Premium Whisky is listed on BevOry as an Indian whisky in 750 ml format." },
      { question: "What mixer suits Golden Star?", answer: "Soda, water, ice and ginger ale suit its mellow whisky profile." },
    ],
    finalVerdict: "Golden Star works best as a simple Indian whisky for highballs, ice pours and savoury snacks.",
    metaTitle: "Golden Star Whisky Guide | BevOry",
    metaDescription: "Explore Golden Star Premium Whisky notes, serving ideas, Indian pairings and city prices on BevOry.",
  },
  "golden-wings": {
    description: "Golden Wings is an Indian whisky label listed on BevOry through a 750 ml Golden Wings Whisky route. Trademark and excise references place the Golden Wings name in alcoholic beverages and whisky listings.",
    story: "Golden Wings sits in the familiar Indian blended-whisky shelf, where malt-style flavour and grain spirit are built for casual serves. Its appeal is direct: a local whisky name for soda, ice and food-led drinking.",
    tastingNotes: [
      { title: "Easy Whisky", description: "Vanilla, toffee, grain sweetness and mild oak give the whisky a soft start." },
      { title: "Mixer Finish", description: "Light spice and caramel warmth keep the finish clean enough for soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, ice or a splash of ginger ale." },
      { subheading: "Food", description: "Pair with mutton seekh, chilli paneer, fried chicken, roasted chana or masala fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "chilli paneer", "fried chicken", "roasted chana", "masala fries"] }],
    whyChoose: "Golden Wings is a straightforward whisky page for local Indian bottle searches.",
    faqs: [
      { question: "What is Golden Wings?", answer: "Golden Wings is listed as an Indian whisky on BevOry." },
      { question: "Is Golden Wings better neat or mixed?", answer: "A small neat sip works first, but soda, ice and ginger ale are the most natural serves." },
    ],
    finalVerdict: "Golden Wings is a casual Indian whisky for simple pours, mixers and spicy bar snacks.",
    metaTitle: "Golden Wings Whisky Guide | BevOry",
    metaDescription: "Explore Golden Wings Whisky notes, bottle format, serving ideas and city prices on BevOry.",
  },
  "good-man": {
    description: "Good Man is an Indian brandy label listed through Good Man Premium Blended Brandy. Retail references describe it as Bacardi India's entry into brandy and the broader IMFL category.",
    story: "Good Man brings a cleaner, modern brandy presentation to a category often driven by southern Indian food pairings and after-dinner serves. The BevOry route centres on the 750 ml Premium Blended Brandy listing.",
    tastingNotes: [
      { title: "Fruit And Honey", description: "Caramel apple, honey, dried fruit and vanilla create a rounded brandy profile." },
      { title: "Soft Oak", description: "Nutmeg, toffee and mellow wood spice sit on a smooth finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a brandy glass, on ice, with warm water or with ginger ale." },
      { subheading: "Food", description: "Pair with pepper chicken, Kerala beef fry, plum cake, salted almonds or chocolate brownie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "Kerala beef fry", "plum cake", "salted almonds", "chocolate brownie"] }],
    whyChoose: "Good Man is a polished Indian brandy option with enough fruit and oak warmth for neat or mixed serves.",
    faqs: [
      { question: "What is Good Man Premium Blended Brandy?", answer: "Good Man Premium Blended Brandy is an Indian brandy listed on BevOry in 750 ml format." },
      { question: "Who is connected with Good Man brandy?", answer: "Retail references connect Good Man Premium Blended Brandy with Bacardi India." },
    ],
    finalVerdict: "Good Man is a smooth brandy page for drinkers who like warm fruit, gentle oak and Indian snack pairings.",
    metaTitle: "Good Man Brandy Guide | BevOry",
    metaDescription: "Explore Good Man Premium Blended Brandy notes, serving ideas, pairings and city prices on BevOry.",
  },
  governors: {
    description: "Governors is an Indian whisky label listed on BevOry through Governors Reserve Rare and Governors Bold Reserve. Public excise references also identify Governors Reserve as a premium grain whisky.",
    story: "Governors belongs to Globus Spirits' broader Indian whisky work, where grain spirit and reserve-style positioning are central cues. The BevOry routes show 180 ml, 375 ml and 750 ml formats across the Governors listings.",
    tastingNotes: [
      { title: "Reserve Grain", description: "Cereal sweetness, honey, vanilla and light oak give the whisky a clean profile." },
      { title: "Bold Finish", description: "Caramel, pepper and toasted grain add enough warmth for highballs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat for a first sip, then with soda, water, ice or ginger ale." },
      { subheading: "Food", description: "Pair with galouti kebabs, chicken tikka, masala peanuts, smoked paneer or grilled corn." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "chicken tikka", "masala peanuts", "smoked paneer", "grilled corn"] }],
    whyChoose: "Governors is useful for shoppers comparing Indian grain-whisky styles across multiple bottle sizes.",
    faqs: [
      { question: "What Governors products are listed on BevOry?", answer: "BevOry shows Governors Reserve Rare and Governors Bold Reserve whisky routes." },
      { question: "What style is Governors Reserve?", answer: "Public listings identify Governors Reserve as a premium grain whisky." },
    ],
    finalVerdict: "Governors is a solid Indian whisky page for reserve-style grain whisky, soda serves and spicy starters.",
    metaTitle: "Governors Whisky Guide | BevOry",
    metaDescription: "Explore Governors Reserve whisky notes, bottle sizes, serving ideas and city prices on BevOry.",
  },
  gr: {
    description: "GR is a short-name Indian spirits brand page on BevOry. Its public identity is best handled as an abbreviated label search, with simple serving guidance until a shopper chooses a specific bottle.",
    story: "Short brand names often appear in Indian liquor search because customers remember initials from shelf labels or bills. GR gives those users a direct landing page while keeping product choice separate by bottle.",
    tastingNotes: [
      { title: "Clean Starting Point", description: "Expect the final flavour to depend on the selected bottle, from grain-led whisky notes to warmer dark-spirit cues." },
      { title: "Food-Friendly Direction", description: "Soda, ice and spicy snacks are the safest route for abbreviated local-spirit searches." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Begin with a small pour, then use soda, water or ice according to the bottle's category." },
      { subheading: "Food", description: "Pair with chicken tikka, paneer pakora, masala peanuts, chilli mushrooms or kebab rolls." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "paneer pakora", "masala peanuts", "chilli mushrooms", "kebab rolls"] }],
    whyChoose: "GR helps shoppers who search by initials reach a simple Indian spirits guide before narrowing to a bottle.",
    faqs: [
      { question: "What is GR on BevOry?", answer: "GR is an abbreviated Indian spirits brand page used for short-name searches." },
      { question: "How should GR be served?", answer: "Choose the serve after selecting the exact bottle; soda, water and ice suit many Indian spirit listings." },
    ],
    finalVerdict: "GR is a practical short-name spirits page for moving from an initial-based search to a specific bottle.",
    metaTitle: "GR Indian Spirits Guide | BevOry",
    metaDescription: "Explore GR Indian spirits guidance, serving ideas, snack pairings and city prices on BevOry.",
  },
  "gr-genius": {
    description: "GR Genius is an Indian spirits label listed on BevOry through GR Genius XXX Rum and GS Genius Deluxe Whisky. The page spans dark rum and blended Indian whisky routes in multiple bottle sizes.",
    story: "GR Genius has a practical local-shelf identity: rum for cola and lime, whisky for soda and snacks. Market listings surface GR Genius rum, while BevOry also shows GS Genius Deluxe Whisky routes.",
    tastingNotes: [
      { title: "XXX Rum", description: "Molasses, caramel, cola spice and vanilla give the rum side a warm profile." },
      { title: "Deluxe Whisky", description: "Grain sweetness, light oak, honey and pepper shape the whisky side." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve rum with cola, lime or ginger ale; serve whisky with soda, water or ice." },
      { subheading: "Food", description: "Pair with pork chilli, chicken wings, masala peanuts, paneer tikka or chocolate pastry." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork chilli", "chicken wings", "masala peanuts", "paneer tikka", "chocolate pastry"] }],
    whyChoose: "GR Genius is useful when one brand search needs both rum and Indian whisky options.",
    faqs: [
      { question: "What GR Genius products appear on BevOry?", answer: "BevOry shows GR Genius XXX Rum and GS Genius Deluxe Whisky routes." },
      { question: "What mixer suits GR Genius XXX Rum?", answer: "Cola, lime, ginger ale and soda suit its dark-rum style." },
    ],
    finalVerdict: "GR Genius is a flexible Indian spirits page for dark-rum mixers and whisky highballs.",
    metaTitle: "GR Genius Spirits Guide | BevOry",
    metaDescription: "Explore GR Genius rum and whisky notes, serving ideas, food pairings and city prices on BevOry.",
  },
  "gran-sello": {
    description: "Gran Sello is a Spanish wine brand from ARAEX Grands Spanish Fine Wines. BevOry lists Gran Sello through Macabeo Verdejo, Tempranillo Syrah and Syrah wine routes.",
    story: "ARAEX describes Gran Sello as a family of Spanish wines built around native grape varieties and expressive fruit. The BevOry listings cover the useful split between fresh white wine and darker red-wine styles.",
    tastingNotes: [
      { title: "Macabeo Verdejo", description: "Lemon, green apple, pear and herbal freshness give the white wine a crisp profile." },
      { title: "Tempranillo Syrah", description: "Red plum, blackberry, spice and soft tannins shape the red-wine side." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Macabeo Verdejo chilled; pour Tempranillo Syrah slightly cool in a medium red-wine glass." },
      { subheading: "Food", description: "Pair whites with tandoori fish or salads; match reds with mutton seekh, roast chicken or mushroom tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "green salad", "mutton seekh", "roast chicken", "mushroom tikka"] }],
    whyChoose: "Gran Sello is a clear Spanish choice for comparing crisp whites and soft, fruit-led reds.",
    faqs: [
      { question: "Who makes Gran Sello wines?", answer: "Gran Sello is part of ARAEX Grands Spanish Fine Wines." },
      { question: "Which Gran Sello wines are listed on BevOry?", answer: "BevOry shows Gran Sello Macabeo Verdejo, Tempranillo Syrah and Syrah routes." },
    ],
    finalVerdict: "Gran Sello is a useful Spanish table-wine page for bright whites, easy reds and Indian food pairings.",
    metaTitle: "Gran Sello Wine Guide | BevOry",
    metaDescription: "Explore Gran Sello Spanish wine notes, Macabeo Verdejo, Tempranillo Syrah pairings and city prices.",
  },
  grandreale: {
    description: "Grandreale is an Italian sparkling wine label associated with Casa Gancia. BevOry lists Grandreale through Brut and Dolce 750 ml sparkling wine routes.",
    story: "Casa Gancia presents Grand Reale as a historic brand, with Dolce made by the Martinotti method in Canelli. The range gives Indian shoppers both drier Brut-style sparkling wine and sweeter Dolce service for desserts.",
    tastingNotes: [
      { title: "Brut", description: "Green apple, citrus, pear and fine bubbles create a fresh aperitif style." },
      { title: "Dolce", description: "Flowers, fresh fruit, soft sweetness and gentle fizz make it dessert-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a flute or white-wine glass." },
      { subheading: "Food", description: "Pair Brut with tandoori prawns or bruschetta; match Dolce with gulab jamun, fruit tart or vanilla custard." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "bruschetta", "gulab jamun", "fruit tart", "vanilla custard"] }],
    whyChoose: "Grandreale gives sparkling-wine shoppers a simple choice between crisp Brut and sweeter Dolce.",
    faqs: [
      { question: "Who makes Grandreale?", answer: "Grandreale is associated with Casa Gancia in Italy." },
      { question: "What Grandreale styles are listed on BevOry?", answer: "BevOry shows Grandreale Brut and Grandreale Dolce sparkling wine routes." },
    ],
    finalVerdict: "Grandreale is an easy Italian sparkling pick for aperitif pours, celebrations and dessert pairings.",
    metaTitle: "Grandreale Sparkling Wine Guide | BevOry",
    metaDescription: "Explore Grandreale Brut and Dolce notes, serving temperature, food pairings and city prices.",
  },
  graysons: {
    description: "Graysons is an Indian brandy label listed through Kingswell Gold Brandy and Kings Crest Brandy routes. The brand sits in the warm, fruit-and-oak brandy lane for neat serves and after-dinner drinking.",
    story: "Graysons appears in Indian discovery listings around 750 ml and 180 ml brandy formats. Kingswell Gold and Kings Crest give the page two clear bottle names for shoppers comparing local brandy options.",
    tastingNotes: [
      { title: "Kingswell Gold", description: "Ripe fruit, vanilla, oak and a touch of spice create a mellow brandy profile." },
      { title: "Kings Crest", description: "Caramel, figs, nutmeg and dark chocolate notes suit slower sipping." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, over one cube, with warm water or in a Sidecar-style citrus cocktail." },
      { subheading: "Food", description: "Pair with mutton pepper fry, chicken roast, fruit cake, roasted almonds or chocolate mousse." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton pepper fry", "chicken roast", "fruit cake", "roasted almonds", "chocolate mousse"] }],
    whyChoose: "Graysons is a strong fit for brandy drinkers who want fruit, oak and dessert-friendly warmth.",
    faqs: [
      { question: "What Graysons brandy products appear on BevOry?", answer: "BevOry shows Graysons Kingswell Gold Brandy and Kings Crest Brandy routes." },
      { question: "How should Graysons brandy be served?", answer: "Serve it neat, over ice, with warm water or in a citrus-led brandy cocktail." },
    ],
    finalVerdict: "Graysons is a food-friendly Indian brandy page for rich snacks, neat pours and after-dinner serves.",
    metaTitle: "Graysons Brandy Guide | BevOry",
    metaDescription: "Explore Graysons Kingswell and Kings Crest brandy notes, serving ideas and city prices.",
  },
  green: {
    description: "Green is a broad Indian spirits brand page on BevOry for searches that use the word as the remembered label cue. It should guide shoppers toward the exact bottle before they compare style, size and serve.",
    story: "Indian liquor shelves use green heavily across apple vodkas, whisky labels, beer names and reserve editions. This page keeps that short search path usable while the final drink choice stays tied to the selected bottle.",
    tastingNotes: [
      { title: "Fresh Cue", description: "Green-labelled spirits often signal crisp apple, citrus, grain or lighter highball-friendly flavours." },
      { title: "Bottle-Led Finish", description: "The final taste can move from sweet green apple to oak-led whisky, depending on the bottle selected." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use the bottle's category as the guide: chilled for flavoured vodka, cold for beer, soda or ice for whisky." },
      { subheading: "Food", description: "Pair with chilli paneer, fried fish, chicken wings, cucumber salad or salted peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "fried fish", "chicken wings", "cucumber salad", "salted peanuts"] }],
    whyChoose: "Green helps shoppers who remember a colour cue move toward the correct Indian beverage bottle.",
    faqs: [
      { question: "What does Green mean on BevOry?", answer: "Green is a broad brand page for colour-led Indian beverage searches." },
      { question: "How should Green-labelled drinks be served?", answer: "Serve according to the bottle category: chilled vodka, cold beer, or whisky with soda, water or ice." },
    ],
    finalVerdict: "Green is a practical colour-cue guide for narrowing a broad search into the exact bottle and serve.",
    metaTitle: "Green Indian Spirits Guide | BevOry",
    metaDescription: "Explore Green Indian beverage guidance, serving styles, snack pairings and city prices on BevOry.",
  },
};
