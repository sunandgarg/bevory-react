// Producer-led beer and wine editorial; research ledger: docs/editorial/product-batch-22-sources.md.
import type { ProductPublicDetail } from "./productContentBatch01.js";

export const PRODUCT_BATCH_CONTENT: Record<string, ProductPublicDetail> = {
  "coopers-original-pale-ale-a3bebf5": {
    productName: "Coopers Original Pale Ale", category: "Australian Bottle-Conditioned Pale Ale",
    shortOverview: "Coopers Original Pale Ale is an Australian classic with a naturally cloudy pour. Its balance of fruit, malt and mild bitterness works particularly well with grilled food.",
    craftStory: "Coopers has brewed in South Australia since 1862 and bottle-conditions this pale ale rather than filtering it crystal clear. Yeast left in the bottle contributes the familiar haze and evolving texture.",
    tastingNotes: { nose: "Stone fruit, fresh bread and a light floral hop note.", palate: "Rounded and softly yeasty, with pale malt, fruit and a restrained bitter lift.", finish: "Medium, with biscuit and a gently dry hop trail." },
    servingGuide: { glassware: "Pale-ale glass", idealTemperature: "Cool, 6–8°C", recommendation: "Roll the closed bottle gently if you want the natural yeast distributed before pouring." },
    foodPairings: ["tandoori chicken", "paneer tikka", "fish pakora", "masala peanuts"], whyBuyThis: "Its bottle-conditioned character offers more texture than a standard clear lager.",
    faqs: [{ question: "Why is Coopers Pale Ale cloudy?", answer: "Coopers bottle-conditions its ales, leaving natural yeast in the bottle." }, { question: "Should I shake the bottle?", answer: "No. A gentle roll before opening is enough if you want the yeast mixed in." }],
    metaTitle: "Coopers Pale Ale Price, Taste & Review | BevOry", metaDescription: "Coopers Original Pale Ale brings fruity malt and natural haze. Pair with tandoori chicken; check indicative city prices on BevOry."
  },
  "coopers-best-extra-stout-ae2cc78": {
    productName: "Coopers Best Extra Stout", category: "Australian Extra Stout",
    shortOverview: "Coopers Best Extra Stout is a full-bodied dark ale with coffee-like roast and chocolate notes. It is a slow-sipping choice for grilled meat or a bittersweet dessert.",
    craftStory: "Coopers uses roasted black malt alongside pale malt and ale yeast, then naturally conditions the beer. The dark colour and coffee-chocolate character come from the grain, not added coffee or chocolate.",
    tastingNotes: { nose: "Espresso, dark chocolate and roasted malt.", palate: "Creamy and full, with cocoa, dark fruit and firm hop bitterness.", finish: "Long and dry, leaving roasted grain and chocolate." },
    servingGuide: { glassware: "Stout or nonic pint glass", idealTemperature: "Cool, 8–10°C", recommendation: "Give it a minute in the glass; serving it icy hides the roast detail." },
    foodPairings: ["mutton ghee roast", "70% dark chocolate", "smoked mushroom skewers", "coffee kulfi"], whyBuyThis: "Real roasted-malt depth makes this an expressive stout without flavour additives.",
    faqs: [{ question: "Is coffee added to Coopers Stout?", answer: "No. Coopers says its coffee-like flavour comes from roasted malt." }, { question: "Can it be cellared?", answer: "Coopers says the naturally conditioned stout can gain complexity with careful cellaring." }],
    metaTitle: "Coopers Extra Stout Price, Taste & Review | BevOry", metaDescription: "Coopers Best Extra Stout brings cocoa, roast and firm bitterness. Try with dark chocolate; check city prices on BevOry."
  },
  "guinness-original-stout-1351d98": {
    productName: "Guinness Original Stout", category: "Irish Extra Stout",
    shortOverview: "Guinness Original is sharper and drier than many drinkers expect from the brand's creamy draught. Roast, dark chocolate and a crisp bitter edge define the bottle.",
    craftStory: "Guinness traces Original to Arthur Guinness II's 1821 Superior Porter recipe in Dublin. Roasted barley joins malted barley, hops and yeast to build its dark ruby colour and coffee-like profile.",
    tastingNotes: { nose: "Coffee roast, dark chocolate and a faint fruit note.", palate: "Crisp and balanced, with bitter roast against measured malt sweetness.", finish: "Medium and notably dry, with roasted barley lingering." },
    servingGuide: { glassware: "Stout glass", idealTemperature: "Cool, 7–9°C", recommendation: "Pour into a clean glass and do not confuse this bottle with nitrogenated Guinness Draught." },
    foodPairings: ["mutton seekh kebab", "smoked aubergine bharta", "70% dark chocolate", "pepper-crusted lamb chops"], whyBuyThis: "Its dry, roasted profile gives a different Guinness experience from Draught.",
    faqs: [{ question: "Is Guinness Original the same as Guinness Draught?", answer: "No. Original is a sharper, bottled extra stout; Draught has its own creamy nitrogenated serve." }, { question: "What makes the beer dark?", answer: "Guinness names roasted barley among its ingredients." }],
    metaTitle: "Guinness Original Price, Taste & Review | BevOry", metaDescription: "Guinness Original brings coffee roast, dark chocolate and a dry finish. Pair with seekh kebabs; check city prices on BevOry."
  },
  "brewdog-punk-ipa-7c93441": {
    productName: "BrewDog Punk IPA", category: "Scottish India Pale Ale",
    shortOverview: "Punk IPA is BrewDog's citrus-driven flagship rather than a malty session lager. Grapefruit, tropical fruit and a pointed bitter finish make it a natural partner for spice.",
    craftStory: "BrewDog launched Punk IPA as its defining Scottish craft beer and refreshed the recipe in 2025. The current producer description emphasises brighter modern hops and cleaner fermentation, so older bottles can taste different.",
    tastingNotes: { nose: "Grapefruit zest, citrus oil and tropical fruit.", palate: "Juicy hop flavour over lean malt, followed by smooth but definite bitterness.", finish: "Medium-long, dry and resinous with grapefruit peel." },
    servingGuide: { glassware: "IPA or tulip glass", idealTemperature: "Cool, 6–8°C", recommendation: "Pour fresh; hop aromatics fade with time and heat." },
    foodPairings: ["paneer achari tikka", "chilli-garlic prawns", "chicken tikka", "masala fries"], whyBuyThis: "Its vivid citrus hops cut through fat and chilli without needing a sweet mixer.",
    faqs: [{ question: "Is Punk IPA bitter?", answer: "Yes. The citrus-forward hop character ends with noticeable IPA bitterness." }, { question: "Has Punk IPA's recipe changed?", answer: "BrewDog announced a refreshed recipe in 2025; check the package date for the edition you have." }],
    metaTitle: "BrewDog Punk IPA Price, Taste & Review | BevOry", metaDescription: "BrewDog Punk IPA brings grapefruit, tropical fruit and a dry bitter finish. Pair with chilli prawns; check city prices on BevOry."
  },
  "erdinger-wheat-ff5300b": {
    productName: "Erdinger Weissbier", category: "Bavarian Wheat Beer",
    shortOverview: "Erdinger Weissbier is a yeast-clouded Bavarian wheat beer with a soft, rounded mouthfeel. Its bread-and-fruit character sits gently beside creamy Indian starters.",
    craftStory: "Erdinger brews this Weissbier in Erding, Upper Bavaria, with wheat, yeast, malt and hops under the German purity-law tradition. The brewery protects a long-standing house recipe and its fine-yeast character.",
    tastingNotes: { nose: "Wheat bread, ripe banana and light clove.", palate: "Soft and effervescent, with wheat sweetness, yeast fruit and mild hop bitterness.", finish: "Medium, leaving bread crust and a gentle spicy echo." },
    servingGuide: { glassware: "Tall Weissbier glass", idealTemperature: "Cool, 6–8°C", recommendation: "Pour slowly, then swirl the last splash if you want the settled yeast in the glass." },
    foodPairings: ["malai paneer tikka", "chicken reshmi kebab", "rava-fried fish", "cucumber chaat"], whyBuyThis: "Its soft wheat-and-yeast profile is a useful counterpoint to creamy kebabs.",
    faqs: [{ question: "Why is Erdinger Weissbier hazy?", answer: "Fine yeast and wheat contribute the traditional cloudy appearance." }, { question: "Is it a lager?", answer: "No. Weissbier is a top-fermented wheat-beer style." }],
    metaTitle: "Erdinger Weissbier Price, Taste & Review | BevOry", metaDescription: "Erdinger Weissbier brings wheat, yeast fruit and gentle spice. Try with malai paneer tikka; check city prices on BevOry."
  },
  "peroni-nastro-azzurro-beer-3645f8c": {
    productName: "Peroni Nastro Azzurro", category: "Italian Premium Lager",
    shortOverview: "Peroni Nastro Azzurro is a dry, refreshing Italian lager. Its pale profile works especially well with lemon, seafood and lighter grilled food.",
    craftStory: "Birra Peroni identifies Italian Mais Nostrano corn as a defining ingredient in Nastro Azzurro. The corn is grown for the brand in northern Italy and contributes to its dry, clean finish.",
    tastingNotes: { nose: "Pale grain, lemon peel and a quiet herbal note.", palate: "Light and crisp, with restrained cereal sweetness and a dry hop balance.", finish: "Short, clean and refreshingly dry." },
    servingGuide: { glassware: "Pilsner glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Serve cold with the food's lemon on the side rather than adding sugar to the beer." },
    foodPairings: ["rava-fried fish", "tandoori prawns", "chicken malai kebab", "cucumber chaat"], whyBuyThis: "Mais Nostrano gives this Italian lager a recognisably dry, food-friendly character.",
    faqs: [{ question: "Does Peroni Nastro Azzurro use corn?", answer: "Yes. Birra Peroni names its Italian Mais Nostrano corn in the recipe." }, { question: "Is it sweet?", answer: "No. The producer describes it as dry and refreshing." }],
    metaTitle: "Peroni Nastro Azzurro Price, Taste & Review | BevOry", metaDescription: "Peroni Nastro Azzurro is a dry Italian lager for fish fry and prawns. Check indicative city prices on BevOry."
  },
  "birra-moretti-beer-73874c5": {
    productName: "Birra Moretti L'Autentica", category: "Italian-Style Lager",
    shortOverview: "Birra Moretti L'Autentica is a balanced lager with a small fruity-hop lift. It is versatile enough for pasta, grilled vegetables and mild Indian starters.",
    craftStory: "Birra Moretti traces its brewing tradition to 1859 in Italy. Its published recipe names water, malted barley, maize and hops; strength and brewing location differ by market, so neither is assumed here.",
    tastingNotes: { nose: "Pale malt, soft fruit and a little grassy hop.", palate: "Medium-light and balanced, with grain sweetness and moderate bitterness.", finish: "Short and clean, leaving a gentle hoppy note." },
    servingGuide: { glassware: "Lager glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Pour cold alongside food rather than serving it ice-cold from the bottle." },
    foodPairings: ["paneer tikka", "margherita pizza", "chicken malai kebab", "grilled aubergine"], whyBuyThis: "Its measured bitterness bridges Italian comfort food and gently spiced Indian plates.",
    faqs: [{ question: "Is Birra Moretti brewed only in Italy?", answer: "The original brand is Italian, but current production can differ by market." }, { question: "Is it a wheat beer?", answer: "No. L'Autentica is presented as a lager." }],
    metaTitle: "Birra Moretti Price, Taste & Review | BevOry", metaDescription: "Birra Moretti is a balanced lager with gentle fruit and hops. Pair with paneer tikka; check city prices on BevOry."
  },
  "chang-classic-beer-38a534a": {
    productName: "Chang Classic", category: "Thai Lager",
    shortOverview: "Chang Classic is an amber-gold Thai lager with subtle fruit and hop aromas. Its easy-drinking profile makes sense beside salty or chilli-led Asian food.",
    craftStory: "Chang has brewed in Thailand since 1995 and describes Classic as a European-style lager. The producer names malt, hops, yeast and water as its major ingredients.",
    tastingNotes: { nose: "Light malt, soft fruit and a gentle hop note.", palate: "Smooth and medium-light, with grain sweetness and measured bitterness.", finish: "Short and clean, with a faint herbal edge." },
    servingGuide: { glassware: "Pilsner glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Serve cold with food that has lime, chilli or savoury fish sauce." },
    foodPairings: ["chilli-garlic prawns", "fish pakora", "Thai basil chicken", "masala peanuts"], whyBuyThis: "Its restrained fruit and hop notes complement spice without fighting it.",
    faqs: [{ question: "Where is Chang Classic from?", answer: "Chang is a Thai beer brand founded in 1995." }, { question: "Is Chang Classic a lager?", answer: "Yes. The brewer calls it a European-style lager." }],
    metaTitle: "Chang Classic Price, Taste & Review | BevOry", metaDescription: "Chang Classic is a smooth Thai lager with subtle fruit and hops. Pair with chilli prawns; check city prices on BevOry."
  },
  "kirin-beer-073aa69": {
    productName: "Kirin Ichiban", category: "Japanese All-Malt Lager",
    shortOverview: "Kirin Ichiban is a smooth Japanese lager with a notably soft malt centre. It is more rounded than a very dry pilsner, yet stays clean with food.",
    craftStory: "Kirin uses its first-press method to select the first wort drawn from the mash for Ichiban. The producer identifies it as a 100% malt lager, giving grain flavour priority over adjunct lightness.",
    tastingNotes: { nose: "Fresh bread, pale malt and a faint floral note.", palate: "Smooth and lightly creamy, with clean malt sweetness and gentle hop balance.", finish: "Medium-short, leaving soft grain and a dry edge." },
    servingGuide: { glassware: "Slim lager glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Pour cold with grilled seafood or lightly spiced food to keep the malt centre apparent." },
    foodPairings: ["tandoori prawns", "chicken yakitori", "malai paneer tikka", "rava-fried fish"], whyBuyThis: "The first-press wort approach gives this lager a distinct soft-malt texture.",
    faqs: [{ question: "What does Ichiban mean in the brewing process?", answer: "Kirin uses the first press of wort for its Ichiban lager." }, { question: "Does it contain rice?", answer: "Kirin describes Ichiban as a 100% malt beer." }],
    metaTitle: "Kirin Ichiban Price, Taste & Review | BevOry", metaDescription: "Kirin Ichiban is a smooth all-malt lager made with first-press wort. Try with prawns; check city prices on BevOry."
  },
  "chimay-triple-ale-dc735e7": {
    productName: "Chimay Triple", category: "Belgian Trappist Tripel Ale",
    shortOverview: "Chimay Triple is a strong blond Trappist ale with fruit, spice and a firm hop edge. It rewards a slower, warmer serve than a standard lager.",
    craftStory: "Scourmont Abbey in Belgium brews Chimay's Trappist beers using water drawn within the abbey. Chimay bottle-referments its beers, adding yeast-driven complexity; Triple is the blond, fruit-and-spice expression.",
    tastingNotes: { nose: "Orchard fruit, floral hops and white pepper.", palate: "Full and lively, with ripe fruit, yeast spice and balanced hop bitterness.", finish: "Long, dry and gently warming, with pepper and hops." },
    servingGuide: { glassware: "Belgian chalice", idealTemperature: "Cool, 8–10°C", recommendation: "Pour slowly, leaving the final yeast sediment behind if you prefer a clearer glass." },
    foodPairings: ["tandoori chicken", "paneer achari tikka", "mutton seekh kebab", "aged Gouda"], whyBuyThis: "Bottle refermentation gives this Belgian Tripel more development than a typical strong lager.",
    faqs: [{ question: "Is Chimay Triple a lager?", answer: "No. It is a Belgian Trappist blond ale." }, { question: "Why is there sediment in the bottle?", answer: "Chimay bottle-referments its beers, leaving natural yeast sediment." }],
    metaTitle: "Chimay Triple Price, Taste & Review | BevOry", metaDescription: "Chimay Triple brings orchard fruit, spice and a dry hop finish. Pair with tandoori chicken; check city prices on BevOry."
  },
  "chimay-brown-ale-0b5e959": {
    productName: "Chimay Red", category: "Belgian Trappist Brown Ale",
    shortOverview: "Chimay Red is the abbey's brown ale, softer and more caramel-led than its blond Triple. Dried fruit and toast make it a strong match for roasted food.",
    craftStory: "Chimay Red traces to the monks of Scourmont Abbey and is the oldest beer in the range. Like Chimay's other Trappist ales, it undergoes a second fermentation in the bottle.",
    tastingNotes: { nose: "Red fruit, toasted bread and caramel.", palate: "Rounded and fruity, with toffee-like malt and a measured bitter counterpoint.", finish: "Medium-long, leaving caramel, toast and dried fruit." },
    servingGuide: { glassware: "Belgian chalice", idealTemperature: "Cool, 10–12°C", recommendation: "Pour slowly into a chalice and allow a few minutes for the malt aroma to open." },
    foodPairings: ["mutton rogan josh", "tandoori mushroom", "aged cheddar", "70% dark chocolate"], whyBuyThis: "Its fruit-and-toast depth offers a gentler alternative to an intensely bitter stout.",
    faqs: [{ question: "Is Chimay Red a red lager?", answer: "No. It is a Trappist brown ale, despite the Red name." }, { question: "Is it the same as Chimay Triple?", answer: "No. Red is darker and caramel-led; Triple is blond, spiced and more hop-forward." }],
    metaTitle: "Chimay Red Price, Taste & Review | BevOry", metaDescription: "Chimay Red brings fruit, caramel and toast. Pair with mutton rogan josh; check indicative city prices on BevOry."
  },
  "kronenbourg-1664-biere-blanche-blanc-kronenbourg-1664-french-beer-df52aad": {
    productName: "1664 Blanc", category: "French Wheat Beer",
    shortOverview: "1664 Blanc is a hazy French wheat beer with a recognisable citrus-and-coriander accent. Its creamy texture suits delicate spice and seafood.",
    craftStory: "The 1664 brand names wheat, orange peel and coriander in Blanc's recipe. The beer's pale haze and peach-apricot fruit notes distinguish it from clear lager in the same family.",
    tastingNotes: { nose: "Orange peel, peach and coriander (dhania).", palate: "Creamy and softly sweet, with citrus freshness and a mild spice edge.", finish: "Medium-short, leaving orange and delicate hop bitterness." },
    servingGuide: { glassware: "Tall wheat-beer glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Pour gently and leave room for its creamy white head." },
    foodPairings: ["malai paneer tikka", "tandoori prawns", "cucumber chaat", "rava-fried fish"], whyBuyThis: "Its orange-coriander character makes a particularly easy bridge to Indian herbs and seafood.",
    faqs: [{ question: "Why is 1664 Blanc cloudy?", answer: "It is a wheat beer whose style has a naturally hazy appearance." }, { question: "Is coriander really part of it?", answer: "Yes. The producer names coriander and orange peel among its flavouring ingredients." }],
    metaTitle: "1664 Blanc Price, Taste & Review | BevOry", metaDescription: "1664 Blanc is a hazy wheat beer with orange and coriander. Pair with tandoori prawns; check city prices on BevOry."
  },
  "miller-high-life-premium-beer-e4870e5": {
    productName: "Miller High Life", category: "American Lager",
    shortOverview: "Miller High Life is a pale American lager with a crisp, lightly malty profile. The clear bottle is part of its identity, though a fresh pour is still the best way to taste it.",
    craftStory: "Miller High Life's brewer developed light-stable Galena hops to protect flavour in its clear-glass bottle. The beer's long-running American lager style favours refreshment and restrained bitterness.",
    tastingNotes: { nose: "Pale grain, fresh bread and a small grassy hop note.", palate: "Light and brisk, with mild cereal sweetness and clean carbonation.", finish: "Short, dry and faintly herbal." },
    servingGuide: { glassware: "Pilsner glass", idealTemperature: "Chilled, 3–5°C", recommendation: "Keep the bottle away from heat and pour cold with salty snacks." },
    foodPairings: ["masala fries", "chicken tikka", "paneer pakora", "fish tacos"], whyBuyThis: "Its uncomplicated crispness fits a casual mixed snack table.",
    faqs: [{ question: "Why is Miller High Life sold in clear glass?", answer: "Its brewer says light-stable Galena hops help protect flavour in that bottle." }, { question: "Is High Life a strong ale?", answer: "No. It is an American lager." }],
    metaTitle: "Miller High Life Price, Taste & Review | BevOry", metaDescription: "Miller High Life is a crisp American lager for masala fries and chicken tikka. Check indicative city prices on BevOry."
  },
  "goose-312-urban-wheat-beer-f7e0729": {
    productName: "Goose Island 312 Urban Wheat", category: "American Wheat Beer",
    shortOverview: "312 Urban Wheat is Goose Island's easygoing Chicago wheat beer. Lemon-like brightness and a soft grain centre make it useful with fried seafood.",
    craftStory: "Goose Island names the beer after Chicago's 312 area code. Wheat gives the ale its rounded texture while a light hop presence keeps it lively rather than heavily bitter.",
    tastingNotes: { nose: "Lemon zest, fresh wheat and pale bread.", palate: "Soft and lightly hazy, with citrus lift and modest grain sweetness.", finish: "Short and clean, with a faint lemony note." },
    servingGuide: { glassware: "Wheat-beer glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Pour gently and serve with lemon on the food rather than sweetening the beer." },
    foodPairings: ["rava-fried prawns", "malai paneer tikka", "fish pakora", "cucumber chaat"], whyBuyThis: "Its wheat softness and citrus direction suit coastal Indian starters.",
    faqs: [{ question: "What does 312 mean?", answer: "It is a Chicago telephone area code, where Goose Island began." }, { question: "Is 312 an IPA?", answer: "No. It is an American wheat beer." }],
    metaTitle: "Goose Island 312 Price, Taste & Review | BevOry", metaDescription: "Goose Island 312 Urban Wheat brings soft grain and lemon zest. Pair with fish pakora; check city prices on BevOry."
  },
  "six-fields-blanche-original-wheat-beer-3605015": {
    productName: "Six Fields Blanche", category: "Belgian-Style Wheat Beer",
    shortOverview: "Six Fields Blanche is an Indian-made Belgian-style wheat beer. Its soft cereal texture and citrus-spice direction sit comfortably beside tandoori seafood.",
    craftStory: "Devans Modern Breweries presents Blanche as the wheat-beer expression in its Six Fields range. The Belgian-inspired style differs from the company's clearer Pilsner and stronger Cult beer.",
    tastingNotes: { nose: "Orange peel, wheat bread and a soft herbal note.", palate: "Creamy and light, with citrus freshness and low bitterness.", finish: "Short, leaving wheat and citrus peel." },
    servingGuide: { glassware: "Tall wheat-beer glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Pour with a gentle head and pair with light spice." },
    foodPairings: ["tandoori prawns", "malai paneer tikka", "cucumber chaat", "rava-fried fish"], whyBuyThis: "It brings the accessible Belgian-wheat style into an Indian brewing range.",
    faqs: [{ question: "Is Six Fields Blanche a lager?", answer: "No. It is positioned as a Belgian-style wheat beer." }, { question: "Why does it look hazy?", answer: "Haze is common in wheat-beer styles and is not itself a fault." }],
    metaTitle: "Six Fields Blanche Price, Taste & Review | BevOry", metaDescription: "Six Fields Blanche is a soft wheat beer with citrus-spice notes. Pair with tandoori prawns; check city prices on BevOry."
  },
  "six-fields-pilsner-8b48e8d": {
    productName: "Six Fields Pilsner", category: "Indian Pilsner Lager",
    shortOverview: "Six Fields Pilsner is a light, refreshing lager with a firmer hop edge than a very mild beer. It is built for a cold pour and salty starters.",
    craftStory: "Six Fields identifies Pilsner as a distinct beer in its Indian portfolio. The producer highlights hop choice and refreshing character, rather than the wheat body of Blanche or Cult.",
    tastingNotes: { nose: "Pale malt, fresh bread and a floral hop accent.", palate: "Crisp and medium-light, with grain sweetness balanced by a clear bitter line.", finish: "Short and dry, with a herbal hop trace." },
    servingGuide: { glassware: "Pilsner glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Pour cold into a tall glass to keep the head and aroma visible." },
    foodPairings: ["masala fries", "fish pakora", "chicken tikka", "paneer pakora"], whyBuyThis: "Its hop-led crispness cuts through fried snacks cleanly.",
    faqs: [{ question: "Is Six Fields Pilsner a wheat beer?", answer: "No. Blanche and Cult are the wheat-focused beers in the range." }, { question: "Should Pilsner be served cold?", answer: "Yes. A 4–6°C pour preserves its crisp character." }],
    metaTitle: "Six Fields Pilsner Price, Taste & Review | BevOry", metaDescription: "Six Fields Pilsner is crisp and lightly hoppy. Try with fish pakora or masala fries; check city prices on BevOry."
  },
  "six-fields-cult-wheat-beer-0bcd07d": {
    productName: "Six Fields Cult", category: "Belgian-Style Strong Wheat Beer",
    shortOverview: "Six Fields Cult is the stronger wheat-beer expression in the range. It has more body than Blanche while keeping wheat's soft texture.",
    craftStory: "Devans Modern Breweries describes Cult as a Belgian-style strong wheat beer. That identity places it apart from the light Pilsner and the gentler Blanche in the same portfolio.",
    tastingNotes: { nose: "Wheat bread, ripe orchard fruit and a soft spice note.", palate: "Rounded and full, with grain sweetness, gentle fruit and a drying bitter balance.", finish: "Medium, with wheat, spice and light warmth." },
    servingGuide: { glassware: "Tulip or wheat-beer glass", idealTemperature: "Cool, 6–8°C", recommendation: "Serve cool rather than ice-cold so its fuller texture remains clear." },
    foodPairings: ["tandoori chicken", "paneer achari tikka", "mutton seekh kebab", "masala cashews"], whyBuyThis: "It combines strong-beer weight with the softer profile of wheat.",
    faqs: [{ question: "Is Cult the same as Blanche?", answer: "No. Cult is a stronger wheat expression; Blanche is the lighter wheat beer." }, { question: "Is it a pilsner?", answer: "No. Cult is described as Belgian-style strong wheat beer." }],
    metaTitle: "Six Fields Cult Price, Taste & Review | BevOry", metaDescription: "Six Fields Cult is a fuller Belgian-style wheat beer for chicken tikka. Check indicative city prices on BevOry."
  },
  "red-rhino-craft-ipa-beer-a1a8b20": {
    productName: "Red Rhino Craft IPA", category: "Indian Craft IPA",
    shortOverview: "Red Rhino Craft IPA is a hop-forward Indian beer with a citrus-and-bitter direction. It works well against spice and fried textures.",
    craftStory: "Red Rhino's brewing range includes Bangalore Daze IPA alongside its wheat and lager expressions. The IPA style foregrounds hop aroma and bitterness rather than stout roast or lager neutrality.",
    tastingNotes: { nose: "Grapefruit peel, tropical fruit and fresh hops.", palate: "Medium-bodied, with citrusy hops over a lean malt base and clear bitterness.", finish: "Medium-long and dry, with a resinous hop trail." },
    servingGuide: { glassware: "IPA tulip", idealTemperature: "Cool, 6–8°C", recommendation: "Drink fresh, as hop aroma fades more quickly than in malt-led beers." },
    foodPairings: ["paneer achari tikka", "chilli-garlic prawns", "chicken tikka", "masala fries"], whyBuyThis: "Its hop bite gives spicy food a bright, dry counterpoint.",
    faqs: [{ question: "Is Red Rhino IPA bitter?", answer: "IPA is the hop-forward style in Red Rhino's range, so expect a clearer bitter finish than its lager." }, { question: "Is it the same as Red Rhino Wheat?", answer: "No. The wheat beer has a softer body and a different aroma profile." }],
    metaTitle: "Red Rhino Craft IPA Price, Taste & Review | BevOry", metaDescription: "Red Rhino Craft IPA brings citrus hops and a dry finish. Pair with achari paneer; check city prices on BevOry."
  },
  "red-rhino-craft-wheat-beer-31e33fa": {
    productName: "Red Rhino Craft Wheat", category: "Indian Craft Wheat Beer",
    shortOverview: "Red Rhino Craft Wheat offers a soft, hazy alternative to the brewery's IPA. Its citrus-and-grain style favours seafood and lighter spice.",
    craftStory: "Red Rhino's signature range includes Belgian Wit, a wheat-beer style distinct from Bangalore Daze IPA and its lager. This expression draws on wheat texture and restrained bitterness.",
    tastingNotes: { nose: "Wheat bread, orange peel and a light herbal note.", palate: "Soft and gently creamy, with citrus freshness over pale grain.", finish: "Short and clean, leaving citrus and wheat." },
    servingGuide: { glassware: "Tall wheat-beer glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Pour gently; a little haze suits a wheat-beer serve." },
    foodPairings: ["tandoori prawns", "malai paneer tikka", "fish pakora", "cucumber chaat"], whyBuyThis: "Its soft body is easier with creamy and coastal dishes than a bitter IPA.",
    faqs: [{ question: "Is Red Rhino Craft Wheat an IPA?", answer: "No. Red Rhino presents wheat and IPA as separate styles." }, { question: "Does haze mean the beer has spoiled?", answer: "Not on its own; many wheat styles pour naturally hazy." }],
    metaTitle: "Red Rhino Craft Wheat Price, Taste & Review | BevOry", metaDescription: "Red Rhino Craft Wheat brings soft grain and citrus. Try with tandoori prawns; check indicative city prices on BevOry."
  },
  "red-rhino-craft-lager-beer-c9eb0b2": {
    productName: "Red Rhino Craft Lager", category: "Indian Craft Lager",
    shortOverview: "Red Rhino Craft Lager is a clean, grain-led option in the brewery's line-up. It suits guests who want a lighter, crisper glass than the IPA or wheat beer.",
    craftStory: "Red Rhino's signature brews include Golden Harvest and other lager-led releases alongside Belgian Wit and Bangalore Daze IPA. The lager direction puts pale malt and a tidy finish ahead of heavy hop or spice notes.",
    tastingNotes: { nose: "Pale bread, fresh grain and a small floral note.", palate: "Crisp and medium-light, with modest malt sweetness and gentle bitterness.", finish: "Short, clean and lightly dry." },
    servingGuide: { glassware: "Pilsner glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Pour cold with fried snacks or mild grilled food." },
    foodPairings: ["fish pakora", "paneer tikka", "masala fries", "chicken malai kebab"], whyBuyThis: "It is the least assertive Red Rhino route for a mixed starter plate.",
    faqs: [{ question: "Is Red Rhino Lager the IPA?", answer: "No. The lager is a cleaner style; the IPA places hops and bitterness up front." }, { question: "What glass suits it?", answer: "A tall pilsner glass helps retain the head and crisp aroma." }],
    metaTitle: "Red Rhino Craft Lager Price, Taste & Review | BevOry", metaDescription: "Red Rhino Craft Lager is crisp and grain-led for fish pakora or paneer tikka. Check city prices on BevOry."
  },
  "tsingtao-beer-14a14a7": {
    productName: "Tsingtao Beer", category: "Chinese Pale Lager",
    shortOverview: "Tsingtao is a pale lager associated with Qingdao's brewing heritage. Its light malt and mild bitter balance suit fried seafood and savoury Asian plates.",
    craftStory: "The Tsingtao Brewery traces its origin to 1903 in Qingdao, where German and British merchants established the original brewery. Its internationally recognised pale lager keeps a clean, restrained profile rather than an ale's yeast-driven fruit.",
    tastingNotes: { nose: "Pale grain, light bread and a faint floral hop note.", palate: "Light and brisk, with cereal sweetness and measured bitterness.", finish: "Short and dry, leaving a delicate grain trace." },
    servingGuide: { glassware: "Pilsner glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Serve cold with crisp food and drink while the carbonation is fresh." },
    foodPairings: ["chilli-garlic prawns", "fish pakora", "vegetable spring rolls", "masala peanuts"], whyBuyThis: "Its gentle lager profile accompanies spicy seafood without dominating it.",
    faqs: [{ question: "Where did Tsingtao Beer begin?", answer: "The original brewery was founded in Qingdao, China, in 1903." }, { question: "Is Tsingtao an ale?", answer: "The familiar Tsingtao export beer is a pale lager." }],
    metaTitle: "Tsingtao Beer Price, Taste & Review | BevOry", metaDescription: "Tsingtao Beer is a crisp Chinese lager for chilli-garlic prawns. Check indicative city prices on BevOry."
  },
  "san-miguel-pale-pilsner-beer-0cf4280": {
    productName: "San Miguel Pale Pilsen", category: "Philippine Pale Lager",
    shortOverview: "San Miguel Pale Pilsen is the brewery's long-running flagship beer. It offers a fuller grain note than some ultralight lagers while staying crisp enough for salty snacks.",
    craftStory: "San Miguel Brewery identifies Pale Pilsen as its flagship Philippine beer. It is distinct from Red Horse strong beer and the separately branded San Mig Light in the same portfolio.",
    tastingNotes: { nose: "Fresh malt, pale bread and a soft herbal hop note.", palate: "Medium-light, with rounded grain sweetness and a measured bitter edge.", finish: "Medium-short and dry, with bread and hops." },
    servingGuide: { glassware: "Lager glass", idealTemperature: "Chilled, 4–6°C", recommendation: "Pour into a clean glass and serve with hot savoury food." },
    foodPairings: ["chicken inasal", "fish pakora", "masala peanuts", "paneer tikka"], whyBuyThis: "It brings a familiar Southeast Asian lager profile to Indian grilled and fried food.",
    faqs: [{ question: "Is San Miguel Pale Pilsen Red Horse?", answer: "No. San Miguel Brewery lists them as different beers." }, { question: "Is Pale Pilsen a stout?", answer: "No. It is a pale lager." }],
    metaTitle: "San Miguel Pale Pilsen Price, Taste & Review | BevOry", metaDescription: "San Miguel Pale Pilsen is a balanced lager for chicken inasal and fish pakora. Check city prices on BevOry."
  },
  "inedit-damm-beer-766dd30": {
    productName: "Damm Inedit", category: "Spanish Spiced Wheat and Malt Beer",
    shortOverview: "Damm Inedit blends barley-malt and wheat-beer styles for a soft, food-focused pour. Orange peel, coriander and liquorice give it more aromatic range than a standard lager.",
    craftStory: "Damm developed Inedit in 2008 with chef Ferran Adrià and elBulli's sommelier team. The Barcelona brewer combines malted-barley beer and wheat beer, then infuses coriander seed, orange peel and carefully measured liquorice.",
    tastingNotes: { nose: "Orange peel, coriander (dhania), fresh yeast and soft flowers.", palate: "Creamy and lightly hazy, with citrus, sweet spice and restrained hop bitterness.", finish: "Long and gentle, leaving orange, coriander and a subtle liquorice accent." },
    servingGuide: { glassware: "Small white-wine glass or beer tulip", idealTemperature: "Cool, 6–8°C", recommendation: "Serve in modest pours with food; its aromatics open as it warms slightly." },
    foodPairings: ["malai paneer tikka", "tandoori prawns", "coriander (dhania) fish tikka", "grilled artichokes"], whyBuyThis: "Its deliberate beer-and-wheat blend is unusually versatile with complex food.",
    faqs: [{ question: "Did Ferran Adrià help create Inedit?", answer: "Yes. Damm credits him and the elBulli sommelier team alongside its brewers." }, { question: "Does Inedit contain orange peel?", answer: "Yes. Damm names orange peel, coriander and liquorice in its flavour story." }],
    metaTitle: "Damm Inedit Price, Taste & Review | BevOry", metaDescription: "Damm Inedit brings orange peel, coriander and creamy wheat. Pair with tandoori prawns; check city prices on BevOry."
  },
  "santa-rita-120-reserva-especial-cabernet-sauvignon-1b2d4ad": {
    productName: "Santa Rita 120 Cabernet Sauvignon", category: "Chilean Cabernet Sauvignon Red Wine",
    shortOverview: "Santa Rita 120 Cabernet Sauvignon is a fruit-led Chilean red with vanilla and tobacco from oak contact. Its dark-fruit structure suits richly spiced meat dishes.",
    craftStory: "Viña Santa Rita draws fruit from Chile's Central Valley, shaped by the Andes and coastal ranges. The producer's 120 Cabernet notes oak contact rather than naming a fixed cask specification across vintages.",
    tastingNotes: { nose: "Cherry, dark berries, vanilla and a hint of tobacco.", palate: "Medium to full-bodied and dry, with ripe dark fruit, measured tannin and spice.", finish: "Medium, with oak, cherry skin and gentle grip." },
    servingGuide: { glassware: "Bordeaux-style red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Let the wine breathe in the glass for 15 minutes before a rich meal." },
    foodPairings: ["mutton rogan josh", "lamb chops", "tandoori chicken", "aged cheddar"], whyBuyThis: "Its accessible Cabernet structure brings fruit and oak to a substantial Indian dinner.",
    faqs: [{ question: "Does Santa Rita 120 Cabernet use oak?", answer: "Santa Rita describes vanilla and tobacco notes from oak contact." }, { question: "Should it be chilled?", answer: "Serve slightly cool at about 16–18°C, rather than warm room temperature." }],
    metaTitle: "Santa Rita 120 Cabernet Price, Taste & Review | BevOry", metaDescription: "Santa Rita 120 Cabernet brings cherry, oak and spice. Pair with mutton rogan josh; check indicative city prices on BevOry."
  },
  "santa-rita-120-reserva-especial-sauvignon-blance-94add0c": {
    productName: "Santa Rita 120 Sauvignon Blanc", category: "Chilean Sauvignon Blanc White Wine",
    shortOverview: "Santa Rita 120 Sauvignon Blanc is a fresh, citrus-led Chilean white. Its acidity and light body are particularly useful with seafood and herb-forward starters.",
    craftStory: "Viña Santa Rita draws on Chile's Central Valley and its Andes-to-coast temperature variation. The producer describes cool handling and fermentation of clarified juice for this Sauvignon Blanc, keeping fruit and freshness forward.",
    tastingNotes: { nose: "Lime, grapefruit and a light floral note.", palate: "Light and dry, with citrus fruit and balanced, mouth-watering acidity.", finish: "Medium, leaving a clean lemony trail." },
    servingGuide: { glassware: "Narrow white-wine glass", idealTemperature: "Chilled, 8–10°C", recommendation: "Keep it cool and serve before heavier reds or creamy dishes." },
    foodPairings: ["tandoori prawns", "coriander (dhania) fish tikka", "cucumber chaat", "malai paneer tikka"], whyBuyThis: "Its clear citrus-and-acid line brightens coastal food and fresh herbs.",
    faqs: [{ question: "Is Santa Rita 120 Sauvignon Blanc sweet?", answer: "Its producer presents a fresh, citrus-driven table wine rather than a dessert wine." }, { question: "What does the producer say about its finish?", answer: "Santa Rita describes a pleasant, persistent fruit finish." }],
    metaTitle: "Santa Rita 120 Sauvignon Price, Taste & Review | BevOry", metaDescription: "Santa Rita 120 Sauvignon Blanc is citrusy and fresh. Pair with tandoori prawns; check indicative city prices on BevOry."
  },
  "campo-viejo-rioja-viura-14a74ef": {
    productName: "Campo Viejo Rioja Viura", category: "Rioja White Wine",
    shortOverview: "Campo Viejo Rioja Viura is a bright Spanish white built around Rioja's classic white grape. Orchard fruit and citrus keep it flexible with seafood and mild starters.",
    craftStory: "Campo Viejo works across Rioja's growing subregions and makes a Blanco that brings Viura together with Tempranillo Blanco. This Viura-named listing sits in that Rioja white-wine tradition; exact blend depends on the bottle and vintage.",
    tastingNotes: { nose: "Green apple, pear and lemon peel.", palate: "Light to medium-bodied and dry, with orchard fruit and lively citrus acidity.", finish: "Medium-short, leaving apple and a faint almond note." },
    servingGuide: { glassware: "White-wine glass", idealTemperature: "Chilled, 8–10°C", recommendation: "Serve cool with lemon-led food rather than freezing the wine." },
    foodPairings: ["rava-fried fish", "tandoori prawns", "lemon rice", "malai paneer tikka"], whyBuyThis: "Viura's orchard-fruit freshness is an easy route into Rioja whites.",
    faqs: [{ question: "Is Viura a place?", answer: "No. Viura is a white grape widely grown in Rioja." }, { question: "Is this a red Rioja?", answer: "No. Viura is a white-wine grape, and this is a Rioja white listing." }],
    metaTitle: "Campo Viejo Rioja Viura Price, Taste & Review | BevOry", metaDescription: "Campo Viejo Rioja Viura brings apple, pear and citrus. Pair with fish fry; check indicative city prices on BevOry."
  },
  "campo-viejo-tempranillo-blanco-7c49d14": {
    productName: "Campo Viejo Tempranillo Blanco", category: "Rioja White Wine",
    shortOverview: "Campo Viejo Tempranillo Blanco shows that Rioja's familiar Tempranillo name also has a white-grape expression. Its fresh fruit and citrus profile suits lighter Indian food.",
    craftStory: "Campo Viejo's Rioja Blanco brings Tempranillo Blanco together with Viura in the producer's current description. The white-grape wine is made for freshness rather than the tannic structure of red Tempranillo.",
    tastingNotes: { nose: "White peach, apple and citrus blossom.", palate: "Fresh and dry, with orchard fruit, a light roundness and lively acidity.", finish: "Medium-short, leaving citrus and peach skin." },
    servingGuide: { glassware: "Medium white-wine glass", idealTemperature: "Chilled, 8–10°C", recommendation: "Serve cool with seafood or delicately spiced paneer." },
    foodPairings: ["tandoori prawns", "cucumber chaat", "malai paneer tikka", "rava-fried fish"], whyBuyThis: "It offers a less familiar white Rioja angle without sacrificing approachable freshness.",
    faqs: [{ question: "Is Tempranillo Blanco a red wine?", answer: "No. It is a white-grape expression, distinct from red Tempranillo." }, { question: "Does Campo Viejo blend it with Viura?", answer: "The producer's Blanco page names both grapes; check the vintage label for the exact blend." }],
    metaTitle: "Campo Viejo Blanco Price, Taste & Review | BevOry", metaDescription: "Campo Viejo Tempranillo Blanco brings peach, apple and citrus. Pair with prawns; check city prices on BevOry."
  },
  "campo-viejo-tempranillo-red-ab9a3e1": {
    productName: "Campo Viejo Tempranillo", category: "Rioja Tempranillo Red Wine",
    shortOverview: "Campo Viejo Tempranillo is a fruit-forward Rioja red with a supple, savoury edge. It is an approachable red for grilled chicken and lamb rather than a heavily tannic cellar bottle.",
    craftStory: "Campo Viejo centres its Rioja range on the region's Tempranillo grape. The winery works across Rioja's subregions to build a modern expression that carries red fruit and measured spice.",
    tastingNotes: { nose: "Ripe cherry, plum and a gentle vanilla-spice note.", palate: "Medium-bodied and dry, with red fruit, soft tannin and a savoury turn.", finish: "Medium, leaving cherry skin and mild spice." },
    servingGuide: { glassware: "Standard red-wine glass", idealTemperature: "Slightly cool, 16–18°C", recommendation: "Give the wine a short rest in the glass and serve with food." },
    foodPairings: ["tandoori chicken", "lamb chops", "mutton seekh kebab", "mushroom pepper fry"], whyBuyThis: "Its supple Rioja fruit makes Tempranillo accessible at a mixed Indian dinner.",
    faqs: [{ question: "Is Campo Viejo Tempranillo sweet?", answer: "It is a dry red whose ripe fruit can smell sweet without added dessert-wine sweetness." }, { question: "Is it a Rioja wine?", answer: "Yes. Campo Viejo identifies Tempranillo as central to its Rioja range." }],
    metaTitle: "Campo Viejo Tempranillo Price, Taste & Review | BevOry", metaDescription: "Campo Viejo Tempranillo brings cherry, plum and soft spice. Pair with tandoori chicken; check city prices on BevOry."
  },
  "chandon-brut-feb054c": {
    productName: "Chandon Brut", category: "Indian Sparkling Wine",
    shortOverview: "Chandon Brut is a dry sparkling wine associated with Chandon's Nashik winery. Bright citrus and orchard-fruit direction make it a practical aperitif with seafood.",
    craftStory: "Chandon India was established in 2014 near Dindori, Nashik, in the Western Ghats foothills. The producer's Indian estate works at about 600 metres average vineyard altitude; precise grape proportions vary and are not assumed for this bottle.",
    tastingNotes: { nose: "Green apple, lemon zest and a light floral note.", palate: "Fresh and dry, with fine bubbles, orchard fruit and clean acidity.", finish: "Medium-short, with citrus peel and a gentle bready hint." },
    servingGuide: { glassware: "Tulip sparkling-wine glass", idealTemperature: "Well chilled, 6–8°C", recommendation: "Chill gradually, open carefully and pour in small measures to preserve bubbles." },
    foodPairings: ["tandoori prawns", "rava-fried fish", "malai paneer tikka", "lemon rice"], whyBuyThis: "Its Nashik origin makes a dry local sparkling choice for Indian starters.",
    faqs: [{ question: "Is Chandon Brut Champagne?", answer: "No. Chandon India makes sparkling wine in Nashik, outside France's Champagne region." }, { question: "How cold should it be served?", answer: "Serve well chilled, around 6–8°C, in a tulip-shaped glass." }],
    metaTitle: "Chandon Brut Price, Taste & Review | BevOry", metaDescription: "Chandon Brut is a fresh Nashik sparkling wine for tandoori prawns and fish fry. Check indicative city prices on BevOry."
  },
  "moet-and-chandon-moet-and-chandon-ice-imperial-8a05225": {
    productName: "Moët & Chandon Ice Impérial", category: "Champagne Demi-Sec",
    shortOverview: "Ice Impérial is Moët & Chandon's Champagne designed specifically for serving over ice. Its tropical fruit and higher dosage stay expressive as the ice melts.",
    craftStory: "The Champagne blend centres on Pinot Noir, with Meunier adding richness and Chardonnay freshness. Moët & Chandon builds this demi-sec for an ice serve, unlike a conventional Brut poured without dilution.",
    tastingNotes: { nose: "Mango, guava, nectarine and a raspberry accent.", palate: "Broad and sweet-fruited, with caramel and quince balanced by grapefruit freshness.", finish: "Medium-long, with ginger, tropical fruit and fresh acidity." },
    servingGuide: { glassware: "Large wine glass", idealTemperature: "Well chilled, 6–8°C before ice", recommendation: "Pour over three large ice cubes as the producer intends; add mint or citrus only if desired." },
    foodPairings: ["tandoori prawns", "coconut fish curry", "fresh mango chaat", "lightly salted tempura"], whyBuyThis: "It is one of the rare Champagnes whose blend is deliberately calibrated for ice.",
    faqs: [{ question: "Is it meant to be served with ice?", answer: "Yes. Moët & Chandon created Ice Impérial specifically for that serve." }, { question: "Is Ice Impérial a dry Brut?", answer: "No. The producer calls it a demi-sec Champagne with a higher dosage." }],
    metaTitle: "Moët Ice Impérial Price, Taste & Review | BevOry", metaDescription: "Moët Ice Impérial brings mango, guava and grapefruit over ice. Pair with tandoori prawns; check city prices on BevOry."
  }
};
