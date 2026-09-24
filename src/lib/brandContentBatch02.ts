import type { BrandPublicContent } from "./brandContentBatch01.js";

// Batch 02 follows the same public UI contract as batch 01.
// Brand copy describes the house or reference expression without merging variants.
export const BRAND_CONTENT_BATCH_02: Record<string, BrandPublicContent> = {
  vinsura: {
    description: "Vinsura is an Indian winery based at Vinchur Wine Park in the Nashik Valley. Cabernet Sauvignon, Zinfandel and Syrah sit alongside Sauvignon Blanc and Chenin Blanc in its red-and-white range.",
    story: "Vinsura was established by farmers in Nashik, Maharashtra. Its home at Vinchur Wine Park places it within the region's development from grape-growing country into a centre of Indian winemaking.",
    tastingNotes: [
      { title: "Red wines", description: "Cabernet Sauvignon, Zinfandel, and Syrah give the range darker-fruited and more structured directions." },
      { title: "White wines", description: "Sauvignon Blanc and Chenin Blanc bring lighter fruit, freshness and aromatic lift to the range." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve white wines chilled and fuller reds slightly cool, in a glass with space for the aromas." },
      { subheading: "Food", description: "Pair a fresh white with grilled vegetables or tomato pasta; pair a fuller red with tandoori chicken or roast lamb." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled vegetables", "tomato pasta", "tandoori chicken", "roast lamb"] }],
    whyChoose: "A Nashik wine range that gives drinkers several grape and colour styles to explore with familiar food.",
    faqs: [
      { question: "What is Vinsura?", answer: "Vinsura is an Indian winery based at Vinchur Wine Park in the Nashik Valley." },
      { question: "Which grapes are used by Vinsura?", answer: "The range includes Cabernet Sauvignon, Zinfandel, Syrah, Sauvignon Blanc and Chenin Blanc." },
    ],
    finalVerdict: "Vinsura is a Nashik wine range worth exploring by grape and colour, from fresh whites to darker, fuller reds.",
    metaTitle: "Vinsura Wine Guide | BevOry",
    metaDescription: "Vinsura wine guide with Nashik grapes, serving ideas, Indian pairings, and city-level prices on BevOry.",
  },
  "suntory-toki": {
    description: "Suntory Toki is a Japanese blended whisky combining spirit from Yamazaki, Hakushu and Chita. Green apple, basil and honey lead a light profile designed to remain lively in a highball.",
    story: "Suntory introduced Toki in 2016, connecting its malt and grain distilleries in a new blend. The whisky draws on Japan's highball tradition, where cold soda, plenty of ice and food are central to the serve.",
    tastingNotes: [
      { title: "Apple and basil", description: "Green apple and basil open the aroma, with honey underneath." },
      { title: "Citrus and mint", description: "Grapefruit, green grapes, peppermint and thyme bring a bright herbal palate." },
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
    finalVerdict: "Toki is a fresh Japanese blend whose apple, citrus and herbs make a crisp highball alongside grilled food.",
    metaTitle: "Suntory Toki World Whisky Guide | BevOry",
    metaDescription: "Suntory Toki whisky guide with style notes, serving ideas, Japanese food pairings, and city-level prices on BevOry.",
  },
  hakushu: {
    description: "Hakushu is a Japanese single malt from Suntory's forest distillery in Yamanashi, established in 1973. The house style combines fresh herbs, green fruit and gentle smoke.",
    story: "Keizo Saji chose Hakushu after searching Japan for water suited to aromatic whisky. The distillery stands near Mount Kaikomagatake in the Southern Japanese Alps, a different setting from Suntory's Yamazaki home.",
    tastingNotes: [
      { title: "Distiller's Reserve aroma", description: "Peppermint, melon and cucumber give a fresh, green opening." },
      { title: "Distiller's Reserve palate", description: "Yuzu, grapefruit and lemon thyme lead into a subtly smoky finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Begin neat in a clean tulip glass; add a few drops of water only if the bottle benefits from it." },
      { subheading: "Food", description: "Pair with sushi, grilled fish, roasted vegetables, or mild cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "grilled fish", "roasted vegetables", "mild cheese"] }],
    whyChoose: "A Japanese single malt with a distinctive forest-distillery identity and a range of expressions to explore.",
    faqs: [
      { question: "What is Hakushu?", answer: "Hakushu is a Japanese single malt whisky made at House of Suntory's Hakushu distillery." },
      { question: "Is Hakushu smoky?", answer: "Its Distiller's Reserve has a gentle smoky finish beneath citrus, mint and green-fruit notes." },
    ],
    finalVerdict: "Hakushu is a fresh, herbal Japanese malt for drinkers who enjoy citrus and mint with a restrained smoky finish.",
    metaTitle: "Hakushu Single Malt Whisky Guide | BevOry",
    metaDescription: "Hakushu single malt guide with Japanese style, serving ideas, food pairings, and city-level prices on BevOry.",
  },
  ao: {
    description: "Ao is a world whisky from House of Suntory, blending whiskies from Ireland, Scotland, America, Canada and Japan. Smoke and fruit meet creamy sweetness, cinnamon and oak.",
    story: "Ao is presented as a multi-region blend, and its five-sided bottle reflects the five whisky regions used in the blend's story. The result is a whisky designed to show more than one regional style in a single pour.",
    tastingNotes: [
      { title: "Fruit and smoke", description: "Fruit and creamy sweetness meet smoke, cinnamon and woody notes." },
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
    description: "Kakubin is a Japanese blended whisky from Suntory, with a light citrus-and-biscuit profile suited to a highball. Lemon and green apple meet hazelnut, butter cookie and toasted almond.",
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
    whyChoose: "Kakubin keeps lemon, apple and toasted biscuit flavours present even in a cold soda highball.",
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
    story: "Booker Noe introduced Knob Creek in 1992 as part of the Small Batch Bourbon Collection. It revived his idea of a full-flavoured, pre-Prohibition-style bourbon with substantial oak character.",
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
      { question: "Who created Knob Creek?", answer: "Booker Noe created Knob Creek for the Small Batch Bourbon Collection in 1992." },
    ],
    finalVerdict: "Knob Creek is a robust bourbon choice, with the 9 Year Old reference bringing oak, vanilla, and caramel into a full-bodied pour.",
    metaTitle: "Knob Creek Bourbon Guide | BevOry",
    metaDescription: "Knob Creek Bourbon guide with oak and caramel notes, serving ideas, food pairings, and city-level prices on BevOry.",
  },
  "basil-haydens": {
    description: "Basil Hayden's is an American bourbon brand from Suntory Global Spirits with a high-rye style. Its core 80-proof profile lists charred oak, vanilla, caramel, dried fruit, brown sugar, and black pepper.",
    story: "Booker Noe introduced Basil Hayden in 1992 as part of the Small Batch Bourbon Collection. It offered a lighter, more gently spicy contrast to the collection's fuller-bodied bourbons.",
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
      { title: "Vanilla and caramel", description: "Vanilla and caramel form a rounded centre, with fruit and almond adding lighter detail." },
      { title: "Style", description: "The double-mellowed process gives the core whiskey a smooth, rounded direction for neat or mixed serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve a small pour neat or over ice, or use it in a balanced whiskey highball." },
      { subheading: "Food", description: "Pair with barbecue, fried chicken, smoked cheese, or pecan pie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue", "fried chicken", "smoked cheese", "pecan pie"] }],
    whyChoose: "Two charcoal-mellowing stages give Gentleman Jack a rounded Tennessee whiskey style for neat or simple mixed serves.",
    faqs: [
      { question: "What is Gentleman Jack?", answer: "Gentleman Jack is a Tennessee whiskey made at the Jack Daniel Distillery." },
      { question: "What makes Gentleman Jack distinct?", answer: "It is charcoal mellowed twice, once before ageing and once afterwards." },
    ],
    finalVerdict: "Gentleman Jack is a rounded Tennessee whiskey with caramel, vanilla and almond, suited to a neat pour or a simple highball.",
    metaTitle: "Gentleman Jack Whiskey Guide | BevOry",
    metaDescription: "Gentleman Jack whiskey guide with double-mellowed style, food pairings, serving ideas, and city-level prices on BevOry.",
  },
  courvoisier: {
    description: "Courvoisier is a Cognac house founded in 1828 in Jarnac, at the heart of France's Cognac region. Its collection spans VS, VSOP, XO, and other releases with distinct blend and maturation details.",
    story: "Courvoisier's house identity is rooted in Jarnac and in the blending of eaux-de-vie from Cognac. The VSOP reference brings together eaux-de-vie from four crus with stone fruit, jasmine, and gingerbread notes.",
    tastingNotes: [
      { title: "VSOP fruit and flowers", description: "Mature stone fruit meets a fragrant jasmine aroma." },
      { title: "VSOP spice", description: "Gingerbread brings warm baking spice to the fruit-led palate." },
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
    story: "Don Francisco Javier Sauza launched Hornitos in 1950 on Mexican Independence Day. Reposado became central to a family that now also includes fresh Plata and richer aged expressions.",
    tastingNotes: [
      { title: "Reposado fruit", description: "Agave and green apple bring a fresh opening with herbal detail." },
      { title: "Reposado oak", description: "Light wood adds roundness without burying the agave, followed by a warm finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a measured pour in a Margarita or Paloma, or taste the exact style neat from a small glass." },
      { subheading: "Food", description: "Pair with salsa, grilled corn, tacos, or citrus-led salads." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["salsa", "grilled corn", "tacos", "citrus-led salads"] }],
    whyChoose: "A blue-agave tequila family where style and maturation make the difference between a fresh, rested, and oak-led pour.",
    faqs: [
      { question: "What is Hornitos?", answer: "Hornitos is a tequila brand from the Sauza family with products made from blue agave in Jalisco, Mexico." },
      { question: "What is Hornitos Reposado?", answer: "It is a double-distilled tequila made from 100% blue agave and rested in American white oak." },
    ],
    finalVerdict: "Hornitos is best explored by tequila style and maturation, from fresh agave-led Plata to the softer oak of Reposado.",
    metaTitle: "Hornitos Tequila Guide | BevOry",
    metaDescription: "Hornitos Tequila guide with blue-agave style, serving ideas, food pairings, and city-level prices on BevOry.",
  },
};
