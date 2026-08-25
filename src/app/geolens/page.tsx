import Link from "next/link";
import { ArrowLeft, Map, ShieldCheck, Navigation, Briefcase, FileText, Lock } from "lucide-react";

export const metadata = {
    title: "GeoLens | Evidence-Grade Geotagging Camera",
    description: "GeoLens stamps every photo with coordinates, address, a map of the spot, and a verifiable EXIF audit trail. Built for surveyors, valuers, and field inspectors. Available on the App Store.",
};

export default function GeoLensPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased selection:bg-sky-300/30 selection:text-sky-300">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-sky-900/15 via-slate-900/0 to-slate-900/0"></div>
            </div>

            <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-24">

                {/* Back navigation */}
                <nav className="mb-12">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-sky-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </nav>

                {/* Hero */}
                <header className="mb-16 md:mb-20">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                        <div className="h-24 w-24 shrink-0 rounded-[24px] flex items-center justify-center shadow-[0_4px_24px_rgba(45,127,249,0.35)] overflow-hidden">
                            <img src="/geolens-logo.png" alt="GeoLens App Icon" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200 mb-3">GeoLens</h1>
                            <p className="text-xl sm:text-2xl text-slate-400 font-light tracking-tight">Evidence-Grade Geotagged Photos</p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mb-8">
                        Surveyors, property valuers, loan officers, and field inspectors need undeniable proof that they were at a place at a time.
                        GeoLens burns that proof into every photo — coordinates, address, a map of the exact spot, timestamp, and the operator's
                        verified identity — and embeds a machine-readable EXIF audit trail that banks and agencies can check.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="https://apps.apple.com/us/app/geolens-geotag-camera/id6779347733"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block focus-ring rounded-lg transition-transform hover:scale-105"
                            aria-label="Download GeoLens on the App Store"
                        >
                            <img
                                src="/app-store-badge-black.svg"
                                alt="Download on the App Store"
                                className="h-11 w-auto"
                            />
                        </a>
                        <span className="inline-flex items-center rounded-full bg-sky-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-300">
                            100% Ad-Free
                        </span>
                        <span className="inline-flex items-center rounded-full bg-sky-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-300">
                            Zero Data Collection
                        </span>
                    </div>
                </header>

                {/* The stamp — the product's signature, recreated */}
                <section className="mb-16 md:mb-20">
                    <div className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6 md:p-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-sky-400/80 mb-6">What every capture carries</p>
                        <div className="flex gap-3 items-stretch rounded-xl bg-black/50 p-4 max-w-md font-mono text-[11px] sm:text-xs leading-relaxed text-white/90">
                            <div className="w-20 sm:w-24 shrink-0 rounded-lg bg-gradient-to-br from-emerald-900/70 to-slate-800 relative overflow-hidden" aria-hidden="true">
                                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)", backgroundSize: "14px 14px" }}></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white"></div>
                            </div>
                            <div className="min-w-0">
                                <p className="text-sky-300 font-semibold mb-0.5">◆ GeoLens</p>
                                <p>Site: Sabarmati Riverfront, Ahmedabad</p>
                                <p>23.02250° N, 72.57140° E ±5m</p>
                                <p>2026-06-11 10:42:57 GMT+5:30</p>
                                <p>Alt 53m · E 80° · 35°C Mostly Clear</p>
                                <p>By: Preet Panchal</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">
                            Burned into the pixels — crop-resistant, screenshot-resistant, and mirrored in EXIF GPS metadata.
                        </p>
                    </div>
                </section>

                {/* Features */}
                <section className="mb-16 md:mb-20">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-8">Built for Verification</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                                <Map className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">A Map on Every Photo</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                A satellite, hybrid, or standard map tile of the exact capture point is rendered beside the stamp text —
                                visual proof of place that survives sharing, printing, and report attachments.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Dual Audit Trail</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Human-readable proof in the pixels, machine-readable proof in the metadata: GPS coordinates with accuracy,
                                UTC-correct timestamps, operator identity in the EXIF Artist field. Strip one layer and the other survives.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                                <Navigation className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Geofenced Site Attestation</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Operators attest the site name while standing on it — the label is bound to that GPS position and
                                automatically drops off captures taken more than 1 km away. An attestation cannot travel.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                                <Briefcase className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">White-Label for Professionals</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Agencies put their own logo on every stamp for fully branded client deliverables. Free tier includes
                                5 captures monthly; Premium unlocks unlimited full-resolution captures with advanced metadata.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-slate-800/50 w-full mb-16"></div>

                {/* Download CTA */}
                <section className="mb-16 text-center">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-3">Available on the App Store</h2>
                    <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
                        Free to download. 5 stamped captures per month on the free plan — upgrade to Premium for unlimited captures, full sensor resolution, and watermark removal.
                    </p>
                    <a
                        href="https://apps.apple.com/us/app/geolens-geotag-camera/id6779347733"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block focus-ring rounded-lg transition-transform hover:scale-105"
                        aria-label="Download GeoLens on the App Store"
                    >
                        <img
                            src="/app-store-badge-black.svg"
                            alt="Download on the App Store"
                            className="h-12 w-auto"
                        />
                    </a>
                </section>

                <div className="h-px bg-slate-800/50 w-full mb-16"></div>

                {/* Legal */}
                <section className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-4">Privacy & Legal</h2>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        GeoLens collects nothing. No servers, no analytics, no trackers — your photos, locations, and identity
                        stay on your device. Read the full documents:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/geolens/privacy"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500/10 text-sky-400 font-medium hover:bg-sky-500/20 transition-colors focus-ring"
                        >
                            <Lock className="w-4 h-4" /> Privacy Policy
                        </Link>
                        <Link
                            href="/geolens/terms"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500/10 text-sky-400 font-medium hover:bg-sky-500/20 transition-colors focus-ring"
                        >
                            <FileText className="w-4 h-4" /> Terms of Use
                        </Link>
                    </div>
                </section>

                <div className="mt-24 text-center">
                    <p className="text-sm text-slate-500">
                        Built with Swift 6, SwiftUI, SwiftData, StoreKit 2, MapKit & WeatherKit — clean architecture, 100+ on-device tests.
                    </p>
                </div>

            </main>
        </div>
    );
}
