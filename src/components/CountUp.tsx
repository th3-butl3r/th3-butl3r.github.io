import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  format?: boolean;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUp = ({ value, suffix = "", duration = 1200, className, format = false }: CountUpProps) => {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;

    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * easeOutCubic(progress)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className={className}>
      {format ? display.toLocaleString("es-MX") : display}
      {suffix}
    </div>
  );
};

export default CountUp;
