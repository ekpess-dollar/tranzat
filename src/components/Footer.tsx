import Image from "next/image";
import Link from "next/link";
import StoreButton from "./StoreButton";

const columns = [
  { title: "Features", width: "sm:w-[142px]", links: ["Crypto Deposit", "Naira Transfer", "Bills Payments"] },
  {
    title: "Company",
    width: "sm:w-[192px]",
    links: ["About Us", "FAQs", "Blog", "Terms and Conditions", "Privacy Policy"],
  },
];

const pageLinks: Record<string, string> = {
  "About Us": "/about",
  FAQs: "/faq",
  "Terms and Conditions": "/terms",
  "Privacy Policy": "/privacy",
};

const linkClass =
  "font-body text-[15px] font-[459] leading-[30px] tracking-[0.3px] text-dark/80 transition-colors hover:text-dark";
const titleClass = "font-display text-[15px] font-bold uppercase text-dark";

export default function Footer() {
  return (
    <footer className="bg-white px-4 pb-[97px] pt-[100px] sm:px-8">
      <div className="mx-auto flex max-w-[1078px] flex-col gap-[61px]">
        <div className="flex flex-col items-center gap-[59px]">
          <div className="flex max-w-[514px] flex-col items-center gap-9">
            <p className="text-balance text-center font-display text-[28px] font-bold leading-[1.1] tracking-[-0.7px] text-dark sm:text-[35px] sm:leading-[38px]">
              What are you waiting for? Download the Tranzat App &amp; get
              started now!
            </p>
            <div className="flex flex-wrap justify-center gap-y-3">
              <div className="px-3">
                <StoreButton store="apple" icon="/assets/appstore-dark.svg" tone="grey" />
              </div>
              <div className="px-3">
                <StoreButton store="google" icon="/assets/playstore-dark.svg" tone="grey" />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-start gap-x-[157px] gap-y-10 sm:justify-center">
            {columns.map((col) => (
              <nav key={col.title} className={`flex flex-col gap-4 ${col.width}`}>
                <span className={titleClass}>{col.title}</span>
                {col.links.map((l) => (
                  <Link key={l} href={pageLinks[l] ?? "#"} className={linkClass}>
                    {l}
                  </Link>
                ))}
              </nav>
            ))}
            <div className="flex flex-col gap-4">
              <span className={titleClass}>Talk to us</span>
              <span className={`${linkClass} select-all`}>support@tranzat.com</span>
              <span className={`${linkClass} select-all`}>+234 967 332 84546</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[38px]">
          <div className="h-px bg-[#0f528b] opacity-10" />
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Image src="/assets/logo-footer.svg" alt="Tranzat" width={137} height={64} />
            <p className="font-body text-sm leading-[14px] text-dark">
              © 2026 Tranzat Inc. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3.5">
              <Link href="#" aria-label="Facebook">
                <Image src="/assets/facebook.svg" alt="" width={39} height={39} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="relative size-[39px] rounded-[19.5px] before:absolute before:inset-0 before:rounded-[19.5px] before:border before:border-dark before:opacity-25"
              >
                <Image
                  src="/assets/linkedin.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="absolute left-[13px] top-3"
                />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Image src="/assets/twitter.svg" alt="" width={39} height={39} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
