import { backHref } from "@/data/work";
import { Card, Hero, Page, Row, link, quietLink } from "@/components/Page";

export const metadata = {
    title: "AuditWedge | SKU-Level Margin Audit",
    description: "A deep dive into AuditWedge: the SKU-level margin-leak audit tool for e-commerce sellers.",
};

export default function AuditWedgePage() {
    return (
        <Page
            back={{ href: backHref("auditwedge"), label: "Back to Portfolio" }}
            footer={
                <p>
                    Built with Python, the Claude API, and Shopify&apos;s Admin GraphQL API.
                    Pre-revenue, pre-validation. <br />
                    <a href="/sku-margin-audit-sample-report.txt" target="_blank" rel="noopener noreferrer" className={quietLink}>
                        Read the sample audit report
                    </a>
                </p>
            }
        >
            {/* AuditWedge has no icon yet, so its name stands alone. */}
            <Hero name="AuditWedge" tagline="A margin-leak audit tool for e-commerce sellers" />

            <div className="grid items-start gap-6 lg:grid-cols-[3fr_2fr]">
                <p className="max-w-reading pb-4 text-lg">
                    Supplier invoices are messy, FX markup is often invisible, and per-SKU
                    profitability gets lost between three disconnected systems — the supplier
                    invoice, the Shopify checkout, and the payout statement. AuditWedge
                    reconciles supplier invoices with Shopify orders at the SKU level to surface
                    where margin is actually leaking.
                </p>

                <Card>
                    <p>
                        Status: in active development, not yet validated with a paying customer.
                        The extraction and reconciliation pipeline is built and passing internal
                        accuracy testing against a synthetic invoice dataset — it has not yet been
                        run against a real merchant&apos;s data or confirmed to catch a real
                        discrepancy.
                    </p>
                    <div className="mt-6 text-sm">
                        <a href="/sku-margin-audit-sample-report.txt" target="_blank" rel="noopener noreferrer" className={link}>
                            View sample audit report
                        </a>
                    </div>
                </Card>
            </div>

            <Card title="What's built so far" className="mt-6">
                <Row title="Invoice Extraction">
                    <p>
                        Claude-based structured extraction of SKU, quantity, unit price, and
                        currency from unstructured supplier invoices, with no invented values.
                    </p>
                </Row>
                <Row title="Order↔Invoice Reconciliation">
                    <p>
                        Joins extracted invoice line items to Shopify order data by exact SKU,
                        with a title-similarity fallback for missing SKUs that explicitly
                        flags unconfirmed variant matches for human review rather than
                        guessing.
                    </p>
                </Row>
                <Row title="Margin Audit Report">
                    <p>
                        Computes per-SKU contribution margin and flags supplier price drift,
                        ranked by dollar impact, with every flagged leak citing its source
                        invoice and order.
                    </p>
                </Row>
                <Row title="Trust-First by Design">
                    <p>
                        Every claim in the output carries a traceable source record; ambiguous
                        cases are flagged for review, never silently resolved either way.
                    </p>
                </Row>
            </Card>

            <Card title="Not yet built" className="mt-6">
                <p className="max-w-reading">
                    Ad-spend attribution (Meta/TikTok) and FX-leakage detection on supplier
                    payouts are scoped but not implemented — the report explicitly labels these
                    as unavailable rather than omitting them.
                </p>
            </Card>
        </Page>
    );
}
