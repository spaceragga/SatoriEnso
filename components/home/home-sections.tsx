import { Hero } from '@/components/home/hero/hero';
import { LocalePanels } from '@/components/locale-panels';

export function HomeSections() {
  return <LocalePanels render={(locale) => <Hero locale={locale} />} />;
}
