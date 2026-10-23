import Image from "next/image";
import Link from "next/link";

const stores = {
  apple: { name: "App Store", w: 23, h: 28, padding: "px-4" },
  google: { name: "Play Store", w: 23, h: 26, padding: "px-6" },
} as const;

export default function StoreButton({
  store,
  icon,
  tone,
}: {
  store: keyof typeof stores;
  icon: string;
  tone: "light" | "grey";
}) {
  const s = stores[store];
  return (
    <Link
      href="#"
      className={`${s.padding} ${
        tone === "light"
          ? "bg-light border-light hover:bg-white"
          : "bg-[#ebeef1] border-[#ebeef1] hover:bg-[#e0e4e8]"
      } flex items-center gap-4 rounded-full border transition-colors`}
    >
      <Image src={icon} alt="" width={s.w} height={s.h} />
      <span className="flex flex-col gap-1 py-2 text-shark">
        <span className="font-body text-xs leading-3">Available on</span>
        <span className="font-display text-[15px] font-bold leading-[15px]">
          {s.name}
        </span>
      </span>
    </Link>
  );
}
