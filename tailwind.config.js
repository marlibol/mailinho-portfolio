/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Editorial palette — kept identical to v1.
        ink: {
          DEFAULT: '#0A0F1F',
          deep:    '#06091A',
          950:     '#0A0F1F',
          900:     '#101632',
          800:     '#1B2245',
          700:     '#2A3361',
        },
        azure: {
          DEFAULT: '#3E7CCB',
          400:     '#5B95DC',
          500:     '#3E7CCB',
          600:     '#2C66B0',
          700:     '#1F4F92',
        },
        cream: {
          DEFAULT: '#F4EFE6',
          50:      '#FBF8F2',
          100:     '#F4EFE6',
          200:     '#E9E2D2',
        },
        bone: '#EAE3D2',
        rust: '#B8542B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // ─────────────────────────────────────────────────
        // V1 — existing display scale (kept, untouched)
        // ─────────────────────────────────────────────────
        'mega':   ['clamp(4rem, 14vw, 14rem)', { lineHeight: '0.88', letterSpacing: '-0.04em' }],
        'giant':  ['clamp(3rem, 10vw, 9rem)',  { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        'huge':   ['clamp(2.5rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'large':  ['clamp(2rem, 5vw, 4rem)',   { lineHeight: '1.0',  letterSpacing: '-0.025em' }],

        // ─────────────────────────────────────────────────
        // R-batch additions — refined editorial hierarchy.
        // Use these in redesigned components only.
        //
        // The naming:
        //   `editorial-*` = display headings (Fraunces serif)
        //   `body-*`      = readable body copy (Inter Tight)
        //   `meta-*`      = labels, kickers, mono stamps
        // ─────────────────────────────────────────────────

        // EDITORIAL DISPLAY — for role/project/section headings
        // editorial-xs   ~ in-card section labels
        // editorial-sm   ~ project titles in Polaroid/Strip
        // editorial-md   ~ Featured project title, Lineage role title (~32px)
        // editorial-lg   ~ Featured cover title, Production Diary masthead (~48-56px)
        // editorial-xl   ~ Closing spread "Get in touch" (~76px)
        'editorial-xs': ['1.25rem',  { lineHeight: '1.15', letterSpacing: '-0.012em' }], // 20px
        'editorial-sm': ['1.625rem', { lineHeight: '1.10', letterSpacing: '-0.015em' }], // 26px
        'editorial-md': ['clamp(1.75rem, 3.4vw, 2.25rem)', { lineHeight: '1.05', letterSpacing: '-0.018em' }], // 28→36px
        'editorial-lg': ['clamp(2.5rem, 5vw, 3.5rem)',     { lineHeight: '0.98', letterSpacing: '-0.025em' }], // 40→56px
        'editorial-xl': ['clamp(3.5rem, 7vw, 4.75rem)',    { lineHeight: '0.92', letterSpacing: '-0.03em'  }], // 56→76px

        // BODY — readable copy.
        // body-sm  ~ small notes, captions inside cards
        // body     ~ standard body (15px) replaces too-small 14px default
        // body-lg  ~ pull quotes, primary paragraphs (17px)
        // body-xl  ~ hero pull quotes, opening paragraph (20-22px)
        'body-sm': ['0.875rem', { lineHeight: '1.55' }], // 14px
        'body':    ['0.9375rem',{ lineHeight: '1.65' }], // 15px
        'body-lg': ['1.0625rem',{ lineHeight: '1.7'  }], // 17px
        'body-xl': ['1.375rem', { lineHeight: '1.45' }], // 22px italic quotes

        // META — uniform mono stamps and labels
        // meta-xs  ~ tiny tag pills (8-9px)
        // meta     ~ standard kicker labels (10-11px tracking 0.25em)
        // meta-lg  ~ hero status labels (12-13px)
        'meta-xs': ['0.5625rem', { lineHeight: '1.5', letterSpacing: '0.22em' }], // 9px
        'meta':    ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.3em'  }], // 11px
        'meta-lg': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.2em'  }], // 13px

        // STAT — for big numbers in stats strips (Featured Project page)
        'stat': ['clamp(3rem, 6vw, 4.5rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }], // 48→72px
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'tighter':  '-0.035em',
        'subtle':   '-0.012em',
      },
      // R-batch addition — semantic spacing helpers.
      // Use these on <section> instead of mixed py-24/py-40.
