import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_130 = [
  ["pussers", "Pusser's", "British Virgin Islands", "Rum", "brand-expansion-pussers"],
  ["sailor-jerry", "Sailor Jerry", "United States", "Rum", "brand-expansion-sailor-jerry"],
  ["michelob-ultra", "Michelob Ultra", "United States", "Beer", "brand-expansion-michelob-ultra"],
  ["goose-island", "Goose Island", "United States", "Beer", "brand-expansion-goose-island"],
  ["beluga", "Beluga", "Montenegro", "Vodka", "brand-expansion-beluga"],
  ["maya-pistola", "Maya Pistola", "India", "Agave Spirits", "brand-expansion-maya-pistola"],
  ["morpheus", "Morpheus", "India", "Brandy", "brand-expansion-morpheus"],
  ["ron-diplomatico", "Diplomatico", "Venezuela", "Rum", "brand-expansion-ron-diplomatico"],
  ["akashi", "Akashi", "Japan", "Japanese Whisky", "brand-expansion-akashi"],
  ["blue-moon", "Blue Moon", "United States", "Beer", "brand-expansion-blue-moon"],
] as const;

export const BRAND_LOGOS_BATCH_130: Record<string, string> = {
  beluga: "https://bevory.in/media/migrated-images/brand-spotlights/lc-brand-db4b593cedf2b826cdea6a75/a87a139b9866b192b993.jpg",
  "maya-pistola": "https://bevory.in/media/migrated-images/brand-spotlights/lc-brand-eec52c1317f0c3f80b7278da/54b34dd9a9e5cc7574a4.jpg",
  morpheus: "https://bevory.in/media/migrated-images/brand-spotlights/lc-brand-c1a1e4aa1037bae1586d8d1f/a823e8aea6e00e779626.jpg",
  "ron-diplomatico": "https://bevory.in/media/migrated-images/brand-spotlights/lc-brand-d050fd1ff294e1173d1dd508/7cd1030de1fb436cbf45.jpg",
};

export const BRAND_SOURCES_BATCH_130: Record<string, string[]> = {
  pussers: [
    "https://pussersrum.com/pages/history",
    "https://pussersrum.com/pages/next-generation-uk-gunpowder-spiced",
  ],
  "sailor-jerry": ["https://www.sailorjerry.com/en"],
  "michelob-ultra": [
    "https://www.anheuser-busch.com/newsroom/michelob-ultra-toasts-to-the-next-gen-of-golf-culture-unveils-most-ambitious-and-integrated-campaign-in-the-history-of-the-big-game",
    "https://kind-sky-07507a610-staging.centralus.2.azurestaticapps.net/faq-page",
  ],
  "goose-island": [
    "https://www.gooseisland.com/beers/honkers",
    "https://www.gooseisland.com/barrel-history",
  ],
  beluga: ["https://noblewoodspirits.com/group/"],
  "maya-pistola": [
    "https://www.pistola.in/about",
    "https://pistola.in/expressions",
  ],
  morpheus: [
    "https://radicokhaitan.com/products/morpheus-blue-xo-premium-brandy/",
    "https://www.radicokhaitan.com/wp-content/uploads/2024/05/Press-Release-May-27-2024.pdf",
  ],
  "ron-diplomatico": [
    "https://www.rondiplomatico.com/our-story/",
    "https://www.brown-forman.com/article/brown-forman-completes-acquisition-diplomatico-rum-brand-january-5-2023",
  ],
  akashi: ["https://www.ei-sake.jp/en/whisky.html"],
  "blue-moon": [
    "https://www.bluemoonbrewingcompany.com/en-US/training/history",
    "https://www.bluemoonbrewingcompany.com/en-GB/story",
  ],
};

