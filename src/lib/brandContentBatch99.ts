import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_99 = [
  ["lion-s-no-13", "Lion's No 13", "India", "Whisky", "pending-lion-s-no-13"],
  ["liverpool", "Liverpool", "United Kingdom", "Gin", "pending-liverpool"],
  ["london-high", "London High", "India", "Vodka", "pending-london-high"],
  ["london-high-oasis", "London High Oasis", "India", "Vodka", "pending-london-high-oasis"],
  ["look-out", "Look Out", "United States", "White Wine", "pending-look-out"],
  ["los-javis", "Los Javis", "Mexico", "Mezcal", "pending-los-javis"],
  ["louis-xv", "Louis XV", "France", "Brandy", "pending-louis-xv"],
  ["lovers", "Lovers", "Netherlands", "Rum", "pending-lovers"],
  ["lucifer", "Lucifer", "United Kingdom", "Whisky", "pending-lucifer"],
  ["lucifers", "Lucifers", "United Kingdom", "Whisky", "pending-lucifers"],
] as const;

export const BRAND_LOGOS_BATCH_99: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_99: Record<string, string[]> = {
  "lion-s-no-13": [
    "https://trademarking.in/details/Lions-No-13-4258332.html",
    "https://www.bevory.in/agra/brand/lion-s-no-13",
  ],
  liverpool: [
    "https://liverpoolgindistillery.com/collections/our-products",
    "https://liverpoolgindistillery.com/products/liverpool-valencian-orange-gin",
    "https://www.bevory.in/nagpur/product/liverpool-gin-276940c",
  ],
  "london-high": [
    "https://oasisgrp.in/product.php",
    "https://www.bevory.in/hyderabad/product/london-high-green-apple-a8ff885",
  ],
  "london-high-oasis": [
    "https://oasisgrp.in/product.php",
    "https://www.bevory.in/agra/product/london-high-oasis-london-high-triple-distilled-english-vodka-orange-flavoured-8db59ba",
  ],
  "look-out": [
    "https://www.livcheers.com/gurgaon/liquor/look-out-white-750ml",
    "https://www.bevory.in/faridabad/product/look-out-white-31bc5f2",
  ],
  "los-javis": [
    "https://www.wine.com/product/los-javis-espadin-joven-mezcal/530300",
    "https://www.oldtowntequila.com/los-javis-espadin-mezcal-joven/",
    "https://www.bevory.in/gurgaon/product/los-javis-espadin-joven-mezcal-48acf9a",
  ],
  "louis-xv": [
    "https://www.livcheers.com/hyderabad/liquor/louis-xv-premium-french-brandy-750ml",
    "https://www.abdindia.com/media/ev2kzxpe/b9-allied-blenders-and-distillers_industry-report_31052024.pdf",
    "https://www.bevory.in/agra/brand/louis-xv",
  ],
  lovers: [
    "https://theloversrum.com/",
    "https://mrdspirits.com/lovers/",
    "https://www.diffordsguide.com/beer-wine-spirits/6281/the-lovers-rum",
    "https://www.bevory.in/faridabad/product/lovers-rum-b76d2c4",
  ],
  lucifer: [
    "https://monikaalcobev.com/spirits/all/lucifers",
    "https://www.bevory.in/agra/brand/lucifer",
  ],
  lucifers: [
    "https://monikaalcobev.com/spirits/all/lucifers",
    "https://www.livcheers.com/hyderabad/liquor/lucifers-gold-devils-whisky-700ml",
    "https://www.bevory.in/agra/brand/lucifers",
  ],
};

