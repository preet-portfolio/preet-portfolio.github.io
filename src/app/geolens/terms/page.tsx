import Link from "next/link";
import { link } from "@/components/Page";
import { Reading, Section, list } from "@/components/Reading";

export const metadata = {
    title: "GeoLens — Terms of Use (EULA)",
    description: "GeoLens terms of use: subscriptions, accuracy disclosures, and acceptable use.",
};

export default function GeoLensTermsPage() {
    return (
        <Reading back={{ href: "/geolens", label: "Back to GeoLens" }} title="Terms of Use (EULA)" meta="Last updated: June 11, 2026">
            <Section title="Agreement">
                <p>
                    By downloading or using GeoLens you agree to these terms and to Apple&apos;s{" "}
                    <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className={link} target="_blank" rel="noopener noreferrer">
                        Licensed Application End User License Agreement
                    </a>{" "}
                    (the standard EULA), which governs your license to the app.
                </p>
            </Section>

            <Section title="Subscriptions">
                <p>GeoLens offers auto-renewable subscriptions, billed through your Apple ID:</p>
                <ul className={list}>
                    <li><strong>Premium</strong> — $1.99 per month or $14.99 per year (or local equivalent): unlimited captures, full sensor resolution, advanced metadata, watermark removal, stamp customization.</li>
                    <li><strong>Pro (White-Label)</strong> — $49.99 per year (or local equivalent): everything in Premium plus your own logo on every stamp.</li>
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
                    <Link href="/geolens/privacy" className={link}>Privacy Policy</Link>.
                </p>
            </Section>

            <Section title="Contact">
                <p>
                    Questions about these terms: <a href="mailto:preet2020@icloud.com" className={link}>preet2020@icloud.com</a>
                </p>
            </Section>
        </Reading>
    );
}
