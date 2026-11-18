'use client';

import { useLayoutEffect } from 'react';
import { localeFromPath, type Locale } from '@/content/locale';

type NotFoundLocaleProps = {
  titles: Record<Locale, string>;
};

export function NotFoundLocale({ titles }: NotFoundLocaleProps) {
  useLayoutEffect(() => {
    const locale = localeFromPath(window.location.pathname);
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    document.title = titles[locale];
  }, [titles]);

  return null;
}
