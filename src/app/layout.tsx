import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/data/projects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.bio,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.meta.url),
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`,
    description: SITE_CONFIG.bio,
    url: SITE_CONFIG.meta.url,
    siteName: `${SITE_CONFIG.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`,
    description: SITE_CONFIG.bio,
    creator: "@mariam_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#fafaf9] text-[#18181b] antialiased selection:bg-orange-100 selection:text-orange-900">
        <Navigation />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-20 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
