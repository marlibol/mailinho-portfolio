'use client';

import { motion } from 'framer-motion';
import { SplitText } from '@/components/animations/SplitText';
import { hobbies, ui } from '@/lib/content';
import { useLocale, t } from '@/lib/i18n';

/**
 * Hobbies — personal, off-hours section.
 * Cream background, minimal layout. Image slots left empty so Mai Linh
 * can drop photos in later (just `data-photo` placeholders for now).
 */
export function Hobbies() {
  const { locale } = useLocale();
  const L = ui.sections.hobbies;

  return (
    <section
      id="hobbies"
      className="relative bg-cream text-ink py-24 md:py-40 grain-overlay overflow-hidden"
    >
      <div className="container-edge">
        {/* Header */}
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
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-xl text-ink/70 leading-relaxed"
          >
            {t(L.intro, locale)}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.title.en}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              {/* Image placeholder slot — empty for now.
                  Replace this div with an <Image> tag when photos are added. */}
              <div
                className="relative aspect-[4/3] w-full mb-6 overflow-hidden bg-ink/5 border border-ink/10 flex items-center justify-center"
                data-photo-slot={`hobby-${i + 1}`}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/30">
                  Photo {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-2">
                {String(i + 1).padStart(2, '0')} — {t(h.by, locale)}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-ink mb-3 leading-tight">
                {t(h.title, locale)}
              </h3>
              <p className="text-ink/70 leading-relaxed max-w-md">
                {t(h.note, locale)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
