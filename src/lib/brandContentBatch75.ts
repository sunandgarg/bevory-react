import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_75 = [
  ["comte", "Comte", "France", "Red Wine", "pending-comte"],
  ["conciere", "Conciere", "United States", "Liqueurs", "pending-conciere"],
  ["constantino", "Constantino", "Portugal", "Brandy", "pending-constantino"],
  ["constantino-especial", "Constantino Especial", "Portugal", "Brandy", "pending-constantino-especial"],
  ["cool-woods", "Cool Woods", "Australia", "Wine", "pending-cool-woods"],
  ["cotton-mouth", "Cotton Mouth", "Chile", "Wine", "pending-cotton-mouth"],
  ["cosecha", "Cosecha", "Chile", "Wine", "pending-cosecha"],
  ["cotes-catalanes", "Cotes Catalanes", "France", "Wine", "pending-cotes-catalanes"],
  ["cotes-du-rhone", "Cotes Du Rhone", "France", "Red Wine", "pending-cotes-du-rhone"],
  ["county-club", "County Club", "India", "Made in India Whisky", "pending-county-club"],
] as const;

export const BRAND_LOGOS_BATCH_75: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_75: Record<string, string[]> = {
  comte: [
    "https://www.arbeau.com/welcome.html",
    "https://www.arbeau.com/wines.html",
    "https://www.wineenthusiast.com/buying-guide/vignobles-arbeau-2018-je-suis-a-boire-cot-malbec-comte-tolosan/",
    "https://www.bevory.in/agra/brand/comte",
  ],
  conciere: [
    "https://www.conciere.com/our-products",
    "https://www.conciere.com/about-us",
    "https://www.bevory.in/agra/brand/conciere",
  ],
  constantino: [
    "https://hgcimports.com/wp-content/uploads/2022/02/brandy-constantino.pdf",
    "https://portugaldutyfree.com/en/brands/constantino/",
    "https://www.bevory.in/agra/brand/constantino",
  ],
  "constantino-especial": [
    "https://hgcimports.com/wp-content/uploads/2022/02/brandy-constantino.pdf",
    "https://portugaldutyfree.com/en/brands/constantino/",
    "https://www.bevory.in/agra/brand/constantino-especial",
  ],
  "cool-woods": [
    "https://coolwoodswines.com/",
    "https://coolwoodswines.com/wines/shiraz/",
    "https://www.bevory.in/agra/brand/cool-woods",
  ],
  "cotton-mouth": [
    "https://www.vivino.com/US/en/cotton-mouth-merlot/w/6805845",
    "https://www.wine.com.br/vinhos/cotton-mouth-merlot-2021/prod27831.html",
    "https://www.livcheers.com/liquor/cotton-mouth-merlot-750ml",
    "https://www.bevory.in/agra/brand/cotton-mouth",
  ],
  cosecha: [
    "https://winedogam.com/wine/cosecha-cabernet-sauvignon",
    "https://www.bevory.in/agra/brand/cosecha",
  ],
  "cotes-catalanes": [
    "https://www.roussillon.wine/wp-content/uploads/2023/05/dossier-de-presse-2022-gb-_compressed.pdf",
    "https://www.bevory.in/agra/brand/cotes-catalanes",
  ],
  "cotes-du-rhone": [
    "https://www.cotesdurhone.com/en/appellations/terroir-and-grape-varieties",
    "https://www.vins-rhone.com/en/rhone-valley-vineyards/appellations",
    "https://www.bevory.in/agra/brand/cotes-du-rhone",
  ],
  "county-club": [
    "https://www.quickcompany.in/trademarks/5657860-county-club-deluxe-whisky",
    "https://www.livcheers.com/kota/liquor/county-club-deluxe-whisky-750ml",
    "https://www.bevory.in/agra/brand/county-club",
  ],
};

