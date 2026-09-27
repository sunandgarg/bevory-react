import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_111 = [
  ["old-admiral", "Old Admiral", "India", "Brandy", "brand-expansion-old-admiral"],
  ["regal-talon", "Regal Talon", "India", "Whisky", "brand-expansion-regal-talon"],
  ["whytehall", "Whytehall", "India", "Brandy", "brand-expansion-whytehall"],
  ["pluton-bay", "Pluton Bay", "India", "Rum", "brand-expansion-pluton-bay"],
  ["ankahi", "Ankahi", "India", "Liqueurs", "brand-expansion-ankahi"],
  ["morpheus-blue", "Morpheus Blue", "India", "Brandy", "brand-expansion-morpheus-blue"],
  ["four-seasons", "Four Seasons", "India", "Wine", "brand-expansion-four-seasons"],
  ["zinzi", "Zinzi", "India", "Wine", "brand-expansion-zinzi"],
  ["vallonne", "Vallonne", "India", "Wine", "brand-expansion-vallonne"],
  ["charosa", "Charosa", "India", "Wine", "brand-expansion-charosa"],
] as const;

export const BRAND_LOGOS_BATCH_111: Record<string, string> = {
  "morpheus-blue": "https://static.livcheers.com/static/content/images/brand/morpheus.webp",
};

export const BRAND_SOURCES_BATCH_111: Record<string, string[]> = {
  "old-admiral": [
    "https://radicokhaitan.com/products/old-admiral-brandy/",
    "https://radicokhaitan.com/about-us/what-we-do/",
  ],
  "regal-talon": [
    "https://radicokhaitan.com/wp-content/uploads/2022/09/Annual-Report-RKL-2022.pdf",
    "https://radicokhaitan.com/about-us/what-we-do/",
  ],
  whytehall: [
    "https://radicokhaitan.com/wp-content/uploads/2022/09/Annual-Report-RKL-2022.pdf",
    "https://radicokhaitan.com/about-us/what-we-do/",
  ],
  "pluton-bay": [
    "https://radicokhaitan.com/wp-content/uploads/2022/09/Annual-Report-RKL-2022.pdf",
    "https://radicokhaitan.com/about-us/what-we-do/",
  ],
  ankahi: [
    "https://radicokhaitan.com/about-us/what-we-do/",
    "https://www.bseindia.com/xml-data/corpfiling/AttachHis/a09b5a8e-0df8-496a-a3c9-b51f80015167.pdf",
  ],
  "morpheus-blue": [
    "https://www.radicokhaitan.com/wp-content/uploads/2023/09/Annual-Report-RKL-2023.pdf",
    "https://radicokhaitan.com/about-us/what-we-do/",
  ],
  "four-seasons": [
    "https://www.diageoindia.com/en/news-and-media/press-releases/2019/usl-enters-into-a-share-purchase-agreement-for-the-sale-of-equity-shares-in-four-seasons",
    "https://www.bseindia.com/HIS_ANN_RPT/HISTANNR_BSE_ARCH/2010/5324320310.pdf",
  ],
  zinzi: [
    "https://www.bseindia.com/HIS_ANN_RPT/HISTANNR_BSE_ARCH/2010/5324320310.pdf",
    "https://www.quickcompany.in/trademarks/1576150-zinzi-red-wine",
  ],
  vallonne: [
    "https://www.vallonnevineyards.com/",
    "https://www.vallonnevineyards.com/contact-vallonne-vineyards-nashik-wine/",
  ],
  charosa: [
    "https://www.thewinesofindia.com/charosa-vineyards",
    "https://www.newindianexpress.com/cities/hyderabad/2014/Oct/20/charosa-ready-to-conquer-city-market-673708.html",
  ],
};

