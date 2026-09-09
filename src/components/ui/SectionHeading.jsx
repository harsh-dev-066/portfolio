import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ index, title, subtitle, align = "left" }) => (
  <div className={align === "center" ? "text-center" : ""}>
    <Reveal>
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent2">
        {index} &nbsp;/&nbsp; {title}
      </span>
    </Reveal>

    <Reveal delay={90}>
      <h2 className="mt-4 text-display-lg font-semibold">
        {subtitle}
      </h2>
    </Reveal>

    <Reveal delay={160}>
      <div
        className={`mt-6 h-px w-24 bg-gradient-to-r from-accent to-accent2 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  </div>
);

export default SectionHeading;
