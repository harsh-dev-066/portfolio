import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";
import { profile } from "../data/content";

const links = [
  { id: "linkedin", label: "LinkedIn", icon: FiLinkedin, href: profile.linkedin },
  { id: "github", label: "GitHub", icon: FiGithub, href: profile.github },
  { id: "mail", label: "Email", icon: FiMail, href: `mailto:${profile.email}` },
  { id: "resume", label: "Resume", icon: FiFileText, href: profile.resume },
];

/** Fixed vertical rail on the left, with a hairline running to the page edge. */
const SocialLinks = () => (
  <aside className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-5 lg:flex">
    {links.map(({ id, label, icon: Icon, href }) => (
      <a
        key={id}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        title={label}
        className="group relative text-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent2"
      >
        <Icon size={18} />
        <span className="glass pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          {label}
        </span>
      </a>
    ))}
    <span className="mt-2 h-24 w-px bg-gradient-to-b from-hairline/30 to-transparent" />
  </aside>
);

export default SocialLinks;
