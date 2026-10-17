import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Agitate — Terms of Use (EULA)",
    description: "Agitate terms of use: license, acceptable use, and your content.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-200 mb-3">{title}</h2>
            <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
        </section>
    );
}

export default function AgitateTermsPage() {
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
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-200 mb-2">Terms of Use (EULA)</h1>
                    <p className="text-sm text-slate-500">Last updated: October 17, 2026</p>
                </header>

                <Section title="Agreement">
                    <p>
                        By downloading or using Agitate you agree to these terms and to Apple&apos;s{" "}
                        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="text-orange-300 hover:text-orange-200" target="_blank" rel="noopener noreferrer">
                            Licensed Application End User License Agreement
                        </a>{" "}
                        (the standard EULA), which governs your license to the app.
                    </p>
                </Section>

                <Section title="Price">
                    <p>
                        Agitate is free. It has no in-app purchases, subscriptions, or advertising.
                    </p>
                </Section>

                <Section title="Your photos">
                    <p>
                        The photos you take and the prints you make are yours. They stay on your device, and we never receive
                        or claim any rights to them.
                    </p>
                </Section>

                <Section title="Safe use">
                    <p>
                        Developing a print means shaking your phone. Hold it securely, mind the people and objects around you,
                        and don&apos;t shake it while driving or anywhere a dropped phone could cause harm. If you&apos;d rather
                        not shake, use &ldquo;Hold to develop&rdquo; instead. We are not responsible for damage to your device
                        from dropping it.
                    </p>
                </Section>

                <Section title="Acceptable use">
                    <p>
                        You may not use Agitate for any unlawful purpose, or to photograph people where they have a reasonable
                        expectation of privacy without their consent.
                    </p>
                </Section>

                <Section title="No warranty">
                    <p>
                        Agitate is provided &ldquo;as is&rdquo;. To the extent the law allows, we make no warranty that the
                        app will be error-free, and we are not liable for the loss of prints stored in the app — save the
                        ones you care about to your Photos library.
                    </p>
                </Section>

                <Section title="Privacy">
                    <p>
                        Agitate collects no data. See the{" "}
                        <Link href="/agitate/privacy" className="text-orange-300 hover:text-orange-200">Privacy Policy</Link>.
                    </p>
                </Section>

                <Section title="Contact">
                    <p>
                        Questions about these terms:{" "}
                        <a href="mailto:preet2020@icloud.com" className="text-orange-300 hover:text-orange-200">preet2020@icloud.com</a>
                    </p>
                </Section>
            </main>
        </div>
    );
}
