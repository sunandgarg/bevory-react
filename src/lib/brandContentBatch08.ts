import type { BrandPublicContent } from "./brandContentBatch01.js";

// Batch 08 follows docs/editorial/brand-content-system-prompt.md.
// Missing facts are omitted silently; public fields contain consumer copy only.
export const BRAND_CONTENT_BATCH_08: Record<string, BrandPublicContent> = {
  "yellow-tail": {
    description: "Yellow Tail is an Australian wine brand made by the Casella family in Yenda, New South Wales. Its range covers familiar red, white, rose, Moscato and sparkling styles.",
    story: "Filippo and Maria Casella migrated from Sicily to Australia in 1957 and established their family winery in 1969. John Casella launched Yellow Tail in 2001 with a fruit-forward style designed to make Australian wine easier to choose.",
    tastingNotes: [
      { title: "Red wines", description: "Shiraz, Cabernet Sauvignon and Merlot move through ripe berry and plum fruit, gentle spice and a rounded texture." },
      { title: "White and sparkling wines", description: "Chardonnay and Moscato bring citrus, stone fruit and floral sweetness, while the sparkling bottles add a fresh, lively finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Moscato, Chardonnay and sparkling wines well; serve the fuller reds slightly cool in a generous wine glass." },
      { subheading: "Food", description: "Pair Chardonnay with malai tikka, Shiraz with seekh kebab, Moscato with fruit chaat, and sparkling rose with grilled prawns." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["malai tikka", "seekh kebab", "fruit chaat", "grilled prawns", "soft cheese"] }],
    whyChoose: "A broad Australian range that makes familiar grape varieties and sweeter wine styles easy to explore.",
    faqs: [
      { question: "Where is Yellow Tail wine from?", answer: "Yellow Tail is made by the Casella family in Yenda, New South Wales, Australia." },
      { question: "Which Yellow Tail wine should I choose?", answer: "Choose Shiraz for ripe red fruit and spice, Chardonnay for a fuller white, or Moscato for a sweeter floral style." },
    ],
    finalVerdict: "Yellow Tail suits drinkers who want approachable Australian wines with clear grape names and easy food pairings.",
    metaTitle: "Yellow Tail Australian Wine Guide | BevOry",
    metaDescription: "Explore Yellow Tail wines, Australian history, grape styles, Indian food pairings, serving ideas and city-level prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/yellow-tail.webp",
  },
  "fishing-cat": {
    description: "Fishing Cat is an Italian wine label centred on wines from Abruzzo and other familiar Italian regions. Its collection includes Pecorino, Montepulciano d'Abruzzo, Cerasuolo d'Abruzzo, Pinot Grigio, Merlot and Chianti.",
    story: "Fishing Cat was developed to present regional Italian wines through a modern label created in 2017. The range connects Abruzzo grapes with well-known Italian and international varieties.",
    tastingNotes: [
      { title: "Abruzzo wines", description: "Pecorino brings citrus and floral notes, Montepulciano d'Abruzzo offers a smooth persistent red style, and Cerasuolo d'Abruzzo gives a brighter fruit-led profile." },
      { title: "Classic varieties", description: "Pinot Grigio leans delicate and savoury, while Merlot and Cabernet Sauvignon bring darker fruit and firmer tannin." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Pecorino, Pinot Grigio and rose wines; serve Chianti and fuller Abruzzo reds slightly cool." },
      { subheading: "Food", description: "Pair Pecorino with grilled fish, Pinot Grigio with chilli prawns, and Montepulciano d'Abruzzo with lamb kebabs or tomato pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "chilli prawns", "lamb kebabs", "tomato pasta", "aged cheese"] }],
    whyChoose: "A useful introduction to Abruzzo wine alongside familiar Italian red, white and rose styles.",
    faqs: [
      { question: "What kind of wine is Fishing Cat?", answer: "Fishing Cat is an Italian wine range that includes Abruzzo appellations and familiar international grape varieties." },
      { question: "Which Fishing Cat wine pairs with Indian food?", answer: "Try Pecorino with grilled fish, Pinot Grigio with chilli prawns, or Montepulciano d'Abruzzo with lamb kebabs." },
    ],
    finalVerdict: "Fishing Cat works well for drinkers comparing fresh Abruzzo whites, fruit-led rose and structured Italian reds.",
    metaTitle: "Fishing Cat Italian Wine Guide | BevOry",
    metaDescription: "Fishing Cat wine guide with Abruzzo grapes, tasting styles, Indian pairings, serving ideas and city-level prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/fishing-cat.webp",
  },
  paladin: {
    description: "Paladin is a family-owned Italian winery founded by Valentino Paladin in 1962 near Treviso. Its vineyards and cellar in Annone Veneto connect eastern Veneto and Friuli wine traditions.",
    story: "The Paladin family moved its winemaking base to Annone Veneto in the mid-1970s and planted vineyards along the historic Roman Postumia road. The range now spans Prosecco, Pinot Grigio, Merlot, Syrah and other regional wines.",
    tastingNotes: [
      { title: "Sparkling wines", description: "Prosecco and cuvee styles bring fine bubbles, orchard fruit, citrus and a clean aperitif finish." },
      { title: "Still wines", description: "Pinot Grigio and Chardonnay lean fresh and food-friendly, while Merlot and Syrah add red fruit, gentle spice and a softer tannin profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Prosecco and white wines well; serve Merlot and Syrah slightly cool in a medium red-wine glass." },
      { subheading: "Food", description: "Pair Prosecco with fried starters, Pinot Grigio with tandoori fish, Merlot with mushroom pasta, and Syrah with grilled lamb." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fried starters", "tandoori fish", "mushroom pasta", "grilled lamb", "mild cheese"] }],
    whyChoose: "A Veneto family winery with an accessible route from Prosecco and Pinot Grigio to softer Italian reds.",
    faqs: [
      { question: "Where is Paladin wine from?", answer: "Paladin is based in Annone Veneto, between the wine traditions of eastern Veneto and Friuli in Italy." },
      { question: "What wines does Paladin make?", answer: "Paladin makes Prosecco, Pinot Grigio, Chardonnay, Merlot, Syrah and other still and sparkling Italian wines." },
    ],
    finalVerdict: "Paladin suits drinkers who want Veneto sparkling wines, fresh whites and approachable food-led reds from one family producer.",
    metaTitle: "Paladin Italian Wine Guide | BevOry",
    metaDescription: "Paladin wine guide with Veneto history, Prosecco, Pinot Grigio, red-wine styles, Indian pairings and city prices on BevOry.",
    logoUrl: "https://www.paladin.it/newrelease/wp-content/themes/paladin/public/images/paladin-logo.png",
  },
  luxardo: {
    description: "Luxardo is an Italian family distiller founded by Girolamo Luxardo in Zara in 1821 and now based in Torreglia near Padua. Its range includes Maraschino Originale, Sambuca, Limoncello, bitters, aperitifs and cherry-led spirits.",
    story: "Maria Canevari developed the family's maraschino recipe in Zara before Girolamo Luxardo established the distillery. The family rebuilt the company in Torreglia in 1947, where copper pot stills, marasca cherry orchards and ageing vats remain central to production.",
    tastingNotes: [
      { title: "Maraschino", description: "Marasca cherry fruit, almond-like kernel notes and a dry aromatic finish give the clear liqueur its distinctive cocktail role." },
      { title: "Italian liqueurs", description: "Sambuca brings star anise, herbs and spice, while Limoncello focuses on bright lemon peel and fresh citrus acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Maraschino in a measured cocktail, serve Sambuca neat or with coffee, and chill Limoncello for a small after-dinner pour." },
      { subheading: "Food", description: "Pair Maraschino with almond biscuits, Sambuca with espresso desserts, and Limoncello with lemon tart or pistachio kulfi." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["almond biscuits", "espresso desserts", "lemon tart", "pistachio kulfi", "dark chocolate"] }],
    whyChoose: "A historic Italian liqueur house with sharply differentiated cherry, anise, citrus and bitter aperitif styles.",
    faqs: [
      { question: "What is Luxardo best known for?", answer: "Luxardo is best known for Maraschino Originale, a marasca cherry liqueur first developed by the founding family in Zara." },
      { question: "How should Luxardo liqueurs be served?", answer: "Use Maraschino in cocktails, serve Sambuca neat or with coffee, and pour Limoncello well chilled after a meal." },
    ],
    finalVerdict: "Luxardo is a strong choice for cocktail drinkers exploring classic Italian cherry, anise, citrus and bitter liqueurs.",
    metaTitle: "Luxardo Italian Liqueur Guide | BevOry",
    metaDescription: "Luxardo guide with Maraschino, Sambuca and Limoncello history, tasting notes, pairings, cocktail serves and city prices on BevOry.",
    logoUrl: "https://www.luxardo.it/wp-content/uploads/2018/11/logo-luxardo-hd.png",
  },
  woodbridge: {
    description: "Woodbridge by Robert Mondavi is a California wine brand founded in Lodi in 1979. Its range includes Cabernet Sauvignon, Chardonnay, Merlot, Pinot Noir, Sauvignon Blanc, Moscato and Zinfandel styles.",
    story: "Robert Mondavi grew up around Lodi and returned to the region to establish Woodbridge Winery near his childhood home. He built the label around true-to-varietal California wines intended for regular meals rather than formal occasions.",
    tastingNotes: [
      { title: "Red wines", description: "Cabernet Sauvignon, Merlot, Pinot Noir and Zinfandel move through blackberry, plum, red cherry, spice and soft oak." },
      { title: "White and rose wines", description: "Chardonnay brings orchard fruit and a rounded texture, while Sauvignon Blanc and Pinot Grigio lean fresher and White Zinfandel adds a softer fruit-led style." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill white, Moscato and White Zinfandel bottles; serve the reds slightly cool and give Cabernet a few minutes in the glass." },
      { subheading: "Food", description: "Pair Chardonnay with butter chicken, Sauvignon Blanc with grilled prawns, Merlot with mushroom tikka, and Cabernet with roast lamb." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter chicken", "grilled prawns", "mushroom tikka", "roast lamb", "berry dessert"] }],
    whyChoose: "A broad California collection for comparing familiar grape varieties without moving into highly technical wine styles.",
    faqs: [
      { question: "Who founded Woodbridge wine?", answer: "Robert Mondavi founded Woodbridge Winery near Lodi, California, in 1979." },
      { question: "Which Woodbridge wine should I try first?", answer: "Choose Sauvignon Blanc for a fresh white, Chardonnay for a rounder style, or Cabernet Sauvignon for darker fruit and oak." },
    ],
    finalVerdict: "Woodbridge is an approachable California range for drinkers choosing wine by familiar grape variety and food pairing.",
    metaTitle: "Woodbridge California Wine Guide | BevOry",
    metaDescription: "Woodbridge wine guide with Robert Mondavi history, California grape styles, Indian pairings, serving ideas and city prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/woodbridge.webp",
  },
  camas: {
    description: "Camas is a French single-varietal wine range made by the Anne de Joyeuse cooperative in Limoux. The collection covers IGP Pays d'Oc reds, whites and roses from grapes including Malbec, Syrah, Cabernet Sauvignon, Pinot Noir, Chardonnay, Sauvignon Blanc and Viognier.",
    story: "Anne de Joyeuse developed Camas to show the character of individual grape varieties across Limoux's Mediterranean, Atlantic and Pyrenean influences. The cooperative links the range to its Protect Planet programme and vineyard biodiversity work.",
    tastingNotes: [
      { title: "Red wines", description: "Malbec brings violet, blackcurrant and soft tannins, while Cabernet Sauvignon adds spice and green-pepper notes." },
      { title: "White and rose wines", description: "Sauvignon Blanc, Chardonnay and Viognier move from citrus and green fruit to rounder orchard and floral aromas, with Syrah and Pinot Noir used for rose styles." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill white and rose wines; serve Malbec, Syrah and Cabernet Sauvignon lightly cool rather than warm." },
      { subheading: "Food", description: "Pair Malbec with galouti kebabs, Cabernet with grilled lamb, Sauvignon Blanc with fish tikka, and Viognier with mild paneer curry." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "grilled lamb", "fish tikka", "mild paneer curry", "roasted vegetables"] }],
    whyChoose: "A clear French varietal range for comparing how familiar grapes behave in the Limoux and Pays d'Oc setting.",
    faqs: [
      { question: "Where is Camas wine made?", answer: "Camas is made by the Anne de Joyeuse cooperative in Limoux in southern France." },
      { question: "What grapes are used in Camas wines?", answer: "The range includes Malbec, Syrah, Cabernet Sauvignon, Pinot Noir, Chardonnay, Sauvignon Blanc, Chenin Blanc and Viognier." },
    ],
    finalVerdict: "Camas suits drinkers who want an uncomplicated way to compare French single-varietal reds, whites and roses.",
    metaTitle: "Camas French Wine Guide | BevOry",
    metaDescription: "Camas wine guide with Limoux origin, grape styles, tasting notes, Indian pairings, serving ideas and city-level prices on BevOry.",
    logoUrl: "https://www.annedejoyeuse.fr/wp-content/uploads/2021/12/logo-camas2.svg",
  },
  svedka: {
    description: "Svedka is a vodka brand created by Guillaume Cuvelier and launched in 1998 with Swedish production roots. Now part of Sazerac, its current range includes original vodka and fruit-led flavours such as Citron, Peach, Raspberry, Cherry Limeade and Mango Pineapple.",
    story: "Svedka began as a Swedish-produced vodka positioned around modern packaging and accessible cocktails. Sazerac acquired the brand in January 2025 and continues its original and flavoured vodka range.",
    tastingNotes: [
      { title: "Original vodka", description: "A clean, crisp vodka profile with a light grain character designed for straightforward mixed drinks." },
      { title: "Flavoured vodka", description: "Citron and Cherry Limeade bring citrus, while Raspberry, Peach, Blue Raspberry and Mango Pineapple move toward brighter fruit-led cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill the original vodka for a clean pour or mix it with soda; use flavoured bottles with restrained citrus and unsweetened mixers." },
      { subheading: "Food", description: "Pair Citron with grilled prawns, Peach with chilli paneer, Raspberry with dark chocolate, and original vodka with smoked fish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled prawns", "chilli paneer", "dark chocolate", "smoked fish", "citrus salad"] }],
    whyChoose: "A cocktail-focused vodka family with a neutral original style and clearly named fruit flavours.",
    faqs: [
      { question: "Who owns Svedka vodka?", answer: "Sazerac owns Svedka after acquiring the brand in January 2025." },
      { question: "Which Svedka flavour works in a simple highball?", answer: "Citron works with soda and lemon, while Peach or Mango Pineapple can be lengthened with unsweetened soda and fresh citrus." },
    ],
    finalVerdict: "Svedka suits cocktail drinkers who want a clean original vodka alongside direct citrus, berry, peach and tropical flavours.",
    metaTitle: "Svedka Vodka and Flavours Guide | BevOry",
    metaDescription: "Svedka vodka guide with brand history, original and fruit flavours, cocktail serves, Indian pairings and city prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/svedka.webp",
  },
  batasiolo: {
    description: "Batasiolo is an Italian wine estate run by the Dogliani family in Piedmont's Langhe hills. Its vineyards span Barolo, La Morra, Monforte d'Alba and Serralunga d'Alba, with wines ranging from Barolo and Barbera to Gavi, Moscato and sparkling styles.",
    story: "The Dogliani family named the estate after the Batasiolo vineyard beside the winery. Its holdings now include five Barolo crus: Cerequio, Bussia, Brunate, Briccolina and Boscareto.",
    tastingNotes: [
      { title: "Nebbiolo and Barolo", description: "Red cherry, dried flowers, herbs and firm tannins develop into deeper spice, earth and savoury complexity with age." },
      { title: "White and sparkling wines", description: "Gavi brings citrus, green fruit and a clean mineral line, while Moscato and Asti move toward floral aromas, peach and gentle sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Gavi, Moscato and sparkling wines; give Barolo time in a wide glass and serve it slightly below room temperature." },
      { subheading: "Food", description: "Pair Gavi with grilled fish, Barbera with tomato pasta, Barolo with lamb rogan josh, and Moscato with pista kulfi." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "tomato pasta", "lamb rogan josh", "pista kulfi", "aged cheese"] }],
    whyChoose: "A Langhe producer that offers both serious Nebbiolo-led reds and fresher Piedmont white and sparkling wines.",
    faqs: [
      { question: "Where is Batasiolo wine from?", answer: "Batasiolo is based in La Morra and farms vineyards across the Langhe in Piedmont, Italy." },
      { question: "Which grape is used for Batasiolo Barolo?", answer: "Batasiolo Barolo is made from Nebbiolo grown in the Barolo production area." },
    ],
    finalVerdict: "Batasiolo suits wine drinkers moving from fresh Gavi and floral Moscato toward structured Barolo and other Langhe reds.",
    metaTitle: "Batasiolo Piedmont Wine Guide | BevOry",
    metaDescription: "Batasiolo wine guide with Langhe vineyards, Barolo, Gavi and Moscato styles, Indian pairings, serving ideas and city prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/batasiolo.webp",
  },
  penfolds: {
    description: "Penfolds is an Australian wine house founded by Dr Christopher and Mary Penfold at Magill near Adelaide in 1844. Its collection includes Shiraz, Cabernet Sauvignon, Chardonnay and multi-region Bin wines led by a fruit-rich house style.",
    story: "The Penfold family planted vines at their Magill home and first made tonic and fortified wines. Later winemakers, including Max Schubert, developed the blending and maturation approach that shaped Grange and the modern Bin collection.",
    tastingNotes: [
      { title: "Red wines", description: "Shiraz and Cabernet-led bottles show concentrated black and red fruit, savoury spice, oak and a full mid-palate, with structure varying by Bin and region." },
      { title: "White wines", description: "Chardonnay moves through citrus, white stone fruit and fine oak, with cooler-region bottles carrying a brighter acid line." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Chardonnay and serve red wines slightly cool; give structured Bin reds time in a wide glass before the first sip." },
      { subheading: "Food", description: "Pair Chardonnay with tandoori lobster, Shiraz with pepper lamb chops, and Cabernet-led blends with galouti kebabs or mature cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori lobster", "pepper lamb chops", "galouti kebabs", "mature cheddar", "mushroom roast"] }],
    whyChoose: "An Australian wine house for comparing regional fruit, multi-region blending and the progression between numbered Bin releases.",
    faqs: [
      { question: "When was Penfolds founded?", answer: "Dr Christopher and Mary Penfold founded Penfolds at Magill near Adelaide in 1844." },
      { question: "What does a Penfolds Bin number mean?", answer: "A Bin number identifies a particular Penfolds wine and style within the collection rather than a simple quality ranking." },
    ],
    finalVerdict: "Penfolds suits drinkers exploring structured Australian Shiraz, Cabernet blends and regionally sourced Chardonnay through distinct Bin wines.",
    metaTitle: "Penfolds Australian Wine Guide | BevOry",
    metaDescription: "Penfolds wine guide with Magill history, Shiraz, Cabernet and Chardonnay styles, Indian pairings and city-level prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/penfolds.webp",
  },
  simba: {
    description: "Simba is an Indian beer brand that brews in its own brewery using small-batch recipes. Its range includes Wit, Stout, Light and Strong beers in bottle and can formats.",
    story: "Simba was created by beer drinkers who wanted direct control over recipes, ingredients and brewing. The brand built its range around distinct beer styles rather than one standard lager profile.",
    tastingNotes: [
      { title: "Wit", description: "A crisp wheat beer with orange peel, coriander and lemongrass over a light body." },
      { title: "Stout and lager styles", description: "Stout brings roasted coffee, caramel and dark chocolate, while Light and Strong labels move toward cleaner grain, malt and hop-led refreshment." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill the beer and pour into a clean glass with room for foam; allow Stout to warm slightly after pouring so its roast aromas open." },
      { subheading: "Food", description: "Pair Wit with fish tikka, Stout with chocolate cake, Light with masala peanuts, and Strong with kebabs or spicy pizza." },
    ],
    pairingIdeas: [{ title: "Indian pairings", items: ["fish tikka", "chocolate cake", "masala peanuts", "kebabs", "spicy pizza"] }],
    whyChoose: "An Indian beer range with clear wheat, stout, light and strong styles for different food and flavour preferences.",
    faqs: [
      { question: "What does Simba Wit taste like?", answer: "Simba Wit is crisp and light-bodied with orange peel, coriander and lemongrass." },
      { question: "What does Simba Stout taste like?", answer: "Simba Stout is medium-bodied with roasted coffee, caramel and dark-chocolate notes." },
    ],
    finalVerdict: "Simba suits Indian beer drinkers who want a clear choice between citrus-led Wit, roast-driven Stout and familiar light or strong styles.",
    metaTitle: "Simba Indian Beer Guide | BevOry",
    metaDescription: "Simba beer guide with Wit, Stout, Light and Strong styles, Indian food pairings, serving ideas and city-level prices on BevOry.",
    logoUrl: "https://static.livcheers.com/static/content/images/brand/simba.webp",
  },
};
