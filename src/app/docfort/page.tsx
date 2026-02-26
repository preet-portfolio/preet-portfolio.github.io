import Link from "next/link";
import { ArrowLeft, ShieldCheck, Clock, Layers, Users, ExternalLink } from "lucide-react";

export const metadata = {
    title: "DocFort | Digital Document Vault",
    description: "A deep dive into DocFort: The privacy-first document vault for iPhone, iPad, and Mac.",
};

export default function DocFortPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased selection:bg-teal-300/30 selection:text-teal-300">
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/10 via-slate-900/0 to-slate-900/0"></div>
                <div className="absolute opacity-[0.03] inset-0" style={{ backgroundImage: 'url("/noise.png")' }}></div>
            </div>

            <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-24">

                {/* Back navigation */}
                <nav className="mb-12">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-teal-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </nav>

                {/* Hero Core */}
                <header className="mb-16 md:mb-24">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                        <div className="h-24 w-24 shrink-0 rounded-[24px] bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,143,214,0.2)] overflow-hidden">
                            <img src="/docfort-logo.png" alt="DocFort Logo" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200 mb-3">DocFort</h1>
                            <p className="text-xl sm:text-2xl text-slate-400 font-light tracking-tight">The Digital Vault for Life's Critical Documents</p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mb-8">
                        An underserved premium consumer market exists for intelligent document protection platforms. DocFort is not just a tracker; it's a privacy-first Digital Vault designed to combine Swiss-bank security with Apple's intelligent on-device processing to solve the "Traveler's Nightmare" of missed expirations.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://apps.apple.com/in/app/docfort/id6759193013"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block focus-ring rounded-lg transition-transform hover:scale-105"
                            aria-label="Download DocFort on the App Store"
                        >
                            <img src="/app-store-badge-black.svg" alt="Download on the App Store" className="h-12 w-auto" />
                        </a>
                    </div>
                </header>

                <div className="h-px bg-slate-800/50 w-full mb-16"></div>

                {/* Features Bento Layout */}
                <section>
                    <h2 className="text-2xl font-semibold text-slate-200 mb-8 flex items-center gap-3">
                        Strategic Foundation
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">

                        {/* 1. Extract & Discard */}
                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">The "Extract & Discard" Privacy Model</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                DocFort does not store your document images. Instead, the Vision framework securely reads the expiration date via on-device Neural Engine processing, saves the metadata (barely 24 bytes), and immediately securely trashes the photograph. Zero evidence left behind.
                            </p>
                        </div>

                        {/* 2. Temporal Intelligence Engine */}
                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                                <Clock className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Temporal Intelligence Engine</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Not just an expiration reminder app. A passport expiring in 6 months is already invalid for international travel. DocFort context-aware alerts notify you 9 months ahead accounting for both the 6-month international entry requirement and a standard 3-month processing time.
                            </p>
                        </div>

                        {/* 3. Liquid Glass & Bento Grids */}
                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                                <Layers className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Bento Grid Dashboards</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Taking heavy influence from Apple's 2025/2026 design principles. The interface uses a Liquid Glass aesthetic for frosted document cards hidden safely behind a Face ID lock. The UI is calm, precise, and devoid of bouncy animations—fitting the demeanor of a Swiss Bank.
                            </p>
                        </div>

                        {/* 4. Three-Generation Family Vault */}
                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Three-Generation Vault</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Designed as a living document management system that scales. Supporting age-appropriate document suggestions (Medicare cards for grandparents, passports for parents, birth certificates for children) combined into a singular, unified timeline view.
                            </p>
                        </div>

                    </div>
                </section>

                <div className="h-px bg-slate-800/50 w-full my-16"></div>

                {/* Support & Documentation */}
                <section className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-4">
                        Need Help or Have Questions?
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        If you're looking for detailed documentation, privacy policy specifics, or need assistance using DocFort, you can read more at our dedicated support hub.
                    </p>
                    <a
                        href="https://preet-portfolio.github.io/docfort-support/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500/10 text-teal-400 font-medium hover:bg-teal-500/20 transition-colors focus-ring"
                    >
                        Visit DocFort Support <ExternalLink className="w-4 h-4" />
                    </a>
                </section>

                <div className="mt-24 text-center">
                    <p className="text-sm text-slate-500">
                        Deployed statically on GitHub Pages. Built with Next.js 16, Tailwind CSS & Framer Motion. <br />
                        Read the full <a href="https://github.com/preet-portfolio" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors inline-block focus-ring rounded-sm">Project Specification Idea here</a>.
                    </p>
                </div>

            </main>
        </div>
    );
}
