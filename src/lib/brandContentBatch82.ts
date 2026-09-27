import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_82 = [
  ["fatini", "Fatini", "Italy", "Wine", "pending-fatini"],
  ["fauconnier", "Fauconnier", "France", "Brandy", "pending-fauconnier"],
  ["fernet", "Fernet", "Italy", "Liqueurs", "pending-fernet"],
  ["fiesta", "Fiesta", "India", "Vodka", "pending-fiesta"],
  ["figaro", "Figaro", "India", "Wine", "pending-figaro"],
  ["five-reserve", "Five Reserve", "India", "Wine", "pending-five-reserve"],
  ["fly", "FLY", "Switzerland", "Gin", "pending-fly"],
  ["four-by-four", "Four By Four", "India", "Made in India Whisky", "pending-four-by-four"],
  ["fox-gang", "Fox Gang", "Lithuania", "Gin", "pending-fox-gang"],
  ["french-dog", "French Dog", "France", "Wine", "pending-french-dog"],
] as const;

export const BRAND_LOGOS_BATCH_82: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_82: Record<string, string[]> = {
  fatini: [
    "https://www.fantiniwines.com/en/wines/fantini/calalenta-rosato-merlot/",
    "https://static.fantiniwines.com/media/2022/12/CALALENTA_ROSATO.pdf",
    "https://www.bevory.in/gurgaon/product/fatini-fantini-calalenta-merlot-099990d",
  ],
  fauconnier: [
    "https://www.fauconnier.com/en/gamme/brandies-2/",
    "https://www.fauconnier.com/produit/liqueur-fauconnier-triple-sec/",
    "https://www.bevory.in/gurgaon/brand/fauconnier",
  ],
  fernet: [
    "https://us.fernetbranca.com/about",
    "https://www.brancainternational.com/en/our-story/",
    "https://www.bevory.in/gurgaon/brand/fernet",
  ],
  fiesta: [
    "https://www.bevory.in/gurgaon/brand/fiesta",
    "https://www.bevory.in/gurgaon/product/fiesta-vodka-6981290",
    "https://www.bevory.in/gurgaon/product/fiesta-salud-fiesta-b5bcdb8",
  ],
  figaro: [
    "https://www.virginhillswines.com/category/figaro",
    "https://www.bevory.in/gurgaon/brand/figaro",
    "https://www.bevory.in/gurgaon/product/figaro-red-21532c5",
  ],
  "five-reserve": [
    "https://www.livcheers.com/hyderabad/brand/five-reserve",
    "https://sarakku.in/price/brand/fives/",
    "https://www.bevory.in/gurgaon/brand/five-reserve",
  ],
  fly: [
    "https://www.livcheers.com/goa/liquor/fly-gin-700ml",
    "https://www.livcheers.com/goa/brand/fly",
    "https://www.bevory.in/gurgaon/brand/fly",
  ],
  "four-by-four": [
    "https://www.livcheers.com/reviews/four-by-four-premier-millennials-whisky",
    "https://www.bevory.in/gurgaon/brand/four-by-four",
    "https://www.bevory.in/gurgaon/product/four-by-four-four-by-four-premier-millennials-whisky-e0c2638",
  ],
  "fox-gang": [
    "https://degtine.lt/wp-content/uploads/2022/04/FOX_GANG_Sheet_2022.pdf",
    "https://www.danmurphys.com.au/product/DM_ER_1000005534_FOX-PINK",
    "https://www.bevory.in/gurgaon/brand/fox-gang",
  ],
  "french-dog": [
    "https://freixenetgratien.fr/en/marque/selection-cepages/",
    "https://winesandbrands.com/wp-content/uploads/2021/06/FT-French-Bulldog-GRENACHE-2020-IGP-Pays-d-OC-maj-090221.pdf",
    "https://www.bevory.in/gurgaon/brand/french-dog",
  ],
};

