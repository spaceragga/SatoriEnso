import { LocalePanels } from '@/components/locale-panels';
import { EnsoMark } from '@/components/site/enso-mark';
import type { Locale } from '@/content/locale';
import { messages } from '@/content/messages';

const fieldClass =
  'border border-white/15 bg-white/8 px-3 py-2.5 text-sm text-white outline-none';

function FooterIntro({ locale }: { locale: Locale }) {
  const copy = messages[locale];

  return (
    <div className="flex min-w-0 items-center gap-4">
      <EnsoMark className="size-12 shrink-0" />
      <h2 className="min-w-0 max-w-[16.5rem] font-serif text-lg leading-snug tracking-tight sm:max-w-[19rem] sm:text-xl">
        {copy.footerLead}
      </h2>
    </div>
  );
}

function FooterForm({ locale }: { locale: Locale }) {
  const copy = messages[locale];

  return (
    <form action="/api/lead.php" method="post" className="grid min-w-0 gap-3">
      <p className="text-sm text-white/70">{copy.footerPrompt}</p>
      <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
        <label className="grid gap-1.5 text-xs text-white/50">
          {copy.fieldName}
          <input
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-1.5 text-xs text-white/50">
          {copy.fieldEmail}
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </label>
        <button
          type="submit"
          className="rounded-md bg-accent px-5 py-2.5 text-sm whitespace-nowrap text-white"
        >
          {copy.send}
        </button>
      </div>
      <label className="grid gap-1.5 text-xs text-white/50">
        {copy.fieldAbout}
        <textarea
          name="about"
          required
          rows={2}
          className={`min-h-16 resize-y ${fieldClass}`}
        />
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex flex-col gap-1 text-sm text-white/70 sm:flex-row sm:gap-x-6">
          <a href={`https://t.me/${copy.telegramHandle.replace('@', '')}`}>
            {copy.telegramLabel} {copy.telegramHandle}
          </a>
          <a href={`mailto:${copy.emailAddress}`}>
            {copy.emailLabel} {copy.emailAddress}
          </a>
        </p>
        <p className="text-sm text-white/55">{copy.footerReply}</p>
      </div>
    </form>
  );
}

function Rights({ locale }: { locale: Locale }) {
  return <p className="text-sm text-white/45">{messages[locale].rights}</p>;
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-inverse text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 pt-12 pb-6 lg:grid-cols-[minmax(16rem,0.7fr)_1.3fr] lg:items-center lg:gap-12 lg:pt-14">
        <LocalePanels render={(locale) => <FooterIntro locale={locale} />} />
        <LocalePanels render={(locale) => <FooterForm locale={locale} />} />
      </div>
      <div className="mx-auto w-full max-w-7xl px-6 pb-6">
        <LocalePanels render={(locale) => <Rights locale={locale} />} />
      </div>
    </footer>
  );
}
