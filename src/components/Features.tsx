"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import PhoneMockup from "./PhoneMockup";
import BillsStack from "./BillsStack";
import Coins from "./Coins";

const NAV_H = 76;
// Scroll distance each card stays open for, as a share of the viewport height.
const STEP_SVH = 60;
// The stack needs room for two bars plus an open card; smaller screens get the static layout.
const STACK_QUERY = "(min-width: 1024px) and (min-height: 680px)";

const copy =
  "Receive payments from your employers, clients, social media platforms, and other businesses directly to your own foreign account – without hidden fees";

type Card = {
  id: string;
  title: string;
  bg: string;
  titleColor: string;
  bodyColor: string;
  barTitleColor: string;
  visual: ReactNode;
  stackedVisual?: ReactNode;
  centered?: boolean;
};

const cards: Card[] = [
  {
    id: "naira",
    title: "Instant Naira from your crypto. Arrives in seconds.",
    bg: "bg-tz-blue",
    titleColor: "text-[#0d2831]",
    bodyColor: "text-[#0d2831]",
    barTitleColor: "text-[#0d2831]",
    visual: <PhoneMockup />,
  },
  {
    id: "bills",
    title: "Pay your bills with ease",
    bg: "bg-black",
    titleColor: "text-[#e2e2e2]",
    bodyColor: "text-[#9e9e9e]",
    barTitleColor: "text-white",
    visual: <BillsStack />,
  },
  {
    id: "stablecoins",
    title: "Send stablecoins to anyone, anywhere",
    bg: "bg-tz-red",
    titleColor: "text-[#e2e2e2]",
    bodyColor: "text-white",
    barTitleColor: "text-white",
    visual: <Coins />,
    stackedVisual: <Coins variant="side" />,
    centered: true,
  },
];

function BankBadge({ size }: { size: 50 | 60 }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-[30px] bg-white"
      style={{ width: size, height: size }}
    >
      <Image
        src="/assets/bank-glyph.svg"
        alt=""
        width={24}
        height={21}
        className="h-[21.13px] w-[23.54px]"
      />
    </span>
  );
}

function DownloadButton() {
  return (
    <Link
      href="#"
      className="inline-flex h-12 items-center gap-[21px] rounded-lg border border-light bg-light pl-6 pr-[26px] font-display text-base font-semibold leading-[30px] tracking-[-0.32px] text-black transition-colors hover:bg-white"
    >
      Download Tranzat
      <Image src="/assets/arrow.svg" alt="" width={15} height={15} />
    </Link>
  );
}

function CardText({ card, centered }: { card: Card; centered: boolean }) {
  return (
    <div
      className={`relative z-10 flex w-full max-w-[599px] flex-col px-3 ${
        centered ? "mx-auto items-center text-center" : "items-start"
      }`}
    >
      <div className="pt-6">
        <BankBadge size={60} />
      </div>
      <h2
        className={`text-balance pt-12 font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[48px] sm:leading-[46px] sm:tracking-[-1.44px] ${card.titleColor}`}
      >
        {card.title}
      </h2>
      <p className={`pt-3.5 font-body text-lg leading-[1.6] sm:text-xl sm:leading-[30px] ${card.bodyColor}`}>
        {copy}
      </p>
      <div className="pt-6">
        <DownloadButton />
      </div>
    </div>
  );
}

function StaticFeatures() {
  const base = "relative rounded-t-[48px] px-3 pt-[72px] sm:px-[84px] lg:rounded-t-[100px]";
  return (
    <section className="relative bg-white">
      {cards.map((card, i) => {
        const last = i === cards.length - 1;
        return (
          <div
            key={card.id}
            className={`${base} ${card.bg} ${i > 0 ? "-mt-12 lg:-mt-[100px]" : ""} ${
              last ? "pb-0 lg:h-[991px]" : "overflow-hidden pb-24 lg:h-[710px]"
            }`}
          >
            <CardText card={card} centered={!!card.centered} />
            {card.visual}
          </div>
        );
      })}
    </section>
  );
}

const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(STACK_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

function useStackLayout() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(STACK_QUERY).matches,
    () => false,
  );
}

function StackedFeatures() {
  const outer = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);

  const step = () => {
    const o = outer.current!;
    return (o.offsetHeight - stage.current!.offsetHeight) / cards.length;
  };

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = outer.current!.getBoundingClientRect().top;
      // The first card opens as the section scrolls into view, before it pins.
      const next =
        top > window.innerHeight * 0.6
          ? -1
          : Math.min(cards.length - 1, Math.max(0, Math.floor((NAV_H - top) / step())));
      setActive(next);
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
  }, []);

  const open = useCallback((i: number) => {
    const sectionTop = outer.current!.getBoundingClientRect().top + window.scrollY;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: sectionTop - NAV_H + i * step() + 2,
      behavior: reduce ? "auto" : "smooth",
    });
  }, []);

  return (
    <section
      ref={outer}
      aria-label="Features"
      className="relative bg-white"
      style={{ height: `calc(100svh - ${NAV_H}px + ${cards.length * STEP_SVH}svh)` }}
    >
      <div
        ref={stage}
        className="sticky top-[76px] flex h-[calc(100svh-76px)] flex-col overflow-hidden [--bar:clamp(100px,calc((100svh-76px)*0.18),148px)] [--pad:clamp(32px,calc((100svh-76px)*0.087),72px)]"
      >
        {cards.map((card, i) => {
          const expanded = i === active;
          const afterOpen = i - 1 === active;
          const beforeOpen = i + 1 === active;
          // A card's top corners sit over the card above it, which extends by that radius to fill them.
          // Once pinned under the nav, the first bar has nothing behind it, so it stays square.
          const radius = expanded ? 100 : afterOpen || (i === 0 && active < 1) ? 30 : 0;
          return (
            <article
              key={card.id}
              className={`${card.bg} relative shrink-0 overflow-hidden transition-[flex-grow,flex-basis,margin-top,border-radius] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none`}
              style={{
                flexGrow: expanded ? 1 : 0,
                flexBasis: `calc(var(--bar) + ${beforeOpen ? 100 : 0}px)`,
                marginTop: i > 0 ? -radius : 0,
                borderTopLeftRadius: radius,
                borderTopRightRadius: radius,
              }}
            >
              <button
                type="button"
                onClick={() => open(i)}
                tabIndex={expanded ? -1 : 0}
                aria-hidden={expanded}
                className={`absolute inset-x-0 top-0 flex h-[var(--bar)] w-full items-center gap-4 px-24 text-left transition-opacity motion-reduce:transition-none ${
                  expanded
                    ? "pointer-events-none opacity-0 duration-200"
                    : "opacity-100 delay-300 duration-300"
                }`}
              >
                <BankBadge size={50} />
                <span
                  className={`font-display text-[32px] font-semibold leading-[46px] tracking-[-0.96px] ${card.barTitleColor}`}
                >
                  {card.title}
                </span>
              </button>

              <div
                ref={(el) => {
                  if (el) el.inert = !expanded;
                }}
                aria-hidden={!expanded}
                className={`absolute inset-0 px-[84px] pt-[var(--pad)] transition-[opacity,transform] motion-reduce:transition-none ${
                  expanded
                    ? "translate-y-0 opacity-100 delay-200 duration-500"
                    : "translate-y-6 opacity-0 duration-200"
                }`}
              >
                <CardText card={card} centered={false} />
                {card.stackedVisual ?? card.visual}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function Features() {
  return useStackLayout() ? <StackedFeatures /> : <StaticFeatures />;
}