export const BRAND_CONTENT_BATCH_111: Record<string, BrandPublicContent> = {
  "old-admiral": {
    description: "Old Admiral is an Indian brandy from Radico Khaitan, the Rampur-rooted IMFL company that began operating in 1943. Launched in 2002, it sits in Radico's regular brandy range with a rich, aromatic profile.",
    story: "Radico built Old Admiral after its move from bulk spirits into owned brands such as 8PM Whisky and Magic Moments Vodka. The label became one of the company's key volume brandies, especially for drinkers who want a familiar Indian after-dinner pour.",
    tastingNotes: [
      { title: "Rich Aroma", description: "Warm brandy sweetness with raisin-like fruit, caramel and a rounded aroma." },
      { title: "Soft Finish", description: "A smooth, mellow finish that suits small pours and easy mixer serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve in a small brandy glass, over one cube, or lengthened with water." },
      { subheading: "Food", description: "Pair with tandoori chicken, mutton seekh, dark chocolate or roasted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mutton seekh", "dark chocolate", "roasted cashews"] }],
    whyChoose: "Old Admiral is a recognisable Indian brandy with Radico's long-running distilling footprint behind it.",
    faqs: [
      { question: "Who makes Old Admiral Brandy?", answer: "Old Admiral Brandy is made by Radico Khaitan, the Indian spirits company behind Rampur Distillery." },
      { question: "When was Old Admiral launched?", answer: "Radico lists Old Admiral Brandy in its 2002 launch timeline." },
    ],
    finalVerdict: "Old Admiral works best when you want a warm, familiar Indian brandy with grilled snacks or dessert.",
    metaTitle: "Old Admiral Brandy Guide | BevOry",
    metaDescription: "Explore Old Admiral brandy notes, Radico history, Indian food pairings and city prices.",
  },
  "regal-talon": {
    description: "Regal Talon is an Indian premium grain whisky from Radico Khaitan. It blends Indian grain spirit with imported Scotch malts for a fruit-and-wood profile touched by light peat and saline notes.",
    story: "Radico Khaitan's whisky work runs from 8PM to Rampur Indian Single Malt, with Regal Talon sitting in its Indian grain-whisky line. The brand draws on Indian grains for body while using Scotch malt influence for aroma and structure.",
    tastingNotes: [
      { title: "Fruit And Wood", description: "Fruity grain sweetness meets woody malt notes and a clean whisky aroma." },
      { title: "Light Peat", description: "A faint peated and salty edge gives the blend a sharper finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with chilled water, soda, or one large cube in a short glass." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, smoked paneer or pepper fry." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "smoked paneer", "pepper fry"] }],
    whyChoose: "Regal Talon is a practical Indian whisky for drinkers who like grain sweetness with a Scotch-malt accent.",
    faqs: [
      { question: "What is Regal Talon Whisky?", answer: "Regal Talon is an Indian premium grain whisky from Radico Khaitan." },
      { question: "What does Regal Talon taste like?", answer: "Expect fruity grain, woody malt, light peat and a subtle salty finish." },
    ],
    finalVerdict: "Regal Talon is a food-friendly Indian whisky for soda serves, short pours and smoky snacks.",
    metaTitle: "Regal Talon Whisky Guide | BevOry",
    metaDescription: "Explore Regal Talon whisky notes, Radico context, Indian food pairings and city prices.",
  },
  whytehall: {
    description: "Whytehall Premium Brandy is an Indian brandy from Radico Khaitan. The style is built around a round, fruity opening and a long, elegant finish.",
    story: "Whytehall is part of Radico's Indian brandy portfolio, connected to a company history that started with Rampur Distillery in 1943. The label is positioned as a polished after-dinner brandy rather than a casual neutral-spirit pour.",
    tastingNotes: [
      { title: "Rounded Fruit", description: "A soft fruit-led opening gives the brandy an easy, mellow first impression." },
      { title: "Long Finish", description: "The palate develops slowly, with gentle warmth and a clean, lingering finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour into a small snifter or rocks glass; add a cube if you prefer a softer finish." },
      { subheading: "Food", description: "Pair with galouti kebab, pepper chicken, caramel custard or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebab", "pepper chicken", "caramel custard", "aged cheddar"] }],
    whyChoose: "Whytehall is suited to drinkers who want an Indian brandy with fruit, polish and a measured finish.",
    faqs: [
      { question: "Who owns Whytehall Brandy?", answer: "Whytehall is part of Radico Khaitan's Indian spirits portfolio." },
      { question: "What is Whytehall's style?", answer: "It is a fruit-led premium brandy with a rounded start and a long finish." },
    ],
    finalVerdict: "Whytehall is a quiet after-dinner brandy for fruit-led sipping and rich Indian snacks.",
    metaTitle: "Whytehall Brandy Guide | BevOry",
    metaDescription: "Explore Whytehall brandy notes, Radico heritage, food pairings and city prices.",
  },
  "pluton-bay": {
    description: "Pluton Bay is an Indian premium dark rum from Radico Khaitan. It is described by the company as a spicy dark brown rum made from aged cane juice and neutral spirits.",
    story: "Pluton Bay belongs to Radico's rum portfolio alongside other defence and civil-market labels. The brand is positioned around adventure, darker colour and a smoother rum texture.",
    tastingNotes: [
      { title: "Dark Spice", description: "Brown sugar, cane sweetness and warm spice lead the profile." },
      { title: "Smooth Texture", description: "A rounded mouthfeel supports vanilla, caramel and a darker rum finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with cola, or with dry ginger for a sharper highball." },
      { subheading: "Food", description: "Pair with mutton seekh, grilled pineapple, chilli chicken or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "grilled pineapple", "chilli chicken", "dark chocolate"] }],
    whyChoose: "Pluton Bay is a spicy Indian dark rum for drinkers who want cane depth and an easy highball base.",
    faqs: [
      { question: "Who makes Pluton Bay Rum?", answer: "Pluton Bay is made by Radico Khaitan." },
      { question: "What style is Pluton Bay?", answer: "It is a dark brown Indian rum with spice, cane sweetness and a smooth texture." },
    ],
    finalVerdict: "Pluton Bay is built for dark-rum highballs, grilled food and spice-led evening serves.",
    metaTitle: "Pluton Bay Rum Guide | BevOry",
    metaDescription: "Explore Pluton Bay dark rum notes, Radico context, serving ideas and city prices.",
  },
  ankahi: {
    description: "Ankahi Zaffran is an Indian saffron-spiced liqueur from Radico Khaitan's Rampur Distillery. Launched in 2025, it uses Kashmir saffron with a spice-and-herb profile built around 21 botanicals.",
    story: "Radico introduced Ankahi as a luxury liqueur series after expanding its premium portfolio with Rampur, Sangam and Jaisalmer. The first release focuses on zaffran, the saffron associated with Kashmir's golden fields.",
    tastingNotes: [
      { title: "Saffron And Spice", description: "Floral saffron sits with clove, cardamom, cinnamon and warm herbal notes." },
      { title: "Layered Sweetness", description: "A smooth sweet base carries spice, mint-like lift and a lingering warm finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a small liqueur glass, over ice, or in a citrus-led cocktail." },
      { subheading: "Food", description: "Pair with phirni, kesar kulfi, baklava, salted almonds or blue cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["phirni", "kesar kulfi", "baklava", "salted almonds", "blue cheese"] }],
    whyChoose: "Ankahi brings saffron, Indian spices and liqueur sweetness into a distinctive after-dinner serve.",
    faqs: [
      { question: "What is Ankahi Zaffran?", answer: "Ankahi Zaffran is a saffron-spiced Indian liqueur from Radico Khaitan's Rampur Distillery." },
      { question: "What flavours are in Ankahi?", answer: "The profile centres on saffron with spices and herbs such as clove, cardamom, cinnamon, mint and coriander." },
    ],
    finalVerdict: "Ankahi is a saffron-led liqueur for dessert, cocktails and polished Indian-inspired pours.",
    metaTitle: "Ankahi Liqueur Guide | BevOry",
    metaDescription: "Explore Ankahi Zaffran liqueur notes, Radico history, dessert pairings and city prices.",
  },
  "morpheus-blue": {
    description: "Morpheus Blue is an Indian XO premium brandy from Radico Khaitan. It sits above the regular Morpheus line with richer packaging and a more intense, indulgent brandy style.",
    story: "Radico launched Morpheus Blue in 2013, building on the success of Morpheus XO in the Indian premium brandy market. The name refers to Morpheus, the Greek god of dreams, a theme Radico uses across the brand family.",
    tastingNotes: [
      { title: "Intense Aroma", description: "Deep fruit, vanilla sweetness and mature wood give the aroma a richer tone." },
      { title: "Rich Finish", description: "A full, smooth palate moves into a warm brandy aftertaste." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a snifter or over one large cube after dinner." },
      { subheading: "Food", description: "Pair with mutton rogan josh, chocolate truffle, dried figs or aged gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "chocolate truffle", "dried figs", "aged gouda"] }],
    whyChoose: "Morpheus Blue is for brandy drinkers who want Radico's richer XO-style Indian expression.",
    faqs: [
      { question: "Who makes Morpheus Blue?", answer: "Morpheus Blue XO Premium Brandy is made by Radico Khaitan." },
      { question: "How is Morpheus Blue best served?", answer: "Serve it neat in a snifter or over one large cube after dinner." },
    ],
    finalVerdict: "Morpheus Blue is a richer Indian brandy for slow sipping, desserts and robust food pairings.",
    metaTitle: "Morpheus Blue Brandy Guide | BevOry",
    metaDescription: "Explore Morpheus Blue XO brandy notes, Radico context, pairings and city prices.",
  },
  "four-seasons": {
    description: "Four Seasons is an Indian wine label originally developed by Four Seasons Wines Limited. The winery was built near Baramati in Maharashtra and produced varietal wines including Cabernet Sauvignon, Shiraz, Merlot, Sauvignon Blanc, Chenin Blanc, Viognier and rose.",
    story: "United Spirits invested in Four Seasons Wines Limited in the late 2000s before selling the wine business and associated brands in 2019 to Grover Zampa Vineyards Limited and Quintela Assets Limited. The label helped expand India's early modern varietal-wine segment beyond Nashik.",
    tastingNotes: [
      { title: "Red Range", description: "Cabernet, Shiraz and Merlot styles lean toward ripe fruit, soft tannins and easy food pairing." },
      { title: "White Range", description: "Sauvignon Blanc, Chenin Blanc and Viognier bring citrus, orchard fruit and aromatic lift." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled; pour reds slightly cool in a broad wine glass." },
      { subheading: "Food", description: "Pair whites with tandoori fish or paneer tikka; pair reds with lamb chops, kebabs or tomato pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "paneer tikka", "lamb chops", "kebabs", "tomato pasta"] }],
    whyChoose: "Four Seasons is a useful Indian wine label for approachable varietal reds, whites and rose.",
    faqs: [
      { question: "Where was Four Seasons wine made?", answer: "The Four Seasons wine business was built around a winery near Baramati in Maharashtra." },
      { question: "Which grapes are linked with Four Seasons?", answer: "The range has included Cabernet Sauvignon, Shiraz, Merlot, Sauvignon Blanc, Chenin Blanc, Viognier and rose." },
    ],
    finalVerdict: "Four Seasons remains a familiar Indian wine name for everyday varietal drinking and Indian-food pairings.",
    metaTitle: "Four Seasons Wine Guide | BevOry",
    metaDescription: "Explore Four Seasons Indian wine notes, Baramati context, grape styles and city prices.",
  },
  zinzi: {
    description: "Zinzi is an Indian wine label connected with United Spirits' wine portfolio. The range was produced alongside Four Seasons at the Baramati wine operation in Maharashtra.",
    story: "United Spirits reported Zinzi Red and White as part of its early Indian wine push, with Four Seasons progressively expanding into multiple varietals. Zinzi served the accessible end of that portfolio, giving Indian drinkers simple red and white wine options.",
    tastingNotes: [
      { title: "Zinzi Red", description: "Easy red-fruit character with soft tannins and a smooth table-wine finish." },
      { title: "Zinzi White", description: "Light citrus, orchard fruit and fresh acidity suit chilled service." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Zinzi White chilled and Zinzi Red slightly cool." },
      { subheading: "Food", description: "Pair the white with chilli paneer or fried fish; pair the red with kebabs, pizza or butter chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "fried fish", "kebabs", "pizza", "butter chicken"] }],
    whyChoose: "Zinzi is an approachable Indian red-and-white wine name for casual meals and simple pours.",
    faqs: [
      { question: "What is Zinzi wine?", answer: "Zinzi is an Indian wine label linked with United Spirits' Four Seasons wine business." },
      { question: "How should Zinzi be served?", answer: "Serve the white chilled and the red slightly cool with everyday Indian or global food." },
    ],
    finalVerdict: "Zinzi is best understood as a casual Indian table-wine label for easy food pairings.",
    metaTitle: "Zinzi Wine Guide | BevOry",
    metaDescription: "Explore Zinzi Indian wine notes, United Spirits context, food pairings and city prices.",
  },
  vallonne: {
    description: "Vallonne Vineyards is a boutique wine estate at Kavnai near Igatpuri in Nashik, Maharashtra. Founded by Shailendra Pai in 2009, it makes French-styled Indian wines from estate-grown grapes.",
    story: "Vallonne presents itself as India's first boutique winery, set near the Mukhne Dam with south-facing vineyards and a small vineyard hotel. Its portfolio includes Chenin Blanc, Riesling, Viognier, Cabernet Sauvignon, Merlot, Syrah, rose and dessert wine.",
    tastingNotes: [
      { title: "Whites And Rose", description: "Chenin Blanc, Riesling and Viognier offer citrus, floral lift and stone-fruit freshness; the Cabernet Sauvignon rose adds berry brightness." },
      { title: "Reds And Dessert Wine", description: "Cabernet Sauvignon, Merlot and Syrah bring darker fruit and structure, while the dessert wine uses sun-dried grapes for richer sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites and rose chilled; pour reds slightly cool in a wide wine glass." },
      { subheading: "Food", description: "Pair whites with Thai curry, tandoori fish or paneer tikka; pair reds with duck, lamb kebab or mushroom biryani." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Thai curry", "tandoori fish", "paneer tikka", "duck", "lamb kebab", "mushroom biryani"] }],
    whyChoose: "Vallonne is a strong pick for drinkers exploring boutique Nashik wine beyond the largest producers.",
    faqs: [
      { question: "Where is Vallonne Vineyards?", answer: "Vallonne is at Kavnai near Igatpuri in Nashik, Maharashtra." },
      { question: "Which grapes does Vallonne work with?", answer: "Vallonne lists Chenin Blanc, Riesling, Viognier, Cabernet Sauvignon, Merlot and Syrah among its wines." },
    ],
    finalVerdict: "Vallonne offers a focused boutique view of Nashik wine, from crisp whites to structured reds and dessert wine.",
    metaTitle: "Vallonne Vineyards Wine Guide | BevOry",
    metaDescription: "Explore Vallonne Nashik wine notes, grape varieties, pairings and city prices.",
  },
  charosa: {
    description: "Charosa Vineyards is an Indian wine estate in Charosa village in Nashik's Dindori sub-region. The estate is known for Tempranillo, Cabernet Sauvignon, Shiraz, Sauvignon Blanc and Viognier.",
    story: "Charosa began planting vines in 2008 on a 230-acre estate associated with Ajit Gulabchand and the HCC group. Its Dindori setting brings red laterite soils, hills and cooler night conditions into the brand's Indian wine identity.",
    tastingNotes: [
      { title: "Reserve Tempranillo", description: "Ripe red berries, vanilla, soft spice and warm oak give the flagship red its structure." },
      { title: "Aromatic Whites", description: "Viognier and Sauvignon Blanc styles bring floral notes, citrus, tropical fruit and clean acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled; let Reserve reds breathe briefly in a broad wine glass." },
      { subheading: "Food", description: "Pair whites with tandoori fish or paneer tikka; pair reds with mutton rogan josh, lamb chops or aged gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "paneer tikka", "mutton rogan josh", "lamb chops", "aged gouda"] }],
    whyChoose: "Charosa is a benchmark Indian estate for drinkers looking at Dindori terroir and barrel-aged Tempranillo.",
    faqs: [
      { question: "Where is Charosa wine made?", answer: "Charosa is made in Charosa village in the Dindori sub-region of Nashik, Maharashtra." },
      { question: "What is Charosa known for?", answer: "Charosa is especially known for Reserve Tempranillo alongside Cabernet Sauvignon, Shiraz, Sauvignon Blanc and Viognier." },
    ],
    finalVerdict: "Charosa gives Indian wine drinkers a serious Dindori estate with expressive whites and structured reds.",
    metaTitle: "Charosa Vineyards Wine Guide | BevOry",
    metaDescription: "Explore Charosa Nashik wine notes, Tempranillo, Viognier, pairings and city prices.",
  },
};
