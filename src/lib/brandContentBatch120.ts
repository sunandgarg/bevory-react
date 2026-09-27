import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_120 = [
  ["grand-marnier", "Grand Marnier", "France", "Liqueur", "brand-expansion-grand-marnier"],
  ["frangelico", "Frangelico", "Italy", "Liqueur", "brand-expansion-frangelico"],
  ["casamigos", "Casamigos", "Mexico", "Tequila", "brand-expansion-casamigos"],
  ["bumbu", "Bumbu", "Barbados", "Rum", "brand-expansion-bumbu"],
  ["chairmans-reserve", "Chairman's Reserve", "Saint Lucia", "Rum", "brand-expansion-chairmans-reserve"],
  ["dead-mans-fingers", "Dead Man's Fingers", "United Kingdom", "Rum", "brand-expansion-dead-mans-fingers"],
  ["pussers", "Pusser's", "British Virgin Islands", "Rum", "brand-expansion-pussers"],
  ["sailor-jerry", "Sailor Jerry", "United States", "Rum", "brand-expansion-sailor-jerry"],
  ["michelob-ultra", "Michelob Ultra", "United States", "Beer", "brand-expansion-michelob-ultra"],
  ["goose-island", "Goose Island", "United States", "Beer", "brand-expansion-goose-island"],
] as const;

export const BRAND_LOGOS_BATCH_120: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_120: Record<string, string[]> = {
  "grand-marnier": ["https://www.grandmarnier.com/en-us/our-collection/cordon-rouge/"],
  frangelico: ["https://frangelico.com/en-us/about/"],
  casamigos: ["https://www.casamigos.com/en-us/our-story"],
  bumbu: [
    "https://bumbu.sovereignbrands.com/discover/",
    "https://www.pernod-ricard.com/en/brand/bumbu",
  ],
  "chairmans-reserve": [
    "https://www.chairmansreserverum.com/history/",
    "https://www.stluciadistillers.com/our-rums",
  ],
  "dead-mans-fingers": [
    "https://deadmansfingers.com/home/our-story/",
    "https://deadmansfingers.com/product/spiced-rum/",
  ],
  pussers: [
    "https://pussersrum.com/blogs/videos/pussers-brand-history",
    "https://gov.vg/news/statement-premier-wheatley-passing-mr-charles-s-tobias-mbe",
  ],
  "sailor-jerry": [
    "https://www.sailorjerry.com/en",
    "https://www.williamgrant.com/product-information",
  ],
  "michelob-ultra": [
    "https://www.anheuser-busch.com/newsroom/michelob-ultra-toasts-to-the-next-gen-of-golf-culture-unveils-most-ambitious-and-integrated-campaign-in-the-history-of-the-big-game",
    "https://kind-sky-07507a610-staging.centralus.2.azurestaticapps.net/faq-page",
  ],
  "goose-island": [
    "https://www.gooseisland.com/beers/honkers",
    "https://www.gooseisland.com/beers/goose-ipa",
    "https://www.gooseisland.com/barrel-history",
  ],
};

