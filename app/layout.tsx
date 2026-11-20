import type { Metadata } from 'next';
import { Golos_Text, Newsreader } from 'next/font/google';
import type { ReactNode } from 'react';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';
import { defaultLocale } from '@/content/locale';
import { messages, siteName } from '@/content/messages';
import { localeDocumentCss, localeDocumentScript } from '@/lib/locale-document';
import './globals.css';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-ui',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: siteName,
  description: messages[defaultLocale].description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={defaultLocale}
      className={`${golos.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-canvas font-sans text-ink antialiased">
        <style dangerouslySetInnerHTML={{ __html: localeDocumentCss() }} />
        <script dangerouslySetInnerHTML={{ __html: localeDocumentScript() }} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
