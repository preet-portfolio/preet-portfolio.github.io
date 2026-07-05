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
                        I build software for people who need to trust it with something that
                        matters — their documents, their location data, their margins. That&apos;s
                        meant native iOS craft in <strong className="font-semibold text-[var(--teal-300)]">Swift</strong> and <strong className="font-semibold text-[var(--teal-300)]">SwiftUI</strong>,
                        and lately it&apos;s meant backend pipelines that reconcile financial data
                        without ever presenting an unverified claim as fact.
                    </p>
                    <p>
                        <strong className="font-semibold text-[var(--text-primary)]">DocFort</strong>, my privacy-first document vault, is built
                        around one rule: it extracts what it needs and never stores the underlying
                        image. <strong className="font-semibold text-[var(--text-primary)]">AuditWedge</strong>, the cross-border margin-audit
                        tool I&apos;m building now, runs on the same underlying value applied to a
                        different problem: no unverified claim reaches a merchant without a
                        confidence score and a traceable source record. Different domain, same
                        discipline.
                    </p>
                    <p>
                        Whether I&apos;m optimizing an app&apos;s footprint to under 4MB, refining a
                        glassmorphic animation, or making sure a fallback-matching algorithm never
                        silently pairs two different product variants, I care deeply about the fine
                        details that divide &quot;good&quot; software from &quot;great&quot; software.
                    </p>
                </div>
            </AnimatedSection>
        </section>
    );
}