export const BRAND_CONTENT_BATCH_120: Record<string, BrandPublicContent> = {
  "grand-marnier": {
    description: "Grand Marnier is a French orange liqueur built around Cognac and distilled bitter orange essence. Cordon Rouge, created in 1880 by Louis-Alexandre Marnier Lapostolle, remains the house's signature bottle.",
    story: "The brand grew from the Marnier Lapostolle family's decision to combine fine French Cognac with the intensity of bitter orange. That Cognac base gives Grand Marnier more weight than a simple orange cordial.",
    tastingNotes: [
      { title: "Cordon Rouge", description: "Bitter orange peel, Cognac grape depth, vanilla, caramel and light oak give the liqueur its rich citrus profile." },
      { title: "Cocktail Lift", description: "A small pour adds orange perfume, warmth and rounded sweetness to Margaritas, Sidecars and dessert drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use in a Grand Margarita, Sidecar or crepe sauce; sip over ice when you want a richer orange liqueur." },
      { subheading: "Food", description: "Pair with dark chocolate, orange kulfi, roast duck, almond cake or blue cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "orange kulfi", "roast duck", "almond cake", "blue cheese"] }],
    whyChoose: "Grand Marnier is the orange liqueur to choose when Cognac depth matters as much as citrus.",
    faqs: [
      { question: "What is Grand Marnier made with?", answer: "Grand Marnier Cordon Rouge combines French Cognac with distilled bitter orange liqueur and sugar." },
      { question: "When was Grand Marnier Cordon Rouge created?", answer: "Louis-Alexandre Marnier Lapostolle created Cordon Rouge in 1880." },
    ],
    finalVerdict: "Grand Marnier brings orange, Cognac and dessert-ready warmth into one versatile bottle.",
    metaTitle: "Grand Marnier Liqueur Guide | BevOry",
    metaDescription: "Explore Grand Marnier Cordon Rouge, Cognac-orange flavor, cocktails, pairings and city prices on BevOry.",
  },
  frangelico: {
    description: "Frangelico is an Italian hazelnut liqueur from Piedmont in northern Italy. It blends hazelnut distillate with cocoa, vanilla, roasted coffee and other flavoring preparations.",
    story: "The bottle's monk-like shape points to the brand's Piedmontese folklore and old monastic liqueur traditions. Its real appeal is practical: a clear hazelnut flavor that works in coffee, dessert cocktails and simple chilled serves.",
    tastingNotes: [
      { title: "Hazelnut Core", description: "Roasted hazelnut, praline, cocoa and vanilla lead the aroma and palate." },
      { title: "Coffee Finish", description: "A light coffee note and gentle sweetness keep it suited to after-dinner pours." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, over ice, with espresso, or in a nutty dessert cocktail." },
      { subheading: "Food", description: "Pair with tiramisu, coffee kulfi, dark chocolate, vanilla ice cream or roasted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tiramisu", "coffee kulfi", "dark chocolate", "vanilla ice cream", "roasted almonds"] }],
    whyChoose: "Frangelico is a clean hazelnut liqueur for coffee drinks and dessert-led serves.",
    faqs: [
      { question: "Where is Frangelico from?", answer: "Frangelico comes from Piedmont in northern Italy." },
      { question: "What flavor is Frangelico?", answer: "Frangelico is led by hazelnut, with cocoa, vanilla and roasted coffee notes." },
    ],
    finalVerdict: "Frangelico is the liqueur to pour when dessert needs hazelnut rather than heavy cream.",
    metaTitle: "Frangelico Liqueur Guide | BevOry",
    metaDescription: "Explore Frangelico Italian hazelnut liqueur, tasting notes, dessert serves, pairings and city prices on BevOry.",
  },
  casamigos: {
    description: "Casamigos is a tequila and mezcal brand made from 100 percent Blue Weber agave from Jalisco, Mexico. George Clooney, Rande Gerber and Mike Meldman built the brand around a smooth, easy-sipping style.",
    story: "The name means house of friends, reflecting the brand's origin as a private tequila project between friends. Diageo later acquired Casamigos, taking the celebrity-backed bottle into a much wider global market.",
    tastingNotes: [
      { title: "Blanco", description: "Sweet agave, citrus, vanilla and a clean pepper note make Blanco easy to mix." },
      { title: "Reposado And Añejo", description: "Oak ageing adds caramel, cocoa, baking spice and a rounder agave sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat, serve over one cube, or use Blanco in a clean Margarita or Paloma." },
      { subheading: "Food", description: "Pair with fish tacos, guacamole, tandoori prawns, chilli paneer or grilled corn." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "guacamole", "tandoori prawns", "chilli paneer", "grilled corn"] }],
    whyChoose: "Casamigos suits drinkers who want a softer Jalisco tequila for neat pours and familiar cocktails.",
    faqs: [
      { question: "Who founded Casamigos?", answer: "George Clooney, Rande Gerber and Mike Meldman founded Casamigos." },
      { question: "What agave does Casamigos use?", answer: "Casamigos tequila uses 100 percent Blue Weber agave from Jalisco, Mexico." },
    ],
    finalVerdict: "Casamigos is a crowd-friendly tequila with enough agave character for cocktails and relaxed sipping.",
    metaTitle: "Casamigos Tequila Guide | BevOry",
    metaDescription: "Explore Casamigos tequila, Blue Weber agave, Blanco and Reposado notes, pairings and city prices on BevOry.",
  },
  bumbu: {
    description: "Bumbu is a Caribbean rum brand whose Original expression is crafted on Barbados. It draws inspiration from old sailor recipes that mixed rum with spices during Caribbean voyages.",
    story: "The brand presents Barbados as the birthplace of rum and builds its house style around rich, spiced sweetness. Its bottles sit closer to dessert-friendly sipping and mixed drinks than dry, austere rum.",
    tastingNotes: [
      { title: "Original", description: "Banana, vanilla, caramel, warm spice and tropical fruit give Bumbu Original its plush profile." },
      { title: "Rum Cocktail Use", description: "The sweetness and spice work best when mixers are kept dry, citrusy or bitter." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with cola, or in a rum sour with enough lime to balance the sweetness." },
      { subheading: "Food", description: "Pair with grilled pineapple, banana fritters, pork vindaloo, dark chocolate or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled pineapple", "banana fritters", "pork vindaloo", "dark chocolate", "salted cashews"] }],
    whyChoose: "Bumbu is the rum pick for drinkers who like ripe tropical sweetness and spice.",
    faqs: [
      { question: "Where is Bumbu Original made?", answer: "Bumbu Original is crafted on Barbados." },
      { question: "What style is Bumbu?", answer: "Bumbu Original is a rum-based spiced expression with rich tropical sweetness." },
    ],
    finalVerdict: "Bumbu is best treated as a bold spiced rum for ice, cola and dessert-friendly serves.",
    metaTitle: "Bumbu Rum Guide | BevOry",
    metaDescription: "Explore Bumbu rum from Barbados, spiced flavor, serving ideas, food pairings and city prices on BevOry.",
  },
  "chairmans-reserve": {
    description: "Chairman's Reserve is a Saint Lucian rum brand from Saint Lucia Distillers. It blends column and pot still rums, drawing on the distillery's Coffey still and three pot stills.",
    story: "Chairman's Reserve was first blended in 1999 under Laurie Barnard, then chairman of Saint Lucia Distillers. The wider Saint Lucian rum identity uses hot Caribbean maturation, molasses, cane juice in some releases and varied barrel types.",
    tastingNotes: [
      { title: "Original Style", description: "Ripe banana, raisin, vanilla, oak and brown sugar sit over a lightly funky rum backbone." },
      { title: "Pot Still Grip", description: "Spice, dried fruit, tobacco and roasted nuts add weight beyond a simple column-still rum." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste neat first, then try over one cube or in a Mai Tai-style drink with restrained syrup." },
      { subheading: "Food", description: "Pair with jerk chicken, pepper pork, grilled pineapple, dark chocolate or smoked paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["jerk chicken", "pepper pork", "grilled pineapple", "dark chocolate", "smoked paneer"] }],
    whyChoose: "Chairman's Reserve gives rum drinkers Saint Lucia's mix of column polish and pot-still character.",
    faqs: [
      { question: "Who makes Chairman's Reserve?", answer: "Chairman's Reserve is made by Saint Lucia Distillers." },
      { question: "When was Chairman's Reserve first blended?", answer: "Chairman's Reserve was first blended in 1999." },
    ],
    finalVerdict: "Chairman's Reserve is a strong choice when rum needs depth, spice and real island character.",
    metaTitle: "Chairman's Reserve Rum Guide | BevOry",
    metaDescription: "Explore Chairman's Reserve Saint Lucian rum, pot and column still style, pairings and city prices on BevOry.",
  },
  "dead-mans-fingers": {
    description: "Dead Man's Fingers is a spiced and flavored rum brand born at the Rum & Crab Shack in St Ives, Cornwall. Its original spiced rum leans into caramel, vanilla, cinnamon, nutmeg and orange sweetness.",
    story: "The name comes from the long gills inside a crab, known in folklore as dead man's fingers. The bottle's skull graphic and Cornish seafood-bar origin make the brand deliberately louder than traditional rum labels.",
    tastingNotes: [
      { title: "Spiced Rum", description: "Creamy caramel, vanilla, cinnamon, nutmeg and orange sit over a sweet rum base." },
      { title: "Flavored Range", description: "The wider line moves through bold fruit, coffee and tropical flavors for simple mixed drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with cola, ginger beer, pineapple soda or over ice with a squeeze of lime." },
      { subheading: "Food", description: "Pair with fried prawns, barbecue wings, peri-peri fries, chocolate brownie or masala peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fried prawns", "barbecue wings", "peri-peri fries", "chocolate brownie", "masala peanuts"] }],
    whyChoose: "Dead Man's Fingers is for drinkers who want rum to be bold, spiced and mixer-ready.",
    faqs: [
      { question: "Where did Dead Man's Fingers start?", answer: "Dead Man's Fingers began at the Rum & Crab Shack in St Ives, Cornwall." },
      { question: "What does Dead Man's Fingers Spiced taste like?", answer: "It is led by caramel, vanilla, cinnamon, nutmeg and orange notes." },
    ],
    finalVerdict: "Dead Man's Fingers is a punchy party rum for cola, ginger beer and spicy snacks.",
    metaTitle: "Dead Man's Fingers Rum Guide | BevOry",
    metaDescription: "Explore Dead Man's Fingers spiced rum, Cornwall roots, tasting notes, pairings and city prices on BevOry.",
  },
  pussers: {
    description: "Pusser's is a navy-style rum brand based in the British Virgin Islands. It is tied to the Royal Navy rum tradition that ended its daily ration on July 31, 1970.",
    story: "Charles Tobias revived the Royal Navy rum recipe commercially in 1979 after securing rights connected to the old naval style. The brand's identity is built around full-bodied rum, seafaring history and classic tiki serves.",
    tastingNotes: [
      { title: "Navy Rum", description: "Molasses, brown sugar, dried fruit, oak and baking spice give the rum a dense, traditional feel." },
      { title: "Cocktail Depth", description: "Its heavier profile brings grip to Painkillers, rum punches and dark tropical drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip a small measure neat, serve over ice, or mix in a Painkiller with pineapple, orange and coconut." },
      { subheading: "Food", description: "Pair with barbecue pork, grilled prawns, pepper chicken, salted caramel or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue pork", "grilled prawns", "pepper chicken", "salted caramel", "dark chocolate"] }],
    whyChoose: "Pusser's is the rum to choose when navy heritage and a heavier molasses profile matter.",
    faqs: [
      { question: "What is Pusser's Rum known for?", answer: "Pusser's is known for its connection to Royal Navy rum tradition." },
      { question: "Who revived Pusser's Rum?", answer: "Charles Tobias revived the brand commercially in 1979." },
    ],
    finalVerdict: "Pusser's is a fuller rum for old-school tropical cocktails and slow sipping.",
    metaTitle: "Pusser's Rum Guide | BevOry",
    metaDescription: "Explore Pusser's navy-style rum, Royal Navy history, cocktail serves, pairings and city prices on BevOry.",
  },
  "sailor-jerry": {
    description: "Sailor Jerry is a spiced rum brand named for Norman 'Sailor Jerry' Collins, the American tattoo artist. The rum is part of the William Grant & Sons portfolio and uses sugarcane molasses distillate with natural flavors.",
    story: "The brand's look draws from Collins' tattoo flash, sailor culture and bold Americana. Its liquid is built for straightforward serves rather than quiet tasting-room formality.",
    tastingNotes: [
      { title: "Spice And Vanilla", description: "Vanilla, cinnamon, caramel and clove drive the familiar spiced-rum profile." },
      { title: "Mixer Friendly", description: "A warm, sweet finish makes it easy with cola, ginger beer and citrus." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Mix with cola, ginger beer or pineapple juice, or pour over ice with fresh lime." },
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
    description: "Michelob Ultra is an American light beer from Anheuser-Busch, launched in 2002. It is positioned as a low-carb, low-calorie beer for active-lifestyle drinkers.",
    story: "The brand became one of Anheuser-Busch's major modern beer launches by pairing light lager refreshment with sports and wellness-adjacent marketing. Its familiar nutrition callout is 95 calories and 2.6 carbs per serving in the US.",
    tastingNotes: [
      { title: "Light Lager", description: "Clean grain, mild sweetness, low bitterness and crisp carbonation keep the beer easy-drinking." },
      { title: "Cold Finish", description: "The finish is dry and light, built for refreshment rather than heavy malt flavor." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a clean lager glass or straight from the chilled bottle or can." },
      { subheading: "Food", description: "Pair with grilled corn, chicken tikka, Caesar salad, fish fry or masala fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled corn", "chicken tikka", "Caesar salad", "fish fry", "masala fries"] }],
    whyChoose: "Michelob Ultra is for beer drinkers who want a light, crisp lager with a leaner profile.",
    faqs: [
      { question: "When was Michelob Ultra launched?", answer: "Michelob Ultra was introduced in 2002." },
      { question: "How many calories are in Michelob Ultra?", answer: "Michelob Ultra is listed in the US at 95 calories and 2.6 carbs per serving." },
    ],
    finalVerdict: "Michelob Ultra is a clean, cold light beer for low-key refreshment and sporty occasions.",
    metaTitle: "Michelob Ultra Beer Guide | BevOry",
    metaDescription: "Explore Michelob Ultra light beer, low-carb profile, tasting notes, pairings and city prices on BevOry.",
  },
  "goose-island": {
    description: "Goose Island is a Chicago beer brand known for Honker's Ale, Goose IPA and Bourbon County Stout. Honker's Ale was the first beer brewed at the Clybourn Brewpub in 1988.",
    story: "The brewery helped shape modern American craft beer from Chicago before becoming part of the AB InBev family. Its barrel program made Bourbon County Stout a reference point for bourbon barrel-aged beer.",
    tastingNotes: [
      { title: "IPA And Ale", description: "Goose IPA brings bold hops and malt grip, while Honker's Ale has a balanced English-style bitter character." },
      { title: "Barrel-Aged Stout", description: "Bourbon County Stout leans into roasted malt, bourbon barrel oak, vanilla, cocoa and warming depth." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve IPA and ale chilled in a pint glass; pour barrel-aged stout slightly warmer in a snifter." },
      { subheading: "Food", description: "Pair IPA with pepperoni pizza or tandoori chicken; serve stout with chocolate cake, barbecue ribs or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepperoni pizza", "tandoori chicken", "chocolate cake", "barbecue ribs", "aged cheddar"] }],
    whyChoose: "Goose Island is useful when you want one beer brand that spans pub ales, hoppy IPA and barrel-aged stout.",
    faqs: [
      { question: "Where did Goose Island start?", answer: "Goose Island started in Chicago, with Honker's Ale first brewed at the Clybourn Brewpub in 1988." },
      { question: "What is Goose Island known for?", answer: "Goose Island is known for Goose IPA, Honker's Ale and its Bourbon County barrel-aged stout series." },
    ],
    finalVerdict: "Goose Island is a Chicago beer name with range, from crisp pints to serious barrel-aged stout.",
    metaTitle: "Goose Island Beer Guide | BevOry",
    metaDescription: "Explore Goose Island beer, Chicago roots, IPA, Honker's Ale, Bourbon County notes and city prices on BevOry.",
  },
};
