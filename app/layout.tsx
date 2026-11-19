import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import type { ReactNode } from 'react';
import { LocaleSwitch } from '@/components/locale-switch';
import { defaultLocale } from '@/content/locale';
import { messages, siteName } from '@/content/messages';
import { localeDocumentCss, localeDocumentScript } from '@/lib/locale-document';
import './globals.css';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-ui',
});

export const metadata: Metadata = {
  title: siteName,
  description: messages[defaultLocale].description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={defaultLocale}
      className={golos.variable}
      suppressHydrationWarning
    >
      <body className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center bg-canvas px-6 font-sans text-ink antialiased">
        <style dangerouslySetInnerHTML={{ __html: localeDocumentCss() }} />
        <script dangerouslySetInnerHTML={{ __html: localeDocumentScript() }} />
        <LocaleSwitch />
        {children}
      </body>
    </html>
  );
}
