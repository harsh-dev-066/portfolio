/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", 'html[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Driven by the CSS variables in index.css so both themes share classes
        bg: "rgb(var(--bg) / <alpha-value>)",
        elevated: "rgb(var(--bg-elevated) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        hairline: "rgb(var(--border) / <alpha-value>)",
        content: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",
        faint: "rgb(var(--text-faint) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent-2) / <alpha-value>)",
        accent3: "rgb(var(--accent-3) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5.4vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(1.85rem, 3.4vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
      },
      animation: {
        "float-slow": "float-slow 18s ease-in-out infinite",
        "float-slower": "float-slower 24s ease-in-out infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        blink: "blink 1.1s steps(1) infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.24, 0, 0.38, 1) infinite",
        "spin-slow": "spin-slow 22s linear infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        shell: "1180px",
      },
    },
  },
  plugins: [],
};
