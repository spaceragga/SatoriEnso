import { manifesto } from '@/content/home/manifesto';
import type { Locale } from '@/content/locale';

type ManifestoProps = {
  locale: Locale;
};

export function Manifesto({ locale }: ManifestoProps) {
  const copy = manifesto[locale];

  return (
    <section id="studio" className="bg-inverse text-white">
      <div className="mx-auto max-w-4xl px-6 py-10 text-center sm:py-12">
        <p className="font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
          {copy.line}
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {copy.pillars.map((item) => (
            <li key={item} className="text-sm leading-snug text-white/70">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
