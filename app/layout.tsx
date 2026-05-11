import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { AppShell } from '@/components/AppShell';
import { Nav } from '@/components/ui/Nav';
import { I18nProvider } from '@/lib/i18n';
import { site } from '@/lib/content';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const interTight = Inter_Tight({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
});

// Metadata reads English version since this runs at build time.
// The HTML lang attribute is updated client-side by I18nProvider after hydration.
export const metadata: Metadata = {
  title: `${site.name} — ${site.role.en}`,
  description: site.tagline.en,
  openGraph: {
    title: `${site.name} — ${site.role.en}`,
    description: site.tagline.en,
    type: 'website',
    locale: 'en_US',
  },
  authors: [{ name: site.name }],
};

export const viewport: Viewport = {
  themeColor: '#0A0F1F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body>
        <I18nProvider>
          <AppShell>
            <Nav />
            {children}
          </AppShell>
        </I18nProvider>
      </body>
    </html>
  );
}
