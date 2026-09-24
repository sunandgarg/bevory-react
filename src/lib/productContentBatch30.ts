// Producer-led editorial; source review: docs/editorial/product-batch-30-sources.md.
import type { ProductPublicDetail } from "./productContentBatch01.js";

type WineInput = Omit<ProductPublicDetail, "tastingNotes" | "servingGuide" | "metaTitle" | "metaDescription"> & {
  nose: string; palate: string; finish: string; glassware: string; temperature: string;
  serve: string; description: string;
};
const wine = (item: WineInput): ProductPublicDetail => ({
  productName: item.productName, category: item.category,
  shortOverview: item.shortOverview, craftStory: item.craftStory,
  tastingNotes: { nose: item.nose, palate: item.palate, finish: item.finish },
  servingGuide: { glassware: item.glassware, idealTemperature: item.temperature, recommendation: item.serve },
  foodPairings: item.foodPairings, whyBuyThis: item.whyBuyThis, faqs: item.faqs,
  metaTitle: `${item.productName} Price, Taste & Review | BevOry`.length <= 60
    ? `${item.productName} Price, Taste & Review | BevOry`
    : `${item.productName} Price | BevOry`,
  metaDescription: item.description,
});

export const PRODUCT_BATCH_CONTENT: Record<string, ProductPublicDetail> = {
  "york-sauvignon-blanc-81e9cc1": wine({
    productName: "York Sauvignon Blanc", category: "Nashik Sauvignon Blanc White Wine",
    shortOverview: "York Sauvignon Blanc is a Nashik white built around citrus and a green, herbaceous edge. Its dry acidity works particularly well with fried fish and fresh coriander.",
    craftStory: "York's winery overlooks the Gangapur backwaters in Maharashtra's Nashik district. Sauvignon Blanc is one of its established varietal wines; cooler picking and controlled white-wine fermentation help preserve freshness without a claim of barrel ageing.",
    nose: "Lime zest, green guava and fresh herbs.", palate: "Light to medium-bodied and dry, with citrus-led acidity and a crisp green-fruit middle.", finish: "Medium, clean and lightly grassy.", glassware: "Narrow white-wine glass", temperature: "Chilled (8–10°C)", serve: "Chill well and pour with seafood or a coriander (dhania) chutney-led starter.",
    foodPairings: ["rava-fried fish", "tandoori prawns", "cucumber chaat", "malai paneer tikka"], whyBuyThis: "A Nashik Sauvignon Blanc that makes local seafood pairings feel natural rather than borrowed.",
    faqs: [{ question: "Where is York Sauvignon Blanc made?", answer: "York Winery is based near the Gangapur backwaters in Nashik, Maharashtra." }, { question: "Should it be served warm?", answer: "No. About 8–10°C keeps its citrus and herbal notes focused." }], description: "York Sauvignon Blanc has lime, guava and brisk acidity. Pair with rava-fried fish; check city prices on BevOry."
  }),
  "york-all-rounder-shiraz-cabernet-fd8fed0": wine({
    productName: "York All Rounder Red", category: "Nashik Shiraz-Cabernet Red Wine",
    shortOverview: "York All Rounder Shiraz Cabernet brings peppery Shiraz fruit together with Cabernet's firmer frame. It is a practical red for a grilled Indian dinner rather than a cellar-only bottle.",
    craftStory: "York makes this blend in the Nashik Valley, where monsoon timing and warm days shape harvest decisions. Shiraz supplies spice and dark fruit, while Cabernet Sauvignon adds structure; exact percentages can change between releases.",
    nose: "Black plum, cassis and black-pepper spice.", palate: "Medium-bodied, with juicy berry fruit, mild warmth and Cabernet-like tannin at the back.", finish: "Medium, dry and pepper-fruited.", glassware: "Medium red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Give a young bottle 15 minutes of air before grilled food.",
    foodPairings: ["mutton seekh", "tandoori chicken", "lamb chops", "mushroom galouti"], whyBuyThis: "The two-grape blend offers more balance with spice than a single-variety red at the same table.",
    faqs: [{ question: "Which grapes are in York All Rounder Red?", answer: "The named wine blends Shiraz and Cabernet Sauvignon." }, { question: "Is this a sweet red?", answer: "It is best treated as a dry table red; ripe fruit does not itself mean added sweetness." }], description: "York All Rounder Red combines plum, cassis and pepper. Pair with mutton seekh; check city prices on BevOry."
  }),
  "york-h-block-chardonnay-efd1940": wine({
    productName: "York H Block Chardonnay", category: "Nashik Chardonnay White Wine",
    shortOverview: "H Block is York's fuller Chardonnay, with orchard fruit and a rounded palate. It stands apart from the winery's sharper Sauvignon Blanc when the meal is creamy or roasted.",
    craftStory: "H Block began as a site-led Chardonnay project at York Winery near Nashik's Gangapur backwaters. Sula Vineyards' producer portfolio has listed H Block Chardonnay; fruit sourcing has expanded over time, so the name should not be read as proof of a single-vineyard origin today.",
    nose: "Ripe pear, apple and a soft citrus note.", palate: "Medium-bodied and rounded, with white fruit, gentle acidity and a creamy impression.", finish: "Medium, fruit-led and softly textured.", glassware: "Medium Chardonnay glass", temperature: "Chilled (10–12°C)", serve: "Avoid serving ice-cold; let the wine warm slightly beside a creamy starter.",
    foodPairings: ["malai paneer tikka", "butter-garlic prawns", "grilled pomfret", "mild chicken korma"], whyBuyThis: "It shows a more textured face of Nashik Chardonnay without assuming heavy oak in every vintage.",
    faqs: [{ question: "Is H Block always single-vineyard?", answer: "The project began with a single site, but sourcing expanded; check the specific label for an estate-vineyard claim." }, { question: "Is it the same as York Sauvignon Blanc?", answer: "No. H Block uses Chardonnay, which generally gives a rounder texture." }], description: "York H Block Chardonnay offers pear and a rounded palate. Pair with malai paneer tikka; check city prices on BevOry."
  }),
  "york-cabernet-merlot-cf63252": wine({
    productName: "York Cabernet Merlot", category: "Nashik Cabernet-Merlot Red Wine",
    shortOverview: "York Cabernet Merlot is a Nashik red that balances Cabernet's tannin with Merlot's softer fruit. It suits tomato-rich or roasted dishes that need structure but not excessive weight.",
    craftStory: "The winery farms and sources around Nashik in Maharashtra. York's Cabernet-Merlot blend reflects a Bordeaux-style pairing adapted to Indian vineyards; published winery interviews describe oak influence, but the exact vessel and proportion should follow the vintage label.",
    nose: "Blackcurrant, plum and a restrained cedar-like note.", palate: "Medium-bodied, with Cabernet grip softened by Merlot's ripe red fruit.", finish: "Medium, dry and gently savoury.", glassware: "Bordeaux glass", temperature: "Cool room temperature (16–18°C)", serve: "Give it 20 minutes of air with a grilled main.",
    foodPairings: ["tandoori chicken", "mutton seekh", "lamb rogan josh", "aged cheddar"], whyBuyThis: "The classic Cabernet-Merlot pairing is expressed through Nashik fruit and approachable tannin.",
    faqs: [{ question: "Which grapes are in York Cabernet Merlot?", answer: "Its name identifies Cabernet Sauvignon and Merlot as the blend." }, { question: "Does it need decanting?", answer: "A young bottle can benefit from 15–20 minutes of air, especially alongside a rich meal." }], description: "York Cabernet Merlot has cassis, plum and rounded tannin. Pair with tandoori chicken; check city prices on BevOry."
  }),
  "york-all-rounder-sauvignon-chenin-6169d83": wine({
    productName: "York All Rounder White", category: "Nashik Sauvignon-Chenin White Wine",
    shortOverview: "York All Rounder Sauvignon Chenin marries Sauvignon's citrus snap to Chenin's softer orchard fruit. It is a versatile dry white for an Indian starter spread.",
    craftStory: "The blend comes from York's Nashik wine programme. Sauvignon Blanc and Chenin Blanc respond differently to Nashik's warm growing season, giving the winemaker a way to balance aromatic lift with roundness.",
    nose: "Lime, green apple and fresh pear.", palate: "Dry and medium-light, with Sauvignon-led acidity filling out into Chenin-like orchard fruit.", finish: "Medium, fresh and lightly fruity.", glassware: "Medium white-wine glass", temperature: "Chilled (8–10°C)", serve: "Pour cool with prawns, paneer or a crisp vegetable starter.",
    foodPairings: ["tandoori prawns", "malai paneer tikka", "cucumber chaat", "rava-fried fish"], whyBuyThis: "The blend gives both zip and texture without needing a strongly oaked style.",
    faqs: [{ question: "What is in York All Rounder White?", answer: "The named wine combines Sauvignon Blanc and Chenin Blanc." }, { question: "Is it best with spicy food?", answer: "Its acidity suits mild to medium spice; very hot chilli can overwhelm the fruit." }], description: "York All Rounder White brings lime, pear and crisp acidity. Pair with tandoori prawns; check city prices on BevOry."
  }),
  "york-chenin-blanc-a43754c": wine({
    productName: "York Chenin Blanc", category: "Nashik Chenin Blanc White Wine",
    shortOverview: "York Chenin Blanc is an Indian white with orchard fruit and useful acidity. Chenin can be made in many sweetness styles, so the bottle's label matters more than the grape name alone.",
    craftStory: "York established Chenin Blanc at its Gangapur-backwater Nashik vineyard and has also used the grape for sparkling wine. This still bottling is separate from the traditional-method Sparkling Cuvée, which undergoes a second fermentation.",
    nose: "Green apple, pear and a hint of white blossom.", palate: "Light to medium-bodied, with orchard fruit, lively acidity and a soft middle.", finish: "Medium, clean and apple-toned.", glassware: "Medium white-wine glass", temperature: "Chilled (8–10°C)", serve: "Chill before serving with gently spiced seafood or paneer.",
    foodPairings: ["malai paneer tikka", "rava-fried fish", "tandoori prawns", "cucumber chaat"], whyBuyThis: "Nashik Chenin has enough fruit and acidity to bridge seafood and vegetarian starters.",
    faqs: [{ question: "Is York Chenin Blanc sparkling?", answer: "No. This is the still Chenin Blanc; York also makes a separately labelled sparkling Chenin." }, { question: "Is every Chenin Blanc dry?", answer: "No. Chenin can range from dry to sweet, so check the bottle's style indication." }], description: "York Chenin Blanc shows apple, pear and fresh acidity. Pair with malai paneer tikka; check city prices on BevOry."
  }),
  "york-shiraz-b9e0486": wine({
    productName: "York Shiraz", category: "Nashik Shiraz Red Wine",
    shortOverview: "York Shiraz is a Nashik red with dark fruit and a peppery edge. It has enough body for tandoor-charred food without requiring a collector's serving ritual.",
    craftStory: "York's Shiraz comes from its Nashik programme. Winery reporting has described co-fermentation with some whole-bunch Viognier in certain releases, a technique that can lift aroma; the bottle's vintage sheet is needed for exact composition.",
    nose: "Blackberry, plum and ground pepper.", palate: "Medium to full-bodied, with dark fruit, savoury spice and rounded tannins.", finish: "Medium, warm and pepper-led.", glassware: "Medium red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Pour with a grilled main and let the glass breathe briefly.",
    foodPairings: ["mutton seekh", "tandoori lamb chops", "lamb rogan josh", "mushroom galouti"], whyBuyThis: "It is a locally grown red whose peppery register suits the tandoor especially well.",
    faqs: [{ question: "Is York Shiraz made in India?", answer: "Yes. York Winery's home is the Nashik Valley in Maharashtra." }, { question: "Does it contain Viognier?", answer: "Some winery reporting describes Viognier co-fermentation; check the exact vintage before assuming a fixed blend." }], description: "York Shiraz brings blackberry and peppery spice. Pair with mutton seekh; check city prices on BevOry."
  }),
  "york-sparkling-cuvee-brut-172bd4f": wine({
    productName: "York Sparkling Cuvée Brut", category: "Nashik Brut Sparkling Wine",
    shortOverview: "York Sparkling Cuvée Brut is a bottle-fermented Indian sparkler made from Chenin Blanc. Its fine bubbles and orchard fruit make it a strong aperitif with fried starters.",
    craftStory: "York developed its traditional-method Blanc de Blancs from Nashik Chenin Blanc. Secondary fermentation occurs in bottle and time on lees adds a gentle bready texture; dosage and lees duration differ by release.",
    nose: "Green apple, lemon peel and a faint fresh-bread note.", palate: "Dry-leaning and lively, with fine mousse, orchard fruit and creamy lees texture.", finish: "Medium, crisp and lightly biscuity.", glassware: "Tulip sparkling-wine glass", temperature: "Well chilled (6–8°C)", serve: "Chill fully and open gently, pouring down the side of a tulip glass.",
    foodPairings: ["rava-fried fish", "tandoori prawns", "cucumber chaat", "malai paneer tikka"], whyBuyThis: "Traditional-method Nashik Chenin gives a specifically Indian answer to the dry aperitif sparkler.",
    faqs: [{ question: "Is York Cuvée Champagne?", answer: "No. It is an Indian traditional-method sparkling wine, not wine from France's Champagne region." }, { question: "Which grape does York use?", answer: "York has made its Blanc de Blancs Sparkling Cuvée from Chenin Blanc." }], description: "York Sparkling Cuvée Brut offers apple, fine bubbles and lees texture. Pair with rava-fried fish; check city prices on BevOry."
  }),
  "fantini-pinot-grigio-7c29c6b": wine({
    productName: "Fantini Pinot Grigio", category: "Sicilian Pinot Grigio White Wine",
    shortOverview: "Fantini Pinot Grigio is more aromatic than a deliberately neutral version of the grape. Peach, citrus and a mild spice note come from its Sicilian fruit and lees handling.",
    craftStory: "Fantini sources Pinot Grigio from north-facing vineyards near Sambuca di Sicilia in Agrigento province. Its technical sheet describes cool fermentation and three to five months resting on lees, with no claim that the wine is barrel-aged.",
    nose: "Peach, grapefruit, lime and a delicate nutmeg-like spice.", palate: "Medium-bodied and balanced, with ripe fruit, citrus acidity and a light savoury edge.", finish: "Medium to long, clean and faintly spicy.", glassware: "Medium white-wine glass", temperature: "Chilled (10–12°C)", serve: "Pour cool with grilled fish or a mild cream-based dish.",
    foodPairings: ["grilled pomfret", "malai paneer tikka", "butter-garlic prawns", "rava-fried fish"], whyBuyThis: "North-facing Sicilian vineyards and lees contact give it texture without sacrificing freshness.",
    faqs: [{ question: "Is Fantini Pinot Grigio from northern Italy?", answer: "No. Fantini's named Terre Siciliane bottling comes from Sicily." }, { question: "Is it heavily oaked?", answer: "The producer describes cool fermentation and lees rest, not barrel ageing for this wine." }], description: "Fantini Pinot Grigio offers peach, grapefruit and light spice. Pair with grilled pomfret; check city prices on BevOry."
  }),
  "fantini-cerasuolo-d-abruzzo-82fc23e": wine({
    productName: "Fantini Cerasuolo", category: "Cerasuolo d'Abruzzo DOC Rosé Wine",
    shortOverview: "Fantini Cerasuolo d'Abruzzo is a deeper pink rosé made from Montepulciano, not a cherry-flavoured drink. Its red-fruit body makes it unusually capable with grilled food.",
    craftStory: "Fantini grows Montepulciano on clay-limestone sites around Ortona on the Adriatic coast. The producer describes roughly six hours of skin contact followed by fermentation without skins, yielding the wine's vivid cherry colour.",
    nose: "Fresh strawberry and red cherry with a delicate floral note.", palate: "Medium-bodied, soft and rounded, with red-fruit flavour and balancing acidity.", finish: "Long for a rosé, clean and berry-led.", glassware: "Medium rosé glass", temperature: "Chilled (10–12°C)", serve: "Serve lightly chilled with tandoor vegetables or prawns.",
    foodPairings: ["tandoori prawns", "mushroom tikka", "malai paneer tikka", "grilled fish tikka"], whyBuyThis: "Montepulciano gives this Abruzzo rosé more colour and table presence than a very pale pink wine.",
    faqs: [{ question: "What grape makes Fantini Cerasuolo?", answer: "Fantini uses Montepulciano for its Cerasuolo d'Abruzzo DOC." }, { question: "Does Cerasuolo mean cherry flavouring?", answer: "No. The name refers to its cherry-like colour, not an added flavour." }], description: "Fantini Cerasuolo brings strawberry, cherry and a rounded palate. Pair with tandoori prawns; check city prices on BevOry."
  }),
  "fantini-trebbiano-d-abruzzo-5b1f2fe": wine({
    productName: "Fantini Trebbiano", category: "Trebbiano d'Abruzzo DOC White Wine",
    shortOverview: "Fantini Trebbiano d'Abruzzo is a fresh but not flavourless white. Peach and white flowers give it a gentle aromatic side beside its coastal acidity.",
    craftStory: "Fantini's vineyards lie near Ortona on Abruzzo's Adriatic coast, on clay-limestone soils around 230 metres above sea level. The crushed and pressed grapes ferment in stainless steel at about 12°C, protecting the fruit rather than adding oak flavour.",
    nose: "Peach, loquat and orange blossom.", palate: "Medium-bodied and balanced, with yellow fruit and a clean acidic line.", finish: "Medium, persistent and softly floral.", glassware: "Medium white-wine glass", temperature: "Chilled (10–12°C)", serve: "Serve cool with a lightly spiced fish or chicken course.",
    foodPairings: ["rava-fried fish", "grilled pomfret", "tandoori prawns", "malai paneer tikka"], whyBuyThis: "Its Ortona origin and cool steel fermentation preserve more fruit than Trebbiano's plain reputation suggests.",
    faqs: [{ question: "Is Fantini Trebbiano from Tuscany?", answer: "No. This DOC wine is from Abruzzo, around Ortona on Italy's Adriatic coast." }, { question: "Is it oaked?", answer: "Fantini describes cool stainless-steel fermentation for this bottling." }], description: "Fantini Trebbiano has peach, orange blossom and fresh acidity. Pair with rava-fried fish; check city prices on BevOry."
  }),
  "fantini-montepulciano-d-abruzzo-02b26b7": wine({
    productName: "Fantini Montepulciano", category: "Montepulciano d'Abruzzo DOC Red Wine",
    shortOverview: "Fantini Montepulciano d'Abruzzo is a full-fruited red from Italy's Adriatic side. Wild berries and modest tannin make it a good partner for smoky grilled food.",
    craftStory: "Fantini sources Montepulciano from Ortona, San Salvo and Pollutri on Abruzzo clay-limestone soils. Its sheet describes four days of cold maceration, then eight to ten days of stainless-steel fermentation at 24–26°C.",
    nose: "Wild blackberry, black cherry and a little plum.", palate: "Full-bodied yet balanced, with berry fruit and gentle tannin rather than hard oak.", finish: "Medium, dry and clean.", glassware: "Medium red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Allow a young bottle 15 minutes in the glass with a hearty main.",
    foodPairings: ["mutton seekh", "tandoori chicken", "lamb rogan josh", "aged cheddar"], whyBuyThis: "It offers a recognisable Abruzzo red without imposing a heavily wooded profile.",
    faqs: [{ question: "Is Montepulciano d'Abruzzo a Tuscan wine?", answer: "No. The DOC is in Abruzzo; Montepulciano is the red grape here." }, { question: "Is Fantini's bottling very tannic?", answer: "Fantini describes it as full-bodied but only lightly tannic." }], description: "Fantini Montepulciano shows wild berries and soft tannins. Pair with mutton seekh; check city prices on BevOry."
  }),
  "fantini-pinot-calalenta-rose-c872538": wine({
    productName: "Fantini Calalenta Rosato", category: "Abruzzo Merlot Rosé Wine",
    shortOverview: "Calalenta is Fantini's pale Merlot rosé. Strawberry, watermelon and saline freshness make it a serious summer food wine.",
    craftStory: "Merlot grows near Abruzzo's Maiella massif for this Ortona-and-Pollutri rosé. Fantini night-harvests the grapes, chills the must rapidly and ferments the free-run juice cool in steel before a short lees rest.",
    nose: "Strawberry, cut watermelon and rose petal.", palate: "Rounded yet fresh, with red fruit, lively acidity and a faint mineral-saline feel.", finish: "Long, delicate and clean.", glassware: "Medium rosé glass", temperature: "Chilled (10–12°C)", serve: "Pour cool with prawns or a mild vegetable starter.",
    foodPairings: ["tandoori prawns", "cucumber chaat", "malai paneer tikka", "grilled fish tikka"], whyBuyThis: "Night-picked Merlot gives the wine pale colour without losing flavour or texture.",
    faqs: [{ question: "Which grape is used for Calalenta Rosato?", answer: "Fantini makes Calalenta Rosato from Merlot." }, { question: "Where is it from?", answer: "Fantini identifies Ortona and Pollutri in Abruzzo as its production area." }], description: "Fantini Calalenta Rosato has strawberry, watermelon and fresh acidity. Pair with tandoori prawns; check city prices on BevOry."
  }),
  "pasqua-merlot-trevenezie-cfcf05c": wine({
    productName: "Pasqua Merlot Trevenezie", category: "Trevenezie IGT Merlot Red Wine", shortOverview: "Pasqua's northern Italian Merlot offers dark fruit and soft tannin in an easy dinner style. Its herbal edge keeps the wine from tasting jammy.",
    craftStory: "The Trevenezie IGT fruit comes from Veneto and Friuli. Pasqua ferments the Merlot as a red, completes malolactic fermentation and matures it in steel rather than relying on new-oak flavour.",
    nose: "Blackcurrant, plum and a quiet herbal note.", palate: "Medium-bodied, rounded and velvety, with ripe red fruit and supple tannin.", finish: "Medium, soft and plum-led.", glassware: "Bordeaux glass", temperature: "Cool room temperature (16°C)", serve: "Pour with a roasted or tomato-based main; a brief spell in the glass opens the fruit.",
    foodPairings: ["tandoori chicken", "mushroom galouti", "lamb chops", "aged cheddar"], whyBuyThis: "It brings northern Italian Merlot's easy texture without a heavy oak signature.",
    faqs: [{ question: "Where is Pasqua Merlot Trevenezie from?", answer: "Pasqua sources this IGT Merlot from the Veneto and Friuli area of northeast Italy." }, { question: "Is it heavily oaked?", answer: "The producer's technical sheet describes steel maturation, not new-barrel ageing." }], description: "Pasqua Merlot Trevenezie brings plum, blackcurrant and soft tannins. Pair with tandoori chicken; check city prices on BevOry."
  }),
  "pasqua-valpolicella-ripasso-superiore-f1d5740": wine({
    productName: "Pasqua Valpolicella Ripasso Superiore", category: "Valpolicella Ripasso Superiore DOC Red Wine", shortOverview: "Pasqua's Ripasso is a richer Verona red built on red cherry, dried fruit and spice. It is fuller than a straightforward Valpolicella, yet remains a wine for the table.",
    craftStory: "Valpolicella wine undergoes a second fermentation over the pomace left from Amarone production, the defining ripasso step. Pasqua then ages this bottling in small oak barrels, adding depth to its Veneto fruit.",
    nose: "Marasca cherry, blueberry, currant and liquorice.", palate: "Full and velvety, with ripe dark fruit, dried-cherry richness and measured spice.", finish: "Long, warm and gently savoury.", glassware: "Large red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Give the wine 20 minutes of air before a slow-cooked main.",
    foodPairings: ["lamb rogan josh", "mutton seekh", "mushroom galouti", "70% dark chocolate"], whyBuyThis: "Ripasso fermentation lends Amarone-like depth without making this a full Amarone.",
    faqs: [{ question: "Is Ripasso the same as Amarone?", answer: "No. Ripasso is Valpolicella wine refermented on Amarone pomace; Amarone itself is made from dried grapes." }, { question: "Should it be chilled?", answer: "Serve near 16–18°C, not warm from a hot room." }], description: "Pasqua Ripasso shows cherry, liquorice and velvety depth. Pair with lamb rogan josh; check city prices on BevOry."
  }),
  "pasqua-montepulciano-d-abruzzo-cbdf55c": wine({
    productName: "Pasqua Montepulciano d'Abruzzo", category: "Montepulciano d'Abruzzo DOC Red Wine", shortOverview: "Pasqua's Abruzzo Montepulciano is a dark-fruited red with a savoury edge. Blackberry, morello cherry and approachable tannin make it useful with the tandoor.",
    craftStory: "Pasqua identifies Montepulciano vineyards between Chieti and Casalbordino, at roughly 300–500 metres. Fermentation and maturation in steel preserve the grape's berry character rather than imposing a strong barrel note.",
    nose: "Blackberry, morello cherry and a dusting of spice.", palate: "Medium-full and juicy, with dark-fruit weight, fresh acidity and soft tannins.", finish: "Medium, dry and lightly spiced.", glassware: "Medium red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Pour beside a charred or tomato-rich main; no long decant is needed.",
    foodPairings: ["tandoori chicken", "mutton seekh", "lamb rogan josh", "aged cheddar"], whyBuyThis: "Higher Abruzzo sites and steel ageing retain freshness alongside Montepulciano's generous fruit.",
    faqs: [{ question: "Is this made from the Montepulciano grape?", answer: "Yes. The grape and the Abruzzo DOC share its name; this is not wine from the Tuscan town of Montepulciano." }, { question: "Is it oak-aged?", answer: "Pasqua's technical sheet specifies steel for this bottling." }], description: "Pasqua Montepulciano d'Abruzzo has blackberry, cherry and spice. Pair with mutton seekh; check city prices on BevOry."
  }),
  "pasqua-11-minutes-122a2e3": wine({
    productName: "Pasqua 11 Minutes Rosé", category: "Veneto Rosé Wine", shortOverview: "11 Minutes is Pasqua's pale, dry rosé with floral citrus and small-red-fruit notes. The name describes the short skin-contact interval used to build its colour.",
    craftStory: "Pasqua blends Corvina with Trebbiano di Lugana, Syrah and Carménère from the Veneto area. About 11 minutes of skin contact precede cool steel fermentation, followed by three to four months on lees for texture.",
    nose: "Wild strawberry, pink grapefruit and delicate blossom.", palate: "Dry and finely textured, with citrus acidity, red-berry fruit and a soft lees-rounded middle.", finish: "Medium, crisp and faintly savoury.", glassware: "Medium rosé glass", temperature: "Chilled (8–10°C)", serve: "Chill before an aperitif or seafood starter; avoid masking the wine with ice.",
    foodPairings: ["tandoori prawns", "cucumber chaat", "rava-fried fish", "malai paneer tikka"], whyBuyThis: "The brief maceration and lees rest give pale colour without an empty palate.",
    faqs: [{ question: "Why is it called 11 Minutes?", answer: "Pasqua says the grapes receive about 11 minutes of skin contact to develop the rosé colour." }, { question: "Which grapes are in the blend?", answer: "The producer lists Corvina, Trebbiano di Lugana, Syrah and Carménère." }], description: "Pasqua 11 Minutes Rosé has strawberry, grapefruit and fresh texture. Pair with tandoori prawns; check city prices on BevOry."
  }),
  "pasqua-sangiovese-pugalia-6d4d34f": wine({
    productName: "Pasqua Sangiovese Puglia", category: "Puglia IGT Sangiovese Red Wine", shortOverview: "Pasqua's Puglian Sangiovese puts a southern Italian accent on a central Italian grape. Red berries and soft tannins make it approachable with roast or grilled food.",
    craftStory: "The Sangiovese comes from Puglia rather than Tuscany. Pasqua ferments the wine on its skins, allows malolactic fermentation and aims for a fruit-led red that does not need a strong barrel story.",
    nose: "Red cherry, blackberry and a gentle dried-herb note.", palate: "Medium-bodied, with bright red fruit, soft tannins and a balanced dry middle.", finish: "Medium to long, fruity and lightly savoury.", glassware: "Medium red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Serve with a roast or grilled main, allowing a short breath in the glass.",
    foodPairings: ["tandoori chicken", "mutton seekh", "mushroom galouti", "lamb chops"], whyBuyThis: "Puglia offers a softer, fruit-forward reading of Sangiovese at the dinner table.",
    faqs: [{ question: "Is Pasqua Sangiovese Puglia a Chianti?", answer: "No. It uses Sangiovese from Puglia, whereas Chianti is a protected Tuscan wine region." }, { question: "What temperature suits it?", answer: "The producer recommends roughly 16–18°C." }], description: "Pasqua Sangiovese Puglia offers cherry and soft tannin. Pair with tandoori chicken; check city prices on BevOry."
  }),
  "louis-jadot-bourgogne-chardonnay-b8a558d": wine({
    productName: "Louis Jadot Bourgogne Chardonnay", category: "Bourgogne Chardonnay White Wine", shortOverview: "This regional Burgundy Chardonnay introduces Louis Jadot's white-wine style without the price of a village cru. Orchard fruit, citrus and a gentle creaminess make it flexible with food.",
    craftStory: "Maison Louis Jadot draws Chardonnay from Burgundy's wider regional appellation rather than one Chablis or Côte de Beaune vineyard. The house, founded in Beaune in 1859, assembles parcels for balance; oak influence can vary by release, so it should not be assumed from the grape alone.",
    nose: "Green apple, pear and lemon with a faint white-flower note.", palate: "Medium-bodied and rounded, with orchard fruit, citrus lift and restrained savoury texture.", finish: "Medium, fresh and lightly creamy.", glassware: "Medium Chardonnay glass", temperature: "Chilled (10–12°C)", serve: "Pour cool rather than ice-cold with a cream-based or grilled fish course.",
    foodPairings: ["malai paneer tikka", "butter-garlic prawns", "grilled pomfret", "mild chicken korma"], whyBuyThis: "It is a useful first Burgundy Chardonnay with enough fruit to meet an Indian dinner.",
    faqs: [{ question: "Is Bourgogne Chardonnay the same as Chablis?", answer: "No. Both use Chardonnay, but Chablis is a more specific northern Burgundy appellation." }, { question: "Where is Louis Jadot based?", answer: "The house was founded in Beaune in Burgundy, France." }], description: "Louis Jadot Bourgogne Chardonnay offers apple, citrus and gentle texture. Pair with malai paneer tikka; check city prices on BevOry."
  }),
  "louis-jadot-chablis-8aede91": wine({
    productName: "Louis Jadot Chablis", category: "Chablis AOC Chardonnay White Wine", shortOverview: "Louis Jadot Chablis is a crisp Chardonnay from Burgundy's cooler northern outpost. Citrus and a chalky impression make it a natural seafood wine.",
    craftStory: "Chablis sits on Kimmeridgian limestone and marl north of the Côte d'Or. Jadot's Chablis technical sheet specifies stainless-steel vinification and ageing, allowing the site's acidity and mineral character to lead rather than oak.",
    nose: "Lemon peel, green apple and a light white-flower note.", palate: "Dry and taut, with citrus acidity, orchard fruit and a chalky-saline impression.", finish: "Medium to long, clean and mineral-led.", glassware: "Narrow white-wine glass", temperature: "Chilled (10–12°C)", serve: "Keep it cool with seafood; avoid warming the bottle on the table.",
    foodPairings: ["rava-fried fish", "tandoori prawns", "grilled pomfret", "cucumber chaat"], whyBuyThis: "Steel ageing leaves Chablis's limestone-grown Chardonnay clear and precise.",
    faqs: [{ question: "Is Louis Jadot Chablis oaked?", answer: "The house's village Chablis technical sheet describes stainless-steel vinification and ageing." }, { question: "Is Chablis a grape?", answer: "No. Chablis is a Burgundy appellation; its white wine is Chardonnay." }], description: "Louis Jadot Chablis brings lemon, apple and crisp mineral character. Pair with rava-fried fish; check city prices on BevOry."
  }),
  "louis-jadot-maison-louis-jadot-chablis-76f874f": wine({
    productName: "Maison Louis Jadot Chablis", category: "Chablis AOC Chardonnay White Wine", shortOverview: "Maison Louis Jadot Chablis is a lean, food-ready white from northern Burgundy. Bright citrus and dry mineral character give it a very different feel from a buttery Chardonnay.",
    craftStory: "Chardonnay grows on Chablis's Kimmeridgian marl and limestone. Jadot's village Chablis is fermented and aged in stainless steel; the Maison name denotes the producer, not a separate grape or wine region.",
    nose: "Grapefruit, lemon and a faint green-herb note.", palate: "Light to medium-bodied and dry, with brisk acidity, citrus fruit and a chalky line.", finish: "Long and refreshing, with citrus pith and mineral persistence.", glassware: "Narrow white-wine glass", temperature: "Chilled (10–12°C)", serve: "Pour with simply grilled fish or prawns to keep the wine's acidity in focus.",
    foodPairings: ["grilled pomfret", "tandoori prawns", "rava-fried fish", "cucumber chaat"], whyBuyThis: "This Jadot-labelled Chablis puts freshness and site ahead of oak richness.",
    faqs: [{ question: "What does Maison mean on this label?", answer: "It is the French word for house and refers to producer Maison Louis Jadot." }, { question: "Is the wine sweet?", answer: "No. Village Chablis is a dry Chardonnay style." }], description: "Maison Louis Jadot Chablis has grapefruit, lemon and mineral freshness. Pair with grilled pomfret; check city prices on BevOry."
  }),
  "louis-jadot-beaujolais-villages-134f96c": wine({
    productName: "Louis Jadot Beaujolais-Villages", category: "Beaujolais-Villages Gamay Red Wine", shortOverview: "This Beaujolais-Villages is a lighter red built around Gamay's red fruit rather than heavy tannin. A slight chill brings its raspberry and cherry notes forward.",
    craftStory: "Beaujolais-Villages comes from designated northern Beaujolais communes, south of the Côte d'Or. Maison Louis Jadot's Beaujolais range works with Gamay, a grape whose fruit-led style makes this appellation approachable young.",
    nose: "Raspberry, red cherry and a small violet note.", palate: "Light to medium-bodied and juicy, with red berries, bright acidity and gentle tannin.", finish: "Medium, lively and berry-led.", glassware: "Medium red-wine glass", temperature: "Lightly chilled (13–15°C)", serve: "Cool the bottle briefly before pouring with lighter grilled food.",
    foodPairings: ["tandoori chicken", "mushroom tikka", "grilled fish tikka", "malai paneer tikka"], whyBuyThis: "It gives red-wine drinkers a lighter partner for foods that swamp a tannic Cabernet.",
    faqs: [{ question: "Which grape is in Beaujolais-Villages?", answer: "The appellation's red wines are made from Gamay." }, { question: "Can it be served chilled?", answer: "Yes. A gentle chill around 13–15°C suits this lighter red." }], description: "Louis Jadot Beaujolais-Villages offers raspberry and bright Gamay fruit. Pair with tandoori chicken; check city prices on BevOry."
  }),
  "louis-jadot-bourgogne-pinot-noir-ecf6e33": wine({
    productName: "Louis Jadot Bourgogne Pinot Noir", category: "Bourgogne Pinot Noir Red Wine", shortOverview: "Jadot's regional Pinot Noir introduces Burgundy through red cherry, raspberry and modest tannin. It favours a cooler serve and lighter food over the weight of a Cabernet-style dinner.",
    craftStory: "Pinot Noir is grown across Burgundy's regional appellation on varied clay-limestone slopes. Founded in Beaune in 1859, Maison Louis Jadot blends fruit from multiple sites for a consistent Bourgogne expression rather than a single-vineyard claim.",
    nose: "Red cherry, raspberry and a light woodland note.", palate: "Medium-light and silky, with fresh red fruit, delicate tannin and a savoury turn.", finish: "Medium, clean and cherry-led.", glassware: "Burgundy balloon glass", temperature: "Cool room temperature (14–16°C)", serve: "Pour slightly cool with roast poultry or mushroom dishes.",
    foodPairings: ["tandoori chicken", "mushroom galouti", "lamb chops", "aged cheddar"], whyBuyThis: "It offers the supple red-fruit character that makes regional Burgundy a useful Pinot starting point.",
    faqs: [{ question: "Is Bourgogne Pinot Noir a heavy red?", answer: "Usually not; this regional style is lighter and less tannic than many Cabernet-based reds." }, { question: "Should it be served warm?", answer: "No. Around 14–16°C keeps its red-fruit detail clear." }], description: "Louis Jadot Bourgogne Pinot Noir shows cherry, raspberry and silky tannins. Pair with tandoori chicken; check city prices on BevOry."
  }),
  "joseph-drouhin-puligny-montrachet-b3f5e78": wine({
    productName: "Joseph Drouhin Puligny-Montrachet", category: "Puligny-Montrachet Chardonnay White Wine", shortOverview: "Drouhin's Puligny-Montrachet is a poised Côte de Beaune Chardonnay with stone fruit, blossom and measured oak. It rewards a calm, food-led serve rather than a heavy chill.",
    craftStory: "Puligny-Montrachet's limestone soils are strewn with ochre pebbles. Drouhin hand-harvests, ferments in barrel and ages the wine roughly 14–16 months in French oak, with about one-fifth new wood in its producer specification.",
    nose: "White peach, acacia blossom and toasted almond.", palate: "Medium-full and finely textured, with ripe stone fruit, citrus tension and integrated oak.", finish: "Long, mineral and lightly nutty.", glassware: "Burgundy white-wine glass", temperature: "Cool (12–13°C)", serve: "Allow the glass a few minutes to open alongside a delicate creamy main.",
    foodPairings: ["malai paneer tikka", "butter-garlic prawns", "grilled pomfret", "mild chicken korma"], whyBuyThis: "Limestone freshness and restrained barrel work give it depth without turning it into an oak showpiece.",
    faqs: [{ question: "Is Puligny-Montrachet made from Chardonnay?", answer: "Yes. This white Côte de Beaune village wine is Chardonnay." }, { question: "Is Joseph Drouhin's version oak-aged?", answer: "Yes. Drouhin specifies French-oak barrel fermentation and ageing for this wine." }], description: "Drouhin Puligny-Montrachet has peach, almond and mineral depth. Pair with butter-garlic prawns; check city prices on BevOry."
  }),
  "joseph-drouhin-pinot-noir-211dd55": wine({
    productName: "Joseph Drouhin Pinot Noir", category: "Bourgogne Pinot Noir Red Wine", shortOverview: "Joseph Drouhin's regional Pinot Noir is a red-fruit Burgundy with light tannin. Raspberry and wild strawberry make it a better match for poultry and mushrooms than a very rich curry.",
    craftStory: "Drouhin selects Pinot Noir across roughly a dozen Burgundy appellation sites on clay-limestone soil. Its regional wine is fully destemmed, macerated for one to two weeks and matured 10–14 months with a measured share of new oak.",
    nose: "Raspberry, redcurrant and wild strawberry.", palate: "Light to medium-bodied, silky and refreshing, with red berries and fine tannins.", finish: "Medium, elegant and gently savoury.", glassware: "Burgundy balloon glass", temperature: "Lightly chilled (12–14°C)", serve: "Pour slightly cool with roast poultry or mushrooms; avoid overheating the glass.",
    foodPairings: ["tandoori chicken", "mushroom galouti", "grilled fish tikka", "aged cheddar"], whyBuyThis: "Its gentle tannin preserves Pinot's red-fruit delicacy at the dinner table.",
    faqs: [{ question: "Is Joseph Drouhin Pinot Noir from Bordeaux?", answer: "No. Drouhin's regional Pinot Noir comes from Burgundy." }, { question: "What temperature suits it?", answer: "Drouhin lists about 12–13°C for its regional Pinot Noir." }], description: "Joseph Drouhin Pinot Noir brings raspberry and fine tannin. Pair with tandoori chicken; check city prices on BevOry."
  }),
  "joseph-drouhin-la-foret-bourgogne-blanco-fde6d07": wine({
    productName: "Drouhin Laforêt Bourgogne Chardonnay", category: "Bourgogne Chardonnay White Wine", shortOverview: "Laforêt Chardonnay is Drouhin's approachable white Burgundy, balancing citrus with a gentle creamy note. It is rounded enough for paneer without losing freshness.",
    craftStory: "Robert Drouhin created the Laforêt line in the 1970s to introduce Burgundy's varied terroirs. Chardonnay is drawn from across the region; the house ferments and matures much of the wine in steel, with a smaller part in 500-litre oak barrels for six to ten months.",
    nose: "Lemon zest, pear and a soft honey-vanilla accent.", palate: "Medium-bodied, with orchard fruit, balanced acidity and understated oak texture.", finish: "Medium, fresh and lightly creamy.", glassware: "Medium Chardonnay glass", temperature: "Cool (12–13°C)", serve: "Pour cool with a mild, creamy starter rather than serving it ice-cold.",
    foodPairings: ["malai paneer tikka", "butter-garlic prawns", "grilled pomfret", "mild chicken korma"], whyBuyThis: "It gives Burgundy Chardonnay's texture and acidity at an accessible regional level.",
    faqs: [{ question: "What does Laforêt mean?", answer: "It means the forest, a name Robert Drouhin chose for the range he created in the 1970s." }, { question: "Is all of it aged in new oak?", answer: "No. The producer describes a blend of steel and larger oak-vessel ageing." }], description: "Drouhin Laforêt Chardonnay has citrus, pear and a creamy edge. Pair with malai paneer tikka; check city prices on BevOry."
  }),
  "joseph-drouhin-pommard-4739533": wine({
    productName: "Joseph Drouhin Pommard", category: "Pommard Pinot Noir Red Wine", shortOverview: "Drouhin Pommard shows the firmer side of Côte de Beaune Pinot Noir. Black cherry, spice and a structured palate make it one for a substantial dinner.",
    craftStory: "Pommard lies just south of Beaune on clay-limestone soils. Drouhin selects Pinot Noir for its village bottling and ages the wine in oak; the house's winemaking seeks to keep the appellation's grip without burying the fruit.",
    nose: "Black cherry, spice and a faint leather note.", palate: "Medium-full and structured, with dark cherry, firm fine tannins and a savoury core.", finish: "Long, spicy and dry.", glassware: "Burgundy balloon glass", temperature: "Cool room temperature (16°C)", serve: "Let a young bottle breathe for 30 minutes and serve beside a rich main.",
    foodPairings: ["mutton seekh", "lamb rogan josh", "mushroom galouti", "lamb chops"], whyBuyThis: "Pommard's firmer Pinot structure can meet a deeply savoury Indian main.",
    faqs: [{ question: "Is Pommard a grape?", answer: "No. Pommard is a Côte de Beaune village appellation; the red wine is Pinot Noir." }, { question: "Can it be served warm?", answer: "Aim near 16°C, cooler than a warm Indian room." }], description: "Joseph Drouhin Pommard shows black cherry, spice and firm Pinot structure. Pair with mutton seekh; check city prices on BevOry."
  }),
  "joseph-drouhin-la-foret-beaujolais-villages-257be8b": wine({
    productName: "Joseph Drouhin Beaujolais-Villages", category: "Beaujolais-Villages Gamay Red Wine", shortOverview: "Drouhin's Beaujolais-Villages is a bright Gamay red with floral and red-fruit notes. Its silky, low-tannin feel makes it unusually easy to serve a little cool.",
    craftStory: "Gamay grows on Beaujolais's pink granite and schist across selected villages. Drouhin uses whole bunches in semi-carbonic maceration for six to ten days, then matures the wine in stainless steel for six to eight months.",
    nose: "Violet, peony and raspberry syrup.", palate: "Light to medium-bodied, fresh and silky, with red fruit and delicate tannin.", finish: "Medium-long, floral and fruit-led.", glassware: "Medium red-wine glass", temperature: "Lightly chilled (13°C)", serve: "Cool briefly and serve with lighter tandoor dishes or mushrooms.",
    foodPairings: ["tandoori chicken", "mushroom tikka", "malai paneer tikka", "grilled fish tikka"], whyBuyThis: "Whole-bunch Gamay offers floral character and freshness rather than oak weight.",
    faqs: [{ question: "Is Drouhin Beaujolais-Villages Pinot Noir?", answer: "No. Drouhin lists Gamay as the grape." }, { question: "Does it need a decanter?", answer: "Usually no; its youthful, fruit-forward style is ready to pour lightly chilled." }], description: "Drouhin Beaujolais-Villages brings violet, raspberry and silky fruit. Pair with mushroom tikka; check city prices on BevOry."
  }),
  "joseph-drouhin-chablis-6841cce": wine({
    productName: "Joseph Drouhin Chablis", category: "Chablis AOC Chardonnay White Wine", shortOverview: "Joseph Drouhin Chablis is a dry, lemony Chardonnay with a mineral backbone. It is especially convincing beside simple seafood that leaves its freshness intact.",
    craftStory: "Robert Drouhin helped revive Chablis in the 1960s, and the house now works with Chardonnay on fossil-rich Kimmeridgian limestone. Whole-bunch pressing, stainless-steel fermentation and seven to ten months in steel keep the wine precise.",
    nose: "Lemon, grapefruit and a faint fern or coriander note.", palate: "Dry and fruit-led, with brisk acidity, citrus and a clean mineral impression.", finish: "Long, pleasant and lightly saline.", glassware: "Narrow white-wine glass", temperature: "Cool (12–13°C)", serve: "Chill gently and pour beside fish or prawns without a heavy sweet sauce.",
    foodPairings: ["rava-fried fish", "tandoori prawns", "grilled pomfret", "cucumber chaat"], whyBuyThis: "Its Chablis limestone character remains clear through steel-only ageing.",
    faqs: [{ question: "Is Drouhin Chablis aged in oak?", answer: "The producer specifies stainless-steel ageing for its village Chablis." }, { question: "Which grape is used?", answer: "Chardonnay is the grape of this Chablis wine." }], description: "Joseph Drouhin Chablis offers lemon, grapefruit and mineral freshness. Pair with rava-fried fish; check city prices on BevOry."
  }),
  "joseph-drouhin-gevrey-chamertin-red-7d000a2": wine({
    productName: "Joseph Drouhin Gevrey-Chambertin", category: "Gevrey-Chambertin Pinot Noir Red Wine", shortOverview: "Drouhin's Gevrey-Chambertin is a Côte de Nuits Pinot Noir with darker fruit and a firmer frame. Blackberry and liquorice make it a natural companion to slow-cooked meat.",
    craftStory: "The wine draws on Pinot Noir from Gevrey-Chambertin and neighbouring Brochon, where chalky clay and marl support the variety. Drouhin's village bottling is shaped for balance between dark fruit, tannin and the area's earthy character.",
    nose: "Black cherry, blackberry and a touch of liquorice.", palate: "Medium-full and structured, with dark berries, fine tannins and a savoury turn.", finish: "Long, dry and gently spicy.", glassware: "Burgundy balloon glass", temperature: "Cool room temperature (16°C)", serve: "Open a young bottle 30 minutes before a rich dinner and avoid serving it hot.",
    foodPairings: ["lamb rogan josh", "mutton seekh", "lamb chops", "mushroom galouti"], whyBuyThis: "It offers the darker, more structured side of Côte de Nuits Pinot Noir.",
    faqs: [{ question: "What grape is in Gevrey-Chambertin red?", answer: "The red village wine is Pinot Noir." }, { question: "Is this a Grand Cru?", answer: "No. A Gevrey-Chambertin village bottling is distinct from named Grand Cru sites such as Chambertin." }], description: "Drouhin Gevrey-Chambertin brings blackberry, liquorice and structure. Pair with lamb rogan josh; check city prices on BevOry."
  }),
};
