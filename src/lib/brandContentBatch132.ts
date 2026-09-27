import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_132 = [
  ["gato-negro", "Gato Negro", "Chile", "Wine", "brand-expansion-gato-negro"],
  ["geist", "Geist", "India", "Beer", "brand-expansion-geist"],
  ["pasqua", "Pasqua", "Italy", "Wine", "brand-expansion-pasqua"],
  ["b-and-g", "Barton & Guestier", "France", "Wine", "brand-expansion-b-and-g"],
  ["19-crimes", "19 Crimes", "Australia", "Wine", "brand-expansion-19-crimes"],
  ["baileys", "Baileys", "Ireland", "Irish Cream Liqueur", "brand-expansion-baileys"],
  ["black-and-white", "Black & White", "Scotland", "Blended Scotch Whisky", "brand-expansion-black-and-white"],
  ["blenders-pride", "Blenders Pride", "India", "Indian Whisky", "brand-expansion-blenders-pride"],
  ["cotswolds", "Cotswolds", "United Kingdom", "English Whisky", "brand-expansion-cotswolds"],
  ["don-julio", "Don Julio", "Mexico", "Tequila", "brand-expansion-don-julio"],
] as const;

export const BRAND_LOGOS_BATCH_132: Record<string, string> = {
  "b-and-g": "https://www.barton-guestier.com/pics/communs/BG_logo.png",
  "19-crimes": "https://19crimes.com/cdn/shop/files/19-crimes-logo_black_x400.jpg?v=1637703033",
};

export const BRAND_SOURCES_BATCH_132: Record<string, string[]> = {
  "gato-negro": ["https://www.vsptwinegroup.com/en/brands/gato-negro/"],
  geist: ["https://www.geist.in/"],
  pasqua: ["https://pasqua.wine/en/about-us/"],
  "b-and-g": ["https://www.barton-guestier.com/en/our-history.html"],
  "19-crimes": ["https://19crimes.com/pages/story"],
  baileys: ["https://www.baileys.com/en-us/the-story-of-baileys"],
  "black-and-white": ["https://www.malts.com/en-us/brands/black-white"],
  "blenders-pride": ["https://www.pernod-ricard.com/en/brands/blenders-pride"],
  cotswolds: ["https://www.cotswoldsdistillery.com/pages/our-story"],
  "don-julio": ["https://www.donjulio.com/en-us/our-story"],
};

