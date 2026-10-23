import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ZigzagTexture from "@/components/ZigzagTexture";
import BankBadge from "@/components/BankBadge";
import DownloadButton from "@/components/DownloadButton";
import PhoneMockup from "@/components/PhoneMockup";
import Coins from "@/components/Coins";

export const metadata: Metadata = {
  title: "About Tranzat — Where crypto meets everyday life",
  description:
    "Tranzat makes it possible for people to use their crypto in the real world, across Africa.",
};

const values = [
  {
    title: "Easy Access",
    body: "We believe everyone should be able to use their digital assets easily, no matter where they live. This is why Tranzat was built.",
  },
  {
    title: "Simple Design",
    body: "Finance can get complicated sometimes, so we made sure our app is user friendly for all, irrespective of age or demographics.",
  },
  {
    title: "Impactful Innovation",
    body: "We embrace new technology, but only when it creates real value. Our innovation is driven by usefulness, not hype.",
  },
  {
    title: "Real-World Solution",
    body: "Crypto should solve real problems. Everything we build is aimed at helping people pay real bills, make real purchases, and participate in their local economy.",
  },
];

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-body text-sm font-medium uppercase tracking-[0.14em] ${className}`}>
      {children}
    </p>
  );
}

const h2 =
  "text-balance font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[48px] sm:leading-[52px] sm:tracking-[-1.44px]";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-navy px-4 pb-[180px] pt-24 lg:pb-[220px] lg:pt-[140px]">
          <ZigzagTexture />
          <div className="relative z-10 mx-auto flex max-w-[880px] flex-col items-center gap-6 text-center">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-body text-sm font-medium text-white">
              The Tranzat Story
            </span>
            <h1 className="text-balance font-display text-[44px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-[64px] sm:leading-[72px] sm:tracking-[-2.56px]">
              Where crypto meets everyday life
            </h1>
            <p className="max-w-[640px] font-body text-lg leading-[1.6] text-muted lg:text-[22px] lg:leading-9">
              Tranzat is a company that makes it possible for people to use
              their crypto in the real world, across Africa.
            </p>
          </div>
        </section>

        <section className="relative -mt-[100px] rounded-t-[48px] bg-white px-4 pb-[120px] pt-20 sm:px-8 lg:rounded-t-[100px] lg:pt-[120px]">
          <div className="mx-auto grid max-w-[1248px] gap-14 lg:grid-cols-2 lg:gap-24">
            <div className="flex min-w-0 flex-col gap-5">
              <Eyebrow className="text-shark/60">Our Platform</Eyebrow>
              <h2 className={`${h2} text-dark`}>
                We bridge the gap between crypto and traditional finance,
                allowing seamless crypto-to-fiat transactions without delay.
              </h2>
              <div className="relative mt-6 aspect-[1042/588] w-full max-w-[480px] overflow-hidden rounded-[31px] border-b-8 border-r-8 border-black">
                <Image
                  src="/assets/spend-card2.png"
                  alt="Airtime, internet, electricity and TV payments in the Tranzat app"
                  fill
                  sizes="480px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-5 lg:pt-11">
              <h3 className="font-display text-[28px] font-bold leading-9 tracking-[-0.84px] text-shark">
                With Tranzat,
              </h3>
              <p className="font-body text-xl leading-[1.6] text-shark lg:text-[22px] lg:leading-9">
                Digital assets are made easy and fast to spend in the real
                world, no matter where you are on the globe.
              </p>
              <p className="max-w-[560px] font-body text-lg font-[455] leading-[30px] tracking-[0.2px] text-shark/75 lg:text-xl">
                Tranzat is the result of innovative thinking driven by the need
                to create a truly user-friendly platform that reflects the real
                purpose of digital assets in everyday life: enabling people to
                spend and send them easily across borders, without delays.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-t-[48px] bg-tz-blue px-3 pb-[144px] pt-[72px] sm:px-[84px] lg:min-h-[820px] lg:rounded-t-[100px] lg:pb-[196px]">
          <div className="relative z-10 flex w-full max-w-[599px] flex-col items-start gap-0 px-3">
            <div className="pt-6">
              <BankBadge size={60} />
            </div>
            <h2 className={`${h2} pt-12 text-[#0d2831]`}>Why Tranzat?</h2>
            <p className="pt-4 font-body text-xl leading-[1.6] text-[#0d2831] lg:text-[22px] lg:leading-9">
              We take care of the automatic conversion while you focus on what
              matters: making quick and easy payments in your local currency.
            </p>
            <Eyebrow className="pt-8 text-[#0d2831]/70">Built on two core values</Eyebrow>
            <div className="flex gap-3 pt-3">
              {["Simple", "Fast"].map((v) => (
                <span
                  key={v}
                  className="rounded-full bg-white px-6 py-2 font-display text-[28px] font-bold leading-10 tracking-[-0.84px] text-[#0d2831]"
                >
                  {v}
                </span>
              ))}
            </div>
            <p className="pt-8 font-body text-lg leading-[30px] text-[#0d2831] sm:text-xl">
              Our platform makes it possible for anyone to spend, send and enjoy
              the true benefit of being digitally free with your assets. Whether
              you&apos;re an individual who wants to spend crypto daily or send
              more money globally, we make that possible without any delay.
            </p>
          </div>
          <PhoneMockup />
        </section>

        <section className="relative -mt-12 rounded-t-[48px] bg-black px-4 pb-24 pt-20 sm:px-[84px] lg:-mt-[100px] lg:rounded-t-[100px] lg:pb-[120px] lg:pt-[96px]">
          <div className="mx-auto max-w-[1272px] px-3">
            <div className="flex flex-col gap-4">
              <BankBadge size={60} />
              <h2 className={`${h2} pt-8 text-[#e2e2e2]`}>Our Core Values</h2>
              <p className="font-body text-lg leading-[30px] text-[#9e9e9e] sm:text-xl">
                These are the values that keep us going
              </p>
            </div>
            <ul className="mt-14 grid gap-5 md:grid-cols-2">
              {values.map((v) => (
                <li
                  key={v.title}
                  className="flex flex-col gap-3 rounded-[38px] border-y border-[#e2e4e9]/70 bg-white/10 p-8 lg:p-10"
                >
                  <h3 className="font-display text-[28px] font-semibold leading-9 tracking-[-0.84px] text-white">
                    {v.title}
                  </h3>
                  <p className="max-w-[480px] font-body text-lg leading-[30px] text-[#9e9e9e]">
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-4 py-[120px]">
          <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
            <BankBadge size={60} className="ring-1 ring-[#e2e4e9]" />
            <h2 className={`${h2} pt-4 text-dark`}>
              Built on trust, backed by compliance
            </h2>
            <p className="max-w-[620px] font-body text-lg leading-[30px] text-dark/75 sm:text-xl">
              From sign-up to every transaction, your personal data is
              safeguarded under Nigeria&apos;s data protection laws and overseen by
              the NDPC.
            </p>
          </div>
        </section>

        <section className="relative rounded-t-[48px] bg-tz-red px-4 pt-[72px] lg:h-[780px] lg:rounded-t-[100px]">
          <div className="relative z-10 mx-auto flex max-w-[620px] flex-col items-center gap-4 text-center">
            <Eyebrow className="pt-6 text-white/80">Zero complexity</Eyebrow>
            <h2 className={`${h2} text-[#e2e2e2]`}>Spend your crypto your way</h2>
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
