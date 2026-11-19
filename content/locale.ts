export const locales = ['ru', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ru';

export const localeStorageKey = 'locale';

const knownLocales: ReadonlySet<string> = new Set(locales);

export function isLocale(value: string | null | undefined): value is Locale {
  return value != null && knownLocales.has(value);
}
