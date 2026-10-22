const foodStyles: Array<[RegExp, number]> = [
  [/paneer|tofu/i, 0],
  [/prawn|shrimp/i, 1],
  [/cucumber|chaat|bhel|puri|salad/i, 2],
  [/fish|salmon|seafood|crab/i, 3],
  [/chicken|wings|turkey/i, 4],
  [/mutton|lamb|seekh|kebab|beef/i, 5],
  [/chocolate|brownie|tart|mousse|cake|tiramisu|kulfi|custard|rasmalai|shrikhand|barfi|biscotti|crumble|jalebi|halwa|pudding/i, 7],
  [/peanut|cashew|almond|hazelnut|pecan|nut|walnut/i, 6],
  [/chips|fries|wedge|crisps|crackers|pakora/i, 8],
  [/rice|pulao|biryani|rogan josh|curry|rajma|thali|dal/i, 9],
  [/fruit|mango|pineapple|orange|pear|apple|banana|berry|strawberry|grape/i, 10],
  [/cheese|cheddar|olives|focaccia|bread|quiche|asparagus/i, 11],
];

// The contact sheet is illustrative; exact recipes can vary from these food-style photos.
export const foodPairingPosition = (pairing: string) => {
  const index = foodStyles.find(([pattern]) => pattern.test(pairing))?.[1] ?? 11;
  return `${["0%", "33.333%", "66.667%", "100%"][index % 4]} ${Math.floor(index / 4) * 50}%`;
};
