import Image from "next/image";

export default function BankBadge({
  size,
  className = "",
}: {
  size: 50 | 60;
  className?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-[30px] bg-white ${className}`}
      style={{ width: size, height: size }}
    >
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
