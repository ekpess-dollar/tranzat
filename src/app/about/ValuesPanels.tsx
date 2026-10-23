"use client";

import { useId, useState } from "react";

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

export default function ValuesPanels() {
  const [active, setActive] = useState(0);
  const id = useId();

  return (
    <div className="flex flex-col gap-3 lg:h-[500px] lg:flex-row">
      {values.map((v, i) => {
        const open = i === active;
        return (
          <div
            key={v.title}
            onMouseEnter={() => setActive(i)}
            className={`${v.bg} ${v.text} relative isolate flex min-w-0 flex-col overflow-hidden rounded-[32px] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none lg:basis-0`}
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
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="flex w-full items-start justify-between gap-4 p-7 text-left outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/60 lg:p-9"
              >
                <span
                  className={`font-display font-bold leading-[1.05] tracking-[-0.03em] transition-[font-size] duration-500 ${
                    open ? "text-[30px] lg:text-[44px]" : "text-[26px] lg:text-[28px]"
                  } ${open ? "" : "lg:whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180"}`}
                >
                  {v.title}
                </span>
                <span
                  aria-hidden
                  style={{ borderColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
                  className={`mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border text-2xl leading-none transition-transform duration-500 ${
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
              className="mt-auto px-7 pb-8 lg:px-9 lg:pb-10"
            >
              <p className={`max-w-[440px] font-body text-lg leading-[30px] lg:text-xl lg:leading-8 ${v.muted}`}>
                {v.body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
