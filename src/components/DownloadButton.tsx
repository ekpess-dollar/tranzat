import Image from "next/image";
import Link from "next/link";

export default function DownloadButton({ label = "Download Tranzat" }: { label?: string }) {
  return (
    <Link
      href="#"
      className="inline-flex h-12 items-center gap-[21px] rounded-lg border border-light bg-light pl-6 pr-[26px] font-display text-base font-semibold leading-[30px] tracking-[-0.32px] text-black transition-colors hover:bg-white"
    >
      {label}
      <Image src="/assets/arrow.svg" alt="" width={15} height={15} />
    </Link>
  );
}
