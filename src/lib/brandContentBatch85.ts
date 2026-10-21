import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_85 = [
  ["glenside-d-vine", "Glenside D'Vine", "Australia", "Wine", "pending-glenside-d-vine"],
  ["globus", "Globus", "India", "Indian Spirits", "pending-globus"],
  ["goa", "Goa", "India", "Indian Spirits", "pending-goa"],
  ["gods-own-vsop", "God's Own VSOP", "India", "Brandy", "pending-gods-own-vsop"],
  ["gold-crest-french", "Gold Crest French", "India", "Brandy", "pending-gold-crest-french"],
  ["gold-mark", "Gold Mark", "India", "Brandy", "pending-gold-mark"],
  ["gold-riband", "Gold Riband", "India", "Indian Whisky", "pending-gold-riband"],
  ["golden-hart", "Golden Hart", "India", "Beer", "pending-golden-hart"],
  ["golden-river", "Golden River", "India", "Brandy", "pending-golden-river"],
  ["golden-sparrow", "Golden Sparrow", "Italy", "Wine", "pending-golden-sparrow"],
] as const;

export const BRAND_LOGOS_BATCH_85: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_85: Record<string, string[]> = {
  "glenside-d-vine": [
    "https://www.linkedin.com/pulse/glenside-dvine-journey-from-south-australias-vineyards-vibhuti-dixit-dc6jc",
    "https://www.bevory.in/gurgaon/product/glenside-d-vine-chardonnay-wine-5474e9b",
    "https://www.bevory.in/gurgaon/product/glenside-d-vine-2020-shiraz-aff78a9",
  ],
  globus: [
    "https://www.globusspirits.com/documents/Globus-Spirit-AR-24-25-8mb.pdf",
    "https://www.globusspirits.com/documents/GSL_Annual_Report_2023_FINAL.pdf",
    "https://www.bevory.in/gurgaon/product/globus-spirits-green-premium-whisky-bc7145d",
  ],
  goa: [
    "https://www.livcheers.com/thane/liquor/goa-spirit-of-smoothness-xxx-rum-750ml",
    "https://goabrewing.co/",
    "https://www.bevory.in/gurgaon/product/goa-spirit-of-smoothness-whisky-d2d19e5",
  ],
  "gods-own-vsop": [
    "https://sarakku.in/price/gods-own-vsop-brandy/",
    "https://osbc.co.in/NewIncludes/UploadFiles/MRP01042020.pdf",
    "https://www.bevory.in/gurgaon/product/gods-own-vsop-god-own-vsop-brandy-4b4ee45",
  ],
  "gold-crest-french": [
    "https://www.bevory.in/gurgaon/product/gold-crest-french-gold-crest-french-legacy-premium-brandy-c15271e",
    "https://liquorsprices.com/vsop-brandy-price/",
  ],
  "gold-mark": [
    "https://www.bevory.in/gurgaon/product/gold-mark-gold-mark-vsop-brandy-c939aa8",
    "https://liquorsprices.com/vsop-brandy-price/",
  ],
  "gold-riband": [
    "https://www.livcheers.com/kota/liquor/gold-riband-deluxe-whisky-375ml",
    "https://mycorporateinfo.com/trademark/gold-riband-deluxe-whisky/999167",
    "https://www.bevory.in/gurgaon/product/gold-riband-deluxe-whisky-03880f4",
  ],
  "golden-hart": [
    "https://www.bevory.in/gurgaon/product/golden-hart-ultra-strong-beer-331426e",
  ],
  "golden-river": [
    "https://www.livcheers.com/hyderabad/liquor/golden-river-vsop-brandy-750ml",
    "https://www.bevory.in/gurgaon/product/golden-river-golden-river-vsop-brandy-418cf12",
  ],
  "golden-sparrow": [
    "https://www.vivino.com/en/golden-sparrow-sangiovese/w/1755835",
    "https://en.winedexer.com/wine/golden-sparrow",
    "https://www.bevory.in/gurgaon/product/golden-sparrow-pinot-grigio-3f736d0",
  ],
};

