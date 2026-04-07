import { ReactNode } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const ScrollFadeIn = ({ children }: { children: ReactNode }) => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
