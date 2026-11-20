import Image from 'next/image';
import { projects } from '@/content/home/projects';
import type { Locale } from '@/content/locale';

type ProjectsProps = {
  locale: Locale;
};

const shots = [
  { src: '/images/home/project-medicine.webp', width: 960, height: 540 },
  { src: '/images/home/project-b2b.webp', width: 960, height: 540 },
  { src: '/images/home/project-realty.webp', width: 960, height: 540 },
  { src: '/images/home/project-education.webp', width: 960, height: 540 },
] as const;

export function Projects({ locale }: ProjectsProps) {
  const copy = projects[locale];

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl px-6 pt-16 pb-6 sm:pt-20 sm:pb-8"
    >
      <ul className="mx-auto flex w-full max-w-3xl flex-col gap-10 sm:gap-12">
        {copy.items.map((item, index) => {
          const shot = shots[index];
          if (!shot) return null;

          return (
            <li
              key={item.title}
              className="grid items-center gap-5 sm:grid-cols-[13rem_1fr] sm:gap-8"
            >
              <Image
                src={shot.src}
                alt=""
                width={shot.width}
                height={shot.height}
                className="h-auto w-full rounded-xl"
              />
              <div>
                <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {item.lead}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-16 text-center font-serif text-base leading-8 font-medium text-ink/80">
        {copy.domains.map((domain, index) => (
          <span key={domain} className="whitespace-nowrap">
            {index > 0 ? <span className="px-2.5 text-ink/35">·</span> : null}
            {domain}
          </span>
        ))}
      </p>
    </section>
  );
}
