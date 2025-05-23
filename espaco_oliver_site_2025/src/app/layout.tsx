import type { Metadata } from "next";
import { instrumentSerif, funnelSans, displaySerif } from "./fonts";
import "./globals.css";
import { Instrument_Serif, Fraunces } from 'next/font/google';
import localFont from 'next/font/local';
import Head from 'next/head';

export const metadata: Metadata = {
  title: "Espaço Oliver Beauty - Manicure e Pedicure",
  description: "Oferecemos serviços de manicure, pedicure e nail design de alta qualidade para você se sentir bem e bonita.",
  metadataBase: new URL('https://www.espacooliverbeauty.com.br'),
  openGraph: {
    title: "Espaço Oliver Beauty - Manicure e Pedicure",
    description: "Serviços de manicure, pedicure e nail design de alta qualidade em Barueri.",
    url: 'https://www.espacooliverbeauty.com.br',
    siteName: 'Espaço Oliver Beauty',
    images: [
      {
        url: '/images/optimized/hero-slide-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Espaço Oliver Beauty',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Espaço Oliver Beauty - Manicure e Pedicure",
    description: "Serviços de manicure, pedicure e nail design de alta qualidade em Barueri.",
    images: ['/images/optimized/hero-slide-2.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
          rel="preload" 
          as="image" 
          href="/images/optimized/hero-slide-1.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/images/optimized/hero-slide-1.jpg"
          type="image/jpeg"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${instrumentSerif.variable} ${funnelSans.variable} ${displaySerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
