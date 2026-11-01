import { link } from "@/components/Page";
import { Reading, Section, lead, list } from "@/components/Reading";

export const metadata = {
    title: "GeoLens — Privacy Policy",
    description: "GeoLens privacy policy: no data collection, no servers, no trackers. Your photos and location never reach us.",
};

export default function GeoLensPrivacyPage() {
    return (
        <Reading back={{ href: "/geolens", label: "Back to GeoLens" }} title="GeoLens Privacy Policy" meta="Last updated: November 1, 2026">
            <p className={lead}>
                GeoLens has no servers. We never receive your photos, your location, or your name.
            </p>

            <Section title="What GeoLens accesses, and why">
                <ul className={list}>
                    <li><strong>Camera</strong> — to capture the photos you take with the back or front camera (a selfie showing you on site). Photos, including any faces in them, are processed entirely on your device and never uploaded.</li>
                    <li><strong>Precise location</strong> — to stamp coordinates, altitude, heading, and address onto your photos and into their EXIF metadata. Location is read only while GeoLens is open on screen, never in the background, and is never transmitted to us.</li>
                    <li><strong>Photo library (add-only)</strong> — to save your stamped photos. GeoLens can&apos;t see your photo library. It only gets a photo you pick as your logo.</li>
                    <li><strong>Weather (Apple Weather)</strong> — your capture coordinates are sent to Apple&apos;s WeatherKit service to fetch current conditions, subject to <a href="https://www.apple.com/legal/privacy/" className={link} target="_blank" rel="noopener noreferrer">Apple&apos;s privacy policy</a>.</li>
                    <li><strong>Maps (Apple Maps)</strong> — capture coordinates are used with Apple&apos;s MapKit to render the map tile on your stamp and reverse-geocode the address, subject to Apple&apos;s privacy policy.</li>
                    <li><strong>Sign in with Apple (optional)</strong> — used solely to fill in your name for the &quot;By:&quot; line on stamps; you can type it yourself instead. GeoLens reads only your name, never your email or Apple ID, and stores it on your device only.</li>
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
                <ul className={list}>
                    <li>
                        Stamped photos are written with iOS <strong>Complete Protection</strong>, meaning they
                        are encrypted and unreadable while your device is locked.
                    </li>
                    <li>
                        The gallery&apos;s metadata database uses iOS <strong>Complete Unless Open</strong>{" "}
                        protection: it is encrypted at rest, and stays readable while locked only if GeoLens already has it open.
                    </li>
                    <li>
                        Your name and your attested site (its label and coordinates) are kept in the{" "}
                        <strong>iOS Keychain</strong>, restricted to this device. They are also stamped onto
                        each photo you take and written into its metadata, so they travel with your photos, including in backups.
                    </li>
                </ul>
            </Section>

            <Section title="Device backups">
                <p>
                    If you use iCloud Backup or back your device up to a computer, GeoLens&apos;s on-device data — your in-app capture
                    gallery and its metadata — is included in that backup, like any other app&apos;s data. Those backups belong to you and
                    are protected by your Apple ID and your backup encryption settings. <strong>We have no
                    access to them.</strong>
                </p>
                <p>
                    If you prefer GeoLens data not to be backed up at all, go to Settings → [your name] → iCloud → Storage (or
                    Manage Account Storage) → Backups, choose this iPhone, and turn GeoLens off.
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

            <Section title="Deleting your data">
                <p>
                    <strong>Settings → Delete All Data</strong> erases every capture and its metadata, your name,
                    your attested site, your stamp design and logo, and your gallery names from the device. On iOS 18 and later the
                    capture database is destroyed rather than emptied, so deleted captures can&apos;t be recovered from it or from later
                    backups; on iOS 17 it is emptied instead. Photos you saved to your photo library, the free-tier capture counter, and
                    your subscription are not affected.
                </p>
                <p>
                    Uninstalling GeoLens removes your captures and settings, but iOS keeps Keychain items — your name and attested
                    site — on the device after an uninstall. Use Delete All Data first if you want those gone too.
                </p>
            </Section>

            <Section title="Contact">
                <p>
                    Questions about this policy: <a href="mailto:preet2020@icloud.com" className={link}>preet2020@icloud.com</a>
                </p>
            </Section>
        </Reading>
    );
}
