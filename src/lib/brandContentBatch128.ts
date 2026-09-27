import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_128 = [
  ["kakubin", "Suntory Kakubin", "Japan", "Blended Japanese Whisky", "brand-expansion-kakubin"],
  ["knob-creek", "Knob Creek", "United States", "Bourbon", "brand-expansion-knob-creek"],
  ["basil-haydens", "Basil Hayden", "United States", "Bourbon", "brand-expansion-basil-haydens"],
  ["gentleman-jack", "Gentleman Jack", "United States", "Tennessee Whiskey", "brand-expansion-gentleman-jack"],
  ["courvoisier", "Courvoisier", "France", "Cognac", "brand-expansion-courvoisier"],
  ["hornitos", "Hornitos", "Mexico", "Tequila", "brand-expansion-hornitos"],
  ["sauza", "Sauza", "Mexico", "Tequila", "brand-expansion-sauza"],
  ["tres-generaciones", "Tres Generaciones", "Mexico", "Tequila", "brand-expansion-tres-generaciones"],
  ["dusse", "D'USSÉ", "France", "Cognac", "brand-expansion-dusse"],
  ["cazadores", "Cazadores", "Mexico", "Tequila", "brand-expansion-cazadores"],
] as const;

export const BRAND_LOGOS_BATCH_128: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_128: Record<string, string[]> = {
  kakubin: [
    "https://www.suntory.com.tw/alcohol/kakubin/about.php",
    "https://founders.beamsuntory.com/dna/hoswhiskey",
  ],
  "knob-creek": [
    "https://www.beamdistilling.com/our-brands/knob-creek-bourbon",
    "https://founders.beamsuntory.com/dna/knobcreek",
  ],
  "basil-haydens": [
    "https://www.basilhaydenbourbon.com/whiskies",
    "https://www.beamdistilling.com/our-brands/basil-hayden-bourbon",
  ],
  "gentleman-jack": [
    "https://pressroom.jackdaniels.com/products/",
    "https://pressroom.jackdaniels.com/wp-content/uploads/2015/01/Gentleman-Jack-Fact-Sheet2.pdf",
  ],
  courvoisier: [
    "https://www.courvoisier.com/en-us/maison-courvoisier/",
    "https://www.courvoisier.com/en-us/heritage/",
  ],
  hornitos: [
    "https://www.hornitostequila.com/about-us",
    "https://www.hornitostequila.com/faqs",
  ],
  sauza: [
    "https://www.sauzatequila.com/heritage",
    "https://www.casasauza.com/en/tequila-distillery-since-1873-jalisco",
  ],
  "tres-generaciones": [
    "https://www.tresgeneraciones.com/",
    "https://www.tresgeneraciones.com/our-tequilas",
  ],
  dusse: [
    "https://www.dusse.com/our-story/",
  ],
  cazadores: [
    "https://www.cazadores.com/us/en/culture/our-story/",
    "https://www.cazadores.com/mx/es/our-roots/",
  ],
};

