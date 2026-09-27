import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_66 = [
  ["belgica", "Belgica", "Belgium", "Beers", "pending-belgica"],
  ["belita", "Belita", "Bulgaria", "Wine", "pending-belita"],
  ["bella", "Bella", "India", "Rose Wine", "pending-bella"],
  ["bella-tavola", "Bella Tavola", "Italy", "Red Wine", "pending-bella-tavola"],
  ["bellwether", "Bellwether", "India", "Indian Whisky", "pending-bellwether"],
  ["bernomach", "Bernomach", "Scotland", "Single Malts", "pending-bernomach"],
  ["big-ben", "Big Ben", "India", "Gin", "pending-big-ben"],
  ["big-bro", "Big Bro", "India", "Beers", "pending-big-bro"],
  ["big-bull", "Big Bull", "India", "Rum", "pending-big-bull"],
  ["biker-deluxe", "Biker Deluxe", "India", "Indian Whisky", "pending-biker-deluxe"],
] as const;

export const BRAND_LOGOS_BATCH_66: Record<string, string> = {
  belgica: "https://bevory.in/media/migrated-images/brand-spotlights/lc-brand-ab2667aaf7239de13c9b23fb/23030c1f120c7f9e703f.jpg",
  bernomach: "https://bevory.in/media/migrated-images/brand-spotlights/lc-brand-caa1f7e3aac58cff511242b5/756f4f968a277ba561fa.jpg",
};

export const BRAND_SOURCES_BATCH_66: Record<string, string[]> = {
  belgica: [
    "https://www.bevory.in/agra/brand/belgica",
    "https://belgicaus.com/",
  ],
  belita: [
    "https://www.livcheers.com/faridabad/brand/belita",
    "https://www.livcheers.com/delhi/liquor/belita-merlot-750ml",
    "https://www.vivino.com/en/belita-classic-cabernet-sauvignon/w/12135536",
  ],
  bella: [
    "https://gooddropwine.com/product/good-earth-bella/",
    "https://www.bevory.in/agra/brand/bella",
  ],
  "bella-tavola": [
    "https://www.livcheers.com/goa/liquor/bella-tavola-vino-rosso-1000ml",
    "https://dambros.it/online/prodotto/0000087759/rosso-1l-bella-tavola",
  ],
  bellwether: [
    "https://www.bevory.in/agra/brand/bellwether",
    "https://www.whiskybase.com/whiskies/brand/87898/bellwether",
  ],
  bernomach: [
    "https://www.benromach.com/our-story",
    "https://www.benromach.com/en-us/whisky/aged-10-years",
    "https://www.bevory.in/agra/brand/bernomach",
  ],
  "big-ben": [
    "https://www.thewhiskyexchange.com/p/33387/big-ben-london-dry-gin-deluxe",
    "https://www.ginventory.co/en/gins/big-ben-deluxe",
    "https://www.bevory.in/agra/brand/big-ben",
  ],
  "big-bro": [
    "https://www.bevory.in/agra/brand/big-bro",
  ],
  "big-bull": [
    "https://www.greatgalleon.com/big-bull-rum.php",
    "https://www.livcheers.com/indore/liquor/big-bull-xxx-matured-premium-rum-375ml",
    "https://www.bevory.in/agra/brand/big-bull",
  ],
  "biker-deluxe": [
    "https://www.livcheers.com/liquor/biker-deluxe-750ml",
    "https://www.bevory.in/agra/brand/biker-deluxe",
  ],
};

