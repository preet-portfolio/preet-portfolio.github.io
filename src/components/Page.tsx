import Link from "next/link";

// The frame and parts every page but the home page is built from. The header is the home
// page's header row holding only the way back; cards, rows, labels and links are the home
// page's too.
export function Page({ back, footer, children }: { back: { href: string; label: string }; footer?: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="min-h-screen overflow-x-clip">
            <header className="mx-auto flex max-w-screen-xl px-4 py-7 font-mono text-nav md:px-6">
                <Link href={back.href} className="-ml-3 p-3 text-muted no-underline hover:text-accent">
                    {back.label}
                </Link>
            </header>
            <main className="mx-auto max-w-screen-xl px-4 md:px-6">{children}</main>
            {footer ? (
                <footer className="mx-auto max-w-screen-xl px-4 pb-12 pt-24 text-center font-mono text-nav text-muted md:px-6">{footer}</footer>
            ) : (
                <div className="pb-24" />
            )}
        </div>
    );
}

export function Hero({ icon, iconAlt = "", name, tagline }: { icon?: string; iconAlt?: string; name: string; tagline: string }) {
    return (
        <div className="mb-10 mt-6 md:mb-14">
            {icon && <img src={icon} alt={iconAlt} className="mb-8 h-20 w-20 rounded-icon object-cover shadow-icon md:h-24 md:w-24" />}
            <h1 className="text-display font-semibold text-ink">{name}</h1>
            <p className="mt-4 text-name font-medium text-muted md:mt-6">{tagline}</p>
        </div>
    );
}

export function Card({ title, className = "", children }: { title?: string; className?: string; children: React.ReactNode }) {
    return (
        <section className={`rounded-card bg-surface p-6 shadow-card md:p-8 ${className}`}>
            {title && <h2 className="mb-4 text-heading font-medium text-ink">{title}</h2>}
            {children}
        </section>
    );
}

// One item in a card, under a hairline like a row on the home page.
export function Row({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="grid gap-2 border-t border-rule py-5 last:pb-0 lg:grid-cols-[2fr_3fr] lg:gap-8">
            <h3 className="text-name font-medium text-ink">{title}</h3>
            <div className="space-y-3">{children}</div>
        </div>
    );
}

export function Labels({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
            {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
    );
}

export function AppStoreBadge({ href, name }: { href: string; name: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Download ${name} on the App Store`} className="inline-block">
            <img src="/app-store-badge-black.svg" alt="Download on the App Store" className="h-10 w-auto" />
        </a>
    );
}

export const link = "text-ink underline underline-offset-4 hover:text-accent-deep";
export const note = "font-mono text-xs text-muted";
