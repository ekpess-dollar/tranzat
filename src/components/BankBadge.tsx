import Image from "next/image";

export type BadgeIcon = { src: string; width: number; height: number };

const BANK: BadgeIcon = { src: "/assets/bank-glyph.svg", width: 23.54, height: 21.13 };

export default function BankBadge({
  size,
  icon = BANK,
  className = "",
}: {
  size: 50 | 60;
  icon?: BadgeIcon;
  className?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-[30px] bg-white ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={icon.src}
        alt=""
        width={Math.ceil(icon.width)}
        height={Math.ceil(icon.height)}
        style={{ width: icon.width, height: icon.height }}
      />
    </span>
  );
}
