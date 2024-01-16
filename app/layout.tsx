import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/navbar';
import Provider from '@/components/provider';
import { getServerSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import Providers from '@/components/provider';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  icons: [{ url: 'logo.svg', href: 'logo.svg' }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='h-full '>
              <Navbar />
              <Toaster />
              <main className='max-w-7xl mx-auto pt-20 pb-20 h-full '>
                {children}
              </main>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