export const BRAND_CONTENT_BATCH_99: Record<string, BrandPublicContent> = {
  "lion-s-no-13": {
    description: "Lion's No 13 is an Indian whisky label tracked through Lion's No.13 Premium Whisky. The brand sits in the made-in-India whisky shelf, with a 750 ml format listed across multiple city catalogues.",
    story: "The Lion's No 13 trademark was filed in India in 2019 under alcoholic beverages including whisky, rum, vodka, gin and wine. Its current Indian catalogue presence is concentrated on whisky, giving the label a direct, local-market identity.",
    tastingNotes: [
      { title: "Indian Whisky Style", description: "Grain sweetness, caramel, light oak and mild spice shape the expected profile." },
      { title: "Easy Finish", description: "A rounded body and warming finish suit simple mixed serves and casual pours." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, cola, ginger ale or a large ice cube." },
      { subheading: "Food", description: "Pair with mutton seekh, masala peanuts, chicken tikka, paneer pakora or pepper fry." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "masala peanuts", "chicken tikka", "paneer pakora", "pepper fry"] }],
    whyChoose: "Lion's No 13 is a straightforward Indian whisky pick for everyday highballs and spicy snacks.",
    faqs: [
      { question: "What is Lion's No 13?", answer: "Lion's No 13 is tracked as an Indian whisky label, led by Lion's No.13 Premium Whisky." },
      { question: "How should Lion's No 13 be served?", answer: "Serve it with soda, water, cola or ice, depending on how light you want the drink." },
    ],
    finalVerdict: "Lion's No 13 works best as a practical Indian whisky for easy mixers and savoury bar food.",
    metaTitle: "Lion's No 13 Whisky Guide | BevOry",
    metaDescription: "Explore Lion's No 13 Premium Whisky notes, serving ideas, food pairings and city prices on BevOry.",
  },
  liverpool: {
    description: "Liverpool is a British gin brand from Liverpool Gin Distillery in the city of Liverpool. The core Liverpool Gin style uses organic botanicals and is tracked in India through a 700 ml gin listing.",
    story: "Liverpool Gin Distillery operates from Castle Street in Liverpool and produces classic and flavoured gin expressions, including London Dry, Valencian Orange and Rose Petal. The range links the port city's bar culture with citrus, spice and juniper-led distillation.",
    tastingNotes: [
      { title: "Classic Gin", description: "Juniper, citrus peel, coriander seed and herbal spice give the gin a clean opening." },
      { title: "Citrus Lift", description: "Orange and lemon brightness keep the finish crisp, dry and tonic-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with Indian tonic water, plenty of ice and a citrus wedge." },
      { subheading: "Food", description: "Pair with tandoori prawns, fish tikka, goat cheese salad, olives or lemon chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "fish tikka", "goat cheese salad", "olives", "lemon chicken"] }],
    whyChoose: "Liverpool is a crisp British gin for drinkers who want juniper, citrus and a clean tonic serve.",
    faqs: [
      { question: "Where is Liverpool Gin from?", answer: "Liverpool Gin is produced by Liverpool Gin Distillery in Liverpool, England." },
      { question: "What mixer suits Liverpool Gin?", answer: "Indian tonic water, soda with citrus, or a dry martini-style serve work well." },
    ],
    finalVerdict: "Liverpool Gin is a bright, city-rooted British gin that feels at home in a sharp G&T.",
    metaTitle: "Liverpool Gin Guide | BevOry",
    metaDescription: "Explore Liverpool Gin notes, distillery context, tonic serves, food pairings and city prices on BevOry.",
  },
  "london-high": {
    description: "London High is an Indian vodka brand from Oasis Group, tracked through plain and green apple variants. The wider Oasis portfolio positions London High around premium vodka and fruit-led flavoured expressions.",
    story: "Oasis Group lists London High alongside its whisky and vodka portfolio, including the London High Premium line. In India, the brand appears as a clear vodka base plus approachable flavoured bottles for chilled mixers.",
    tastingNotes: [
      { title: "Plain Vodka", description: "Clean grain spirit, neutral aroma and a crisp finish make it useful for long drinks." },
      { title: "Green Apple", description: "Sweet apple, light citrus and a fresh, candy-like edge suit soda or lemon-lime mixers." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda, tonic, lemonade, cranberry juice or fresh lime." },
      { subheading: "Food", description: "Pair with chilli paneer, fried prawns, chicken momos, nachos or salted fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "fried prawns", "chicken momos", "nachos", "salted fries"] }],
    whyChoose: "London High is a flexible Indian vodka line for chilled shots, easy highballs and flavoured party serves.",
    faqs: [
      { question: "Who makes London High?", answer: "London High is listed by Oasis Group as part of its spirits portfolio." },
      { question: "What London High variants are tracked?", answer: "BevOry tracks London High plain vodka and London High Green Apple listings." },
    ],
    finalVerdict: "London High is built for cold, simple vodka serves where clean mixing matters more than complexity.",
    metaTitle: "London High Vodka Guide | BevOry",
    metaDescription: "Explore London High vodka notes, Oasis Group context, mixers, pairings and city prices on BevOry.",
  },
  "london-high-oasis": {
    description: "London High Oasis is an Oasis Group vodka listing tied to London High Triple Distilled English Vodka Orange Flavoured. It is tracked as an orange-led flavoured vodka in a 750 ml bottle.",
    story: "Oasis Group's London High line includes clear and flavoured vodka expressions aimed at chilled mixed drinks. The orange-flavoured bottle brings a citrus profile into the same London High family.",
    tastingNotes: [
      { title: "Orange Vodka", description: "Orange peel, sweet citrus and clean spirit notes give it a bright, fruit-forward nose." },
      { title: "Mixer-Friendly Finish", description: "The finish is light, sweet and crisp enough for soda, tonic or lemon-lime mixers." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda, tonic, orange juice, lemonade or fresh lime." },
      { subheading: "Food", description: "Pair with peri-peri fries, chicken wings, paneer tikka, prawn koliwada or citrus salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "chicken wings", "paneer tikka", "prawn koliwada", "citrus salad"] }],
    whyChoose: "London High Oasis is useful when you want an orange vodka for quick highballs and citrus cocktails.",
    faqs: [
      { question: "What is London High Oasis?", answer: "It is tracked as London High Triple Distilled English Vodka Orange Flavoured from the Oasis Group portfolio." },
      { question: "What mixer works with London High Oasis?", answer: "Soda, tonic, lemonade and orange juice all suit its citrus-led profile." },
    ],
    finalVerdict: "London High Oasis is a simple citrus vodka for cold mixers and bright party serves.",
    metaTitle: "London High Oasis Vodka Guide | BevOry",
    metaDescription: "Explore London High Oasis orange vodka notes, mixers, food pairings and city prices on BevOry.",
  },
  "look-out": {
    description: "Look Out is a white wine label tracked in India through Look Out White. The listing sits in the classic white blends shelf, with a 750 ml format and a crisp, citrus-led profile.",
    story: "Look Out White is presented as an easy-drinking white wine for warm-weather pours and light meals. Its appeal comes from freshness, gentle fruit and straightforward serving rather than heavy oak or cellar ageing.",
    tastingNotes: [
      { title: "Citrus White", description: "Lemon, lime, green apple and light tropical fruit define the aroma." },
      { title: "Clean Finish", description: "Crisp acidity and a dry, refreshing finish keep the wine food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled at 8-10C in a white-wine glass." },
      { subheading: "Food", description: "Pair with grilled fish, prawn salad, paneer tikka, lemon chicken or cucumber sandwiches." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "prawn salad", "paneer tikka", "lemon chicken", "cucumber sandwiches"] }],
    whyChoose: "Look Out White is a light, crisp white wine for seafood, salads and relaxed chilled pours.",
    faqs: [
      { question: "What style is Look Out White?", answer: "It is tracked as a classic white blend with citrus, apple and fresh acidity." },
      { question: "How should Look Out White be served?", answer: "Serve it well chilled with light seafood, vegetarian starters or salads." },
    ],
    finalVerdict: "Look Out White is a clean white wine for easy meals, summer serves and citrus-friendly pairings.",
    metaTitle: "Look Out White Wine Guide | BevOry",
    metaDescription: "Explore Look Out White tasting notes, chilled serving ideas, food pairings and city prices on BevOry.",
  },
  "los-javis": {
    description: "Los Javis is a Mexican mezcal producer tracked through Los Javis Espadin Joven Mezcal. The bottle is an unaged espadin mezcal from Oaxaca, built around cooked agave, citrus and salinity.",
    story: "Los Javis is associated with Santiago Matatlan in Oaxaca, a major mezcal-producing town known for espadin agave. The joven style is bottled without barrel ageing, keeping the agave character clear and direct.",
    tastingNotes: [
      { title: "Espadin Joven", description: "Orange blossom, honeydew, cooked agave and fresh olive notes lead the aroma." },
      { title: "Saline Finish", description: "Anise, apple, orange oils, light smoke and mineral salinity carry the palate." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small copita, or use in a mezcal margarita with fresh lime." },
      { subheading: "Food", description: "Pair with tandoori mushrooms, pork tacos, grilled prawns, roasted pineapple or chilli corn." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori mushrooms", "pork tacos", "grilled prawns", "roasted pineapple", "chilli corn"] }],
    whyChoose: "Los Javis is a clean espadin mezcal for drinkers who want agave, citrus and gentle smoke.",
    faqs: [
      { question: "What agave is used for Los Javis Espadin Joven?", answer: "The tracked bottle is made from espadin agave." },
      { question: "Is Los Javis Espadin Joven aged?", answer: "No, joven mezcal is bottled young to keep the agave profile clear." },
    ],
    finalVerdict: "Los Javis is a bright Oaxacan mezcal for neat sips and lime-led cocktails.",
    metaTitle: "Los Javis Mezcal Guide | BevOry",
    metaDescription: "Explore Los Javis Espadin Joven Mezcal notes, Oaxacan style, pairings and city prices on BevOry.",
  },
  "louis-xv": {
    description: "Louis XV is a French brandy label tracked in India through Louis XV Premium French Brandy. It sits in the premium brandy segment and is built around dried-fruit, oak and vanilla-led cues.",
    story: "The Louis XV name borrows from French royal imagery, a common cue in brandy branding. Indian trade reports place Louis XV among premium brandy labels, above the popular and prestige shelves.",
    tastingNotes: [
      { title: "French Brandy Style", description: "Dried apricot, raisin, orange zest and vanilla give the aroma a warm fruit core." },
      { title: "Oak And Spice", description: "Caramel, soft oak, cinnamon and gentle leather notes shape the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small brandy glass, over one cube, or with warm water in cooler weather." },
      { subheading: "Food", description: "Pair with gulab jamun, dark chocolate, fruit cake, roasted almonds or mild blue cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["gulab jamun", "dark chocolate", "fruit cake", "roasted almonds", "mild blue cheese"] }],
    whyChoose: "Louis XV is a warm, fruit-led brandy for after-dinner sipping and dessert pairings.",
    faqs: [
      { question: "What type of spirit is Louis XV?", answer: "Louis XV is tracked as a French brandy." },
      { question: "What food works with Louis XV brandy?", answer: "Desserts, roasted nuts, dark chocolate and fruit cake suit its warm, oaky profile." },
    ],
    finalVerdict: "Louis XV is a classic brandy-style pour for sweet spice, dried fruit and slow sipping.",
    metaTitle: "Louis XV Brandy Guide | BevOry",
    metaDescription: "Explore Louis XV Premium French Brandy notes, serving ideas, dessert pairings and city prices.",
  },
  lovers: {
    description: "Lovers is a rum label tracked in India through Lovers Rum, linked with The Lovers Rum VI. The blend combines rums from the Caribbean and Latin America and is strongly associated with Daiquiri-style cocktails.",
    story: "The Lovers Rum was created by David Cordoba and Arijit Bose, with packaging inspired by the Lovers tarot card. Its blend draws on rums from Barbados, Dominican Republic, Guatemala, Nicaragua and Panama, then is bottled in the Netherlands.",
    tastingNotes: [
      { title: "Tropical Blend", description: "Pineapple, passion fruit, citrus and floral notes sit over a golden rum base." },
      { title: "Spiced Finish", description: "Vanilla, toasted nuts, caramel, cinnamon and peppercorn spice bring structure." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use in a Daiquiri with fresh lime, or serve with ginger beer and a squeeze of citrus." },
      { subheading: "Food", description: "Pair with jerk chicken, pork ribs, tandoori pineapple, banana fritters or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["jerk chicken", "pork ribs", "tandoori pineapple", "banana fritters", "dark chocolate"] }],
    whyChoose: "Lovers is a cocktail-minded rum with tropical fruit, spice and a strong Daiquiri identity.",
    faqs: [
      { question: "What is Lovers Rum known for?", answer: "It is known as a blended rum built with Daiquiri-style cocktails in mind." },
      { question: "Where is Lovers Rum bottled?", answer: "The Lovers Rum is bottled in the Netherlands, using rums from Caribbean and Latin American origins." },
    ],
    finalVerdict: "Lovers Rum is a smart pick for Daiquiris, tropical highballs and fruit-spice rum serves.",
    metaTitle: "Lovers Rum Guide | BevOry",
    metaDescription: "Explore Lovers Rum notes, blend origins, Daiquiri serves, food pairings and city prices on BevOry.",
  },
  lucifer: {
    description: "Lucifer is a whisky label tracked through Lucifer Gold Whisky. The Monika Alcobev listing describes Lucifer's Gold as a blend of Scotch whisky and Kentucky bourbon.",
    story: "Lucifer's Gold is part of Monika Alcobev's imported spirits portfolio, with the brand positioned around a rule-breaking Scotch-and-bourbon blend. The United Kingdom-listed bottle combines Scotch fruit and spice with bourbon vanilla and charred oak.",
    tastingNotes: [
      { title: "Scotch Meets Bourbon", description: "Vanilla, orchard fruit, caramel and charred oak shape the first impression." },
      { title: "Smoke And Spice", description: "Gentle smoke, baking spice and dried fruit add grip without becoming heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, over ice, with soda, or in a highball with chilled sparkling water." },
      { subheading: "Food", description: "Pair with barbecue chicken, mutton seekh, smoked cheese, salted almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue chicken", "mutton seekh", "smoked cheese", "salted almonds", "dark chocolate"] }],
    whyChoose: "Lucifer is for whisky drinkers who want bourbon sweetness folded into Scotch-style spice.",
    faqs: [
      { question: "What is Lucifer Gold Whisky?", answer: "It is described as a blend of Scotch whisky and Kentucky bourbon." },
      { question: "How should Lucifer Gold be served?", answer: "Serve it neat, on ice, with soda or as a simple highball." },
    ],
    finalVerdict: "Lucifer Gold Whisky is a bold mixed-heritage whisky for highballs and oak-sweet sipping.",
    metaTitle: "Lucifer Whisky Guide | BevOry",
    metaDescription: "Explore Lucifer Gold Whisky notes, Scotch-bourbon blend style, pairings and city prices on BevOry.",
  },
  lucifers: {
    description: "Lucifers is tracked through Lucifers Gold Devils Whisky, a 700 ml whisky listing tied to Lucifer's Gold. The style blends Scotch whisky character with Kentucky bourbon sweetness.",
    story: "Monika Alcobev presents Lucifer's Gold as a whisky that combines fruit and spice from Scotch with vanilla and charred oak from bourbon. The Lucifers spelling appears across Indian retail listings for the same Gold Devils whisky identity.",
    tastingNotes: [
      { title: "Gold Devils Profile", description: "Honey, caramel, toasted oak and dried fruit give the whisky a sweet, rounded centre." },
      { title: "Warm Spice", description: "Vanilla, baking spice, light smoke and oak warmth carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, soda, ginger ale, cola, or in a Whisky Sour." },
      { subheading: "Food", description: "Pair with lamb chops, pepper chicken, smoked paneer, roasted cashews or brownies." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "pepper chicken", "smoked paneer", "roasted cashews", "brownies"] }],
    whyChoose: "Lucifers Gold Devils Whisky brings vanilla, oak and spice into an easy modern whisky serve.",
    faqs: [
      { question: "Is Lucifers Gold Devils Whisky the same family as Lucifer's Gold?", answer: "Yes, Indian listings connect Lucifers Gold Devils Whisky with the Lucifer's Gold whisky identity." },
      { question: "What flavours define Lucifers Gold Devils Whisky?", answer: "Expect caramel, vanilla, dried fruit, toasted oak and gentle spice." },
    ],
    finalVerdict: "Lucifers Gold Devils Whisky is a flavour-forward whisky for ice, mixers and rich snack pairings.",
    metaTitle: "Lucifers Whisky Guide | BevOry",
    metaDescription: "Explore Lucifers Gold Devils Whisky notes, serving ideas, pairings and city prices on BevOry.",
  },
};
