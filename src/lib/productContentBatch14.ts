// Expression-level editorial; research ledger: docs/editorial/product-batch-14-sources.md.
import type { ProductPublicDetail } from "./productContentBatch01.js";

export const PRODUCT_BATCH_CONTENT: Record<string, ProductPublicDetail> = {
  "macallan-the-macallan-18-years-sherry-casks-4b31bc7": {
    productName: "Macallan Sherry Oak 18", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Macallan Sherry Oak 18 is a full-bodied, dried-fruit-led Speyside malt rather than a smoky one. Raisin, orange and ginger sit over mature oak, making this a contemplative pour.",
    craftStory: "The Macallan has distilled on its Easter Elchies estate in Speyside since 1824. This eighteen-year expression matures in hand-selected oak casks seasoned with sherry in Jerez; the distillery's small copper pot stills make a rich spirit suited to extended oak contact.",
    tastingNotes: { nose: "Sultanas, orange peel and cinnamon rise above polished oak.", palate: "Full and rounded, moving from soaked raisins and dates to stem ginger and dark chocolate.", finish: "Long and warming, with dried fruit, ginger and firm oak spice." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour 30 ml neat; let it rest in the glass, then consider a few drops of spring water." },
    foodPairings: ["galouti kebab", "lamb rogan josh", "date-and-walnut cake", "70% dark chocolate"], whyBuyThis: "It puts Jerez-seasoned oak and mature Speyside fruit firmly in the foreground without inventing peat smoke.",
    faqs: [{ question: "Is Macallan Sherry Oak 18 peated?", answer: "No. Its dark-fruit and spice character comes from spirit and sherry-seasoned oak, not peat." }, { question: "Does its release year matter?", answer: "Yes. The label identifies the release; exact tasting details can vary slightly between annual batches." }],
    metaTitle: "Macallan Sherry Oak 18 Price, Taste & Review | BevOry", metaDescription: "Macallan Sherry Oak 18 brings raisin, orange and ginger. Pair with galouti kebab; check indicative city prices on BevOry."
  },
  "macallan-the-macallan-triplecask-12yrs-highland-fe84c54": {
    productName: "Macallan Triple Cask 12", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Macallan Triple Cask 12 has a lighter citrus-and-vanilla profile than Sherry Oak 12. It is the former Fine Oak style, with three wood types giving the malt both freshness and measured spice.",
    craftStory: "At Easter Elchies in Speyside, copper-pot-distilled spirit is matured separately in sherry-seasoned European oak, sherry-seasoned American oak and ex-bourbon American oak. The three cask streams are combined for this archived twelve-year expression.",
    tastingNotes: { nose: "Orange zest, vanilla, melon and a trace of oak spice.", palate: "Silky and medium-bodied, with citrus, light cocoa and sweet malt turning gently nutty.", finish: "Medium-long, clean and slightly dry with vanilla and soft oak." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Sip neat first; a few drops of water lift the citrus without hiding the oak." },
    foodPairings: ["chicken malai tikka", "paneer tikka", "orange-and-almond cake", "roasted cashews"], whyBuyThis: "Three distinct oak treatments give a clear contrast to Macallan's heavier Sherry Oak range.",
    faqs: [{ question: "Is Triple Cask 12 the same as Sherry Oak 12?", answer: "No. Triple Cask adds an ex-bourbon American oak component and is generally lighter and more citrus-led." }, { question: "Was it previously called Fine Oak?", answer: "Yes. The producer describes Triple Cask Matured as the successor name for the Fine Oak range." }],
    metaTitle: "Macallan Triple Cask 12 Price, Taste & Review | BevOry", metaDescription: "Macallan Triple Cask 12 balances citrus, vanilla and cocoa. Pair with chicken malai tikka; check city prices on BevOry."
  },
  "dewars-dewars-white-label-68f0955": {
    productName: "Dewar's White Label", category: "Blended Scotch Whisky",
    shortOverview: "Dewar's White Label is a gentle, honey-and-orchard-fruit Scotch designed for easy drinking. Its light smoke is a background note, not a peated-whisky challenge.",
    craftStory: "Dewar's introduced White Label in 1899. The Scottish blend draws on malt and grain whiskies, including Aberfeldy's honeyed malt; the component spirits are distilled in their respective copper pot and grain column stills before blending and oak maturation.",
    tastingNotes: { nose: "Heather honey, pear, soft vanilla and a faint smoky edge.", palate: "Light and smooth, with citrus, cereal sweetness and a little oak spice.", finish: "Short to medium, softly sweet with a whisper of smoke." },
    servingGuide: { glassware: "Highball or rocks glass", idealTemperature: "Chilled with ice, or room temperature neat", recommendation: "Use 45 ml with cold soda and ice for a brisk highball; taste neat to find the honey note." },
    foodPairings: ["chicken tikka", "masala peanuts", "paneer pakora", "salted caramel tart"], whyBuyThis: "Its approachable honeyed blend works as a neat introduction or an unfussy highball base.",
    faqs: [{ question: "Is Dewar's White Label a single malt?", answer: "No. It is a blended Scotch made from malt and grain whiskies." }, { question: "Is it heavily smoky?", answer: "No. Smoke is subtle beside honey, fruit and vanilla." }],
    metaTitle: "Dewar's White Label Price, Taste & Review | BevOry", metaDescription: "Dewar's White Label offers honey, pear and light smoke. Pair with chicken tikka; check indicative city prices on BevOry."
  },
  "dewars-blended-scotch-whisky-portuguese-smooth-d017da3": {
    productName: "Dewar's Portuguese Smooth", category: "Ruby-Port-Finished Blended Scotch",
    shortOverview: "Dewar's Portuguese Smooth takes the house blend toward red berries and stone fruit. A ruby-port-cask finish makes this eight-year-old notably fruitier than White Label.",
    craftStory: "Malt and grain whiskies aged at least eight years in Scotland are blended and then finished in ruby port casks associated with Portugal's Douro wine trade. Dewar's combines pot-still malt and column-still grain spirit before the finishing stage.",
    tastingNotes: { nose: "Red berries, ripe peach, vanilla and honey.", palate: "Velvety and medium-bodied, with plum, creamy vanilla and soft oak spice.", finish: "Medium and sweet, leaving berry fruit and honey." },
    servingGuide: { glassware: "Glencairn or highball glass", idealTemperature: "Room temperature neat, or chilled over ice", recommendation: "Try 30 ml neat, then compare it over a single large cube or in a soda highball." },
    foodPairings: ["tandoori chicken", "paneer tikka", "plum chutney with kebabs", "dark-chocolate brownie"], whyBuyThis: "Its ruby-port finish adds clear berry character without losing Scotch's cereal core.",
    faqs: [{ question: "Is Portuguese Smooth a port wine?", answer: "No. It is Scotch whisky finished in casks that held ruby port." }, { question: "What age is the whisky?", answer: "The producer states that its malt and grain components were aged at least eight years." }],
    metaTitle: "Dewar's Portuguese Smooth Price, Taste & Review | BevOry", metaDescription: "Dewar's Portuguese Smooth layers berries, peach and honey. Pair with tandoori chicken; check city prices on BevOry."
  },
  "dewars-21yrs-fda8022": {
    productName: "Dewar's 21 Year", category: "Oloroso-Finished Blended Scotch",
    shortOverview: "Dewar's 21 is a mature blend of vine fruit, honey and warming spice. Its Oloroso finish adds depth without turning the whisky into a single-malt imitation.",
    craftStory: "Malt and grain whiskies spend at least twenty-one years in oak before Dewar's four-stage Double Double blending and maturation sequence. A final finish in Oloroso sherry casks adds dried-fruit weight to the Scottish blend.",
    tastingNotes: { nose: "Vine fruit, honeyed malt, cocoa and orange peel.", palate: "Silky, with caramel, toasted nuts, tropical fruit and cinnamon.", finish: "Long and spiced, with liquorice and dried fruit." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat in a small measure, adding a few drops of water only after the first sip." },
    foodPairings: ["galouti kebab", "mutton seekh", "lamb rogan josh", "70% dark chocolate"], whyBuyThis: "The four-stage ageing and Oloroso finish give a recognisably richer Dewar's style.",
    faqs: [{ question: "Is Dewar's 21 a single malt?", answer: "No. It blends Scottish malt and grain whiskies." }, { question: "Which cask finish does this edition use?", answer: "The producer describes the Double Double 21 Year as Oloroso-sherry-cask finished." }],
    metaTitle: "Dewar's 21 Year Price, Taste & Review | BevOry", metaDescription: "Dewar's 21 brings dried fruit, honey and spice. Pair with galouti kebab; check indicative city prices on BevOry."
  },
  "dewars-27-yrs-79ac454": {
    productName: "Dewar's 27 Year", category: "Palo-Cortado-Finished Blended Scotch",
    shortOverview: "Dewar's 27 offers apricot, fig and toasted almond in a polished, long-aged blend. Palo Cortado sherry casks give a drier nutty edge than a sweet PX finish.",
    craftStory: "Scottish malt and grain whiskies aged at least twenty-seven years pass through Dewar's four-stage Double Double process. The blend is then finished in Palo Cortado sherry casks, preserving the fruit while adding almond and oak detail.",
    tastingNotes: { nose: "Flowers, citrus, honey and ripe apricot.", palate: "Creamy caramel and orange peel develop into fig, almond and cinnamon.", finish: "Long and silky, with honeyed stone fruit and restrained oak." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Taste 30 ml neat after a short rest; use only a few drops of water if desired." },
    foodPairings: ["galouti kebab", "mutton seekh", "fig-and-almond tart", "70% dark chocolate"], whyBuyThis: "Palo Cortado's nutty dryness gives this mature blend a distinct finish within the Double Double range.",
    faqs: [{ question: "What is Palo Cortado?", answer: "It is a style of sherry; casks that held it provide the finishing influence here." }, { question: "Is every component at least 27 years old?", answer: "The producer identifies this as a 27-year-old blended Scotch, so its youngest whisky meets that age statement." }],
    metaTitle: "Dewar's 27 Year Price, Taste & Review | BevOry", metaDescription: "Dewar's 27 layers apricot, fig and almond. Pair with mutton seekh; check indicative city prices on BevOry."
  },
  "dewars-dewar-blended-scotch-aged-32-years-2c23532": {
    productName: "Dewar's 32 Year", category: "PX-Sherry-Finished Blended Scotch",
    shortOverview: "Dewar's 32 is the darker, dessert-spiced member of the Double Double family. Treacle, fig and cocoa come from long maturation followed by Pedro Ximénez cask finishing.",
    craftStory: "Malt and grain whiskies aged at least thirty-two years in Scotland undergo Dewar's four-stage ageing and marrying sequence. A final period in Pedro Ximénez sherry casks deepens their dried-fruit and brown-sugar notes.",
    tastingNotes: { nose: "Treacle, dried fig, vanilla and clove.", palate: "Dense but silky, with orange peel, brown sugar, dark cocoa and a subtle smoky thread.", finish: "Long, warming and gently dry with coffee and oak." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour a small neat measure and let it open; spring water is optional, sweet mixers are not." },
    foodPairings: ["lamb rogan josh", "galouti kebab", "date-and-walnut cake", "75% dark chocolate"], whyBuyThis: "Its PX finish gives a precise dark-fruit contrast to the Palo Cortado-finished 27 Year.",
    faqs: [{ question: "Does Dewar's 32 use PX casks?", answer: "Yes. The Double Double 32 receives a Pedro Ximénez sherry-cask finish." }, { question: "Is it a blended malt?", answer: "No. The producer classifies it as blended Scotch containing malt and grain whiskies." }],
    metaTitle: "Dewar's 32 Year Price, Taste & Review | BevOry", metaDescription: "Dewar's 32 brings fig, treacle and cocoa. Pair with lamb rogan josh; check indicative city prices on BevOry."
  },
  "dewars-dewar-blended-scotch-36-years-ca24c6e": {
    productName: "Dewar's 36 Year", category: "Madeira-Finished Blended Scotch",
    shortOverview: "Dewar's 36 brings vanilla, peach and toasted sugar to the prestige blend's long-aged texture. Madeira-cask finishing distinguishes it from the sherry-finished 27 and 32 Year releases.",
    craftStory: "Dewar's matures Scottish malt and grain whisky for at least thirty-six years, using its four-stage Double Double method to marry the components. Madeira casks provide the final fruit-and-spice layer.",
    tastingNotes: { nose: "Ripe peach, vanilla, honeyed oak and toasted sugar.", palate: "Velvety fruit and coconut oil broaden into cinnamon, honey and warm spice.", finish: "Long and smooth, with toasted sugar and a delicate smoky trace." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve 25–30 ml neat; wait several minutes before tasting and add water sparingly." },
    foodPairings: ["galouti kebab", "mutton seekh", "peach-and-almond tart", "70% dark chocolate"], whyBuyThis: "Madeira finishing adds a different fruit register to one of Dewar's oldest blends.",
    faqs: [{ question: "Is Dewar's 36 finished in sherry?", answer: "The producer specifies Madeira casks for the Double Double 36 Year." }, { question: "Is the 36-year age statement for the youngest whisky?", answer: "Yes. Scotch age statements refer to the youngest spirit in the blend." }],
    metaTitle: "Dewar's 36 Year Price, Taste & Review | BevOry", metaDescription: "Dewar's 36 layers peach, vanilla and Madeira-cask spice. Pair with galouti kebab; check city prices on BevOry."
  },
  "glenfiddich-the-glenfiddich-12-yrs-f195313": {
    productName: "Glenfiddich 12 Year", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Glenfiddich 12 is known for fresh pear rather than smoke or heavy sherry. Malt sweetness and a gentle oak finish make it an accessible Speyside reference point.",
    craftStory: "William Grant founded Glenfiddich in Dufftown in 1887. Its copper-pot spirit matures for twelve years in American bourbon and Spanish sherry oak before being married in oak tuns for a consistent orchard-fruit style.",
    tastingNotes: { nose: "Fresh pear, green apple and a little malt.", palate: "Creamy and light, with orchard fruit, butterscotch and soft oak.", finish: "Medium, smooth and mildly sweet with a clean woody edge." },
    servingGuide: { glassware: "Glencairn or highball glass", idealTemperature: "Room temperature neat, or chilled as a highball", recommendation: "Taste neat first, then try 45 ml with cold soda if you want a lighter serve." },
    foodPairings: ["malai paneer tikka", "tandoori chicken", "apple tart", "roasted almonds"], whyBuyThis: "Its clear pear note makes Speyside's lighter side easy to identify.",
    faqs: [{ question: "Is Glenfiddich 12 smoky?", answer: "It is not presented as a peated malt; pear, malt and oak lead its profile." }, { question: "Which casks does it use?", answer: "The producer cites American bourbon and Spanish sherry oak." }],
    metaTitle: "Glenfiddich 12 Year Price, Taste & Review | BevOry", metaDescription: "Glenfiddich 12 tastes of pear, apple and soft oak. Pair with malai paneer tikka; check city prices on BevOry."
  },
  "glenfiddich-select-cask-05e90c7": {
    productName: "Glenfiddich Select Cask", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Glenfiddich Select Cask is a travel-retail malt built for citrus freshness and smooth texture. It is a separate expression from the age-stated Glenfiddich 12.",
    craftStory: "Glenfiddich's Dufftown copper-pot spirit is drawn from selected European oak, ex-bourbon and Californian red-wine casks for the Select Cask recipe. The casks are married in a Solera vat, a method Glenfiddich also uses elsewhere in its range.",
    tastingNotes: { nose: "Orange peel, vanilla and light orchard fruit.", palate: "Smooth, lightly creamy citrus moves into caramel and delicate oak.", finish: "Medium and clean, with lingering fruit and soft spice." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat to compare its citrus and oak; a drop of water can open the fruit." },
    foodPairings: ["chicken malai tikka", "paneer tikka", "orange-and-almond cake", "roasted cashews"], whyBuyThis: "Its mixed-cask, Solera-married style offers a fruitier detour from the standard 12 Year.",
    faqs: [{ question: "Does Select Cask carry an age statement?", answer: "No age is declared in the product name; it should not be treated as a twelve-year bottling." }, { question: "Is it a single malt?", answer: "Yes. The whisky is made at Glenfiddich from malted-barley spirit." }],
    metaTitle: "Glenfiddich Select Cask Price, Taste & Review | BevOry", metaDescription: "Glenfiddich Select Cask brings orange, vanilla and soft oak. Pair with chicken malai tikka; check prices on BevOry."
  },
  "johnnie-walker-and-sons-king-georg-v-50f12db": {
    productName: "John Walker King George V", category: "Luxury Blended Scotch Whisky",
    shortOverview: "King George V is a complex, gently smoky John Walker & Sons blend with dried fruit and dark chocolate. It commemorates the first Royal Warrant granted to the firm in 1934.",
    craftStory: "John Walker & Sons blends scarce Scottish malt and grain whiskies, including casks selected to evoke distilleries operating during George V's reign. Components are pot- or column-distilled according to style and matured in oak; a subtle smoky strand is part of the finished blend.",
    tastingNotes: { nose: "Raisin, orange, light smoke and polished oak.", palate: "Silky dried fruit and dark chocolate gather spice and a restrained smoky note.", finish: "Long, warming and complex with fruit and soft smoke." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve a small neat measure, allowing several minutes in the glass before adding spring water." },
    foodPairings: ["galouti kebab", "mutton seekh", "lamb rogan josh", "75% dark chocolate"], whyBuyThis: "It offers the Walker blending house at collector scale without masking its fruit under smoke.",
    faqs: [{ question: "Why is it named King George V?", answer: "John Walker & Sons received its first Royal Warrant from King George V in 1934." }, { question: "Is it a single malt?", answer: "No. It is a blend of Scottish malt and grain whiskies." }],
    metaTitle: "John Walker King George V Price, Taste & Review | BevOry", metaDescription: "King George V layers dried fruit, cocoa and soft smoke. Pair with galouti kebab; check indicative city prices on BevOry."
  },
  "johnnie-walker-johnnie-walker-and-sons-odyssey-blended-scotch-24cbc65": {
    productName: "John Walker Odyssey", category: "Luxury Blended Malt Scotch Whisky",
    shortOverview: "Odyssey is a rare John Walker & Sons blend built around a small selection of mature single malts. Honey, berry fruit and spice take priority over the assertive smoke of younger Walker blends.",
    craftStory: "The expression draws on three Scottish single malts matured in oak and blended to commemorate the Walker family's global voyages. Copper pot distillation and long cask ageing supply the honeyed malt core; the presentation bottle is designed to rock with a ship's motion.",
    tastingNotes: { nose: "Honey, ripe berry fruit and a light floral note.", palate: "Creamy malt turns to dark berries, caramel and warming spice.", finish: "Long and layered, with fruit, honey and fine oak." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Drink neat in a modest pour; add spring water only after tasting it undiluted." },
    foodPairings: ["galouti kebab", "lamb chops", "fig-and-walnut tart", "70% dark chocolate"], whyBuyThis: "The three-malt construction gives Odyssey a different centre of gravity from Walker's larger malt-and-grain blends.",
    faqs: [{ question: "Is Odyssey a single malt?", answer: "No. It combines three mature Scottish single malts and is therefore a blended malt Scotch." }, { question: "Should it go into cocktails?", answer: "Neat service preserves the detail of this rare bottling." }],
    metaTitle: "John Walker Odyssey Price, Taste & Review | BevOry", metaDescription: "John Walker Odyssey offers honey, berries and mature oak. Pair with galouti kebab; check city prices on BevOry."
  },
  "johnnie-walker-swing-220c5e4": {
    productName: "Johnnie Walker Swing", category: "Blended Scotch Whisky",
    shortOverview: "Johnnie Walker Swing is a soft, honeyed blend with a distinctive rocking bottle. Orchard fruit and vanilla make it gentler than the brand's smokier expressions.",
    craftStory: "Johnnie Walker developed Swing for ocean-liner travel in the twentieth century; the curved base rocks without easily toppling. Scottish pot-still malts and column-still grain whiskies are matured in oak and blended into a smooth, fruit-led style.",
    tastingNotes: { nose: "Honey, pear and vanilla with restrained oak.", palate: "Rounded apple and caramel lead into cinnamon and a faint smoky accent.", finish: "Medium, warming and lightly spiced." },
    servingGuide: { glassware: "Rocks or highball glass", idealTemperature: "Room temperature neat, or chilled over ice", recommendation: "Taste 30 ml neat, or lengthen 45 ml with cold soda and plenty of ice." },
    foodPairings: ["tandoori chicken", "paneer tikka", "masala cashews", "apple crumble"], whyBuyThis: "Its mellow flavour and practical maritime bottle make it a distinctive Walker blend.",
    faqs: [{ question: "Why does the bottle rock?", answer: "Its rounded base was designed to move with a ship rather than topple readily." }, { question: "Is Swing peated?", answer: "Only a modest smoky accent appears; honey and fruit are more prominent." }],
    metaTitle: "Johnnie Walker Swing Price, Taste & Review | BevOry", metaDescription: "Johnnie Walker Swing tastes of honey, pear and soft spice. Pair with tandoori chicken; check city prices on BevOry."
  },
  "johnnie-walker-johnnie-walker-platinum-label-8ae0ec9": {
    productName: "Johnnie Walker Platinum Label", category: "18-Year Blended Scotch Whisky",
    shortOverview: "Platinum Label is the earlier name of Johnnie Walker's eighteen-year-old blend. Honey, nuts and dried fruit carry more weight than the house's familiar smoke.",
    craftStory: "Scottish malt and grain whiskies aged at least eighteen years in oak are combined by Johnnie Walker's blending team. This older Platinum Label presentation preceded the current 18 Year branding, so bottle labels should identify the edition being compared.",
    tastingNotes: { nose: "Honey, dried fruit, soft vanilla and almond.", palate: "Smooth and full, with malt, caramel, toasted nuts and measured oak spice.", finish: "Long, gently sweet and warming with a faint smoky trace." },
    servingGuide: { glassware: "Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Taste neat; a few drops of water may separate honey from oak." },
    foodPairings: ["mutton seekh", "galouti kebab", "almond halwa", "70% dark chocolate"], whyBuyThis: "The age statement gives a rounded, mature Walker blend without the rarity premium of its collector editions.",
    faqs: [{ question: "Is Platinum Label an 18-year-old whisky?", answer: "Yes. Platinum Label is an earlier presentation of Johnnie Walker's 18 Year blend." }, { question: "Is this a single malt?", answer: "No. It is a blended Scotch combining malt and grain whisky." }],
    metaTitle: "Johnnie Walker Platinum Label Price, Taste & Review | BevOry", metaDescription: "Platinum Label 18 brings honey, nuts and dried fruit. Pair with mutton seekh; check city prices on BevOry."
  },
  "royal-salute-21-yrs-0e3dc6d": {
    productName: "Royal Salute 21 Year", category: "Luxury Blended Scotch Whisky",
    shortOverview: "Royal Salute 21 Year, the Signature Blend, balances pear, orange marmalade and a little smoke. It was created for Queen Elizabeth II's 1953 coronation and remains the house reference.",
    craftStory: "Chivas Brothers blends Scottish pot-still malt and column-still grain whiskies, each at least twenty-one years old, into the Signature Blend. Long oak maturation gives fruit and spice; the blue flagon recalls the Crown Jewels.",
    tastingNotes: { nose: "Pear, citrus, autumn flowers, vanilla and light sherry.", palate: "Orange marmalade and fresh pear turn to hazelnut, spice and soft smoke.", finish: "Long, dry and gently spicy." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat and give the pear and floral notes time to open; water is optional." },
    foodPairings: ["galouti kebab", "mutton seekh", "orange-and-almond cake", "70% dark chocolate"], whyBuyThis: "It is the defining 21-year luxury blend behind the Royal Salute name.",
    faqs: [{ question: "Is Royal Salute 21 a single malt?", answer: "No. The Signature Blend contains Scottish malt and grain whiskies." }, { question: "Why 21 years?", answer: "Royal Salute launched as a coronation tribute, with every component aged at least twenty-one years." }],
    metaTitle: "Royal Salute 21 Year Price, Taste & Review | BevOry", metaDescription: "Royal Salute 21 balances pear, marmalade and soft smoke. Pair with galouti kebab; check city prices on BevOry."
  },
  "royal-salute-25-years-4564ae3": {
    productName: "Royal Salute 25 Year", category: "Luxury Blended Scotch Whisky",
    shortOverview: "Royal Salute 25, the Treasured Blend, is deeper and darker than the house's 21 Year. Stewed fruit, fig and chocolate are followed by a dry, spicy close.",
    craftStory: "Chivas Brothers selects Scottish malt and grain whiskies matured at least twenty-five years in oak for this blend. Its long ageing and measured cask selection build concentrated fruit without treating any one distillery as the whole recipe.",
    tastingNotes: { nose: "Blueberry jam, stewed fruit, marzipan, cinnamon and soft liquorice.", palate: "Rich prune and fig turn to treacle toffee and dark chocolate.", finish: "Long, dry and slightly spicy." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour a small neat measure and let the dried-fruit notes open before adding any water." },
    foodPairings: ["galouti kebab", "mutton ghee roast", "fig-and-walnut cake", "75% dark chocolate"], whyBuyThis: "Its ripe-fruit depth offers a clear step up in intensity from the Signature Blend.",
    faqs: [{ question: "Is Royal Salute 25 a single malt?", answer: "No. The Treasured Blend combines Scottish malt and grain whiskies." }, { question: "How does it differ from Royal Salute 21?", answer: "It is older and more concentrated, with prune, fig and chocolate rather than the 21's lighter pear-and-marmalade balance." }],
    metaTitle: "Royal Salute 25 Year Price, Taste & Review | BevOry", metaDescription: "Royal Salute 25 brings prune, fig and dark chocolate. Pair with mutton ghee roast; check city prices on BevOry."
  },
  "royal-salute-32-years-9a82873": {
    productName: "Royal Salute 32 Year", category: "Luxury Blended Scotch Whisky",
    shortOverview: "Royal Salute 32, the Precious Jewel, is a mature blend with soft orange, pear and ginger-cake notes. Its strength lies in long, poised flavour rather than heavy smoke.",
    craftStory: "The Royal Salute team draws rare Scottish whiskies from several regions, with every component at least thirty-two years old. Pot-still malt and column-still grain spirits spend decades in oak before blending; the expression honours the Honours of Scotland.",
    tastingNotes: { nose: "Orange, ripe pear and moist ginger cake.", palate: "Silky peach syrup and caramel toffee develop cinnamon and a little dark chocolate.", finish: "Exceptionally long, warm and fruit-led with fine oak." },
    servingGuide: { glassware: "Glencairn or small crystal glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat, letting the glass stand for several minutes; add only a few drops of water if needed." },
    foodPairings: ["galouti kebab", "lamb chops", "ginger-and-pear tart", "70% dark chocolate"], whyBuyThis: "It offers Royal Salute's fruit-and-spice profile with unusually extended oak maturity.",
    faqs: [{ question: "What does Precious Jewel refer to?", answer: "The expression takes inspiration from the Honours of Scotland, Scotland's crown jewels." }, { question: "Are all its whiskies at least 32 years old?", answer: "Yes. The age statement refers to the youngest whisky in the blend." }],
    metaTitle: "Royal Salute 32 Year Price, Taste & Review | BevOry", metaDescription: "Royal Salute 32 offers pear, peach and ginger cake. Pair with galouti kebab; check indicative city prices on BevOry."
  },
  "royal-salute-royal-salute-38-yo-blended-scotch-whisky-e7c85e3": {
    productName: "Royal Salute 38 Year", category: "Luxury Blended Scotch Whisky",
    shortOverview: "Royal Salute 38, Stone of Destiny, is an oak-rich blend with dried fruit, cedar and almond. The long, dry finish is best followed slowly rather than buried under a mixer.",
    craftStory: "Rare malt and grain whiskies from Scotland age for at least thirty-eight years before blending. The name refers to the historic Stone of Destiny associated with Scottish coronations; the mature oak influence is a central part of this release.",
    tastingNotes: { nose: "Dried fruit, deep floral notes and assertive baking spice.", palate: "Full and rich, with cedar, almond and sherried-oak character.", finish: "Very long, woody and warming, with lingering fruit." },
    servingGuide: { glassware: "Small crystal or Glencairn glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve 25–30 ml neat; wait before tasting and use spring water only by the drop." },
    foodPairings: ["galouti kebab", "lamb rogan josh", "roasted almonds", "75% dark chocolate"], whyBuyThis: "Its cedar-and-almond structure shows how the Royal Salute blend changes with almost four decades in oak.",
    faqs: [{ question: "What is Stone of Destiny?", answer: "It is the historic Scottish coronation stone that inspired the name of this 38-year blend." }, { question: "Is this a peated Scotch?", answer: "The producer leads with dried fruit, floral spice and sherried oak rather than a peat-forward profile." }],
    metaTitle: "Royal Salute 38 Year Price, Taste & Review | BevOry", metaDescription: "Royal Salute 38 brings dried fruit, cedar and almond. Pair with lamb rogan josh; check city prices on BevOry."
  },
  "corona-corona-a887b95": {
    productName: "Corona Extra", category: "Mexican Pale Lager",
    shortOverview: "Corona Extra is a light, crisp Mexican lager with gentle grain sweetness and a restrained hop bite. Its familiar lime-wedge serve adds citrus, but the beer is clean and easygoing without it.",
    craftStory: "Grupo Modelo began brewing Corona in Mexico City in 1925. Barley-malt wort is fermented with lager yeast and cold-conditioned; the pale beer is bottled in clear glass, so keep it away from bright light to protect its flavour.",
    tastingNotes: { nose: "Light grain, a little hay and faint citrus.", palate: "Lean and fizzy, with mild malt sweetness and low hop bitterness.", finish: "Short, dry and refreshing with a clean grain note." },
    servingGuide: { glassware: "Chilled lager glass or bottle", idealTemperature: "Cold (4–6°C)", recommendation: "Pour into a clean chilled glass; add a lime wedge only if you want a sharper citrus finish." },
    foodPairings: ["tandoori prawns", "coastal rava-fried fish", "masala corn", "chilli-lime peanuts"], whyBuyThis: "Its light body and dry finish suit spicy, citrus-led snacks without competing for attention.",
    faqs: [{ question: "Is Corona Extra a wheat beer?", answer: "No. It is a pale lager." }, { question: "Must it be served with lime?", answer: "No. Lime is a serving custom, not a required ingredient of the beer." }],
    metaTitle: "Corona Extra Price, Taste & Review | BevOry", metaDescription: "Corona Extra is crisp, light and gently malty. Pair with rava-fried fish and lime; check indicative city prices on BevOry."
  },
  "heineken-silver-malt-lager-002816a": {
    productName: "Heineken Silver", category: "Premium Pale Lager",
    shortOverview: "Heineken Silver keeps the brand's faint fruity aroma but lowers the bitterness. It is built as a smoother, colder-lagered alternative to Heineken Original.",
    craftStory: "Heineken brews Silver with barley malt, water, hops and its proprietary A-Yeast. Lagering around minus 1°C encourages removal of rough-tasting tannins and proteins, shaping a leaner finish than the Original recipe.",
    tastingNotes: { nose: "Subtle fruit, fresh malt and a small hop lift.", palate: "Light-bodied and crisp, with soft cereal sweetness and restrained bitterness.", finish: "Short, clean and refreshing." },
    servingGuide: { glassware: "Chilled lager glass", idealTemperature: "Cold (4–6°C)", recommendation: "Serve cold in a clean glass rather than over ice, which would flatten the malt flavour." },
    foodPairings: ["tandoori chicken", "paneer tikka", "masala fries", "chilli-lime peanuts"], whyBuyThis: "It offers the familiar Heineken aroma in an easier, lower-bitter lager.",
    faqs: [{ question: "How is Silver different from Original?", answer: "Its colder lagering process produces a smoother, less bitter profile." }, { question: "Is Heineken Silver a wheat beer?", answer: "No. It is a barley-malt lager." }],
    metaTitle: "Heineken Silver Price, Taste & Review | BevOry", metaDescription: "Heineken Silver is smooth, crisp and less bitter. Pair with paneer tikka; check indicative city prices on BevOry."
  },
  "kingfisher-ultra-witbier-6c7ba98": {
    productName: "Kingfisher Ultra Witbier", category: "Belgian-Style Wheat Beer",
    shortOverview: "Kingfisher Ultra Witbier is a citrus-spiced wheat beer, not another pale lager. Orange and coriander make its soft, cloudy body particularly useful alongside Indian appetisers.",
    craftStory: "United Breweries introduced this Indian-brewed Belgian-style witbier in 2019. The brewer describes natural orange and coriander extracts, Belgian-sourced spices and aromatic American hops in the wheat-beer recipe.",
    tastingNotes: { nose: "Orange peel, coriander seed and soft wheat.", palate: "Creamy and lightly fizzy, with sweet citrus, gentle spice and low bitterness.", finish: "Short and refreshing, leaving orange and coriander." },
    servingGuide: { glassware: "Wheat-beer glass", idealTemperature: "Cool (5–7°C)", recommendation: "Pour gently into a clean tall glass, leaving a little room for its soft foam." },
    foodPairings: ["malai paneer tikka", "tandoori prawns", "cucumber chaat", "coastal rava-fried fish"], whyBuyThis: "Its orange-and-coriander profile has a more direct food match with Indian snacks than a plain lager.",
    faqs: [{ question: "Is Kingfisher Ultra Witbier a lager?", answer: "No. It is a Belgian-style wheat beer." }, { question: "What gives it its citrus aroma?", answer: "The brewer cites natural orange extract alongside coriander and other spices." }],
    metaTitle: "Kingfisher Ultra Witbier Price, Taste & Review | BevOry", metaDescription: "Kingfisher Ultra Witbier brings orange, coriander and soft wheat. Pair with malai paneer tikka; check city prices on BevOry."
  },
  "bacardi-superior-imported-ed80b70": {
    productName: "Bacardí Superior", category: "White Rum",
    shortOverview: "Bacardí Superior is light, dry and aromatic rather than sugary or heavily oaked. Its almond-and-lime edge makes it a practical base for a Daiquiri or Mojito.",
    craftStory: "Don Facundo Bacardí Massó launched the recipe in Santiago de Cuba in 1862. Molasses-based spirit is distilled, aged briefly in American white oak and charcoal-filtered to keep the rum clear and clean-tasting.",
    tastingNotes: { nose: "Almond, fresh lime and light fruit.", palate: "Smooth, light and creamy, with vanilla and a citrus lift.", finish: "Short, dry and clean." },
    servingGuide: { glassware: "Coupe or highball glass", idealTemperature: "Cold in a mixed drink", recommendation: "Shake 60 ml with 25 ml fresh lime and 15 ml sugar syrup for a Daiquiri; strain cold." },
    foodPairings: ["tandoori prawns", "coastal rava-fried fish", "cucumber chaat", "lime-chilli corn"], whyBuyThis: "Its dry finish lets fresh lime and mint stay prominent in classic cocktails.",
    faqs: [{ question: "Is Bacardí Superior an aged rum?", answer: "It spends time in American white oak and is filtered to a clear colour." }, { question: "Does the rum taste sweet?", answer: "It is relatively dry and light, with subtle almond, citrus and vanilla notes." }],
    metaTitle: "Bacardí Superior Price, Taste & Review | BevOry", metaDescription: "Bacardí Superior is dry, clean and almond-citrus led. Pair with tandoori prawns; check indicative city prices on BevOry."
  },
  "patron-el-alto-5ee6dcd": {
    productName: "Patrón El Alto", category: "Aged 100% Agave Tequila Blend",
    shortOverview: "Patrón El Alto is a rich blend of reposado, añejo and extra añejo tequila rather than a single-age expression. Apricot, vanilla and cooked agave make it a slow-sipping highland tequila.",
    craftStory: "Blue Weber agave from the Atotonilco El Alto highlands of Jalisco is baked in clay ovens, crushed and distilled at Hacienda Patrón. The blend includes extra añejo aged four years alongside añejo and reposado components matured in oak.",
    tastingNotes: { nose: "Cooked agave, dried fruit and toasted wood.", palate: "Smooth apricot and vanilla move toward almond and honeyed agave.", finish: "Long and gently sweet, with oak and cooked-agave warmth." },
    servingGuide: { glassware: "Tequila tasting glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Sip 25–30 ml neat; avoid sweet mixers that would conceal the aged components." },
    foodPairings: ["tandoori prawns", "malai paneer tikka", "almond kulfi", "70% dark chocolate"], whyBuyThis: "Its blend of three ageing categories makes El Alto unusually layered without losing agave character.",
    faqs: [{ question: "Is El Alto only an extra añejo?", answer: "No. It blends extra añejo with añejo and reposado tequila." }, { question: "Where is its agave grown?", answer: "Patrón identifies the high-altitude Atotonilco El Alto region of Jalisco." }],
    metaTitle: "Patrón El Alto Price, Taste & Review | BevOry", metaDescription: "Patrón El Alto layers apricot, vanilla and cooked agave. Pair with tandoori prawns; check city prices on BevOry."
  },
  "patron-el-cielo-43cdf31": {
    productName: "Patrón El Cielo", category: "100% Agave Silver Tequila",
    shortOverview: "Patrón El Cielo is a four-times-distilled silver tequila that still keeps cooked-agave flavour. Orange rind and cinnamon sit behind a light, unusually smooth texture.",
    craftStory: "Hacienda Patrón makes it from Blue Weber agave in Jalisco using cooking, fermentation and a four-pass distillation process. It is an unaged silver expression; wood is not the source of its vanilla-like aroma.",
    tastingNotes: { nose: "Cooked agave, orange rind, cinnamon and a little vanilla.", palate: "Light and smooth, with soft agave sweetness and bright citrus.", finish: "Long for a silver tequila, clean and gently spiced." },
    servingGuide: { glassware: "Tequila tasting or rocks glass", idealTemperature: "Cool (12–16°C) or over one large cube", recommendation: "Taste neat first, then try a single large cube and an orange slice." },
    foodPairings: ["tandoori prawns", "malai paneer tikka", "coastal rava-fried fish", "cucumber chaat"], whyBuyThis: "Its extra distillation softens the texture without erasing cooked agave.",
    faqs: [{ question: "Is El Cielo aged in oak?", answer: "No. It is a silver tequila, so do not mistake its soft vanilla note for an oak-age statement." }, { question: "How many times is it distilled?", answer: "Patrón describes a four-times-distilled process." }],
    metaTitle: "Patrón El Cielo Price, Taste & Review | BevOry", metaDescription: "Patrón El Cielo brings cooked agave, orange and cinnamon. Pair with tandoori prawns; check city prices on BevOry."
  },
  "patron-anejo-053085f": {
    productName: "Patrón Añejo", category: "100% Agave Añejo Tequila",
    shortOverview: "Patrón Añejo keeps cooked agave visible beneath caramel, vanilla and wood spice. At least a year in oak gives it a richer, slower-sipping profile than Patrón Silver.",
    craftStory: "Blue Weber agave is cooked and distilled at Hacienda Patrón in Jalisco. The tequila rests for at least twelve months in selected small white-oak barrels; the producer also describes French, Hungarian and previously used American whiskey oak across versions of its añejo programme.",
    tastingNotes: { nose: "Cooked agave, caramel and vanilla.", palate: "Velvety oak and sweet agave move into chocolate and warm spice.", finish: "Long, woody and gently sweet." },
    servingGuide: { glassware: "Tequila tasting or rocks glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Sip neat; use 50 ml with agave syrup and bitters only if you prefer an Añejo Old Fashioned." },
    foodPairings: ["tandoori chicken", "mutton seekh", "caramel flan", "70% dark chocolate"], whyBuyThis: "It has enough oak for whisky drinkers while retaining a clear agave core.",
    faqs: [{ question: "How long is Patrón Añejo aged?", answer: "The producer states at least twelve months in oak barrels." }, { question: "Is it made from 100% agave?", answer: "Yes. Patrón identifies Blue Weber agave as its tequila base." }],
    metaTitle: "Patrón Añejo Price, Taste & Review | BevOry", metaDescription: "Patrón Añejo balances agave, caramel and oak spice. Pair with mutton seekh; check indicative city prices on BevOry."
  },
  "patron-xo-cafe-cfba92f": {
    productName: "Patrón XO Café", category: "Coffee-Flavoured Tequila Liqueur",
    shortOverview: "Patrón XO Café combines tequila and Arabica coffee in a bittersweet liqueur. It is not plain tequila, and its roasted-coffee character is useful in an Espresso Martini.",
    craftStory: "Patrón blends its Jalisco-made Silver tequila, distilled from Blue Weber agave, with natural Arabica-coffee essence. The coffee addition defines this product; no oak-age or single-estate coffee claim is needed to explain it.",
    tastingNotes: { nose: "Fresh roasted coffee, cocoa and a light cooked-agave note.", palate: "Velvety coffee bitterness meets moderate sweetness and a touch of chocolate.", finish: "Medium-long, with espresso roast and lingering agave warmth." },
    servingGuide: { glassware: "Small rocks or coupe glass", idealTemperature: "Chilled (6–10°C)", recommendation: "Sip 30 ml over one cube, or shake 30 ml with 30 ml fresh espresso and 15 ml vodka for a coffee-forward Martini." },
    foodPairings: ["coffee kulfi", "dark-chocolate brownie", "almond biscotti", "tiramisu"], whyBuyThis: "It provides genuine coffee intensity while retaining a recognizable tequila base.",
    faqs: [{ question: "Is XO Café regular tequila?", answer: "No. It is a coffee-flavoured tequila liqueur." }, { question: "Is it currently made?", answer: "Patrón says it has been re-released for a limited time in select markets; current local stock should be checked with retailers." }],
    metaTitle: "Patrón XO Café Price, Taste & Review | BevOry", metaDescription: "Patrón XO Café brings espresso, cocoa and agave. Pair with coffee kulfi; check indicative city prices on BevOry."
  },
  "campari-biller-bitters-003792e": {
    productName: "Campari Bitter", category: "Italian Bitter Aperitif",
    shortOverview: "Campari Bitter is an orange-and-herb aperitif with a firm bittersweet grip. It anchors the Negroni and Americano, but a soda serve makes its botanical edge easier to read.",
    craftStory: "Gaspare Campari established the red bitter in nineteenth-century Italy; the precise botanical recipe remains proprietary. Rather than claiming a cask or distillation process the brand does not disclose, the useful distinction is its infusion of bitter herbs, aromatic plants and fruit into an alcoholic aperitif.",
    tastingNotes: { nose: "Orange peel, herbs and a floral lift.", palate: "Bitter orange and herbal roots arrive first, then measured sweetness and a velvety texture.", finish: "Long and pleasantly bitter, with orange and woody herb notes." },
    servingGuide: { glassware: "Rocks glass", idealTemperature: "Chilled over ice", recommendation: "Build 45 ml Campari with 90 ml soda over ice and an orange slice; use equal parts gin and sweet vermouth for a Negroni." },
    foodPairings: ["paneer tikka", "masala olives", "tandoori prawns", "orange-and-almond cake"], whyBuyThis: "Its assertive bitter-orange profile is a dependable counterweight to sweet or rich snacks.",
    faqs: [{ question: "Is Campari a whisky or gin?", answer: "Neither. It is an Italian bitter aperitif made with a proprietary botanical recipe." }, { question: "What is a simple Campari serve?", answer: "Campari, chilled soda, ice and an orange slice make a straightforward aperitif." }],
    metaTitle: "Campari Bitter Price, Taste & Review | BevOry", metaDescription: "Campari Bitter brings orange, herbs and a long bitter finish. Pair with paneer tikka; check city prices on BevOry."
  },
  "grey-goose-vodka-97d26b4": {
    productName: "Grey Goose Vodka", category: "French Wheat Vodka",
    shortOverview: "Grey Goose is a clean French vodka with a soft wheat sweetness and light citrus lift. Its smooth texture works in a Martini without needing a flavoured syrup.",
    craftStory: "The brand uses soft winter wheat from Picardy and spring water filtered through limestone at Gensac-la-Pallue in France. The wheat spirit is distilled once through a column process intended to retain grain character rather than strip it away repeatedly.",
    tastingNotes: { nose: "Soft grain, mild citrus and a hint of white pepper.", palate: "Rounded and smooth with gentle wheat sweetness and a clean mineral feel.", finish: "Medium, crisp and faintly peppery." },
    servingGuide: { glassware: "Chilled Martini or highball glass", idealTemperature: "Chilled (4–8°C)", recommendation: "Stir 60 ml with 10 ml dry vermouth and ice, then strain into a cold glass; garnish with lemon peel." },
    foodPairings: ["tandoori prawns", "cucumber chaat", "malai paneer tikka", "coastal rava-fried fish"], whyBuyThis: "Its restrained grain character and clean texture keep a simple Martini precise.",
    faqs: [{ question: "What is Grey Goose made from?", answer: "The producer cites French soft winter wheat and Gensac spring water." }, { question: "Is it distilled many times?", answer: "Grey Goose says its wheat spirit is distilled once to retain its ingredient character." }],
    metaTitle: "Grey Goose Vodka Price, Taste & Review | BevOry", metaDescription: "Grey Goose Vodka is smooth, lightly wheaty and citrus-led. Pair with tandoori prawns; check city prices on BevOry."
  },
  "beefeater-london-dry-gin-lakwena-72ece56": {
    productName: "Beefeater London Dry Gin", category: "London Dry Gin",
    shortOverview: "Beefeater London Dry is crisp and juniper-forward, with bright lemon and Seville orange. Its clean botanical line makes it dependable in a Gin & Tonic or Martini.",
    craftStory: "James Burrough's nineteenth-century recipe underpins production in Kennington, London. Nine botanicals, including juniper, coriander seed, angelica, orris, liquorice and citrus peels, steep for twenty-four hours before copper-pot distillation.",
    tastingNotes: { nose: "Juniper, lemon peel and bitter orange.", palate: "Dry and sharp, with citrus, coriander and a little almond softness.", finish: "Medium, clean and juniper-led with lingering citrus." },
    servingGuide: { glassware: "Highball or Martini glass", idealTemperature: "Cold over ice", recommendation: "Pour 45 ml over ice with 120 ml chilled tonic and a lemon slice; keep the tonic modest to preserve juniper." },
    foodPairings: ["tandoori prawns", "cucumber chaat", "malai paneer tikka", "coastal rava-fried fish"], whyBuyThis: "Its juniper-and-citrus balance shows what a classic London Dry is meant to do in a mixed drink.",
    faqs: [{ question: "Where is Beefeater London Dry made?", answer: "At the Beefeater distillery in Kennington, London." }, { question: "Which botanicals make it citrusy?", answer: "Lemon and Seville orange peels are part of its nine-botanical recipe." }],
    metaTitle: "Beefeater London Dry Gin Price, Taste & Review | BevOry", metaDescription: "Beefeater London Dry brings juniper, lemon and orange. Pair with tandoori prawns; check city prices on BevOry."
  },
  "smirnoff-green-apple-7cbc0a9": {
    productName: "Smirnoff Green Apple", category: "Green-Apple-Flavoured Vodka",
    shortOverview: "Smirnoff Green Apple balances sweet apple-candy notes with a tart, crisp edge. It is a flavoured vodka for simple cold mixers, not a substitute for a dry, unflavoured Martini vodka.",
    craftStory: "Smirnoff infuses its triple-distilled vodka base with green-apple flavour. The brand's nineteenth-century roots are Russian, but bottling and strength vary by market; this expression is about fruit flavour rather than cask ageing.",
    tastingNotes: { nose: "Fresh green apple skin and sweet apple candy.", palate: "Light and fruity, with a sweet first impression followed by tart apple.", finish: "Short, clean and lightly sour." },
    servingGuide: { glassware: "Highball glass", idealTemperature: "Cold over ice", recommendation: "Mix 45 ml with 120 ml chilled soda over ice and finish with a lime wedge." },
    foodPairings: ["chilli-lime peanuts", "paneer tikka", "tandoori chicken", "apple chaat"], whyBuyThis: "The tart apple note keeps a straightforward soda drink brighter than a generic sweet mixer.",
    faqs: [{ question: "Is Green Apple a ready-to-drink Smirnoff Ice?", answer: "No. This catalogue entry is the green-apple-flavoured vodka; Smirnoff Ice Green Apple is a separate ready-to-drink product." }, { question: "Does it contain a whisky-like oak note?", answer: "No. Its defining flavour is sweet-tart green apple, not barrel ageing." }],
    metaTitle: "Smirnoff Green Apple Price, Taste & Review | BevOry", metaDescription: "Smirnoff Green Apple is sweet-tart and crisp. Pair with chilli-lime peanuts; check indicative city prices on BevOry."
  }
};
