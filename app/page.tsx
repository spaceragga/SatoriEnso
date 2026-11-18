import { site } from '@/content/site';

export default function HomePage() {
  return (
    <>
      <p className="text-sm tracking-wide text-muted">{site.place}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">
        {site.name}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed">
        {site.description}
      </p>
    </>
  );
}
