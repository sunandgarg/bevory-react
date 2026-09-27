import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_65 = [
  ["barolo", "Barolo", "Italy", "Red Wine", "pending-barolo"],
  ["baron-gauthier", "Baron Gauthier", "France", "Red Wine", "pending-baron-gauthier"],
  ["barrhead-one", "Barrhead One", "Scotland", "Single Malts", "pending-barrhead-one"],
  ["batch", "Batch", "India", "Gin", "pending-batch"],
  ["batch-9", "Batch 9", "India", "Indian Whisky", "pending-batch-9"],
  ["beau-rivage", "Beau Rivage", "France", "Red Wine", "pending-beau-rivage"],
  ["beau-soleil", "Beau Soleil", "France", "White Wine", "pending-beau-soleil"],
  ["bedrock", "Bedrock", "Scotland", "Blended Scotch", "pending-bedrock"],
  ["bejois", "Bejois", "India", "Brandy", "pending-bejois"],
  ["bela", "Bela", "South Africa", "Wine", "pending-bela"],
] as const;

export const BRAND_LOGOS_BATCH_65: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_65: Record<string, string[]> = {
  barolo: [
    "https://www.bevory.in/delhi/brand/barolo",
    "https://www.enzobartoli.it/en/all-wines/",
    "https://www.bersano.it/en/wine",
  ],
  "baron-gauthier": [
    "https://www.bevory.in/delhi/brand/baron-gauthier",
    "https://www.livcheers.com/listing/brand/baron-gauthier",
  ],
  "barrhead-one": [
    "https://www.bevory.in/delhi/brand/barrhead-one",
    "https://cheers.com.np/grocery/product/barrheads-one-700ml",
  ],
  batch: [
    "https://www.livcheers.com/delhi/liquor/batch-garam-masala-gin-700ml",
    "https://www.bevory.in/delhi/brand/batch",
  ],
  "batch-9": [
    "https://www.bevory.in/delhi/brand/batch-9",
    "https://www.livcheers.com/charts/top-charts/made-in-india-whisky",
  ],
  "beau-rivage": [
    "https://www.livcheers.com/nagpur/liquor/beau-rivage-bordeaux-superieur-750ml",
    "https://www.borie-manoux.com/les-vins/beau-rivage-bordeaux-superieur/",
  ],
  "beau-soleil": [
    "https://www.bevory.in/delhi/brand/beau-soleil",
    "https://www.hachette-vins.com/guide-vins/les-vins/domaine-de-beau-soleil-chardonnay-2003-2005/20056982/",
  ],
  bedrock: [
    "https://www.bevory.in/delhi/brand/bedrock",
    "https://www.livcheers.com/listing/brand/bedrock",
  ],
  bejois: [
    "https://www.bevory.in/delhi/brand/bejois",
    "https://en.wikipedia.org/wiki/Bejois_%28brandy%29",
  ],
  bela: [
    "https://www.livcheers.com/noida/liquor/bela-cabernet-sauvignon-red-wine-750ml",
    "https://www.bevory.in/delhi/brand/bela",
  ],
};

