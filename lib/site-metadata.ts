import type { Metadata } from 'next';
import {
  localePath,
  locales,
  messages,
  siteName,
  type Locale,
} from '@/content/messages';

export function siteMetadata(locale: Locale): Metadata {
  return {
    title: siteName,
    description: messages[locale].description,
    alternates: {
      languages: Object.fromEntries(
        locales.map((item) => [item, localePath(item)]),
      ),
    },
  };
}
