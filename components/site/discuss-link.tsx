import Link from 'next/link';
import type { Locale } from '@/content/locale';
import { messages } from '@/content/messages';

type DiscussLinkProps = {
  locale: Locale;
};

export function DiscussLink({ locale }: DiscussLinkProps) {
  return (
    <Link
      href="/#contact"
      className="rounded-md bg-accent px-5 py-2.5 text-sm whitespace-nowrap text-white"
    >
      {messages[locale].discuss}
    </Link>
  );
}
