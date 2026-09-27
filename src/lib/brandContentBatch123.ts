import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_123 = [
  ["old-admiral", "Old Admiral", "India", "Brandy", "brand-expansion-old-admiral"],
  ["regal-talon", "Regal Talon", "India", "Whisky", "brand-expansion-regal-talon"],
  ["whytehall", "Whytehall", "India", "Brandy", "brand-expansion-whytehall"],
  ["pluton-bay", "Pluton Bay", "India", "Rum", "brand-expansion-pluton-bay"],
  ["ankahi", "Ankahi", "India", "Liqueurs", "brand-expansion-ankahi"],
  ["morpheus-blue", "Morpheus Blue", "India", "Brandy", "brand-expansion-morpheus-blue"],
  ["zinzi", "Zinzi", "India", "Wine", "brand-expansion-zinzi"],
  ["bowmore", "Bowmore", "Scotland", "Single Malts", "lc-brand-90ae0146801951084eb6325a"],
  ["bruichladdich", "Bruichladdich", "Scotland", "Single Malts", "lc-brand-1b5c31088ff89c2860a37cac"],
  ["buffalo-trace", "Buffalo Trace", "United States", "World Whisky", "lc-brand-b0b68e8258af41cf30242068"],
] as const;

export const BRAND_LOGOS_BATCH_123: Record<string, string> = {
  "morpheus-blue": "https://static.livcheers.com/static/content/images/brand/morpheus.webp",
};

export const BRAND_SOURCES_BATCH_123: Record<string, string[]> = {
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
    "https://radicokhaitan.com/about-us/what-we-do/",
    "https://www.radicokhaitan.com/wp-content/uploads/2023/09/Annual-Report-RKL-2023.pdf",
  ],
  zinzi: [
    "https://www.business-standard.com/article/companies/united-spirits-winery-to-start-in-2008-108032700032_1.html",
    "https://www.bseindia.com/HIS_ANN_RPT/HISTANNR_BSE_ARCH/2010/5324320310.pdf",
  ],
  bowmore: [
    "https://www.bowmore.com/our-heritage",
    "https://www.bowmore.com/en-gb/about-us",
  ],
  bruichladdich: [
    "https://www.bruichladdich.com/pages/faqs",
    "https://www.bruichladdich.com/blogs/philosophy/terroir",
  ],
  "buffalo-trace": [
    "https://www.buffalotracedistillery.com/our-brands/bourbon/buffalo-trace-bourbon/",
  ],
};

