import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_109 = [
  ["altamura", "Altamura", "Italy", "Vodka", "lc-brand-66f40fff5f0447c6f136e77d"],
  ["altano", "Altano", "Portugal", "Wine", "lc-brand-fe4901e6a40cc69a4a47ab89"],
  ["anakena-birdman", "Anakena Birdman", "Chile", "Wine", "lc-brand-9f070df4f7f35dcbc87eb8a1"],
  ["antigal-uno", "Antigal UNO", "Argentina", "Wine", "lc-brand-5714ede1544d7939dbd19bcc"],
  ["archers", "Archers", "United Kingdom", "Liqueur", "lc-brand-16970d112808f59ee01adfa6"],
  ["ardmore", "Ardmore", "Scotland", "Single Malts", "lc-brand-2c95982e95867d1b8c926f55"],
  ["argento", "Argento", "Argentina", "Wine", "lc-brand-7a9432116f6fc337d0a8d508"],
  ["armand-de-brignac", "Armand de Brignac", "France", "Champagne", "lc-brand-275275c2708d20e77ce59be5"],
  ["aultmore", "Aultmore", "Scotland", "Single Malts", "lc-brand-2616b823c091201ade5aa347"],
  ["balblair", "Balblair", "Scotland", "Single Malts", "lc-brand-fe8703bdec4c0d30e63dc75e"],
] as const;

export const BRAND_LOGOS_BATCH_109: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_109: Record<string, string[]> = {
  altamura: [
    "https://www.altamuradistilleries.com/en/premium-vodka/",
    "https://www.altamuradistilleries.com/en/about-us/",
  ],
  altano: [
    "https://www.symington.com/brand/altano",
    "https://en.altano.pt/wines",
    "https://en.altano.pt/vineyards",
  ],
  "anakena-birdman": [
    "https://anakenawines.com/en-gb",
    "https://www.bevory.in/agra/brand/anakena-birdman",
  ],
  "antigal-uno": [
    "https://www.antigal.com/our-story/",
    "https://www.antigal.com/wp-content/uploads/tech-sheets/Tech-sheet_UNO-Malbec-2018.pdf",
  ],
  archers: [
    "https://archers.com/products/archers/",
    "https://www.dekuypercompany.com/2022/09/cocktail-liqueur-expert-de-kuyper-royal-distillers-strengthens-leading-position-by-acquiring-british-peach-liqueur-legend-archers/",
    "https://www.diageo.com/en/news-and-media/press-releases/2022/diageo-completes-sale-of-archers-brand-to-de-kuyper-royal-distillers",
  ],
  ardmore: [
    "https://www.ardmorewhisky.com/",
    "https://www.suntoryglobalspirits.com/our-brands",
  ],
  argento: [
    "https://argentowine.com/wines/argento/",
    "https://bodegaargento.com/assets/files/usa/wines/sheet/Estate-Bottled/Estate-Bottled-Organic-Malbec-2020-USA.pdf",
  ],
  "armand-de-brignac": [
    "https://www.lvmh.com/en/our-maisons/wines-spirits/armand-de-brignac",
    "https://www.armanddebrignac.com/inside-armand-de-brignac/",
  ],
  aultmore: [
    "https://www.aultmore.com/",
    "https://shop.dewars.com/products/aultmore-12-year-old-whisky",
    "https://www.bacardilimited.com/media/news-archive/bacardi-owned-aultmore-distillery-celebrates-125th-anniversary-with-15m-expansion-plan/",
  ],
  balblair: [
    "https://www.balblair.com/",
    "https://www.balblair.com/collection",
  ],
};

