import type { Metadata } from "next";
import { instrumentSerif, funnelSans, displaySerif } from "./fonts";
import "./globals.css";

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
        className={`${instrumentSerif.variable} ${funnelSans.variable} ${displaySerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
