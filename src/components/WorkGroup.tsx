import Link from "next/link";
import { appStoreUrl, sinceLabel, type Group, type Item } from "@/data/work";

// One of the two groups on the home page. Each row is a <details>, so it opens without
// JavaScript and the page reads the same with scripts off.
export default function WorkGroup({ id, title, note, items }: { id: Group; title: string; note: string; items: Item[] }) {
    return (
        <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8 rounded-[28px] bg-white p-6 shadow-[0_30px_60px_rgba(10,10,10,0.06)] md:p-8">
            <h2 id={`${id}-title`} className="m-0 text-[22px] font-medium tracking-[-0.02em] text-[#0A0A0A]">
                {title} <span className="text-[#5C5C58]">({items.length})</span>
            </h2>
            <p className="mb-4 mt-1 font-mono text-xs text-[#5C5C58]">{note}</p>

            {items.map((item) => (
                <details key={item.id} className="group border-t border-[#E4E4E1]">
                    <summary className="flex cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
                        <Icon item={item} />
                        {/* The label drops under the name when the two don't fit on one line. */}
                        <span className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <span className="text-[clamp(20px,2.4vw,28px)] font-medium leading-tight tracking-[-0.03em] text-[#0A0A0A] group-open:text-[#C2410C]">
                                {item.name}
                            </span>
                            <span className="font-mono text-xs text-[#5C5C58]">
                                {item.platforms ? item.platforms.join(" · ") : item.status}
                            </span>
                        </span>
                        <span aria-hidden="true" className="w-3 shrink-0 text-center font-mono text-[#5C5C58] after:content-['+'] group-open:after:content-['–']" />
                    </summary>

                    <div className="flex flex-col gap-4 pb-6 pl-14">
                        <p className="m-0 text-base leading-snug text-[#0A0A0A]">{item.line}</p>
                        <p className="m-0 font-mono text-xs text-[#5C5C58]">
                            {item.since ? `On the App Store since ${sinceLabel(item.since)}` : item.kind}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                            {item.appStoreId && (
                                <a href={appStoreUrl(item)} aria-label={`Download ${item.name} on the App Store`}>
                                    <img src="/app-store-badge-black.svg" alt="" className="h-10 w-auto" />
                                </a>
                            )}
                            <Link href={item.page} className="text-[#0A0A0A] underline underline-offset-4 hover:text-[#C2410C]">
                                About {item.name}
                            </Link>
                            {item.links.map((link) => (
                                <a key={link.href} href={link.href} className="text-[#5C5C58] underline underline-offset-4 hover:text-[#C2410C]">
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
        return <img src={item.icon} alt="" className="h-10 w-10 shrink-0 rounded-[10px] object-cover shadow-[0_0_0_1px_#E4E4E1]" />;
    }
    return (
        <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#0A0A0A] font-serif text-xl italic text-white">
            {item.name[0]}
        </span>
    );
}
