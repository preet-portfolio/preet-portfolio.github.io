import type { Metadata } from "next";
import Link from "next/link";
import { backHref } from "@/data/work";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Get DocFort",
    description: "Get DocFort, the privacy-first document vault for iPhone and iPad, on the App Store.",
    other: {
        "apple-itunes-app": "app-id=6759193013",
    },
};

export default function JoinPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased flex flex-col items-center justify-center px-6">
            {/* Subtle background gradient */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/10 via-slate-900/0 to-slate-900/0" />
            </div>

            <main className="relative z-10 max-w-md w-full text-center">
                {/* Logo */}
                <div className="mb-8 flex justify-center">
                    <div className="h-20 w-20 rounded-[22px] bg-white flex items-center justify-center shadow-[0_4px_24px_rgba(0,143,214,0.25)] overflow-hidden">
                        <img src="/docfort-logo.png" alt="DocFort" className="w-full h-full object-cover" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-slate-200 tracking-tight">DocFort</h1>
                <p className="mt-3 text-slate-400 leading-relaxed">
                    Get DocFort, the privacy-first document vault for iPhone and iPad, on the App Store.
                </p>

                <a
                    href="https://apps.apple.com/app/docfort/id6759193013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400/50 rounded-xl"
                    aria-label="Download DocFort on the App Store"
                >
                    <img
                        src="/app-store-badge-black.svg"
                        alt="Download on the App Store"
                        className="h-12 w-auto"
                    />
                </a>

                {/* Back link */}
                <div className="mt-10">
                    <Link
                        href={backHref("docfort")}
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-teal-300 transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Back to portfolio
                    </Link>
                </div>
            </main>
        </div>
    );
}
