import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorSpotlight from "@/components/CursorSpotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Preet Panchal — iOS Developer",
  description: "iOS Developer & App Creator building beautiful, privacy-first software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-[var(--text-secondary)] bg-[var(--bg-primary)] leading-relaxed selection:bg-[var(--teal-300)] selection:text-slate-900`}>
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
