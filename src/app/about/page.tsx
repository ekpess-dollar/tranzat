import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";
import Coins from "@/components/Coins";
import ValuesPanels from "./ValuesPanels";
import TrustSeal from "./TrustSeal";
import WordRotator from "./WordRotator";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Tranzat — Where crypto meets everyday life",
  description:
    "Tranzat makes it possible for people to use their crypto in the real world, across Africa.",
};

const moments = ["everyday life", "rent day", "airtime", "school fees", "groceries", "the weekend"];
const tokens = ["btc", "eth", "usdt", "usdc", "bnb", "trx"];
const spends = ["Airtime", "Data", "Electricity", "TV", "Bank transfers", "Virtual cards", "Bills"];

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-body text-sm font-semibold uppercase tracking-[0.16em] ${className}`}>
      {children}
    </p>
  );
}

function Token({ name, className = "" }: { name: string; className?: string }) {
  return (
    <Image
      src={`/about/tokens/${name}.svg`}
      alt=""
      width={32}
      height={32}
      className={`inline-block rounded-full ring-[3px] ring-white ${className}`}
    />
  );
}

function Screen({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[46px] border-[10px] border-[#0b0b10] bg-[#0b0b10] shadow-[0_40px_80px_-20px_rgba(16,1,52,0.55)] ${className}`}
    >
      <Image src={src} alt={alt} width={393} height={852} className="block h-auto w-full rounded-[36px]" />
    </div>
  );
}

