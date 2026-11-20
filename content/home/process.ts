import type { Locale } from '@/content/locale';

const ru = {
  steps: [
    {
      title: 'Погружение',
      lead: 'Разбираем задачу, ограничения и то, как продуктом будут пользоваться.',
    },
    {
      title: 'Архитектура',
      lead: 'Собираем структуру, сценарии и границы системы.',
    },
    {
      title: 'UI/UX',
      lead: 'Проектируем интерфейс, который легко понять и пройти.',
    },
    {
      title: 'Разработка',
      lead: 'Собираем продукт и доводим его до рабочей версии.',
    },
    {
      title: 'Запуск и рост',
      lead: 'Запускаем и развиваем то, что уже работает.',
    },
  ],
};

const en = {
  steps: [
    {
      title: 'Immersion',
      lead: 'We take apart the task, the constraints, and how people will use the product.',
    },
    {
      title: 'Architecture',
      lead: 'We set the structure, the flows, and the edges of the system.',
    },
    {
      title: 'UI/UX',
      lead: 'We design an interface that is easy to understand and move through.',
    },
    {
      title: 'Development',
      lead: 'We build the product and bring it to a working version.',
    },
    {
      title: 'Launch and growth',
      lead: 'We launch it and keep developing what is already in use.',
    },
  ],
} satisfies typeof ru;

export const process = { ru, en } satisfies Record<Locale, typeof ru>;
