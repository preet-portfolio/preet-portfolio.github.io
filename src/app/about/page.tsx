import type { Metadata } from "next";
import { Reading, lead } from "@/components/Reading";
import { link } from "@/components/Page";

export const metadata: Metadata = {
    title: "Preet Panchal — About",
    description: "I build apps and tools, with help from AI. None of my apps collects your data, runs analytics or tracks you.",
};

// One short page in Preet's own words. The line about the apps is what all four privacy
// policies say. It stops short of "nothing leaves your phone", because GeoLens sends a location
// to Apple for the weather and the map.
export default function AboutPage() {
    return (
        <Reading back={{ href: "/", label: "Back to Portfolio" }} title="About" meta="Last updated: November 1, 2026">
            <div className="space-y-4">
                <p className={lead}>I&apos;m Preet. I build apps and tools, with help from AI.</p>
                <p>
                    I watch a lot of sci-fi, and I&apos;ve always been curious about what&apos;s up in the sky. It&apos;s hard to
                    believe we&apos;re the only civilisation out there. I&apos;ve watched too many YouTube documentaries, the
                    genuine ones, not random AI slop: things that can be verified. I&apos;m just fascinated.
                </p>
                <p>
                    I hold my own work to the same rule. My{" "}
                    <a href="https://i-found-something-in-the-sky.vercel.app" target="_blank" rel="noopener noreferrer" className={link}>
                        sky search
                    </a>{" "}
                    writes down its rules before it looks at any data, and my{" "}
                    <a href="https://dotnet-ladder.vercel.app" target="_blank" rel="noopener noreferrer" className={link}>
                        .NET ladder
                    </a>{" "}
                    is graded by outside tests, not by me.
                </p>
                <p>
                    I want to make tools that are easy to use and affordable, with security and compliance first. None of my
                    apps collects your data, runs analytics or tracks you, so there&apos;s nothing for me to share.
                </p>
                <p>
                    Want a feature in one of my apps, or an app for you or your company?{" "}
                    <a href="mailto:preet2020@icloud.com" className={link}>
                        Email me
                    </a>
                    .
                </p>
            </div>
        </Reading>
    );
}
