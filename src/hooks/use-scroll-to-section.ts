import { useEffect } from "react";

/**
 * Scrolls to a section by ID after the component mounts.
 * Used by dedicated route pages (e.g. /pricing) to land on the right section.
 */
export function useScrollToSection(sectionId: string) {
  useEffect(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      // Small delay to ensure the page has fully rendered before scrolling
      const timer = setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [sectionId]);
}
