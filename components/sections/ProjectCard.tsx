'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { DistortImage } from '@/components/animations/DistortImage';
import { SplitText } from '@/components/animations/SplitText';
import { useLocale, t } from '@/lib/i18n';
import type { Project } from '@/lib/content';

type ProjectCardProps = {
  project: Project;
  i: number;
};

export function ProjectCard({ project, i }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isOdd = i % 2 === 1;
  const { locale } = useLocale();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.0, 1.02]);
  const y     = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <article ref={ref} className="relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <motion.div
          style={{ scale, y }}
          className={`relative md:col-span-7 ${isOdd ? 'md:col-start-6' : ''}`}
        >
          <DistortImage
            src={project.cover}
            alt={t(project.title, locale)}
            width={1600}
            height={1000}
            className="aspect-[16/10] w-full shadow-editorial"
          />
          <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-cream px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
            {project.index} / {project.year}
          </div>
        </motion.div>

        <div className={`md:col-span-5 ${isOdd ? 'md:col-start-1 md:row-start-1 md:text-right' : ''}`}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block font-mono text-[11px] uppercase tracking-[0.3em] text-azure mb-4"
          >
            {t(project.kicker, locale)}
          </motion.span>

          {/* CONTRAST FIX: titles were rendering with split-text reveal which
              makes them look "blurry" while in-view. Solid display rendering
              + full text-ink contrast keeps them readable from any angle. */}
          <h3
            className="font-display text-huge font-light tracking-tighter text-ink leading-[0.95]"
          >
            {t(project.title, locale)}
          </h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 font-display italic text-lg md:text-xl text-ink/70"
          >
            {t(project.venue, locale)}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-ink/75 leading-relaxed max-w-md"
          >
            {t(project.summary, locale)}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`mt-8 flex flex-wrap gap-2 ${isOdd ? 'md:justify-end' : ''}`}
          >
            {t(project.roles, locale).map((role) => (
              <li
                key={role}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70 border border-ink/15 px-3 py-1.5"
              >
                {role}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </article>
  );
}
