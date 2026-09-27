import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_110 = [
  ["bowmore", "Bowmore", "Scotland", "Single Malts", "lc-brand-90ae0146801951084eb6325a"],
  ["bruichladdich", "Bruichladdich", "Scotland", "Single Malts", "lc-brand-1b5c31088ff89c2860a37cac"],
  ["buffalo-trace", "Buffalo Trace", "United States", "World Whisky", "lc-brand-b0b68e8258af41cf30242068"],
  ["bulleit", "Bulleit", "United States", "World Whisky", "lc-brand-f8508c31c372363c18b29dc6"],
  ["campari", "Campari", "Italy", "Aperitif", "lc-brand-6163405c7a834f68df51634b"],
  ["cointreau", "Cointreau", "France", "Liqueur", "lc-brand-526e4b017af2bf7caf048b4c"],
  ["ciroc", "Ciroc", "France", "Vodka", "lc-brand-5f54557c7537945f26556265"],
  ["kahlua", "Kahlua", "Mexico", "Liqueur", "lc-brand-afa06d194fbcc82f37c70bca"],
  ["dalwhinnie", "Dalwhinnie", "Scotland", "Single Malts", "lc-brand-ad3286b7bf7c6d8bf8291595"],
  ["glenkinchie", "Glenkinchie", "Scotland", "Single Malts", "lc-brand-2fd33cd69ddc14256394ab87"],
] as const;

export const BRAND_LOGOS_BATCH_110: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_110: Record<string, string[]> = {
  bowmore: [
    "https://www.bowmore.com/en-gb/whiskies/12-year-old",
    "https://www.suntoryglobalspirits.com/our-brands",
  ],
  bruichladdich: [
    "https://www.bruichladdich.com/pages/faqs",
    "https://www.bruichladdich.com/blogs/philosophy/barley",
  ],
  "buffalo-trace": [
    "https://www.buffalotracedistillery.com/our-brands/bourbon/buffalo-trace-bourbon/",
  ],
  bulleit: [
    "https://www.bulleit.com/whiskeys/bulleit-bourbon",
  ],
  campari: [
    "https://www.campari.com/en-us/our-history/",
    "https://www.camparigroup.com/en/page/group/our-story",
  ],
  cointreau: [
    "https://www.cointreau.com/us/en/faq",
    "https://www.cointreau.com/fr/fr/decouvrir-cointreau/histoire",
  ],
  ciroc: [
    "https://www.ciroc.com/en/our-roots",
    "https://www.ciroc.com/en/ciroc-flavours/ciroc-vodka",
  ],
  kahlua: [
    "https://www.kahlua.com/en-us/products/original-coffee-liqueur/",
    "https://www.kahlua.com/en-us/about/",
  ],
  dalwhinnie: [
    "https://www.malts.com/en/products/dalwhinnie-15-year-old-single-malt-scotch-whisky-70cl",
  ],
  glenkinchie: [
    "https://www.malts.com/en/glenkinchie",
  ],
};

