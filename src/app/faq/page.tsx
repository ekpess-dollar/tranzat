import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FaqExplorer from "./FaqExplorer";
import styles from "@/components/legal/legal.module.css";

export const metadata: Metadata = {
  title: "FAQs — Tranzat",
  description: "Answers to common questions about Tranzat: deposits, cards, wallet addresses, security and referrals.",
};

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main className="relative bg-navy">
        <div aria-hidden className={`pointer-events-none absolute inset-x-0 top-0 h-[640px] ${styles.dots}`} />
        <section className="relative px-4 pt-20 text-center sm:px-8 lg:pt-24">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-body text-sm font-medium text-white">
            Help centre
          </span>
          <h1 className="mx-auto mt-6 max-w-[820px] text-balance font-display text-[48px] font-extrabold leading-[1] tracking-[-0.045em] text-white sm:text-[72px]">
            Questions, answered<span className="text-tz-blue">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] font-body text-lg leading-[1.6] text-muted lg:text-xl">
            Everything you need to know about depositing crypto, spending Naira and using your
            Tranzat card.
          </p>
          <FaqExplorer />
        </section>
      </main>
      <Footer />
    </>
  );
}
