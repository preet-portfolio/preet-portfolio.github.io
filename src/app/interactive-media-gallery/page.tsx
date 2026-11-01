import { backHref } from "@/data/work";
import { Card, Hero, Page, Row, link, note, quietLink } from "@/components/Page";

export const metadata = {
    title: "The Hand Inside the Equation | Interactive Media Gallery",
    description: "A live gallery of interactive media studies: marbling from its maths, light bending around a black hole, and your camera drawn in text. Each piece is checked against an independent reference.",
};

const LIVE = "https://interactive-media-gallery.vercel.app";

export default function InteractiveMediaGalleryPage() {
    return (
        <Page
            back={{ href: backHref("hand"), label: "Back to Portfolio" }}
            footer={
                <>
                    <p className="mx-auto mb-2 max-w-reading font-sans text-sm">
                        Built on published work: the mathematical marbling of Lu, Jaffer and colleagues; Jean-Pierre Luminet&apos;s 1979
                        image of a black hole and Riccardo Antonelli&apos;s <a href="https://rantonels.github.io/starless/" target="_blank" rel="noopener noreferrer" className={quietLink}>Starless</a>;
                        Alex Harri&apos;s <a href="https://alexharri.com/blog/ascii-rendering" target="_blank" rel="noopener noreferrer" className={quietLink}>shape-based ASCII rendering</a>; and
                        the <a href="https://thecodingtrain.com/" target="_blank" rel="noopener noreferrer" className={quietLink}>Coding Train</a> challenges
                        each study started from. Every study note in the gallery cites its sources.
                    </p>
                    <p>TypeScript · Next.js · WebGL2 · Three.js · Python (numpy, scikit-image). Built with Claude Code.</p>
                </>
            }
        >
            <Hero
                icon="/interactive-media-gallery/icon.png"
                iconAlt="Detail of a marbled pattern from the gallery's first study"
                name="The Hand Inside the Equation"
                tagline="A live gallery of interactive media studies"
            />

            <p className="max-w-reading text-lg">
                Each study takes a craft or a phenomenon that has been described by mathematics and hands the equation back
                to you: drop ink on water, bend light around a black hole, or watch your own face turn into letters. The
                maths runs live on the GPU, and an equation card can show the exact formula behind your last gesture.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                <a href={LIVE} target="_blank" rel="noopener noreferrer" className={link}>Open the gallery</a>
                <a href={`${LIVE}/studies/ascii/`} target="_blank" rel="noopener noreferrer" className={quietLink}>Try the camera study</a>
            </div>

            <section className="mt-10 md:mt-14" aria-label="The gallery, running live">
                <div className="overflow-hidden rounded-card bg-ink shadow-card">
                    <iframe
                        src={LIVE}
                        title="The Hand Inside the Equation, running live: choose a study to open it"
                        className="block aspect-[4/5] w-full sm:aspect-[4/3] md:aspect-[16/10]"
                        loading="lazy"
                        allow="camera; fullscreen; accelerometer; gyroscope; clipboard-write"
                    />
                </div>
                <p className={`mt-3 ${note}`}>
                    Running live. Open a study from the gallery; the camera study asks before it uses your camera, and the
                    picture never leaves your device.
                </p>
            </section>

            <Card className="mt-6">
                <Row level="h2" href={`${LIVE}/studies/marbling/`} title="01 · Suminagashi">
                    <p>
                        Japanese and Turkish paper marbling, rebuilt from its maths. Every drop, comb and swirl is an exact,
                        reversible transformation of the water&apos;s surface, so the GPU can draw the pattern pixel by pixel.
                    </p>
                </Row>
                <Row level="h2" href={`${LIVE}/studies/black-hole/`} title="02 · Photon Sphere">
                    <p>
                        Light bending around a black hole: Einstein&apos;s orbit equation traced for every pixel, beside a paper
                        diagram that draws the ray behind the pixel you point at. Switch to Newton to see half the bending.
                    </p>
                </Row>
                <Row level="h2" href={`${LIVE}/studies/ascii/`} title="03 · Textmode Mirror">
                    <p>
                        Your camera, drawn only in letters. Drag sideways to squint until the letters become a face, type your
                        name to draw with its letters, and compare three ways of choosing each character.
                    </p>
                </Row>
            </Card>

            <Card className="mt-6">
                <img src="/interactive-media-gallery/studies.jpg" alt="The three studies: a marbled pattern, a black hole with its bent accretion disk, and a portrait drawn in text characters"
                    className="w-full rounded-lg" loading="lazy" />
            </Card>

            <Card title="Checked, not claimed" className="mt-6">
                <ul className="divide-y divide-rule border-t border-rule">
                    <li className="py-3"><span className="font-semibold">Marbling&apos;s maths</span> on the GPU was checked against an independent Python reference, pixel by pixel, away from ink edges.</li>
                    <li className="py-3"><span className="font-semibold">Light bending</span> matches the exact orbit integral to a median 1.5 parts per million, and finds the critical impact parameter √27⁄2 to within 0.001%.</li>
                    <li className="py-3"><span className="font-semibold">Einstein vs Newton:</span> far from the hole, light bends 2.007 times as much as Newton predicts, the factor of two the 1919 eclipse confirmed.</li>
                    <li className="py-3"><span className="font-semibold">The black hole&apos;s shadow</span> measures 2.60 times the horizon, within 0.012% of the closed-form size.</li>
                    <li className="py-3"><span className="font-semibold">Text images:</span> the shape-matching method picks the same character as the reference in 99.9–100% of cells, and scores about 1.8 times higher on image similarity up close than the classic method.</li>
                    <li className="py-3"><span className="font-semibold">Smooth:</span> a quality governor holds 60 frames per second by lowering resolution under load, and recovers when it can.</li>
                </ul>
                <p className="mt-6 text-muted">
                    No accessibility violations found by axe at phone and desktop sizes. Keyboard, reduced motion and touch all work.
                    Tests with first-time visitors and on a range of phones are next.
                </p>
            </Card>
        </Page>
    );
}
