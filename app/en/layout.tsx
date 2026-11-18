import type { ReactNode } from 'react';
import { LocaleShell } from '@/components/locale-shell';
import { siteMetadata } from '@/lib/site-metadata';
import '../globals.css';

export const metadata = siteMetadata('en');

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <LocaleShell locale="en">{children}</LocaleShell>;
}
