import { ArrowUpRight } from "lucide-react";
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
                                    <span className="relative z-10 inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-400">
                                        Coming soon to the App Store
                                    </span>
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
