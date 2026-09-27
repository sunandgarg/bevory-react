import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_77 = [
  ["dennis-special", "Dennis Special", "India", "Made in India Whisky", "pending-dennis-special"],
  ["desaal", "Desaal", "India", "Wine", "pending-desaal"],
  ["diamond", "Diamond", "India", "Brandy", "pending-diamond"],
  ["dignity", "Dignity", "India", "Made in India Whisky", "pending-dignity"],
  ["directors", "Directors", "India", "Made in India Whisky", "pending-directors"],
  ["disarno", "Disarno", "Italy", "Liqueurs", "pending-disarno"],
  ["disco-panda", "Disco Panda", "India", "Beers", "pending-disco-panda"],
  ["discovery", "Discovery", "India", "Made in India Whisky", "pending-discovery"],
  ["discovery-elite", "Discovery Elite", "India", "Made in India Whisky", "pending-discovery-elite"],
  ["doc-paul", "Doc Paul", "India", "Brandy", "pending-doc-paul"],
] as const;

export const BRAND_LOGOS_BATCH_77: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_77: Record<string, string[]> = {
  "dennis-special": [
    "https://www.scribd.com/document/851180531/IMFL-DSIIDC-Rate-List-Sept",
    "https://www.bevory.in/agra/brand/dennis-special",
  ],
  desaal: [
    "https://www.tallidrinks.com/product-page/sirak-select-white",
    "https://www.vivino.com/US/en/desaal-sirak-select-white/w/9716848",
    "https://www.bevory.in/agra/brand/desaal",
  ],
  diamond: [
    "https://www.livcheers.com/hyderabad/liquor/diamond-brandy-1000ml",
    "https://tasmac.reclaimchennai.city/catalogue?c=BRANDY&d=asc&s=value",
    "https://www.bevory.in/agra/brand/diamond",
  ],
  dignity: [
    "https://www.scribd.com/document/851180531/IMFL-DSIIDC-Rate-List-Sept",
    "https://en.nbd.ltd/trader/info/NBDX1H144214622",
    "https://www.bevory.in/agra/brand/dignity",
  ],
  directors: [
    "https://www.livcheers.com/bhopal/liquor/director-special-gold-whisky-750ml",
    "https://delhiexcise.gov.in/pdf/IL_PriceList.pdf",
    "https://www.bevory.in/agra/brand/directors",
  ],
  disarno: [
    "https://disaronno.com/int/our-story/",
    "https://disaronnogroup.com/",
    "https://www.bevory.in/agra/brand/disarno",
  ],
  "disco-panda": [
    "https://untappd.com/b/world-of-brands-disco-panda-hoppy-magic-premium-strength/5597274",
    "https://www.thestyle.world/world-of-brands-launches-a-one-of-its-kind-strong-craft-product-disco-panda-2/",
    "https://www.bevory.in/agra/brand/disco-panda",
  ],
  discovery: [
    "https://www.livcheers.com/delhi/liquor/discovery-whisky-750ml",
    "https://infomericstorage.blob.core.windows.net/uploads/Pr_NV_Distilleries_Brew_13mar25_64923d2202.pdf",
    "https://www.bevory.in/agra/brand/discovery",
  ],
  "discovery-elite": [
    "https://infomericstorage.blob.core.windows.net/uploads/Pr_NV_Distilleries_Brew_13mar25_64923d2202.pdf",
    "https://osbc.co.in/NewIncludes/UploadFiles/MRP-2022-23.pdf",
    "https://www.bevory.in/agra/brand/discovery-elite",
  ],
  "doc-paul": [
    "https://tsbcl.nic.in/open_record.php?ID=249",
    "https://www.bevory.in/agra/brand/doc-paul",
  ],
};

