import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fefdfb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0a1a" },
  ],
};

const inter = Inter({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display-stack",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-stack",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salesbooster.app"),
  title: {
    default: "SalesBooster — The revenue platform for home-service operators",
    template: "%s · SalesBooster",
  },
  description:
    "Turn every job into three revenue moments — bigger tickets, more reviews, tracked referrals, recovered estimates. Built and live on top of your existing field-service software. Limited-time launch pricing for the first cohort.",
  keywords: [
    "home services revenue",
    "field service software upsell",
    "Housecall Pro integration",
    "ServiceTitan integration",
    "Jobber integration",
    "Service Fusion integration",
    "good better best",
    "sales booster",
  ],
  openGraph: {
    title: "SalesBooster",
    description:
      "Turn every job into three revenue moments. Reserve early access.",
    siteName: "SalesBooster",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