export const BRAND_CONTENT_BATCH_109: Record<string, BrandPublicContent> = {
  altamura: {
    description: "Altamura is an Italian vodka from Altamura Distilleries in Puglia. It is distilled entirely from 100% Altamura durum wheat, the same regional wheat tied to Pane di Altamura PDO bread.",
    story: "Altamura Distilleries was founded by Americans who moved to Puglia and built a spirits project around local wheat. The vodka is triple distilled, bottled at 43% ABV and designed to express the cereal character of the Altamura region.",
    tastingNotes: [
      { title: "Durum Wheat", description: "Soft nutty aromas, gentle spice and cereal sweetness open the glass." },
      { title: "Creamy Finish", description: "Vanilla, lemon, grapefruit and a faint aniseed note finish clean and warming." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve freezer-cold neat, in a vodka martini or with soda and grapefruit peel." },
      { subheading: "Food", description: "Pair with burrata, smoked salmon, tandoori prawns, sushi or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["burrata", "smoked salmon", "tandoori prawns", "sushi", "chilli paneer"] }],
    whyChoose: "Altamura stands apart for its Puglian durum wheat base and fuller, savoury vodka texture.",
    faqs: [
      { question: "Where is Altamura vodka from?", answer: "Altamura vodka is from Puglia in southern Italy." },
      { question: "What is Altamura vodka made from?", answer: "It is made from 100% Altamura durum wheat." },
    ],
    finalVerdict: "Altamura is a polished Italian vodka for drinkers who want clean spirit with real wheat character.",
    metaTitle: "Altamura Vodka Guide | BevOry",
    metaDescription: "Explore Altamura Italian vodka notes, Puglia wheat, serving ideas, pairings and city prices.",
  },
  altano: {
    description: "Altano is a Douro DOC wine range from Symington Family Estates in Portugal. It covers red, white, reserve and organic wines made from traditional Portuguese grape varieties.",
    story: "The Symington family began making modern Douro table wines in the 1990s using vineyards and grapes long associated with great port. Altano's first red was released in 1999, and the range now draws on the family's Douro quintas and high-altitude white-wine sources.",
    tastingNotes: [
      { title: "Douro Reds", description: "Touriga Franca, Tinta Roriz and Tinta Barroca bring plum, berry fruit, spice and ripe tannins." },
      { title: "Fresh Whites", description: "Viosinho, Arinto and Gouveio give citrus, apple, wildflower and a clean mineral edge." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and reds slightly cool between 14 and 17°C." },
      { subheading: "Food", description: "Pair reds with lamb chops or rogan josh; pair whites with tandoori fish, roast chicken or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "rogan josh", "tandoori fish", "roast chicken", "goat cheese"] }],
    whyChoose: "Altano is a strong entry into Douro table wine from one of Portugal's most important wine families.",
    faqs: [
      { question: "Who makes Altano wine?", answer: "Altano is made by Symington Family Estates." },
      { question: "Where is Altano wine produced?", answer: "Altano comes from the Douro region of northern Portugal." },
    ],
    finalVerdict: "Altano gives Douro structure, native grapes and everyday food flexibility in one clear range.",
    metaTitle: "Altano Douro Wine Guide | BevOry",
    metaDescription: "Explore Altano Douro wine notes, Symington vineyards, grape varieties and city prices.",
  },
  "anakena-birdman": {
    description: "Anakena Birdman is a Chilean wine line associated with the Anakena brand. BevOry lists Birdman Cabernet Sauvignon, Sauvignon Blanc and Shiraz in 750ml bottles.",
    story: "The Anakena name is linked to Rapa Nui culture and the birdman legend, giving the Chilean brand its island-inspired identity. The Birdman range keeps the focus on approachable varietal wines from Chile.",
    tastingNotes: [
      { title: "Cabernet And Shiraz", description: "Blackcurrant, plum, pepper and soft oak give the red wines a warm, fruit-led shape." },
      { title: "Sauvignon Blanc", description: "Citrus, green apple and tropical lift keep the white wine fresh and easy to pour." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc chilled; serve reds slightly cool in medium red-wine glasses." },
      { subheading: "Food", description: "Pair Cabernet or Shiraz with seekh kebab, mushroom tikka or grilled lamb; pair Sauvignon Blanc with fish tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "mushroom tikka", "grilled lamb", "fish tikka", "herb chicken"] }],
    whyChoose: "Anakena Birdman is useful for simple Chilean varietal wines with clear red and white choices.",
    faqs: [
      { question: "What Anakena Birdman wines are on BevOry?", answer: "BevOry lists Cabernet Sauvignon, Sauvignon Blanc and Shiraz." },
      { question: "What is the Anakena Birdman style?", answer: "It is a fruit-forward Chilean varietal range built for easy drinking." },
    ],
    finalVerdict: "Anakena Birdman is a practical Chilean wine pick for casual dinners and mixed red-white preferences.",
    metaTitle: "Anakena Birdman Wine Guide | BevOry",
    metaDescription: "Explore Anakena Birdman Chilean wine notes, varietal styles, pairings and city prices.",
  },
  "antigal-uno": {
    description: "Antigal UNO is an Argentine wine range from Antigal Winery & Estates in Mendoza. The signature UNO bottle is best known for Malbec and its metal number 1 label.",
    story: "Antigal's Mendoza winery dates to 1897 and was refurbished in 2000 by Bormida & Yanzon. The first UNO wine appeared in 2005, when barrel hoops were shaped into the number 1 that still marks the bottle.",
    tastingNotes: [
      { title: "UNO Malbec", description: "Plum, strawberry, blackberry, violet, vanilla and milk chocolate give the wine plush Mendoza depth." },
      { title: "Soft Structure", description: "Hand-selected Uco Valley fruit and gentle winemaking create rounded tannins and ripe fruit." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a broad red-wine glass and let it breathe briefly." },
      { subheading: "Food", description: "Pair with asado-style beef, galouti kebab, mutton seekh, grilled mushrooms or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["asado-style beef", "galouti kebab", "mutton seekh", "grilled mushrooms", "aged cheddar"] }],
    whyChoose: "Antigal UNO is a polished Mendoza Malbec with a memorable bottle and ripe, generous fruit.",
    faqs: [
      { question: "Where is Antigal UNO from?", answer: "Antigal UNO comes from Mendoza, Argentina." },
      { question: "Why does Antigal UNO have a number 1?", answer: "The first UNO bottles were marked with a number 1 cut from metal barrel hoops." },
    ],
    finalVerdict: "Antigal UNO is built for Malbec drinkers who like dark fruit, soft tannin and a bold table presence.",
    metaTitle: "Antigal UNO Malbec Guide | BevOry",
    metaDescription: "Explore Antigal UNO Mendoza Malbec notes, winery history, food pairings and city prices.",
  },
  archers: {
    description: "Archers is a British peach schnapps brand now owned by De Kuyper Royal Distillers. It is an 18% ABV peach liqueur made for fruity mixed drinks.",
    story: "Diageo completed the sale of Archers to De Kuyper in 2022. De Kuyper added the brand to its liqueur portfolio to strengthen its position in peach liqueurs, especially in the UK cocktail market.",
    tastingNotes: [
      { title: "Peach Liqueur", description: "Sweet peach, soft fruit candy and gentle spirit warmth define the aroma." },
      { title: "Easy Mixer", description: "The palate is smooth, juicy and simple, built for lemonade, soda and fruit-forward cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with lemonade, soda, cranberry juice or orange juice over plenty of ice." },
      { subheading: "Food", description: "Pair with spicy wings, chilli paneer, fruit chaat, cheesecake or vanilla ice cream." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["spicy wings", "chilli paneer", "fruit chaat", "cheesecake", "vanilla ice cream"] }],
    whyChoose: "Archers is a familiar peach schnapps for bright, sweet, low-effort party serves.",
    faqs: [
      { question: "Who owns Archers?", answer: "Archers is owned by De Kuyper Royal Distillers." },
      { question: "What is Archers?", answer: "Archers is a peach schnapps liqueur bottled at 18% ABV." },
    ],
    finalVerdict: "Archers is best for peachy long drinks, fruit cocktails and dessert-friendly casual pours.",
    metaTitle: "Archers Peach Schnapps Guide | BevOry",
    metaDescription: "Explore Archers peach schnapps notes, De Kuyper ownership, mixers, pairings and city prices.",
  },
  ardmore: {
    description: "Ardmore is a peated Highland single malt Scotch whisky owned by Suntory Global Spirits. The distillery is known for linking Highland malt character with local peat smoke.",
    story: "Ardmore was founded in 1898 and has long supplied the smoky backbone for Teacher's Highland Cream. The official brand presents Ardmore as a peated single malt shaped by its Highland landscape and wildlife.",
    tastingNotes: [
      { title: "Highland Peat", description: "Smoke, honeyed malt, heather, citrus peel and soft cereal notes lead the style." },
      { title: "Clean Smoke", description: "The finish is warming and smoky without the heavy medicinal weight of coastal Islay malts." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass, then add a few drops of water if the smoke feels tight." },
      { subheading: "Food", description: "Pair with smoked chicken, tandoori lamb, grilled mushrooms, aged cheddar or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "tandoori lamb", "grilled mushrooms", "aged cheddar", "dark chocolate"] }],
    whyChoose: "Ardmore is a smart Highland choice when you want peat smoke with malt sweetness and lighter coastal intensity.",
    faqs: [
      { question: "Is Ardmore whisky peated?", answer: "Yes, Ardmore is known as a peated Highland single malt." },
      { question: "Who owns Ardmore?", answer: "Ardmore is part of Suntory Global Spirits." },
    ],
    finalVerdict: "Ardmore gives peat fans a Highland path into smoke, malt and spice.",
    metaTitle: "Ardmore Single Malt Guide | BevOry",
    metaDescription: "Explore Ardmore Highland single malt notes, peated style, food pairings and city prices.",
  },
  argento: {
    description: "Argento is an Argentine wine range rooted in Mendoza. It was launched to bring a brighter, fruit-pure style of Malbec to international wine drinkers.",
    story: "The Argento range now covers Malbec, Bonarda, Cabernet Sauvignon, Shiraz, rosé, Chardonnay, Pinot Grigio, Sauvignon Blanc and Torrontés. The house style centres on fruit purity, vibrancy and clear varietal expression.",
    tastingNotes: [
      { title: "Malbec And Reds", description: "Black plum, blackberry, violet and soft spice define the red-wine core." },
      { title: "Whites And Rosé", description: "Chardonnay, Pinot Grigio, Sauvignon Blanc and Torrontés bring citrus, pear, florals and fresh acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and Malbec slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair Malbec with grilled lamb, mutton seekh or rajma; pair whites with sushi, tandoori fish or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled lamb", "mutton seekh", "rajma", "sushi", "tandoori fish"] }],
    whyChoose: "Argento is a reliable Mendoza wine range for fruit-driven Malbec and clean, bright whites.",
    faqs: [
      { question: "Where is Argento wine from?", answer: "Argento is from Mendoza, Argentina." },
      { question: "What is Argento best known for?", answer: "Argento is best known for vibrant, fruit-forward Argentine Malbec." },
    ],
    finalVerdict: "Argento is an easy Mendoza choice when you want generous fruit, clear varietal character and food flexibility.",
    metaTitle: "Argento Wine Guide | BevOry",
    metaDescription: "Explore Argento Mendoza wine notes, Malbec style, white varietals, pairings and city prices.",
  },
  "armand-de-brignac": {
    description: "Armand de Brignac is a prestige Champagne house connected with Shawn JAY-Z Carter and Moët Hennessy. Its cuvées are made with the Cattier family, whose Champagne craft spans more than 250 years.",
    story: "The brand came to prominence in 2006 and is now a joint venture between Shawn Carter and Moët Hennessy. Each signature cuvée blends three vintages and is presented in metallized bottles with hand-applied French pewter labels.",
    tastingNotes: [
      { title: "Brut Gold Style", description: "Citrus, white peach, brioche, almond and fine bubbles give the flagship style its polish." },
      { title: "Prestige Texture", description: "The palate is creamy, precise and layered, with freshness balancing the richer Champagne notes." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a tulip Champagne glass rather than a wide coupe." },
      { subheading: "Food", description: "Pair with oysters, tandoori prawns, fried chicken, caviar, sushi or triple-cream cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["oysters", "tandoori prawns", "fried chicken", "caviar", "sushi"] }],
    whyChoose: "Armand de Brignac is for drinkers who want prestige Champagne with strong visual identity and Cattier winemaking depth.",
    faqs: [
      { question: "Who makes Armand de Brignac?", answer: "Armand de Brignac is crafted with the Cattier family and is a joint venture with Moët Hennessy." },
      { question: "What is special about Armand de Brignac bottles?", answer: "The bottles are metallized and finished with hand-applied French pewter labels." },
    ],
    finalVerdict: "Armand de Brignac is a statement Champagne for polished celebrations and rich, salty food pairings.",
    metaTitle: "Armand de Brignac Champagne Guide | BevOry",
    metaDescription: "Explore Armand de Brignac Champagne notes, Cattier craft, pairings and city prices.",
  },
  aultmore: {
    description: "Aultmore is a Speyside single malt Scotch whisky owned by Bacardi through John Dewar & Sons. The distillery was founded in 1897 by Alexander Edward during the late-Victorian whisky boom.",
    story: "Aultmore has long been prized by blenders and is known by the Foggie Moss nickname. The 12-year-old expression highlights a fresh, grassy and herbal house style, usually shown through refill-cask maturation.",
    tastingNotes: [
      { title: "Speyside Orchard", description: "Crisp apple, ripe pear, soft fruit and light cereal sweetness lead the aroma." },
      { title: "Herbal Finish", description: "Rosemary, thyme, delicate flowers and silky malt carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass or with a few drops of water." },
      { subheading: "Food", description: "Pair with roast chicken, paneer tikka, apple tart, smoked almonds or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["roast chicken", "paneer tikka", "apple tart", "smoked almonds", "aged cheddar"] }],
    whyChoose: "Aultmore is a clean Speyside malt for drinkers who prefer grassy freshness over heavy sherry or peat.",
    faqs: [
      { question: "Where is Aultmore whisky from?", answer: "Aultmore is a Speyside single malt Scotch whisky." },
      { question: "Who owns Aultmore?", answer: "Aultmore is owned by Bacardi through John Dewar & Sons." },
    ],
    finalVerdict: "Aultmore is a graceful Speyside pour for light fruit, herbs and a clean malt finish.",
    metaTitle: "Aultmore Single Malt Guide | BevOry",
    metaDescription: "Explore Aultmore Speyside whisky notes, Foggie Moss history, pairings and city prices.",
  },
  balblair: {
    description: "Balblair is a Highland single malt Scotch whisky from Edderton in Ross-shire. The distillery dates to 1790 and is owned by Inver House Distillers under International Beverage.",
    story: "Balblair presents itself around small-batch releases made only when the whisky is ready. Its Highland distillery sits near the Dornoch Firth at the foot of Struie Hill, with a core collection built around age-stated single malts.",
    tastingNotes: [
      { title: "Highland Fruit", description: "Pineapple, orchard fruit, vanilla and baking spice give Balblair its layered character." },
      { title: "Cask Warmth", description: "Creamy malt, toasted oak, dark chocolate and gentle spice build through the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a nosing glass, with water on the side." },
      { subheading: "Food", description: "Pair with tandoori chicken, grilled prawns, apple crumble, dark chocolate or Gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "grilled prawns", "apple crumble", "dark chocolate", "Gouda"] }],
    whyChoose: "Balblair is a Highland malt for drinkers who like fruit, spice and patient cask-driven depth.",
    faqs: [
      { question: "When was Balblair founded?", answer: "Balblair was founded in 1790." },
      { question: "Where is Balblair Distillery?", answer: "Balblair is in Edderton, Ross-shire, overlooking the Dornoch Firth area." },
    ],
    finalVerdict: "Balblair delivers classic Highland malt character with fruit, vanilla and slow-building spice.",
    metaTitle: "Balblair Single Malt Guide | BevOry",
    metaDescription: "Explore Balblair Highland whisky notes, 1790 distillery history, pairings and city prices.",
  },
};
