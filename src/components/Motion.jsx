import { useEffect, useRef, useState } from "react";

/** Fires once when the element scrolls into view. */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const hiddenFrom = {
  up: "translate-y-12",
  down: "-translate-y-12",
  left: "-translate-x-12",
  right: "translate-x-12",
  scale: "scale-90",
};

/** Fades + slides children in on scroll. */
export function Reveal({ children, from = "up", delay = 0, className = "", as: Tag = "div" }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
        inView ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0" : `opacity-0 blur-sm ${hiddenFrom[from]}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Counts up from 0 to `value` once visible. */
export function Counter({ value, suffix = "", duration = 1600 }) {
  const [ref, inView] = useInView(0.5);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/** Types, pauses, deletes and cycles through words. */
export function Typewriter({ words, typeSpeed = 70, deleteSpeed = 35, pause = 1600 }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block w-[3px] animate-blink bg-acid align-middle" style={{ height: "1em" }} />
    </span>
  );
}

/** Card that tilts toward the cursor. */
export function Tilt({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

/** Button that drifts slightly toward the cursor. */
export function Magnetic({ children, className = "", strength = 0.3, ...props }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => (ref.current.style.transform = "translate(0,0)");
  return (
    <a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex transition-transform duration-300 ease-out ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

/** Small section label like "02 — Projects". */
export function SectionTag({ index, children }) {
  return (
    <Reveal className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-acid">
      <span>{index}</span>
      <span className="h-px w-10 bg-acid/60" />
      <span className="text-zinc-400">{children}</span>
    </Reveal>
  );
}
