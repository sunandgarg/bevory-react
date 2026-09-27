import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_62 = [
  ["albia", "Albia", "Spain", "Rose Wine", "pending-albia"],
  ["all", "All", "India", "Indian Whisky", "pending-all"],
  ["all-time", "All Time", "India", "Indian Whisky", "pending-all-time"],
  ["alsace", "Alsace", "France", "White Wine", "pending-alsace"],
  ["alto-adige", "Alto Adige", "Italy", "White Wine", "pending-alto-adige"],
  ["amadeo", "Amadeo", "Spain", "Brandy", "pending-amadeo"],
  ["amalfi", "Amalfi", "Italy", "Liqueurs", "pending-amalfi"],
  ["amaretto", "Amaretto", "Italy", "Liqueurs", "pending-amaretto"],
  ["amaris", "Amaris", "Italy", "Wine", "pending-amaris"],
  ["amaro", "Amaro", "Italy", "Liqueurs", "pending-amaro"],
] as const;

export const BRAND_LOGOS_BATCH_62: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_62: Record<string, string[]> = {
  albia: [
    "https://www.livcheers.com/gurgaon/brand/albia",
    "https://www.livcheers.com/liquor/albia-rose-750ml",
  ],
  all: [
    "https://www.bevory.in/delhi/brand/all",
    "https://www.livcheers.com/compare/gurgaon/all-season-whisky-750ml/vs/gurgaon/the-glenlivet-12-yrs-750ml",
  ],
  "all-time": [
    "https://www.livcheers.com/pune/liquor/all-time-whisky-premium-whisky-blended-with-3-year-aged-malts-375ml",
    "https://www.livcheers.com/delhi/liquor/all-time-whisky-premium-whisky-blended-750ml",
  ],
  alsace: [
    "https://www.livcheers.com/mumbai/brand/alsace",
    "https://www.bevory.in/delhi/brand/alsace",
  ],
  "alto-adige": [
    "https://www.livcheers.com/listing/liquor/alto-adige-pinot-grigio-750m-750ml",
    "https://www.bevory.in/delhi/brand/alto-adige",
  ],
  amadeo: [
    "https://www.livcheers.com/brand/amadeo",
    "https://www.livcheers.com/gurgaon/liquor/amadeo-i-brandy-1000ml",
  ],
  amalfi: [
    "https://www.livcheers.com/goa/brand/amalfi",
    "https://www.livcheers.com/delhi/liquor/limoncello-d-amalfi-liqueur-750ml",
  ],
  amaretto: [
    "https://www.livcheers.com/gurgaon/brand/amaretto",
    "https://www.livcheers.com/goa/brand/amaretto",
  ],
  amaris: [
    "https://www.livcheers.com/listing/brand/amaris",
    "https://www.livcheers.com/listing/liquor/amaris-merlot-750ml",
  ],
  amaro: [
    "https://www.livcheers.com/mangalore/brand/amaro",
    "https://www.montenegro.it/en/amaro-montenegro/",
  ],
};

