import {
  defaultLocale,
  localeStorageKey,
  locales,
  type Locale,
} from '@/content/locale';
import { messages } from '@/content/messages';

const labels: Record<Locale, string> = {
  ru: messages.ru.language,
  en: messages.en.language,
};

function whenActive(attribute: string): string {
  return [
    `html:not([data-locale]) [${attribute}="${defaultLocale}"]`,
    ...locales.map(
      (locale) => `html[data-locale="${locale}"] [${attribute}="${locale}"]`,
    ),
  ].join(',');
}

// Runs before paint. localStorage is the locale; a non-default prefix is stripped.
export function localeDocumentScript(): string {
  return [
    '(function () {',
    `var locales = ${JSON.stringify(locales)};`,
    `var key = ${JSON.stringify(localeStorageKey)};`,
    `var fallback = ${JSON.stringify(defaultLocale)};`,
    `var labels = ${JSON.stringify(labels)};`,
    'function known(value) { return locales.indexOf(value) !== -1; }',
    'var parts = location.pathname.split("/").filter(Boolean);',
    'var first = parts[0] || "";',
    'var locale = fallback;',
    'try { locale = localStorage.getItem(key) || fallback; } catch (e) {}',
    'if (known(first) && first !== fallback) {',
    'locale = first;',
    'try { localStorage.setItem(key, first); } catch (e) {}',
    'var rest = parts.slice(1).join("/");',
    'var next = rest ? "/" + rest + "/" : "/";',
    'if (location.pathname !== next) location.replace(next);',
    '}',
    'function apply(next) {',
    'if (!known(next)) next = fallback;',
    'try { localStorage.setItem(key, next); } catch (e) {}',
    'var root = document.documentElement;',
    'root.lang = next;',
    'root.dataset.locale = next;',
    'var nav = document.querySelector("[data-locale-switch]");',
    'if (nav) nav.setAttribute("aria-label", labels[next]);',
    'var buttons = document.querySelectorAll("[data-locale-link]");',
    'for (var i = 0; i < buttons.length; i++) {',
    'var on = buttons[i].getAttribute("data-locale-link") === next;',
    'if (on) buttons[i].setAttribute("aria-current", "true");',
    'else buttons[i].removeAttribute("aria-current");',
    '}',
    '}',
    'window.setLocale = apply;',
    'apply(locale);',
    '})();',
  ].join('\n');
}

export function localeDocumentCss(): string {
  return [
    '[data-locale-panel]{display:none}',
    `${whenActive('data-locale-panel')}{display:contents}`,
    `${whenActive('data-locale-link')}{color:var(--ink);font-weight:500;text-decoration:none}`,
  ].join('');
}
