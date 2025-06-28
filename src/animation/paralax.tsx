import { useEffect } from "react";

export function useParallax(ref: React.RefObject<HTMLElement | null>, imageHeight : number , speed : number) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (ref.current) {
        const elementHeight = ref.current.offsetHeight;
        const maxOffset = Math.max(imageHeight - elementHeight, 0);
        const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;

        const relativeScroll = Math.max(scrollPosition - elementTop, 0);
        const offset = Math.min(relativeScroll * speed, maxOffset);

        ref.current.style.backgroundPositionY = `${offset}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, imageHeight, speed]);
}
