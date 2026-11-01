import { Page } from "@/components/Page";

// Privacy policies, terms and support pages: plain text on the paper, a title column beside
// one column of text, and no cards.
export function Reading({ back, title, meta, children }: { back: { href: string; label: string }; title: string; meta: string; children: React.ReactNode }) {
    return (
        <Page back={back}>
            <div className="mt-6 grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-6">
                <div className="lg:sticky lg:top-8 lg:self-start">
                    <h1 className="text-title font-semibold text-ink">{title}</h1>
                    <p className="mt-4 font-mono text-xs text-muted">{meta}</p>
                </div>
                <div className="max-w-reading">{children}</div>
            </div>
        </Page>
    );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mt-10 first:mt-0">
            <h2 className="mb-3 text-heading font-medium text-ink">{title}</h2>
            <div className="space-y-3">{children}</div>
        </section>
    );
}

export const lead = "text-lg";
export const list = "list-disc space-y-3 pl-5 marker:text-muted";
