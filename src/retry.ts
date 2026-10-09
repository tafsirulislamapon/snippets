import { sleep } from "./sleep";

/** Retries `fn` with exponential backoff. Throws the last error if all attempts fail. */
export async function retry<T>(fn: () => Promise<T>, attempts = 3, baseMs = 300): Promise<T> {
  let err: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      err = e;
      if (i < attempts - 1) await sleep(baseMs * 2 ** i);
    }
  }
  throw err;
}
