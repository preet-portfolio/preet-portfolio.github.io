import Link from "next/link";
import { link } from "@/components/Page";
import { Reading, Section, lead, list } from "@/components/Reading";

export const metadata = {
    title: "Deflate — Privacy Policy",
    description:
        "Deflate privacy policy: no data collection, no servers, no trackers, no network code at all. Your documents never leave your device.",
};

export default function DeflatePrivacyPage() {
    return (
        <Reading back={{ href: "/deflate", label: "Back to Deflate" }} title="Deflate Privacy Policy" meta="Last updated: November 1, 2026">
            <p className={lead}>
                Deflate has no servers, and no way to reach one. We never receive your documents, your images, or your name.
            </p>

            <Section title="What Deflate collects">
                <p>
                    Nothing. Deflate collects no data of any kind — not your files, not their contents, not their names,
                    not usage statistics, not a device identifier. There is no analytics, no advertising, no tracking, and
                    no third-party SDK of any kind in the app.
                </p>
                <p>
                    Because nothing is collected, there is nothing to sell, share, breach, or hand over.
                </p>
            </Section>

            <Section title="Why we can say that with confidence">
                <p>
                    Deflate contains <strong>no networking code at all</strong>. Not disabled
                    networking, not opt-out networking — none. The app makes no use of{" "}
                    <code className="font-mono text-sm">URLSession</code>, the Network framework, or any other
                    mechanism for reaching the internet, and it contains no outbound URL.
                </p>
                <p>
                    This was checked against the source for version 1.0, and it is the reason the app can make this
                    promise as a fact about how it is built rather than as a policy commitment you have to trust.
                </p>
            </Section>

            <Section title="What Deflate accesses, and why">
                <ul className={list}>
                    <li>
                        <strong>The files you choose</strong> — and only those. You pick a PDF
                        or image through the system file picker, or drag one in. On Mac, Deflate runs in the App Sandbox
                        with user-selected file access only, which means it is technically incapable of browsing your disk
                        on its own.
                    </li>
                    <li>
                        <strong>Nothing else.</strong> Deflate does not request access to your
                        photo library, camera, microphone, location, contacts, calendar, or health data. It has no reason
                        to, so it never asks.
                    </li>
                </ul>
            </Section>

            <Section title="Where the work happens">
                <p>
                    Entirely on your device, using Apple&apos;s own frameworks — PDFKit for documents, Core Image and
                    ImageIO for image encoding, and Vision for the optional &ldquo;Make Searchable&rdquo; OCR feature.
                </p>
                <p>
                    <strong>Text recognition is local.</strong> When you make a scan
                    searchable, Vision reads the page on your device and the recognized text is written into your own copy
                    of the PDF. It is never uploaded, and no one else ever sees it.
                </p>
                <p>
                    While a job runs, Deflate writes working files into its own temporary directory on your device. Those
                    files are yours, are not synced anywhere, and are cleaned up by the system.
                </p>
            </Section>

            <Section title="Required-reason API disclosures">
                <p>
                    Apple requires apps to declare certain APIs and the reason they are used. Deflate&apos;s privacy
                    manifest declares exactly two, and this is the whole list:
                </p>
                <ul className={list}>
                    <li>
                        <strong>File timestamps</strong> — used only to read back the size and
                        date of a file Deflate itself just wrote, so it can show you an accurate before-and-after figure.
                    </li>
                    <li>
                        <strong>User defaults</strong> — used to remember a single value: the
                        width of the controls column in the Mac window. It holds no personal information.
                    </li>
                </ul>
            </Section>

            <Section title="Accounts and purchases">
                <p>
                    Deflate has no account, no login, and no cloud sync. Nothing about you is stored because nothing about
                    you is ever asked for.
                </p>
                <p>
                    The app is free and carries no advertising in any tier. If a one-time purchase is offered in a future
                    version, it will be processed by Apple — payment details are handled entirely by the App Store and are
                    never visible to the app or to us.
                </p>
            </Section>

            <Section title="Children">
                <p>
                    Deflate collects no personal information from anyone, of any age.
                </p>
            </Section>

            <Section title="Your control">
                <p>
                    The files you produce are ordinary files, saved where you choose to save them, under your control.
                    Deleting them deletes them. Uninstalling Deflate removes the app and its working data from your device
                    completely — there is no copy anywhere else, because there was never anywhere else.
                </p>
            </Section>

            <Section title="Changes to this policy">
                <p>
                    If this policy changes, the &ldquo;last updated&rdquo; date above changes with it. Any change that
                    weakened the on-device guarantee would be a change to the app&apos;s reason for existing, and would be
                    stated plainly rather than buried here.
                </p>
            </Section>

            <Section title="Contact">
                <p>
                    Questions about this policy:{" "}
                    <a href="mailto:preet2020@icloud.com" className={link}>preet2020@icloud.com</a>
                </p>
                <p>
                    For help using the app, see the{" "}
                    <Link href="/deflate/support" className={link}>support page</Link>.
                </p>
            </Section>
        </Reading>
    );
}
