import Link from "next/link";
import { ArrowLeft, Search, GitMerge, FileText, ShieldCheck, ExternalLink } from "lucide-react";

export const metadata = {
    title: "AuditWedge | Cross-Border Margin Audit",
    description: "A deep dive into AuditWedge: the SKU-level margin-leak audit tool for cross-border e-commerce sellers.",
};

export default function AuditWedgePage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased selection:bg-teal-300/30 selection:text-teal-300">
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-slate-900/0 to-slate-900/0"></div>
                <div className="absolute opacity-[0.03] inset-0" style={{ backgroundImage: 'url("/noise.png")' }}></div>
            </div>

            <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-24">

                {/* Back navigation */}
                <nav className="mb-12">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-teal-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </nav>

                {/* Hero Core */}
                <header className="mb-16 md:mb-24">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                        <div className="h-24 w-24 shrink-0 rounded-[24px] bg-amber-500/10 flex items-center justify-center shadow-[0_4px_20px_rgba(245,158,11,0.2)] overflow-hidden">
                            <ShieldCheck className="h-12 w-12 text-amber-400" aria-hidden="true" />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200 mb-3">AuditWedge</h1>
                            <p className="text-xl sm:text-2xl text-slate-400 font-light tracking-tight">A margin-leak audit tool for cross-border e-commerce sellers</p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mb-4">
                        Supplier invoices are messy, FX markup is often invisible, and per-SKU
                        profitability gets lost between three disconnected systems — the supplier
                        invoice, the Shopify checkout, and the payout statement. AuditWedge
                        reconciles all three at the SKU level to surface where margin is actually
                        leaking.
                    </p>

                    <p className="text-base leading-relaxed text-amber-400/90 max-w-2xl mb-8 font-medium">
                        Status: in active development, not yet validated with a paying customer.
                        The extraction and reconciliation pipeline is built and passing internal
                        accuracy testing against a synthetic invoice dataset — it has not yet been
                        run against a real merchant&apos;s data or confirmed to catch a real
                        discrepancy.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/sku-margin-audit-sample-report.txt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 px-6 py-3 text-amber-400 font-medium hover:bg-amber-500/20 transition-colors focus-ring"
                        >
                            <FileText className="w-4 h-4" />
                            View sample audit report
                        </a>
                    </div>
                </header>

                <div className="h-px bg-slate-800/50 w-full mb-16"></div>

                {/* What's built so far */}
                <section>
                    <h2 className="text-2xl font-semibold text-slate-200 mb-8 flex items-center gap-3">
                        What&apos;s built so far
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                                <Search className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Invoice Extraction</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Claude-based structured extraction of SKU, quantity, unit price, and
                                currency from unstructured supplier invoices, with a confidence score
                                on every field and no invented values.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                                <GitMerge className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Order↔Invoice Reconciliation</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Joins extracted invoice line items to Shopify order data by exact SKU,
                                with a title-similarity fallback for missing SKUs that explicitly
                                flags unconfirmed variant matches for human review rather than
                                guessing.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                                <FileText className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Margin Audit Report</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Computes per-SKU contribution margin and flags supplier price drift,
                                ranked by dollar impact, with every flagged leak citing its source
                                invoice line and order.
                            </p>
                        </div>

                        <div className="group relative rounded-2xl bg-slate-800/20 border border-slate-700/50 p-6 md:p-8 transition-colors hover:bg-slate-800/40">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-200 mb-3">Trust-First by Design</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Every claim in the output carries a confidence score and a traceable
                                source record; ambiguous cases are flagged for review, never silently
                                resolved either way.
                            </p>
                        </div>

                    </div>
                </section>

                <div className="h-px bg-slate-800/50 w-full my-16"></div>

                {/* Not yet built */}
                <section className="max-w-2xl">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-4">
                        Not yet built
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                        Ad-spend attribution (Meta/TikTok) and FX-leakage detection on supplier
                        payouts are scoped but not implemented — the report explicitly labels these
                        as unavailable rather than omitting them.
                    </p>
                </section>

                <div className="mt-24 text-center">
                    <p className="text-sm text-slate-500">
                        Built with Python, the Claude API, and Shopify&apos;s Admin GraphQL API.
                        Pre-revenue, pre-validation. <br />
                        <a href="/sku-margin-audit-sample-report.txt" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1 focus-ring rounded-sm">
                            Read the sample audit report <ExternalLink className="w-3 h-3" />
                        </a>
                    </p>
                </div>

            </main>
        </div>
    );
}
