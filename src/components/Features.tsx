import Image from "next/image";
import Link from "next/link";
import PhoneMockup from "./PhoneMockup";
import BillsStack from "./BillsStack";
import Coins from "./Coins";

const copy =
  "Receive payments from your employers, clients, social media platforms, and other businesses directly to your own foreign account – without hidden fees";

function BankBadge() {
  return (
    <span className="relative flex size-[60px] items-center justify-center rounded-[30px] bg-white">
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

function CardText({
  title,
  titleColor,
  bodyColor,
  centered = false,
}: {
  title: string;
  titleColor: string;
  bodyColor: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex w-full max-w-[599px] flex-col px-3 ${
        centered ? "mx-auto items-center text-center" : "items-start"
      }`}
    >
      <div className="pt-6">
        <BankBadge />
      </div>
      <h2
        className={`pt-12 font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[48px] sm:leading-[46px] sm:tracking-[-1.44px] ${titleColor}`}
      >
        {title}
      </h2>
      <p className={`pt-3.5 font-body text-lg leading-[1.6] sm:text-xl sm:leading-[30px] ${bodyColor}`}>
        {copy}
      </p>
      <div className="pt-6">
        <DownloadButton />
      </div>
    </div>
  );
}

const card =
  "relative rounded-t-[48px] px-3 pb-24 pt-[72px] sm:px-[84px] lg:rounded-t-[100px]";

export default function Features() {
  return (
    <section className="relative bg-white">
      <div className={`${card} overflow-hidden bg-tz-blue lg:h-[658px]`}>
        <CardText
          title="Instant Naira from your crypto. Arrives in seconds."
          titleColor="text-[#0d2831]"
          bodyColor="text-[#0d2831]"
        />
        <PhoneMockup />
      </div>

      <div className={`${card} -mt-12 overflow-hidden bg-black lg:h-[658px]`}>
        <CardText
          title="Pay your bills with ease"
          titleColor="text-[#e2e2e2]"
          bodyColor="text-[#9e9e9e]"
        />
        <BillsStack />
      </div>

      <div className={`${card} -mt-12 bg-tz-red pb-0 lg:h-[991px]`}>
        <CardText
          title="Send stablecoins to anyone, anywhere"
          titleColor="text-[#e2e2e2]"
          bodyColor="text-white"
          centered
        />
        <Coins />
      </div>
    </section>
  );
}
