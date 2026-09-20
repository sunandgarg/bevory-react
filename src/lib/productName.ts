const identity = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "");

export const fullProductName = (brandName: string, productName: string) => {
  const brand = brandName.trim();
  const product = productName.trim();
  if (!brand) return product;
  if (!product) return brand;

  const brandKey = identity(brand);
  const productKey = identity(product);
  const brandTokens = new Set(brand.toLowerCase().match(/[a-z0-9]+/g) ?? []);
  const productTokens = new Set(product.toLowerCase().match(/[a-z0-9]+/g) ?? []);
  const sharedTokens = [...brandTokens].filter((token) => productTokens.has(token)).length;
  const overlap = sharedTokens / Math.max(1, Math.min(brandTokens.size, productTokens.size));

  return productKey.startsWith(brandKey) || overlap >= 0.5
    ? product
    : `${brand} ${product}`;
};
