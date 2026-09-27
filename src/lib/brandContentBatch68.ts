import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_68 = [
  ["blind-tiger", "Blind Tiger", "Belgium", "Gin", "pending-blind-tiger"],
  ["blue-chip", "Blue Chip", "India", "Made in India Whisky", "pending-blue-chip"],
  ["blue-grape", "Blue Grape", "India", "Brandy", "pending-blue-grape"],
  ["blue-mood", "Blue Mood", "India", "Made in India Whisky", "pending-blue-mood"],
  ["blue-spirits", "Blue Spirits", "United States", "Vodka", "pending-blue-spirits"],
  ["boca", "Boca", "India", "Beers", "pending-boca"],
  ["bodegas", "Bodegas", "Spain", "Red Wine", "pending-bodegas"],
  ["bolt", "Bolt", "India", "Beers", "pending-bolt"],
  ["bonga-bonga", "Bonga Bonga", "India", "Liqueurs", "pending-bonga-bonga"],
  ["bonnet", "Bonnet", "France", "Champagne", "pending-bonnet"],
] as const;

export const BRAND_LOGOS_BATCH_68: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_68: Record<string, string[]> = {
  "blind-tiger": [
    "https://blindtiger.be/piper-cubeba/",
    "https://www.bevory.in/agra/brand/blind-tiger",
  ],
  "blue-chip": [
    "https://www.livcheers.com/indore/liquor/blue-chip-whisky-royale-750ml",
    "https://www.bevory.in/agra/brand/blue-chip",
  ],
  "blue-grape": [
    "https://www.bevory.in/agra/brand/blue-grape",
  ],
  "blue-mood": [
    "https://www.bevory.in/agra/brand/blue-mood",
  ],
  "blue-spirits": [
    "https://www.bluespiritsdistilling.com/about-us/",
    "https://www.bluespiritsdistilling.com/spirits/",
    "https://www.bevory.in/agra/brand/blue-spirits",
  ],
  boca: [
    "https://www.resvera.co.in/boca",
    "https://www.bevory.in/agra/brand/boca",
  ],
  bodegas: [
    "https://roda.es/en/our-wines/sela",
    "https://www.gilfamily.us/assets/files/juan-gil/jg-whiteblend.pdf",
    "https://www.bevory.in/agra/brand/bodegas",
  ],
  bolt: [
    "https://www.livcheers.com/pune/liquor/bolt-premium-strong-beer-500ml",
    "https://untappd.com/b/regent-beers-and-wine-ltd-bolt-premium-strong-beer/6317267/photos",
    "https://www.bevory.in/agra/brand/bolt",
  ],
  "bonga-bonga": [
    "https://www.bongabonga.wtf/about-us.php",
    "https://www.bevory.in/agra/brand/bonga-bonga",
  ],
  bonnet: [
    "https://www.bonnet-launois.fr/en/champagne-brut.htm",
    "https://www.bevory.in/agra/brand/bonnet",
  ],
};

