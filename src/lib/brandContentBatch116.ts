import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_116 = [
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

export const BRAND_LOGOS_BATCH_116: Record<string, string> = {
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

export const BRAND_SOURCES_BATCH_116: Record<string, string[]> = {
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
    "https://bushmills.com.mx/whisky/black-bush/",
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
    "https://fratelliwines.in/blogs/our-story/sette",
    "https://fratelliwines.in/",
  ],
  glenfiddich: [
    "https://www.williamgrant.com/brands/glenfiddich/",
    "https://shop.us.glenfiddich.com/products/glenfiddich-12-year-old",
  ],
};

export const BRAND_CONTENT_BATCH_116: Record<string, BrandPublicContent> = {
  breezer: {
    description: "Breezer is a fruit-flavoured ready-to-drink brand owned by Bacardi & Company Limited. In India, it is recognised for chilled bottles such as blueberry, blackberry, cranberry, lime and tropical fruit variants.",
    story: "Breezer takes Bacardi's drinks portfolio into easy, low-effort party serves rather than straight rum. Its identity is built around colour, fruit flavour and a bottle that goes straight from fridge to table.",
    tastingNotes: [
      { title: "Berry Bottles", description: "Blueberry and blackberry variants lead with sweet berry fruit, light acidity and a soft sparkling feel." },
      { title: "Citrus And Tropical", description: "Lime, cranberry and tropical styles bring sharper fruit, candy-like brightness and a cold, easy finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve directly from the fridge or over ice in a tall glass with a citrus wedge." },
      { subheading: "Food", description: "Pair with peri-peri fries, chilli cheese toast, spicy corn chaat, chicken popcorn or nachos." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "chilli cheese toast", "spicy corn chaat", "chicken popcorn", "nachos"] }],
    whyChoose: "Breezer is a simple chilled pick when you want fruit flavour without mixing a cocktail.",
    faqs: [
      { question: "Who owns Breezer?", answer: "Breezer is part of the Bacardi drinks portfolio." },
      { question: "What kind of drink is Breezer?", answer: "Breezer is a fruit-flavoured ready-to-drink alcoholic beverage." },
    ],
    finalVerdict: "Breezer works best ice-cold with salty, spicy snacks that balance the fruit sweetness.",
    metaTitle: "Breezer Ready-to-Drink Guide | BevOry",
    metaDescription: "Explore Breezer flavours, serving ideas, snack pairings and city prices on BevOry.",
  },
  brewdog: {
    description: "BrewDog is a Scottish beer company founded in 2007, best known for Punk IPA. Its range also includes Hazy Jane, Elvis Juice and Lost Lager, giving the brand both hop-led ales and cleaner lager pours.",
    story: "The company began in northeast Scotland and built its reputation around a louder craft-beer style than the mainstream lager shelf. Punk IPA became the beer that carried the name outward before the portfolio widened.",
    tastingNotes: [
      { title: "Punk IPA", description: "Citrus peel, tropical fruit and piney bitterness make the flagship IPA bright and assertive." },
      { title: "Lost Lager", description: "Clean malt, light hop snap and a dry finish make the lager colder and more direct." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve lager well chilled; pour IPA cool, not frozen, so the hop aroma stays alive." },
      { subheading: "Food", description: "Pair Punk IPA with chicken 65, chilli paneer or burgers; match Lost Lager with fish fry, fries or salted chips." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken 65", "chilli paneer", "burgers", "fish fry", "salted chips"] }],
    whyChoose: "BrewDog is useful when the table needs a real contrast between bitter IPA and crisp lager.",
    faqs: [
      { question: "When did BrewDog start?", answer: "BrewDog began in Scotland in 2007." },
      { question: "Is every BrewDog beer an IPA?", answer: "No. The range includes IPA, pale ale, lager and other beer styles." },
    ],
    finalVerdict: "BrewDog is at its best when you match hop intensity to spicy, fried or grilled food.",
    metaTitle: "BrewDog Beer Guide | BevOry",
    metaDescription: "Explore BrewDog Punk IPA, Hazy Jane, Lost Lager, food pairings and city prices on BevOry.",
  },
  bushmills: {
    description: "Bushmills is an Irish whiskey house from County Antrim, Northern Ireland. The range covers Bushmills Original, Black Bush and triple-distilled single malts built around malt whiskey character.",
    story: "The Bushmills area traces licensed distilling back to 1608, with the River Bush and County Antrim setting still central to the brand story. Black Bush deepens the house style through sherry and bourbon cask influence.",
    tastingNotes: [
      { title: "Original", description: "Light grain, soft malt, honey and vanilla make Bushmills Original easy in a highball." },
      { title: "Black Bush", description: "Oloroso sherry cask depth brings dried fruit, toasted nuts and richer oak spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Original with soda and lemon; drink Black Bush neat or over one large cube." },
      { subheading: "Food", description: "Pair with smoked chicken, galouti kebabs, walnut cake, fish and chips or mature cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "galouti kebabs", "walnut cake", "fish and chips", "mature cheddar"] }],
    whyChoose: "Bushmills gives Irish whiskey drinkers a gentle original blend and a darker sherry-led step up.",
    faqs: [
      { question: "Where is Bushmills whiskey made?", answer: "Bushmills is made in County Antrim, Northern Ireland." },
      { question: "What is Bushmills Black Bush?", answer: "Black Bush is a richer Bushmills blend shaped by sherry and bourbon cask maturation." },
    ],
    finalVerdict: "Bushmills is a friendly Irish whiskey choice for highballs, neat pours and richer pub-style food.",
    metaTitle: "Bushmills Irish Whiskey Guide | BevOry",
    metaDescription: "Explore Bushmills Original, Black Bush, Irish whiskey notes, pairings and city prices on BevOry.",
  },
  "chivas-regal": {
    description: "Chivas Regal is a blended Scotch whisky brand from Chivas Brothers. Strathisla single malt sits at the heart of Chivas blends, with Chivas Regal 12 Year Old as the best-known core expression.",
    story: "The Chivas brothers built their reputation through a nineteenth-century Aberdeen grocery and spirits business. The modern Chivas Regal range uses Scotch malt and grain whiskies to create a soft, Speyside-centred blend.",
    tastingNotes: [
      { title: "Chivas 12", description: "Apple, honey, vanilla and heather give the 12 Year Old its rounded opening." },
      { title: "Blend Structure", description: "Malt richness from Strathisla and grain whisky softness keep the texture polished." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, on ice or as a tall highball with chilled soda and clear ice." },
      { subheading: "Food", description: "Pair with paneer tikka, mutton seekh, toasted hazelnuts, butter chicken or apple tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["paneer tikka", "mutton seekh", "toasted hazelnuts", "butter chicken", "apple tart"] }],
    whyChoose: "Chivas Regal is a smooth blended Scotch for drinkers who like honeyed fruit and Speyside malt at the centre.",
    faqs: [
      { question: "Is Chivas Regal a single malt?", answer: "No. Chivas Regal is blended Scotch whisky made from malt and grain whiskies." },
      { question: "Which malt is central to Chivas Regal?", answer: "Strathisla single malt is described as the heart of Chivas blends." },
    ],
    finalVerdict: "Chivas Regal 12 is especially comfortable as a long, cold whisky highball beside rich Indian starters.",
    metaTitle: "Chivas Regal Scotch Guide | BevOry",
    metaDescription: "Explore Chivas Regal blended Scotch, Strathisla character, pairings and city prices on BevOry.",
  },
  corralejo: {
    description: "Corralejo is a 100% Blue Weber agave tequila produced at Hacienda Corralejo in Guanajuato, Mexico. The range includes Silver, Reposado and Anejo expressions made with estate agave and double distillation.",
    story: "Corralejo is one of the few tequila producers legally operating outside Jalisco. Its process uses clay ovens, proprietary yeast and a mix of copper pot and column stills.",
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
      { question: "What agave does Corralejo use?", answer: "Corralejo uses 100% Blue Weber agave." },
    ],
    finalVerdict: "Corralejo is a strong pick when you want agave flavour to stay clear in Margaritas and neat pours.",
    metaTitle: "Corralejo Tequila Guide | BevOry",
    metaDescription: "Explore Corralejo tequila from Guanajuato, agave notes, serving ideas, pairings and city prices on BevOry.",
  },
  dalmore: {
    description: "The Dalmore is a Highland single malt Scotch whisky from Alness, founded by Alexander Matheson in 1839. The brand is known for rich cask-led maturation and the twelve-point Royal Stag emblem.",
    story: "The stag symbol comes from the Mackenzie clan story of Colin of Kintail saving King Alexander III from a charging stag. Dalmore's whisky style is closely associated with long relationships with sherry bodegas and fine wine cask sources.",
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
    description: "Dewar's is a blended Scotch whisky founded by John Dewar in Perth in 1846. The house is known for double ageing, where blended whisky rests again in oak after the component whiskies are brought together.",
    story: "John Dewar began with a wine and spirits merchant shop on Perth's High Street. The modern blend draws on malt and grain whiskies across Scotland, including aged reserves from Dewar's group distilleries.",
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
    story: "The Seaside recipe was developed with Heriot-Watt University's Centre for Brewing and Distilling. Botanicals such as bladderwrack seaweed, scurvygrass and ground ivy give the bottle a coastal, saline edge.",
    tastingNotes: [
      { title: "Classic Gin", description: "Juniper, citrus and dry spice keep the core gin in a clean, tonic-friendly lane." },
      { title: "Seaside Gin", description: "Floral notes, sea spray, green herbs and a light mineral finish make Seaside more savoury." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Classic with tonic and citrus; pour Seaside with tonic, grapefruit peel or a thin lemon strip." },
      { subheading: "Food", description: "Pair with tandoori fish, oysters, lemon-pepper paneer, grilled prawns or cucumber salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "oysters", "lemon-pepper paneer", "grilled prawns", "cucumber salad"] }],
    whyChoose: "Edinburgh Gin gives gin drinkers a clear jump from classic juniper to coastal botanical character.",
    faqs: [
      { question: "What is Edinburgh Gin Seaside?", answer: "It is a gin made with coastal botanicals inspired by beaches near Edinburgh." },
      { question: "Does Edinburgh Gin only make dry gin?", answer: "No. The range also includes fruit-led gin expressions." },
    ],
    finalVerdict: "Edinburgh Gin Seaside is the bottle to reach for when seafood, tonic and a saline finish make sense together.",
    metaTitle: "Edinburgh Gin Guide | BevOry",
    metaDescription: "Explore Edinburgh Gin Classic, Seaside botanicals, serving ideas, pairings and city prices on BevOry.",
  },
  fratelli: {
    description: "Fratelli is an Indian wine estate based at Akluj in Maharashtra. The house is known for Sette, a Sangiovese and Cabernet Sauvignon blend, and for working with Piero Masi's Sangiovese clone in India.",
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
      { question: "What is Fratelli Sette?", answer: "Sette is Fratelli's signature red blend of Sangiovese and Cabernet Sauvignon." },
    ],
    finalVerdict: "Fratelli Sette is a rich Indian red for main-course food, not a casual aperitif pour.",
    metaTitle: "Fratelli Wine Guide | BevOry",
    metaDescription: "Explore Fratelli wines from Akluj, Sette tasting notes, serving tips, pairings and city prices on BevOry.",
  },
  glenfiddich: {
    description: "Glenfiddich is a Speyside single malt Scotch whisky made in Dufftown by William Grant & Sons. William Grant built the distillery in 1886, and the first spirit ran on Christmas Day 1887.",
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
