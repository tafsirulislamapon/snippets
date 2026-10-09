const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 31536000], ["month", 2592000], ["day", 86400],
  ["hour", 3600], ["minute", 60], ["second", 1],
];

/** "3 hours ago", "in 2 days". */
export function formatRelativeTime(date: Date, now = new Date(), locale = "en") {
  const seconds = (date.getTime() - now.getTime()) / 1000;
  const [unit, size] = UNITS.find(([, s]) => Math.abs(seconds) >= s) ?? UNITS[UNITS.length - 1];
  return new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(Math.round(seconds / size), unit);
}
