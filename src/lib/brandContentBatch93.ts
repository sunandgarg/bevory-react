import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_93 = [
  ["johnston", "Johnston", "Australia", "Wine", "pending-johnston"],
  ["jones-and-me", "Jones & Me", "United Kingdom", "Spirits", "pending-jones-and-me"],
  ["jordys-bar", "Jordys Bar", "India", "Indian Whisky", "pending-jordys-bar"],
  ["joseph-laforet", "Joseph Laforet", "France", "Wine", "pending-joseph-laforet"],
  ["joypore", "Joypore", "India", "Gin", "pending-joypore"],
  ["junmai-yuzu", "Junmai Yuzu", "Japan", "Sake", "pending-junmai-yuzu"],
  ["juno", "Juno", "India", "Vodka", "pending-juno"],
  ["jyosen-namazake", "Jyosen Namazake", "Japan", "Sake", "pending-jyosen-namazake"],
  ["k-and-b", "K And B", "Scotland", "Blended Scotch", "pending-k-and-b"],
  ["kamanda", "Kamanda", "India", "Rum", "pending-kamanda"],
] as const;

export const BRAND_LOGOS_BATCH_93: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_93: Record<string, string[]> = {
  johnston: [
    "https://www.vivino.com/en/johnston-shiraz/w/2189629",
    "https://www.livcheers.com/lucknow/liquor/johnston-shiraz-750ml",
    "https://www.bevory.in/noida/product/johnston-shiraz-d687b23",
  ],
  "jones-and-me": [
    "https://jonesandme.com/about-us/",
    "https://jonesandme.com/jones-shop/",
    "https://www.bevory.in/gurgaon/product/jones-and-me-jones-and-me-ac8545d",
  ],
  "jordys-bar": [
    "https://www.livcheers.com/hyderabad/liquor/jordys-bar-premium-exquisite-whisky-750ml",
    "https://www.bevory.in/delhi/product/jordys-bar-premium-exquisite-whisky-da18a4d",
  ],
  "joseph-laforet": [
    "https://www.drouhin.com/en_US/wine/laforet-bourgogne-chardonnay/2021",
    "https://www.drouhin.com/en_US/",
    "https://www.bevory.in/gurgaon/product/joseph-laforet-bourgogne-chardonnay-4a1a1e5",
  ],
  joypore: [
    "https://www.quickcompany.in/trademarks/6419269-joypore-dry-gin-label",
    "https://www.livcheers.com/jaipur/liquor/joypore-dry-gin-750ml",
    "https://www.bevory.in/jaipur/product/joypore-dry-gin-3a93d39",
  ],
  "junmai-yuzu": [
    "https://sake.nl/en/shop/aladdin-yuzu-300ml/",
    "https://wismettacsake.com/products/aladdin-bottle-junmai",
    "https://www.bevory.in/mumbai/product/junmai-yuzu-aladdin-homare-sake-e1521ab",
  ],
  juno: [
    "https://www.quickcompany.in/trademarks/3212793-juno-premium-grain-vodka",
    "https://www.livcheers.com/bangalore/liquor/juno-classic-orange-vodka-750ml",
    "https://www.bevory.in/bangalore/product/juno-classic-orange-vodka-4078027",
  ],
  "jyosen-namazake": [
    "https://www.sakenomy.jp/en/sake/TST0000013347/",
    "https://www.sawanotsuru.co.jp/site/company?wovn=en",
    "https://www.bevory.in/mumbai/product/jyosen-namazake-sawanotsuru-sake-7a87253",
  ],
  "k-and-b": [
    "https://www.livcheers.com/hyderabad/liquor/k-and-b-royal-club-whisky-1000ml",
    "https://tasmac.reclaimchennai.city/brands/736",
    "https://www.bevory.in/hyderabad/product/k-and-b-k-and-b-royal-club-whisky-f8d43e1",
  ],
  kamanda: [
    "https://www.khemanigroup.com/kamanda-product.html",
    "https://www.khemanigroup.com/assets/images/products/Brands_HOK_Oct25_Website.pdf",
    "https://www.bevory.in/bhopal/product/kamanda-matured-indian-spiced-rum-fc537cb",
  ],
};

