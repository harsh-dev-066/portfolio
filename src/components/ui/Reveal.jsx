import React from "react";
import useReveal from "../../hooks/useReveal";

/**
 * Wraps children in a scroll-triggered entrance animation.
 * `variant` picks the starting offset, `delay` staggers items in a list.
 */
const variants = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) => {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={`reveal ${variants[variant] || ""} ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
