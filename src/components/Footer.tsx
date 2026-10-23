import Image from "next/image";
import Link from "next/link";

const features = ["Crypto Deposit", "Naira Transfer", "Bills Payments"];
const company = [
  "About Us",
  "FAQs",
  "Blog",
  "Terms and Conditions",
  "Privacy Policy",
];

export default function Footer() {
  return (
    <footer className="bg-white px-4 lg:px-[182px] pt-[100px] pb-[97px]">
      {/* CTA */}
      <div className="flex flex-col items-center text-center max-w-[514px] mx-auto mb-[59px] gap-9">
        <p className="font-display font-bold text-[35px] text-dark tracking-[-0.7px] leading-[1.086]">
          What are you waiting for? Download the Tranzat App &amp; get started
          now!
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <StoreBtn
            icon="/assets/appstore-dark.svg"
            iconSize={{ w: 23, h: 28 }}
            store="App Store"
            className="px-4"
          />
          <StoreBtn
            icon="/assets/playstore-dark.svg"
            iconSize={{ w: 23, h: 26 }}
            store="Play Store"
            className="px-6"
          />
        </div>
      </div>

      {/* Nav links */}
      <div className="flex flex-wrap gap-8 lg:gap-[157px] justify-start lg:justify-center mb-[59px]">
        <div className="flex flex-col gap-4">
          <span className="font-display font-bold text-[15px] text-dark uppercase tracking-[0.5px]">
            Features
          </span>
          {features.map((f) => (
            <Link
              key={f}
              href="#"
              className="font-body text-[15px] text-dark opacity-80 leading-[30px] tracking-[0.3px] hover:opacity-100 transition-opacity"
            >
              {f}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-display font-bold text-[15px] text-dark uppercase tracking-[0.5px]">
            Company
          </span>
          {company.map((c) => (
            <Link
              key={c}
              href="#"
              className="font-body text-[15px] text-dark opacity-80 leading-[30px] tracking-[0.3px] hover:opacity-100 transition-opacity"
            >
              {c}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-display font-bold text-[15px] text-dark uppercase tracking-[0.5px]">
            Talk to us
          </span>
          <span className="font-body text-[15px] text-dark opacity-80 leading-[30px] tracking-[0.3px]">
            support@tranzat.com
          </span>
          <span className="font-body text-[15px] text-dark opacity-80 leading-[30px] tracking-[0.3px]">
            +234 967 332 84546
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#0f528b] h-px opacity-10 mb-[38px]" />

      {/* Bottom bar */}
      <div className="flex items-center justify-between flex-wrap gap-6">
        <Image
          src="/assets/logo-footer.svg"
          alt="Tranzat"
          width={137}
          height={64}
        />
        <p className="font-body text-sm text-dark text-center">
          © 2026 Tranzat Inc. All Rights Reserved.
        </p>
        <div className="flex gap-3.5 items-center">
          <Image
            src="/assets/facebook.svg"
            alt="Facebook"
            width={39}
            height={39}
          />
          <div className="w-[39px] h-[39px] border border-dark/25 rounded-full flex items-center justify-center">
            <Image
              src="/assets/linkedin.svg"
              alt="LinkedIn"
              width={14}
              height={14}
            />
          </div>
          <Image
            src="/assets/twitter.svg"
            alt="Twitter / X"
            width={39}
            height={39}
          />
        </div>
      </div>
    </footer>
  );
}

function StoreBtn({
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
      className={`bg-[#ebeef1] border border-[#ebeef1] rounded-full flex items-center gap-4 py-2 hover:bg-light transition-colors ${className}`}
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
