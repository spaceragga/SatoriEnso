import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import type { ReactNode } from 'react';
import { site } from '@/content/site';
import './globals.css';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-ui',
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" className={golos.variable}>
      <body className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center bg-canvas px-6 font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
