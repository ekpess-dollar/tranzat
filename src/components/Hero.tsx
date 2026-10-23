import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-navy min-h-[900px] relative overflow-hidden flex items-center px-6 lg:px-[5.83%]">
      {/* Background phone graphic */}
      <Image
        src="/assets/hero-phone.png"
        alt="Tranzat app"
        width={760}
        height={760}
        className="absolute right-[-0.21%] top-[145px] w-[52%] max-w-[760px] object-contain pointer-events-none hidden lg:block"
        priority
      />

      <div className="relative z-10 max-w-[660px] py-[150px]">
        <h1 className="font-display font-extrabold text-white text-[clamp(40px,4.44vw,64px)] tracking-[-2.56px] leading-[1.125] mb-6">
          Welcome to the future
          <br />
          of Crypto Spending.
        </h1>

        <p className="font-body text-muted text-[clamp(16px,1.53vw,22px)] leading-[1.636] max-w-[608px] mb-8">
          Open your Spenda wallet, deposit crypto, and spend in Naira instantly,
          no complicated steps, no waiting.
        </p>

        <div className="flex flex-wrap gap-3 mb-[88px]">
          <StoreButton
            icon="/assets/appstore-hero.svg"
            iconSize={{ w: 23, h: 28 }}
            store="App Store"
            className="px-4"
          />
          <StoreButton
            icon="/assets/playstore-dark.svg"
            iconSize={{ w: 23, h: 26 }}
            store="Play Store"
            className="px-6"
          />
        </div>

        <Image
          src="/assets/mouse.svg"
          alt="Scroll down"
          width={24}
          height={39}
        />
      </div>
    </section>
  );
}

function StoreButton({
  icon,
  iconSize,
  store,
  className = "",
}: {
  icon: string;
  iconSize: { w: number; h: number };
  store: string;
  className?: string;
}) {
  return (
    <Link
      href="#"
      className={`bg-light border border-light rounded-full flex items-center gap-4 py-2 hover:bg-white transition-colors ${className}`}
    >
      <Image src={icon} alt={store} width={iconSize.w} height={iconSize.h} />
      <div>
        <span className="block font-body text-shark text-xs leading-none">
          Available on
        </span>
        <span className="block font-display font-bold text-shark text-[15px] leading-none mt-0.5">
          {store}
        </span>
      </div>
    </Link>
  );
}
