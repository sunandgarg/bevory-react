import { annotateIndianIngredients, ouncesToMl } from "./cocktailEditorial.js";

const riskyCopyReplacements: Array<[string, string]> = [
  [
    "They are generally lighter on the palate and more affordable, usually ranging between Rs. 1, 500 and Rs. 3, 500 depending on your state.",
    "They are commonly chosen for approachable flavour profiles. Price and availability vary by state, retailer, bottle size and date, so check the current BevOry city listing before deciding.",
  ],
  [
    "India is now making some of the best whiskies in the world. Brands like Amrut, Paul John, and Indri have won global awards. Because of our tropical climate, whisky matures much faster here than in Scotland. This means an Indian whisky aged for 5 years might taste as rich as a Scottish one aged for 12 years.",
    "Indian distilleries such as Amrut, Paul John and Indri have helped build international interest in Indian single malt. India's warmer maturation conditions can change how spirit interacts with wood, but an age statement alone does not predict flavour or quality across different climates.",
  ],
  [
    "Whisky prices in India vary wildly because of state taxes. A bottle that costs Rs. 2, 000 in Gurgaon might cost Rs. 3, 500 in Karnataka. For your first bottle, aim for the 'Premium' segment. Avoid the very cheap 'IMFL' (Indian Made Foreign Liquor) brands often used for mass-market consumption if you want to actually taste the grain and the cask. Spending a little extra on a recognized international or premium domestic brand makes a massive difference in how your head feels the next morning.",
    "Whisky prices in India vary by state taxes, retailer, bottle size and date. Use BevOry's city selector to compare the latest reviewed listings. Choose by flavour preference, verified bottle information and budget rather than assuming price predicts quality. Drinking more expensive alcohol does not prevent intoxication or after-effects.",
  ],
  ["**Which is the best whisky for beginners in India under Rs 2000?**", "**Which whisky style is approachable for beginners in India?**"],
  [
    "Blended whisky is the most popular style in the world. In fact, about 90% of the Scotch whisky sold globally is a blend.",
    "Blended whisky is a widely available style. Many familiar Scotch labels are blends.",
  ],
  [
    "Indian single malts have become world-class lately, often winning awards over Scottish rivals.",
    "Indian single malts are now widely represented in domestic and international markets.",
  ],
  [
    "Prices for a standard 750ml bottle of vodka in India range from approximately ₹600 for local favorites like Magic Moments to ₹2, 500 for premium imports like Grey Goose or Belvedere, depending on which state you are in. You do not need the most expensive bottle for cocktails; a reliable mid-range choice like Smirnoff or Ketel One works perfectly.",
    "Vodka prices in India vary by state, retailer, bottle size and date. You do not need the most expensive bottle for a mixed drink; choose a sealed product from a lawful retailer and check the current BevOry city listing.",
  ],
  [
    "Prices vary significantly by state due to taxes. A 750ml bottle might cost approximately ₹1, 000 in Goa but could be ₹2, 200 in Karnataka. Always check local price lists for the most accurate figure.",
    "Prices vary significantly by state due to taxes. Check the current BevOry city listing and the retailer's displayed price for the most relevant figure.",
  ],
  [
    "If you are feeling a bit under the weather or the nights are getting chilly, the Hot Toddy is the cure.",
    "For a warm drink on a chilly evening, you can prepare a Hot Toddy. It is not a medical treatment.",
  ],
];

const normalizePriceTable = (line: string) => {
  if (!line.trimStart().startsWith("|") || !/(?:Rs\.?|₹)\s*[\d,]/i.test(line)) return line;
  const cells = line.split("|").map((cell) => (
    /(?:Rs\.?|₹)\s*[\d,]/i.test(cell) ? " Check current city listing " : cell
  ));
  return cells.join("|");
};

export const normalizeBlogContent = (value: string) => {
  let content = ouncesToMl(value)
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/(\d+(?:\.\d+)?)\s*ml\b/gi, "$1 ml")
    .split("\n")
    .map(normalizePriceTable)
    .join("\n");

  for (const [source, replacement] of riskyCopyReplacements) {
    content = content.split(source).join(replacement);
  }
  content = annotateIndianIngredients(content);

  const safetyHeading = "## Editorial and safety note";
  if (!content.includes(safetyHeading)) {
    content = `${content.trim()}\n\n${safetyHeading}\n\nPrices and availability vary by city, retailer, bottle size and date. BevOry listings are informational and should be checked against the retailer's current displayed price. Alcohol laws and minimum legal drinking age vary across Indian states and union territories. Verify local rules, drink responsibly and never drink and drive. This article is educational and is not medical advice.\n`;
  }
  return content;
};
