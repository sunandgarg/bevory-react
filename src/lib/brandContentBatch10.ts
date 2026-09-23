import type { BrandPublicContent } from "./brandContentBatch01.js";

// Batch 10 follows docs/editorial/brand-content-system-prompt.md.
// Public fields contain consumer copy only; research and audit notes stay outside this file.
export const BRAND_CONTENT_BATCH_10: Record<string, BrandPublicContent> = {
  martini: {
    description: "MARTINI is an Italian vermouth and sparkling wine house founded in Turin in 1863. Bacardi owns the brand, whose range includes Rosso, Bianco, Extra Dry, Fiero, Riserva Speciale, Asti and Prosecco.",
    story: "Alessandro Martini, Luigi Rossi and Teofilo Sola established the business in Turin, then moved production to Pessione in 1864. Rossi's work with wine, herbs and botanicals helped define the house vermouth recipes that carried MARTINI beyond Italy.",
    tastingNotes: [
      { title: "Vermouth styles", description: "Rosso leans herbal, bittersweet and spice-led, Bianco is softer and vanilla-toned, and Extra Dry puts citrus, herbs and a drier finish first." },
      { title: "Sparkling wines", description: "Asti is aromatic and sweet with ripe grape and floral notes, while Prosecco is drier, lighter and driven by apple, pear and citrus." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour vermouth chilled over ice with soda and a citrus garnish, or use the correct style in a Martini, Negroni or Americano. Serve Asti and Prosecco well chilled." },
      { subheading: "Food", description: "Pair Extra Dry with grilled prawns, Rosso with mushroom tikka, Bianco with chilli paneer, and sparkling bottles with fried starters or fruit tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled prawns", "mushroom tikka", "chilli paneer", "fried starters", "fruit tart"] }],
    whyChoose: "A historic Italian house covering aperitif vermouth, cocktail staples and sparkling wines in one recognisable range.",
    faqs: [
      { question: "What kind of drink is MARTINI?", answer: "MARTINI makes Italian vermouth, bitter aperitifs and sparkling wines including Asti and Prosecco." },
      { question: "Does opened MARTINI vermouth need refrigeration?", answer: "Yes. Vermouth is wine-based, so refrigerate it after opening and use it while its aromas remain fresh." },
    ],
    finalVerdict: "MARTINI is a practical choice for aperitifs and classic cocktails, with sparkling bottles for lighter food-led occasions.",
    metaTitle: "MARTINI Vermouth and Sparkling Wine Guide | BevOry",
    metaDescription: "Explore MARTINI vermouth and sparkling wine styles, cocktail serves, Indian food pairings and city-level prices on BevOry.",
    logoUrl: "https://d2z05otmbim3z8.cloudfront.net/wp-content/uploads/sites/12/2025/03/19165227/FY26_Martini_BVI_Assets_Logo_FullTrademark_Small-1.png",
  },
  "royal-challenge": {
    description: "Royal Challenge is an Indian blended whisky brand from United Spirits. The name also appears on Indian lager, giving the range separate whisky and beer expressions for different serves.",
    story: "Royal Challenge grew as a familiar premium Indian whisky label before becoming part of the United Spirits portfolio. Its whisky is built from Indian grain spirit and Scotch whiskies, while Royal Challenge beer is produced as a distinct lager rather than a whisky extension.",
    tastingNotes: [
      { title: "Whisky style", description: "Vanilla, cream and mild wood lead the blended whisky profile, supported by grain sweetness and gentle spice." },
      { title: "Beer style", description: "The lager labels are malt-led and refreshing, with light grain sweetness, mild bitterness and a clean cold finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste the whisky neat before adding water, ice or cold soda. Chill the lager well and pour it into a clean beer glass with room for a compact head." },
      { subheading: "Food", description: "Pair the whisky with seekh kebab, pepper chicken or roasted peanuts, and the lager with chilli paneer, biryani or fried fish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "pepper chicken", "roasted peanuts", "chilli paneer", "fried fish"] }],
    whyChoose: "A widely recognised Indian name offering a soft blended whisky profile and a separate chilled lager option.",
    faqs: [
      { question: "Who makes Royal Challenge whisky?", answer: "Royal Challenge whisky is made by United Spirits in India." },
      { question: "Is Royal Challenge whisky or beer?", answer: "The name is used for both, but Royal Challenge whisky and Royal Challenge lager are separate drinks with different ingredients and serving styles." },
    ],
    finalVerdict: "Royal Challenge suits drinkers seeking an approachable Indian blend, while its lager offers a colder, lighter match for spicy food.",
    metaTitle: "Royal Challenge Whisky and Beer Guide | BevOry",
    metaDescription: "Explore Royal Challenge whisky and beer styles, serving ideas, Indian pairings and city-level prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/royal-challenge.webp",
  },
  york: {
    description: "York is an Indian winery established by the Gurnani family near Gangapur Dam in Nashik. Now part of Sula Vineyards, it produces still and sparkling wines from grapes grown in Maharashtra's Nashik region.",
    story: "Lilo Gurnani founded York with his sons Ravi and Kailash, naming the winery from the initials of Yogita, Ravi and Kailash. Sula Vineyards acquired York in 2021, bringing labels such as Arros, H Block and York Sparkling Brut into its wider portfolio.",
    tastingNotes: [
      { title: "White and sparkling wines", description: "Chenin Blanc, Sauvignon Blanc and Chardonnay bring citrus, orchard fruit and tropical notes, while the sparkling wines add fresh acidity and fine bubbles." },
      { title: "Red and rose wines", description: "Shiraz and Cabernet-led wines show dark fruit, pepper and measured oak, while rose styles keep red berries and freshness at the centre." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill white, rose and sparkling wines, and serve fuller reds slightly cool in a broad wine glass. Give structured reds a few minutes to open." },
      { subheading: "Food", description: "Pair Chenin Blanc with malai tikka, Sauvignon Blanc with grilled pomfret, rose with chilli prawns, and Shiraz-led reds with mutton seekh kebab." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["malai tikka", "grilled pomfret", "chilli prawns", "mutton seekh kebab", "mushroom galouti"] }],
    whyChoose: "A Nashik wine range that moves from fresh whites and sparkling wine to structured Indian reds.",
    faqs: [
      { question: "Where is York Winery?", answer: "York Winery is near Gangapur Dam in Nashik, Maharashtra." },
      { question: "Who owns York Winery?", answer: "Sula Vineyards acquired York Winery in 2021." },
    ],
    finalVerdict: "York gives Indian wine drinkers a useful Nashik range for comparing fresh whites, sparkling bottles and food-friendly reds.",
    metaTitle: "York Winery Nashik Wine Guide | BevOry",
    metaDescription: "Explore York Winery's Nashik wines, grape styles, serving advice, Indian food pairings and city-level prices on BevOry.",
    logoUrl: "https://assets.tastingbook.com/assets/medium/7eb0019373085d48995d54c2ce2ab26d.jpg",
  },
  "big-banyan": {
    description: "Big Banyan is an Indian wine brand founded by John Distilleries chairman Paul P. John. Its winery near Bengaluru produces Chenin Blanc, Sauvignon Blanc, Chardonnay, Rose, Merlot, Shiraz and Cabernet Sauvignon.",
    story: "Paul P. John created Big Banyan after developing an interest in wine during travel in Europe. Italian winemaker Lucio Matricardi shaped the early collection, and the first 2007 vintage introduced four varietal wines made for Indian tables.",
    tastingNotes: [
      { title: "White and rose wines", description: "The whites move from crisp citrus and herb notes to rounder tropical fruit, while the rose brings red berries and a fresh, dry finish." },
      { title: "Red wines", description: "Merlot is soft and plum-led, Shiraz adds pepper and darker fruit, and Cabernet Sauvignon brings cassis, firmer tannin and oak spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill whites and rose, and serve the reds slightly cool. Use a broad glass for Cabernet Sauvignon and Shiraz so their fruit and spice can open." },
      { subheading: "Food", description: "Pair Sauvignon Blanc with tandoori fish, Chardonnay with malai chicken, Rose with paneer tikka, and Shiraz or Cabernet with pepper lamb chops." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "malai chicken", "paneer tikka", "pepper lamb chops", "mushroom pasta"] }],
    whyChoose: "An Indian varietal wine range designed around familiar grapes and versatile pairings for local food.",
    faqs: [
      { question: "Who founded Big Banyan wines?", answer: "John Distilleries chairman Paul P. John founded Big Banyan." },
      { question: "Where is Big Banyan wine made?", answer: "Big Banyan operates a winery near Bengaluru and makes wine from grapes grown in Indian vineyards." },
    ],
    finalVerdict: "Big Banyan is a clear starting point for exploring Indian versions of familiar international grape varieties.",
    metaTitle: "Big Banyan Indian Wine Guide | BevOry",
    metaDescription: "Explore Big Banyan Indian wines, grape styles, serving advice, specific food pairings and city-level prices on BevOry.",
    logoUrl: "https://bigbanyanwines.com/Images/Logo/Logo.svg",
  },
  "black-dog": {
    description: "Black Dog is a blended Scotch whisky brand owned by Diageo and sold in India through United Spirits. Its range includes Black Reserve, Triple Gold Reserve and Millard's Private Reserve 14 Year Old.",
    story: "Walter Millard created the Black Dog blend in Scotland in 1883 while working for the wine and spirits merchant James MacKinlay. The brand later became closely associated with India, where United Spirits handles its local blending and market presence.",
    tastingNotes: [
      { title: "House style", description: "Orchard fruit, caramel, vanilla and gentle smoke sit over a soft grain base, with spice and oak building in the finish." },
      { title: "Mature expressions", description: "Older and richer bottles add dried fruit, toasted nuts, dark chocolate and more polished oak without losing the rounded blend character." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste a small pour neat first, then add water or one large cube. Black Reserve also works in a cold soda highball with a strip of lemon peel." },
      { subheading: "Food", description: "Pair with galouti kebabs, smoked chicken, roasted almonds, mature cheddar or orange dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "smoked chicken", "roasted almonds", "mature cheddar", "orange dark chocolate"] }],
    whyChoose: "A fruit-led blended Scotch family with familiar Indian availability and a step-up path into richer age-stated whisky.",
    faqs: [
      { question: "Is Black Dog an Indian whisky?", answer: "Black Dog is a blended Scotch whisky brand. United Spirits manages the brand in India, where selected products are locally blended from Scotch whisky components." },
      { question: "How should Black Dog whisky be served?", answer: "Try it neat first, then add a little water, one large cube or cold soda for a highball." },
    ],
    finalVerdict: "Black Dog suits drinkers who prefer rounded fruit, vanilla and mild smoke in an accessible blended Scotch style.",
    metaTitle: "Black Dog Blended Scotch Whisky Guide | BevOry",
    metaDescription: "Explore Black Dog Scotch history, tasting style, serving ideas, Indian food pairings and city-level bottle prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/black-dog.webp",
  },
  desmondji: {
    description: "DesmondJi is an Indian craft spirits brand founded by Desmond Nazareth under Agave India. Its range covers Indian agave spirits, mahua spirits, orange liqueur, cane spirit and Margarita blends.",
    story: "Desmond Nazareth founded Agave India in 2007 and launched the first DesmondJi agave spirit in 2011. The company distils in Andhra Pradesh using agave grown on the Deccan Plateau and works with tribal communities that collect mahua flowers.",
    tastingNotes: [
      { title: "Agave spirits", description: "Roasted agave, green herbs, pepper and earthy sweetness define the core spirits, with oak adding vanilla and spice in matured releases." },
      { title: "Mahua and liqueurs", description: "Mahua brings floral, fruit and earthy notes, while the orange liqueur and Margarita blends add citrus sweetness for measured cocktail use." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste agave and mahua spirits neat in a small glass, or use the agave spirit and orange liqueur in a balanced Margarita with fresh lime." },
      { subheading: "Food", description: "Pair agave spirit with tandoori prawns, mahua with pork sorpotel, orange liqueur with dark chocolate, and Margarita blends with chilli corn." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "pork sorpotel", "dark chocolate", "chilli corn", "grilled pineapple"] }],
    whyChoose: "An Indian distiller working with Deccan agave and mahua, two raw materials with a clear connection to the country's landscape and communities.",
    faqs: [
      { question: "Is DesmondJi tequila?", answer: "No. DesmondJi makes agave spirits in India; tequila is a protected Mexican designation." },
      { question: "What is mahua spirit?", answer: "Mahua spirit is distilled from fermented flowers of the mahua tree, a traditional ingredient used by several tribal communities in India." },
    ],
    finalVerdict: "DesmondJi offers a distinct Indian route into agave and mahua spirits, with useful bottles for neat tasting and citrus-led cocktails.",
    metaTitle: "DesmondJi Indian Agave and Mahua Guide | BevOry",
    metaDescription: "Explore DesmondJi agave and mahua spirits, cocktail serves, Indian food pairings and city-level prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/desmondji.webp",
  },
  fantini: {
    description: "Fantini is an Italian wine group founded in Ortona, Abruzzo, in 1994 by Filippo Baccalaro, Valentino Sciotti and Camillo De Iulis. It works with grower partners across central and southern Italy to make regional wines under several labels.",
    story: "The founders built Fantini without relying on one large estate, instead forming long-term relationships with growers and local wineries. The group began in Abruzzo and expanded into regions including Puglia, Campania, Basilicata, Sicily and Tuscany.",
    tastingNotes: [
      { title: "Abruzzo reds and rose", description: "Montepulciano d'Abruzzo brings dark cherry, plum and spice, while Cerasuolo keeps brighter red fruit, freshness and a savoury edge." },
      { title: "White wines", description: "Trebbiano d'Abruzzo is light and citrus-led, while Pinot Grigio adds pear, apple and a clean mineral finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill white and rose wines, and serve Montepulciano slightly cool in a medium red-wine glass. Give fuller reds a few minutes to open." },
      { subheading: "Food", description: "Pair Trebbiano with grilled fish, Pinot Grigio with malai tikka, Cerasuolo with chilli prawns, and Montepulciano with lamb ragu or mushroom kebabs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "malai tikka", "chilli prawns", "lamb ragu", "mushroom kebabs"] }],
    whyChoose: "A broad Italian collection that makes regional grapes from Abruzzo and southern Italy easy to explore at the table.",
    faqs: [
      { question: "Where is Fantini wine from?", answer: "Fantini began in Ortona in Abruzzo and now produces wines with partners across several central and southern Italian regions." },
      { question: "Which Fantini wines suit Indian food?", answer: "Trebbiano works with grilled fish, Cerasuolo with chilli prawns, and Montepulciano d'Abruzzo with lamb or mushroom kebabs." },
    ],
    finalVerdict: "Fantini is a useful Italian range for comparing fresh Abruzzo whites and rose with darker, spice-led regional reds.",
    metaTitle: "Fantini Italian Wine Guide | BevOry",
    metaDescription: "Explore Fantini wines from Abruzzo and southern Italy, tasting notes, Indian pairings and city-level prices on BevOry.",
    logoUrl: "https://static.fantiniwines.com/media/2022/11/Logo-fantini.png",
  },
  "four-cousins": {
    description: "Four Cousins is a South African wine brand made by Van Loveren Family Vineyards in Robertson Valley. Its range covers natural sweet red, white and rose wines alongside dry varietal bottles and sparkling styles.",
    story: "The brand takes its name from four Retief cousins, two sets of brothers who joined the family wine business. Their faces and names became central to Four Cousins as it grew from Robertson into one of South Africa's widely recognised wine labels.",
    tastingNotes: [
      { title: "Natural sweet range", description: "The red, white and rose wines are fruit-forward and gently sweet, with ripe berry, peach and floral notes depending on the colour." },
      { title: "Dry wines", description: "Sauvignon Blanc brings citrus and tropical freshness, while Merlot offers plum, soft tannin and mild spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill the sweet white and rose wines well, serve sweet red lightly cool, and pour dry Merlot slightly below room temperature." },
      { subheading: "Food", description: "Pair sweet rose with spicy chaat, sweet red with barbecue chicken, Sauvignon Blanc with grilled prawns, and Merlot with lamb kebabs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["spicy chaat", "barbecue chicken", "grilled prawns", "lamb kebabs", "fruit tart"] }],
    whyChoose: "An approachable South African range offering both easy-drinking sweet wines and familiar dry varietal styles.",
    faqs: [
      { question: "Where is Four Cousins wine made?", answer: "Four Cousins is made by Van Loveren Family Vineyards in Robertson Valley, South Africa." },
      { question: "Is Four Cousins wine sweet?", answer: "Several core Four Cousins wines are natural sweet styles, while the wider range also includes dry varietal and sparkling wines." },
    ],
    finalVerdict: "Four Cousins suits drinkers who enjoy fruit-forward sweet wine and want an easy path toward drier South African bottles.",
    metaTitle: "Four Cousins South African Wine Guide | BevOry",
    metaDescription: "Explore Four Cousins sweet and dry wines, serving ideas, Indian food pairings and city-level bottle prices on BevOry.",
    logoUrl: "https://static.wixstatic.com/media/2afcc7_d1449c780e584193a1b0d11b57269172~mv2.png/v1/fill/w_161,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO.png",
  },
  "jim-beam": {
    description: "Jim Beam is a Kentucky straight bourbon whiskey brand owned by Suntory Global Spirits. The range includes the flagship white-label bourbon, Black, Double Oak, Devil's Cut and fruit or honey flavoured expressions.",
    story: "Jacob Beam sold his first barrel of corn whiskey in Kentucky in 1795, beginning a family distilling tradition that continued through Prohibition and multiple generations. The current brand carries James B. Beam's name and remains rooted in Clermont, Kentucky.",
    tastingNotes: [
      { title: "Classic bourbon", description: "Vanilla, caramel, toasted oak and light pepper define the flagship bourbon, with corn sweetness and a dry, warm finish." },
      { title: "Across the range", description: "Black and Double Oak deepen caramel and char, Devil's Cut adds firmer oak, and the flavoured bottles bring apple, honey or orange to the bourbon base." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste the bourbon neat or over one large cube, use it in an Old Fashioned or Whiskey Sour, and pair flavoured bottles with dry soda or ginger ale." },
      { subheading: "Food", description: "Pair classic Jim Beam with barbecue ribs, Double Oak with pepper chicken, Apple with pork kebabs, and Honey with pecan pie or roasted nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue ribs", "pepper chicken", "pork kebabs", "pecan pie", "roasted nuts"] }],
    whyChoose: "A historic Kentucky bourbon range with a clear oak, caramel and vanilla profile across classic and flavoured expressions.",
    faqs: [
      { question: "Where is Jim Beam made?", answer: "Jim Beam is made in Kentucky, with the brand's principal distilling home in Clermont." },
      { question: "What makes Jim Beam a bourbon?", answer: "Its flagship whiskey uses a corn-led grain recipe, is distilled in the United States and matures in new charred oak barrels." },
    ],
    finalVerdict: "Jim Beam is a dependable bourbon choice for drinkers who enjoy caramel, vanilla, oak and straightforward whiskey cocktails.",
    metaTitle: "Jim Beam Kentucky Bourbon Guide | BevOry",
    metaDescription: "Explore Jim Beam bourbon history, tasting notes, cocktail serves, Indian food pairings and city-level prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/jim-beam.webp",
  },
  jodhpur: {
    description: "Jodhpur is a gin brand owned by Spain's Beveland Distillers and produced in England. Its collection includes London Dry, Reserve, Spicy, Mandore and Baori expressions inspired by Indian botanicals and flavour references.",
    story: "Beveland developed Jodhpur Gin around the Blue City's visual identity and India's long botanical history. Production takes place at an English distillery, while variants such as Mandore and Baori use names and botanicals linked to Rajasthan and India.",
    tastingNotes: [
      { title: "London Dry and Reserve", description: "The core gin is juniper-led with citrus, herbs and balsamic notes, while Reserve adds vanilla, cocoa and softer oak-toned spice." },
      { title: "Indian-inspired variants", description: "Mandore pushes bitter and exotic citrus, Spicy adds pepper warmth, and Baori layers floral notes from lotus, jasmine, marigold, lavender and rose." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use London Dry in a gin and tonic or dry Martini, pair Mandore with a restrained citrus garnish, and serve Baori with neutral tonic so its floral character remains clear." },
      { subheading: "Food", description: "Pair London Dry with tandoori prawns, Spicy with pepper chicken, Mandore with citrus salad, and Baori with malai tikka or rose pistachio kulfi." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "pepper chicken", "citrus salad", "malai tikka", "rose pistachio kulfi"] }],
    whyChoose: "A distinctive gin family that connects English distillation with citrus, spice and floral ideas drawn from India.",
    faqs: [
      { question: "Is Jodhpur Gin made in India?", answer: "No. Jodhpur Gin is produced in England by a brand owned by Spain-based Beveland Distillers." },
      { question: "What botanicals are used in Jodhpur Gin?", answer: "The core London Dry uses 13 botanicals, while variants add ingredients such as bitter orange, calamansi, pepper, lotus, jasmine, marigold and rose." },
    ],
    finalVerdict: "Jodhpur offers classic juniper, vivid citrus, pepper and floral styles for drinkers who want clear variation within one gin range.",
    metaTitle: "Jodhpur Gin Brand and Style Guide | BevOry",
    metaDescription: "Explore Jodhpur Gin's English production, Indian-inspired botanicals, serving ideas, food pairings and city prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/jodhpur.webp",
  },
};