export const BRAND_CONTENT_BATCH_65: Record<string, BrandPublicContent> = {
  barolo: {
    description: "Barolo is a Nebbiolo-based red wine from Piedmont in north-west Italy. BevOry currently lists Barolo bottles from names such as Enzo Bartoli, Bersano and Scanavino in 750 ml formats.",
    story: "Barolo comes from the Langhe hills and is protected as a DOCG wine. Nebbiolo gives it pale colour, high tannin, rose-like perfume and the grip needed for long, savoury meals.",
    tastingNotes: [
      { title: "Nebbiolo perfume", description: "Red cherry, rose petal, tar, dried herbs and orange peel shape the classic aroma." },
      { title: "Firm structure", description: "High acidity and firm tannin make the wine feel serious, dry and slow-building." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve around 16-18 C in a large red-wine glass; decant young bottles before dinner." },
      { subheading: "Food", description: "Pair with galouti kebab, lamb chops, mushroom risotto, truffle pasta or aged Parmigiano." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebab", "lamb chops", "mushroom risotto", "truffle pasta", "aged Parmigiano"] }],
    whyChoose: "Barolo is a structured Italian red for drinkers who want perfume, tannin and cellar-worthy depth.",
    faqs: [
      { question: "What grape is Barolo made from?", answer: "Barolo is made from Nebbiolo." },
      { question: "What food pairs with Barolo?", answer: "Lamb, mushrooms, truffle dishes, galouti kebab and aged hard cheese are strong matches." },
    ],
    finalVerdict: "Barolo is best saved for rich food, patient sipping and drinkers who enjoy tannic Italian reds.",
    metaTitle: "Barolo Red Wine Guide | BevOry",
    metaDescription: "Explore Barolo Nebbiolo wines, tasting notes, serving tips, food pairings and city prices on BevOry.",
  },
  "baron-gauthier": {
    description: "Baron Gauthier is a Bordeaux red wine label listed with Baron Gauthier Bordeaux and Bordeaux Wine bottles. The style sits in the classic French claret lane, led by dark fruit, cedar and firm table-wine structure.",
    story: "Bordeaux reds are typically built around Cabernet Sauvignon, Merlot and related regional grapes. Baron Gauthier should be chosen as an everyday Bordeaux-style red rather than a single chateau grand cru comparison.",
    tastingNotes: [
      { title: "Dark fruit", description: "Blackcurrant, plum and red cherry form the main fruit profile." },
      { title: "Cedar and tannin", description: "Dry tannin, cedar and light spice make the finish food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool at 16-18 C and give the wine a few minutes in the glass." },
      { subheading: "Food", description: "Pair with mutton seekh, roast chicken, mushroom kebab, lamb curry or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "roast chicken", "mushroom kebab", "lamb curry", "aged cheddar"] }],
    whyChoose: "Baron Gauthier is a practical Bordeaux red for grilled food and steady dinner-table drinking.",
    faqs: [
      { question: "What type of wine is Baron Gauthier?", answer: "It is listed as a Bordeaux red wine." },
      { question: "Should Baron Gauthier be chilled?", answer: "Serve it slightly cool, not warm from a hot room." },
    ],
    finalVerdict: "Baron Gauthier is an easy Bordeaux pick when you want dry red structure with Indian grills.",
    metaTitle: "Baron Gauthier Bordeaux Guide | BevOry",
    metaDescription: "Explore Baron Gauthier Bordeaux notes, serving tips, Indian food pairings and city prices on BevOry.",
  },
  "barrhead-one": {
    description: "Barrhead One is a Speyside single malt Scotch whisky listed in a 700 ml bottle. The profile is light and elegant, with vanilla, honey, cinnamon, caramel and cafe latte notes reported for the expression.",
    story: "Speyside is Scotland's most densely populated malt-whisky region and is known for fruit, honey and polished oak styles. Barrhead One fits that accessible Speyside lane rather than a heavily peated island profile.",
    tastingNotes: [
      { title: "Honeyed nose", description: "Vanilla, honey, cinnamon and caramel lead the aroma." },
      { title: "Soft malt", description: "A rounded malt body and cafe-latte sweetness carry a gentle finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste neat in a tulip glass first, then add a few drops of water if the sweetness feels tight." },
      { subheading: "Food", description: "Pair with malai tikka, roast chicken, almond tart, smoked cheese or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["malai tikka", "roast chicken", "almond tart", "smoked cheese", "salted cashews"] }],
    whyChoose: "Barrhead One is a gentle Speyside malt for drinkers who prefer honeyed whisky over peat smoke.",
    faqs: [
      { question: "What style is Barrhead One?", answer: "It is listed as a Speyside single malt Scotch whisky." },
      { question: "Is Barrhead One smoky?", answer: "Its known profile is honeyed and gentle rather than heavily smoky." },
    ],
    finalVerdict: "Barrhead One is a soft Speyside malt for neat sipping and lighter whisky pairings.",
    metaTitle: "Barrhead One Scotch Guide | BevOry",
    metaDescription: "Explore Barrhead One Speyside single malt notes, serving tips, pairings and city prices on BevOry.",
  },
  batch: {
    description: "Batch is an Indian gin label listed through Batch Garam Masala Gin in a 700 ml bottle. The style combines juniper and citrus with warm spice cues such as cinnamon, cardamom, clove and black pepper.",
    story: "Garam masala gives this gin a clearly Indian flavour idea without moving it away from the gin category. It belongs in spiced G&T, highball and cocktail serves where tonic, lime and ice can carry the botanicals.",
    tastingNotes: [
      { title: "Warm spice", description: "Cardamom, clove, cinnamon and black pepper sit over juniper." },
      { title: "Citrus lift", description: "Lemon peel and light sweetness keep the spice from feeling heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build with ice, chilled tonic and a lime wedge; use a tall glass so the spices open slowly." },
      { subheading: "Food", description: "Pair with tandoori prawns, seekh kebab, masala fries, chilli paneer or lime pickle snacks." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "seekh kebab", "masala fries", "chilli paneer", "lime pickle snacks"] }],
    whyChoose: "Batch Garam Masala Gin gives a familiar G&T format a distinctly Indian spice profile.",
    faqs: [
      { question: "What is Batch Garam Masala Gin?", answer: "It is a flavoured gin built around warm Indian spice notes and juniper." },
      { question: "How should Batch gin be served?", answer: "Serve with tonic, plenty of ice and lime, or use it in spice-friendly cocktails." },
    ],
    finalVerdict: "Batch is the spiced gin choice for drinkers who want masala warmth inside a cold tonic serve.",
    metaTitle: "Batch Garam Masala Gin Guide | BevOry",
    metaDescription: "Explore Batch Garam Masala Gin notes, tonic serves, Indian food pairings and city prices on BevOry.",
  },
  "batch-9": {
    description: "Batch 9 is an Indian whisky label listed in 180 ml, 375 ml and 750 ml bottle formats. The style belongs to made-in-India whisky, built for caramel grain, light oak and simple soda serves.",
    story: "Batch 9 appears as an everyday whisky name rather than a distillery-led single malt. Its strongest buying context is practical: bottle size, city price and performance with ice, water or soda.",
    tastingNotes: [
      { title: "Caramel grain", description: "Caramel, cereal sweetness and vanilla create a soft base." },
      { title: "Light oak", description: "Mild spice and oak warmth make the finish mixer-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, then add water or chilled soda for a longer drink." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, mutton seekh, smoked paneer or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "mutton seekh", "smoked paneer", "chilli cheese toast"] }],
    whyChoose: "Batch 9 is a practical Indian whisky for short pours, soda and spicy snack plates.",
    faqs: [
      { question: "What type of whisky is Batch 9?", answer: "Batch 9 is listed as a made-in-India whisky." },
      { question: "What bottle sizes are listed for Batch 9?", answer: "Current pages show 180 ml, 375 ml and 750 ml formats." },
    ],
    finalVerdict: "Batch 9 is a no-fuss Indian whisky option for casual highballs and grilled snacks.",
    metaTitle: "Batch 9 Whisky Guide | BevOry",
    metaDescription: "Explore Batch 9 whisky notes, serving ideas, bottle formats, snack pairings and city prices on BevOry.",
  },
  "beau-rivage": {
    description: "Beau Rivage is a French Bordeaux red wine label listed with Bordeaux Rouge and Bordeaux Superieur bottles. The wines sit in the Bordeaux-blend family, with Merlot and Cabernet Sauvignon shaping dark fruit, tannin and cedar notes.",
    story: "Beau Rivage Bordeaux Superieur is connected with Bordeaux's regional red-wine tradition. The style is dry, structured and built for food, especially dishes with protein, mushrooms or slow-cooked depth.",
    tastingNotes: [
      { title: "Bordeaux fruit", description: "Blackberry, plum, blackcurrant and violet notes lead the glass." },
      { title: "Cedar finish", description: "Cedar, spice and silky tannin keep the finish dry and dinner-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve at 16-18 C in a red-wine glass; give richer bottles time to breathe." },
      { subheading: "Food", description: "Pair with lamb rogan josh, mushroom galouti, roast chicken, grilled steak or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb rogan josh", "mushroom galouti", "roast chicken", "grilled steak", "aged cheddar"] }],
    whyChoose: "Beau Rivage is a reliable Bordeaux-style red for drinkers who want dry fruit and firm food structure.",
    faqs: [
      { question: "What type of wine is Beau Rivage?", answer: "It is listed as Bordeaux Rouge and Bordeaux Superieur red wine." },
      { question: "What food pairs with Beau Rivage?", answer: "Lamb, mushrooms, roast chicken, steak and aged cheese all suit the style." },
    ],
    finalVerdict: "Beau Rivage is a dinner-first Bordeaux red for richer Indian and continental dishes.",
    metaTitle: "Beau Rivage Bordeaux Guide | BevOry",
    metaDescription: "Explore Beau Rivage Bordeaux notes, serving tips, food pairings and city prices on BevOry.",
  },
  "beau-soleil": {
    description: "Beau Soleil is a French Chardonnay label listed as a 750 ml white wine. The style is built around apple, citrus, white flowers and a clean dry finish rather than heavy sweetness.",
    story: "Beau Soleil Chardonnay connects with French country-wine and Loire Chardonnay traditions. It is best treated as a dry white for seafood, light starters and creamy dishes that need freshness.",
    tastingNotes: [
      { title: "Apple and citrus", description: "Green apple, pear, lemon and light floral notes shape the aroma." },
      { title: "Fresh finish", description: "Clean acidity and moderate body keep the wine bright with food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill to 8-10 C and pour in a medium white-wine glass." },
      { subheading: "Food", description: "Pair with tandoori fish, malai tikka, grilled prawns, creamy pasta or goat cheese salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "malai tikka", "grilled prawns", "creamy pasta", "goat cheese salad"] }],
    whyChoose: "Beau Soleil is a clean Chardonnay for drinkers who want fruit and freshness without a heavy oak feel.",
    faqs: [
      { question: "What grape is Beau Soleil?", answer: "Current listings show Beau Soleil Chardonnay." },
      { question: "How should Beau Soleil Chardonnay be served?", answer: "Serve it chilled around 8-10 C with seafood or creamy starters." },
    ],
    finalVerdict: "Beau Soleil is a fresh white-wine pick for seafood, paneer and lighter meals.",
    metaTitle: "Beau Soleil Chardonnay Guide | BevOry",
    metaDescription: "Explore Beau Soleil Chardonnay notes, serving temperature, food pairings and city prices on BevOry.",
  },
  bedrock: {
    description: "Bedrock is listed as Bedrock Indian Rooted Scotch Whisky in the blended Scotch category. The label points to a Scotch-style whisky framed for Indian drinkers, with malt, grain, caramel and oak as the likely flavour centre.",
    story: "The current catalogue row is a single whisky listing, so the safest comparison is by category and serve. Bedrock belongs beside approachable blended Scotch-style bottles for soda, water and snack-led drinking.",
    tastingNotes: [
      { title: "Malt and caramel", description: "Caramel, cereal grain and light malt sweetness shape the first sip." },
      { title: "Oak spice", description: "Gentle oak, vanilla and warm spice make the finish suitable for highballs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try 30 ml over ice first, then add water or chilled soda for a longer pour." },
      { subheading: "Food", description: "Pair with mutton seekh, tandoori chicken, smoked paneer, masala peanuts or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "tandoori chicken", "smoked paneer", "masala peanuts", "aged cheddar"] }],
    whyChoose: "Bedrock is an approachable Scotch-style whisky for simple pours and bold Indian snacks.",
    faqs: [
      { question: "What is Bedrock whisky?", answer: "It is listed as Bedrock Indian Rooted Scotch Whisky." },
      { question: "How should Bedrock be served?", answer: "Serve with ice, water or soda, then pair with grilled or spicy snacks." },
    ],
    finalVerdict: "Bedrock is best used as an easy whisky highball bottle with savoury food.",
    metaTitle: "Bedrock Scotch Whisky Guide | BevOry",
    metaDescription: "Explore Bedrock Indian Rooted Scotch Whisky notes, serving ideas, pairings and city prices on BevOry.",
  },
  bejois: {
    description: "Bejois is an Indian brandy label associated with Amrut Distilleries and listed with XO and VSOP blended grape brandies. The range is grape-brandy led, with dried fruit, oak and warm spice as the main cues.",
    story: "Bejois has long been recognised as an Indian brandy name. XO and VSOP labels help signal different positioning, but the drinking experience should be matched to the exact bottle.",
    tastingNotes: [
      { title: "Grape brandy fruit", description: "Raisin, plum, caramel and vanilla give the brandy its rounded profile." },
      { title: "Oak warmth", description: "Gentle oak, spice and nuttiness support a smooth after-dinner finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve a small neat pour in a tulip or brandy glass; add a splash of water only if needed." },
      { subheading: "Food", description: "Pair with dark chocolate, fruit cake, roasted almonds, grilled pineapple or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "fruit cake", "roasted almonds", "grilled pineapple", "smoked cheese"] }],
    whyChoose: "Bejois is a recognisable Indian grape brandy option for smoother after-dinner serves.",
    faqs: [
      { question: "Who is Bejois associated with?", answer: "Bejois is associated with Amrut Distilleries." },
      { question: "Which Bejois bottles are listed?", answer: "Current listings include Bejois XO Brandy and Bejois VSOP Blended Grape Brandy." },
    ],
    finalVerdict: "Bejois is a polished Indian brandy choice for neat pours, desserts and relaxed sipping.",
    metaTitle: "Bejois Brandy Guide | BevOry",
    metaDescription: "Explore Bejois XO and VSOP brandy notes, serving ideas, pairings and city prices on BevOry.",
  },
  bela: {
    description: "Bela is listed with Cabernet Sauvignon, Merlot and Chardonnay wines, with South Africa shown on current Cabernet pages. The range covers fuller reds and a round white-wine option in 750 ml formats.",
    story: "Bela reaches BevOry as a grape-led wine label rather than one fixed house style. Cabernet Sauvignon and Merlot cover the red side, while Chardonnay gives the label a white-wine partner for lighter dishes.",
    tastingNotes: [
      { title: "Red wines", description: "Cabernet Sauvignon brings blackberry, cassis and firm tannin, while Merlot leans softer with plum and red cherry." },
      { title: "Chardonnay", description: "Chardonnay adds apple, pear and a rounded texture for creamy or seafood dishes." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Chardonnay to 8-10 C; serve Cabernet and Merlot slightly cool in red-wine glasses." },
      { subheading: "Food", description: "Pair Cabernet with lamb chops, Merlot with mushroom kebab, and Chardonnay with tandoori fish or malai tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "mushroom kebab", "tandoori fish", "malai tikka", "aged cheddar"] }],
    whyChoose: "Bela gives buyers a compact wine range across Cabernet, Merlot and Chardonnay dinner roles.",
    faqs: [
      { question: "Which wines are listed under Bela?", answer: "Current listings include Cabernet Sauvignon, Merlot and Chardonnay." },
      { question: "How should Bela Cabernet be served?", answer: "Serve it slightly cool with lamb, grilled meat or aged cheese." },
    ],
    finalVerdict: "Bela is a practical three-grape wine range for matching red and white bottles to food.",
    metaTitle: "Bela Wine Guide | BevOry",
    metaDescription: "Explore Bela Cabernet, Merlot and Chardonnay notes, serving tips, pairings and city prices on BevOry.",
  },
};
