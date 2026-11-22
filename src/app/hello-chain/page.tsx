import { pageMeta } from "@/lib/seo";
import { backHref } from "@/data/work";
import { Card, Hero, Page, Row, link, note } from "@/components/Page";

export const metadata = pageMeta("/hello-chain/", {
    title: "Hello, Chain | An On-Chain Guestbook",
    description: "Hello, Chain is an on-chain guestbook: write a short hello, sign it with Face ID or a fingerprint, and it is stored for good. No wallet, no crypto, no fees.",
});

const SOURCE = "https://github.com/preet-portfolio/hello-chain";

// Whole-test gas from the project's contracts/.gas-snapshot (setup included, so upper bounds).
const GAS = [
    { path: "Direct, visitor pays their own fee", gas: "220,133" },
    { path: "Browser wallet signature", gas: "246,383" },
    { path: "Passkey (Face ID / fingerprint)", gas: "513,441" },
];

export default function HelloChainPage() {
    return (
        <Page
            back={{ href: backHref("hello-chain"), label: "Back to Portfolio" }}
            footer={<p>Solidity 0.8 · Foundry · OpenZeppelin · Next.js 16 · viem · wagmi · Playwright · GitHub Actions.</p>}
        >
            <Hero icon="/hello-chain-logo.svg" iconAlt="The Hello, Chain seal: two linked rings" name="Hello, Chain" tagline="An on-chain guestbook" />

            <div className="grid items-start gap-6 lg:grid-cols-[3fr_2fr]">
                <p className="max-w-reading pb-4 text-lg">
                    Write a short hello, up to 140 bytes, and sign it with Face ID, a fingerprint or a PIN. That&apos;s a
                    passkey: no wallet to install, no crypto to buy, no fee to pay. A small relayer server pays the network
                    fee, the contract checks your signature itself, and your hello is stored for good. New hellos appear in
                    a live feed without a refresh.
                </p>

                <Card>
                    <p>
                        Status: built and fully tested on a local chain. The deploy to Base Sepolia, a public test network,
                        is next, so there is no public demo yet.
                    </p>
                    <div className="mt-6 text-sm">
                        <a href={SOURCE} target="_blank" rel="noopener noreferrer" className={link}>Source</a>
                    </div>
                </Card>
            </div>

            <Card className="mt-6">
                <Row level="h2" title="A passkey, not a wallet">
                    <p>
                        The passkey signs with P-256 (WebAuthn), and the contract checks that signature on-chain with
                        OpenZeppelin: through Base&apos;s P-256 precompile where it exists, a Solidity fallback where it
                        doesn&apos;t. Visitors with a browser wallet can sign with it instead (EIP-712 and ERC-1271).
                    </p>
                </Row>
                <Row level="h2" title="Permanent, by design">
                    <p>
                        Entries can&apos;t be edited or deleted. The owner can only hide one from the page; the original
                        stays on-chain. One entry per visitor per day, enforced by the contract, and a signature can&apos;t
                        be replayed on another chain, contract or entry.
                    </p>
                </Row>
                <Row level="h2" title="A relayer with limits">
                    <p>
                        The relayer pays the fee but can&apos;t change a word: alter one letter and the signature no longer
                        matches. Its spend is bounded by atomic per-visitor daily limits, a global daily cap and a gas
                        ceiling on every entry.
                    </p>
                </Row>
            </Card>

            <Card title="Checked, not claimed" className="mt-6">
                <ul className="divide-y divide-rule border-t border-rule">
                    <li className="py-3"><span className="font-semibold">Unit, fuzz and invariant tests:</span> the entry and visitor counts only ever go up.</li>
                    <li className="py-3"><span className="font-semibold">Halmos</span> proves the same symbolically, for every input on the direct path.</li>
                    <li className="py-3"><span className="font-semibold">Slither</span> static analysis runs on every change to the project.</li>
                    <li className="py-3"><span className="font-semibold">End to end:</span> a Playwright test signs a hello with a virtual authenticator and sees it reach the feed.</li>
                    <li className="py-3"><span className="font-semibold">CI:</span> GitHub Actions runs all of it, for the contract and the web app.</li>
                </ul>
            </Card>

            <Card title="What a hello costs" className="mt-6">
                <p className="max-w-reading">Gas per entry, measured in the contract&apos;s test suite:</p>
                <table className="mt-4 w-full border-collapse text-left">
                    <caption className="sr-only">Measured gas per way of signing</caption>
                    <thead>
                        <tr className="border-b border-rule text-sm text-muted">
                            <th scope="col" className="py-2 pr-3 font-medium">Way of signing</th>
                            <th scope="col" className="py-2 text-right font-medium">Gas used</th>
                        </tr>
                    </thead>
                    <tbody>
                        {GAS.map((g) => (
                            <tr key={g.path} className="border-b border-rule last:border-b-0">
                                <th scope="row" className="py-3 pr-3 font-normal">{g.path}</th>
                                <td className="py-3 text-right font-mono tabular-nums">{g.gas}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className={`mt-3 ${note}`}>Whole test, setup included, so these are upper bounds.</p>
                <p className="mt-6 max-w-reading text-muted">
                    A passkey costs about twice as much because a P-256 check is heavier maths. That&apos;s the trade:
                    visitors get Face ID instead of a wallet install, and the relayer absorbs the difference.
                </p>
            </Card>
        </Page>
    );
}
