import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jeremy Brooks | Burlington School Committee 2026",
  description:
    "Leadership Tested. Promises Kept. Veteran, product manager, and dedicated father running for Burlington School Committee 2026.",
  openGraph: {
    title: "Jeremy Brooks | Burlington School Committee 2026",
    description:
      "Accountability. Discipline. Results. Three years of transparent governance, fiscal oversight, and safety leadership for Burlington Public Schools.",
    url: "https://brooksforburlington.com",
    siteName: "Brooks for Burlington",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://brooksforburlington.com/images/campaign/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Jeremy Brooks for Burlington School Committee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremy Brooks | Burlington School Committee 2026",
    description:
      "Accountability. Discipline. Results. Re-elect Jeremy Brooks to Burlington School Committee, April 11.",
    images: ["https://brooksforburlington.com/images/campaign/hero.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body
        className="font-body antialiased bg-[#FAFAF7] text-[#1A1A1A]"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