export const BRAND_CONTENT_BATCH_128: Record<string, BrandPublicContent> = {
  kakubin: {
    description: "Suntory Kakubin is a Japanese blended whisky first released in 1937 by Suntory founder Shinjiro Torii. Its square-cut bottle and crisp highball style made it one of Japan's most familiar whisky names.",
    story: "Kakubin grew out of Suntory's early whisky work after Yamazaki, Japan's first malt whisky distillery. The bottle design nods to Japanese cut glass, while the drink itself became closely tied to izakaya highballs poured over ice with cold soda.",
    tastingNotes: [
      { title: "Bright Malt", description: "Light malt, lemon peel, green apple and honeyed cereal keep the nose clean and easy." },
      { title: "Highball Finish", description: "Toasted grain, soft vanilla and gentle oak stay crisp when lengthened with soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build a tall highball with plenty of ice, one measure of Kakubin and cold soda, then stir lightly." },
      { subheading: "Food", description: "Pair with chicken yakitori, karaage, tandoori mushrooms, prawn tempura or salted edamame." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken yakitori", "karaage", "tandoori mushrooms", "prawn tempura", "salted edamame"] }],
    whyChoose: "Kakubin is the Japanese whisky to choose when the plan is a cold, sharp, food-friendly highball.",
    faqs: [
      { question: "When was Suntory Kakubin released?", answer: "Suntory Kakubin was released in 1937." },
      { question: "Why is Kakubin famous in Japan?", answer: "It is strongly associated with the Japanese whisky highball served with ice and cold soda." },
    ],
    finalVerdict: "Suntory Kakubin delivers a clean Japanese whisky highball with citrus, grain and light oak in balance.",
    metaTitle: "Suntory Kakubin Whisky Guide | BevOry",
    metaDescription: "Explore Suntory Kakubin whisky, 1937 history, highball style, food pairings and city prices on BevOry.",
  },
  "knob-creek": {
    description: "Knob Creek is a Kentucky straight bourbon from the Jim Beam family, created by Booker Noe in 1992. It sits in Beam's small-batch collection with a fuller, oak-forward bourbon profile.",
    story: "Booker Noe built Knob Creek as a return to bolder American whiskey after lighter bourbon had become common. The name comes from the Kentucky creek area linked with Abraham Lincoln's childhood, giving the bottle a rooted, old-Kentucky identity.",
    tastingNotes: [
      { title: "Oak And Caramel", description: "Toasted oak, caramel, vanilla and roasted nuts give the bourbon its broad opening." },
      { title: "Rye Grip", description: "A firm spice line, char and brown sugar carry the finish with good weight." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat in a rocks glass, over one large cube, or in an Old Fashioned." },
      { subheading: "Food", description: "Pair with smoked pork ribs, galouti kebabs, grilled corn, pecan pie or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked pork ribs", "galouti kebabs", "grilled corn", "pecan pie", "aged cheddar"] }],
    whyChoose: "Knob Creek is a strong pick for bourbon drinkers who want oak, caramel and spice without losing structure.",
    faqs: [
      { question: "Who created Knob Creek?", answer: "Booker Noe created Knob Creek in 1992 as part of Beam's small-batch bourbon collection." },
      { question: "What style is Knob Creek?", answer: "Knob Creek is a Kentucky straight bourbon with a full-bodied, oak-led profile." },
    ],
    finalVerdict: "Knob Creek brings classic Kentucky bourbon depth to neat pours, ice serves and whiskey cocktails.",
    metaTitle: "Knob Creek Bourbon Guide | BevOry",
    metaDescription: "Explore Knob Creek bourbon, Booker Noe history, oak-rich notes, pairings and city prices on BevOry.",
  },
  "basil-haydens": {
    description: "Basil Hayden is a Kentucky straight bourbon from the Jim Beam small-batch family. It is known for a lighter high-rye style with pepper, vanilla and gentle oak.",
    story: "Booker Noe launched Basil Hayden in 1992 and named it for Meredith Basil Hayden Sr., an early Kentucky distiller linked with rye-forward bourbon. The brand keeps the Beam lineage but speaks to drinkers who prefer a softer, more aromatic glass.",
    tastingNotes: [
      { title: "Rye Lift", description: "Black pepper, baking spice and dried fruit sit over vanilla and caramel." },
      { title: "Gentle Oak", description: "The finish is lighter than many Kentucky bourbons, with soft oak and a clean spice trail." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small tumbler, with one cube, or in a lighter Boulevardier." },
      { subheading: "Food", description: "Pair with chicken tikka, honey-glazed ham, spiced almonds, apple tart or aged gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "honey-glazed ham", "spiced almonds", "apple tart", "aged gouda"] }],
    whyChoose: "Basil Hayden suits drinkers who want bourbon's spice and sweetness in a lighter, polished pour.",
    faqs: [
      { question: "Is Basil Hayden a high-rye bourbon?", answer: "Yes. Basil Hayden is known for a high-rye bourbon style." },
      { question: "Who makes Basil Hayden?", answer: "Basil Hayden belongs to the Jim Beam small-batch bourbon family." },
    ],
    finalVerdict: "Basil Hayden is an approachable Kentucky bourbon for neat sipping and lighter whiskey cocktails.",
    metaTitle: "Basil Hayden Bourbon Guide | BevOry",
    metaDescription: "Explore Basil Hayden bourbon, high-rye spice, serving ideas, pairings and city prices on BevOry.",
  },
  "gentleman-jack": {
    description: "Gentleman Jack is a Tennessee whiskey from Jack Daniel Distillery in Lynchburg, Tennessee. It is charcoal mellowed twice, before and after ageing, for a softer expression of the Jack Daniel's house style.",
    story: "Jack Daniel's makes its Tennessee whiskey with corn, rye, barley malt and iron-free water from Cave Spring. Gentleman Jack takes that Lynchburg base and adds a second charcoal-mellowing step after maturation.",
    tastingNotes: [
      { title: "Soft Sweetness", description: "Vanilla, caramel, almond and ripe fruit give the whiskey a rounded first impression." },
      { title: "Gentle Farewell", description: "Light oak, maple sweetness and mild spice taper into a smooth finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat, over ice, or lengthen with soda and a lemon wedge." },
      { subheading: "Food", description: "Pair with barbecue chicken wings, mutton seekh, maple bacon, banana pudding or roasted peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue chicken wings", "mutton seekh", "maple bacon", "banana pudding", "roasted peanuts"] }],
    whyChoose: "Gentleman Jack is the Jack Daniel's choice when you want Tennessee whiskey with a softer texture.",
    faqs: [
      { question: "How is Gentleman Jack different from Old No. 7?", answer: "Gentleman Jack is charcoal mellowed twice, before and after ageing." },
      { question: "Where is Gentleman Jack made?", answer: "Gentleman Jack is made at Jack Daniel Distillery in Lynchburg, Tennessee." },
    ],
    finalVerdict: "Gentleman Jack keeps the familiar Jack Daniel's sweetness while making the finish smoother and calmer.",
    metaTitle: "Gentleman Jack Whiskey Guide | BevOry",
    metaDescription: "Explore Gentleman Jack Tennessee whiskey, double mellowing, tasting notes and city prices on BevOry.",
  },
  courvoisier: {
    description: "Courvoisier is a Cognac house based in Jarnac in France's Cognac region. Founded in 1828 by Felix Courvoisier, it is known for grape brandies that move from bright VS cocktails to deeper XO sipping.",
    story: "Courvoisier's history includes an imperial link: Napoleon III named it an official supplier to the Imperial Court in 1869. The house remains tied to Jarnac, where blending and ageing shape its fruit, oak and floral Cognac style.",
    tastingNotes: [
      { title: "Fresh Cognac Fruit", description: "Apricot, grape, orange peel and light florals shape the brighter end of the range." },
      { title: "Mature Oak", description: "Vanilla, toasted wood, spice and dried fruit add depth in older expressions." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use VS in a Sidecar or highball; pour VSOP and XO neat in a tulip glass." },
      { subheading: "Food", description: "Pair with tandoori prawns, roast duck, blue cheese, dark chocolate or almond tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "roast duck", "blue cheese", "dark chocolate", "almond tart"] }],
    whyChoose: "Courvoisier is a classic Jarnac Cognac house that works across cocktails, neat pours and rich food.",
    faqs: [
      { question: "Where is Courvoisier made?", answer: "Courvoisier is based in Jarnac in France's Cognac region." },
      { question: "When was Courvoisier founded?", answer: "Felix Courvoisier established Maison Courvoisier in Jarnac in 1828." },
    ],
    finalVerdict: "Courvoisier gives Cognac drinkers a reliable bridge between citrus cocktails and after-dinner sipping.",
    metaTitle: "Courvoisier Cognac Guide | BevOry",
    metaDescription: "Explore Courvoisier Cognac from Jarnac, 1828 history, tasting notes, pairings and city prices on BevOry.",
  },
  hornitos: {
    description: "Hornitos is a Jalisco tequila brand launched by Don Francisco Javier Sauza in 1950. Made with blue Weber agave, it is best known for bright cocktail-friendly Plata and oak-rested Reposado styles.",
    story: "Hornitos arrived on Mexican Independence Day and built its identity around a more independent Sauza-family tequila. The name refers to small ovens used in agave cooking, a direct link to tequila's production language.",
    tastingNotes: [
      { title: "Clean Agave", description: "Cooked agave, lime peel and green herbs drive the lighter styles." },
      { title: "Reposado Warmth", description: "The rested side brings vanilla, pepper, light oak and a rounder finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Plata in Margaritas or Palomas; pour Reposado over ice with a squeeze of lime." },
      { subheading: "Food", description: "Pair with fish tacos, achari paneer, chicken fajitas, nachos or grilled corn chaat." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "achari paneer", "chicken fajitas", "nachos", "grilled corn chaat"] }],
    whyChoose: "Hornitos is a practical tequila when you want clear agave, citrus and easy party cocktails.",
    faqs: [
      { question: "Who launched Hornitos?", answer: "Don Francisco Javier Sauza launched Hornitos in 1950." },
      { question: "What is Hornitos made from?", answer: "Hornitos tequila is made with blue Weber agave in Jalisco, Mexico." },
    ],
    finalVerdict: "Hornitos shines in lime-led tequila serves with spicy, salty food beside it.",
    metaTitle: "Hornitos Tequila Guide | BevOry",
    metaDescription: "Explore Hornitos tequila, Sauza family history, agave notes, pairings and city prices on BevOry.",
  },
  sauza: {
    description: "Sauza is a historic tequila house from Tequila, Jalisco. Don Cenobio Sauza founded La Perseverancia distillery in 1873, and the brand remains one of the best-known names in Mexican tequila.",
    story: "The Sauza family helped take tequila beyond a local Jalisco drink and into wider Mexican and international markets. Its range covers clear and oak-rested tequila styles made for Margaritas, Palomas and direct agave serves.",
    tastingNotes: [
      { title: "Blanco Citrus", description: "Fresh agave, lime, pepper and herbal notes keep the clear style lively." },
      { title: "Rested Spice", description: "Oak-rested expressions bring vanilla, light caramel and warmer spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Mix Blanco in a Margarita or Paloma; serve rested styles over ice with lime." },
      { subheading: "Food", description: "Pair with chicken tinga tacos, chilli paneer, quesadillas, prawn koliwada or salted peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tinga tacos", "chilli paneer", "quesadillas", "prawn koliwada", "salted peanuts"] }],
    whyChoose: "Sauza is a straight-talking Jalisco tequila name with long history and strong cocktail utility.",
    faqs: [
      { question: "When was Sauza founded?", answer: "Don Cenobio Sauza founded La Perseverancia distillery in 1873." },
      { question: "Where is Sauza from?", answer: "Sauza comes from Tequila in Jalisco, Mexico." },
    ],
    finalVerdict: "Sauza is the easy Jalisco pick for Margaritas, Palomas and spicy casual food.",
    metaTitle: "Sauza Tequila Guide | BevOry",
    metaDescription: "Explore Sauza tequila, La Perseverancia history, agave styles, pairings and city prices on BevOry.",
  },
  "tres-generaciones": {
    description: "Tres Generaciones is a 100 percent blue agave tequila from the Sauza family. The brand honors Don Cenobio, Don Eladio and Don Francisco Javier Sauza, and its core tequilas are triple distilled.",
    story: "The name means Three Generations, tying the bottle to the family that shaped Sauza tequila from 1873 onward. Its range moves through Plata, Reposado, Anejo and Cristalino expressions with a cleaner, more polished house style.",
    tastingNotes: [
      { title: "Plata Agave", description: "Clear agave, citrus peel and pepper keep the unaged style sharp and fresh." },
      { title: "Aged Polish", description: "Reposado and Anejo expressions add vanilla, cooked agave, oak spice and a silkier finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip Plata chilled or mix it in a Margarita; pour aged styles neat in a small copita." },
      { subheading: "Food", description: "Pair with pork al pastor, tandoori prawns, guacamole, paneer tikka or churros." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork al pastor", "tandoori prawns", "guacamole", "paneer tikka", "churros"] }],
    whyChoose: "Tres Generaciones is the Sauza-family step up for drinkers who want triple-distilled 100 percent agave tequila.",
    faqs: [
      { question: "What does Tres Generaciones mean?", answer: "It means Three Generations, honoring three generations of the Sauza tequila family." },
      { question: "Is Tres Generaciones triple distilled?", answer: "Yes. Tres Generaciones tequilas are presented as triple distilled." },
    ],
    finalVerdict: "Tres Generaciones brings Sauza heritage into a cleaner tequila style for sipping and refined cocktails.",
    metaTitle: "Tres Generaciones Tequila Guide | BevOry",
    metaDescription: "Explore Tres Generaciones tequila, Sauza roots, triple distillation, pairings and city prices on BevOry.",
  },
  dusse: {
    description: "D'USSÉ is a French Cognac made at Château de Cognac, one of the oldest Cognac houses in France. Its VSOP expression is built around oak, spice and rounded fruit for both cocktails and sipping.",
    story: "Château de Cognac stands on the Charente River and has long been associated with Cognac ageing. D'USSÉ uses that setting for a modern bottle identity while keeping the drink anchored in French Cognac craft.",
    tastingNotes: [
      { title: "Oak And Spice", description: "Toasted oak, cinnamon-like spice and dried fruit give D'USSÉ its darker opening." },
      { title: "Round Fruit", description: "Apricot, honeyed grape and vanilla carry into a smooth, warming finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat in a tulip glass, over one large cube, or mix in a Sidecar." },
      { subheading: "Food", description: "Pair with lamb chops, pepper chicken, dark chocolate mousse, blue cheese or almond biscotti." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "pepper chicken", "dark chocolate mousse", "blue cheese", "almond biscotti"] }],
    whyChoose: "D'USSÉ is a modern Cognac choice when you want oak, spice and fruit in a polished glass.",
    faqs: [
      { question: "Where is D'USSÉ made?", answer: "D'USSÉ Cognac is crafted at Château de Cognac in France." },
      { question: "How should D'USSÉ VSOP be served?", answer: "D'USSÉ VSOP works neat, over ice, in a Sidecar or in a lemonade highball." },
    ],
    finalVerdict: "D'USSÉ gives Cognac drinkers a darker, cocktail-aware pour with enough body for neat sipping.",
    metaTitle: "D'USSÉ Cognac Guide | BevOry",
    metaDescription: "Explore D'USSÉ Cognac from Château de Cognac, oak-spice notes, pairings and city prices on BevOry.",
  },
  cazadores: {
    description: "Cazadores is a tequila from Arandas in the Los Altos highlands of Jalisco, Mexico. Don José María Bañuelos created the recipe in 1922, and the brand remains tied to bright highland agave.",
    story: "The Cazadores story begins in Arandas, where blue agave grows in red highland soil. The name means hunters, and the stag on the label became a clear marker for the brand's Jalisco identity.",
    tastingNotes: [
      { title: "Highland Agave", description: "Cooked agave, citrus, green herbs and pepper give Blanco a fresh core." },
      { title: "Rested Depth", description: "Reposado and Anejo styles bring toasted wood, vanilla, almond and warm spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Blanco in a Paloma or Margarita; sip Reposado with ice and a lime wedge." },
      { subheading: "Food", description: "Pair with tacos al pastor, tandoori fish, grilled prawns, corn ribs or jalapeno poppers." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tacos al pastor", "tandoori fish", "grilled prawns", "corn ribs", "jalapeno poppers"] }],
    whyChoose: "Cazadores is a strong highland tequila pick for drinkers who like clean agave and citrus-led serves.",
    faqs: [
      { question: "Where is Cazadores from?", answer: "Cazadores is from Arandas in the Los Altos highlands of Jalisco, Mexico." },
      { question: "Who created Cazadores?", answer: "Don José María Bañuelos created the Cazadores recipe in 1922." },
    ],
    finalVerdict: "Cazadores brings Arandas agave brightness to Margaritas, Palomas and grilled food.",
    metaTitle: "Cazadores Tequila Guide | BevOry",
    metaDescription: "Explore Cazadores tequila from Arandas, Jalisco, tasting notes, pairings and city prices on BevOry.",
  },
};
