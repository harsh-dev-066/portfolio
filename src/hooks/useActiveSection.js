import { useEffect, useState } from "react";

/**
 * Tracks which section is currently closest to the top of the viewport so the
 * navbar can highlight it. Uses scroll position rather than IntersectionObserver
 * because sections have wildly different heights.
 */
export const useActiveSection = (ids, offset = 140) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;
      let current = ids[0];

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      });

      // Snap to the last section once the page is scrolled to the bottom.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 8) {
        current = ids[ids.length - 1];
      }

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return active;
};

export default useActiveSection;