export const BRAND_CONTENT_BATCH_68: Record<string, BrandPublicContent> = {
  "blind-tiger": {
    description: "Blind Tiger is a Belgian gin from Deluxe Distillery, listed on BevOry through Piper Cubeba and Imperial Secrets. The range is built around small-batch distilled gin with bold botanicals rather than soft, neutral spirit.",
    story: "Deluxe Distillery works from western Belgium and connects Blind Tiger to the hidden-bar language of the Prohibition era. Piper Cubeba uses cubeb pepper and malted barley, while Imperial Secrets leans into black teas and warm spice.",
    tastingNotes: [
      { title: "Piper Cubeba", description: "Juniper, cubeb pepper, orange peel, liquorice, ginger and cardamom create a dry, peppery gin with a long herbal finish." },
      { title: "Imperial Secrets", description: "Black tea, citrus peel, bitter almond and grains of paradise give the gin a softer, spiced profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a neutral dry tonic, a large cube of ice and a citrus twist; Piper Cubeba also works in a dry Martini." },
      { subheading: "Food", description: "Pair with tandoori prawns, pepper chicken, herbed paneer, olives or almond biscuits." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "pepper chicken", "herbed paneer", "olives", "almond biscuits"] }],
    whyChoose: "Blind Tiger is for gin drinkers who want spice, citrus and unusual botanicals from a Belgian craft distillery.",
    faqs: [
      { question: "Where is Blind Tiger gin made?", answer: "Blind Tiger is made by Deluxe Distillery in Belgium." },
      { question: "What makes Blind Tiger Piper Cubeba different?", answer: "Cubeb pepper, malted barley, citrus peel and warm botanicals give it a peppery, structured profile." },
    ],
    finalVerdict: "Blind Tiger brings Belgian craft-gin detail to drinkers who prefer sharper botanical character over simple sweetness.",
    metaTitle: "Blind Tiger Gin Guide | BevOry",
    metaDescription: "Explore Blind Tiger gin, Piper Cubeba botanicals, serving ideas, food pairings and city prices on BevOry.",
  },
  "blue-chip": {
    description: "Blue Chip is an Indian drinks label listed across Whisky Royale, Extra Dry Gin and Orange Tango gin. The brand sits in practical party formats, with 375 ml, 500 ml, 750 ml and 1 litre packs appearing in current listings.",
    story: "Blue Chip works as a multi-style Indian shelf name rather than a single distillery story. Its whisky and gin bottles give buyers two different drinking routes: soda-led whisky highballs and chilled gin serves.",
    tastingNotes: [
      { title: "Whisky Royale", description: "Grain sweetness, light oak, caramel and mild spice suit ice, water and soda." },
      { title: "Gin bottles", description: "Extra Dry stays juniper-led, while Orange Tango adds citrus peel and a fruitier mixed-drink role." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve the whisky with ice and soda; use the gin with tonic, soda or a simple citrus garnish." },
      { subheading: "Food", description: "Pair with chilli paneer, chicken tikka, masala peanuts, fried fish or orange-glazed wings." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "chicken tikka", "masala peanuts", "fried fish", "orange-glazed wings"] }],
    whyChoose: "Blue Chip is useful when one Indian label offers both everyday whisky and gin serves.",
    faqs: [
      { question: "What Blue Chip products are listed?", answer: "Current BevOry listings include Whisky Royale, Extra Dry Gin and Gin N Orange Tango." },
      { question: "Is Blue Chip only whisky?", answer: "No. BevOry also lists Blue Chip gin expressions." },
    ],
    finalVerdict: "Blue Chip is a flexible Indian label for simple highballs, tonic serves and spicy snack pairings.",
    metaTitle: "Blue Chip Whisky and Gin Guide | BevOry",
    metaDescription: "Explore Blue Chip Whisky Royale, gin styles, mixers, food pairings and city prices on BevOry.",
  },
  "blue-grape": {
    description: "Blue Grape is listed on BevOry through Blue Grape French Brandy in a 750 ml bottle. The name points to a brandy-led profile of fruit, oak, caramel and warm spice.",
    story: "French-style brandy is usually chosen for after-dinner sipping, simple ice serves and dessert pairings. Blue Grape belongs in that lane, with the bottle name doing the clearest work for shoppers.",
    tastingNotes: [
      { title: "Fruit and caramel", description: "Raisin, baked apple, caramel and soft vanilla form the expected brandy core." },
      { title: "Oak warmth", description: "Gentle spice, dried fruit and a warming finish make it suitable for a slow neat pour." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve a small measure neat in a brandy glass, or over one cube if you prefer a cooler pour." },
      { subheading: "Food", description: "Pair with fruit cake, dark chocolate, roasted almonds, grilled pineapple or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fruit cake", "dark chocolate", "roasted almonds", "grilled pineapple", "smoked cheese"] }],
    whyChoose: "Blue Grape gives brandy drinkers a fruit-and-oak profile for dessert-led evenings.",
    faqs: [
      { question: "What type of drink is Blue Grape?", answer: "Blue Grape is listed as French Brandy." },
      { question: "How should Blue Grape brandy be served?", answer: "Use a small neat pour, or serve it over one cube with dessert." },
    ],
    finalVerdict: "Blue Grape is a straightforward brandy choice for dried fruit, caramel and chocolate pairings.",
    metaTitle: "Blue Grape Brandy Guide | BevOry",
    metaDescription: "Explore Blue Grape French Brandy notes, serving ideas, dessert pairings and city prices on BevOry.",
  },
  "blue-mood": {
    description: "Blue Mood is an Indian whisky label listed through Blue Mood Whisky in a 750 ml bottle. It sits in the blended Indian whisky space, where grain sweetness, light oak and mixer compatibility matter most.",
    story: "The Blue Mood page gives shoppers a clear place to compare the whisky by bottle size and city price. Its drinking role is practical: short pours, soda highballs and bold Indian snacks.",
    tastingNotes: [
      { title: "Soft grain", description: "Cereal, caramel and light vanilla shape the first impression." },
      { title: "Mixer-friendly finish", description: "Mild oak and gentle spice keep the whisky easy with water, soda or ice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, add a splash of water, or build a soda highball in a tall glass." },
      { subheading: "Food", description: "Pair with seekh kebab, smoky paneer, chicken pakora, roasted cashews or masala papad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "smoky paneer", "chicken pakora", "roasted cashews", "masala papad"] }],
    whyChoose: "Blue Mood is an easy Indian whisky option for soda serves and spicy snacks.",
    faqs: [
      { question: "What is Blue Mood?", answer: "Blue Mood is listed as a blended Indian whisky." },
      { question: "What mixer suits Blue Mood whisky?", answer: "Soda, water or ice work better than very sweet mixers." },
    ],
    finalVerdict: "Blue Mood is best approached as a simple Indian whisky pour for casual highballs.",
    metaTitle: "Blue Mood Whisky Guide | BevOry",
    metaDescription: "Explore Blue Mood Whisky notes, soda serves, snack pairings and city prices on BevOry.",
  },
  "blue-spirits": {
    description: "Blue Spirits is an American distillery brand from Washington State, listed on BevOry across vodka, gin, whiskey, rhum and tequila-style bottles. The distillery links its proofing water to Lake Chelan and the North Cascades.",
    story: "Blue Spirits Distilling presents a broad craft portfolio, from Ghost Gin and Blue Wind Gin to flavoured vodkas, Straight Rye, Bourbon, Peirates Rhum and Lime Tequila. The house style is built around bright flavours and a wide cocktail vocabulary.",
    tastingNotes: [
      { title: "Gin and vodka", description: "Ghost Gin uses juniper, cucumber, grapefruit, lemon, lavender and sage, while the vodkas move from clean grain to mango, cucumber, pepper and grapefruit." },
      { title: "Whiskey and rhum", description: "The whiskey side brings oak, spice and deeper grain notes; Peirates Rhum leans toward light cane sweetness and tropical mixing." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Ghost Gin in tonic or a Martini, serve vodka chilled, and keep rye or bourbon in rocks-glass serves." },
      { subheading: "Food", description: "Pair gin with tandoori prawns, vodka with smoked fish, rye with ribs, and rhum with grilled pineapple." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "smoked fish", "barbecue ribs", "grilled pineapple", "dark chocolate"] }],
    whyChoose: "Blue Spirits gives one craft distillery view across gin, vodka, whiskey, rhum and flavoured cocktail spirits.",
    faqs: [
      { question: "Where is Blue Spirits from?", answer: "Blue Spirits Distilling is associated with Washington State and Lake Chelan water." },
      { question: "Which Blue Spirits bottles are listed?", answer: "BevOry lists gin, vodka, flavoured vodka, rye, bourbon, rhum and lime tequila-style bottles." },
    ],
    finalVerdict: "Blue Spirits is strongest for drinkers who like bright American craft spirits with clear cocktail uses.",
    metaTitle: "Blue Spirits Guide | BevOry",
    metaDescription: "Explore Blue Spirits gin, vodka, whiskey and rhum notes, serves, pairings and city prices on BevOry.",
  },
  boca: {
    description: "Boca is a ready-to-serve beverage line from Resvera, listed on BevOry through Cranberry, Raspberry, Tropical Passion and Strong Brew 330 ml bottles. The range sits between fruit-led refreshment and a crisp strong-brew beer style.",
    story: "Resvera is based in Nashik, Maharashtra, a region already linked with Indian wine and fruit-beverage production. Boca uses compact 330 ml bottles and flavour-first positioning for easy chilled serves.",
    tastingNotes: [
      { title: "Fruit bottles", description: "Cranberry is tart and lightly sweet, Raspberry is pink-red and fruit-forward, and Tropical Passion brings passion fruit with red-apple hints." },
      { title: "Strong Brew", description: "Strong Brew brings crisp malt, light hop character, nuttiness and caramel aroma." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Boca well chilled in a small beer glass or straight from a cold bottle." },
      { subheading: "Food", description: "Pair fruit bottles with spicy chaat or peri-peri fries; match Strong Brew with kebabs, fried fish or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["spicy chaat", "peri-peri fries", "seekh kebab", "fried fish", "chilli paneer"] }],
    whyChoose: "Boca is a chilled 330 ml pick for drinkers who want fruit flavours or a crisp strong brew.",
    faqs: [
      { question: "Who makes Boca?", answer: "Boca is connected with Resvera, based in Nashik, Maharashtra." },
      { question: "Which Boca flavours are listed?", answer: "BevOry lists Cranberry, Raspberry, Tropical Passion and Strong Brew." },
    ],
    finalVerdict: "Boca is made for cold, casual serves where fruit, fizz and snacks lead the mood.",
    metaTitle: "Boca Fruit Beer Guide | BevOry",
    metaDescription: "Explore Boca Cranberry, Raspberry, Tropical Passion and Strong Brew notes with city prices on BevOry.",
  },
  bodegas: {
    description: "Bodegas is listed on BevOry across Spanish wine names including Juan Gil Pedrera, Bodegas Roda Sela and Bodegas La Horra Corimbo. The page is therefore best read as a Spanish wine route covering Jumilla and Rioja rather than a single bottle style.",
    story: "Spanish wine labels often begin with Bodegas, meaning wineries or cellars. In this group, Monastrell-led Jumilla wines sit beside Rioja Tempranillo from producers such as Roda and La Horra.",
    tastingNotes: [
      { title: "Jumilla Monastrell", description: "Dark plum, blackberry, Mediterranean herbs and warm spice suit fuller red-wine drinking." },
      { title: "Rioja Tempranillo", description: "Red cherry, fine oak, spice and polished tannin define the Roda and La Horra side." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve reds slightly cool in a red-wine glass; chill Spanish whites before pouring." },
      { subheading: "Food", description: "Pair Monastrell with lamb seekh or rogan josh, and Rioja with roast chicken, mushrooms or aged Manchego." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb seekh", "rogan josh", "roast chicken", "mushroom galouti", "aged Manchego"] }],
    whyChoose: "Bodegas is useful for exploring Spanish wines by region, grape and food pairing.",
    faqs: [
      { question: "What does Bodegas mean on a wine label?", answer: "In Spanish, bodegas refers to wineries or cellars." },
      { question: "Which grapes appear in the Bodegas listings?", answer: "Current BevOry products include Monastrell-led wines and Tempranillo-based Rioja reds." },
    ],
    finalVerdict: "Bodegas is a Spanish-wine gateway for drinkers choosing between Jumilla richness and Rioja finesse.",
    metaTitle: "Bodegas Spanish Wine Guide | BevOry",
    metaDescription: "Explore Bodegas Spanish wines, Monastrell, Rioja Tempranillo, pairings and city prices on BevOry.",
  },
  bolt: {
    description: "Bolt is an Indian strong beer label listed through Bolt Premium Strong Beer. The current BevOry format is 650 ml, with a full-bodied strong-lager style.",
    story: "Bolt appears in Indian beer listings with Regent Beers and Wine Ltd attached on beer-trade references from Indore, Madhya Pradesh. Its role is clear: cold, malty, strong beer for fried and spicy food.",
    tastingNotes: [
      { title: "Malt body", description: "Rich malt, light caramel and cereal sweetness give the beer its weight." },
      { title: "Crisp finish", description: "Firm carbonation and bitterness keep the finish cleaner than the malt aroma suggests." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a lager glass, with enough room for foam." },
      { subheading: "Food", description: "Pair with chicken wings, masala fries, tandoori momos, fried fish or spicy peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken wings", "masala fries", "tandoori momos", "fried fish", "spicy peanuts"] }],
    whyChoose: "Bolt is a strong Indian beer for drinkers who want chilled malt weight with snacks.",
    faqs: [
      { question: "What type of beer is Bolt?", answer: "Bolt Premium Strong Beer is listed as a strong beer in 650 ml format." },
      { question: "What food pairs with Bolt beer?", answer: "Fried fish, wings, masala fries, momos and spicy peanuts suit the strong-lager style." },
    ],
    finalVerdict: "Bolt is a cold strong beer for high-energy snack tables and simple lager serves.",
    metaTitle: "Bolt Strong Beer Guide | BevOry",
    metaDescription: "Explore Bolt Premium Strong Beer notes, chilled serves, snack pairings and city prices on BevOry.",
  },
  "bonga-bonga": {
    description: "Bonga Bonga is an Indian liqueur-style party drink from Indospirit Beverages, listed on BevOry through Bonga Bonga Mystery Liqueur. The brand uses a playful mystery identity rather than a classic wine or whisky frame.",
    story: "The official Bonga Bonga world is built around colourful characters and a deliberately chaotic party mood. For shoppers, the key point is simpler: it is a sweet, flavour-led liqueur bottle for chilled shots and mixed drinks.",
    tastingNotes: [
      { title: "Sweet liqueur", description: "Expect a bright, sweet profile built for cold serves rather than slow sipping." },
      { title: "Party mixer", description: "Fruit, candy-like sweetness and a smooth chilled texture are the useful drinking cues." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled as a small shot, over ice, or as a measured ingredient in a simple party drink." },
      { subheading: "Food", description: "Pair with spicy fries, peri-peri popcorn, chocolate brownie, fruit tart or salted nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["spicy fries", "peri-peri popcorn", "chocolate brownie", "fruit tart", "salted nuts"] }],
    whyChoose: "Bonga Bonga is for drinkers who want a playful, sweet liqueur serve rather than a formal spirit pour.",
    faqs: [
      { question: "Who owns Bonga Bonga?", answer: "The official Bonga Bonga site identifies Indospirit Beverages Pvt. Ltd." },
      { question: "How should Bonga Bonga be served?", answer: "Serve it chilled as a small shot or use a measured amount in a simple mixed drink." },
    ],
    finalVerdict: "Bonga Bonga is a chilled, sweet liqueur pick for loud snacks and party-style pours.",
    metaTitle: "Bonga Bonga Liqueur Guide | BevOry",
    metaDescription: "Explore Bonga Bonga Mystery Liqueur notes, chilled serves, party pairings and city prices on BevOry.",
  },
  bonnet: {
    description: "Bonnet is listed on BevOry through Bonnet Brut Champagne in a 750 ml bottle. The Bonnet-Launois Brut Reserve style uses Pinot Meunier, Chardonnay and Pinot Noir from Champagne, France.",
    story: "Bonnet-Launois works from Fossoy in Champagne and publishes Brut Reserve as its timeless house style. The blend is built for freshness, white fruit, citrus and a fine sparkling texture.",
    tastingNotes: [
      { title: "White fruit", description: "Apple, pear, citrus and a pale golden colour define the first impression." },
      { title: "Brut freshness", description: "Fine bubbles, lively acidity and a smooth palate make it suitable as an aperitif." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill well and serve around 8 C in a flute or white-wine glass." },
      { subheading: "Food", description: "Pair with tandoori prawns, fried fish, soft cheese, oysters or lemon tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "fried fish", "soft cheese", "oysters", "lemon tart"] }],
    whyChoose: "Bonnet Brut suits drinkers who want Champagne freshness with white fruit, citrus and crisp bubbles.",
    faqs: [
      { question: "What type of Champagne is Bonnet Brut?", answer: "Bonnet Brut is listed as a Brut Champagne." },
      { question: "What temperature suits Bonnet Brut?", answer: "Serve it well chilled, around 8 C." },
    ],
    finalVerdict: "Bonnet Brut is a crisp Champagne choice for aperitifs, seafood and celebratory pours.",
    metaTitle: "Bonnet Brut Champagne Guide | BevOry",
    metaDescription: "Explore Bonnet Brut Champagne notes, serving temperature, food pairings and city prices on BevOry.",
  },
};
