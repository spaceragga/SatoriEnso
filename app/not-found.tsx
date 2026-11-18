import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">
        Страница не найдена
      </h1>
      <Link className="mt-6 underline underline-offset-4" href="/">
        На главную
      </Link>
    </>
  );
}
