"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const LINE = 1.08; // em

export default function WordRotator({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [widths, setWidths] = useState<number[]>([]);
  const measure = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const read = () =>
      setWidths(
        Array.from(measure.current?.children ?? []).map((el) => el.getBoundingClientRect().width),
      );
    read();
    document.fonts?.ready.then(read);
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  // The list ends with a copy of the first word; once it lands there, snap back to the real first word.
  const onSettled = () => {
    if (index === words.length) {
      setAnimate(false);
      setIndex(0);
    }
  };

  const width = widths[index % words.length];

  return (
    <span
      className={`relative inline-flex overflow-hidden rounded-[0.22em] bg-tz-blue px-[0.22em] align-[-0.16em] text-navy ${
        animate ? "transition-[width] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" : ""
      }`}
      style={{ height: `${LINE}em`, width: width ? `calc(${width}px + 0.44em)` : undefined }}
    >
      <span
        ref={measure}
        aria-hidden
        className="pointer-events-none invisible absolute left-0 top-0 flex flex-col"
      >
        {words.map((w) => (
          <span key={w} className="w-fit whitespace-nowrap">
            {w}
          </span>
        ))}
      </span>
      <span
        onTransitionEnd={onSettled}
        className={`flex flex-col ${animate ? "transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" : ""}`}
        style={{ transform: `translateY(-${index * LINE}em)` }}
      >
        {[...words, words[0]].map((w, i) => (
          <span key={i} className="whitespace-nowrap" style={{ height: `${LINE}em`, lineHeight: LINE }}>
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}
