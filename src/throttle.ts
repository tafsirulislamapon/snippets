/** Runs `fn` at most once per `limit` ms, trailing call included. */
export function throttle<A extends unknown[]>(fn: (...a: A) => void, limit = 250) {
  let last = 0;
  let queued: ReturnType<typeof setTimeout> | undefined;
  let latest: A;
  return (...a: A) => {
    latest = a;
    const wait = limit - (Date.now() - last);
    if (wait <= 0) {
      last = Date.now();
      fn(...latest);
    } else if (!queued) {
      queued = setTimeout(() => {
        queued = undefined;
        last = Date.now();
        fn(...latest);
      }, wait);
    }
  };
}
