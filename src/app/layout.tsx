import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import CursorSpotlight from "@/components/CursorSpotlight";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-instrument" });

export const metadata: Metadata = {
  title: "Preet Panchal — Builder",
  description: "I build software that respects the people who use it — from privacy-first iOS apps to trust-first business tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} scroll-smooth`}>
      <body className="bg-paper font-sans leading-relaxed text-ink antialiased selection:bg-accent selection:text-surface">
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
