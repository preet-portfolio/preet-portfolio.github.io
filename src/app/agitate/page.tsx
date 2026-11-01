import { backHref } from "@/data/work";
import { AppStoreBadge, Card, Hero, Labels, Page, Row, link } from "@/components/Page";

export const metadata = {
    title: "Agitate | Shake to Develop",
    description:
        "Agitate turns your iPhone into an instant camera. Take a photo, watch it print as a blank film card, then shake your phone to develop it. Everything stays on your device. Available on the App Store.",
};

export default function AgitatePage() {
    return (
        <Page
            back={{ href: backHref("agitate"), label: "Back to Portfolio" }}
            footer={
                <p>
                    Built with Swift &amp; SwiftUI on AVFoundation, Core Motion, Metal and Core Haptics — no third-party
                    dependencies.
                </p>
            }
        >
            <Hero icon="/agitate-logo.png" iconAlt="Agitate App Icon" name="Agitate" tagline="Shake to develop" />

            <div className="max-w-reading space-y-4 text-lg">
                <p>
                    Take a photo and it prints as a blank instant-film card. Nothing on it yet.
                </p>
                <p>
                    Then you shake your phone, and the picture comes through. Agitate reads the motion sensors in real
                    time, so the print develops as you agitate it, with haptics you can feel as the image emerges.
                </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <AppStoreBadge href="https://apps.apple.com/app/id6823962224" name="Agitate" />
                <Labels items={["iPhone", "Zero Data Collection", "No Ads"]} />
            </div>

            <Card title="How It Works" className="mt-10 md:mt-14">
                <Row title="Snap, Then Wait">
                    <p>
                        Press the shutter and a blank card slides out of the slot. Like real instant film, what you shot
                        isn&apos;t visible yet — you have to work for it.
                    </p>
                </Row>
                <Row title="Shake to Develop">
                    <p>
                        A shake detector tuned to tell a deliberate shake from walking or a tilt drives the
                        development. The image is rendered on the GPU with Metal, and Core Haptics lets you feel the
                        print come through.
                    </p>
                </Row>
                <Row title="Can't Shake? Hold">
                    <p>
                        Prefer not to shake your phone? Switch to hold-to-develop and press instead. Close a print
                        halfway and it keeps its progress — pick it up again later.
                    </p>
                </Row>
                <Row title="A Gallery of Prints">
                    <p>
                        Every print lands in your gallery, developed or still in progress. Write a caption on the
                        border, share it, or save it to your Photos library.
                    </p>
                </Row>
            </Card>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card title="Nothing Leaves Your Device">
                    <p>
                        Agitate contains no networking code: no accounts, no analytics, no third-party SDKs, and no ads. Your
                        photos and prints are stored in the app&apos;s private storage on your iPhone, and your
                        iPhone&apos;s backups include them too. Apart from that, they only go somewhere else when you
                        choose to share or save one.
                    </p>
                </Card>

                <Card title="Privacy, Terms & Support">
                    <p>
                        Agitate collects nothing. Read the full policy and terms, or get in touch if something isn&apos;t
                        working:
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                        <a href="https://preet-portfolio.github.io/agitate-support/privacy.html" target="_blank" rel="noopener noreferrer" className={link}>
                            Privacy Policy
                        </a>
                        <a href="https://preet-portfolio.github.io/agitate-support/terms.html" target="_blank" rel="noopener noreferrer" className={link}>
                            Terms of Use
                        </a>
                        <a href="mailto:preet2020@icloud.com?subject=Agitate%20support" className={link}>
                            Email Support
                        </a>
                    </div>
                </Card>
            </div>
        </Page>
    );
}
