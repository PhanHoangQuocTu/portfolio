import '@/styles/globals.css';

import { type ReactNode } from 'react';
import { type Metadata, type Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import { ViewTransitions } from 'next-view-transitions';

import { fontMono, fontRoboto, fontSans } from '@/config/fonts';
import { APP_URL, siteConfig } from '@/config/site';
import MainLayout from '@/components/layouts/MainLayout';

import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: siteConfig.name,
  description: siteConfig.description,
  generator: 'Next.js',
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  keywords: [],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: [siteConfig.ogImage],
    description: siteConfig.description,
    title: {
      default: siteConfig.name,
      template: `${siteConfig.name} - %s`,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.name}`,
  },
};

export const viewport: Viewport = {
  width: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
        <head />
        <body
          suppressHydrationWarning
          className={clsx(
            'bg-background min-h-screen font-sans antialiased',
            fontSans.variable,
            fontMono.variable,
            fontRoboto.variable
          )}
        >
          <Providers themeProps={{ attribute: 'class', forcedTheme: 'light' }}>
            <MainLayout>{children}</MainLayout>
          </Providers>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
