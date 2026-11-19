import { LocalePanels } from '@/components/locale-panels';
import { NotFoundView } from '@/components/not-found-view';

export default function NotFound() {
  return <LocalePanels render={(locale) => <NotFoundView locale={locale} />} />;
}
