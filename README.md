# snippets

Small, self-contained TypeScript utilities I keep reaching for. No build, no dependencies —
copy the file you need into your project.

| Snippet | What it does |
| --- | --- |
| `debounce` | Delays a call until the input stops arriving |
| `throttle` | Caps a call to once per interval, trailing edge included |
| `sleep` / `retry` | Awaitable delay, and exponential-backoff retries built on it |
| `withTimeout` | Rejects a promise that overruns its budget |
| `chunk` | Splits an array into fixed-size batches |
| `groupBy` | Buckets items by a derived key |
| `uniqueBy` | Drops duplicates by a derived key, order preserved |
| `clamp` | Constrains a number to a range |
| `slugify` | Title to URL-safe slug |
| `formatCurrency` | Minor units to a localised currency string |
| `formatRelativeTime` | "3 hours ago", "in 2 days" |
| `safeJsonParse` | JSON.parse with a fallback instead of a throw |
| `pick` / `omit` | Narrow an object to, or away from, a set of keys |
