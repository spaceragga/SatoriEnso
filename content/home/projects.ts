import type { Locale } from '@/content/locale';

const ru = {
  items: [
    {
      title: 'Концепция 1: Платформа для медицины',
      lead: 'Кабинет врача, карта пациента и запись на приём в одной системе.',
      tags: ['Врач', 'Календарь', 'Пациент'],
    },
    {
      title: 'Концепция 2: B2B-платформа',
      lead: 'Каталог, конфигуратор и CRM для длинного цикла продажи.',
      tags: ['Каталог', 'Конфигуратор', 'CRM'],
    },
    {
      title: 'Концепция 3: Недвижимость',
      lead: 'Объект, расчёт и бронирование до сделки.',
      tags: ['3D-тур', 'Калькулятор', 'Бронирование'],
    },
    {
      title: 'Концепция 4: Образование',
      lead: 'Программа, прогресс и аналитика учебного потока.',
      tags: ['Аналитика'],
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
  items: [
    {
      title: 'Concept 1: A platform for medicine',
      lead: 'A doctor’s office, a patient record, and an appointment in one system.',
      tags: ['Doctor', 'Calendar', 'Patient'],
    },
    {
      title: 'Concept 2: A B2B platform',
      lead: 'A catalog, a configurator, and a CRM for a long sales cycle.',
      tags: ['Catalog', 'Configurator', 'CRM'],
    },
    {
      title: 'Concept 3: Real estate',
      lead: 'The property, the estimate, and the booking before the deal.',
      tags: ['3D tour', 'Calculator', 'Booking'],
    },
    {
      title: 'Concept 4: Education',
      lead: 'The program, the progress, and the analytics of a learning flow.',
      tags: ['Analytics'],
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
