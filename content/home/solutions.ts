import type { Locale } from '@/content/locale';

const ru = {
  items: [
    {
      title: 'Создать с нуля',
      lead: 'Новый продукт: от идеи и интерфейса до первой рабочей версии.',
    },
    {
      title: 'Улучшить существующее',
      lead: 'Разобрать текущий продукт и собрать его так, чтобы им было понятно пользоваться.',
    },
    {
      title: 'Развивать продукт',
      lead: 'Дорабатывать живой продукт: новые сценарии и развитие после запуска.',
    },
  ],
};

const en = {
  items: [
    {
      title: 'Start from scratch',
      lead: 'A new product, from the idea and the interface to the first working version.',
    },
    {
      title: 'Improve what exists',
      lead: 'Take the current product apart and rebuild it so people can actually use it.',
    },
    {
      title: 'Grow the product',
      lead: 'Keep a live product moving: new flows and what comes after launch.',
    },
  ],
} satisfies typeof ru;

export const solutions = { ru, en } satisfies Record<Locale, typeof ru>;
