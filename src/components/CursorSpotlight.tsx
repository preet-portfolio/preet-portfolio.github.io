"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
    const [pos, setPos] = useState({ x: -1000, y: -1000 });

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handler, { passive: true });
        return () => window.removeEventListener("mousemove", handler);
    }, []);

    return (
        <div
            className="cursor-spotlight hidden lg:block"
            style={{ left: pos.x, top: pos.y }}
        />
    );
}
