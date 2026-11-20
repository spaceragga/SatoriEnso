import { capabilities } from '@/content/home/capabilities';
import type { Locale } from '@/content/locale';
type CapabilitiesProps = {
  locale: Locale;
};

type Marks = (typeof capabilities)['ru']['marks'];

export function Capabilities({ locale }: CapabilitiesProps) {
  const copy = capabilities[locale];

  return (
    <section
      id="capabilities"
      className="border-b border-white/10 bg-inverse text-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:gap-8">
        <div className="max-w-[14rem] shrink-0">
          <h2 className="font-serif text-3xl leading-tight tracking-tight">
            {copy.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/65">
            {copy.lead}
          </p>
        </div>
        <ol className="flex min-w-0 flex-1 items-end">
          {copy.modules.map((name, index) => {
            const last = index === copy.modules.length - 1;

            return (
              <li
                key={name}
                className={last ? 'shrink-0' : 'flex min-w-0 flex-1 items-end'}
              >
                <figure className="w-20 shrink-0">
                  <figcaption className="mb-1.5 flex h-7 items-end justify-center text-center text-[10px] leading-tight text-white/70">
                    {name}
                  </figcaption>
                  <div className="h-28 overflow-hidden rounded-md bg-white text-ink shadow-sm">
                    <Screen index={index} marks={copy.marks} />
                  </div>
                </figure>
                {last ? null : (
                  <span
                    aria-hidden
                    className="mb-12 flex-1 text-center text-xs text-white/50"
                  >
                    →
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Screen({ index, marks }: { index: number; marks: Marks }) {
  switch (index) {
    case 0:
      return <Calendar month={marks.month} weekdays={marks.weekdays} />;
    case 1:
      return (
        <Cart count={marks.cartCount} sum={marks.cartSum} pay={marks.pay} />
      );
    case 2:
      return <Calculator />;
    case 3:
      return <Analytics growth={marks.growth} period={marks.period} />;
    case 4:
      return <Crm />;
    case 5:
      return <MapScreen minutes={marks.minutes} />;
    case 6:
      return (
        <Integrations
          site={marks.site}
          crm={marks.crm}
          api={marks.api}
          payment={marks.payment}
          mail={marks.mail}
        />
      );
    default:
      return null;
  }
}

function Calendar({
  month,
  weekdays,
}: {
  month: string;
  weekdays: readonly string[];
}) {
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18];

  return (
    <svg viewBox="0 0 80 112" className="h-full w-full">
      <rect width="80" height="20" fill="#f3f1ec" />
      <text x="8" y="14" fontSize="8" fill="#141414">
        {month}
      </text>
      {weekdays.map((day, index) => (
        <text
          key={day + index}
          x={8 + index * 14}
          y="32"
          fontSize="6"
          fill="#141414"
          opacity="0.4"
        >
          {day}
        </text>
      ))}
      {days.map((day, index) => {
        const on = day === 11;
        return (
          <g key={day}>
            <rect
              x={6 + (index % 5) * 14}
              y={38 + Math.floor(index / 5) * 16}
              width="11"
              height="12"
              rx="2"
              fill={on ? '#c4492c' : 'transparent'}
            />
            <text
              x={11.5 + (index % 5) * 14}
              y={47 + Math.floor(index / 5) * 16}
              textAnchor="middle"
              fontSize="7"
              fill={on ? '#fff' : '#141414'}
            >
              {day}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function Cart({
  count,
  sum,
  pay,
}: {
  count: string;
  sum: string;
  pay: string;
}) {
  return (
    <svg viewBox="0 0 80 112" className="h-full w-full">
      <rect
        x="8"
        y="10"
        width="14"
        height="14"
        rx="2"
        fill="#141414"
        opacity="0.1"
      />
      <rect
        x="28"
        y="12"
        width="40"
        height="4"
        rx="1"
        fill="#141414"
        opacity="0.7"
      />
      <rect
        x="28"
        y="19"
        width="22"
        height="3"
        rx="1"
        fill="#141414"
        opacity="0.3"
      />
      <rect
        x="8"
        y="32"
        width="14"
        height="14"
        rx="2"
        fill="#141414"
        opacity="0.1"
      />
      <rect
        x="28"
        y="34"
        width="34"
        height="4"
        rx="1"
        fill="#141414"
        opacity="0.7"
      />
      <rect
        x="28"
        y="41"
        width="16"
        height="3"
        rx="1"
        fill="#141414"
        opacity="0.3"
      />
      <text x="8" y="66" fontSize="8" fill="#141414">
        {count}
      </text>
      <text x="72" y="66" textAnchor="end" fontSize="8" fill="#141414">
        {sum}
      </text>
      <rect x="8" y="78" width="64" height="18" rx="3" fill="#c4492c" />
      <text x="40" y="90" textAnchor="middle" fontSize="8" fill="#fff">
        {pay}
      </text>
    </svg>
  );
}

function Calculator() {
  return (
    <svg viewBox="0 0 80 112" className="h-full w-full">
      <rect width="80" height="112" fill="#1c1c1c" />
      <text x="72" y="22" textAnchor="end" fontSize="12" fill="#f8f6f2">
        1 240
      </text>
      {Array.from({ length: 12 }, (_, cell) => (
        <rect
          key={cell}
          x={8 + (cell % 3) * 23}
          y={32 + Math.floor(cell / 3) * 19}
          width="18"
          height="15"
          rx="2"
          fill={cell === 11 ? '#c4492c' : '#f8f6f2'}
        />
      ))}
    </svg>
  );
}

function Analytics({ growth, period }: { growth: string; period: string }) {
  const bars = [28, 40, 34, 58, 46, 70];

  return (
    <svg viewBox="0 0 80 112" className="h-full w-full">
      <rect width="80" height="112" fill="#f7f8fb" />
      <text x="8" y="16" fontSize="8" fill="#141414">
        {growth}
      </text>
      <text
        x="72"
        y="16"
        textAnchor="end"
        fontSize="7"
        fill="#141414"
        opacity="0.45"
      >
        {period}
      </text>
      {bars.map((height, index) => (
        <rect
          key={height}
          x={10 + index * 11}
          y={90 - height}
          width="7"
          height={height}
          rx="1.5"
          fill={index === bars.length - 1 ? '#c4492c' : '#2f6fed'}
          opacity={index === bars.length - 1 ? 1 : 0.75}
        />
      ))}
    </svg>
  );
}

function Crm() {
  const rows = [
    { y: 12, tone: '#2f9e44' },
    { y: 40, tone: '#c4492c' },
    { y: 68, tone: '#2f9e44' },
  ];

  return (
    <svg viewBox="0 0 80 112" className="h-full w-full">
      {rows.map((row) => (
        <g key={row.y}>
          <circle cx="16" cy={row.y + 10} r="7" fill="#141414" opacity="0.1" />
          <rect
            x="28"
            y={row.y + 4}
            width="36"
            height="4"
            rx="1"
            fill="#141414"
            opacity="0.75"
          />
          <rect
            x="28"
            y={row.y + 12}
            width="22"
            height="3"
            rx="1"
            fill="#141414"
            opacity="0.28"
          />
          <circle cx="70" cy={row.y + 10} r="3" fill={row.tone} />
        </g>
      ))}
    </svg>
  );
}

function MapScreen({ minutes }: { minutes: string }) {
  return (
    <svg viewBox="0 0 80 112" className="h-full w-full">
      <rect width="80" height="112" fill="#e7eef6" />
      <path
        d="M0 28h80M0 56h80M0 84h80M24 0v112M52 0v112"
        stroke="#fff"
        strokeWidth="4"
      />
      <path
        d="M14 86c12-18 18-20 28-8 8 10 12 6 24-16"
        fill="none"
        stroke="#2f6fed"
        strokeWidth="2.4"
      />
      <path
        d="M48 34c-6 0-10 4-10 9 0 8 10 16 10 16s10-8 10-16c0-5-4-9-10-9z"
        fill="#c4492c"
      />
      <circle cx="48" cy="43" r="3" fill="#fff" />
      <rect x="8" y="92" width="36" height="12" rx="2" fill="#fff" />
      <text x="26" y="101" textAnchor="middle" fontSize="7" fill="#141414">
        {minutes}
      </text>
    </svg>
  );
}

function Integrations({
  site,
  crm,
  api,
  payment,
  mail,
}: {
  site: string;
  crm: string;
  api: string;
  payment: string;
  mail: string;
}) {
  return (
    <svg viewBox="0 0 80 112" className="h-full w-full">
      <rect
        x="6"
        y="10"
        width="26"
        height="14"
        rx="2"
        fill="#141414"
        opacity="0.1"
      />
      <text x="19" y="20" textAnchor="middle" fontSize="6" fill="#141414">
        {site}
      </text>
      <rect
        x="48"
        y="10"
        width="26"
        height="14"
        rx="2"
        fill="#141414"
        opacity="0.1"
      />
      <text x="61" y="20" textAnchor="middle" fontSize="6" fill="#141414">
        {crm}
      </text>
      <rect x="27" y="49" width="26" height="14" rx="2" fill="#c4492c" />
      <text x="40" y="59" textAnchor="middle" fontSize="6" fill="#fff">
        {api}
      </text>
      <rect
        x="6"
        y="88"
        width="26"
        height="14"
        rx="2"
        fill="#141414"
        opacity="0.1"
      />
      <text x="19" y="98" textAnchor="middle" fontSize="6" fill="#141414">
        {payment}
      </text>
      <rect
        x="48"
        y="88"
        width="26"
        height="14"
        rx="2"
        fill="#141414"
        opacity="0.1"
      />
      <text x="61" y="98" textAnchor="middle" fontSize="6" fill="#141414">
        {mail}
      </text>
      <path
        d="M19 24v8c0 8 10 8 21 17M61 24v8c0 8-10 8-21 17M19 88v-8c0-8 10-8 21-17M61 88v-8c0-8-10-8-21-17"
        fill="none"
        stroke="#141414"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
    </svg>
  );
}
