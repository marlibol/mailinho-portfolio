'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { Marquee } from '@/components/ui/Marquee';
import { SplitText } from '@/components/animations/SplitText';
import { projects, ui } from '@/lib/content';
import { useLocale, t } from '@/lib/i18n';

export function Work() {
  const { locale } = useLocale();
  const L = ui.sections.work;

  return (
    <section
      id="work"
      className="relative bg-cream text-ink py-24 md:py-40 grain-overlay"
    >
      <div className="container-edge">
        <div className="mb-20 md:mb-32">
          <div className="flex items-end justify-between mb-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/50">
              {t(L.kicker, locale)}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/50">
              {String(projects.length).padStart(2, '0')} {t(L.entries, locale)}
            </span>
          </div>

          <SplitText
            as="h2"
            className="font-display text-mega font-light tracking-tightest leading-[0.88] text-ink"
            stagger={0.04}
          >
            {t(L.h1, locale)}
          </SplitText>
          <SplitText
            as="h2"
            className="font-display text-mega font-light italic tracking-tightest leading-[0.88] text-ink/70 -mt-2 md:-mt-4"
            stagger={0.04}
            delay={0.15}
          >
            {t(L.h2, locale)}
          </SplitText>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 max-w-xl text-ink/70 leading-relaxed"
          >
            {t(L.intro, locale)}
          </motion.p>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((p, i) => (
            <div key={p.slug}>
              <ProjectCard project={p} i={i} />

              {i < projects.length - 1 && (
                <div className="mt-24 md:mt-40">
                  <Marquee
                    speed={50}
                    direction={i % 2 === 0 ? 'left' : 'right'}
                    className="py-6"
                  >
                    {/* CONTRAST FIX: marquee title was too faded (text-ink/15).
                        Bumped to /35 so projects don't look like ghost text. */}
                    <span className="font-display text-[clamp(2.5rem,7vw,6rem)] font-light italic leading-none text-ink/35 whitespace-nowrap">
                      {t(p.title, locale)}&nbsp;
                      <span className="not-italic text-azure/50 mx-6">★</span>
                      &nbsp;{t(p.venue, locale)}&nbsp;
                      <span className="not-italic text-azure/50 mx-6">★</span>
                      &nbsp;
                    </span>
                  </Marquee>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