export const BRAND_CONTENT_BATCH_123: Record<string, BrandPublicContent> = {
  "old-admiral": {
    description: "Old Admiral is an Indian brandy from Radico Khaitan, the Rampur-rooted IMFL company that began operations in 1943. Launched in 2002, it is built as a warm, aromatic brandy for everyday Indian drinking occasions.",
    story: "Radico moved from bulk spirits into owned labels with brands such as 8PM Whisky, Magic Moments Vodka and Old Admiral Brandy. Old Admiral became one of the company's major volume brandies, helped by a familiar profile of fruit, sweetness and gentle warmth.",
    tastingNotes: [
      { title: "Warm Fruit", description: "Raisin-like fruit, caramel and soft oak sweetness give the brandy an easy, rounded nose." },
      { title: "Mellow Finish", description: "The finish stays smooth and gently sweet, with enough warmth for small after-dinner pours." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour in a small snifter, over one cube, or with a little water when you want a lighter finish." },
      { subheading: "Food", description: "Pair with tandoori chicken, mutton seekh, dark chocolate, roasted cashews or caramel custard." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mutton seekh", "dark chocolate", "roasted cashews", "caramel custard"] }],
    whyChoose: "Old Admiral is a familiar Indian brandy for drinkers who want warmth, sweetness and Radico's broad distilling footprint.",
    faqs: [
      { question: "Who makes Old Admiral Brandy?", answer: "Old Admiral Brandy is made by Radico Khaitan." },
      { question: "When was Old Admiral launched?", answer: "Radico lists Old Admiral Brandy in its 2002 launch timeline." },
    ],
    finalVerdict: "Old Admiral is a dependable Indian brandy for simple sipping, rich snacks and dessert-led serves.",
    metaTitle: "Old Admiral Brandy Guide | BevOry",
    metaDescription: "Explore Old Admiral brandy notes, Radico history, serving ideas, food pairings and city prices on BevOry.",
  },
  "regal-talon": {
    description: "Regal Talon is an Indian premium grain whisky from Radico Khaitan. It combines Indian grain spirits with imported Scotch malts, giving the whisky a sweet grain base with a malt-led edge.",
    story: "Regal Talon sits inside Radico's whisky work, away from single malt and closer to India's large blended-whisky table. The label is pitched around smoothness, grain sweetness and Scotch-malt influence rather than heavy smoke.",
    tastingNotes: [
      { title: "Grain Sweetness", description: "Soft cereal, honeyed grain and light fruit make the opening approachable." },
      { title: "Malt Accent", description: "Woody malt, faint peat and a subtle saline note give the finish more grip." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with chilled water, soda or one large cube in a short glass." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, smoked paneer, pepper fry or seekh kebab." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "smoked paneer", "pepper fry", "seekh kebab"] }],
    whyChoose: "Regal Talon works when you want an Indian grain whisky with a Scotch-malt accent and easy soda compatibility.",
    faqs: [
      { question: "Who owns Regal Talon Whisky?", answer: "Regal Talon belongs to Radico Khaitan's Indian spirits portfolio." },
      { question: "What is Regal Talon made with?", answer: "It blends Indian grain spirits with imported aged Scotch malts." },
    ],
    finalVerdict: "Regal Talon is a practical Indian whisky for short pours, soda serves and smoky bar snacks.",
    metaTitle: "Regal Talon Whisky Guide | BevOry",
    metaDescription: "Explore Regal Talon whisky notes, Radico context, serving tips, food pairings and city prices on BevOry.",
  },
  whytehall: {
    description: "Whytehall Premium Brandy is an Indian brandy from Radico Khaitan. It is positioned as a polished after-dinner brandy with a rounded fruit profile and a long finish.",
    story: "Whytehall belongs to the Radico house that grew from Rampur Distillery into one of India's best-known IMFL companies. The brand's identity leans into a calmer, dinner-table drinking style rather than loud party cues.",
    tastingNotes: [
      { title: "Rounded Fruit", description: "Soft fruit, mild sweetness and warm brandy aroma shape the first sip." },
      { title: "Long Finish", description: "Gentle oak, mellow spice and clean warmth carry through the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small snifter, or add one cube if you prefer a softer pour." },
      { subheading: "Food", description: "Pair with galouti kebab, pepper chicken, caramel custard, aged cheddar or walnut cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebab", "pepper chicken", "caramel custard", "aged cheddar", "walnut cake"] }],
    whyChoose: "Whytehall is a measured Indian brandy choice for drinkers who prefer fruit, polish and slow warmth.",
    faqs: [
      { question: "Who makes Whytehall Brandy?", answer: "Whytehall is made by Radico Khaitan." },
      { question: "How should Whytehall be served?", answer: "Serve it neat in a small brandy glass, or over one cube after food." },
    ],
    finalVerdict: "Whytehall is best suited to quiet after-dinner pours and rich Indian starters.",
    metaTitle: "Whytehall Brandy Guide | BevOry",
    metaDescription: "Explore Whytehall brandy notes, Radico heritage, serving ideas, pairings and city prices on BevOry.",
  },
  "pluton-bay": {
    description: "Pluton Bay is an Indian premium dark rum from Radico Khaitan. Radico describes it as a spicy dark brown rum made with aged cane juice and neutral spirits.",
    story: "Pluton Bay sits in Radico's rum portfolio with an adventure-led identity and a darker, sweeter rum style. Its appeal is direct: cane sweetness, spice and a texture that works well with cola or dry ginger.",
    tastingNotes: [
      { title: "Dark Cane", description: "Brown sugar, molasses-like sweetness and vanilla give the rum its dark base." },
      { title: "Warm Spice", description: "Spice, caramel and a smooth rounded finish keep it mixer-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with cola, or with dry ginger and lime in a tall glass." },
      { subheading: "Food", description: "Pair with mutton seekh, grilled pineapple, chilli chicken, dark chocolate or spiced cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "grilled pineapple", "chilli chicken", "dark chocolate", "spiced cashews"] }],
    whyChoose: "Pluton Bay is a dark Indian rum for easy highballs, spice-led snacks and sweet cane flavour.",
    faqs: [
      { question: "Who makes Pluton Bay Rum?", answer: "Pluton Bay is made by Radico Khaitan." },
      { question: "What style is Pluton Bay?", answer: "It is a dark brown Indian rum with spice, cane sweetness and a smooth texture." },
    ],
    finalVerdict: "Pluton Bay is made for dark-rum highballs, grilled food and warm evening serves.",
    metaTitle: "Pluton Bay Rum Guide | BevOry",
    metaDescription: "Explore Pluton Bay dark rum notes, Radico context, serving ideas, pairings and city prices on BevOry.",
  },
  ankahi: {
    description: "Ankahi Zaffran is an Indian saffron-spiced liqueur from Radico Khaitan's Rampur Distillery. Unveiled at ProWein 2025, it is the first release in the Ankahi liqueur series.",
    story: "Ankahi extends Radico's premium work beyond whisky, gin and brandy into an Indian liqueur built around saffron. The Zaffran release uses Kashmir saffron with a botanical profile that includes familiar Indian spice notes.",
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
    description: "Morpheus Blue is an Indian XO premium brandy from Radico Khaitan. Launched in 2013, it sits as the richer, more indulgent extension of the Morpheus brandy family.",
    story: "Radico built Morpheus around premium Indian brandy and named the line after Morpheus, the Greek god associated with dreams. Morpheus Blue carries that theme into a deeper, more polished XO-style format.",
    tastingNotes: [
      { title: "Deep Fruit", description: "Ripe dried fruit, vanilla and warm oak give the aroma a richer tone." },
      { title: "Full Finish", description: "Smooth brandy sweetness, spice and mature wood carry through a long aftertaste." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a snifter or over one large cube after dinner." },
      { subheading: "Food", description: "Pair with mutton rogan josh, chocolate truffle, dried figs, aged gouda or walnut halwa." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "chocolate truffle", "dried figs", "aged gouda", "walnut halwa"] }],
    whyChoose: "Morpheus Blue is for brandy drinkers who want Radico's richer XO-style Indian expression.",
    faqs: [
      { question: "Who makes Morpheus Blue?", answer: "Morpheus Blue XO Premium Brandy is made by Radico Khaitan." },
      { question: "When was Morpheus Blue launched?", answer: "Radico lists Morpheus Blue XO Premium Brandy in its 2013 launch timeline." },
    ],
    finalVerdict: "Morpheus Blue is a richer Indian brandy for slow sipping, desserts and robust food pairings.",
    metaTitle: "Morpheus Blue Brandy Guide | BevOry",
    metaDescription: "Explore Morpheus Blue XO brandy notes, Radico context, serving ideas and city prices on BevOry.",
  },
  zinzi: {
    description: "Zinzi is an Indian wine label from the United Spirits and Four Seasons wine story. It was launched as an accessible red and white wine range linked with the Baramati wine operation in Maharashtra.",
    story: "United Spirits entered Indian wine through Four Seasons Wines, with Zinzi serving the entry-level side of the portfolio. The label helped introduce simple Indian table wines before Four Seasons moved further into varietal wines and premium labels.",
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
      { question: "Where is Zinzi wine linked to?", answer: "Zinzi is linked with the Four Seasons wine operation near Baramati in Maharashtra." },
      { question: "What styles did Zinzi offer?", answer: "Zinzi was known for accessible red and white Indian table wines." },
    ],
    finalVerdict: "Zinzi works as an easy Indian table wine for casual meals and lightly spiced snacks.",
    metaTitle: "Zinzi Wine Guide | BevOry",
    metaDescription: "Explore Zinzi Indian wine notes, Baramati context, red and white styles, pairings and city prices on BevOry.",
  },
  bowmore: {
    description: "Bowmore is an Islay single malt Scotch whisky distillery founded in 1779. The house style balances peat smoke with citrus, honey, dark sweetness and coastal character.",
    story: "Bowmore calls itself the oldest distillery on Islay and Scotland's second oldest licensed whisky distillery. Its island setting, warehouse maturation and measured peat style give the whisky a softer Islay identity than the most medicinal malts.",
    tastingNotes: [
      { title: "Smoke And Citrus", description: "Lemon, heather honey and gentle peat smoke form the classic Bowmore opening." },
      { title: "Sherry Warmth", description: "Dark chocolate, dried fruit and sweet oak add depth to the smoky finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass, then add a few drops of water to soften the smoke." },
      { subheading: "Food", description: "Pair with smoked fish, tandoori prawns, lamb kebab, dark chocolate or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked fish", "tandoori prawns", "lamb kebab", "dark chocolate", "aged cheddar"] }],
    whyChoose: "Bowmore is a classic Islay pick for peat smoke balanced by citrus, honey and sherry-cask fruit.",
    faqs: [
      { question: "Where is Bowmore whisky made?", answer: "Bowmore is made on Islay in Scotland." },
      { question: "What does Bowmore taste like?", answer: "Expect citrus, honey, dark sweetness and gentle Islay peat smoke." },
    ],
    finalVerdict: "Bowmore is a reliable Islay malt for smoke, fruit and coastal warmth without overwhelming the glass.",
    metaTitle: "Bowmore Single Malt Guide | BevOry",
    metaDescription: "Explore Bowmore Islay whisky notes, peat style, serving tips, food pairings and city prices on BevOry.",
  },
  bruichladdich: {
    description: "Bruichladdich is an Islay single malt Scotch whisky distillery known for unpeated Bruichladdich releases, heavily peated Port Charlotte and super-heavily peated Octomore. Its work focuses strongly on barley provenance and Islay identity.",
    story: "Bruichladdich separates its whisky families clearly: Bruichladdich for unpeated spirit, Port Charlotte for heavy peat and Octomore for extreme peat. The distillery also highlights Islay-grown barley, Bere barley and organic barley as part of its raw-material story.",
    tastingNotes: [
      { title: "Classic Laddie", description: "Cereal sweetness, orchard fruit, floral notes and coastal freshness define the unpeated side." },
      { title: "Peated Lines", description: "Port Charlotte and Octomore bring smoke, sea air, malt sweetness and heavier peat intensity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a nosing glass and add water slowly to open barley and coastal notes." },
      { subheading: "Food", description: "Pair unpeated Bruichladdich with grilled fish or paneer tikka; match peated releases with kebabs, smoked meats or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "paneer tikka", "mutton kebab", "smoked meats", "dark chocolate"] }],
    whyChoose: "Bruichladdich is ideal when you want Islay whisky with clear barley detail and carefully separated peat styles.",
    faqs: [
      { question: "Is Bruichladdich peated?", answer: "Bruichladdich-branded single malts are unpeated; Port Charlotte and Octomore are the peated lines from the same distillery." },
      { question: "What is Bruichladdich known for?", answer: "It is known for Islay provenance, barley focus and distinct unpeated, peated and super-peated whisky families." },
    ],
    finalVerdict: "Bruichladdich gives Islay drinkers a broader view of the island through barley, texture and separated peat styles.",
    metaTitle: "Bruichladdich Whisky Guide | BevOry",
    metaDescription: "Explore Bruichladdich Islay whisky, barley focus, peat styles, serving ideas and city prices on BevOry.",
  },
  "buffalo-trace": {
    description: "Buffalo Trace is a Kentucky Straight Bourbon Whiskey from Buffalo Trace Distillery in Frankfort, Kentucky. It is the distillery's flagship bourbon and uses Mash Bill #1.",
    story: "The name refers to ancient buffalo paths that helped guide early pioneers west, including a trail through the Kentucky distillery site. Buffalo Trace carries more than two centuries of distilling heritage into a sweet, oak-driven bourbon style.",
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
      { question: "Where is Buffalo Trace made?", answer: "Buffalo Trace is made at Buffalo Trace Distillery in Frankfort, Kentucky." },
    ],
    finalVerdict: "Buffalo Trace is a go-to bourbon for classic Kentucky sweetness, oak structure and cocktail range.",
    metaTitle: "Buffalo Trace Bourbon Guide | BevOry",
    metaDescription: "Explore Buffalo Trace bourbon notes, Mash Bill #1, cocktail serves, food pairings and city prices on BevOry.",
  },
};