export const BRAND_CONTENT_BATCH_62: Record<string, BrandPublicContent> = {
  albia: {
    description: "Albia is a Spanish rose wine label built around a dry, light-bodied pink style. BevOry surfaces Albia Rose in 750 ml format, with Tempranillo and Grenache shaping its red-fruit snap.",
    story: "The Albia name travels in India as a focused rose listing rather than a wide estate portfolio. Its appeal sits in the classic Spanish rose lane: pale colour, bright acidity and enough savoury grip for food.",
    tastingNotes: [
      { title: "Red fruit", description: "Strawberry, raspberry and pink grapefruit lead the glass, with a clean citrus edge." },
      { title: "Dry finish", description: "Light body and crisp acidity keep the wine refreshing rather than jammy or sweet." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill well to 8-10 C and pour in a white-wine glass, not a warm red-wine goblet." },
      { subheading: "Food", description: "Pair with tandoori prawns, tomato bruschetta, paneer tikka, grilled fish or watermelon salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "paneer tikka", "grilled fish", "tomato bruschetta", "watermelon salad"] }],
    whyChoose: "A crisp Spanish rose for drinkers who want freshness, red fruit and food flexibility.",
    faqs: [
      { question: "What style of wine is Albia?", answer: "Albia is listed as a light Spanish rose wine." },
      { question: "What should I eat with Albia Rose?", answer: "Tandoori prawns, paneer tikka, grilled fish and fresh tomato dishes all work well." },
    ],
    finalVerdict: "Albia is a chilled rose for warm evenings, seafood starters and easy Indian party food.",
    metaTitle: "Albia Rose Wine Guide | BevOry",
    metaDescription: "Explore Albia Spanish rose with tasting notes, serving temperature, food pairings and city prices on BevOry.",
  },
  all: {
    description: "All is tied on BevOry to All Seasons Golden Collection, an Indian whisky bottle from the broader All Seasons whisky family. The useful drinking context is blended Indian whisky: grain sweetness, light oak and easy mixer compatibility.",
    story: "All Seasons is an Indian whisky name associated with the everyday premium whisky shelf. The Golden Collection expression gives the label a richer presentation while staying in a familiar Indian blended-whisky serve.",
    tastingNotes: [
      { title: "Caramel grain", description: "Caramel, cereal sweetness and mild oak spice form the centre of the whisky." },
      { title: "Mixer-friendly finish", description: "A warm, direct finish suits soda, water and ice better than fragile nosing-glass service." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour 30 ml over one large cube, then add chilled soda or water if you want a longer drink." },
      { subheading: "Food", description: "Serve with mutton seekh, chicken tikka, masala peanuts, smoked paneer or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "chicken tikka", "masala peanuts", "smoked paneer", "chilli cheese toast"] }],
    whyChoose: "A practical Indian whisky pick when the bottle in front of you is All Seasons Golden Collection.",
    faqs: [
      { question: "What does All refer to on BevOry?", answer: "It points to All Seasons Golden Collection whisky in the Indian whisky category." },
      { question: "How should All Seasons Golden Collection be served?", answer: "Try it over ice with water or soda, then pair it with spicy grilled snacks." },
    ],
    finalVerdict: "All works as a short route to a simple Indian whisky serve with bold snacks and soda-friendly balance.",
    metaTitle: "All Whisky Guide | BevOry",
    metaDescription: "Explore All Seasons Golden Collection style, serving ideas, Indian snack pairings and city prices on BevOry.",
  },
  "all-time": {
    description: "All Time is an Indian blended whisky label listed with regular Premium Whisky and a version blended with 3-year-aged malts. The range is made for everyday whisky drinkers who want caramel, vanilla and light spice in a familiar pour.",
    story: "All Time sits in India's value-led blended-whisky market, where bottle size and local price matter as much as tasting style. Its 3-year-aged malt expression gives the range a clearer upgrade point without turning it into a single malt.",
    tastingNotes: [
      { title: "Premium blend", description: "Caramel, vanilla and cereal grain give the whisky a soft, approachable base." },
      { title: "Aged malt expression", description: "The malt-led bottle adds more warmth, spice and finish than the lighter standard blend." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a short pour with ice, water or soda; keep sweet cola serves measured so the whisky still shows." },
      { subheading: "Food", description: "Pair with tandoori chicken, egg bhurji toast, mutton seekh, masala peanuts or grilled paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "egg bhurji toast", "mutton seekh", "masala peanuts", "grilled paneer"] }],
    whyChoose: "All Time is a straightforward Indian whisky range with an easy step up through its aged-malt blend.",
    faqs: [
      { question: "What type of whisky is All Time?", answer: "All Time is listed as blended Indian whisky." },
      { question: "What is different about the 3-year-aged malt bottle?", answer: "It brings more malt depth, spice and warmth than the simpler premium blend." },
    ],
    finalVerdict: "All Time is best for casual whisky highballs, spicy snacks and buyers comparing Indian blended whisky by city.",
    metaTitle: "All Time Whisky Guide | BevOry",
    metaDescription: "Explore All Time Indian whisky styles, aged-malt notes, serving ideas, pairings and city prices on BevOry.",
  },
  alsace: {
    description: "Alsace is a French white-wine region on the Rhine side of eastern France, and BevOry currently surfaces it through Gewurztraminer. The style is aromatic, floral and spice-friendly, especially beside Indian food with perfume rather than heavy chilli.",
    story: "Alsace has changed hands between France and Germany across history, which helps explain its tall flute bottles and grape-labelled wines. Gewurztraminer is one of its most recognisable grapes, prized for lychee, rose and warm spice.",
    tastingNotes: [
      { title: "Aromatic lift", description: "Rose petal, lychee, peach and ginger-like spice give Gewurztraminer its expressive nose." },
      { title: "Textured white", description: "The palate is fuller than many crisp whites, with soft acidity and a lingering floral finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled around 9-11 C in an aromatic white-wine glass." },
      { subheading: "Food", description: "Pair with malai tikka, mild chicken korma, tandoori prawns, Thai curry or saffron pulao." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["malai tikka", "mild chicken korma", "tandoori prawns", "Thai curry", "saffron pulao"] }],
    whyChoose: "Alsace Gewurztraminer is a smart white-wine choice for fragrant dishes that overwhelm sharper, lighter whites.",
    faqs: [
      { question: "What grape is listed under Alsace on BevOry?", answer: "The current Alsace listing centres on Gewurztraminer." },
      { question: "Is Alsace Gewurztraminer good with Indian food?", answer: "Yes, especially with aromatic dishes such as malai tikka, korma and tandoori prawns." },
    ],
    finalVerdict: "Alsace is the batch's aromatic white-wine pick for floral fruit, spice and richer Indian starters.",
    metaTitle: "Alsace Gewurztraminer Guide | BevOry",
    metaDescription: "Explore Alsace Gewurztraminer notes, serving temperature, Indian food pairings and city prices on BevOry.",
  },
  "alto-adige": {
    description: "Alto Adige is an Italian alpine wine region, represented on BevOry by Pinot Grigio. The style is light, crisp and mineral, with lemon, green apple and pear at the centre.",
    story: "Alto Adige, also called Sudtirol, sits in northern Italy where Alpine climate helps preserve acidity in white grapes. Pinot Grigio from this region is prized for precision rather than heavy oak or tropical weight.",
    tastingNotes: [
      { title: "Citrus and apple", description: "Lemon, green apple, pear and white flowers give the wine a clean aromatic profile." },
      { title: "Mineral finish", description: "Light body and crisp acidity make the finish dry, bright and food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill to 8-10 C and pour in a narrow white-wine glass to keep the citrus fresh." },
      { subheading: "Food", description: "Pair with rava-fried fish, lemon chicken, cucumber chaat, grilled prawns or goat cheese salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["rava-fried fish", "lemon chicken", "cucumber chaat", "grilled prawns", "goat cheese salad"] }],
    whyChoose: "A crisp northern Italian Pinot Grigio for seafood, salads and lighter Indian starters.",
    faqs: [
      { question: "What wine is Alto Adige known for here?", answer: "The current BevOry listing is Alto Adige Pinot Grigio." },
      { question: "What food pairs with Alto Adige Pinot Grigio?", answer: "Try fried fish, grilled prawns, lemon chicken and cucumber chaat." },
    ],
    finalVerdict: "Alto Adige is the clean, mineral white-wine choice when you want freshness without sweetness.",
    metaTitle: "Alto Adige Pinot Grigio Guide | BevOry",
    metaDescription: "Explore Alto Adige Pinot Grigio tasting notes, serving tips, food pairings and city prices on BevOry.",
  },
  amadeo: {
    description: "Amadeo is a Spanish brandy label listed through Amadeo I Brandy in a 1 litre bottle. It sits in the grape-brandy lane, with dried fruit, caramel and oak doing the main flavour work.",
    story: "Spanish brandy traditions are strongly associated with wine distillates and cask ageing, especially in the south of Spain. Amadeo I follows that familiar after-dinner style rather than a neutral white-spirit profile.",
    tastingNotes: [
      { title: "Dried fruit", description: "Raisin, fig and caramel notes give the brandy a rounded, mellow aroma." },
      { title: "Oak warmth", description: "Vanilla, soft spice and gentle nuttiness carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour a small measure neat in a brandy glass, or use a restrained brandy-and-ginger highball." },
      { subheading: "Food", description: "Pair with dark chocolate, fruit cake, almond biscotti, grilled pineapple or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "fruit cake", "almond biscotti", "grilled pineapple", "smoked cheese"] }],
    whyChoose: "Amadeo gives brandy drinkers a Spanish-style pour with dried fruit and oak warmth.",
    faqs: [
      { question: "What is Amadeo I?", answer: "Amadeo I is listed as a Spanish brandy." },
      { question: "How should Amadeo brandy be served?", answer: "Serve a small neat pour after dinner, or lengthen it gently with ginger ale." },
    ],
    finalVerdict: "Amadeo is a mellow Spanish brandy for after-dinner sipping and dessert pairings.",
    metaTitle: "Amadeo Brandy Guide | BevOry",
    metaDescription: "Explore Amadeo Spanish brandy notes, serving ideas, dessert pairings and city prices on BevOry.",
  },
  amalfi: {
    description: "Amalfi is represented by Limoncello D Amalfi, an Italian lemon liqueur tied to the Amalfi Coast. The style is sweet, zesty and intensely citrus-led rather than creamy or herbal.",
    story: "Limoncello is one of southern Italy's most recognisable liqueur styles, built around lemon peel infusion and served well chilled. The Amalfi Coast connection matters because its lemons are famous for fragrance and bright oils.",
    tastingNotes: [
      { title: "Lemon peel", description: "Fresh lemon zest, citrus blossom and light vanilla shape the aroma." },
      { title: "Sweet citrus", description: "The palate is bright and sweet, with enough lemon acidity to keep the finish lively." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve freezer-cold in a small chilled glass, or splash into a spritz with soda and sparkling wine." },
      { subheading: "Food", description: "Pair with lemon tart, vanilla gelato, fresh berries, almond cake or seafood starters." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lemon tart", "vanilla gelato", "fresh berries", "almond cake", "seafood starters"] }],
    whyChoose: "A bright Italian lemon liqueur for chilled dessert pours and citrus-led spritzes.",
    faqs: [
      { question: "What is Amalfi on BevOry?", answer: "It is represented by Limoncello D Amalfi, an Italian lemon liqueur." },
      { question: "Should Amalfi limoncello be chilled?", answer: "Yes. It is best served very cold in a small glass." },
    ],
    finalVerdict: "Amalfi is the citrus liqueur to reach for after dinner, with dessert or in a simple spritz.",
    metaTitle: "Amalfi Limoncello Guide | BevOry",
    metaDescription: "Explore Amalfi limoncello notes, chilled serving ideas, dessert pairings and city prices on BevOry.",
  },
  amaretto: {
    description: "Amaretto is an Italian almond-led liqueur style, listed on BevOry through bottles such as Amaretto Del Lago and Accademia Amaretto. The flavour is sweet, nutty and lightly spiced, with stone-fruit kernel character.",
    story: "Amaretto is closely associated with northern Italy and the town of Saronno, where almond-like liqueurs became famous. Modern bottles may use almonds, apricot kernels or flavour extracts, but the expected profile remains marzipan, vanilla and soft spice.",
    tastingNotes: [
      { title: "Almond sweetness", description: "Marzipan, vanilla, apricot kernel and toasted nut notes define the aroma." },
      { title: "Soft texture", description: "A rounded, sweet palate makes it useful for dessert serves and sour-style cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice after dinner, or shake with lemon juice for an Amaretto Sour." },
      { subheading: "Food", description: "Pair with tiramisu, gulab jamun, dark chocolate, almond cake or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tiramisu", "gulab jamun", "dark chocolate", "almond cake", "salted cashews"] }],
    whyChoose: "Amaretto is a dessert-friendly liqueur that brings almond sweetness without needing a complicated serve.",
    faqs: [
      { question: "What does amaretto taste like?", answer: "Amaretto tastes sweet and nutty, with marzipan, vanilla and apricot-kernel notes." },
      { question: "How do people drink amaretto?", answer: "Common serves include over ice, in coffee, or shaken with lemon for an Amaretto Sour." },
    ],
    finalVerdict: "Amaretto is the easy Italian liqueur for nutty dessert serves and citrus-balanced cocktails.",
    metaTitle: "Amaretto Liqueur Guide | BevOry",
    metaDescription: "Explore amaretto tasting notes, cocktail serves, dessert pairings and city prices on BevOry.",
  },
  amaris: {
    description: "Amaris is an Italian wine label listed with Pinot Grigio, Chardonnay, Merlot, Pinot Noir, Syrah, rose and reserve red bottlings. The range covers light whites, softer reds and fuller reserve styles.",
    story: "Amaris reaches Indian shelves as a multi-grape Italian wine range rather than a single fixed style. Pinot Grigio and Chardonnay handle the white-wine side, while Merlot, Pinot Noir, Syrah and Cabernet-led reserves give the red range its spread.",
    tastingNotes: [
      { title: "Whites and rose", description: "Pinot Grigio brings citrus and pear, Chardonnay adds apple and roundness, and rose keeps the fruit lighter." },
      { title: "Reds", description: "Merlot and Pinot Noir lean softer and red-fruited, while Syrah and reserve Cabernet styles bring darker fruit and spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill whites and rose; serve reds slightly cool, with fuller reserve bottles getting a few minutes in the glass." },
      { subheading: "Food", description: "Pair whites with tandoori fish, rose with paneer tikka, and reds with mushroom kebabs, lamb chops or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "paneer tikka", "mushroom kebabs", "lamb chops", "aged cheddar"] }],
    whyChoose: "Amaris gives buyers a broad Italian range, from crisp Pinot Grigio to darker reserve reds.",
    faqs: [
      { question: "Which wines are listed under Amaris?", answer: "Current listings include Pinot Grigio, Chardonnay, Merlot, Pinot Noir, Syrah, rose and reserve reds." },
      { question: "How should Amaris wines be served?", answer: "Chill whites and rose; pour reds slightly cool and give fuller bottles time in the glass." },
    ],
    finalVerdict: "Amaris is useful when you want one Italian label across white, rose and red dinner-table roles.",
    metaTitle: "Amaris Wine Guide | BevOry",
    metaDescription: "Explore Amaris Italian wines, grape styles, serving tips, food pairings and city prices on BevOry.",
  },
  amaro: {
    description: "Amaro is an Italian bitter liqueur style, represented on BevOry by Amaro Montenegro. The category is herbal, bittersweet and usually served in small measures before or after food.",
    story: "Italian amaro grew from regional herbal liqueur traditions, with recipes built around roots, citrus peel, spices and botanicals. Amaro Montenegro, created in Bologna in 1885, is one of the best-known names in the style.",
    tastingNotes: [
      { title: "Herbal bittersweet", description: "Orange peel, herbs, baking spice and gentle bitterness lead the flavour." },
      { title: "Digestivo texture", description: "The palate is sweet at first, then dries into a warm, botanical finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, chilled or over one cube after a meal; it also works with soda and an orange wedge." },
      { subheading: "Food", description: "Pair with dark chocolate, espresso desserts, salted almonds, aged cheddar or orange cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "espresso desserts", "salted almonds", "aged cheddar", "orange cake"] }],
    whyChoose: "Amaro brings a more grown-up bitter finish than sweet fruit liqueurs.",
    faqs: [
      { question: "What is amaro?", answer: "Amaro is an Italian herbal bitter liqueur, usually sipped in small measures." },
      { question: "What Amaro bottle appears on BevOry?", answer: "The current listing highlights Amaro Montenegro." },
    ],
    finalVerdict: "Amaro is the right choice when you want a bittersweet herbal drink after food, not a sugary dessert liqueur.",
    metaTitle: "Amaro Liqueur Guide | BevOry",
    metaDescription: "Explore amaro and Amaro Montenegro notes, serving ideas, pairings and city prices on BevOry.",
  },
};
