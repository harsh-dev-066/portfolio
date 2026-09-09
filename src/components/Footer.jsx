import React from "react";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/content";

const Footer = () => {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-hairline/10 py-10">
      <div className="mx-auto flex max-w-shell flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {profile.name}. Designed &amp; built from scratch.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors duration-300 hover:text-accent2"
          >
            <FiGithub size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors duration-300 hover:text-accent2"
          >
            <FiLinkedin size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors duration-300 hover:text-accent2"
          >
            <FiMail size={17} />
          </a>

          <button
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            className="glass group flex h-9 w-9 items-center justify-center rounded-full text-muted transition-all duration-300 hover:text-content"
          >
            <FiArrowUp
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
