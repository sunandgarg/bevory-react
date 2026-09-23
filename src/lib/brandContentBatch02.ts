import type { BrandPublicContent } from "./brandContentBatch01.js";

// Batch 02 follows the same public UI contract as batch 01.
// Brand copy describes the house or reference expression without merging variants.
export const BRAND_CONTENT_BATCH_02: Record<string, BrandPublicContent> = {
  vinsura: {
    description: "Vinsura is an Indian winery based at Vinchur Wine Park in the Nashik Valley. Its published range includes Cabernet Sauvignon, Zinfandel, Syrah, Sauvignon Blanc, Chenin Blanc, and Symphony wines.",
    story: "Vinsura was established by farmers and is based in Nashik, Maharashtra. Its identity comes through a range of red and white wines that are best chosen by grape, colour, vintage, and label style.",
    tastingNotes: [
      { title: "Red wines", description: "Cabernet Sauvignon, Zinfandel, and Syrah give the range darker-fruited and more structured directions." },
      { title: "White wines", description: "Sauvignon Blanc, Chenin Blanc, and Symphony offer fresher, brighter, and more aromatic styles." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve the exact wine at the temperature stated on its label in a clean wine glass." },
      { subheading: "Food", description: "Pair a fresh white with grilled vegetables or tomato pasta; pair a fuller red with tandoori chicken or roast lamb." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled vegetables", "tomato pasta", "tandoori chicken", "roast lamb"] }],
    whyChoose: "A Nashik wine range that gives drinkers several grape and colour styles to explore with familiar food.",
    faqs: [
      { question: "What is Vinsura?", answer: "Vinsura is an Indian winery based at Vinchur Wine Park in the Nashik Valley." },
      { question: "Which grapes are associated with Vinsura?", answer: "Its published range includes Cabernet Sauvignon, Zinfandel, Syrah, Sauvignon Blanc, Chenin Blanc, and Symphony." },
    ],
    finalVerdict: "Vinsura is a Nashik wine range worth exploring by grape and colour, from fresh whites to darker, fuller reds.",
    metaTitle: "Vinsura Wine Guide | BevOry",
    metaDescription: "Vinsura wine guide with Nashik grapes, serving ideas, Indian pairings, and city-level prices on BevOry.",
  },
  "suntory-toki": {
    description: "Suntory Toki is a Japanese blended whisky from House of Suntory, made with whisky from the Yamazaki, Hakushu, and Chita distilleries. Its published profile highlights orchard fruit, green herbs, gentle smoke, grain, sweetness, and spice.",
    story: "Toki is presented as a bright, highball-friendly Japanese blend. The combination of malt and grain whisky gives it a lighter role at the table than a heavily oak-led sipping style.",
    tastingNotes: [
      { title: "Aroma", description: "Orchard fruit and green herbal notes lead into gentle smoke and rich grain." },
      { title: "Palate", description: "Soft sweetness and spice give the blend an easy, refreshing shape when diluted." },
    ],
    howToEnjoy: [
      { subheading: "Highball", description: "Try a small neat pour first, then use a chilled highball with plenty of ice and dry soda." },
      { subheading: "Food", description: "Pair the highball with yakitori, tempura, grilled mushrooms, or lightly spiced snacks." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["yakitori", "tempura", "grilled mushrooms", "lightly spiced snacks"] }],
    whyChoose: "A bright Japanese blend with a clear highball use case and a flavour profile that stays lively after dilution.",
    faqs: [
      { question: "What is Suntory Toki?", answer: "Suntory Toki is a blended Japanese whisky from House of Suntory." },
      { question: "How is Toki commonly served?", answer: "It is commonly served as a highball; tasting a small pour neat first helps show how dilution changes the whisky." },
    ],
    finalVerdict: "Toki is a bright Japanese blend with orchard fruit, herbs, gentle smoke, and a refreshing highball style.",
    metaTitle: "Suntory Toki World Whisky Guide | BevOry",
    metaDescription: "Suntory Toki whisky guide with style notes, serving ideas, Japanese food pairings, and city-level prices on BevOry.",
  },
  hakushu: {
    description: "Hakushu is a Japanese single malt whisky from House of Suntory's distillery in the Southern Japanese Alps, established in 1973. Its house style is described as gently smoky and herbal, while expression details vary by bottle.",
    story: "Hakushu's identity is tied to its mountain forest distillery in Yamanashi. The range includes different bottlings, so age statement, strength, and maturation should be read from the exact label.",
    tastingNotes: [
      { title: "House style", description: "A gently smoky, herbal character associated with the mountain forest distillery." },
      { title: "Expression", description: "Age statement, strength, and maturation can change the balance of smoke, green notes, fruit, and oak." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Begin neat in a clean tulip glass; add a few drops of water only if the bottle benefits from it." },
      { subheading: "Food", description: "Pair with sushi, grilled fish, roasted vegetables, or mild cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "grilled fish", "roasted vegetables", "mild cheese"] }],
    whyChoose: "A Japanese single malt with a distinctive forest-distillery identity and a range of expressions to explore.",
    faqs: [
      { question: "What is Hakushu?", answer: "Hakushu is a Japanese single malt whisky made at House of Suntory's Hakushu distillery." },
      { question: "Is every Hakushu bottle the same?", answer: "No. Expression, age statement, strength, and bottle format should be checked separately." },
    ],
    finalVerdict: "Hakushu is a gently smoky, herbal Japanese single malt whose exact expression should guide the pour and pairing.",
    metaTitle: "Hakushu Single Malt Whisky Guide | BevOry",
    metaDescription: "Hakushu single malt guide with Japanese style, serving ideas, food pairings, and city-level prices on BevOry.",
  },
  ao: {
    description: "Ao is a world whisky from House of Suntory, blended from whisky traditions in Ireland, Scotland, America, Canada, and Japan. Its published profile combines smoke, fruit, creamy sweetness, spice, and wood.",
    story: "Ao is presented as a multi-region blend, and its five-sided bottle reflects the five whisky regions used in the blend's story. The result is a whisky designed to show more than one regional style in a single pour.",
    tastingNotes: [
      { title: "Published profile", description: "Fruit and creamy sweetness meet smoke, cinnamon, and woody notes." },
      { title: "Texture", description: "The blend moves from soft sweetness into spice and oak, making dilution a useful way to explore it." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try a measured neat pour first, then compare it with a restrained highball." },
      { subheading: "Food", description: "Pair with grilled meats, soy-glazed dishes, roasted nuts, or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled meats", "soy-glazed dishes", "roasted nuts", "dark chocolate"] }],
    whyChoose: "A multi-region blend for drinkers who want a smoky, sweet, and woody whisky with a broad food range.",
    faqs: [
      { question: "What is Ao whisky?", answer: "Ao is a world whisky blend from House of Suntory using whisky from five regions." },
      { question: "How should Ao be served?", answer: "Taste it neat first, then try a measured highball to see how the smoky and sweet notes change with dilution." },
    ],
    finalVerdict: "Ao is a five-region blend with a smoky, sweet, and woody profile that works neat or in a restrained highball.",
    metaTitle: "Ao World Whisky Guide | BevOry",
    metaDescription: "Ao World Whisky guide with tasting style, serving ideas, food pairings, and city-level prices on BevOry.",
  },
  kakubin: {
    description: "Kakubin is a Japanese blended whisky from Suntory, made with whisky associated with the Yamazaki, Hakushu, and Chita distilleries. Its published notes include lemon, green apple, butter cookie, hazelnut, popcorn, coconut, and baked almond.",
    story: "Kakubin has a clear highball role in Japanese whisky culture. Its light fruit, biscuit, nut, and toasted notes give the blend enough character to remain present alongside cold soda and ice.",
    tastingNotes: [
      { title: "Aroma", description: "Lemon, green apple, butter cookie, and hazelnut." },
      { title: "Palate", description: "Popcorn, dried coconut, and baked almond bring a soft toasted finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste a small measure neat, then try a highball with cold soda and a large clear ice cube." },
      { subheading: "Food", description: "Pair with yakitori, fried chicken, grilled vegetables, or salty snacks." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["yakitori", "fried chicken", "grilled vegetables", "salty snacks"] }],
    whyChoose: "A Japanese blend with a published citrus, fruit, biscuit, nut, and toasted profile that suits a highball.",
    faqs: [
      { question: "What is Kakubin?", answer: "Kakubin is a Japanese blended whisky label from Suntory." },
      { question: "What is Kakubin commonly used for?", answer: "It is commonly associated with a highball, but it can also be tasted neat to explore its citrus, fruit, and toasted notes." },
    ],
    finalVerdict: "Kakubin is a lively Japanese blend with lemon, green apple, biscuit, hazelnut, and toasted notes for a crisp highball.",
    metaTitle: "Kakubin Japanese Whisky Guide | BevOry",
    metaDescription: "Kakubin Japanese Whisky guide with tasting notes, highball serves, food pairings, and city-level prices on BevOry.",
  },
  "knob-creek": {
    description: "Knob Creek is an American bourbon brand from Suntory Global Spirits. Its 9 Year Old reference expression is bottled at 100 proof with a full-bodied profile built around oak, vanilla, and caramel.",
    story: "Knob Creek is best known for a robust bourbon style, but the range includes different expressions. Age, proof, and bottle format can change across the collection and should be read from the label.",
    tastingNotes: [
      { title: "9 Year Old reference", description: "Robust oak, vanilla, and caramel shape a full-bodied bourbon profile." },
      { title: "Range", description: "Single-barrel and higher-proof releases can bring a different balance of oak, fruit, spice, and heat." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve a modest pour neat in a rocks glass, add a little water if preferred, or use a measured whiskey cocktail." },
      { subheading: "Food", description: "Pair with barbecue, blue cheese, roast meats, or pecan desserts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue", "blue cheese", "roast meats", "pecan desserts"] }],
    whyChoose: "A full-bodied bourbon range for drinkers who enjoy oak, vanilla, caramel, and expression-led comparison.",
    faqs: [
      { question: "What is Knob Creek?", answer: "Knob Creek is an American bourbon whiskey brand from Suntory Global Spirits." },
      { question: "Are all Knob Creek bottles 9 years old?", answer: "No. Age, proof, and expression vary, so the exact bottle label should guide the description." },
    ],
    finalVerdict: "Knob Creek is a robust bourbon choice, with the 9 Year Old reference bringing oak, vanilla, and caramel into a full-bodied pour.",
    metaTitle: "Knob Creek Bourbon Guide | BevOry",
    metaDescription: "Knob Creek Bourbon guide with oak and caramel notes, serving ideas, food pairings, and city-level prices on BevOry.",
  },
  "basil-haydens": {
    description: "Basil Hayden's is an American bourbon brand from Suntory Global Spirits with a high-rye style. Its core 80-proof profile lists charred oak, vanilla, caramel, dried fruit, brown sugar, and black pepper.",
    story: "Basil Hayden's is built around a lighter, high-rye bourbon character. The collection includes different releases, so proof, age, and maturation should be read from the exact bottle.",
    tastingNotes: [
      { title: "Core profile", description: "Charred oak, vanilla, caramel, dried fruit, brown sugar, and black pepper lead into an oaky finish." },
      { title: "Style", description: "The high-rye character gives the bourbon a dry, gently spicy edge alongside its sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Start neat or over one large cube, then use a measured serve in an Old Fashioned-style drink." },
      { subheading: "Food", description: "Pair with smoked chicken, roasted nuts, apple dessert, or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "roasted nuts", "apple dessert", "aged cheddar"] }],
    whyChoose: "A high-rye bourbon with approachable proof, oak, caramel, and pepper that works across neat and cocktail serves.",
    faqs: [
      { question: "What is Basil Hayden's?", answer: "Basil Hayden's is an American bourbon brand from Suntory Global Spirits." },
      { question: "What does Basil Hayden's taste like?", answer: "The core profile includes charred oak, vanilla, caramel, dried fruit, brown sugar, black pepper, and a lingering oak finish." },
    ],
    finalVerdict: "Basil Hayden's brings a lighter high-rye bourbon style, balancing oak, vanilla, caramel, dried fruit, and black pepper.",
    metaTitle: "Basil Hayden's Bourbon Guide | BevOry",
    metaDescription: "Basil Hayden's Bourbon guide with high-rye style, tasting notes, food pairings, and city-level prices on BevOry.",
  },
  "gentleman-jack": {
    description: "Gentleman Jack is a Tennessee whiskey from the Jack Daniel Distillery in Lynchburg, Tennessee. Its recipe uses corn, rye, barley malt, and limestone-filtered water, with charcoal mellowing before and after aging.",
    story: "Gentleman Jack is the double-mellowed expression in the Jack Daniel's family. Its two charcoal-mellowing steps give the whiskey a distinct place beside Old No. 7 and other Tennessee releases.",
    tastingNotes: [
      { title: "Published profile", description: "Light amber colour leads into vanilla, caramel, almond, fruit, and a gentle smoky finish." },
      { title: "Style", description: "The double-mellowed process gives the core whiskey a smooth, rounded direction for neat or mixed serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve a small pour neat or over ice, or use it in a balanced whiskey highball." },
      { subheading: "Food", description: "Pair with barbecue, fried chicken, smoked cheese, or pecan pie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue", "fried chicken", "smoked cheese", "pecan pie"] }],
    whyChoose: "A distinct Tennessee whiskey with a documented double-mellowed process and a soft, food-friendly profile.",
    faqs: [
      { question: "What is Gentleman Jack?", answer: "Gentleman Jack is a Tennessee whiskey made at the Jack Daniel Distillery." },
      { question: "What makes Gentleman Jack distinct?", answer: "Its published process describes charcoal mellowing once before and once after aging." },
    ],
    finalVerdict: "Gentleman Jack is a double-mellowed Tennessee whiskey with vanilla, caramel, fruit, almond, and a gentle smoky finish.",
    metaTitle: "Gentleman Jack Whiskey Guide | BevOry",
    metaDescription: "Gentleman Jack whiskey guide with double-mellowed style, food pairings, serving ideas, and city-level prices on BevOry.",
  },
  courvoisier: {
    description: "Courvoisier is a Cognac house founded in 1828 in Jarnac, at the heart of France's Cognac region. Its collection spans VS, VSOP, XO, and other releases with distinct blend and maturation details.",
    story: "Courvoisier's house identity is rooted in Jarnac and in the blending of eaux-de-vie from Cognac. The VSOP reference brings together eaux-de-vie from four crus with stone fruit, jasmine, and gingerbread notes.",
    tastingNotes: [
      { title: "VSOP reference", description: "Mature stone fruit, summer jasmine, and gingerbread shape the published VSOP profile." },
      { title: "House range", description: "VS, VSOP, XO, and special blends can differ in category, blend, maturation, and body." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve a modest measure in a tulip glass, or use a younger style in a measured Sidecar-style cocktail." },
      { subheading: "Food", description: "Pair with dark chocolate, roast duck, dried fruit, or aged cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "roast duck", "dried fruit", "aged cheese"] }],
    whyChoose: "A Cognac house with a clear expression ladder, making category and maturation useful starting points for exploration.",
    faqs: [
      { question: "What is Courvoisier?", answer: "Courvoisier is a Cognac house founded in 1828 in Jarnac, France." },
      { question: "Is Courvoisier VSOP the same as XO?", answer: "No. VSOP, XO, VS, and special blends are distinct categories and should be explored separately." },
    ],
    finalVerdict: "Courvoisier is best explored by expression, with the house's Jarnac history providing context for its Cognac range.",
    metaTitle: "Courvoisier Cognac Guide | BevOry",
    metaDescription: "Courvoisier Cognac guide with VSOP style, serving ideas, food pairings, and city-level prices on BevOry.",
  },
  hornitos: {
    description: "Hornitos is a tequila brand from the Sauza family, with products made from blue agave grown and harvested in Jalisco, Mexico. Its Reposado reference uses 100% blue agave, double distillation, and resting in American white oak.",
    story: "Hornitos is a broad tequila family that includes Plata, Reposado, Anejo, Cristalino, and other expressions. Maturation changes the balance from fresh agave to fruit, herbs, and light oak.",
    tastingNotes: [
      { title: "Reposado reference", description: "Fine agave, green apple, herbal notes, light wood, and a warm finish describe the published Reposado profile." },
      { title: "Range", description: "Plata, Reposado, Anejo, and Cristalino bring different levels of maturation and texture." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a measured pour in a Margarita or Paloma, or taste the exact style neat from a small glass." },
      { subheading: "Food", description: "Pair with salsa, grilled corn, tacos, or citrus-led salads." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["salsa", "grilled corn", "tacos", "citrus-led salads"] }],
    whyChoose: "A blue-agave tequila family where style and maturation make the difference between a fresh, rested, and oak-led pour.",
    faqs: [
      { question: "What is Hornitos?", answer: "Hornitos is a tequila brand from the Sauza family with products made from blue agave in Jalisco, Mexico." },
      { question: "What is Hornitos Reposado?", answer: "The published profile describes a 100% blue agave tequila rested in American white oak; check the exact local bottle for current details." },
    ],
    finalVerdict: "Hornitos is best explored by tequila style and maturation, from fresh agave-led Plata to the softer oak of Reposado.",
    metaTitle: "Hornitos Tequila Guide | BevOry",
    metaDescription: "Hornitos Tequila guide with blue-agave style, serving ideas, food pairings, and city-level prices on BevOry.",
  },
};
