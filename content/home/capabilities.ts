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
  marks: {
    month: 'март',
    weekdays: ['п', 'в', 'с', 'ч', 'п'],
    cartCount: '2 поз.',
    cartSum: '86',
    pay: 'Оплатить',
    growth: '+18%',
    period: '30 дн.',
    minutes: '12 мин',
    site: 'сайт',
    crm: 'CRM',
    api: 'API',
    payment: 'оплата',
    mail: 'почта',
  },
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
  marks: {
    month: 'Mar',
    weekdays: ['M', 'T', 'W', 'T', 'F'],
    cartCount: '2 items',
    cartSum: '86',
    pay: 'Pay',
    growth: '+18%',
    period: '30 days',
    minutes: '12 min',
    site: 'site',
    crm: 'CRM',
    api: 'API',
    payment: 'pay',
    mail: 'mail',
  },
} satisfies typeof ru;

export const capabilities = { ru, en } satisfies Record<Locale, typeof ru>;
