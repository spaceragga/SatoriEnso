import type { Metadata } from 'next';
import { LocaleSwitch } from '@/components/locale-switch';
import { NotFoundLocale } from '@/components/not-found-locale';
import { NotFoundView } from '@/components/not-found-view';
import { RootDocument } from '@/components/root-document';
import { defaultLocale, locales, type Locale } from '@/content/locale';
import { messages } from '@/content/messages';
import { notFoundLocaleScript, notFoundPanelCss } from '@/lib/not-found-locale';
import './globals.css';

const titles: Record<Locale, string> = {
  ru: messages.ru.notFoundTitle,
  en: messages.en.notFoundTitle,
};

export const metadata: Metadata = {
  title: titles[defaultLocale],
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale={defaultLocale} suppressHydrationWarning>
      <style dangerouslySetInnerHTML={{ __html: notFoundPanelCss() }} />
      <script
        dangerouslySetInnerHTML={{ __html: notFoundLocaleScript(titles) }}
      />
      <NotFoundLocale titles={titles} />
      {locales.map((locale) => (
        <div key={locale} data-locale-panel={locale}>
          <LocaleSwitch locale={locale} />
          <NotFoundView locale={locale} />
        </div>
      ))}
    </RootDocument>
  );
}
