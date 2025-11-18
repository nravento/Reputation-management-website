import type React from "react"
import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "Reputation Shield LLC - Local SEO & Website Creation for Home Service Businesses",
  description:
    "Reputation Shield LLC specializes in fast website creation and local SEO for home service businesses. Get found by your local community with our 72-hour website delivery.",
  keywords: [
    "local SEO",
    "website creation",
    "home service websites",
    "custom web development",
    "SEO optimization",
    "local search optimization",
    "small business websites",
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
    title: "Reputation Shield LLC - Local SEO & Website Creation",
    description:
      "Get found by your local community with fast website creation and targeted local SEO strategies for home service businesses.",
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
    title: "Reputation Shield LLC - Local SEO & Website Creation",
    description:
      "Get found by your local community with fast website creation and targeted local SEO strategies for home service businesses.",
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
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
