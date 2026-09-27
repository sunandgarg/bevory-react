import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_67 = [
  ["birra-ma-ma", "Birra Ma Ma", "Italy", "Beers", "pending-birra-ma-ma"],
  ["black-and-gold", "Black & Gold", "France", "Brandy", "pending-black-and-gold"],
  ["black-buck", "Black Buck", "India", "Beers", "pending-black-buck"],
  ["black-jaguar", "Black Jaguar", "India", "Rum", "pending-black-jaguar"],
  ["black-panther", "Black Panther", "India", "Rum", "pending-black-panther"],
  ["black-pearl", "Black Pearl", "India", "Beers", "pending-black-pearl"],
  ["black-rich", "Black Rich", "Japan", "World Whisky", "pending-black-rich"],
  ["blanca", "Blanca", "India", "White Wine", "pending-blanca"],
  ["blenders", "Blenders", "India", "Indian Whisky", "pending-blenders"],
  ["bleu", "Bleu", "India", "Red Wine", "pending-bleu"],
] as const;

export const BRAND_LOGOS_BATCH_67: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_67: Record<string, string[]> = {
  "birra-ma-ma": [
    "https://birraflea.com/novita-universo-flea/birra-mama/",
    "https://www.bevory.in/agra/brand/birra-ma-ma",
  ],
  "black-and-gold": [
    "https://www.bevory.in/agra/brand/black-and-gold",
  ],
  "black-buck": [
    "https://www.livcheers.com/pune/liquor/black-buck-premium-stg-beer-500ml",
    "https://www.bevory.in/agra/brand/black-buck",
  ],
  "black-jaguar": [
    "https://www.bevory.in/agra/brand/black-jaguar",
  ],
  "black-panther": [
    "https://trademarking.in/details/Black-Panther-Xxx-Dark-Rum-4938038.html",
    "https://www.bevory.in/agra/brand/black-panther",
  ],
  "black-pearl": [
    "https://www.bevory.in/agra/brand/black-pearl",
  ],
  "black-rich": [
    "https://nikka.com/brands/blacknikkaseries/",
    "https://www.asahigroup-holdings.com/en/rd/product/blacknikka.html",
    "https://www.bevory.in/agra/brand/black-rich",
  ],
  blanca: [
    "https://gooddropwine.com/product/good-earth-blanca/",
    "https://www.bevory.in/agra/brand/blanca",
  ],
  blenders: [
    "https://www.bevory.in/agra/brand/blenders",
    "https://www.pernod-ricard.com/en/brands/blenders-pride",
  ],
  bleu: [
    "https://gooddropwine.com/product/good-earth-bleu/",
    "https://www.cartron.fr/en/liqueurs/blue-curacao/",
    "https://www.bevory.in/agra/brand/bleu",
  ],
};

