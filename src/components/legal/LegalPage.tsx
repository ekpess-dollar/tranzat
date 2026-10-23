"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./legal.module.css";

export type LegalSection = { id: string; title: string; content: ReactNode };

export default function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: ReactNode;
  updated: string;
  sections: LegalSection[];
}) {
  const [current, setCurrent] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -65% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const toc = (
    <ol className="flex flex-col">
      {sections.map((s, i) => {
        const active = s.id === current;
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`flex gap-3 rounded-xl px-3 py-2 font-body text-[15px] leading-snug transition-colors ${
                active ? "bg-navy text-white" : "text-dark/65 hover:bg-light hover:text-dark"
              }`}
            >
              <span className={`w-5 shrink-0 tabular-nums ${active ? "text-tz-blue" : "text-dark/35"}`}>
                {i + 1}
              </span>
              {s.title}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <header className="relative overflow-hidden bg-navy px-4 pb-28 pt-20 sm:px-8 lg:pb-36 lg:pt-24">
        <div aria-hidden className={`pointer-events-none absolute inset-0 ${styles.dots}`} />
        <div className="relative mx-auto max-w-[1180px]">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-body text-sm font-medium text-white">
            Legal
          </span>
          <h1 className="mt-6 max-w-[820px] text-balance font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-[64px]">
            {title}
          </h1>
          <div className="mt-6 max-w-[680px] font-body text-lg leading-[1.6] text-muted">{intro}</div>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-tz-blue px-4 py-1.5 font-body text-sm font-semibold text-navy">
            Last modified: {updated}
          </p>
        </div>
      </header>

      <div className="relative -mt-14 rounded-t-[40px] bg-white px-4 pb-[120px] pt-12 sm:px-8 lg:-mt-20 lg:rounded-t-[64px] lg:pt-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          <aside className="lg:sticky lg:top-[108px] lg:max-h-[calc(100svh-140px)] lg:self-start lg:overflow-y-auto">
            <details className="group rounded-2xl bg-light p-2 lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 font-display text-base font-bold text-dark">
                On this page
                <span aria-hidden className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pt-1">{toc}</div>
            </details>
            <div className="hidden lg:block">
              <p className="mb-3 px-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-dark/45">
                On this page
              </p>
              {toc}
            </div>
          </aside>

          <article className="min-w-0 max-w-[740px]">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-[108px] border-t border-dark/10 py-10 first:border-t-0 first:pt-0"
              >
                <h2 className="flex items-baseline gap-4 font-display text-[26px] font-bold leading-tight tracking-[-0.03em] text-dark sm:text-[32px]">
                  <span className="font-body text-base font-semibold tabular-nums text-tz-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h2>
                <div className={`${styles.prose} mt-5`}>{s.content}</div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}
