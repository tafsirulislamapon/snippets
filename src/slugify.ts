/** Turns a title into a URL-safe slug: "Hello, World!" -> "hello-world". */
export const slugify = (input: string) =>
  input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
