import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_126 = [
  ["vinsura", "Vinsura", "India", "Wine", "brand-expansion-vinsura"],
  ["sula", "Sula", "India", "Wine", "brand-expansion-sula"],
  ["magic-moments", "Magic Moments", "India", "Vodka", "brand-expansion-magic-moments"],
  ["johnnie-walker", "Johnnie Walker", "Scotland", "World Whisky", "brand-expansion-johnnie-walker"],
  ["virgin-hills", "Virgin Hills", "India", "Wine", "brand-expansion-virgin-hills"],
  ["sensi", "Sensi", "Italy", "Wine", "brand-expansion-sensi"],
  ["old-monk", "Old Monk", "India", "Rum", "brand-expansion-old-monk"],
  ["macallan", "The Macallan", "Scotland", "Single Malts", "brand-expansion-macallan"],
  ["mcdowells", "McDowell's", "India", "Whisky", "brand-expansion-mcdowells"],
  ["piccini", "Piccini", "Italy", "Wine", "brand-expansion-piccini"],
] as const;

export const BRAND_LOGOS_BATCH_126: Record<string, string> = {
  sula: "https://static.livcheers.com/static/content/images/brand/sula.webp",
  "magic-moments": "https://static.livcheers.com/static/content/images/brand/magic-moments.webp",
  "johnnie-walker": "https://static.livcheers.com/static/content/images/brand/johnnie-walker.webp",
  "virgin-hills": "https://static.livcheers.com/static/content/images/brand/virgin-hills.webp",
  "old-monk": "https://static.livcheers.com/static/content/images/brand/old-monk.webp",
  macallan: "https://static.livcheers.com/static/content/images/brand/macallan.webp",
  mcdowells: "https://static.livcheers.com/static/content/images/brand/mcdowells.webp",
  piccini: "https://www.winesellersltd.com/wp-content/uploads/2023/06/Piccini_logo.png",
};

export const BRAND_SOURCES_BATCH_126: Record<string, string[]> = {
  vinsura: [
    "https://vinsurawines.com/",
  ],
  sula: [
    "https://sulavineyards.com/pages/our-story",
    "https://sulavineyards.com/pages/our-wines",
  ],
  "magic-moments": [
    "https://radicokhaitan.com/products/magic-moments/",
    "https://radicokhaitan.com/brand/",
  ],
  "johnnie-walker": [
    "https://www.johnniewalker.com/en-us/our-story",
    "https://www.diageo.com/en/our-brands/scotch/johnnie-walker",
  ],
  "virgin-hills": [
    "https://www.virginhillswines.com/our-mission",
    "https://www.virginhillswines.com/our-wines",
  ],
  sensi: [
    "https://www.sensivini.it/en/company-en/",
    "https://www.sensivini.it/en/wines/",
  ],
  "old-monk": [
    "https://mohanmeakin.com/rums/",
    "https://mohanmeakin.com/history/",
  ],
  macallan: [
    "https://www.themacallan.com/en/about",
    "https://www.themacallan.com/en/inside-the-macallan/six-pillars",
  ],
  mcdowells: [
    "https://www.diageoindia.com/en/news-and-media/stories/2024/risen-from-the-mist-mcdowells-co-reinvents-its-legacy",
    "https://www.diageoindia.com/en/our-brands/brand-explorer/indian-made-foreign-liquor/mcdowells-no-1/",
  ],
  piccini: [
    "https://www.piccini1882.it/en/family-history/",
    "https://www.piccini1882.it/en/",
  ],
};