export const BRAND_CONTENT_BATCH_77: Record<string, BrandPublicContent> = {
  "dennis-special": {
    description: "Dennis Special is an Indian whisky label listed on BevOry through Dennis Special Gold Whisky and Dennis Special Gold. Local price-list references place Dennis Special Whisky in the Indian whisky category.",
    story: "Dennis Special sits in the everyday Indian whisky lane, where familiar serve formats matter more than collector detail. The BevOry page focuses on the Gold whisky listing across 500 ml and 750 ml formats.",
    tastingNotes: [
      { title: "Gold Whisky Style", description: "Caramel, grain sweetness, light oak and soft spice give the whisky an easy mixed-drink profile." },
      { title: "Clean Finish", description: "The finish is warm and straightforward, built for water, soda or ice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, water or soda in a highball glass." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, paneer pakora, egg bhurji or spicy fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "paneer pakora", "egg bhurji", "spicy fries"] }],
    whyChoose: "Dennis Special is a simple Indian whisky choice for highballs, snacks and local price comparison.",
    faqs: [
      { question: "What Dennis Special bottles are listed on BevOry?", answer: "BevOry lists Dennis Special Gold Whisky and Dennis Special Gold." },
      { question: "How should Dennis Special be served?", answer: "Serve it with ice, water or soda alongside spicy Indian snacks." },
    ],
    finalVerdict: "Dennis Special is a practical whisky page for everyday pours and snack-led serving.",
    metaTitle: "Dennis Special Whisky Guide | BevOry",
    metaDescription: "Explore Dennis Special Gold Whisky notes, serving ideas, snack pairings and city prices on BevOry.",
  },
  desaal: {
    description: "Desaal is an Indian wine label listed on BevOry through Chenin Blanc, Sirak Select White, Sangiovese and Sirak Select Red. Retail descriptions connect the Sirak Select White range with handpicked grapes from Nashik Valley vineyards.",
    story: "Desaal works as a compact Indian wine portfolio covering white and red table-wine styles. Chenin Blanc gives the range a familiar Indian white-wine anchor, while Sangiovese and Sirak Select Red add food-friendly red options.",
    tastingNotes: [
      { title: "White Wines", description: "Chenin Blanc and Sirak Select White lean toward citrus, apple, pear and fresh acidity." },
      { title: "Red Wines", description: "Sangiovese and Sirak Select Red bring cherry, plum, dried herbs and moderate tannins." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and reds slightly cool in standard wine glasses." },
      { subheading: "Food", description: "Pair whites with fish tikka or paneer malai; pair reds with lamb seekh, tomato pasta or mushroom kebabs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tikka", "paneer malai", "lamb seekh", "tomato pasta", "mushroom kebabs"] }],
    whyChoose: "Desaal is useful for comparing Indian white and red wine styles from one compact brand page.",
    faqs: [
      { question: "Which Desaal wines are listed on BevOry?", answer: "BevOry lists Desaal Chenin Blanc, Sirak Select White, Sangiovese and Sirak Select Red." },
      { question: "What food pairs with Desaal Chenin Blanc?", answer: "Fish tikka, paneer malai, citrus salad and grilled prawns suit its chilled white-wine style." },
    ],
    finalVerdict: "Desaal is a flexible Indian wine choice for chilled whites, light reds and everyday food pairing.",
    metaTitle: "Desaal Wine Guide | BevOry",
    metaDescription: "Explore Desaal Chenin Blanc, Sirak Select and Sangiovese notes, pairings and city prices on BevOry.",
  },
  diamond: {
    description: "Diamond is a brandy label listed on BevOry through Diamond Brandy in 1 litre format. Tamil Nadu retail data and Livcheers listings both show Diamond Brandy as a standalone brandy entry.",
    story: "Diamond Brandy is a direct, bottle-led brandy listing rather than a broad heritage portfolio. Its useful buying context is format, brandy style and whether the drinker wants a neat pour or a longer soda serve.",
    tastingNotes: [
      { title: "Brandy Fruit", description: "Ripe fruit, caramel, fig and vanilla give the brandy a sweet, rounded profile." },
      { title: "Spiced Finish", description: "Oak, nutmeg and dark-chocolate hints add warmth to the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, on ice, or as a brandy highball with soda." },
      { subheading: "Food", description: "Pair with pepper chicken, plum cake, roasted cashews, dark chocolate or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "plum cake", "roasted cashews", "dark chocolate", "smoked cheese"] }],
    whyChoose: "Diamond Brandy is a straightforward 1 litre brandy option for neat, ice and highball serves.",
    faqs: [
      { question: "What Diamond product is listed on BevOry?", answer: "BevOry lists Diamond Brandy in 1 litre format." },
      { question: "How should Diamond Brandy be served?", answer: "Serve it neat, with ice, or lengthened with soda in a highball." },
    ],
    finalVerdict: "Diamond Brandy is best for drinkers who want a familiar brandy pour with dessert or spicy snacks.",
    metaTitle: "Diamond Brandy Guide | BevOry",
    metaDescription: "Explore Diamond Brandy notes, serving ideas, food pairings and city prices on BevOry.",
  },
  dignity: {
    description: "Dignity is an Indian whisky label listed on BevOry through Dignity Superior Grain Whisky. Trade references identify it as an Indian superior grain whisky entry.",
    story: "Dignity belongs to the modern Indian grain-whisky segment, where clean grain spirit, easy mixing and local availability drive the page intent. The BevOry listing keeps the focus on the Superior Grain Whisky bottle.",
    tastingNotes: [
      { title: "Grain Whisky", description: "Cereal sweetness, caramel, light vanilla and gentle oak shape the whisky's core." },
      { title: "Light Spice", description: "A short, warm finish makes it comfortable with soda, water or ice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water or ice in a tall glass." },
      { subheading: "Food", description: "Pair with tandoori chicken, masala peanuts, chilli paneer, kebab rolls or fried fish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "masala peanuts", "chilli paneer", "kebab rolls", "fried fish"] }],
    whyChoose: "Dignity is a clear Indian grain-whisky option for simple highballs and spicy food.",
    faqs: [
      { question: "What type of whisky is Dignity?", answer: "Dignity is listed on BevOry as Dignity Superior Grain Whisky." },
      { question: "What food pairs with Dignity whisky?", answer: "Tandoori chicken, chilli paneer, kebab rolls and masala peanuts fit its highball style." },
    ],
    finalVerdict: "Dignity Superior Grain Whisky is a practical Indian whisky for soda serves and high-spice snacks.",
    metaTitle: "Dignity Whisky Guide | BevOry",
    metaDescription: "Explore Dignity Superior Grain Whisky notes, serving ideas, snack pairings and city prices on BevOry.",
  },
  directors: {
    description: "Directors is listed on BevOry through Directors Special Director Special Gold Whisky. Livcheers identifies Director Special Gold Whisky as an Indian blended whisky made from malt and grain whiskies.",
    story: "Director Special Gold Whisky is a long-running Indian whisky name seen across state price lists. The Gold style is positioned around smoothness, caramel sweetness and easy mixed-drink service.",
    tastingNotes: [
      { title: "Blended Indian", description: "Caramel, oak, grain sweetness and mellow malt notes form the centre of the whisky." },
      { title: "Crisp Finish", description: "A light body and clean finish make it easy with water, soda or ice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve in a highball with soda, with water, or over ice." },
      { subheading: "Food", description: "Pair with chicken kebab, masala peanuts, paneer tikka, lamb seekh or potato wedges." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken kebab", "masala peanuts", "paneer tikka", "lamb seekh", "potato wedges"] }],
    whyChoose: "Directors is a familiar Indian blended whisky pick for smooth highballs and snack plates.",
    faqs: [
      { question: "What Directors bottle is listed on BevOry?", answer: "BevOry lists Directors Special Director Special Gold Whisky." },
      { question: "Is Director Special Gold a blended whisky?", answer: "Livcheers lists Director Special Gold Whisky as a blended Indian whisky." },
    ],
    finalVerdict: "Directors is a steady Indian whisky choice for soda, ice and spicy party snacks.",
    metaTitle: "Directors Whisky Guide | BevOry",
    metaDescription: "Explore Directors Special Gold Whisky notes, serving ideas, pairings and city prices on BevOry.",
  },
  disarno: {
    description: "Disarno is listed on BevOry as a liqueur entry through Disarno Liquer in 1 litre format. The closest verified international reference is Disaronno, the Italian amaretto-style liqueur from Saronno.",
    story: "Disaronno traces its story to Saronno in Lombardy, with a Renaissance legend dated to 1525 and later production by the Reina family. ILLVA Saronno was founded in 1947, and the brand is now part of Disaronno Group.",
    tastingNotes: [
      { title: "Amaretto Style", description: "Bitter almond, apricot kernel, marzipan, vanilla and caramel create the signature sweet profile." },
      { title: "Dessert Finish", description: "The finish is smooth, nutty and sweet, built for coffee, sours and dessert serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with espresso, or in an Amaretto Sour with lemon and egg white." },
      { subheading: "Food", description: "Pair with tiramisu, gulab jamun, almond biscotti, chocolate brownie or vanilla ice cream." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tiramisu", "gulab jamun", "almond biscotti", "chocolate brownie", "vanilla ice cream"] }],
    whyChoose: "Disarno is useful for shoppers looking for a sweet Italian amaretto-style liqueur for cocktails and dessert.",
    faqs: [
      { question: "What style of liqueur is Disarno?", answer: "BevOry lists it under liqueurs, with an amaretto-style Italian liqueur profile." },
      { question: "How should Disarno be served?", answer: "Serve it over ice, with coffee, or in an Amaretto Sour." },
    ],
    finalVerdict: "Disarno is best treated as a sweet almond-style liqueur for dessert drinks and easy cocktails.",
    metaTitle: "Disarno Liqueur Guide | BevOry",
    metaDescription: "Explore Disarno liqueur notes, amaretto-style serves, dessert pairings and city prices on BevOry.",
  },
  "disco-panda": {
    description: "Disco Panda is an Indian ready-to-drink style listing on BevOry through Disco Panda Hoppy Magic. Public beer-community data describes Hoppy Magic as a carbonated honey wine based beverage with West Coast hops and botanicals.",
    story: "World of Brands launched Disco Panda Hoppy Magic as a strong craft product, with the first flavour built around hops, natural botanicals and a playful party identity. The BevOry listing shows it in 330 ml format.",
    tastingNotes: [
      { title: "Hoppy Honey", description: "Honey sweetness, citrusy hop lift and botanical notes make it different from a standard lager." },
      { title: "Strong Finish", description: "A fuller, sweeter finish suits chilled service and bold snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a small chilled glass or straight from the bottle." },
      { subheading: "Food", description: "Pair with peri-peri fries, chicken wings, chilli paneer, nachos or spicy momos." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "chicken wings", "chilli paneer", "nachos", "spicy momos"] }],
    whyChoose: "Disco Panda is a party-style hoppy honey beverage for drinkers who want something bolder than beer.",
    faqs: [
      { question: "What is Disco Panda Hoppy Magic?", answer: "It is listed as a hoppy, carbonated honey wine based beverage with botanical character." },
      { question: "How should Disco Panda be served?", answer: "Serve it very cold with spicy snacks or fried party food." },
    ],
    finalVerdict: "Disco Panda Hoppy Magic is a bold chilled drink for party snacks and sweet-hoppy refreshment.",
    metaTitle: "Disco Panda Hoppy Magic Guide | BevOry",
    metaDescription: "Explore Disco Panda Hoppy Magic notes, chilled serving ideas, snack pairings and city prices on BevOry.",
  },
  discovery: {
    description: "Discovery is an Indian whisky label listed on BevOry through Discovery Whisky in 180 ml, 375 ml and 750 ml formats. Livcheers lists Discovery Whisky under Indian whisky-style discovery pages, while NV Group references connect Discovery labels with NV Distilleries.",
    story: "Discovery sits in the Indian blended-whisky market, where value, familiar bottle sizes and mixer-friendly service are key. The BevOry listing gives shoppers a clean entry point for checking Discovery Whisky by city and bottle size.",
    tastingNotes: [
      { title: "Indian Whisky", description: "Grain, caramel, light citrus, vanilla and mild oak make the whisky easy to mix." },
      { title: "Simple Finish", description: "A light, clean finish suits soda, water and ice rather than heavy sipping." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water or ice in a highball glass." },
      { subheading: "Food", description: "Pair with chicken tikka, seekh kebab, masala peanuts, chilli potato or paneer pakora." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "seekh kebab", "masala peanuts", "chilli potato", "paneer pakora"] }],
    whyChoose: "Discovery is a simple Indian whisky option for highballs, casual snacks and bottle-size comparison.",
    faqs: [
      { question: "Which Discovery Whisky sizes are listed on BevOry?", answer: "BevOry shows Discovery Whisky in 180 ml, 375 ml and 750 ml formats." },
      { question: "How should Discovery Whisky be served?", answer: "Serve it with soda, water or ice alongside spicy Indian snacks." },
    ],
    finalVerdict: "Discovery Whisky is a straightforward Indian whisky for mixed serves and everyday snack pairing.",
    metaTitle: "Discovery Whisky Guide | BevOry",
    metaDescription: "Explore Discovery Whisky notes, bottle sizes, serving ideas and city prices on BevOry.",
  },
  "discovery-elite": {
    description: "Discovery Elite is an Indian whisky label listed on BevOry through Discovery Elite Whisky. Public credit and excise references connect Discovery Elite Whisky with NV Distilleries and Breweries Private Limited.",
    story: "NV Distilleries and Breweries lists Discovery Elite Whisky among its IMFL portfolio, alongside Smoke Vodka and NV's Royal Envy. The brand sits in the accessible Indian whisky segment, with common 180 ml, 375 ml and 750 ml formats seen in state records.",
    tastingNotes: [
      { title: "Elite Blend", description: "Caramel, toasted grain, vanilla and light oak spice give the whisky a soft mixed-drink profile." },
      { title: "Warm Finish", description: "The finish is short, clean and warming, suited to ice or soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water or plenty of ice." },
      { subheading: "Food", description: "Pair with tandoori momos, chicken pakora, masala peanuts, paneer tikka or egg rolls." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori momos", "chicken pakora", "masala peanuts", "paneer tikka", "egg rolls"] }],
    whyChoose: "Discovery Elite is a value-led Indian whisky for short serves, highballs and spicy snacks.",
    faqs: [
      { question: "Who is connected with Discovery Elite Whisky?", answer: "Public references connect Discovery Elite Whisky with NV Distilleries and Breweries Private Limited." },
      { question: "What Discovery Elite product is listed on BevOry?", answer: "BevOry lists Discovery Elite Whisky, with 180 ml visible on the brand page." },
    ],
    finalVerdict: "Discovery Elite is a practical Indian whisky choice for casual highballs and snack-led drinking.",
    metaTitle: "Discovery Elite Whisky Guide | BevOry",
    metaDescription: "Explore Discovery Elite Whisky notes, serving ideas, snack pairings and city prices on BevOry.",
  },
  "doc-paul": {
    description: "Doc Paul is an Indian brandy label listed on BevOry through Doc Paul VSOP Brandy in 750 ml format. Telangana beverage records show Doc Paul VSOP Brandy in 180 ml and 750 ml formats.",
    story: "Doc Paul sits in the VSOP brandy segment, where grape-spirit style, oak warmth and after-dinner service guide the page intent. The BevOry listing keeps the focus on the VSOP Brandy bottle rather than a broader portfolio.",
    tastingNotes: [
      { title: "VSOP Brandy", description: "Dried fruit, caramel, vanilla and mellow oak give the brandy a rounded profile." },
      { title: "Warming Spice", description: "A smooth, lightly spiced finish works neat, over ice or with warm water." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small brandy glass, with ice, or with warm water." },
      { subheading: "Food", description: "Pair with pepper chicken, mutton fry, fruit cake, roasted almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "mutton fry", "fruit cake", "roasted almonds", "dark chocolate"] }],
    whyChoose: "Doc Paul is a clean VSOP brandy page for shoppers comparing Indian brandy bottle sizes and city prices.",
    faqs: [
      { question: "What Doc Paul bottle is listed on BevOry?", answer: "BevOry lists Doc Paul VSOP Brandy in 750 ml format." },
      { question: "How should Doc Paul VSOP Brandy be served?", answer: "Serve it neat, on ice, or with warm water after dinner." },
    ],
    finalVerdict: "Doc Paul VSOP Brandy is a warm, dessert-friendly brandy for neat pours and simple serves.",
    metaTitle: "Doc Paul Brandy Guide | BevOry",
    metaDescription: "Explore Doc Paul VSOP Brandy notes, serving ideas, food pairings and city prices on BevOry.",
  },
};
