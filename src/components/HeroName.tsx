"use client";

import { useState } from "react";

// The four notes that fade in around the name. Keep them short: this is all a
// visitor learns about Preet unless they go looking.
const notes = [
    { text: ["studied fashion", "in Baroda"], place: "left-[6%] top-[8%] md:left-[8%] md:top-[70px]", shift: "translate-y-4", align: "text-left" },
    { text: ["then media design", "in Ottawa"], place: "right-[6%] top-[20%] md:right-[9%] md:top-[110px]", shift: "-translate-y-4", align: "text-right" },
    { text: ["ran a busy", "shipping branch"], place: "left-[6%] bottom-[20%] md:left-[12%] md:bottom-[150px]", shift: "-translate-y-4", align: "text-left" },
    { text: ["now makes small,", "honest apps"], place: "right-[6%] bottom-[8%] md:right-[12%] md:bottom-[120px]", shift: "translate-y-4", align: "text-right", accent: true },
];

export default function HeroName() {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative mx-auto h-[640px] max-w-screen-xl px-6 md:h-[760px]">
            {notes.map((note) => (
                <p
                    key={note.text[0]}
                    aria-hidden={!open}
                    className={`absolute m-0 max-w-[240px] font-serif text-xl italic leading-tight transition duration-500 ease-out motion-reduce:transition-none md:text-[26px] ${note.place} ${note.align} ${note.accent ? "text-[#E5480B]" : ""} ${open ? "translate-y-0 opacity-100" : `${note.shift} opacity-0`}`}
                >
                    {note.text[0]}
                    <br />
                    {note.text[1]}
                </p>
            ))}

            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
                <button
                    type="button"
                    aria-expanded={open}
                    aria-label="Preet Panchal. Show a little about me"
                    onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(true)}
                    onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(false)}
                    // Touch and keyboard have no hover, so a tap or Enter toggles the notes.
                    onClick={(e) => (e.nativeEvent as PointerEvent).pointerType !== "mouse" && setOpen((o) => !o)}
                    className={`cursor-pointer bg-transparent p-0 text-[clamp(72px,15vw,220px)] font-semibold leading-[0.86] tracking-[-0.065em] transition-colors duration-400 [-webkit-text-stroke:2px_#0A0A0A] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#E5480B] ${open ? "text-transparent" : "text-[#0A0A0A]"}`}
                >
                    Preet
                    <br />
                    Panchal
                </button>
                <p className="mt-9 font-mono text-xs text-[#6B6B66]">
                    {open ? (
                        "that’s me, in four lines"
                    ) : (
                        <>
                            <span className="hidden pointer-fine:inline">( hover my name )</span>
                            <span className="pointer-fine:hidden">( tap my name )</span>
                        </>
                    )}
                </p>
            </div>
        </section>
    );
}
