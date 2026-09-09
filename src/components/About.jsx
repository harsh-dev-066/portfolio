import React, { useEffect, useState } from "react";
import { FiCode, FiCpu, FiLayers, FiTrendingUp } from "react-icons/fi";
import { profile, stats } from "../data/content";
import Reveal from "./ui/Reveal";
import useReveal from "../hooks/useReveal";

/** Counts up to `target` once the tile scrolls into view. */
const CountUp = ({ target, suffix, duration = 1400 }) => {
  const [ref, visible] = useReveal({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;
    let frame;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo for a soft landing on the final number
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(eased * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    // If rAF is starved (background tab, heavy throttling) settle on the
    // real number rather than leaving a stale 0 on screen.
    const settle = setTimeout(() => setValue(target), duration + 200);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
    };
  }, [visible, target, duration]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-gradient sm:text-4xl">
      {value}
      {suffix}
    </span>
  );
};

const pillars = [
  {
    icon: FiLayers,
    title: "End-to-end ownership",
    body: "From architecture and implementation through production deployment, optimisation and long-term maintenance.",
  },
  {
    icon: FiCode,
    title: "Frontend depth",
    body: "React, Next.js and TypeScript at scale — design systems, PWAs, offline-first sync and data-heavy dashboards.",
  },
  {
    icon: FiCpu,
    title: "AI-assisted engineering",
    body: "Cursor automations, Claude Code and GPT woven into everyday workflows for faster, higher-quality delivery.",
  },
  {
    icon: FiTrendingUp,
    title: "Measurable impact",
    body: "Shipping work that shows up in the numbers — faster releases, broader test coverage and workflows people move through quicker.",
  },
];

const About = () => (
  <section id="about" className="relative pt-12 pb-20 sm:pt-16 sm:pb-24">
    <div className="mx-auto max-w-shell px-5 sm:px-8">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent2">
              01 &nbsp;/&nbsp; About
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-4 text-display-lg font-semibold">
              Engineering that moves
              <br />
              <span className="text-gradient">real operations.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-accent to-accent2" />
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 text-base leading-relaxed text-muted">{profile.intro}</p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I work best where product, design and engineering overlap — shaping the solution,
              then shipping it. Comfortable in Agile teams, in cross-functional discussions, and
              under the kind of timelines that force clear priorities.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90} className="glass rounded-2xl p-5">
                <CountUp target={Number(stat.value)} suffix={stat.suffix} />
                <p className="mt-1.5 text-xs leading-snug text-faint">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:mt-24">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <Reveal
              key={title}
              variant="scale"
              delay={i * 110}
              className="glass card-hover group rounded-2xl p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 text-accent2 ring-1 ring-accent/20 transition-transform duration-500 ease-smooth group-hover:scale-110">
                <Icon size={19} />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
