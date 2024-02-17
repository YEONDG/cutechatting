import { Toaster } from 'sonner';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/navbar';
import Providers from '@/components/provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Noto_Sans_KR } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import type { Metadata } from 'next';

const noto_sans = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  icons: [{ url: '/images/favicon.ico', href: '/images/favicon.ico' }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='kr'>
      <body
        className={`${noto_sans.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='flex flex-col justify-center sm:items-center w-full mx-auto h-full'>
              <Navbar />
              <main className='flex flex-col pt-20 pb-20 w-full h-full'>
                {children}
              </main>
              <Toaster richColors />
            </div>
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
