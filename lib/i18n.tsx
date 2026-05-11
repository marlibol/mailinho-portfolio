'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Locale } from './content';

/**
 * Tiny i18n provider. Stores the active locale in React state +
 * localStorage so it persists across reloads.
 */

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
};

const I18nCtx = createContext<Ctx>({
  locale: 'en',
  setLocale: () => {},
  toggle: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('marlibol-locale');
    if (saved === 'vi' || saved === 'en') {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('marlibol-locale', l);
      document.documentElement.lang = l;
    }
  };

  const toggle = () => setLocale(locale === 'en' ? 'vi' : 'en');

  return (
    <I18nCtx.Provider value={{ locale, setLocale, toggle }}>
      {children}
    </I18nCtx.Provider>
  );
}

export function useLocale() {
  return useContext(I18nCtx);
}

/** Helper: pick the right string from a {en, vi} pair. */
export function t<T>(field: { en: T; vi: T }, locale: Locale): T {
  return field[locale];
}
