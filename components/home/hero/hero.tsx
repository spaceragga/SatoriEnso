import Image from 'next/image';
import Link from 'next/link';
import { EnsoMark } from '@/components/site/enso-mark';
import { hero } from '@/content/home/hero';
import type { Locale } from '@/content/locale';

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const copy = hero[locale];

  return (
    <section className="mx-auto -mb-14 grid w-full max-w-7xl items-center gap-8 px-6 pt-6 pb-2 lg:grid-cols-[0.9fr_1.1fr] lg:gap-2 lg:pt-10 lg:pb-4">
      <div>
        <h1 className="max-w-xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          {copy.lead}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="rounded-md bg-accent px-5 py-2.5 text-sm text-white"
          >
            {copy.discuss}
          </Link>
          <Link
            href="/#projects"
            className="rounded-md border border-ink/15 bg-white px-5 py-2.5 text-sm text-ink"
          >
            {copy.projects}
          </Link>
        </div>
        <p className="mt-8 text-sm text-muted">{copy.marks.join(' · ')}</p>
      </div>
      <HeroArt />
    </section>
  );
}

const screenClass =
  'absolute h-auto rounded-xl border border-black/8 bg-white shadow-[0_22px_40px_rgba(20,20,20,0.14)]';

const screens = [
  {
    src: '/images/home/hero-board.webp',
    width: 1152,
    height: 864,
    className:
      'top-[4%] left-[30%] z-10 w-[56%] origin-bottom [transform:rotateY(-22deg)_rotateX(8deg)]',
  },
  {
    src: '/images/home/hero-schedule.webp',
    width: 1152,
    height: 864,
    className:
      'top-[32%] left-[24%] z-20 w-[42%] origin-bottom [transform:rotateY(-18deg)_rotateX(6deg)]',
  },
  {
    src: '/images/home/hero-chart.webp',
    width: 1280,
    height: 720,
    className:
      'top-[38%] right-[2%] z-30 w-[40%] origin-left [transform:rotateY(-16deg)_rotateX(5deg)]',
  },
] as const;

function HeroArt() {
  return (
    <div
      className="relative mx-auto h-[32rem] w-full max-w-[40rem] [perspective:1400px]"
      aria-hidden
    >
      <EnsoMark className="absolute top-[38%] left-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 text-ink sm:size-[34rem]" />
      {screens.map((screen) => (
        <Image
          key={screen.src}
          src={screen.src}
          alt=""
          width={screen.width}
          height={screen.height}
          className={`${screenClass} ${screen.className}`}
        />
      ))}
      <div className="absolute top-[34%] left-[12%] z-40 w-[7.4rem] rounded-[1.85rem] bg-ink p-[0.36rem] shadow-[0_28px_48px_rgba(20,20,20,0.28)] ring-1 ring-white/25">
        <span className="absolute top-7 -left-px h-6 w-px rounded-l bg-ink/80" />
        <span className="absolute top-14 -left-px h-9 w-px rounded-l bg-ink/80" />
        <span className="absolute top-10 -right-px h-12 w-px rounded-r bg-ink/80" />
        <div className="relative overflow-hidden rounded-[1.35rem] bg-white">
          <span className="absolute top-1.5 left-1/2 z-10 h-1.5 w-7 -translate-x-1/2 rounded-full bg-ink" />
          <Image
            src="/images/home/hero-phone.webp"
            alt=""
            width={531}
            height={1152}
            className="h-auto w-full translate-y-5"
          />
        </div>
      </div>
    </div>
  );
}
