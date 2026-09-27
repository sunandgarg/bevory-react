import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_61 = [
  ["1959", "1959", "Australia", "Red Wine", "pending-1959"],
  ["1959-single-varietal", "1959 Single Varietal", "France", "Wine", "pending-1959-single-varietal"],
  ["3-pots", "3 Pots", "India", "Beer", "pending-3-pots"],
  ["50-50", "50/50", "India", "Spirits", "pending-50-50"],
  ["55-degree-north", "55 Degree North", "India", "Indian Whisky", "pending-55-degree-north"],
  ["6-furlongs", "6 Furlongs", "Australia", "Beer", "pending-6-furlongs"],
  ["8", "8", "India", "Indian Whisky", "pending-8"],
  ["absinthe", "Absinthe", "France", "Liqueurs", "pending-absinthe"],
  ["ac", "AC", "India", "Indian Whisky", "pending-ac"],
  ["ag-47", "Ag 47", "Argentina", "Wine", "pending-ag-47"],
] as const;

export const BRAND_LOGOS_BATCH_61: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_61: Record<string, string[]> = {
  "1959": [
    "https://www.livcheers.com/listing/brand/1959",
    "https://www.livcheers.com/mangalore/liquor/1959-single-varietal-shiraz-750ml",
  ],
  "1959-single-varietal": [
    "https://www.livcheers.com/mumbai/brand/1959-single-varietal",
    "https://www.livcheers.com/mumbai/liquor/1959-single-varietal-merlot-750ml",
  ],
  "3-pots": [
    "https://www.livcheers.com/hyderabad/liquor/3-pots-premium-lager-beer-650ml",
    "https://www.livcheers.com/compare/hyderabad/3-pots-premium-lager-beer-650ml",
  ],
  "50-50": [
    "https://www.livcheers.com/listing/brand/50-50",
    "https://www.livcheers.com/compare/listing/50-50-blue-whisky-750ml",
  ],
  "55-degree-north": [
    "https://www.livcheers.com/delhi/brand/55-degree-north",
    "https://www.livcheers.com/delhi/liquor/55-degree-north-rare-prem-whisky-750ml",
  ],
  "6-furlongs": [
    "https://www.livcheers.com/delhi/liquor/6-furlongs-pale-ale-beer-375ml",
    "https://www.danmurphys.com.au/product/DM_72131",
  ],
  "8": [
    "https://www.livcheers.com/lucknow/liquor/8-pm-special-grain-blended-whisky-750ml",
    "https://www.livcheers.com/compare/listing/8-pm-whisky-180ml",
  ],
  "absinthe": [
    "https://www.livcheers.com/bangalore/liquor/absinthe-la-ananta-absinthe-750ml",
    "https://www.livcheers.com/bangalore/liquor/absinthe-absente-49-100ml",
  ],
  "ac": [
    "https://www.livcheers.com/listing/brand/ac",
    "https://www.livcheers.com/compare/listing/ac-black-luxury-pure-grain-whisky-375ml",
  ],
  "ag-47": [
    "https://www.livcheers.com/brand/ag-47",
    "https://www.theleela.com/prod/content/assets/2025-12/Jamavar_Beverage_Menu_Dec-2025.pdf?VersionId=ID19pn37Rt41fAgtWt822onuCxfts4mq",
  ],
};

