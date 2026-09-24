// Producer-led editorial; see docs/editorial/product-batch-29-sources.md.
import type { ProductPublicDetail } from "./productContentBatch01.js";

type WineInput = Omit<ProductPublicDetail, "tastingNotes" | "servingGuide" | "metaTitle" | "metaDescription"> & {
  nose: string; palate: string; finish: string; glassware: string; temperature: string;
  serve: string; description: string;
};

const additionalBatchContent = () => ({
  "zonin-merlot-italiano-red-wine-281ed8c": wine({
    productName: "Zonin Merlot Italiano", category: "Italian Merlot Red Wine",
    shortOverview: "Zonin Merlot is an Italian red with ripe small-fruit flavours and a dry finish. Its balance makes it adaptable at the table.",
    craftStory: "Zonin 1821's published Merlot Friuli DOC comes from Cervignano del Friuli and uses Merlot. The Italiano wording does not establish that every imported bottle bears the Friuli DOC; check the label.",
    nose: "Ripe red berries and a fresh, gently vinous note.", palate: "Medium-bodied and balanced, with small red fruits and smooth tannins.", finish: "Medium and pleasantly dry.", glassware: "Medium red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Serve slightly cool with a savoury main course.",
    foodPairings: ["tandoori chicken", "mutton seekh", "mushroom galouti", "aged cheddar"], whyBuyThis: "It shows Merlot's fruit-forward side in an Italian frame.",
    faqs: [{ question: "Is Zonin Merlot sweet?", answer: "Zonin describes its Merlot as dry, despite its ripe fruit aroma." }, { question: "Does every bottle say Friuli DOC?", answer: "Check the bottle: Zonin markets a Friuli DOC Merlot, while import labels can differ." }], description: "Zonin Merlot has ripe red fruit and a dry finish. Pair with tandoori chicken; check city prices on BevOry."
  }),
  "zonin-chardonnay-regions-6db52fb": wine({
    productName: "Zonin Chardonnay", category: "Italian Chardonnay White Wine",
    shortOverview: "Zonin Chardonnay is a fresh Italian white with yellow flowers and exotic fruit. It is better described by its balance than by an assumed heavy-oak profile.",
    craftStory: "Zonin's published Chardonnay Friuli DOC is sourced from Cervignano del Friuli. The generic Regions listing should be matched to its bottle label before assigning that DOC to every format.",
    nose: "Yellow flowers, pineapple and ripe orchard fruit.", palate: "Delicately dry and balanced, with bright acidity and a lightly rounded fruit core.", finish: "Medium, fresh and fruit-led.", glassware: "Medium white-wine glass", temperature: "Chilled (10–12°C)", serve: "Pour cool beside a light seafood or paneer course.",
    foodPairings: ["malai paneer tikka", "rava-fried fish", "tandoori prawns", "grilled pomfret"], whyBuyThis: "Its floral freshness counters buttery Chardonnay stereotypes.",
    faqs: [{ question: "Which grape is Zonin Chardonnay?", answer: "Zonin's named Chardonnay wines use the Chardonnay grape." }, { question: "Is it sweet?", answer: "Zonin describes its Friuli Chardonnay as delicately dry and fresh." }], description: "Zonin Chardonnay offers yellow flowers and tropical fruit. Pair with malai paneer; check city prices on BevOry."
  }),
  "zonin-prosecco-brut-sparkling-wine-33b7a1a": wine({
    productName: "Zonin Prosecco Brut", category: "Italian Prosecco DOC Sparkling Wine",
    shortOverview: "Zonin Prosecco Brut is a Veneto sparkling wine with fruit, flowers and a dry-leaning finish. It belongs at the start of a meal, not beside a very sweet dessert.",
    craftStory: "Zonin 1821's Prosecco DOC is built around Glera, the grape behind its pear-and-flower profile. Brut denotes a drier sparkling style; DOC Prosecco is distinct from Valdobbiadene DOCG.",
    nose: "Green pear, apple and a light wisteria-like floral note.", palate: "Light, brisk and bubbling, with orchard fruit and gentle almond nuance.", finish: "Short to medium, clean and dry-leaning.", glassware: "Tulip sparkling-wine glass", temperature: "Well chilled (6–8°C)", serve: "Chill thoroughly and pour slowly to retain the mousse.",
    foodPairings: ["tandoori prawns", "cucumber chaat", "rava-fried fish", "malai paneer tikka"], whyBuyThis: "It supplies a familiar Italian aperitif in a clearly named Brut style.",
    faqs: [{ question: "Is Prosecco Champagne?", answer: "No. Prosecco is an Italian wine with its own DOC rules and Glera-led identity." }, { question: "What does Brut mean?", answer: "Brut identifies a dry-leaning sparkling-wine category, not necessarily zero sugar." }], description: "Zonin Prosecco Brut has pear, apple and lively bubbles. Pair with tandoori prawns; check city prices on BevOry."
  }),
  "zonin-asti-docg-dolce-0b89a03": wine({
    productName: "Zonin Asti Dolce", category: "Asti DOCG Sweet Sparkling Wine",
    shortOverview: "Zonin Asti Dolce is a sweet aromatic sparkling wine, not a dry Prosecco. Its floral fruit suits fruit desserts and gentle spice.",
    craftStory: "Zonin's Asti DOCG technical material places its Moscato Bianco fruit in Piedmont's Asti zone. Fermentation is stopped with natural grape sweetness retained, preserving the aromatic Muscat character.",
    nose: "Orange blossom, peach and fresh grape.", palate: "Sweet and light, with soft bubbles, ripe peach and balancing citrus.", finish: "Medium, floral and gently sweet.", glassware: "Tulip sparkling-wine glass", temperature: "Well chilled (6–8°C)", serve: "Serve with fruit or a lightly sweet course; keep cold after opening.",
    foodPairings: ["mango shrikhand", "saffron phirni", "fruit chaat", "pistachio kulfi"], whyBuyThis: "It fills the dessert-wine slot that a dry Prosecco cannot.",
    faqs: [{ question: "Is Zonin Asti sweet?", answer: "Yes. Dolce signals a sweet sparkling style from aromatic Moscato fruit." }, { question: "Is Asti Prosecco?", answer: "No. Asti DOCG is a Piedmont appellation associated with Moscato Bianco, distinct from Glera-based Prosecco." }], description: "Zonin Asti Dolce offers peach, orange blossom and gentle sweetness. Pair with mango shrikhand; check city prices on BevOry."
  }),
  "zonin-montepulciano-dabruzzo-doc-red-wine-57011f8": wine({
    productName: "Zonin Montepulciano", category: "Montepulciano d'Abruzzo DOC Red Wine",
    shortOverview: "Zonin Montepulciano d'Abruzzo is a ruby-red wine from Abruzzo, not a wine from the Tuscan town of Montepulciano. It brings ripe fruit and savoury structure.",
    craftStory: "Zonin 1821 lists this wine under Montepulciano d'Abruzzo DOC, the Adriatic region's grape-and-place designation. The producer describes a vinous bouquet and harmonious palate, without a fixed barrel regime for every release.",
    nose: "Dark cherry, plum and a fresh vinous edge.", palate: "Medium-bodied, with ripe black fruit, modest acidity and supple tannins.", finish: "Medium, savoury and dark-fruited.", glassware: "Medium red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Give a young bottle a short time in the glass beside robust food.",
    foodPairings: ["mutton seekh", "tandoori chicken", "lamb rogan josh", "aged cheddar"], whyBuyThis: "The Abruzzo DOC identity makes it an approachable Italian red with regional character.",
    faqs: [{ question: "Is Montepulciano d'Abruzzo from Tuscany?", answer: "No. The DOC is in Abruzzo; Montepulciano here names the grape." }, { question: "How should it be served?", answer: "Serve around 16–18°C in a medium red-wine glass with savoury food." }], description: "Zonin Montepulciano has plum, cherry and soft tannins. Pair with mutton seekh; check city prices on BevOry."
  }),
  "zonin-pinot-grigio-9561af2": wine({
    productName: "Zonin Pinot Grigio", category: "Italian Pinot Grigio White Wine",
    shortOverview: "Zonin Pinot Grigio is a dry, fresh white with apple and light floral aromas. It suits a seafood starter better than a rich, sweet sauce.",
    craftStory: "Zonin's published Pinot Grigio Friuli DOC uses fruit from Cervignano del Friuli. Its Pinot Grigio labels also span different appellations, so the bottle identifies the precise origin.",
    nose: "Renetta-style apple and broom-flower notes.", palate: "Light, dry and brisk, with apple fruit and an even, clean texture.", finish: "Medium and distinctly fresh.", glassware: "Narrow white-wine glass", temperature: "Chilled (10–12°C)", serve: "Pour chilled with fish or a citrus-led starter.",
    foodPairings: ["rava-fried fish", "tandoori prawns", "cucumber chaat", "malai paneer tikka"], whyBuyThis: "It offers a crisp, food-flexible Pinot Grigio rather than a neutral white.",
    faqs: [{ question: "Is Zonin Pinot Grigio dry?", answer: "Zonin describes its Friuli bottling as slightly dry and extremely fresh." }, { question: "Where is the Friuli version from?", answer: "The producer lists Cervignano del Friuli as its production area." }], description: "Zonin Pinot Grigio is fresh with apple and floral notes. Pair with rava-fried fish; check city prices on BevOry."
  }),
  "zonin-ventiterre-chianti-docg-red-wine-8cd7bc0": wine({
    productName: "Zonin Ventiterre Chianti", category: "Tuscan Chianti Red Wine",
    shortOverview: "Ventiterre Chianti is a Tuscan red in Zonin's Italian portfolio. Cherry, acidity and savoury bite make it a useful food wine.",
    craftStory: "Zonin 1821 makes Chianti in Tuscany, where Sangiovese forms the style's core. The producer's current public page names Chianti DOC; check the bottle for its exact designation before applying a DOCG claim.",
    nose: "Sour cherry, red plum and a light dried-herb note.", palate: "Medium-bodied and dry, with tangy red fruit and gently firm tannins.", finish: "Medium, savoury and cherry-led.", glassware: "Medium red-wine glass", temperature: "Lightly cool (15–17°C)", serve: "Open alongside tomato-rich or roasted food.",
    foodPairings: ["tandoori chicken", "mushroom galouti", "lamb chops", "aged cheddar"], whyBuyThis: "Chianti's bright acidity gives this wine purpose at the dinner table.",
    faqs: [{ question: "Is Chianti a grape?", answer: "No. Chianti is a Tuscan wine designation; Sangiovese is its principal grape." }, { question: "Is this DOC or DOCG?", answer: "Zonin's current Chianti page says DOC; check the bottle for its exact designation." }], description: "Zonin Ventiterre Chianti brings cherry and savoury acidity. Pair with tandoori chicken; check city prices on BevOry."
  }),
  "ventisquero-clasico-cabernet-sauvignon-db7a716": wine({
    productName: "Ventisquero Clásico Cabernet", category: "Chilean Cabernet Sauvignon Red Wine",
    shortOverview: "Ventisquero Clásico Cabernet is a fruit-led Chilean red with enough tannin for grilled food. It is an everyday Central Valley bottling rather than the winery's more structured premium tiers.",
    craftStory: "Ventisquero locates this Clásico Cabernet in Chile's Central Valley. Published vintage sheets show that blend and oak use can change, so no fixed percentage or barrel duration should be assumed from the front label alone.",
    nose: "Cassis, blueberry and a light vanilla-cocoa note.", palate: "Medium-bodied, with ripe dark fruit, rounded tannins and a mild oak-spice edge.", finish: "Medium, fruit-led and gently dry.", glassware: "Bordeaux glass", temperature: "Cool room temperature (16–18°C)", serve: "Give it 15 minutes of air with a grilled meal.",
    foodPairings: ["mutton seekh", "tandoori lamb chops", "lamb rogan josh", "aged cheddar"], whyBuyThis: "It gives an accessible view of Chilean Cabernet without demanding long cellaring.",
    faqs: [{ question: "Where is Clásico Cabernet from?", answer: "Ventisquero places it in Chile's Central Valley." }, { question: "Is its blend always the same?", answer: "No. Blend and barrel details can change by vintage; use the back label or vintage sheet for exact figures." }], description: "Ventisquero Clásico Cabernet offers cassis and soft spice. Pair with mutton seekh; check city prices on BevOry."
  }),
  "ventisquero-clasico-sauvignon-blanc-e064406": wine({
    productName: "Ventisquero Clásico Sauvignon", category: "Chilean Sauvignon Blanc White Wine",
    shortOverview: "This Clásico Sauvignon Blanc combines citrus sharpness with tropical fruit. Its medium body prevents it from feeling thin beside Indian seafood.",
    craftStory: "Ventisquero identifies Chile's Central Valley as its origin. The producer's tasting description names lime, grapefruit, pineapple and pear, with vibrant acidity rather than oak-derived richness.",
    nose: "Lime, grapefruit, pineapple and fresh pear.", palate: "Medium-bodied and lively, with citrus returning after the tropical fruit.", finish: "Medium, crisp and citrus-led.", glassware: "Narrow white-wine glass", temperature: "Chilled (8–10°C)", serve: "Serve cold with seafood and let the bright acidity cut through fried textures.",
    foodPairings: ["rava-fried fish", "tandoori prawns", "cucumber chaat", "coastal fish fry"], whyBuyThis: "Its documented citrus-tropical balance makes it more expressive than a neutral white.",
    faqs: [{ question: "Is it from Casablanca Valley?", answer: "No. Ventisquero lists its Clásico Sauvignon Blanc as Central Valley, Chile." }, { question: "What temperature suits it?", answer: "The producer recommends around 8–10°C." }], description: "Ventisquero Clásico Sauvignon has lime, pineapple and crisp acidity. Pair with rava-fried fish; check city prices on BevOry."
  }),
  "ventisquero-reserva-chardonnay-6aa7730": wine({
    productName: "Ventisquero Res. Chardonnay", category: "Casablanca Valley Chardonnay White Wine",
    shortOverview: "Ventisquero Reserva Chardonnay is a fuller Chilean white with tropical fruit and measured oak. Its creamy texture and acidity work with seafood in rich sauces.",
    craftStory: "The grapes come from Chile's cool Casablanca Valley. Ventisquero's 2020 sheet describes steel fermentation, six months on lees and a quarter of the wine in French oak; those proportions are vintage-specific.",
    nose: "Papaya, mango, pineapple, honey and a little vanilla toast.", palate: "Fuller and rounded, with tropical fruit, balanced acidity and discreet oak creaminess.", finish: "Medium, smooth and lightly vanilla-toned.", glassware: "Medium Chardonnay glass", temperature: "Chilled (8–12°C)", serve: "Pour cool, allowing the glass to warm slightly as you eat.",
    foodPairings: ["butter-garlic prawns", "malai paneer tikka", "grilled pomfret", "mild chicken korma"], whyBuyThis: "Casablanca fruit and controlled French-oak influence give it more dimension than a simple tropical white.",
    faqs: [{ question: "Is it oaked?", answer: "Ventisquero describes barrel influence; its 2020 technical sheet says a portion spent time in French oak." }, { question: "Where is it grown?", answer: "Ventisquero identifies the Casablanca Valley in Chile." }], description: "Ventisquero Reserva Chardonnay offers mango, honey and gentle oak. Pair with butter-garlic prawns; check city prices on BevOry."
  }),
  "ventisquero-clasico-carmenere-3045687": wine({
    productName: "Ventisquero Clásico Carménère", category: "Chilean Carménère Red Wine",
    shortOverview: "Clásico Carménère brings Chile's signature red grape into a soft, berry-rich style. Spice and chocolate notes make it comfortable with seasoned lamb.",
    craftStory: "Ventisquero grows this range in Chile's Central Valley. Its producer notes describe black and red fruit with spice, chocolate and vanilla, without claiming a single barrel regime across vintages.",
    nose: "Blackberry, cassis, strawberry and a mild spicy-chocolate note.", palate: "Soft and balanced, with dark berries and mature, velvety tannins.", finish: "Medium to long, returning to black fruit and cocoa.", glassware: "Medium red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Serve with lamb or a well-seasoned savoury dish.",
    foodPairings: ["lamb rogan josh", "mutton seekh", "tandoori mushroom", "aged cheddar"], whyBuyThis: "Its velvety tannin makes Carménère accessible without erasing its spice.",
    faqs: [{ question: "What grape is Carménère?", answer: "Carménère is a red wine grape strongly associated with modern Chilean wine." }, { question: "Is it a very tannic wine?", answer: "Ventisquero describes mature, velvety tannins and a smooth palate." }], description: "Ventisquero Clásico Carménère has berries, spice and cocoa. Pair with lamb rogan josh; check city prices on BevOry."
  }),
  "ventisquero-reserva-pinot-noir-a2ebc9e": wine({
    productName: "Ventisquero Reserva Pinot", category: "Casablanca Valley Pinot Noir Red Wine",
    shortOverview: "Ventisquero Reserva Pinot Noir is a cooler-climate Chilean red with strawberry, cherry and restrained oak. Its gentle tannins suit lighter roast and fish dishes.",
    craftStory: "The winery places this Reserva Pinot Noir in the Casablanca Valley. Its published notes attribute a touch of vanilla to barrel ageing while emphasizing fresh fruit and balanced acidity.",
    nose: "Strawberry, sour cherry and a light vanilla note.", palate: "Fresh and supple, with soft tannins and balanced acidity around red fruit.", finish: "Long, clean and persistent for a lighter red.", glassware: "Burgundy glass", temperature: "Lightly cool (12–15°C)", serve: "Serve slightly cool, without heavy decanting, beside a mild main.",
    foodPairings: ["tandoori chicken", "mushroom galouti", "grilled pomfret", "roasted beetroot chaat"], whyBuyThis: "Casablanca's cool-climate fruit gives a brighter counterpoint to Chile's heavier reds.",
    faqs: [{ question: "Is this Pinot Noir from Central Valley?", answer: "Ventisquero lists its Reserva Pinot Noir specifically from Casablanca Valley." }, { question: "Is oak noticeable?", answer: "The producer notes a vanilla hint from barrel ageing, while fresh red fruit remains central." }], description: "Ventisquero Reserva Pinot has cherry, strawberry and light vanilla. Pair with tandoori chicken; check city prices on BevOry."
  }),
});

