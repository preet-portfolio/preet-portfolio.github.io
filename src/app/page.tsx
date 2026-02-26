"use client";

import LeftSidebar from "@/components/LeftSidebar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left Column (Sticky Sidebar) */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <LeftSidebar />
        </header>

        {/* Right Column (Scrollable Content) */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <AboutSection />
          <ProjectsSection />

          {/* Footer inside right column */}
          <footer className="mt-24 pb-12 text-sm text-[var(--text-secondary)] sm:pb-0">
            <p>
              Built with Next.js, Tailwind CSS, and Framer Motion.
              Deployed on GitHub Pages.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
