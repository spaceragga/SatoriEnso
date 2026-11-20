import type { Locale } from '@/content/locale';

const ru = {
  title:
    'Создаём цифровые продукты, которые легко понять, выбрать и использовать',
  lead: 'Стратегия, профессиональный UI/UX, визуальные системы, веб и мобильная разработка.',
  discuss: 'Обсудить проект',
  projects: 'Смотреть проекты',
  marks: ['Стратегия', 'UI/UX', 'Разработка', 'Развитие'],
};

const en = {
  title:
    'We build digital products that are easy to understand, choose, and use',
  lead: 'Strategy, professional UI/UX, visual systems, web and mobile development.',
  discuss: 'Discuss a project',
  projects: 'View projects',
  marks: ['Strategy', 'UI/UX', 'Development', 'Growth'],
} satisfies typeof ru;

export const hero = { ru, en } satisfies Record<Locale, typeof ru>;
