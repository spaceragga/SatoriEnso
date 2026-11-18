import { Golos_Text } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Locale } from '@/content/locale';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-ui',
});

type RootDocumentProps = {
  locale: Locale;
  children: ReactNode;
  suppressHydrationWarning?: boolean;
};

export function RootDocument({
  locale,
  children,
  suppressHydrationWarning,
}: RootDocumentProps) {
  return (
    <html
      lang={locale}
      className={golos.variable}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      <body className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center bg-canvas px-6 font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
