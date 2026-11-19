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
      className="absolute top-6 right-6 flex gap-3 text-sm"
    >
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          data-locale-link={item}
          lang={item}
          className="cursor-pointer bg-transparent p-0 text-muted underline underline-offset-4"
          onClick={() => window.setLocale?.(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </nav>
  );
}
