import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_74 = [
  ["chavaniac-lafayette", "Chavaniac Lafayette", "France", "Brandy", "pending-chavaniac-lafayette"],
  ["chetak", "Chetak", "India", "Whisky", "pending-chetak"],
  ["choppin", "Choppin", "Poland", "Vodka", "pending-choppin"],
  ["cinquena", "Cinquena", "Australia", "Wine", "pending-cinquena"],
  ["clos-de", "Clos De", "France", "White Wine", "pending-clos-de"],
  ["clos-du-cuvee", "Clos Du Cuvee", "France", "Wine", "pending-clos-du-cuvee"],
  ["clos-du-phoenix", "Clos Du Phoenix", "Lebanon", "Wine", "pending-clos-du-phoenix"],
  ["collect", "Collect", "India", "Sparkling Wine", "pending-collect"],
  ["colombo", "Colombo", "Sri Lanka", "Gin", "pending-colombo"],
  ["commander-n-chief", "Commander n Chief", "India", "Rum", "pending-commander-n-chief"],
] as const;

export const BRAND_LOGOS_BATCH_74: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_74: Record<string, string[]> = {
  "chavaniac-lafayette": [
    "https://sarakku.in/price/chavaniac-lafayette-xo-premium-french-brandy/",
    "https://www.bevory.in/agra/brand/chavaniac-lafayette",
  ],
  chetak: [
    "https://www.quickcompany.in/trademarks/4879608-chetak-classic-whisky",
    "https://www.bevory.in/agra/brand/chetak",
  ],
  choppin: [
    "https://chopinvodka.com/",
    "https://chopinvodka.com/product/chopin-family-reserve/",
    "https://www.bevory.in/agra/brand/choppin",
  ],
  cinquena: [
    "https://www.vivino.com/US/en/cinquena-shiraz/w/13464237",
    "https://www.bevory.in/agra/brand/cinquena",
  ],
  "clos-de": [
    "https://comtes-lafon.com/",
    "https://mobile.vins-divins-burgundy.com/producer-pdf.php?producer_id=domaine-de-comtes-lafon",
    "https://www.bevory.in/agra/brand/clos-de",
  ],
  "clos-du-cuvee": [
    "https://www.closdecaveau.com/vins?lang=en",
    "https://www.bevory.in/agra/brand/clos-du-cuvee",
  ],
  "clos-du-phoenix": [
    "https://www.linkedin.com/company/clos-du-phoenix",
    "https://closduphoenix.netlify.app/",
    "https://www.bevory.in/agra/brand/clos-du-phoenix",
  ],
  collect: [
    "https://www.bevory.in/agra/brand/collect",
    "https://liquorsai.com/delhi/liquor/collect-brut",
  ],
  colombo: [
    "https://www.colombogin.com/",
    "https://www.colombogin.com/contact/",
    "https://www.bevory.in/agra/brand/colombo",
  ],
  "commander-n-chief": [
    "https://delhiexcise.gov.in/pdf/Price_25thNov.pdf",
    "https://www.bevory.in/agra/brand/commander-n-chief",
  ],
};

