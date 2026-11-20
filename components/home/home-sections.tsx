import { Hero } from '@/components/home/hero/hero';
import { Manifesto } from '@/components/home/manifesto/manifesto';
import { Projects } from '@/components/home/projects/projects';
import { Solutions } from '@/components/home/solutions/solutions';
import { Capabilities } from '@/components/home/capabilities/capabilities';
import { LocalePanels } from '@/components/locale-panels';

export function HomeSections() {
  return (
    <LocalePanels
      render={(locale) => (
        <>
          <Hero locale={locale} />
          <Manifesto locale={locale} />
          <Projects locale={locale} />
          <Solutions locale={locale} />
          <Capabilities locale={locale} />
        </>
      )}
    />
  );
}
