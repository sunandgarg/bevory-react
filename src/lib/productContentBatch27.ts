// Producer-led editorial. Source ledger: docs/editorial/product-batch-27-sources.md.
import type { ProductPublicDetail } from "./productContentBatch01.js";

export const PRODUCT_BATCH_CONTENT: Record<string, ProductPublicDetail> = {
  "bouchard-bourgogne-chardonnay-ecfb33b": {
    productName: "Bouchard Bourgogne Chardonnay", category: "Burgundy Chardonnay White Wine",
    shortOverview: "Bouchard Aîné & Fils presents Burgundy Chardonnay as an accessible introduction to the region's white wines. Orchard fruit and measured texture give it more breadth than a very sharp aperitif white.",
    craftStory: "The Bouchard Aîné house is based in Beaune, Burgundy. This Bourgogne bottling uses Chardonnay from the regional appellation rather than the narrower Chablis site; its fruit and cellar treatment may change between vintages.",
    tastingNotes: { nose: "Apple, pear and white flowers, with a light citrus edge.", palate: "Dry and medium-bodied, moving from orchard fruit to a soft, rounded middle.", finish: "Medium, with lemon peel and a gentle mineral trace." },
    servingGuide: { glassware: "Medium Chardonnay glass", idealTemperature: "Cool (10–12°C)", recommendation: "Chill, then let the glass warm briefly before tasting; serve with a creamy but not heavily spiced dish." },
    foodPairings: ["malai paneer tikka", "butter-garlic prawns", "grilled pomfret", "mushroom galouti"], whyBuyThis: "A regionally labelled Burgundy Chardonnay that makes the house style approachable without claiming a single-vineyard origin.",
    faqs: [{ question: "Is Bouchard Bourgogne Chardonnay the same as Bouchard Chablis?", answer: "No. Both use Chardonnay, but Bourgogne is a broader regional appellation and Chablis is a distinct northern Burgundy appellation." }, { question: "Should it be served ice-cold?", answer: "No. About 10–12°C preserves freshness without hiding the orchard-fruit detail." }],
    metaTitle: "Bouchard Bourgogne Chardonnay Price, Taste & Review | BevOry", metaDescription: "Bouchard Bourgogne Chardonnay offers apple, pear and soft texture. Pair with malai paneer; check city prices on BevOry."
  },
  "bouchard-chablis-07bd1b3": {
    productName: "Bouchard Chablis", category: "Chablis Chardonnay White Wine",
    shortOverview: "Bouchard Aîné's Chablis is a Chardonnay from the Serein valley, not a generic buttery white Burgundy. Citrus, orchard fruit and a saline finish make it apt for seafood.",
    craftStory: "Chablis vineyards grow on limestone-rich soils in northern Burgundy. Bouchard Aîné's producer notes describe temperature-controlled stainless-steel fermentation and lees ageing for a documented vintage, preserving fruit and freshness without a heavy oak claim.",
    tastingNotes: { nose: "Citrus, pear, mandarin and fresh almond.", palate: "Dry, fresh and generous, with citrus fruit and a mineral line.", finish: "Medium-long, clean and lightly saline." },
    servingGuide: { glassware: "Tulip-shaped white-wine glass", idealTemperature: "Chilled (8–10°C)", recommendation: "Serve cool, not frozen, with fish or shellfish; avoid strong sweet sauces that flatten its acidity." },
    foodPairings: ["coastal rava-fried fish", "tandoori prawns", "lemon rice", "malai broccoli"], whyBuyThis: "Its named Chablis origin gives a clearer mineral, seafood-ready profile than broad Bourgogne Chardonnay.",
    faqs: [{ question: "Is Chablis made from Chardonnay?", answer: "Yes. Chablis is a white Burgundy appellation made from Chardonnay." }, { question: "Is this an oaky Chardonnay?", answer: "The producer's documented Chablis process emphasises stainless-steel fermentation and lees, rather than pronounced new oak." }],
    metaTitle: "Bouchard Chablis Price, Taste & Review | BevOry", metaDescription: "Bouchard Chablis brings citrus, pear and saline freshness. Pair with rava-fried fish; check indicative city prices on BevOry."
  },
  "bouchard-bourgogne-pinot-noir-9399eb3": {
    productName: "Bouchard Bourgogne Pinot Noir", category: "Burgundy Pinot Noir Red Wine",
    shortOverview: "A lighter red Burgundy from Bouchard Aîné & Fils built around Pinot Noir. Its cherry fruit and modest tannin suit food that would overwhelm neither a delicate white nor a heavy Cabernet.",
    craftStory: "Bouchard Aîné is headquartered in Beaune and makes this Pinot Noir under the regional Bourgogne appellation. Regional sourcing gives a broader Burgundy introduction than a single village or premier cru; exact élevage varies by vintage.",
    tastingNotes: { nose: "Red cherry, raspberry and a little woodland spice.", palate: "Light to medium-bodied and dry, with bright red fruit and fine tannin.", finish: "Medium, with cherry skin and a faint earthy note." },
    servingGuide: { glassware: "Large Burgundy glass", idealTemperature: "Slightly cool (14–16°C)", recommendation: "Give the bottle a short chill in warm weather and avoid prolonged decanting of a youthful regional Pinot." },
    foodPairings: ["tandoori chicken", "mushroom galouti", "paneer tikka", "roast duck"], whyBuyThis: "An approachable Pinot Noir for readers discovering Burgundy's lighter red-wine side.",
    faqs: [{ question: "Is this a white Burgundy?", answer: "No. It is the red Bourgogne Pinot Noir, distinct from Bouchard's Chardonnay." }, { question: "Should Pinot Noir be served at 20°C?", answer: "A light Burgundy often shows better around 14–16°C, especially in a warm room." }],
    metaTitle: "Bouchard Bourgogne Pinot Noir Price, Taste & Review | BevOry", metaDescription: "Cherry, raspberry and fine tannin shape Bouchard Bourgogne Pinot Noir. Pair with tandoori chicken; check city prices on BevOry."
  },
  "trapiche-oak-cask-malbec-fa9c460": {
    productName: "Trapiche Oak Cask Malbec", category: "Mendoza Oak-Aged Malbec Red Wine",
    shortOverview: "Trapiche's Oak Cask Malbec balances ripe Mendoza fruit with a clear barrel influence. It is a different proposition from the producer's unoaked or lighter entry-level Malbecs.",
    craftStory: "Trapiche draws Malbec from Argentine vineyards at roughly 750–1,100 metres elevation for this range. Its producer sheet specifies twelve months in French and American oak barrels, giving wood-spice detail to the dark fruit.",
    tastingNotes: { nose: "Plum, black cherry, toast and black pepper.", palate: "Full and rounded, with saturated berry fruit and chewy but ripe tannin.", finish: "Long, spicy and dark-fruited." },
    servingGuide: { glassware: "Large red-wine glass", idealTemperature: "Cool room temperature (16–18°C)", recommendation: "Give a young bottle 30 minutes of air and pour alongside a grilled or slow-cooked main." },
    foodPairings: ["mutton ghee roast", "lamb chops", "mushroom kebab", "aged cheddar"], whyBuyThis: "The documented French-and-American-oak maturation supplies genuine cask character rather than an assumed oak note.",
    faqs: [{ question: "Does Trapiche Oak Cask Malbec see barrels?", answer: "Yes. Trapiche specifies twelve months in French and American oak for this expression." }, { question: "Is it a sweet Malbec?", answer: "No. Its ripe fruit sits within a dry red wine with tannin and spice." }],
    metaTitle: "Trapiche Oak Cask Malbec Price, Taste & Review | BevOry", metaDescription: "Trapiche Oak Cask Malbec has plum, toast and pepper. Pair with mutton ghee roast; check indicative city prices on BevOry."
  },
  "villa-sandi-asolo-prosecco-d052796": {
    productName: "Villa Sandi Asolo Prosecco", category: "Asolo Prosecco Superiore DOCG Sparkling Wine",
    shortOverview: "An Asolo Prosecco Superiore from Villa Sandi, distinct from the house's broader Il Fresco Prosecco DOC. Its fine bubbles and pear-led freshness make it a practical welcome drink.",
    craftStory: "Villa Sandi works with Glera in the Asolo hills of Veneto for its DOCG Prosecco. A cool, controlled second fermentation in pressurised tank builds the bubbles while keeping floral and fresh-fruit aromas prominent.",
    tastingNotes: { nose: "Green apple, pear and acacia blossom.", palate: "Light and lively, with fine bubbles, orchard fruit and refreshing acidity.", finish: "Short to medium, clean and gently floral." },
    servingGuide: { glassware: "Tulip sparkling-wine glass", idealTemperature: "Chilled (6–8°C)", recommendation: "Chill the bottle thoroughly, open gently and pour into a tulip glass rather than a wide coupe." },
    foodPairings: ["tandoori prawns", "malai paneer tikka", "vegetable pakora", "grilled asparagus"], whyBuyThis: "Its Asolo DOCG origin makes the wine more specific than a generic Prosecco label.",
    faqs: [{ question: "Is Asolo Prosecco the same as Il Fresco?", answer: "No. Asolo is a DOCG appellation; Il Fresco is a separate Villa Sandi Prosecco DOC line." }, { question: "Which grape leads it?", answer: "Glera is the principal Prosecco grape." }],
    metaTitle: "Villa Sandi Asolo Prosecco Price, Taste & Review | BevOry", metaDescription: "Pear, apple and fine bubbles define Villa Sandi Asolo Prosecco. Pair with tandoori prawns; check city prices on BevOry."
  },
  "villa-sandi-fresco-prosecco-wine-85d427e": {
    productName: "Villa Sandi Il Fresco", category: "Prosecco DOC Sparkling Wine",
    shortOverview: "Il Fresco is Villa Sandi's Prosecco DOC line, made for immediate freshness rather than long cellaring. Apple and white-flower notes sit above a light, sociable mousse.",
    craftStory: "Villa Sandi works with Glera from the Prosecco DOC area in northeastern Italy. The producer describes gentle pressing, controlled-temperature fermentation and a tank-based second fermentation that retains harvest aromatics.",
    tastingNotes: { nose: "Green apple, pear and white blossom.", palate: "Light, lively and fruit-led, with brisk bubbles and citrus-accented apple.", finish: "Short to medium, clean and floral." },
    servingGuide: { glassware: "Tulip sparkling-wine glass", idealTemperature: "Chilled (6–8°C)", recommendation: "Serve soon after opening; keep the bottle cold between pours to preserve the bubbles." },
    foodPairings: ["paneer tikka", "tandoori prawns", "vegetable tempura", "cucumber chaat"], whyBuyThis: "An easy-opening Prosecco with a straightforward producer-documented method.",
    faqs: [{ question: "Is Il Fresco an Asolo DOCG wine?", answer: "No. Il Fresco belongs to Villa Sandi's Prosecco DOC range." }, { question: "Should it be decanted?", answer: "No. Pour it chilled directly into a sparkling-wine glass to keep its bubbles." }],
    metaTitle: "Villa Sandi Il Fresco Price, Taste & Review | BevOry", metaDescription: "Il Fresco Prosecco offers apple, pear and lively bubbles. Pair with paneer tikka; check indicative city prices on BevOry."
  },
  "villa-sandi-pinot-grigio-b80562f": {
    productName: "Villa Sandi Pinot Grigio", category: "Italian Pinot Grigio White Wine",
    shortOverview: "A still Pinot Grigio from Villa Sandi, not a Prosecco in a different bottle. Its citrus-and-pear profile works best beside light Indian starters.",
    craftStory: "Villa Sandi's Pinot Grigio comes from northeastern Italy, where the variety can retain lively acidity. The house focuses on clean fruit in its white-wine range; the bottle's appellation and vintage govern the exact vineyard origin.",
    tastingNotes: { nose: "Pear, green apple and lemon peel.", palate: "Light, dry and crisp, with orchard fruit and a little mineral tension.", finish: "Short to medium, clean and citrus-led." },
    servingGuide: { glassware: "Medium white-wine glass", idealTemperature: "Chilled (8–10°C)", recommendation: "Serve cool with fish or lightly spiced vegetables; do not treat this still wine as sparkling." },
    foodPairings: ["rava-fried fish", "cucumber chaat", "tandoori prawns", "malai paneer tikka"], whyBuyThis: "A fresh, still Italian white that broadens Villa Sandi beyond its Prosecco reputation.",
    faqs: [{ question: "Does Villa Sandi Pinot Grigio have bubbles?", answer: "This listing refers to the still white wine, not the sparkling Prosecco range." }, { question: "How cold should it be served?", answer: "Around 8–10°C, cool enough for freshness but not icy." }],
    metaTitle: "Villa Sandi Pinot Grigio Price, Taste & Review | BevOry", metaDescription: "Villa Sandi Pinot Grigio offers crisp pear and lemon. Pair with rava-fried fish; check indicative city prices on BevOry."
  },
  "terrazas-reserva-malbec-bab617f": {
    productName: "Terrazas Reserva Malbec", category: "Mendoza High-Altitude Malbec Red Wine",
    shortOverview: "Terrazas de los Andes draws this Reserva Malbec from high-altitude Mendoza vineyards. It aims for fresh, layered plum fruit rather than a heavy, jammy finish.",
    craftStory: "The producer blends parcels from Uco Valley and Las Compuertas in Luján de Cuyo. A documented 2023 release drew on more than one hundred parcels and combined used French-oak ageing with a tank-aged share to protect fruit freshness.",
    tastingNotes: { nose: "Plum, blackberry, violet and cool-climate spice.", palate: "Full but vibrant, with polished tannin and balanced acidity beneath dark fruit.", finish: "Long, fresh and lightly spicy." },
    servingGuide: { glassware: "Large red-wine glass", idealTemperature: "Cool room temperature (16–18°C)", recommendation: "Give a young bottle about 30 minutes of air; serve with lamb or a substantial vegetarian main." },
    foodPairings: ["lamb chops", "mutton seekh", "mushroom galouti", "70% dark chocolate"], whyBuyThis: "Its high-altitude sourcing gives ripe Malbec a welcome line of freshness.",
    faqs: [{ question: "Where is Terrazas Reserva Malbec grown?", answer: "Its producer identifies high vineyards in Uco Valley and Luján de Cuyo, Mendoza." }, { question: "Is this a single-vineyard wine?", answer: "No. Reserva Malbec is blended from multiple estate parcels." }],
    metaTitle: "Terrazas Reserva Malbec Price, Taste & Review | BevOry", metaDescription: "Terrazas Reserva Malbec layers plum, violet and polished tannin. Pair with lamb chops; check indicative city prices on BevOry."
  },
  "villa-antinori-villa-antinori-toscana-rosso-5369ca2": {
    productName: "Villa Antinori Rosso", category: "Toscana IGT Red Wine",
    shortOverview: "Villa Antinori Rosso is the Antinori family's Tuscan red, named by Niccolò Antinori in 1928. It combines cherry-led fruit with a savoury, food-ready shape.",
    craftStory: "Antinori sources this wine from its Tuscan estates and vinifies and matures it in the family cellars. The 2022 producer note describes cherry, currant, spice, vanilla and hazelnut, while each vintage has its own final blend.",
    tastingNotes: { nose: "Red cherry, currant, spice and a hazelnut hint.", palate: "Medium-bodied and mouth-filling, with lively freshness and supple tannin.", finish: "Persistent, dry, with cherry and light vanilla." },
    servingGuide: { glassware: "Medium red-wine glass", idealTemperature: "Cool room temperature (16–18°C)", recommendation: "Open 20 minutes before dinner; a brief chill helps if the room is hot." },
    foodPairings: ["tandoori chicken", "mutton seekh", "mushroom galouti", "tomato-based pasta"], whyBuyThis: "A historic Tuscan family label with a clear food-led purpose.",
    faqs: [{ question: "Was Villa Antinori first made in 1928?", answer: "Yes. Antinori credits Niccolò Antinori with the first Villa Antinori red in 1928." }, { question: "Is this Villa Antinori Bianco?", answer: "No. Rosso is the red wine; the family also produces a separate white." }],
    metaTitle: "Villa Antinori Rosso Price, Taste & Review | BevOry", metaDescription: "Villa Antinori Rosso shows cherry, spice and supple tannin. Pair with tandoori chicken; check city prices on BevOry."
  },
  "mirabeau-classic-cotes-de-provence-rose-wine-e1060ca": {
    productName: "Mirabeau Classic Rose", category: "Cotes de Provence Rosé Wine",
    shortOverview: "Mirabeau Classic is a pale, dry Côtes de Provence rosé with a strawberry-and-raspberry core. It belongs with sunny, lightly seasoned food rather than dessert.",
    craftStory: "Maison Mirabeau selects grapes for Classic from Provence vineyards and handles the juice gently to preserve its pale colour and fresh fruit. The producer's vintage sheet documents protective cellar handling; blend proportions change by year.",
    tastingNotes: { nose: "Strawberry, raspberry, pear and citrus blossom.", palate: "Light and dry, with juicy red fruit balanced by bright acidity.", finish: "Medium, fresh, with redcurrant and pear." },
    servingGuide: { glassware: "Rosé glass", idealTemperature: "Chilled (8–10°C)", recommendation: "Chill before lunch and keep the bottle cold; avoid ice in the glass." },
    foodPairings: ["tandoori prawns", "cucumber chaat", "malai paneer tikka", "grilled red mullet"], whyBuyThis: "A recognisable Provence rosé whose producer-documented freshness suits a warm-weather Indian table.",
    faqs: [{ question: "Is Mirabeau Classic a sweet rosé?", answer: "No. It is styled as a dry Côtes de Provence rosé." }, { question: "Is it the same as Mirabeau Etoile?", answer: "No. Classic and Étoile are separate wines in Maison Mirabeau's range." }],
    metaTitle: "Mirabeau Classic Rose Price, Taste & Review | BevOry", metaDescription: "Mirabeau Classic Rose offers strawberry, pear and crisp acidity. Pair with tandoori prawns; check city prices on BevOry."
  },
  "aix-provence-rose-8142569": {
    productName: "AIX Provence Rose", category: "Coteaux d'Aix-en-Provence Rosé Wine",
    shortOverview: "AIX is Maison Saint Aix's pale estate rosé from Coteaux d'Aix-en-Provence. It balances red fruit with citrus and a dry, mineral finish.",
    craftStory: "Maison Saint Aix grows Grenache, Syrah and Cinsault on limestone-influenced hills in the Bouches-du-Rhône. The Mistral helps keep the vineyards dry, while cool handling during rosé production protects delicate fruit aromas.",
    tastingNotes: { nose: "Strawberry, raspberry, citrus and white flowers.", palate: "Light but rounded, with red fruit, crisp acidity and a silky texture.", finish: "Medium-long, dry and lightly mineral." },
    servingGuide: { glassware: "Rosé or medium white-wine glass", idealTemperature: "Chilled (8–10°C)", recommendation: "Serve cool with seafood or vegetable starters; avoid adding ice to the glass." },
    foodPairings: ["coastal rava-fried fish", "tandoori prawns", "cucumber chaat", "malai paneer tikka"], whyBuyThis: "Estate-grown Provençal grapes give this rosé a precise origin beyond its pale colour.",
    faqs: [{ question: "Where is AIX Rosé made?", answer: "Maison Saint Aix makes it in the Coteaux d'Aix-en-Provence appellation." }, { question: "Is AIX Rosé sweet?", answer: "The estate presents it as a fresh, dry rosé rather than a sweet pink wine." }],
    metaTitle: "AIX Provence Rose Price, Taste & Review | BevOry", metaDescription: "AIX Provence Rose brings strawberry, citrus and a dry mineral finish. Pair with rava-fried fish; check city prices on BevOry."
  },
  "mateus-rose-e3d6983": {
    productName: "Mateus Rose", category: "Portuguese Rosé Wine",
    shortOverview: "Mateus Original is Portugal's long-running, lightly sparkling rosé in the rounded flask-shaped bottle. Its easy fruit and gentle sweetness set it apart from bone-dry Provence rosé.",
    craftStory: "Fernando Van Zeller Guedes launched Mateus in 1942, and Sogrape still manages the brand. Original Rosé is a Portuguese blended wine; the exact grape mix can change, so the physical bottle is the place to confirm it.",
    tastingNotes: { nose: "Fresh strawberry, raspberry and a hint of floral fruit.", palate: "Light, gently spritzy and fruit-led, with sweetness checked by acidity.", finish: "Short, refreshing and red-berry toned." },
    servingGuide: { glassware: "Medium rosé glass", idealTemperature: "Well chilled (7–9°C)", recommendation: "Serve chilled straight from the bottle; keep the opened wine cold to hold its light sparkle." },
    foodPairings: ["paneer tikka", "vegetable pakora", "spicy tandoori chicken", "fruit chaat"], whyBuyThis: "Its light sparkle and soft fruit make a distinct alternative to dry still rosé.",
    faqs: [{ question: "Is Mateus Original the same as Mateus Dry Selection?", answer: "No. Sogrape describes Dry Selection as drier and lighter than the iconic Original." }, { question: "When was Mateus created?", answer: "Sogrape traces the brand to Fernando Van Zeller Guedes in 1942." }],
    metaTitle: "Mateus Rose Price, Taste & Review | BevOry", metaDescription: "Mateus Rose offers light sparkle and red-berry fruit. Pair with paneer tikka; check indicative city prices on BevOry."
  },
  "bogle-pinot-noir-red-wine-3f962e2": {
    productName: "Bogle Pinot Noir", category: "California Pinot Noir Red Wine",
    shortOverview: "Bogle Pinot Noir is a California red with cherry fruit and a softer frame than Cabernet Sauvignon. Its restrained tannin makes it useful with poultry and mushrooms.",
    craftStory: "The Bogle family is based in Clarksburg, California, and sources Pinot Noir for an approachable, elegant style. Its producer's vintage sheet describes red cherry and dried-herb detail; grape sources and oak treatment can shift by year.",
    tastingNotes: { nose: "Red cherry, raspberry and a touch of dried herb.", palate: "Medium-bodied and supple, with juicy red fruit and gentle tannin.", finish: "Medium, with cherry skin and light spice." },
    servingGuide: { glassware: "Large Burgundy glass", idealTemperature: "Slightly cool (14–16°C)", recommendation: "A short chill helps in warm weather; pour without a long decant." },
    foodPairings: ["tandoori chicken", "mushroom galouti", "paneer tikka", "roast duck"], whyBuyThis: "It offers California Pinot fruit without the heavier grip of the region's Cabernets.",
    faqs: [{ question: "Is Bogle Pinot Noir a Cabernet?", answer: "No. It is a Pinot Noir bottling with a lighter tannic profile." }, { question: "Where is Bogle based?", answer: "The family winery is based in Clarksburg, California." }],
    metaTitle: "Bogle Pinot Noir Price, Taste & Review | BevOry", metaDescription: "Bogle Pinot Noir offers cherry, herbs and soft tannin. Pair with tandoori chicken; check indicative city prices on BevOry."
  },
  "man-family-skaapveld-syrah-c9de70a": {
    productName: "MAN Skaapveld Syrah", category: "South African Syrah Red Wine",
    shortOverview: "Skaapveld is MAN Family Wines' South African Syrah, named for grazing land alongside its vineyards. Dark berry fruit and pepper give it a useful match for a smoky grill.",
    craftStory: "MAN works with Western Cape growers for this Syrah. The producer's fact sheet ties the Skaapveld name to sheep-grazing land and describes the blend and oak regimen by vintage; it is not an Australian Shiraz under another label.",
    tastingNotes: { nose: "Blackberry, plum and cracked pepper.", palate: "Medium to full-bodied, with dark fruit, a savoury edge and rounded tannin.", finish: "Medium-long, peppery and dark-fruited." },
    servingGuide: { glassware: "Large red-wine glass", idealTemperature: "Cool room temperature (16–18°C)", recommendation: "Open 20–30 minutes before dinner and serve with grilled or slow-cooked food." },
    foodPairings: ["mutton seekh", "tandoori lamb chops", "smoked mushroom tikka", "lamb rogan josh"], whyBuyThis: "Its pepper-led South African Syrah style works particularly well with Indian grilled spice.",
    faqs: [{ question: "Where is Skaapveld Syrah from?", answer: "MAN Family Wines makes it from South African Western Cape fruit." }, { question: "What does Skaapveld mean?", answer: "The producer links the name to sheep-grazing land beside vineyards." }],
    metaTitle: "MAN Skaapveld Syrah Price, Taste & Review | BevOry", metaDescription: "MAN Skaapveld Syrah brings blackberry and pepper. Pair with mutton seekh; check indicative city prices on BevOry."
  },
  "zenato-ripassa-valpolicella-doc-sup-0713ede": {
    productName: "Zenato Ripassa", category: "Valpolicella Ripasso Superiore Red Wine",
    shortOverview: "Zenato's Ripassa is a Valpolicella Ripasso Superiore, not Amarone in a lighter bottle. The ripasso method brings richer cherry fruit, spice and texture to the region's red blend.",
    craftStory: "Zenato works with Corvina Veronese, Corvinone and Rondinella in Valpolicella. The wine undergoes a second fermentation on Amarone grape skins, then matures in oak; published grape percentages differ between producer sheets and vintages.",
    tastingNotes: { nose: "Black cherry, plum, cocoa and warm spice.", palate: "Fuller than basic Valpolicella, with ripe fruit and smooth, fine tannin.", finish: "Long, with cherry, chocolate and spice." },
    servingGuide: { glassware: "Large red-wine glass", idealTemperature: "Cool room temperature (16–18°C)", recommendation: "Give a young bottle 30 minutes of air and serve with a rich savoury dish." },
    foodPairings: ["mutton ghee roast", "lamb rogan josh", "mushroom galouti", "aged Parmigiano Reggiano"], whyBuyThis: "The documented ripasso process adds depth without making this wine identical to Amarone.",
    faqs: [{ question: "Is Ripassa an Amarone?", answer: "No. It is Valpolicella Ripasso Superiore, made with a second fermentation on Amarone grape skins." }, { question: "Which grapes are used?", answer: "Zenato lists Corvina Veronese, Corvinone and Rondinella, with proportions varying by release." }],
    metaTitle: "Zenato Ripassa Price, Taste & Review | BevOry", metaDescription: "Zenato Ripassa layers cherry, cocoa and spice. Pair with mutton ghee roast; check indicative city prices on BevOry."
  },
  "freixenet-cordon-negro-brut-2cabfe2": {
    productName: "Freixenet Cordon Negro Brut", category: "Spanish Cava Brut Sparkling Wine",
    shortOverview: "Cordón Negro Brut is a Catalan cava, not Italian Prosecco. Crisp apple, pear and citrus make its traditional-method bubbles useful with fried snacks.",
    craftStory: "Freixenet blends Penedès grapes Parellada, Macabeo and Xarel·lo for this D.O. Cava bottling. A second fermentation in bottle and time on lees build fine bubbles; published minimum ageing varies by market sheet, so the specific label governs.",
    tastingNotes: { nose: "Green apple, ripe pear and bright citrus.", palate: "Light, clean and lively, with apple fruit and brisk bubbles.", finish: "Medium, crisp, with citrus and a small ginger note." },
    servingGuide: { glassware: "Tulip sparkling-wine glass", idealTemperature: "Well chilled (6–8°C)", recommendation: "Chill fully, open gently and pour in small amounts to preserve its mousse." },
    foodPairings: ["vegetable pakora", "rava-fried fish", "tandoori prawns", "crispy paneer bites"], whyBuyThis: "Its classic three-grape cava blend and dry dosage give it a clear identity beyond the black bottle.",
    faqs: [{ question: "Is Cordon Negro a Prosecco?", answer: "No. It is Spanish D.O. Cava made from Parellada, Macabeo and Xarel·lo." }, { question: "What does Brut indicate?", answer: "It denotes a dry sparkling-wine dosage; Freixenet lists about 9 g/L for the Brut version." }],
    metaTitle: "Freixenet Cordon Negro Brut Price, Taste & Review | BevOry", metaDescription: "Freixenet Cordon Negro Brut brings apple, pear and crisp bubbles. Pair with pakora; check indicative city prices on BevOry."
  },
  "black-tower-riesling-aa1b8bf": {
    productName: "Black Tower Riesling", category: "German Medium-Sweet Riesling White Wine",
    shortOverview: "Black Tower Riesling is a German medium-sweet white, not a bone-dry Mosel bottling. Apple, lemon and honey make its sweetness particularly useful with spice.",
    craftStory: "Reh Kendermann produces Black Tower Riesling from German fruit and identifies the wine as a Rhine country wine. The producer describes citrus, apple and honey with elevated Riesling acidity, which prevents the sweetness from feeling flat.",
    tastingNotes: { nose: "Green apple, lemon and a honeyed note.", palate: "Light and medium-sweet, with ripe orchard fruit balanced by lively acidity.", finish: "Medium, fruity and citrus-clean." },
    servingGuide: { glassware: "Medium white-wine glass", idealTemperature: "Chilled (8–10°C)", recommendation: "Serve chilled with moderate spice; avoid pairing it with a very sweet dessert that would dull the acidity." },
    foodPairings: ["malai paneer tikka", "Thai green curry", "tandoori prawns", "cucumber chaat"], whyBuyThis: "A named, medium-sweet Riesling for drinkers who want fruit but still need refreshing acidity.",
    faqs: [{ question: "Is Black Tower Riesling dry?", answer: "No. Reh Kendermann lists this wine as medium-sweet." }, { question: "Is it a Riesling-Gewurztraminer blend?", answer: "No. Black Tower sells a separate Riesling-Gewürztraminer; this bottling is labelled Riesling." }],
    metaTitle: "Black Tower Riesling Price, Taste & Review | BevOry", metaDescription: "Black Tower Riesling pairs apple, honey and lively acidity. Try it with malai paneer; check city prices on BevOry."
  },
  "haku-vodka-2e41827": {
    productName: "Haku Vodka", category: "Japanese Rice Vodka",
    shortOverview: "Haku is a Japanese vodka built around white rice rather than wheat or potato. Its soft sweetness and clean texture suit a dry Martini or a restrained soda highball.",
    craftStory: "The House of Suntory ferments white rice with koji in Kagoshima, distils it using pot and column stills, then blends and filters the spirit through bamboo charcoal in Osaka. Haku means white in Japanese, reflecting its rice base.",
    tastingNotes: { nose: "Soft steamed-rice sweetness and a faint floral lift.", palate: "Silky and lightly sweet, moving towards a clean, almost mineral centre.", finish: "Short to medium, gentle and dry with a soft rice echo." },
    servingGuide: { glassware: "Chilled Martini glass or highball glass", idealTemperature: "Well chilled (4–8°C)", recommendation: "Try a dry Vodka Martini first; for a longer serve use cold soda and a thin lemon peel." },
    foodPairings: ["rava-fried fish", "malai paneer tikka", "cucumber chaat", "tandoori prawns"], whyBuyThis: "Koji fermentation and bamboo-charcoal filtration give this rice vodka a distinct production story.",
    faqs: [{ question: "What is Haku made from?", answer: "The House of Suntory makes Haku from Japanese white rice fermented with koji." }, { question: "Is Haku charcoal filtered?", answer: "Yes. Suntory describes filtration through bamboo charcoal after distillation and blending." }],
    metaTitle: "Haku Vodka Price, Taste & Review | BevOry", metaDescription: "Haku Vodka is a silky Japanese rice spirit. Try it with tandoori prawns and check indicative city prices on BevOry."
  },
  "hapusa-dry-gin-2c52ba2": {
    productName: "Hapusa Dry Gin", category: "Indian Himalayan Dry Gin",
    shortOverview: "Hapusa is a Goa-made gin with Himalayan juniper at its centre. Its earthy, pine-led profile is more savoury than a citrus-heavy London Dry.",
    craftStory: "NAO Spirits builds Hapusa around Himalayan juniper; the name itself refers to juniper in Sanskrit. The producer describes pine, wildflowers and earthy spice, making the juniper's mountain origin part of the gin's identity.",
    tastingNotes: { nose: "Fresh pine, wildflower and a dry earthy note.", palate: "Juniper-forward and textured, with spice and a restrained floral edge.", finish: "Medium, dry and gently spicy, with lingering pine." },
    servingGuide: { glassware: "Copa or highball glass", idealTemperature: "Chilled (6–10°C)", recommendation: "Taste a small measure cold first, then add tonic and a modest citrus garnish so the juniper stays audible." },
    foodPairings: ["cucumber chaat", "malai paneer tikka", "tandoori prawns", "rava-fried fish"], whyBuyThis: "Himalayan juniper gives a clear regional identity to this Indian gin.",
    faqs: [{ question: "Where is Hapusa made?", answer: "NAO Spirits makes Hapusa in Goa, using Himalayan juniper." }, { question: "Is Hapusa a sweet gin?", answer: "No. The producer presents a juniper-led dry gin with earthy and spicy notes." }],
    metaTitle: "Hapusa Dry Gin Price, Taste & Review | BevOry", metaDescription: "Hapusa Dry Gin brings Himalayan juniper, pine and spice. Pair with cucumber chaat; check city prices on BevOry."
  },
  "jaisalmer-gin-e4ce9cf": {
    productName: "Jaisalmer Gin", category: "Indian Craft Gin",
    shortOverview: "Jaisalmer is an Indian craft gin named for Rajasthan's desert city. Coriander, vetiver and Darjeeling tea give its juniper-led base a distinctly Indian botanical frame.",
    craftStory: "Radico Khaitan uses triple-distilled grain spirit and redistils it in copper pot stills with eleven botanicals, seven sourced from India. The Indian selection includes Jaisalmer vetiver and coriander, southern cubeb and lemongrass, and Darjeeling tea.",
    tastingNotes: { nose: "Juniper, lemon peel and coriander over a light herbal note.", palate: "Dry and aromatic, with citrus opening into earthy vetiver and peppery spice.", finish: "Medium, clean and herbal, with a faint tea-like dryness." },
    servingGuide: { glassware: "Copa or highball glass", idealTemperature: "Chilled (6–10°C)", recommendation: "Use plain tonic, plenty of ice and a restrained lemon peel; strong flavoured tonic can mask its botanicals." },
    foodPairings: ["tandoori prawns", "cucumber chaat", "malai paneer tikka", "coastal rava-fried fish"], whyBuyThis: "Its eleven-botanical recipe connects a familiar gin style to ingredients from across India.",
    faqs: [{ question: "How many botanicals are in Jaisalmer Gin?", answer: "Radico Khaitan lists eleven botanicals, including seven sourced from India." }, { question: "Does Jaisalmer Gin contain tea?", answer: "Yes. The producer names Darjeeling tea among its botanicals." }],
    metaTitle: "Jaisalmer Gin Price, Taste & Review | BevOry", metaDescription: "Jaisalmer Gin layers juniper, citrus and Indian botanicals. Pair with tandoori prawns; check city prices on BevOry."
  },
  "kinobi-ki-no-bi-gin-a8c62f8": {
    productName: "KI NO BI Gin", category: "Kyoto Dry Gin",
    shortOverview: "KI NO BI is Kyoto Distillery's Japanese gin, shaped by yuzu, sansho and gyokuro tea. Its citrus and green-tea accents are precise rather than confectionery-sweet.",
    craftStory: "The Kyoto Distillery launched KI NO BI in 2016 using a rice-spirit base. Botanicals are distilled in separate flavour groups before blending; the documented selection also includes red shiso and bamboo leaves.",
    tastingNotes: { nose: "Yuzu zest, juniper and a fresh green-tea note.", palate: "Supple and dry, with bright citrus followed by sansho's tingle and leafy depth.", finish: "Medium-long, crisp and aromatic with citrus peel and light spice." },
    servingGuide: { glassware: "Chilled Martini glass", idealTemperature: "Chilled (6–10°C)", recommendation: "Start with a dry Martini or a light gin and soda; keep garnish minimal to preserve the tea and yuzu." },
    foodPairings: ["rava-fried fish", "tandoori prawns", "cucumber chaat", "malai paneer tikka"], whyBuyThis: "Rice spirit and separately distilled Japanese botanicals give this gin a distinctive Kyoto signature.",
    faqs: [{ question: "Is KI NO BI made in Kyoto?", answer: "Yes. The Kyoto Distillery makes the gin in Kyoto, Japan." }, { question: "What gives KI NO BI its citrus character?", answer: "Yuzu is one of its named botanicals, alongside juniper and sansho." }],
    metaTitle: "KI NO BI Gin Price, Taste & Review | BevOry", metaDescription: "KI NO BI Gin combines yuzu, sansho and gyokuro tea. Pair with rava-fried fish; check indicative city prices on BevOry."
  },
  "havana-club-anejo-3-anos-04b9513": {
    productName: "Havana Club 3 Años", category: "Cuban White Rum",
    shortOverview: "Havana Club 3 Años is an aged Cuban rum that still works as a white-rum mixer. Its light oak and sugarcane notes give a Mojito more character than an unaged neutral spirit.",
    craftStory: "Havana Club makes this rum from Cuban sugarcane molasses and ages it for at least three years in oak. The ageing contributes soft vanilla and wood notes without overwhelming the lighter Cuban style.",
    tastingNotes: { nose: "Fresh sugarcane, citrus and a mild oak-vanilla note.", palate: "Light-bodied and gently sweet, with cane, citrus and soft spice.", finish: "Medium, clean, with a trace of oak and sweetness." },
    servingGuide: { glassware: "Highball glass or coupe", idealTemperature: "Chilled with ice (4–8°C)", recommendation: "Build a Mojito with mint and lime, or shake a classic Daiquiri with lime juice." },
    foodPairings: ["tandoori prawns", "fish tikka", "pineapple chaat", "chilli paneer"], whyBuyThis: "Three years in oak lend useful depth to familiar white-rum cocktails.",
    faqs: [{ question: "Is Havana Club 3 Años aged?", answer: "Yes. The producer states that the rum spends at least three years in oak." }, { question: "What cocktail suits it best?", answer: "Havana Club specifically recommends it for a Mojito and a Daiquiri." }],
    metaTitle: "Havana Club 3 Años Price, Taste & Review | BevOry", metaDescription: "Havana Club 3 Años adds cane and soft oak to Mojitos. Pair with fish tikka; check indicative city prices on BevOry."
  },
  "kilchoman-machir-bay-76ccc9e": {
    productName: "Kilchoman Machir Bay", category: "Peated Islay Single Malt Scotch Whisky",
    shortOverview: "Machir Bay is Kilchoman's peated Islay single malt named for the beach near its farm distillery. Citrus, orchard fruit and coastal smoke make it more layered than a one-note peat dram.",
    craftStory: "Kilchoman distils on Islay and matures Machir Bay chiefly in ex-bourbon barrels, with a smaller Oloroso sherry-cask contribution. The producer's current composition is approximately 90% bourbon to 10% sherry casks; it carries no age statement.",
    tastingNotes: { nose: "Lemon zest and ripe peach over sea air and peat smoke.", palate: "Honeyed citrus and pear turn towards pepper, saline notes and warm smoke.", finish: "Long, drying and coastal, with peppery peat and a little sweet oak." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Try neat first, then add a few drops of water to explore the fruit beneath the peat." },
    foodPairings: ["mutton seekh", "lamb rogan josh", "tandoori mushroom", "70% dark chocolate"], whyBuyThis: "Bourbon-cask fruit and sherry-cask depth balance its unmistakable Islay peat.",
    faqs: [{ question: "Is Machir Bay smoky?", answer: "Yes. Kilchoman makes it from peated Islay spirit, giving it a clear smoke character." }, { question: "Does Machir Bay carry an age statement?", answer: "No. It is a named expression without a stated age." }],
    metaTitle: "Kilchoman Machir Bay Price, Taste & Review | BevOry", metaDescription: "Kilchoman Machir Bay balances citrus, honey and Islay smoke. Pair with mutton seekh; check city prices on BevOry."
  },
  "balblair-12-yrs-ffd36bb": {
    productName: "Balblair 12 Year Old", category: "Highland Single Malt Scotch Whisky",
    shortOverview: "Balblair 12 Year Old is a Highland single malt with orchard fruit and gentle oak spice. It is a useful entry point to the Edderton distillery's lighter, fruit-led style.",
    craftStory: "Balblair distils in Edderton in the Scottish Highlands. This twelve-year expression matures in ex-bourbon and double-fired American oak casks, bringing vanilla without the profile of a sherry-led malt.",
    tastingNotes: { nose: "Lemon peel, green apple and vanilla.", palate: "Soft and rounded, with honey, orange and warming oak spice.", finish: "Medium, creamy and lightly leathery, with lingering sweet spice." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour neat and allow a few minutes in the glass; add only a little water if preferred." },
    foodPairings: ["chicken malai tikka", "paneer tikka", "roast almonds", "apple tart"], whyBuyThis: "Its age statement and two American-oak cask styles offer an approachable Highland malt with real structure.",
    faqs: [{ question: "Where is Balblair made?", answer: "Balblair Distillery is in Edderton in the Scottish Highlands." }, { question: "Which casks age Balblair 12?", answer: "The distillery lists ex-bourbon and double-fired American oak casks." }],
    metaTitle: "Balblair 12 Year Old Price, Taste & Review | BevOry", metaDescription: "Balblair 12 Year Old brings apple, citrus and vanilla oak. Pair with chicken malai tikka; check city prices on BevOry."
  },
  "finlandia-vodka-9373ad7": {
    productName: "Finlandia Vodka", category: "Finnish Barley Vodka",
    shortOverview: "Finlandia is a Finnish vodka made from local barley and glacial spring water. Its dry, light profile makes it a versatile base for clean, unsweetened cocktails.",
    craftStory: "Golden Finnish barley is distilled through more than 200 steps over roughly 50 hours. The spirit is diluted with water from the Rajamäki glacial spring, naturally filtered through a glacial moraine.",
    tastingNotes: { nose: "Gentle grain and a faintly sweet, clean aroma.", palate: "Light, dry and smooth, with subtle barley sweetness rather than pronounced flavouring.", finish: "Short, crisp and gently warming." },
    servingGuide: { glassware: "Chilled Martini glass or highball glass", idealTemperature: "Well chilled (4–8°C)", recommendation: "Use in a Vodka Martini or lengthen with soda and a squeeze of nimbu (lime)." },
    foodPairings: ["cucumber chaat", "rava-fried fish", "tandoori prawns", "malai paneer tikka"], whyBuyThis: "Finnish barley and naturally filtered spring water define this clean, grain-led vodka.",
    faqs: [{ question: "What grain is Finlandia made from?", answer: "The producer uses Finnish barley." }, { question: "Is the water treated artificially?", answer: "Finlandia describes its Rajamäki spring water as naturally filtered through glacial moraine." }],
    metaTitle: "Finlandia Vodka Price, Taste & Review | BevOry", metaDescription: "Finlandia Vodka is dry and light, made with Finnish barley. Pair with cucumber chaat; check city prices on BevOry."
  },
  "monkey-shoulder-whisky-453ab5e": {
    productName: "Monkey Shoulder", category: "Blended Malt Scotch Whisky",
    shortOverview: "Monkey Shoulder is a blended malt Scotch made for both sipping and mixing. Its vanilla, malt and orange notes give cocktails body without heavy peat.",
    craftStory: "William Grant & Sons combines selected Speyside single malts and marries them in small batches. As a blended malt, it contains malt whisky rather than the grain whisky found in many blended Scotches.",
    tastingNotes: { nose: "Vanilla, orange zest and soft malt.", palate: "Rounded and lightly creamy, with honeyed cereal, citrus and gentle oak spice.", finish: "Medium, warm and malty, with a little sweet spice." },
    servingGuide: { glassware: "Rocks glass or highball glass", idealTemperature: "Room temperature neat; chilled with ice for cocktails", recommendation: "Try neat for the malt profile or use in a Rob Roy with sweet vermouth." },
    foodPairings: ["chicken tikka", "paneer tikka", "spiced roast nuts", "seekh kebab"], whyBuyThis: "A flexible Speyside blended malt with enough character for a glass or a classic cocktail.",
    faqs: [{ question: "Is Monkey Shoulder a single malt?", answer: "No. It is a blended malt made by combining selected single malt whiskies." }, { question: "Is it strongly peated?", answer: "No. Its familiar profile is fruit, malt and vanilla rather than heavy smoke." }],
    metaTitle: "Monkey Shoulder Price, Taste & Review | BevOry", metaDescription: "Monkey Shoulder blends Speyside malt, vanilla and citrus. Pair with chicken tikka; check city prices on BevOry."
  },
  "ron-barcelo-onyx-4f93098": {
    productName: "Ron Barceló Imperial Onyx", category: "Dominican Dark Rum",
    shortOverview: "Imperial Onyx is a Dominican rum with a deeper toasted-oak character than the standard Imperial. Dark fruit and spice make it better suited to slow sipping than a sugary mixer.",
    craftStory: "Ron Barceló makes the rum from Dominican sugarcane juice distillate and ages it for up to ten years in heavily toasted oak. The finished blend is filtered through onyx stones, a production detail behind its name.",
    tastingNotes: { nose: "Toasted wood, dark fruit and warm vanilla.", palate: "Full and rounded, with dried fruit, caramelised sugar and baking spice.", finish: "Long, warming and oak-led, with cocoa-like bitterness." },
    servingGuide: { glassware: "Tulip tasting glass or rocks glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat first; one large ice cube can soften the oak without drowning it." },
    foodPairings: ["mutton ghee roast", "tandoori lamb chops", "70% dark chocolate", "spiced cashews"], whyBuyThis: "Heavy-toast oak and onyx filtration make this a distinctive member of the Imperial range.",
    faqs: [{ question: "How long is Imperial Onyx aged?", answer: "Ron Barceló states that its components age for up to ten years." }, { question: "What does Onyx refer to?", answer: "The producer describes filtration through onyx stones after maturation." }],
    metaTitle: "Ron Barceló Imperial Onyx Price, Taste & Review | BevOry", metaDescription: "Ron Barceló Imperial Onyx brings toasted oak and dark fruit. Pair with mutton ghee roast; check city prices on BevOry."
  },
  "amaro-montenegro-8fa6e1c": {
    productName: "Amaro Montenegro", category: "Italian Herbal Amaro Liqueur",
    shortOverview: "Amaro Montenegro is a Bologna-made herbal liqueur, bittersweet rather than aggressively bitter. Its citrus and floral layers make it approachable neat, over ice or in a spritz.",
    craftStory: "The Montenegro house traces its origins to 1885 in Bologna. The liqueur is assembled from a multi-botanical recipe; the precise formula is proprietary, so no single herb defines the whole blend.",
    tastingNotes: { nose: "Orange peel, sweet herbs and a floral lift.", palate: "Silky and gently sweet at first, turning to citrus zest and layered herbal bitterness.", finish: "Medium-long, bittersweet and aromatic with lingering orange." },
    servingGuide: { glassware: "Small tumbler or wine glass", idealTemperature: "Cool or over ice (8–12°C)", recommendation: "Serve a modest measure over ice with orange peel, or lengthen with soda for a light aperitivo." },
    foodPairings: ["masala peanuts", "mutton seekh", "orange-dark-chocolate squares", "paneer tikka"], whyBuyThis: "Its relatively soft bitterness makes a classic Italian amaro accessible after an Indian meal.",
    faqs: [{ question: "Is Amaro Montenegro very bitter?", answer: "It is bittersweet, with prominent citrus and floral sweetness balancing the herbal bitterness." }, { question: "Can I use it in a spritz?", answer: "Yes. The producer publishes spritz-style serves as well as neat and over-ice options." }],
    metaTitle: "Amaro Montenegro Price, Taste & Review | BevOry", metaDescription: "Amaro Montenegro balances orange, herbs and gentle bitterness. Pair with masala peanuts; check city prices on BevOry."
  },
  "edinburgh-gin-rhubarb-and-ginger-f925fa8": {
    productName: "Edinburgh Rhubarb-Ginger Gin", category: "Flavoured Scottish Gin",
    shortOverview: "Edinburgh Rhubarb & Ginger Gin pairs tart rhubarb with warming ginger over a gin base. It is the gin expression, not the brand's separate lower-strength liqueur.",
    craftStory: "Edinburgh Gin builds this flavoured expression on its Scottish gin-making base and adds rhubarb and ginger character. The brand also sells a similarly named liqueur, so the bottle label should be checked before comparing strength or serves.",
    tastingNotes: { nose: "Tart rhubarb, fresh ginger and gentle juniper.", palate: "Bright fruit acidity meets a rounded ginger warmth and dry gin backbone.", finish: "Medium, zesty and lightly spicy." },
    servingGuide: { glassware: "Copa or highball glass", idealTemperature: "Chilled (6–10°C)", recommendation: "Pour with plain tonic and ice; a thin ginger slice gives lift without adding syrup." },
    foodPairings: ["tandoori prawns", "malai paneer tikka", "cucumber chaat", "ginger-spiced chicken tikka"], whyBuyThis: "Tart rhubarb keeps the ginger-led flavoured gin lively rather than cloying.",
    faqs: [{ question: "Is this the Rhubarb & Ginger Liqueur?", answer: "No. Edinburgh Gin markets a separate Rhubarb & Ginger Liqueur; check the exact gin label." }, { question: "What mixer works with it?", answer: "Plain tonic lets the rhubarb and ginger show without adding more sweetness." }],
    metaTitle: "Edinburgh Rhubarb-Ginger Gin Price, Taste & Review | BevOry", metaDescription: "Edinburgh Rhubarb & Ginger Gin is tart and gently spicy. Pair with tandoori prawns; check city prices on BevOry."
  },
  "dewars-25-yrs-481780d": {
    productName: "Dewar's 25 Year Old", category: "Aged Blended Scotch Whisky",
    shortOverview: "Dewar's 25 Year Old is a mature blended Scotch built for slow tasting. Orchard fruit, toffee and polished oak mark a different occasion from the house's everyday blends.",
    craftStory: "Dewar's is the Scotch house founded by John Dewar in Perth in 1846, and this expression carries a 25-year age statement. As a blended Scotch it combines malt and grain whiskies; avoid assuming the cask treatment of a different 25-year release applies to every market bottling.",
    tastingNotes: { nose: "Baked apple, toffee and soft oak spice.", palate: "Rounded and layered, with dried fruit, honey and a restrained woody grip.", finish: "Long and warming, with lingering fruit and polished oak." },
    servingGuide: { glassware: "Glencairn or crystal tasting glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat and give it time to open; a few drops of spring water are optional." },
    foodPairings: ["galouti kebab", "lamb rogan josh", "mutton seekh", "70% dark chocolate"], whyBuyThis: "The 25-year statement puts mature blended-Scotch texture and depth at the centre of the bottle.",
    faqs: [{ question: "Is Dewar's 25 a single malt?", answer: "No. It is a blended Scotch whisky containing malt and grain whisky." }, { question: "How should it be served?", answer: "Neat in a tasting glass is a sensible first pour; add only a little water if desired." }],
    metaTitle: "Dewar's 25 Year Old Price, Taste & Review | BevOry", metaDescription: "Dewar's 25 Year Old offers fruit, toffee and mature oak. Pair with galouti kebab; check indicative city prices on BevOry."
  },
};
