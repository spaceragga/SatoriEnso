import type { Locale } from '@/content/locale';

const ru = {
  line: 'Сложное становится ясным. Полезное — красивым. Красивое — работающим.',
  pillars: [
    'Визуальная идея',
    'Ясный путь пользователя',
    'Бизнес-логика',
    'Масштабируемая дизайн-система',
  ],
};

const en = {
  line: 'The complex becomes clear. The useful becomes beautiful. The beautiful becomes something that works.',
  pillars: [
    'A visual idea',
    'A clear user path',
    'Business logic',
    'A scalable design system',
  ],
} satisfies typeof ru;

export const manifesto = { ru, en } satisfies Record<Locale, typeof ru>;
