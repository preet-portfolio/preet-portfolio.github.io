import Link from "next/link";
import { appStoreUrl, sinceLabel, type Group, type Item } from "@/data/work";

// One of the two groups on the home page. Each row is a <details>, so it opens without
// JavaScript and the page reads the same with scripts off.
export default function WorkGroup({ id, title, note, items }: { id: Group; title: string; note: string; items: Item[] }) {
    return (
        <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8 rounded-card bg-surface p-6 shadow-card md:p-8">
            <h2 id={`${id}-title`} className="m-0 text-heading font-medium text-ink">
                {title} <span className="text-muted">({items.length})</span>
            </h2>
            <p className="mb-4 mt-1 font-mono text-xs text-muted">{note}</p>

            {items.map((item) => (
                <details key={item.id} className="group border-t border-rule">
                    <summary className="flex cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
                        <Icon item={item} />
                        {/* The label drops under the name when the two don't fit on one line. */}
                        <span className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <span className="text-name font-medium text-ink group-open:text-accent-deep">
                                {item.name}
                            </span>
                            <span className="font-mono text-xs text-muted">
                                {item.platforms ? item.platforms.join(" · ") : item.status}
                            </span>
                        </span>
                        <span aria-hidden="true" className="w-3 shrink-0 text-center font-mono text-muted after:content-['+'] group-open:after:content-['–']" />
                    </summary>

                    <div className="flex flex-col gap-4 pb-6 pl-14">
                        <p className="m-0 text-base leading-snug text-ink">{item.line}</p>
                        <p className="m-0 font-mono text-xs text-muted">
                            {item.since ? `On the App Store since ${sinceLabel(item.since)}` : item.kind}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                            {item.appStoreId && (
                                <a href={appStoreUrl(item)} aria-label={`Download ${item.name} on the App Store`}>
                                    <img src="/app-store-badge-black.svg" alt="" className="h-10 w-auto" />
                                </a>
                            )}
                            {item.page && (
                                <Link href={item.page} className="text-ink underline underline-offset-4 hover:text-accent-deep">
                                    About {item.name}
                                </Link>
                            )}
                            {item.links.map((link) => (
                                <a key={link.href} href={link.href} className="text-muted underline underline-offset-4 hover:text-accent-deep">
                                    {link.label}
                                    <span className="sr-only"> for {item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </details>
            ))}
        </section>
    );
}

function Icon({ item }: { item: Item }) {
    if (item.icon) {
        return <img src={item.icon} alt="" className="h-10 w-10 shrink-0 rounded-icon object-cover shadow-icon" />;
    }
    return (
        <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-icon bg-ink font-serif text-xl italic text-surface">
            {item.name[0]}
        </span>
    );
}
