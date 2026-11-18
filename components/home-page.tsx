import { siteName, messages, type Locale } from '@/content/messages';

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const copy = messages[locale];

  return (
    <>
      <p className="text-sm tracking-wide text-muted">{copy.place}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">{siteName}</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed">
        {copy.description}
      </p>
    </>
  );
}
