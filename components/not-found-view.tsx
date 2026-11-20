import Link from 'next/link';
import type { Locale } from '@/content/locale';
import { messages } from '@/content/messages';

type NotFoundViewProps = {
  locale: Locale;
};

export function NotFoundView({ locale }: NotFoundViewProps) {
  const copy = messages[locale];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">
        {copy.notFoundTitle}
      </h1>
      <Link className="mt-6 inline-block underline underline-offset-4" href="/">
        {copy.notFoundHome}
      </Link>
    </div>
  );
}
