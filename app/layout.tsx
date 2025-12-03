import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.colorfashionindustrial.com'), // Replace with your actual domain
  title: {
    default: "Color Fashion Industrial | Premium Custom Printing",
    template: "%s | Color Fashion Industrial"
  },
  description: "Premium custom printing for your jerseys, office wear, mugs, flags & more. High-quality sublimation and garment printing services.",
  keywords: ["custom printing", "jerseys", "office wear", "mugs", "flags", "sublimation", "garment printing", "color fashion"],
  authors: [{ name: "Color Fashion Industrial" }],
  creator: "Color Fashion Industrial",
  publisher: "Color Fashion Industrial",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Color Fashion Industrial | Premium Custom Printing",
    description: "Premium custom printing for your jerseys, office wear, mugs, flags & more.",
    url: 'https://www.colorfashionindustrial.com',
    siteName: 'Color Fashion Industrial',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Color Fashion Industrial | Premium Custom Printing",
    description: "Premium custom printing for your jerseys, office wear, mugs, flags & more.",
    // creator: '@yourtwitterhandle', // Add if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FVQMKMVCG3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FVQMKMVCG3');
          `}
        </Script>
      </body>
    </html>
  );
}
