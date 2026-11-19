import Link from 'next/link';
import type { Locale } from '@/content/locale';
import { messages } from '@/content/messages';

type NotFoundViewProps = {
  locale: Locale;
};

export function NotFoundView({ locale }: NotFoundViewProps) {
  const copy = messages[locale];

  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">
        {copy.notFoundTitle}
      </h1>
      <Link className="mt-6 underline underline-offset-4" href="/">
        {copy.notFoundHome}
      </Link>
    </>
  );
}
