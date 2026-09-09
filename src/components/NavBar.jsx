import React, { useEffect, useMemo, useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from "react-icons/fi";
import { navLinks, profile } from "../data/content";
import useActiveSection from "../hooks/useActiveSection";

const NavBar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ids = useMemo(() => navLinks.map((l) => l.id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => (event) => {
    event.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-shell items-center justify-between px-5 sm:px-8">
        {/* Wordmark */}
        <a
          href="#home"
          onClick={go("home")}
          className="group flex items-center gap-3"
          aria-label="Back to top"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent2 font-display text-sm font-bold text-white shadow-lg shadow-accent/30">
            HT
            <span className="absolute inset-0 rounded-xl bg-accent/40 animate-pulse-ring" />
          </span>
          <span className="hidden font-display text-base font-semibold tracking-tight sm:block">
            Harsh Thakur
          </span>
        </a>

        {/* Desktop links — the active pill slides behind the current section */}
        <div
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 md:flex ${
            scrolled ? "glass" : "border border-transparent"
          }`}
        >
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={go(id)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                active === id ? "text-content" : "text-muted hover:text-content"
              }`}
            >
              {active === id && (
                <span className="absolute inset-0 rounded-full bg-accent/15 ring-1 ring-accent/30" />
              )}
              <span className="relative">{label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-all duration-300 hover:text-content hover:ring-1 hover:ring-accent/40"
          >
            <span className="relative block h-4 w-4">
              <FiSun
                className={`absolute inset-0 transition-all duration-500 ${
                  theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                }`}
                size={16}
              />
              <FiMoon
                className={`absolute inset-0 transition-all duration-500 ${
                  theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
                size={16}
              />
            </span>
          </button>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary hidden !px-5 !py-2 text-xs sm:inline-flex"
          >
            <FiDownload size={14} />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-content md:hidden"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-bg/80 backdrop-blur-xl transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div className="relative flex h-full flex-col items-center justify-center gap-2">
          {navLinks.map(({ id, label }, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={go(id)}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
              className={`font-display text-3xl font-semibold transition-all duration-500 ease-smooth ${
                open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              } ${active === id ? "text-gradient" : "text-muted"}`}
            >
              {label}
            </a>
          ))}

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            style={{ transitionDelay: open ? `${navLinks.length * 60 + 80}ms` : "0ms" }}
            className={`btn btn-primary mt-8 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <FiDownload size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
