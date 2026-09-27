import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_125 = [
  ["antigal-uno", "Antigal UNO", "Argentina", "Wine", "lc-brand-5714ede1544d7939dbd19bcc"],
  ["archers", "Archers", "United Kingdom", "Liqueur", "lc-brand-16970d112808f59ee01adfa6"],
  ["ardmore", "Ardmore", "Scotland", "Single Malts", "lc-brand-2c95982e95867d1b8c926f55"],
  ["argento", "Argento", "Argentina", "Wine", "lc-brand-7a9432116f6fc337d0a8d508"],
  ["armand-de-brignac", "Armand de Brignac", "France", "Champagne", "lc-brand-275275c2708d20e77ce59be5"],
  ["aultmore", "Aultmore", "Scotland", "Single Malts", "lc-brand-2616b823c091201ade5aa347"],
  ["balblair", "Balblair", "Scotland", "Single Malts", "lc-brand-fe8703bdec4c0d30e63dc75e"],
  ["four-seasons", "Four Seasons", "India", "Wine", "brand-expansion-four-seasons"],
  ["vallonne", "Vallonne", "India", "Wine", "brand-expansion-vallonne"],
  ["charosa", "Charosa", "India", "Wine", "brand-expansion-charosa"],
] as const;

export const BRAND_LOGOS_BATCH_125: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_125: Record<string, string[]> = {
  "antigal-uno": [
    "https://www.antigal.com/our-story/",
    "https://www.antigal.com/uno/",
  ],
  archers: [
    "https://archers.com/products/archers/",
    "https://www.dekuypercompany.com/2022/09/cocktail-liqueur-expert-de-kuyper-royal-distillers-strengthens-leading-position-by-acquiring-british-peach-liqueur-legend-archers/",
    "https://www.diageo.com/en/news-and-media/press-releases/2022/diageo-sells-archers-brand-to-de-kuyper-royal-distillers",
  ],
  ardmore: [
    "https://www.ardmorewhisky.com/",
    "https://www.suntoryglobalspirits.com/our-brands",
  ],
  argento: [
    "https://argentowine.com/about-argento/",
    "https://www.bodegaargento.com/usa/home",
  ],
  "armand-de-brignac": [
    "https://armanddebrignac.com/about-us/",
    "https://www.lvmh.com/en/our-maisons/wines-spirits/armand-de-brignac",
  ],
  aultmore: [
    "https://www.aultmore.com/",
    "https://www.dewars.com/us/en/faq/",
    "https://www.bacardilimited.com/media/news-archive/bacardi-owned-aultmore-distillery-celebrates-125th-anniversary-with-15m-expansion-plan/",
  ],
  balblair: [
    "https://www.balblair.com/timeline-our-story",
    "https://www.balblair.com/collection",
  ],
  "four-seasons": [
    "https://www.diageoindia.com/en/news-and-media/press-releases/2019/usl-enters-into-a-share-purchase-agreement-for-the-sale-of-equity-shares-in-four-seasons",
    "https://www.groverzampa.in/",
  ],
  vallonne: [
    "https://www.vallonnevineyards.com/",
    "https://www.vallonnevineyards.com/contact-vallonne-vineyards-nashik-wine/",
  ],
  charosa: [
    "https://www.thewinesofindia.com/charosa-vineyards",
    "https://www.groverzampa.in/",
  ],
};

