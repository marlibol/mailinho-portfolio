'use client';

import { motion } from 'framer-motion';
import { SplitText } from '@/components/animations/SplitText';
import { Magnetic } from '@/components/animations/Magnetic';
import { Spotlight } from '@/components/animations/Spotlight';
import { site, ui } from '@/lib/content';
import { useLocale, t } from '@/lib/i18n';

export function Contact() {
  const { locale } = useLocale();
  const L = ui.sections.contact;

  return (
    <Spotlight color="rgba(62, 124, 203, 0.35)" size={560}>
      <section
        id="contact"
        className="relative bg-ink text-cream py-24 md:py-40 grain-overlay grain-overlay-dark overflow-hidden"
      >
        <div className="container-edge">
          <div className="mb-20 md:mb-32">
            <div className="flex items-end justify-between mb-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/50">
                {t(L.kicker, locale)}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/50 hidden md:block">
                {t(ui.stats.status, locale)}
              </span>
            </div>

            <SplitText
              as="h2"
              className="font-display text-mega font-light tracking-tightest leading-[0.86] text-cream"
              stagger={0.04}
            >
              {t(L.h1, locale)}
            </SplitText>
            <SplitText
              as="h2"
              className="font-display text-mega font-light italic tracking-tightest leading-[0.86] text-azure -mt-2 md:-mt-4"
              stagger={0.04}
              delay={0.15}
            >
              {t(L.h2, locale)}
            </SplitText>
          </div>

          <div className="mt-16 md:mt-20">
            <Magnetic strength={0.35}>
              
                href={`mailto:${site.email}`}
                data-cursor="hover"
                className="group inline-flex items-center gap-4 md:gap-6 border-b border-cream/30 pb-3 transition-colors hover:border-azure"
              >
                <span className="font-display font-light italic text-[clamp(2rem,5.5vw,4.5rem)] text-cream leading-none">
                  {t(L.cta, locale)}
                </span>
                <span
                  className="inline-block transition-transform duration-500 ease-expo-out group-hover:translate-x-3 group-hover:text-azure"
                  aria-hidden
                >
                  <svg width="56" height="24" viewBox="0 0 56 24" fill="none" className="md:w-[72px] md:h-[28px]">
                    <path d="M44 4l8 8-8 8M0 12h52" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
                  </svg>
                </span>
              </a>
            </Magnetic>

            <p className="mt-6 max-w-md text-cream/60 leading-relaxed">
              {t(L.intro, locale)}
            </p>
          </div>

          <div className="mt-24 md:mt-40 hairline hairline-light" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-2">
                {t(ui.stats.email, locale)}
              </p>
              
                href={`mailto:${site.email}`}
                data-cursor="hover"
                className="font-display text-lg md:text-xl font-light text-cream hover:text-azure transition-colors break-all"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-2">
                /  Phone
              </p>
              
                href={`tel:${site.phone}`}
                data-cursor="hover"
                className="font-display text-lg md:text-xl font-light text-cream hover:text-azure transition-colors"
              >
                {site.phone}
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-2">
                {t(ui.stats.elsewhere, locale)}
              </p>
              <ul className="flex flex-col gap-1">
                <li>
                  
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="font-display text-lg md:text-xl font-light text-cream hover:text-azure transition-colors inline-flex items-center gap-2 group"
                  >
                    Instagram
                    <span aria-hidden className="inline-block transition-transform duration-500 ease-expo-out group-hover:translate-x-1">↗</span>
                  </a>
                </li>
                <li>
                  
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="font-display text-lg md:text-xl font-light text-cream hover:text-azure transition-colors inline-flex items-center gap-2 group"
                  >
                    LinkedIn
                    <span aria-hidden className="inline-block transition-transform duration-500 ease-expo-out group-hover:translate-x-1">↗</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-2">
                {t(ui.stats.languages, locale)}
              </p>
              <p className="font-display text-lg md:text-xl font-light text-cream">
                EN — C1
                <br />
                {locale === 'vi' ? 'Tiếng Việt — Bản ngữ' : 'Vietnamese — Native'}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 md:mt-44 overflow-hidden">
          <motion.h2
            initial={{ y: '50%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light leading-[0.85] tracking-tightest text-cream text-center"
            style={{ fontSize: 'clamp(5rem, 22vw, 24rem)' }}
          >
            <span className="italic text-azure">marli</span>bol
          </motion.h2>
        </div>
      </section>
    </Spotlight>
  );
}
