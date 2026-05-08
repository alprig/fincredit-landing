import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FinCredit — Fast Financing Without Bank Bureaucracy",
  description: "Get instant approval with flexible terms. AI-powered scoring, transparent rates, and funds in your account within minutes.",
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
