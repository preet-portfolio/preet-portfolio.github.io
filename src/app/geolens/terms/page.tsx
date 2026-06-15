import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "GeoLens — Terms of Use (EULA)",
    description: "GeoLens terms of use: subscriptions, accuracy disclosures, and acceptable use.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-200 mb-3">{title}</h2>
            <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
        </section>
    );
}

export default function GeoLensTermsPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased">
            <main className="relative max-w-3xl mx-auto px-6 py-12 md:px-12 md:py-20">
                <nav className="mb-12">
                    <Link href="/geolens" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-sky-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to GeoLens
                    </Link>
                </nav>

                <header className="mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-200 mb-2">Terms of Use (EULA)</h1>
                    <p className="text-sm text-slate-500">Last updated: June 11, 2026</p>
                </header>

                <Section title="Agreement">
                    <p>
                        By downloading or using GeoLens you agree to these terms and to Apple&apos;s{" "}
                        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="text-sky-400 hover:text-sky-300" target="_blank" rel="noopener noreferrer">
                            Licensed Application End User License Agreement
                        </a>{" "}
                        (the standard EULA), which governs your license to the app.
                    </p>
                </Section>

                <Section title="Subscriptions">
                    <p>GeoLens offers auto-renewable subscriptions, billed through your Apple ID:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong className="text-slate-300">Premium</strong> — $1.99 per month or $14.99 per year (or local equivalent): unlimited captures, full sensor resolution, advanced metadata, watermark removal, stamp customization.</li>
                        <li><strong className="text-slate-300">Pro (White-Label)</strong> — $49.99 per year (or local equivalent): everything in Premium plus your own logo on every stamp.</li>
                    </ul>
                    <p>
                        Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period.
                        Manage or cancel anytime in your App Store account settings. Payment is charged to your Apple ID at purchase
                        confirmation. The free tier includes 5 stamped captures per calendar month and requires no account.
                    </p>
                </Section>

                <Section title="Accuracy disclosure">
                    <p>
                        GeoLens reports location data exactly as measured by your device, including the GPS accuracy radius stamped on
                        every photo. Positioning quality depends on your device, surroundings, and settings. Addresses are derived from
                        Apple&apos;s geocoding service and may be imprecise; site labels are attestations entered by the operator, marked
                        as such on the stamp, and validated only by proximity to where they were set. GeoLens makes no warranty that
                        stamped information meets the evidentiary standards of any particular institution or jurisdiction.
                    </p>
                </Section>

                <Section title="Acceptable use">
                    <p>
                        You may not use GeoLens to misrepresent the location, time, or authorship of a photograph, or for any unlawful
                        purpose. You are responsible for the accuracy of site labels and any logo or content you add to your stamps.
                    </p>
                </Section>

                <Section title="Privacy">
                    <p>
                        GeoLens collects no data. See the{" "}
                        <Link href="/geolens/privacy" className="text-sky-400 hover:text-sky-300">Privacy Policy</Link>.
                    </p>
                </Section>

                <Section title="Contact">
                    <p>
                        Questions about these terms: <a href="mailto:preet2020@icloud.com" className="text-sky-400 hover:text-sky-300">preet2020@icloud.com</a>
                    </p>
                </Section>
            </main>
        </div>
    );
}
