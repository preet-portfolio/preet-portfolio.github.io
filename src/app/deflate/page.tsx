import Link from "next/link";
import { backHref } from "@/data/work";
import { ArrowLeft, Shrink, Scale, FileText, Layers, Lock, LifeBuoy, Crop, ScanText } from "lucide-react";

export const metadata = {
    title: "Deflate | PDFs and Photos, Aimed at the Size You Were Asked For",
    description:
        "Deflate compresses PDFs and images down to a size you name in kilobytes, then shows you the size it reached. Crop a passport photo to spec, make a scan searchable, merge, split, rotate — entirely on device, with no network code at all.",
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
                    <Link href={backHref("deflate")} className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-violet-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </nav>

                {/* Hero */}
                <header className="mb-16 md:mb-20">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                        <img
                            src="/deflate-logo.png"
                            alt=""
                            className="h-24 w-24 shrink-0 rounded-[24px] shadow-[0_4px_24px_rgba(91,61,245,0.3)]"
                        />
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200 mb-3">Deflate</h1>
                            <p className="text-xl sm:text-2xl text-slate-400 font-light tracking-tight">PDFs and photos, aimed at the size you were asked for</p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mb-6">
                        The form said under 200 KB. Your scan is 9 MB. Your passport photo has to be 35×45 mm and under
                        50 KB, and the upload button greys out until it is.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mb-8">
                        Nobody gave you a quality slider. They gave you a <em className="text-slate-300">number</em>. Deflate
                        is built around that number — for PDFs and photos alike — and when it hands you back a single
                        file, it tells you plainly whether it got there.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="https://apps.apple.com/app/id6806356565"
                            className="inline-flex items-center rounded-full bg-violet-500/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-300 hover:bg-violet-500/25 transition-colors focus-ring"
                        >
                            On the App Store
                        </a>
                        <span className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-300">
                            iPhone, iPad & Mac
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
                            <p className="text-amber-300 font-semibold">187 KB — smallest safe size for this content (aimed for 40 KB)</p>
                            <div className="h-px bg-white/10 my-3"></div>
                            <p className="text-white/60">↓ 9643 KB smaller (−98%) · was 9830 KB</p>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">
                            The number you see is the number the file is.
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
                                Works on PDFs <em>and</em> photos. Choose your output — JPEG or PDF — then pick a size the way
                                the form asked for it: 20, 50, 100, 200 KB and up, or type your own number. Not &ldquo;high
                                quality&rdquo;. Not a slider. The figure you were actually given.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                                <Shrink className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">When the Target Is Out of Reach</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Not every target can be reached. When one can&apos;t, Deflate stops at its lowest setting and
                                hands back the smallest file it can make. For a single file, it says plainly what it reached
                                versus what you aimed for.
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
                                <Crop className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Photos, Cut to Spec</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Passport 35×45 mm, signature strip, square, or freeform. Drag the box, and Deflate crops to the
                                exact pixel dimensions at 300 dpi — then hits your target KB <em>without</em> shrinking the
                                photo below the size the form demands. Getting both right at once is the whole trick.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                                <ScanText className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Scans That Can Be Searched</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Make Searchable reads the text in a scan, redraws each page as an image and lays an invisible,
                                selectable layer of text over it. Now the scan is findable, and the text can be copied out.
                                Recognition runs on your device; nothing is sent anywhere to be read.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                                <Layers className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">The Rest of the Paperwork</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Merge files into one. Pull a page range out to its own PDF, or split every page into its own
                                file. Rotate and drag pages into the right order. Turn a pile of photos into a single PDF, one
                                page each — with phone shots landing the right way up, because Deflate reads their orientation
                                instead of ignoring it.
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
