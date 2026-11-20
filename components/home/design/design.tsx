import Image from 'next/image';
import { design } from '@/content/home/design';
import type { Locale } from '@/content/locale';

type DesignProps = {
  locale: Locale;
};

const shots = [
  {
    src: '/images/home/project-medicine.webp',
    width: 960,
    height: 540,
    className: 'w-36',
  },
  {
    src: '/images/home/hero-schedule.webp',
    width: 1152,
    height: 864,
    className: 'w-24',
  },
  {
    src: '/images/home/hero-phone.webp',
    width: 531,
    height: 1152,
    className: 'w-14',
  },
  {
    src: '/images/home/project-realty.webp',
    width: 960,
    height: 540,
    className: 'w-40',
  },
  {
    src: '/images/home/hero-chart.webp',
    width: 1280,
    height: 720,
    className: 'w-32',
  },
  {
    src: '/images/home/project-education.webp',
    width: 960,
    height: 540,
    className: 'w-36',
  },
] as const;

export function Design({ locale }: DesignProps) {
  const copy = design[locale];

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-10">
      <div className="max-w-[14rem] shrink-0">
        <h2 className="font-serif text-3xl leading-tight tracking-tight">
          {copy.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{copy.lead}</p>
      </div>
      <ul className="flex min-w-0 flex-1 items-center justify-between gap-3 overflow-x-auto">
        {shots.map((shot) => (
          <li
            key={shot.src}
            className={`h-28 shrink-0 overflow-hidden rounded-lg shadow-sm ${shot.className}`}
          >
            <Image
              src={shot.src}
              alt=""
              width={shot.width}
              height={shot.height}
              className="h-full w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
