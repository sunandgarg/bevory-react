import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_91 = [
  ["iq-london", "IQ London", "India", "Gin", "pending-iq-london"],
  ["isla-de-maipo", "Isla De Maipo", "Chile", "Wine", "pending-isla-de-maipo"],
  ["itinera", "Itinera", "Italy", "Wine", "pending-itinera"],
  ["jack-10", "Jack 10", "India", "Indian Whisky", "pending-jack-10"],
  ["jacobs", "Jacobs", "Australia", "Wine", "pending-jacobs"],
  ["jacobson", "Jacobson", "Australia", "Wine", "pending-jacobson"],
  ["jaipuria", "Jaipuria", "India", "Gin", "pending-jaipuria"],
  ["jakob-steiner", "Jakob Steiner", "Germany", "Liqueurs", "pending-jakob-steiner"],
  ["jamaican", "Jamaican", "India", "Rum", "pending-jamaican"],
  ["james-brookes", "James Brookes", "United Kingdom", "Gin", "pending-james-brookes"],
] as const;

export const BRAND_LOGOS_BATCH_91: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_91: Record<string, string[]> = {
  "iq-london": [
    "https://mohanmeakin.com/gin/",
    "https://www.bevory.in/gurgaon/product/iq-london-dry-gin-488b7fe",
  ],
  "isla-de-maipo": [
    "https://www.nuevomundowines.com/",
    "https://www.vivino.com/en/wineries/isla-de-maipo",
    "https://www.bevory.in/gurgaon/product/isla-de-maipo-cabernet-sauvignon-14d5d76",
    "https://www.bevory.in/gurgaon/product/isla-de-maipo-sauvignon-blanc-7cce2c5",
  ],
  itinera: [
    "https://vinovoss.com/wine/itinera-montepulciano-d-abruzzo/",
    "https://bottleofitaly.com/products/itinera-prima-classe-montepulciano-di-abruzzo-dop-75cl",
    "https://www.bevory.in/gurgaon/product/itinera-montepulciano-d-abruzzo-a1ca267",
  ],
  "jack-10": [
    "https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2025/05/price-list-.pdf",
    "https://www.bevory.in/gurgaon/product/jack-10-reserve-whisky-9669738",
  ],
  jacobs: [
    "https://jacobscreek.com/",
    "https://www.bevory.in/gurgaon/brand/jacobs",
  ],
  jacobson: [
    "https://www.basilalliance.com/wine",
    "https://www.livcheers.com/delhi/liquor/jacobson-cabernet-shiraz-750ml",
    "https://www.bevory.in/gurgaon/product/jacobson-cabernet-shiraz-07c97f8",
  ],
  jaipuria: [
    "https://pourbud.com/drinks/jaipuria-dry-gin",
    "https://www.livcheers.com/reviews/jaipuria-dry-gin",
    "https://www.bevory.in/gurgaon/product/jaipuria-dry-gin-0aed5cd",
  ],
  "jakob-steiner": [
    "https://mcmbrands.ie/wp-content/uploads/2024/08/MCM-Product-Brochure-2024_no-pricing.pdf",
    "https://www.masterofmalt.com/liqueurs/jakob-steiner/jakob-steiner-herbal-liqueur/",
    "https://www.bevory.in/gurgaon/product/jakob-steiner-liqueur-4028932",
  ],
  jamaican: [
    "https://associatedalcohols.com/wp-content/uploads/35th_Annual_Report_2023-24.pdf",
    "https://excise.cg.nic.in/Uploads/RSP_2020_21_may022020.pdf",
    "https://www.bevory.in/gurgaon/product/jamaican-magic-matured-rum-0879ca1",
  ],
  "james-brookes": [
    "https://www.prowein.com/en/Media_News/Magazine/Newsdesk/Archive/Hayman_limited_Burlington_Drinks",
    "https://www.winesandbeyond.net/vodka",
    "https://www.bevory.in/gurgaon/product/james-brookes-gin-b73c2de",
    "https://www.bevory.in/gurgaon/product/james-brookes-vodka-a8070ad",
  ],
};

