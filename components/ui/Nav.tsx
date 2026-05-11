'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Magnetic } from '@/components/animations/Magnetic';
import { ui } from '@/lib/content';
import { useLocale, t } from '@/lib/i18n';

/**
 * Nav — minimal, fixed, with EN/VI toggle.
 *
 * Numbering comes from content.ts ui.nav so it always matches the menu
 * and the section labels. No more "03 vs 04" mismatch.
 */
export function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const borderBottomColor = useTransform(
    scrollY,
    [0, 200],
    ['rgba(10,15,31,0)', 'rgba(10,15,31,0.06)']
  );

  const { locale, toggle } = useLocale();
  const items = ui.nav[locale];

  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const fmt = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh',
      });
      setTime(fmt.format(d));
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header className="fixed left-0 right-0 top-0 z-50">
      <motion.div
        className="absolute inset-0 glass"
        style={{
          opacity: bgOpacity,
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor,
        }}
      />
      <div className="relative container-edge flex items-center justify-between py-4 md:py-5">
        {/* Wordmark */}
        <Link
          href="#hero"
          className="font-display text-lg leading-none tracking-tightest"
          data-cursor="hover"
        >
          <span className="italic">marli</span>bol<span className="text-azure">.</span>
        </Link>

        {/* Center nav — desktop only */}
        <nav className="hidden md:flex items-center gap-7">
          {items.slice(1).map((item) => (
            <Magnetic key={item.href} strength={0.25}>
              <Link
                href={item.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.25em] text-ink/70 hover:text-ink transition-colors"
                data-cursor="hover"
              >
                <span className="text-azure mr-2">{item.n}</span>
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 ease-expo-out group-hover:w-full" />
              </Link>
            </Magnetic>
          ))}
        </nav>

        {/* Right cluster: language toggle + clock */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={toggle}
            data-cursor="hover"
            aria-label={`Switch to ${locale === 'en' ? 'Vietnamese' : 'English'}`}
            className="group flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/70 hover:text-ink transition-colors"
          >
            <span className={locale === 'en' ? 'text-ink font-medium' : 'opacity-50'}>EN</span>
            <span className="opacity-30 mx-0.5">/</span>
            <span className={locale === 'vi' ? 'text-ink font-medium' : 'opacity-50'}>VI</span>
          </button>

          {/* Time — desktop only */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/70">
            <span className="size-1.5 rounded-full bg-azure animate-pulse" />
            <span className="tabular-nums">{time || '— —'}</span>
            <span>HAN</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
