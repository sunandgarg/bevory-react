import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_121 = [
  ["breezer", "Breezer", "India", "Ready-to-drink", "brand-expansion-breezer"],
  ["brewdog", "BrewDog", "Scotland", "Beer", "brand-expansion-brewdog"],
  ["bushmills", "Bushmills", "Northern Ireland", "Irish Whiskey", "brand-expansion-bushmills"],
  ["chivas-regal", "Chivas Regal", "Scotland", "Blended Scotch", "brand-expansion-chivas-regal"],
  ["corralejo", "Corralejo", "Mexico", "Tequila", "brand-expansion-corralejo"],
  ["dalmore", "The Dalmore", "Scotland", "Single Malt", "brand-expansion-dalmore"],
  ["dewars", "Dewar's", "Scotland", "Blended Scotch", "brand-expansion-dewars"],
  ["edinburgh-gin", "Edinburgh Gin", "Scotland", "Gin", "brand-expansion-edinburgh-gin"],
  ["fratelli", "Fratelli", "India", "Wine", "brand-expansion-fratelli"],
  ["glenfiddich", "Glenfiddich", "Scotland", "Single Malt", "brand-expansion-glenfiddich"],
] as const;

export const BRAND_LOGOS_BATCH_121: Record<string, string> = {
  breezer: "https://static.livcheers.com/static/content/images/brand/breezer.webp",
  brewdog: "https://static.livcheers.com/static/content/images/brand/brewdog.webp",
  bushmills: "https://static.livcheers.com/static/content/images/brand/bushmills.webp",
  "chivas-regal": "https://static.livcheers.com/static/content/images/brand/chivas-regal.webp",
  corralejo: "https://static.livcheers.com/static/content/images/brand/corralejo.webp",
  dalmore: "https://static.livcheers.com/static/content/images/brand/dalmore.webp",
  dewars: "https://static.livcheers.com/static/content/images/brand/dewars.webp",
  "edinburgh-gin": "https://static.livcheers.com/static/content/images/brand/edinburgh-gin.webp",
  fratelli: "https://static.livcheers.com/static/content/images/brand/fratelli.webp",
  glenfiddich: "https://static.livcheers.com/static/content/images/brand/glenfiddich.webp",
};

export const BRAND_SOURCES_BATCH_121: Record<string, string[]> = {
  breezer: [
    "https://www.bacardilimited.com/our-brands/portfolio/",
    "https://www.breezerdrinks.com/",
  ],
  brewdog: [
    "https://brewdog.com/pages/history",
    "https://brewdog.com/pages/fresh",
  ],
  bushmills: [
    "https://bushmills.com/pages/faq",
    "https://bushmills.com/pages/legacy",
  ],
  "chivas-regal": [
    "https://www.chivas.com/en-us/collection/chivas-12/",
  ],
  corralejo: [
    "https://corralejotequila.com/pages/our-craft",
    "https://corralejotequila.com/products/corralejo-anejo",
  ],
  dalmore: [
    "https://www.thedalmore.com/en/our-story/",
  ],
  dewars: [
    "https://www.dewars.com/us/en/discover-dewars/",
    "https://www.dewars.com/us/en/faq/",
  ],
  "edinburgh-gin": [
    "https://www.edinburghgin.com/seaside-gin",
    "https://b2bwebstorage.blob.core.windows.net/web/SAP/International_Brands/Edinburgh_Gin/Tasting_Notes/IMD_Ed%20Gin%20Sell%20Sheets_SEASIDE.pdf",
  ],
  fratelli: [
    "https://fratelliwines.in/",
    "https://fratelliwines.in/blogs/our-story/sette",
  ],
  glenfiddich: [
    "https://www.williamgrant.com/brands/glenfiddich/",
    "https://shop.us.glenfiddich.com/products/glenfiddich-12-year-old",
  ],
};

