import type { Locale } from '@/content/locale';

const ru = {
  heading: 'Концепции',
  intro:
    'Студия собирает продукт целиком: от задачи и интерфейса до рабочей версии.',
  up: 'Выше',
  down: 'Ниже',
  items: [
    {
      title: 'Платформа для медицины',
      lead: 'Кабинет врача, карта пациента и запись на приём в одной системе.',
      tags: ['Врач', 'Календарь', 'Пациент'],
    },
    {
      title: 'B2B-платформа',
      lead: 'Каталог, конфигуратор и CRM для длинного цикла продажи.',
      tags: ['Каталог', 'Конфигуратор', 'CRM'],
    },
    {
      title: 'Недвижимость',
      lead: 'Объект, расчёт и бронирование до сделки.',
      tags: ['3D-тур', 'Калькулятор', 'Бронирование'],
    },
    {
      title: 'Образование',
      lead: 'Программа, прогресс и аналитика учебного потока.',
      tags: ['Программа', 'Прогресс', 'Аналитика'],
    },
    {
      title: 'Логистика',
      lead: 'Маршрут, склад и статус поставки в одном окне.',
      tags: ['Маршрут', 'Склад', 'Статус'],
    },
    {
      title: 'Финансы',
      lead: 'Счета, платежи и отчёт без лишних экранов.',
      tags: ['Счета', 'Платежи', 'Отчёт'],
    },
    {
      title: 'HoReCa',
      lead: 'Зал, заказ и кухня в одном потоке.',
      tags: ['Зал', 'Заказ', 'Кухня'],
    },
    {
      title: 'Производство',
      lead: 'Заказ, цех и отгрузка на одной линии.',
      tags: ['Заказ', 'Цех', 'Отгрузка'],
    },
  ],
  domains: [
    'Услуги',
    'E-commerce',
    'Медицина',
    'Недвижимость',
    'Производство',
    'Образование',
    'Логистика',
    'SaaS',
    'HoReCa',
    'Финансы',
  ],
};

const en = {
  heading: 'Concepts',
  intro:
    'The studio builds the whole product, from the task and the interface to a working version.',
  up: 'Up',
  down: 'Down',
  items: [
    {
      title: 'A platform for medicine',
      lead: 'A doctor’s office, a patient record, and an appointment in one system.',
      tags: ['Doctor', 'Calendar', 'Patient'],
    },
    {
      title: 'A B2B platform',
      lead: 'A catalog, a configurator, and a CRM for a long sales cycle.',
      tags: ['Catalog', 'Configurator', 'CRM'],
    },
    {
      title: 'Real estate',
      lead: 'The property, the estimate, and the booking before the deal.',
      tags: ['3D tour', 'Calculator', 'Booking'],
    },
    {
      title: 'Education',
      lead: 'The program, the progress, and the analytics of a learning flow.',
      tags: ['Program', 'Progress', 'Analytics'],
    },
    {
      title: 'Logistics',
      lead: 'The route, the warehouse, and the delivery status in one view.',
      tags: ['Route', 'Warehouse', 'Status'],
    },
    {
      title: 'Finance',
      lead: 'Invoices, payments, and the report without extra screens.',
      tags: ['Invoices', 'Payments', 'Report'],
    },
    {
      title: 'HoReCa',
      lead: 'The floor, the order, and the kitchen in one flow.',
      tags: ['Floor', 'Order', 'Kitchen'],
    },
    {
      title: 'Manufacturing',
      lead: 'The order, the shop floor, and the shipment on one line.',
      tags: ['Order', 'Shop', 'Shipment'],
    },
  ],
  domains: [
    'Services',
    'E-commerce',
    'Medicine',
    'Real estate',
    'Manufacturing',
    'Education',
    'Logistics',
    'SaaS',
    'HoReCa',
    'Finance',
  ],
} satisfies typeof ru;

export const projects = { ru, en } satisfies Record<Locale, typeof ru>;
