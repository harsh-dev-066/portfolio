import { useEffect, useRef, useState } from "react";

/**
 * Observes an element and flips to `true` the first time it enters the
 * viewport. Used to drive the `.reveal` CSS transitions.
 */
export const useReveal = ({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // No IntersectionObserver (or reduced motion) -> show content immediately.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
};

export default useReveal;
