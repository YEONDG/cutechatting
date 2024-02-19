import type { Metadata, Viewport } from "next"
import { Noto_Sans_KR } from "next/font/google"

import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"
import { Navbar } from "@/components/layout/navbar"
import Providers from "@/components/provider"
import { ThemeProvider } from "@/components/theme-provider"

const noto_sans = Noto_Sans_KR({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  icons: [{ url: "/images/favicon.ico", href: "/images/favicon.ico" }],
  keywords: [
    "twitch",
    "트위치",
    "afreecatv",
    "아프리카티비",
    "치지직",
    "chzzk",
  ],
  authors: [{ name: "YEONDG" }],
  creator: "YEONDG",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  verification: {
    other: {
      "naver-site-verification": "ba31328bd1cba4357674b237f4f68e86454c549a",
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body
        className={`${noto_sans.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto flex h-full w-full flex-col justify-center sm:items-center">
              <Navbar />
              <main className="flex h-full w-full flex-col pb-20 pt-20">
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
  )
}
