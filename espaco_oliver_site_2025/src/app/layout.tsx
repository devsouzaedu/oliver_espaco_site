 import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { instrumentSerif, funnelSans, oldStandardTT } from "./fonts";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Espaço Oliver - Serviços de Manicure e Pedicure",
  description: "Oferecemos serviços de manicure, pedicure e nail design de alta qualidade para você se sentir bem e bonita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${instrumentSerif.variable} ${funnelSans.variable} ${oldStandardTT.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
