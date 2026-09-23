import type { BrandPublicContent } from "./brandContentBatch01.js";

// Batch 04 completes the current expansion list with expression-aware public copy.
export const BRAND_CONTENT_BATCH_04: Record<string, BrandPublicContent> = {
  casamigos: {
    description: "Casamigos is a tequila and mezcal brand with expression-specific blanco, reposado, añejo, cristalino, and mezcal releases. Its tequila range uses 100% Blue Weber agave from Jalisco, with resting and maturation changing the final profile.",
    story: "Casamigos is built around a relaxed, cocktail-friendly approach to agave spirits. The range is easiest to understand from fresh blanco through oak-rested reposado and añejo, with mezcal bringing a separate smoky direction.",
    tastingNotes: [
      { title: "Blanco", description: "Citrus, vanilla, and sweet agave lead into a crisp, clean finish." },
      { title: "Rested styles", description: "Reposado brings caramel, cocoa, dried fruit, and spicy oak, while añejo moves toward vanilla, barrel spice, and deeper oak." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use blanco in a Margarita or Paloma, taste reposado or añejo neat, and keep mezcal for a slower smoky pour." },
      { subheading: "Food", description: "Pair with guacamole, grilled seafood, fresh salsa, or roasted peppers." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["guacamole", "grilled seafood", "fresh salsa", "roasted peppers"] }],
    whyChoose: "A broad agave range that makes the change from fresh citrus and agave to cocoa, fruit, oak, and smoke easy to explore.",
    faqs: [
      { question: "What is Casamigos?", answer: "Casamigos is a tequila and mezcal brand with blanco, reposado, añejo, cristalino, and mezcal expressions." },
      { question: "Which Casamigos style should I choose?", answer: "Choose blanco for a crisp agave-led cocktail, reposado for light oak and caramel, añejo for deeper barrel notes, or mezcal for smoke." },
    ],
    finalVerdict: "Casamigos is best explored by expression, moving from bright Blue Weber agave in blanco to oak, fruit, and smoke in the more mature styles.",
    metaTitle: "Casamigos Tequila Guide | BevOry",
    metaDescription: "Casamigos tequila guide with blanco, reposado and añejo notes, cocktail serves, food pairings, and city prices on BevOry.",
  },
  bumbu: {
    description: "Bumbu is a Caribbean rum brand whose flagship rum is distilled and blended in Barbados. The range combines rum with a warm, spiced character suited to slow pours, ice, and restrained cocktails.",
    story: "Bumbu draws on Caribbean rum tradition and the historic idea of blending rum with local fruit and spice. Its Barbados connection gives the flagship a clear island identity, while other expressions should be read by their individual label.",
    tastingNotes: [
      { title: "Style", description: "Warm spice, gentle sweetness, and rounded rum depth shape the flagship direction." },
      { title: "Texture", description: "A soft, smooth feel makes it approachable over ice while keeping enough flavour for a simple mixed serve." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try a measured pour over ice, or lengthen it with soda or ginger beer without adding unnecessary sweetness." },
      { subheading: "Food", description: "Pair with banana desserts, dark chocolate, grilled pineapple, or spiced nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["banana desserts", "dark chocolate", "grilled pineapple", "spiced nuts"] }],
    whyChoose: "A Barbados-linked rum with a warm, spiced profile that works neatly over ice and alongside tropical or chocolate desserts.",
    faqs: [
      { question: "What is Bumbu?", answer: "Bumbu is a Caribbean rum brand whose flagship rum is distilled and blended in Barbados." },
      { question: "How should I serve Bumbu rum?", answer: "Start with a small pour over ice, or use a measured amount with soda or ginger beer." },
    ],
    finalVerdict: "Bumbu brings Barbados rum tradition and warm spice to the glass, with an easy role in ice-led and dessert-friendly serves.",
    metaTitle: "Bumbu Rum Guide | BevOry",
    metaDescription: "Bumbu rum guide with Barbados style, tasting notes, serving ideas, food pairings, and city-level prices on BevOry.",
  },
  "chairmans-reserve": {
    description: "Chairman's Reserve is a rum brand from Saint Lucia Distillers. Its original blend combines Coffey and pot-still rums, with additional ageing in ex-bourbon barrels and a published profile of raisin, honey, vanilla, tropical fruit, walnut, and soft spice.",
    story: "The brand is rooted in Saint Lucia's rum-making tradition and in the work of Saint Lucia Distillers. Its range rewards comparison by blend, still, cask, and maturation rather than by colour alone.",
    tastingNotes: [
      { title: "Original blend", description: "Sweet raisins, cigar tobacco, amber honey, and vanilla lead into grilled tropical fruit and candied walnut." },
      { title: "Finish", description: "Soft spice and oak carry the flavour into a long, warming finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste a measured pour neat or over one large cube, then use a lighter expression in a balanced rum cocktail." },
      { subheading: "Food", description: "Pair with grilled meats, roasted banana, dark chocolate, or spiced dishes." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled meats", "roasted banana", "dark chocolate", "spiced dishes"] }],
    whyChoose: "A Saint Lucian rum range with pot-still and Coffey-still depth, ex-bourbon influence, and a clear dark-fruit and spice profile.",
    faqs: [
      { question: "What is Chairman's Reserve?", answer: "Chairman's Reserve is a rum brand made by Saint Lucia Distillers in Saint Lucia." },
      { question: "What does Chairman's Reserve taste like?", answer: "The original blend is published with raisin, honey, vanilla, tropical fruit, walnut, tobacco, and soft spice notes." },
    ],
    finalVerdict: "Chairman's Reserve is a rich Saint Lucian rum for drinkers who enjoy dark fruit, honey, vanilla, oak, and soft spice in a slow pour.",
    metaTitle: "Chairman's Reserve Rum Guide | BevOry",
    metaDescription: "Chairman's Reserve rum guide with Saint Lucian style, tasting notes, food pairings, serving ideas, and city prices on BevOry.",
  },
  "dead-mans-fingers": {
    description: "Dead Man's Fingers is a rum brand born inside the Rum and Crab Shack in St Ives, Cornwall. Its lineup includes spiced, white, mango, passion fruit, pineapple, cherry, banana, and coconut expressions.",
    story: "The brand began with a spiced rum inspired by the food and flavours around a Cornish seafood restaurant. Its style is deliberately flavour-led, with saffron cake, Pedro Ximénez ice cream, vanilla, cinnamon, nutmeg, and orange in the published spiced profile.",
    tastingNotes: [
      { title: "Spiced", description: "Saffron cake and Pedro Ximénez ice cream sit beside creamy caramel, vanilla, cinnamon, nutmeg, and orange." },
      { title: "Flavoured range", description: "Fruit and coconut expressions shift the balance toward mango, passion fruit, pineapple, cherry, banana, or coconut sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill and pour over ice, or use a simple mixer that lets the stated fruit or spice profile remain clear." },
      { subheading: "Food", description: "Pair with barbecue, fried chicken, chocolate desserts, or spiced nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue", "fried chicken", "chocolate desserts", "spiced nuts"] }],
    whyChoose: "A flavour-led rum collection for drinkers who want spiced, tropical fruit, or coconut expressions rather than one fixed rum style.",
    faqs: [
      { question: "What is Dead Man's Fingers?", answer: "Dead Man's Fingers is a rum brand that began at the Rum and Crab Shack in St Ives, Cornwall." },
      { question: "What flavours are available?", answer: "The published range includes spiced, white, mango, passion fruit, pineapple, cherry, banana, and coconut expressions." },
    ],
    finalVerdict: "Dead Man's Fingers is a playful, flavour-led rum range, with the spiced bottle bringing saffron cake, vanilla, citrus, and baking spice to the glass.",
    metaTitle: "Dead Man's Fingers Rum Guide | BevOry",
    metaDescription: "Dead Man's Fingers rum guide with spiced and fruit styles, serving ideas, food pairings, and city prices on BevOry.",
  },
  pussers: {
    description: "Pusser's is a Caribbean rum brand associated with the British Virgin Islands and naval-style rum tradition. Its bottlings are expression-specific, ranging from fuller sipping rums to classic cocktail-friendly styles.",
    story: "Pusser's is closely linked with the Painkiller, the official cocktail of the British Virgin Islands. That connection makes the brand a natural fit for tropical serves, while the individual rum should guide the sweetness, strength, and garnish.",
    tastingNotes: [
      { title: "House direction", description: "Fuller molasses, oak, dried fruit, and warm spice can shape the darker rum direction." },
      { title: "Cocktail role", description: "The profile works particularly well with pineapple, coconut, orange, and nutmeg in a balanced tropical serve." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try a modest pour over ice, or build a Painkiller-style drink with measured rum, pineapple, coconut, orange, and nutmeg." },
      { subheading: "Food", description: "Pair with grilled seafood, barbecue, salted caramel, or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled seafood", "barbecue", "salted caramel", "dark chocolate"] }],
    whyChoose: "A Caribbean rum house with a strong naval-era identity and a natural place in rich, fruit-led tropical cocktails.",
    faqs: [
      { question: "What is Pusser's?", answer: "Pusser's is a Caribbean rum brand associated with the British Virgin Islands and naval-style rum tradition." },
      { question: "What cocktail is associated with Pusser's?", answer: "Pusser's is closely associated with the Painkiller, a tropical drink featuring rum, pineapple, coconut, orange, and nutmeg." },
    ],
    finalVerdict: "Pusser's is a natural choice for fuller Caribbean rum pours and rich tropical cocktails built around pineapple, coconut, and spice.",
    metaTitle: "Pusser's Rum Guide | BevOry",
    metaDescription: "Pusser's rum guide with Caribbean style, Painkiller serves, food pairings, serving ideas, and city-level prices on BevOry.",
  },
  "sailor-jerry": {
    description: "Sailor Jerry is a spiced Caribbean rum brand developed from research into maritime rum traditions. Its published flavour profile centres on almond and vanilla with cassia and cinnamon, giving it a bold, smooth cocktail style.",
    story: "The brand honours Norman 'Sailor Jerry' Collins, the American tattoo artist known for precise nautical designs. Its rum recipe follows the old practice of using natural spices to give Caribbean rum a richer and more distinctive character.",
    tastingNotes: [
      { title: "Aroma", description: "Vanilla and cinnamon lead with a warm, aromatic spice character." },
      { title: "Palate", description: "Almond, vanilla, cassia, and cinnamon create a smooth, balanced spiced-rum finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a measured pour with cola, ginger beer, or citrus, and keep any extra sweetener modest." },
      { subheading: "Food", description: "Pair with barbecue, ginger desserts, grilled pineapple, or spiced snacks." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue", "ginger desserts", "grilled pineapple", "spiced snacks"] }],
    whyChoose: "A clearly spiced Caribbean rum with vanilla, almond, cassia, and cinnamon that holds its shape in simple mixed drinks.",
    faqs: [
      { question: "What is Sailor Jerry?", answer: "Sailor Jerry is a spiced Caribbean rum brand inspired by maritime rum traditions and Norman 'Sailor Jerry' Collins." },
      { question: "What does Sailor Jerry taste like?", answer: "The published profile includes almond, vanilla, cassia, and cinnamon." },
    ],
    finalVerdict: "Sailor Jerry is a bold, vanilla-and-spice-led rum for measured serves with cola, ginger, citrus, or grilled food.",
    metaTitle: "Sailor Jerry Spiced Rum Guide | BevOry",
    metaDescription: "Sailor Jerry spiced rum guide with vanilla and cinnamon notes, cocktail serves, food pairings, and city prices on BevOry.",
  },
  "michelob-ultra": {
    description: "Michelob ULTRA is an American light lager with a clean, crisp, refreshing profile and subtle citrus direction. Its beer style, pack format, and local strength should be checked on the bottle or can available in each city.",
    story: "Michelob ULTRA is built around a lighter lager style for easy, chilled drinking. Its restrained flavour makes temperature, carbonation, and food pairing more important than elaborate serving rituals.",
    tastingNotes: [
      { title: "Aroma", description: "Light grain and subtle citrus notes lead into a clean lager impression." },
      { title: "Finish", description: "Crisp carbonation and a refreshing, restrained finish keep the beer food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a clean beer glass or directly from the pack, following the local label." },
      { subheading: "Food", description: "Pair with burgers, grilled corn, fresh salads, or crispy starters." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["burgers", "grilled corn", "fresh salads", "crispy starters"] }],
    whyChoose: "A clean, crisp light lager that works well when you want a chilled, uncomplicated beer with casual food.",
    faqs: [
      { question: "What is Michelob ULTRA?", answer: "Michelob ULTRA is an American light lager with a clean, crisp, refreshing style." },
      { question: "How should I serve Michelob ULTRA?", answer: "Serve it well chilled in a clean glass or directly from the pack, and check the local label for the exact format." },
    ],
    finalVerdict: "Michelob ULTRA is a crisp, light lager for chilled casual serves, especially alongside burgers, grilled food, and fresh salads.",
    metaTitle: "Michelob ULTRA Beer Guide | BevOry",
    metaDescription: "Michelob ULTRA beer guide with light lager style, serving ideas, food pairings, and city-level prices on BevOry.",
  },
  "goose-island": {
    description: "Goose Island is a Chicago beer brand with a range that includes IPA, session IPA, hazy IPA, and other beer styles. Its flagship Goose IPA balances English-style malt with bold hop flavour and a drinkable finish.",
    story: "Goose Island began in Chicago, and the original Goose IPA was first brewed there in 1990. The brand's collection is best explored by beer style, from balanced IPA bitterness to fruit-forward hazy releases and seasonal beers.",
    tastingNotes: [
      { title: "Goose IPA", description: "English-style malt meets bold hops, with citrus and fruit character around a firm but drinkable bitterness." },
      { title: "Broader range", description: "Session and hazy IPAs can bring a lighter body or softer tropical fruit, while other releases move into different malt and yeast styles." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill to suit the beer style and pour into a clean glass with room for aroma and head." },
      { subheading: "Food", description: "Pair with pizza, fried chicken, spiced starters, or aged cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pizza", "fried chicken", "spiced starters", "aged cheese"] }],
    whyChoose: "A Chicago beer range that makes hop style the starting point, from a balanced flagship IPA to softer, fruit-forward variations.",
    faqs: [
      { question: "What is Goose Island?", answer: "Goose Island is a Chicago beer brand known for its IPA and a wider range of beer styles." },
      { question: "What does Goose IPA taste like?", answer: "The flagship balances English-style malt with bold hop flavour, citrus and fruit character, and a drinkable bitterness." },
    ],
    finalVerdict: "Goose Island is a strong starting point for exploring American IPA, with Goose IPA bringing malt balance, hop flavour, and a clean food-friendly finish.",
    metaTitle: "Goose Island Beer Guide | BevOry",
    metaDescription: "Goose Island beer guide with IPA styles, tasting notes, food pairings, serving ideas, and city-level prices on BevOry.",
  },
};
