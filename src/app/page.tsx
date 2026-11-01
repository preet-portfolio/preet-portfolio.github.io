import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import WorkGroup from "@/components/WorkGroup";
import { apps, projects } from "@/data/work";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-instrument" });

const navLink = "p-3 text-[#5C5C58] no-underline hover:text-[#E5480B]";

export default function Home() {
  return (
    <div
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} min-h-screen overflow-x-clip bg-[#F4F3EF] text-[#0A0A0A] [--font-mono:var(--font-geist-mono)] [--font-sans:var(--font-geist)] [--font-serif:var(--font-instrument)] font-sans`}
    >
      <header className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-3 px-4 py-7 font-mono text-[13px] text-[#5C5C58] md:px-6">
        <span>PP — {new Date().getFullYear()}</span>
        <nav aria-label="Main" className="flex gap-1">
          <a href="#apps" className={navLink}>Apps</a>
          <a href="#projects" className={navLink}>Projects</a>
          <a href="mailto:preet2020@icloud.com" className={navLink}>Contact</a>
        </nav>
      </header>

      <main className="mx-auto max-w-screen-xl px-4 md:px-6">
        <h1 className="mb-10 mt-6 text-[#0A0A0A] text-[clamp(56px,10vw,140px)] font-semibold leading-[0.9] tracking-[-0.06em] md:mb-14">
          Preet Panchal
        </h1>

        {/* Apps get the wider column: they are what most visitors come to check. */}
        <div className="grid items-start gap-6 lg:grid-cols-[3fr_2fr]">
          <WorkGroup id="apps" title="Apps on the App Store" note="Tap one for links" items={apps} />
          <WorkGroup id="projects" title="Projects" note="Not on the App Store" items={projects} />
        </div>
      </main>

      <footer className="mx-auto max-w-screen-xl px-4 pb-12 pt-24 text-center md:px-6">
        <a
          href="mailto:preet2020@icloud.com"
          className="font-serif text-[clamp(44px,8vw,112px)] italic leading-none text-[#0A0A0A] no-underline hover:text-[#E5480B]"
        >
          say hello
        </a>
        <div className="mt-12 flex flex-wrap justify-center gap-1 font-mono text-[13px]">
          <a href="https://github.com/preet-portfolio" target="_blank" rel="noopener noreferrer" className={navLink}>GitHub</a>
          <a href="https://apps.apple.com/in/developer/preet-panchal/id1874836869" target="_blank" rel="noopener noreferrer" className={navLink}>App Store</a>
        </div>
      </footer>
    </div>
  );
}
