import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_127 = [
  ["old-admiral", "Old Admiral", "India", "Brandy", "brand-expansion-old-admiral"],
  ["regal-talon", "Regal Talon", "India", "Whisky", "brand-expansion-regal-talon"],
  ["whytehall", "Whytehall", "India", "Brandy", "brand-expansion-whytehall"],
  ["pluton-bay", "Pluton Bay", "India", "Rum", "brand-expansion-pluton-bay"],
  ["ankahi", "Ankahi", "India", "Liqueurs", "brand-expansion-ankahi"],
  ["morpheus-blue", "Morpheus Blue", "India", "Brandy", "brand-expansion-morpheus-blue"],
  ["zinzi", "Zinzi", "India", "Wine", "brand-expansion-zinzi"],
  ["suntory-toki", "Suntory Toki", "Japan", "World Whisky", "brand-expansion-suntory-toki"],
  ["hakushu", "Hakushu", "Japan", "Single Malts", "brand-expansion-hakushu"],
  ["ao", "Suntory Ao", "Japan", "World Whisky", "brand-expansion-ao"],
] as const;

export const BRAND_LOGOS_BATCH_127: Record<string, string> = {
  "morpheus-blue": "https://static.livcheers.com/static/content/images/brand/morpheus.webp",
};

export const BRAND_SOURCES_BATCH_127: Record<string, string[]> = {
  "old-admiral": [
    "https://radicokhaitan.com/products/old-admiral-brandy/",
    "https://radicokhaitan.com/about-us/what-we-do/",
  ],
  "regal-talon": [
    "https://www.radicokhaitan.com/wp-content/uploads/2019/05/CLT3TAB105CAT560_20190123081000.pdf",
    "https://radicokhaitan.com/about-us/what-we-do/",
  ],
  whytehall: [
    "https://www.radicokhaitan.com/wp-content/uploads/2019/09/RKL-FY-2019-ANNUAL-REPORT.pdf",
    "https://radicokhaitan.com/about-us/what-we-do/",
  ],
  "pluton-bay": [
    "https://www.radicokhaitan.com/wp-content/uploads/2019/09/RKL-FY-2019-ANNUAL-REPORT.pdf",
    "https://radicokhaitan.com/about-us/what-we-do/",
  ],
  ankahi: [
    "https://radicokhaitan.com/wp-content/uploads/2025/03/Press-Release-March-17-2025.pdf",
    "https://www.prnewswire.com/news-releases/radico-khaitans-rampur-distillery-unveils-ankahi-zaffran-spiced-liqueur-at-the-prowein-2025-in-dusseldorf-germany-302402428.html",
  ],
  "morpheus-blue": [
    "https://radicokhaitan.com/products/morpheus-blue-xo-premium-brandy/",
    "https://radicokhaitan.com/about-us/what-we-do/",
  ],
  zinzi: [
    "https://www.business-standard.com/article/companies/united-spirits-winery-to-start-in-2008-108032700032_1.html",
    "https://www.bseindia.com/HIS_ANN_RPT/HISTANNR_BSE_ARCH/2010/5324320310.pdf",
  ],
  "suntory-toki": [
    "https://house.suntory.com/toki-whisky",
    "https://www.suntoryglobalspirits.com/news/house-suntory-whisky-announces-introduction-suntory-whisky-toki",
  ],
  hakushu: [
    "https://www.suntory.com/factory/hakushu/introduction/",
    "https://house.suntory.com/hakushu-whisky/hakushu-distillery",
  ],
  ao: [
    "https://house.suntory.com/ao-whisky/ao-world-whisky",
    "https://www.suntoryglobalspirits.com/en-in/our-brands/whiskey",
  ],
};

