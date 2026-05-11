'use client';

import { motion } from 'framer-motion';
import { SplitText } from '@/components/animations/SplitText';
import { Marquee } from '@/components/ui/Marquee';
import { skills, ui } from '@/lib/content';
import { useLocale, t } from '@/lib/i18n';

export function Skills() {
  const { locale } = useLocale();
  const L = ui.sections.skills;
  const allTools = skills.flatMap((g) => g.items[locale]);

  return (
    <section
      id="skills"
      className="relative bg-cream text-ink py-24 md:py-40 grain-overlay overflow-hidden"
    >
      <div className="container-edge">
        <div className="mb-20 md:mb-28">
          <div className="flex items-end justify-between mb-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/50">
              {t(L.kicker, locale)}
            </span>
          </div>

          <SplitText
            as="h2"
            className="font-display text-mega font-light tracking-tightest leading-[0.88] text-ink"
            stagger={0.04}
          >
            {t(L.h1, locale)}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-xl text-ink/70 leading-relaxed"
          >
            {t(L.intro, locale)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skills.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-6">
                {String(gi + 1).padStart(2, '0')} &mdash; {t(group.group, locale)}
              </p>
              <ul className="flex flex-col">
                {group.items[locale].map((item, i) => (
                  <li
                    key={i}
                    className="group flex items-center justify-between py-3 border-b border-ink/10 last:border-b-0"
                  >
                    <span className="font-display text-xl md:text-2xl font-light text-ink leading-tight">
                      {item}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40 transition-all duration-500 group-hover:text-azure group-hover:tracking-[0.4em]">
                      ·{String(i + 1).padStart(2, '0')}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 md:mt-36">
        <Marquee speed={60} direction="left" className="py-4">
          <span className="font-display text-[clamp(3rem,9vw,8rem)] font-light italic leading-none text-ink/20 whitespace-nowrap">
            {allTools.map((t, i) => (
              <span key={i}>
                {t}
                {i < allTools.length - 1 && (
                  <span className="not-italic text-azure/40 mx-6">/</span>
                )}
              </span>
            ))}
            <span className="not-italic text-azure/40 mx-6">/</span>
          </span>
        </Marquee>
      </div>
    </section>
  );
}
