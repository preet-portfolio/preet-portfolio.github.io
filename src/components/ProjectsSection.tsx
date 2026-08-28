import { ArrowUpRight, Scale, FileText, Shrink } from "lucide-react";
import Link from "next/link"; // Added Next.js Link

export default function ProjectsSection() {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
            {/* Mobile Sticky Header */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--bg-primary)]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">
                    Projects
                </h2>
            </div>

            <div>
                <ul className="group/list">
                    {/* AuditWedge Item — shown first: most current work */}
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[20px] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.05)] lg:group-hover:drop-shadow-lg"></div>

                            {/* Icon (no designed logo yet — name was only finalized recently) */}
                            <header className="z-10 mb-2 mt-1 xs:mb-0 sm:col-span-2">
                                <Link href="/auditwedge">
                                    <div className="h-16 w-16 rounded-[16px] bg-amber-500/10 flex items-center justify-center shadow-[0_2px_10px_rgba(245,158,11,0.2)] overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                                        <Scale className="h-8 w-8 text-amber-400" aria-hidden="true" />
                                    </div>
                                </Link>
                            </header>

                            {/* Content */}
                            <div className="z-10 sm:col-span-6">
                                <h3>
                                    <Link
                                        href="/auditwedge"
                                        className="inline-flex items-baseline font-medium leading-tight text-[var(--text-primary)] hover:text-[var(--teal-300)] focus-visible:text-[var(--teal-300)] group/link text-base border-none mb-2"
                                        aria-label="View AuditWedge Details"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>
                                            AuditWedge
                                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px" />
                                        </span>
                                    </Link>
                                    <span className="ml-2 align-middle text-xs font-medium text-amber-400/80">
                                        (In development)
                                    </span>
                                </h3>

                                <p className="mt-2 text-sm leading-normal">
                                    Reconciles supplier invoices, Shopify checkout data, and payout records at the SKU level to surface hidden margin leaks — supplier overcharges, FX markup, and fixed-fee drag on cross-border e-commerce payouts.
                                </p>

                                <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                                    {["Python", "Claude API", "Shopify Admin GraphQL", "SQLite"].map((tech) => (
                                        <li key={tech} className="mr-1.5 mt-2">
                                            <div className="flex items-center rounded-full bg-[var(--teal-400)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--teal-300)]">
                                                {tech}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6">
                                    <a
                                        href="/sku-margin-audit-sample-report.txt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative z-10 inline-flex items-center gap-2 rounded-lg bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 hover:bg-amber-500/20 transition-colors focus-ring"
                                        aria-label="View AuditWedge sample audit report"
                                    >
                                        <FileText className="h-4 w-4" aria-hidden="true" />
                                        View sample report
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Deflate Item — in development, submission imminent */}
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[20px] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.05)] lg:group-hover:drop-shadow-lg"></div>

                            {/* Icon (app icon still being designed — same treatment as AuditWedge) */}
                            <header className="z-10 mb-2 mt-1 xs:mb-0 sm:col-span-2">
                                <Link href="/deflate">
                                    <div className="h-16 w-16 rounded-[16px] bg-violet-500/10 flex items-center justify-center shadow-[0_2px_10px_rgba(91,61,245,0.2)] overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                                        <Shrink className="h-8 w-8 text-violet-400" aria-hidden="true" />
                                    </div>
                                </Link>
                            </header>

                            {/* Content */}
                            <div className="z-10 sm:col-span-6">
                                <h3>
                                    <Link
                                        href="/deflate"
                                        className="inline-flex items-baseline font-medium leading-tight text-[var(--text-primary)] hover:text-[var(--teal-300)] focus-visible:text-[var(--teal-300)] group/link text-base border-none mb-2"
                                        aria-label="View Deflate Details"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>
                                            Deflate
                                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px" />
                                        </span>
                                    </Link>
                                    <span className="ml-2 align-middle text-xs font-medium text-violet-400/80">
                                        (In development)
                                    </span>
                                </h3>

                                <p className="mt-2 text-sm leading-normal">
                                    Compresses PDFs and photos down to a size named in kilobytes — the number an upload form
                                    actually asked for — then reports honestly what it reached instead of faking success or
                                    silently ruining the page. Crops passport and signature photos to exact spec, makes scans
                                    searchable with on-device OCR, and merges, splits and rotates the rest. Contains no
                                    networking code at all.
                                </p>

                                <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                                    {["Swift", "SwiftUI", "PDFKit", "Vision", "Core Image", "ImageIO"].map((tech) => (
                                        <li key={tech} className="mr-1.5 mt-2">
                                            <div className="flex items-center rounded-full bg-[var(--teal-400)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--teal-300)]">
                                                {tech}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* GeoLens Item */}
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[20px] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.05)] lg:group-hover:drop-shadow-lg"></div>

                            {/* App Icon */}
                            <header className="z-10 mb-2 mt-1 xs:mb-0 sm:col-span-2">
                                <Link href="/geolens">
                                    <div className="h-16 w-16 rounded-[16px] flex items-center justify-center shadow-[0_2px_10px_rgba(45,127,249,0.25)] overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                                        <img src="/geolens-logo.png" alt="GeoLens App Icon" className="w-full h-full object-cover" />
                                    </div>
                                </Link>
                            </header>

                            {/* Content */}
                            <div className="z-10 sm:col-span-6">
                                <h3>
                                    <Link
                                        href="/geolens"
                                        className="inline-flex items-baseline font-medium leading-tight text-[var(--text-primary)] hover:text-[var(--teal-300)] focus-visible:text-[var(--teal-300)] group/link text-base border-none mb-2"
                                        aria-label="View GeoLens Details"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>
                                            GeoLens
                                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px" />
                                        </span>
                                    </Link>
                                </h3>

                                <p className="mt-2 text-sm leading-normal">
                                    An evidence-grade geotagging camera for surveyors, valuers, and field inspectors. Every photo carries a burned-in stamp — coordinates, address, map tile, timestamp, and operator identity — plus a verifiable EXIF audit trail. Zero data collection.
                                </p>

                                <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                                    {["Swift", "SwiftUI", "SwiftData", "StoreKit 2", "MapKit", "WeatherKit"].map((tech) => (
                                        <li key={tech} className="mr-1.5 mt-2">
                                            <div className="flex items-center rounded-full bg-[var(--teal-400)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--teal-300)]">
                                                {tech}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6">
                                    <a
                                        href="https://apps.apple.com/us/app/geolens-geotag-camera/id6779347733"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative z-10 inline-block focus-ring rounded-lg transition-transform hover:scale-105"
                                        aria-label="Download GeoLens on the App Store"
                                    >
                                        <img
                                            src="/app-store-badge-black.svg"
                                            alt="Download on the App Store"
                                            className="h-10 w-auto"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* DocFort Item */}
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[20px] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.05)] lg:group-hover:drop-shadow-lg"></div>

                            {/* App Icon (Left Column on larger screens) */}
                            <header className="z-10 mb-2 mt-1 xs:mb-0 sm:col-span-2">
                                <Link href="/docfort">
                                    <div className="h-16 w-16 rounded-[16px] bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,143,214,0.15)] overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                                        <img src="/docfort-logo.png" alt="DocFort Official Logo" className="w-full h-full object-cover" />
                                    </div>
                                </Link>
                            </header>

                            {/* Content (Right Column structure) */}
                            <div className="z-10 sm:col-span-6">
                                <h3>
                                    <Link
                                        href="/docfort"
                                        className="inline-flex items-baseline font-medium leading-tight text-[var(--text-primary)] hover:text-[var(--teal-300)] focus-visible:text-[var(--teal-300)] group/link text-base border-none mb-2"
                                        aria-label="View DocFort Details"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>
                                            DocFort
                                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px" />
                                        </span>
                                    </Link>
                                </h3>

                                <p className="mt-2 text-sm leading-normal">
                                    A privacy-first document vault for iPhone, iPad & Mac. Keep your important documents secure, organized, and always accessible — with zero data collection. Optimized to an incredibly small 3.1 MB footprint with instant load times.
                                </p>

                                <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                                    {["Swift", "SwiftUI", "CoreData", "CloudKit"].map((tech) => (
                                        <li key={tech} className="mr-1.5 mt-2">
                                            <div className="flex items-center rounded-full bg-[var(--teal-400)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--teal-300)]">
                                                {tech}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6">
                                    <a
                                        href="https://apps.apple.com/in/app/docfort/id6759193013"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative z-10 inline-block focus-ring rounded-lg transition-transform hover:scale-105"
                                        aria-label="Download DocFort on the App Store"
                                    >
                                        <img
                                            src="/app-store-badge-black.svg"
                                            alt="Download on the App Store"
                                            className="h-10 w-auto"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
