import React, { useEffect, useState } from "react";
import { FiArrowDownRight, FiMapPin } from "react-icons/fi";
import portrait from "../assets/profile-2.png";
import { profile, marqueeStack } from "../data/content";

const ROLES = [
  "Senior Software Engineer",
  "Frontend Architect",
  "Full-Stack Builder",
  "AI-Assisted Engineer",
];

/** Types a role out, holds it, deletes it, then moves to the next one. */
const useTypewriter = (words, { typeMs = 75, deleteMs = 35, holdMs = 1800 } = {}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";

    if (done) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (cleared) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return undefined;
    }

    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? deleteMs : typeMs
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
};

const Home = () => {
  const typed = useTypewriter(ROLES);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-32 sm:pb-28">
      <div className="mx-auto grid w-full max-w-shell items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <div>
          <div
            className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </div>

          <h1
            className="mt-6 text-display-xl font-bold animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Hi, I&apos;m <span className="text-gradient">Harsh</span>.
            <br />
            {profile.tagline}
          </h1>

          <div
            className="mt-6 flex h-8 items-center font-mono text-sm text-accent2 sm:text-base animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <span className="text-faint">&gt;&nbsp;</span>
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] bg-accent2 animate-blink" />
          </div>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {profile.summary}
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <a href="#projects" onClick={scrollTo("projects")} className="btn btn-primary group">
              View my work
              <FiArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a href="#contact" onClick={scrollTo("contact")} className="btn btn-ghost">
              Get in touch
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-faint">
              <FiMapPin size={14} />
              {profile.location}
            </span>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-xs animate-fade-up lg:max-w-sm" style={{ animationDelay: "300ms" }}>
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-accent/30 via-accent2/20 to-transparent blur-2xl" />
          <div
            className="absolute -inset-3 rounded-[2rem] opacity-60 animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, rgb(var(--accent) / 0.5), transparent 30%, rgb(var(--accent-2) / 0.5) 60%, transparent 85%)",
              filter: "blur(18px)",
            }}
          />
          <div className="glass relative overflow-hidden rounded-[1.75rem] p-2">
            <img
              src={portrait}
              alt="Harsh Thakur"
              loading="eager"
              className="w-full rounded-[1.4rem] object-cover transition-transform duration-700 ease-smooth hover:scale-[1.03]"
            />
          </div>

          <div className="glass absolute -bottom-5 -left-4 rounded-2xl px-4 py-3 sm:-left-8">
            <p className="font-display text-xl font-bold text-gradient">~5</p>
            <p className="text-[11px] uppercase tracking-widest text-faint">Years exp.</p>
          </div>
        </div>
      </div>

      {/* Infinite tech marquee */}
      <div className="absolute inset-x-0 bottom-0 border-t border-hairline/10 py-5">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track flex w-max gap-10">
            {[...marqueeStack, ...marqueeStack].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 text-muted transition-colors duration-300 hover:text-content"
              >
                <i className={`${tech.icon} text-xl colored`} aria-hidden="true" />
                <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
