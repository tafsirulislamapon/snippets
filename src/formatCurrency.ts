/** Formats minor units (cents, poisha) as currency: 125000 -> "৳1,250.00". */
export const formatCurrency = (minorUnits: number, currency = "BDT", locale = "en-BD") =>
  new Intl.NumberFormat(locale, { style: "currency", currency }).format(minorUnits / 100);