export const BRAND_CONTENT_BATCH_66: Record<string, BrandPublicContent> = {
  belgica: {
    description: "Belgica is a Belgian beer range listed with Blonde, Red and Wheat 330 ml bottles. The range moves across golden ale, fruit-led red beer and witbier-style refreshment.",
    story: "Belgian brewing is known for expressive yeast, bottle-friendly carbonation and food-ready beer styles. Belgica follows that tradition through three clearly separated beer cues: blonde malt, red fruit and wheat-beer citrus spice.",
    tastingNotes: [
      { title: "Blonde and wheat", description: "The Blonde leans golden, malty and gently fruity, while the Wheat brings citrus, soft grain and a cloudy witbier feel." },
      { title: "Red beer", description: "The Red bottling adds cherry-like fruit, rounded sweetness and a brighter finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a tulip or wheat-beer glass, leaving room for foam." },
      { subheading: "Food", description: "Pair Blonde with chicken tikka, Wheat with tandoori fish, and Red with pork ribs or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "tandoori fish", "pork ribs", "chilli cheese toast", "salted fries"] }],
    whyChoose: "Belgica is useful when you want Belgian-style beer variety without leaving the 330 ml bottle format.",
    faqs: [
      { question: "What Belgica beers are listed?", answer: "Belgica Blonde, Belgica Beer Red and Belgica Wheat are listed." },
      { question: "What food suits Belgica Wheat?", answer: "Seafood, tandoori fish, lemony starters and fried snacks suit the wheat-beer style." },
    ],
    finalVerdict: "Belgica works as a mixed beer pick for drinkers who want blonde, wheat and red styles under one label.",
    metaTitle: "Belgica Beer Guide | BevOry",
    metaDescription: "Explore Belgica Blonde, Red and Wheat beer notes, serving tips, food pairings and city prices on BevOry.",
  },
  belita: {
    description: "Belita is a wine label listed with Merlot, Cabernet Sauvignon and Chardonnay 750 ml bottles. The range covers soft red fruit, firmer Cabernet structure and a round white-wine option.",
    story: "Belita is easiest to understand by grape rather than by one house profile. Merlot gives plush plum fruit, Cabernet Sauvignon brings darker berry and tannin, and Chardonnay covers the white-wine side.",
    tastingNotes: [
      { title: "Red wines", description: "Merlot shows plum and black cherry, while Cabernet Sauvignon leans blackberry, cassis and firmer tannin." },
      { title: "Chardonnay", description: "Chardonnay brings apple, melon and a smoother texture for lighter food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled at 8-10 C; pour Merlot and Cabernet slightly cool in red-wine glasses." },
      { subheading: "Food", description: "Pair Merlot with paneer tikka, Cabernet with mutton seekh, and Chardonnay with grilled prawns or creamy pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["paneer tikka", "mutton seekh", "grilled prawns", "creamy pasta", "aged cheddar"] }],
    whyChoose: "Belita gives a simple three-grape wine range for matching red and white bottles to dinner.",
    faqs: [
      { question: "Which Belita wines are listed?", answer: "Merlot, Cabernet Sauvignon and Chardonnay are listed." },
      { question: "How should Belita Cabernet be served?", answer: "Serve it slightly cool with grilled meat, kebabs or aged cheese." },
    ],
    finalVerdict: "Belita is a practical wine range for buyers who want familiar grapes and clear food matches.",
    metaTitle: "Belita Wine Guide | BevOry",
    metaDescription: "Explore Belita Merlot, Cabernet and Chardonnay notes, serving tips, pairings and city prices on BevOry.",
  },
  bella: {
    description: "Bella is Good Earth's Indian Shiraz rose wine from the Nashik wine region. The bottle is built around Shiraz fruit, giving it a dry rose style with berry, floral and spice notes.",
    story: "Good Earth's Bella sits beside the producer's Blanca and Bleu labels as a colour-led Indian wine expression. Shiraz gives the rose deeper fruit than lighter Provence-style pink wines.",
    tastingNotes: [
      { title: "Shiraz rose", description: "Strawberry, cherry, rose petal and a light pepper note shape the aroma." },
      { title: "Fresh finish", description: "Moderate acidity and soft red-fruit weight keep the wine refreshing with snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill to 8-10 C and pour in a white-wine or rose glass." },
      { subheading: "Food", description: "Pair with tandoori prawns, chicken malai tikka, beetroot kebab, watermelon feta salad or pepperoni pizza." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chicken malai tikka", "beetroot kebab", "watermelon feta salad", "pepperoni pizza"] }],
    whyChoose: "Bella is a Nashik Shiraz rose for drinkers who want Indian wine with berry fruit and spice-friendly freshness.",
    faqs: [
      { question: "What grape is Bella rose made from?", answer: "Good Earth Bella is made from Shiraz." },
      { question: "Where is Bella wine from?", answer: "Bella is an Indian rose associated with Good Earth's Nashik wine range." },
    ],
    finalVerdict: "Bella is a lively Indian rose for chilled pours, grills and spicy party food.",
    metaTitle: "Bella Shiraz Rose Wine Guide | BevOry",
    metaDescription: "Explore Good Earth Bella Shiraz Rose notes, serving temperature, pairings and city prices on BevOry.",
  },
  "bella-tavola": {
    description: "Bella Tavola is an Italian red table-wine label listed through Vino Rosso in a 1 litre bottle. The style is everyday red wine: soft fruit, moderate body and easy food pairing.",
    story: "The name translates naturally to a table setting, and the bottle format supports that role. Rather than chasing reserve-wine intensity, Bella Tavola works as a straightforward Italian red for casual meals.",
    tastingNotes: [
      { title: "Red fruit", description: "Cherry, plum and light berry notes sit at the centre." },
      { title: "Table-wine body", description: "Soft tannin, easy acidity and a dry finish make it simple with food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool at 14-16 C in a simple red-wine glass." },
      { subheading: "Food", description: "Pair with tomato pasta, chicken tikka pizza, mushroom bruschetta, salami or mild cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tomato pasta", "chicken tikka pizza", "mushroom bruschetta", "salami", "mild cheddar"] }],
    whyChoose: "Bella Tavola is a no-fuss Italian red for shared plates and everyday food.",
    faqs: [
      { question: "What type of wine is Bella Tavola?", answer: "It is listed as Vino Rosso, an Italian red table wine." },
      { question: "What bottle size is listed for Bella Tavola?", answer: "The listed format is 1 litre." },
    ],
    finalVerdict: "Bella Tavola is best treated as a relaxed Italian red for casual dinner tables.",
    metaTitle: "Bella Tavola Red Wine Guide | BevOry",
    metaDescription: "Explore Bella Tavola Vino Rosso notes, 1 litre format, food pairings and city prices on BevOry.",
  },
  bellwether: {
    description: "Bellwether is an Indian whisky label listed in BevOry's made-in-India whisky category. The current bottle context centres on Bellwether Whisky in a 750 ml format.",
    story: "Bellwether belongs to the practical Indian whisky shelf where ease of serve matters as much as sipping detail. It is built for ice, water, soda and strongly flavoured bar snacks.",
    tastingNotes: [
      { title: "Grain and caramel", description: "Caramel, cereal grain and vanilla give the whisky a soft opening." },
      { title: "Mixer-friendly finish", description: "Light oak, warm spice and gentle sweetness carry a short highball-ready finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, then add water or chilled soda for a longer drink." },
      { subheading: "Food", description: "Pair with chicken tikka, mutton seekh, masala peanuts, smoked paneer or chilli potato." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "mutton seekh", "masala peanuts", "smoked paneer", "chilli potato"] }],
    whyChoose: "Bellwether is a straightforward Indian whisky for casual highballs and savoury snacks.",
    faqs: [
      { question: "What type of whisky is Bellwether?", answer: "Bellwether is listed under made-in-India whisky." },
      { question: "How should Bellwether be served?", answer: "Serve with ice, water or soda, depending on the pour you prefer." },
    ],
    finalVerdict: "Bellwether is a simple whisky pick for soda serves, party snacks and everyday pours.",
    metaTitle: "Bellwether Whisky Guide | BevOry",
    metaDescription: "Explore Bellwether whisky notes, serving ideas, Indian snack pairings and city prices on BevOry.",
  },
  bernomach: {
    description: "Bernomach is listed as a Speyside single malt Scotch whisky around a 10-year expression. The source profile aligns with Benromach's Forres distillery style: first-fill sherry and bourbon casks, forest fruit, creamy malt and delicate smoke.",
    story: "Benromach Distillery was built in Forres in 1898 and is owned by Gordon & MacPhail. Its modern house style revives an older Speyside approach that uses lightly peated malt for a subtle smoky thread.",
    tastingNotes: [
      { title: "Fruit and malt", description: "Forest berries, apple, creamy malt and sherry-cask sweetness lead the glass." },
      { title: "Gentle smoke", description: "A small peat note adds depth without turning the whisky into an Islay-style smoke bomb." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste neat in a tulip glass, then add a few drops of water to open the fruit and smoke." },
      { subheading: "Food", description: "Pair with smoked chicken tikka, mutton seekh, mushroom galouti, aged cheddar or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken tikka", "mutton seekh", "mushroom galouti", "aged cheddar", "dark chocolate"] }],
    whyChoose: "Bernomach gives Speyside fruit with just enough smoke for drinkers who want balance over intensity.",
    faqs: [
      { question: "What style is Bernomach?", answer: "It is listed as a Speyside single malt Scotch whisky." },
      { question: "Is the style heavily smoky?", answer: "No. The profile is fruit-led with a delicate smoke note." },
    ],
    finalVerdict: "Bernomach is a balanced Speyside malt for fruit, malt and restrained smoke in one glass.",
    metaTitle: "Bernomach Single Malt Guide | BevOry",
    metaDescription: "Explore Bernomach Speyside single malt notes, serving tips, food pairings and city prices on BevOry.",
  },
  "big-ben": {
    description: "Big Ben is a London Dry-style gin label listed through Big Ben London Deluxe Gin. The gin is produced in an English style and sold in 180 ml and 750 ml bottle formats.",
    story: "The name and label cue classic London gin, while the Indian listing makes it a practical bottle for gin-and-tonic drinkers. Its value lies in juniper-led mixing rather than ornate sipping ritual.",
    tastingNotes: [
      { title: "Juniper core", description: "Piney juniper and dry citrus form the main gin profile." },
      { title: "Clean mixer style", description: "Light spice and a brisk dry finish make it suited to tonic, lime and soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build a G&T with ice, chilled tonic and a lime wedge; keep the garnish clean." },
      { subheading: "Food", description: "Pair with tandoori prawns, lemon pepper paneer, fish fry, masala papad or cucumber sandwiches." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "lemon pepper paneer", "fish fry", "masala papad", "cucumber sandwiches"] }],
    whyChoose: "Big Ben is a functional London Dry-style gin for tonic, lime and simple cocktails.",
    faqs: [
      { question: "What type of gin is Big Ben?", answer: "It is listed as Big Ben London Deluxe Gin in a London Dry-style lane." },
      { question: "What mixer suits Big Ben gin?", answer: "Dry tonic, soda and fresh lime are the safest choices." },
    ],
    finalVerdict: "Big Ben is best used as an everyday gin for cold, sharp mixed drinks.",
    metaTitle: "Big Ben Gin Guide | BevOry",
    metaDescription: "Explore Big Ben London Deluxe Gin notes, tonic serves, pairings and city prices on BevOry.",
  },
  "big-bro": {
    description: "Big Bro is an Indian beer label listed through Big Bro Fury Beer in a 500 ml format. The style is positioned for chilled, easy-drinking beer serves with spicy food.",
    story: "Big Bro sits in the modern Indian beer shelf where can and bottle convenience matters. The Fury name points to a bolder casual beer identity rather than a traditional monastery or craft-brewery story.",
    tastingNotes: [
      { title: "Cold malt", description: "Pale malt, grain sweetness and light bitterness make the beer straightforward." },
      { title: "Crisp finish", description: "Carbonation and a dry finish help it cut through fried snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a lager glass or straight from the chilled bottle." },
      { subheading: "Food", description: "Pair with masala fries, chicken wings, tandoori momos, nachos or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["masala fries", "chicken wings", "tandoori momos", "nachos", "chilli paneer"] }],
    whyChoose: "Big Bro is a simple cold beer option for parties, snacks and casual ordering.",
    faqs: [
      { question: "What Big Bro product is listed?", answer: "Big Bro Fury Beer is listed." },
      { question: "What food pairs with Big Bro beer?", answer: "Fried snacks, wings, tandoori momos and spicy paneer work well." },
    ],
    finalVerdict: "Big Bro is a chilled snack-table beer for easy, unfussy drinking.",
    metaTitle: "Big Bro Beer Guide | BevOry",
    metaDescription: "Explore Big Bro Fury Beer notes, serving ideas, snack pairings and city prices on BevOry.",
  },
  "big-bull": {
    description: "Big Bull is an Indian rum label from Great Galleon Ventures, listed through Big Bull XXX Matured Premium Rum. The bottle appears in 375 ml and 750 ml formats with a matured dark-rum profile.",
    story: "Great Galleon positions Big Bull as an assertive Indian rum name. The XXX matured style keeps the drink close to molasses, oak sweetness and spice-friendly mixing.",
    tastingNotes: [
      { title: "Oak and molasses", description: "Vanilla, toffee, dried fruit and oak form the main rum profile." },
      { title: "Sweet finish", description: "A lingering sweetness and warm spice make it useful in cola, ginger beer or dark-rum cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with cola and lime, ginger beer, or a simple rocks pour." },
      { subheading: "Food", description: "Pair with pork ribs, tandoori chicken, grilled pineapple, rum cake or spicy peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork ribs", "tandoori chicken", "grilled pineapple", "rum cake", "spicy peanuts"] }],
    whyChoose: "Big Bull is a matured Indian rum for cola serves, ginger beer and rich snack pairings.",
    faqs: [
      { question: "Who makes Big Bull rum?", answer: "Big Bull is connected with Great Galleon Ventures." },
      { question: "How should Big Bull rum be served?", answer: "Try it with cola and lime, ginger beer or over ice." },
    ],
    finalVerdict: "Big Bull is a dark, mixer-friendly Indian rum for bold party serves.",
    metaTitle: "Big Bull Rum Guide | BevOry",
    metaDescription: "Explore Big Bull XXX Matured Rum notes, mixers, food pairings and city prices on BevOry.",
  },
  "biker-deluxe": {
    description: "Biker Deluxe is an Indian blended whisky listed in 180 ml, 375 ml and 750 ml bottle formats. The style is smooth, caramel-led and built for neat, rocks or highball serves.",
    story: "Biker Deluxe belongs to the practical Indian whisky segment where bottle size flexibility matters. It is made for casual sipping, soda and strongly flavoured snacks rather than collector-style tasting.",
    tastingNotes: [
      { title: "Caramel and oak", description: "Caramel, vanilla, oak and dried fruit shape the aroma." },
      { title: "Creamy spice", description: "Toffee, chocolate and baking spice give the palate a rounded, warming finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, on ice, or lengthened with soda for a lighter highball." },
      { subheading: "Food", description: "Pair with mutton seekh, chicken tikka, chilli cheese toast, masala peanuts or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "chicken tikka", "chilli cheese toast", "masala peanuts", "dark chocolate"] }],
    whyChoose: "Biker Deluxe is an accessible Indian whisky when you want caramel, oak and flexible bottle sizes.",
    faqs: [
      { question: "What type of whisky is Biker Deluxe?", answer: "Biker Deluxe is listed as an Indian blended whisky." },
      { question: "Which sizes are listed for Biker Deluxe?", answer: "The listed formats include 180 ml, 375 ml and 750 ml." },
    ],
    finalVerdict: "Biker Deluxe is a smooth Indian whisky for highballs, rocks pours and spicy snacks.",
    metaTitle: "Biker Deluxe Whisky Guide | BevOry",
    metaDescription: "Explore Biker Deluxe whisky notes, bottle sizes, serving ideas, pairings and city prices on BevOry.",
  },
};
