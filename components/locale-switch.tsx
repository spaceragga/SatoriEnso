'use client';

import { useLayoutEffect } from 'react';
import {
  defaultLocale,
  isLocale,
  localeStorageKey,
  locales,
  type Locale,
} from '@/content/locale';
import { messages } from '@/content/messages';

declare global {
  interface Window {
    setLocale?: (locale: Locale) => void;
  }
}

function storedLocale(): Locale {
  try {
    const saved = localStorage.getItem(localeStorageKey);
    return isLocale(saved) ? saved : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

export function LocaleSwitch() {
  useLayoutEffect(() => {
    window.setLocale?.(storedLocale());
  }, []);

  return (
    <nav
      data-locale-switch
      aria-label={messages[defaultLocale].language}
      className="flex items-center gap-1.5 text-sm"
    >
      {locales.map((item, index) => (
        <span key={item} className="flex items-center gap-1.5">
          {index > 0 ? (
            <span className="text-muted" aria-hidden>
              /
            </span>
          ) : null}
          <button
            type="button"
            data-locale-link={item}
            lang={item}
            className="cursor-pointer bg-transparent p-0 tracking-wide text-muted uppercase"
            onClick={() => window.setLocale?.(item)}
          >
            {item}
          </button>
        </span>
      ))}
    </nav>
  );
}
