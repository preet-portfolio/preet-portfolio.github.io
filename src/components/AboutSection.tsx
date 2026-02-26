import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
            {/* Mobile Sticky Header */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--bg-primary)]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">
                    About
                </h2>
            </div>

            <AnimatedSection>
                <div className="space-y-6">
                    <p>
                        I&apos;m an iOS developer who believes software should be simple,
                        beautiful, and secure. My journey started with a fascination for the Apple
                        ecosystem, and it has evolved into a dedication to crafting robust native
                        experiences using <strong className="font-semibold text-[var(--teal-300)]">Swift</strong> and <strong className="font-semibold text-[var(--teal-300)]">SwiftUI</strong>.
                    </p>
                    <p>
                        Currently, my main focus is <strong className="font-semibold text-[var(--text-primary)]">DocFort</strong>, a privacy-first document vault engineered for zero data collection. Every line of code I write serves a singular mission: making technology that respects the people who use it.
                    </p>
                    <p>
                        Whether I&apos;m optimizing an app&apos;s footprint to under 4MB, refining a
                        glassmorphic animation, or ensuring 100% offline capability, I care deeply
                        about the fine details that divide &quot;good&quot; software from &quot;great&quot; software.
                    </p>
                </div>
            </AnimatedSection>
        </section>
    );
}
