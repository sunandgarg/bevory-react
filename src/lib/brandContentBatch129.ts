import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_129 = [
  ["st-germain", "St-Germain", "France", "Liqueur", "brand-expansion-st-germain"],
  ["noilly-prat", "Noilly Prat", "France", "Vermouth", "brand-expansion-noilly-prat"],
  ["santa-teresa", "Santa Teresa", "Venezuela", "Rum", "brand-expansion-santa-teresa"],
  ["perrier-jouet", "Perrier-Jouët", "France", "Champagne", "brand-expansion-perrier-jouet"],
  ["grand-marnier", "Grand Marnier", "France", "Liqueur", "brand-expansion-grand-marnier"],
  ["frangelico", "Frangelico", "Italy", "Liqueur", "brand-expansion-frangelico"],
  ["casamigos", "Casamigos", "Mexico", "Tequila", "brand-expansion-casamigos"],
  ["bumbu", "Bumbu", "Barbados", "Rum", "brand-expansion-bumbu"],
  ["chairmans-reserve", "Chairman's Reserve", "Saint Lucia", "Rum", "brand-expansion-chairmans-reserve"],
  ["dead-mans-fingers", "Dead Man's Fingers", "United Kingdom", "Rum", "brand-expansion-dead-mans-fingers"],
] as const;

export const BRAND_LOGOS_BATCH_129: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_129: Record<string, string[]> = {
  "st-germain": [
    "https://www.stgermainliqueur.com/us/en/about/",
    "https://www.stgermainliqueur.com/us/en/st-germain-elderflower-liqueur/",
  ],
  "noilly-prat": ["https://www.noillyprat.com/"],
  "santa-teresa": [
    "https://www.santateresarum.com/santa-teresa-1796/",
    "https://www.santateresarum.com/faq/",
  ],
  "perrier-jouet": [
    "https://www.perrier-jouet.com/en-ww/the-house/history",
    "https://www.perrier-jouet.com/en-us/faq",
  ],
  "grand-marnier": ["https://www.grandmarnier.com/en-us/our-collection/cordon-rouge/"],
  frangelico: ["https://frangelico.com/en-us/about/"],
  casamigos: ["https://www.casamigos.com/en-us/our-story"],
  bumbu: ["https://www.sovereignbrands.com/bumbu-rum/"],
  "chairmans-reserve": [
    "https://www.chairmansreserverum.com/history/",
    "https://www.stluciadistillers.com/our-rums",
  ],
  "dead-mans-fingers": [
    "https://deadmansfingers.com/home/our-story/",
    "https://rumandcrabshack.com/about-us/",
  ],
};

