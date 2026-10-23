import Image from "next/image";
import StoreButton from "./StoreButton";
import ZigzagTexture from "./ZigzagTexture";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy lg:h-[900px]">
      <ZigzagTexture />

      <div className="relative z-10 px-4 pt-20 lg:absolute lg:inset-x-[5.83%] lg:inset-y-12 lg:flex lg:items-center lg:px-3 lg:pb-[150.71px] lg:pt-[149.6px]">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-[40px] font-extrabold leading-[1.125] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-2.56px]">
            Welcome to the future <br className="hidden sm:block" />
            of Crypto Spending.
          </h1>
          <p className="max-w-[608px] pt-2 font-body text-lg leading-[1.6] text-muted lg:text-[22px] lg:leading-9">
            Open your Tranzat wallet, deposit crypto, and spend in Naira
            instantly, no complicated steps, no waiting.
          </p>
          <div className="-mx-3 flex flex-wrap gap-y-3">
            <div className="px-3 pt-6">
              <StoreButton store="apple" icon="/assets/appstore-hero.svg" tone="light" />
            </div>
            <div className="px-3 pt-6">
              <StoreButton store="google" icon="/assets/playstore-hero.svg" tone="light" />
            </div>
          </div>
          <div className="hidden pt-[88px] lg:block">
            <Image src="/assets/mouse.svg" alt="" width={24} height={39} />
          </div>
        </div>
      </div>

      <div className="relative mx-auto -mb-24 mt-10 aspect-square w-[min(100%,560px)] lg:absolute lg:left-[47.64%] lg:right-[-0.21%] lg:top-[145px] lg:m-0 lg:w-auto lg:max-w-none">
        <Image
          src="/assets/hero-phone.png"
          alt="The Tranzat app showing a ₦300,050,000.00 balance"
          fill
          sizes="(min-width: 1024px) 53vw, 560px"
          className="pointer-events-none object-contain"
          priority
        />
      </div>
    </section>
  );
}
