import type { Locale } from '@/content/locale';
import { en } from '@/content/messages/en';
import { ru } from '@/content/messages/ru';

export const siteName = 'Satori Enso';

export const messages = { ru, en } satisfies Record<Locale, typeof ru>;
