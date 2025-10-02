import { useEffect, useRef, useState } from 'react';

type CountUpOnViewProps = {
  to: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function CountUpOnView({ to, durationMs = 1400, prefix = '', suffix = '', className = '' }: CountUpOnViewProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(to);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [inView, to, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}


