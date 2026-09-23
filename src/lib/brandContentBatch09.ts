import type { BrandPublicContent } from "./brandContentBatch01.js";

// Batch 09 follows docs/editorial/brand-content-system-prompt.md.
// Public fields contain verified consumer copy without internal research notes.
export const BRAND_CONTENT_BATCH_09: Record<string, BrandPublicContent> = {
  ballantines: {
    description: "Ballantine's is a blended Scotch whisky house founded by George Ballantine in Edinburgh. Its collection runs from Ballantine's Finest and 7 Year Old to age-stated blends including 17, 21 and 30 Year Old.",
    story: "George Ballantine opened his first grocery shop in Edinburgh in 1827 and moved into wine and spirits as the business grew. The house received its heraldic arms in 1938, with barley, water, fire and oak represented on the crest still used on its bottles.",
    tastingNotes: [
      { title: "House style", description: "Honey, vanilla, orchard fruit and soft spice form the familiar centre of the range, with oak and dried fruit becoming more prominent in older blends." },
      { title: "Across the collection", description: "Finest is light and mixable, while the age-stated whiskies move toward deeper fruit, floral notes, toffee and longer oak-led finishes." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try a small neat pour before adding water or one large cube. Ballantine's Finest and 7 Year Old also work well in a tall highball with cold soda." },
      { subheading: "Food", description: "Pair lighter blends with tandoori chicken or masala peanuts, and older blends with lamb seekh kebab, mature cheddar or apple tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "masala peanuts", "lamb seekh kebab", "mature cheddar", "apple tart"] }],
    whyChoose: "A broad blended Scotch range that lets drinkers move from an easy highball whisky to mature age-stated expressions.",
    faqs: [
      { question: "Who founded Ballantine's?", answer: "George Ballantine founded the business after opening his first grocery shop in Edinburgh in 1827." },
      { question: "How should Ballantine's be served?", answer: "Serve it neat, with water or over ice; lighter expressions also suit a cold soda highball." },
    ],
    finalVerdict: "Ballantine's suits drinkers seeking an approachable blended Scotch with a clear path into richer age-stated whiskies.",
    metaTitle: "Ballantine's Blended Scotch Guide | BevOry",
    metaDescription: "Explore Ballantine's Scotch history, house style, age-stated blends, serving ideas, Indian pairings and city-level prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/ballantines.webp",
  },
  "chivas-regal": {
    description: "Chivas Regal is a blended Scotch whisky house built around malt and grain whiskies from Scotland, with Strathisla single malt at the centre of its blends. The range includes Chivas 12, XV, 18, Ultis and 25 Year Old.",
    story: "James and John Chivas developed their blending business from an Aberdeen emporium during the 19th century and received a Royal Warrant in 1843. Chivas Regal 25 Year Old appeared in New York in 1909, while the 12 Year Old blend arrived in 1938 after Prohibition.",
    tastingNotes: [
      { title: "Signature style", description: "Orchard fruit, heather, honey and a creamy texture come from the Strathisla-led house style, supported by malt and grain whiskies from across Scotland." },
      { title: "Older blends", description: "Age-stated expressions add dried fruit, caramel, baking spice and deeper oak while retaining the rounded character associated with the house." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat or over one large cube, adding a little water if desired. Chivas 12 also works in a highball with cold soda and a strip of citrus peel." },
      { subheading: "Food", description: "Pair with galouti kebabs, smoked chicken, roasted almonds, mature cheddar or a dark-chocolate dessert." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "smoked chicken", "roasted almonds", "mature cheddar", "dark chocolate"] }],
    whyChoose: "A rounded blended Scotch family that combines the fruity Strathisla character with progressively richer age-stated releases.",
    faqs: [
      { question: "What whisky is at the heart of Chivas Regal?", answer: "Strathisla single malt from Speyside sits at the heart of Chivas Regal blends." },
      { question: "Is Chivas Regal a single malt?", answer: "Most Chivas Regal bottles are blended Scotch whiskies made with malt and grain whiskies; Ultis is a blended malt release." },
    ],
    finalVerdict: "Chivas Regal is a polished choice for drinkers who enjoy fruit, honey and spice in a smooth blended Scotch style.",
    metaTitle: "Chivas Regal Blended Scotch Guide | BevOry",
    metaDescription: "Explore Chivas Regal history, Strathisla-led style, serving ideas, Indian food pairings and city-level bottle prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/chivas-regal.webp",
  },
  dalmore: {
    description: "The Dalmore is a Highland single malt Scotch whisky made on the northern shore of the Cromarty Firth. Its collection is known for combining American oak maturation with selected sherry, port and wine casks across different expressions.",
    story: "Alexander Matheson established The Dalmore distillery in 1839, and Andrew and Charles Mackenzie took over its operation in 1867. The Mackenzie family's 12-pointed royal stag became the emblem displayed on every Dalmore bottle.",
    tastingNotes: [
      { title: "Signature style", description: "Orange, dried fruit, caramel and warm spice recur across the range, supported by chocolate, coffee and polished oak in richer expressions." },
      { title: "Cask influence", description: "Sherry casks deepen raisin, nut and spice notes, while port and wine finishes can bring darker berries and a more vinous finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a tulip-shaped glass and taste the whisky neat before adding a few drops of water. Give older or multi-cask expressions several minutes to open." },
      { subheading: "Food", description: "Pair with pepper lamb chops, duck kebabs, orange dark chocolate, aged Gouda or a walnut dessert." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper lamb chops", "duck kebabs", "orange dark chocolate", "aged Gouda", "walnut dessert"] }],
    whyChoose: "A Highland single malt range for drinkers drawn to citrus, dried fruit and layered wine-cask maturation.",
    faqs: [
      { question: "Where is The Dalmore made?", answer: "The Dalmore is made at its Highland distillery beside the Cromarty Firth in Scotland." },
      { question: "Why is there a stag on Dalmore bottles?", answer: "The 12-pointed stag comes from the Mackenzie family emblem and has appeared on Dalmore bottles since the family took over the distillery." },
    ],
    finalVerdict: "The Dalmore suits single malt drinkers who favour orange, dried fruit, spice and expressive cask finishing.",
    metaTitle: "The Dalmore Highland Whisky Guide | BevOry",
    metaDescription: "Explore The Dalmore's Highland history, cask-led style, tasting notes, Indian pairings, serving ideas and city prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/dalmore.webp",
  },
  "joseph-drouhin": {
    description: "Maison Joseph Drouhin is a family-run Burgundy wine producer founded in Beaune in 1880. Its cellar covers appellations across Chablis, the Cote de Nuits, Cote de Beaune, Cote Chalonnaise and Beaujolais.",
    story: "Joseph Drouhin established the house in Beaune, and four generations of the family have continued its work across Burgundy. The domaine began moving toward organic and biodynamic viticulture in the late 1980s, with Pinot Noir and Chardonnay at the centre of its vineyards.",
    tastingNotes: [
      { title: "Pinot Noir", description: "The red wines range from fresh red cherry and raspberry to floral, earthy and savoury tones, with structure changing markedly by village and vineyard." },
      { title: "Chardonnay", description: "The white wines move through citrus, white flowers, orchard fruit and mineral notes, becoming rounder and more layered in richer Burgundy appellations." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Chablis and other whites without overcooling them. Serve Pinot Noir lightly cool in a broad Burgundy glass and allow structured bottles time to open." },
      { subheading: "Food", description: "Pair Chablis with grilled pomfret, white Burgundy with malai tikka, Pinot Noir with mushroom galouti or roast duck, and Beaujolais with charcuterie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled pomfret", "malai tikka", "mushroom galouti", "roast duck", "charcuterie"] }],
    whyChoose: "A single Burgundy house offering a route from fresh regional wines to vineyard-specific Pinot Noir and Chardonnay.",
    faqs: [
      { question: "Where is Joseph Drouhin based?", answer: "Maison Joseph Drouhin is based in Beaune and works across the major wine areas of Burgundy." },
      { question: "Which grapes define Joseph Drouhin wines?", answer: "Pinot Noir and Chardonnay define most of the house's Burgundy collection, alongside Gamay in Beaujolais." },
    ],
    finalVerdict: "Joseph Drouhin suits wine drinkers who want to compare Burgundy regions through precise Pinot Noir and Chardonnay styles.",
    metaTitle: "Joseph Drouhin Burgundy Wine Guide | BevOry",
    metaDescription: "Explore Joseph Drouhin Burgundy wines, Pinot Noir and Chardonnay styles, food pairings, serving advice and city prices on BevOry.",
    logoUrl: "https://www.drouhin.com/build/shop/images/logo_name.d2ac204d.svg",
  },
  smirnoff: {
    description: "Smirnoff is a vodka brand founded by P. A. Smirnov in Moscow in 1864 and now owned by Diageo. Its range spans No. 21 vodka, flavoured vodkas and ready-to-drink products, with locally available flavours varying by market.",
    story: "After the Russian Revolution, Vladimir Smirnov relaunched the family brand in Europe using the Anglicised name Smirnoff. No. 21 became its reference vodka, built around triple distillation and repeated filtration.",
    tastingNotes: [
      { title: "No. 21", description: "A clean, neutral vodka style with a dry finish that leaves room for citrus, ginger, tomato or soda in mixed drinks." },
      { title: "Flavoured range", description: "Green apple, orange and lime lean bright and citrus-led, while Indian releases such as Minty Jamun and Mirchi Mango bring sweeter fruit and spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill No. 21 or mix it with soda, tonic, ginger beer or tomato juice. Use flavoured bottles with unsweetened mixers to control sweetness." },
      { subheading: "Food", description: "Pair No. 21 with smoked fish, Green Apple with chilli paneer, Minty Jamun with seekh kebab, and Mirchi Mango with spicy corn ribs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked fish", "chilli paneer", "seekh kebab", "spicy corn ribs", "citrus salad"] }],
    whyChoose: "A widely available vodka family with a neutral cocktail base and clearly differentiated fruit and spice flavours.",
    faqs: [
      { question: "Who owns Smirnoff?", answer: "Smirnoff is owned by Diageo." },
      { question: "How is Smirnoff No. 21 made?", answer: "Smirnoff No. 21 is triple distilled and filtered ten times for a clean, dry vodka style." },
    ],
    finalVerdict: "Smirnoff works for drinkers who want a clean mixing vodka alongside direct fruit and spice-led flavours.",
    metaTitle: "Smirnoff Vodka and Flavours Guide | BevOry",
    metaDescription: "Explore Smirnoff vodka history, No. 21 and flavoured styles, cocktails, Indian food pairings and city-level bottle prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/smirnoff.webp",
  },
  "1800": {
    description: "1800 Tequila is a Mexican tequila house made from 100% Blue Weber agave sourced in Jalisco. Its family includes Blanco, Reposado, Anejo, Cristalino, Coconut and extra-aged Milenio expressions.",
    story: "The brand takes its name from the year associated with the Beckmann family's early use of oak ageing for tequila. Juan Beckmann Vidal launched 1800 Anejo in the 1970s as the house developed a collection built around agave, oak and longer maturation.",
    tastingNotes: [
      { title: "Blanco and Reposado", description: "Blanco centres cooked agave, pepper and citrus, while Reposado adds caramel, gentle smoke and oak spice from American and French oak." },
      { title: "Aged expressions", description: "Anejo and Cristalino move toward vanilla, toasted oak, dried fruit and a softer texture, with Milenio adding the depth of extended ageing and a Cognac-cask finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste Blanco or Reposado neat in a small agave-spirit glass, or use them in a Margarita or Paloma. Give older expressions a slower neat pour." },
      { subheading: "Food", description: "Pair Blanco with ceviche, Reposado with chicken tikka, Anejo with mole-style dishes, and Coconut with grilled pineapple or coconut pudding." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["ceviche", "chicken tikka", "mole-style dishes", "grilled pineapple", "coconut pudding"] }],
    whyChoose: "A 100% agave tequila family that shows clear differences between unaged, rested, aged, filtered and flavoured styles.",
    faqs: [
      { question: "Where is 1800 Tequila made?", answer: "1800 Tequila is made in Jalisco, Mexico, from 100% Blue Weber agave." },
      { question: "What is the difference between 1800 Blanco and Reposado?", answer: "Blanco is unaged and agave-forward, while Reposado rests in American and French oak and gains caramel, smoke and spice." },
    ],
    finalVerdict: "1800 Tequila suits drinkers comparing fresh agave character with progressively richer oak-aged styles.",
    metaTitle: "1800 Tequila Brand and Style Guide | BevOry",
    metaDescription: "Explore 1800 Tequila, its Jalisco agave process, Blanco, Reposado and Anejo styles, Indian pairings and city prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/1800.webp",
  },
  balvenie: {
    description: "The Balvenie is a Speyside single malt Scotch whisky made in Dufftown by William Grant & Sons. Its collection is shaped by traditional floor malting, copper work, cooperage and a strong focus on cask maturation and finishing.",
    story: "William Grant built The Balvenie distillery beside Glenfiddich in 1892. The distillery continues five crafts on site, including growing barley, floor malting, maintaining copper stills, working with casks and guiding maturation through its malt masters.",
    tastingNotes: [
      { title: "Signature style", description: "Honey, vanilla, orchard fruit and gentle spice form the core profile, with a rounded malt texture and measured oak." },
      { title: "Cask variation", description: "Sherry, rum and other cask finishes can add dried fruit, toffee, tropical fruit, cacao or deeper spice to the underlying honeyed malt." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour into a tulip glass and taste neat before adding a few drops of water. Allow older or cask-finished bottles time to open between sips." },
      { subheading: "Food", description: "Pair with tandoori salmon, roast chicken, honey-glazed nuts, apple tart or a mild blue cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori salmon", "roast chicken", "honey-glazed nuts", "apple tart", "mild blue cheese"] }],
    whyChoose: "A Speyside malt for drinkers interested in honeyed spirit character, on-site craft and carefully differentiated cask finishes.",
    faqs: [
      { question: "Where is The Balvenie made?", answer: "The Balvenie is made in Dufftown in Scotland's Speyside whisky region." },
      { question: "What are The Balvenie's five crafts?", answer: "They cover home-grown barley, floor malting, copper work, cooperage and the work of the malt master." },
    ],
    finalVerdict: "The Balvenie suits single malt drinkers who enjoy honey, orchard fruit and cask-led variations on a rounded Speyside style.",
    metaTitle: "The Balvenie Speyside Whisky Guide | BevOry",
    metaDescription: "Explore The Balvenie's Speyside craft, honeyed house style, cask finishes, serving ideas, Indian pairings and city prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/balvenie.webp",
  },
  bushmills: {
    description: "Bushmills is an Irish whiskey house from the village of Bushmills in County Antrim, Northern Ireland. Its range combines blended whiskey such as Original and Black Bush with triple-distilled single malts including 10, 12, 16 and 21 Year Old.",
    story: "The Bushmills area received a licence to distil in 1608, drawing on local barley and water from the River Bush. After a major fire in 1885, the Old Bushmills Distillery was rebuilt and continued its copper-still malt whiskey tradition.",
    tastingNotes: [
      { title: "Blended whiskies", description: "Original is light, floral and fruit-led, while Black Bush adds a richer malt and sherry-cask direction with dried fruit and nutty notes." },
      { title: "Single malts", description: "The age-stated malts move through orchard fruit, honey and vanilla toward deeper dried fruit, spice, chocolate and polished oak." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste the whiskey neat first, then add water or one cube. Original and Black Bush also work in a highball or a measured whiskey cocktail." },
      { subheading: "Food", description: "Pair Original with fish and chips, Black Bush with mutton seekh, and the older malts with mature cheese, fruit cake or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish and chips", "mutton seekh", "mature cheese", "fruit cake", "dark chocolate"] }],
    whyChoose: "An Irish whiskey collection that moves clearly from light blends to richer sherry-led blends and mature single malts.",
    faqs: [
      { question: "Where is Bushmills whiskey made?", answer: "Bushmills is made in the village of Bushmills in County Antrim, Northern Ireland." },
      { question: "Is Bushmills a single malt?", answer: "The range contains both blended Irish whiskeys and triple-distilled single malt whiskeys." },
    ],
    finalVerdict: "Bushmills suits drinkers who want to compare approachable Irish blends with fruitier, deeper age-stated single malts.",
    metaTitle: "Bushmills Irish Whiskey Guide | BevOry",
    metaDescription: "Explore Bushmills Irish whiskey, blended and single malt styles, serving ideas, Indian pairings and city-level bottle prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/bushmills.webp",
  },
  "edinburgh-gin": {
    description: "Edinburgh Gin is a Scottish gin producer based in the centre of Edinburgh and owned by Ian Macleod Distillers. Its range covers Classic London Dry, Seaside Gin, fruit-led gins, seasonal releases and gin liqueurs.",
    story: "The brand built its identity around Scotland's capital, producing gin in the city and drawing on Edinburgh's landscape, festivals and culinary culture. Its current distillery and visitor experience sits beneath the city centre at The Arches on East Market Street.",
    tastingNotes: [
      { title: "Classic and Seaside", description: "Classic keeps juniper and citrus at the centre, while Seaside moves toward mineral, floral and lightly saline notes." },
      { title: "Fruit-led styles", description: "Raspberry, rhubarb and ginger, pomegranate and rose, and gooseberry and elderflower introduce brighter fruit, floral sweetness and warming spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Classic or Seaside with tonic and a restrained garnish. Use sweeter fruit expressions with soda, sparkling wine or plenty of ice." },
      { subheading: "Food", description: "Pair Classic with grilled prawns, Seaside with fish tikka, raspberry with dark chocolate, and rhubarb and ginger with baked cheesecake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled prawns", "fish tikka", "dark chocolate", "baked cheesecake", "goat cheese"] }],
    whyChoose: "A city-rooted Scottish range offering a traditional dry gin alongside coastal, fruit and floral variations.",
    faqs: [
      { question: "Where is Edinburgh Gin made?", answer: "Edinburgh Gin is produced in Edinburgh, Scotland, with its city-centre distillery at The Arches on East Market Street." },
      { question: "How should Edinburgh Gin be served?", answer: "Serve dry styles with tonic and a simple garnish; fruit-led styles can be lengthened with soda or sparkling wine." },
    ],
    finalVerdict: "Edinburgh Gin suits drinkers who want a juniper-led Scottish gin alongside expressive coastal, fruit and floral styles.",
    metaTitle: "Edinburgh Gin and Liqueur Guide | BevOry",
    metaDescription: "Explore Edinburgh Gin's Scottish story, dry and fruit-led styles, serving ideas, Indian pairings and city-level prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/edinburgh-gin.webp",
  },
  "greater-than": {
    description: "Greater Than is an Indian London Dry Gin made by Nao Spirits in Goa. The core gin centres juniper, lemon peel, fennel and ginger, while limited releases explore stronger juniper, coffee and collaborative flavours.",
    story: "Delhi bar owners Anand Virmani and Vaibhav Singh began developing the gin in 2015 and installed a copper pot still named Agotha in Goa. Greater Than launched in 2017 as India's first craft London Dry Gin before the distillery added Hapusa and limited Greater Than releases.",
    tastingNotes: [
      { title: "London Dry Gin", description: "Clean juniper and lemon peel lead the aroma, followed by a touch of fennel and a ginger-led finish." },
      { title: "Limited releases", description: "Juniper Bomb intensifies the piney core, while No Sleep introduces cold-brew coffee notes such as dark chocolate, cherry, hazelnut and caramel." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use the London Dry in a gin and tonic with grapefruit or lemon peel, or in a dry Martini. Serve No Sleep with tonic and an orange wedge." },
      { subheading: "Food", description: "Pair the core gin with tandoori prawns, Juniper Bomb with pepper chicken, and No Sleep with tiramisu or dark-chocolate tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "pepper chicken", "tiramisu", "dark-chocolate tart", "citrus salad"] }],
    whyChoose: "A Goa-made gin with a direct juniper-citrus profile and limited releases that explore bolder Indian craft-gin ideas.",
    faqs: [
      { question: "Where is Greater Than Gin made?", answer: "Greater Than is distilled by Nao Spirits in Goa, India." },
      { question: "What does Greater Than Gin taste like?", answer: "The core London Dry leads with juniper and lemon peel, followed by fennel and a ginger finish." },
    ],
    finalVerdict: "Greater Than is a strong Indian gin choice for drinkers who favour clear juniper, fresh citrus and inventive limited releases.",
    metaTitle: "Greater Than Indian Gin Guide | BevOry",
    metaDescription: "Explore Greater Than Gin's Goa story, juniper-led taste, limited releases, cocktails, Indian pairings and city prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/greater-than.webp",
  },
};
