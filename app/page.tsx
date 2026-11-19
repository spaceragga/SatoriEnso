import { HomePage } from '@/components/home-page';
import { LocalePanels } from '@/components/locale-panels';

export default function Page() {
  return <LocalePanels render={(locale) => <HomePage locale={locale} />} />;
}
