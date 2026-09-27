import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_114 = [
  ["bumbu", "Bumbu", "Barbados", "Rum", "brand-expansion-bumbu"],
  ["chairmans-reserve", "Chairman's Reserve", "Saint Lucia", "Rum", "brand-expansion-chairmans-reserve"],
  ["dead-mans-fingers", "Dead Man's Fingers", "United Kingdom", "Rum", "brand-expansion-dead-mans-fingers"],
  ["pussers", "Pusser's", "Guyana", "Rum", "brand-expansion-pussers"],
  ["sailor-jerry", "Sailor Jerry", "United States", "Rum", "brand-expansion-sailor-jerry"],
  ["michelob-ultra", "Michelob Ultra", "United States", "Beer", "brand-expansion-michelob-ultra"],
  ["goose-island", "Goose Island", "United States", "Beer", "brand-expansion-goose-island"],
] as const;

export const BRAND_LOGOS_BATCH_114: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_114: Record<string, string[]> = {
  bumbu: [
    "https://www.pernod-ricard.com/en/brand/bumbu",
    "https://bumbu.sovereignbrands.com/bumbu-xo/",
  ],
  "chairmans-reserve": [
    "https://www.chairmansreserverum.com/history/",
    "https://www.stluciadistillers.com/our-rums",
  ],
  "dead-mans-fingers": [
    "https://deadmansfingers.com/home/our-story/",
  ],
  pussers: [
    "https://pussersrum.com/pages/craft",
    "https://pussersrum.com/blogs/logbook/liquid-history-rum-and-the-royal-navy",
  ],
  "sailor-jerry": [
    "https://www.sailorjerry.com/en-gb/rum-cocktail-recipes/our-story",
    "https://www.newswire.ca/news-releases/sailor-jerry-spiced-rum-unveils-redesigned-bottle-honoring-tattoo-legend-norman-sailor-jerry-collins-678610083.html",
  ],
  "michelob-ultra": [
    "https://www.anheuser-busch.com/newsroom/michelob-ultra-zero-alcohol-free",
  ],
  "goose-island": [
    "https://gooseisland.eu/about",
    "https://www.gooseisland.com/visit",
  ],
};

