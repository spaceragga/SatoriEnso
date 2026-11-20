import type { Locale } from '@/content/locale';

const ru = {
  title: 'Качество дизайна',
  lead: 'Один визуальный характер на каждом экране: от первого кадра до последнего шага.',
};

const en = {
  title: 'Design quality',
  lead: 'One visual character on every screen, from the first frame to the last step.',
} satisfies typeof ru;

export const design = { ru, en } satisfies Record<Locale, typeof ru>;
