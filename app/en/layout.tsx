import type { ReactNode } from 'react';
import { RootDocument } from '@/components/root-document';
import { siteMetadata } from '@/lib/site-metadata';
import '../globals.css';

export const metadata = siteMetadata('en');

type LocaleLayoutProps = {
  children: ReactNode;
};

export default function EnglishLayout({ children }: LocaleLayoutProps) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
