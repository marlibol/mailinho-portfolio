'use client';

import { motion } from 'framer-motion';
import { SplitText } from '@/components/animations/SplitText';
import { Parallax } from '@/components/animations/Parallax';
import { DistortImage } from '@/components/animations/DistortImage';
import { about, ui } from '@/lib/content';
import { useLocale, t } from '@/lib/i18n';

/**
 * About — removed the "Since 2023" stat per Mai Linh's request.
 * Stats row is now 3 cells (Based / Languages / Field) instead of 4.
 */
export function About() {
  const { locale } = useLocale();
  const L = ui.sections.about;
  const paras = about[locale];

  return (
    <section
      id="about"
      className="relative bg-cream text-ink py-24 md:py-40 overflow-hidden grain-overlay"
    >
      <div className="container-edge">
        <div className="mb-16 md:mb-24 flex items-end justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/50">
            {t(L.kicker, locale)}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/50 hidden md:block">
            {t(L.label, locale)}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5 md:row-span-2">
            <Parallax amount={80} reverse>
              <DistortImage
                src="/images/portrait-source.jpg"
                alt="Mai Linh Ho — portrait, Hanoi"
                width={900}
                height={1200}
                className="aspect-[3/4] w-full max-w-[480px] shadow-editorial"
                priority
              />
            </Parallax>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
              Fig. 01 — Hà Nội, 2026
            </p>
          </div>

          <div className="md:col-span-7 flex flex-col">
            <SplitText
              as="h2"
              className="font-display text-giant font-light leading-[0.92] tracking-tightest text-ink"
              stagger={0.04}
            >
              {t(L.h1, locale)}
            </SplitText>
            <SplitText
              as="h2"
              className="font-display text-giant font-light italic leading-[0.92] tracking-tightest text-ink/80 -mt-2"
              stagger={0.04}
              delay={0.15}
            >
              {t(L.h2, locale)}
            </SplitText>

            <div className="mt-12 md:mt-16 max-w-xl space-y-6 text-base md:text-lg leading-relaxed text-ink/80">
              {paras.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* Stats — removed "Since" cell, now 3 columns */}
        <div className="mt-24 md:mt-32 hairline" />
        <div className="mt-10 grid grid-cols-3 gap-8">
          {[
            { k: t(ui.stats.based, locale),     v: t(site_city(locale), locale) },
            { k: t(ui.stats.languages, locale), v: 'EN / VI' },
            { k: t(ui.stats.field, locale),     v: t(field_label, locale) },
          ].map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-1">
                /  {it.k}
              </p>
              <p className="font-display text-2xl md:text-3xl font-light text-ink">
                {it.v as string}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Local helpers (kept inside About so we don't pollute content.ts).
import { site } from '@/lib/content';
function site_city(locale: 'en' | 'vi') {
  // Wraps city as a {en, vi} object so we can pass it through t().
  return site.city;
}
const field_label = {
  en: 'Social + Editorial',
  vi: 'Sự kiện + Biên tập',
} as const;