export const BRAND_CONTENT_BATCH_85: Record<string, BrandPublicContent> = {
  "glenside-d-vine": {
    description: "Glenside D'Vine is an Australian wine label seen on BevOry through Chardonnay and Shiraz bottles. Its India-facing story points to South Australian vineyards and a fruit-forward style made for clear varietal recognition.",
    story: "The label reached Indian drinkers through Glenside D'Vine Shiraz and Chardonnay listings. Shiraz brings South Australia's ripe red-fruit depth, while Chardonnay gives the range a cooler white-wine counterpoint.",
    tastingNotes: [
      { title: "Shiraz", description: "Black plum, mulberry, pepper and soft oak spice shape the red-wine side of the label." },
      { title: "Chardonnay", description: "Apple, melon, citrus peel and a rounded texture make the white wine easy with food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled in a white-wine glass; pour Shiraz slightly cool and give it a few minutes in a large glass." },
      { subheading: "Food", description: "Pair Chardonnay with tandoori fish or butter garlic prawns; match Shiraz with seekh kebabs, pepper chicken or mushroom galouti." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "butter garlic prawns", "seekh kebabs", "pepper chicken", "mushroom galouti"] }],
    whyChoose: "Glenside D'Vine gives Indian wine shoppers a simple Australian red-and-white choice built around Shiraz and Chardonnay.",
    faqs: [
      { question: "What wines are listed under Glenside D'Vine?", answer: "BevOry has Glenside D'Vine routes for Chardonnay and Shiraz." },
      { question: "Is Glenside D'Vine a sweet wine label?", answer: "Its listed Chardonnay and Shiraz sit closer to familiar still-table-wine styles than dessert wine." },
    ],
    finalVerdict: "Glenside D'Vine is a useful pick when you want Australian varietal wine without a complicated label story.",
    metaTitle: "Glenside D'Vine Wine Guide | BevOry",
    metaDescription: "Explore Glenside D'Vine Chardonnay and Shiraz notes, serving ideas, pairings and city prices on BevOry.",
  },
  globus: {
    description: "Globus is the consumer-facing name tied to Globus Spirits Limited, an Indian alco-bev company with whisky, gin, rum and other spirits. On BevOry, the page connects bottles such as Green Premium Whisky, Globus Dry Gin and Black Lace XXX Rum.",
    story: "Globus Spirits reports a wide Indian production footprint and a brand portfolio spanning regular, prestige and craft segments. Its newer premium work sits alongside long-running value labels, giving the brand name reach across gin, whisky and rum shelves.",
    tastingNotes: [
      { title: "Dry Gin", description: "Juniper, citrus peel and light spice make the gin side bright enough for tonic and lime." },
      { title: "Dark Spirits", description: "The whisky and rum listings lean into grain sweetness, caramel, oak spice and molasses warmth." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build the gin with tonic and citrus; pour whisky with soda or ice; use XXX rum with cola, lime or ginger ale." },
      { subheading: "Food", description: "Pair gin with tandoori prawns, whisky with chicken tikka, and rum with pepper fry or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chicken tikka", "pepper fry", "masala peanuts", "dark chocolate"] }],
    whyChoose: "Globus is useful on BevOry because one Indian producer name links gin, whisky and rum bottles in the same local search path.",
    faqs: [
      { question: "What is Globus on BevOry?", answer: "Globus is listed through Indian spirit bottles from Globus Spirits, including gin, whisky and rum." },
      { question: "Who is behind Globus spirits?", answer: "Globus Spirits Limited is an Indian spirits company headquartered in Delhi." },
    ],
    finalVerdict: "Globus is best read as a broad Indian spirits page for shoppers comparing gin, whisky and rum by city.",
    metaTitle: "Globus Indian Spirits Guide | BevOry",
    metaDescription: "Explore Globus gin, whisky and rum notes, serving ideas, Indian pairings and city prices on BevOry.",
  },
  goa: {
    description: "Goa is listed on BevOry through Goa Spirit of Smoothness whisky, Tango and XXX rum, with additional Goa-linked beverage routes. The brand signal is coastal, easy-drinking Indian spirits rather than a single imported style.",
    story: "Goa's alcohol identity is shaped by beach bars, feni heritage, rum-and-cola serves and newer local beer culture. The BevOry routes keep that broad Goa drinking context visible across whisky, rum and casual party bottles.",
    tastingNotes: [
      { title: "Smoothness Cue", description: "The whisky listing points toward soft grain, vanilla, mild spice and a rounded highball finish." },
      { title: "Rum Lane", description: "The XXX rum side brings caramel, molasses, cola spice and a warmer aftertaste." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whisky with soda or ice; build rum with cola, lime, ginger ale or coconut water for a coastal long drink." },
      { subheading: "Food", description: "Pair with Goan prawn curry, recheado fish, chilli chicken, potato chops or cashew-forward snacks." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Goan prawn curry", "recheado fish", "chilli chicken", "potato chops", "roasted cashews"] }],
    whyChoose: "Goa is a clear page for drinkers searching coastal Indian whisky and rum names in one place.",
    faqs: [
      { question: "What products appear under Goa on BevOry?", answer: "The Goa routes include Goa Spirit of Smoothness whisky, Tango and XXX rum listings." },
      { question: "What mixers suit Goa rum?", answer: "Cola, lime, ginger ale and coconut water suit the rum-style listings." },
    ],
    finalVerdict: "Goa works as a relaxed Indian spirits page for beach-style highballs, rum mixers and spicy snacks.",
    metaTitle: "Goa Spirits Guide | BevOry",
    metaDescription: "Explore Goa whisky and rum notes, coastal serves, food pairings and city prices on BevOry.",
  },
  "gods-own-vsop": {
    description: "God's Own VSOP is an Indian-market brandy listed on BevOry in 750 ml format. Public excise and retail references place the label in the VSOP brandy shelf sold through state-controlled liquor channels.",
    story: "The name draws on the familiar Kerala phrase \"God's Own Country\", while the liquid sits in the warm, grape-brandy style common across southern Indian markets. Indospirit Distribution appears in public catalogue references connected with the brand.",
    tastingNotes: [
      { title: "Grape Brandy Warmth", description: "Raisin, dried apricot, caramel and vanilla give the brandy a rounded opening." },
      { title: "Oak Spice", description: "Soft wood spice, clove and a little sweetness carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small brandy glass, over one cube, or long with ginger ale and lime." },
      { subheading: "Food", description: "Pair with Kerala beef fry, pepper chicken, banana chips, plum cake or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Kerala beef fry", "pepper chicken", "banana chips", "plum cake", "dark chocolate"] }],
    whyChoose: "God's Own VSOP is for brandy drinkers who want a warmer southern Indian-style pour with food.",
    faqs: [
      { question: "What is God's Own VSOP?", answer: "God's Own VSOP is listed as a brandy on BevOry." },
      { question: "How should God's Own VSOP be served?", answer: "Try it neat, over ice, or with ginger ale and lime." },
    ],
    finalVerdict: "God's Own VSOP is a steady Indian brandy choice for neat pours, ginger serves and spicy plates.",
    metaTitle: "God's Own VSOP Brandy Guide | BevOry",
    metaDescription: "Explore God's Own VSOP brandy notes, serving ideas, Indian pairings and city prices on BevOry.",
  },
  "gold-crest-french": {
    description: "Gold Crest French is listed on BevOry through Gold Crest French Legacy Premium Brandy. The label sits in India's French-style premium brandy lane, where fruit, caramel and oak cues matter more than cocktail flash.",
    story: "French-style brandy names in India usually signal grape-spirit character, polished sweetness and after-dinner drinking. Gold Crest French keeps that familiar brandy language while staying approachable for local shoppers comparing 750 ml bottles.",
    tastingNotes: [
      { title: "Fruit And Caramel", description: "Dried grape, apricot, caramel and vanilla create the soft centre." },
      { title: "Mellow Spice", description: "Oak, nutmeg and a light cocoa note round the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat after dinner, over a single cube, or with ginger ale in a tall glass." },
      { subheading: "Food", description: "Pair with mutton pepper fry, chicken roast, fruit cake, salted almonds or chocolate tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton pepper fry", "chicken roast", "fruit cake", "salted almonds", "chocolate tart"] }],
    whyChoose: "Gold Crest French is a straightforward premium brandy page for oak-sweet local drinking occasions.",
    faqs: [
      { question: "What is Gold Crest French?", answer: "Gold Crest French is listed as a premium brandy on BevOry." },
      { question: "What food pairs with Gold Crest French?", answer: "Spiced roasts, pepper fry, fruit cake and chocolate desserts work well with its brandy profile." },
    ],
    finalVerdict: "Gold Crest French is a familiar Indian brandy choice for warm pours and rich snacks.",
    metaTitle: "Gold Crest French Brandy Guide | BevOry",
    metaDescription: "Explore Gold Crest French brandy notes, serving styles, food pairings and city prices on BevOry.",
  },
  "gold-mark": {
    description: "Gold Mark is an Indian VSOP brandy label listed on BevOry in 750 ml and 180 ml routes. Its search intent is clear: shoppers want a brandy page that separates bottle size, local price and serving style.",
    story: "Gold Mark belongs to the everyday VSOP brandy shelf where compact 180 ml bottles and full 750 ml bottles serve different occasions. The label's appeal is practical, warm and food-friendly.",
    tastingNotes: [
      { title: "Soft VSOP Style", description: "Dried fruit, caramel, vanilla and brown sugar lead the first sip." },
      { title: "Spiced Finish", description: "Oak spice, clove and gentle heat make it suitable for neat or mixed serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a brandy glass, with warm water, over ice or with ginger ale." },
      { subheading: "Food", description: "Pair with chilli chicken, egg roast, masala peanuts, plum cake or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "egg roast", "masala peanuts", "plum cake", "dark chocolate"] }],
    whyChoose: "Gold Mark works for drinkers who want a compact, easy-to-compare VSOP brandy listing.",
    faqs: [
      { question: "What type of drink is Gold Mark?", answer: "Gold Mark is listed as a VSOP brandy on BevOry." },
      { question: "Which sizes are visible for Gold Mark?", answer: "BevOry routes show Gold Mark VSOP Brandy in 750 ml and 180 ml formats." },
    ],
    finalVerdict: "Gold Mark is a practical VSOP brandy page for neat pours, ginger serves and snack-led evenings.",
    metaTitle: "Gold Mark VSOP Brandy Guide | BevOry",
    metaDescription: "Explore Gold Mark VSOP brandy notes, bottle sizes, serving ideas and city prices on BevOry.",
  },
  "gold-riband": {
    description: "Gold Riband is an Indian whisky label listed through Gold Riband Deluxe Whisky. Trademark references connect Gold Riband Deluxe Whisky with United Spirits Limited, placing it inside India's large domestic whisky landscape.",
    story: "Gold Riband's name has long sat in the familiar Indian deluxe whisky shelf, where grain spirit, malt-style flavour and light oak are built for simple serves. The BevOry routes show both 750 ml and 375 ml bottle formats.",
    tastingNotes: [
      { title: "Deluxe Whisky", description: "Caramel, grain sweetness, vanilla and light dried fruit give it a mellow profile." },
      { title: "Warm Finish", description: "Oak spice, cinnamon and a little sweetness keep the finish easy with soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, ice or ginger ale in a tall glass." },
      { subheading: "Food", description: "Pair with chicken tikka, mutton seekh, paneer pakora, masala peanuts or cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "mutton seekh", "paneer pakora", "masala peanuts", "cheese toast"] }],
    whyChoose: "Gold Riband is a recognizable Indian deluxe whisky page for quick size and city comparison.",
    faqs: [
      { question: "What is Gold Riband Deluxe Whisky?", answer: "Gold Riband Deluxe Whisky is listed as an Indian whisky on BevOry." },
      { question: "Who is connected with Gold Riband trademark records?", answer: "Public trademark references list United Spirits Limited with Gold Riband Deluxe Whisky." },
    ],
    finalVerdict: "Gold Riband is a no-fuss Indian whisky choice for soda highballs and spicy starters.",
    metaTitle: "Gold Riband Whisky Guide | BevOry",
    metaDescription: "Explore Gold Riband Deluxe Whisky notes, bottle sizes, serving ideas and city prices on BevOry.",
  },
  "golden-hart": {
    description: "Golden Hart is listed on BevOry through Golden Hart Ultra Strong Beer in 650 ml format. It sits in India's strong-beer lane, built for chilled service, high carbonation and bold snack pairings.",
    story: "The 650 ml strong-beer format is a common Indian sharing bottle, especially for casual food-led drinking. Golden Hart's route gives shoppers a dedicated place to compare that strong lager-style serve by city.",
    tastingNotes: [
      { title: "Strong Beer Body", description: "Malt sweetness, toasted grain and a fuller body define the first impression." },
      { title: "Chilled Finish", description: "Firm carbonation, light bitterness and a crisp close keep it food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a clean beer mug or straight from a chilled bottle." },
      { subheading: "Food", description: "Pair with chicken wings, fish fry, chilli paneer, masala fries or peanuts chaat." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken wings", "fish fry", "chilli paneer", "masala fries", "peanuts chaat"] }],
    whyChoose: "Golden Hart is a simple strong-beer page for chilled 650 ml bottle searches.",
    faqs: [
      { question: "What is Golden Hart?", answer: "Golden Hart is listed as an ultra strong beer on BevOry." },
      { question: "How should Golden Hart be served?", answer: "Serve it very cold with spicy fried snacks or grilled starters." },
    ],
    finalVerdict: "Golden Hart is built for cold, casual strong-beer drinking with bold Indian snacks.",
    metaTitle: "Golden Hart Beer Guide | BevOry",
    metaDescription: "Explore Golden Hart Ultra Strong Beer notes, chilled serving ideas, pairings and city prices.",
  },
  "golden-river": {
    description: "Golden River is an Indian VSOP brandy label listed on BevOry in 750 ml and 180 ml routes. The brand page is useful for drinkers comparing warm, oak-sweet brandy serves by bottle size.",
    story: "Golden River belongs to the Indian VSOP brandy shelf where fruit, caramel and spice are the expected cues. retail references and BevOry listings both surface the label as a brandy route rather than a wine or whisky page.",
    tastingNotes: [
      { title: "Golden Fruit", description: "Raisin, apricot, caramel and honeyed sweetness form the core." },
      { title: "Oak Warmth", description: "Vanilla, clove and mild wood spice carry into a rounded finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, on ice, with warm water or with ginger ale and lime." },
      { subheading: "Food", description: "Pair with Kerala roast chicken, mutton fry, fried cashews, plum cake or chocolate brownie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Kerala roast chicken", "mutton fry", "fried cashews", "plum cake", "chocolate brownie"] }],
    whyChoose: "Golden River is a clear VSOP brandy listing for warm serves and city-level bottle comparison.",
    faqs: [
      { question: "What is Golden River?", answer: "Golden River is listed as a VSOP brandy on BevOry." },
      { question: "Which mixers suit Golden River?", answer: "Ginger ale, warm water, soda and a squeeze of lime suit its brandy style." },
    ],
    finalVerdict: "Golden River is a smooth Indian brandy option for neat pours, ginger serves and rich snacks.",
    metaTitle: "Golden River VSOP Brandy Guide | BevOry",
    metaDescription: "Explore Golden River VSOP brandy notes, bottle sizes, serving ideas and city prices.",
  },
  "golden-sparrow": {
    description: "Golden Sparrow is an Italian wine label visible through Pinot Grigio, Sangiovese and Chardonnay routes. Public wine references place Golden Sparrow in Rubicone, an Emilia-Romagna IGT zone known for approachable varietal wines.",
    story: "Rubicone wines often use familiar grapes such as Sangiovese, Chardonnay and Pinot Grigio for clean, everyday Italian bottlings. Golden Sparrow fits that lane with red and white wines that work well at the table.",
    tastingNotes: [
      { title: "Pinot Grigio And Chardonnay", description: "Citrus, green apple, pear and light stone fruit give the whites a fresh profile." },
      { title: "Sangiovese", description: "Red cherry, plum, dried herbs and gentle acidity shape the red wine." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled in a white-wine glass; pour Sangiovese slightly cool with tomato or grilled dishes." },
      { subheading: "Food", description: "Pair whites with tandoori fish or pesto pasta; match Sangiovese with chicken tikka, pizza or mushroom risotto." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "pesto pasta", "chicken tikka", "pizza", "mushroom risotto"] }],
    whyChoose: "Golden Sparrow is a useful Italian label for shoppers choosing between crisp whites and food-friendly Sangiovese.",
    faqs: [
      { question: "Where is Golden Sparrow wine from?", answer: "Golden Sparrow is associated with Rubicone in Italy's Emilia-Romagna region." },
      { question: "Which Golden Sparrow wines appear on BevOry?", answer: "BevOry shows Golden Sparrow routes for Pinot Grigio, Sangiovese and Chardonnay-style wines." },
    ],
    finalVerdict: "Golden Sparrow is a clean Italian table-wine choice for crisp whites, easy reds and everyday food pairings.",
    metaTitle: "Golden Sparrow Wine Guide | BevOry",
    metaDescription: "Explore Golden Sparrow Italian wine notes, Rubicone styles, food pairings and city prices.",
  },
};
