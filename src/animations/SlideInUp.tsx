import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface SlideInUpProps {
  children: ReactNode; // ✅ Explicitly define 'children' type
  delay?: number; // ✅ Explicitly define 'delay' as number
}

export default function SlideInUp({ children, delay = 0 }: SlideInUpProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
