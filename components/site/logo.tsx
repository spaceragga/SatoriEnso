import Link from 'next/link';
import { EnsoMark } from '@/components/site/enso-mark';
import type { Locale } from '@/content/locale';
import { messages, siteName } from '@/content/messages';

type LogoProps = {
  locale: Locale;
  className?: string;
};

export function Logo({ locale, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 text-inherit ${className ?? ''}`}
    >
      <EnsoMark className="size-12 shrink-0" />
      <span className="flex h-12 flex-col justify-center">
        <span className="font-serif text-[1.22rem] leading-none tracking-[-0.025em]">
          {siteName}
        </span>
        <span className="mt-1.5 text-[10px] leading-none tracking-[0.04em] text-current/55">
          {messages[locale].markLine}
        </span>
      </span>
    </Link>
  );
}
