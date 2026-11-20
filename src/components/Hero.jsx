import { profile } from "../data";
import { Magnetic, Typewriter } from "./Motion";

const words = ["I build", "web apps,", "CRMs &", "AI products."];

const orbit = ["React", "Node", "Next.js", "MongoDB", "LLM", "Docker", "MySQL", "Express"];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* animated background */}
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] animate-blob rounded-full bg-acid/20 blur-[120px]" />
      <div
        className="absolute -right-20 bottom-0 h-[30rem] w-[30rem] animate-blob rounded-full bg-iris/25 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div
            className="mb-8 inline-flex animate-rise items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
            </span>
            Available for freelance & full-time — {profile.location}
          </div>

          <p className="mb-3 animate-rise font-mono text-sm text-zinc-400" style={{ animationDelay: "80ms" }}>
            Hi, I'm <span className="text-white">{profile.name}</span> 👋
          </p>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {words.map((w, i) => (
              <span key={w} className="mr-4 inline-block overflow-hidden pb-2 align-bottom">
                <span
                  className={`inline-block animate-rise ${i === 3 ? "text-acid" : i === 2 ? "text-outline" : ""}`}
                  style={{ animationDelay: `${150 + i * 120}ms` }}
                >
                  {w}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-6 h-8 animate-rise font-mono text-lg text-iris sm:text-xl"
            style={{ animationDelay: "700ms" }}
          >
            &gt; <Typewriter words={profile.roles} />
          </p>

          <p
            className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-zinc-400"
            style={{ animationDelay: "800ms" }}
          >
            3 years shipping production web apps, admin panels and CRMs — end to end, from schema to UI —
            and wiring LLMs into products that people actually use.
          </p>

          <div className="mt-10 flex animate-rise flex-wrap gap-4" style={{ animationDelay: "950ms" }}>
            <Magnetic
              href="#projects"
              className="group items-center gap-2 rounded-full bg-acid px-7 py-4 font-semibold text-ink shadow-[0_0_40px_-5px] shadow-acid/50"
            >
              View my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Magnetic>
            <Magnetic
              href={`mailto:${profile.email}`}
              className="items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white hover:border-white/40"
            >
              Let's talk
            </Magnetic>
          </div>
        </div>

        {/* orbiting tech badge */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-sm animate-rise lg:block" style={{ animationDelay: "500ms" }}>
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/15">
            {orbit.map((t, i) => {
              const a = (i / orbit.length) * Math.PI * 2;
              return (
                <span
                  key={t}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-panel px-3 py-1 font-mono text-xs text-zinc-300"
                  style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%` }}
                >
                  {t}
                </span>
              );
            })}
          </div>
          <div className="absolute inset-[18%] animate-float rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-panel to-ink p-6 shadow-2xl shadow-black/60">
            <div className="mb-4 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-acid/80" />
            </div>
            <pre className="font-mono text-[11px] leading-relaxed text-zinc-400">
{`const shadab = {
  stack: `}<span className="text-acid">"MERN · PERN"</span>{`,
  ships: [`}<span className="text-iris">"CRM"</span>{`,
    `}<span className="text-iris">"CMS"</span>{`, `}<span className="text-iris">"AI"</span>{`],
  coffee: `}<span className="text-amber-300">Infinity</span>{`,
};`}
            </pre>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:flex"
      >
        scroll
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-acid" />
        </span>
      </a>
    </section>
  );
}
