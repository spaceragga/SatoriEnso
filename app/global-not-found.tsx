import type { Metadata } from 'next';
import Link from 'next/link';
import { defaultLocale, localePath, messages } from '@/content/messages';
import { RootDocument } from '@/components/root-document';
import './globals.css';

const copy = messages[defaultLocale];

export const metadata: Metadata = {
  title: copy.notFoundTitle,
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale={defaultLocale}>
      <h1 className="text-3xl font-semibold tracking-tight">
        {copy.notFoundTitle}
      </h1>
      <Link
        className="mt-6 underline underline-offset-4"
        href={localePath(defaultLocale)}
      >
        {copy.notFoundHome}
      </Link>
    </RootDocument>
  );
}