export const BRAND_CONTENT_BATCH_130: Record<string, BrandPublicContent> = {
  pussers: {
    description: "Pusser's is a navy-style rum brand tied to the Royal Navy rum tradition. Founder Charles Tobias secured the original Admiralty blend in 1979, after the daily naval rum ration had ended on July 31, 1970.",
    story: "The word pusser comes from purser, the officer who handled supplies aboard naval ships. The brand leans into that seafaring history with full-bodied rum suited to grog, dark tropical drinks and the Painkiller cocktail.",
    tastingNotes: [
      { title: "Navy Rum", description: "Molasses, brown sugar, dried fruit, oak and baking spice give the rum a dense, traditional feel." },
      { title: "Cocktail Depth", description: "The heavier body brings grip to Painkillers, rum punches and dark drinks with pineapple or coconut." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip a small measure neat, pour over ice, or mix a Painkiller with pineapple, orange and coconut." },
      { subheading: "Food", description: "Pair with barbecue pork, grilled prawns, pepper chicken, salted caramel or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue pork", "grilled prawns", "pepper chicken", "salted caramel", "dark chocolate"] }],
    whyChoose: "Pusser's is the rum to choose when navy heritage and a heavier molasses profile matter.",
    faqs: [
      { question: "What is Pusser's Rum known for?", answer: "Pusser's is known for its connection to Royal Navy rum tradition." },
      { question: "Who revived Pusser's Rum?", answer: "Charles Tobias brought the Admiralty-style blend to commercial drinkers in 1979." },
    ],
    finalVerdict: "Pusser's is a fuller rum for old-school tropical cocktails and slow sipping.",
    metaTitle: "Pusser's Rum Guide | BevOry",
    metaDescription: "Explore Pusser's navy-style rum, Royal Navy history, cocktail serves, pairings and city prices on BevOry.",
  },
  "sailor-jerry": {
    description: "Sailor Jerry is a spiced rum brand named for Norman 'Sailor Jerry' Collins, the American tattoo artist. The brand sits in the William Grant & Sons portfolio and is built for cola, ginger beer and citrus-led mixed drinks.",
    story: "Collins became known for bold tattoo flash, sailor imagery and Honolulu shop culture. Sailor Jerry rum carries that visual world into a bottle aimed more at busy bars and house parties than quiet tasting rooms.",
    tastingNotes: [
      { title: "Spice And Vanilla", description: "Vanilla, cinnamon, caramel and clove drive the familiar spiced-rum profile." },
      { title: "Mixer Friendly", description: "A warm, sweet finish makes it easy with cola, ginger beer, pineapple and fresh lime." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Mix with cola, ginger beer or pineapple juice, or pour over ice with a squeeze of lime." },
      { subheading: "Food", description: "Pair with barbecue chicken, loaded nachos, grilled pineapple, ginger cake or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue chicken", "loaded nachos", "grilled pineapple", "ginger cake", "chilli paneer"] }],
    whyChoose: "Sailor Jerry is a dependable spiced rum for simple high-energy mixed drinks.",
    faqs: [
      { question: "Who was Sailor Jerry?", answer: "Norman 'Sailor Jerry' Collins was an American tattoo artist whose work inspired the brand." },
      { question: "Who owns Sailor Jerry rum?", answer: "Sailor Jerry is part of the William Grant & Sons portfolio." },
    ],
    finalVerdict: "Sailor Jerry is best when the drink is cold, spiced and built for a busy table.",
    metaTitle: "Sailor Jerry Rum Guide | BevOry",
    metaDescription: "Explore Sailor Jerry spiced rum, tattoo heritage, tasting notes, mixers, pairings and city prices on BevOry.",
  },
  "michelob-ultra": {
    description: "Michelob Ultra is an American light beer from Anheuser-Busch, introduced in 2002. It is positioned around a leaner beer profile, with the US brand callout of 95 calories and 2.6 carbs per serving.",
    story: "The beer became one of Anheuser-Busch's biggest modern launches by pairing light lager refreshment with sports and active-lifestyle marketing. Its role is direct: cold, crisp beer with low bitterness and a restrained malt body.",
    tastingNotes: [
      { title: "Light Lager", description: "Clean grain, mild sweetness, low bitterness and crisp carbonation keep the beer easy-drinking." },
      { title: "Cold Finish", description: "The finish is dry and light, built for refreshment rather than heavy malt flavour." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a clean lager glass, chilled bottle or can." },
      { subheading: "Food", description: "Pair with grilled corn, chicken tikka, Caesar salad, fish fry or masala fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled corn", "chicken tikka", "Caesar salad", "fish fry", "masala fries"] }],
    whyChoose: "Michelob Ultra is for beer drinkers who want a light, crisp lager with a leaner profile.",
    faqs: [
      { question: "When was Michelob Ultra launched?", answer: "Michelob Ultra was introduced in 2002." },
      { question: "What is Michelob Ultra's US nutrition callout?", answer: "The US brand callout lists 95 calories and 2.6 carbs per serving." },
    ],
    finalVerdict: "Michelob Ultra is a clean, cold light beer for low-key refreshment and sporty occasions.",
    metaTitle: "Michelob Ultra Beer Guide | BevOry",
    metaDescription: "Explore Michelob Ultra light beer, low-carb profile, tasting notes, pairings and city prices on BevOry.",
  },
  "goose-island": {
    description: "Goose Island is a Chicago beer brand known for Honker's Ale, Goose IPA and Bourbon County Stout. Honker's Ale was the first beer brewed at the Clybourn Brewpub in 1988.",
    story: "The brewery helped shape modern American craft beer before becoming part of the AB InBev family. Its barrel program made Bourbon County Stout a reference point for bourbon barrel-aged beer.",
    tastingNotes: [
      { title: "IPA And Ale", description: "Goose IPA brings bold hops and malt grip, while Honker's Ale has a balanced English-style bitter character." },
      { title: "Barrel-Aged Stout", description: "Bourbon County Stout leans into roasted malt, bourbon barrel oak, vanilla, cocoa and warming depth." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve IPA and ale chilled in a pint glass; pour barrel-aged stout slightly warmer in a snifter." },
      { subheading: "Food", description: "Pair IPA with pepperoni pizza or tandoori chicken; serve stout with chocolate cake, barbecue ribs or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepperoni pizza", "tandoori chicken", "chocolate cake", "barbecue ribs", "aged cheddar"] }],
    whyChoose: "Goose Island is useful when one beer name needs to span pub ales, hoppy IPA and barrel-aged stout.",
    faqs: [
      { question: "Where did Goose Island start?", answer: "Goose Island started in Chicago, with Honker's Ale first brewed at the Clybourn Brewpub in 1988." },
      { question: "What is Goose Island known for?", answer: "Goose Island is known for Goose IPA, Honker's Ale and its Bourbon County barrel-aged stout series." },
    ],
    finalVerdict: "Goose Island is a Chicago beer name with range, from crisp pints to serious barrel-aged stout.",
    metaTitle: "Goose Island Beer Guide | BevOry",
    metaDescription: "Explore Goose Island beer, Chicago roots, IPA, Honker's Ale, Bourbon County notes and city prices on BevOry.",
  },
  beluga: {
    description: "Beluga is a super-premium vodka brand now held globally outside Russia by Noblewood Group. Noblewood is headquartered in Montenegro, sources organic spirit from Latvia and operates a Beluga production site in Montenegro.",
    story: "The brand moved into its current Noblewood structure after the group acquired global intellectual property rights outside Russia in 2022. Its positioning stays focused on polished vodka service, cold texture and a clean luxury image.",
    tastingNotes: [
      { title: "Clean Grain", description: "Soft grain, light sweetness and a smooth neutral centre keep the vodka polished." },
      { title: "Cold Texture", description: "Well-chilled service brings out a silky mouthfeel with a quiet mineral finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve freezer-cold in small glasses, over clear ice, or in a dry vodka Martini with a lemon twist." },
      { subheading: "Food", description: "Pair with smoked salmon, caviar-style blini, tandoori prawns, salted almonds or dill potatoes." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked salmon", "blini", "tandoori prawns", "salted almonds", "dill potatoes"] }],
    whyChoose: "Beluga suits vodka drinkers who want a cold, polished pour with a restrained flavour profile.",
    faqs: [
      { question: "Who owns Beluga vodka outside Russia?", answer: "Noblewood Group acquired the global Beluga intellectual property rights outside Russia in 2022." },
      { question: "Where is Noblewood headquartered?", answer: "Noblewood Group is headquartered in Montenegro." },
    ],
    finalVerdict: "Beluga is at its best when served ice-cold beside clean, salty food.",
    metaTitle: "Beluga Vodka Guide | BevOry",
    metaDescription: "Explore Beluga vodka, Noblewood ownership, cold serving ideas, food pairings and city prices on BevOry.",
  },
  "maya-pistola": {
    description: "Maya Pistola Agavepura is an Indian agave spirit made from wild Agave Americana from the Deccan Plateau. Mature agave plants are selected after 8 to 10 years, then distilled, aged, blended and bottled as a 100 percent agave spirit.",
    story: "The brand draws from the Mayahuel agave myth while building a distinctly Indian agave category rather than copying tequila. Its cask work includes aged and unaged spirit blends, with expressions that use barrels such as ex-Cabernet Sauvignon wine casks from KRSMA Estates.",
    tastingNotes: [
      { title: "Agavepura Style", description: "Cooked agave, citrus, mint, coriander seed, green peppercorn and honey give the young style a fresh herbal edge." },
      { title: "Cask-Aged Notes", description: "Wine-cask expressions move toward black cherry, clove, gentle florals and deeper spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat in a small glass, pour over one cube, or use in a Margarita-style sour with fresh lime." },
      { subheading: "Food", description: "Pair with pork vindaloo, tandoori prawns, achari paneer, fish tacos or charred pineapple." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork vindaloo", "tandoori prawns", "achari paneer", "fish tacos", "charred pineapple"] }],
    whyChoose: "Maya Pistola is a landmark Indian agave spirit with real Deccan origin and serious cask ambition.",
    faqs: [
      { question: "What is Maya Pistola made from?", answer: "Maya Pistola is made from wild Agave Americana from India's Deccan Plateau." },
      { question: "Is Maya Pistola tequila?", answer: "No. It is an Indian agave spirit, not tequila, because tequila is legally tied to Mexico." },
    ],
    finalVerdict: "Maya Pistola is the Indian bottle to try when agave flavour, spice and local terroir all matter.",
    metaTitle: "Maya Pistola Agave Guide | BevOry",
    metaDescription: "Explore Maya Pistola Indian agave spirit, Deccan origin, tasting notes, pairings and city prices on BevOry.",
  },
  morpheus: {
    description: "Morpheus is an Indian premium brandy from Radico Khaitan, the company behind Rampur Distillery. Morpheus XO and Morpheus Blue XO sit in the blended premium brandy space, with grape eau-de-vie and cask-led sweetness at the centre.",
    story: "The name refers to the Greek god of dreams, matching the brand's Dare to Dream positioning. Radico describes Morpheus as a national premium brandy success, with Morpheus Blue XO extending the house style into a more polished bottle.",
    tastingNotes: [
      { title: "Fruit And Florals", description: "Fruity top notes, florals, raisin, prune and nutty depth shape the aroma." },
      { title: "Oak And Honey", description: "A heavier palate brings honeyed sweetness, matured oak, vanilla and caramel." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat in a balloon or tulip glass, add one cube, or lengthen gently with soda." },
      { subheading: "Food", description: "Pair with mutton seekh, chicken cafreal, plum cake, dark chocolate or roasted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "chicken cafreal", "plum cake", "dark chocolate", "roasted cashews"] }],
    whyChoose: "Morpheus is a strong Indian brandy choice for drinkers who like fruit, oak and a sweeter after-dinner profile.",
    faqs: [
      { question: "Who makes Morpheus brandy?", answer: "Morpheus is made by Radico Khaitan." },
      { question: "What does Morpheus Blue XO taste like?", answer: "Radico describes it with fruity, floral, dried-fruit, honey, oak, vanilla and caramel notes." },
    ],
    finalVerdict: "Morpheus works best as a slow Indian brandy pour with rich snacks or dessert.",
    metaTitle: "Morpheus Brandy Guide | BevOry",
    metaDescription: "Explore Morpheus XO brandy by Radico Khaitan, tasting notes, serving ideas and city prices on BevOry.",
  },
  "ron-diplomatico": {
    description: "Diplomatico is a Venezuelan rum brand now owned by Brown-Forman. It is made from locally sourced Venezuelan sugarcane molasses, with pot still, batch kettle and column distillation shaping the house range.",
    story: "The brand presents blending as its central craft, using different light and heavy rum profiles before oak ageing. Brown-Forman completed its acquisition of the Diplomático brand in 2023, taking the Venezuelan rum further into global premium shelves.",
    tastingNotes: [
      { title: "Reserva Exclusiva", description: "Orange peel, raisin, toffee, vanilla and baking spice give the flagship sipping rum its plush style." },
      { title: "Distillery Range", description: "Column, kettle and pot still spirits create lighter, rounder and heavier rum lanes across the portfolio." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip Reserva Exclusiva neat, pour over ice, or stir into a rum Old Fashioned with orange bitters." },
      { subheading: "Food", description: "Pair with dark chocolate, pork ribs, coffee kulfi, grilled pineapple or spiced nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "pork ribs", "coffee kulfi", "grilled pineapple", "spiced nuts"] }],
    whyChoose: "Diplomatico is a Venezuelan rum for drinkers who like rounded sweetness, oak and dessert-friendly spice.",
    faqs: [
      { question: "Where is Diplomatico rum from?", answer: "Diplomatico is a Venezuelan rum brand." },
      { question: "Who owns Diplomatico?", answer: "Brown-Forman completed its acquisition of the Diplomático brand in 2023." },
    ],
    finalVerdict: "Diplomatico is a smooth Venezuelan rum for after-dinner pours and rich food pairings.",
    metaTitle: "Diplomatico Rum Guide | BevOry",
    metaDescription: "Explore Diplomatico Venezuelan rum, Reserva Exclusiva notes, pairings and city prices on BevOry.",
  },
  akashi: {
    description: "Akashi is a Japanese whisky label from Eigashima Shuzo, also known for White Oak whisky. The distillery sits in Akashi City near the Seto Inland Sea and produces blended whisky along with richer cask-led releases.",
    story: "Eigashima Shuzo is an old sake producer with roots in Akashi, and its whisky work reflects a compact seaside distillery rather than a giant whisky campus. The Akashi name became the company's global whisky identity as Japanese whisky demand grew.",
    tastingNotes: [
      { title: "Blended Akashi", description: "Light malt, orchard fruit, vanilla and gentle oak make the whisky approachable." },
      { title: "Cask Influence", description: "Richer releases add dried fruit, spice, toasted wood and a coastal savoury edge." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try neat first, then build a Japanese highball with chilled soda, clear ice and a lemon peel." },
      { subheading: "Food", description: "Pair with yakitori, karaage, tandoori chicken, grilled mushrooms or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["yakitori", "karaage", "tandoori chicken", "grilled mushrooms", "salted almonds"] }],
    whyChoose: "Akashi is a compact Japanese whisky choice for drinkers who want gentle malt and highball-friendly balance.",
    faqs: [
      { question: "Who makes Akashi whisky?", answer: "Akashi whisky is made by Eigashima Shuzo in Japan." },
      { question: "Where is Akashi whisky produced?", answer: "It is produced in Akashi City near the Seto Inland Sea." },
    ],
    finalVerdict: "Akashi is a flexible Japanese whisky for neat pours, highballs and savoury grilled food.",
    metaTitle: "Akashi Japanese Whisky Guide | BevOry",
    metaDescription: "Explore Akashi Japanese whisky by Eigashima Shuzo, tasting notes, highballs and city prices on BevOry.",
  },
  "blue-moon": {
    description: "Blue Moon Belgian White is an American Belgian-style wheat ale created by Keith Villa at the Sandlot Brewery in Coors Field, Denver. It is brewed with Valencia orange peel and coriander for a citrusy, lightly creamy wheat-beer profile.",
    story: "Villa returned from brewing study in Belgium and built Blue Moon around Belgian inspiration with a sweeter American twist. The orange garnish became part of the brand's identity because it highlights the Valencia orange peel in the beer.",
    tastingNotes: [
      { title: "Belgian White", description: "Valencia orange, coriander, wheat and oats create a soft citrus aroma and creamy body." },
      { title: "Cold Pint", description: "Low bitterness, light spice and a rounded wheat finish make it easy with brunch or spicy snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a tall glass with an orange wheel, keeping the pour lively and fresh." },
      { subheading: "Food", description: "Pair with fish tacos, chicken tikka, prawn koliwada, citrus salad or soft pretzels." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "chicken tikka", "prawn koliwada", "citrus salad", "soft pretzels"] }],
    whyChoose: "Blue Moon is the wheat beer to pick when orange, coriander and soft texture sound better than hop bitterness.",
    faqs: [
      { question: "Who created Blue Moon Belgian White?", answer: "Keith Villa created Blue Moon Belgian White at the Sandlot Brewery in Denver." },
      { question: "What is Blue Moon brewed with?", answer: "Blue Moon Belgian White is brewed with Valencia orange peel and coriander." },
    ],
    finalVerdict: "Blue Moon is an easy citrus wheat ale for brunch tables, spicy snacks and cold glass service.",
    metaTitle: "Blue Moon Beer Guide | BevOry",
    metaDescription: "Explore Blue Moon Belgian White, orange-coriander notes, serving ideas, pairings and city prices on BevOry.",
  },
};
