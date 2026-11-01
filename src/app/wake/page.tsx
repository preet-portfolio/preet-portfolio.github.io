import { backHref } from "@/data/work";
import { Card, Hero, Page, Row, link, note, quietLink } from "@/components/Page";

export const metadata = {
    title: "wake | A Living Drawing Instrument",
    description: "wake is a generative-art instrument for the browser: thousands of line-heads move through fields of force across 100,000 designs and fifteen behaviours, six of them real physics and maths simulated from their equations.",
};

const LIVE = "https://wake-black.vercel.app";

export default function WakePage() {
    return (
        <Page
            back={{ href: backHref("wake"), label: "Back to Portfolio" }}
            footer={
                <>
                    <p className="mx-auto mb-2 max-w-reading font-sans text-sm">
                        Inspired by <a href="https://github.com/doersino/uji" target="_blank" rel="noopener noreferrer" className={quietLink}>uji</a> by
                        Noah Doersing; wake is written from scratch. The research behind it, a plotter series made with a fork of uji,
                        is <a href="https://github.com/preet-portfolio/wake-research" target="_blank" rel="noopener noreferrer" className={quietLink}>on GitHub</a>.
                        Every paper and artwork it draws on is cited in its <a href={`${LIVE}/credits.html`} target="_blank" rel="noopener noreferrer" className={quietLink}>credits</a>.
                    </p>
                    <p>TypeScript · WebGL2 · Vite · Playwright · KaTeX. Built with Claude Code.</p>
                </>
            }
        >
            <Hero icon="/wake/icon.png" iconAlt="A frame from wake" name="wake" tagline="A living drawing instrument" />

            <p className="max-w-reading text-lg">
                Thousands of line-heads move through fields of force and leave their trace. Every visit opens a new design
                from a collection of 100,000, and you can stir it, pull it, or tap for another. Some designs are real science:
                chaos, orbits and synchronisation, simulated from the equations that describe them.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                <a href={LIVE} target="_blank" rel="noopener noreferrer" className={link}>Open wake</a>
                <a href={`${LIVE}/case.html`} target="_blank" rel="noopener noreferrer" className={quietLink}>How it was made</a>
                <a href="https://github.com/preet-portfolio/wake" target="_blank" rel="noopener noreferrer" className={quietLink}>Source</a>
            </div>

            <section className="mt-10 md:mt-14" aria-label="wake, running live">
                <div className="overflow-hidden rounded-card bg-ink shadow-card">
                    <iframe
                        src={LIVE}
                        title="wake, running live: tap for a new design, drag to stir"
                        className="block aspect-[4/3] w-full md:aspect-[16/10]"
                        loading="lazy"
                        allow="fullscreen; accelerometer; gyroscope"
                    />
                </div>
                <p className={`mt-3 ${note}`}>Running live. Tap for a new design, drag to stir, hold to pull.</p>
            </section>

            <Card className="mt-6">
                <Row level="h2" title="A simulation, not a picture">
                    <p>
                        Every line-head has its own position, velocity and clock, and fades into a trail. The number of line-heads
                        adapts to the device from measured frame time, so wake never freezes.
                    </p>
                </Row>
                <Row level="h2" title="100,000 designs, fifteen behaviours">
                    <p>
                        Each number picks a behaviour first, then its colours: Boids flocking, Kepler-like orbits, waves after
                        Bridget Riley, grids after Agnes Martin, and more. The same number gives the same design on every device.
                    </p>
                </Row>
                <Row level="h2" title="Beautiful because it's true">
                    <p>
                        Six pieces run real equations, each with a card showing the equation, its source paper, and one control
                        that reveals the idea: push the fireflies past their critical coupling and they flash as one.
                    </p>
                </Row>
            </Card>

            <Card title="The science family" className="mt-6">
                <img src="/wake/science.jpg" alt="Six science pieces: double pendulum, Lorenz attractor, figure-eight orbit, fireflies, Chladni plate, Turing patterns"
                    className="w-full rounded-lg" loading="lazy" />
            </Card>

            <Card title="Checked, not claimed" className="mt-6">
                <ul className="divide-y divide-rule border-t border-rule">
                    <li className="py-3"><span className="font-semibold">Lorenz chaos rate</span> measured at 0.90 against the published ≈ 0.906.</li>
                    <li className="py-3"><span className="font-semibold">Fireflies</span> synchronise exactly as Kuramoto theory predicts, to within 0.001.</li>
                    <li className="py-3"><span className="font-semibold">Orbits and pendulums</span> conserve energy to better than one part in 100,000.</li>
                    <li className="py-3"><span className="font-semibold">Turing patterns</span> on the GPU match the CPU reference (correlation 1.0000).</li>
                    <li className="py-3"><span className="font-semibold">Alive:</span> visible motion within a second of every visit, and it never freezes, even without a GPU.</li>
                    <li className="py-3"><span className="font-semibold">Original:</span> a token-level copy check against its inspiration finds no shared code.</li>
                </ul>
                <p className="mt-6 text-muted">68 automated tests. An expert review of the science and tests with first-time visitors are next.</p>
            </Card>

            <Card className="mt-6">
                <img src="/wake/collection.jpg" alt="300 designs sampled from the collection" className="w-full rounded-lg" loading="lazy" />
                <p className={`mt-3 ${note}`}>300 designs sampled from the collection, grouped by visual similarity.</p>
            </Card>
        </Page>
    );
}