export const BRAND_CONTENT_BATCH_82: Record<string, BrandPublicContent> = {
  fatini: {
    description: "Fatini is listed on BevOry through Fantini Calalenta Merlot, an Italian wine from the Fantini group. The Calalenta name is tied to night harvesting, used to preserve freshness in warm-climate Italian vineyards.",
    story: "Fantini Wines is based in Abruzzo and works across southern Italian regions with fruit-forward, modern wine styles. The Calalenta Merlot bottle gives Fatini a clear red-wine identity built around ripe fruit, soft tannin and easy Indian-food pairing.",
    tastingNotes: [
      { title: "Merlot Fruit", description: "Ripe plum, cherry, raspberry and soft vanilla give the wine a rounded core." },
      { title: "Gentle Finish", description: "Fine tannins, light spice and a smooth finish make it approachable." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a medium red-wine glass." },
      { subheading: "Food", description: "Pair with paneer tikka, lamb seekh, tomato pasta, roast chicken or aged gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["paneer tikka", "lamb seekh", "tomato pasta", "roast chicken", "aged gouda"] }],
    whyChoose: "Fatini is a useful Italian Merlot page for drinkers who want soft fruit and low-fuss dinner pairing.",
    faqs: [
      { question: "What wine is Fatini linked with?", answer: "BevOry lists Fatini through Fantini Calalenta Merlot." },
      { question: "What food suits Fatini Merlot?", answer: "Paneer tikka, lamb seekh, pasta, roast chicken and semi-hard cheese work well." },
    ],
    finalVerdict: "Fatini is an easy Italian red for fruit-led drinking, grilled snacks and weeknight food pairings.",
    metaTitle: "Fatini Wine Guide | BevOry",
    metaDescription: "Explore Fatini Fantini Calalenta Merlot notes, serving ideas, food pairings and city prices.",
  },
  fauconnier: {
    description: "Fauconnier is a French spirits label seen on BevOry through Victor Fauconnier Napoleon grape brandy and Fauconnier Triple Sec. The range spans oak-toned brandy and citrus-led liqueur styles.",
    story: "Fauconnier's own portfolio includes brandies, cognacs, calvados, liqueurs, rums, gins and tequila-style spirits. The Indian listings focus on Napoleon Pure Grape Brandy VSOP and Triple Sec liqueur, giving the page both sipping and cocktail relevance.",
    tastingNotes: [
      { title: "Napoleon Brandy", description: "Dried grape, caramel, vanilla, toasted oak and warm spice shape the brandy style." },
      { title: "Triple Sec", description: "Candied orange peel, citrus oil and clean sweetness make it cocktail-ready." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip the brandy neat or over ice; use Triple Sec in Margaritas, Sidecars and Cosmopolitans." },
      { subheading: "Food", description: "Pair brandy with plum cake or dark chocolate; pair Triple Sec cocktails with tacos or chilli prawns." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["plum cake", "dark chocolate", "tacos", "chilli prawns", "orange cake"] }],
    whyChoose: "Fauconnier is handy when you want one French label covering grape brandy depth and orange liqueur mixability.",
    faqs: [
      { question: "Which Fauconnier bottles are listed?", answer: "BevOry shows Victor Fauconnier Napoleon grape brandy and Fauconnier Triple Sec liqueur listings." },
      { question: "How do you use Fauconnier Triple Sec?", answer: "Use it in citrus cocktails such as Margaritas, Sidecars and Cosmopolitans." },
    ],
    finalVerdict: "Fauconnier works well for brandy drinkers and cocktail makers who need a French spirits reference point.",
    metaTitle: "Fauconnier Brandy Guide | BevOry",
    metaDescription: "Explore Fauconnier brandy and Triple Sec notes, cocktail serves, pairings and city prices.",
  },
  fernet: {
    description: "Fernet is an Italian amaro page led by Fernet-Branca and other fernet-style bitter liqueurs. Fernet-Branca was created in Milan in 1845 by Bernardino Branca and remains the best-known name in the style.",
    story: "Fernet-Branca is made with a guarded recipe built around 27 herbs, roots and spices. The style became especially famous as a digestif and as a cola highball in Argentina, where fernet and cola is a nightlife staple.",
    tastingNotes: [
      { title: "Herbal Bitterness", description: "Mint, aloe-like bitterness, saffron warmth, roots and dark spice give fernet its intense profile." },
      { title: "Long Finish", description: "Menthol, bitter orange, dried herbs and earthy spice linger after the sip." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled as a small digestif, with cola over ice, or in bitter cocktails like the Toronto." },
      { subheading: "Food", description: "Pair with dark chocolate, espresso desserts, salted almonds, tiramisu or rich kebabs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "espresso desserts", "salted almonds", "tiramisu", "rich kebabs"] }],
    whyChoose: "Fernet is for drinkers who want an assertive bitter liqueur with real cocktail and digestif character.",
    faqs: [
      { question: "What is Fernet-Branca?", answer: "Fernet-Branca is an Italian bitter herbal liqueur created in Milan in 1845." },
      { question: "How is fernet usually served?", answer: "It is served chilled, with cola, or as a bitter accent in cocktails." },
    ],
    finalVerdict: "Fernet is a bold bitter liqueur page for digestif drinkers, bartenders and cola-highball fans.",
    metaTitle: "Fernet Liqueur Guide | BevOry",
    metaDescription: "Explore Fernet-Branca and fernet-style liqueurs, bitter notes, cocktail serves and city prices.",
  },
  fiesta: {
    description: "Fiesta is an Indian beverage label listed through Fiesta Vodka and Salud Fiesta ready-to-drink formats. The page covers clean vodka serves and lighter party-style bottles.",
    story: "Fiesta sits in the casual Indian party lane, where ease of mixing matters more than heavy oak or age statements. Its vodka listing suits soda, juice and citrus cocktails, while the small-format Salud Fiesta bottle is built for quick chilled serves.",
    tastingNotes: [
      { title: "Vodka Serve", description: "Neutral grain, light sweetness and a cool finish make Fiesta Vodka mixer-friendly." },
      { title: "Party Bottle", description: "The Salud Fiesta format leans toward a lighter, ready-to-chill drinking style." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve vodka chilled with soda, cranberry, orange juice or lime." },
      { subheading: "Food", description: "Pair with peri peri fries, chilli paneer, chicken popcorn, tacos or cucumber salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri peri fries", "chilli paneer", "chicken popcorn", "tacos", "cucumber salad"] }],
    whyChoose: "Fiesta is a simple choice for vodka mixers, chilled party pours and easy snack pairings.",
    faqs: [
      { question: "Which Fiesta products are listed?", answer: "BevOry shows Fiesta Vodka and Salud Fiesta bottle listings." },
      { question: "What mixers suit Fiesta Vodka?", answer: "Soda, lime, cranberry juice and orange juice are natural pairings." },
    ],
    finalVerdict: "Fiesta is built for low-effort vodka drinks and casual group serves.",
    metaTitle: "Fiesta Vodka Guide | BevOry",
    metaDescription: "Explore Fiesta Vodka notes, Salud Fiesta listings, mixer ideas, food pairings and city prices.",
  },
  figaro: {
    description: "Figaro is listed on BevOry through red and white wine bottles. The route points to straightforward table wines for casual meals rather than a single grand-cru or vintage-led portfolio.",
    story: "Figaro's wine listings are associated with Chateau Royale Figaro Red and Figaro White through Indian retail references. The red-and-white split makes the page practical for shoppers choosing between a chilled aperitif and a soft dinner red.",
    tastingNotes: [
      { title: "Figaro Red", description: "Red fruit, soft spice and gentle tannins make the red suitable for everyday meals." },
      { title: "Figaro White", description: "Citrus, apple and light floral notes keep the white crisp and easy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve white chilled and red slightly cool in simple wine glasses." },
      { subheading: "Food", description: "Pair white with fish tikka or salad; pair red with paneer makhani, pizza or roast chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tikka", "green salad", "paneer makhani", "pizza", "roast chicken"] }],
    whyChoose: "Figaro is a practical red-or-white wine page for easy food matching.",
    faqs: [
      { question: "Which Figaro wines are listed?", answer: "BevOry shows Figaro Red and Figaro White wine listings." },
      { question: "How should Figaro White be served?", answer: "Serve it chilled with lighter snacks, fish, salads or mild paneer dishes." },
    ],
    finalVerdict: "Figaro is a simple table-wine choice when you want red and white options without overthinking the bottle.",
    metaTitle: "Figaro Wine Guide | BevOry",
    metaDescription: "Explore Figaro Red and White wine notes, serving ideas, Indian pairings and city prices.",
  },
  "five-reserve": {
    description: "Five Reserve is an Indian wine label listed through Chenin Blanc, Cabernet Sauvignon and Pinotage bottles. Tamil Nadu retail references connect the range with Sonarys Co-Brands, giving it a clear Indian wine-market footprint.",
    story: "The portfolio covers one fresh white and two fuller reds, a useful spread for Indian meals. Chenin Blanc brings brightness, Cabernet Sauvignon adds black-fruit structure and Pinotage gives a smokier, plum-led red option.",
    tastingNotes: [
      { title: "Chenin Blanc", description: "Apple, pear, citrus and a clean finish make the white refreshing." },
      { title: "Reserve Reds", description: "Blackcurrant, plum, cocoa, smoke and gentle tannins shape the Cabernet and Pinotage lane." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chenin Blanc chilled; serve Cabernet Sauvignon and Pinotage slightly cool." },
      { subheading: "Food", description: "Pair Chenin with tandoori fish; pair reds with mutton seekh, mushroom tikka or grilled chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "mutton seekh", "mushroom tikka", "grilled chicken", "aged cheddar"] }],
    whyChoose: "Five Reserve is a useful Indian wine page for comparing Chenin Blanc, Cabernet Sauvignon and Pinotage.",
    faqs: [
      { question: "Which Five Reserve wines are listed?", answer: "Listings include Chenin Blanc, Cabernet Sauvignon and Pinotage." },
      { question: "What food suits Five Reserve Pinotage?", answer: "Try it with mutton seekh, smoked paneer, grilled chicken or mushroom tikka." },
    ],
    finalVerdict: "Five Reserve gives Indian wine shoppers a compact white-and-red portfolio for spicy food.",
    metaTitle: "Five Reserve Wine Guide | BevOry",
    metaDescription: "Explore Five Reserve Chenin Blanc, Cabernet, Pinotage notes, pairings and city prices.",
  },
  fly: {
    description: "FLY is a Swiss gin label listed through FLY Alpine Gin in 700 ml format. The gin is positioned around Alpine water, classic juniper and a clean citrus-herb profile.",
    story: "FLY Alpine Gin appears in Indian listings as a premium imported gin from Switzerland. Its flavour direction is crisp and botanical, with juniper, citrus peel, rosemary, lavender and peppery lift.",
    tastingNotes: [
      { title: "Alpine Freshness", description: "Juniper, lemon peel, orange peel and cool herbal notes lead the nose." },
      { title: "Crisp Finish", description: "Rosemary, lavender and pepper create a dry, refreshing finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with tonic, plenty of ice and a lemon or orange peel garnish." },
      { subheading: "Food", description: "Pair with tandoori prawns, goat cheese salad, sushi, lemon chicken or cucumber sandwiches." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "goat cheese salad", "sushi", "lemon chicken", "cucumber sandwiches"] }],
    whyChoose: "FLY is a clean Swiss gin pick for crisp G&Ts and citrus-led cocktails.",
    faqs: [
      { question: "Where is FLY Gin from?", answer: "FLY Alpine Gin is listed as a Swiss gin." },
      { question: "What garnish suits FLY Gin?", answer: "Use lemon peel, orange peel, rosemary or cucumber with tonic." },
    ],
    finalVerdict: "FLY is a polished gin for tonic serves, herb garnishes and lighter seafood pairings.",
    metaTitle: "FLY Gin Guide | BevOry",
    metaDescription: "Explore FLY Alpine Gin notes, Swiss gin style, tonic serves, food pairings and city prices.",
  },
  "four-by-four": {
    description: "Four By Four is an Indian whisky label listed through Four By Four Premier Millennials Whisky. The bottle is positioned for younger whisky drinkers who want simple mixed serves and a modern name.",
    story: "Four By Four sits in the Indian premium everyday whisky lane, where bottle design and easy mixability are central to the purchase. Its Premier Millennials expression gives the page one clear anchor for soda, water and ice serves.",
    tastingNotes: [
      { title: "Mellow Grain", description: "Cereal sweetness, honey, caramel and soft vanilla make the whisky approachable." },
      { title: "Easy Finish", description: "Light oak, pepper and mild warmth work well in highballs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, cola or a large cube of ice." },
      { subheading: "Food", description: "Pair with chicken tikka, paneer rolls, loaded fries, masala peanuts or seekh kebab." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "paneer rolls", "loaded fries", "masala peanuts", "seekh kebab"] }],
    whyChoose: "Four By Four is a modern Indian whisky page for casual mixers and city-price comparison.",
    faqs: [
      { question: "What is Four By Four Premier Millennials Whisky?", answer: "It is an Indian whisky listing built for casual mixed serves." },
      { question: "What mixer works with Four By Four?", answer: "Soda, water, cola and ice suit its easy whisky profile." },
    ],
    finalVerdict: "Four By Four is a casual whisky choice for highballs, snacks and quick local comparison.",
    metaTitle: "Four By Four Whisky Guide | BevOry",
    metaDescription: "Explore Four By Four Premier Millennials Whisky notes, serves, pairings and city prices.",
  },
  "fox-gang": {
    description: "Fox Gang is a gin label listed through classic gin and Pink Gin bottles. The brand is linked with Vilniaus Degtine in Lithuania and uses a bold visual identity built around its fox-gang label art.",
    story: "Fox Gang Gin focuses on modern, flavour-forward gin serves rather than austere London Dry minimalism. The pink expression highlights strawberry and berry aromatics, while the classic gin keeps juniper and citrus in front.",
    tastingNotes: [
      { title: "Classic Gin", description: "Juniper, citrus peel, coriander and dry herbal notes create the base profile." },
      { title: "Pink Gin", description: "Strawberry, red berries, soft florals and juniper give the pink bottle its sweeter direction." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve classic gin with tonic and citrus; serve Pink Gin with tonic, berries and mint." },
      { subheading: "Food", description: "Pair with prawn cocktail, berry salad, fish tikka, sushi or goat cheese bruschetta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["prawn cocktail", "berry salad", "fish tikka", "sushi", "goat cheese bruschetta"] }],
    whyChoose: "Fox Gang is a fun gin page for drinkers choosing between crisp classic gin and berry-led pink gin.",
    faqs: [
      { question: "Which Fox Gang gins are listed?", answer: "BevOry shows Fox Gang Gin and Fox Gang Pink Gin listings." },
      { question: "What garnish suits Fox Gang Pink Gin?", answer: "Use strawberries, raspberries, mint or a citrus wheel with tonic." },
    ],
    finalVerdict: "Fox Gang is a lively gin choice for tonic serves, berry cocktails and bright party drinks.",
    metaTitle: "Fox Gang Gin Guide | BevOry",
    metaDescription: "Explore Fox Gang Gin and Pink Gin notes, tonic serves, garnish ideas, pairings and city prices.",
  },
  "french-dog": {
    description: "French Dog is a French wine label listed through Grenache, Cabernet Sauvignon and Chardonnay Sweet Cross bottles. The brand belongs to the French Dog selection within the Freixenet Gratien portfolio.",
    story: "French Dog uses approachable French varietal wines from the IGP lane, where grape clarity and casual food matching matter. The listed range gives shoppers red-fruit Grenache, structured Cabernet and a softer Chardonnay style.",
    tastingNotes: [
      { title: "Red Varietals", description: "Grenache brings red berries and spice, while Cabernet Sauvignon adds blackcurrant and firmer tannin." },
      { title: "Chardonnay", description: "Apple, peach, soft citrus and a rounded finish make the white easy to chill and pour." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled; serve Grenache and Cabernet slightly cool in red-wine glasses." },
      { subheading: "Food", description: "Pair Chardonnay with butter chicken or fish; pair reds with lamb chops, pizza or grilled mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter chicken", "fish tikka", "lamb chops", "pizza", "grilled mushrooms"] }],
    whyChoose: "French Dog is a friendly French varietal range for shoppers who want clear grape choices.",
    faqs: [
      { question: "Which French Dog wines are listed?", answer: "BevOry shows French Dog Grenache, Cabernet Sauvignon and Chardonnay Sweet Cross." },
      { question: "What food suits French Dog Grenache?", answer: "Try Grenache with pizza, roast chicken, grilled mushrooms or lightly spiced lamb." },
    ],
    finalVerdict: "French Dog is a relaxed French wine pick for clear varietal drinking and everyday meals.",
    metaTitle: "French Dog Wine Guide | BevOry",
    metaDescription: "Explore French Dog Grenache, Cabernet and Chardonnay notes, food pairings and city prices.",
  },
};