export const BRAND_CONTENT_BATCH_110: Record<string, BrandPublicContent> = {
  bowmore: {
    description: "Bowmore is an Islay single malt Scotch whisky from Suntory Global Spirits. Its 12-year-old expression is a benchmark for the house style, matured in American oak ex-bourbon and European oak Oloroso sherry casks.",
    story: "Bowmore is tied closely to the island landscape of Islay and presents its whisky around balance rather than brute smoke. The 12-year-old bottling shows the distillery's familiar mix of citrus, heather honey, soft peat and sherry-cask depth.",
    tastingNotes: [
      { title: "Lemon And Honey", description: "Fresh lemon juice, heather honey and gentle earthy smoke lead the nose." },
      { title: "Fruit And Smoke", description: "Warm fruit, dark chocolate and sweet smoke build through a lingering finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass, then add a few drops of water if you want softer smoke." },
      { subheading: "Food", description: "Pair with smoked fish, tandoori prawns, lamb kebab, dark chocolate or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked fish", "tandoori prawns", "lamb kebab", "dark chocolate", "aged cheddar"] }],
    whyChoose: "Bowmore is a classic Islay pick for drinkers who want peat smoke balanced by citrus, honey and sherry-cask fruit.",
    faqs: [
      { question: "What style is Bowmore 12?", answer: "Bowmore 12 is an Islay single malt Scotch with lemon, honey, soft smoke and sherry-cask warmth." },
      { question: "Which casks are used for Bowmore 12?", answer: "Bowmore 12 uses American oak ex-bourbon casks and European oak Oloroso sherry casks." },
    ],
    finalVerdict: "Bowmore is a reliable Islay malt for smoke, fruit and coastal warmth without overwhelming the glass.",
    metaTitle: "Bowmore Single Malt Guide | BevOry",
    metaDescription: "Explore Bowmore Islay whisky notes, cask style, food pairings and city prices.",
  },
  bruichladdich: {
    description: "Bruichladdich is an Islay single malt Scotch whisky distillery known for unpeated Bruichladdich releases, heavily peated Port Charlotte and super-heavily peated Octomore. The core Bruichladdich style is unpeated and built around Scottish barley provenance.",
    story: "Bruichladdich keeps distillation, maturation and bottling on Islay and speaks openly about barley, origin and terroir. Its barley work includes Islay Barley, Bere Barley and Organic Barley releases, with a significant share of barley grown on Islay farms.",
    tastingNotes: [
      { title: "Classic Laddie Style", description: "Cereal sweetness, orchard fruit, floral lift and coastal freshness define the unpeated side." },
      { title: "Peated Family", description: "Port Charlotte and Octomore bring smoke, sea air, malt sweetness and heavier peat intensity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a nosing glass; add water slowly to open the barley and coastal notes." },
      { subheading: "Food", description: "Pair unpeated Bruichladdich with grilled fish or paneer tikka; pair peated releases with smoked meats, kebabs or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "paneer tikka", "smoked meats", "mutton kebab", "dark chocolate"] }],
    whyChoose: "Bruichladdich is ideal for drinkers who care about Islay provenance, barley detail and both unpeated and peated styles.",
    faqs: [
      { question: "Is Bruichladdich peated?", answer: "Bruichladdich-branded single malts are unpeated; Port Charlotte and Octomore are the peated lines from the same distillery." },
      { question: "Where is Bruichladdich made?", answer: "Bruichladdich is distilled, matured and bottled on Islay." },
    ],
    finalVerdict: "Bruichladdich gives Islay drinkers a broader view of the island through barley, texture and carefully separated peat styles.",
    metaTitle: "Bruichladdich Whisky Guide | BevOry",
    metaDescription: "Explore Bruichladdich Islay whisky notes, barley focus, peat styles and city prices.",
  },
  "buffalo-trace": {
    description: "Buffalo Trace is a Kentucky Straight Bourbon Whiskey from Buffalo Trace Distillery. It is the distillery's flagship bourbon, made from Mash Bill #1 and aged in new charred oak barrels.",
    story: "The name refers to ancient buffalo paths that helped guide early pioneers west, including a trail through the Kentucky distillery site. The brand carries over two centuries of distilling heritage in Frankfort, Kentucky.",
    tastingNotes: [
      { title: "Vanilla And Molasses", description: "Vanilla, mint, molasses and brown sugar shape the aroma." },
      { title: "Oak And Toffee", description: "Spice, oak, toffee, dark fruit and anise carry a long, smooth finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, on a large cube, or in an Old Fashioned." },
      { subheading: "Food", description: "Pair with barbecue ribs, butter chicken, pecan pie, smoked almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue ribs", "butter chicken", "pecan pie", "smoked almonds", "dark chocolate"] }],
    whyChoose: "Buffalo Trace is a dependable Kentucky bourbon with sweet oak, spice and enough depth for sipping or cocktails.",
    faqs: [
      { question: "What mash bill is Buffalo Trace?", answer: "Buffalo Trace Bourbon uses the distillery's Mash Bill #1." },
      { question: "What does Buffalo Trace taste like?", answer: "Expect vanilla, mint, molasses, brown sugar, oak, toffee, dark fruit and anise." },
    ],
    finalVerdict: "Buffalo Trace is a go-to bourbon for drinkers who want classic Kentucky sweetness with real oak structure.",
    metaTitle: "Buffalo Trace Bourbon Guide | BevOry",
    metaDescription: "Explore Buffalo Trace bourbon notes, Mash Bill #1, cocktail serves, pairings and city prices.",
  },
  bulleit: {
    description: "Bulleit Bourbon is a Kentucky Straight Bourbon Whiskey from The Bulleit Distilling Co. in Louisville. It is known for a high-rye recipe that gives the bourbon a bold, spicy character.",
    story: "Bulleit links its modern bourbon to an old family recipe from more than 150 years ago. The liquid uses rye, corn, barley malt, selected yeast and Kentucky limestone-filtered water.",
    tastingNotes: [
      { title: "High-Rye Spice", description: "Sweet oak, gentle spice and nutmeg lead the aroma." },
      { title: "Maple And Toffee", description: "Maple, oak, nutmeg and light toffee finish long, dry and satiny." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, over ice, in an Old Fashioned or in a whiskey highball." },
      { subheading: "Food", description: "Pair with smoked chicken, seekh kebab, grilled corn, pecan pie or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "seekh kebab", "grilled corn", "pecan pie", "aged cheddar"] }],
    whyChoose: "Bulleit is a strong choice when you want bourbon sweetness sharpened by rye spice.",
    faqs: [
      { question: "What makes Bulleit Bourbon spicy?", answer: "Bulleit uses a high-rye bourbon recipe, which gives it a bolder spice profile." },
      { question: "Where is Bulleit Bourbon produced?", answer: "Bulleit Bourbon is associated with The Bulleit Distilling Co. in Louisville, Kentucky." },
    ],
    finalVerdict: "Bulleit is a versatile high-rye bourbon for cocktails, ice serves and spice-friendly food.",
    metaTitle: "Bulleit Bourbon Guide | BevOry",
    metaDescription: "Explore Bulleit high-rye bourbon notes, serving ideas, food pairings and city prices.",
  },
  campari: {
    description: "Campari is an Italian bitter aperitif created by Gaspare Campari in 1860. Its vivid red colour and bittersweet herbal-fruit character made it a foundation of Milanese aperitivo culture.",
    story: "Campari grew from Gaspare Campari's work as a liquorist and later found a home in Milan's Galleria Vittorio Emanuele II at Caffe Campari. The brand became central to classic cocktails such as the Negroni, Americano and Campari Spritz.",
    tastingNotes: [
      { title: "Bitter Red Aperitif", description: "Orange peel, herbs, roots and bitter red fruit form the signature profile." },
      { title: "Sweet-Bitter Finish", description: "The palate is sharp, bittersweet and drying, with citrus and herbal persistence." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, in a Negroni, Americano or Spritz, always over good ice." },
      { subheading: "Food", description: "Pair with olives, salted almonds, bruschetta, fried prawns or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["olives", "salted almonds", "bruschetta", "fried prawns", "chilli cheese toast"] }],
    whyChoose: "Campari is the bitter red aperitif to reach for when you want a serious Negroni or bright pre-dinner drink.",
    faqs: [
      { question: "Who created Campari?", answer: "Gaspare Campari created Campari in 1860." },
      { question: "What cocktails use Campari?", answer: "Campari is central to the Negroni, Americano and Campari Spritz." },
    ],
    finalVerdict: "Campari is essential for bitter aperitif lovers and anyone building classic Italian cocktails.",
    metaTitle: "Campari Aperitif Guide | BevOry",
    metaDescription: "Explore Campari bitter aperitif notes, Milan history, cocktails, pairings and city prices.",
  },
  cointreau: {
    description: "Cointreau is a French orange liqueur from the Cointreau family house, founded in Angers in 1849. Edouard Cointreau created the balanced orange liqueur recipe in the late nineteenth century.",
    story: "Cointreau built its reputation on orange expertise, using sweet and bitter orange character in a clear, concentrated liqueur. It remains a core ingredient in cocktails such as the Margarita, Cosmopolitan and Sidecar.",
    tastingNotes: [
      { title: "Orange Peel", description: "Fresh orange zest, bitter peel and floral citrus oil lead the aroma." },
      { title: "Clean Sweetness", description: "The palate is bright and balanced, with sweetness checked by bitter-orange lift." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use in Margaritas, Cosmopolitans, Sidecars or a simple orange spritz." },
      { subheading: "Food", description: "Pair with orange cake, dark chocolate, crepes, chilli prawns or duck pancakes." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["orange cake", "dark chocolate", "crepes", "chilli prawns", "duck pancakes"] }],
    whyChoose: "Cointreau is a precise orange liqueur for cocktails that need citrus intensity without heavy syrupiness.",
    faqs: [
      { question: "Where is Cointreau from?", answer: "Cointreau is from Angers, France." },
      { question: "Which cocktails use Cointreau?", answer: "Cointreau is widely used in Margaritas, Cosmopolitans and Sidecars." },
    ],
    finalVerdict: "Cointreau is a cocktail staple for clean orange flavour, structure and bright citrus lift.",
    metaTitle: "Cointreau Liqueur Guide | BevOry",
    metaDescription: "Explore Cointreau orange liqueur notes, French history, cocktails, pairings and city prices.",
  },
  ciroc: {
    description: "Ciroc is a French vodka distilled from fine French grapes rather than grain or potatoes. It is five-times distilled, with the final distillation at Maison Villevert in southern France.",
    story: "Ciroc draws on French winemaking heritage through grape varieties associated with wine regions such as Gaillac and Cognac. The brand is known for a fresh citrus profile and a wide line of flavoured vodka expressions.",
    tastingNotes: [
      { title: "Grape Vodka", description: "Clean grape spirit, citrus peel and light fruit sweetness define the core vodka." },
      { title: "Fresh Finish", description: "The finish is smooth, bright and lightly fruity rather than grain-heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda, tonic, lemonade or in fruit-forward vodka cocktails." },
      { subheading: "Food", description: "Pair with sushi, tandoori prawns, fried momos, chilli paneer or citrus salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "tandoori prawns", "fried momos", "chilli paneer", "citrus salad"] }],
    whyChoose: "Ciroc stands out for its French grape base and polished, fruit-led vodka style.",
    faqs: [
      { question: "What is Ciroc made from?", answer: "Ciroc is made from fine French grapes." },
      { question: "How many times is Ciroc distilled?", answer: "Ciroc is distilled five times." },
    ],
    finalVerdict: "Ciroc is a sleek vodka choice for chilled highballs, fruit cocktails and clean party serves.",
    metaTitle: "Ciroc Vodka Guide | BevOry",
    metaDescription: "Explore Ciroc French grape vodka notes, five-time distillation, pairings and city prices.",
  },
  kahlua: {
    description: "Kahlua is a Mexican rum and coffee liqueur created in 1936. The original expression is made with 100% Arabica coffee beans and is best known in White Russians and Espresso Martinis.",
    story: "Kahlua's identity sits around Mexico, coffee and rum, making it one of the world's most recognised coffee liqueurs. The range also includes flavour extensions, but the original remains the cocktail workhorse.",
    tastingNotes: [
      { title: "Coffee And Rum", description: "Roasted coffee, brown sugar, vanilla and gentle rum sweetness lead the aroma." },
      { title: "Dessert Finish", description: "The palate is rich and smooth, with mocha, caramel and coffee bitterness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use in White Russians, Espresso Martinis, coffee cocktails or over ice cream." },
      { subheading: "Food", description: "Pair with tiramisu, chocolate cake, gulab jamun, vanilla ice cream or salted brownies." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tiramisu", "chocolate cake", "gulab jamun", "vanilla ice cream", "salted brownies"] }],
    whyChoose: "Kahlua is the coffee liqueur to keep handy for creamy cocktails, dessert serves and espresso-led drinks.",
    faqs: [
      { question: "Where is Kahlua from?", answer: "Kahlua was created in Mexico in 1936." },
      { question: "What is Kahlua made with?", answer: "Kahlua Original combines rum and 100% Arabica coffee beans." },
    ],
    finalVerdict: "Kahlua is a dependable coffee liqueur for cocktails that need sweetness, roast and dessert depth.",
    metaTitle: "Kahlua Coffee Liqueur Guide | BevOry",
    metaDescription: "Explore Kahlua coffee liqueur notes, Mexican origin, cocktail uses and city prices.",
  },
  dalwhinnie: {
    description: "Dalwhinnie is a Highland single malt Scotch whisky from one of Scotland's highest and coldest distilleries. Dalwhinnie 15 Year Old is known for smooth heather honey, clean malt and gentle smoky warmth.",
    story: "The distillery was founded at the end of the nineteenth century and is positioned as an accessible introduction to single malt. Its cold Highland setting supports a crisp, aromatic style with honeyed sweetness.",
    tastingNotes: [
      { title: "Heather Honey", description: "A crisp aromatic nose carries heather, honey and a light touch of peat." },
      { title: "Malt And Smoke", description: "Vanilla, citrus fruit, malted bread and a long smoky finish shape the palate." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, chilled or with a little still spring water." },
      { subheading: "Food", description: "Pair with smoked trout, roast chicken, paneer tikka, shortbread or honey cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked trout", "roast chicken", "paneer tikka", "shortbread", "honey cake"] }],
    whyChoose: "Dalwhinnie is a gentle Highland malt for drinkers who want honey, malt and a restrained smoky finish.",
    faqs: [
      { question: "What is Dalwhinnie 15 known for?", answer: "Dalwhinnie 15 is known for heather honey, vanilla, citrus, malted bread and soft smoke." },
      { question: "How should Dalwhinnie be served?", answer: "Serve it neat, chilled or with a little still water." },
    ],
    finalVerdict: "Dalwhinnie is an easy Highland single malt for relaxed sipping and honeyed food pairings.",
    metaTitle: "Dalwhinnie Single Malt Guide | BevOry",
    metaDescription: "Explore Dalwhinnie Highland whisky notes, 15-year style, pairings and city prices.",
  },
  glenkinchie: {
    description: "Glenkinchie is a Lowland single malt Scotch whisky from East Lothian, about fifteen miles from Edinburgh. Known as The Edinburgh Malt, it is one of the few surviving Lowland distilleries.",
    story: "Glenkinchie has been part of the Scottish Lowlands since 1825 and takes its name from the Kinchie Burn. The distillery uses traditional worm tubs and is known for a light profile with floral and creamy notes.",
    tastingNotes: [
      { title: "Lowland Florals", description: "Fresh flowers, cut grass, cereal and gentle citrus define the light side of Glenkinchie." },
      { title: "Creamy Malt", description: "Soft vanilla, biscuit and orchard fruit give the whisky its rounded finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass or with a small splash of water." },
      { subheading: "Food", description: "Pair with sushi, shellfish, grilled prawns, lemon chicken or soft goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "shellfish", "grilled prawns", "lemon chicken", "soft goat cheese"] }],
    whyChoose: "Glenkinchie is a clean Lowland malt for drinkers who prefer flowers, cream and light cereal over heavy smoke.",
    faqs: [
      { question: "Where is Glenkinchie Distillery?", answer: "Glenkinchie is in East Lothian, around fifteen miles from Edinburgh." },
      { question: "Why is Glenkinchie called The Edinburgh Malt?", answer: "Its proximity to Edinburgh earned it the nickname The Edinburgh Malt." },
    ],
    finalVerdict: "Glenkinchie is a refined Lowland pour for seafood, light meals and softer whisky moods.",
    metaTitle: "Glenkinchie Single Malt Guide | BevOry",
    metaDescription: "Explore Glenkinchie Lowland whisky notes, Edinburgh Malt history and city prices.",
  },
};
