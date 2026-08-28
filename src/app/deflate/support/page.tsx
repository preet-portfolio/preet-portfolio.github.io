import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata = {
    title: "Deflate — Support",
    description:
        "Help with Deflate: why a target size wasn't reached, why a multi-page PDF exported as several JPEGs, colour vs black & white, and how to get in touch.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-200 mb-3">{title}</h2>
            <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
        </section>
    );
}

function Faq({ question, children }: { question: string; children: React.ReactNode }) {
    return (
        <div className="rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 mb-4">
            <h3 className="text-base font-medium text-slate-200 mb-2">{question}</h3>
            <div className="text-slate-400 leading-relaxed text-sm space-y-3">{children}</div>
        </div>
    );
}

export default function DeflateSupportPage() {
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
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-200 mb-2">Deflate Support</h1>
                    <p className="text-sm text-slate-500">iPhone · iPad · Mac</p>
                </header>

                <p className="text-lg text-slate-300 leading-relaxed mb-12">
                    Most questions about Deflate are really one question: <em>why is my file this size and not the size I
                    asked for?</em> That one is answered first. Everything else — photos, cropping, OCR, splitting — is
                    below it. If your question isn&apos;t here, email me; a real person reads it.
                </p>

                <Section title="Frequently asked questions">
                    <Faq question="Why didn't it reach the exact size I asked for?">
                        <p>
                            Because for that file, it couldn&apos;t — not without making the page unreadable.
                        </p>
                        <p>
                            Every document has a floor. A dense, multi-megapixel scan simply cannot become a legible 40 KB
                            file; past a point, shrinking further means destroying the text you needed to keep. Deflate stops
                            at that floor and hands back the smallest readable version, telling you what it reached and what
                            you aimed for.
                        </p>
                        <p>
                            That result is still worth having. A file that went from 9.6 MB to 187 KB is 98% smaller and will
                            clear most upload limits, even though the target said 40 KB. Deflate would rather show you a
                            useful file and an honest number than a failure message or a ruined page.
                        </p>
                    </Faq>

                    <Faq question="I compressed a multi-page PDF to JPEG and got several files.">
                        <p>
                            That&apos;s expected. A JPEG can only hold one image, so a multi-page document becomes one JPEG per
                            page rather than silently losing everything after page one.
                        </p>
                        <p>
                            If you need a single file, choose PDF as the output format instead.
                        </p>
                    </Faq>

                    <Faq question="Why did some pages stay sharp while others got blurry?">
                        <p>
                            Deflate reads each page before touching it. Pages containing real, selectable text are
                            &ldquo;born-digital&rdquo; — they pass through completely untouched, staying sharp at any zoom.
                        </p>
                        <p>
                            Scanned pages are pictures of text, and pictures are the only thing that can be compressed. So in a
                            mixed document, the typed pages stay perfect and only the scans change. That difference is the
                            feature, not a glitch.
                        </p>
                    </Faq>

                    <Faq question="Should I pick Colour or Black &amp; White for a PDF?">
                        <p>
                            Choose <strong className="text-slate-300">Black &amp; White</strong> for scans of printed or
                            handwritten text. It evens out uneven lighting and converts the page to pure black and white, which
                            compresses dramatically better than colour and keeps letter edges crisp.
                        </p>
                        <p>
                            Choose <strong className="text-slate-300">Colour</strong> for anything where colour carries
                            meaning — photos, ID cards, stamps, signatures in coloured ink, charts.
                        </p>
                        <p>
                            The choice applies to the whole document, so pick based on what most of your scanned pages need.
                        </p>
                    </Faq>

                    <Faq question="My PDF barely got smaller. What happened?">
                        <p>
                            It was probably already efficient. A PDF made of real text rather than scans is mostly instructions
                            for drawing letters, and there is very little there to squeeze — it may already be under your
                            target, in which case Deflate passes it straight through untouched.
                        </p>
                        <p>
                            Compression has the most room to work when a document is made of scanned or photographed pages.
                        </p>
                    </Faq>

                    <Faq question="Can I compress a photo, or only PDFs?">
                        <p>
                            Photos too. Import a JPEG, PNG, or HEIC exactly as you would a PDF — by picking it or dragging it
                            in — and every tool works on it, compression included.
                        </p>
                        <p>
                            Phone photos land the right way up: Deflate reads the orientation your camera recorded instead of
                            ignoring it, so a portrait shot doesn&apos;t arrive on its side.
                        </p>
                    </Faq>

                    <Faq question="How do I make a passport or signature photo?">
                        <p>
                            Use the Crop tool. Pick a preset — Passport 35×45 mm, Signature, or Square — and the crop box locks
                            to that shape so you can&apos;t accidentally produce the wrong proportions. Freeform is there when
                            you need an unusual size.
                        </p>
                        <p>
                            Deflate then resizes to the exact pixel dimensions at roughly 300 dpi and compresses to your target
                            KB <strong className="text-slate-300">without</strong> shrinking the image below those dimensions.
                            That matters: forms usually check both, and hitting the file size by quietly reducing the pixel
                            size is how a photo gets rejected.
                        </p>
                    </Faq>

                    <Faq question="What does &ldquo;Make Searchable&rdquo; do?">
                        <p>
                            It reads the text in a scanned document and adds an invisible, selectable layer on top of it. The
                            page looks exactly the same, but you can now search the PDF, and select and copy its text.
                        </p>
                        <p>
                            The original page is kept underneath, untouched — nothing is redrawn or replaced. Recognition runs
                            on your device using Apple&apos;s Vision framework; the text is never sent anywhere.
                        </p>
                    </Faq>

                    <Faq question="Can I turn several photos into one PDF?">
                        <p>
                            Yes — &ldquo;Create PDF from images&rdquo; on the Home screen. Pick your images and Deflate builds a
                            single PDF with one image per page, in the order you chose. Useful for receipts, or for a document
                            you photographed a page at a time.
                        </p>
                    </Faq>

                    <Faq question="Can I split out just a few pages?">
                        <p>
                            Yes. Split shows every page as a thumbnail; tap the ones you want, or use the page-range picker for
                            something like 3–17. You can extract the selection as one combined PDF, or save each page as its
                            own separate file.
                        </p>
                    </Faq>

                    <Faq question="Where do my files go?">
                        <p>
                            Wherever you save or share them to. Deflate works on a copy inside its own storage and never
                            modifies your original. Nothing is uploaded, backed up to us, or synced anywhere — see the{" "}
                            <Link href="/deflate/privacy" className="text-violet-300 hover:text-violet-200">privacy policy</Link>.
                        </p>
                    </Faq>

                    <Faq question="Does Deflate need an internet connection?">
                        <p>
                            No, and it cannot use one. The app contains no networking code whatsoever. Everything — compression,
                            merging, splitting, cropping, and OCR — runs on your device, in airplane mode if you like.
                        </p>
                    </Faq>

                    <Faq question="Does it cost anything? Are there ads?">
                        <p>
                            Deflate is free, and it carries no advertising in any tier — that will not change. If a one-time
                            purchase is ever added for advanced options, it will be a single purchase rather than a
                            subscription, and the core tools will stay free.
                        </p>
                    </Faq>
                </Section>

                <Section title="Reporting a problem">
                    <p>
                        If a file behaves unexpectedly, the most useful things to tell me are: which device and OS version, the
                        output format and target size you chose, roughly how many pages the document has and whether they are
                        typed or scanned, and what you expected versus what happened.
                    </p>
                    <p>
                        Please don&apos;t send the document itself unless you&apos;re comfortable sharing it — in most cases the
                        description is enough.
                    </p>
                </Section>

                <Section title="Contact">
                    <p>
                        <a
                            href="mailto:preet2020@icloud.com"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-500/10 text-violet-300 font-medium hover:bg-violet-500/20 transition-colors focus-ring"
                        >
                            <Mail className="w-4 h-4" /> preet2020@icloud.com
                        </a>
                    </p>
                </Section>

                <Section title="Legal">
                    <p>
                        <Link href="/deflate/privacy" className="text-violet-300 hover:text-violet-200">Privacy Policy</Link>
                        {" · "}
                        <a
                            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-300 hover:text-violet-200"
                        >
                            Terms of Use (Apple Standard EULA)
                        </a>
                    </p>
                </Section>
            </main>
        </div>
    );
}