export const BRAND_CONTENT_BATCH_132: Record<string, BrandPublicContent> = {
  "gato-negro": {
    description: "Gato Negro is a Chilean wine brand from Viña San Pedro, part of VSPT Wine Group. The range is built for fruit-forward drinking across Cabernet Sauvignon, Merlot, Carmenere, Chardonnay and Sauvignon Blanc.",
    story: "The black cat label has travelled widely because the wines are straightforward, affordable and easy to match with food. Chile's Central Valley gives the brand ripe fruit, soft tannins and clean white-wine acidity without heavy oak.",
    tastingNotes: [
      { title: "Red Wines", description: "Cabernet, Merlot and Carmenere lean into plum, black cherry, soft spice and rounded tannins." },
      { title: "White Wines", description: "Sauvignon Blanc and Chardonnay bring citrus, peach, tropical fruit and a clean chilled finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and reds slightly cool in everyday wine glasses." },
      { subheading: "Food", description: "Pair Cabernet or Carmenere with seekh kebabs and grilled lamb; pour Sauvignon Blanc with tandoori fish or fresh salads." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebabs", "grilled lamb", "tandoori fish", "fresh salads", "mushroom pizza"] }],
    whyChoose: "Gato Negro is a practical Chilean wine pick when the table needs easy fruit and familiar grape names.",
    faqs: [
      { question: "Who makes Gato Negro wine?", answer: "Gato Negro is made by Viña San Pedro in Chile." },
      { question: "What grapes does Gato Negro offer?", answer: "The range includes Cabernet Sauvignon, Merlot, Carmenere, Chardonnay and Sauvignon Blanc." },
    ],
    finalVerdict: "Gato Negro is dependable Chilean wine for casual dinners, house parties and mixed food spreads.",
    metaTitle: "Gato Negro Wine Guide | BevOry",
    metaDescription: "Explore Gato Negro Chilean wine, grape styles, tasting notes, food pairings and city prices on BevOry.",
  },
  geist: {
    description: "Geist is an Indian craft beer brand and brewery based around Bengaluru. Its beers are made for fresh local draught and packaged craft drinking, with lager, wheat beer, ale and seasonal styles in the range.",
    story: "Geist helped build a modern craft-beer habit in India's pub-heavy Bengaluru market. The brand keeps its language close to taproom culture: cold beer, local events, fresh pours and food-friendly pints.",
    tastingNotes: [
      { title: "Fresh Craft Beer", description: "Expect clean malt, lively carbonation and style-led hops rather than one heavy house flavour." },
      { title: "Wheat And Lager", description: "Wheat styles bring citrus and soft spice, while lager expressions stay crisp, grainy and refreshing." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve cold in a clean pint or wheat-beer glass, keeping foam intact for aroma." },
      { subheading: "Food", description: "Pair with Bengaluru-style chilli chicken, masala fries, paneer tikka, burgers or pepper prawns." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "masala fries", "paneer tikka", "burgers", "pepper prawns"] }],
    whyChoose: "Geist is a local Indian craft choice for drinkers who want fresh beer with pub food.",
    faqs: [
      { question: "Where is Geist beer from?", answer: "Geist is an Indian craft beer brand associated with Bengaluru." },
      { question: "What styles does Geist make?", answer: "Geist covers beer styles such as lager, wheat beer, ale and seasonal craft releases." },
    ],
    finalVerdict: "Geist is best treated as a cold, fresh craft beer for spicy snacks and relaxed taproom-style drinking.",
    metaTitle: "Geist Beer Guide | BevOry",
    metaDescription: "Explore Geist Indian craft beer, Bengaluru roots, tasting notes, food pairings and city prices on BevOry.",
  },
  pasqua: {
    description: "Pasqua is an Italian wine producer from Verona, founded by the Pasqua family in 1925. Its portfolio covers Veneto classics and contemporary labels, including Amarone, Valpolicella, Soave, Pinot Grigio and sparkling wines.",
    story: "The house grew from a family wine business in northeastern Italy into an export-led Verona producer. Pasqua is known for bringing design-led bottles and accessible Italian regional styles into the same portfolio.",
    tastingNotes: [
      { title: "Veneto Reds", description: "Valpolicella and Amarone styles show cherry, dried fruit, cocoa, spice and polished tannin." },
      { title: "Italian Whites", description: "Soave and Pinot Grigio bring pear, citrus, white flowers and clean mineral freshness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites well chilled, Valpolicella slightly cool, and Amarone in a large glass after brief aeration." },
      { subheading: "Food", description: "Pair Amarone with rogan josh or aged Parmesan; pour Pinot Grigio with grilled prawns, pesto pasta or paneer tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["rogan josh", "aged Parmesan", "grilled prawns", "pesto pasta", "paneer tikka"] }],
    whyChoose: "Pasqua is a strong Verona name for drinkers who want recognisable Italian reds and crisp whites.",
    faqs: [
      { question: "Where is Pasqua wine from?", answer: "Pasqua is based in Verona in Italy's Veneto region." },
      { question: "When was Pasqua founded?", answer: "The Pasqua family founded the wine business in 1925." },
    ],
    finalVerdict: "Pasqua brings Veneto wine into an approachable format, from crisp whites to richer Amarone-style reds.",
    metaTitle: "Pasqua Wine Guide | BevOry",
    metaDescription: "Explore Pasqua wines from Verona, Veneto styles, tasting notes, pairings and city prices on BevOry.",
  },
  "b-and-g": {
    description: "Barton & Guestier is a French wine house tracing its roots to Thomas Barton, an Irishman who settled in Bordeaux in 1725. The brand covers major French regions, including Bordeaux, Loire, Burgundy, Beaujolais, Provence and the Rhône.",
    story: "The Barton name became part of Bordeaux wine trade history before the Barton & Guestier house grew into a broad French ambassador brand. Its strength is range: familiar appellations and grape-led bottles for drinkers learning French wine.",
    tastingNotes: [
      { title: "French Reds", description: "Bordeaux and Rhône-led reds bring blackcurrant, plum, herbs, spice and firm but accessible tannin." },
      { title: "White And Rosé", description: "Loire whites and Provence rosé lean toward citrus, red berries, florals and a crisp dry finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites and rosé chilled; pour reds slightly cool and let structured bottles breathe." },
      { subheading: "Food", description: "Pair Bordeaux reds with roast lamb or galouti kebabs; serve rosé with grilled prawns, mezze or chicken tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["roast lamb", "galouti kebabs", "grilled prawns", "mezze", "chicken tikka"] }],
    whyChoose: "Barton & Guestier is useful when you want a single French label covering many classic regions.",
    faqs: [
      { question: "How old is Barton & Guestier?", answer: "The house traces its roots to Thomas Barton in Bordeaux in 1725." },
      { question: "What regions does Barton & Guestier cover?", answer: "Its wines span regions such as Bordeaux, Burgundy, Loire, Beaujolais, Provence and the Rhône." },
    ],
    finalVerdict: "Barton & Guestier is a practical doorway into classic French wine styles.",
    metaTitle: "Barton & Guestier Wine Guide | BevOry",
    metaDescription: "Explore Barton & Guestier French wine, Bordeaux history, tasting notes, pairings and city prices on BevOry.",
  },
  "19-crimes": {
    description: "19 Crimes is an Australian wine brand from Treasury Wine Estates, built around labels inspired by British convicts transported to Australia. The range is led by bold reds, with Shiraz, Cabernet Sauvignon, red blends and character-led limited bottlings.",
    story: "The name refers to the offences that could lead to transportation from Britain to Australia. Its talking-label personality made the brand stand out on shelves, but the drinking style remains ripe, plush and easy to pour.",
    tastingNotes: [
      { title: "Bold Reds", description: "Blackberry, dark cherry, vanilla, mocha and sweet spice give the reds a generous feel." },
      { title: "Soft Finish", description: "Rounded tannins and ripe fruit make the wines friendly with barbecue and spicy food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve reds slightly cool in large glasses; give fuller bottles 10 minutes of air." },
      { subheading: "Food", description: "Pair with barbecue ribs, mutton seekh, pepperoni pizza, chilli paneer or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue ribs", "mutton seekh", "pepperoni pizza", "chilli paneer", "dark chocolate"] }],
    whyChoose: "19 Crimes is a crowd-friendly red wine name for drinkers who like big fruit and easy impact.",
    faqs: [
      { question: "What is 19 Crimes wine known for?", answer: "19 Crimes is known for Australian wines with convict-inspired labels and bold red-wine styles." },
      { question: "Who owns 19 Crimes?", answer: "19 Crimes is part of Treasury Wine Estates." },
    ],
    finalVerdict: "19 Crimes is made for bold red-wine drinkers who want ripe fruit, spice and a strong shelf personality.",
    metaTitle: "19 Crimes Wine Guide | BevOry",
    metaDescription: "Explore 19 Crimes Australian wine, bold red styles, tasting notes, pairings and city prices on BevOry.",
  },
  baileys: {
    description: "Baileys is an Irish cream liqueur from Diageo, first launched in 1974. It combines Irish whiskey, dairy cream, cocoa and vanilla into a sweet, creamy liqueur for dessert-style drinking.",
    story: "Baileys helped define the modern cream liqueur category by turning Irish whiskey into a smooth after-dinner pour. The bottle is now strongly linked with coffee, chocolate desserts, festive drinks and simple over-ice serves.",
    tastingNotes: [
      { title: "Cream And Cocoa", description: "Fresh cream, milk chocolate, vanilla and light coffee notes give Baileys its familiar dessert profile." },
      { title: "Irish Whiskey Warmth", description: "A gentle whiskey base adds soft warmth under the sweetness without making the drink sharp." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled over ice, pour into coffee, or use in creamy dessert cocktails." },
      { subheading: "Food", description: "Pair with gulab jamun, chocolate brownies, tiramisu, vanilla ice cream or salted caramel pudding." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["gulab jamun", "chocolate brownies", "tiramisu", "vanilla ice cream", "salted caramel pudding"] }],
    whyChoose: "Baileys is the classic cream liqueur when dessert, coffee and easy sweetness are the mood.",
    faqs: [
      { question: "When was Baileys launched?", answer: "Baileys Irish Cream launched in 1974." },
      { question: "What is Baileys made with?", answer: "Baileys combines Irish whiskey, dairy cream, cocoa and vanilla flavours." },
    ],
    finalVerdict: "Baileys is a dessert-friendly liqueur for ice, coffee and chocolate-led serves.",
    metaTitle: "Baileys Irish Cream Guide | BevOry",
    metaDescription: "Explore Baileys Irish Cream, tasting notes, coffee serves, dessert pairings and city prices on BevOry.",
  },
  "black-and-white": {
    description: "Black & White is a blended Scotch whisky created by James Buchanan and now owned by Diageo. The label is famous for its black and white terriers and a light, approachable Scotch profile.",
    story: "Buchanan originally built the whisky for broad appeal in London and export markets. The dog label became one of Scotch whisky's most memorable visual marks, matching a blend made for highballs and everyday pours.",
    tastingNotes: [
      { title: "Light Scotch", description: "Grain, honey, vanilla, cereal and soft orchard fruit make the blend easygoing." },
      { title: "Clean Highball", description: "A light body and gentle sweetness work well with soda, ginger ale or water." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Drink over ice, lengthen with soda, or mix a simple whisky highball with chilled sparkling water." },
      { subheading: "Food", description: "Pair with chicken tikka, cheese toast, masala peanuts, fish fingers or apple crumble." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "cheese toast", "masala peanuts", "fish fingers", "apple crumble"] }],
    whyChoose: "Black & White is a light blended Scotch for easy highballs and casual whisky drinking.",
    faqs: [
      { question: "Who created Black & White whisky?", answer: "James Buchanan created the blend that became Black & White." },
      { question: "Who owns Black & White today?", answer: "Black & White is part of Diageo's Scotch whisky portfolio." },
    ],
    finalVerdict: "Black & White is a simple, friendly Scotch for soda serves and light snacks.",
    metaTitle: "Black & White Whisky Guide | BevOry",
    metaDescription: "Explore Black & White blended Scotch, Buchanan history, tasting notes, pairings and city prices on BevOry.",
  },
  "blenders-pride": {
    description: "Blenders Pride is an Indian whisky brand from Pernod Ricard India, launched in 1995. It is positioned as a premium Indian whisky with a smooth, approachable style built for social drinking.",
    story: "The brand became closely tied to fashion, music and urban nightlife in India. Its role in the market is clear: a polished Indian whisky name for parties, gifting and whisky-soda serves.",
    tastingNotes: [
      { title: "Smooth Blend", description: "Honey, cereal, dried fruit, vanilla and light spice create a rounded whisky profile." },
      { title: "Mixer Friendly", description: "The soft body works well with soda, water and ice without turning harsh." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, add chilled soda, or drink with water in a tall glass." },
      { subheading: "Food", description: "Pair with tandoori chicken, paneer tikka, mutton seekh, masala papad or dal makhani." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "paneer tikka", "mutton seekh", "masala papad", "dal makhani"] }],
    whyChoose: "Blenders Pride is a familiar Indian premium whisky for smooth mixed serves and party tables.",
    faqs: [
      { question: "Who makes Blenders Pride?", answer: "Blenders Pride is made by Pernod Ricard India." },
      { question: "When was Blenders Pride launched?", answer: "Blenders Pride was launched in India in 1995." },
    ],
    finalVerdict: "Blenders Pride is a polished Indian whisky for soda, ice and robust Indian snacks.",
    metaTitle: "Blenders Pride Whisky Guide | BevOry",
    metaDescription: "Explore Blenders Pride Indian whisky, tasting notes, serving ideas, pairings and city prices on BevOry.",
  },
  cotswolds: {
    description: "Cotswolds is an English whisky and gin producer founded by Daniel Szor in 2014. The distillery is based in the Cotswolds and is known for English single malt whisky made with locally grown barley.",
    story: "The project began with a clear aim: make whisky in a rural English setting with proper grain and slow distilling discipline. Its range has expanded into gin, cream liqueur and cask-led whisky releases while keeping the Cotswolds name upfront.",
    tastingNotes: [
      { title: "English Single Malt", description: "Malted barley, orchard fruit, honey, vanilla and baking spice shape the whisky's generous style." },
      { title: "Gin Range", description: "Cotswolds gin brings juniper, citrus peel, spice and a rounded botanical texture." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip whisky neat with a little water; serve gin with tonic, ice and a citrus garnish." },
      { subheading: "Food", description: "Pair whisky with roast chicken, apple tart or cheddar; serve gin with tandoori prawns, olives or herbed paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["roast chicken", "apple tart", "cheddar", "tandoori prawns", "herbed paneer"] }],
    whyChoose: "Cotswolds is a modern English distillery for drinkers curious about local barley whisky and expressive gin.",
    faqs: [
      { question: "Who founded Cotswolds Distillery?", answer: "Daniel Szor founded Cotswolds Distillery in 2014." },
      { question: "What is Cotswolds known for?", answer: "Cotswolds is known for English single malt whisky and gin." },
    ],
    finalVerdict: "Cotswolds offers a bright modern take on English whisky, with gin as a strong second lane.",
    metaTitle: "Cotswolds Whisky Guide | BevOry",
    metaDescription: "Explore Cotswolds English whisky and gin, local barley, tasting notes, pairings and city prices on BevOry.",
  },
  "don-julio": {
    description: "Don Julio is a premium tequila brand from Jalisco, Mexico, named after founder Don Julio González. González began distilling tequila in 1942 and focused on mature blue Weber agave and careful production.",
    story: "The brand's modern reputation rests on polished tequila for neat drinking, especially Reposado, Añejo and 1942. Don Julio helped shift tequila away from quick shots toward slow sipping and high-end cocktails.",
    tastingNotes: [
      { title: "Blue Agave", description: "Cooked agave, citrus, pepper and light herbal notes give the blanco style clarity." },
      { title: "Aged Tequila", description: "Reposado and Añejo styles add vanilla, caramel, oak spice and a rounder finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat in a tequila glass, serve over one cube, or mix Blanco in a Margarita with fresh lime." },
      { subheading: "Food", description: "Pair with tacos al pastor, tandoori prawns, achari paneer, guacamole or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tacos al pastor", "tandoori prawns", "achari paneer", "guacamole", "dark chocolate"] }],
    whyChoose: "Don Julio is a polished tequila choice when clean agave flavour and premium sipping matter.",
    faqs: [
      { question: "Who founded Don Julio tequila?", answer: "Don Julio González founded the tequila brand associated with his name." },
      { question: "Where is Don Julio from?", answer: "Don Julio is from Jalisco, Mexico." },
    ],
    finalVerdict: "Don Julio is a refined tequila for neat pours, fresh Margaritas and spice-led food.",
    metaTitle: "Don Julio Tequila Guide | BevOry",
    metaDescription: "Explore Don Julio tequila, Jalisco origin, tasting notes, serving ideas, pairings and city prices on BevOry.",
  },
};
