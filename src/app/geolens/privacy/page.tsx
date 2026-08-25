import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "GeoLens — Privacy Policy",
    description: "GeoLens privacy policy: no data collection, no servers, no trackers. Your photos and location never reach us.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-200 mb-3">{title}</h2>
            <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
        </section>
    );
}

export default function GeoLensPrivacyPage() {
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
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-200 mb-2">GeoLens Privacy Policy</h1>
                    <p className="text-sm text-slate-500">Last updated: August 25, 2026</p>
                </header>

                <p className="text-lg text-slate-300 leading-relaxed mb-12">
                    GeoLens has no servers. We never receive your photos, your location, or your name.
                </p>

                <Section title="What GeoLens accesses, and why">
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong className="text-slate-300">Camera</strong> — to capture the photos you take. Photos are processed entirely on your device.</li>
                        <li><strong className="text-slate-300">Precise location</strong> — to stamp coordinates, altitude, heading, and address onto your photos and into their EXIF metadata. Location is read at capture time only and is never transmitted to us.</li>
                        <li><strong className="text-slate-300">Photo library (add-only)</strong> — to save your stamped photos. GeoLens cannot read your existing photos.</li>
                        <li><strong className="text-slate-300">Weather (Apple Weather)</strong> — your capture coordinates are sent to Apple&apos;s WeatherKit service to fetch current conditions, subject to <a href="https://www.apple.com/legal/privacy/" className="text-sky-400 hover:text-sky-300" target="_blank" rel="noopener noreferrer">Apple&apos;s privacy policy</a>.</li>
                        <li><strong className="text-slate-300">Maps (Apple Maps)</strong> — capture coordinates are used with Apple&apos;s MapKit to render the map tile on your stamp and reverse-geocode the address, subject to Apple&apos;s privacy policy.</li>
                        <li><strong className="text-slate-300">Sign in with Apple (optional)</strong> — used solely to obtain your verified name for the &quot;By:&quot; line on stamps. The name is stored on your device only and can be removed at any time in Settings.</li>
                    </ul>
                </Section>

                <Section title="What GeoLens collects">
                    <p>
                        Nothing. GeoLens has no servers, no analytics, no advertising, and no trackers. Your photos, location history,
                        site labels, and name are stored on your device — and, for the free-tier capture counter, in your personal iCloud
                        under your Apple ID, which is inaccessible to us.
                    </p>
                </Section>

                <Section title="How your data is protected on the device">
                    <ul className="list-disc pl-5 space-y-3">
                        <li>
                            Stamped photos and their metadata are written with iOS <strong className="text-slate-300">Complete Protection</strong>,
                            meaning they are encrypted and unreadable while your device is locked.
                        </li>
                        <li>
                            Your verified name and your attested site (its label and coordinates) are stored in the{" "}
                            <strong className="text-slate-300">iOS Keychain</strong>, restricted to this device and not included in any backup.
                        </li>
                    </ul>
                </Section>

                <Section title="Device backups">
                    <p>
                        If you use iCloud Backup or back your device up to a computer, GeoLens&apos;s on-device data — your in-app capture
                        gallery and its metadata — is included in that backup, like any other app&apos;s data. Those backups belong to you and
                        are protected by your Apple ID and your backup encryption settings. <strong className="text-slate-300">We have no
                        access to them.</strong>
                    </p>
                    <p>
                        If you prefer GeoLens data not to be backed up at all, you can turn GeoLens off in Settings → [your name] → iCloud →
                        Manage Storage → Backups.
                    </p>
                    <p>
                        Stamped photos you save to your photo library are covered by your Photos backup settings, not by GeoLens.
                    </p>
                </Section>

                <Section title="Subscriptions">
                    <p>
                        Purchases are processed by Apple. We never see your payment details. Subscription entitlements are verified
                        on-device through StoreKit.
                    </p>
                </Section>

                <Section title="Your control">
                    <p>
                        Deleting a capture in GeoLens removes it from the app&apos;s storage (copies you saved to your Photos library remain yours,
                        under your control). Removing your name in Settings deletes the only identity data the app holds. Uninstalling the app
                        removes all app data from your device.
                    </p>
                </Section>

                <Section title="Contact">
                    <p>
                        Questions about this policy: <a href="mailto:preet2020@icloud.com" className="text-sky-400 hover:text-sky-300">preet2020@icloud.com</a>
                    </p>
                </Section>
            </main>
        </div>
    );
}
