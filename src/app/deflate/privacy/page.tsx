import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Deflate — Privacy Policy",
    description:
        "Deflate privacy policy: no data collection, no servers, no trackers, no network code at all. Your documents never leave your device.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-200 mb-3">{title}</h2>
            <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
        </section>
    );
}

export default function DeflatePrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased">
            <main className="relative max-w-3xl mx-auto px-6 py-12 md:px-12 md:py-20">
                <nav className="mb-12">
                    <Link href="/deflate" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-violet-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Deflate
                    </Link>
                </nav>

                <header className="mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-200 mb-2">Deflate Privacy Policy</h1>
                    <p className="text-sm text-slate-500">Last updated: August 28, 2026</p>
                </header>

                <p className="text-lg text-slate-300 leading-relaxed mb-12">
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
                        Deflate contains <strong className="text-slate-300">no networking code at all</strong>. Not disabled
                        networking, not opt-out networking — none. The app makes no use of{" "}
                        <code className="text-violet-300 text-sm">URLSession</code>, the Network framework, or any other
                        mechanism for reaching the internet, and it contains no outbound URL.
                    </p>
                    <p>
                        This is verified against the source before every release, and it is the reason the app can make this
                        promise as a fact about how it is built rather than as a policy commitment you have to trust.
                    </p>
                </Section>

                <Section title="What Deflate accesses, and why">
                    <ul className="list-disc pl-5 space-y-3">
                        <li>
                            <strong className="text-slate-300">The files you choose</strong> — and only those. You pick a PDF
                            or image through the system file picker, or drag one in. On Mac, Deflate runs in the App Sandbox
                            with user-selected file access only, which means it is technically incapable of browsing your disk
                            on its own.
                        </li>
                        <li>
                            <strong className="text-slate-300">Nothing else.</strong> Deflate does not request access to your
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
                        <strong className="text-slate-300">Text recognition is local.</strong> When you make a scan
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
                    <ul className="list-disc pl-5 space-y-3">
                        <li>
                            <strong className="text-slate-300">File timestamps</strong> — used only to read back the size and
                            date of a file Deflate itself just wrote, so it can show you an accurate before-and-after figure.
                        </li>
                        <li>
                            <strong className="text-slate-300">User defaults</strong> — used to remember a single value: the
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
                        <a href="mailto:preet2020@icloud.com" className="text-violet-300 hover:text-violet-200">preet2020@icloud.com</a>
                    </p>
                    <p>
                        For help using the app, see the{" "}
                        <Link href="/deflate/support" className="text-violet-300 hover:text-violet-200">support page</Link>.
                    </p>
                </Section>
            </main>
        </div>
    );
}
