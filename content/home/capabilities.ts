import type { Locale } from '@/content/locale';

const ru = {
  title: 'Модульная Feature Lab',
  lead: 'Можно встроить в новый или работающий продукт.',
  modules: [
    'Календарь записи',
    'Корзина',
    'Калькулятор',
    'Аналитика',
    'CRM',
    'Карта',
    'Интеграции',
  ],
};

const en = {
  title: 'Modular Feature Lab',
  lead: 'Built into a new product or one that is already running.',
  modules: [
    'Booking calendar',
    'Cart',
    'Calculator',
    'Analytics',
    'CRM',
    'Map',
    'Integrations',
  ],
} satisfies typeof ru;

export const capabilities = { ru, en } satisfies Record<Locale, typeof ru>;
