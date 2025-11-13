import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reputation Shield LLC - Custom Web Development & Review Management",
  description:
    "Reputation Shield LLC specializes in custom web development for SEO and review management & generation. Protect and enhance your online reputation with proven strategies.",
  keywords: [
    "reputation management",
    "custom web development",
    "SEO optimization",
    "review management",
    "review generation",
    "online reputation",
    "reputation repair",
  ],
  authors: [{ name: "Reputation Shield LLC" }],
  creator: "Reputation Shield LLC",
  publisher: "Reputation Shield LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reputationshield.com",
    title: "Reputation Shield LLC - Custom Web Development & Review Management",
    description:
      "Protect and enhance your online reputation with custom web development for SEO and comprehensive review management services.",
    siteName: "Reputation Shield LLC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reputation Shield LLC - Reputation Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reputation Shield LLC - Custom Web Development & Review Management",
    description:
      "Protect and enhance your online reputation with custom web development for SEO and comprehensive review management services.",
    images: ["/og-image.jpg"],
    creator: "@reputationshield",
  },
  alternates: {
    canonical: "https://reputationshield.com",
  },
  generator: "v0.app",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
