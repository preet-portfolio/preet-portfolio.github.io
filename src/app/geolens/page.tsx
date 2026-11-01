import Link from "next/link";
import { backHref } from "@/data/work";
import { AppStoreBadge, Card, Hero, Labels, Page, Row, link, note } from "@/components/Page";

export const metadata = {
    title: "GeoLens | Geotagged Photos with an Audit Trail",
    description: "GeoLens stamps every photo with coordinates, address, a map of the spot, and an EXIF audit trail. Built for surveyors, valuers, and field inspectors. Available on the App Store.",
};

const APP_STORE = "https://apps.apple.com/us/app/geolens-geotag-camera/id6779347733";

export default function GeoLensPage() {
    return (
        <Page
            back={{ href: backHref("geolens"), label: "Back to Portfolio" }}
            footer={<p>Built in Swift with SwiftUI, SwiftData, StoreKit 2, MapKit and WeatherKit, with 240 tests.</p>}
        >
            <Hero icon="/geolens-logo.png" iconAlt="GeoLens App Icon" name="GeoLens" tagline="Geotagged Photos with an Audit Trail" />

            <div className="grid items-start gap-6 lg:grid-cols-[3fr_2fr]">
                <div className="pb-4">
                    <p className="max-w-reading text-lg">
                        Surveyors, property valuers, loan officers, and field inspectors need undeniable proof that they were at a place at a time.
                        GeoLens burns that proof into every photo — coordinates, address, a map of the exact spot, timestamp, and the operator&apos;s
                        name — and embeds a machine-readable EXIF audit trail.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <AppStoreBadge href={APP_STORE} name="GeoLens" />
                        <Labels items={["100% Ad-Free", "Zero Data Collection"]} />
                    </div>
                </div>

                {/* The stamp, recreated: the app draws white text on a dark block over the photo. */}
                <Card title="What a capture can carry">
                    <div className="flex max-w-md items-stretch gap-3 rounded-[12px] bg-[rgba(0,0,0,0.85)] p-4 font-mono text-[11px] leading-relaxed text-[rgba(255,255,255,0.9)] sm:text-xs">
                        <div className="relative w-20 shrink-0 overflow-hidden rounded-[8px] bg-[linear-gradient(to_bottom_right,rgba(6,78,59,0.7),#1e293b)] sm:w-24" aria-hidden="true">
                            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)", backgroundSize: "14px 14px" }}></div>
                            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ef4444] ring-2 ring-[#fff]"></div>
                        </div>
                        <div className="min-w-0">
                            <p className="mb-0.5 font-semibold text-[#fff]">◆ GeoLens</p>
                            <p>Site: Sabarmati Riverfront, Ahmedabad</p>
                            <p>23.02250° N, 72.57140° E ±5m</p>
                            <p>2026-06-11 10:42:57 GMT+5:30</p>
                            <p>Alt 53m · E 80° · 35°C Mostly Clear</p>
                            <p>By: Preet Panchal</p>
                        </div>
                    </div>
                    <p className={`mt-4 ${note}`}>
                        Burned into the pixels — screenshot-resistant, and mirrored in EXIF GPS metadata.
                    </p>
                </Card>
            </div>

            <Card title="Built for Verification" className="mt-6">
                <Row title="A Map on Every Photo">
                    <p>
                        A satellite, hybrid, or standard map tile of the exact capture point is rendered beside the stamp text —
                        visual proof of place that survives sharing, printing, and report attachments.
                    </p>
                </Row>
                <Row title="Dual Audit Trail">
                    <p>
                        Human-readable proof in the pixels, machine-readable proof in the metadata: GPS coordinates with accuracy,
                        UTC-correct timestamps, the operator name in the EXIF Artist field. Strip one layer and the other survives.
                    </p>
                </Row>
                <Row title="Geofenced Site Attestation">
                    <p>
                        Operators attest the site name while standing on it — the label is bound to that GPS position and
                        automatically drops off captures taken more than 1 km away. An attestation cannot travel.
                    </p>
                </Row>
                <Row title="White-Label for Professionals">
                    <p>
                        With Pro, agencies put their own logo on every stamp for fully branded client deliverables. The free tier
                        includes 5 captures a month; Premium unlocks unlimited full-resolution captures with advanced metadata,
                        custom colors and fonts.
                    </p>
                </Row>
            </Card>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card title="Available on the App Store">
                    <p>
                        Free to download. 5 stamped captures per month on the free plan — upgrade to Premium for unlimited captures, full sensor resolution, and watermark removal.
                    </p>
                    <div className="mt-6">
                        <AppStoreBadge href={APP_STORE} name="GeoLens" />
                    </div>
                </Card>

                <Card title="Privacy & Legal">
                    <p>
                        GeoLens collects nothing. No servers, no analytics, no trackers. Your photos and your name stay on
                        your device; the location goes to Apple only for the weather, the address and the map. Read the full
                        documents:
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                        <Link href="/geolens/privacy" className={link}>Privacy Policy</Link>
                        <Link href="/geolens/terms" className={link}>Terms of Use</Link>
                    </div>
                </Card>
            </div>
        </Page>
    );
}
