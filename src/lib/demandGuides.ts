export type DemandGuide = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: null;
  cover_emoji: string;
  author: string;
  category: string;
  tags: string[];
  published_at: string;
  is_featured: boolean;
  meta_title: string;
  meta_description: string;
  citySlug?: string;
  categorySlug?: string;
};

const publishedAt = "2026-09-20T00:00:00.000Z";

export const DEMAND_GUIDES: DemandGuide[] = [
  {
    id: "demand-whisky-gurgaon-2026",
    title: "Whisky Price in Gurgaon 2026",
    slug: "whisky-price-in-gurgaon-2026",
    excerpt: "Compare currently listed whisky bottle sizes and indicative prices in Gurgaon, with practical notes on availability and price changes.",
    content: `<p>Use the live list below to compare whisky prices currently recorded for Gurgaon. Each product page separates bottle sizes, so a 180ml listing is not mixed with a 750ml listing.</p><h2>How to use this price guide</h2><p>Select a product to see every known bottle size. A dash means Bevory knows the product or size but does not yet have a verified Gurgaon price. Retail price and stock can change, so confirm locally before purchase.</p><h2>Why Gurgaon prices differ</h2><p>Brand, pack size, retailer inventory and local excise rules can all affect the amount shown. Bevory keeps city pages separate to avoid presenting one city's price as another city's price.</p>`,
    cover_image_url: null,
    cover_emoji: "🥃",
    author: "Bevory Team",
    category: "Whiskey",
    tags: ["whisky price Gurgaon", "Gurgaon alcohol rates", "2026 price guide"],
    published_at: publishedAt,
    is_featured: true,
    meta_title: "Whisky Price in Gurgaon 2026 | Bottle Size Guide",
    meta_description: "Compare listed whisky prices in Gurgaon for 2026 by brand and bottle size. Unavailable local prices are clearly marked.",
    citySlug: "gurgaon",
    categorySlug: "whisky",
  },
  {
    id: "demand-vodka-mumbai-2026",
    title: "Vodka Price in Mumbai 2026",
    slug: "vodka-price-in-mumbai-2026",
    excerpt: "Browse currently listed Mumbai vodka prices by brand and bottle size, including 180ml, 375ml, 750ml and 1 litre packs where known.",
    content: `<p>This guide brings together vodka products and bottle sizes recorded for Mumbai. Open any product to compare its locally listed variants.</p><h2>Price and size are separate</h2><p>A brand may sell several pack sizes nationally while only some have a verified Mumbai price. Bevory keeps the known size visible and marks the local price as unavailable instead of inventing a value.</p><h2>Before relying on a listing</h2><p>Prices are indicative, not a retail offer. Check the bottle size, city and update context, then confirm current stock and price with a licensed local retailer.</p>`,
    cover_image_url: null,
    cover_emoji: "🍸",
    author: "Bevory Team",
    category: "Vodka",
    tags: ["vodka price Mumbai", "Mumbai vodka 750ml", "2026 price guide"],
    published_at: publishedAt,
    is_featured: true,
    meta_title: "Vodka Price in Mumbai 2026 | Brand & Size Guide",
    meta_description: "Compare currently listed vodka prices in Mumbai by brand and bottle size, with unavailable local prices clearly marked.",
    citySlug: "mumbai",
    categorySlug: "vodka",
  },
  {
    id: "demand-rum-bangalore",
    title: "Rum Price in Bangalore: 2024 to 2026 Guide",
    slug: "rum-price-in-bangalore-2024-2025-2026",
    excerpt: "A current Bangalore rum price index with bottle-size detail and a clear distinction between known products and locally verified prices.",
    content: `<p>This page preserves Bevory's Bangalore rum guide while keeping the current catalog in view. Use the live product list for the latest recorded 2026 entries rather than relying on an older static table.</p><h2>Comparing across years</h2><p>Historical prices may be useful context, but they should not be treated as today's retail price. Taxes, pack changes and retailer stock can make an older figure inaccurate.</p><h2>Known product, missing price</h2><p>When a rum or bottle size exists in the national catalog but no verified Bangalore figure is available, Bevory shows a dash. That is a request for a future update, not a zero price.</p>`,
    cover_image_url: null,
    cover_emoji: "🥃",
    author: "Bevory Team",
    category: "Rum",
    tags: ["rum price Bangalore", "Bangalore alcohol price", "rum bottle sizes"],
    published_at: publishedAt,
    is_featured: false,
    meta_title: "Rum Price in Bangalore 2026 | Updated Size Guide",
    meta_description: "Compare current rum listings in Bangalore by product and bottle size, with historical context and clear unavailable-price labels.",
    citySlug: "bangalore",
    categorySlug: "rum",
  },
  {
    id: "demand-champagne-india",
    title: "Champagne Prices in India: Brands, Sizes and Cities",
    slug: "champagne-prices-in-india-2026",
    excerpt: "Understand how Champagne prices vary by bottle size and city, and compare locally available listings without treating one city's price as national.",
    content: `<p>There is no single reliable Champagne price for all of India. City taxes, bottle size, vintage, importer and retailer stock all matter.</p><h2>Compare the same bottle size</h2><p>Check whether a listing is 375ml, 750ml or a larger format before comparing prices. Product pages keep those variants separate.</p><h2>Champagne and sparkling wine</h2><p>Champagne is a protected regional name. Other sparkling wines may use different production methods and price bands, so Bevory keeps product and category labels distinct where the source data supports it.</p>`,
    cover_image_url: null,
    cover_emoji: "🍾",
    author: "Bevory Team",
    category: "Wine",
    tags: ["champagne prices India", "champagne brands", "sparkling wine"],
    published_at: publishedAt,
    is_featured: false,
    meta_title: "Champagne Prices in India 2026 | Brand & Size Guide",
    meta_description: "Compare Champagne brands and bottle sizes in India, with city-specific price guidance and clear availability notes.",
  },
  {
    id: "demand-breezer-flavours",
    title: "Breezer Flavours in India: A Practical List",
    slug: "breezer-flavours-in-india",
    excerpt: "Browse commonly listed Breezer flavours and pack sizes in India, then check which variants have a price in your city.",
    content: `<p>Breezer availability changes by city and retailer. Bevory's catalog includes commonly listed flavours such as cranberry, orange, blackberry, blueberry, Jamaican passion, watermelon and mango-peach where source records are available.</p><h2>Flavour and pack size</h2><p>Do not assume every flavour uses the same pack size. Open the product page to see known sizes and whether your selected city has a verified price.</p><h2>Choosing a listing</h2><p>Use the exact flavour name and bottle size when comparing. Similar names may refer to different variants.</p>`,
    cover_image_url: null,
    cover_emoji: "🍹",
    author: "Bevory Team",
    category: "Guides",
    tags: ["Breezer flavours India", "Breezer price", "ready to drink"],
    published_at: publishedAt,
    is_featured: false,
    meta_title: "Breezer Flavours in India | Sizes & City Availability",
    meta_description: "See commonly listed Breezer flavours in India and check known bottle sizes and city-specific price availability.",
  },
  {
    id: "demand-ballantines-abv",
    title: "Ballantine's Whisky Alcohol Percentage Explained",
    slug: "ballantines-whisky-alcohol-percentage",
    excerpt: "Learn where to find the ABV on a Ballantine's label and why the percentage can differ by expression, pack and market.",
    content: `<p>The alcohol percentage is printed as ABV on the bottle label. It can differ by Ballantine's expression and market, so the physical label is the authoritative source for the bottle in front of you.</p><h2>What ABV means</h2><p>ABV means alcohol by volume. It is not the same as bottle volume: 750ml describes the amount of liquid, while ABV describes its alcohol concentration.</p><h2>Check the exact expression</h2><p>Finest, aged expressions and special editions should be checked separately. Bevory does not copy one percentage across an entire brand when the product record has not been verified.</p>`,
    cover_image_url: null,
    cover_emoji: "🥃",
    author: "Bevory Team",
    category: "Whiskey",
    tags: ["Ballantines alcohol percentage", "whisky ABV", "Ballantines whisky"],
    published_at: publishedAt,
    is_featured: false,
    meta_title: "Ballantine's Whisky Alcohol Percentage | ABV Guide",
    meta_description: "Understand Ballantine's whisky alcohol percentage, bottle volume versus ABV, and why the exact label matters.",
  },
];

export const demandGuideBySlug = (slug?: string) => DEMAND_GUIDES.find((guide) => guide.slug === slug);
