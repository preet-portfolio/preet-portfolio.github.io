import Link from "next/link";
import { ArrowLeft, Play, BookOpen, Code2, Waves, Shapes, Atom, FlaskConical } from "lucide-react";

export const metadata = {
    title: "wake | A Living Drawing Instrument",
    description: "wake is a generative-art instrument for the browser: thousands of line-heads move through fields of force across 100,000 designs and fifteen behaviours, six of them real physics and maths simulated from their equations.",
};

const LIVE = "https://wake-black.vercel.app";

export default function WakePage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 antialiased selection:bg-indigo-300/30 selection:text-indigo-200">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/0 to-slate-900/0"></div>
            </div>

            <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-24">

                {/* Back navigation */}
                <nav className="mb-12">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-indigo-300 transition-colors focus-ring rounded-md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </nav>

                {/* Hero */}
                <header className="mb-14 md:mb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                        <div className="h-24 w-24 shrink-0 rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(129,140,248,0.35)]">
                            <img src="/wake/icon.png" alt="A frame from wake" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200 mb-3">wake</h1>
                            <p className="text-xl sm:text-2xl text-slate-400 font-light tracking-tight">A living drawing instrument</p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mb-8">
                        Thousands of line-heads move through fields of force and leave their trace. Every visit opens a new design
                        from a collection of 100,000, and you can stir it, pull it, or tap for another. Some designs are real science:
                        chaos, orbits and synchronisation, simulated from the equations that describe them.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <a href={LIVE} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/15 px-5 py-2.5 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/25 transition-colors focus-ring">
                            <Play className="h-4 w-4" aria-hidden="true" /> Open wake
                        </a>
                        <a href={`${LIVE}/case.html`} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-slate-500/10 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-500/20 transition-colors focus-ring">
                            <BookOpen className="h-4 w-4" aria-hidden="true" /> How it was made
                        </a>
                        <a href="https://github.com/preet-portfolio/wake" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-slate-500/10 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-500/20 transition-colors focus-ring">
                            <Code2 className="h-4 w-4" aria-hidden="true" /> Source
                        </a>
                    </div>
                </header>

                {/* Live */}
                <section className="mb-16 md:mb-20" aria-label="wake, running live">
                    <div className="rounded-2xl overflow-hidden border border-slate-700/50 bg-black shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
                        <iframe
                            src={LIVE}
                            title="wake, running live: tap for a new design, drag to stir"
                            className="block w-full aspect-[4/3] md:aspect-[16/10]"
                            loading="lazy"
                            allow="fullscreen; accelerometer; gyroscope"
                        />
                    </div>
                    <p className="mt-3 text-sm text-slate-500">Running live. Tap for a new design, drag to stir, hold to pull.</p>
                </section>

                {/* Three ideas */}
                <section className="mb-16 md:mb-20 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6">
                        <Waves className="h-6 w-6 text-indigo-300 mb-4" aria-hidden="true" />
                        <h2 className="text-lg font-semibold text-slate-200 mb-2">A simulation, not a picture</h2>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Every line-head has its own position, velocity and clock, and fades into a trail. The number of line-heads
                            adapts to the device from measured frame time, so wake never freezes.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6">
                        <Shapes className="h-6 w-6 text-indigo-300 mb-4" aria-hidden="true" />
                        <h2 className="text-lg font-semibold text-slate-200 mb-2">100,000 designs, fifteen behaviours</h2>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Each number picks a behaviour first, then its colours: Boids flocking, Kepler-like orbits, waves after
                            Bridget Riley, grids after Agnes Martin, and more. The same number gives the same design on every device.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6">
                        <Atom className="h-6 w-6 text-indigo-300 mb-4" aria-hidden="true" />
                        <h2 className="text-lg font-semibold text-slate-200 mb-2">Beautiful because it&apos;s true</h2>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Six pieces run real equations, each with a card showing the equation, its source paper, and one control
                            that reveals the idea: push the fireflies past their critical coupling and they flash as one.
                        </p>
                    </div>
                </section>

                {/* Science */}
                <section className="mb-16 md:mb-20">
                    <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300/80 mb-4">The science family</p>
                    <img src="/wake/science.jpg" alt="Six science pieces: double pendulum, Lorenz attractor, figure-eight orbit, fireflies, Chladni plate, Turing patterns"
                        className="w-full rounded-2xl border border-slate-700/50" loading="lazy" />
                </section>

                {/* Evidence */}
                <section className="mb-16 md:mb-20">
                    <div className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <FlaskConical className="h-5 w-5 text-indigo-300" aria-hidden="true" />
                            <h2 className="text-xl font-semibold text-slate-200">Checked, not claimed</h2>
                        </div>
                        <ul className="space-y-3 text-sm leading-relaxed text-slate-400">
                            <li><span className="text-slate-200">Lorenz chaos rate</span> measured at 0.90 against the published ≈ 0.906.</li>
                            <li><span className="text-slate-200">Fireflies</span> synchronise exactly as Kuramoto theory predicts, to within 0.001.</li>
                            <li><span className="text-slate-200">Orbits and pendulums</span> conserve energy to better than one part in 100,000.</li>
                            <li><span className="text-slate-200">Turing patterns</span> on the GPU match the CPU reference exactly (correlation 1.0000).</li>
                            <li><span className="text-slate-200">Alive:</span> visible motion within a second of every visit, and it never freezes, even without a GPU.</li>
                            <li><span className="text-slate-200">Original:</span> a token-level copy check against its inspiration finds no shared code.</li>
                        </ul>
                        <p className="mt-6 text-sm text-slate-500">68 automated tests. An expert review of the science and tests with first-time visitors are next.</p>
                    </div>
                </section>

                {/* Collection */}
                <section className="mb-16 md:mb-20">
                    <img src="/wake/collection.jpg" alt="300 designs sampled from the collection" className="w-full rounded-2xl border border-slate-700/50" loading="lazy" />
                    <p className="mt-3 text-sm text-slate-500">300 designs sampled from the collection, grouped by visual similarity.</p>
                </section>

                {/* Credit */}
                <footer className="border-t border-slate-800 pt-8 text-sm text-slate-500 leading-relaxed">
                    <p className="mb-2">
                        Inspired by <a href="https://github.com/doersino/uji" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-300 underline-offset-4 hover:underline">uji</a> by
                        Noah Doersing; wake is written from scratch. The research behind it, a plotter series made with a fork of uji,
                        is <a href="https://github.com/preet-portfolio/wake-research" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-300 underline-offset-4 hover:underline">on GitHub</a>.
                        Every paper and artwork it draws on is cited in its <a href={`${LIVE}/credits.html`} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-300 underline-offset-4 hover:underline">credits</a>.
                    </p>
                    <p>TypeScript · WebGL2 · Vite · Playwright · KaTeX. Built with Claude Code.</p>
                </footer>
            </main>
        </div>
    );
}
