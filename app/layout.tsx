import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/navbar';
import Providers from '@/components/provider';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider';
import { Noto_Sans_KR } from 'next/font/google';

const noto_sans = Noto_Sans_KR({ subsets: ['latin'] });

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
      <body className={noto_sans.className} suppressHydrationWarning={true}>
        <Providers>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='h-full '>
              <Navbar />
              <Toaster richColors />
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
