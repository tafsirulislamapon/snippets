/** Copies only `keys` from `source`. */
export const pick = <T extends object, K extends keyof T>(source: T, keys: readonly K[]): Pick<T, K> =>
  Object.fromEntries(keys.filter((k) => k in source).map((k) => [k, source[k]])) as Pick<T, K>;

/** Copies everything from `source` except `keys`. */
export const omit = <T extends object, K extends keyof T>(source: T, keys: readonly K[]): Omit<T, K> =>
  Object.fromEntries(Object.entries(source).filter(([k]) => !keys.includes(k as K))) as Omit<T, K>;
