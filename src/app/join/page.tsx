import type { Metadata } from "next";
import Link from "next/link";
import { backHref } from "@/data/work";
import { AppStoreBadge } from "@/components/Page";

export const metadata: Metadata = {
    title: "Get DocFort",
    description: "Get DocFort, the privacy-first document vault for iPhone and iPad, on the App Store.",
    other: {
        "apple-itunes-app": "app-id=6759193013",
    },
};

// A page that only hands people on to the App Store, so it stands alone and centred, with the
// way back after the badge rather than in the header.
export default function JoinPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center overflow-x-clip px-4 py-16 text-center md:px-6">
            <main className="w-full max-w-reading">
                <img src="/docfort-logo.png" alt="DocFort" className="mx-auto mb-8 h-20 w-20 rounded-icon object-cover shadow-icon md:h-24 md:w-24" />
                <h1 className="text-display font-semibold text-ink">DocFort</h1>
                <p className="mt-4 text-name font-medium text-muted md:mt-6">
                    Get DocFort, the privacy-first document vault for iPhone and iPad, on the App Store.
                </p>

                <div className="mt-10">
                    <AppStoreBadge href="https://apps.apple.com/app/docfort/id6759193013" name="DocFort" />
                </div>

                <div className="mt-10 font-mono text-nav">
                    <Link href={backHref("docfort")} className="p-3 text-muted no-underline hover:text-accent">
                        Back to portfolio
                    </Link>
                </div>
            </main>
        </div>
    );
}
