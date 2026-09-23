import type { BrandPublicContent } from "./brandContentBatch01.js";

// Batch 03 keeps public copy consumer-facing and leaves expression-specific facts to product pages.
export const BRAND_CONTENT_BATCH_03: Record<string, BrandPublicContent> = {
  sauza: {
    description: "Sauza is a Mexican tequila house with more than 150 years of history in Jalisco, the home of blue Weber agave. Its range includes blanco and reposado styles with fresh agave, herbal, citrus, and light oak directions.",
    story: "Casa Sauza's story began in Jalisco, where the blue agave used for tequila has long shaped the region's drink culture. The house is a useful starting point for comparing fresh, rested, and cocktail-led tequila styles.",
    tastingNotes: [
      { title: "Blanco style", description: "Fresh blue-agave character with bright herbal and citrus notes." },
      { title: "Reposado style", description: "Soft citrus and agave meet a light wood note with a warm finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste a small pour neat, then use a measured amount in a Margarita or Paloma." },
      { subheading: "Food", description: "Pair with chilli paneer, grilled prawns, fresh salsa, or roasted peppers." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "grilled prawns", "fresh salsa", "roasted peppers"] }],
    whyChoose: "A long-established Jalisco tequila house with fresh and lightly rested styles that work equally well neat or in classic agave cocktails.",
    faqs: [
      { question: "What is Sauza?", answer: "Sauza is a Mexican tequila house associated with Jalisco and blue Weber agave." },
      { question: "Which Sauza style should I try first?", answer: "Choose blanco for a fresher agave-led pour or reposado for softer citrus and light oak; check the exact bottle label for current details." },
    ],
    finalVerdict: "Sauza offers a clear route into Jalisco tequila, from fresh agave and citrus in blanco to softer wood in reposado.",
    metaTitle: "Sauza Tequila Guide | BevOry",
    metaDescription: "Sauza tequila guide with Jalisco style, serving ideas, food pairings, and city-level prices on BevOry.",
  },
  "tres-generaciones": {
    description: "Tres Generaciones is a Mexican tequila label made from 100% blue agave. Its Plata, Reposado, Anejo, and Cristalino expressions use different resting or maturation approaches, so each bottle brings its own profile.",
    story: "The brand traces its family story to Don Cenobio Sauza and La Perseverancia, founded in 1873. The name reflects three generations of tequila-making tradition and a range that moves from clear, triple-distilled Plata to oak-rested expressions.",
    tastingNotes: [
      { title: "Plata", description: "Clear, fresh, and agave-led, with triple distillation shaping a clean style." },
      { title: "Oak-rested styles", description: "Reposado, Anejo, and Cristalino bring more fruit, softness, oak, or a polished finish depending on the bottle." },
    ],
    howToEnjoy: [
      { subheading: "Compare", description: "Taste Plata neat first, then compare the rested style in a small glass or a measured agave cocktail." },
      { subheading: "Food", description: "Pair with ceviche, grilled prawns, fresh salsa, or citrus desserts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["ceviche", "grilled prawns", "fresh salsa", "citrus desserts"] }],
    whyChoose: "A 100% blue-agave range with a clear expression ladder, making the change from fresh Plata to oak-rested tequila easy to follow.",
    faqs: [
      { question: "What is Tres Generaciones?", answer: "Tres Generaciones is a Mexican tequila label made from 100% blue agave." },
      { question: "What does the name Tres Generaciones refer to?", answer: "The name refers to the family tequila-making story connected with Don Cenobio Sauza and La Perseverancia, founded in 1873." },
    ],
    finalVerdict: "Tres Generaciones is a good choice for comparing clear, rested, and oak-shaped 100% blue-agave tequila styles.",
    metaTitle: "Tres Generaciones Tequila Guide | BevOry",
    metaDescription: "Tres Generaciones tequila guide with 100% blue agave styles, food pairings, serving ideas, and city prices on BevOry.",
  },
  dusse: {
    description: "D'USSÉ is a French Cognac brand with VSOP and XO expressions. The range moves from woody, cinnamon, and floral notes in VSOP to ripe fruit, dark chocolate, and walnut in XO.",
    story: "D'USSÉ gives Cognac drinkers a contemporary house style while keeping the expression category central. VSOP and XO are different starting points, so the bottle's category should guide the pour and pairing.",
    tastingNotes: [
      { title: "VSOP", description: "Woody notes layered with cinnamon and floral aromas." },
      { title: "XO", description: "Ripe blackberry and apricot lead into dark chocolate, walnut, and a balanced finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a tulip glass for a small neat pour, or choose a younger style for a measured Sidecar-style cocktail." },
      { subheading: "Food", description: "Pair with dark chocolate, roast duck, dried fruit, or aged cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "roast duck", "dried fruit", "aged cheese"] }],
    whyChoose: "A Cognac range with a clear contrast between the cinnamon and floral direction of VSOP and the darker fruit and walnut notes of XO.",
    faqs: [
      { question: "What is D'USSÉ?", answer: "D'USSÉ is a French Cognac brand with VSOP, XO, and other expression-specific releases." },
      { question: "Is D'USSÉ VSOP the same as D'USSÉ XO?", answer: "No. VSOP and XO are distinct Cognac categories with different flavour and maturation profiles." },
    ],
    finalVerdict: "D'USSÉ is best explored by category, from the floral and cinnamon-led VSOP to the darker fruit and chocolate notes of XO.",
    metaTitle: "D'USSÉ Cognac Guide | BevOry",
    metaDescription: "D'USSÉ Cognac guide with VSOP and XO tasting notes, serving ideas, food pairings, and city prices on BevOry.",
  },
  cazadores: {
    description: "Cazadores is a Mexican tequila brand with blanco, reposado, and aged expressions. Its pages are best read by tequila style, maturation, bottle size, and the exact local label.",
    story: "Cazadores belongs to the Jalisco tequila tradition and offers a broad route through fresh agave-led and oak-influenced styles. The expression name matters because resting and maturation change the balance of agave, fruit, spice, and wood.",
    tastingNotes: [
      { title: "Blanco", description: "A fresher tequila direction where clean agave and bright citrus can lead." },
      { title: "Rested styles", description: "Reposado and aged expressions bring a softer texture with more fruit, spice, and oak from time in wood." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try blanco neat or in a Margarita, and use a rested expression for a slower pour or a richer Paloma." },
      { subheading: "Food", description: "Pair with tacos, grilled vegetables, citrus salad, or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tacos", "grilled vegetables", "citrus salad", "smoked cheese"] }],
    whyChoose: "A tequila range that lets drinkers compare fresh agave with the softer fruit, spice, and oak of rested expressions.",
    faqs: [
      { question: "What is Cazadores?", answer: "Cazadores is a Mexican tequila brand with blanco, reposado, and aged styles." },
      { question: "How should I choose a Cazadores bottle?", answer: "Start with blanco for fresh agave, reposado for light oak, or an aged style for a fuller and softer pour; check the exact label for details." },
    ],
    finalVerdict: "Cazadores is a practical way to explore tequila by maturation, from fresh agave in blanco to softer oak-led styles.",
    metaTitle: "Cazadores Tequila Guide | BevOry",
    metaDescription: "Cazadores tequila guide with blanco and rested styles, food pairings, serving ideas, and city-level prices on BevOry.",
  },
  "st-germain": {
    description: "ST-GERMAIN is a French elderflower liqueur made with fresh elderflowers hand-picked once a year in late spring. The brand says up to 1,000 blossoms can contribute to a bottle, giving the liqueur its floral, bright cocktail role.",
    story: "The liqueur's character comes from a short annual elderflower harvest and a fresh floral style rather than a heavy spirit profile. It is designed to lift sparkling wine, soda, and citrus-led drinks with a measured pour.",
    tastingNotes: [
      { title: "Aroma", description: "Fresh elderflower leads with a bright floral and lightly fruity character." },
      { title: "Texture", description: "Soft sweetness and floral lift make it useful in sparkling and citrus-led serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a small measured amount in a spritz, highball, or sparkling-wine serve, keeping the rest of the drink dry." },
      { subheading: "Food", description: "Pair with goat cheese, fresh berries, citrus desserts, or light salads." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["goat cheese", "fresh berries", "citrus desserts", "light salads"] }],
    whyChoose: "A floral French liqueur that can add elderflower aroma and gentle sweetness to a carefully balanced drink.",
    faqs: [
      { question: "What is ST-GERMAIN?", answer: "ST-GERMAIN is a French elderflower liqueur made with fresh elderflowers harvested in late spring." },
      { question: "How should I use ST-GERMAIN?", answer: "Use a small measured amount in a spritz, highball, or sparkling serve and keep the other ingredients balanced." },
    ],
    finalVerdict: "ST-GERMAIN is a bright elderflower liqueur for floral spritzes, sparkling serves, and light food pairings.",
    metaTitle: "ST-GERMAIN Elderflower Liqueur Guide | BevOry",
    metaDescription: "ST-GERMAIN elderflower liqueur guide with floral notes, spritz serves, food pairings, and city prices on BevOry.",
  },
  "noilly-prat": {
    description: "Noilly Prat is a French vermouth made in Marseillan from dry white wines macerated with herbs and spices. Its range includes Original Dry, Extra Dry, Ambré, and Rouge, each suited to a different cocktail or table role.",
    story: "The house has more than 200 years of vermouth-making history in Marseillan. Its traditional process includes dodinage, the hand-stirring of botanicals, while Original Dry and Extra Dry also use outdoor ageing in the house's published method.",
    tastingNotes: [
      { title: "Dry styles", description: "Original Dry and Extra Dry bring herbal, spice, and dry wine-led directions for aperitif and Martini-style serves." },
      { title: "Ambré and Rouge", description: "The sweeter and darker styles move toward richer spice, fruit, and caramel-like notes." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill and serve a small measure, use it in a Martini-style drink, or lengthen it with soda and citrus." },
      { subheading: "Storage", description: "Because vermouth is wine-based, refrigerate an opened bottle and follow the label's freshness guidance." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["olives", "seafood", "soft cheese", "herbed vegetables"] }],
    whyChoose: "A classic French vermouth house with four distinct colour and style directions for aperitif, cocktail, and food-led serves.",
    faqs: [
      { question: "What is Noilly Prat?", answer: "Noilly Prat is a French vermouth house based in Marseillan, where dry white wines are macerated with herbs and spices." },
      { question: "How should opened Noilly Prat be stored?", answer: "Vermouth is wine-based, so keep an opened bottle chilled and use the label's freshness guidance." },
    ],
    finalVerdict: "Noilly Prat is a versatile French vermouth range, with dry, sweet, and darker styles that each suit a different serve.",
    metaTitle: "Noilly Prat Vermouth Guide | BevOry",
    metaDescription: "Noilly Prat vermouth guide with French styles, cocktail serves, storage tips, food pairings, and city prices on BevOry.",
  },
  "santa-teresa": {
    description: "Santa Teresa is a Venezuelan rum house whose 1796 expression uses a triple-ageing process with Solera casks and Solera vats. The result is a smooth, balanced rum suited to slow sipping and measured rum cocktails.",
    story: "Santa Teresa's rum-making history spans five generations in Venezuela. The house also runs Project Alcatraz, a social initiative that gives former gang members a path through work and rum production.",
    tastingNotes: [
      { title: "1796 style", description: "Triple ageing gives the rum a smooth, balanced direction with dark fruit, oak, and gentle spice." },
      { title: "Finish", description: "A measured neat pour brings the most detail, while ice softens the oak and spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste a small pour neat or over one large cube, then use lighter expressions in a restrained rum cocktail." },
      { subheading: "Food", description: "Pair with dark chocolate, grilled pineapple, roast pork, or spiced desserts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "grilled pineapple", "roast pork", "spiced desserts"] }],
    whyChoose: "A Venezuelan rum house with a distinctive triple-ageing approach and a range that works for both slow sipping and balanced cocktails.",
    faqs: [
      { question: "What is Santa Teresa 1796?", answer: "Santa Teresa 1796 is a Venezuelan rum made with a triple-ageing process involving Solera casks and Solera vats." },
      { question: "How should I serve Santa Teresa rum?", answer: "Try a small pour neat or over one large cube, and use the bottle's style as the guide for a cocktail." },
    ],
    finalVerdict: "Santa Teresa brings Venezuelan rum depth to the glass, with triple ageing that suits a smooth neat pour or a carefully balanced cocktail.",
    metaTitle: "Santa Teresa Rum Guide | BevOry",
    metaDescription: "Santa Teresa rum guide with Venezuelan style, triple ageing, food pairings, serving ideas, and city prices on BevOry.",
  },
  "perrier-jouet": {
    description: "Perrier-Jouët is a Champagne house founded in 1811 in the heart of the Champagne region. Its range includes Grand Brut, Blanc de Blancs, Blason Rosé, and Belle Époque cuvées with Chardonnay at the centre of the house style.",
    story: "The house's identity is closely linked with Epernay and its long focus on Chardonnay. The collection moves from non-vintage Champagne to prestige cuvées, so cuvée, vintage, colour, and dosage should guide every bottle choice.",
    tastingNotes: [
      { title: "House direction", description: "Chardonnay gives the wines a fresh, lifted line with citrus, orchard fruit, and fine floral detail." },
      { title: "Cuvée style", description: "Grand Brut, Blanc de Blancs, Rosé, and Belle Époque expressions vary in fruit, texture, maturity, and finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill thoroughly and pour into a flute or a clean white-wine glass, depending on the cuvée and the level of aroma you want." },
      { subheading: "Food", description: "Pair with oysters, soft cheese, fried starters, or fruit-led desserts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["oysters", "soft cheese", "fried starters", "fruit-led desserts"] }],
    whyChoose: "A historic Champagne house with a Chardonnay-led identity and a range that rewards comparison by cuvée and vintage.",
    faqs: [
      { question: "What is Perrier-Jouët?", answer: "Perrier-Jouët is a Champagne house founded in 1811 in France's Champagne region." },
      { question: "Which Perrier-Jouët style should I choose?", answer: "Start with the cuvée: Grand Brut for a classic house introduction, Blanc de Blancs for a Chardonnay-led style, or a Belle Époque bottle for a prestige expression." },
    ],
    finalVerdict: "Perrier-Jouët is a Chardonnay-led Champagne house where cuvée and vintage shape the most useful way to compare the range.",
    metaTitle: "Perrier-Jouët Champagne Guide | BevOry",
    metaDescription: "Perrier-Jouët Champagne guide with Chardonnay style, cuvée notes, food pairings, and city-level prices on BevOry.",
  },
  "grand-marnier": {
    description: "Grand Marnier is a French liqueur made by blending refined French Cognac with exotic bitter orange liqueur. The house has worked with Cognac and orange since 1880, with Cordon Rouge as its best-known expression.",
    story: "Grand Marnier was built around the meeting of Cognac and bitter orange, giving the liqueur a clear role in cocktails, desserts, and careful after-dinner serves. The collection also includes richer and more mature expressions beyond Cordon Rouge.",
    tastingNotes: [
      { title: "Aroma", description: "Bright bitter orange sits over warm Cognac, with spice and dried-fruit depth." },
      { title: "Texture", description: "Rounded sweetness and oak-led Cognac give the liqueur a long, warming finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a measured pour in a Margarita or Sidecar-style drink, or serve carefully over ice after dinner." },
      { subheading: "Food", description: "Pair with dark chocolate, orange desserts, roast duck, or aged cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "orange desserts", "roast duck", "aged cheese"] }],
    whyChoose: "A distinctive orange-and-Cognac liqueur with enough structure for cocktails and enough depth for a small after-dinner pour.",
    faqs: [
      { question: "What is Grand Marnier?", answer: "Grand Marnier is a French liqueur made by blending French Cognac with bitter orange liqueur." },
      { question: "How is Grand Marnier used?", answer: "Use a measured amount in a Margarita or Sidecar-style cocktail, or serve a small pour over ice." },
    ],
    finalVerdict: "Grand Marnier combines bitter orange and French Cognac in a versatile liqueur for cocktails, desserts, and slow after-dinner pours.",
    metaTitle: "Grand Marnier Liqueur Guide | BevOry",
    metaDescription: "Grand Marnier liqueur guide with orange and Cognac notes, cocktail serves, food pairings, and city prices on BevOry.",
  },
  frangelico: {
    description: "Frangelico is an Italian hazelnut liqueur with a rich nut-led flavour, sweet golden taste, and smooth texture. Its profile makes it useful in dessert cocktails, coffee serves, and small pours over ice.",
    story: "Frangelico brings Italian hazelnut character to the liqueur shelf rather than relying on a neutral fruit or citrus profile. The bottle is most useful when its nutty sweetness is balanced with coffee, chocolate, citrus, or soda.",
    tastingNotes: [
      { title: "Aroma", description: "Roasted hazelnut leads with a warm, dessert-like sweetness." },
      { title: "Palate", description: "Smooth texture and nutty depth sit comfortably beside coffee, chocolate, and light citrus." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour a small chilled measure, serve over ice with fresh lime, or add a measured amount to coffee and dessert cocktails." },
      { subheading: "Food", description: "Pair with tiramisu, dark chocolate, vanilla ice cream, or roasted nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tiramisu", "dark chocolate", "vanilla ice cream", "roasted nuts"] }],
    whyChoose: "A smooth Italian hazelnut liqueur that gives coffee, dessert, and after-dinner serves a clear nut-led identity.",
    faqs: [
      { question: "What is Frangelico?", answer: "Frangelico is an Italian hazelnut liqueur with a sweet golden taste and smooth texture." },
      { question: "How should I serve Frangelico?", answer: "Try it chilled, over ice with fresh lime, with soda, or in a measured coffee or dessert cocktail." },
    ],
    finalVerdict: "Frangelico is an easy-to-place Italian hazelnut liqueur for dessert cocktails, coffee, ice, and small after-dinner pours.",
    metaTitle: "Frangelico Hazelnut Liqueur Guide | BevOry",
    metaDescription: "Frangelico hazelnut liqueur guide with tasting notes, serving ideas, dessert pairings, and city-level prices on BevOry.",
  },
};