export const BRAND_CONTENT_BATCH_74: Record<string, BrandPublicContent> = {
  "chavaniac-lafayette": {
    description: "Chavaniac Lafayette is a French XO-style brandy label listed in India through Chavaniac Lafayette XO Premium French Brandy. It sits in the imported-brandy lane, built for drinkers who want a warmer grape-spirit pour than neutral white spirits.",
    story: "The name points to Chavaniac-Lafayette in France, the Haute-Loire village linked with the Marquis de Lafayette. Indian retail and catalogue listings frame the bottle as a French brandy option for after-dinner serves and slow mixed drinks.",
    tastingNotes: [
      { title: "XO Brandy Style", description: "Dried fruit, caramel, vanilla and gentle oak spice shape the expected French-brandy profile." },
      { title: "Warm Finish", description: "A rounded, warming finish makes it better suited to small pours than sharp highball drinking." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat in a snifter or over one large ice cube; add a splash of water if you want softer edges." },
      { subheading: "Food", description: "Pair with gulab jamun, dark chocolate, roasted almonds, fruit cake or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["gulab jamun", "dark chocolate", "roasted almonds", "fruit cake", "smoked cheese"] }],
    whyChoose: "Chavaniac Lafayette is a French-brandy pick for drinkers who like dried-fruit sweetness, oak spice and a slow finish.",
    faqs: [
      { question: "What type of drink is Chavaniac Lafayette?", answer: "Chavaniac Lafayette is listed as an XO premium French brandy." },
      { question: "How should Chavaniac Lafayette brandy be served?", answer: "Serve it neat, over a single large cube, or with a small splash of water after dinner." },
    ],
    finalVerdict: "Chavaniac Lafayette works best as a measured after-dinner brandy with sweets, nuts and richer snacks.",
    metaTitle: "Chavaniac Lafayette Brandy Guide | BevOry",
    metaDescription: "Explore Chavaniac Lafayette French brandy notes, serving ideas, food pairings and city prices on BevOry.",
  },
  chetak: {
    description: "Chetak is an Indian whisky label listed on BevOry through Chetak Classic Whisky. Public trademark records connect Chetak Classic Whisky with Agribiotech Industries in Jaipur, Rajasthan.",
    story: "The Chetak name carries a strong Rajasthan cue, borrowing from the famous horse associated with Maharana Pratap. On the shelf, the brand sits in the Indian classic-whisky lane: practical, mixer-friendly and familiar for value-led local buying.",
    tastingNotes: [
      { title: "Indian Whisky Profile", description: "Caramel, toasted grain, mild vanilla and light spice give it an easy blended-whisky shape." },
      { title: "Mixer Finish", description: "The finish is straightforward, slightly sweet and built to hold up with soda, water or cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda and ice, water, or cola in a tall glass." },
      { subheading: "Food", description: "Pair with tandoori chicken, masala peanuts, paneer tikka, egg bhurji or mutton seekh." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "masala peanuts", "paneer tikka", "egg bhurji", "mutton seekh"] }],
    whyChoose: "Chetak is a no-fuss Indian whisky for simple highballs and spicy snacks.",
    faqs: [
      { question: "What is Chetak Classic Whisky?", answer: "Chetak Classic Whisky is an Indian whisky label associated with Jaipur, Rajasthan trade filings." },
      { question: "What mixer suits Chetak whisky?", answer: "Soda, water and cola suit its caramel-and-grain style." },
    ],
    finalVerdict: "Chetak is best read as a practical Indian whisky for casual serves, mixers and savoury food.",
    metaTitle: "Chetak Whisky Guide | BevOry",
    metaDescription: "Explore Chetak Classic Whisky notes, mixer ideas, Indian snack pairings and city prices on BevOry.",
  },
  choppin: {
    description: "Choppin is listed on BevOry through Choppin Reserve Vodka, a premium reserve-vodka entry aligned with the Polish Chopin vodka house. Chopin is a family-owned vodka producer from eastern Poland, known for potato, rye and wheat vodkas.",
    story: "Chopin helped define the super-premium vodka category in the early 1990s and still focuses on small-batch distillation at its own Polish distillery. Its Family Reserve expression is made from a young potato variety and rested in Polish oak, giving the reserve style more texture than a standard neutral vodka.",
    tastingNotes: [
      { title: "Potato Vodka Texture", description: "Creamy potato, soft spice, earthy sweetness and a clean grain-free body lead the profile." },
      { title: "Rested Reserve Finish", description: "Gentle vanilla, clove and warm oak tones give the finish more depth than a basic freezer vodka." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled neat, over ice, or in a dry Vodka Martini with a lemon twist." },
      { subheading: "Food", description: "Pair with smoked salmon, potato latkes, chicken tikka, salted almonds or caviar-style canapes." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked salmon", "potato latkes", "chicken tikka", "salted almonds", "caviar-style canapes"] }],
    whyChoose: "Choppin is for vodka drinkers who want a richer reserve style with creamy texture and oak-kissed warmth.",
    faqs: [
      { question: "What country is Choppin vodka linked with?", answer: "The reserve vodka style is linked with Poland and the Chopin vodka house." },
      { question: "How do you drink Choppin Reserve Vodka?", answer: "Drink it chilled neat, on ice, or in a dry Martini where the texture can show." },
    ],
    finalVerdict: "Choppin is a richer vodka choice for drinkers who prefer texture, chill and a clean Martini-friendly finish.",
    metaTitle: "Choppin Vodka Guide | BevOry",
    metaDescription: "Explore Choppin Reserve Vodka notes, serving ideas, food pairings and city prices on BevOry.",
  },
  cinquena: {
    description: "Cinquena is an Australian wine label listed on BevOry across white, rose and red wines. The range includes Cinquena Shiraz, Tempranillo, Rose and White Wine, giving shoppers a broad South Australia-style table-wine spread.",
    story: "Cinquena's public wine listings point most clearly to South Australia, a region known for ripe Shiraz and generous everyday reds. The BevOry range also includes rose and white bottlings, so the brand works more as a dinner-table portfolio than a single signature grape.",
    tastingNotes: [
      { title: "Red Wine Range", description: "Shiraz and Tempranillo bring plum, blackberry, red cherry, pepper and soft tannins." },
      { title: "White And Rose", description: "The lighter side moves toward citrus, orchard fruit, red berries and a chilled, crisp finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites and rose chilled; pour reds slightly cool in a standard red-wine glass." },
      { subheading: "Food", description: "Pair reds with lamb chops, butter chicken or mushroom pasta; pair chilled wines with tandoori fish or paneer tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "butter chicken", "mushroom pasta", "tandoori fish", "paneer tikka"] }],
    whyChoose: "Cinquena is useful when you want one Australian wine label across red, white and rose dinner options.",
    faqs: [
      { question: "Which Cinquena wines are listed on BevOry?", answer: "BevOry includes Cinquena White Wine, Rose Wine, Tempranillo Red Wine and Shiraz Red Wine." },
      { question: "What food pairs with Cinquena Shiraz?", answer: "Cinquena Shiraz suits lamb chops, butter chicken, grilled mushrooms and peppery kebabs." },
    ],
    finalVerdict: "Cinquena is a flexible Australian wine pick for shoppers comparing chilled whites, rose and fuller reds.",
    metaTitle: "Cinquena Wine Guide | BevOry",
    metaDescription: "Explore Cinquena Australian wine notes, red and white styles, food pairings and city prices on BevOry.",
  },
  "clos-de": {
    description: "Clos De is listed on BevOry through Meursault Clos de la Barre, a white Burgundy from Domaine des Comtes Lafon. The estate is based in Meursault and is known for Chardonnay from the Cote de Beaune.",
    story: "Domaine des Comtes Lafon traces its Meursault reputation back to the 19th century, with Clos de la Barre held as a monopole vineyard beside the domaine. The vineyard is planted to Chardonnay and produces a richer Meursault style shaped by limestone-clay soils and careful cellar work.",
    tastingNotes: [
      { title: "Meursault Chardonnay", description: "Lemon, ripe apple, hazelnut, butter and chalky mineral notes create a classic white Burgundy profile." },
      { title: "Textured Finish", description: "The palate carries richness and acidity together, finishing long with citrus and gentle toast." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve lightly chilled in a Burgundy white-wine glass; let the wine warm slightly after pouring." },
      { subheading: "Food", description: "Pair with butter garlic prawns, roast chicken, malai tikka, mushroom risotto or Comte cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter garlic prawns", "roast chicken", "malai tikka", "mushroom risotto", "Comte cheese"] }],
    whyChoose: "Clos De is for drinkers looking at serious Meursault Chardonnay with texture, citrus and mineral length.",
    faqs: [
      { question: "What is Meursault Clos de la Barre?", answer: "It is a Chardonnay-based white Burgundy from Domaine des Comtes Lafon in Meursault." },
      { question: "What food suits Clos De white wine?", answer: "Rich seafood, roast chicken, malai tikka, mushroom dishes and nutty cheeses work well." },
    ],
    finalVerdict: "Clos De is a refined white Burgundy choice for creamy seafood, poultry and slow sipping.",
    metaTitle: "Clos De White Wine Guide | BevOry",
    metaDescription: "Explore Clos De Meursault notes, Burgundy Chardonnay style, pairings and city prices on BevOry.",
  },
  "clos-du-cuvee": {
    description: "Clos Du Cuvee is a French wine entry on BevOry built around the cuvee tradition, where a selected vat, blend or bottling defines the label. The name places it in a French table-wine context rather than a spirit or beer category.",
    story: "In French wine language, a cuvee usually signals a chosen blend, parcel or pressing selected by the producer. The Clos Du Cuvee page is best approached as a wine-style page: check the colour, grape and region on the bottle, then match the serve to that exact wine.",
    tastingNotes: [
      { title: "French Wine Frame", description: "Expect the bottle style to drive the flavour, from citrus-led whites to berry-and-spice reds." },
      { title: "Cuvee Character", description: "The cuvee idea points to balance and selection, with fruit, acidity and texture working together." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and reds slightly cool, using the bottle colour as the starting point." },
      { subheading: "Food", description: "Pair lighter pours with grilled fish or paneer tikka; pair fuller reds with mutton seekh or mushroom pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "paneer tikka", "mutton seekh", "mushroom pasta", "aged cheddar"] }],
    whyChoose: "Clos Du Cuvee is a useful French wine page for shoppers comparing cuvee-style bottles with dinner pairings.",
    faqs: [
      { question: "What does cuvee mean in wine?", answer: "Cuvee usually refers to a selected blend, vat, pressing or bottling chosen by the producer." },
      { question: "How should Clos Du Cuvee be served?", answer: "Serve by wine colour: whites chilled, reds slightly cool, and sparkling bottles well chilled." },
    ],
    finalVerdict: "Clos Du Cuvee is best for wine drinkers who want a French cuvee-style bottle matched carefully to food.",
    metaTitle: "Clos Du Cuvee Wine Guide | BevOry",
    metaDescription: "Explore Clos Du Cuvee wine notes, French cuvee style, food pairings and city prices on BevOry.",
  },
  "clos-du-phoenix": {
    description: "Clos Du Phoenix is a Lebanese winery from Edde in Batroun, North Lebanon. Its vineyard covers about six hectares, with vines planted at roughly 250 to 400 metres and wines made with traditional methods.",
    story: "Clos du Phoenix is associated with the Chedid and Anid families and the Burgundy-trained oenologist Yvan Jobard. The winery's North Lebanon setting gives the wines a Mediterranean profile, with manual harvesting and low-intervention cellar work shaping the house style.",
    tastingNotes: [
      { title: "Lebanese Vineyard Style", description: "Red-fruit, herb, spice and mineral notes sit naturally in the Mediterranean wine frame." },
      { title: "Fresh Structure", description: "The wines lean on freshness and food-friendly texture rather than heavy sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and reds slightly cool in standard wine glasses." },
      { subheading: "Food", description: "Pair with lamb kofta, hummus, grilled halloumi, chicken shawarma, seekh kebab or roasted vegetables." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb kofta", "hummus", "grilled halloumi", "chicken shawarma", "seekh kebab"] }],
    whyChoose: "Clos Du Phoenix brings North Lebanon's Batroun wine identity into a fresh, food-first drinking style.",
    faqs: [
      { question: "Where is Clos Du Phoenix made?", answer: "Clos Du Phoenix is made in Edde, Batroun, in North Lebanon." },
      { question: "What food pairs with Clos Du Phoenix wines?", answer: "Levantine grills, hummus, halloumi, lamb kofta and Indian kebabs pair naturally with the style." },
    ],
    finalVerdict: "Clos Du Phoenix is a strong choice for drinkers curious about Lebanese wine with grilled food and Mediterranean plates.",
    metaTitle: "Clos Du Phoenix Wine Guide | BevOry",
    metaDescription: "Explore Clos Du Phoenix Lebanese wine notes, Batroun origin, pairings and city prices on BevOry.",
  },
  collect: {
    description: "Collect is listed on BevOry through Collect Brut, a sparkling wine sold in 750 ml format. The bottle sits in the brut category, where a dry finish, bubbles and aperitif-friendly freshness matter most.",
    story: "Collect Brut gives Indian shoppers a direct sparkling-wine option for chilled pours and celebration tables. The brand page is narrow, but the style is clear: a dry sparkling wine meant for snacks, seafood, desserts with acidity and party service.",
    tastingNotes: [
      { title: "Brut Sparkle", description: "Green apple, citrus, pear and light bread notes fit the dry sparkling-wine style." },
      { title: "Clean Bubbles", description: "The finish is crisp and fizzy, with enough freshness for salty snacks and fried food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a flute or tulip glass." },
      { subheading: "Food", description: "Pair with fried prawns, cheese toast, chicken popcorn, sushi, samosas or lemon tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fried prawns", "cheese toast", "chicken popcorn", "sushi", "samosas"] }],
    whyChoose: "Collect is a simple brut sparkling-wine pick for parties, snacks and chilled celebration pours.",
    faqs: [
      { question: "What type of wine is Collect Brut?", answer: "Collect Brut is listed on BevOry as a sparkling wine in 750 ml format." },
      { question: "What food pairs with Collect Brut?", answer: "Fried prawns, cheese toast, samosas, sushi and lemon tart pair well with brut bubbles." },
    ],
    finalVerdict: "Collect Brut is a crisp sparkling-wine choice for easy celebrations and salty snacks.",
    metaTitle: "Collect Brut Sparkling Guide | BevOry",
    metaDescription: "Explore Collect Brut sparkling wine notes, serving ideas, food pairings and city prices on BevOry.",
  },
  colombo: {
    description: "Colombo is a Sri Lankan gin label listed on BevOry through Colombo No.7 Gin. It is a London Dry-style gin with a distinctly Sri Lankan identity and a Colombo brand home.",
    story: "Colombo No.7 revives a South Asian gin story built around local spice character and classic juniper structure. The brand's Sri Lankan setting gives the gin a warmer aromatic lane than many neutral London Dry bottles.",
    tastingNotes: [
      { title: "Juniper And Spice", description: "Juniper, citrus peel, coriander-like spice and warm herbal notes shape the aroma." },
      { title: "Dry Gin Finish", description: "The palate stays dry and clean, finishing with peppery spice and fresh citrus lift." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with tonic, plenty of ice and a lemon or lime wedge; it also works in a Martini." },
      { subheading: "Food", description: "Pair with tandoori prawns, pepper chicken, Sri Lankan devilled fish, chilli paneer or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "pepper chicken", "Sri Lankan devilled fish", "chilli paneer", "salted cashews"] }],
    whyChoose: "Colombo is a characterful Sri Lankan gin for drinkers who want juniper with spice and citrus.",
    faqs: [
      { question: "What is Colombo No.7?", answer: "Colombo No.7 is a Sri Lankan London Dry-style gin listed on BevOry." },
      { question: "What mixer suits Colombo gin?", answer: "Indian tonic water, soda, lemon, lime and grapefruit-style garnishes suit its dry spice profile." },
    ],
    finalVerdict: "Colombo is a crisp gin choice for tonic serves, seafood snacks and spice-led food.",
    metaTitle: "Colombo Gin Guide | BevOry",
    metaDescription: "Explore Colombo No.7 Gin notes, Sri Lankan style, tonic serves, pairings and city prices on BevOry.",
  },
  "commander-n-chief": {
    description: "Commander n Chief is an Indian rum label listed on BevOry through Commander n Chief Jamaican Gold Rum. Delhi excise price lists place the product in the Indian rum category across multiple bottle sizes.",
    story: "The Jamaican Gold name signals a golden-rum style for shoppers looking for sweetness, spice and easy mixer compatibility. In India, the label sits in the practical rum lane, made for cola, lime, ice and strongly flavoured snacks.",
    tastingNotes: [
      { title: "Gold Rum Style", description: "Caramel, vanilla, light molasses and baking spice give the rum a rounded golden profile." },
      { title: "Mixer Finish", description: "The finish is sweet, warm and cola-friendly, with enough spice for lime and ginger ale." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with cola and lime, ginger ale, soda, or in a simple rum punch." },
      { subheading: "Food", description: "Pair with jerk-style chicken, pork vindaloo, chilli paneer, masala peanuts or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["jerk-style chicken", "pork vindaloo", "chilli paneer", "masala peanuts", "dark chocolate"] }],
    whyChoose: "Commander n Chief is a golden rum for easy cola serves, lime highballs and bold party food.",
    faqs: [
      { question: "What type of rum is Commander n Chief?", answer: "Commander n Chief is listed as Jamaican Gold Rum in Indian excise and BevOry listings." },
      { question: "What mixer works with Commander n Chief Rum?", answer: "Cola, lime soda, ginger ale and simple fruit punch work well with its golden-rum style." },
    ],
    finalVerdict: "Commander n Chief is a mixer-friendly rum for cola, lime and spicy snacks.",
    metaTitle: "Commander n Chief Rum Guide | BevOry",
    metaDescription: "Explore Commander n Chief Jamaican Gold Rum notes, mixer ideas, pairings and city prices on BevOry.",
  },
};
