import { Golos_Text } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Locale } from '@/content/messages';
import { LocaleSwitch } from '@/components/locale-switch';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-ui',
});

type RootDocumentProps = {
  locale: Locale;
  children: ReactNode;
};

export function RootDocument({ locale, children }: RootDocumentProps) {
  return (
    <html lang={locale} className={golos.variable}>
      <body className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center bg-canvas px-6 font-sans text-ink antialiased">
        <LocaleSwitch locale={locale} />
        {children}
      </body>
    </html>
  );
}
