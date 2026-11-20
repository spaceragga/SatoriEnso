import Link from 'next/link';
import type { Locale } from '@/content/locale';
import { messages } from '@/content/messages';

type SiteNavProps = {
  locale: Locale;
};

export function SiteNav({ locale }: SiteNavProps) {
  return (
    <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm lg:justify-center">
      {messages[locale].nav.map((item) => (
        <Link key={item.href} href={item.href} className="text-ink">
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
