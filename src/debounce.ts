/** Delays `fn` until `wait` ms have passed without another call. */
export function debounce<A extends unknown[]>(fn: (...a: A) => void, wait = 250) {
  let t: ReturnType<typeof setTimeout> | undefined;
  return (...a: A) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...a), wait);
  };
}