const wine = (item: WineInput): ProductPublicDetail => ({
  productName: item.productName, category: item.category,
  shortOverview: item.shortOverview, craftStory: item.craftStory,
  tastingNotes: { nose: item.nose, palate: item.palate, finish: item.finish },
  servingGuide: { glassware: item.glassware, idealTemperature: item.temperature, recommendation: item.serve },
  foodPairings: item.foodPairings, whyBuyThis: item.whyBuyThis, faqs: item.faqs,
  metaTitle: `${item.productName} Price, Taste & Review | BevOry`, metaDescription: item.description,
});

export const PRODUCT_BATCH_CONTENT: Record<string, ProductPublicDetail> = {
  ...additionalBatchContent(),
  "camas-sarah-rose-wine-fa2719b": wine({
    productName: "Camas Syrah Rosé", category: "Pays d'Oc Syrah Rosé Wine",
    shortOverview: "Camas Syrah Rosé is a light, red-berry wine made for food rather than a sweet pink drink. Anne de Joyeuse gives Syrah a delicate, directly pressed expression here.",
    craftStory: "Anne de Joyeuse grows Syrah around Limoux on clay-limestone soils for its IGP Pays d'Oc range. The rosé is directly pressed and fermented at a controlled 15°C, limiting skin colour and keeping fruit in focus.",
    nose: "Raspberry and fresh redcurrant, without a heavy floral overlay.", palate: "Light and supple, with berry fruit, gentle acidity and a softly rounded middle.", finish: "Short to medium, clean and faintly berry-sweet in impression.",
    glassware: "Medium rosé glass", temperature: "Chilled (8–10°C)", serve: "Chill before lunch and pour with a lightly spiced starter.",
    foodPairings: ["tandoori prawns", "malai paneer tikka", "cucumber chaat", "grilled pomfret"], whyBuyThis: "Direct pressing gives this Syrah a fresher, lighter expression than its red-wine counterpart.",
    faqs: [{ question: "Is Camas Syrah Rosé sweet?", answer: "Its soft fruit can suggest sweetness, but it is presented by Anne de Joyeuse as a fresh food rosé, not a dessert wine." }, { question: "Where is Camas Syrah Rosé made?", answer: "Anne de Joyeuse makes it around Limoux in southern France under the IGP Pays d'Oc designation." }],
    description: "Camas Syrah Rosé brings raspberry fruit and a soft finish. Pair with tandoori prawns; check city prices on BevOry."
  }),
  "camas-chardonnay-109793c": wine({
    productName: "Camas Chardonnay", category: "Pays d'Oc Chardonnay White Wine",
    shortOverview: "Camas Chardonnay is a clean, floral southern French white. It favours white fruit and citrus freshness over a heavily buttered or toasted-oak style.",
    craftStory: "Anne de Joyeuse selects Chardonnay from clay-limestone plots around Limoux for this IGP Pays d'Oc wine. The grapes are pressed on arrival and fermented at controlled temperatures; the producer does not describe a barrel-ageing step for this bottling.",
    nose: "White blossom, pear and a light apple note.", palate: "Fine and balanced, with white fruit and measured acidity rather than thick texture.", finish: "Medium, fresh and citrus-toned.",
    glassware: "Medium white-wine glass", temperature: "Chilled (10–12°C)", serve: "Pour cool, not icy, so the floral nose stays apparent.",
    foodPairings: ["rava-fried fish", "malai paneer tikka", "tandoori prawns", "grilled pomfret"], whyBuyThis: "It is a straightforward unoaked-style Chardonnay for fish-led meals.",
    faqs: [{ question: "Is Camas Chardonnay from Burgundy?", answer: "No. Anne de Joyeuse makes it near Limoux and labels it IGP Pays d'Oc." }, { question: "Is it a heavily oaked Chardonnay?", answer: "The producer describes direct pressing and cool fermentation, not a pronounced barrel treatment for this wine." }],
    description: "Camas Chardonnay offers white flowers, pear and citrus. Pair with rava-fried fish; check city prices on BevOry."
  }),
  "camas-sauvignon-blanc-5f7379f": wine({
    productName: "Camas Sauvignon", category: "Pays d'Oc Sauvignon Blanc White Wine",
    shortOverview: "Camas Sauvignon is a citrus-driven white from southern France. Its brisk, mineral-leaning finish makes it particularly useful with seafood.",
    craftStory: "Anne de Joyeuse sources Sauvignon from clay-limestone sites around Limoux, including contrasting Aude Valley influences. Direct pressing and temperature-controlled fermentation protect the variety's bright aromatics.",
    nose: "Fresh lemon and grapefruit peel.", palate: "Citrus and crisp orchard fruit sit on a surprisingly rounded body.", finish: "Long for its style, dry, mineral and sharply refreshing.",
    glassware: "Narrow white-wine glass", temperature: "Chilled (10–12°C)", serve: "Serve with shellfish or fish before the wine warms in the glass.",
    foodPairings: ["tandoori prawns", "rava-fried fish", "cucumber chaat", "coastal fish fry"], whyBuyThis: "It combines Sauvignon's citrus lift with more body than a very lean white.",
    faqs: [{ question: "Which grape is in Camas Sauvignon?", answer: "The producer lists Sauvignon for this IGP Pays d'Oc white." }, { question: "What food suits it?", answer: "Its citrus and crisp finish work especially well with prawns, fish and fresh cucumber dishes." }],
    description: "Camas Sauvignon has citrus aromas and a crisp mineral finish. Try it with tandoori prawns; check city prices on BevOry."
  }),
  "camas-pinot-noir-dfb4c42": wine({
    productName: "Camas Pinot Noir", category: "Pays d'Oc Pinot Noir Red Wine",
    shortOverview: "Camas Pinot Noir is a supple red, not the winery's separate Pinot Noir rosé. Cherry fruit and light structure make it unusually comfortable beside moderately spiced food.",
    craftStory: "Anne de Joyeuse farms small Pinot Noir plots on clay-limestone soil in the upper Aude Valley, where the Pyrenees bring a cooler influence. Cold maceration precedes alcoholic fermentation, with daily cap immersion.",
    nose: "Cherry and a cherry-liqueur hint.", palate: "Soft red fruit arrives first, followed by gentle tannins and a fuller middle than the pale colour suggests.", finish: "Medium, smooth and red-fruit led.",
    glassware: "Medium Burgundy glass", temperature: "Lightly cool (12–14°C)", serve: "A brief spell in the fridge is useful in hot weather; avoid serving warm.",
    foodPairings: ["tandoori chicken", "mushroom galouti", "mutton seekh", "roasted beetroot chaat"], whyBuyThis: "The Aude Valley's cooler Pinot plots give this southern French red welcome freshness.",
    faqs: [{ question: "Is this the Camas Pinot Noir rosé?", answer: "No. This listing is for the red Pinot Noir; Anne de Joyeuse also bottles a separate rosé." }, { question: "Should Pinot Noir be served at room temperature?", answer: "The producer recommends this red lightly cooled, around 12–14°C." }],
    description: "Camas Pinot Noir offers cherry fruit and soft tannins. Pair with tandoori chicken; check city prices on BevOry."
  }),
  "camas-syrah-8e79ea2": wine({
    productName: "Camas Syrah Red", category: "Pays d'Oc Syrah Red Wine",
    shortOverview: "Camas Syrah Red is the red expression of Anne de Joyeuse's Syrah, distinct from its directly pressed rosé. It brings darker fruit and more grip to a grilled-food table.",
    craftStory: "Anne de Joyeuse selects Syrah from upper Aude and Mediterranean clay-limestone plots around Limoux. The red wine ferments for about fifteen days at controlled temperature with juice pumped over the skins; the rosé follows a separate direct-pressing route.",
    nose: "Preserved black olive and cracked pepper rather than sweet jam.", palate: "Fresh and savoury, with dark fruit behind the olive-pepper character and measured tannin.", finish: "Long, fresh and peppery.",
    glassware: "Medium red-wine glass", temperature: "Lightly cool (around 14°C)", serve: "Serve lightly cool with roast poultry or a grilled main.",
    foodPairings: ["mutton seekh", "lamb rogan josh", "tandoori mushroom", "aged cheddar"], whyBuyThis: "A clearly red, food-oriented Syrah from a producer that also shows the grape in rosé form.",
    faqs: [{ question: "Is Camas Syrah a rosé?", answer: "Anne de Joyeuse bottles both red and rosé Syrah; this entry refers to the red wine." }, { question: "Where is it made?", answer: "The Camas range comes from the Limoux area of southern France and carries the IGP Pays d'Oc designation." }],
    description: "Camas Syrah Red brings black olive and pepper with a fresh finish. Pair with mutton seekh; check city prices on BevOry."
  }),
  "camas-merlot-c2bc9e9": wine({
    productName: "Camas Merlot", category: "Pays d'Oc Merlot Red Wine",
    shortOverview: "Camas Merlot is a soft-edged southern French red with red fruit, spice and blackcurrant. It makes sense with a savoury meal when a dense Cabernet feels excessive.",
    craftStory: "Anne de Joyeuse grows Merlot in the upper Aude Valley's Atlantic-influenced clay-limestone plots. The winery describes about ten days of temperature-controlled tank fermentation for this IGP Pays d'Oc wine.",
    nose: "Red berries with a mild dried-spice edge.", palate: "Blackcurrant comes forward on a rounded, medium-bodied palate with manageable tannins.", finish: "Medium and harmonious, with fruit and a little spice.",
    glassware: "Medium red-wine glass", temperature: "Lightly cool (14–16°C)", serve: "Pour slightly cool with roasted or gently spiced food.",
    foodPairings: ["tandoori chicken", "mutton seekh", "mushroom galouti", "aged cheddar"], whyBuyThis: "Its tank-fermented Merlot profile gives a clear fruit-first alternative to heavier reds.",
    faqs: [{ question: "Is Camas Merlot a French wine?", answer: "Yes. Anne de Joyeuse makes it in the Limoux area under IGP Pays d'Oc." }, { question: "Is it very tannic?", answer: "The producer describes a harmonious fruit-led style rather than an aggressively tannic red." }],
    description: "Camas Merlot shows spice, red fruit and blackcurrant. Pair with mutton seekh; check city prices on BevOry."
  }),
  "camas-pinot-noir-rose-2c9e575": wine({
    productName: "Camas Pinot Noir Rosé", category: "Pays d'Oc Pinot Noir Rosé Wine",
    shortOverview: "This is Camas's pink Pinot Noir, not its red bottling. The grape's delicate red-fruit profile is presented in a lighter, chilled style.",
    craftStory: "Anne de Joyeuse grows Pinot Noir on clay-limestone plots in Limoux's Pyrenean-influenced zone. The rosé is directly pressed and fermented at about 15°C, unlike the separately vinified red Pinot Noir.",
    nose: "Fresh raspberry and cherry with a delicate floral edge.", palate: "Light, softly textured and red-fruited, with acidity keeping the wine lively.", finish: "Medium, clean and berry-toned.",
    glassware: "Medium rosé glass", temperature: "Chilled (8–10°C)", serve: "Serve chilled with a mild starter rather than a heavy red-meat dish.",
    foodPairings: ["malai paneer tikka", "tandoori prawns", "cucumber chaat", "grilled fish tikka"], whyBuyThis: "It offers a lighter Pinot Noir option for warm-weather Indian meals.",
    faqs: [{ question: "Is it the same as Camas Pinot Noir red?", answer: "No. Anne de Joyeuse lists separate red and rosé Pinot Noir wines in the Camas range." }, { question: "How cold should it be served?", answer: "A rosé serving range of around 8–10°C keeps the fruit and acidity in balance." }],
    description: "Camas Pinot Noir Rosé brings soft red berries and fresh acidity. Pair with malai paneer; check city prices on BevOry."
  }),
  "camas-viognier-9431f6d": wine({
    productName: "Camas Viognier", category: "Pays d'Oc Viognier White Wine",
    shortOverview: "Camas Viognier is an aromatic white whose apricot and flower notes stand apart from sharper Sauvignon. Its rounded fruit remains fresh enough for a mild, creamy dish.",
    craftStory: "Anne de Joyeuse draws Viognier from clay-limestone sites around Limoux for this IGP Pays d'Oc wine. Direct pressing and temperature-controlled fermentation preserve its floral character without a stated barrel programme.",
    nose: "Acacia, hawthorn blossom, pear and ripe apricot.", palate: "Rounded and fruit-rich, with pear and apricot carried by balanced acidity.", finish: "Medium, fresh and gently aromatic.",
    glassware: "Medium white-wine glass", temperature: "Chilled (10–12°C)", serve: "Avoid over-chilling; the apricot and floral notes emerge as the glass warms slightly.",
    foodPairings: ["malai paneer tikka", "butter-garlic prawns", "grilled salmon tikka", "mild chicken korma"], whyBuyThis: "It is a recognisably aromatic Viognier without a heavy oak overlay.",
    faqs: [{ question: "What does Camas Viognier taste like?", answer: "Anne de Joyeuse describes floral aromas, pear and apricot, with a rich but fresh palate." }, { question: "Where does it come from?", answer: "It is made near Limoux in southern France and labelled IGP Pays d'Oc." }],
    description: "Camas Viognier shows apricot, pear and acacia blossom. Pair with malai paneer tikka; check city prices on BevOry."
  }),
  "dry-creek-chenin-blanc-91d1d50": wine({
    productName: "Dry Creek Chenin Blanc", category: "Clarksburg Chenin Blanc White Wine",
    shortOverview: "Dry Creek Vineyard's dry Chenin Blanc is a California white built on acidity rather than dessert sweetness. Pear and citrus make it especially at home beside seafood.",
    craftStory: "The winery sources this wine from Clarksburg, where Delta breezes temper the growing season. Founded by David Stare in 1972, Dry Creek Vineyard has kept Chenin Blanc as part of its white-wine range.",
    nose: "Pear, green apple and lemon blossom.", palate: "Dry and light to medium-bodied, with crunchy orchard fruit and brisk acidity.", finish: "Medium, clean and citrus-fresh.", glassware: "Medium white-wine glass", temperature: "Chilled (8–10°C)", serve: "Pour cool with fish or prawns; a warmer glass will dull the crisp edge.",
    foodPairings: ["rava-fried fish", "tandoori prawns", "cucumber chaat", "grilled pomfret"], whyBuyThis: "Clarksburg Chenin gives a dry, bright alternative to familiar Sauvignon Blanc.",
    faqs: [{ question: "Is this Chenin Blanc sweet?", answer: "The named Dry Chenin Blanc is intended as a dry, fresh style." }, { question: "Where is the fruit from?", answer: "Dry Creek Vineyard identifies Clarksburg in California for this bottling." }], description: "Dry Creek Chenin Blanc is dry with pear and citrus. Pair with rava-fried fish; check city prices on BevOry."
  }),
  "dry-creek-fume-blanc-e2840d0": wine({
    productName: "Dry Creek Fumé Blanc", category: "Sonoma County Sauvignon Blanc White Wine",
    shortOverview: "Dry Creek Vineyard Fumé Blanc is its Sauvignon Blanc in a Loire-inspired California style. It offers citrus and herbal lift rather than a sweet or smoky wine.",
    craftStory: "Founder David Stare planted Sauvignon Blanc in Dry Creek Valley in the early 1970s. The winery says it introduced Sonoma County Fumé Blanc in 1972; Fumé Blanc is a naming tradition, not proof that every vintage sees heavy oak.",
    nose: "Lime, grapefruit and fresh-cut herbs.", palate: "Dry and bright, with citrus, green fruit and crisp acidity.", finish: "Medium, zesty and clean.", glassware: "Narrow white-wine glass", temperature: "Chilled (8–10°C)", serve: "Serve with seafood while cold enough to keep its citrus focused.",
    foodPairings: ["tandoori prawns", "cucumber chaat", "rava-fried fish", "malai paneer tikka"], whyBuyThis: "Its 1972 origin makes it a historically significant American Sauvignon Blanc label.",
    faqs: [{ question: "What grape is Fumé Blanc?", answer: "Dry Creek Vineyard's Fumé Blanc is a Sauvignon Blanc wine." }, { question: "Does fumé mean smoky?", answer: "It is a wine-style name; do not assume smoky flavours or a particular oak treatment from the name alone." }], description: "Dry Creek Fumé Blanc brings citrus and herbal freshness. Pair with tandoori prawns; check city prices on BevOry."
  }),
  "dry-creek-heritage-zinfandel-622138d": wine({
    productName: "Dry Creek Heritage Zin", category: "Sonoma County Zinfandel Red Wine",
    shortOverview: "Heritage Vines Zinfandel is a ripe California red anchored in old-vine lineage. Its brambly fruit and spice call for grilled, boldly flavoured food.",
    craftStory: "Dry Creek Vineyard propagated cuttings from the pre-Prohibition Mazzoni Ranch vines near Geyserville and grafted them to resistant rootstock. The project preserves plant material, not a claim that every current vine is itself a century old.",
    nose: "Blackberry, raspberry jam and cracked pepper.", palate: "Full and ripe, with brambly fruit, warming spice and rounded tannins.", finish: "Long, dry and berry-spiced.", glassware: "Large red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Give a young bottle 20 minutes of air beside a grilled main.",
    foodPairings: ["mutton ghee roast", "tandoori lamb chops", "lamb rogan josh", "aged cheddar"], whyBuyThis: "Its documented heritage-vine programme gives the label a real link to Sonoma Zinfandel history.",
    faqs: [{ question: "Are all its vines over 100 years old?", answer: "No. The heritage project propagated cuttings from very old vines; current vine age depends on the vineyard." }, { question: "Is Zinfandel a sweet wine?", answer: "This is a dry red despite its ripe jam-like fruit aromas." }], description: "Dry Creek Heritage Zin has blackberry and peppery spice. Pair with mutton ghee roast; check city prices on BevOry."
  }),
  "warwick-the-blue-lady-cabernet-sauvignon-wine-5e09f85": wine({
    productName: "Warwick The Blue Lady", category: "Stellenbosch Cabernet Sauvignon Red Wine",
    shortOverview: "The Blue Lady is Warwick's Cabernet Sauvignon from Stellenbosch. It is a structured red for substantial meals, distinct from the estate's Chardonnay and Pinotage Lady bottlings.",
    craftStory: "Warwick Wine Estate farms beneath the Simonsberg near Stellenbosch, South Africa. Its estate range explicitly lists The Blue Lady Cabernet Sauvignon; oak and blend specifics should be read from the relevant vintage sheet.",
    nose: "Blackcurrant, black cherry and a restrained cedar note.", palate: "Full-bodied, with dark berry fruit, firm Cabernet tannin and savoury spice.", finish: "Long, dry and structured.", glassware: "Large Bordeaux glass", temperature: "Cool room temperature (16–18°C)", serve: "Decant a young bottle for around 30 minutes with a rich main.",
    foodPairings: ["lamb rogan josh", "mutton ghee roast", "tandoori lamb chops", "aged cheddar"], whyBuyThis: "It offers a clearly identified Stellenbosch Cabernet rather than a generic Cape red.",
    faqs: [{ question: "What grape is The Blue Lady?", answer: "Warwick lists it as a Cabernet Sauvignon wine." }, { question: "Where is Warwick Estate?", answer: "The estate is in Stellenbosch, South Africa, below the Simonsberg." }], description: "Warwick The Blue Lady offers cassis and firm Cabernet structure. Pair with lamb rogan josh; check city prices on BevOry."
  }),
  "warwick-chardonnay-9beff9c": wine({
    productName: "Warwick Chardonnay", category: "Stellenbosch Chardonnay White Wine",
    shortOverview: "Warwick makes several Chardonnay tiers, from The First Lady to The White Lady. This broad listing belongs to the estate's rounded, citrus-and-stone-fruit style, not automatically to one tier.",
    craftStory: "Warwick is a Stellenbosch estate with vineyard sites under the Simonsberg. Its White Lady Chardonnay is barrel-fermented spontaneously in small batches, but that method cannot be assigned to a bottle labelled only Warwick Chardonnay without checking the range.",
    nose: "Ripe peach, citrus zest and a mild nutty edge.", palate: "Medium-bodied, with stone fruit, balanced acidity and a rounded texture.", finish: "Medium, fresh and lightly savoury.", glassware: "Medium Chardonnay glass", temperature: "Chilled (10–12°C)", serve: "Pour cool with a creamy fish or paneer starter.",
    foodPairings: ["malai paneer tikka", "butter-garlic prawns", "grilled pomfret", "mild chicken korma"], whyBuyThis: "Warwick's Stellenbosch Chardonnay range gives a recognisable balance of fruit and freshness.",
    faqs: [{ question: "Is this The White Lady?", answer: "Warwick sells more than one Chardonnay; check the bottle label for The White Lady or The First Lady." }, { question: "Is it barrel fermented?", answer: "Warwick states that for The White Lady, but the process should not be assumed for every Chardonnay tier." }], description: "Warwick Chardonnay offers peach, citrus and rounded texture. Pair with malai paneer; check city prices on BevOry."
  }),
  "warwick-pinotage-5af8895": wine({
    productName: "Warwick Pinotage", category: "Stellenbosch Pinotage Red Wine",
    shortOverview: "Warwick's Pinotage range shows South Africa's distinctive red grape through ripe fruit and firm savoury structure. The estate markets both First Lady and Black Lady tiers.",
    craftStory: "Warwick farms in Stellenbosch beneath the Simonsberg. The estate's public range names The Black Lady Pinotage and The First Lady Pinotage; this broad product name does not establish which label or vintage-specific oak treatment a bottle carries.",
    nose: "Black cherry, plum and a lightly smoky-spice impression.", palate: "Medium to full-bodied, with dark fruit and structured but rounded tannins.", finish: "Medium to long, savoury and fruit-led.", glassware: "Medium red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Give a young bottle some air alongside grilled meat or mushrooms.",
    foodPairings: ["mutton seekh", "tandoori chicken", "mushroom galouti", "aged cheddar"], whyBuyThis: "It provides a Stellenbosch route into South Africa's own Pinotage grape.",
    faqs: [{ question: "Is Pinotage Pinot Noir?", answer: "No. Pinotage is a South African crossing of Pinot Noir and Cinsault." }, { question: "Which Warwick Pinotage is this?", answer: "The broad name does not say; check the bottle for The First Lady or The Black Lady." }], description: "Warwick Pinotage brings dark fruit and savoury tannins. Pair with mutton seekh; check city prices on BevOry."
  }),
  "brancott-estate-sauvignon-545ad9f": wine({
    productName: "Brancott Estate Sauvignon", category: "Marlborough Sauvignon Blanc White Wine",
    shortOverview: "Brancott Estate Sauvignon Blanc is a hallmark Marlborough white with assertive citrus and green aromatics. Its acidity is useful with fresh herbs and seafood.",
    craftStory: "Brancott Estate helped establish Sauvignon Blanc in New Zealand's Marlborough region. This entry refers to the core Estate wine, not its separately labelled Reserve or Letter Series versions.",
    nose: "Passion fruit, grapefruit and freshly cut green herbs.", palate: "Dry and energetic, with tropical fruit, citrus and lively acidity.", finish: "Medium to long, crisp and herbaceous.", glassware: "Narrow white-wine glass", temperature: "Chilled (8–10°C)", serve: "Serve well chilled with seafood or a coriander-led starter.",
    foodPairings: ["tandoori prawns", "coriander (dhania) fish tikka", "cucumber chaat", "rava-fried fish"], whyBuyThis: "It offers an unmistakable Marlborough Sauvignon profile with strong food utility.",
    faqs: [{ question: "Is Brancott Sauvignon from France?", answer: "No. Brancott Estate grows this wine in Marlborough, New Zealand." }, { question: "Is it the Reserve bottling?", answer: "No. Reserve is a separate Brancott Estate range; check the front label." }], description: "Brancott Estate Sauvignon offers grapefruit and herbs. Pair with tandoori prawns; check city prices on BevOry."
  }),
  "tinto-negro-malbec-228127d": wine({
    productName: "Tinto Negro Malbec", category: "Mendoza Malbec Red Wine",
    shortOverview: "Tinto Negro Malbec is a Mendoza red focused on the grape's dark-fruit character. It is not the producer's separately identified single-vineyard 1955 bottling.",
    craftStory: "Tinto Negro explores Malbec across Mendoza, including distinctive sites in the Uco Valley. Its Vineyard 1955 site lies in La Consulta, San Carlos, but that precise vineyard designation should not be assigned to the general Malbec label.",
    nose: "Black plum, violet and blackberry.", palate: "Medium to full-bodied, with dark fruit, rounded tannins and a lift of acidity.", finish: "Medium, dry and plum-spiced.", glassware: "Large red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Open 20 minutes before a grilled main; avoid serving hot.",
    foodPairings: ["mutton ghee roast", "tandoori lamb chops", "lamb rogan josh", "aged cheddar"], whyBuyThis: "It gives Mendoza Malbec identity without conflating the standard wine with a single-vineyard tier.",
    faqs: [{ question: "Where is Tinto Negro from?", answer: "The producer focuses on Malbec grown in Mendoza, Argentina." }, { question: "Is this Vineyard 1955?", answer: "No. Vineyard 1955 is a separately named La Consulta wine; check the label for that designation." }], description: "Tinto Negro Malbec offers plum, violet and rounded tannins. Pair with mutton ghee roast; check city prices on BevOry."
  }),
  "fairview-goats-do-roam-red-b827055": wine({
    productName: "Fairview Goats Do Roam", category: "South African Red Blend Wine",
    shortOverview: "Goats Do Roam Red is Fairview's accessible Cape blend. Berry fruit and spice make it more flexible with food than a heavily extracted single-variety red.",
    craftStory: "Fairview's 2019 sheet lists Shiraz, Mourvèdre, Petite Sirah, Grenache, Tempranillo, Cinsault and Pinotage sourced across Paarl, Stellenbosch and Swartland. The blend changes by vintage, so those grapes are an example rather than a permanent recipe.",
    nose: "Red berries, plum and mixed baking spice.", palate: "Juicy and medium-bodied, with generous berry fruit and integrated oak nuance.", finish: "Medium, lightly spicy and fruit-led.", glassware: "Medium red-wine glass", temperature: "Lightly cool (15–17°C)", serve: "Serve with grilled food and allow a little air in the glass.",
    foodPairings: ["tandoori chicken", "mutton seekh", "mushroom galouti", "aged cheddar"], whyBuyThis: "Its cross-region Cape blend delivers fruit and spice without demanding a single-grape comparison.",
    faqs: [{ question: "Is Goats Do Roam a single grape?", answer: "No. Fairview makes it as a multi-variety red blend; exact grapes vary by vintage." }, { question: "Where is Fairview based?", answer: "Fairview's farm and tasting room are in Paarl, South Africa." }], description: "Fairview Goats Do Roam brings berries and baking spice. Pair with tandoori chicken; check city prices on BevOry."
  }),
  "fairview-pinotage-6839346": wine({
    productName: "Fairview Pinotage", category: "South African Pinotage Red Wine",
    shortOverview: "Fairview Pinotage gives the Cape's signature red grape a dark-fruit, savoury form. This broad listing should not be confused with its single-vineyard Primo Pinotage.",
    craftStory: "Fairview works vineyards around Paarl and the Swartland and lists Pinotage in its estate range. The producer separately identifies Primo as a single-vineyard wine, so that vineyard's claims and ageing should not be attached to the general listing.",
    nose: "Black cherry, plum and a restrained earthy-spice note.", palate: "Medium to full-bodied, with ripe fruit, savoury structure and measured tannins.", finish: "Medium, dry and dark-fruited.", glassware: "Medium red-wine glass", temperature: "Cool room temperature (16–18°C)", serve: "Pour alongside a grilled main, giving the wine 15 minutes of air.",
    foodPairings: ["mutton seekh", "tandoori chicken", "lamb chops", "mushroom galouti"], whyBuyThis: "It introduces Fairview's Cape Pinotage without mislabelling it as the estate's Primo tier.",
    faqs: [{ question: "Is Fairview Pinotage the same as Primo?", answer: "No. Fairview markets Primo Pinotage as a separate single-vineyard range." }, { question: "What is Pinotage?", answer: "It is a South African red grape bred from Pinot Noir and Cinsault." }], description: "Fairview Pinotage offers dark cherry and savoury spice. Pair with mutton seekh; check city prices on BevOry."
  }),
};
