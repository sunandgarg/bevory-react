// Expression-level wine editorial; research ledger: docs/editorial/product-batch-15-sources.md.
import type { ProductPublicDetail } from "./productContentBatch01.js";

export const PRODUCT_BATCH_CONTENT: Record<string, ProductPublicDetail> = {
  "penfolds-bin-311-chardonnay-5f2cb62": {
    productName: "Penfolds Bin 311 Chardonnay", category: "Australian Chardonnay",
    shortOverview: "Bin 311 is Penfolds' taut, cool-climate answer to broad, buttery Chardonnay. Citrus and stone fruit have the lead; restrained oak supplies texture rather than a sweet coating.",
    craftStory: "Penfolds draws this Chardonnay from cool Australian regions including Tasmania, Tumbarumba and the Adelaide Hills, with the blend changing by vintage. Barrel fermentation and French-oak maturation add a subtle savoury edge to fruit grown for natural acidity.",
    tastingNotes: { nose: "Lemon peel, white peach and a faint flinty note sit over delicate oak.", palate: "Medium-bodied and finely textured, with grapefruit, quince and chalky acidity before a light almond note.", finish: "Long and dry, leaving citrus pith and a clean mineral impression." },
    servingGuide: { glassware: "Burgundy white-wine glass", idealTemperature: "Cool, 10–12°C", recommendation: "Chill gently, then allow a few minutes in the glass so the citrus and oak details open." },
    foodPairings: ["tandoori prawns", "chicken malai tikka", "paneer tikka", "lemon-butter fish"], whyBuyThis: "It offers cool-climate Australian Chardonnay with precision, texture and a measured use of oak.",
    faqs: [{ question: "Is Bin 311 always from one region?", answer: "No. Penfolds has used a multi-regional cool-climate blend since the 2017 release; check the vintage label for specifics." }, { question: "Is Bin 311 heavily oaked?", answer: "No. Oak shapes the texture, but citrus, white fruit and acidity remain the main features." }],
    metaTitle: "Penfolds Bin 311 Chardonnay Price, Taste & Review | BevOry", metaDescription: "Bin 311 brings citrus, peach and fine oak. Pair with tandoori prawns; check indicative city prices on BevOry."
  },
  "penfolds-bin-128-coonawarra-shiraz-972b86a": {
    productName: "Penfolds Bin 128 Coonawarra Shiraz", category: "Coonawarra Shiraz",
    shortOverview: "Bin 128 is a fragrant, cooler-climate Shiraz from Coonawarra rather than a jammy Barossa red. Its red and blue fruit, pepper and fine tannins suit a savoury meal.",
    craftStory: "First made from the 1962 vintage, Bin 128 remains tied to Coonawarra's terra rossa soils over limestone. Penfolds matures the Shiraz in a mix of new and seasoned French oak hogsheads, preserving the region's lifted fruit and structure.",
    tastingNotes: { nose: "Red cherry, blueberry, cracked pepper and a trace of earthy herb.", palate: "Medium to full-bodied, with tart plum, berry fruit, savoury spice and closely woven tannins.", finish: "Long and dry, with fresh cherry, pepper and a faint mineral edge." },
    servingGuide: { glassware: "Bordeaux-style red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Pour into a broad glass; decant a young vintage for 30 minutes if its tannins feel firm." },
    foodPairings: ["mutton seekh kebab", "lamb chops", "tandoori chicken", "mushroom pepper fry"], whyBuyThis: "Coonawarra fruit and French oak make this a leaner, more peppery counterpoint to warm-climate Shiraz.",
    faqs: [{ question: "Where is Bin 128 grown?", answer: "Its Shiraz comes from Coonawarra in South Australia." }, { question: "How does it differ from Bin 28?", answer: "Bin 128 is Coonawarra-based and French-oak matured; Bin 28 is a riper multi-regional Shiraz associated with American oak." }],
    metaTitle: "Penfolds Bin 128 Shiraz Price, Taste & Review | BevOry", metaDescription: "Bin 128 shows Coonawarra cherry, pepper and fine tannins. Pair with mutton seekh; compare city prices on BevOry."
  },
  "penfolds-bin-2-shiraz-mataro-a1a8550": {
    productName: "Penfolds Bin 2 Shiraz Mataro", category: "Australian Shiraz–Mataro Red Wine",
    shortOverview: "Bin 2 blends Shiraz's dark fruit with the earthy grip of Mataro, also called Mourvèdre. The result is a savoury Australian red with more tension than a straight fruit-bomb Shiraz.",
    craftStory: "Penfolds introduced Bin 2 in 1960, drawing on Shiraz and Mataro from South Australian vineyards. The grapes ferment as red wine before oak maturation; the exact regional mix and oak proportions vary with vintage.",
    tastingNotes: { nose: "Black cherry, plum skin, dried herbs and warm black pepper.", palate: "Medium-bodied, with ripe blackberry giving way to olive, earthy spice and firm but approachable tannin.", finish: "Medium-long and dry, with dark fruit, anise and savoury spice." },
    servingGuide: { glassware: "Bordeaux-style red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Open with a meal; give a young bottle 20–30 minutes of air if the tannin feels tight." },
    foodPairings: ["mutton ghee roast", "lamb rogan josh", "tandoori mushroom", "aged cheddar"], whyBuyThis: "Mataro gives the familiar Shiraz fruit a welcome savoury, food-friendly backbone.",
    faqs: [{ question: "What is Mataro?", answer: "Mataro is another name for the Mourvèdre grape; it contributes savoury depth and structure here." }, { question: "Is Bin 2 a single-varietal Shiraz?", answer: "No. It is a Shiraz–Mataro blend, with the proportions changing by release." }],
    metaTitle: "Penfolds Bin 2 Shiraz Mataro Price, Taste & Review | BevOry", metaDescription: "Bin 2 balances dark Shiraz fruit with earthy Mataro. Pair with mutton ghee roast; see indicative city prices on BevOry."
  },
  "penfolds-bin-389-cabernet-sauvignon-15110c8": {
    productName: "Penfolds Bin 389 Cabernet Shiraz", category: "Australian Cabernet Shiraz Red Wine",
    shortOverview: "Bin 389 is a Cabernet Sauvignon–Shiraz blend, not a pure Cabernet. Cassis and firm structure meet Shiraz's generous plum and spice.",
    craftStory: "Max Schubert created Bin 389 in 1960 by combining Cabernet's frame with Shiraz's mid-palate weight. Its South Australian fruit is matured in American oak, including barrels previously used for Penfolds Grange; vineyard sources and blend ratios vary by vintage.",
    tastingNotes: { nose: "Blackcurrant, dark plum, cedar and a little tobacco leaf.", palate: "Full and layered, with cassis, black cherry, cocoa and firm, ripe tannins.", finish: "Long and structured, carrying dark fruit, oak spice and a dry savoury tail." },
    servingGuide: { glassware: "Large Bordeaux glass", idealTemperature: "Cellar-cool, 16–18°C", recommendation: "Decant a young vintage for around an hour; pour modestly with food to appreciate its structure." },
    foodPairings: ["galouti kebab", "lamb rogan josh", "mutton seekh", "aged cheddar"], whyBuyThis: "It is a distinctive Australian blend with Cabernet structure and Shiraz richness, not merely a famous label.",
    faqs: [{ question: "Is Bin 389 only Cabernet Sauvignon?", answer: "No. Penfolds makes Bin 389 from Cabernet Sauvignon and Shiraz; the proportions change by vintage." }, { question: "Why is it nicknamed Baby Grange?", answer: "Part of its oak maturation uses barrels that held a previous Grange vintage; the two wines are not the same blend." }],
    metaTitle: "Penfolds Bin 389 Price, Taste & Review | BevOry", metaDescription: "Bin 389 blends cassis-led Cabernet with plum-rich Shiraz. Pair with galouti kebab; check indicative city prices on BevOry."
  },
  "penfolds-bin-407-cabernet-sauvignon-30a266e": {
    productName: "Penfolds Bin 407 Cabernet Sauvignon", category: "Australian Cabernet Sauvignon",
    shortOverview: "Bin 407 puts Cabernet's blackcurrant, herb and firm tannin in a polished multi-regional Australian frame. It is more approachable young than Penfolds' rarer Bin 707, while retaining ageing structure.",
    craftStory: "Penfolds first released Bin 407 in 1993 from the 1990 vintage. Fruit from selected Australian regions is fermented and aged in French and American oak; the vineyard mix, barrel age and proportions follow the vintage rather than a fixed recipe.",
    tastingNotes: { nose: "Cassis, black cherry, bay leaf and a hint of cedar.", palate: "Full-bodied yet fresh, with blackcurrant, dark chocolate and leafy spice wrapped in firm tannin.", finish: "Long and dry, with blackberry skin, cocoa and restrained oak." },
    servingGuide: { glassware: "Large Bordeaux glass", idealTemperature: "Cellar-cool, 16–18°C", recommendation: "Decant a young bottle for 45–60 minutes; avoid serving warm, which can flatten the fruit." },
    foodPairings: ["lamb chops", "mutton seekh kebab", "mushroom pepper fry", "aged cheddar"], whyBuyThis: "Its multi-region selection delivers a recognisable Cabernet spine without relying on one vineyard or vintage.",
    faqs: [{ question: "Is Bin 407 a blend of grapes?", answer: "It is labelled Cabernet Sauvignon; the fruit can come from multiple Australian regions." }, { question: "Can it be cellared?", answer: "Many vintages have the tannin and acidity for cellaring, but the drinking window depends on the specific release and storage." }],
    metaTitle: "Penfolds Bin 407 Price, Taste & Review | BevOry", metaDescription: "Bin 407 brings cassis, cedar and structured tannins. Pair with lamb chops; check indicative city prices on BevOry."
  },
  "penfolds-koonunga-hill-shiraz-2149f34": {
    productName: "Penfolds Koonunga Hill Shiraz", category: "South Australian Shiraz",
    shortOverview: "Koonunga Hill Shiraz is an accessible Penfolds red built around ripe berries and supple tannin. It is a useful reference point for drinkers learning the fuller Australian Shiraz style.",
    craftStory: "Penfolds blends Shiraz from South Australian vineyards for its Koonunga Hill range, first associated with the 1976 Shiraz Cabernet. Fruit is fermented as red wine and oak is used to round, rather than dominate, the generous fruit.",
    tastingNotes: { nose: "Blackberry, ripe plum, sweet spice and a little cocoa.", palate: "Rounded and medium-full, with black cherry, liquorice and soft, ripe tannins.", finish: "Medium, with dark berry fruit and a gentle peppery note." },
    servingGuide: { glassware: "Standard red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Open shortly before dinner; a brief 15-minute rest in the glass is usually enough." },
    foodPairings: ["tandoori chicken", "lamb seekh kebab", "paneer tikka masala", "grilled aubergine"], whyBuyThis: "It gives a generous South Australian Shiraz profile at an everyday rather than collector level.",
    faqs: [{ question: "Is Koonunga Hill Shiraz the same as Shiraz Cabernet?", answer: "No. The standalone Shiraz and the range's Shiraz Cabernet are separate wines." }, { question: "Does this Shiraz need long decanting?", answer: "Usually not; its fruit and soft tannins are designed to be enjoyed relatively young." }],
    metaTitle: "Penfolds Koonunga Hill Shiraz Price, Taste & Review | BevOry", metaDescription: "Koonunga Hill Shiraz is plush with blackberry and plum. Pair with tandoori chicken; check city prices on BevOry."
  },
  "penfolds-bin-28-shiraz-0762a43": {
    productName: "Penfolds Bin 28 Shiraz", category: "Australian Shiraz",
    shortOverview: "Bin 28 is a ripe, robust Shiraz with dark berries, chocolate and spice. Its warm-climate generosity contrasts clearly with the cooler, finer profile of Coonawarra Bin 128.",
    craftStory: "First made in 1959 and named for Penfolds' Kalimna vineyard in Barossa Valley, Bin 28 is now a multi-regional Shiraz with Barossa fruit regularly represented. Seasoned American oak supports its dark-fruit concentration; exact sources follow the release.",
    tastingNotes: { nose: "Black plum, dark cherry, liquorice and chocolate-coated spice.", palate: "Full-bodied, with dense blackberry, cocoa, sweet spice and grippy yet ripe tannins.", finish: "Long and warming, ending on dark fruit, pepper and oak." },
    servingGuide: { glassware: "Large red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Give a young bottle 30–45 minutes in a decanter and serve alongside a robust main course." },
    foodPairings: ["lamb rogan josh", "mutton ghee roast", "tandoori chicken", "70% dark chocolate"], whyBuyThis: "It is a classic, full-bodied Penfolds Shiraz with a clear Kalimna lineage and food-ready grip.",
    faqs: [{ question: "Is all Bin 28 fruit from Kalimna?", answer: "No. The wine takes its name from Kalimna but is now a multi-regional Australian blend." }, { question: "How does Bin 28 compare with Bin 128?", answer: "Bin 28 is generally riper and broader; Bin 128 is Coonawarra-based and usually more peppery and fine-boned." }],
    metaTitle: "Penfolds Bin 28 Shiraz Price, Taste & Review | BevOry", metaDescription: "Bin 28 offers black plum, cocoa and warm spice. Pair with lamb rogan josh; check indicative city prices on BevOry."
  },
  "penfolds-koonunga-hill-chardonnay-ce7b4de": {
    productName: "Penfolds Koonunga Hill Chardonnay", category: "South Australian Chardonnay",
    shortOverview: "Koonunga Hill Chardonnay sits between crisp citrus and soft stone fruit, with a light creamy edge. It is an easy-drinking white rather than the tighter, more layered Bin 311.",
    craftStory: "Penfolds uses its multi-region South Australian blending approach for this Chardonnay, a Koonunga Hill wine first released in 1991. Fermentation and selected oak treatment build texture while preserving a bright fruit-led style; the exact blend changes with vintage.",
    tastingNotes: { nose: "Peach, lemon zest, melon and a quiet vanilla note.", palate: "Medium-bodied and smooth, with nectarine, citrus and a soft creamy middle.", finish: "Medium and fresh, leaving white peach and gentle oak spice." },
    servingGuide: { glassware: "White-wine glass", idealTemperature: "Cool, 9–11°C", recommendation: "Chill without freezing; let the wine warm slightly in the glass to reveal its stone-fruit side." },
    foodPairings: ["chicken malai tikka", "paneer tikka", "butter-garlic prawns", "corn-and-capsicum kebabs"], whyBuyThis: "It offers an approachable Chardonnay bridge between fresh citrus and soft oak texture.",
    faqs: [{ question: "Is Koonunga Hill Chardonnay very sweet?", answer: "No. Fruit aromas may seem sweet, but the wine is made as a dry table Chardonnay." }, { question: "Is it the same as Bin 311?", answer: "No. Bin 311 is a separate, more focused cool-climate Penfolds Chardonnay." }],
    metaTitle: "Koonunga Hill Chardonnay Price, Taste & Review | BevOry", metaDescription: "Koonunga Hill Chardonnay balances peach, citrus and soft oak. Pair with paneer tikka; compare city prices on BevOry."
  },
  "cloudy-bay-sauvignon-blanc-3b4a56b": {
    productName: "Cloudy Bay Sauvignon Blanc", category: "Marlborough Sauvignon Blanc",
    shortOverview: "Cloudy Bay Sauvignon Blanc is a bright Marlborough white with citrus, passion fruit and green-herb lift. Its sharp acidity makes it especially good beside salty or spicy food.",
    craftStory: "Cloudy Bay began in Marlborough in 1985, when David Hohnen recognised the potential of Wairau Valley vineyards. Sauvignon Blanc from gravelly sites around Rapaura, Renwick and Brancott is handled to preserve its aromatic fruit and brisk natural acidity.",
    tastingNotes: { nose: "Passion fruit, lime zest, cut grass and blackcurrant leaf.", palate: "Light to medium-bodied, intensely fresh, with grapefruit, tropical fruit and a green-herb snap.", finish: "Long, crisp and mouthwatering, with lime and mineral salinity." },
    servingGuide: { glassware: "Aromatic white-wine glass", idealTemperature: "Chilled, 8–10°C", recommendation: "Serve freshly chilled in a stemmed glass; avoid ice, which dilutes the focused acidity." },
    foodPairings: ["coastal rava-fried fish", "tandoori prawns", "cucumber chaat", "malai paneer tikka"], whyBuyThis: "It is a clear benchmark for Marlborough's aromatic, acid-driven Sauvignon Blanc style.",
    faqs: [{ question: "Is Cloudy Bay Sauvignon Blanc oaked?", answer: "The classic bottling is prized for fresh, bright fruit; do not confuse it with Cloudy Bay's oak-influenced Te Koko." }, { question: "Where is it from?", answer: "It comes from Marlborough on New Zealand's South Island, with Wairau Valley sites central to the house style." }],
    metaTitle: "Cloudy Bay Sauvignon Blanc Price, Taste & Review | BevOry", metaDescription: "Cloudy Bay Sauvignon Blanc brings lime, passion fruit and herbs. Pair with rava-fried fish; check city prices on BevOry."
  },
  "cloudy-bay-pinot-noir-2473a69": {
    productName: "Cloudy Bay Pinot Noir", category: "Marlborough Pinot Noir",
    shortOverview: "Cloudy Bay Pinot Noir favours cherry, plum and supple tannin over heavy extraction. Its cool-climate freshness suits both roast poultry and spice-led Indian dishes.",
    craftStory: "Cloudy Bay works with Pinot Noir from Marlborough's Southern Valleys, where clay-rich soils and cool nights help retain acidity. Gentle red-wine extraction and oak maturation build texture without turning Pinot's delicate fruit into a dense Cabernet-like red.",
    tastingNotes: { nose: "Red cherry, strawberry, dark plum and a touch of violet.", palate: "Silky and medium-bodied, with cherry, cranberry and subtle earthy spice over fine tannins.", finish: "Medium-long and fresh, with red berry fruit and a light savoury trail." },
    servingGuide: { glassware: "Burgundy red-wine glass", idealTemperature: "Slightly cool, 14–16°C", recommendation: "Serve a little cooler than a heavy red and let it open for 15 minutes in a broad glass." },
    foodPairings: ["tandoori chicken", "mushroom galouti kebab", "duck kebab", "roast chicken with herbs"], whyBuyThis: "It shows why Marlborough's Southern Valleys can make Pinot Noir with both fragrance and dinner-table substance.",
    faqs: [{ question: "Is this Pinot Noir from Central Otago?", answer: "No. The standard Cloudy Bay Pinot Noir is from Marlborough; Te Wāhi is the producer's Central Otago wine." }, { question: "Should Pinot Noir be served warm?", answer: "No. Around 14–16°C keeps this wine's red fruit and freshness in focus." }],
    metaTitle: "Cloudy Bay Pinot Noir Price, Taste & Review | BevOry", metaDescription: "Cloudy Bay Pinot Noir offers cherry, plum and silky tannin. Pair with tandoori chicken; compare city prices on BevOry."
  },
  "cloudy-bay-chardonnay-1bfff49": {
    productName: "Cloudy Bay Chardonnay", category: "Marlborough Chardonnay",
    shortOverview: "Cloudy Bay Chardonnay combines ripe stone fruit with the citrus bite of Marlborough. Oak adds a savoury, nutty frame without erasing the wine's fresh centre.",
    craftStory: "Fruit comes from stony Wairau Valley and clay-rich Southern Valleys sites in Marlborough. Cloudy Bay ferments and matures portions of Chardonnay in oak, seeking a balance of orchard fruit, texture and cool-climate acidity that changes subtly by vintage.",
    tastingNotes: { nose: "White nectarine, pear blossom, lemon peel and a gentle toasted-hazelnut edge.", palate: "Supple but focused, with apricot, greengage and citrus lifted by mouthwatering acidity.", finish: "Long and dry, leaving lemon pith, orchard fruit and quiet oak spice." },
    servingGuide: { glassware: "Burgundy white-wine glass", idealTemperature: "Cool, 10–12°C", recommendation: "Serve cool rather than ice cold; a few minutes in the glass bring out its savoury texture." },
    foodPairings: ["chicken malai tikka", "tandoori prawns", "paneer tikka", "herb-roasted chicken"], whyBuyThis: "It is a food-focused Marlborough Chardonnay with both fruit weight and a crisp, mineral line.",
    faqs: [{ question: "Is Cloudy Bay Chardonnay from the same region as its Sauvignon Blanc?", answer: "Both are Marlborough wines, though their vineyard parcels and grape styles differ." }, { question: "Does it taste strongly of oak?", answer: "Oak supports the fruit and texture; citrus and stone fruit remain easy to recognise." }],
    metaTitle: "Cloudy Bay Chardonnay Price, Taste & Review | BevOry", metaDescription: "Cloudy Bay Chardonnay shows nectarine, citrus and subtle oak. Pair with malai tikka; check city prices on BevOry."
  },
  "moet-and-chandon-rose-imperial-e4cf172": {
    productName: "Moët & Chandon Rosé Impérial", category: "Brut Rosé Champagne",
    shortOverview: "Rosé Impérial is Moët's red-berry-led Champagne with fine bubbles and a lightly peppery edge. It has more fruit weight than the house Brut without becoming a sweet rosé.",
    craftStory: "The Champagne house blends Pinot Noir, Meunier and Chardonnay, with selected reserve wines for continuity and a portion of still red wine for colour and flavour. Secondary fermentation in bottle creates the mousse; the final blend is assembled in Épernay, France.",
    tastingNotes: { nose: "Wild strawberry, raspberry, rose petal and a pinch of pepper.", palate: "Fine-bubbled and supple, with cherry, redcurrant and peach balanced by fresh acidity.", finish: "Medium-long and clean, with berry fruit and a cool herbal lift." },
    servingGuide: { glassware: "Tulip-shaped Champagne glass", idealTemperature: "Chilled, 10–12°C", recommendation: "Chill the bottle thoroughly but avoid freezing; pour slowly into a tulip glass to keep the bubbles lively." },
    foodPairings: ["tandoori prawns", "chicken malai tikka", "strawberry-and-paneer salad", "grilled salmon"], whyBuyThis: "Its measured berry richness and fine mousse make it a versatile food Champagne, not just an occasion label.",
    faqs: [{ question: "Is Rosé Impérial sweet?", answer: "No. It is a brut-style rosé; ripe-berry aromas should not be mistaken for dessert-wine sweetness." }, { question: "Is it the same as Ice Impérial Rosé?", answer: "No. Ice Impérial Rosé is a separate, sweeter expression designed to be poured over ice." }],
    metaTitle: "Moët & Chandon Rosé Impérial Price, Taste & Review | BevOry", metaDescription: "Rosé Impérial brings strawberry, rose and lively bubbles. Pair with tandoori prawns; check city prices on BevOry."
  },
  "moet-and-chandon-ice-imperial-1baf13f": {
    productName: "Moët & Chandon Ice Impérial", category: "Demi-Sec Champagne for Ice",
    shortOverview: "Ice Impérial is the rare Champagne deliberately designed for ice rather than damaged by it. Tropical fruit, generous sweetness and grapefruit freshness hold together as the cubes melt.",
    craftStory: "Moët assembles Pinot Noir, Meunier and Chardonnay with reserve wines in Champagne, France. Its higher dosage than a brut and bottle-fermented bubbles are calibrated for a large glass containing ice; this is a distinct cuvée from Moët Impérial Brut.",
    tastingNotes: { nose: "Mango, guava, nectarine and a hint of raspberry.", palate: "Round and juicy, with tropical fruit, quince jelly and caramel checked by grapefruit acidity.", finish: "Medium and refreshing, with ginger and citrus after the fruit sweetness." },
    servingGuide: { glassware: "Large stemmed wine glass", idealTemperature: "Well chilled, then served over three large ice cubes", recommendation: "Pour into a generous glass over three fresh cubes; a mint leaf or lime peel is optional, not required." },
    foodPairings: ["tandoori prawns", "cucumber chaat", "salted cashews", "mango-and-paneer skewers"], whyBuyThis: "Unlike ordinary Champagne, its fruit and dosage were intentionally balanced around an ice serve.",
    faqs: [{ question: "Should Ice Impérial be served with ice?", answer: "Yes. The producer designed this cuvée specifically for ice in a large glass." }, { question: "Is Ice Impérial the same as Moët Brut?", answer: "No. Ice Impérial is sweeter and has a different blend and intended serve." }],
    metaTitle: "Moët & Chandon Ice Impérial Price, Taste & Review | BevOry", metaDescription: "Ice Impérial brings mango, guava and grapefruit over ice. Pair with tandoori prawns; check city prices on BevOry."
  },
  "moet-and-chandon-moet-n-chandon-brut-d7d3aeb": {
    productName: "Moët & Chandon Brut Impérial", category: "Brut Champagne",
    shortOverview: "Moët Brut Impérial is a fruit-forward, fine-bubbled Champagne with apple, pear and light brioche. It is the house's classic dry cuvée, not the sweeter Ice edition.",
    craftStory: "Created in 1869, Moët Impérial blends Pinot Noir, Meunier and Chardonnay from Champagne's many crus, with reserve wines helping keep the house style steady. Bottle secondary fermentation and time on lees build the fine mousse and light pastry notes.",
    tastingNotes: { nose: "Green apple, citrus blossom, pear and fresh brioche.", palate: "Lively and supple, with peach, apple and fine bubbles carried by citrus acidity.", finish: "Medium-long and crisp, with lemon, fresh nuts and a faint yeasty note." },
    servingGuide: { glassware: "Tulip-shaped Champagne glass", idealTemperature: "Chilled, 8–10°C", recommendation: "Chill for several hours and pour gently; keep the bottle cool between servings." },
    foodPairings: ["tandoori prawns", "rava-fried fish", "malai paneer tikka", "lightly spiced chicken kebab"], whyBuyThis: "It gives a recognisable Champagne balance of bright fruit, delicate lees and fine bubbles.",
    faqs: [{ question: "Is Brut Impérial a dry Champagne?", answer: "Yes. Brut denotes a relatively dry Champagne; fruit aromas can still make it seem round." }, { question: "Is it the same as Moët Ice Impérial?", answer: "No. Ice Impérial is a sweeter cuvée built to be served over ice." }],
    metaTitle: "Moët & Chandon Brut Impérial Price, Taste & Review | BevOry", metaDescription: "Brut Impérial offers apple, pear and fine bubbles. Pair with rava-fried fish; compare city prices on BevOry."
  },
  "chandon-brut-cuvee-277e784": {
    productName: "Chandon Brut Cuvée", category: "Indian Brut Sparkling Wine",
    shortOverview: "Chandon Brut Cuvée is an Indian sparkling wine built for crisp fruit and a lively mousse. It offers a useful local alternative when the occasion calls for dry bubbles rather than sweetness.",
    craftStory: "Domaine Chandon India grows and makes its sparkling wine near Dindori in Nashik, Maharashtra. Grapes are vinified as base wines, then given a second fermentation to build bubbles; this Indian cuvée is not Champagne, whose name is reserved for its French region.",
    tastingNotes: { nose: "Green apple, lemon zest and a faint toasted-bread note.", palate: "Light and brisk, with citrus, pear and fine bubbles balancing soft orchard-fruit sweetness.", finish: "Medium and clean, with lemon and a delicate biscuit trace." },
    servingGuide: { glassware: "Tulip-shaped sparkling-wine glass", idealTemperature: "Chilled, 7–9°C", recommendation: "Chill upright and open carefully; pour in two stages so the mousse does not overflow." },
    foodPairings: ["tandoori prawns", "paneer tikka", "rava-fried fish", "masala peanuts"], whyBuyThis: "Nashik origin and dry, food-friendly bubbles distinguish it from imported Champagne and sweeter local fizz.",
    faqs: [{ question: "Is Chandon India Brut Champagne?", answer: "No. It is Indian sparkling wine made in Maharashtra, not in France's Champagne region." }, { question: "Should it be served with ice?", answer: "A chilled glass without ice preserves its bubbles and balance; ice would dilute a standard brut." }],
    metaTitle: "Chandon Brut Cuvée Price, Taste & Review | BevOry", metaDescription: "Chandon Brut Cuvée offers crisp Nashik-grown bubbles. Pair with rava-fried fish; check indicative city prices on BevOry."
  },
  "chandon-brut-rose-9048a4a": {
    productName: "Chandon Brut Rosé", category: "Indian Brut Rosé Sparkling Wine",
    shortOverview: "Chandon Brut Rosé brings berry fruit and lively bubbles to a dry Indian sparkling-wine style. Its red-fruit character gives it a different food role from Chandon's white Brut.",
    craftStory: "Made by Domaine Chandon India in the Nashik foothills near Dindori, the rosé draws on red-grape fruit for its colour and berry profile. Base wine gains its bubbles through secondary fermentation, with the final blend chosen for freshness and a creamy mousse.",
    tastingNotes: { nose: "Cherry, raspberry, rose petal and a light grapefruit note.", palate: "Fresh and finely creamy, with strawberry, redcurrant and a citrus-edged acidity.", finish: "Medium, lively and clean, with berry fruit and faint floral spice." },
    servingGuide: { glassware: "Tulip-shaped sparkling-wine glass", idealTemperature: "Chilled, 8–10°C", recommendation: "Serve cool in a tulip glass; avoid adding ice to this standard brut rosé." },
    foodPairings: ["chicken malai tikka", "tandoori prawns", "beetroot-and-paneer tikka", "grilled salmon"], whyBuyThis: "It offers Nashik-made rosé bubbles with enough berry character for both aperitif and food pairing.",
    faqs: [{ question: "Is Chandon Brut Rosé a sweet wine?", answer: "It is a brut-style sparkling rosé; ripe berry flavour does not make it a dessert wine." }, { question: "Where is Chandon India Brut Rosé made?", answer: "Chandon India makes its sparkling wines in the Nashik region of Maharashtra." }],
    metaTitle: "Chandon Brut Rosé Price, Taste & Review | BevOry", metaDescription: "Chandon Brut Rosé shows cherry, raspberry and fine bubbles. Pair with malai tikka; check city prices on BevOry."
  },
  "barefoot-cabernet-sauvignon-7659b82": {
    productName: "Barefoot Cabernet Sauvignon", category: "California Cabernet Sauvignon",
    shortOverview: "Barefoot Cabernet Sauvignon is a soft-edged, fruit-forward California red. Raspberry and blackberry jam sit beside currant and vanilla, with gentler tannins than a stern cellar Cabernet.",
    craftStory: "Barefoot makes this Cabernet in California for immediate, approachable drinking. Red-grape fermentation extracts colour and tannin; the brand's house treatment favours ripe fruit and a smooth vanilla-toned finish rather than a single-vineyard statement.",
    tastingNotes: { nose: "Blackberry jam, raspberry, currant and soft vanilla.", palate: "Medium to full-bodied and smooth, with dark berries, cocoa and mild tannin.", finish: "Medium, leaving currant, vanilla and a little dry oak." },
    servingGuide: { glassware: "Standard red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Open with dinner; brief air in the glass is enough for its ripe-fruit style." },
    foodPairings: ["tandoori chicken", "lamb seekh kebab", "paneer tikka masala", "aged cheddar"], whyBuyThis: "It gives a recognisable Cabernet fruit profile without demanding long cellaring or lengthy decanting.",
    faqs: [{ question: "Is Barefoot Cabernet Sauvignon very tannic?", answer: "It has Cabernet structure, but Barefoot presents it in a smooth, approachable style." }, { question: "Is it a sweet dessert wine?", answer: "No. Jam-like fruit aromas are not the same thing as a dessert-wine finish." }],
    metaTitle: "Barefoot Cabernet Sauvignon Price, Taste & Review | BevOry", metaDescription: "Barefoot Cabernet offers blackberry, currant and vanilla. Pair with lamb seekh; check indicative city prices on BevOry."
  },
  "barefoot-shiraz-43764f0": {
    productName: "Barefoot Shiraz", category: "Fruit-Forward Shiraz Red Wine",
    shortOverview: "Barefoot Shiraz is an uncomplicated, dark-fruited red with soft spice. It is better suited to a relaxed meal than to the expectation of a tightly structured cellar wine.",
    craftStory: "Barefoot sources and blends Shiraz for a consistent, approachable house style, rather than presenting a named single vineyard. Red-grape fermentation brings plum colour and berry flavour; oak influence rounds the edges where used, with details varying by market bottling.",
    tastingNotes: { nose: "Black plum, blackberry and a mild pepper note.", palate: "Rounded and medium-bodied, with juicy dark berries, a little liquorice and supple tannin.", finish: "Medium, lightly spiced, with lingering plum." },
    servingGuide: { glassware: "Standard red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Serve with a savoury main course; 10–15 minutes in the glass softens its spice." },
    foodPairings: ["tandoori chicken", "mutton seekh kebab", "grilled paneer", "pepper mushroom fry"], whyBuyThis: "Its easy dark-fruit profile is a low-fuss entry into Shiraz with Indian grilled food.",
    faqs: [{ question: "Is Shiraz the same grape as Syrah?", answer: "Yes. Shiraz and Syrah are names used for the same grape, though the wine style varies by producer and region." }, { question: "Does Barefoot Shiraz need decanting?", answer: "Usually not; a short rest after pouring is enough for this approachable style." }],
    metaTitle: "Barefoot Shiraz Price, Taste & Review | BevOry", metaDescription: "Barefoot Shiraz has plum, blackberry and soft pepper. Pair with tandoori chicken; compare city prices on BevOry."
  },
  "casillero-del-diablo-merlot-9ca8fde": {
    productName: "Casillero del Diablo Merlot", category: "Chilean Merlot Red Wine",
    shortOverview: "Casillero del Diablo Merlot is a supple Chilean red with plum, black cherry and a little cocoa. It offers softer tannin than the label's Cabernet Sauvignon.",
    craftStory: "Concha y Toro's Casillero del Diablo range uses selected Chilean vineyard fruit for its Reserva Merlot. Fermented red wine is matured with oak influence for roundness; the exact valley and barrel regimen depend on the bottle's release.",
    tastingNotes: { nose: "Ripe plum, dark cherry, chocolate and a hint of dried herb.", palate: "Smooth and medium-bodied, with black fruit, soft cocoa and gentle tannins.", finish: "Medium and mellow, leaving plum skin and a dry spicy note." },
    servingGuide: { glassware: "Standard red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Pour with food and let it breathe for 15 minutes; long decanting is usually unnecessary." },
    foodPairings: ["tandoori chicken", "mushroom masala", "paneer tikka", "lamb kebab"], whyBuyThis: "It offers an approachable Chilean Merlot profile with fruit and savoury oak in balance.",
    faqs: [{ question: "Is Casillero del Diablo Merlot from France?", answer: "No. The brand belongs to Chilean producer Concha y Toro." }, { question: "Is Merlot lighter than Cabernet Sauvignon?", answer: "This Merlot usually feels softer and rounder, though body and tannin also depend on vintage and serving temperature." }],
    metaTitle: "Casillero del Diablo Merlot Price, Taste & Review | BevOry", metaDescription: "Casillero del Diablo Merlot brings plum, cherry and cocoa. Pair with paneer tikka; check city prices on BevOry."
  },
  "villa-maria-savigrin-blank-3d112ba": {
    productName: "Villa Maria Sauvignon Blanc", category: "Marlborough Sauvignon Blanc",
    shortOverview: "Villa Maria Sauvignon Blanc is a punchy New Zealand white with passion fruit, lime and green-herb freshness. Its brisk acidity makes it especially food-friendly.",
    craftStory: "Villa Maria's Private Bin expression blends Sauvignon Blanc from Marlborough's Wairau and Awatere Valleys. Fruit is fermented to preserve tropical and herbaceous aromas; the cool maritime climate keeps acidity brisk, with the exact parcel mix changing by vintage.",
    tastingNotes: { nose: "Passion fruit, kaffir lime, grapefruit and a trace of fresh grass.", palate: "Light to medium-bodied, with tropical fruit, citrus and a clean, mouthwatering herbal line.", finish: "Long and zesty, leaving lime, passion fruit and a saline edge." },
    servingGuide: { glassware: "Aromatic white-wine glass", idealTemperature: "Chilled, 8–10°C", recommendation: "Serve cool with no ice; the crisp acidity is best alongside salty or lightly spiced food." },
    foodPairings: ["rava-fried fish", "tandoori prawns", "cucumber chaat", "malai paneer tikka"], whyBuyThis: "It brings the Wairau–Awatere contrast of tropical fruit and green freshness into one glass.",
    faqs: [{ question: "Which grape is used in this wine?", answer: "Sauvignon Blanc, blended from fruit grown in Marlborough's Wairau and Awatere Valleys." }, { question: "Is this a sweet white wine?", answer: "No. Passion-fruit aromas sit over a crisp, dry-tasting style." }],
    metaTitle: "Villa Maria Sauvignon Blanc Price, Taste & Review | BevOry", metaDescription: "Villa Maria Sauvignon Blanc offers passion fruit, lime and herbs. Pair with rava-fried fish; check city prices on BevOry."
  },
  "villa-maria-pinot-noir-875ee9f": {
    productName: "Villa Maria Pinot Noir", category: "Marlborough Pinot Noir",
    shortOverview: "Villa Maria Pinot Noir is a fragrant Marlborough red with cherry, raspberry and soft spice. It is more supple than a tannic Cabernet and especially comfortable with roast or tandoori poultry.",
    craftStory: "Villa Maria selects Pinot Noir from Marlborough's Wairau and Awatere Valleys for its Private Bin style. Cool nights protect red-fruit freshness, while gentle skin fermentation and measured oak influence develop fine, cocoa-like tannins.",
    tastingNotes: { nose: "Ripe cherry, raspberry, cinnamon and a little clove.", palate: "Silky and medium-bodied, with cranberry, pomegranate and soft cocoa-edged tannin.", finish: "Medium-long, with red berries and a restrained roasted-spice note." },
    servingGuide: { glassware: "Burgundy red-wine glass", idealTemperature: "Slightly cool, 14–16°C", recommendation: "Serve a touch cooler than heavy reds and give it 10–15 minutes in a broad glass." },
    foodPairings: ["tandoori chicken", "mushroom galouti kebab", "roast duck", "paneer tikka"], whyBuyThis: "It offers Marlborough Pinot fruit and gentle spice without demanding a cellar or heavy meal.",
    faqs: [{ question: "Is Villa Maria Pinot Noir from Marlborough?", answer: "The Private Bin wine is blended from selected Marlborough vineyards, including Wairau and Awatere Valley fruit." }, { question: "Is it as tannic as Cabernet?", answer: "No. Pinot Noir usually has a lighter, silkier tannin profile, and this bottle follows that style." }],
    metaTitle: "Villa Maria Pinot Noir Price, Taste & Review | BevOry", metaDescription: "Villa Maria Pinot Noir brings cherry, raspberry and soft spice. Pair with tandoori chicken; see city prices on BevOry."
  },
  "robert-mondavi-private-selection-chardonnay-f7b22e6": {
    productName: "Robert Mondavi Private Selection Chardonnay", category: "California Chardonnay",
    shortOverview: "This Private Selection Chardonnay leans creamy and generous, with pineapple, lime and vanilla. It offers a richer California contrast to a sharply citrus-led white.",
    craftStory: "Robert Mondavi established Private Selection in 1994. Its Chardonnay uses Central Coast fruit, including Monterey and Paicines sources; French-oak ageing and malolactic conversion contribute the round texture and custard-like notes.",
    tastingNotes: { nose: "Pineapple, lime pie, honeysuckle and crème brûlée.", palate: "Creamy and medium-full, with ripe tropical fruit, baking spice and toasty oak.", finish: "Medium-long, soft and fresh-edged, with vanilla and citrus." },
    servingGuide: { glassware: "Burgundy white-wine glass", idealTemperature: "Cool, 10–12°C", recommendation: "Chill gently, then leave it in the glass for five minutes to show its oak and cream notes." },
    foodPairings: ["chicken malai tikka", "butter-garlic prawns", "paneer tikka", "corn-and-cheese kebabs"], whyBuyThis: "French oak and malolactic texture give this Chardonnay a recognisably rich but still citrus-lifted style.",
    faqs: [{ question: "Is Private Selection Chardonnay from Napa Valley?", answer: "The current producer describes Central Coast sourcing, including Monterey and Paicines, rather than Napa estate fruit." }, { question: "Why does it taste creamy?", answer: "The producer attributes its texture partly to malolactic conversion and French-oak ageing." }],
    metaTitle: "Mondavi Private Chardonnay Price, Taste & Review | BevOry", metaDescription: "Private Selection Chardonnay has pineapple, lime and creamy oak. Pair with malai tikka; check city prices on BevOry."
  },
  "robert-mondavi-private-selection-zinfandel-4d40fa9": {
    productName: "Robert Mondavi Private Selection Zinfandel", category: "California Zinfandel Red Wine",
    shortOverview: "This archived Private Selection Zinfandel is a ripe, spice-led California red, not the brand's current Pinot Noir or Cabernet. Plum and dark berries make it a natural partner for charred, savoury food.",
    craftStory: "Robert Mondavi's Private Selection line began in 1994 with a focus on approachable California wine. Historic Zinfandel releases drew on California fruit; red-grape fermentation supplies colour and tannin, but the vineyard blend and oak regimen must be read from the bottle's vintage rather than assumed constant.",
    tastingNotes: { nose: "Blackberry, wild cherry, plum and a touch of pepper.", palate: "Generous and medium-full, with dark fruit, sweet spice and soft-grained tannin.", finish: "Medium-long, leaving plum skin and a dry, peppery edge." },
    servingGuide: { glassware: "Standard red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Serve with a smoky or spiced main dish; a short rest in the glass helps the fruit settle." },
    foodPairings: ["mutton seekh kebab", "tandoori chicken", "mushroom pepper fry", "aged cheddar"], whyBuyThis: "It offers the jammy-fruit-and-spice appeal of California Zinfandel within the older Private Selection range.",
    faqs: [{ question: "Is this Zinfandel still in the current Private Selection range?", answer: "It does not appear among the producer's currently listed wines; check the physical vintage and label if considering an older bottle." }, { question: "Is red Zinfandel a sweet rosé?", answer: "No. This is a red Zinfandel, distinct from the sweet White Zinfandel style." }],
    metaTitle: "Mondavi Private Zinfandel Price, Taste & Review | BevOry", metaDescription: "Private Selection Zinfandel offers blackberry, plum and pepper. Pair with mutton seekh; check city prices on BevOry."
  },
  "robert-mondavi-private-selection-pinot-noir-c9342b8": {
    productName: "Robert Mondavi Private Selection Pinot Noir", category: "California Pinot Noir",
    shortOverview: "Private Selection Pinot Noir keeps California's ripe cherry character but retains a light, silky feel. Violet, spice and a little vanilla make it accessible with a broad dinner menu.",
    craftStory: "The Private Selection team sources Pinot Noir from California's Central Coast and Lodi, using cool nights to retain fruit freshness. French-oak ageing rounds the red-fruit profile and adds a measured spice note.",
    tastingNotes: { nose: "Ripe red cherry, violet and a light tobacco-leaf nuance.", palate: "Silky and medium-bodied, with cherry, red berry and gentle warm spice.", finish: "Medium, with soft vanilla, cherry skin and a little dry earth." },
    servingGuide: { glassware: "Burgundy red-wine glass", idealTemperature: "Slightly cool, 14–16°C", recommendation: "Pour cool and allow 10 minutes to open; avoid long decanting that can flatten its delicate perfume." },
    foodPairings: ["tandoori chicken", "mushroom galouti kebab", "herb-roasted chicken", "grilled salmon"], whyBuyThis: "It pairs ripe California Pinot fruit with a gentle structure that suits poultry and vegetables.",
    faqs: [{ question: "Is this the same as Robert Mondavi Napa Cabernet?", answer: "No. Private Selection Pinot Noir is a different grape and range, with lighter tannins and California sourcing." }, { question: "Does it have oak influence?", answer: "Yes. The producer notes French-oak ageing, which adds roundness and spice." }],
    metaTitle: "Mondavi Private Pinot Noir Price, Taste & Review | BevOry", metaDescription: "Private Selection Pinot Noir brings cherry, violet and vanilla. Pair with tandoori chicken; check city prices on BevOry."
  },
  "robert-mondavi-cabernet-sauvignon-ac1e0e3": {
    productName: "Robert Mondavi Cabernet Sauvignon", category: "California Cabernet Sauvignon",
    shortOverview: "Robert Mondavi Cabernet Sauvignon is a structured, black-fruited California red. Check the bottle's range and vintage: the Napa estate, Private Selection and Woodbridge bottlings are distinct wines.",
    craftStory: "Robert Mondavi founded his Napa Valley winery in Oakville in 1966 and helped define modern California Cabernet. Cabernet grapes are fermented on their skins and aged in oak for tannin integration; the bottle's range and vintage identify its own vineyard and barrel details.",
    tastingNotes: { nose: "Blackcurrant, dark cherry, cedar and dried herb.", palate: "Medium-full and firm, with cassis, plum and oak spice supported by Cabernet tannin.", finish: "Medium-long and dry, leaving black fruit and a faint tobacco note." },
    servingGuide: { glassware: "Bordeaux-style red-wine glass", idealTemperature: "Cellar-cool, 16–18°C", recommendation: "Allow 20–30 minutes of air, then adjust for the actual bottle's age and structure." },
    foodPairings: ["lamb rogan josh", "mutton seekh kebab", "mushroom pepper fry", "aged cheddar"], whyBuyThis: "It offers the classic Cabernet combination of dark fruit, herb and tannin under a historic California name.",
    faqs: [{ question: "How can I tell Mondavi Cabernet bottlings apart?", answer: "Read the bottle's range and origin line: Napa Valley, Private Selection and Woodbridge refer to different wines." }, { question: "Should Cabernet be decanted?", answer: "A young, firm bottle may benefit from air; mature bottles should be handled more gently." }],
    metaTitle: "Mondavi Cabernet Sauvignon Price, Taste & Review | BevOry", metaDescription: "Robert Mondavi Cabernet offers cassis, cherry and cedar. Pair with lamb rogan josh; check indicative city prices on BevOry."
  },
  "robert-mondavi-napa-valley-cab-sauvignon-63b599b": {
    productName: "Robert Mondavi Napa Valley Cabernet", category: "Napa Valley Cabernet Sauvignon",
    shortOverview: "The Napa Valley Cabernet is a fuller, more site-led Mondavi wine than a generic California blend. Dark berries, cedar and a firm finish give it room to develop with food or careful cellaring.",
    craftStory: "Robert Mondavi Winery was founded in Oakville in 1966. Its Napa Valley Cabernet draws from estate vineyards in Oakville and Stags Leap District plus long-standing growers; fruit is fermented on skins and aged in French oak, with each vintage's blend and new-oak share differing.",
    tastingNotes: { nose: "Blackberry, black cherry, blueberry, cedar and dried herbs.", palate: "Plush but structured, with dark fruit, chocolate and herbal depth over firm tannins.", finish: "Long, with cassis, mocha and dry oak spice." },
    servingGuide: { glassware: "Large Bordeaux glass", idealTemperature: "Cellar-cool, 16–18°C", recommendation: "Decant a young vintage for 45–60 minutes; shorten that for a mature, sediment-bearing bottle." },
    foodPairings: ["lamb chops", "mutton seekh kebab", "galouti kebab", "aged cheddar"], whyBuyThis: "Napa vineyard sourcing and French-oak ageing give this Cabernet a clear sense of place and structure.",
    faqs: [{ question: "Is this the same as Private Selection Cabernet?", answer: "No. The Napa Valley bottling is a separate Robert Mondavi Winery range with Napa sourcing." }, { question: "Does its grape blend vary?", answer: "Yes. The producer's Napa Cabernet is Cabernet-led and may include small amounts of other Bordeaux grapes by vintage." }],
    metaTitle: "Mondavi Napa Cabernet Price, Taste & Review | BevOry", metaDescription: "Napa Valley Cabernet brings dark berries, cedar and mocha. Pair with lamb chops; check indicative city prices on BevOry."
  },
  "robert-mondavi-sauvignon-blanc-c7b839c": {
    productName: "Robert Mondavi Sauvignon Blanc", category: "Napa Valley Sauvignon Blanc",
    shortOverview: "Mondavi's Napa Sauvignon Blanc balances citrus and yellow peach with a softer texture than sharply grassy examples. Its lively acidity still makes it a useful match for seafood and green herbs.",
    craftStory: "Robert Mondavi Winery sources its Napa Valley Sauvignon Blanc from Oakville and Stags Leap District vineyards. Fruit is vinified to retain citrus and varietal freshness; the precise ferment and ageing choices depend on the vintage and should not be confused with the separate Private Selection wine.",
    tastingNotes: { nose: "Lime, yellow peach, orange blossom and a faint green-herb note.", palate: "Fresh and medium-bodied, with citrus, stone fruit and a gently rounded middle.", finish: "Medium-long and dry, leaving lime peel and soft mineral freshness." },
    servingGuide: { glassware: "Aromatic white-wine glass", idealTemperature: "Chilled, 8–10°C", recommendation: "Pour cool alongside a fresh or lightly charred dish; do not over-chill until the fruit disappears." },
    foodPairings: ["tandoori prawns", "rava-fried fish", "cucumber chaat", "malai paneer tikka"], whyBuyThis: "It delivers Napa Sauvignon Blanc with both citrus drive and a gently rounded, meal-friendly palate.",
    faqs: [{ question: "Is this the Private Selection Sauvignon Blanc?", answer: "No. This entry follows the Robert Mondavi Winery Napa Valley bottling, not the separate Private Selection range." }, { question: "Is Sauvignon Blanc generally served cold?", answer: "Yes. Around 8–10°C shows its citrus and herbal lift without muting the wine." }],
    metaTitle: "Mondavi Sauvignon Blanc Price, Taste & Review | BevOry", metaDescription: "Mondavi Sauvignon Blanc offers lime, peach and fresh herbs. Pair with tandoori prawns; check city prices on BevOry."
  },
  "roche-mazet-cabernet-sauvignon-82be81c": {
    productName: "Roche Mazet Cabernet Sauvignon", category: "Pays d'Oc Cabernet Sauvignon",
    shortOverview: "Roche Mazet Cabernet Sauvignon is a rounder, southern-French take on the grape, with dark fruit and a soft oak frame. It is less severe than a cool-climate, heavily tannic Cabernet.",
    craftStory: "Roche Mazet selects Cabernet from the varied plains and slopes of Pays d'Oc in southern France. Parcels are vinified and blended for varietal character, with wood ageing lending the final wine roundness and body rather than masking the fruit.",
    tastingNotes: { nose: "Blackcurrant, ripe cherry, dried herb and light vanilla.", palate: "Medium-full and rounded, with cassis, plum and gentle oak spice over measured tannins.", finish: "Medium, dry and smooth, with dark berry skin and cedar." },
    servingGuide: { glassware: "Standard red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Open 15–20 minutes before dinner; serve slightly below room temperature." },
    foodPairings: ["mutton seekh kebab", "tandoori chicken", "mushroom pepper fry", "aged cheddar"], whyBuyThis: "It gives Pays d'Oc Cabernet fruit and oak in an approachable dinner-wine format.",
    faqs: [{ question: "Is Roche Mazet Cabernet from Bordeaux?", answer: "No. This varietal wine comes from Pays d'Oc in southern France." }, { question: "Is it the same as Roche Mazet Merlot?", answer: "No. Cabernet has a firmer blackcurrant-and-tannin profile; the Merlot is rounder and more plum-led." }],
    metaTitle: "Roche Mazet Cabernet Price, Taste & Review | BevOry", metaDescription: "Roche Mazet Cabernet shows blackcurrant, plum and soft oak. Pair with mutton seekh; check city prices on BevOry."
  },
  "roche-mazet-merlot-3c3e61d": {
    productName: "Roche Mazet Merlot", category: "Pays d'Oc Merlot Red Wine",
    shortOverview: "Roche Mazet Merlot is a supple Pays d'Oc red with cherry, blackberry and a chocolate-spice edge. Its velvety tannin makes it more forgiving than the brand's Cabernet.",
    craftStory: "Roche Mazet blends Merlot from Languedoc-Roussillon vineyard terraces and cooler plots within the Pays d'Oc. Careful selection and wood ageing build its rounded fruit and lightly spicy finish.",
    tastingNotes: { nose: "Fresh cherry, blackberry jam and a hint of sweet spice.", palate: "Round and medium-bodied, with red fruit, chocolate and velvety tannins.", finish: "Medium and smooth, leaving cherry skin and a faint woody note." },
    servingGuide: { glassware: "Standard red-wine glass", idealTemperature: "Slightly cool, about 16°C", recommendation: "Serve just below room temperature with a simple grilled or roasted meal." },
    foodPairings: ["tandoori chicken", "paneer tikka", "mushroom masala", "lamb kebab"], whyBuyThis: "It brings French varietal Merlot's easy texture and savoury oak to an everyday meal.",
    faqs: [{ question: "Where is Roche Mazet Merlot made?", answer: "It is a Pays d'Oc wine from southern France, with fruit selected from different Languedoc-Roussillon sites." }, { question: "Does this Merlot use oak?", answer: "Yes. The producer describes wood ageing for this varietal, contributing roundness and light spice." }],
    metaTitle: "Roche Mazet Merlot Price, Taste & Review | BevOry", metaDescription: "Roche Mazet Merlot has cherry, blackberry and soft chocolate. Pair with paneer tikka; compare city prices on BevOry."
  },
  "roche-mazet-pinot-noir-33cd72d": {
    productName: "Roche Mazet Pinot Noir", category: "Pays d'Oc Pinot Noir",
    shortOverview: "Roche Mazet Pinot Noir offers soft red and black fruit with a subtle smoky-spice note. It is a silky southern-French Pinot, distinct from both the brand's Merlot and a delicate Burgundy.",
    craftStory: "Roche Mazet selects Pinot Noir from suitable Pays d'Oc sites and uses gentle skin maceration to avoid coarse extraction. Blending parcels across this varied southern-French region gives fruit concentration while keeping the wine supple.",
    tastingNotes: { nose: "Red cherry, blackberry, mild smoke and warm spice.", palate: "Silky and medium-bodied, with red berry fruit, a mineral line and restrained tannins.", finish: "Medium and balanced, leaving cherry skin and a light savoury spice." },
    servingGuide: { glassware: "Burgundy red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Serve in a broad glass and let it breathe briefly; avoid heating it above room temperature." },
    foodPairings: ["tandoori chicken", "mushroom galouti kebab", "grilled lamb chops", "aged cheddar"], whyBuyThis: "It gives a fruit-forward Pays d'Oc interpretation of Pinot Noir without losing the grape's silky texture.",
    faqs: [{ question: "Is Roche Mazet Pinot Noir from Burgundy?", answer: "No. The producer sources it from Pays d'Oc in southern France." }, { question: "Why is it lighter than Roche Mazet Cabernet?", answer: "Pinot Noir and gentle extraction give softer tannins and a more delicate body than Cabernet Sauvignon." }],
    metaTitle: "Roche Mazet Pinot Noir Price, Taste & Review | BevOry", metaDescription: "Roche Mazet Pinot Noir brings cherry, blackberry and silky tannin. Pair with tandoori chicken; check city prices on BevOry."
  },
};
