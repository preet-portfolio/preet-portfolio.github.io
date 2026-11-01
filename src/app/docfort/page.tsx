import { backHref } from "@/data/work";
import { AppStoreBadge, Card, Hero, Page, Row, link, quietLink } from "@/components/Page";

export const metadata = {
    title: "DocFort | Digital Document Vault",
    description: "A deep dive into DocFort: The privacy-first document vault for iPhone and iPad.",
};

export default function DocFortPage() {
    return (
        <Page
            back={{ href: backHref("docfort"), label: "Back to Portfolio" }}
            footer={
                <p>
                    Deployed statically on GitHub Pages. Built with Next.js 16, Tailwind CSS &amp; Framer Motion. <br />
                    Read the full <a href="https://github.com/preet-portfolio" target="_blank" rel="noopener noreferrer" className={quietLink}>Project Specification Idea here</a>.
                </p>
            }
        >
            <Hero icon="/docfort-logo.png" iconAlt="DocFort Logo" name="DocFort" tagline="A Vault for the Details of Life's Critical Documents" />

            <p className="max-w-reading text-lg">
                An underserved premium consumer market exists for intelligent document protection platforms. DocFort is not just a tracker; it&apos;s a privacy-first Digital Vault designed around Apple&apos;s intelligent on-device processing to solve the &quot;Traveler&apos;s Nightmare&quot; of missed expirations.
            </p>
            <div className="mt-8">
                <AppStoreBadge href="https://apps.apple.com/in/app/docfort/id6759193013" name="DocFort" />
            </div>

            <Card title="Strategic Foundation" className="mt-10 md:mt-14">
                <Row title='The "Extract & Discard" Privacy Model'>
                    <p>
                        DocFort does not store your document images. Instead, Vision reads the document on your device, and DocFort saves the details you confirm, never the photo.
                    </p>
                </Row>
                <Row title="Temporal Intelligence Engine">
                    <p>
                        Not just an expiration reminder app. A passport expiring in 6 months is already invalid for international travel. DocFort context-aware alerts notify you 9 months ahead accounting for both the 6-month international entry requirement and a standard 3-month processing time.
                    </p>
                </Row>
                <Row title="Bento Grid Dashboards">
                    <p>
                        Taking heavy influence from Apple&apos;s 2025/2026 design principles. The interface uses Liquid Glass, and the vault can sit behind an optional Face ID lock. The UI is calm and precise.
                    </p>
                </Row>
                <Row title="Three-Generation Vault">
                    <p>
                        Designed as a living document management system that scales: documents for the whole family, combined into a singular, unified timeline view.
                    </p>
                </Row>
            </Card>

            <Card title="Need Help or Have Questions?" className="mt-6">
                <p className="max-w-reading">
                    If you&apos;re looking for detailed documentation, privacy policy specifics, or need assistance using DocFort, you can read more at our dedicated support hub.
                </p>
                <div className="mt-6 text-sm">
                    <a href="https://preet-portfolio.github.io/docfort-support/" target="_blank" rel="noopener noreferrer" className={link}>
                        Visit DocFort Support
                    </a>
                </div>
            </Card>
        </Page>
    );
}