export const BRAND_CONTENT_BATCH_91: Record<string, BrandPublicContent> = {
  "iq-london": {
    description: "IQ London is an Indian gin page on BevOry anchored by I.Q. London Dry Gin from Mohan Meakin. The official Mohan Meakin gin range also includes IQ Cucumber London Dry Gin and IQ Pink Gin.",
    story: "Mohan Meakin's beverage history runs through Solan and Mohan Nagar, Ghaziabad, giving IQ London a clear Indian production context. The label sits in the dry gin shelf, where juniper, citrus and tonic-friendly structure matter more than sweetness.",
    tastingNotes: [
      { title: "Dry Gin Core", description: "Juniper, coriander seed, citrus peel and light herbal spice give the gin its classic dry profile." },
      { title: "Tonic Finish", description: "A crisp, clean close keeps the serve bright with tonic, soda or lime-led cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build a G&T over ice with chilled tonic and a lime wheel, or stir into a dry martini." },
      { subheading: "Food", description: "Pair with tandoori prawns, chilli paneer, masala papad, lemon chicken or cucumber sandwiches." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chilli paneer", "masala papad", "lemon chicken", "cucumber sandwiches"] }],
    whyChoose: "IQ London is a useful Indian dry gin pick when you want a clean G&T without a flavoured-gin profile.",
    faqs: [
      { question: "Who makes IQ London Dry Gin?", answer: "I.Q. London Dry Gin is listed in Mohan Meakin's official gin range." },
      { question: "What mixer suits IQ London?", answer: "Tonic water, soda, lime and cucumber work well with its dry gin character." },
    ],
    finalVerdict: "IQ London is best for sharp, uncomplicated gin serves built around tonic, lime and spicy snacks.",
    metaTitle: "IQ London Gin Guide | BevOry",
    metaDescription: "Explore IQ London Dry Gin notes, Mohan Meakin origin, G&T serves, pairings and city prices.",
  },
  "isla-de-maipo": {
    description: "Isla De Maipo is a Chilean wine page on BevOry covering Cabernet Sauvignon and Sauvignon Blanc styles. The name points to Isla de Maipo, a recognised wine-growing area within Chile's Maipo Valley.",
    story: "Isla de Maipo vineyards sit close to the Maipo River, where warm days, cooler nights and alluvial soils help Cabernet Sauvignon retain freshness. Sauvignon Blanc from the wider area brings a lighter, citrus-led counterpoint to the region's red-wine reputation.",
    tastingNotes: [
      { title: "Cabernet Sauvignon", description: "Blackcurrant, plum, cassis and a touch of leafy spice suit a medium-to-full red pour." },
      { title: "Sauvignon Blanc", description: "Lime, green apple, grapefruit and fresh herbs keep the white style crisp and lively." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc chilled at 8-10 C and Cabernet slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair the red with mutton seekh or grilled lamb; match the white with tandoori fish or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "grilled lamb chops", "tandoori fish", "goat cheese", "peri-peri prawns"] }],
    whyChoose: "Isla De Maipo is a compact way to compare Chilean Cabernet richness with crisp Sauvignon Blanc refreshment.",
    faqs: [
      { question: "Where is Isla De Maipo wine from?", answer: "The BevOry page points to Chile's Isla de Maipo area within the Maipo Valley." },
      { question: "Which styles appear under Isla De Maipo?", answer: "BevOry routes include Cabernet Sauvignon and Sauvignon Blanc bottle pages." },
    ],
    finalVerdict: "Isla De Maipo works when you want Chilean wine styles that move easily from seafood to grilled meat.",
    metaTitle: "Isla De Maipo Wine Guide | BevOry",
    metaDescription: "Explore Isla De Maipo Cabernet and Sauvignon Blanc notes, food pairings, serving tips and city prices.",
  },
  itinera: {
    description: "Itinera is an Italian wine page on BevOry anchored by Itinera Montepulciano d'Abruzzo. The route points to Abruzzo in central Italy and the Montepulciano grape.",
    story: "Montepulciano d'Abruzzo is known for generous red fruit, soft tannins and a food-friendly body. Itinera follows that regional lane with a 750 ml red suited to pizza, grilled meat and tomato-rich Indian tables.",
    tastingNotes: [
      { title: "Abruzzo Red", description: "Black cherry, plum, blueberry and dried herbs give the wine a rounded, fruit-led nose." },
      { title: "Soft Spice", description: "Mild tannins, savoury spice and a dry finish keep the palate ready for richer food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass; open it 20 minutes before a heavier meal." },
      { subheading: "Food", description: "Pair with keema pizza, mutton raan, arrabbiata pasta, seekh kebab or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["keema pizza", "mutton raan", "arrabbiata pasta", "seekh kebab", "aged cheddar"] }],
    whyChoose: "Itinera gives red-wine drinkers an approachable Italian Montepulciano profile with enough fruit for spicy food.",
    faqs: [
      { question: "What grape is Itinera Montepulciano d'Abruzzo made from?", answer: "It is made from the Montepulciano grape in Abruzzo, Italy." },
      { question: "What does Itinera Montepulciano taste like?", answer: "Expect dark cherry, plum, herbs, soft tannins and a dry red-wine finish." },
    ],
    finalVerdict: "Itinera is a dependable Italian red for tomato-based dishes, grilled snacks and relaxed dinner pours.",
    metaTitle: "Itinera Montepulciano Guide | BevOry",
    metaDescription: "Explore Itinera Montepulciano d'Abruzzo notes, Abruzzo origin, pairings, serving tips and city prices.",
  },
  "jack-10": {
    description: "Jack 10 is an Indian whisky page on BevOry anchored by Jack 10 Reserve Whisky. The product appears in local Indian excise price lists and BevOry routes in 180 ml and 750 ml formats.",
    story: "Jack 10 sits in the reserve-style Indian whisky shelf, built for mixed serves rather than age-statement collecting. Its main use case is simple: a familiar whisky pour with soda, water, cola or ice.",
    tastingNotes: [
      { title: "Reserve Whisky", description: "Caramel, toasted grain, vanilla and mild oak spice create a rounded whisky profile." },
      { title: "Mixer Friendly", description: "Soft sweetness and a warm finish make it suitable for soda, water and cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, add chilled water or lengthen with soda in a tall glass." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, mutton seekh, chilli paneer or dal makhani." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "mutton seekh", "chilli paneer", "dal makhani"] }],
    whyChoose: "Jack 10 is a straightforward Indian whisky choice for soda highballs and familiar bar snacks.",
    faqs: [
      { question: "What is Jack 10 Reserve Whisky?", answer: "It is an Indian reserve-style whisky listed on BevOry in 180 ml and 750 ml formats." },
      { question: "How should Jack 10 be served?", answer: "Serve it with soda, chilled water, cola or ice, depending on the occasion." },
    ],
    finalVerdict: "Jack 10 is built for easy Indian whisky serves with spicy food and simple mixers.",
    metaTitle: "Jack 10 Whisky Guide | BevOry",
    metaDescription: "Explore Jack 10 Reserve Whisky notes, bottle formats, mixers, Indian food pairings and city prices.",
  },
  jacobs: {
    description: "Jacobs is a wine search page on BevOry for shoppers using the shortened Jacobs name while looking through Australian-style wine results. It sits closest to the approachable red, white and sparkling wine territory associated with Jacob's Creek searches.",
    story: "The wider Jacob's Creek name is tied to South Australian wine and the Barossa region. This shorter Jacobs page helps users who type the common shorthand move toward familiar grape-led wines such as Shiraz Cabernet, Chardonnay and sparkling rose.",
    tastingNotes: [
      { title: "Australian Red Style", description: "Shiraz Cabernet routes usually bring ripe plum, blackberry, spice and a smooth finish." },
      { title: "White And Sparkling", description: "Chardonnay and sparkling styles lean toward citrus, peach, apple and clean acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites and sparkling wines chilled; pour fuller reds slightly cool with food." },
      { subheading: "Food", description: "Pair reds with galouti kebabs or lamb chops, and whites with tandoori fish or creamy pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "lamb chops", "tandoori fish", "creamy pasta", "aged cheddar"] }],
    whyChoose: "Jacobs is handy when a quick wine search needs to lead toward familiar Australian-style bottle choices.",
    faqs: [
      { question: "What does the Jacobs page cover?", answer: "It helps shoppers using the shortened Jacobs name browse wine-style results on BevOry." },
      { question: "Which food works with Jacobs-style wines?", answer: "Try grilled lamb with reds, and tandoori fish or creamy pasta with whites and sparkling wines." },
    ],
    finalVerdict: "Jacobs is a practical shorthand wine page for everyday Australian-style red, white and sparkling searches.",
    metaTitle: "Jacobs Wine Guide | BevOry",
    metaDescription: "Explore Jacobs wine-style notes, red and white pairings, serving ideas and city prices on BevOry.",
  },
  jacobson: {
    description: "Jacobson is an Australian wine page on BevOry anchored by Jacobson Cabernet Shiraz. Trade listings connect the wine with Glenside Wines in South Australia.",
    story: "Cabernet Shiraz is a classic Australian blend: Cabernet brings blackcurrant and structure, while Shiraz adds plum, spice and mid-palate richness. Jacobson uses that familiar blend format for a bold 750 ml red.",
    tastingNotes: [
      { title: "Cabernet Shiraz", description: "Blackberry, plum, cassis and cedar-like spice give the wine a generous red-fruit profile." },
      { title: "Fuller Red Body", description: "Rounded tannins and a dry finish make it suitable for grilled and slow-cooked dishes." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve in a red-wine glass at cool room temperature, with a short breather before dinner." },
      { subheading: "Food", description: "Pair with mutton rogan josh, lamb chops, pepper steak, mushroom tikka or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "lamb chops", "pepper steak", "mushroom tikka", "aged cheddar"] }],
    whyChoose: "Jacobson is a good pick for drinkers who like Australian red blends with dark fruit and food-ready structure.",
    faqs: [
      { question: "What style is Jacobson Cabernet Shiraz?", answer: "It is a red wine blend combining Cabernet Sauvignon structure with Shiraz fruit and spice." },
      { question: "What should I pair with Jacobson?", answer: "Rogan josh, lamb chops, pepper steak and mushroom tikka are strong matches." },
    ],
    finalVerdict: "Jacobson Cabernet Shiraz is a bold red for grilled meat, richer curries and relaxed dinner service.",
    metaTitle: "Jacobson Cabernet Shiraz Guide | BevOry",
    metaDescription: "Explore Jacobson Cabernet Shiraz notes, Australian red blend style, pairings and city prices.",
  },
  jaipuria: {
    description: "Jaipuria is an Indian gin page on BevOry anchored by Jaipuria Dry Gin. Product listings place it in the London Dry gin style, with 180 ml and 750 ml bottle routes.",
    story: "Jaipuria Dry Gin sits in the value-led Indian gin shelf where juniper, citrus and clean mixing are the main cues. It is built for tonic, lime soda and classic bar cocktails rather than sweet flavoured serves.",
    tastingNotes: [
      { title: "Juniper Lead", description: "Piney juniper, citrus peel, coriander and herbal spice give the gin a dry backbone." },
      { title: "Crisp Finish", description: "A sharp, clean close keeps the drink refreshing with tonic and plenty of ice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use chilled tonic, soda or a martini serve with a lemon twist." },
      { subheading: "Food", description: "Pair with tandoori prawns, bruschetta, chilli paneer, smoked salmon or light salads." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "bruschetta", "chilli paneer", "smoked salmon", "light salads"] }],
    whyChoose: "Jaipuria is a clean Indian dry gin option for straightforward G&Ts and citrus-led cocktails.",
    faqs: [
      { question: "What style is Jaipuria Dry Gin?", answer: "It is listed as a London Dry-style gin in Indian product catalogues." },
      { question: "What garnish works with Jaipuria?", answer: "Lime, lemon peel, cucumber or a simple tonic serve all fit the dry gin profile." },
    ],
    finalVerdict: "Jaipuria works best as a practical dry gin for tonic, soda and spicy starters.",
    metaTitle: "Jaipuria Gin Guide | BevOry",
    metaDescription: "Explore Jaipuria Dry Gin notes, tonic serves, Indian food pairings, bottle formats and city prices.",
  },
  "jakob-steiner": {
    description: "Jakob Steiner is a German herbal liqueur page on BevOry. Trade brochures describe Jakob Steiner Herbal Liqueur as a blend of 42 herbs, spices, roots and fruits.",
    story: "The brand leans into the old European herbal liqueur tradition, where bitter herbs, warming spice and chilled shots drive the drinking style. Indian listings show Jakob Steiner Liqueur as an imported liqueur route.",
    tastingNotes: [
      { title: "Herbal Liqueur", description: "Anise, mint, clove, citrus peel and dark herbal bitterness shape the aroma." },
      { title: "Sweet Bitter Finish", description: "Sweet spice, rooty bitterness and a cooling close suit chilled serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve freezer-chilled as a shot, over ice, or mixed with cola for a simple long drink." },
      { subheading: "Food", description: "Pair with pork ribs, chilli sausages, dark chocolate, salted almonds or spicy momos." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork ribs", "chilli sausages", "dark chocolate", "salted almonds", "spicy momos"] }],
    whyChoose: "Jakob Steiner is for drinkers who want a German herbal liqueur with a sweet-bitter after-dinner profile.",
    faqs: [
      { question: "What is Jakob Steiner?", answer: "Jakob Steiner is a German herbal liqueur made in the bittersweet European digestif style." },
      { question: "How should Jakob Steiner be served?", answer: "Serve it very cold as a shot, over ice, or lengthened with cola." },
    ],
    finalVerdict: "Jakob Steiner is a chilled herbal liqueur for after-dinner shots and sweet-bitter long drinks.",
    metaTitle: "Jakob Steiner Liqueur Guide | BevOry",
    metaDescription: "Explore Jakob Steiner herbal liqueur notes, German style, chilled serves, pairings and city prices.",
  },
  jamaican: {
    description: "Jamaican is an Indian rum page on BevOry anchored by Jamaican Magic Matured Rum. Associated Alcohols & Breweries lists Jamaican Magic Matured Rum among its popular brands.",
    story: "Jamaican Magic follows the Indian dark rum playbook: molasses-led sweetness, darker colour and easy cola compatibility. BevOry routes show the brand across several common bottle sizes for city-level comparison.",
    tastingNotes: [
      { title: "Matured Rum", description: "Molasses, caramel, vanilla, raisin and toasted wood create a sweet dark-rum profile." },
      { title: "Cola Ready", description: "A rounded finish with mild spice keeps the rum easy in cola, ginger ale or lime soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Mix with cola and lime, pour over ice, or build a simple dark rum highball." },
      { subheading: "Food", description: "Pair with pepper chicken, pork chilli, paneer tikka, barbecue wings or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "pork chilli", "paneer tikka", "barbecue wings", "dark chocolate"] }],
    whyChoose: "Jamaican Magic is a direct Indian dark rum choice for cola highballs and bold snacks.",
    faqs: [
      { question: "What product anchors the Jamaican brand page?", answer: "The BevOry page is anchored by Jamaican Magic Matured Rum." },
      { question: "What mixer suits Jamaican Magic Rum?", answer: "Cola, ginger ale, lime soda and plenty of ice work well with its sweet dark-rum profile." },
    ],
    finalVerdict: "Jamaican Magic is made for easy dark rum serves with cola, lime and spicy party food.",
    metaTitle: "Jamaican Magic Rum Guide | BevOry",
    metaDescription: "Explore Jamaican Magic Matured Rum notes, dark rum mixers, pairings, bottle sizes and city prices.",
  },
  "james-brookes": {
    description: "James Brookes is a United Kingdom spirits page on BevOry covering gin and vodka routes. Trade coverage describes James Brookes Gin as a London Dry gin and James Brookes Vodka as a triple-distilled grain vodka.",
    story: "The James Brookes range appeared in UK trade coverage through Burlington Drinks, with gin and vodka positioned for classic bar service. BevOry routes focus on 700 ml bottles for gin and vodka discovery.",
    tastingNotes: [
      { title: "London Dry Gin", description: "Juniper, citrus peel, coriander and dry spice create a crisp cocktail-ready gin profile." },
      { title: "Grain Vodka", description: "Clean grain, light cereal sweetness and a smooth finish suit chilled shots and highballs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use the gin in a G&T or martini; serve the vodka chilled, with soda, or in a mule." },
      { subheading: "Food", description: "Pair gin with tandoori prawns or smoked salmon, and vodka with momos, fries or blinis." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "smoked salmon", "spicy momos", "peri-peri fries", "blinis"] }],
    whyChoose: "James Brookes is useful when one brand page needs both London Dry gin and clean grain vodka options.",
    faqs: [
      { question: "What James Brookes products are listed on BevOry?", answer: "BevOry routes include James Brookes Gin and James Brookes Vodka." },
      { question: "How should James Brookes Gin be served?", answer: "Serve it with tonic and lime, or use it in a dry martini." },
    ],
    finalVerdict: "James Brookes is a clean UK spirits option for gin-and-tonic drinkers and vodka highball serves.",
    metaTitle: "James Brookes Spirits Guide | BevOry",
    metaDescription: "Explore James Brookes gin and vodka notes, UK style, cocktail serves, pairings and city prices.",
  },
};