export const BRAND_CONTENT_BATCH_75: Record<string, BrandPublicContent> = {
  comte: {
    description: "Comte is listed on BevOry through Comte Tolosan Je Suis a Boire Cot, a French red wine tied to the IGP Comte Tolosan zone of South-West France. The wine style centres on Cot, the local name for Malbec.",
    story: "The strongest public match is Famille Arbeau, a South-West France wine family based at Labastide-Saint-Pierre near Toulouse and active since 1878. Their Comte Tolosan work sits among Fronton, Gaillac, Negrette, Braucol, Cot and accessible IGP wines shaped by the Tarn and Toulouse wine country.",
    tastingNotes: [
      { title: "Cot Fruit", description: "Blackcurrant, plum, violet and gentle pepper show the soft Malbec side of the bottle." },
      { title: "Fresh Tannins", description: "Moderate tannin and lively acidity keep the wine ready for food rather than heavy sipping." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass, around 14-16°C." },
      { subheading: "Food", description: "Pair with mutton seekh, roast chicken, mushroom pulao, grilled sausages or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "roast chicken", "mushroom pulao", "grilled sausages", "aged cheddar"] }],
    whyChoose: "Comte is a useful South-West French red for drinkers who enjoy softer Malbec fruit with everyday food.",
    faqs: [
      { question: "What grape is in Comte Tolosan Je Suis a Boire Cot?", answer: "Cot is the traditional South-West French name for Malbec." },
      { question: "Where is Comte Tolosan wine from?", answer: "Comte Tolosan is an IGP wine area in South-West France, around the wider Toulouse region." },
    ],
    finalVerdict: "Comte is a food-friendly French Malbec-style red for kebabs, roast dishes and relaxed dinners.",
    metaTitle: "Comte Tolosan Wine Guide | BevOry",
    metaDescription: "Explore Comte Tolosan Cot red wine notes, South-West France style, pairings and city prices on BevOry.",
  },
  conciere: {
    description: "Conciere is an American well-spirits and cordial brand listed on BevOry through Amaretto Conciere in 1 litre format. The wider Conciere range includes spirits, flavoured vodkas and cordials for bar cocktail use.",
    story: "Conciere is built around practical back-bar categories: vodka, rum, gin, brandy, tequila, whiskey, bourbon and sweet liqueurs. The Amaretto listing gives Indian shoppers a clear cocktail ingredient for almond-led drinks and dessert serves.",
    tastingNotes: [
      { title: "Amaretto Almond", description: "Almond, marzipan, vanilla and light caramel bring the classic amaretto sweetness." },
      { title: "Dessert Finish", description: "The finish is sweet and smooth, built for coffee, sour cocktails and creamy mixed drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, in an Amaretto Sour, with coffee, or in a dessert-style cream cocktail." },
      { subheading: "Food", description: "Pair with tiramisu, gulab jamun, almond biscotti, chocolate brownie or vanilla ice cream." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tiramisu", "gulab jamun", "almond biscotti", "chocolate brownie", "vanilla ice cream"] }],
    whyChoose: "Conciere is a practical amaretto option for cocktails, coffee serves and sweet dessert pairings.",
    faqs: [
      { question: "What Conciere product is listed on BevOry?", answer: "BevOry lists Amaretto Conciere in 1 litre format." },
      { question: "How do you use Conciere Amaretto?", answer: "Use it in an Amaretto Sour, with coffee, over ice, or in creamy dessert cocktails." },
    ],
    finalVerdict: "Conciere Amaretto is best for cocktail mixing, coffee drinks and almond-sweet dessert pairing.",
    metaTitle: "Conciere Amaretto Guide | BevOry",
    metaDescription: "Explore Conciere Amaretto notes, cocktail ideas, dessert pairings and city prices on BevOry.",
  },
  constantino: {
    description: "Constantino is a Portuguese brandy label listed on BevOry through Especial Constantino Fine Old Quality Brandy. Trade sheets identify the style as Brandy de Portugal, made for neat service or long mixed drinks.",
    story: "Constantino bottles often carry a long Portuguese brandy identity, including labels linked with Porto and an 1871 establishment mark. The style is wine-brandy driven, with ageing and blending used to build smoothness, colour and aroma.",
    tastingNotes: [
      { title: "Portuguese Brandy", description: "Raisin, caramel, dried apricot, vanilla and mellow oak spice shape the profile." },
      { title: "Long Drink Finish", description: "A smooth, sweet finish works neat after dinner or mixed with ice and juice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a snifter, over ice, or as a long drink with orange or apple juice." },
      { subheading: "Food", description: "Pair with bebinca, fruit cake, roasted cashews, dark chocolate or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["bebinca", "fruit cake", "roasted cashews", "dark chocolate", "smoked cheese"] }],
    whyChoose: "Constantino is a Portuguese brandy choice for drinkers who want dried-fruit warmth and easy long-drink flexibility.",
    faqs: [
      { question: "What is Constantino brandy?", answer: "Constantino is a Portuguese brandy listed on BevOry as Especial Constantino Fine Old Quality Brandy." },
      { question: "How should Constantino be served?", answer: "Serve it neat, over ice, or with juice as a long drink." },
    ],
    finalVerdict: "Constantino is a smooth Portuguese brandy for after-dinner pours, sweets and relaxed mixers.",
    metaTitle: "Constantino Brandy Guide | BevOry",
    metaDescription: "Explore Constantino Portuguese brandy notes, serving ideas, food pairings and city prices on BevOry.",
  },
  "constantino-especial": {
    description: "Constantino Especial is a Portuguese brandy entry listed on BevOry through Constantino Fine Old Quality Brandy. It sits in the Brandy de Portugal style, with 750 ml listings for Indian shoppers.",
    story: "The Constantino name is tied to Portuguese brandy heritage and older Porto-linked bottlings. Especial points to a smoother, traditional fine-old-brandy lane built for slow sipping, simple long drinks and dessert tables.",
    tastingNotes: [
      { title: "Fine Old Brandy", description: "Dried fruit, caramel, toasted sugar, vanilla and mellow spice give it a classic brandy profile." },
      { title: "Soft Sweetness", description: "The finish is rounded and gently sweet, making it comfortable neat or over ice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat after dinner, over ice, or with apple juice and a citrus wedge." },
      { subheading: "Food", description: "Pair with plum cake, gulab jamun, salted cashews, dark chocolate or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["plum cake", "gulab jamun", "salted cashews", "dark chocolate", "smoked cheese"] }],
    whyChoose: "Constantino Especial is a Portuguese brandy for drinkers who want soft dried-fruit sweetness and easy service.",
    faqs: [
      { question: "What type of brandy is Constantino Especial?", answer: "It is listed as Constantino Fine Old Quality Brandy from Portugal." },
      { question: "What food pairs with Constantino Especial?", answer: "Rich sweets, roasted nuts, dark chocolate and smoked cheese suit its mellow brandy style." },
    ],
    finalVerdict: "Constantino Especial is a relaxed Portuguese brandy for neat pours, ice serves and dessert pairing.",
    metaTitle: "Constantino Especial Brandy Guide | BevOry",
    metaDescription: "Explore Constantino Especial brandy notes, serving ideas, food pairings and city prices on BevOry.",
  },
  "cool-woods": {
    description: "Cool Woods is an Australian wine label from Eden Valley in South Australia's Barossa region. BevOry listings include Cool Woods Shiraz and Cool Woods Chardonnay in 750 ml format.",
    story: "The brand name comes from old gum trees around the Eden Valley vineyard, where cool-climate fruit is supported by grapes from other South Australian regions. Cool Woods uses this regional mix to keep whites crisp and reds fruit-driven.",
    tastingNotes: [
      { title: "Shiraz", description: "Berry fruit, plum, dark chocolate, liquorice and gentle oak spice shape the red wine." },
      { title: "Chardonnay", description: "Apple, citrus, melon and light creaminess give the white wine a clean South Australian profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled; pour Shiraz slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair Shiraz with lamb kebab or barbecue paneer; match Chardonnay with grilled fish, malai tikka or creamy pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb kebab", "barbecue paneer", "grilled fish", "malai tikka", "creamy pasta"] }],
    whyChoose: "Cool Woods is a clear South Australian wine pick for comparing ripe Shiraz with crisp Chardonnay.",
    faqs: [
      { question: "Where is Cool Woods wine from?", answer: "Cool Woods is from Eden Valley in South Australia, with fruit also sourced from other South Australian regions." },
      { question: "Which Cool Woods wines are listed on BevOry?", answer: "BevOry includes Cool Woods Shiraz and Cool Woods Chardonnay." },
    ],
    finalVerdict: "Cool Woods is a flexible Australian wine choice for red-meat dinners, creamy dishes and chilled white-wine serves.",
    metaTitle: "Cool Woods Wine Guide | BevOry",
    metaDescription: "Explore Cool Woods Shiraz and Chardonnay notes, South Australia pairings and city prices on BevOry.",
  },
  "cotton-mouth": {
    description: "Cotton Mouth is a Chilean wine label listed on BevOry through Merlot, Cabernet Sauvignon, rose and Sauvignon Blanc bottles. Public wine listings connect Cotton Mouth Merlot with Chile's Central Valley, one of the country's key everyday-wine regions.",
    story: "The Cotton Mouth range is built around direct varietal names, which makes it easy to compare red, white and rose styles. Merlot and Cabernet Sauvignon lead the red-wine side, while Sauvignon Blanc and rose keep the chilled-service lane simple.",
    tastingNotes: [
      { title: "Merlot", description: "Plum, cherry, black fruit and soft spice give the Merlot a smooth, medium-bodied profile." },
      { title: "Cabernet And Whites", description: "Cabernet brings darker berry fruit and firmer tannin; Sauvignon Blanc keeps the range crisp and citrus-led." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc and rose chilled; pour Merlot and Cabernet slightly cool in standard red-wine glasses." },
      { subheading: "Food", description: "Pair reds with butter chicken, lamb seekh or tomato pasta; match Sauvignon Blanc with fish tikka, herbed paneer or citrus salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter chicken", "lamb seekh", "tomato pasta", "fish tikka", "herbed paneer"] }],
    whyChoose: "Cotton Mouth is a straightforward Chilean wine pick for comparing Merlot, Cabernet, Sauvignon Blanc and rose on one page.",
    faqs: [
      { question: "Which Cotton Mouth wines are listed on BevOry?", answer: "BevOry includes Cotton Mouth Merlot, Cabernet Sauvignon, rose and Sauvignon Blanc entries." },
      { question: "Where is Cotton Mouth Merlot from?", answer: "Public wine listings place Cotton Mouth Merlot in Chile's Central Valley." },
    ],
    finalVerdict: "Cotton Mouth is a practical Chilean wine label for casual dinners, chilled whites and soft red-wine serves.",
    metaTitle: "Cotton Mouth Wine Guide | BevOry",
    metaDescription: "Explore Cotton Mouth Merlot, Cabernet, rose and Sauvignon Blanc notes, pairings and city prices on BevOry.",
  },
  cosecha: {
    description: "Cosecha is a Chilean varietal wine label listed on BevOry through Cabernet Sauvignon, Chardonnay and Merlot bottles. The name means harvest in Spanish, and the range works as a simple grape-led wine set.",
    story: "Public product references place Cosecha Cabernet Sauvignon in Chile's Central Valley, a large region known for accessible Cabernet, Merlot and Chardonnay. The BevOry range follows that same everyday-wine logic: clear grape names, 750 ml bottles and straightforward food pairing.",
    tastingNotes: [
      { title: "Cabernet And Merlot", description: "Blackcurrant, plum, cherry, herb and soft spice shape the red-wine side." },
      { title: "Chardonnay", description: "Apple, pear, citrus and a lightly creamy finish make the white wine easy with snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled and the reds slightly cool in standard wine glasses." },
      { subheading: "Food", description: "Pair reds with seekh kebab, butter chicken or mushroom pasta; pair Chardonnay with fish tikka or paneer malai." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "butter chicken", "mushroom pasta", "fish tikka", "paneer malai"] }],
    whyChoose: "Cosecha is a practical Chilean wine page for comparing Cabernet, Merlot and Chardonnay without fuss.",
    faqs: [
      { question: "Which Cosecha wines are listed on BevOry?", answer: "BevOry includes Cosecha Cabernet Sauvignon, Cosecha Chardonnay and Cosecha Merlot." },
      { question: "What food pairs with Cosecha Cabernet Sauvignon?", answer: "Seekh kebab, grilled lamb, butter chicken, hard cheese and mushroom dishes pair well." },
    ],
    finalVerdict: "Cosecha is an easy Chilean varietal-wine option for everyday dinners and simple grape comparison.",
    metaTitle: "Cosecha Wine Guide | BevOry",
    metaDescription: "Explore Cosecha Cabernet, Chardonnay and Merlot notes, pairings and city prices on BevOry.",
  },
  "cotes-catalanes": {
    description: "Cotes Catalanes is a French regional wine entry tied to the IGP Cotes Catalanes area of Roussillon, near the Pyrenees and Mediterranean. BevOry listings include Chardonnay, Cabernet Sauvignon and Merlot bottles.",
    story: "IGP Cotes Catalanes covers flexible red, white and rose wines from Catalan France, where warm sun, mountain influence and Mediterranean air shape the fruit. The region can use grapes such as Grenache, Carignan, Syrah, Merlot, Cabernet Sauvignon, Macabeu, Vermentino and Chardonnay.",
    tastingNotes: [
      { title: "Red Varietals", description: "Cabernet and Merlot lean toward black fruit, plum, herbs and smooth tannins." },
      { title: "Chardonnay", description: "Chardonnay brings citrus, orchard fruit and a rounder texture for chilled white-wine service." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled and reds slightly cool in standard wine glasses." },
      { subheading: "Food", description: "Pair reds with lamb chops, mushroom pasta or tandoori chicken; pair Chardonnay with grilled fish or malai tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "mushroom pasta", "tandoori chicken", "grilled fish", "malai tikka"] }],
    whyChoose: "Cotes Catalanes is useful for French varietal wines with Mediterranean fruit and familiar grape names.",
    faqs: [
      { question: "Where is Cotes Catalanes wine from?", answer: "Cotes Catalanes is an IGP wine area in Roussillon, southern France." },
      { question: "Which Cotes Catalanes bottles are listed on BevOry?", answer: "BevOry includes Cotes Catalanes Chardonnay, Cabernet Sauvignon and Merlot entries." },
    ],
    finalVerdict: "Cotes Catalanes is a warm-climate French wine choice for familiar red and white varietals.",
    metaTitle: "Cotes Catalanes Wine Guide | BevOry",
    metaDescription: "Explore Cotes Catalanes Chardonnay, Cabernet and Merlot notes, pairings and city prices on BevOry.",
  },
  "cotes-du-rhone": {
    description: "Cotes Du Rhone is a French red-wine entry tied to the AOC Cotes du Rhone appellation. The appellation stretches across parts of Ardeche, Drome, Gard, Loire, Rhone and Vaucluse in the Rhone Valley.",
    story: "Cotes du Rhone reds are commonly built around Grenache with Syrah and Mourvedre, especially in the southern Rhone. The style is known for ripe red fruit, spice, rounded tannins and broad food flexibility.",
    tastingNotes: [
      { title: "Rhone Red Fruit", description: "Raspberry, cherry, plum and black pepper sit at the centre of the red-wine profile." },
      { title: "GSM Structure", description: "Grenache warmth, Syrah spice and Mourvedre depth create a smooth, savoury finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass, around 15-17°C." },
      { subheading: "Food", description: "Pair with rogan josh, lamb kebab, roast chicken, ratatouille or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["rogan josh", "lamb kebab", "roast chicken", "ratatouille", "aged cheddar"] }],
    whyChoose: "Cotes Du Rhone is a classic French red-wine style for spice, fruit and reliable dinner pairing.",
    faqs: [
      { question: "What grapes are common in Cotes du Rhone red wine?", answer: "Grenache, Syrah and Mourvedre are the key grapes behind many Cotes du Rhone reds." },
      { question: "What food pairs with Cotes Du Rhone?", answer: "Lamb, roast chicken, rogan josh, grilled vegetables and aged cheeses work well." },
    ],
    finalVerdict: "Cotes Du Rhone is a dependable French red for spicy meat dishes, roasts and relaxed bistro-style meals.",
    metaTitle: "Cotes Du Rhone Wine Guide | BevOry",
    metaDescription: "Explore Cotes Du Rhone red wine notes, Grenache-Syrah style, pairings and city prices on BevOry.",
  },
  "county-club": {
    description: "County Club is an Indian whisky label listed on BevOry through County Club Deluxe Whisky in 750 ml format. Trademark records place County Club Deluxe Whisky in Class 33 for alcoholic beverages, with the mark linked to Globus Spirits Limited.",
    story: "County Club sits in the value-led Indian whisky lane, where simple service, local availability and familiar mixed-drink formats matter. The BevOry listing focuses on Deluxe Whisky, a practical bottle for whisky-soda, whisky-water and ice serves.",
    tastingNotes: [
      { title: "Indian Whisky Style", description: "Caramel, grain sweetness, light oak spice and dried-fruit notes give the whisky an easy mixed-drink profile." },
      { title: "Warm Finish", description: "Vanilla, toffee and cinnamon-like spice keep the finish rounded enough for ice or soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, water or soda; add a lime wedge for a sharper highball." },
      { subheading: "Food", description: "Pair with chicken pakora, masala peanuts, paneer tikka, egg bhurji or spicy potato wedges." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken pakora", "masala peanuts", "paneer tikka", "egg bhurji", "spicy potato wedges"] }],
    whyChoose: "County Club is a simple Indian whisky option for soda serves, casual snacks and local price comparison.",
    faqs: [
      { question: "What County Club product is listed on BevOry?", answer: "BevOry lists County Club Deluxe Whisky in 750 ml format." },
      { question: "How should County Club Deluxe Whisky be served?", answer: "It works best with ice, water or soda, especially alongside spicy Indian snacks." },
    ],
    finalVerdict: "County Club Deluxe Whisky is a straightforward Indian whisky for highballs, snack plates and everyday gatherings.",
    metaTitle: "County Club Whisky Guide | BevOry",
    metaDescription: "Explore County Club Deluxe Whisky notes, serving ideas, snack pairings and city prices on BevOry.",
  },
};
