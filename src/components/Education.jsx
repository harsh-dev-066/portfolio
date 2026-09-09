import React from "react";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { education, achievements } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const Education = () => (
  <section id="education" className="relative pt-12 pb-20 sm:pt-16 sm:pb-24">
    <div className="mx-auto max-w-shell px-5 sm:px-8">
      <SectionHeading index="05" title="Education & Awards" subtitle="Where it started." />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal variant="left" className="glass card-hover rounded-2xl p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 text-accent2 ring-1 ring-accent/20">
            <FiBookOpen size={19} />
          </span>

          <h3 className="mt-5 font-display text-lg font-semibold">{education.school}</h3>
          <p className="mt-1.5 text-sm text-accent2">{education.degree}</p>
          <p className="mt-1 font-mono text-xs text-faint">{education.period}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {education.details.map((detail) => (
              <span key={detail} className="chip">
                {detail}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <Reveal
              key={item.id}
              variant="right"
              delay={i * 110}
              className="glass card-hover group flex items-center gap-5 rounded-2xl p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent3/20 to-accent/10 text-accent3 ring-1 ring-accent3/20 transition-transform duration-500 ease-smooth group-hover:scale-110">
                <FiAward size={19} />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-0.5 text-sm text-muted">{item.org}</p>
              </div>

              <div className="text-right">
                <p className="font-display text-sm font-semibold text-gradient whitespace-nowrap">
                  {item.result}
                </p>
                <p className="mt-0.5 font-mono text-[11px] text-faint whitespace-nowrap">
                  {item.date}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
