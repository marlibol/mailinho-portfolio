'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SplitText } from '@/components/animations/SplitText';
import { Spotlight } from '@/components/animations/Spotlight';
import { experience, education, ui } from '@/lib/content';
import { useLocale, t } from '@/lib/i18n';

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { locale } = useLocale();
  const L = ui.sections.experience;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.5], ['0%', '100%']);

  return (
    <Spotlight color="rgba(62, 124, 203, 0.25)" size={500}>
      <section
        ref={ref}
        id="experience"
        className="relative bg-ink text-cream py-24 md:py-40 grain-overlay grain-overlay-dark"
      >
        <div className="container-edge">
          <div className="mb-20 md:mb-32">
            <div className="flex items-end justify-between mb-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/50">
                {t(L.kicker, locale)}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/50 hidden md:block">
                {t(L.label, locale)}
              </span>
            </div>

            <SplitText
              as="h2"
              className="font-display text-mega font-light tracking-tightest leading-[0.88] text-cream"
              stagger={0.04}
            >
              {t(L.h1, locale)}
            </SplitText>
            <SplitText
              as="h2"
              className="font-display text-mega font-light italic tracking-tightest leading-[0.88] text-cream/70 -mt-2 md:-mt-4"
              stagger={0.04}
              delay={0.15}
            >
              {t(L.h2, locale)}
            </SplitText>
          </div>

          <div className="relative pl-6 md:pl-10">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-cream/10" />
            <motion.div
              className="absolute left-0 top-0 w-px bg-azure origin-top"
              style={{ height: lineHeight }}
              aria-hidden
            />

            <ul className="group/list flex flex-col">
              {experience.map((row, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative py-8 md:py-10 border-b border-cream/10 last:border-b-0 transition-opacity duration-500 group-hover/list:opacity-40 hover:!opacity-100"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8">
                    <span className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cream/50 pt-1">
                      {t(row.period, locale)}
                    </span>
                    <div className="md:col-span-6">
                      <h3 className="font-display text-2xl md:text-3xl font-light text-cream leading-tight">
                        {t(row.role, locale)}
                      </h3>
                      <p className="mt-2 font-display italic text-cream/60">
                        {t(row.org, locale)}
                      </p>
                    </div>
                    <p className="md:col-span-3 text-cream/60 text-sm md:text-base leading-relaxed md:text-right">
                      {t(row.note, locale)}
                    </p>
                  </div>
                  <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 h-px w-0 bg-azure transition-all duration-500 ease-expo-out group-hover:w-4" />
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-24 md:mt-32 hairline hairline-light" />
          <div className="mt-12 md:mt-16">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/50">
              {t(L.eduTitle, locale)}
            </span>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {education.map((ed, i) => (
                <li key={i} className="border-l border-cream/15 pl-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-2">
                    {t(ed.period, locale)}
                  </p>
                  <h4 className="font-display text-xl md:text-2xl font-light text-cream">
                    {t(ed.school, locale)}
                  </h4>
                  <p className="mt-1 italic text-cream/70">{t(ed.degree, locale)}</p>
                  <p className="mt-2 text-cream/55 text-sm">{t(ed.note, locale)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Spotlight>
  );
}