export const BRAND_CONTENT_BATCH_93: Record<string, BrandPublicContent> = {
  johnston: {
    description: "Johnston is a red-wine brand best seen on BevOry through Johnston Shiraz in a 750 ml bottle. The style belongs to the Shiraz and Syrah family, with Australian listings linking it to South Australia.",
    story: "The Johnston name appears in Australian wine contexts around Shiraz, a grape closely tied to warm-climate red wine styles. On BevOry, it is most useful for shoppers comparing a bold red wine for grills, roasts and full-flavoured Indian food.",
    tastingNotes: [
      { title: "Shiraz Fruit", description: "Blackberry, plum, dark cherry and sweet spice give the wine a ripe red-wine profile." },
      { title: "Peppery Finish", description: "A fuller body, soft tannins and a pepper-edged finish suit richer food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass, around 15-17 C, and let the first pour breathe briefly." },
      { subheading: "Food", description: "Pair with mutton seekh, pepper chicken, lamb chops, mushroom galouti or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "pepper chicken", "lamb chops", "mushroom galouti", "aged cheddar"] }],
    whyChoose: "Johnston works for drinkers who want an approachable Shiraz with ripe fruit and spice.",
    faqs: [
      { question: "What grape is Johnston Shiraz made from?", answer: "Johnston Shiraz is built around the Shiraz grape, also known internationally as Syrah." },
      { question: "What food suits Johnston Shiraz?", answer: "Spiced lamb, pepper chicken, grilled mushrooms and aged cheddar match its richer red-wine style." },
    ],
    finalVerdict: "Johnston Shiraz is a bold red-wine choice for grilled food, Indian spices and cool-evening pours.",
    metaTitle: "Johnston Shiraz Guide | BevOry",
    metaDescription: "Explore Johnston Shiraz notes, serving temperature, red-wine pairings and city prices on BevOry.",
  },
  "jones-and-me": {
    description: "Jones & Me is an independent United Kingdom beverage company focused on naturally flavoured premium spirits. Its range includes Orange & Cherry Brandy, Spiced Mocha Rum, Spiced Apple Rum and Blood Orange & Mandarin Whisky.",
    story: "The company describes itself as owned and managed by directors with more than 50 years of beverage-industry experience across multiple countries. Jones & Me positions its spirits around natural flavoured ingredients and mixed-drink flexibility.",
    tastingNotes: [
      { title: "Flavoured Spirits", description: "Expect fruit, spice, citrus and dessert-led notes rather than a single neutral spirit profile." },
      { title: "Cocktail Core", description: "The brand's whisky, rum and brandy styles are built for ice, highballs and fruit-forward mixed drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, lengthen with soda or ginger ale, or build into simple citrus-led cocktails." },
      { subheading: "Food", description: "Pair with chilli chicken, smoked almonds, orange-glazed duck, dark chocolate or caramel pudding." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "smoked almonds", "orange-glazed duck", "dark chocolate", "caramel pudding"] }],
    whyChoose: "Jones & Me is useful when you want flavoured spirits that move easily between neat pours and cocktails.",
    faqs: [
      { question: "Where is Jones & Me based?", answer: "Jones & Me is an independent beverage company located in the United Kingdom." },
      { question: "What styles does Jones & Me make?", answer: "Its range covers flavoured brandy, rum and whisky expressions made for sipping and mixing." },
    ],
    finalVerdict: "Jones & Me brings a playful UK flavoured-spirit range to citrus, spice and dessert-style cocktails.",
    metaTitle: "Jones & Me Spirits Guide | BevOry",
    metaDescription: "Explore Jones & Me flavoured spirits, cocktail ideas, food pairings and city prices on BevOry.",
  },
  "jordys-bar": {
    description: "Jordys Bar is an Indian whisky brand anchored by Jordys Bar Premium Exquisite Whisky. Common BevOry bottle formats include 180 ml, 375 ml and 750 ml.",
    story: "Jordys Bar sits in the premium Indian blended whisky lane, where soft sweetness, spice and mixer flexibility matter. The brand is a practical option for shoppers comparing a familiar whisky for home bars and group occasions.",
    tastingNotes: [
      { title: "Caramel And Vanilla", description: "Caramel, vanilla, toasted grain and mild oak form a smooth blended-whisky base." },
      { title: "Spiced Finish", description: "A gentle spice note keeps the finish clean with soda, water or cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with soda, with chilled water, or in a whisky-cola highball." },
      { subheading: "Food", description: "Pair with tandoori chicken, galouti kebabs, chilli paneer, masala peanuts or butter chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "galouti kebabs", "chilli paneer", "masala peanuts", "butter chicken"] }],
    whyChoose: "Jordys Bar gives Indian whisky drinkers a smooth mixed-serve option across common bottle sizes.",
    faqs: [
      { question: "What is Jordys Bar Premium Exquisite Whisky?", answer: "It is an Indian blended whisky listed on BevOry in 180 ml, 375 ml and 750 ml formats." },
      { question: "How should Jordys Bar be served?", answer: "Use it with soda, water, cola or ice, depending on the style of drink." },
    ],
    finalVerdict: "Jordys Bar is a mixer-friendly Indian whisky for spicy snacks and easy party serves.",
    metaTitle: "Jordys Bar Whisky Guide | BevOry",
    metaDescription: "Explore Jordys Bar whisky notes, mixers, Indian food pairings and city prices on BevOry.",
  },
  "joseph-laforet": {
    description: "Joseph Laforet refers to Maison Joseph Drouhin's Laforet Bourgogne Chardonnay, a French white Burgundy made from Chardonnay. The wine draws grapes from across Burgundy and is designed as an accessible introduction to white Burgundy.",
    story: "Maison Joseph Drouhin is a Burgundy family wine house founded in Beaune in 1880. In the 1970s, Robert Drouhin created Laforet as a way to show Burgundy's diversity through carefully selected parcels near higher slopes and forest edges.",
    tastingNotes: [
      { title: "Bourgogne Chardonnay", description: "Lemon, yellow apple, honey and light vanilla give the wine a fresh white Burgundy profile." },
      { title: "Clean Mineral Finish", description: "Bright acidity and soft orchard fruit keep the finish crisp, polished and food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass, around 10-12 C, without over-icing the bottle." },
      { subheading: "Food", description: "Pair with tandoori fish, butter garlic prawns, roast chicken, paneer malai tikka or comte." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "butter garlic prawns", "roast chicken", "paneer malai tikka", "comte"] }],
    whyChoose: "Joseph Laforet is a classic introduction to Burgundy Chardonnay with citrus, honey and gentle oak detail.",
    faqs: [
      { question: "Who makes Joseph Laforet Chardonnay?", answer: "It is made by Maison Joseph Drouhin, the Burgundy wine house founded in Beaune in 1880." },
      { question: "What grape is used in Laforet Bourgogne Chardonnay?", answer: "The wine is made from Chardonnay grapes sourced from Burgundy." },
    ],
    finalVerdict: "Joseph Laforet Chardonnay is a reliable French white for seafood, creamy starters and Burgundy discovery.",
    metaTitle: "Joseph Laforet Wine Guide | BevOry",
    metaDescription: "Explore Joseph Laforet Chardonnay notes, Burgundy story, food pairings and city prices on BevOry.",
  },
  joypore: {
    description: "Joypore is an Indian gin brand represented on BevOry by Joypore Dry Gin. Trademark records connect Joypore Dry Gin with Agribiotech Industries Limited in Rajasthan.",
    story: "The Joypore name points to Jaipur, giving the gin a Rajasthan-led identity in India's growing dry-gin shelf. It is positioned for classic gin serves where juniper, citrus and spice need to stay clear.",
    tastingNotes: [
      { title: "Dry Gin Core", description: "Juniper, citrus peel, coriander-like spice and light herbal notes shape the aroma." },
      { title: "Crisp Finish", description: "A dry, clean close keeps the gin suited to tonic, soda and citrus-led cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with chilled tonic and a lime wedge, or use in a gimlet, martini or Collins." },
      { subheading: "Food", description: "Pair with tandoori prawns, chicken tikka, cucumber chaat, fried calamari or lemon paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chicken tikka", "cucumber chaat", "fried calamari", "lemon paneer"] }],
    whyChoose: "Joypore is a dry Indian gin option for tonic serves and citrus-forward cocktails.",
    faqs: [
      { question: "What is Joypore Dry Gin?", answer: "It is an Indian dry gin listed on BevOry in 750 ml and 180 ml formats." },
      { question: "What mixer suits Joypore?", answer: "Chilled tonic, soda, lime and grapefruit all work with its dry gin style." },
    ],
    finalVerdict: "Joypore Dry Gin is a clean Indian gin pick for G&Ts, martinis and spicy seafood snacks.",
    metaTitle: "Joypore Gin Guide | BevOry",
    metaDescription: "Explore Joypore Dry Gin notes, tonic serves, Indian food pairings and city prices on BevOry.",
  },
  "junmai-yuzu": {
    description: "Junmai Yuzu is a Japanese flavoured sake style represented by Aladdin Homare Yuzu Sake. It combines Junmai sake with yuzu citrus in a 300 ml bottle format.",
    story: "Homare Sake Brewery was founded in 1918 in Kitakata, Fukushima, at the foot of the Iide mountain range. The brewery is associated with Aizu Homare and the soft local water traditionally used for sake brewing in the region.",
    tastingNotes: [
      { title: "Yuzu Citrus", description: "Fresh yuzu, lemon peel, mandarin and light rice sweetness give it a bright citrus lift." },
      { title: "Sweet-Sour Sake", description: "A sweet, tangy finish balances sake softness with sharp Japanese citrus." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a small wine glass, over ice, or lengthened lightly with soda." },
      { subheading: "Food", description: "Pair with sushi, tandoori prawns, chilli chicken, pork gyoza or mango cheesecake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "tandoori prawns", "chilli chicken", "pork gyoza", "mango cheesecake"] }],
    whyChoose: "Junmai Yuzu is a lively sake choice for drinkers who like citrus, sweetness and a chilled pour.",
    faqs: [
      { question: "What is Junmai Yuzu sake?", answer: "It is a yuzu-flavoured sake style made by combining Junmai sake with Japanese citrus." },
      { question: "How should Junmai Yuzu be served?", answer: "Serve it chilled, over ice, or with a splash of soda for a lighter drink." },
    ],
    finalVerdict: "Junmai Yuzu is a bright Japanese sake for chilled aperitif pours and spicy food.",
    metaTitle: "Junmai Yuzu Sake Guide | BevOry",
    metaDescription: "Explore Junmai Yuzu sake notes, Homare context, serving ideas, pairings and city prices on BevOry.",
  },
  juno: {
    description: "Juno is an Indian vodka brand represented on BevOry by Juno Classic Orange Vodka and Juno Classic Pink Vodka. Trademark records connect Juno Premium Grain Vodka with Leela Distilleries Private Limited in Chennai.",
    story: "Juno sits in India's flavoured vodka shelf, where citrus-led mixed drinks and party highballs drive most use. The orange expression is the clearest local anchor, built around bright fruit flavour and a clean vodka finish.",
    tastingNotes: [
      { title: "Orange Vodka", description: "Sweet orange, mandarin peel, light grain spirit and citrus candy shape the nose." },
      { title: "Clean Mixer Finish", description: "A zesty finish keeps the vodka easy with soda, lemonade, cranberry or orange juice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda and lime, lemonade, cranberry juice, or orange juice over plenty of ice." },
      { subheading: "Food", description: "Pair with peri-peri fries, chilli paneer, chicken popcorn, fruit chaat or vanilla cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "chilli paneer", "chicken popcorn", "fruit chaat", "vanilla cake"] }],
    whyChoose: "Juno is an easy flavoured vodka pick for citrus highballs and casual party cocktails.",
    faqs: [
      { question: "What is Juno Classic Orange Vodka?", answer: "It is an Indian flavoured vodka with an orange-led profile." },
      { question: "What should I mix with Juno Orange Vodka?", answer: "Soda, lemonade, cranberry juice and orange juice all suit its citrus style." },
    ],
    finalVerdict: "Juno Classic Orange Vodka is best for chilled citrus mixers and uncomplicated party drinks.",
    metaTitle: "Juno Vodka Guide | BevOry",
    metaDescription: "Explore Juno orange vodka notes, mixers, party food pairings and city prices on BevOry.",
  },
  "jyosen-namazake": {
    description: "Jyosen Namazake is a Japanese sake represented by Sawanotsuru Honjozo Namazake. Sawanotsuru is a Hyogo sake producer, and the Namazake style is known for fresh, chilled drinking.",
    story: "Sawanotsuru comes from the Nada sake-brewing area of Kobe, a region closely associated with rice, water and food-friendly sake. The Honjozo Namazake profile is lighter and fresher than many warm-service sakes, making refrigeration important.",
    tastingNotes: [
      { title: "Fresh Sake Aroma", description: "Light rice sweetness, pear, melon and gentle grain notes give the sake a fresh nose." },
      { title: "Gentle Umami", description: "A smooth, light body and clean umami finish make it easy with seafood and savoury snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled around 5-10 C in a small sake glass or white-wine glass." },
      { subheading: "Food", description: "Pair with sushi, tempura prawns, chicken yakitori, steamed fish or paneer salt-and-pepper." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "tempura prawns", "chicken yakitori", "steamed fish", "paneer salt-and-pepper"] }],
    whyChoose: "Jyosen Namazake is a fresh chilled sake for drinkers who want rice softness and clean umami.",
    faqs: [
      { question: "Who makes Jyosen Namazake?", answer: "The BevOry listing is anchored by Sawanotsuru Honjozo Namazake from Japan." },
      { question: "Should Namazake be chilled?", answer: "Yes, this style is best served cold and handled like a fresh sake." },
    ],
    finalVerdict: "Jyosen Namazake is a refreshing sake choice for chilled pours, sushi and lighter savoury food.",
    metaTitle: "Jyosen Namazake Sake Guide | BevOry",
    metaDescription: "Explore Jyosen Namazake notes, Sawanotsuru context, serving tips and city prices on BevOry.",
  },
  "k-and-b": {
    description: "K And B is a whisky brand represented on BevOry by K And B Royal Club Whisky in a 1 litre bottle format. Livcheers places the bottle in the blended Scotch category, while Indian retail records list Sunlight Spirits as the supplier.",
    story: "K And B Royal Club is built for drinkers comparing larger-format whisky bottles for home bars and group occasions. Its style leans on the familiar blended-whisky cues of malt, caramel, oak and soft spice.",
    tastingNotes: [
      { title: "Malt And Caramel", description: "Malt, caramel, honey and vanilla create a rounded whisky aroma." },
      { title: "Soft Oak Finish", description: "Light oak and gentle spice keep the finish smooth with soda, water or ice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat first, then try it with ice, soda or chilled water in a tall glass." },
      { subheading: "Food", description: "Pair with tandoori chicken, seekh kebab, masala peanuts, smoked cheese or apple crumble." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "seekh kebab", "masala peanuts", "smoked cheese", "apple crumble"] }],
    whyChoose: "K And B is a larger-format blended whisky option for highballs and shared pours.",
    faqs: [
      { question: "What is K And B Royal Club Whisky?", answer: "It is a blended whisky listed on BevOry in a 1 litre format." },
      { question: "How should K And B be served?", answer: "Serve it neat, with ice, with soda, or with chilled water." },
    ],
    finalVerdict: "K And B Royal Club Whisky is a practical blended-whisky choice for simple serves and group occasions.",
    metaTitle: "K And B Whisky Guide | BevOry",
    metaDescription: "Explore K And B Royal Club notes, serving ideas, whisky pairings and city prices on BevOry.",
  },
  kamanda: {
    description: "Kamanda is an Indian spiced rum from the House of Khemani. The official profile describes it as a blend of matured rum spirit and select Indian spirits garnished with Indian spices.",
    story: "Khemani Group traces its alcoholic-beverage work to western India and presents Kamanda as a matured Indian spiced rum. The brand profile highlights cinnamon, black pepper, vanilla, coconut and a dark-brown rum colour.",
    tastingNotes: [
      { title: "Indian Spiced Rum", description: "Sweet cane sugar, wood, cinnamon, black pepper, vanilla and coconut shape the aroma." },
      { title: "Dense Finish", description: "A dark, rounded palate and long spiced finish make it suited to cola, ginger ale and neat ice pours." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with cola and lime, with ginger ale, or in a dark rum highball." },
      { subheading: "Food", description: "Pair with pork chilli, pepper chicken, paneer tikka, barbecue wings or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork chilli", "pepper chicken", "paneer tikka", "barbecue wings", "dark chocolate"] }],
    whyChoose: "Kamanda stands out for Indian spice notes layered into a matured rum base.",
    faqs: [
      { question: "Who makes Kamanda rum?", answer: "Kamanda is part of the House of Khemani portfolio." },
      { question: "What flavours define Kamanda?", answer: "Its official profile highlights cane sugar, wood, cinnamon, black pepper, vanilla and coconut." },
    ],
    finalVerdict: "Kamanda is a bold Indian spiced rum for cola highballs, ginger serves and spicy food.",
    metaTitle: "Kamanda Rum Guide | BevOry",
    metaDescription: "Explore Kamanda spiced rum notes, House of Khemani story, mixers and city prices on BevOry.",
  },
};
