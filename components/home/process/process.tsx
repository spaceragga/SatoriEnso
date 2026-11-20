import { process as steps } from '@/content/home/process';
import type { Locale } from '@/content/locale';

type ProcessProps = {
  locale: Locale;
};

export function Process({ locale }: ProcessProps) {
  const copy = steps[locale];

  return (
    <section
      id="process"
      className="mx-auto w-full max-w-6xl border-t border-ink/10 px-6 pt-8 pb-16"
    >
      <h2 className="font-serif text-3xl tracking-tight">{copy.heading}</h2>
      <ol className="mt-6 grid gap-8 sm:grid-cols-5 sm:gap-4">
        {copy.steps.map((step, index) => {
          const number = String(index + 1).padStart(2, '0');

          return (
            <li key={step.title} className="min-w-0">
              <div className="flex items-center gap-3">
                <p className="font-serif text-3xl leading-none tracking-tight">
                  {number}
                </p>
                {index < copy.steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="hidden h-px flex-1 bg-ink/20 sm:block"
                  />
                ) : null}
              </div>
              <span aria-hidden className="mt-3 block h-0.5 w-6 bg-accent" />
              <h2 className="mt-4 font-serif text-xl leading-tight tracking-tight">
                {step.title}
              </h2>
              <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-muted">
                {step.lead}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
