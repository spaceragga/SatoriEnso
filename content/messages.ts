export const siteName = 'Satori Enso';

export const locales = ['ru', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ru';

const ru = {
  place: 'Веб-студия · Минск · удалённо',
  description: 'Создание, починка и сопровождение веб- и мобильных продуктов.',
  notFoundTitle: 'Страница не найдена',
  notFoundHome: 'На главную',
  language: 'Язык',
};

type Messages = typeof ru;

const en: Messages = {
  place: 'Web studio · Minsk · remote',
  description: 'Building, fixing, and maintenance of web and mobile products.',
  notFoundTitle: 'Page not found',
  notFoundHome: 'Home',
  language: 'Language',
};

export const messages: Record<Locale, Messages> = { ru, en };

export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}
