import { defaultLocale, locales, type Locale } from '@/content/locale';

// Same rule as localeFromPath. Inlined because the static 404 runs it before React.
export function notFoundLocaleScript(titles: Record<Locale, string>): string {
  const prefixed = locales.filter((locale) => locale !== defaultLocale);

  return [
    '(function () {',
    'var first = (location.pathname.split("/").filter(Boolean)[0] || "");',
    `var prefixed = ${JSON.stringify(prefixed)};`,
    `var locale = prefixed.indexOf(first) === -1 ? ${JSON.stringify(defaultLocale)} : first;`,
    `var titles = ${JSON.stringify(titles)};`,
    'var root = document.documentElement;',
    'root.lang = locale;',
    'root.dataset.locale = locale;',
    'document.title = titles[locale];',
    '})();',
  ].join('\n');
}

export function notFoundPanelCss(): string {
  const shown = [
    `html:not([data-locale]) [data-locale-panel="${defaultLocale}"]`,
    ...locales.map(
      (locale) =>
        `html[data-locale="${locale}"] [data-locale-panel="${locale}"]`,
    ),
  ].join(',');

  return `[data-locale-panel]{display:none}${shown}{display:contents}`;
}