export const BRAND_CONTENT_BATCH_121: Record<string, BrandPublicContent> = {
  breezer: {
    description: "Breezer is Bacardi's fruit-led ready-to-drink brand, built for chilled bottle serves rather than bar mixing. In India, the range is known for bright flavours such as blueberry, blackberry, cranberry, lime and tropical fruit.",
    story: "Bacardi places Breezer within its wider flavoured drinks portfolio, separate from straight rum and classic spirits. The brand's appeal is simple: cold fruit flavour, light sparkle and a bottle that fits house parties, beach shacks and quick snack tables.",
    tastingNotes: [
      { title: "Berry Bottles", description: "Blueberry and blackberry bring sweet berry fruit, light tartness and a soft sparkling finish." },
      { title: "Citrus And Tropical", description: "Lime, cranberry and tropical variants lean brighter, with candy-like fruit and a cleaner cold finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve straight from the fridge, or pour over ice in a tall glass with a lime wheel." },
      { subheading: "Food", description: "Match the fruit sweetness with peri-peri fries, chilli cheese toast, chicken popcorn, spicy corn chaat or nachos." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "chilli cheese toast", "chicken popcorn", "spicy corn chaat", "nachos"] }],
    whyChoose: "Breezer is the low-effort party pick when you want fruit flavour without building a cocktail.",
    faqs: [
      { question: "Who owns Breezer?", answer: "Breezer is part of the Bacardi drinks portfolio." },
      { question: "What kind of drink is Breezer?", answer: "Breezer is a fruit-flavoured ready-to-drink alcoholic beverage." },
    ],
    finalVerdict: "Breezer works best ice-cold, beside salty snacks and loud group tables.",
    metaTitle: "Breezer Ready-to-Drink Guide | BevOry",
    metaDescription: "Explore Breezer flavours, chilled serves, snack pairings and city prices on BevOry.",
  },
  brewdog: {
    description: "BrewDog is a Scottish beer company founded in 2007 by James Watt and Martin Dickie. Punk IPA made the name famous, while Hazy Jane, Elvis Juice and Lost Lager give the range hoppy, hazy and crisp lanes.",
    story: "The brewery started in northeast Scotland and built a reputation around punchier beer than the mainstream lager shelf. Its current range still points back to that early craft-beer attitude: bold hops, clear naming and fresh-service pressure.",
    tastingNotes: [
      { title: "Punk IPA", description: "Citrus peel, tropical fruit, pine and firm bitterness make the flagship IPA sharp and lively." },
      { title: "Lost Lager", description: "Clean malt, light hop snap and a dry finish keep the lager colder and more direct." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve lager well chilled; pour IPA cool rather than frozen so the hop aroma stays open." },
      { subheading: "Food", description: "Pair Punk IPA with chicken 65, chilli paneer or burgers; take Lost Lager toward fish fry, fries or salted chips." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken 65", "chilli paneer", "burgers", "fish fry", "salted chips"] }],
    whyChoose: "BrewDog gives one table a clean choice between bitter IPA, hazy pale ale and crisp lager.",
    faqs: [
      { question: "When did BrewDog start?", answer: "BrewDog began in Scotland in 2007." },
      { question: "Is every BrewDog beer an IPA?", answer: "No. BrewDog covers IPA, pale ale, lager and other beer styles." },
    ],
    finalVerdict: "BrewDog is strongest when hop bitterness is matched with spicy, fried or grilled food.",
    metaTitle: "BrewDog Beer Guide | BevOry",
    metaDescription: "Explore BrewDog Punk IPA, Hazy Jane, Lost Lager, food pairings and city prices on BevOry.",
  },
  bushmills: {
    description: "Bushmills is an Irish whiskey house from County Antrim, Northern Ireland, with distilling heritage tied to 1608. The range covers Bushmills Original, Black Bush and triple-distilled single malts.",
    story: "The River Bush, malt whiskey tradition and County Antrim setting sit at the centre of the Bushmills identity. Black Bush shows the richer side of the house through sherry-cask influence, while Original stays light enough for highballs.",
    tastingNotes: [
      { title: "Original", description: "Light grain, soft malt, honey and vanilla make Bushmills Original easy in a highball." },
      { title: "Black Bush", description: "Dried fruit, toasted nuts, Oloroso sherry depth and oak spice give Black Bush more weight." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Original with soda and lemon; pour Black Bush neat or over one large cube." },
      { subheading: "Food", description: "Pair with smoked chicken, galouti kebabs, walnut cake, fish and chips or mature cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "galouti kebabs", "walnut cake", "fish and chips", "mature cheddar"] }],
    whyChoose: "Bushmills gives Irish whiskey drinkers a gentle blend and a darker sherry-led step up.",
    faqs: [
      { question: "Where is Bushmills whiskey made?", answer: "Bushmills is made in County Antrim, Northern Ireland." },
      { question: "What is Bushmills Black Bush?", answer: "Black Bush is a richer Bushmills whiskey shaped by sherry and bourbon cask maturation." },
    ],
    finalVerdict: "Bushmills is a friendly Irish whiskey choice for highballs, neat pours and richer pub food.",
    metaTitle: "Bushmills Irish Whiskey Guide | BevOry",
    metaDescription: "Explore Bushmills Original, Black Bush, Irish whiskey notes, pairings and city prices on BevOry.",
  },
  "chivas-regal": {
    description: "Chivas Regal is a blended Scotch whisky from Chivas Brothers, with Strathisla single malt at the heart of the blend. Chivas Regal 12 Year Old remains the best-known expression for its honeyed, soft Speyside profile.",
    story: "The Chivas brothers built their name through an Aberdeen grocery and spirits business before blended Scotch became the family's calling card. The modern range combines Scotch malt and grain whiskies for a smoother, rounder style than assertive single malts.",
    tastingNotes: [
      { title: "Chivas 12", description: "Apple, honey, vanilla and heather give the 12 Year Old its rounded opening." },
      { title: "Blend Structure", description: "Strathisla malt richness and grain whisky softness keep the texture polished." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, on ice, or as a tall highball with chilled soda and clear ice." },
      { subheading: "Food", description: "Pair with paneer tikka, mutton seekh, toasted hazelnuts, butter chicken or apple tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["paneer tikka", "mutton seekh", "toasted hazelnuts", "butter chicken", "apple tart"] }],
    whyChoose: "Chivas Regal suits drinkers who like honeyed fruit, soft oak and a polished Scotch highball.",
    faqs: [
      { question: "Is Chivas Regal a single malt?", answer: "No. Chivas Regal is blended Scotch whisky made from malt and grain whiskies." },
      { question: "Which malt is central to Chivas Regal?", answer: "Strathisla single malt is widely described as the heart of Chivas Regal blends." },
    ],
    finalVerdict: "Chivas Regal 12 is especially comfortable as a long, cold whisky highball beside rich Indian starters.",
    metaTitle: "Chivas Regal Scotch Guide | BevOry",
    metaDescription: "Explore Chivas Regal blended Scotch, Strathisla character, pairings and city prices on BevOry.",
  },
  corralejo: {
    description: "Corralejo is a 100 percent Blue Weber agave tequila produced at Hacienda Corralejo in Guanajuato, Mexico. The range includes Silver, Reposado and Anejo expressions made outside Jalisco under legal tequila rules.",
    story: "Hacienda Corralejo works with estate-grown agave, traditional clay ovens and a mix of copper pot and column distillation. A proprietary yeast strain and Guanajuato's volcanic soils give the brand a distinct point of origin.",
    tastingNotes: [
      { title: "Silver", description: "Cooked agave, citrus peel, pepper and green herbal notes make the unaged tequila lively." },
      { title: "Aged Styles", description: "Reposado and Anejo move toward vanilla, oak spice, roasted agave and a softer finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Silver in a Margarita or Paloma; sip aged expressions neat from a small glass." },
      { subheading: "Food", description: "Pair with tandoori prawns, chicken tacos, charred corn, guacamole or achari paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chicken tacos", "charred corn", "guacamole", "achari paneer"] }],
    whyChoose: "Corralejo stands out for Guanajuato production, clay-oven agave and a range that works beyond cocktails.",
    faqs: [
      { question: "Where is Corralejo tequila made?", answer: "Corralejo is made at Hacienda Corralejo in Guanajuato, Mexico." },
      { question: "What agave does Corralejo use?", answer: "Corralejo uses 100 percent Blue Weber agave." },
    ],
    finalVerdict: "Corralejo is a strong pick when cooked agave should stay clear in Margaritas and neat pours.",
    metaTitle: "Corralejo Tequila Guide | BevOry",
    metaDescription: "Explore Corralejo tequila from Guanajuato, agave notes, serving ideas, pairings and city prices on BevOry.",
  },
  dalmore: {
    description: "The Dalmore is a Highland single malt Scotch whisky from Alness, founded by Alexander Matheson in 1839. The brand is known for rich cask-led maturation and the twelve-point Royal Stag emblem.",
    story: "The stag symbol comes from the Mackenzie clan story of Colin of Kintail saving King Alexander III from a charging stag. Dalmore's robust, fruity new make spirit is shaped for long maturation and rare cask finishing.",
    tastingNotes: [
      { title: "Sherry Depth", description: "Orange peel, raisin, dark chocolate and polished oak mark many sherry-influenced Dalmore releases." },
      { title: "Highland Weight", description: "Malt sweetness, baking spice and a rounded texture give the whisky a broad after-dinner feel." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat in a tulip glass and let it rest before adding water sparingly." },
      { subheading: "Food", description: "Pair with dark chocolate, mutton rogan josh, orange cake, roast duck or aged Gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "mutton rogan josh", "orange cake", "roast duck", "aged Gouda"] }],
    whyChoose: "The Dalmore is for drinkers who want a richer Highland malt shaped by sherry casks and old-school polish.",
    faqs: [
      { question: "Where is The Dalmore made?", answer: "The Dalmore distillery is in Alness in the Scottish Highlands." },
      { question: "What does the stag on The Dalmore represent?", answer: "The stag refers to the Mackenzie clan story linked to King Alexander III of Scotland." },
    ],
    finalVerdict: "The Dalmore belongs after dinner, where chocolate, orange, oak and spice can settle into the glass.",
    metaTitle: "The Dalmore Whisky Guide | BevOry",
    metaDescription: "Explore The Dalmore Highland single malt, stag history, cask notes, pairings and city prices on BevOry.",
  },
  dewars: {
    description: "Dewar's is a blended Scotch whisky founded by John Dewar in Perth in 1846. The house is known for double ageing, where whisky rests again in oak after blending.",
    story: "John Dewar opened his Perth merchant shop before his sons pushed the family whisky into wider markets. A.J. Cameron later created White Label, and master blender Stephanie Macleod now leads the modern Dewar's portfolio.",
    tastingNotes: [
      { title: "White Label", description: "Honey, pear, light malt and gentle vanilla make the blend easy to lengthen with soda." },
      { title: "Aged Blends", description: "Older bottles bring more dried fruit, toasted oak, spice and Aberfeldy-style honeyed richness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build White Label with soda and clear ice; serve older blends neat or with a few drops of water." },
      { subheading: "Food", description: "Pair with chicken tikka, roasted cashews, spiced apple tart, grilled mushrooms or cheddar toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "roasted cashews", "spiced apple tart", "grilled mushrooms", "cheddar toast"] }],
    whyChoose: "Dewar's is a dependable Scotch blend when you want soft honeyed whisky in a highball or neat pour.",
    faqs: [
      { question: "Who founded Dewar's?", answer: "John Dewar founded Dewar's in Perth, Scotland, in 1846." },
      { question: "What is Dewar's double ageing?", answer: "Dewar's blends the whiskies, then rests the blend again in oak casks." },
    ],
    finalVerdict: "Dewar's makes sense for a cold Scotch highball with snacks, while its older blends suit a slower glass.",
    metaTitle: "Dewar's Scotch Guide | BevOry",
    metaDescription: "Explore Dewar's blended Scotch, double ageing, tasting notes, pairings and city prices on BevOry.",
  },
  "edinburgh-gin": {
    description: "Edinburgh Gin is a Scottish gin producer with Classic, Seaside and fruit-led expressions. Seaside Gin uses coastal botanicals inspired by the east coast beaches around Edinburgh.",
    story: "The Seaside recipe was developed with Heriot-Watt University's Centre for Brewing and Distilling. Bladderwrack seaweed, scurvygrass and ground ivy give that bottle a saline, green and coastal edge.",
    tastingNotes: [
      { title: "Classic Gin", description: "Juniper, citrus and dry spice keep the core gin in a clean, tonic-friendly lane." },
      { title: "Seaside Gin", description: "Floral notes, sea spray, green herbs and a light mineral finish make Seaside more savoury." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Classic with tonic and citrus; pour Seaside with tonic, grapefruit peel or a thin lemon strip." },
      { subheading: "Food", description: "Pair with tandoori fish, oysters, lemon-pepper paneer, grilled prawns or cucumber salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "oysters", "lemon-pepper paneer", "grilled prawns", "cucumber salad"] }],
    whyChoose: "Edinburgh Gin gives drinkers a clear jump from classic juniper to coastal botanical character.",
    faqs: [
      { question: "What is Edinburgh Gin Seaside?", answer: "It is a gin made with coastal botanicals inspired by beaches near Edinburgh." },
      { question: "Does Edinburgh Gin only make dry gin?", answer: "No. The range also includes fruit-led gin expressions." },
    ],
    finalVerdict: "Edinburgh Gin Seaside is the bottle to reach for when seafood, tonic and a saline finish make sense together.",
    metaTitle: "Edinburgh Gin Guide | BevOry",
    metaDescription: "Explore Edinburgh Gin Classic, Seaside botanicals, serving ideas, pairings and city prices on BevOry.",
  },
  fratelli: {
    description: "Fratelli is an Indian wine estate based at Akluj in Maharashtra. The house is known for Sette, a Sangiovese and Cabernet Sauvignon blend, and for bringing an Italian winemaking lens to Indian vineyards.",
    story: "Indian and Italian partners built Fratelli around Akluj when the region was still an unusual choice for premium Indian wine. The estate's Sangiovese work gives it a different red-wine identity from Nashik's better-known vineyards.",
    tastingNotes: [
      { title: "Sette", description: "Red cherry, blackcurrant, violet, vanilla and firm tannin make the flagship red dinner-ready." },
      { title: "Fresh Whites", description: "Sauvignon Blanc and other whites bring citrus, green fruit and acidity for chilled service." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Decant Sette briefly and serve at cool room temperature; chill whites well before pouring." },
      { subheading: "Food", description: "Pair Sette with lamb rogan josh, mushroom risotto or mutton seekh; take whites toward tandoori fish or paneer tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb rogan josh", "mushroom risotto", "mutton seekh", "tandoori fish", "paneer tikka"] }],
    whyChoose: "Fratelli is a serious Indian wine name for drinkers interested in Akluj terroir and Sangiovese-led reds.",
    faqs: [
      { question: "Where is Fratelli wine made?", answer: "Fratelli's estate is based at Akluj in Maharashtra." },
      { question: "What is Fratelli Sette?", answer: "Sette is Fratelli's signature red blend built around Sangiovese and Cabernet Sauvignon." },
    ],
    finalVerdict: "Fratelli Sette is a rich Indian red for main-course food, not a casual aperitif pour.",
    metaTitle: "Fratelli Wine Guide | BevOry",
    metaDescription: "Explore Fratelli wines from Akluj, Sette tasting notes, serving tips, pairings and city prices on BevOry.",
  },
  glenfiddich: {
    description: "Glenfiddich is a Speyside single malt Scotch whisky made in Dufftown by William Grant & Sons. William Grant built the distillery in 1886, and spirit first ran on Christmas Day 1887.",
    story: "Glenfiddich means valley of the deer, reflected in the stag emblem on the bottle. The family-owned distillery helped take single malt Scotch to a global audience when blends still dominated many markets.",
    tastingNotes: [
      { title: "12 Year Old", description: "Fresh pear, green apple, light oak and honeyed malt make the flagship bright and approachable." },
      { title: "Older Releases", description: "Longer cask ageing adds deeper vanilla, spice, dried fruit and polished oak." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a tulip glass, taste neat first, then add a few drops of water if you want more aroma." },
      { subheading: "Food", description: "Pair with smoked salmon, tandoori chicken, aged cheddar, roast nuts or pear tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked salmon", "tandoori chicken", "aged cheddar", "roast nuts", "pear tart"] }],
    whyChoose: "Glenfiddich is a benchmark Speyside malt for drinkers who like pear-led fruit and clean oak.",
    faqs: [
      { question: "Where is Glenfiddich made?", answer: "Glenfiddich is made in Dufftown, Speyside, Scotland." },
      { question: "Who founded Glenfiddich?", answer: "William Grant founded Glenfiddich, with first spirit running on Christmas Day 1887." },
    ],
    finalVerdict: "Glenfiddich 12 is a bright, approachable first step into Speyside single malt.",
    metaTitle: "Glenfiddich Whisky Guide | BevOry",
    metaDescription: "Explore Glenfiddich Speyside single malt, 12 Year Old notes, pairings and city prices on BevOry.",
  },
};
