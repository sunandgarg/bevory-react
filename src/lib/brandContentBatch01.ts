export type BrandPublicNote = {
  title?: string;
  subheading?: string;
  description: string;
};

export type BrandPublicPairing = {
  title: string;
  items: string[];
};

export type BrandPublicFaq = {
  question: string;
  answer: string;
};

export type BrandPublicContent = {
  description: string;
  story: string;
  tastingNotes: BrandPublicNote[];
  howToEnjoy: BrandPublicNote[];
  pairingIdeas: BrandPublicPairing[];
  whyChoose: string;
  faqs: BrandPublicFaq[];
  finalVerdict: string;
  metaTitle: string;
  metaDescription: string;
  logoUrl?: string;
};

// Batch 01 is deliberately explicit so its public fields can be refreshed together.
// Unknown product-level facts stay out of brand-level copy.
export const BRAND_CONTENT_BATCH_01: Record<string, BrandPublicContent> = {
  "old-admiral": {
    description: "Old Admiral is an Indian brandy from Radico Khaitan, launched in 2002. The brand is positioned around a rich profile and an aromatic finish.",
    story: "Radico Khaitan introduced Old Admiral in 2002 as part of its Indian brandy range. It remains a familiar Indian label for drinkers who prefer a warm, aromatic after-dinner pour.",
    tastingNotes: [
      { title: "Aroma and style", description: "Rich brandy character with an aromatic finish." },
      { title: "Character", description: "Warm fruit and gentle sweetness suit a relaxed after-dinner pour." },
    ],
    howToEnjoy: [
      { subheading: "Simple pour", description: "Serve a measured pour in a small brandy glass, with water alongside." },
      { subheading: "Food", description: "Try it with tandoori chicken, seekh kebab, or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Indian pairings", items: ["tandoori chicken", "seekh kebab", "dark chocolate"] }],
    whyChoose: "A straightforward Indian brandy with a rich, aromatic style and an easy after-dinner serve.",
    faqs: [
      { question: "What is Old Admiral?", answer: "Old Admiral is an Indian brandy from Radico Khaitan." },
      { question: "How should I serve Old Admiral?", answer: "Try a small pour in a brandy glass, with water alongside, or pair it with tandoori chicken and dark chocolate." },
    ],
    finalVerdict: "Old Admiral is a warm, aromatic Indian brandy that works well neat, with water, or alongside rich grilled food.",
    metaTitle: "Old Admiral Brandy Guide | BevOry",
    metaDescription: "Old Admiral brandy guide with tasting style, Indian pairings, serving ideas, and city-level prices on BevOry.",
  },
  "regal-talon": {
    description: "Regal Talon is a semi-deluxe Indian whisky from Radico Khaitan. It is a simple, approachable entry in the company's domestic whisky range.",
    story: "Regal Talon sits in Radico Khaitan's Indian whisky range and carries a semi-deluxe positioning. Its straightforward style suits familiar neat, water, or soda serves.",
    tastingNotes: [
      { title: "Style", description: "The published profile identifies Regal Talon as a semi-deluxe Indian whisky but does not publish a technical aroma or palate grid." },
      { title: "Serve", description: "Its uncomplicated style is suited to a small neat pour, water, or a simple soda serve." },
    ],
    howToEnjoy: [
      { subheading: "Start neat", description: "Begin with a small neat pour, then add water or soda to taste." },
      { subheading: "Food", description: "Pair it with tandoori tikka, masala peanuts, or smoked paneer." },
    ],
    pairingIdeas: [{ title: "Indian pairings", items: ["tandoori tikka", "masala peanuts", "smoked paneer"] }],
    whyChoose: "A simple starting point for exploring a semi-deluxe Indian whisky style with familiar food.",
    faqs: [
      { question: "What is Regal Talon?", answer: "Regal Talon is a semi-deluxe Indian whisky from Radico Khaitan." },
      { question: "How should I drink Regal Talon?", answer: "Start with a small neat pour, then try water or soda to find the balance you prefer." },
    ],
    finalVerdict: "Regal Talon is a straightforward Indian whisky for drinkers who prefer a familiar neat, water, or soda serve.",
    metaTitle: "Regal Talon Whisky Guide | BevOry",
    metaDescription: "Regal Talon whisky guide with style notes, Indian pairings, serving ideas, and city-level prices on BevOry.",
  },
  whytehall: {
    description: "Whytehall is an Indian brandy from Radico Khaitan. Its published profile centres on a warm, full-bodied style and a lingering finish.",
    story: "Whytehall is part of Radico Khaitan's Indian brandy range. Its public presentation centres on warmth, body, and a lasting finish, making it suited to slow, food-led serves.",
    tastingNotes: [
      { title: "Body", description: "Warm and full-bodied, with a lingering finish." },
      { title: "Style", description: "A rounded brandy profile that suits a small neat pour or a restrained highball." },
    ],
    howToEnjoy: [
      { subheading: "Controlled serve", description: "Use a rocks glass for a small pour, or build a restrained highball." },
      { subheading: "Food", description: "Try it with tandoori chicken, pepper kebabs, or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "pepper kebabs", "aged cheddar"] }],
    whyChoose: "Its warm, full-bodied character makes Whytehall a natural choice for brandy drinkers who enjoy a lingering finish.",
    faqs: [
      { question: "What category is Whytehall?", answer: "Whytehall is an Indian brandy from Radico Khaitan." },
      { question: "How should I serve Whytehall?", answer: "Use a rocks glass for a small pour, or build a restrained highball with a light mixer." },
    ],
    finalVerdict: "Whytehall is a warm, full-bodied Indian brandy that suits a slow neat pour, a light highball, and savoury grilled food.",
    metaTitle: "Whytehall Brandy Guide | BevOry",
    metaDescription: "Whytehall brandy guide with producer context, Indian pairings, serving ideas, and city-level prices on BevOry.",
  },
  "pluton-bay": {
    description: "Pluton Bay is an Indian premium rum from Radico Khaitan, made with aged cane juice and neutral spirits. Its dark colour and spicy profile give it a bold place in Indian rum.",
    story: "Pluton Bay brings a dark, spice-led rum style to Radico Khaitan's domestic range. The label suits drinkers who enjoy richer rum flavours with ginger, tropical fruit, and chocolate-led pairings.",
    tastingNotes: [
      { title: "Aroma", description: "Vanilla, caramel, tropical fruit, and oak." },
      { title: "Palate and finish", description: "Dark, spicy rum character with a smooth texture and a warming finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try a measured pour over ice or with a dry ginger mixer." },
      { subheading: "Food", description: "Pair with seekh kebab, grilled pineapple, or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "grilled pineapple", "dark chocolate"] }],
    whyChoose: "A dark, spicy Indian rum suited to ice, dry ginger, tropical fruit, and food-led pours.",
    faqs: [
      { question: "What is Pluton Bay?", answer: "Pluton Bay is an Indian premium rum from Radico Khaitan." },
      { question: "What pairs well with Pluton Bay?", answer: "Try it with seekh kebab, grilled pineapple, dark chocolate, or a dry ginger mixer." },
    ],
    finalVerdict: "Pluton Bay is a bold, dark Indian rum with vanilla, caramel, spice, and tropical depth for relaxed pours over ice or with ginger.",
    metaTitle: "Pluton Bay Rum Guide | BevOry",
    metaDescription: "Pluton Bay rum guide with cane-juice style, Indian pairings, serving ideas, and city-level prices on BevOry.",
  },
  ankahi: {
    description: "Ankahi Zaffran is a saffron-spiced liqueur introduced by Radico Khaitan in 2025. Its warm spice character suits small pours, dessert pairings, and balanced cocktails.",
    story: "Ankahi Zaffran is one of Radico Khaitan's newer liqueur launches. Saffron and spice sit at the centre of the drink, giving it a distinctly Indian flavour direction.",
    tastingNotes: [
      { title: "Aroma", description: "Warm saffron spice with a sweet liqueur character." },
      { title: "Style", description: "Rich, dessert-friendly, and best enjoyed in a measured pour." },
    ],
    howToEnjoy: [
      { subheading: "Small pour", description: "Serve a measured chilled pour or use a controlled amount in a cocktail." },
      { subheading: "Food", description: "Try it with pistachio kulfi, dark chocolate, or salted nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pistachio kulfi", "dark chocolate", "salted nuts"] }],
    whyChoose: "A saffron-spiced liqueur for small pours, dessert-led cocktails, and drinkers looking for an Indian flavour profile.",
    faqs: [
      { question: "What is Ankahi Zaffran?", answer: "Ankahi Zaffran is a saffron-spiced liqueur from Radico Khaitan." },
      { question: "How can I serve Ankahi Zaffran?", answer: "Serve it chilled in a small glass, or add a measured amount to a dessert cocktail with chocolate, coffee, or cream." },
    ],
    finalVerdict: "Ankahi Zaffran offers a warm saffron-spice profile that is most at home in small pours and dessert-led serves.",
    metaTitle: "Ankahi Zaffran Liqueur Guide | BevOry",
    metaDescription: "Ankahi Zaffran liqueur guide with saffron-spiced style, Indian pairings, serving ideas, and city-level prices on BevOry.",
  },
  "morpheus-blue": {
    description: "Morpheus Blue XO Premium Brandy is an Indian XO blended brandy from Radico Khaitan. Its published profile features dried fruit, nuts, mature oak, vanilla, caramel, and a long smooth finish.",
    story: "Morpheus Blue is part of Radico Khaitan's Morpheus brandy family and is presented as an XO blend. Its profile moves from dried fruit and nuts into mature oak, vanilla, and caramel.",
    tastingNotes: [
      { title: "Nose", description: "Intense fruity and floral notes with raisin, prune, and nuts." },
      { title: "Palate and finish", description: "Heavy-bodied and honeyed, with matured oak, vanilla, and caramel followed by a long smooth finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a small tulip or brandy glass; taste it neat before adding water." },
      { subheading: "Food", description: "Pair with dark chocolate, roasted nuts, or a mild fruit dessert." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "roasted nuts", "mild fruit dessert"] }],
    whyChoose: "Its dried-fruit, nut, oak, vanilla, and caramel profile gives Morpheus Blue a clear after-dinner identity.",
    faqs: [
      { question: "What is Morpheus Blue?", answer: "Morpheus Blue is an XO blended premium brandy from Radico Khaitan." },
      { question: "What does Morpheus Blue taste like?", answer: "Its published profile lists fruity and floral aromas, raisin, prune, nuts, oak, vanilla, caramel, and a long smooth finish." },
    ],
    finalVerdict: "Morpheus Blue is a rich XO brandy for slow sipping, with dried fruit, nuts, oak, vanilla, and caramel leading into a smooth finish.",
    metaTitle: "Morpheus Blue Brandy Guide | BevOry",
    metaDescription: "Morpheus Blue XO brandy guide with raisin, prune, oak and caramel notes, pairings, and city-level prices on BevOry.",
  },
  "four-seasons": {
    description: "Four Seasons is an Indian wine label with a range shaped by grape and colour. Its business history is connected with Grover Zampa Vineyards after the 2019 sale of the Four Seasons wine business and associated brands.",
    story: "Four Seasons grew as an Indian wine label and later became part of the wider Grover Zampa business story. The range is best explored through its different colours, grapes, and styles rather than one single flavour description.",
    tastingNotes: [
      { title: "Range", description: "Aroma, acidity, body, and fruit character change with the grape and colour of the wine." },
      { title: "Wine style", description: "Fresh whites, roses, and fuller reds each bring a different drinking experience to the table." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Follow the exact label temperature in a clean wine glass." },
      { subheading: "Food", description: "Start with tandoori fish, paneer tikka, tomato pasta, or roast chicken depending on the bottle style." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "paneer tikka", "tomato pasta", "roast chicken"] }],
    whyChoose: "A broad Indian wine label for exploring different colours and grape-led styles with familiar food.",
    faqs: [
      { question: "What is Four Seasons?", answer: "Four Seasons is an Indian wine label with a history connected to Four Seasons Wines and Grover Zampa." },
      { question: "How should I choose a Four Seasons wine?", answer: "Start with the colour and grape on the bottle, then match the wine to the food and the occasion." },
    ],
    finalVerdict: "Four Seasons is a versatile Indian wine label; choose by colour and grape, then serve it chilled or lightly aerated as the style requires.",
    metaTitle: "Four Seasons Wine Guide | BevOry",
    metaDescription: "Four Seasons wine guide with style, food pairings, serving ideas, and city-level prices on BevOry.",
  },
  zinzi: {
    description: "Zinzi is an Indian wine label associated with the Four Seasons wine business and its Grover Zampa portfolio history. It offers a simple entry point for exploring Indian wine styles.",
    story: "Zinzi belongs to the story of Indian wine labels that grew alongside the Four Seasons business. Its identity is best approached through the bottle in front of you, with the wine style shaped by its grape and colour.",
    tastingNotes: [
      { title: "Style", description: "The profile changes with the grape and colour of the bottle." },
      { title: "At the table", description: "Its food-friendly role suits light Indian starters, salads, and simple pasta dishes." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Follow the bottle label for chilling and glassware." },
      { subheading: "Food", description: "Try it with grilled paneer, light pasta, salads, or mild coastal seafood." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled paneer", "light pasta", "fresh salads", "mild coastal seafood"] }],
    whyChoose: "A low-key Indian wine label for easy food pairings and relaxed, everyday pours.",
    faqs: [
      { question: "What is Zinzi?", answer: "Zinzi is an Indian wine label associated with the Four Seasons wine business history." },
      { question: "What food pairs with Zinzi?", answer: "Try it with grilled paneer, light pasta, salads, or mild coastal seafood, depending on the wine style." },
    ],
    finalVerdict: "Zinzi is an easygoing Indian wine label that works best when chosen by colour and served with light, savoury food.",
    metaTitle: "Zinzi Wine Guide | BevOry",
    metaDescription: "Zinzi wine guide with Indian style context, food pairings, serving ideas, and city-level prices on BevOry.",
  },
  vallonne: {
    description: "Vallonne Vineyards is an Indian boutique wine estate founded by Shailendra Pai in 2009 at Kavnai, Igatpuri, near Nashik. Its range includes Chenin Blanc, Riesling, Viognier, Cabernet Sauvignon, Merlot, Syrah, Cabernet Sauvignon rose, and a sundried-grape dessert wine.",
    story: "Vallonne began in 2009 at Kavnai, Igatpuri, near Nashik, with a focus on estate-led Indian wines. The estate works across aromatic whites, classic red grapes, rose, and a dessert wine made from sundried grapes.",
    tastingNotes: [
      { title: "White wines", description: "Riesling and Viognier bring aromatic white-wine styles, while Chenin Blanc adds a fresh, versatile profile." },
      { title: "Red and dessert wines", description: "Cabernet Sauvignon, Merlot, and Syrah bring darker fruit and structure; the sundried-grape dessert wine belongs to a richer, sweeter style." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve white and rose wines chilled; give reds a little air in a wide wine glass." },
      { subheading: "Food", description: "Try with malai chicken tikka, tandoori crab, Thai curries, or mushroom dishes." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["malai chicken tikka", "tandoori crab", "Thai curries", "mushroom dishes"] }],
    whyChoose: "A focused Indian estate with aromatic whites, structured reds, rose, and a distinctive sundried-grape dessert wine.",
    faqs: [
      { question: "Where is Vallonne from?", answer: "Vallonne Vineyards is based at Kavnai, Igatpuri, near Nashik, India." },
      { question: "Which grapes are listed by the estate?", answer: "The estate lists Chenin Blanc, Riesling, Viognier, Cabernet Sauvignon, Merlot, and Syrah, along with rose and dessert-wine styles." },
    ],
    finalVerdict: "Vallonne is a thoughtful Indian wine estate for drinkers who want to explore aromatic whites, structured reds, and a distinctive dessert wine.",
    metaTitle: "Vallonne Wine Guide | BevOry",
    metaDescription: "Vallonne wine guide with Nashik grapes, tasting styles, Indian pairings, serving ideas, and city-level prices on BevOry.",
  },
  charosa: {
    description: "Charosa Vineyards is an Indian wine estate in Charosa village, in Nashik's Dindori sub-region, spread across about 230 acres. Its portfolio uses Pleasures, Selections, and Reserve tiers, with documented grapes including Tempranillo, Cabernet Sauvignon, Shiraz, Sauvignon Blanc, and Viognier.",
    story: "Charosa Vineyards is rooted in Charosa village in Nashik's Dindori sub-region. The estate organises its wines across Pleasures, Selections, and Reserve tiers, giving drinkers a clear path from approachable bottles to more detailed expressions.",
    tastingNotes: [
      { title: "Reserve Tempranillo", description: "Ripe red fruit with vanilla, coconut, and chocolate." },
      { title: "Reserve Cabernet Sauvignon", description: "Ripe fruit, black olive, vanilla, and balanced tannins." },
      { title: "Selection Viognier", description: "Floral and apricot character with a bright, aromatic finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and let Reserve reds breathe in a wide wine glass." },
      { subheading: "Food", description: "Try the whites with paneer tikka or grilled fish, and Reserve Tempranillo with lamb rogan josh." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["paneer tikka", "grilled fish", "lamb rogan josh"] }],
    whyChoose: "A Nashik estate with tiered wines, recognisable Indian grapes, and a broad range of red and white styles.",
    faqs: [
      { question: "Where is Charosa Vineyards?", answer: "The estate is in Charosa village in Nashik's Dindori sub-region." },
      { question: "What wine tiers are documented?", answer: "The portfolio documents Pleasures, Selections, and Reserve tiers." },
    ],
    finalVerdict: "Charosa is a strong choice for exploring Nashik wine, from floral Viognier and fresh whites to structured Reserve reds.",
    metaTitle: "Charosa Vineyards Wine Guide | BevOry",
    metaDescription: "Explore Charosa's Nashik wines, Reserve Tempranillo, estate grapes, Indian pairings, and city-level prices on BevOry.",
  },
};