export const BRAND_CONTENT_BATCH_61: Record<string, BrandPublicContent> = {
  "1959": {
    description: "1959 is a wine label listed with single-varietal red wines such as Cabernet Sauvignon and Shiraz. The current BevOry catalogue places the range around 750 ml red-wine bottles, with Australia appearing on the Shiraz listing.",
    story: "The label is built around varietal names rather than a visible estate story. Cabernet Sauvignon and Shiraz give the range a familiar red-wine frame for drinkers comparing fuller bottles at the table.",
    tastingNotes: [
      { title: "Cabernet Sauvignon", description: "Blackcurrant, plum skin and firm tannin suit a fuller red-wine pour." },
      { title: "Shiraz", description: "Dark berry fruit, pepper and soft oak spice give the Shiraz a richer dinner-table profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve reds slightly cool in a medium red-wine glass; give the bottle ten minutes in the glass before judging the fruit and tannin." },
      { subheading: "Food", description: "Pair Cabernet Sauvignon with mutton seekh or mushroom galouti; take Shiraz toward rogan josh, grilled lamb or pepper chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "mushroom galouti", "rogan josh", "grilled lamb", "pepper chicken"] }],
    whyChoose: "A straightforward red-wine label for comparing Cabernet Sauvignon and Shiraz by grape, city price and food pairing.",
    faqs: [
      { question: "What type of wine is 1959?", answer: "BevOry lists 1959 with red-wine expressions such as Cabernet Sauvignon and Shiraz." },
      { question: "What food works with 1959 red wine?", answer: "Fuller Indian dishes such as mutton seekh, rogan josh and pepper chicken are better fits than very delicate snacks." },
    ],
    finalVerdict: "1959 is useful when you want a grape-led red wine for rich Indian food rather than a light aperitif.",
    metaTitle: "1959 Wine Guide | BevOry",
    metaDescription: "Explore 1959 red wines, grape styles, serving ideas, food pairings, and city prices on BevOry.",
  },
  "1959-single-varietal": {
    description: "1959 Single Varietal is a wine range listed with Merlot, Pinot Noir and Riesling bottles, with France shown as the origin on current brand listings. The range is best approached by grape because each bottle changes the body, acidity and food pairing.",
    story: "The name puts grape variety at the front of the drinker's decision. Merlot, Pinot Noir and Riesling cover three very different table roles: soft red, lighter red and aromatic white.",
    tastingNotes: [
      { title: "Red varietals", description: "Merlot leans toward plum and softer tannin, while Pinot Noir moves toward red cherry, earth and a lighter body." },
      { title: "Riesling", description: "Riesling brings citrus, green apple and floral lift, with acidity doing more work than oak or weight." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Riesling chilled around 8-10 C; pour Merlot and Pinot Noir slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Match Riesling with tandoori fish or chilli paneer, Merlot with mushroom kebabs, and Pinot Noir with roast chicken or grilled vegetables." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "chilli paneer", "mushroom kebabs", "roast chicken", "grilled vegetables"] }],
    whyChoose: "One label lets drinkers compare Merlot, Pinot Noir and Riesling without treating every bottle as the same wine.",
    faqs: [
      { question: "Which grapes appear under 1959 Single Varietal?", answer: "Current listings include Merlot, Pinot Noir and Riesling." },
      { question: "How should I serve 1959 Single Varietal wines?", answer: "Chill Riesling well; serve Merlot and Pinot Noir slightly cool rather than warm." },
    ],
    finalVerdict: "1959 Single Varietal works best when you choose by grape first, then match the bottle to the food.",
    metaTitle: "1959 Single Varietal Wine Guide | BevOry",
    metaDescription: "Explore 1959 Single Varietal Merlot, Pinot Noir and Riesling with serving ideas, pairings and city prices on BevOry.",
  },
  "3-pots": {
    description: "3 Pots is a beer label listed in India with Premium Lager Beer and Super Strong Beer. The current bottles sit in familiar lager and strong-lager territory rather than craft-style ales.",
    story: "The range is built for cold, simple beer serves. Premium Lager handles lighter refreshment, while Super Strong Beer belongs to a heavier strong-lager drinking style.",
    tastingNotes: [
      { title: "Premium Lager", description: "Pale malt, clean carbonation and mild bitterness make the lager the easier food partner." },
      { title: "Super Strong Beer", description: "A fuller malt body and stronger warming character suit robust fried or spicy snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a lager glass or straight from an ice bucket; avoid over-warming the beer." },
      { subheading: "Food", description: "Premium Lager suits masala fries and fish fry; Super Strong Beer works better with chicken pakora or spicy peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["masala fries", "fish fry", "chicken pakora", "spicy peanuts", "grilled corn"] }],
    whyChoose: "3 Pots gives beer drinkers a simple choice between a cleaner lager and a stronger, heavier bottle.",
    faqs: [
      { question: "What beers are listed under 3 Pots?", answer: "BevOry currently lists 3 Pots Premium Lager Beer and 3 Pots Super Strong Beer." },
      { question: "What food pairs with 3 Pots beer?", answer: "Try fried fish, masala fries, chicken pakora or spicy peanuts, depending on the bottle." },
    ],
    finalVerdict: "3 Pots is a straightforward cold-beer pick for salty snacks and casual Indian meals.",
    metaTitle: "3 Pots Beer Guide | BevOry",
    metaDescription: "Explore 3 Pots lager and strong beer styles, serving tips, snack pairings and city prices on BevOry.",
  },
  "50-50": {
    description: "50/50 is an Indian spirits label listed across whisky, vodka and rum. Current entries include 50/50 Blue Whisky, 50/50 Vodka and 50/50 XXX Rum.",
    story: "The range is organised around familiar Indian bar staples rather than one single spirit style. Whisky, vodka and rum each need a separate serve because their flavour weight and mixer choices are different.",
    tastingNotes: [
      { title: "Whisky and rum", description: "Blue Whisky sits in a grain-led Indian whisky lane, while XXX Rum brings darker cane sweetness and spice." },
      { title: "Vodka", description: "The vodka is the cleanest mixer in the range, better suited to citrus, soda and chilled highballs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use soda or water for the whisky, lime-led mixers for vodka, and cola or ginger for the rum." },
      { subheading: "Food", description: "Pair whisky with mutton seekh, vodka with tandoori prawns, and rum with barbecue chicken or grilled pineapple." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "tandoori prawns", "barbecue chicken", "grilled pineapple", "masala peanuts"] }],
    whyChoose: "50/50 is useful for buyers comparing everyday Indian whisky, vodka and rum under one label.",
    faqs: [
      { question: "What products are listed under 50/50?", answer: "Current BevOry listings include Blue Whisky, Vodka and XXX Rum." },
      { question: "Is every 50/50 bottle served the same way?", answer: "No. Whisky, vodka and rum need different mixers, temperatures and food pairings." },
    ],
    finalVerdict: "50/50 is a practical Indian spirits label where the exact bottle matters more than the shared name.",
    metaTitle: "50/50 Spirits Guide | BevOry",
    metaDescription: "Explore 50/50 whisky, vodka and rum styles with serving ideas, Indian pairings and city prices on BevOry.",
  },
  "55-degree-north": {
    description: "55 Degree North is an Indian whisky label listed with Rare Premium Whisky. Current local pages place it under Made in India Whisky as a blended Indian style.",
    story: "The label name points north, but the current catalogue identity is Indian whisky. Its role is closer to an everyday blended whisky pour than a single malt or age-stated Scotch comparison.",
    tastingNotes: [
      { title: "Grain and oak", description: "Expect a grain-led whisky frame with caramel, vanilla and light oak spice." },
      { title: "Finish", description: "A warm, straightforward finish suits soda, water or a single cube better than delicate sipping rituals." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Start with 30 ml over one cube, then add chilled soda or water if you want a longer serve." },
      { subheading: "Food", description: "Keep the food bold: masala peanuts, tandoori chicken, mutton seekh or smoked paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["masala peanuts", "tandoori chicken", "mutton seekh", "smoked paneer", "pepper kebab"] }],
    whyChoose: "A familiar Indian whisky style for simple pours, soda serves and spicy snacks.",
    faqs: [
      { question: "What is 55 Degree North?", answer: "55 Degree North is listed on BevOry as an Indian blended whisky label." },
      { question: "How should 55 Degree North be served?", answer: "Use a small pour over ice, with water or soda if you prefer a lighter drink." },
    ],
    finalVerdict: "55 Degree North is best treated as a direct Indian whisky pour for snacks, highballs and casual meals.",
    metaTitle: "55 Degree North Whisky Guide | BevOry",
    metaDescription: "Explore 55 Degree North whisky style, serving ideas, Indian snack pairings and city prices on BevOry.",
  },
  "6-furlongs": {
    description: "6 Furlongs is a pale ale label associated with St Andrews Beach Brewery in Victoria, Australia. Current Indian listings show 6 Furlongs Pale Ale Beer in a 375 ml format.",
    story: "The racing reference fits St Andrews Beach Brewery's location on a former horse-training property on the Mornington Peninsula. The beer itself sits in a modern pale-ale lane, with hops doing more work than heavy malt.",
    tastingNotes: [
      { title: "Hop character", description: "Citrus peel, light pine and floral hop notes bring the pale ale its lift." },
      { title: "Malt balance", description: "A mild malt base keeps the beer rounded without turning it sweet or heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a clean beer glass, leaving enough headspace for aroma rather than pouring it flat." },
      { subheading: "Food", description: "Pair with fried prawns, peri-peri chicken, herbed fries, grilled corn or sharp cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fried prawns", "peri-peri chicken", "herbed fries", "grilled corn", "sharp cheddar"] }],
    whyChoose: "A hop-led pale ale for drinkers who want citrus and mild bitterness instead of a plain lager profile.",
    faqs: [
      { question: "What style is 6 Furlongs?", answer: "6 Furlongs is listed as a pale ale beer." },
      { question: "What food pairs with 6 Furlongs Pale Ale?", answer: "Fried prawns, peri-peri chicken, herbed fries and grilled corn all suit its hop bitterness." },
    ],
    finalVerdict: "6 Furlongs Pale Ale is a better fit for spicy fried food than for sweet desserts or delicate dishes.",
    metaTitle: "6 Furlongs Pale Ale Guide | BevOry",
    metaDescription: "Explore 6 Furlongs Pale Ale, tasting style, serving tips, food pairings and city prices on BevOry.",
  },
  "8": {
    description: "8 is a short BevOry brand entry tied to 8PM Premium Black Whisky listings. The drink sits in India's blended-whisky space, with the bottle name carrying the clearer consumer identity.",
    story: "8PM is a long-running Indian whisky name from Radico Khaitan. Premium Black extends that familiar label into a darker, stronger-looking whisky presentation for everyday Indian whisky drinkers.",
    tastingNotes: [
      { title: "Mellow grain", description: "Soft grain sweetness, caramel and light vanilla give the whisky an easy mixer-friendly base." },
      { title: "Oak spice", description: "Gentle oak and warming spice keep the finish simple rather than heavily smoky." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour 30 ml with ice, water or soda; keep cola or sweet mixers restrained so the whisky does not disappear." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, paneer pakora or mutton seekh." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "paneer pakora", "mutton seekh", "smoked cheese"] }],
    whyChoose: "It gives price-conscious whisky drinkers a direct route into 8PM Premium Black-style Indian whisky.",
    faqs: [
      { question: "What does the 8 brand entry refer to?", answer: "Current BevOry listings connect it to 8PM Premium Black Whisky." },
      { question: "How should I drink 8PM Premium Black Whisky?", answer: "Try it with ice, water or soda, then pair it with spicy grilled snacks." },
    ],
    finalVerdict: "The 8 entry is best read through its 8PM Premium Black Whisky bottle and served in a simple Indian whisky style.",
    metaTitle: "8 Whisky Guide | BevOry",
    metaDescription: "Explore the 8 whisky listing, 8PM Premium Black style, serving ideas, snack pairings and city prices on BevOry.",
  },
  absinthe: {
    description: "Absinthe is listed as a liqueur-style umbrella on BevOry, with bottles such as Absente 49, Absinthe 49 and La Ananta Absinthe. The category is known for anise, wormwood and herbal bitterness rather than sweet fruit liqueur character.",
    story: "Absinthe became famous in nineteenth-century Europe before modern legal versions returned with controlled wormwood use. Today's bottles vary widely, so brand, strength and serving ritual matter more than the word absinthe alone.",
    tastingNotes: [
      { title: "Herbal core", description: "Anise, fennel and wormwood create a dry, aromatic herbal profile." },
      { title: "Texture", description: "When water is added, many absinthes turn cloudy and softer while keeping a bitter herbal edge." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a small measured pour and slowly add chilled water; sugar is optional and depends on the bottle." },
      { subheading: "Food", description: "Pair tiny pours with goat cheese, herbed olives, dark chocolate or fennel-led seafood." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["goat cheese", "herbed olives", "dark chocolate", "fennel seafood", "salted almonds"] }],
    whyChoose: "Absinthe is for drinkers who want herbal intensity, not a soft or fruity liqueur.",
    faqs: [
      { question: "What does absinthe taste like?", answer: "Most absinthe leans toward anise, fennel, wormwood and dry herbal bitterness." },
      { question: "How is absinthe usually served?", answer: "A small measure is commonly diluted slowly with chilled water, with sugar used only when the bottle suits it." },
    ],
    finalVerdict: "Absinthe is a bold herbal pour best handled slowly, diluted carefully and paired with salty or savoury food.",
    metaTitle: "Absinthe Liqueur Guide | BevOry",
    metaDescription: "Explore absinthe styles, herbal tasting notes, serving ritual, food pairings and city prices on BevOry.",
  },
  ac: {
    description: "AC is an Indian whisky label currently led by AC Black Luxury Pure Grain Whisky and A.C. S.E.K.C. Whisky listings. It belongs in the blended Indian whisky space rather than single malt or Scotch-only comparison.",
    story: "Government rate lists and current retail catalogues show AC Black Luxury Pure Grain Whisky as an Indian market label. The useful consumer comparison is by bottle size, whisky style and city price.",
    tastingNotes: [
      { title: "Grain whisky style", description: "Light grain sweetness, caramel and gentle oak make the profile suited to water, soda and ice." },
      { title: "Simple finish", description: "A short warming finish keeps the whisky closer to everyday highball serves than slow tasting pours." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve 30 ml over ice, then lengthen with chilled soda or water if preferred." },
      { subheading: "Food", description: "Pair with masala peanuts, chicken tikka, paneer pakora, smoked cheese or mutton seekh." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["masala peanuts", "chicken tikka", "paneer pakora", "smoked cheese", "mutton seekh"] }],
    whyChoose: "AC is a direct Indian whisky option for simple pours and snack-led drinking.",
    faqs: [
      { question: "What is AC whisky?", answer: "AC is listed with Indian whisky expressions such as AC Black Luxury Pure Grain Whisky." },
      { question: "What food pairs with AC whisky?", answer: "Spicy snacks such as masala peanuts, chicken tikka and paneer pakora are practical matches." },
    ],
    finalVerdict: "AC works best as a simple Indian whisky serve with ice, soda and bold snacks.",
    metaTitle: "AC Whisky Guide | BevOry",
    metaDescription: "Explore AC whisky style, serving ideas, Indian snack pairings and city prices on BevOry.",
  },
  "ag-47": {
    description: "Ag 47 is a wine label listed with Chardonnay and Malbec-Shiraz bottles. Current restaurant and retail references place the red blend in Argentina, while Chardonnay gives the range a white-wine counterpart.",
    story: "The label is organised around grape names rather than a single estate story visible to drinkers. Malbec-Shiraz points toward ripe red fruit and spice, while Chardonnay offers a fuller white-wine option.",
    tastingNotes: [
      { title: "Malbec-Shiraz", description: "Black plum, blackberry and peppery spice suit the red blend's fuller body." },
      { title: "Chardonnay", description: "Apple, pear and light creaminess give the white a rounder profile than sharp citrus-only whites." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled at 8-10 C; pour the Malbec-Shiraz slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair Chardonnay with tandoori fish or malai tikka; match Malbec-Shiraz with lamb chops, rogan josh or grilled mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "malai tikka", "lamb chops", "rogan josh", "grilled mushrooms"] }],
    whyChoose: "Ag 47 gives drinkers a compact choice between a round Chardonnay and a darker Malbec-Shiraz red.",
    faqs: [
      { question: "Which wines are listed under Ag 47?", answer: "Current listings include Ag 47 Chardonnay and Ag 47 Malbec Shiraz." },
      { question: "What food pairs with Ag 47 Malbec Shiraz?", answer: "Try lamb chops, rogan josh, grilled mushrooms or smoky paneer." },
    ],
    finalVerdict: "Ag 47 is best chosen by grape: Chardonnay for lighter food, Malbec-Shiraz for richer Indian mains.",
    metaTitle: "Ag 47 Wine Guide | BevOry",
    metaDescription: "Explore Ag 47 Chardonnay and Malbec-Shiraz with tasting notes, pairings, serving tips and city prices on BevOry.",
  },
};
