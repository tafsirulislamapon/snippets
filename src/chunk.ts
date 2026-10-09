/** Splits `items` into arrays of at most `size`. */
export const chunk = <T>(items: readonly T[], size: number): T[][] =>
  items.reduce<T[][]>((out, item, i) => {
    if (i % size === 0) out.push([]);
    out[out.length - 1].push(item);
    return out;
  }, []);