export const BRAND_CONTENT_BATCH_114: Record<string, BrandPublicContent> = {
  bumbu: {
    description: "Bumbu is a rum brand led by Bumbu Original, crafted in Barbados at the historic West Indies Rum Company distillery, founded in 1893. The range also includes Bumbu XO, a Panama-distilled rum aged in American bourbon barrels and finished in Andalusian sherry casks.",
    story: "The brand draws on a West Indies idea of blending rum with island fruits and spices. Bumbu's modern identity is plush, sweet-spiced and cocktail-friendly rather than dry and austere.",
    tastingNotes: [
      { title: "Island Spice", description: "Vanilla, banana, caramel and baking spice give Bumbu Original its rounded sweetness." },
      { title: "XO Depth", description: "Bumbu XO moves darker with toffee, oak, dried fruit and a soft sherry-cask finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over one large cube, lengthen with cola or ginger ale, or use in a rum Old Fashioned." },
      { subheading: "Food", description: "Pair with jerk chicken, grilled pineapple, mutton pepper fry or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["jerk chicken", "grilled pineapple", "mutton pepper fry", "dark chocolate", "banana fritters"] }],
    whyChoose: "Bumbu suits drinkers who want rich, sweet-spiced rum with Caribbean character and easy cocktail range.",
    faqs: [
      { question: "Where is Bumbu Original made?", answer: "Bumbu Original is crafted in Barbados at West Indies Rum Company." },
      { question: "What is Bumbu XO?", answer: "Bumbu XO is a Panama-distilled rum aged in American bourbon barrels and finished in Andalusian sherry casks." },
    ],
    finalVerdict: "Bumbu is a lush rum choice for sweet-spiced sipping, highballs and dessert-friendly serves.",
    metaTitle: "Bumbu Rum Guide | BevOry",
    metaDescription: "Explore Bumbu rum notes, Barbados craft, XO style, cocktail serves, pairings and city prices.",
  },
  "chairmans-reserve": {
    description: "Chairman's Reserve is a Saint Lucian rum from Saint Lucia Distillers on the island's west coast. First blended in 1999, it combines continuous and pot still rums for a full, island-grown profile.",
    story: "Laurie Barnard created Chairman's Reserve after Saint Lucia Distillers had developed deeper stocks from its still house. The brand is closely tied to Saint Lucia's rum heritage and the Piton Mountains shown on its label.",
    tastingNotes: [
      { title: "Tropical Oak", description: "Banana, cooked pineapple, vanilla and toasted oak give the rum an easy tropical depth." },
      { title: "Pot Still Grip", description: "Molasses, spice and a dry earthy note add weight behind the fruit." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat, use in a Daiquiri, or build a rum highball with lime and ginger beer." },
      { subheading: "Food", description: "Pair with tandoori chicken, roast pork, grilled prawns or coconut barfi." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "roast pork", "grilled prawns", "coconut barfi", "spiced cashews"] }],
    whyChoose: "Chairman's Reserve gives rum drinkers a balanced Saint Lucian style with both column and pot still character.",
    faqs: [
      { question: "Where is Chairman's Reserve made?", answer: "Chairman's Reserve is made by Saint Lucia Distillers in Saint Lucia." },
      { question: "When was Chairman's Reserve first blended?", answer: "Saint Lucia Distillers lists Chairman's Reserve as first blended in 1999." },
    ],
    finalVerdict: "Chairman's Reserve is a versatile rum for Daiquiris, neat pours and food pairings with spice.",
    metaTitle: "Chairman's Reserve Rum Guide | BevOry",
    metaDescription: "Explore Chairman's Reserve rum notes, Saint Lucia history, serving ideas and city prices.",
  },
  "dead-mans-fingers": {
    description: "Dead Man's Fingers is a spiced rum brand born at the Rum and Crab Shack in St Ives, Cornwall. Its name comes from the finger-like gills inside a crab, giving the brand its dark seaside humour.",
    story: "The label was built around a Cornish seafood-bar attitude rather than a traditional estate-rum story. It leans into bold flavours, skull imagery and cocktail-friendly spiced-rum serves.",
    tastingNotes: [
      { title: "Sweet Spice", description: "Vanilla, orange peel, cinnamon and caramel create a rounded spiced-rum profile." },
      { title: "Dessert Edge", description: "Raisin, brown sugar and warming spice make it useful in cola serves and tropical cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Mix with cola, ginger beer or pineapple juice; add lime for sharper balance." },
      { subheading: "Food", description: "Pair with crab cakes, peri-peri wings, chilli paneer or sticky toffee pudding." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["crab cakes", "peri-peri wings", "chilli paneer", "sticky toffee pudding", "grilled pineapple"] }],
    whyChoose: "Dead Man's Fingers is a punchy spiced rum for drinkers who like bold branding and easy mixers.",
    faqs: [
      { question: "Where did Dead Man's Fingers start?", answer: "Dead Man's Fingers started at the Rum and Crab Shack in St Ives, Cornwall." },
      { question: "What kind of rum is Dead Man's Fingers?", answer: "It is best known as a spiced rum range for mixed drinks and tropical serves." },
    ],
    finalVerdict: "Dead Man's Fingers works when you want a lively spiced rum for cola, ginger beer and party-style cocktails.",
    metaTitle: "Dead Man's Fingers Rum Guide | BevOry",
    metaDescription: "Explore Dead Man's Fingers spiced rum notes, Cornwall story, mixers, pairings and city prices.",
  },
  pussers: {
    description: "Pusser's is a navy-style rum brand built around the Royal Navy rum tradition. Its current identity centres on Guyana-linked still character and the seafaring history of daily rum rations.",
    story: "In Royal Navy slang, the purser who issued supplies was known as the pusser, which gives the brand its name. The naval rum ration ended on Black Tot Day in 1970, but Pusser's kept the style alive for civilian drinkers.",
    tastingNotes: [
      { title: "Demerara Weight", description: "Dark molasses, brown sugar, leather and dried fruit give Pusser's a deep navy-rum feel." },
      { title: "Spiced Finish", description: "Oak, clove, black tea and burnt caramel carry through a firm finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a rocks glass, over one cube, or in a Painkiller with pineapple, orange and coconut." },
      { subheading: "Food", description: "Pair with mutton seekh, jerk prawns, dark chocolate or roasted nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "jerk prawns", "dark chocolate", "roasted nuts", "charred pineapple"] }],
    whyChoose: "Pusser's is for rum drinkers who want dense navy-style flavour with real maritime heritage.",
    faqs: [
      { question: "What does Pusser's mean?", answer: "Pusser comes from Royal Navy slang for the purser who issued supplies, including rum." },
      { question: "What style is Pusser's Rum?", answer: "Pusser's is a navy-style rum associated with rich, dark, Guyana-led rum character." },
    ],
    finalVerdict: "Pusser's is a bold navy-style rum for dark cocktails, slow sipping and rich food pairings.",
    metaTitle: "Pusser's Rum Guide | BevOry",
    metaDescription: "Explore Pusser's navy rum history, tasting notes, Painkiller serve, pairings and city prices.",
  },
  "sailor-jerry": {
    description: "Sailor Jerry is a spiced Caribbean rum created in honour of Norman 'Sailor Jerry' Collins, the American old-school tattoo artist. The rum is blended with natural spices and is known for vanilla, cinnamon and bold mixer-friendly flavour.",
    story: "Norman Collins built his reputation in Honolulu with precise, maritime-influenced tattoo work. The rum borrows that sailor culture and the old practice of improving shipboard rum with spices.",
    tastingNotes: [
      { title: "Vanilla And Cinnamon", description: "Vanilla, cassia, cinnamon and almond give the rum its sweet-spiced signature." },
      { title: "Bold Mixer Body", description: "A warm rum base keeps the flavour present in cola, ginger beer and citrus cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Mix with cola and lime, build a Norman Collins, or use with ginger beer in a long glass." },
      { subheading: "Food", description: "Pair with barbecue chicken, masala fries, pork ribs or chocolate brownies." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue chicken", "masala fries", "pork ribs", "chocolate brownies", "salted peanuts"] }],
    whyChoose: "Sailor Jerry is a high-energy spiced rum for cola serves, citrus cocktails and late-night snacks.",
    faqs: [
      { question: "Who was Sailor Jerry?", answer: "Sailor Jerry was Norman Collins, an influential American old-school tattoo artist." },
      { question: "What does Sailor Jerry rum taste like?", answer: "Expect vanilla, cinnamon, almond and warm Caribbean rum spice." },
    ],
    finalVerdict: "Sailor Jerry is built for bold spiced-rum highballs and casual cocktails with plenty of flavour.",
    metaTitle: "Sailor Jerry Rum Guide | BevOry",
    metaDescription: "Explore Sailor Jerry spiced rum notes, Norman Collins story, mixers, pairings and city prices.",
  },
  "michelob-ultra": {
    description: "Michelob Ultra is a light beer from Anheuser-Busch, positioned around low calories, low carbs and an active lifestyle. Its standard light beer is known for 95 calories and 2.6 carbs per serving.",
    story: "The brand became a major part of Anheuser-Busch's modern beer portfolio by speaking to drinkers who wanted a crisp, lighter lager. Michelob Ultra later expanded into adjacent options such as alcohol-free Ultra Zero.",
    tastingNotes: [
      { title: "Clean Lager", description: "Light malt, soft grain and mild hop bitterness make the beer crisp and simple." },
      { title: "Dry Refreshment", description: "A lean body and dry finish keep it cold, fast and food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a chilled bottle, can or slim pilsner glass." },
      { subheading: "Food", description: "Pair with grilled fish, chicken tikka, nachos, salads or masala peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "chicken tikka", "nachos", "salads", "masala peanuts"] }],
    whyChoose: "Michelob Ultra is for beer drinkers who want a crisp, lighter lager with easy refreshment.",
    faqs: [
      { question: "Who makes Michelob Ultra?", answer: "Michelob Ultra is made by Anheuser-Busch." },
      { question: "What style is Michelob Ultra?", answer: "Michelob Ultra is a light lager-style beer with a low-calorie, low-carb positioning." },
    ],
    finalVerdict: "Michelob Ultra is a clean, light beer for cold refreshment, casual food and easy drinking.",
    metaTitle: "Michelob Ultra Beer Guide | BevOry",
    metaDescription: "Explore Michelob Ultra beer notes, light lager style, food pairings and city prices.",
  },
  "goose-island": {
    description: "Goose Island is a Chicago beer brand founded by John Hall in 1988. It grew from a brewpub into one of the best-known American craft-beer names, with Chicago still central to its identity.",
    story: "John Hall opened Goose Island after seeing how European beer culture could work in Chicago. The brewery expanded in 1995 with a larger production site and later became widely known for hop-forward beers and barrel-aged releases.",
    tastingNotes: [
      { title: "Craft Range", description: "The range spans citrusy IPAs, crisp lagers, wheat beers and darker barrel-aged styles." },
      { title: "Chicago Character", description: "Expect clean brewing, food-friendly bitterness and styles built for pub service." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve lagers cold, IPAs in a tulip or pint glass, and barrel-aged beers slightly warmer." },
      { subheading: "Food", description: "Pair IPAs with butter chicken, burgers, fried fish or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter chicken", "burgers", "fried fish", "chilli cheese toast", "buffalo wings"] }],
    whyChoose: "Goose Island is a familiar gateway into Chicago craft beer, from easy pub pours to richer special releases.",
    faqs: [
      { question: "Where did Goose Island start?", answer: "Goose Island started in Chicago in 1988." },
      { question: "Who founded Goose Island?", answer: "Goose Island was founded by John Hall." },
    ],
    finalVerdict: "Goose Island is a strong pick when you want a Chicago craft-beer name with broad style range.",
    metaTitle: "Goose Island Beer Guide | BevOry",
    metaDescription: "Explore Goose Island beer history, Chicago craft styles, tasting notes, pairings and city prices.",
  },
};
