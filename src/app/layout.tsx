import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyclop One — AI Desktop Automation Agent for macOS",
  description:
    "An open-source macOS agent that sees your screen, thinks with Claude AI, and takes real actions. Download free.",
  keywords: [
    "macOS AI agent",
    "desktop automation",
    "Claude AI",
    "screen control",
    "AI assistant",
    "open source",
    "macOS automation",
    "Anthropic Claude",
  ],
  metadataBase: new URL("https://cyclop.one"),
  alternates: {
    canonical: "https://cyclop.one",
  },
  openGraph: {
    title: "Cyclop One — AI Desktop Automation Agent for macOS",
    description:
      "An open-source macOS agent that sees your screen, thinks with Claude AI, and takes real actions.",
    url: "https://cyclop.one",
    siteName: "Cyclop One",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyclop One — AI Desktop Automation Agent for macOS",
    description:
      "An open-source macOS agent that sees your screen, thinks with Claude AI, and takes real actions.",
    site: "@cyclopone",
    creator: "@cyclopone",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cyclop One",
    operatingSystem: "macOS 14+",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    downloadUrl: "https://github.com/cyclop-one/cyclop-one/releases/download/v0.1.0/CyclopOne-0.1.0.dmg",
    description:
      "An open-source macOS agent that sees your screen, thinks with Claude AI, and takes real actions.",
    url: "https://cyclop.one",
    sameAs: ["https://github.com/cyclop-one/cyclop-one"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cyclop One",
    url: "https://cyclop.one",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cyclop.one/skills?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-text-primary antialiased">{children}</body>
    </html>
  );
}