export const BRAND_CONTENT_BATCH_67: Record<string, BrandPublicContent> = {
  "birra-ma-ma": {
    description: "Birra Ma Ma is an Italian beer line from Birra Flea, listed on BevOry through Weiss, Rossa and Chiara 330 ml bottles. The range is built around approachable high-fermentation styles with wheat, amber and pale-beer cues.",
    story: "Birra Flea presents Ma Ma as a colourful grocery-channel line tied to the brewery's Umbrian craft-beer base. The broader Ma Ma family includes Chiara, Rossa, IPA, Weiss and gluten-free styles.",
    tastingNotes: [
      { title: "Chiara and Weiss", description: "Chiara brings pale malt and easy bitterness, while Weiss adds wheat, citrus, spice and a lightly fruity finish." },
      { title: "Rossa", description: "Rossa moves darker with amber malt, caramel, toasted bread and a rounder body." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a beer glass with enough room for foam and aroma." },
      { subheading: "Food", description: "Pair Weiss with tandoori fish, Chiara with fries and chicken tikka, and Rossa with kebabs or salami." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "chicken tikka", "masala fries", "salami", "fresh cheese"] }],
    whyChoose: "Birra Ma Ma gives an Italian beer range across pale, wheat and amber styles in easy 330 ml bottles.",
    faqs: [
      { question: "Which Birra Ma Ma beers are listed?", answer: "BevOry lists Ma Ma Weiss, Rossa and Chiara." },
      { question: "What food suits Birra Ma Ma Weiss?", answer: "Tandoori fish, white meats, fresh cheese and citrus-led snacks suit the wheat-beer style." },
    ],
    finalVerdict: "Birra Ma Ma is a flexible Italian beer pick for drinkers who want more style choice than a single lager.",
    metaTitle: "Birra Ma Ma Beer Guide | BevOry",
    metaDescription: "Explore Birra Ma Ma Weiss, Rossa and Chiara notes, serving ideas, pairings and city prices on BevOry.",
  },
  "black-and-gold": {
    description: "Black & Gold is listed as a French brandy through Black & Gold French Brandy VSOP Aged In Oak. The bottle appears in a 750 ml format and sits in the oak-aged grape-brandy lane.",
    story: "VSOP and oak-age language point to a brandy style built for dried fruit, vanilla and warm spice. For buyers, the useful comparison is with other French-style brandies made for neat sipping or simple after-dinner serves.",
    tastingNotes: [
      { title: "Dried fruit", description: "Raisin, plum and baked apple form the fruit core." },
      { title: "Oak spice", description: "Vanilla, caramel and gentle oak spice round the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve a small neat pour in a tulip or brandy glass after dinner." },
      { subheading: "Food", description: "Pair with dark chocolate, fruit cake, roasted almonds, grilled pineapple or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "fruit cake", "roasted almonds", "grilled pineapple", "smoked cheese"] }],
    whyChoose: "Black & Gold is a French-style VSOP brandy for drinkers who want oak, fruit and dessert-friendly warmth.",
    faqs: [
      { question: "What type of drink is Black & Gold?", answer: "It is listed as French brandy VSOP aged in oak." },
      { question: "How should Black & Gold brandy be served?", answer: "Serve it neat in a small brandy glass or with a very small splash of water." },
    ],
    finalVerdict: "Black & Gold is best used as a neat after-dinner brandy with chocolate or nutty desserts.",
    metaTitle: "Black & Gold Brandy Guide | BevOry",
    metaDescription: "Explore Black & Gold French Brandy VSOP notes, serving ideas, pairings and city prices on BevOry.",
  },
  "black-buck": {
    description: "Black Buck is an Indian strong lager listed through Black Buck Premium Strong Beer in a 500 ml format. The style is full-bodied, malt-forward and made for very cold serves.",
    story: "Strong lager is a familiar Indian beer format, built around higher body, fuller malt and a sharper chilled finish. Black Buck follows that lane with a bold beer identity and snack-led drinking role.",
    tastingNotes: [
      { title: "Toasted malt", description: "Toasted bread, caramel and biscuit notes give the beer weight." },
      { title: "Strong lager finish", description: "Moderate bitterness and carbonation balance the malt sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a lager glass or straight from a chilled can or bottle." },
      { subheading: "Food", description: "Pair with chicken wings, masala fries, seekh kebab, chilli paneer or spicy peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken wings", "masala fries", "seekh kebab", "chilli paneer", "spicy peanuts"] }],
    whyChoose: "Black Buck is a strong lager for drinkers who want malt weight with spicy snacks.",
    faqs: [
      { question: "What type of beer is Black Buck?", answer: "Black Buck Premium Strong Beer is listed as a strong lager." },
      { question: "What food pairs with Black Buck?", answer: "Fried snacks, kebabs, chilli paneer and salty peanuts work well." },
    ],
    finalVerdict: "Black Buck is a cold, bold strong lager for Indian snack tables.",
    metaTitle: "Black Buck Strong Beer Guide | BevOry",
    metaDescription: "Explore Black Buck Premium Strong Beer notes, chilled serves, pairings and city prices on BevOry.",
  },
  "black-jaguar": {
    description: "Black Jaguar is an Indian rum label listed through Black Jaguar XXX Rum in a 750 ml format. The style belongs to dark-rum mixing, with molasses, caramel and spice as the natural flavour centre.",
    story: "XXX rum labels in India usually sit in the full-flavoured dark-rum shelf. Black Jaguar is best understood as a mixer-friendly rum for cola, lime, ginger beer and bold food.",
    tastingNotes: [
      { title: "Molasses sweetness", description: "Brown sugar, caramel and dried fruit lead the aroma." },
      { title: "Dark-rum spice", description: "Vanilla, clove and oak warmth make the finish suited to long drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with cola and lime, ginger beer, or over ice in a short glass." },
      { subheading: "Food", description: "Pair with tandoori chicken, pork ribs, grilled pineapple, rum cake or masala peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "pork ribs", "grilled pineapple", "rum cake", "masala peanuts"] }],
    whyChoose: "Black Jaguar is a dark Indian rum for cola serves and spicy party food.",
    faqs: [
      { question: "What type of rum is Black Jaguar?", answer: "It is listed as Black Jaguar XXX Rum." },
      { question: "What mixer suits Black Jaguar?", answer: "Cola with lime or ginger beer are practical choices." },
    ],
    finalVerdict: "Black Jaguar is a straightforward dark rum for highballs and rich snacks.",
    metaTitle: "Black Jaguar Rum Guide | BevOry",
    metaDescription: "Explore Black Jaguar XXX Rum notes, mixers, food pairings and city prices on BevOry.",
  },
  "black-panther": {
    description: "Black Panther is an Indian dark rum label listed through Black Panther XXX Dark Rum. Trademark records connect the name with alcoholic beverages and rum in India.",
    story: "The brand sits in the local dark-rum segment where molasses richness and mixer compatibility matter. Its role is closest to simple rum-and-cola serves, ginger beer pours and spicy food pairings.",
    tastingNotes: [
      { title: "Dark sugar", description: "Molasses, caramel and raisin notes give the rum its sweet base." },
      { title: "Spiced finish", description: "Vanilla, oak and gentle baking spice carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice with cola, lime or ginger beer." },
      { subheading: "Food", description: "Pair with barbecue chicken, mutton pepper fry, grilled pineapple, chocolate brownie or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue chicken", "mutton pepper fry", "grilled pineapple", "chocolate brownie", "salted cashews"] }],
    whyChoose: "Black Panther is a dark-rum option for sweet spice, cola serves and bold Indian snacks.",
    faqs: [
      { question: "What is Black Panther XXX Dark Rum?", answer: "It is an Indian dark rum label listed in 750 ml format." },
      { question: "How should Black Panther rum be served?", answer: "Use it over ice with cola, lime or ginger beer." },
    ],
    finalVerdict: "Black Panther is best treated as a mixer-friendly dark rum for relaxed drinking.",
    metaTitle: "Black Panther Dark Rum Guide | BevOry",
    metaDescription: "Explore Black Panther XXX Dark Rum notes, mixers, snack pairings and city prices on BevOry.",
  },
  "black-pearl": {
    description: "Black Pearl is an Indian beer label listed through Black Pearl Premium Super Strong Beer in a 650 ml format. The style is a strong lager built for chilled serves and hearty snacks.",
    story: "Super-strong beer has a distinct place in India, especially in larger bottle formats. Black Pearl sits in that segment with malt weight, carbonation and a bold table presence.",
    tastingNotes: [
      { title: "Strong malt", description: "Grain, biscuit and light caramel give the beer a fuller body." },
      { title: "Chilled finish", description: "Carbonation and bitterness keep the finish brisk when served cold." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a lager glass, ideally with food on the table." },
      { subheading: "Food", description: "Pair with fish fry, tandoori momos, chicken wings, masala fries or chilli mushroom." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish fry", "tandoori momos", "chicken wings", "masala fries", "chilli mushroom"] }],
    whyChoose: "Black Pearl is a 650 ml strong beer for drinkers who want a fuller chilled pour.",
    faqs: [
      { question: "What type of beer is Black Pearl?", answer: "It is listed as Premium Super Strong Beer." },
      { question: "What size is listed for Black Pearl?", answer: "The listed format is 650 ml." },
    ],
    finalVerdict: "Black Pearl is a strong lager-style beer for spicy snacks and cold, casual drinking.",
    metaTitle: "Black Pearl Strong Beer Guide | BevOry",
    metaDescription: "Explore Black Pearl Premium Super Strong Beer notes, food pairings and city prices on BevOry.",
  },
  "black-rich": {
    description: "Black Rich is listed as Nikka Black Rich Blend, a Japanese blended whisky from the Black Nikka family. Nikka describes the style around sweet aroma, smooth body, sherry-cask malt and Coffey grain.",
    story: "Nikka was founded by Masataka Taketsuru, a central figure in Japanese whisky. The Black Nikka family was built for approachable blended whisky, with Rich Blend using fruit-scented sherry-barrel influence for a rounder profile.",
    tastingNotes: [
      { title: "Sherry sweetness", description: "Dried fruit, soft malt, gentle oak and sweet barrel notes shape the aroma." },
      { title: "Smooth blend", description: "Coffey grain and sherry-cask malt create a sweet, rounded palate with a mild oak finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve on the rocks, neat, or as a clean highball with chilled soda." },
      { subheading: "Food", description: "Pair with yakitori, teriyaki mushrooms, chicken katsu, salted almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["yakitori", "teriyaki mushrooms", "chicken katsu", "salted almonds", "dark chocolate"] }],
    whyChoose: "Black Rich is a Japanese blended whisky for drinkers who want sherry sweetness without heavy smoke.",
    faqs: [
      { question: "Who makes Black Rich Blend?", answer: "Black Rich Blend belongs to Nikka's Black Nikka whisky family." },
      { question: "How should Black Rich be served?", answer: "Try it over ice or in a highball with chilled soda." },
    ],
    finalVerdict: "Black Rich is a smooth Japanese blend for highballs, rocks pours and easy food pairing.",
    metaTitle: "Black Rich Nikka Whisky Guide | BevOry",
    metaDescription: "Explore Black Rich Blend by Nikka, tasting notes, highball serves, pairings and city prices on BevOry.",
  },
  blanca: {
    description: "Blanca is Good Earth's Indian Chenin Blanc from the Nashik wine region. It is listed as a 750 ml white wine with a fresh, fruit-led profile.",
    story: "Good Earth uses colour-led labels across Blanca, Bella and Bleu. Blanca covers the white-wine side of the range, where Chenin Blanc's acidity and orchard fruit work well with Indian starters.",
    tastingNotes: [
      { title: "Chenin fruit", description: "Pear, apple, citrus and light tropical fruit shape the aroma." },
      { title: "Fresh finish", description: "Clean acidity and moderate body keep the wine bright with food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill to 8-10 C and pour in a white-wine glass." },
      { subheading: "Food", description: "Pair with tandoori fish, paneer tikka, malai chicken, grilled prawns or goat cheese salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "paneer tikka", "malai chicken", "grilled prawns", "goat cheese salad"] }],
    whyChoose: "Blanca is a Nashik Chenin Blanc for drinkers who want crisp Indian white wine with food.",
    faqs: [
      { question: "What grape is Blanca made from?", answer: "Good Earth Blanca is Chenin Blanc." },
      { question: "How should Blanca be served?", answer: "Serve it chilled around 8-10 C." },
    ],
    finalVerdict: "Blanca is a fresh Indian white wine for seafood, paneer and creamy starters.",
    metaTitle: "Blanca Chenin Blanc Guide | BevOry",
    metaDescription: "Explore Good Earth Blanca Chenin Blanc notes, serving temperature, pairings and city prices on BevOry.",
  },
  blenders: {
    description: "Blenders is listed in BevOry as a made-in-India whisky entry connected with Blenders Pride naming. The bottle context is whisky-led, with caramel, grain, oak and smooth highball service as the practical centre.",
    story: "Blenders Pride is one of India's familiar premium whisky names, owned by Pernod Ricard India. The shorter Blenders entry should be read as a local catalogue name for a whisky-style listing rather than a separate Scotch distillery story.",
    tastingNotes: [
      { title: "Caramel grain", description: "Caramel, cereal sweetness and vanilla lead the profile." },
      { title: "Soft oak", description: "Gentle oak spice and a rounded finish make it suitable for ice, water or soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with water, or as a whisky soda highball." },
      { subheading: "Food", description: "Pair with mutton seekh, chicken tikka, smoked paneer, masala peanuts or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "chicken tikka", "smoked paneer", "masala peanuts", "chilli cheese toast"] }],
    whyChoose: "Blenders is a practical Indian whisky listing for smooth mixed serves and spicy snacks.",
    faqs: [
      { question: "What category is Blenders listed under?", answer: "It is listed under made-in-India whisky." },
      { question: "How should Blenders whisky be served?", answer: "Serve with ice, water or soda depending on the drinking style." },
    ],
    finalVerdict: "Blenders is best approached as an easy Indian whisky pour for casual highballs.",
    metaTitle: "Blenders Whisky Guide | BevOry",
    metaDescription: "Explore Blenders whisky notes, serving ideas, Indian snack pairings and city prices on BevOry.",
  },
  bleu: {
    description: "Bleu appears on BevOry through Good Earth Bleu Shiraz-Cabernet wine and Joseph Cartron Curacao Bleu liqueur. The name therefore covers two very different drinking roles: Indian red wine and blue orange liqueur.",
    story: "Good Earth Bleu belongs to the Nashik wine range beside Blanca and Bella. Joseph Cartron's Curacao Bleu comes from a French liqueur house and is used mainly for colour, orange flavour and cocktails.",
    tastingNotes: [
      { title: "Bleu wine", description: "Shiraz-Cabernet gives black fruit, plum, mild spice and red-wine tannin." },
      { title: "Curacao Bleu", description: "Blue curacao brings sweet orange peel, citrus syrup and cocktail-friendly colour." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve the wine slightly cool in a red-wine glass; use the liqueur in measured cocktails." },
      { subheading: "Food", description: "Pair the wine with kebabs and grilled paneer; use Curacao Bleu with citrus cocktails, fruit desserts or salted snacks." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "grilled paneer", "pepperoni pizza", "fruit tart", "salted nuts"] }],
    whyChoose: "Bleu is useful when you want either a bold Indian red wine or a blue-orange cocktail liqueur under one search name.",
    faqs: [
      { question: "Is Bleu a wine or liqueur?", answer: "BevOry lists both Bleu Shiraz-Cabernet wine and Curacao Bleu liqueur." },
      { question: "How should Bleu Shiraz-Cabernet be served?", answer: "Serve it slightly cool with kebabs, grilled paneer or pizza." },
    ],
    finalVerdict: "Bleu needs bottle-level choice: pick the wine for dinner, or the curacao for cocktails.",
    metaTitle: "Bleu Wine & Liqueur Guide | BevOry",
    metaDescription: "Explore Bleu Shiraz-Cabernet and Curacao Bleu notes, serving ideas, pairings and city prices on BevOry.",
  },
};
