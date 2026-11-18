import type { ReactNode } from 'react';
import type { Locale } from '@/content/locale';
import { LocaleSwitch } from '@/components/locale-switch';
import { RootDocument } from '@/components/root-document';

type LocaleShellProps = {
  locale: Locale;
  children: ReactNode;
};

export function LocaleShell({ locale, children }: LocaleShellProps) {
  return (
    <RootDocument locale={locale}>
      <LocaleSwitch locale={locale} />
      {children}
    </RootDocument>
  );
}
