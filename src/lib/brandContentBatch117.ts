import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_117 = [
  ["glenlivet", "The Glenlivet", "Scotland", "Single Malt", "brand-expansion-glenlivet"],
  ["glenmorangie", "Glenmorangie", "Scotland", "Single Malt", "brand-expansion-glenmorangie"],
  ["greater-than", "Greater Than", "India", "Gin", "brand-expansion-greater-than"],
  ["grey-goose", "Grey Goose", "France", "Vodka", "brand-expansion-grey-goose"],
  ["grover", "Grover Zampa", "India", "Wine", "brand-expansion-grover"],
  ["hendricks", "Hendrick's", "Scotland", "Gin", "brand-expansion-hendricks"],
  ["hennessy", "Hennessy", "France", "Cognac", "brand-expansion-hennessy"],
  ["hoegaarden", "Hoegaarden", "Belgium", "Beer", "brand-expansion-hoegaarden"],
  ["indri", "Indri", "India", "Single Malt", "brand-expansion-indri"],
  ["jack-daniels", "Jack Daniel's", "United States", "Tennessee Whiskey", "brand-expansion-jack-daniels"],
] as const;

export const BRAND_LOGOS_BATCH_117: Record<string, string> = {
  glenlivet: "https://static.livcheers.com/static/content/images/brand/glenlivet.webp",
  glenmorangie: "https://static.livcheers.com/static/content/images/brand/glenmorangie.webp",
  "greater-than": "https://static.livcheers.com/static/content/images/brand/greater-than.webp",
  "grey-goose": "https://static.livcheers.com/static/content/images/brand/grey-goose.webp",
  grover: "https://static.livcheers.com/static/content/images/brand/grover.webp",
  hendricks: "https://static.livcheers.com/static/content/images/brand/hendricks.webp",
  hennessy: "https://static.livcheers.com/static/content/images/brand/hennessy.webp",
  hoegaarden: "https://static.livcheers.com/static/content/images/brand/hoegaarden.webp",
  indri: "https://static.livcheers.com/static/content/images/brand/indri.webp",
  "jack-daniels": "https://static.livcheers.com/static/content/images/brand/jack-daniels.webp",
};

export const BRAND_SOURCES_BATCH_117: Record<string, string[]> = {
  glenlivet: [
    "https://theglenlivet.zendesk.com/hc/en-us/articles/20213740160404-What-is-the-history-of-The-Glenlivet",
    "https://history.chivasbrothersarchive.com/glenlivet/our-story/",
  ],
  glenmorangie: [
    "https://www.glenmorangie.com/pages/history",
    "https://www.glenmorangie.com/pages/about-us",
  ],
  "greater-than": [
    "https://www.diageoindia.com/en/brands/brand-explorer/greater-than",
    "https://naospirits.com/",
  ],
  "grey-goose": [
    "https://www.greygoose.com/faqs/what-is-grey-goose-vodka-made-from.html",
    "https://www.greygoose.com/stories/vodka-essentials/vodka-made-without-compromise.html",
  ],
  grover: [
    "https://www.groverzampa.in/",
    "https://www.groverzampa.in/about-us/art-of-winemaking",
    "https://www.groverzampa.in/la-r%C3%A9serve",
  ],
  hendricks: [
    "https://www.hendricksgin.com/faqs",
    "https://uk.hendricksgin.com/hendricks-original/",
  ],
  hennessy: [
    "https://www.hennessy.com/en-us/node/1655",
    "https://www.lvmh.com/our-maisons/wines-spirits/hennessy",
  ],
  hoegaarden: [
    "https://www.hoegaarden.com/history",
    "https://www.hoegaarden.com/brewing",
    "https://www.hoegaarden.com/beer",
  ],
  indri: [
    "https://www.indri.in/the-distillery",
    "https://www.indri.in/the-whisky",
  ],
  "jack-daniels": [
    "https://www.brown-forman.com/brand/jack-daniels",
  ],
};