export const BRAND_CONTENT_BATCH_125: Record<string, BrandPublicContent> = {
  "antigal-uno": {
    description: "Antigal UNO is an Argentine wine label from Bodega Antigal in Mendoza. The UNO range is best known for Malbec and a metal number-one badge on the bottle, a visual cue tied to its first single-vineyard release.",
    story: "Antigal's winery facilities date to 1897 and were refurbished in 2000 to move from bulk production into quality-focused wines. UNO began with the 2005 vintage, using the number 1 cut from metal barrel hoops as the label's signature mark.",
    tastingNotes: [
      { title: "Mendoza Malbec", description: "Plum, strawberry, blackberry, violet, vanilla and soft chocolate notes define the best-known UNO style." },
      { title: "Fresh Red Structure", description: "Natural acidity, supple tannins and measured oak keep the fruit bright rather than heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve UNO reds slightly cool in a medium red-wine glass after a short breather." },
      { subheading: "Food", description: "Pair with mutton seekh, mushroom galouti, grilled lamb chops, empanadas or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "mushroom galouti", "grilled lamb chops", "empanadas", "aged cheddar"] }],
    whyChoose: "Antigal UNO brings Mendoza Malbec fruit, polished tannins and a memorable bottle identity to the table.",
    faqs: [
      { question: "Where is Antigal UNO from?", answer: "Antigal UNO is from Mendoza, Argentina." },
      { question: "What is Antigal UNO known for?", answer: "It is known for Mendoza Malbec and the metal number-one badge on its bottle." },
    ],
    finalVerdict: "Antigal UNO is a strong pick for drinkers who want plush Argentine red wine with clear Mendoza character.",
    metaTitle: "Antigal UNO Wine Guide | BevOry",
    metaDescription: "Explore Antigal UNO Mendoza wine notes, Malbec style, food pairings and city prices on BevOry.",
  },
  archers: {
    description: "Archers is a British peach schnapps and fruit liqueur brand now owned by De Kuyper Royal Distillers. It is built for peach-forward mixed drinks, long serves and easy cocktail use.",
    story: "Diageo sold Archers to De Kuyper Royal Distillers in 2022, bringing the brand into a Dutch family company known for cocktail liqueurs. The brand's identity remains tied to peach schnapps, a style made for approachable, fruit-led drinks.",
    tastingNotes: [
      { title: "Peach Fruit", description: "Juicy peach, ripe stone fruit and soft sweetness lead the aroma." },
      { title: "Light Mixer Finish", description: "The palate stays sweet, fruity and simple, making it easy to lengthen with lemonade or soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with lemonade, soda, cranberry juice or orange juice over plenty of ice." },
      { subheading: "Food", description: "Pair with fruit chaat, chilli cheese toast, fried chicken, peach tart or vanilla ice cream." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fruit chaat", "chilli cheese toast", "fried chicken", "peach tart", "vanilla ice cream"] }],
    whyChoose: "Archers is a no-fuss peach liqueur for bright highballs and low-effort party cocktails.",
    faqs: [
      { question: "Who owns Archers?", answer: "Archers is owned by De Kuyper Royal Distillers." },
      { question: "What flavour is Archers?", answer: "Archers is a peach schnapps style liqueur with a sweet stone-fruit profile." },
    ],
    finalVerdict: "Archers works best when you want peach sweetness in a tall, chilled mixed drink.",
    metaTitle: "Archers Peach Schnapps Guide | BevOry",
    metaDescription: "Explore Archers peach schnapps notes, mixer ideas, food pairings and city prices on BevOry.",
  },
  ardmore: {
    description: "Ardmore is a peated Highland single malt Scotch whisky from the Highland edge near Kennethmont. The brand belongs to Suntory Global Spirits and is known for a gentler Highland peat style.",
    story: "Ardmore was historically important to Teacher's Highland Cream, giving that blend a smoky malt backbone. Modern Ardmore releases keep the Highland peat connection while balancing smoke with honey, spice and creamy malt.",
    tastingNotes: [
      { title: "Heather And Honey", description: "Heather honey, cinnamon, toffee and soft malt lead before smoke begins to build." },
      { title: "Highland Peat", description: "Creamy vanilla, charcoal smoke and spice finish dry, tangy and rounded." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass, then add a few drops of water to open the peat." },
      { subheading: "Food", description: "Pair with tandoori chicken, smoked fish, lamb kebab, grilled mushrooms or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "smoked fish", "lamb kebab", "grilled mushrooms", "dark chocolate"] }],
    whyChoose: "Ardmore is a useful Highland malt for drinkers who want smoke without the medicinal weight of some island whiskies.",
    faqs: [
      { question: "Is Ardmore peated?", answer: "Ardmore is known for a peated Highland single malt style." },
      { question: "Who owns Ardmore?", answer: "Ardmore is part of the Suntory Global Spirits portfolio." },
    ],
    finalVerdict: "Ardmore is a smoky Highland whisky with enough honeyed malt to stay balanced and food-friendly.",
    metaTitle: "Ardmore Single Malt Guide | BevOry",
    metaDescription: "Explore Ardmore Highland whisky notes, peated style, food pairings and city prices on BevOry.",
  },
  argento: {
    description: "Argento is an Argentine wine brand focused on Mendoza and Uco Valley fruit. Bodega Argento has placed strong emphasis on organic and sustainable wines, especially Malbec and other Argentine varietal styles.",
    story: "The producer began a renewed organic direction in 2012, using Mendoza's dry climate, mountain water and high-altitude vineyards. The house style favours fruit purity, freshness and elegance over heavy extraction.",
    tastingNotes: [
      { title: "Mendoza Reds", description: "Malbec-led reds show black plum, cherry, violet, spice and firm but polished tannins." },
      { title: "Fresh Whites", description: "White wines lean into citrus, tropical fruit, floral lift and a clean mineral edge." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled; pour reds slightly cool in a broad red-wine glass." },
      { subheading: "Food", description: "Pair Malbec with galouti kebab or lamb chops; match whites with tandoori fish, salads or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebab", "lamb chops", "tandoori fish", "green salad", "goat cheese"] }],
    whyChoose: "Argento is a dependable Mendoza choice for organic-leaning Argentine wines with clean fruit expression.",
    faqs: [
      { question: "Where is Argento wine from?", answer: "Argento wines are from Mendoza, Argentina, including vineyards in the Uco Valley." },
      { question: "What style is Argento known for?", answer: "Argento is known for fresh, fruit-driven Argentine wines, especially Malbec." },
    ],
    finalVerdict: "Argento suits drinkers who want bright Mendoza fruit, easy food matching and a modern Argentine wine profile.",
    metaTitle: "Argento Wine Guide | BevOry",
    metaDescription: "Explore Argento Mendoza wine notes, Malbec style, food pairings and city prices on BevOry.",
  },
  "armand-de-brignac": {
    description: "Armand de Brignac is a luxury Champagne house from France, widely known as Ace of Spades. The modern maison was brought to life in 2006 by Shawn Jay-Z Carter with the Cattier family, whose Champagne heritage reaches back more than 250 years.",
    story: "The Cattier family crafts Armand de Brignac in Champagne, while LVMH's Moet Hennessy division is connected to the maison today. Its metallic bottles and prestige positioning made Brut Gold the brand's most recognisable cuvee.",
    tastingNotes: [
      { title: "Brut Gold Style", description: "Peach, apricot, citrus, brioche and fine bubbles give the flagship cuvee its polished Champagne character." },
      { title: "Creamy Finish", description: "Orchard fruit, pastry and chalky freshness carry through a smooth, dry finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a tulip glass to keep the mousse lively and the aromas focused." },
      { subheading: "Food", description: "Pair with oysters, tandoori prawns, fried chicken, truffle fries or aged Comte." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["oysters", "tandoori prawns", "fried chicken", "truffle fries", "aged Comte"] }],
    whyChoose: "Armand de Brignac is built for drinkers who want prestige Champagne with strong visual presence and classic brioche-led depth.",
    faqs: [
      { question: "Who created Armand de Brignac?", answer: "Shawn Jay-Z Carter brought the modern Armand de Brignac maison to life in 2006 with the Cattier family." },
      { question: "What is Armand de Brignac also called?", answer: "Armand de Brignac is widely known as Ace of Spades." },
    ],
    finalVerdict: "Armand de Brignac is a showpiece Champagne for celebrations where bottle design and serious craft both matter.",
    metaTitle: "Armand de Brignac Champagne Guide | BevOry",
    metaDescription: "Explore Armand de Brignac Champagne notes, Cattier heritage, pairings and city prices on BevOry.",
  },
  aultmore: {
    description: "Aultmore is a Speyside single malt Scotch whisky from John Dewar & Sons, part of the Bacardi group. Its official identity leans on the phrase Foggie Moss, a nod to the moorland near Keith.",
    story: "Aultmore sits among the malt distilleries used by Dewar's, alongside Aberfeldy, Craigellachie, Royal Brackla and Macduff. The distillery celebrated its 125th anniversary with expansion plans, underlining its role as both a blending malt and a single malt label.",
    tastingNotes: [
      { title: "Speyside Grass", description: "Fresh grass, green apple, pear and cereal sweetness make the opening light and clean." },
      { title: "Vanilla Malt", description: "Vanilla, honey, soft citrus and gentle spice finish smooth without heavy smoke." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass or with a small splash of water for a softer Speyside pour." },
      { subheading: "Food", description: "Pair with malai tikka, roast chicken, grilled prawns, apple tart or young cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["malai tikka", "roast chicken", "grilled prawns", "apple tart", "young cheddar"] }],
    whyChoose: "Aultmore is a clean Speyside malt for drinkers who prefer orchard fruit, cereal sweetness and minimal smoke.",
    faqs: [
      { question: "Where is Aultmore made?", answer: "Aultmore is made in Speyside, Scotland." },
      { question: "Who owns Aultmore?", answer: "Aultmore is one of the malt distilleries linked to John Dewar & Sons, part of Bacardi." },
    ],
    finalVerdict: "Aultmore is a quiet Speyside pour with grassy freshness and enough malt weight for relaxed sipping.",
    metaTitle: "Aultmore Single Malt Guide | BevOry",
    metaDescription: "Explore Aultmore Speyside whisky notes, Foggie Moss style, pairings and city prices on BevOry.",
  },
  balblair: {
    description: "Balblair is a Highland single malt Scotch whisky from Edderton in Ross-shire. Founded in 1790, it is among Scotland's long-running Highland distilleries.",
    story: "Balblair's story is tied to the northern Highlands and the Dornoch Firth landscape around Edderton. Its modern range moved from vintage-stated releases to age-stated single malts while keeping an orchard-fruit and spice-led Highland style.",
    tastingNotes: [
      { title: "Orchard Fruit", description: "Apple, pear, citrus peel and honeyed malt give Balblair a bright Highland opening." },
      { title: "Oak Spice", description: "Vanilla, baking spice, dried fruit and gentle oak carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass; add water sparingly if you want more fruit and less oak." },
      { subheading: "Food", description: "Pair with roast pork, paneer tikka, grilled fish, apple crumble or aged gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["roast pork", "paneer tikka", "grilled fish", "apple crumble", "aged gouda"] }],
    whyChoose: "Balblair is a classic Highland malt for drinkers who enjoy fruit, malt and measured oak spice.",
    faqs: [
      { question: "When was Balblair founded?", answer: "Balblair was founded in 1790." },
      { question: "Where is Balblair distillery?", answer: "Balblair is in Edderton, Ross-shire, in the Scottish Highlands." },
    ],
    finalVerdict: "Balblair is a polished Highland whisky with orchard brightness, malt depth and dinner-table flexibility.",
    metaTitle: "Balblair Single Malt Guide | BevOry",
    metaDescription: "Explore Balblair Highland whisky notes, 1790 heritage, food pairings and city prices on BevOry.",
  },
  "four-seasons": {
    description: "Four Seasons is an Indian wine brand originally developed by United Spirits through Four Seasons Wines Limited. In 2019, USL agreed to sell the wine business and associated brands to Grover Zampa Vineyards Limited and Quintela Assets Limited.",
    story: "The brand is tied to India's modern still-wine market, where Cabernet Sauvignon, Shiraz, Sauvignon Blanc and Chenin Blanc helped introduce more drinkers to Indian varietal wines. Its later connection with Grover Zampa places it within one of India's larger wine groups.",
    tastingNotes: [
      { title: "Indian Reds", description: "Cabernet and Shiraz-led wines bring black fruit, spice, soft tannin and gentle oak warmth." },
      { title: "Fresh Whites", description: "Sauvignon Blanc and Chenin Blanc styles lean toward citrus, tropical fruit and crisp acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and reds slightly cool in standard wine glasses." },
      { subheading: "Food", description: "Pair reds with rogan josh or paneer tikka; pour whites with tandoori fish, Thai curry or fresh salads." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["rogan josh", "paneer tikka", "tandoori fish", "Thai curry", "fresh salads"] }],
    whyChoose: "Four Seasons is a familiar Indian wine label for straightforward varietal reds and whites.",
    faqs: [
      { question: "Who owns Four Seasons Wines now?", answer: "USL announced the sale of Four Seasons Wines and associated brands to Grover Zampa Vineyards Limited and Quintela Assets Limited in 2019." },
      { question: "What styles does Four Seasons cover?", answer: "The range is associated with Indian varietal wines such as Cabernet Sauvignon, Shiraz, Sauvignon Blanc and Chenin Blanc." },
    ],
    finalVerdict: "Four Seasons is a practical Indian wine choice for everyday meals and mixed red-white preferences.",
    metaTitle: "Four Seasons Wine Guide | BevOry",
    metaDescription: "Explore Four Seasons Indian wine notes, varietal styles, food pairings and city prices on BevOry.",
  },
  vallonne: {
    description: "Vallonne Vineyards is a boutique Indian wine estate in Kavnai village, Igatpuri, near Nashik. Founded by Shailendra Pai in 2009, it produces French-styled wines from a compact estate setting.",
    story: "Vallonne presents itself as India's first boutique winery, combining a winery, vineyard stay and lake-facing restaurant. Its portfolio includes Chenin Blanc, Riesling, Viognier, Cabernet Sauvignon, Merlot, Syrah and a dessert wine made from sun-dried Chenin Blanc grapes.",
    tastingNotes: [
      { title: "Boutique Whites", description: "Chenin Blanc, Riesling and Viognier bring citrus, floral lift, stone fruit and crisp acidity." },
      { title: "Estate Reds", description: "Cabernet Sauvignon, Merlot and Syrah show dark fruit, spice and medium-bodied structure." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled; give reds a short breather in a medium red-wine glass." },
      { subheading: "Food", description: "Pair whites with Thai curry or tandoori fish; match reds with lamb kebab, mushroom tikka or grilled vegetables." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Thai curry", "tandoori fish", "lamb kebab", "mushroom tikka", "grilled vegetables"] }],
    whyChoose: "Vallonne is a boutique Nashik-region pick for drinkers who want Indian wine with estate personality.",
    faqs: [
      { question: "Where is Vallonne Vineyards located?", answer: "Vallonne Vineyards is in Kavnai village, Igatpuri, near Nashik, Maharashtra." },
      { question: "Who founded Vallonne Vineyards?", answer: "Shailendra Pai founded Vallonne Vineyards in 2009." },
    ],
    finalVerdict: "Vallonne gives Indian wine drinkers a compact estate story, varied grapes and strong food-pairing range.",
    metaTitle: "Vallonne Vineyards Wine Guide | BevOry",
    metaDescription: "Explore Vallonne Vineyards from Igatpuri, tasting notes, pairings and city prices on BevOry.",
  },
  charosa: {
    description: "Charosa is an Indian wine estate in Charosa village within Nashik's Dindori sub-region. The estate spans 230 acres and is known for Indian Tempranillo alongside Cabernet Sauvignon, Shiraz and Viognier.",
    story: "The first vines at Charosa were planted in 2008, with the first vintage released in 2013. The winery is linked to Ajit Gulabchand and helped widen Nashik's premium wine conversation beyond the region's better-known producers.",
    tastingNotes: [
      { title: "Reserve Tempranillo", description: "Red berries, vanilla, coconut, chocolate spice and soft tannins shape the oak-aged red style." },
      { title: "Aromatic Whites", description: "Viognier and other white styles bring floral notes, apricot, peach and clean acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled; serve Reserve reds slightly cool after a short breather." },
      { subheading: "Food", description: "Pair whites with paneer tikka or tandoori fish; match Tempranillo with mutton rogan josh, lamb chops or grilled steaks." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["paneer tikka", "tandoori fish", "mutton rogan josh", "lamb chops", "grilled steaks"] }],
    whyChoose: "Charosa is a benchmark Nashik estate for drinkers curious about Indian Tempranillo and structured reserve reds.",
    faqs: [
      { question: "Where is Charosa wine made?", answer: "Charosa wine is made in Charosa village in the Dindori sub-region of Nashik, Maharashtra." },
      { question: "What is Charosa known for?", answer: "Charosa is known for Reserve Tempranillo and focused Nashik expressions of Cabernet Sauvignon, Shiraz and Viognier." },
    ],
    finalVerdict: "Charosa is a serious Indian wine option when you want Nashik fruit with reserve-level red-wine structure.",
    metaTitle: "Charosa Vineyards Wine Guide | BevOry",
    metaDescription: "Explore Charosa Vineyards from Nashik, Tempranillo notes, pairings and city prices on BevOry.",
  },
};
