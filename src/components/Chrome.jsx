import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      setP(h.scrollTop / (h.scrollHeight - h.clientHeight || 1));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-acid via-iris to-acid"
      style={{ transform: `scaleX(${p})` }}
    />
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const on = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", on);
    return () => window.removeEventListener("pointermove", on);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgb(198 255 61 / 0.06), transparent 60%)`,
      }}
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", on);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "mx-4 border border-white/10 bg-ink/70 shadow-2xl shadow-black/40 backdrop-blur-xl md:mx-auto" : ""
        }`}
      >
        <a href="#top" className="group flex items-center gap-2 font-display text-lg font-semibold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-acid text-ink transition-transform duration-500 group-hover:rotate-[360deg]">
            S
          </span>
          {profile.name}
          <span className="text-acid">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.id ? "text-ink" : "text-zinc-400 hover:text-white"
                }`}
              >
                <span
                  className={`absolute inset-0 -z-10 rounded-full bg-acid transition-all duration-300 ${
                    active === l.id ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                />
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border border-acid/40 px-4 py-2 text-sm text-acid transition hover:bg-acid hover:text-ink md:inline-block"
        >
          Hire me
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="relative h-10 w-10 md:hidden"
        >
          <span className={`absolute left-2 right-2 h-0.5 bg-white transition-all ${open ? "top-5 rotate-45" : "top-3.5"}`} />
          <span className={`absolute left-2 right-2 top-5 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-2 right-2 h-0.5 bg-white transition-all ${open ? "top-5 -rotate-45" : "top-6.5"}`} />
        </button>
      </nav>

      <div
        className={`mx-4 mt-2 overflow-hidden rounded-3xl border border-white/10 bg-ink/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="p-4">
          {links.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 font-display text-lg text-white hover:bg-white/5"
              >
                {l.label}
                <span className="font-mono text-xs text-zinc-500">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
