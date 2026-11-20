'use client';

import Image from 'next/image';
import { useRef, useState, type PointerEvent } from 'react';
import { projects } from '@/content/home/projects';
import type { Locale } from '@/content/locale';

type ProjectsProps = {
  locale: Locale;
};

const shotSize = { width: 960, height: 540 };
const rowRem = 7.25;
const visibleRows = 4;

function ArrowButton({
  label,
  direction,
  onClick,
}: {
  label: string;
  direction: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="group grid size-9 place-items-center rounded-full border border-ink/15 text-ink transition duration-300 ease-out hover:border-accent hover:bg-accent hover:text-white active:scale-90"
    >
      <svg
        viewBox="0 0 16 16"
        aria-hidden
        className="size-4 origin-center transition-transform duration-300 ease-out group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={direction < 0 ? 'M4 10 8 6l4 4' : 'M4 7 8 11l4-4'} />
      </svg>
    </button>
  );
}

const shots = [
  '/images/home/project-medicine.webp',
  '/images/home/project-b2b.webp',
  '/images/home/project-realty.webp',
  '/images/home/project-education.webp',
] as const;

export function Projects({ locale }: ProjectsProps) {
  const copy = projects[locale];
  const maxIndex = Math.max(0, copy.items.length - visibleRows);
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ y: number; index: number } | null>(null);

  function step(direction: number) {
    setIndex((value) =>
      Math.min(maxIndex, Math.max(0, Math.round(value) + direction)),
    );
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { y: event.clientY, index };
    setDragging(true);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const next =
      drag.current.index + (drag.current.y - event.clientY) / (rowRem * 16);
    setIndex(Math.min(maxIndex, Math.max(0, next)));
  }

  function onPointerUp() {
    drag.current = null;
    setDragging(false);
    setIndex((value) => Math.min(maxIndex, Math.max(0, Math.round(value))));
  }

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl px-6 pt-12 pb-6 sm:pb-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <header className="sm:grid sm:grid-cols-[13rem_1fr] sm:gap-8">
          <div className="sm:col-start-2">
            <h2 className="font-serif text-3xl tracking-tight">
              {copy.heading}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              {copy.intro}
            </p>
          </div>
        </header>
        <div className="mt-4 grid grid-cols-[2rem_1fr] items-center gap-3">
          <div className="flex flex-col gap-2">
            <ArrowButton
              label={copy.up}
              direction={-1}
              onClick={() => step(-1)}
            />
            <ArrowButton
              label={copy.down}
              direction={1}
              onClick={() => step(1)}
            />
          </div>
          <div
            className="h-[29rem] cursor-grab touch-none select-none overflow-hidden active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <ul
              className="will-change-transform"
              style={{
                transform: `translateY(-${index * rowRem}rem)`,
                transition: dragging ? 'none' : 'transform 320ms ease',
              }}
            >
              {copy.items.map((item, itemIndex) => {
                const shot = shots[itemIndex % shots.length];
                if (!shot) return null;
                const number = String(itemIndex + 1).padStart(2, '0');

                return (
                  <li
                    key={item.title}
                    className="grid h-[7.25rem] items-center gap-4 border-t border-ink/10 sm:grid-cols-[13rem_1fr] sm:gap-8"
                  >
                    <Image
                      src={shot}
                      alt=""
                      width={shotSize.width}
                      height={shotSize.height}
                      draggable={false}
                      className="h-20 w-full rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-xs tracking-wide text-ink/40">
                        {number}
                      </p>
                      <h3 className="mt-1 font-serif text-xl tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 max-w-md truncate text-sm text-muted">
                        {item.lead}
                      </p>
                      <p className="mt-2 text-xs text-ink/60">
                        {item.tags.join(' · ')}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-16 text-center font-serif text-base leading-8 font-medium text-ink/80">
        {copy.domains.map((domain, domainIndex) => (
          <span key={domain} className="whitespace-nowrap">
            {domainIndex > 0 ? (
              <span className="px-2.5 text-ink/35">·</span>
            ) : null}
            {domain}
          </span>
        ))}
      </p>
    </section>
  );
}
