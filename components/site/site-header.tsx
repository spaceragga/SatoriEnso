import { LocalePanels } from '@/components/locale-panels';
import { LocaleSwitch } from '@/components/locale-switch';
import { DiscussLink } from '@/components/site/discuss-link';
import { Logo } from '@/components/site/logo';
import { SiteNav } from '@/components/site/site-nav';

export function SiteHeader() {
  return (
    <header className="bg-canvas">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-8 gap-y-4 px-6 py-4">
        <LocalePanels
          render={(locale) => <Logo locale={locale} className="order-1" />}
        />
        <div className="order-3 w-full min-w-0 lg:order-2 lg:w-auto lg:flex-1">
          <LocalePanels render={(locale) => <SiteNav locale={locale} />} />
        </div>
        <div className="order-2 flex w-full shrink-0 basis-full items-center justify-end gap-5 lg:order-3 lg:ml-auto lg:w-auto lg:shrink lg:basis-auto">
          <LocaleSwitch />
          <LocalePanels render={(locale) => <DiscussLink locale={locale} />} />
        </div>
      </div>
    </header>
  );
}
