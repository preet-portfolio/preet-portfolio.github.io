import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/seo";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-instrument" });

// Pages set their own title, description and canonical through pageMeta; this is the base the
// relative URLs in them resolve against, and the fallback for anything that doesn't.
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
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
        {children}
      </body>
    </html>
  );
}
