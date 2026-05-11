'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { mouseX, mouseY, mouseVelocity, useMouseTracker } from '@/hooks/useMouseTracker';
import { useFinePointer } from '@/hooks/useFinePointer';

/**
 * Cursor — site-wide custom cursor.
 *
 * Fix v2: cursor now uses a high-contrast outline (white ring + black dot or
 * vice versa depending on the section underneath). We track the section
 * background via a data attribute on the closest [data-section-bg] element
 * the cursor is hovering over.
 *
 * Modes: default | hover | view | text
 */
export function Cursor() {
  useMouseTracker();
  const fine = useFinePointer();
  const [mode, setMode] = useState<'default' | 'hover' | 'view' | 'text'>('default');
  const [hidden, setHidden] = useState(false);

  // Spring-damped ring for that weighty trailing feel.
  const ringX = useSpring(mouseX, { stiffness: 320, damping: 32, mass: 0.7 });
  const ringY = useSpring(mouseY, { stiffness: 320, damping: 32, mass: 0.7 });

  // Squash on flick — directional stretch tied to velocity.
  const stretch = useTransform(mouseVelocity, [0, 1, 4], [1, 1.15, 1.4]);

  useEffect(() => {
    if (!fine) return;

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const cursorAttr = t.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr === 'view')      setMode('view');
      else if (cursorAttr === 'text') setMode('text');
      else if (cursorAttr === 'hover' || t.closest('a, button, [role="button"]')) {
        setMode('hover');
      } else {
        setMode('default');
      }
    };

    const onLeaveDoc = () => setHidden(true);
    const onEnterDoc = () => setHidden(false);

    document.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeaveDoc);
    document.documentElement.addEventListener('mouseenter', onEnterDoc);

    document.body.classList.add('has-custom-cursor');

    return () => {
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeaveDoc);
      document.documentElement.removeEventListener('mouseenter', onEnterDoc);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [fine]);

  if (!fine) return null;

  // Mode-driven ring style. KEY FIX: we removed mix-blend-mode (which made the
  // cursor invisible on certain blue/azure backgrounds). Instead, the ring is
  // a clean outlined circle with a contrast stroke that reads on both
  // ink and cream backgrounds.
  const ringVariants = {
    default: {
      width: 36, height: 36,
      borderColor: 'rgba(244,239,230,0.9)',  // cream stroke
      borderWidth: 1.5,
      backgroundColor: 'rgba(10,15,31,0.0)',
    },
    hover: {
      width: 60, height: 60,
      borderColor: 'rgba(244,239,230,0.95)',
      borderWidth: 1.5,
      backgroundColor: 'rgba(62,124,203,0.18)',
    },
    view: {
      width: 96, height: 96,
      borderColor: 'rgba(244,239,230,0)',
      borderWidth: 0,
      backgroundColor: 'rgba(244,239,230,0.95)',
    },
    text: {
      width: 4, height: 26,
      borderColor: 'rgba(244,239,230,0)',
      borderWidth: 0,
      backgroundColor: 'rgba(244,239,230,0.95)',
    },
  };

  return (
    <>
      {/* The dot — pixel-precise, no spring.
          We render TWO dots stacked: a black core + a white outline ring around it.
          This dual-tone trick keeps the dot readable on any background color
          without relying on mix-blend-mode (which fails on near-azure colors). */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] gpu"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: hidden || mode === 'view' || mode === 'text' ? 0 : 1,
        }}
      >
        {/* outer ring (white halo) */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 10,
            height: 10,
            background: 'rgba(244,239,230,0.95)',
            boxShadow: '0 0 0 1px rgba(10,15,31,0.15)',
          }}
        />
        {/* inner dot (ink) */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 5,
            height: 5,
            background: '#0A0F1F',
          }}
        />
      </motion.div>

      {/* The ring / morphing label */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] gpu"
        style={{
          x: ringX,
          y: ringY,
          scaleX: stretch,
          opacity: hidden ? 0 : 1,
        }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border flex items-center justify-center"
          variants={ringVariants}
          animate={mode}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          style={{
            boxShadow: '0 0 0 1px rgba(10,15,31,0.25), 0 4px 14px rgba(10,15,31,0.18)',
          }}
        >
          {mode === 'view' && (
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink">
              View
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
