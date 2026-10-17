import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Agitate — Privacy Policy",
    description:
        "Agitate privacy policy: no data collection, no accounts, no analytics, no network code. Your photos and prints stay on your device.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-200 mb-3">{title}</h2>
            <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
        </section>
    );
}

export default function AgitatePrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased">
            <main className="relative max-w-3xl mx-auto px-6 py-12 md:px-12 md:py-20">
                <nav className="mb-12">
                    <Link href="/agitate" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-orange-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Agitate
                    </Link>
                </nav>

                <header className="mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-200 mb-2">Agitate Privacy Policy</h1>
                    <p className="text-sm text-slate-500">Last updated: October 17, 2026</p>
                </header>

                <p className="text-lg text-slate-300 leading-relaxed mb-12">
                    Agitate has no servers and no way to reach one. We never receive your photos, your prints, or anything
                    about you.
                </p>

                <Section title="What Agitate collects">
                    <p>
                        Nothing. Agitate collects no data of any kind — not your photos, not your captions, not usage
                        statistics, not a device identifier. There are no accounts, no analytics, no advertising, no tracking,
                        and no third-party SDKs in the app.
                    </p>
                    <p>
                        Agitate contains no networking code, so there is nothing to send and nowhere to send it.
                    </p>
                </Section>

                <Section title="What Agitate accesses, and why">
                    <ul className="list-disc pl-5 space-y-3">
                        <li>
                            <strong className="text-slate-300">Camera</strong> — to take the photos that become your prints.
                            Photos are processed on your device.
                        </li>
                        <li>
                            <strong className="text-slate-300">Motion sensors</strong> — read while a print is developing, to
                            detect when you shake the phone. Motion data is used in the moment and never stored.
                        </li>
                        <li>
                            <strong className="text-slate-300">Adding to your Photos library</strong> — only when you tap Save
                            on a print. Agitate asks for add-only access, which lets it save a print but not see the rest of
                            your library.
                        </li>
                        <li>
                            <strong className="text-slate-300">Photos you pick</strong> — if you print an existing photo, you
                            choose it with the system photo picker, and Agitate receives only the photo you select.
                        </li>
                    </ul>
                    <p>
                        Agitate does not access your location, microphone, contacts, or any other personal data.
                    </p>
                </Section>

                <Section title="Where your prints live">
                    <p>
                        Your prints and their captions are stored only in Agitate&apos;s private storage on your iPhone. They
                        leave the app only when you choose to — by saving a print to Photos or sending it with the share sheet,
                        where you pick the destination.
                    </p>
                </Section>

                <Section title="Children">
                    <p>Agitate collects no personal information from anyone, of any age.</p>
                </Section>

                <Section title="Your control">
                    <p>
                        Deleting a print in the app removes it. Deleting the app removes all of your prints from your device —
                        there is no copy anywhere else.
                    </p>
                </Section>

                <Section title="Changes to this policy">
                    <p>
                        If this policy changes, the &ldquo;last updated&rdquo; date above changes with it.
                    </p>
                </Section>

                <Section title="Contact">
                    <p>
                        Questions about this policy:{" "}
                        <a href="mailto:preet2020@icloud.com" className="text-orange-300 hover:text-orange-200">preet2020@icloud.com</a>
                    </p>
                </Section>
            </main>
        </div>
    );
}
