"use client";

import { useEffect, useState } from "react";
import { Github, ExternalLink, Mail } from "lucide-react";

export default function LeftSidebar() {
    const [activeSection, setActiveSection] = useState("about");

    // Scroll spy to update active nav link
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    currentSection = section.getAttribute("id") || "";
                }
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Trigger once on load
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
    ];

    const socials = [
        { icon: Github, href: "https://github.com/preet-portfolio", label: "GitHub" },
        { icon: ExternalLink, href: "https://apps.apple.com/in/developer/preet-panchal/id1874836869", label: "App Store" },
        { icon: Mail, href: "mailto:preet2020@icloud.com", label: "Email" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                    Preet Panchal
                </h1>
                <h2 className="text-lg font-medium tracking-tight text-[var(--text-primary)] sm:text-xl">
                    Software Builder
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I build software that respects the people who use it — from privacy-first iOS apps to trust-first business tools.
                </p>

                {/* Navigation - Hidden on mobile, visible on lg+ */}
                <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                    <ul className="flex w-max flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`group flex items-center py-3 focus-ring ${activeSection === link.name.toLowerCase()
                                        ? "text-[var(--text-primary)]"
                                        : "text-[var(--text-secondary)]"
                                        }`}
                                >
                                    <span
                                        className={`nav-indicator mr-4 h-px transition-all duration-300 ease-in-out group-hover:w-16 group-hover:bg-[var(--text-primary)] group-focus-visible:w-16 group-focus-visible:bg-[var(--text-primary)] ${activeSection === link.name.toLowerCase()
                                            ? "w-16 bg-[var(--text-primary)]"
                                            : "w-8 bg-[var(--slate-400)]"
                                            }`}
                                    />
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ease-in-out group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)]">
                                        {link.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <ul className="mt-12 flex items-center gap-5" aria-label="Social media">
                {socials.map((s) => (
                    <li key={s.label}>
                        <a
                            href={s.href}
                            className="text-[var(--slate-400)] transition-colors duration-300 hover:text-[var(--text-primary)] focus-ring block"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${s.label} (opens in a new tab)`}
                        >
                            <s.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
