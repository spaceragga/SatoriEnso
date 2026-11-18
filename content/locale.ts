export const locales = ['ru', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ru';

export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

export function localeFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];

  if (
    first &&
    first !== defaultLocale &&
    (locales as readonly string[]).includes(first)
  ) {
    return first as Locale;
  }

  return defaultLocale;
}
