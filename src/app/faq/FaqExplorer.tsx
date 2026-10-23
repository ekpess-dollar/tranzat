"use client";

import { useEffect, useMemo, useState } from "react";
import { faqs, topics, type Topic } from "./faqs";

const SUPPORT = "support@tranzat.com";

export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<Topic | "All">("All");
  const [open, setOpen] = useState<Set<string>>(() => new Set([faqs[0].id]));

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (faqs.some((f) => f.id === id)) {
      setOpen(new Set([id]));
      document.getElementById(id)?.scrollIntoView({ block: "center" });
    }
  }, []);

  const q = query.trim().toLowerCase();
  const matches = useMemo(
    () =>
      faqs.filter(
        (f) =>
          (topic === "All" || f.topic === topic) &&
          (!q || f.q.toLowerCase().includes(q) || f.text.toLowerCase().includes(q)),
      ),
    [q, topic],
  );

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const count = (t: Topic | "All") => (t === "All" ? faqs.length : faqs.filter((f) => f.topic === t).length);
  const grouped = topics
    .map((t) => ({ topic: t, items: matches.filter((f) => f.topic === t) }))
    .filter((g) => g.items.length);

  return (
    <>
      <div className="relative mx-auto mt-10 max-w-[640px]">
        <label htmlFor="faq-search" className="sr-only">
          Search questions
        </label>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-6 top-1/2 size-5 -translate-y-1/2 text-dark/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search, e.g. wallet address, card, referral"
          className="h-16 w-full rounded-full border-0 bg-white pl-14 pr-6 font-body text-lg text-dark shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] outline-none ring-tz-blue placeholder:text-dark/40 focus-visible:ring-4"
        />
      </div>

      <div className="-mx-4 mt-20 rounded-t-[40px] bg-white px-4 pb-[120px] pt-12 text-left sm:-mx-8 sm:px-8 lg:mt-24 lg:rounded-t-[64px] lg:pt-16">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="Filter by topic" className="min-w-0 lg:sticky lg:top-[108px] lg:self-start">
          <p className="mb-3 hidden px-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-dark/45 lg:block">
            Topics
          </p>
          <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0">
            {(["All", ...topics] as const).map((t) => {
              const active = topic === t;
              return (
                <li key={t} className="shrink-0">
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => setTopic(t)}
                    className={`flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-full px-4 py-2.5 text-left font-body text-[15px] font-medium transition-colors lg:rounded-xl ${
                      active ? "bg-navy text-white" : "bg-light text-dark/70 hover:text-dark lg:bg-transparent lg:hover:bg-light"
                    }`}
                  >
                    {t === "All" ? "All questions" : t}
                    <span className={`tabular-nums text-sm ${active ? "text-tz-blue" : "text-dark/35"}`}>{count(t)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="min-w-0">
          <p aria-live="polite" className="sr-only">
            {matches.length} {matches.length === 1 ? "question" : "questions"} shown
          </p>

          {grouped.length === 0 && (
            <div className="rounded-[32px] bg-light px-8 py-14 text-center">
              <p className="font-display text-2xl font-bold text-dark">No questions match &ldquo;{query}&rdquo;</p>
              <p className="mt-3 font-body text-lg text-dark/65">
                Try another word, or email us at <span className="select-all font-medium text-dark">{SUPPORT}</span>.
              </p>
            </div>
          )}

          <div className="flex flex-col gap-12">
            {grouped.map((g) => (
              <section key={g.topic} aria-labelledby={`topic-${g.topic}`}>
                <h2
                  id={`topic-${g.topic}`}
                  className="mb-4 font-display text-[28px] font-bold tracking-[-0.03em] text-dark"
                >
                  {g.topic}
                </h2>
                <ul className="flex flex-col gap-3">
                  {g.items.map((f) => {
                    const isOpen = open.has(f.id) || !!q;
                    return (
                      <li
                        key={f.id}
                        id={f.id}
                        className={`scroll-mt-[120px] rounded-[24px] border transition-colors ${
                          isOpen ? "border-transparent bg-[#eef9fe]" : "border-dark/10 bg-white hover:border-dark/25"
                        }`}
                      >
                        <h3>
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`${f.id}-answer`}
                            onClick={() => toggle(f.id)}
                            className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-lg font-semibold tracking-[-0.02em] text-dark outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-tz-blue sm:text-xl"
                          >
                            {f.q}
                            <span
                              aria-hidden
                              className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xl leading-none transition-[transform,background-color,color] duration-300 ${
                                isOpen ? "rotate-45 bg-navy text-white" : "bg-light text-dark"
                              }`}
                            >
                              +
                            </span>
                          </button>
                        </h3>
                        <div
                          id={`${f.id}-answer`}
                          role="region"
                          aria-label={f.q}
                          className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div
                            className="overflow-hidden"
                            ref={(el) => {
                              if (el) el.inert = !isOpen;
                            }}
                          >
                            <div className="px-6 pb-6 font-body text-[17px] leading-[1.7] text-dark/75 [&_a]:font-medium [&_a]:text-navy [&_a]:underline [&_a]:decoration-tz-blue [&_a]:decoration-2 [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-dark">
                              {f.a}
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          <aside className="relative mt-16 overflow-hidden rounded-[32px] bg-navy px-8 py-10 sm:px-12 sm:py-12">
            <span aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full border-[24px] border-tz-blue/20" />
            <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-tz-blue">Still stuck?</p>
            <p className="mt-3 max-w-[420px] font-display text-[30px] font-bold leading-tight tracking-[-0.03em] text-white">
              Our support team can help with anything not covered here.
            </p>
            <p className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 font-body text-lg text-white">
              <span className="text-white/60">Email</span>
              <span className="select-all font-semibold">{SUPPORT}</span>
            </p>
          </aside>
        </div>
      </div>
      </div>
    </>
  );
}
