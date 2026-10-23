import Image from "next/image";

const steps = [
  {
    img: "/assets/spend-card.png",
    title: "Deposit",
    desc: "Deposit BTC, ETH, USDT and 10+ other cryptocurrencies directly into your Spenda wallet from any external wallet.",
  },
  {
    img: "/assets/spend-card.png",
    title: "Convert",
    desc: "Automated crypto-to-Naira conversion at competitive market rates. No manual steps, instant conversion with zero hidden fees.",
  },
  {
    img: "/assets/spend-card2.png",
    title: "Spend",
    desc: "Transfer Naira to any Nigerian bank account in seconds. Buy airtime, pay bills, or spend with your virtual Visa card worldwide.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white pb-[72px] pt-12">
      <div className="mx-auto grid max-w-[1104px] grid-cols-1 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col gap-2 px-6 pt-12">
            <div className="relative aspect-[320/212] w-full max-w-[320px] overflow-hidden rounded-[31px] border-b-8 border-r-8 border-black">
              <Image
                src={step.img}
                alt=""
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
            <h3 className="pt-4 font-display text-[32px] font-bold leading-10 tracking-[-1.28px] text-shark">
              {step.title}
            </h3>
            <p className="font-body text-xl font-[455] leading-[30px] tracking-[0.2px] text-shark">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
