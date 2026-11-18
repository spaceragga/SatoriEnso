import type { ReactNode } from 'react';
import { LocaleShell } from '@/components/locale-shell';
import { siteMetadata } from '@/lib/site-metadata';
import '../globals.css';

export const metadata = siteMetadata('ru');

export default function RussianLayout({ children }: { children: ReactNode }) {
  return <LocaleShell locale="ru">{children}</LocaleShell>;
}
