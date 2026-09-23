// Expression-level editorial; producer references: docs/editorial/product-batch-12-sources.md.
import type { ProductPublicDetail } from "./productContentBatch01.js";

export const PRODUCT_BATCH_CONTENT: Record<string, ProductPublicDetail> = {
  "aberlour-12-year-9bfdec0": {
    productName: "Aberlour 12 Year", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Aberlour 12 balances crisp red apple with the darker fruit and spice of sherry oak. It is a useful starting point for exploring the distillery's double-cask style.",
    craftStory: "Made beside the Lour Burn in Aberlour, Speyside, this single malt draws on traditional oak and sherry casks. Founder James Fleming established the distillery in 1879; the twelve-year maturation gives the fruit time to settle into the wood.",
    tastingNotes: { nose: "Red apple, orange zest and a touch of cinnamon.", palate: "Smooth apple and citrus turn to almond, gentle toffee and warming spice.", finish: "Medium, with sweet oak and a lingering hint of cinnamon." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour 30 ml neat; a few drops of water open the orchard-fruit aroma." },
    foodPairings: ["tandoori chicken", "mutton seekh kebab", "apple kheer", "toasted almonds"], whyBuyThis: "The meeting of fresh Speyside fruit and sherry-cask warmth is approachable without being bland.",
    faqs: [{ question: "Is Aberlour 12 smoky?", answer: "Smoke is not a defining note of this fruit-and-sherry-led expression." }, { question: "How should I serve it?", answer: "Begin neat at room temperature, then add a little water if you prefer." }],
    metaTitle: "Aberlour 12 Year Price, Taste & Review | BevOry", metaDescription: "Aberlour 12 brings apple, orange and sherry spice. Pair with tandoori chicken; check indicative city prices on BevOry."
  },
  "aberlour-16-year-429bcd4": {
    productName: "Aberlour 16 Year", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Aberlour 16 moves beyond the bright fruit of the twelve-year-old into plum, raisin and deeper spice. The texture is generous, but its floral edge keeps it from feeling heavy.",
    craftStory: "This Speyside malt from Aberlour combines oak maturation with a pronounced Spanish Oloroso sherry-cask influence. Sixteen years of aging round the distillate before the casks are brought together.",
    tastingNotes: { nose: "Floral lift over plum, raisin and warm oak.", palate: "Rounded dried fruit and caramel develop into nutmeg and gentle oak tannin.", finish: "Long, with sweet fruit and a restrained spicy fade." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Sip neat in small pours; try two drops of water after the first taste." },
    foodPairings: ["galouti kebab", "lamb rogan josh", "date-and-walnut cake", "70% dark chocolate"], whyBuyThis: "It offers a distinctly richer Aberlour profile while preserving the distillery's fruit character.",
    faqs: [{ question: "What distinguishes the 16 from Aberlour 12?", answer: "The sixteen-year-old is fuller and more dried-fruit-led, with a stronger Oloroso impression." }, { question: "Does it need ice?", answer: "No. Neat service is a better way to follow its fruit and oak detail." }],
    metaTitle: "Aberlour 16 Year Price, Taste & Review | BevOry", metaDescription: "Aberlour 16 offers plum, raisin and Oloroso spice. Pair with galouti kebab; compare indicative city prices on BevOry."
  },
  "aberlour-18-year-0b79c44": {
    productName: "Aberlour 18 Year", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Aberlour 18 is a dense, dessert-fruited Speyside malt, with apricot, chocolate-coated raisin and orange. Its long finish makes slow neat sipping the right approach.",
    craftStory: "The current eighteen-year-old from Aberlour receives a double sherry-cask finish influenced by Spanish oak Oloroso and Pedro Ximénez butts. The distillery's Speyside spirit gains weight and sweetness without losing its citrus line.",
    tastingNotes: { nose: "Ripe fruit, orange zest, toffee bun and plum jam.", palate: "Rich apricot and chocolate-coated raisin give way to liquorice and fresh nutmeg.", finish: "Long and layered, with lasting sweetness and soft wood spice." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat; add only a few drops of spring water if the sherry sweetness feels concentrated." },
    foodPairings: ["galouti kebab", "mutton rogan josh", "fig-and-walnut tart", "70% dark chocolate"], whyBuyThis: "Its two sherry-wood influences give a clear step up in depth from the younger Aberlour malts.",
    faqs: [{ question: "Which sherry casks influence Aberlour 18?", answer: "The producer identifies Oloroso and Pedro Ximénez sherry butts in its double finish." }, { question: "Is a highball suitable?", answer: "A neat pour is a better fit for this older, more detailed malt." }],
    metaTitle: "Aberlour 18 Year Price, Taste & Review | BevOry", metaDescription: "Aberlour 18 layers apricot, raisin and nutmeg. Pair with galouti kebab; check indicative city prices on BevOry."
  },
  "the-balvenie-double-wood-12-yrs-2bb664c": {
    productName: "Balvenie DoubleWood 12", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Balvenie DoubleWood 12 brings honey, nutty spice and dried fruit into an easy-drinking Speyside malt. Its two-wood maturation is the point: neither the vanilla oak nor the sherry oak dominates.",
    craftStory: "At Dufftown in Speyside, Balvenie matures this malt first in American oak whisky casks, then transfers it to European oak sherry casks. That second stage adds fruitcake and spice to the distillery's honeyed spirit.",
    tastingNotes: { nose: "Honey, vanilla and a little dried fruit.", palate: "Soft honey and nuts move toward cinnamon and sherry fruit.", finish: "Medium-long, warming and gently spicy." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Start neat; a few drops of water make the honey note easier to pick out." },
    foodPairings: ["tandoori chicken", "paneer tikka", "almond halwa", "milk-chocolate tart"], whyBuyThis: "It explains sherry finishing clearly without asking a newcomer to enjoy a heavy whisky.",
    faqs: [{ question: "What does DoubleWood mean?", answer: "The spirit ages in American oak whisky casks and then European oak sherry casks." }, { question: "Is Balvenie DoubleWood peated?", answer: "Peat smoke is not central to the producer's description of this expression." }],
    metaTitle: "Balvenie DoubleWood 12 Price, Taste & Review | BevOry", metaDescription: "Balvenie DoubleWood 12 brings honey, nuts and sherry spice. Pair with paneer tikka; check city prices on BevOry."
  },
  "balvenie-14-yrs-bff9f2d": {
    productName: "Balvenie Caribbean Cask 14", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Balvenie Caribbean Cask 14 shifts the house honey character toward toffee and tropical fruit. The rum-cask finish is noticeable, but it remains a malt whisky rather than a flavoured rum drink.",
    craftStory: "Balvenie in Dufftown first matures this Speyside spirit in traditional oak whisky casks. It then finishes the whisky in casks that held Caribbean rum, adding a rounder fruit-and-vanilla edge.",
    tastingNotes: { nose: "Toffee, soft fruit and vanilla.", palate: "Creamy caramel opens into mango-like fruit and warm oak spice.", finish: "Medium-long, sweet and mellow, with vanilla and a trace of wood." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Taste neat before trying a single large ice cube; avoid sweet mixers that bury the rum-cask detail." },
    foodPairings: ["tandoori pineapple", "chicken malai tikka", "coconut barfi", "roasted cashews"], whyBuyThis: "Its rum-cask character adds fruit and toffee without erasing Balvenie's malt identity.",
    faqs: [{ question: "Is rum added to Caribbean Cask 14?", answer: "No. The whisky is finished in casks that previously held rum." }, { question: "Is it sweet?", answer: "It tastes sweet with toffee and fruit, though it is still a Scotch single malt." }],
    metaTitle: "Balvenie Caribbean Cask 14 Price, Taste & Review | BevOry", metaDescription: "Balvenie Caribbean Cask 14 offers toffee, vanilla and tropical fruit. Pair with chicken malai tikka; check city prices on BevOry."
  },
  "balvenie-21-yrs-4935fb7": {
    productName: "Balvenie PortWood 21", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Balvenie PortWood 21 is a measured, mature Speyside malt with honey, raisin and delicate nutty fruit. The port finish adds breadth rather than a sugary coating.",
    craftStory: "After long maturation in traditional oak casks at Balvenie, selected twenty-one-year-old whisky spends time in port casks. The finishing wood frames the distillery's Dufftown honey character with dried fruit.",
    tastingNotes: { nose: "Ripe raisin, soft fruit and honey.", palate: "Silky honey and sweet malt develop into nuts, dried fruit and restrained spice.", finish: "Long and gentle, with a lingering fruity warmth." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour neat and let it rest briefly; add only a drop or two of spring water if desired." },
    foodPairings: ["galouti kebab", "mutton seekh", "fig tart", "70% dark chocolate"], whyBuyThis: "Its extended maturation and quiet port influence reward a slower tasting than the younger Balvenie range.",
    faqs: [{ question: "Is Balvenie PortWood a port wine?", answer: "No. It is single malt Scotch finished in casks that previously held port." }, { question: "Should it be mixed?", answer: "Neat tasting best preserves the detail of this twenty-one-year-old whisky." }],
    metaTitle: "Balvenie PortWood 21 Price, Taste & Review | BevOry", metaDescription: "Balvenie PortWood 21 brings honey, raisin and nutty fruit. Pair with galouti kebab; check indicative city prices on BevOry."
  },
  "dalmore-12-yrs-single-malt-e3c247a": {
    productName: "Dalmore 12 Year", category: "Highland Single Malt Scotch Whisky",
    shortOverview: "Dalmore 12 is an orange-and-chocolate Highland malt with a polished sherry-wood sweetness. It offers a clear introduction to the distillery's richer house style.",
    craftStory: "Dalmore distils beside the Cromarty Firth in the Scottish Highlands. The twelve-year-old combines American white-oak ex-bourbon maturation with Oloroso sherry-cask influence for citrus, vanilla and dark fruit.",
    tastingNotes: { nose: "Orange peel, vanilla and warm spice.", palate: "Rounded citrus and dried fruit lead to chocolate and gentle oak.", finish: "Medium-long, with coffee, dark chocolate and spice." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat in a small pour; a little water softens the chocolate-and-oak edge." },
    foodPairings: ["mutton seekh kebab", "lamb rogan josh", "orange-dark-chocolate tart", "roasted walnuts"], whyBuyThis: "Its orange-and-chocolate signature makes Dalmore's sherry-cask style immediately legible.",
    faqs: [{ question: "What wood is used for Dalmore 12?", answer: "The producer names American white-oak ex-bourbon barrels and Oloroso sherry casks." }, { question: "Is Dalmore 12 heavily smoky?", answer: "No. Citrus, chocolate and spice lead its profile." }],
    metaTitle: "Dalmore 12 Year Price, Taste & Review | BevOry", metaDescription: "Dalmore 12 layers orange, chocolate and Oloroso spice. Pair with mutton seekh; check indicative city prices on BevOry."
  },
  "dalmore-15-yrs-b98f17a": {
    productName: "Dalmore 15 Year", category: "Highland Single Malt Scotch Whisky",
    shortOverview: "Dalmore 15 turns the distillery's orange-chocolate theme toward richer spice and dried fruit. It suits a slower after-dinner pour more than a long mixed drink.",
    craftStory: "Made at Dalmore on the Cromarty Firth, the fifteen-year-old begins in American white-oak ex-bourbon barrels. It is then finished in Apostoles, Amoroso and Matusalem Oloroso sherry casks, deepening the spirit's citrus and cocoa character.",
    tastingNotes: { nose: "Orange marmalade, cinnamon and chocolate.", palate: "Smooth citrus and dried fruit build toward nutmeg, coffee and oak.", finish: "Long and warming, with chocolate-orange and spice." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Drink neat, allowing several minutes in the glass before adding a few drops of water." },
    foodPairings: ["galouti kebab", "mutton rogan josh", "dark-chocolate mousse", "spiced walnut cake"], whyBuyThis: "The extra age gives Dalmore's citrus-and-sherry profile more depth without losing definition.",
    faqs: [{ question: "How is Dalmore 15 different from Dalmore 12?", answer: "It is older and generally presents deeper sherry spice and dried fruit." }, { question: "Is it best with cola?", answer: "Neat service is a better way to appreciate this older malt's wood and fruit." }],
    metaTitle: "Dalmore 15 Year Price, Taste & Review | BevOry", metaDescription: "Dalmore 15 brings orange marmalade, cocoa and spice. Pair with galouti kebab; check indicative city prices on BevOry."
  },
  "dalmore-the-dalmore-aged-18-years-highland-single-malt-whisky-0834bf3": {
    productName: "Dalmore 18 Year", category: "Highland Single Malt Scotch Whisky",
    shortOverview: "Dalmore 18 is a darker, more oak-framed expression of the distillery's citrus-led style. Chocolate, dried fruit and sherry spice make it a deliberate sipping whisky.",
    craftStory: "Dalmore matures this Highland single malt in American white-oak ex-bourbon barrels and seasoned sherry casks, including Matusalem Oloroso in current releases. Exact cask composition can vary by annual edition, so the bottle label remains the edition reference.",
    tastingNotes: { nose: "Orange zest, dark chocolate and dried fruit.", palate: "Dense fruit and cocoa unfold into coffee, vanilla and sherry oak.", finish: "Long, with bitter chocolate and warming wood spice." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat; try a few drops of spring water only after tasting the first pour." },
    foodPairings: ["galouti kebab", "lamb rogan josh", "70% dark chocolate", "date-and-walnut tart"], whyBuyThis: "Age and sherry wood give the familiar Dalmore orange note a more serious, chocolate-dark counterpoint.",
    faqs: [{ question: "Is Dalmore 18 an annual release?", answer: "The current range includes edition-specific bottlings, so check the year and cask details on the label." }, { question: "Should I chill it?", answer: "Room-temperature neat service preserves more aroma than deep chilling." }],
    metaTitle: "Dalmore 18 Year Price, Taste & Review | BevOry", metaDescription: "Dalmore 18 shows orange, dark chocolate and sherry oak. Pair with lamb rogan josh; check indicative city prices on BevOry."
  },
  "dalmore-cigar-859bf3e": {
    productName: "Dalmore Cigar Malt Reserve", category: "Highland Single Malt Scotch Whisky",
    shortOverview: "Dalmore Cigar Malt Reserve is a full-bodied malt with red fruit, cinnamon and dark chocolate. Despite its name, it is enjoyable without a cigar; the profile is built for rich, savoury company.",
    craftStory: "At Dalmore in the Highlands, American white-oak ex-bourbon maturation is joined by Cabernet Sauvignon wine casks and Matusalem Oloroso sherry casks. The three wood influences create a broad fruit-and-spice profile.",
    tastingNotes: { nose: "Cinnamon, vanilla and ripe red berries.", palate: "Full and rounded, with tropical fruit, toffee and warming spice.", finish: "Long, with orange zest, dark chocolate and oak." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat in a small pour; a few drops of water tame the oak without masking the fruit." },
    foodPairings: ["mutton seekh kebab", "galouti kebab", "lamb chops", "70% dark chocolate"], whyBuyThis: "Wine and sherry wood give this Dalmore a broader red-fruit accent than the core twelve-year-old.",
    faqs: [{ question: "Does Cigar Malt contain tobacco?", answer: "No. The name refers to a suggested pairing, not an ingredient." }, { question: "Which casks shape it?", answer: "The producer identifies ex-bourbon oak, Cabernet Sauvignon wine casks and Matusalem Oloroso sherry casks." }],
    metaTitle: "Dalmore Cigar Malt Reserve Price, Taste & Review | BevOry", metaDescription: "Dalmore Cigar Malt brings red berries, toffee and dark chocolate. Pair with mutton seekh; check city prices on BevOry."
  },
  "dalmore-king-alexander-lll-28d2e2d": {
    productName: "Dalmore King Alexander III", category: "Highland Single Malt Scotch Whisky",
    shortOverview: "Dalmore King Alexander III layers red berry and citrus over vanilla, caramel and almond. It is one of the distillery's most elaborate wood-led expressions, meant for patient neat tasting.",
    craftStory: "Dalmore combines six cask influences in this Highland malt: ex-bourbon, Matusalem Oloroso sherry, Madeira, Marsala, port and Cabernet Sauvignon. The name recalls the brand's stag emblem and the Mackenzie clan's King Alexander III story.",
    tastingNotes: { nose: "Red berries, passion fruit and a soft citrus lift.", palate: "Silky orange, vanilla and caramel develop into almond and dark fruit.", finish: "Long, with lingering fruit, spice and polished oak." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour neat, wait several minutes, then add only a drop of spring water if desired." },
    foodPairings: ["galouti kebab", "mutton rogan josh", "fig-and-almond tart", "70% dark chocolate"], whyBuyThis: "Its six cask types create a distinctive fruit-and-wood range without requiring a cocktail.",
    faqs: [{ question: "Is King Alexander III an age-stated whisky?", answer: "No age statement is part of the expression's standard name." }, { question: "Which casks are used?", answer: "The producer lists bourbon, Oloroso, Madeira, Marsala, port and Cabernet Sauvignon cask influences." }],
    metaTitle: "Dalmore King Alexander III Price, Taste & Review | BevOry", metaDescription: "Dalmore King Alexander III layers berries, citrus and almond. Pair with galouti kebab; check indicative city prices on BevOry."
  },
  "dalmore-the-dalmore-port-wood-reserve-a8f5cb8": {
    productName: "Dalmore Port Wood Reserve", category: "Highland Single Malt Scotch Whisky",
    shortOverview: "Dalmore Port Wood Reserve is a ripe, red-fruited Highland malt with orange and creamy caramel. The port wood feels more plum-like than the sherry-led Dalmore bottlings.",
    craftStory: "Dalmore begins maturation in American white-oak ex-bourbon barrels and finishes the whisky in aged tawny-port pipes. Its relationship with Graham's Port Lodge in Portugal is central to this expression's fruit profile.",
    tastingNotes: { nose: "Red berries, Seville orange, plum and toffee pudding.", palate: "Creamy caramel and nectarine move into roasted chestnut and coffee.", finish: "Long and fruity, with plum, sultana and blood-orange notes." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Taste neat first; a few drops of water can reveal more orange beneath the port fruit." },
    foodPairings: ["tandoori chicken", "mutton ghee roast", "plum tart", "roasted chestnuts"], whyBuyThis: "Tawny-port casks give Dalmore's orange-led style a recognisably red-fruited direction.",
    faqs: [{ question: "Is port added to the whisky?", answer: "No. The malt is finished in wood previously used for aged tawny port." }, { question: "Is this the same as Dalmore 12?", answer: "No. Port Wood Reserve uses a distinct port-cask finish and has no age statement in its name." }],
    metaTitle: "Dalmore Port Wood Reserve Price, Taste & Review | BevOry", metaDescription: "Dalmore Port Wood brings plum, orange and caramel. Pair with mutton ghee roast; check indicative city prices on BevOry."
  },
  "highland-park-single-malt-scotch-whisky-12-years-eb3fe60": {
    productName: "Highland Park 12 Year", category: "Orkney Single Malt Scotch Whisky",
    shortOverview: "Highland Park 12 brings Seville orange and honey together with a restrained heather-peat note. It offers smoke as an accent rather than the full Islay treatment.",
    craftStory: "Made in Kirkwall on Orkney, this malt reflects Highland Park's use of local heather peat and sherry-seasoned oak. The twelve-year expression has long been the distillery's entry point to its sweet-smoky balance.",
    tastingNotes: { nose: "Orange peel, honey and a soft floral-smoke thread.", palate: "Rounded citrus and malt sweetness develop into baking spice and light peat.", finish: "Medium-long, with honeyed oak and gentle smoke." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Sip neat, then add a few drops of water to separate the orange from the peat." },
    foodPairings: ["tandoori chicken", "mutton seekh kebab", "smoked paneer tikka", "orange-dark-chocolate tart"], whyBuyThis: "It gives smoke-curious drinkers a measured introduction without hiding the fruit.",
    faqs: [{ question: "Is Highland Park 12 peated?", answer: "Yes, but its heather-peat smoke is generally gentle beside the honey and citrus." }, { question: "Where is it made?", answer: "At Highland Park Distillery in Kirkwall, Orkney." }],
    metaTitle: "Highland Park 12 Year Price, Taste & Review | BevOry", metaDescription: "Highland Park 12 mixes orange, honey and gentle peat. Pair with smoked paneer tikka; check city prices on BevOry."
  },
  "highland-park-single-malt-scotch-whisky-15-years-8e345c7": {
    productName: "Highland Park 15 Year", category: "Orkney Single Malt Scotch Whisky",
    shortOverview: "Highland Park 15 moves toward pineapple, lemon and vanilla while keeping Orkney's soft smoke in the background. The sweeter fruit makes it notably different from the twelve-year-old.",
    craftStory: "Highland Park matures its Orkney spirit in first-fill sherry-seasoned American and European oak alongside refill casks. Local heather peat contributes the quiet aromatic smoke beneath the fifteen-year-old's fruit.",
    tastingNotes: { nose: "Pineapple, lemon zest and vanilla with faint heathery smoke.", palate: "Juicy tropical fruit meets cinnamon, honey and polished oak.", finish: "Long, with citrus spice and a gentle smoky echo." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour neat and let it breathe; add a couple of drops of water to lift the citrus." },
    foodPairings: ["tandoori prawns", "chicken malai tikka", "pineapple tikka", "almond biscotti"], whyBuyThis: "Its tropical-fruit edge provides a fresh route into Highland Park's peat-and-sherry style.",
    faqs: [{ question: "Is Highland Park 15 very smoky?", answer: "No. Gentle heather peat supports the citrus and tropical fruit." }, { question: "What wood shapes it?", answer: "The producer identifies sherry-seasoned American and European oak, plus refill casks." }],
    metaTitle: "Highland Park 15 Year Price, Taste & Review | BevOry", metaDescription: "Highland Park 15 offers pineapple, vanilla and soft smoke. Pair with tandoori prawns; check city prices on BevOry."
  },
  "highland-park-single-malt-scotch-whisky-18-years-43255fa": {
    productName: "Highland Park 18 Year", category: "Orkney Single Malt Scotch Whisky",
    shortOverview: "Highland Park 18 is a slower, darker Orkney malt with cherry, chocolate and salted honeycomb. The heather smoke remains present but never shouts over the oak-aged fruit.",
    craftStory: "Made at Highland Park in Kirkwall, this eighteen-year-old draws on sherry-seasoned oak and the distillery's gently peated spirit. Extended maturation brings richer fruit and cocoa to the established honey-citrus style.",
    tastingNotes: { nose: "Cherry, orange peel, cocoa and soft heather smoke.", palate: "Dense honeycomb and dark chocolate meet dried fruit and restrained oak spice.", finish: "Long, warming and slightly smoky, with lingering cocoa." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat and take time over the first sip; use a few drops of water only if needed." },
    foodPairings: ["galouti kebab", "lamb rogan josh", "70% dark chocolate", "orange-and-almond cake"], whyBuyThis: "Its mature chocolate-and-fruit depth makes the gentle Orkney peat more interesting, not more aggressive.",
    faqs: [{ question: "Is Highland Park 18 a heavily peated malt?", answer: "No. Its heather-peat note is restrained beside the fruit and chocolate." }, { question: "How is it best served?", answer: "Neat at room temperature in a small nosing glass." }],
    metaTitle: "Highland Park 18 Year Price, Taste & Review | BevOry", metaDescription: "Highland Park 18 layers cherry, chocolate and gentle peat. Pair with galouti kebab; check city prices on BevOry."
  },
  "oban-14-years-a00743d": {
    productName: "Oban 14 Year", category: "Coastal Highland Single Malt Scotch Whisky",
    shortOverview: "Oban 14 sits between Highland fruit and a coastal, lightly smoky savouriness. Its waxy texture and faint brine make it more distinctive than a simple honeyed malt.",
    craftStory: "Oban is distilled in the west-coast Scottish town of the same name, where its small distillery predates much of the surrounding modern town. Fourteen years in oak round the spirit's orchard fruit, malt and maritime edge.",
    tastingNotes: { nose: "Orchard fruit, orange peel and a trace of sea air.", palate: "Waxy and gently oily, with fruitbread, malt, clove and faint smoke.", finish: "Long, with dark chocolate, salt and a quiet smoky trail." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Taste neat, then add a few drops of water to bring out the fruit and brine." },
    foodPairings: ["tandoori prawns", "coastal rava-fried fish", "mutton seekh", "70% dark chocolate"], whyBuyThis: "Its mix of waxy fruit, salt and restrained smoke gives a genuine coastal contrast.",
    faqs: [{ question: "Is Oban 14 an Islay whisky?", answer: "No. It is made in Oban on Scotland's west coast and classified as a Highland malt." }, { question: "How smoky is it?", answer: "Smoke is light, alongside fruit, malt and brine." }],
    metaTitle: "Oban 14 Year Price, Taste & Review | BevOry", metaDescription: "Oban 14 has orchard fruit, brine and light smoke. Pair with tandoori prawns; check indicative city prices on BevOry."
  },
  "oban-little-bay-45c84ef": {
    productName: "Oban Little Bay", category: "Coastal Highland Single Malt Scotch Whisky",
    shortOverview: "Oban Little Bay compresses the distillery's seaside character into a denser, spicier sip. Apple, fruitcake and dry cocoa sit beside a subtle salt note.",
    craftStory: "Made at Oban's west-coast Highland distillery, Little Bay brings together whisky from different oak casks before a final marrying period in small oak casks. The result is fuller than a simple fruit-led malt, with coastal character intact.",
    tastingNotes: { nose: "Apple, clove, malt and a touch of sea air.", palate: "Dense fruitcake and sweet malt develop into dark cocoa and warming spice.", finish: "Medium-long, dry and gently salty, with cocoa lingering." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Sip neat in a small pour; a drop of water softens the spice." },
    foodPairings: ["mutton seekh kebab", "rava-fried fish", "spiced plum cake", "70% dark chocolate"], whyBuyThis: "A compact oak marrying stage gives Oban's fruit-and-sea profile a different, fuller texture.",
    faqs: [{ question: "Does Little Bay have an age statement?", answer: "No age statement appears in the standard expression name." }, { question: "Is it the same as Oban 14?", answer: "No. Little Bay is a separate cask-selected expression with a denser fruit-and-spice profile." }],
    metaTitle: "Oban Little Bay Price, Taste & Review | BevOry", metaDescription: "Oban Little Bay brings apple, fruitcake and dry cocoa. Pair with mutton seekh; check indicative city prices on BevOry."
  },
  "auchentoshan-12-yrs-d63618b": {
    productName: "Auchentoshan 12 Year", category: "Lowland Single Malt Scotch Whisky",
    shortOverview: "Auchentoshan 12 is a light-footed Lowland malt with citrus, hazelnut and a clean ginger finish. Triple distillation gives it a different texture from many heavier Scottish malts.",
    craftStory: "At Auchentoshan near Glasgow, the spirit passes through three copper pot stills. Twelve years in ex-bourbon oak and Spanish Oloroso sherry casks bring vanilla, nuts and dried-fruit warmth.",
    tastingNotes: { nose: "Sweet pastry, tangerine and toasted nuts.", palate: "Soft vanilla and hazelnut brighten into lime and a little caramel.", finish: "Medium, clean and lightly gingery." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Try neat first; a few drops of water sharpen the citrus." },
    foodPairings: ["malai paneer tikka", "tandoori prawns", "orange kheer", "toasted hazelnuts"], whyBuyThis: "Its triple-distilled lightness makes sherry oak accessible without losing flavour.",
    faqs: [{ question: "Is Auchentoshan 12 triple distilled?", answer: "Yes. The distillery uses three copper pot stills for its malt spirit." }, { question: "What casks are used?", answer: "The producer specifies ex-bourbon and Spanish Oloroso sherry casks." }],
    metaTitle: "Auchentoshan 12 Year Price, Taste & Review | BevOry", metaDescription: "Auchentoshan 12 has tangerine, hazelnut and ginger. Pair with malai paneer tikka; check city prices on BevOry."
  },
  "auchentoshan-american-oak-whisky-6167905": {
    productName: "Auchentoshan American Oak", category: "Lowland Single Malt Scotch Whisky",
    shortOverview: "Auchentoshan American Oak is a clean, vanilla-led Lowland malt with soft tropical fruit. It is lighter and more direct than the distillery's sherry-influenced twelve-year-old.",
    craftStory: "The Glasgow-area distillery triple-distils its spirit in copper pot stills, then matures this expression entirely in first-fill ex-bourbon American oak. That wood choice keeps the focus on vanilla, citrus and sweet malt.",
    tastingNotes: { nose: "Vanilla, coconut and fresh citrus.", palate: "Smooth tropical fruit and butterscotch give way to mild oak spice.", finish: "Medium, clean and gently sweet, with citrus returning." },
    servingGuide: { glassware: "Glencairn or highball glass", idealTemperature: "Room temperature (18–20°C) or chilled highball", recommendation: "Taste neat, or build 45 ml with chilled soda and ice for a light highball." },
    foodPairings: ["chicken malai tikka", "tandoori prawns", "coconut barfi", "cucumber chaat"], whyBuyThis: "The first-fill bourbon oak makes Auchentoshan's triple-distilled fruit easy to recognise.",
    faqs: [{ question: "Does American Oak contain bourbon?", answer: "No. It is Scotch whisky matured in casks that previously held bourbon." }, { question: "Is it sherry-finished?", answer: "No. This expression is defined by first-fill ex-bourbon American oak." }],
    metaTitle: "Auchentoshan American Oak Price, Taste & Review | BevOry", metaDescription: "Auchentoshan American Oak offers vanilla, citrus and coconut. Pair with malai tikka; check city prices on BevOry."
  },
  "bowmore-islay-single-malt-12-yrs-d49e9ab": {
    productName: "Bowmore 12 Year", category: "Islay Single Malt Scotch Whisky",
    shortOverview: "Bowmore 12 places lemon and heather honey ahead of an earthy Islay smoke. Its fruit-and-peat balance is gentler than the island's most medicinal malts.",
    craftStory: "Bowmore has distilled in its namesake Islay village since 1779. The twelve-year-old uses ex-bourbon and Oloroso sherry oak, which temper the distillery's peated spirit with citrus and dark-fruit sweetness.",
    tastingNotes: { nose: "Lemon zest, heather honey and soft earthy smoke.", palate: "Citrus and honey move toward fruit, dark chocolate and mild peat.", finish: "Medium-long, with sweet oak and lingering soft smoke." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Sip neat; add a few drops of water to draw out lemon beneath the smoke." },
    foodPairings: ["tandoori prawns", "mutton seekh kebab", "smoked paneer tikka", "70% dark chocolate"], whyBuyThis: "A measured peat level lets citrus and sherry sweetness remain easy to find.",
    faqs: [{ question: "Is Bowmore 12 smoky?", answer: "Yes. It has noticeable but relatively gentle earthy Islay smoke." }, { question: "Is it made on Islay?", answer: "Yes. Bowmore distils in the village of Bowmore on Islay." }],
    metaTitle: "Bowmore 12 Year Price, Taste & Review | BevOry", metaDescription: "Bowmore 12 balances lemon, honey and soft Islay smoke. Pair with tandoori prawns; check city prices on BevOry."
  },
  "bowmore-islay-single-malt-15-yrs-1cbcc0e": {
    productName: "Bowmore 15 Year", category: "Islay Single Malt Scotch Whisky",
    shortOverview: "Bowmore 15 is the richer side of Bowmore: chocolate, cooked apple and dark berries under a light smoke veil. The extra age and sherry influence make it more after-dinner than aperitif.",
    craftStory: "Bowmore's Islay spirit matures in ex-bourbon and Oloroso sherry oak. Fifteen years allow its maritime peat to integrate with dried fruit and chocolate rather than dominate them.",
    tastingNotes: { nose: "Toasted almond, cooked apple, cinnamon and faint peat.", palate: "Candied orange, blackberry and chocolate sit over a lightly saline texture.", finish: "Long, with walnut, spice and subtle smoke." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat and wait for the berry note to emerge; add a little water only if desired." },
    foodPairings: ["galouti kebab", "lamb rogan josh", "walnut brownie", "70% dark chocolate"], whyBuyThis: "It combines Bowmore's peat with clearly sherried fruit instead of simply amplifying smoke.",
    faqs: [{ question: "Is Bowmore 15 smokier than Bowmore 12?", answer: "Its peat remains subtle; richer sherry fruit is the more obvious change." }, { question: "What kind of casks influence it?", answer: "The producer points to ex-bourbon and Oloroso sherry oak." }],
    metaTitle: "Bowmore 15 Year Price, Taste & Review | BevOry", metaDescription: "Bowmore 15 layers apple, blackberry and chocolate over soft peat. Pair with galouti kebab; check city prices on BevOry."
  },
  "bruichladdich-classic-laddie-e5c9b53": {
    productName: "Bruichladdich Classic Laddie", category: "Unpeated Islay Single Malt Scotch Whisky",
    shortOverview: "The Classic Laddie challenges the assumption that every Islay malt tastes of smoke. It is bright, barley-led and floral, with green fruit and a lightly maritime finish.",
    craftStory: "Bruichladdich makes this unpeated malt on Islay from Scottish barley and trickle-distils it in copper pot stills. Cask recipes vary by batch; the producer bottles it without added colour or chill filtration.",
    tastingNotes: { nose: "Barley, wildflowers, green apple and a hint of citrus.", palate: "Lively malt sweetness moves into pear, lemon and soft oak.", finish: "Medium-long, fresh and gently saline." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Taste neat and add a few drops of water to open the floral barley note." },
    foodPairings: ["rava-fried fish", "tandoori prawns", "malai paneer tikka", "lemon-almond cake"], whyBuyThis: "It offers Islay provenance without peat, putting barley and coastal freshness first.",
    faqs: [{ question: "Is Classic Laddie peated?", answer: "No. Bruichladdich describes this expression as unpeated." }, { question: "Does every bottle use the same casks?", answer: "No. The producer's cask recipe can change by batch." }],
    metaTitle: "Bruichladdich Classic Laddie Price, Taste & Review | BevOry", metaDescription: "Classic Laddie offers Islay barley, green apple and no peat. Pair with rava-fried fish; check city prices on BevOry."
  },
  "cragganmore-12-yrs-58ba2e2": {
    productName: "Cragganmore 12 Year", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Cragganmore 12 is a savoury Speyside malt: herbs and honey lead into malty spice and a wisp of smoke. Its profile is less overtly sweet than many neighbouring distilleries.",
    craftStory: "John Smith founded Cragganmore near Ballindalloch in 1869. The distillery's copper pot stills and worm-tub condensers help shape a substantial spirit that spends twelve years in oak.",
    tastingNotes: { nose: "Fresh herbs, honey and vanilla with a faint smoky trace.", palate: "Malty and rounded, with sandalwood, fruit and restrained wood smoke.", finish: "Medium, dryish and gently smoky." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat; a little water can reveal more honey beneath its herbal edge." },
    foodPairings: ["mutton seekh kebab", "tandoori mushrooms", "chicken tikka", "toasted almonds"], whyBuyThis: "Its herb-and-malt character gives Speyside drinkers a less dessert-like alternative.",
    faqs: [{ question: "Is Cragganmore 12 from Speyside?", answer: "Yes. The distillery stands near Ballindalloch in Speyside." }, { question: "Is it heavily peated?", answer: "No. Its smoky note is light beside honey, herbs and malt." }],
    metaTitle: "Cragganmore 12 Year Price, Taste & Review | BevOry", metaDescription: "Cragganmore 12 brings herbs, honey and light smoke. Pair with mutton seekh; check indicative city prices on BevOry."
  },
  "glenfarclas-10-be387c6": {
    productName: "Glenfarclas 10 Year", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Glenfarclas 10 introduces the distillery's sherry-oak style with malt, fruit and gentle spice. It has a lighter touch than the older family-owned releases.",
    craftStory: "The Grant family has owned Glenfarclas near Ben Rinnes since 1865. Its spirit is twice distilled in direct-fired copper stills, then matured in oak including European oak Oloroso sherry casks selected from Spain.",
    tastingNotes: { nose: "Sweet malt, orchard fruit and a light sherry note.", palate: "Soft apple and honey develop into dried fruit and restrained oak spice.", finish: "Medium, clean and gently warming." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Sip neat; two drops of water make its malt and fruit easier to separate." },
    foodPairings: ["paneer tikka", "chicken seekh", "apple tart", "roasted almonds"], whyBuyThis: "A younger Glenfarclas shows the direct-fired, sherry-wood house style without great weight.",
    faqs: [{ question: "Who owns Glenfarclas?", answer: "The Grant family has owned and managed the distillery since 1865." }, { question: "Is it a ten-year-old Scotch?", answer: "Yes. The stated expression carries a minimum ten-year age." }],
    metaTitle: "Glenfarclas 10 Year Price, Taste & Review | BevOry", metaDescription: "Glenfarclas 10 offers malt, apple and soft sherry spice. Pair with paneer tikka; check city prices on BevOry."
  },
  "glenfarclas-glenfarclas-12-year-scotch-whisky-b6890c8": {
    productName: "Glenfarclas 12 Year", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Glenfarclas 12 gives the Grant family's Speyside style more sherry depth, with dried fruit, malt and warming spice. It remains structured rather than syrupy.",
    craftStory: "At the foot of Ben Rinnes, Glenfarclas uses direct-fired copper pot stills and European oak Oloroso sherry casks from Spain. The family-owned distillery has worked with this approach across generations since the Grants took ownership in 1865.",
    tastingNotes: { nose: "Malt, dried fruit and gentle oak spice.", palate: "Rounded sherry fruit and honey move into nuts and warming wood.", finish: "Medium-long, with dry spice and lingering malt." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Try neat first, adding a few drops of water to lift the dried-fruit aroma." },
    foodPairings: ["galouti kebab", "mutton seekh", "date-and-walnut cake", "70% dark chocolate"], whyBuyThis: "It offers the Glenfarclas sherry style at a measured age and with good malt definition.",
    faqs: [{ question: "Where is Glenfarclas 12 made?", answer: "At Glenfarclas Distillery near Ben Rinnes in Speyside, Scotland." }, { question: "Does it use sherry casks?", answer: "The distillery is known for European oak casks previously used for Oloroso sherry." }],
    metaTitle: "Glenfarclas 12 Year Price, Taste & Review | BevOry", metaDescription: "Glenfarclas 12 brings dried fruit, honey and sherry oak. Pair with mutton seekh; check city prices on BevOry."
  },
  "glengrant-glen-grant-single-malt-scotch-whisky-arboralis-7404be8": {
    productName: "Glen Grant Arboralis", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Glen Grant Arboralis is bright and floral, with pear, toffee and a little dried fruit. It is an accessible look at the Rothes distillery's orchard-led style.",
    craftStory: "The Glen Grant makes this malt in Rothes, Speyside, using tall copper pot stills with purifiers. Hand-selected ex-bourbon barrels and Oloroso sherry casks build vanilla sweetness and modest dried-fruit depth.",
    tastingNotes: { nose: "Honeysuckle, raisins and lemon citrus.", palate: "Creamy toffee and ripe pear meet butterscotch, oak and light spice.", finish: "Long, with vanilla, pear and a fresh citrus trace." },
    servingGuide: { glassware: "Glencairn or highball glass", idealTemperature: "Room temperature (18–20°C) or chilled highball", recommendation: "Taste neat, or lengthen 45 ml with soda and ice for a fruit-led highball." },
    foodPairings: ["malai paneer tikka", "tandoori chicken", "pear tart", "toasted cashews"], whyBuyThis: "Pear and floral citrus stay distinct even beside the ex-bourbon and sherry wood.",
    faqs: [{ question: "Does Arboralis have an age statement?", answer: "No age statement is part of the standard Arboralis expression." }, { question: "Which casks are used?", answer: "The producer names ex-bourbon barrels and Oloroso sherry casks." }],
    metaTitle: "Glen Grant Arboralis Price, Taste & Review | BevOry", metaDescription: "Glen Grant Arboralis offers pear, toffee and honeysuckle. Pair with malai paneer tikka; check city prices on BevOry."
  },
  "nikka-coffee-grain-a30acce": {
    productName: "Nikka Coffey Grain", category: "Japanese Grain Whisky",
    shortOverview: "Nikka Coffey Grain is creamy and corn-sweet, with vanilla, chocolate and a cleaner finish than its name suggests. 'Coffey' refers to the still, not coffee flavouring.",
    craftStory: "Nikka makes this grain whisky predominantly from corn on traditional Aeneas Coffey continuous stills in Japan. It matures in reused American-oak casks, including refill, remade and re-charred wood, to preserve grain sweetness.",
    tastingNotes: { nose: "Vanilla, sweet grain and a hint of cocoa.", palate: "Creamy corn sweetness opens into toffee, soft oak and chocolate.", finish: "Medium, mellow and clean, with a light woody fade." },
    servingGuide: { glassware: "Glencairn or highball glass", idealTemperature: "Room temperature (18–20°C) or chilled highball", recommendation: "Taste neat; for a lighter serve, use 45 ml with cold soda and plenty of ice." },
    foodPairings: ["chicken malai tikka", "sweet-corn chaat", "caramel custard", "roasted peanuts"], whyBuyThis: "Its old-style Coffey still and corn base make grain whisky the main attraction, not blend filler.",
    faqs: [{ question: "Does Nikka Coffey Grain taste of coffee?", answer: "Not by design. Coffey is the inventor's name attached to the continuous still." }, { question: "Is it a single malt?", answer: "No. It is a grain whisky made predominantly from corn." }],
    metaTitle: "Nikka Coffey Grain Price, Taste & Review | BevOry", metaDescription: "Nikka Coffey Grain shows vanilla, corn sweetness and cocoa. Pair with malai tikka; check indicative city prices on BevOry."
  },
  "nikka-whisky-from-barrel-f390f55": {
    productName: "Nikka From the Barrel", category: "Blended Japanese Whisky",
    shortOverview: "Nikka From the Barrel is compact in the glass but broad in flavour: orange peel, chocolate and oak meet a firm 51.4% ABV. It deserves water in small increments rather than an automatic mixer.",
    craftStory: "Nikka blends more than a hundred malt and grain whiskies, drawing on its Japanese distilleries and Coffey grain spirit. After blending, batches return to casks for a marrying period that integrates their different textures.",
    tastingNotes: { nose: "Oak, vanilla, chocolate and orange peel.", palate: "Thick and sweet at first, then firm oak tannin and a warming grain-spice edge.", finish: "Long, woody and slightly bitter." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour 25–30 ml neat, then add water a few drops at a time to judge its high proof." },
    foodPairings: ["mutton seekh kebab", "tandoori chicken", "orange-dark-chocolate tart", "smoked almonds"], whyBuyThis: "The marrying stage and higher strength produce more depth than its small square bottle suggests.",
    faqs: [{ question: "What strength is From the Barrel?", answer: "Nikka lists it at 51.4% ABV." }, { question: "Is it a single malt?", answer: "No. It blends multiple malt and grain whiskies." }],
    metaTitle: "Nikka From the Barrel Price, Taste & Review | BevOry", metaDescription: "Nikka From the Barrel brings orange, cocoa and firm oak. Pair with mutton seekh; check indicative city prices on BevOry."
  },
  "teeling-small-batch-whiskey-d398bef": {
    productName: "Teeling Small Batch", category: "Blended Irish Whiskey",
    shortOverview: "Teeling Small Batch brings rum-raisin fruit and creamy vanilla to a lively Irish blend. Its spice and 46% strength keep the cask finish from becoming overly sweet.",
    craftStory: "Teeling blends grain and malt whiskey in Dublin after initial maturation in ex-bourbon barrels. The blend then marries in Central American rum casks for up to twelve months; it is triple distilled and non-chill-filtered.",
    tastingNotes: { nose: "Flowers, vanilla, rum raisin and allspice.", palate: "Creamy vanilla gives way to apricot, dried fruit and tingling spice.", finish: "Long and warming, with balanced sweetness, oak and spice." },
    servingGuide: { glassware: "Rocks or Glencairn glass", idealTemperature: "Room temperature (18–20°C) or over ice", recommendation: "Sip neat or over one large cube; use a measured pour in an Irish Coffee." },
    foodPairings: ["tandoori chicken", "mutton seekh", "apricot tart", "spiced cashews"], whyBuyThis: "The rum-cask marriage gives a recognisable dried-fruit note without losing Irish whiskey's easy texture.",
    faqs: [{ question: "Is Teeling Small Batch a rum?", answer: "No. It is Irish whiskey finished in casks that previously held rum." }, { question: "Is it chill-filtered?", answer: "The producer states that Small Batch is non-chill-filtered." }],
    metaTitle: "Teeling Small Batch Price, Taste & Review | BevOry", metaDescription: "Teeling Small Batch has rum raisin, vanilla and apricot. Pair with tandoori chicken; check city prices on BevOry."
  },
  "tullamore-dew-irish-whisky-f6ced28": {
    productName: "Tullamore D.E.W. Original", category: "Blended Irish Whiskey",
    shortOverview: "Tullamore D.E.W. Original blends sweet grain, fruity malt and spicy pot-still whiskey into a gentle Irish pour. It has enough character for a highball without becoming sharp neat.",
    craftStory: "Made in Ireland, this triple-distilled blend brings together three whiskey styles. The producer uses traditional refill barrels, ex-bourbon oak and ex-sherry butts to balance fruit, vanilla and spice.",
    tastingNotes: { nose: "Light orchard fruit, vanilla and a gentle grain sweetness.", palate: "Smooth malt fruit and creamy grain lead into pot-still spice.", finish: "Medium, mellow and lightly warming." },
    servingGuide: { glassware: "Rocks or highball glass", idealTemperature: "Room temperature (18–20°C) or chilled highball", recommendation: "Try 45 ml with ice and soda plus a lime wedge, or sip a small measure neat." },
    foodPairings: ["chicken tikka", "paneer malai tikka", "apple crumble", "roasted cashews"], whyBuyThis: "Its three-whiskey blend gives grain sweetness, malt fruit and pot-still spice in one accessible bottle.",
    faqs: [{ question: "What are the three whiskeys in Tullamore D.E.W.?", answer: "The blend combines grain, malt and pot-still Irish whiskeys." }, { question: "Is it aged only in bourbon casks?", answer: "No. The producer also identifies refill barrels and ex-sherry butts." }],
    metaTitle: "Tullamore D.E.W. Original Price, Taste & Review | BevOry", metaDescription: "Tullamore D.E.W. offers orchard fruit, vanilla and mild spice. Pair with chicken tikka; check city prices on BevOry."
  }
};