export const BRAND_CONTENT_BATCH_127: Record<string, BrandPublicContent> = {
  "old-admiral": {
    description: "Old Admiral is an Indian brandy from Radico Khaitan, the Rampur-rooted spirits company that began operations in 1943. The brand sits in Radico's regular segment and is known for a warm, aromatic brandy profile.",
    story: "Radico built Old Admiral after moving from bulk spirits into owned labels such as 8PM Whisky and Magic Moments Vodka. The brand became one of India's major volume brandies by staying close to a familiar mix of fruit, sweetness and gentle heat.",
    tastingNotes: [
      { title: "Warm Fruit", description: "Raisin, caramel and soft oak sweetness give the brandy an easy, rounded nose." },
      { title: "Mellow Finish", description: "The finish is smooth, gently sweet and warming without turning sharp." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour in a small snifter, over one cube, or with a little water after dinner." },
      { subheading: "Food", description: "Pair with tandoori chicken, mutton seekh, dark chocolate, roasted cashews or caramel custard." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mutton seekh", "dark chocolate", "roasted cashews", "caramel custard"] }],
    whyChoose: "Old Admiral is a dependable Indian brandy for drinkers who want sweetness, warmth and a familiar Radico profile.",
    faqs: [
      { question: "Who makes Old Admiral Brandy?", answer: "Old Admiral Brandy is made by Radico Khaitan." },
      { question: "What style is Old Admiral?", answer: "Old Admiral is an Indian brandy with fruit, caramel and warm spice-led notes." },
    ],
    finalVerdict: "Old Admiral works best as a simple after-dinner brandy with rich snacks and desserts.",
    metaTitle: "Old Admiral Brandy Guide | BevOry",
    metaDescription: "Explore Old Admiral brandy notes, Radico history, serving ideas, food pairings and city prices on BevOry.",
  },
  "regal-talon": {
    description: "Regal Talon is an Indian premium grain whisky from Radico Khaitan. It is built around Indian grain spirits with imported Scotch malt influence, giving it a soft base and a lightly malty edge.",
    story: "Regal Talon belongs to Radico's whisky portfolio, positioned away from single malt and closer to India's blended-whisky drinking table. Its appeal is smoothness, grain sweetness and easy compatibility with water or soda.",
    tastingNotes: [
      { title: "Grain Sweetness", description: "Cereal, honeyed grain and light fruit make the opening approachable." },
      { title: "Malt Accent", description: "Woody malt, faint smoke and a subtle savoury note give the finish more grip." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with chilled water, soda or one large cube in a short glass." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, smoked paneer, pepper fry or seekh kebab." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "smoked paneer", "pepper fry", "seekh kebab"] }],
    whyChoose: "Regal Talon is a practical Indian whisky when you want a smooth grain pour with a Scotch-malt accent.",
    faqs: [
      { question: "Who owns Regal Talon Whisky?", answer: "Regal Talon belongs to Radico Khaitan's Indian spirits portfolio." },
      { question: "How should Regal Talon be served?", answer: "Serve it with chilled water, soda or ice, especially alongside spicy snacks." },
    ],
    finalVerdict: "Regal Talon fits short whisky pours, soda serves and smoky bar snacks.",
    metaTitle: "Regal Talon Whisky Guide | BevOry",
    metaDescription: "Explore Regal Talon whisky notes, Radico context, serving tips, food pairings and city prices on BevOry.",
  },
  whytehall: {
    description: "Whytehall Premium Brandy is an Indian brandy from Radico Khaitan. It is positioned as a polished, dinner-table brandy with rounded fruit, mild spice and a steady finish.",
    story: "Whytehall comes from the Radico house that grew from Rampur Distillery into one of India's best-known IMFL companies. The brand's identity is calmer than Radico's louder party labels, leaning toward slow pours after food.",
    tastingNotes: [
      { title: "Rounded Fruit", description: "Soft fruit, mild sweetness and warm brandy aroma shape the first sip." },
      { title: "Long Finish", description: "Gentle oak, mellow spice and clean warmth carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small brandy glass, or over one cube if you prefer a softer pour." },
      { subheading: "Food", description: "Pair with galouti kebab, pepper chicken, caramel custard, aged cheddar or walnut cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebab", "pepper chicken", "caramel custard", "aged cheddar", "walnut cake"] }],
    whyChoose: "Whytehall is a measured Indian brandy choice for drinkers who prefer fruit, polish and slow warmth.",
    faqs: [
      { question: "Who makes Whytehall Brandy?", answer: "Whytehall is made by Radico Khaitan." },
      { question: "What food pairs with Whytehall?", answer: "Try it with pepper chicken, galouti kebab, caramel custard or walnut cake." },
    ],
    finalVerdict: "Whytehall is best suited to quiet after-dinner pours and rich Indian starters.",
    metaTitle: "Whytehall Brandy Guide | BevOry",
    metaDescription: "Explore Whytehall brandy notes, Radico heritage, serving ideas, pairings and city prices on BevOry.",
  },
  "pluton-bay": {
    description: "Pluton Bay is an Indian dark rum from Radico Khaitan. It is a brown, spice-led rum style built for cola, ginger ale and easy evening highballs.",
    story: "Pluton Bay sits inside Radico's rum work with an adventure-led identity and a darker, sweeter profile. The drinker's hook is direct: cane sweetness, spice and enough body for mixer-heavy serves.",
    tastingNotes: [
      { title: "Dark Cane", description: "Brown sugar, caramel and vanilla give the rum its dark, sweet base." },
      { title: "Warm Spice", description: "Gentle spice, rounded texture and a smooth finish keep it mixer-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with cola, or with dry ginger and lime in a tall glass." },
      { subheading: "Food", description: "Pair with mutton seekh, grilled pineapple, chilli chicken, dark chocolate or spiced cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "grilled pineapple", "chilli chicken", "dark chocolate", "spiced cashews"] }],
    whyChoose: "Pluton Bay is a dark Indian rum for easy highballs, spice-led snacks and sweet cane flavour.",
    faqs: [
      { question: "Who makes Pluton Bay Rum?", answer: "Pluton Bay is made by Radico Khaitan." },
      { question: "What style is Pluton Bay?", answer: "Pluton Bay is a dark Indian rum with cane sweetness, caramel and warm spice." },
    ],
    finalVerdict: "Pluton Bay is made for dark-rum highballs, grilled food and warm evening serves.",
    metaTitle: "Pluton Bay Rum Guide | BevOry",
    metaDescription: "Explore Pluton Bay dark rum notes, Radico context, serving ideas, pairings and city prices on BevOry.",
  },
  ankahi: {
    description: "Ankahi Zaffran is an Indian saffron-spiced liqueur from Radico Khaitan's Rampur Distillery. Unveiled at ProWein 2025, it is the first release in the Ankahi liqueur series.",
    story: "Ankahi extends Radico's premium work beyond whisky, gin and brandy into a liqueur built around Indian flavour cues. The Zaffran release uses Kashmir saffron with clove, cardamom and cinnamon notes.",
    tastingNotes: [
      { title: "Saffron Core", description: "Floral saffron leads, supported by clove, cardamom and cinnamon warmth." },
      { title: "Sweet Spice", description: "A smooth sweet base carries herbal lift, gentle spice and a lingering golden finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a small liqueur glass, over ice, or in a citrus-forward cocktail." },
      { subheading: "Food", description: "Pair with phirni, kesar kulfi, baklava, salted almonds or blue cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["phirni", "kesar kulfi", "baklava", "salted almonds", "blue cheese"] }],
    whyChoose: "Ankahi brings saffron, Indian spice and dessert-friendly sweetness into a distinctive modern liqueur.",
    faqs: [
      { question: "What is Ankahi Zaffran?", answer: "Ankahi Zaffran is a saffron-spiced Indian liqueur from Radico Khaitan's Rampur Distillery." },
      { question: "When was Ankahi Zaffran unveiled?", answer: "Radico unveiled Ankahi Zaffran at ProWein 2025 in Dusseldorf." },
    ],
    finalVerdict: "Ankahi is a saffron-led liqueur for chilled dessert pours and Indian-inspired cocktails.",
    metaTitle: "Ankahi Liqueur Guide | BevOry",
    metaDescription: "Explore Ankahi Zaffran liqueur notes, saffron style, serving ideas, pairings and city prices on BevOry.",
  },
  "morpheus-blue": {
    description: "Morpheus Blue is an Indian XO premium brandy from Radico Khaitan. It is the richer extension of the Morpheus brandy family, made for a deeper, more polished sipping style.",
    story: "Radico built Morpheus around premium Indian brandy and named the line after Morpheus, the Greek figure linked with dreams. Morpheus Blue carries that identity into a darker, fuller XO-style expression.",
    tastingNotes: [
      { title: "Deep Fruit", description: "Ripe dried fruit, vanilla and warm oak give the aroma a richer tone." },
      { title: "Full Finish", description: "Smooth brandy sweetness, spice and mature wood carry a long aftertaste." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a snifter or over one large cube after dinner." },
      { subheading: "Food", description: "Pair with mutton rogan josh, chocolate truffle, dried figs, aged gouda or walnut halwa." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "chocolate truffle", "dried figs", "aged gouda", "walnut halwa"] }],
    whyChoose: "Morpheus Blue is for brandy drinkers who want Radico's richer XO-style Indian expression.",
    faqs: [
      { question: "Who makes Morpheus Blue?", answer: "Morpheus Blue XO Premium Brandy is made by Radico Khaitan." },
      { question: "How should Morpheus Blue be served?", answer: "Serve it neat in a snifter or over one large cube with dessert or rich food." },
    ],
    finalVerdict: "Morpheus Blue is a richer Indian brandy for slow sipping, desserts and robust food pairings.",
    metaTitle: "Morpheus Blue Brandy Guide | BevOry",
    metaDescription: "Explore Morpheus Blue XO brandy notes, Radico context, serving ideas and city prices on BevOry.",
  },
  zinzi: {
    description: "Zinzi is an Indian wine label linked to United Spirits' Four Seasons wine business in Maharashtra. It was introduced as an accessible red and white wine range for casual Indian tables.",
    story: "United Spirits entered wine through Four Seasons Wines, with Zinzi serving the entry-level side of the portfolio. The label helped place simple Indian table wine in front of drinkers before the market moved deeper into varietal and estate-led bottles.",
    tastingNotes: [
      { title: "Zinzi Red", description: "Soft red fruit, mild tannins and a smooth finish suit easy table-wine service." },
      { title: "Zinzi White", description: "Light citrus, orchard fruit and fresh acidity work best when served chilled." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Zinzi White chilled and pour Zinzi Red slightly cool in a regular wine glass." },
      { subheading: "Food", description: "Pair the white with chilli paneer or fried fish; pair the red with kebabs, pizza or butter chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "fried fish", "kebabs", "pizza", "butter chicken"] }],
    whyChoose: "Zinzi is a straightforward Indian wine choice when you want simple red or white pours with familiar food.",
    faqs: [
      { question: "What is Zinzi wine?", answer: "Zinzi is an accessible Indian red and white wine label linked to the Four Seasons wine business." },
      { question: "How should Zinzi be served?", answer: "Serve the white chilled and the red slightly cool with casual food." },
    ],
    finalVerdict: "Zinzi works as an easy Indian table wine for casual meals and lightly spiced snacks.",
    metaTitle: "Zinzi Wine Guide | BevOry",
    metaDescription: "Explore Zinzi Indian wine notes, red and white styles, food pairings and city prices on BevOry.",
  },
  "suntory-toki": {
    description: "Suntory Toki is a Japanese blended whisky from the House of Suntory. It brings together whiskies from Hakushu, Yamazaki and Chita, with a bright style built for cold, sparkling highballs.",
    story: "Toki means time, and the bottle presents Suntory blending in a modern, easy-drinking format. The blend highlights Chita grain whisky with Hakushu malt freshness and Yamazaki depth.",
    tastingNotes: [
      { title: "Highball Core", description: "Green apple, citrus, basil-like freshness and light vanilla lift easily through soda." },
      { title: "Soft Finish", description: "Chita grain whisky keeps the mouthfeel gentle, clean and lightly sweet." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build in a chilled highball glass with clear ice, one part whisky and cold soda." },
      { subheading: "Food", description: "Pair with chicken yakitori, chilli paneer, tempura prawns, salted edamame or karaage." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken yakitori", "chilli paneer", "tempura prawns", "salted edamame", "karaage"] }],
    whyChoose: "Suntory Toki is the bottle to choose when Japanese whisky needs to feel bright, cold and social.",
    faqs: [
      { question: "Is Suntory Toki a single malt?", answer: "No. Suntory Toki is a blended whisky made with malt and grain whiskies." },
      { question: "How should Suntory Toki be served?", answer: "It is best known as a Japanese highball with cold soda and ice." },
    ],
    finalVerdict: "Toki is a highball-first Japanese whisky that turns light fruit and grain softness into refreshment.",
    metaTitle: "Suntory Toki Whisky Guide | BevOry",
    metaDescription: "Explore Suntory Toki Japanese whisky, highball serves, tasting notes, pairings and city prices on BevOry.",
  },
  hakushu: {
    description: "Hakushu is a Japanese single malt whisky made at Suntory's Hakushu Distillery in Yamanashi. Established in 1973, the distillery sits in a forested setting at the foot of the Southern Japan Alps.",
    story: "Suntory built Hakushu half a century after Yamazaki, creating a second malt distillery with a greener, mountain-forest identity. The whisky is known for fresh herbal tones, crisp fruit and a light smoky thread.",
    tastingNotes: [
      { title: "Forest Freshness", description: "Mint, green apple, pear and fresh herbs give Hakushu its cool aromatic lift." },
      { title: "Light Smoke", description: "A measured smoky thread sits behind citrus, cereal and clean oak." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste neat first, then try a forest-style highball with chilled soda and plenty of ice." },
      { subheading: "Food", description: "Pair with tandoori fish, grilled asparagus, chicken yakitori, smoked paneer or lemon sushi rolls." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "grilled asparagus", "chicken yakitori", "smoked paneer", "lemon sushi rolls"] }],
    whyChoose: "Hakushu is a Japanese single malt for drinkers who prefer green freshness over heavy oak.",
    faqs: [
      { question: "Where is Hakushu whisky made?", answer: "Hakushu is made at Suntory's Hakushu Distillery in Yamanashi, Japan." },
      { question: "When was Hakushu Distillery established?", answer: "Suntory established Hakushu Distillery in 1973." },
    ],
    finalVerdict: "Hakushu brings mountain herbs, orchard fruit and light smoke into a clean Japanese malt style.",
    metaTitle: "Hakushu Whisky Guide | BevOry",
    metaDescription: "Explore Hakushu Japanese single malt, forest notes, highball serves, pairings and city prices on BevOry.",
  },
  ao: {
    description: "Suntory Ao is a world blended whisky from the House of Suntory. It blends whiskies from five major whisky-making regions: Japan, Scotland, Ireland, Canada and the United States.",
    story: "Ao means blue, a reference to the ocean connecting the countries behind the blend. Suntory uses the whisky to show different climates, grains and distilling traditions through a Japanese blending lens.",
    tastingNotes: [
      { title: "Fruit And Vanilla", description: "Pineapple, vanilla, creamy sweetness and gentle oak open the whisky." },
      { title: "Smoke And Spice", description: "Cinnamon spice, light smoke and woody depth give the finish more range than a simple blend." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass or lengthen with soda when you want a lighter whisky table." },
      { subheading: "Food", description: "Pair with smoked chicken, galouti kebabs, yakitori, roasted almonds or cinnamon apple tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "galouti kebabs", "yakitori", "roasted almonds", "cinnamon apple tart"] }],
    whyChoose: "Suntory Ao is useful when you want a single bottle that shows world whisky through a Japanese blending lens.",
    faqs: [
      { question: "What is Suntory Ao?", answer: "Suntory Ao is a world blended whisky made with whiskies from five major whisky regions." },
      { question: "What does Ao mean?", answer: "Ao means blue, referring to the ocean connecting the countries in the blend." },
    ],
    finalVerdict: "Suntory Ao is a layered world blend with enough fruit, spice and smoke to hold a mixed table.",
    metaTitle: "Suntory Ao Whisky Guide | BevOry",
    metaDescription: "Explore Suntory Ao world whisky, five-region blending, tasting notes, pairings and city prices on BevOry.",
  },
};