export const BRAND_CONTENT_BATCH_117: Record<string, BrandPublicContent> = {
  glenlivet: {
    description: "The Glenlivet is a Speyside single malt Scotch whisky founded by George Smith in 1824. Its house style is built around smooth fruit, orchard freshness and the legal-distilling story of the Livet valley.",
    story: "George Smith became the first licensed distiller in the parish of Glenlivet after Scotland's Excise Act opened a legal path for Highland whisky. The name was copied so widely that the family fought to protect the definite article in The Glenlivet.",
    tastingNotes: [
      { title: "Signature Fruit", description: "Pear, apple, pineapple and soft vanilla often frame the gentler side of the malt." },
      { title: "Speyside Shape", description: "Floral lift, honeyed cereal and clean oak keep the whisky lighter than a heavily smoky dram." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat in a tulip glass, rest it briefly, then add a few drops of water if the fruit feels tight." },
      { subheading: "Food", description: "Pair with malai tikka, grilled prawns, roast chicken, pear tart or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["malai tikka", "grilled prawns", "roast chicken", "pear tart", "aged cheddar"] }],
    whyChoose: "The Glenlivet is a clean Speyside benchmark for drinkers who want fruit-led malt without peat smoke.",
    faqs: [
      { question: "Who founded The Glenlivet?", answer: "George Smith founded The Glenlivet after taking a legal distilling licence in 1824." },
      { question: "Where is The Glenlivet from?", answer: "The Glenlivet is from Speyside, Scotland, in the Livet valley." },
    ],
    finalVerdict: "The Glenlivet is a graceful Speyside pour when orchard fruit, honey and polished oak are the mood.",
    metaTitle: "The Glenlivet Whisky Guide | BevOry",
    metaDescription: "Explore The Glenlivet Speyside whisky, George Smith history, tasting notes, pairings and city prices on BevOry.",
  },
  glenmorangie: {
    description: "Glenmorangie is a Highland single malt Scotch whisky from Tain in Ross-shire. Founded by William and Anne Matheson in 1843, it is known for tall copper stills and a delicate, fruity spirit.",
    story: "The name Glenmorangie is often translated as Valley of Tranquility, and the distillery still leans into its Highland setting. Its tall stills leave more copper contact and help create the lighter house profile behind The Original, Lasanta and Quinta Ruban.",
    tastingNotes: [
      { title: "The Original", description: "Orange, peach, vanilla and soft malt give the core whisky a bright Highland opening." },
      { title: "Cask Finishes", description: "Sherry and port-influenced expressions move toward raisin, chocolate, spice and richer dessert notes." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve The Original neat or with a little water; keep richer cask finishes for a slower after-dinner pour." },
      { subheading: "Food", description: "Pair with chicken tikka, orange cake, dark chocolate, roast nuts or grilled mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "orange cake", "dark chocolate", "roast nuts", "grilled mushrooms"] }],
    whyChoose: "Glenmorangie gives a clear lesson in how tall stills and cask finishing shape Highland malt.",
    faqs: [
      { question: "Where is Glenmorangie made?", answer: "Glenmorangie is made in Tain, Ross-shire, in the Scottish Highlands." },
      { question: "Why are Glenmorangie's stills important?", answer: "Its tall stills help create a lighter, more delicate spirit." },
    ],
    finalVerdict: "Glenmorangie is a bright Highland malt that moves neatly from citrus-led aperitif to richer dessert glass.",
    metaTitle: "Glenmorangie Whisky Guide | BevOry",
    metaDescription: "Explore Glenmorangie Highland single malt, tall stills, cask finishes, pairings and city prices on BevOry.",
  },
  "greater-than": {
    description: "Greater Than is an Indian London Dry gin from Nao Spirits, distilled in Goa. The recipe uses nine botanicals and keeps juniper at the centre, with citrus and spice giving it a sharp G&T profile.",
    story: "Greater Than helped reopen the conversation around Indian craft gin after years of imported labels dominating the shelf. Diageo India now lists the brand, while Nao Spirits remains closely associated with Goa's modern gin movement.",
    tastingNotes: [
      { title: "Juniper And Citrus", description: "Clean juniper, lemon peel and fresh coriander give the gin a direct, dry opening." },
      { title: "Spiced Finish", description: "Fennel, ginger and peppery warmth add a crisp Indian accent without turning sweet." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build a cold gin and tonic with plenty of ice, dry tonic and lemon peel." },
      { subheading: "Food", description: "Pair with tandoori prawns, coriander chutney paneer, masala peanuts, fish tikka or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "coriander chutney paneer", "masala peanuts", "fish tikka", "chilli cheese toast"] }],
    whyChoose: "Greater Than is a crisp Indian London Dry gin that keeps the serve simple and sharply botanical.",
    faqs: [
      { question: "Who makes Greater Than gin?", answer: "Greater Than was created by Nao Spirits and is distilled in Goa." },
      { question: "What style is Greater Than?", answer: "Greater Than is a London Dry gin with a juniper-led botanical profile." },
    ],
    finalVerdict: "Greater Than works best as a no-fuss gin and tonic with spicy coastal snacks.",
    metaTitle: "Greater Than Gin Guide | BevOry",
    metaDescription: "Explore Greater Than Indian gin from Goa, botanical notes, G&T serves, pairings and city prices on BevOry.",
  },
  "grey-goose": {
    description: "Grey Goose is a French vodka made with soft winter wheat from Picardie and spring water from Gensac-la-Pallue. The brand is part of Bacardi Limited and is positioned around a clean, wheat-led premium vodka style.",
    story: "Grey Goose was built on the idea that French wheat and Cognac-region water could define vodka by origin, not only by neutrality. Production keeps the wheat and water story deliberately narrow, giving the bottle a clear French identity.",
    tastingNotes: [
      { title: "Original Vodka", description: "Soft wheat, faint almond, citrus peel and a clean finish make the spirit restrained rather than sharp." },
      { title: "Flavoured Range", description: "Fruit expressions such as pear and citrus work best when the serve stays dry and chilled." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled, in a Vodka Martini, or with soda and a narrow lemon twist." },
      { subheading: "Food", description: "Pair with smoked salmon, malai tikka, lemon-pepper prawns, caviar-style canapes or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked salmon", "malai tikka", "lemon-pepper prawns", "caviar-style canapes", "salted almonds"] }],
    whyChoose: "Grey Goose is a polished French wheat vodka for drinkers who prefer a clean, chilled serve.",
    faqs: [
      { question: "What is Grey Goose made from?", answer: "Grey Goose uses soft winter wheat from Picardie and spring water from Gensac-la-Pallue." },
      { question: "Is Grey Goose French?", answer: "Yes. Grey Goose is distilled and bottled in France." },
    ],
    finalVerdict: "Grey Goose is strongest in simple serves where the wheat texture stays visible.",
    metaTitle: "Grey Goose Vodka Guide | BevOry",
    metaDescription: "Explore Grey Goose French vodka, Picardie wheat, serving ideas, food pairings and city prices on BevOry.",
  },
  grover: {
    description: "Grover Zampa is an Indian wine producer with vineyards in Nandi Hills and Nashik Valley. Its range includes fresh whites, rose, sparkling wines and La Reserve, a Cabernet Sauvignon-Shiraz red.",
    story: "Kanwal Grover helped build one of India's earliest serious wine houses by looking beyond table-grape country toward cooler vineyard sites. The winery later expanded through Grover Zampa, giving the brand a two-region Indian footprint.",
    tastingNotes: [
      { title: "La Reserve Red", description: "Cabernet Sauvignon and Shiraz bring black fruit, oak spice, firm tannin and a fuller dinner-table body." },
      { title: "Fresh Whites", description: "Sauvignon Blanc and other whites show citrus, green fruit and a clean chilled finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill whites to 8-10C; serve La Reserve in a broad red-wine glass after a short breather." },
      { subheading: "Food", description: "Pair whites with tandoori fish or paneer tikka; match La Reserve with lamb seekh, mushroom masala or grilled steaks." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "paneer tikka", "lamb seekh", "mushroom masala", "grilled steaks"] }],
    whyChoose: "Grover Zampa is a key Indian wine name for comparing Nandi Hills freshness with richer La Reserve reds.",
    faqs: [
      { question: "Where are Grover Zampa vineyards?", answer: "Grover Zampa works with vineyards in Nandi Hills, Karnataka, and Nashik Valley, Maharashtra." },
      { question: "What grapes are in La Reserve red?", answer: "La Reserve red is made from Cabernet Sauvignon and Shiraz." },
    ],
    finalVerdict: "Grover Zampa gives Indian wine drinkers a clear move from chilled whites to structured red blends.",
    metaTitle: "Grover Zampa Wine Guide | BevOry",
    metaDescription: "Explore Grover Zampa wines from Nandi Hills and Nashik, La Reserve notes, pairings and city prices on BevOry.",
  },
  hendricks: {
    description: "Hendrick's is a Scottish gin distilled in Girvan, South Ayrshire, by William Grant & Sons. The original gin is known for rose and cucumber infusions over a base of juniper-led botanicals.",
    story: "Master distiller Lesley Gracie shaped Hendrick's around two different still characters: a pot still for weight and a Carter-Head still for delicacy. The result made cucumber garnish part of the brand's identity rather than a bar trick.",
    tastingNotes: [
      { title: "Rose And Cucumber", description: "Soft floral lift and cool green cucumber sit above the gin's dry backbone." },
      { title: "Botanical Core", description: "Juniper, citrus peel, coriander, elderflower and spice give structure under the perfume." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour with dry tonic over ice and garnish with a thin cucumber slice." },
      { subheading: "Food", description: "Pair with cucumber chaat, tandoori prawns, goat cheese, lemon chicken or herb salads." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["cucumber chaat", "tandoori prawns", "goat cheese", "lemon chicken", "herb salads"] }],
    whyChoose: "Hendrick's is the gin to choose when floral cucumber freshness matters as much as juniper.",
    faqs: [
      { question: "Where is Hendrick's gin made?", answer: "Hendrick's is distilled in Girvan, South Ayrshire, Scotland." },
      { question: "Why is Hendrick's served with cucumber?", answer: "Cucumber is part of Hendrick's flavour profile, so the garnish mirrors the gin." },
    ],
    finalVerdict: "Hendrick's is best served cold, aromatic and lightly garnished, especially beside seafood or herb-led snacks.",
    metaTitle: "Hendrick's Gin Guide | BevOry",
    metaDescription: "Explore Hendrick's Scottish gin, rose and cucumber notes, tonic serves, pairings and city prices on BevOry.",
  },
  hennessy: {
    description: "Hennessy is a Cognac house founded by Richard Hennessy in 1765 in Cognac, France. Now part of LVMH, the house blends grape eaux-de-vie across expressions such as VS, VSOP and XO.",
    story: "Richard Hennessy was an Irish officer who chose the Charente town of Cognac for his eaux-de-vie trading house. The Fillioux family has played a long role in Hennessy's blending lineage, giving the maison rare continuity.",
    tastingNotes: [
      { title: "VS And VSOP", description: "Fresh grape spirit, vanilla, toasted oak, dried apricot and spice make the younger blends cocktail-friendly." },
      { title: "XO Depth", description: "Older blends lean toward candied orange, cocoa, leather, clove and roasted nut richness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use VS in a highball or Sidecar; pour XO neat in a tulip glass after dinner." },
      { subheading: "Food", description: "Pair with galouti kebabs, dark chocolate, orange peel, duck roast or aged Comte." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "dark chocolate", "orange peel", "duck roast", "aged Comte"] }],
    whyChoose: "Hennessy is a Cognac standard for drinkers moving from lively mixed serves to deeper after-dinner blends.",
    faqs: [
      { question: "Who founded Hennessy?", answer: "Richard Hennessy founded the Cognac trading house in 1765." },
      { question: "What is Hennessy made from?", answer: "Hennessy Cognac is made by blending aged grape eaux-de-vie from the Cognac region." },
    ],
    finalVerdict: "Hennessy is most rewarding when the expression guides the serve: VS for cocktails, XO for slow sipping.",
    metaTitle: "Hennessy Cognac Guide | BevOry",
    metaDescription: "Explore Hennessy Cognac history, VS to XO styles, serving ideas, pairings and city prices on BevOry.",
  },
  hoegaarden: {
    description: "Hoegaarden is a Belgian witbier from the village of Hoegaarden. Its classic beer is cloudy, wheat-led and seasoned with coriander and dried orange peel during brewing.",
    story: "Hoegaarden's own history points to local wheat-beer brewing around 1445, with monks linked to the orange-and-coriander recipe. The modern beer keeps the style distinct from clear lager through its pale haze and spice.",
    tastingNotes: [
      { title: "Citrus Lift", description: "Orange peel gives the beer a bright citrus snap over soft wheat." },
      { title: "Coriander Spice", description: "Earthy coriander, gentle yeast and light bitterness keep the finish refreshing." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a wide glass, letting the cloudy body and foam settle naturally." },
      { subheading: "Food", description: "Pair with tandoori prawns, lemon chicken, pakora, citrus salad or mussels." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "lemon chicken", "pakora", "citrus salad", "mussels"] }],
    whyChoose: "Hoegaarden is a refreshing Belgian wheat beer when citrus, spice and soft texture suit the food.",
    faqs: [
      { question: "What style is Hoegaarden?", answer: "Hoegaarden is a Belgian witbier, also called Belgian white beer." },
      { question: "What flavours Hoegaarden?", answer: "Coriander and dried orange peel are added during brewing." },
    ],
    finalVerdict: "Hoegaarden is a bright, cloudy witbier that handles seafood, fried snacks and lemony dishes easily.",
    metaTitle: "Hoegaarden Beer Guide | BevOry",
    metaDescription: "Explore Hoegaarden Belgian witbier, orange-coriander notes, serving tips, pairings and city prices on BevOry.",
  },
  indri: {
    description: "Indri is an Indian single malt whisky from Piccadily Distillery in Indri, Haryana. Its whiskies use Indian six-row barley and mature in casks such as ex-bourbon, French wine, Oloroso and PX sherry.",
    story: "Piccadily built Indri around northern Indian barley and the heat-driven maturation conditions of Haryana. The flagship Trini expression brings together ex-bourbon, French wine and sherry cask maturation.",
    tastingNotes: [
      { title: "Trini Fruit", description: "Pineapple, citrus, honey and vanilla show the brighter side of the three-cask style." },
      { title: "Oak And Spice", description: "Raisin, tea, toasted nuts and warm oak spice add weight on the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste neat in a tulip glass first, then add a little water if the spice needs opening." },
      { subheading: "Food", description: "Pair with tandoori mushrooms, mutton seekh, toasted almonds, butter chicken or jaggery desserts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori mushrooms", "mutton seekh", "toasted almonds", "butter chicken", "jaggery desserts"] }],
    whyChoose: "Indri is a confident Indian single malt for drinkers curious about Haryana maturation and multi-cask whisky.",
    faqs: [
      { question: "Where is Indri whisky made?", answer: "Indri is made by Piccadily Distillery in Indri, Haryana." },
      { question: "What casks shape Indri Trini?", answer: "Indri Trini uses ex-bourbon, French wine and sherry cask maturation." },
    ],
    finalVerdict: "Indri brings Indian barley, warm-climate ageing and layered cask work into one expressive malt.",
    metaTitle: "Indri Indian Whisky Guide | BevOry",
    metaDescription: "Explore Indri single malt from Haryana, six-row barley, Trini casks, pairings and city prices on BevOry.",
  },
  "jack-daniels": {
    description: "Jack Daniel's is a Tennessee whiskey made at the Jack Daniel Distillery in Lynchburg, Tennessee. Old No. 7 is charcoal mellowed before maturation and remains the brand's signature bottle.",
    story: "Brown-Forman describes the Lynchburg distillery as America's oldest registered distillery, established in 1866. The whiskey uses iron-free cave spring water and sugar-maple charcoal mellowing before new oak maturation.",
    tastingNotes: [
      { title: "Old No. 7", description: "Banana, caramel, vanilla and toasted oak give the flagship its familiar sweet-spice profile." },
      { title: "Charcoal Mellowing", description: "The maple-charcoal step rounds the spirit before barrel ageing adds colour, oak and sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, lengthen with cola, or build a highball with ginger ale and lime." },
      { subheading: "Food", description: "Pair with barbecue chicken, mutton seekh, smoked paneer, masala fries or pecan pie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue chicken", "mutton seekh", "smoked paneer", "masala fries", "pecan pie"] }],
    whyChoose: "Jack Daniel's is the classic Lynchburg whiskey for caramel-oak highballs and barbecue-style food.",
    faqs: [
      { question: "Where is Jack Daniel's made?", answer: "Jack Daniel's is made in Lynchburg, Tennessee." },
      { question: "What is charcoal mellowing?", answer: "It is the process of passing new whiskey through sugar-maple charcoal before barrel maturation." },
    ],
    finalVerdict: "Jack Daniel's Old No. 7 is built for ice, cola, ginger ale and smoky-sweet food.",
    metaTitle: "Jack Daniel's Whiskey Guide | BevOry",
    metaDescription: "Explore Jack Daniel's Tennessee whiskey, charcoal mellowing, Old No. 7 notes and city prices on BevOry.",
  },
};
