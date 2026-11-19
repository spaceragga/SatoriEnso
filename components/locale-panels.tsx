import type { ReactNode } from 'react';
import { locales, type Locale } from '@/content/locale';

type LocalePanelsProps = {
  render: (locale: Locale) => ReactNode;
};

export function LocalePanels({ render }: LocalePanelsProps) {
  return locales.map((locale) => (
    <div key={locale} data-locale-panel={locale} lang={locale}>
      {render(locale)}
    </div>
  ));
}