function Ribbon({
  tone,
  direction,
  className = "",
}: {
  tone: "blue" | "red";
  direction: "left" | "right";
  className?: string;
}) {
  const items = [...spends, ...spends];
  return (
    <div
      aria-hidden
      className={`absolute left-[-5%] w-[110%] overflow-hidden py-4 ${
        tone === "blue" ? "bg-tz-blue text-navy" : "bg-tz-red text-white"
      } ${className}`}
    >
      <div
        className={`flex w-max items-center gap-8 ${
          direction === "left" ? styles.ribbonLeft : styles.ribbonRight
        }`}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-8">
            {items.map((s, i) => (
              <span key={`${s}-${i}`} className="flex items-center gap-8">
                <span
                  className={`whitespace-nowrap font-display text-[40px] font-extrabold uppercase leading-none tracking-[-0.02em] lg:text-[56px] ${
                    i % 2 ? styles.outline : ""
                  }`}
                >
                  {s}
                </span>
                <Image
                  src={`/about/tokens/${tokens[i % tokens.length]}.svg`}
                  alt=""
                  width={40}
                  height={40}
                  className="size-9 lg:size-11"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const display =
  "text-balance font-display font-bold tracking-[-0.035em]";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        {/* Hero */}
        <section className="relative bg-navy">
          <div aria-hidden className={`pointer-events-none absolute inset-0 ${styles.dots}`} />
          <div className="relative mx-auto grid max-w-[1272px] items-end gap-12 px-4 pt-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-24">
            <div className="flex flex-col gap-7 pb-10 lg:pb-[140px]">
              <span className="w-fit rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-body text-sm font-medium text-white">
                The Tranzat Story
              </span>
              <h1 className="font-display text-[46px] font-extrabold leading-[1] tracking-[-0.045em] text-white sm:text-[64px] lg:text-[80px]">
                <span className="sr-only">Where crypto meets everyday life</span>
                <span aria-hidden className="block">
                  Where crypto
                  <br />
                  meets <WordRotator words={moments} />
                </span>
              </h1>
              <p className="max-w-[560px] font-body text-lg leading-[1.6] text-muted lg:text-[22px] lg:leading-9">
                Tranzat is a company that makes it possible for people to use
                their crypto in the real world, across Africa.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex -space-x-2.5">
                  {tokens.map((t) => (
                    <Token key={t} name={t} className="size-10 ring-navy" />
                  ))}
                </div>
                <p className="font-body text-sm leading-5 text-white/70">
                  BTC, ETH, USDT and 10+ more,
                  <br />
                  spent as Naira.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:justify-self-end">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full bg-tz-blue">
                <div aria-hidden className="absolute inset-[9%] rounded-t-full border-2 border-navy/10" />
                <div aria-hidden className="absolute inset-[20%] rounded-t-full border-2 border-navy/10" />
                <Image
                  src="/about/everyday-spender.png"
                  alt="A smiling woman holding a bank card in one hand and her phone in the other"
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover object-top pt-[8%]"
                />
              </div>

              <div
                className={`absolute -left-4 top-[22%] flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[0_20px_40px_-12px_rgba(16,1,52,0.45)] sm:-left-12 ${styles.float}`}
              >
                <div className="flex -space-x-2">
                  <Token name="usdt" className="size-8" />
                  <span className="flex size-8 items-center justify-center rounded-full bg-navy font-display text-sm font-extrabold text-white ring-[3px] ring-white">
                    ₦
                  </span>
                </div>
                <div className="leading-tight">
                  <p className="font-display text-[15px] font-bold text-dark">USDT → NGN</p>
                  <p className="font-body text-xs text-dark/60">Converted automatically</p>
                </div>
              </div>

              <div
                className={`absolute -right-2 bottom-[14%] flex items-center gap-3 rounded-2xl bg-navy p-3 pr-5 text-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 sm:-right-8 ${styles.floatLate}`}
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-tz-blue text-lg font-bold text-navy">
                  ✓
                </span>
                <div className="leading-tight">
                  <p className="font-display text-[15px] font-bold">Recharge successful</p>
                  <p className="font-body text-xs text-white/60">₦7,000 airtime sent</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Everyday spending ribbons */}
        <section aria-label="Things you can pay for with Tranzat" className="relative h-[200px] bg-white lg:h-[250px]">
          <Ribbon tone="red" direction="right" className="top-[38%] rotate-[3deg]" />
          <Ribbon tone="blue" direction="left" className="top-[22%] -rotate-[2.5deg] shadow-[0_18px_30px_-18px_rgba(16,1,52,0.5)]" />
        </section>

        {/* Platform */}
        <section className="bg-white px-4 pb-[120px] pt-16 sm:px-8 lg:pt-24">
          <div className="mx-auto max-w-[1180px]">
            <Eyebrow className="text-tz-red">Our Platform</Eyebrow>
            <p className={`${display} mt-6 text-[34px] leading-[1.12] text-dark sm:text-[46px] lg:text-[58px] lg:leading-[1.08]`}>
              We bridge the gap between crypto{" "}
              <span className="inline-flex -space-x-[0.22em] align-[-0.1em]">
                {["btc", "eth", "usdt"].map((t) => (
                  <Token key={t} name={t} className="size-[0.85em]" />
                ))}
              </span>{" "}
              and traditional finance{" "}
              <span className="inline-flex size-[0.85em] items-center justify-center rounded-full bg-navy align-[-0.1em] ring-[3px] ring-white">
                <span className="text-[0.55em] font-extrabold leading-none text-white">₦</span>
              </span>
              <span className="text-dark/35">
                , allowing seamless crypto-to-fiat transactions without delay.
              </span>
            </p>

            <div className="mt-16 grid gap-8 border-t border-dark/10 pt-10 md:grid-cols-[0.6fr_1fr_1fr] md:gap-12">
              <h2 className="font-display text-[28px] font-bold leading-9 tracking-[-0.84px] text-dark">
                With Tranzat,
              </h2>
              <p className="font-body text-xl leading-[1.55] text-dark">
                Digital assets are made easy and fast to spend in the real
                world, no matter where you are on the globe.
              </p>
              <p className="font-body text-lg leading-[1.65] text-dark/70">
                Tranzat is the result of innovative thinking driven by the need
                to create a truly user-friendly platform that reflects the real
                purpose of digital assets in everyday life: enabling people to
                spend and send them easily across borders, without delays.
              </p>
            </div>
          </div>
        </section>

        {/* Why Tranzat */}
        <section className="bg-light px-4 py-[120px] sm:px-8">
          <div className="mx-auto max-w-[1272px]">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
              <div>
                <Eyebrow className="text-dark/50">Why Tranzat?</Eyebrow>
                <h2 className={`${display} mt-5 text-[36px] leading-[1.05] text-dark sm:text-[52px]`}>
                  We take care of the automatic conversion.
                </h2>
              </div>
              <p className="max-w-[520px] font-body text-xl leading-[1.55] text-dark/75 lg:pb-2">
                So you can focus on what matters: making quick and easy payments
                in your local currency.
              </p>
            </div>

            <Eyebrow className="mt-16 text-dark/50">Built on two core values</Eyebrow>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <article className="relative flex flex-col overflow-hidden rounded-[40px] sm:min-h-[560px] bg-tz-blue p-8 sm:p-12">
                <h3 className="font-display text-[80px] font-extrabold leading-[0.85] tracking-[-0.06em] text-navy sm:text-[140px]">
                  Simple<span className="text-white">.</span>
                </h3>
                <p className="mt-6 max-w-[280px] font-body text-lg leading-[1.6] text-[#0d2831]">
                  Our platform makes it possible for anyone to spend, send and
                  enjoy the true benefit of being digitally free with your
                  assets.
                </p>
                <Screen
                  src="/about/screen-home.png"
                  alt="Tranzat home screen with balance, deposit and transfer buttons, and bill shortcuts"
                  className="relative -mb-44 ml-auto mr-4 mt-10 w-[230px] rotate-[7deg] sm:absolute sm:-bottom-40 sm:right-10 sm:m-0 sm:w-[260px]"
                />
              </article>

              <article className="relative flex flex-col overflow-hidden rounded-[40px] sm:min-h-[560px] bg-navy p-8 sm:p-12">
                <h3 className="font-display text-[80px] font-extrabold leading-[0.85] tracking-[-0.06em] text-white sm:text-[140px]">
                  Fast<span className="text-tz-blue">.</span>
                </h3>
                <p className="mt-6 max-w-[280px] font-body text-lg leading-[1.6] text-white/75">
                  Whether you&apos;re an individual who wants to spend crypto
                  daily or send more money globally, we make that possible
                  without any delay.
                </p>
                <Screen
                  src="/about/screen-success.png"
                  alt="Tranzat confirmation screen reading Recharge Successful"
                  className="relative -mb-44 ml-auto mr-4 mt-10 w-[230px] rotate-[4deg] sm:absolute sm:-bottom-40 sm:right-10 sm:m-0 sm:w-[260px]"
                />
              </article>
            </div>
          </div>
        </section>

        {/* Core values */}
        <ValuesPanels
          heading={
            <div className="mb-8 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
              <h2 className={`${display} text-[36px] leading-[1.05] text-dark sm:text-[52px]`}>
                Our Core Values
              </h2>
              <p className="font-body text-lg text-dark/60">These are the values that keep us going</p>
            </div>
          }
        />

        {/* Trust */}
        <section className="relative overflow-hidden bg-white px-4 py-[120px] sm:px-8">
          <div className="relative mx-auto grid max-w-[1272px] items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow className="text-tz-red">Data protection</Eyebrow>
              <h2 className={`${display} mt-5 text-[36px] leading-[1.05] text-dark sm:text-[52px]`}>
                Built on trust, backed by compliance
              </h2>
              <p className="mt-6 max-w-[520px] font-body text-xl leading-[1.6] text-dark/70">
                From sign-up to every transaction, your personal data is
                safeguarded under Nigeria&apos;s data protection laws and
                overseen by the NDPC.
              </p>
            </div>
            <div className="relative mx-auto h-[460px] w-full max-w-[460px]">
              <Screen
                src="/about/screen-security.png"
                alt="Tranzat security screen asking for a transaction PIN"
                className="absolute right-0 top-0 w-[240px] rotate-[5deg] sm:w-[260px]"
              />
              <TrustSeal className="absolute bottom-0 left-0 w-[200px] drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)] sm:w-[240px]" />
            </div>
          </div>
        </section>

        {/* CTA (kept from the previous version) */}
        <section className="relative rounded-t-[48px] bg-tz-red px-4 pt-[72px] lg:h-[780px] lg:rounded-t-[100px]">
          <div className="relative z-10 mx-auto flex max-w-[620px] flex-col items-center gap-4 text-center">
            <p className="pt-6 font-body text-sm font-medium uppercase tracking-[0.14em] text-white/80">
              Zero complexity
            </p>
            <h2 className="text-balance font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#e2e2e2] sm:text-[48px] sm:leading-[52px] sm:tracking-[-1.44px]">
              Spend your crypto your way
            </h2>
            <div className="pt-4">
              <DownloadButton label="Download Tranzat today" />
            </div>
          </div>
          <Coins />
        </section>
        <div className="h-[60px] bg-white" />
      </main>
      <Footer />
    </>
  );
}
