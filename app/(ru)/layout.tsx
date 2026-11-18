import type { ReactNode } from 'react';
import { RootDocument } from '@/components/root-document';
import { siteMetadata } from '@/lib/site-metadata';
import '../globals.css';

export const metadata = siteMetadata('ru');

type LocaleLayoutProps = {
  children: ReactNode;
};

export default function RussianLayout({ children }: LocaleLayoutProps) {
  return <RootDocument locale="ru">{children}</RootDocument>;
}
