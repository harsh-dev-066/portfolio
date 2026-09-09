import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { experiences } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const ExperienceCard = ({ exp, index, expanded, onToggle }) => {
  const hasDetail = exp.highlights.length > 0;

  return (
    <Reveal variant="right" delay={index * 120} className="relative pl-10 sm:pl-16">
      {/* Timeline node */}
      <span className="absolute left-0 top-7 flex h-4 w-4 -translate-x-1/2 items-center justify-center sm:left-[7px]">
        <span
          className={`h-3 w-3 rounded-full ring-4 ring-bg ${
            exp.current ? "bg-accent2" : "bg-faint"
          }`}
        />
        {exp.current && (
          <span className="absolute h-3 w-3 rounded-full bg-accent2 animate-pulse-ring" />
        )}
      </span>

      <div className="glass card-hover rounded-2xl p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="font-display text-lg font-semibold sm:text-xl">{exp.company}</h3>
              {exp.current && (
                <span className="rounded-full bg-emerald-500/12 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 ring-1 ring-emerald-500/30">
                  Current
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-accent2">{exp.role}</p>
          </div>
          <span className="font-mono text-xs text-faint whitespace-nowrap">{exp.period}</span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">{exp.blurb}</p>

        {hasDetail && (
          <>
            {/* Grid-rows trick animates height without measuring the content */}
            <div
              className="grid transition-all duration-500 ease-smooth"
              style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <ul className="mt-5 space-y-3 border-l border-hairline/10 pl-5">
                  {exp.highlights.map((point) => (
                    <li key={point} className="relative text-sm leading-relaxed text-muted">
                      <span className="absolute -left-[21px] top-2 h-1.5 w-1.5 rounded-full bg-accent/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={onToggle}
              aria-expanded={expanded}
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-accent2 transition-colors hover:text-accent"
            >
              {expanded ? "Show less" : `Show ${exp.highlights.length} highlights`}
              <FiChevronDown
                size={14}
                className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span key={tech} className="chip font-mono !text-[11px]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

const Experience = () => {
  // First (current) role starts open; the rest collapse to keep the page scannable.
  const [openId, setOpenId] = useState(experiences[0].id);

  return (
    <section id="experience" className="relative pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionHeading index="02" title="Experience" subtitle="Where I've been building." />

        <div className="relative mt-14">
          {/* Vertical rail */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent2/60 via-accent/30 to-transparent sm:left-[7px]" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={i}
                expanded={openId === exp.id}
                onToggle={() => setOpenId((prev) => (prev === exp.id ? null : exp.id))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
