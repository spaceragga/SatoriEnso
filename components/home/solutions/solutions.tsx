import { solutions } from '@/content/home/solutions';
import type { Locale } from '@/content/locale';

type SolutionsProps = {
  locale: Locale;
};

const markClass = 'size-6 text-ink';

export function Solutions({ locale }: SolutionsProps) {
  const copy = solutions[locale];

  return (
    <section id="solutions" className="mx-auto w-full max-w-5xl px-6 pb-8">
      <ul className="grid border-t border-ink/10 sm:grid-cols-3">
        {copy.items.map((item, index) => (
          <li
            key={item.title}
            className={columnClass(index, copy.items.length - 1)}
          >
            <Mark index={index} />
            <h2 className="mt-4 font-serif text-xl leading-tight tracking-tight">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.lead}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function columnClass(index: number, last: number) {
  const rule = 'border-ink/10 py-8 sm:border-t-0 sm:border-l';

  if (index === 0) return 'py-8 sm:pr-8';
  if (index === last) return `${rule} border-t sm:pr-0 sm:pl-8`;
  return `${rule} border-t sm:px-8`;
}

function Mark({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={markClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {index === 0 ? (
        <path d="M4.5 8.2 12 4.2l7.5 4-7.5 4-7.5-4Zm0 3.8 7.5 4 7.5-4M4.5 16l7.5 4 7.5-4" />
      ) : null}
      {index === 1 ? (
        <>
          <path d="M19.2 12a7.2 7.2 0 0 1-12.2 5.2M4.8 12a7.2 7.2 0 0 1 12.2-5.2" />
          <path d="M15.2 4.6h3.2V7.8M8.8 19.4H5.6v-3.2" />
        </>
      ) : null}
      {index === 2 ? (
        <>
          <path d="M4.2 16.4 9.2 11.2l3.1 2.8 6.6-7.2" />
          <path d="M13.6 6.8h5.5v5.5" />
        </>
      ) : null}
    </svg>
  );
}
