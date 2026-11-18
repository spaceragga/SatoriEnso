import Link from 'next/link';
import { localePath, locales, messages, type Locale } from '@/content/messages';

type LocaleSwitchProps = {
  locale: Locale;
};

export function LocaleSwitch({ locale }: LocaleSwitchProps) {
  return (
    <nav
      aria-label={messages[locale].language}
      className="absolute top-6 right-6 flex gap-3 text-sm"
    >
      {locales.map((item) => {
        const current = item === locale;

        return (
          <Link
            key={item}
            href={localePath(item)}
            hrefLang={item}
            lang={item}
            aria-current={current ? 'true' : undefined}
            className={
              current
                ? 'font-medium text-ink'
                : 'text-muted underline underline-offset-4'
            }
          >
            {item.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
