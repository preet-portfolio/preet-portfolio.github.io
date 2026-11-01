import Link from "next/link";
import { backHref } from "@/data/work";
import { Card, Hero, Labels, Page, Row, link, note } from "@/components/Page";

export const metadata = {
    title: "Deflate | PDFs and Photos, Aimed at the Size You Were Asked For",
    description:
        "Deflate compresses PDFs and images down to a size you name in kilobytes, then shows you the size it reached. Crop a passport photo to spec, make a scan searchable, merge, split, rotate — entirely on device, with no network code at all.",
};

export default function DeflatePage() {
    return (
        <Page
            back={{ href: backHref("deflate"), label: "Back to Portfolio" }}
            footer={
                <p>
                    Built with Swift &amp; SwiftUI on PDFKit, Vision, Core Image and ImageIO — no third-party dependencies
                    in the processing pipeline.
                </p>
            }
        >
            <Hero icon="/deflate-logo.png" name="Deflate" tagline="PDFs and photos, aimed at the size you were asked for" />

            <div className="grid items-start gap-6 lg:grid-cols-[3fr_2fr]">
                <div className="pb-4">
                    <div className="max-w-reading space-y-4 text-lg">
                        <p>
                            The form said under 200 KB. Your scan is 9 MB. Your passport photo has to be 35×45 mm and under
                            50 KB, and the upload button greys out until it is.
                        </p>
                        <p>
                            Nobody gave you a quality slider. They gave you a <em>number</em>. Deflate
                            is built around that number — for PDFs and photos alike — and when it hands you back a single
                            file, it tells you plainly whether it got there.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-4">
                        <a href="https://apps.apple.com/app/id6806356565" className={`text-sm ${link}`}>
                            On the App Store
                        </a>
                        <Labels items={["iPhone, iPad & Mac", "Zero Data Collection", "No Ads, Ever"]} />
                    </div>
                </div>

                {/* The result screen, recreated in Deflate's own dark-mode colours. */}
                <Card title="What the result screen actually says">
                    <div className="max-w-md rounded-[12px] bg-[#131519] p-5 font-mono text-[11px] leading-relaxed text-[#E8EAED] sm:text-xs">
                        <p className="font-semibold text-[#FBBF24]">187 KB — smallest safe size for this content (aimed for 40 KB)</p>
                        <div className="my-3 h-px bg-[rgba(255,255,255,0.07)]"></div>
                        <p className="text-[#9BA1AC]">↓ 9643 KB smaller (−98%) · was 9830 KB</p>
                    </div>
                    <p className={`mt-4 ${note}`}>
                        The number you see is the number the file is.
                    </p>
                </Card>
            </div>

            <Card title="Built for Honesty" className="mt-6">
                <Row title="A Target in Kilobytes">
                    <p>
                        Works on PDFs <em>and</em> photos. Choose your output — JPEG or PDF — then pick a size the way
                        the form asked for it: 20, 50, 100, 200 KB and up, or type your own number. Not &ldquo;high
                        quality&rdquo;. Not a slider. The figure you were actually given.
                    </p>
                </Row>
                <Row title="When the Target Is Out of Reach">
                    <p>
                        Not every target can be reached. When one can&apos;t, Deflate stops at its lowest setting and
                        hands back the smallest file it can make. For a single file, it says plainly what it reached
                        versus what you aimed for.
                    </p>
                </Row>
                <Row title="Real Text Stays Sharp">
                    <p>
                        Deflate reads each page before touching it. Pages with genuine text are born-digital and pass
                        through untouched, still selectable and still vector. Only scanned pages get re-encoded — so a
                        mixed document never loses the half that was already perfect.
                    </p>
                </Row>
                <Row title="Photos, Cut to Spec">
                    <p>
                        Passport 35×45 mm, signature strip, square, or freeform. Drag the box, and Deflate crops to the
                        exact pixel dimensions at 300 dpi — then hits your target KB <em>without</em> shrinking the
                        photo below the size the form demands. Getting both right at once is the whole trick.
                    </p>
                </Row>
                <Row title="Scans That Can Be Searched">
                    <p>
                        Make Searchable reads the text in a scan, redraws each page as an image and lays an invisible,
                        selectable layer of text over it. Now the scan is findable, and the text can be copied out.
                        Recognition runs on your device; nothing is sent anywhere to be read.
                    </p>
                </Row>
                <Row title="The Rest of the Paperwork">
                    <p>
                        Merge files into one. Pull a page range out to its own PDF, or split every page into its own
                        file. Rotate and drag pages into the right order. Turn a pile of photos into a single PDF, one
                        page each — with phone shots landing the right way up, because Deflate reads their orientation
                        instead of ignoring it.
                    </p>
                </Row>
            </Card>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card title="Nothing Leaves Your Device">
                    <p>
                        This is not a policy promise layered over a server — there is no server. Deflate contains no networking
                        code at all: no <code className="font-mono text-sm">URLSession</code>, no Network framework, no
                        outbound request anywhere in the app. Compression, OCR, and every other operation run on your device
                        using Apple&apos;s own frameworks. There are no accounts, no analytics, no third-party SDKs, and no ads
                        in any tier.
                    </p>
                </Card>

                <Card title="Privacy & Support">
                    <p>
                        Deflate collects nothing and transmits nothing. Read the full policy, or get help with a file that
                        didn&apos;t behave the way you expected:
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                        <Link href="/deflate/privacy" className={link}>Privacy Policy</Link>
                        <Link href="/deflate/support" className={link}>Support &amp; FAQ</Link>
                    </div>
                </Card>
            </div>
        </Page>
    );
}
