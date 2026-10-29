export const normalizeIndianMobile = (value: string): string => {
  let digits = value.replace(/\D/g, "").replace(/^0+/, "");
  if (digits.startsWith("91") && (/^\s*\+91/.test(value) || digits.length > 10)) {
    digits = digits.slice(2);
  }
  return digits;
};
