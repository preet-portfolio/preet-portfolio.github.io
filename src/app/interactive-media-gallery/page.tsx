import Link from "next/link";
import { ArrowLeft, Play, Droplets, Orbit, Type, FlaskConical } from "lucide-react";

export const metadata = {
    title: "The Hand Inside the Equation | Interactive Media Gallery",
    description: "A live gallery of interactive media studies: marbling from its maths, light bending around a black hole, and your camera drawn in text. Each piece is checked against an independent reference.",
};

const LIVE = "https://interactive-media-gallery.vercel.app";

export default function InteractiveMediaGalleryPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased selection:bg-orange-300/30 selection:text-orange-200">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-orange-900/20 via-slate-900/0 to-slate-900/0"></div>
            </div>

            <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-24">

                {/* Back navigation */}
                <nav className="mb-12">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-orange-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </nav>

                {/* Hero */}
                <header className="mb-14 md:mb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                        <div className="h-24 w-24 shrink-0 rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(234,88,12,0.35)]">
                            <img src="/interactive-media-gallery/icon.png" alt="Detail of a marbled pattern from the gallery's first study" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200 mb-3">The Hand Inside the Equation</h1>
                            <p className="text-xl sm:text-2xl text-slate-400 font-light tracking-tight">A live gallery of interactive media studies</p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mb-8">
                        Each study takes a craft or a phenomenon that has been described by mathematics and hands the equation back
                        to you: drop ink on water, bend light around a black hole, or watch your own face turn into letters. The
                        maths runs live on the GPU, and an equation card can show the exact formula behind your last gesture.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <a href={LIVE} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-orange-500/15 px-5 py-2.5 text-sm font-semibold text-orange-200 hover:bg-orange-500/25 transition-colors focus-ring">
                            <Play className="h-4 w-4" aria-hidden="true" /> Open the gallery
                        </a>
                        <a href={`${LIVE}/studies/ascii/`} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-slate-500/10 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-500/20 transition-colors focus-ring">
                            <Type className="h-4 w-4" aria-hidden="true" /> Try the camera study
                        </a>
                    </div>
                </header>

                {/* Live */}
                <section className="mb-16 md:mb-20" aria-label="The gallery, running live">
                    <div className="rounded-2xl overflow-hidden border border-slate-700/50 bg-black shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
                        <iframe
                            src={LIVE}
                            title="The Hand Inside the Equation, running live: choose a study to open it"
                            className="block w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10]"
                            loading="lazy"
                            allow="camera; fullscreen; accelerometer; gyroscope; clipboard-write"
                        />
                    </div>
                    <p className="mt-3 text-sm text-slate-400">
                        Running live. Open a study from the gallery; the camera study asks before it uses your camera, and the
                        picture never leaves your device.
                    </p>
                </section>

                {/* Three studies */}
                <section className="mb-16 md:mb-20 grid gap-6 md:grid-cols-3">
                    <a href={`${LIVE}/studies/marbling/`} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6 hover:border-orange-400/40 transition-colors focus-ring">
                        <Droplets className="h-6 w-6 text-orange-300 mb-4" aria-hidden="true" />
                        <h2 className="text-lg font-semibold text-slate-200 mb-2">01 · Suminagashi</h2>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Japanese and Turkish paper marbling, rebuilt from its maths. Every drop, comb and swirl is an exact,
                            reversible transformation of the water&apos;s surface, so the GPU can draw the pattern pixel by pixel.
                        </p>
                    </a>
                    <a href={`${LIVE}/studies/black-hole/`} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6 hover:border-orange-400/40 transition-colors focus-ring">
                        <Orbit className="h-6 w-6 text-orange-300 mb-4" aria-hidden="true" />
                        <h2 className="text-lg font-semibold text-slate-200 mb-2">02 · Photon Sphere</h2>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Light bending around a black hole: Einstein&apos;s orbit equation traced for every pixel, beside a paper
                            diagram that draws the ray behind the pixel you point at. Switch to Newton to see half the bending.
                        </p>
                    </a>
                    <a href={`${LIVE}/studies/ascii/`} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6 hover:border-orange-400/40 transition-colors focus-ring">
                        <Type className="h-6 w-6 text-orange-300 mb-4" aria-hidden="true" />
                        <h2 className="text-lg font-semibold text-slate-200 mb-2">03 · Textmode Mirror</h2>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Your camera, drawn only in letters. Drag sideways to squint until the letters become a face, type your
                            name to draw with its letters, and compare three ways of choosing each character.
                        </p>
                    </a>
                </section>

                {/* Studies */}
                <section className="mb-16 md:mb-20">
                    <img src="/interactive-media-gallery/studies.jpg" alt="The three studies: a marbled pattern, a black hole with its bent accretion disk, and a portrait drawn in text characters"
                        className="w-full rounded-2xl border border-slate-700/50" loading="lazy" />
                </section>

                {/* Evidence */}
                <section className="mb-16 md:mb-20">
                    <div className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <FlaskConical className="h-5 w-5 text-orange-300" aria-hidden="true" />
                            <h2 className="text-xl font-semibold text-slate-200">Checked, not claimed</h2>
                        </div>
                        <ul className="space-y-3 text-sm leading-relaxed text-slate-400">
                            <li><span className="text-slate-200">Marbling&apos;s maths</span> on the GPU matches an independent Python reference on 99.97% of pixels away from ink edges.</li>
                            <li><span className="text-slate-200">Light bending</span> matches the exact orbit integral to a median 1.5 parts per million, and finds the critical impact parameter √27⁄2 to within 0.001%.</li>
                            <li><span className="text-slate-200">Einstein vs Newton:</span> far from the hole, light bends 2.007 times as much as Newton predicts, the factor of two the 1919 eclipse confirmed.</li>
                            <li><span className="text-slate-200">The black hole&apos;s shadow</span> measures 2.60 times the horizon, within 0.012% of the closed-form size.</li>
                            <li><span className="text-slate-200">Text images:</span> the shape-matching method picks the same character as the reference in 99.9–100% of cells, and scores about 1.8 times higher on image similarity up close than the classic method.</li>
                            <li><span className="text-slate-200">Smooth:</span> a quality governor holds 60 frames per second by lowering resolution under load, and recovers when it can.</li>
                        </ul>
                        <p className="mt-6 text-sm text-slate-400">
                            No accessibility violations found by axe at phone and desktop sizes. Keyboard, reduced motion and touch all work.
                            Tests with first-time visitors and on a range of phones are next.
                        </p>
                    </div>
                </section>

                {/* Credit */}
                <footer className="border-t border-slate-800 pt-8 text-sm text-slate-400 leading-relaxed">
                    <p className="mb-2">
                        Built on published work: the mathematical marbling of Lu, Jaffer and colleagues; Jean-Pierre Luminet&apos;s 1979
                        image of a black hole and Riccardo Antonelli&apos;s <a href="https://rantonels.github.io/starless/" target="_blank" rel="noopener noreferrer" className="text-slate-300 underline decoration-slate-500 underline-offset-4 hover:text-orange-300 hover:decoration-orange-300">Starless</a>;
                        Alex Harri&apos;s <a href="https://alexharri.com/blog/ascii-rendering" target="_blank" rel="noopener noreferrer" className="text-slate-300 underline decoration-slate-500 underline-offset-4 hover:text-orange-300 hover:decoration-orange-300">shape-based ASCII rendering</a>; and
                        the <a href="https://thecodingtrain.com/" target="_blank" rel="noopener noreferrer" className="text-slate-300 underline decoration-slate-500 underline-offset-4 hover:text-orange-300 hover:decoration-orange-300">Coding Train</a> challenges
                        each study started from. Every study note in the gallery cites its sources.
                    </p>
                    <p>TypeScript · Next.js · WebGL2 · Three.js · Python (numpy, scikit-image). Built with Claude Code.</p>
                </footer>
            </main>
        </div>
    );
}
