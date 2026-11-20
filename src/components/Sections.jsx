import { useState } from "react";
import { education, experience, profile, projectFilters, projects, skillGroups, stats } from "../data";
import { Counter, Magnetic, Reveal, SectionTag, Tilt } from "./Motion";

/* ---------------- About ---------------- */
export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionTag index="01">About</SectionTag>
      <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Turning business workflows into <span className="text-acid">fast, reliable software.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">{profile.summary}</p>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              I've built role-based dashboards, streamlined internal workflows, led small dev teams, and mentored
              learners through hands-on projects.
            </p>
          </Reveal>
          <Reveal delay={350} className="mt-8 grid gap-3 sm:grid-cols-2">
            {education.map((e) => (
              <div key={e.degree} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-acid">{e.note}</p>
                <p className="mt-1 font-semibold text-white">{e.degree}</p>
                <p className="text-sm text-zinc-500">{e.school}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s, i) => (
            <Reveal key={s.label} from="scale" delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-panel p-6 transition-colors hover:border-acid/40">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-acid/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
                <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-zinc-400">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experience ---------------- */
export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionTag index="02">Experience</SectionTag>
      <Reveal>
        <h2 className="mb-16 font-display text-3xl font-semibold text-white sm:text-5xl">Where I've worked</h2>
      </Reveal>

      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-acid via-iris/50 to-transparent md:left-1/2" />
        {experience.map((job, i) => (
          <div
            key={job.company}
            className={`relative mb-14 pl-12 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-14" : "md:pr-14"}`}
          >
            <span
              className={`absolute left-[5px] top-2 h-4 w-4 rounded-full border-4 border-ink bg-acid shadow-[0_0_0_4px] shadow-acid/20 ${
                i % 2 ? "md:-left-2" : "md:left-auto md:-right-2"
              }`}
            />
            <Reveal from={i % 2 ? "right" : "left"}>
              <div className="rounded-3xl border border-white/10 bg-panel p-7 transition hover:-translate-y-1 hover:border-white/25">
                <p className="font-mono text-xs text-acid">{job.period}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{job.role}</h3>
                <p className="text-zinc-400">
                  {job.company} · {job.place}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                      <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-iris" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function ProjectCard({ p, index }) {
  return (
    <Tilt className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-panel transition-colors duration-500 hover:border-white/25">
        {/* spotlight follows cursor */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgb(255 255 255 / 0.07), transparent 60%)",
          }}
        />

        {/* browser mock */}
        <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
          <div className="absolute inset-x-5 top-5 bottom-0 translate-y-3 rounded-t-xl border border-white/10 bg-ink/80 backdrop-blur transition-transform duration-700 group-hover:translate-y-0">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="ml-2 truncate rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                {p.url ? hostname(p.url) : p.period}
              </span>
            </div>
            <div className="relative h-full p-4">
              <span className="absolute right-4 top-2 font-mono text-5xl font-bold text-white/5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative block origin-left truncate pr-14 font-display text-2xl font-extrabold text-white/90 transition-transform duration-700 group-hover:scale-105">
                {p.title.split(" — ")[0]}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.title}`}
                className="relative z-20 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-acid group-hover:bg-acid group-hover:text-ink"
              >
                ↗
              </a>
            )}
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{p.blurb}</p>

          {p.demo && (
            <p className="mt-4 rounded-xl border border-dashed border-acid/30 bg-acid/5 px-3 py-2 font-mono text-[11px] text-acid">
              {p.demo}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-zinc-300">
                {t}
              </span>
            ))}
          </div>

          {(p.url || p.extra) && (
            <div className="relative z-20 mt-5 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-sm">
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer" className="text-white underline-offset-4 hover:text-acid hover:underline">
                  Live site →
                </a>
              )}
              {p.extra?.map((x) => (
                <a key={x.url} href={x.url} target="_blank" rel="noreferrer" className="text-zinc-400 underline-offset-4 hover:text-acid hover:underline">
                  {x.label} →
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </Tilt>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionTag index="03">Projects</SectionTag>
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">
            Things I've <span className="text-outline">shipped</span>
          </h2>
          <p className="mt-4 max-w-lg text-zinc-400">
            Live products — public websites, the admin panels and CRMs behind them, and AI tooling.
          </p>
        </Reveal>
        <Reveal delay={150} className="flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                filter === f
                  ? "border-acid bg-acid text-ink"
                  : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>
      </div>

      <div key={filter} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <div
            key={p.title}
            className="animate-rise [animation-duration:700ms]"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <ProjectCard p={p} index={projects.indexOf(p)} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */
export function Skills() {
  const all = skillGroups.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);
  const rows = [all.slice(0, half), all.slice(half)];

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTag index="04">Skills</SectionTag>
        <Reveal>
          <h2 className="mb-14 font-display text-3xl font-semibold text-white sm:text-5xl">My toolkit</h2>
        </Reveal>
      </div>

      {/* marquee */}
      <div className="mb-16 space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {rows.map((row, r) => (
          <div key={r} className={`flex w-max gap-4 ${r ? "animate-marquee-rev" : "animate-marquee"} hover:[animation-play-state:paused]`}>
            {[...row, ...row].map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-2xl border border-white/10 bg-panel px-6 py-3 font-display text-lg text-zinc-200 transition-colors hover:border-acid hover:text-acid"
              >
                {s}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 4) * 100}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:bg-white/[0.04]">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-acid">{g.title}</p>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-zinc-300">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const socials = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Resume", href: profile.resume },
    { label: "Call", href: `tel:${profile.phone.replace(/\s/g, "")}` },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-iris/20 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <SectionTag index="05">Contact</SectionTag>
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-7xl">
            Have a project? <br />
            <span className="text-acid">Let's build it.</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            Websites, CRMs, admin panels or AI features — I'm open to freelance work and full-time roles.
          </p>
        </Reveal>

        <Reveal delay={250} className="mt-10 flex flex-wrap justify-center gap-4">
          <Magnetic
            href={`mailto:${profile.email}`}
            className="items-center gap-2 rounded-full bg-acid px-8 py-4 font-semibold text-ink shadow-[0_0_50px_-5px] shadow-acid/50"
          >
            {profile.email}
          </Magnetic>
          <button
            onClick={copy}
            className="rounded-full border border-white/15 px-6 py-4 font-mono text-sm text-white transition hover:border-white/40"
          >
            {copied ? "✓ Copied!" : "Copy email"}
          </button>
        </Reveal>

        <Reveal delay={350} className="mt-10 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("tel:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-300 transition hover:border-acid hover:text-acid"
            >
              {s.label}
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
          ))}
        </Reveal>
        <Reveal delay={400}>
          <p className="mt-6 font-mono text-sm text-zinc-500">
            {profile.phone} · {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. Built with React & Tailwind.
        </p>
        <a href="#top" className="hover:text-acid">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
