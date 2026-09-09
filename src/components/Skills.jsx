import React, { useState } from "react";
import { skillGroups } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const ALL = "all";

const accentRing = {
  accent: "from-accent/25 to-accent/5 text-accent",
  accent2: "from-accent2/25 to-accent2/5 text-accent2",
  accent3: "from-accent3/25 to-accent3/5 text-accent3",
};

const Skills = () => {
  const [filter, setFilter] = useState(ALL);
  const groups = filter === ALL ? skillGroups : skillGroups.filter((g) => g.id === filter);

  return (
    <section id="skills" className="relative pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionHeading index="03" title="Skills" subtitle="The toolkit I reach for." />

        {/* Category filter */}
        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilter(ALL)}
              className={`chip !px-4 !py-1.5 !text-[13px] ${
                filter === ALL ? "!border-accent/60 !bg-accent/12 !text-content" : ""
              }`}
            >
              Everything
            </button>
            {skillGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setFilter(group.id)}
                className={`chip !px-4 !py-1.5 !text-[13px] ${
                  filter === group.id ? "!border-accent/60 !bg-accent/12 !text-content" : ""
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {groups.map((group, gi) => (
            <Reveal
              key={group.id}
              variant="scale"
              delay={gi * 90}
              className={`glass card-hover rounded-2xl p-6 ${
                groups.length % 2 === 1 && gi === groups.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-8 w-1 rounded-full bg-gradient-to-b ${
                    accentRing[group.accent] || accentRing.accent
                  }`}
                />
                <h3 className="font-display text-base font-semibold">{group.title}</h3>
                <span className="ml-auto font-mono text-xs text-faint">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={item}
                    className="chip cursor-default"
                    style={{ transitionDelay: `${Math.min(i * 12, 200)}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
