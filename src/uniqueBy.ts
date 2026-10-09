/** Keeps the first item for each key, preserving order. */
export const uniqueBy = <T, K>(items: readonly T[], key: (item: T) => K): T[] => {
  const seen = new Set<K>();
  return items.filter((item) => {
    const k = key(item);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
};
