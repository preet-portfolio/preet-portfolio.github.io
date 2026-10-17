import Link from "next/link";
import { ArrowLeft, Camera, Vibrate, Hand, Images, Lock, FileText, Mail } from "lucide-react";

export const metadata = {
    title: "Agitate | Shake to Develop",
    description:
        "Agitate turns your iPhone into an instant camera. Take a photo, watch it print as a blank film card, then shake your phone to develop it. Everything stays on your device.",
};

export default function AgitatePage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased selection:bg-orange-300/30 selection:text-orange-300">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-orange-900/15 via-slate-900/0 to-slate-900/0"></div>
            </div>

            <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-24">

                {/* Back navigation */}
                <nav className="mb-12">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-orange-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </nav>

                {/* Hero */}
                <header className="mb-16 md:mb-20">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                        <div className="h-24 w-24 shrink-0 rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(217,72,31,0.35)]">
                            <img src="/agitate-logo.png" alt="Agitate App Icon" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200 mb-3">Agitate</h1>
                            <p className="text-xl sm:text-2xl text-slate-400 font-light tracking-tight">Shake to develop</p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mb-6">
                        Take a photo and it prints as a blank instant-film card. Nothing on it yet — just white.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mb-8">
                        Then you shake your phone, and the picture comes through. Agitate reads the motion sensors in real
                        time, so the print develops as you agitate it, with haptics you can feel as the image emerges.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <span className="inline-flex items-center rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-300">
                            In beta
                        </span>
                        <span className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-300">
                            iPhone
                        </span>
                        <span className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-300">
                            Zero Data Collection
                        </span>
                        <span className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-300">
                            No Ads
                        </span>
                    </div>
                </header>

                {/* Features */}
                <section className="mb-16 md:mb-20">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-8">How It Works</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300">
                                <Camera className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Snap, Then Wait</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Press the shutter and a blank card slides out of the slot. Like real instant film, what you shot
                                isn&apos;t visible yet — you have to work for it.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300">
                                <Vibrate className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Shake to Develop</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                A shake detector tuned to tell a deliberate shake from walking or a tilt drives the
                                development. The image is rendered on the GPU with Metal, and Core Haptics lets you feel the
                                print come through.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300">
                                <Hand className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Can&apos;t Shake? Hold</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Prefer not to shake your phone? Switch to hold-to-develop and press instead. Close a print
                                halfway and it keeps its progress — pick it up again later.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300">
                                <Images className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">A Gallery of Prints</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Every print lands in your gallery, developed or still in progress. Write a caption on the
                                border, share it, or save it to your Photos library.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-slate-800/50 w-full mb-16"></div>

                {/* Privacy claim */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-4">Nothing Leaves Your Device</h2>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                        Agitate contains no networking code: no accounts, no analytics, no third-party SDKs, and no ads. Your
                        photos and prints are stored in the app&apos;s private storage on your iPhone, and they only go
                        somewhere else when you choose to share or save one.
                    </p>
                </section>

                <div className="h-px bg-slate-800/50 w-full mb-16"></div>

                {/* Legal & support */}
                <section className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-4">Privacy, Terms &amp; Support</h2>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        Agitate collects nothing. Read the full policy and terms, or get in touch if something isn&apos;t
                        working:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/agitate/privacy"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500/10 text-orange-300 font-medium hover:bg-orange-500/20 transition-colors focus-ring"
                        >
                            <Lock className="w-4 h-4" /> Privacy Policy
                        </Link>
                        <Link
                            href="/agitate/terms"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500/10 text-orange-300 font-medium hover:bg-orange-500/20 transition-colors focus-ring"
                        >
                            <FileText className="w-4 h-4" /> Terms of Use
                        </Link>
                        <a
                            href="mailto:preet2020@icloud.com?subject=Agitate%20support"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500/10 text-orange-300 font-medium hover:bg-orange-500/20 transition-colors focus-ring"
                        >
                            <Mail className="w-4 h-4" /> Email Support
                        </a>
                    </div>
                </section>

                <div className="mt-24 text-center">
                    <p className="text-sm text-slate-500">
                        Built with Swift &amp; SwiftUI on AVFoundation, Core Motion, Metal and Core Haptics — no third-party
                        dependencies.
                    </p>
                </div>

            </main>
        </div>
    );
}
