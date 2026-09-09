import React from "react";

/**
 * Fixed decorative layer: drifting aurora blobs plus a faint grid.
 * Sits behind everything and never intercepts pointer events.
 */
const Background = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 grid-lines opacity-60" />

    <div
      className="aurora animate-float-slow"
      style={{
        top: "-12rem",
        left: "-8rem",
        width: "38rem",
        height: "38rem",
        background:
          "radial-gradient(circle, rgb(var(--glow-1) / 0.30), transparent 65%)",
      }}
    />
    <div
      className="aurora animate-float-slower"
      style={{
        top: "18%",
        right: "-12rem",
        width: "34rem",
        height: "34rem",
        background:
          "radial-gradient(circle, rgb(var(--glow-2) / 0.22), transparent 65%)",
      }}
    />
    <div
      className="aurora animate-float-slow"
      style={{
        bottom: "-14rem",
        left: "25%",
        width: "40rem",
        height: "40rem",
        animationDelay: "-8s",
        background:
          "radial-gradient(circle, rgb(var(--accent-3) / 0.16), transparent 65%)",
      }}
    />
  </div>
);

export default Background;
