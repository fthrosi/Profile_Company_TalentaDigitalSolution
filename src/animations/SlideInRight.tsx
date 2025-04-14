import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface SlideInRight {
  children: ReactNode
  delay?: number
}

export default function SlideInRight({ children, delay = 0 }: SlideInRight) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50px]"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
