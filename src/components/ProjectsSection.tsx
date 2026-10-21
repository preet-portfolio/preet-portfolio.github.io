"use client";

import { useState } from "react";
import Link from "next/link";

type Project = {
    id: string;
    name: string;
    status: string;
    href: string;
    line: string;
    icon?: string;
    tile?: string;
};

// Newest work first. Only describe what the version live on the App Store does.
const apps: Project[] = [
    { id: "agitate", name: "Agitate", status: "App Store", href: "/agitate", icon: "/agitate-logo.png", line: "An instant camera. Every photo prints blank, and you shake your phone to develop it." },
    { id: "auditwedge", name: "AuditWedge", status: "in progress", href: "/auditwedge", tile: "#0A0A0A", line: "Shows online stores where money slips away on every cross-border order." },
    { id: "deflate", name: "Deflate", status: "in progress", href: "/deflate", tile: "#5B3DF5", line: "Shrinks a PDF or photo to the exact size an upload form asks for." },
    { id: "geolens", name: "GeoLens", status: "App Store", href: "/geolens", icon: "/geolens-logo.png", line: "A camera that stamps every photo with where and when it was taken." },
    { id: "docfort", name: "DocFort", status: "App Store", href: "/docfort", icon: "/docfort-logo.png", line: "A safe place for the documents you can’t lose. Collects nothing." },
];

// Pieces that live on the web rather than the App Store.
const creative: Project[] = [
    { id: "hand", name: "The Hand Inside the Equation", status: "web", href: "/interactive-media-gallery", icon: "/interactive-media-gallery/icon.png", line: "Paper marbling, a black hole’s light and your own camera, each rebuilt from its maths." },
    { id: "wake", name: "wake", status: "web", href: "/wake", icon: "/wake/icon.png", line: "A living drawing instrument: thousands of lines moving through fields of force." },
];

export default function ProjectsSection() {
    const [activeId, setActiveId] = useState(apps[0].id);
    const active = [...apps, ...creative].find((p) => p.id === activeId) ?? apps[0];

    const list = (items: Project[], serif: boolean) => (
        <ul>
            {items.map((item) => {
                const on = item.id === activeId;
                return (
                    <li key={item.id}>
                        <Link
                            href={item.href}
                            onPointerEnter={() => setActiveId(item.id)}
                            onFocus={() => setActiveId(item.id)}
                            className={`flex items-baseline justify-between gap-4 border-b border-[#DEDDD8] py-3.5 no-underline transition-all duration-300 motion-reduce:transition-none text-[#0A0A0A] ${on ? "md:pl-6 md:text-[#E5480B]" : ""}`}
                        >
                            <span
                                className={
                                    serif
                                        ? "font-serif text-[clamp(36px,5vw,72px)] italic leading-none tracking-[-0.02em]"
                                        : "text-[clamp(40px,6vw,84px)] font-medium leading-none tracking-[-0.05em]"
                                }
                            >
                                {item.name}
                            </span>
                            <span className="whitespace-nowrap font-mono text-xs text-[#5C5C58]">{item.status}</span>
                        </Link>
                        {/* No hover on phones, so the line sits under the name instead of in the side card. */}
                        <p className="mt-2 mb-4 text-sm text-[#5C5C58] md:hidden">{item.line}</p>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <section id="work" className="mx-auto flex max-w-screen-xl scroll-mt-10 flex-wrap items-start gap-12 px-6 pb-16 pt-28 md:pb-36">
            <div className="min-w-0 flex-[1_1_560px]">
                <h2 className="mb-6 font-mono text-[13px] font-normal tracking-normal text-[#5C5C58]">Apps</h2>
                {list(apps, false)}

                <h2 id="creative" className="mb-6 mt-24 scroll-mt-10 font-mono text-[13px] font-normal tracking-normal text-[#5C5C58]">Creative</h2>
                {list(creative, true)}
            </div>

            <aside aria-live="polite" className="sticky top-10 hidden flex-[0_1_340px] md:block">
                <div className="flex flex-col gap-5 rounded-[28px] bg-white p-7 shadow-[0_30px_60px_rgba(10,10,10,0.08)]">
                    {active.icon ? (
                        <img src={active.icon} alt="" className="h-[120px] w-[120px] rounded-[28px] object-cover shadow-[0_0_0_1px_#E4E4E1]" />
                    ) : (
                        <span
                            className="flex h-[120px] w-[120px] items-center justify-center rounded-[28px] font-serif text-[56px] italic text-white"
                            style={{ background: active.tile }}
                        >
                            {active.name[0]}
                        </span>
                    )}
                    <p className="m-0 text-lg leading-snug text-[#0A0A0A]">{active.line}</p>
                </div>
            </aside>
        </section>
    );
}
