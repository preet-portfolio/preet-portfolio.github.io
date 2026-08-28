import Link from "next/link";
import { ArrowLeft, Shrink, Scale, FileText, Layers, Lock, LifeBuoy } from "lucide-react";

export const metadata = {
    title: "Deflate | Compress a PDF to an Exact Size",
    description:
        "Deflate compresses PDFs and images down to a size you name in KB, then tells you honestly what it reached. Merge, split, rotate, crop, and make scans searchable — entirely on device, with no network code at all.",
};

export default function DeflatePage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased selection:bg-violet-300/30 selection:text-violet-300">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-violet-900/15 via-slate-900/0 to-slate-900/0"></div>
            </div>

            <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-24">

                {/* Back navigation */}
                <nav className="mb-12">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-violet-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </nav>

                {/* Hero */}
                <header className="mb-16 md:mb-20">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                        {/* Icon placeholder — the app icon is still being designed, so this
                            follows the AuditWedge convention of a lucide mark in a tinted tile. */}
                        <div className="h-24 w-24 shrink-0 rounded-[24px] bg-violet-500/10 flex items-center justify-center shadow-[0_4px_24px_rgba(91,61,245,0.3)]">
                            <Shrink className="h-11 w-11 text-violet-400" aria-hidden="true" />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200 mb-3">Deflate</h1>
                            <p className="text-xl sm:text-2xl text-slate-400 font-light tracking-tight">Compress a PDF to an Exact Size</p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mb-8">
                        Upload forms ask for a number: under 200 KB, under 500 KB, under 1 MB. Most compressors offer
                        &ldquo;low, medium, high&rdquo; and leave you guessing. Deflate takes the number you were actually given,
                        works toward it, and then tells you the truth about what it reached — because a file that went from
                        9.6&nbsp;MB to 187&nbsp;KB is a useful result even when you asked for 40.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <span className="inline-flex items-center rounded-full bg-violet-500/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-300">
                            In development
                        </span>
                        <span className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-300">
                            iPhone · iPad · Mac
                        </span>
                        <span className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-300">
                            Zero Data Collection
                        </span>
                        <span className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-300">
                            No Ads, Ever
                        </span>
                    </div>
                </header>

                {/* The honest readout — the product's signature */}
                <section className="mb-16 md:mb-20">
                    <div className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6 md:p-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-violet-400/80 mb-6">What the result screen actually says</p>
                        <div className="rounded-xl bg-black/50 p-5 max-w-md font-mono text-[11px] sm:text-xs leading-relaxed text-white/90">
                            <p className="text-violet-300 font-semibold mb-3">◆ Deflate</p>
                            <p className="text-white/60 mb-3">Bachelor_1st_Year.pdf · 4 pages</p>
                            <div className="h-px bg-white/10 my-3"></div>
                            <div className="flex justify-between"><span className="text-white/60">Original</span><span>9.6 MB</span></div>
                            <div className="flex justify-between"><span className="text-white/60">Target</span><span>40 KB</span></div>
                            <div className="flex justify-between"><span className="text-white/60">Reached</span><span className="text-amber-300">187 KB</span></div>
                            <div className="h-px bg-white/10 my-3"></div>
                            <p className="text-amber-300/90">Above target — 98% smaller</p>
                            <p className="text-white/50 mt-1">
                                40 KB isn&apos;t reachable for this scan without
                                dropping below readable. This is the smallest
                                legible result.
                            </p>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">
                            No fake success, no silent degradation. The number you see is the number the file is.
                        </p>
                    </div>
                </section>

                {/* Features */}
                <section className="mb-16 md:mb-20">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-8">Built for Honesty</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                                <Scale className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">A Target in Kilobytes</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Choose JPEG or PDF, then pick a size the way the form asked for it — a preset chip or your own
                                number in KB. Not &ldquo;high quality&rdquo;. Not a slider. The figure you were actually given.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                                <Shrink className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">A Legibility Floor</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Every target has a point past which hitting the number means destroying the page. Deflate stops
                                there, hands back the smallest readable result, and says plainly what it reached versus what you
                                aimed for — instead of shipping a ruined file that technically complies.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                                <FileText className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Real Text Stays Sharp</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Deflate reads each page before touching it. Pages with genuine text are born-digital and pass
                                through untouched, still selectable and still vector. Only scanned pages get re-encoded — so a
                                mixed document never loses the half that was already perfect.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                                <Layers className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">The Rest of the Job</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Merge several files into one, split pages out, rotate and reorder, crop a photo to a passport or
                                signature size, and make a scan searchable with an invisible on-device text layer. The whole
                                document chore, in one place.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-slate-800/50 w-full mb-16"></div>

                {/* Privacy claim */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-4">Nothing Leaves Your Device</h2>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                        This is not a policy promise layered over a server — there is no server. Deflate contains no networking
                        code at all: no <code className="text-violet-300 text-sm">URLSession</code>, no Network framework, no
                        outbound request anywhere in the app. Compression, OCR, and every other operation run on your device
                        using Apple&apos;s own frameworks. There are no accounts, no analytics, no third-party SDKs, and no ads
                        in any tier.
                    </p>
                </section>

                <div className="h-px bg-slate-800/50 w-full mb-16"></div>

                {/* Legal & support */}
                <section className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-4">Privacy &amp; Support</h2>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        Deflate collects nothing and transmits nothing. Read the full policy, or get help with a file that
                        didn&apos;t behave the way you expected:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/deflate/privacy"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-500/10 text-violet-300 font-medium hover:bg-violet-500/20 transition-colors focus-ring"
                        >
                            <Lock className="w-4 h-4" /> Privacy Policy
                        </Link>
                        <Link
                            href="/deflate/support"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-500/10 text-violet-300 font-medium hover:bg-violet-500/20 transition-colors focus-ring"
                        >
                            <LifeBuoy className="w-4 h-4" /> Support &amp; FAQ
                        </Link>
                    </div>
                </section>

                <div className="mt-24 text-center">
                    <p className="text-sm text-slate-500">
                        Built with Swift &amp; SwiftUI on PDFKit, Vision, Core Image and ImageIO — no third-party dependencies
                        in the processing pipeline.
                    </p>
                </div>

            </main>
        </div>
    );
}
