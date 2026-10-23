"use client";

import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

const values = [
  {
    title: "Easy Access",
    body: "We believe everyone should be able to use their digital assets easily, no matter where they live. This is why Tranzat was built.",
    bg: "bg-navy",
    text: "text-white",
    muted: "text-white/70",
  },
  {
    title: "Simple Design",
    body: "Finance can get complicated sometimes, so we made sure our app is user friendly for all, irrespective of age or demographics.",
    bg: "bg-tz-blue",
    text: "text-[#0d2831]",
    muted: "text-[#0d2831]/75",
  },
  {
    title: "Impactful Innovation",
    body: "We embrace new technology, but only when it creates real value. Our innovation is driven by usefulness, not hype.",
    bg: "bg-tz-red",
    text: "text-white",
    muted: "text-white/80",
  },
  {
    title: "Real-World Solution",
    body: "Crypto should solve real problems. Everything we build is aimed at helping people pay real bills, make real purchases, and participate in their local economy.",
    bg: "bg-black",
    text: "text-white",
    muted: "text-white/65",
  },
];

const NAV_H = 76;
// Scroll distance each value stays open for, as a share of the viewport height.
const STEP_SVH = 55;
// Below this height the pinned stage can't fit the heading plus an open panel.
const PIN_QUERY = "(min-height: 640px)";

const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(PIN_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

function usePinned() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(PIN_QUERY).matches, () => false);
}

export default function ValuesPanels({ heading }: { heading: ReactNode }) {
  const pinned = usePinned();
  const [active, setActive] = useState(0);
  const outer = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const id = useId();

  const step = () => (outer.current!.offsetHeight - stage.current!.offsetHeight) / values.length;

  useEffect(() => {
    if (!pinned) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = outer.current!.getBoundingClientRect().top;
      setActive(Math.min(values.length - 1, Math.max(0, Math.floor((NAV_H - top) / step()))));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [pinned]);

  const select = useCallback(
    (i: number) => {
      if (!pinned) return setActive(i);
      const sectionTop = outer.current!.getBoundingClientRect().top + window.scrollY;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: sectionTop - NAV_H + i * step() + 2, behavior: reduce ? "auto" : "smooth" });
    },
    [pinned],
  );

  return (
    <section
      ref={outer}
      aria-label="Our core values"
      className="relative bg-white"
      style={pinned ? { height: `calc(100svh - ${NAV_H}px + ${values.length * STEP_SVH}svh)` } : undefined}
    >
      <div
        ref={stage}
        className={`px-4 sm:px-8 ${
          pinned ? "sticky top-[76px] flex h-[calc(100svh-76px)] flex-col justify-center py-8" : "py-[120px]"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1272px] flex-col">
          {heading}
          <div
            className="flex flex-col gap-3 lg:flex-row"
            style={{ height: pinned ? "min(500px, calc(100svh - 76px - 240px))" : undefined }}
          >
            {values.map((v, i) => {
              const open = i === active;
              return (
                <div
                  key={v.title}
                  className={`${v.bg} ${v.text} relative isolate flex min-h-0 min-w-0 flex-col overflow-hidden rounded-[32px] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${
                    pinned ? "basis-0" : "lg:basis-0"
                  } ${pinned ? "" : "max-lg:!flex-grow-0"}`}
                  style={{ flexGrow: open ? 3.4 : 1 }}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -bottom-24 -right-24 -z-10 size-72 rounded-full border-[28px] border-current opacity-[0.08] transition-transform duration-700 ${
                      open ? "scale-100" : "scale-75"
                    }`}
                  />
                  <h3>
                    <button
                      type="button"
                      id={`${id}-tab-${i}`}
                      aria-expanded={open}
                      aria-controls={`${id}-panel-${i}`}
                      onClick={() => select(i)}
                      className="flex w-full items-start justify-between gap-4 p-6 text-left outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/60 lg:p-9"
                    >
                      <span
                        className={`font-display font-bold leading-[1.05] tracking-[-0.03em] transition-[font-size] duration-500 ${
                          open ? "text-[28px] lg:text-[44px]" : "text-[22px] lg:text-[28px]"
                        } ${open ? "" : "lg:whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180"}`}
                      >
                        {v.title}
                      </span>
                      <span
                        aria-hidden
                        style={{ borderColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
                        className={`flex size-10 shrink-0 items-center justify-center rounded-full border text-2xl leading-none transition-transform duration-500 ${
                          open ? "rotate-45" : ""
                        } ${open ? "" : "lg:absolute lg:right-7 lg:top-7"}`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`${id}-panel-${i}`}
                    role="region"
                    aria-labelledby={`${id}-tab-${i}`}
                    hidden={!open}
                    className="mt-auto px-6 pb-7 lg:px-9 lg:pb-10"
                  >
                    <p className={`max-w-[440px] font-body text-base leading-[26px] sm:text-lg sm:leading-[30px] lg:text-xl lg:leading-8 ${v.muted}`}>
                      {v.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