export const BRAND_CONTENT_BATCH_129: Record<string, BrandPublicContent> = {
  "st-germain": {
    description: "St-Germain is a French elderflower liqueur launched in 2007 by third-generation distiller Robert J. Cooper. Made with fresh elderflowers handpicked in spring, it sits in modern bars as the floral bottle behind spritzes, French 75 riffs and lighter gin drinks.",
    story: "The brand borrows its name from Saint-Germain-des-Prés, the Paris district linked with cafe culture, writers and artists. Its faceted Art Deco-style bottle helped make elderflower feel contemporary rather than old-fashioned.",
    tastingNotes: [
      { title: "Fresh Elderflower", description: "Soft white flowers, pear and lychee come first, with a clean sweetness that stays lifted." },
      { title: "Citrus And Stone Fruit", description: "Lemon peel, peach and a light honeyed note give sparkling cocktails a rounded finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build a spritz with sparkling wine, soda and plenty of ice, or add a small measure to gin, vodka and Champagne cocktails." },
      { subheading: "Food", description: "Pair with goat cheese tart, fruit chaat, tandoori prawns, cucumber sandwiches or lemon cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["goat cheese tart", "fruit chaat", "tandoori prawns", "cucumber sandwiches", "lemon cake"] }],
    whyChoose: "St-Germain is a fast way to add fresh floral lift to sparkling cocktails without heavy sweetness.",
    faqs: [
      { question: "What is St-Germain?", answer: "St-Germain is a French liqueur made with fresh elderflowers handpicked in spring." },
      { question: "How do you drink St-Germain?", answer: "The classic serve is a spritz with sparkling wine and soda, though it also works well in gin and Champagne cocktails." },
    ],
    finalVerdict: "St-Germain is the bottle for drinkers who want a bright floral note in easy, chilled cocktails.",
    metaTitle: "St-Germain Liqueur Guide | BevOry",
    metaDescription: "Explore St-Germain elderflower liqueur, spritz serves, tasting notes, pairings and city prices on BevOry.",
  },
  "noilly-prat": {
    description: "Noilly Prat is a French vermouth house from Marseillan on the Mediterranean coast. Its wine-based aperitifs are shaped by outdoor ageing for Original Dry and Extra Dry, then botanical maceration through the hand-stirred dodinage process.",
    story: "Joseph Noilly created the dry vermouth style in 1813, and the house later made Marseillan its coastal home near the Étang de Thau. That sunny, sea-facing setting is central to the oxidized, saline character that bartenders prize in Martinis.",
    tastingNotes: [
      { title: "Original Dry", description: "Dry white wine, chamomile, citrus peel and a salty herbal edge give the vermouth its Martini-friendly snap." },
      { title: "Aperitif Range", description: "Richer styles bring orange peel, dried fruit, spice and a bittersweet botanical finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled over ice with lemon, lengthen with tonic, or use the dry style in a Martini with a measured pour of gin." },
      { subheading: "Food", description: "Pair with green olives, tandoori prawns, fried calamari, herbed mushrooms or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["green olives", "tandoori prawns", "fried calamari", "herbed mushrooms", "goat cheese"] }],
    whyChoose: "Noilly Prat gives Martinis and aperitif serves a dry, coastal French vermouth backbone.",
    faqs: [
      { question: "Where is Noilly Prat from?", answer: "Noilly Prat is associated with Marseillan in southern France." },
      { question: "What is dodinage?", answer: "Dodinage is Noilly Prat's traditional hand-stirred botanical maceration process." },
    ],
    finalVerdict: "Noilly Prat is a serious vermouth for drinkers who like herbs, dry wine character and a clean aperitif bite.",
    metaTitle: "Noilly Prat Vermouth Guide | BevOry",
    metaDescription: "Explore Noilly Prat French vermouth, Marseillan heritage, Martini serves, pairings and city prices on BevOry.",
  },
  "santa-teresa": {
    description: "Santa Teresa is a Venezuelan rum house rooted in Hacienda Santa Teresa, founded in 1796 in Aragua. The flagship Santa Teresa 1796 is known for its triple-aged solera method and polished dry finish.",
    story: "The Vollmer family shaped the estate's modern rum story after Gustav Julius Vollmer arrived in Venezuela in the 19th century and married Panchita Rivas. Santa Teresa 1796 was created to mark the hacienda's bicentennial, turning estate history into a premium sipping rum.",
    tastingNotes: [
      { title: "Solera Depth", description: "Toffee, dark fruit, orange peel, vanilla and toasted oak give the rum a smooth but firm centre." },
      { title: "Dry Spice", description: "Cocoa, tobacco leaf, clove and roasted nuts keep the finish balanced rather than syrupy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat in a rocks glass, add one large cube, or stir into a rum Old Fashioned with restrained bitters." },
      { subheading: "Food", description: "Pair with pork vindaloo, grilled pineapple, coffee kulfi, dark chocolate or smoked almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork vindaloo", "grilled pineapple", "coffee kulfi", "dark chocolate", "smoked almonds"] }],
    whyChoose: "Santa Teresa is a strong pick when aged rum needs Venezuelan depth without sticky sweetness.",
    faqs: [
      { question: "Where is Santa Teresa rum from?", answer: "Santa Teresa rum comes from Hacienda Santa Teresa in Venezuela." },
      { question: "What is Santa Teresa 1796 known for?", answer: "Santa Teresa 1796 is known for its triple-aged solera process." },
    ],
    finalVerdict: "Santa Teresa is a polished aged rum for slow sipping, dark chocolate and spice-led food.",
    metaTitle: "Santa Teresa Rum Guide | BevOry",
    metaDescription: "Explore Santa Teresa Venezuelan rum, 1796 solera style, tasting notes, pairings and city prices on BevOry.",
  },
  "perrier-jouet": {
    description: "Perrier-Jouët is a Champagne house founded in Épernay in 1811 by Pierre-Nicolas Perrier and Rose-Adélaïde Jouët. The maison is known for Chardonnay-led finesse, floral freshness and Belle Epoque bottles decorated with Japanese anemones.",
    story: "Pierre-Nicolas Perrier and his son Charles helped champion the Côte des Blancs as prime Chardonnay terroir, including villages such as Cramant, Avize and Chouilly. Art, botany and Champagne have stayed tightly linked in the house identity since the founders' time.",
    tastingNotes: [
      { title: "Chardonnay Line", description: "White flowers, lemon zest, pear, chalk and fine pastry give many cuvées a graceful, lifted profile." },
      { title: "Belle Epoque", description: "Vintage bottlings add peach, almond, honeyed citrus and a fine mousse while staying fresh." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a tulip glass, giving the bubbles and floral notes room to open." },
      { subheading: "Food", description: "Pair with oysters, tandoori prawns, sushi, brie, truffle fries or lemon tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["oysters", "tandoori prawns", "sushi", "brie", "truffle fries", "lemon tart"] }],
    whyChoose: "Perrier-Jouët suits Champagne drinkers who prefer flowers, citrus and Chardonnay poise over heavy richness.",
    faqs: [
      { question: "Where is Perrier-Jouët based?", answer: "Perrier-Jouët is based in Épernay in France's Champagne region." },
      { question: "When was Perrier-Jouët founded?", answer: "Pierre-Nicolas Perrier and Rose-Adélaïde Jouët founded the house in 1811." },
    ],
    finalVerdict: "Perrier-Jouët is a refined Champagne choice when freshness, flowers and fine bubbles matter.",
    metaTitle: "Perrier-Jouët Champagne Guide | BevOry",
    metaDescription: "Explore Perrier-Jouët Champagne from Épernay, Chardonnay style, Belle Epoque notes and city prices on BevOry.",
  },
  "grand-marnier": {
    description: "Grand Marnier is a French orange liqueur built from Cognac, distilled bitter orange liqueur and sugar. Cordon Rouge, created in 1880 by Louis-Alexandre Marnier Lapostolle, remains its signature expression.",
    story: "The Marnier Lapostolle family made a bold move by marrying fine French Cognac with bitter orange at a time when orange liqueurs were usually lighter. That Cognac base is why Grand Marnier carries more weight than a simple triple sec.",
    tastingNotes: [
      { title: "Cordon Rouge", description: "Bitter orange peel, grape spirit depth, vanilla, caramel and light oak give the liqueur its warm citrus frame." },
      { title: "Cocktail Weight", description: "A small pour adds orange perfume, rounded sweetness and Cognac warmth to Margaritas, Sidecars and dessert drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use in a Grand Margarita, Sidecar or crepe sauce; sip over ice when you want a richer orange liqueur." },
      { subheading: "Food", description: "Pair with roast duck, dark chocolate, orange kulfi, almond cake or blue cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["roast duck", "dark chocolate", "orange kulfi", "almond cake", "blue cheese"] }],
    whyChoose: "Grand Marnier is the orange liqueur to choose when Cognac depth matters as much as citrus.",
    faqs: [
      { question: "What is Grand Marnier made with?", answer: "Grand Marnier Cordon Rouge combines French Cognac, distilled bitter orange liqueur and sugar." },
      { question: "When was Grand Marnier Cordon Rouge created?", answer: "Louis-Alexandre Marnier Lapostolle created Cordon Rouge in 1880." },
    ],
    finalVerdict: "Grand Marnier brings orange, Cognac and dessert-ready warmth into one versatile bottle.",
    metaTitle: "Grand Marnier Liqueur Guide | BevOry",
    metaDescription: "Explore Grand Marnier Cordon Rouge, Cognac-orange flavor, cocktails, pairings and city prices on BevOry.",
  },
  frangelico: {
    description: "Frangelico is an Italian hazelnut liqueur from Piedmont in northern Italy. It blends hazelnut distillate with cocoa, vanilla, roasted coffee and other flavouring preparations for a clear dessert-friendly style.",
    story: "The friar-shaped bottle points to Piedmontese folklore around monastic liqueurs and the figure of Fra Angelico. In the glass, the brand is more direct: roasted hazelnut made easy for coffee, chilled shots and after-dinner cocktails.",
    tastingNotes: [
      { title: "Hazelnut Core", description: "Roasted hazelnut, praline, cocoa and vanilla lead with a clean nutty sweetness." },
      { title: "Coffee Finish", description: "A light roasted coffee note keeps the finish suited to espresso and chocolate desserts." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, pour over ice, add to espresso, or shake into a hazelnut-led dessert cocktail." },
      { subheading: "Food", description: "Pair with tiramisu, coffee kulfi, dark chocolate, vanilla ice cream or roasted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tiramisu", "coffee kulfi", "dark chocolate", "vanilla ice cream", "roasted almonds"] }],
    whyChoose: "Frangelico is a clean hazelnut liqueur for coffee drinks, desserts and simple chilled serves.",
    faqs: [
      { question: "Where is Frangelico from?", answer: "Frangelico comes from Piedmont in northern Italy." },
      { question: "What does Frangelico taste like?", answer: "Frangelico tastes mainly of hazelnut, with cocoa, vanilla and roasted coffee notes." },
    ],
    finalVerdict: "Frangelico is the liqueur to pour when dessert needs hazelnut rather than heavy cream.",
    metaTitle: "Frangelico Liqueur Guide | BevOry",
    metaDescription: "Explore Frangelico Italian hazelnut liqueur, tasting notes, dessert serves, pairings and city prices on BevOry.",
  },
  casamigos: {
    description: "Casamigos is a tequila and mezcal brand founded by George Clooney, Rande Gerber and Mike Meldman. Its tequilas are made from 100 percent Blue Weber agave grown in Jalisco, Mexico, with a soft style built for sipping without salt or lime.",
    story: "The name means house of friends, reflecting the founders' original private tequila project. Diageo later acquired the brand, turning Casamigos into one of the most visible modern celebrity-backed tequila labels.",
    tastingNotes: [
      { title: "Blanco", description: "Sweet agave, citrus, vanilla and clean pepper make the unaged style easy to mix." },
      { title: "Aged Tequila", description: "Reposado and añejo expressions bring caramel, cocoa, baking spice and rounder cooked agave sweetness." },
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
    description: "Bumbu is a Caribbean rum brand from Sovereign Brands, with Bumbu Original distilled and blended at a beachfront distillery in Barbados. The style leans rich and spiced, drawing on West Indian rum traditions and tropical sweetness.",
    story: "Bumbu frames Barbados as the original rum island and builds its flagship around ripe fruit, spice and easy-drinking depth. The wider range stretches to XO from Panama, but Bumbu Original remains the label most drinkers recognise first.",
    tastingNotes: [
      { title: "Original Style", description: "Banana, vanilla, caramel, warm spice and tropical fruit give the rum its plush opening." },
      { title: "Mixer Grip", description: "The sweet spice holds up well when balanced by lime, cola, ginger beer or bitter mixers." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with cola, or in a rum sour with enough fresh lime to keep the drink bright." },
      { subheading: "Food", description: "Pair with grilled pineapple, banana fritters, pork vindaloo, dark chocolate or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled pineapple", "banana fritters", "pork vindaloo", "dark chocolate", "salted cashews"] }],
    whyChoose: "Bumbu is the rum pick for drinkers who like ripe tropical sweetness and spice.",
    faqs: [
      { question: "Where is Bumbu Original made?", answer: "Bumbu Original is distilled and blended in Barbados." },
      { question: "What style is Bumbu?", answer: "Bumbu Original is a rich Caribbean rum expression with tropical fruit, vanilla and spice notes." },
    ],
    finalVerdict: "Bumbu is best treated as a bold rum for ice, cola and dessert-friendly serves.",
    metaTitle: "Bumbu Rum Guide | BevOry",
    metaDescription: "Explore Bumbu rum from Barbados, spiced flavor, serving ideas, food pairings and city prices on BevOry.",
  },
  "chairmans-reserve": {
    description: "Chairman's Reserve is a Saint Lucian rum brand made by Saint Lucia Distillers. It blends column and pot still rums, drawing on a Coffey column still and three pot stills for the island's layered rum style.",
    story: "Laurie Barnard, then chairman of Saint Lucia Distillers, launched Chairman's Reserve in 1999. His approach treated blending as the centre of Saint Lucian rum, combining different stills, casks and base materials rather than chasing a single narrow profile.",
    tastingNotes: [
      { title: "Original Rum", description: "Ripe banana, raisin, vanilla, oak and brown sugar sit over a lightly funky rum backbone." },
      { title: "Pot Still Weight", description: "Spice, dried fruit, tobacco and roasted nuts add grip beyond a simple column-still rum." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste neat first, then try over one cube or in a Mai Tai-style drink with restrained syrup." },
      { subheading: "Food", description: "Pair with jerk chicken, pepper pork, grilled pineapple, smoked paneer or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["jerk chicken", "pepper pork", "grilled pineapple", "smoked paneer", "dark chocolate"] }],
    whyChoose: "Chairman's Reserve gives rum drinkers Saint Lucia's mix of column polish and pot-still character.",
    faqs: [
      { question: "Who makes Chairman's Reserve?", answer: "Chairman's Reserve is made by Saint Lucia Distillers." },
      { question: "When was Chairman's Reserve first blended?", answer: "Chairman's Reserve was launched in 1999 under Laurie Barnard." },
    ],
    finalVerdict: "Chairman's Reserve is a strong choice when rum needs depth, spice and real island character.",
    metaTitle: "Chairman's Reserve Rum Guide | BevOry",
    metaDescription: "Explore Chairman's Reserve Saint Lucian rum, pot and column still style, pairings and city prices on BevOry.",
  },
  "dead-mans-fingers": {
    description: "Dead Man's Fingers is a spiced and flavoured rum brand born at the Rum & Crab Shack in St Ives, Cornwall. Its original spiced rum made the label known for caramel, vanilla, cinnamon, nutmeg and orange-led mixed drinks.",
    story: "The name comes from the long finger-like gills inside a crab, a bit of Cornish seafood folklore that fits the brand's skull-marked bottle. Dead Man's Fingers was launched as a house rum before growing far beyond its harbour-front home.",
    tastingNotes: [
      { title: "Spiced Rum", description: "Creamy caramel, vanilla, cinnamon, nutmeg and orange sit over a sweet rum base." },
      { title: "Flavoured Range", description: "The wider line moves through fruit, coffee and tropical flavours for easy mixed drinks." },
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
};