export const BRAND_CONTENT_BATCH_126: Record<string, BrandPublicContent> = {
  vinsura: {
    description: "Vinsura is an Indian wine label from Nashik's Vinchur wine belt in Maharashtra. Its range covers approachable still wines led by familiar grapes such as Chenin Blanc, Sauvignon Blanc, Shiraz and Cabernet Sauvignon.",
    story: "Vinsura grew out of Nashik's early wave of winery development around Vinchur, a cluster planned around grape-growing and wine production. The brand's strength is practical Indian table wine: fruit-forward bottles made for warm weather, spicy snacks and mixed-group meals.",
    tastingNotes: [
      { title: "Fresh Whites", description: "Chenin Blanc and Sauvignon Blanc styles bring citrus, green fruit, tropical notes and clean acidity." },
      { title: "Soft Reds", description: "Shiraz and Cabernet-led wines show plum, blackcurrant, spice and a medium-bodied finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites well chilled and pour reds slightly cool in a standard wine glass." },
      { subheading: "Food", description: "Pair whites with tandoori fish or paneer tikka; match reds with mutton seekh, tomato pasta or grilled mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "paneer tikka", "mutton seekh", "tomato pasta", "grilled mushrooms"] }],
    whyChoose: "Vinsura is a straightforward Nashik pick for Indian wines that stay fresh, food-friendly and easy to pour.",
    faqs: [
      { question: "Where is Vinsura wine from?", answer: "Vinsura is from Nashik's Vinchur wine belt in Maharashtra." },
      { question: "What grapes are associated with Vinsura?", answer: "The Vinsura range is associated with Chenin Blanc, Sauvignon Blanc, Shiraz and Cabernet Sauvignon." },
    ],
    finalVerdict: "Vinsura works well for drinkers who want relaxed Nashik wine with Indian food rather than heavy, oak-driven styles.",
    metaTitle: "Vinsura Wine Guide | BevOry",
    metaDescription: "Explore Vinsura Nashik wine notes, Indian food pairings, serving styles and city prices on BevOry.",
  },
  sula: {
    description: "Sula is India's best-known wine producer, founded by Rajeev Samant in Nashik in 1999. The house range spans Sauvignon Blanc, Chenin Blanc, Riesling, Shiraz, Zinfandel, rose, sparkling wines and premium estate bottles.",
    story: "Sula helped turn Nashik into India's most visible wine region, pairing vineyard tourism with a broad shelf presence across Indian cities. Its winery culture, tasting-room model and annual music events made Indian wine feel familiar to a younger urban audience.",
    tastingNotes: [
      { title: "Nashik Whites", description: "Sula whites often lean toward citrus, guava, melon, green apple and crisp acidity." },
      { title: "Fruit-Led Reds", description: "Shiraz, Zinfandel and Cabernet-led wines show ripe berries, plum, pepper and soft tannin." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites, rose and sparkling wines chilled; pour reds slightly cool in a broad glass." },
      { subheading: "Food", description: "Pair Sauvignon Blanc with tandoori prawns, Chenin Blanc with paneer tikka, and Shiraz with seekh kebab." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "paneer tikka", "seekh kebab", "mushroom chilli", "goat cheese"] }],
    whyChoose: "Sula is the benchmark Indian wine brand for discovering Nashik styles across white, red, rose and sparkling bottles.",
    faqs: [
      { question: "Who founded Sula Vineyards?", answer: "Rajeev Samant founded Sula Vineyards in Nashik in 1999." },
      { question: "What is Sula known for?", answer: "Sula is known for popular Indian wines from Nashik, especially Sauvignon Blanc, Chenin Blanc, Shiraz, Zinfandel and sparkling styles." },
    ],
    finalVerdict: "Sula remains the easiest entry point for drinkers exploring modern Indian wine with broad food-pairing range.",
    metaTitle: "Sula Wine Guide | BevOry",
    metaDescription: "Explore Sula Vineyards from Nashik, tasting notes, Indian pairings, serving styles and city prices on BevOry.",
  },
  "magic-moments": {
    description: "Magic Moments is an Indian vodka brand from Radico Khaitan, launched in 2006. The range includes plain grain vodka, flavoured Remix variants, Verve expressions and ready-to-drink cocktail formats.",
    story: "Radico Khaitan built Magic Moments as a modern Indian party vodka with music, nightlife and flavoured serves at the centre of the brand. Its broad range made vodka accessible beyond classic bar cocktails, especially for fruit-led mixers and chilled shots.",
    tastingNotes: [
      { title: "Classic Vodka", description: "Neutral grain spirit character with a clean, light body and a soft finish built for mixing." },
      { title: "Flavoured Range", description: "Remix and Verve styles move into citrus, berry, green apple, orange and other fruit-led profiles." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, with soda and lime, in a Moscow Mule, or mixed with cranberry, orange or tonic." },
      { subheading: "Food", description: "Pair with chilli paneer, peri-peri fries, fried chicken, prawn koliwada or citrusy salads." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "peri-peri fries", "fried chicken", "prawn koliwada", "citrusy salads"] }],
    whyChoose: "Magic Moments is a flexible Indian vodka for chilled shots, fruit mixers and high-energy house-party cocktails.",
    faqs: [
      { question: "Who makes Magic Moments vodka?", answer: "Magic Moments is made by Radico Khaitan." },
      { question: "When was Magic Moments launched?", answer: "Magic Moments was launched in 2006." },
    ],
    finalVerdict: "Magic Moments is best for drinkers who want an Indian vodka that moves easily from simple soda serves to flavoured cocktails.",
    metaTitle: "Magic Moments Vodka Guide | BevOry",
    metaDescription: "Explore Magic Moments vodka notes, Remix flavours, mixer ideas, pairings and city prices on BevOry.",
  },
  "johnnie-walker": {
    description: "Johnnie Walker is a blended Scotch whisky brand owned by Diageo, with roots in John Walker's grocery business in Kilmarnock. The label range runs from Red Label and Black Label to Green Label, Gold Label Reserve and Blue Label.",
    story: "John Walker began selling whisky in the early 1800s, and later generations built the striding-man identity into one of Scotch whisky's most recognisable global names. The brand's core skill is blending malt and grain whiskies into labels with distinct price points and flavour weights.",
    tastingNotes: [
      { title: "Red And Black", description: "Red Label is brisk, spicy and mixer-friendly; Black Label brings deeper fruit, vanilla, malt and a measured smoky edge." },
      { title: "Premium Labels", description: "Green, Gold and Blue move toward richer malt, honey, dried fruit, gentle smoke and longer oak-led finishes." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Red Label in highballs; pour Black Label or richer labels neat, over ice or with a splash of water." },
      { subheading: "Food", description: "Pair with tandoori chicken, galouti kebab, smoked cheese, grilled lamb chops or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "galouti kebab", "smoked cheese", "grilled lamb chops", "dark chocolate"] }],
    whyChoose: "Johnnie Walker gives Scotch drinkers a clear ladder from bold cocktail whisky to polished sipping blends.",
    faqs: [
      { question: "Where did Johnnie Walker begin?", answer: "Johnnie Walker began in Kilmarnock, Scotland, with John Walker's grocery business." },
      { question: "Is Johnnie Walker single malt?", answer: "Johnnie Walker is blended Scotch whisky, made by combining malt and grain whiskies." },
    ],
    finalVerdict: "Johnnie Walker is the practical Scotch choice when you want reliable blends for both highballs and slower sipping.",
    metaTitle: "Johnnie Walker Scotch Guide | BevOry",
    metaDescription: "Explore Johnnie Walker Scotch notes, label styles, serving ideas, pairings and city prices on BevOry.",
  },
  "virgin-hills": {
    description: "Virgin Hills is an Indian wine brand created for wines made from and for India. The range spans white, rose, red and sweet styles, making it a practical label for everyday Indian meals.",
    story: "The brand is led by Kunal Chug and Manohar Chug, with a mission built around approachable Indian wine. Virgin Hills keeps the focus on freshness, fruit and food compatibility rather than formal, old-world complexity.",
    tastingNotes: [
      { title: "Whites And Rose", description: "Expect citrus, orchard fruit, floral lift and fresh acidity in the lighter styles." },
      { title: "Reds And Sweet Wines", description: "Red styles bring berry fruit and spice, while sweeter pours lean toward ripe fruit and a softer finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites and rose chilled; pour reds slightly cool and sweet wines in smaller glasses." },
      { subheading: "Food", description: "Pair whites with malai tikka, rose with chaat, reds with kebabs, and sweet wines with fruit custard." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["malai tikka", "chaat", "seekh kebab", "grilled vegetables", "fruit custard"] }],
    whyChoose: "Virgin Hills is a useful Indian wine choice for casual tables where white, red and sweeter options all need space.",
    faqs: [
      { question: "What is Virgin Hills?", answer: "Virgin Hills is an Indian wine brand with white, rose, red and sweet styles." },
      { question: "Who leads Virgin Hills?", answer: "Virgin Hills is led by Kunal Chug and Manohar Chug." },
    ],
    finalVerdict: "Virgin Hills suits drinkers looking for easy Indian wines that fit snacks, casual dinners and lighter celebrations.",
    metaTitle: "Virgin Hills Wine Guide | BevOry",
    metaDescription: "Explore Virgin Hills Indian wine notes, serving ideas, food pairings and city prices on BevOry.",
  },
  sensi: {
    description: "Sensi is an Italian wine producer from Tuscany with family roots dating to 1890. The range covers Chianti, Sangiovese, Vermentino, Pinot Grigio, Prosecco and other regional Italian styles.",
    story: "The Sensi family story is anchored in Tuscan wine country, where everyday table wine and classic red grapes shape the brand's identity. Its modern catalogue stretches from Tuscan reds to crisp whites and sparkling bottles, giving the label strong restaurant-table flexibility.",
    tastingNotes: [
      { title: "Tuscan Reds", description: "Sangiovese-led wines show cherry, red plum, dried herbs, savoury spice and lively acidity." },
      { title: "Whites And Bubbles", description: "Pinot Grigio, Vermentino and Prosecco styles bring citrus, pear, white flowers and a clean finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve sparkling and white wines chilled; pour Chianti and other reds slightly cool with food." },
      { subheading: "Food", description: "Pair Chianti with tomato pasta or lamb; pour whites with tandoori prawns, bruschetta or fresh cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tomato pasta", "lamb chops", "tandoori prawns", "bruschetta", "fresh cheese"] }],
    whyChoose: "Sensi is a strong Italian table-wine pick for drinkers who want Tuscan reds plus crisp whites and sparkling serves.",
    faqs: [
      { question: "Where is Sensi wine from?", answer: "Sensi is from Tuscany, Italy." },
      { question: "What wine styles does Sensi make?", answer: "Sensi makes Italian reds, whites and sparkling wines, including Chianti, Sangiovese, Pinot Grigio, Vermentino and Prosecco." },
    ],
    finalVerdict: "Sensi is a handy Italian wine label for pizza nights, tomato-rich dishes, seafood starters and lighter celebrations.",
    metaTitle: "Sensi Wine Guide | BevOry",
    metaDescription: "Explore Sensi Tuscan wine notes, Chianti style, Prosecco serves, pairings and city prices on BevOry.",
  },
  "old-monk": {
    description: "Old Monk is an Indian rum brand from Mohan Meakin, best known for its dark rum style and the familiar squat bottle. The range includes dark rum, gold rum, white rum, flavoured rum and premium variants.",
    story: "Mohan Meakin traces its roots to the 19th-century brewery established at Kasauli before the company grew into a major Indian drinks house. Old Monk became a cultural favourite through canteens, college nostalgia, winter rum-and-cola serves and a loyal word-of-mouth following.",
    tastingNotes: [
      { title: "Dark Rum Core", description: "Caramel, molasses, vanilla, dried fruit and brown spice give the classic style its deep sweetness." },
      { title: "Mixer Friendly Finish", description: "The body is rounded and warming, with enough sweetness to handle cola, ginger ale or warm spiced serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small pour, over one cube, with cola, with ginger ale, or in a warm winter drink." },
      { subheading: "Food", description: "Pair with mutton seekh, smoky barbecue, chilli chicken, banana fritters or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "smoky barbecue", "chilli chicken", "banana fritters", "dark chocolate"] }],
    whyChoose: "Old Monk is India's cult rum choice for drinkers who like deep caramel sweetness and simple, nostalgic serves.",
    faqs: [
      { question: "Who makes Old Monk?", answer: "Old Monk is made by Mohan Meakin." },
      { question: "What type of rum is Old Monk known for?", answer: "Old Monk is best known for Indian dark rum with caramel, molasses and spice-led flavours." },
    ],
    finalVerdict: "Old Monk remains a comfort-pour rum for cola serves, winter nights and spicy Indian snacks.",
    metaTitle: "Old Monk Rum Guide | BevOry",
    metaDescription: "Explore Old Monk rum notes, Mohan Meakin heritage, serving ideas, pairings and city prices on BevOry.",
  },
  macallan: {
    description: "The Macallan is a Speyside single malt Scotch whisky founded in 1824 on the Easter Elchies estate. The distillery is known for small copper stills, natural colour and a major focus on sherry-seasoned oak casks from Jerez.",
    story: "Macallan built its reputation around wood management, especially European and American oak casks seasoned with sherry. Its house style favours dried fruit, orange, vanilla, spice and polished oak rather than peat smoke.",
    tastingNotes: [
      { title: "Sherry Oak Depth", description: "Raisin, fig, orange peel, chocolate, clove and polished oak shape many of the richer releases." },
      { title: "Double Cask Balance", description: "American oak influence adds vanilla, honey, citrus and a softer spice profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat in a tulip glass and taste before adding a few drops of water." },
      { subheading: "Food", description: "Pair with rogan josh, roast duck, aged cheddar, orange cake or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["rogan josh", "roast duck", "aged cheddar", "orange cake", "dark chocolate"] }],
    whyChoose: "The Macallan is a benchmark Speyside malt for drinkers who want sherry-cask richness, oak precision and no peat-heavy profile.",
    faqs: [
      { question: "Where is The Macallan made?", answer: "The Macallan is made in Speyside, Scotland, on the Easter Elchies estate." },
      { question: "What is The Macallan known for?", answer: "The Macallan is known for sherry-seasoned oak casks, small copper stills and natural colour." },
    ],
    finalVerdict: "The Macallan is the Speyside choice for drinkers who prize dried-fruit depth, elegant oak and a refined sipping experience.",
    metaTitle: "The Macallan Single Malt Guide | BevOry",
    metaDescription: "Explore The Macallan Speyside whisky notes, sherry oak style, pairings and city prices on BevOry.",
  },
  mcdowells: {
    description: "McDowell's is an Indian whisky and spirits name from United Spirits, now part of Diageo India. McDowell's No.1 is its best-known whisky label, built for approachable blended whisky serves across India.",
    story: "The McDowell's name comes from the old McDowell & Co. lineage that became part of India's large-format spirits industry. Recent brand work has refreshed the identity while keeping the label tied to friendship, everyday celebrations and affordable whisky occasions.",
    tastingNotes: [
      { title: "Blended Whisky Style", description: "Malt sweetness, cereal, caramel, light oak and spice give the whisky an easy mixing profile." },
      { title: "Highball Ready", description: "The finish is straightforward and warming, with enough body for soda, water or cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with water, soda or cola over ice, or pour a small neat measure before adding a mixer." },
      { subheading: "Food", description: "Pair with masala peanuts, tandoori chicken, chilli paneer, egg bhurji or smoky kebabs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["masala peanuts", "tandoori chicken", "chilli paneer", "egg bhurji", "smoky kebabs"] }],
    whyChoose: "McDowell's is a familiar Indian whisky choice for easy mixers, group pours and spicy snack tables.",
    faqs: [
      { question: "Who owns McDowell's?", answer: "McDowell's belongs to United Spirits, part of Diageo India." },
      { question: "What is McDowell's No.1?", answer: "McDowell's No.1 is the brand's well-known Indian blended whisky label." },
    ],
    finalVerdict: "McDowell's fits drinkers who want an accessible Indian whisky for soda, water and casual food pairings.",
    metaTitle: "McDowell's Whisky Guide | BevOry",
    metaDescription: "Explore McDowell's No.1 whisky notes, mixer ideas, Indian pairings and city prices on BevOry.",
  },
  piccini: {
    description: "Piccini is an Italian wine family founded in Tuscany in 1882 by Angiolo Piccini. The producer is best known for Chianti and Sangiovese-led wines, while its wider range reaches other Italian regions and sparkling styles.",
    story: "Four generations shaped Piccini from a small Tuscan family business into an internationally distributed Italian wine house. The brand keeps Tuscany at the centre but also works across regional estates, giving drinkers a broader map of Italian wine.",
    tastingNotes: [
      { title: "Chianti Character", description: "Cherry, red plum, violet, dried herbs and savoury spice define the classic Tuscan red profile." },
      { title: "Italian Range", description: "Fresh whites and sparkling styles bring citrus, pear, apple and clean acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chianti and other reds slightly cool; chill whites and sparkling bottles well." },
      { subheading: "Food", description: "Pair Chianti with pizza, tomato pasta, lamb chops or mushroom risotto; pour whites with seafood." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pizza", "tomato pasta", "lamb chops", "mushroom risotto", "seafood"] }],
    whyChoose: "Piccini is a reliable Italian wine pick for drinkers who want Tuscan red fruit and food-first acidity.",
    faqs: [
      { question: "When was Piccini founded?", answer: "Piccini was founded in Tuscany in 1882 by Angiolo Piccini." },
      { question: "What is Piccini known for?", answer: "Piccini is known for Tuscan wines, especially Chianti and Sangiovese-led reds." },
    ],
    finalVerdict: "Piccini is an easy choice for Italian-food nights, especially when tomato, herbs and grilled dishes are on the table.",
    metaTitle: "Piccini Wine Guide | BevOry",
    metaDescription: "Explore Piccini Tuscan wine notes, Chianti style, serving ideas, pairings and city prices on BevOry.",
  },
};
