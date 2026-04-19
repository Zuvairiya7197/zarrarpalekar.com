import type { Metadata } from "next";
import { DM_Serif_Display, Great_Vibes } from "next/font/google";

import { siteConfig } from "@/lib/site";

import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  preload: false,
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Zarrar Palekar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio Website",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/Images/ZP%20Logo.svg",
    shortcut: "/Images/ZP%20Logo.svg",
    apple: "/Images/ZP%20Logo.svg",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${greatVibes.variable} ${dmSerifDisplay.variable} min-h-screen bg-[rgb(var(--background))] font-[family-name:var(--font-sans)] text-[rgb(var(--foreground))] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
