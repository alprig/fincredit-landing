import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FinCredit — Finanțare Rapidă Fără Birocrație Bancară",
  description: "Obțineți aprobare instantanee cu termeni flexibili. Scorare AI, rate transparente și fonduri în cont în câteva minute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0e1a] text-white">
        {children}
      </body>
    </html>
  );
}
