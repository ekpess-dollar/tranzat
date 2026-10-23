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
    <section className="bg-white py-12 pb-18">
      <div className="max-w-[1104px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-0">
        {steps.map((step) => (
          <div key={step.title} className="pt-12 px-6">
            <Image
              src={step.img}
              alt={step.title}
              width={320}
              height={212}
              className="w-full max-w-[320px] h-[212px] object-cover rounded-[31px] border-r-8 border-b-8 border-black"
            />
            <h3 className="font-display font-bold text-[32px] text-shark tracking-[-1.28px] leading-[1.25] mt-4 mb-3">
              {step.title}
            </h3>
            <p className="font-body text-[20px] text-shark leading-[1.5] tracking-[0.2px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
