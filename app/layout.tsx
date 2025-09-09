import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Link from "next/link";

// Load the ABCDiatype font (Regular and Bold only)
const abcdDiatype = localFont({
  src: [
    { path: "./fonts/ABCDiatype-Regular.otf", weight: "400" },
    { path: "./fonts/ABCDiatype-Bold.otf", weight: "700" },
  ],
  variable: "--font-abcd-diatype",
});

// Load the Reckless font (Regular and Medium only)
const reckless = localFont({
  src: [
    { path: "./fonts/RecklessTRIAL-Regular.woff2", weight: "400" },
    { path: "./fonts/RecklessTRIAL-Medium.woff2", weight: "500" },
  ],
  variable: "--font-reckless",
});

export const metadata: Metadata = {
  title: 'Hallucinations Detector Tool',
  description: 'Detect Hallucinations in Your Content Instantly for Free.',
  metadataBase: new URL('https://demo.exa.ai/hallucination-detector'),
  
  // Favicon
  icons: {
    icon: '/favicon1.ico',
    shortcut: '/favicon1.ico',
    apple: '/favicon1.ico',
  },

  // Open Graph
  openGraph: {
    title: 'Hallucinations Detector Tool',
    description: 'Detect Hallucinations in Your Content Instantly for Free.',
    url: 'https://demo.exa.ai/hallucination-detector',
    siteName: 'Hallucinations Detector Tool',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hallucinations Detector Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Hallucinations Detector Tool',
    description: 'Detect Hallucinations in Your Content Instantly for Free.',
    images: ['https://demo.exa.ai/hallucination-detector/opengraph-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${abcdDiatype.variable} ${reckless.variable} antialiased`}
      >
        <header className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="mx-auto max-w-6xl md:max-w-4xl px-6 py-3 flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold text-gray-900">
              Hallucinations Detector
            </Link>
            <nav className="flex items-center gap-6 text-sm text-gray-700">
              <Link href="/landing" className="hover:text-gray-900">Landing</Link>
              <Link href="/" className="hover:text-gray-900">Tool</Link>
            </nav>
          </div>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
