/** Groups `items` by the key `key` returns. */
export const groupBy = <T, K extends PropertyKey>(items: readonly T[], key: (item: T) => K) =>
  items.reduce((out, item) => {
    const k = key(item);
    (out[k] ??= []).push(item);
    return out;
  }, {} as Record<K, T[]>);
