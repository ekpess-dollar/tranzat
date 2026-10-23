import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-navy h-[76px] sticky top-0 z-50 flex items-center justify-center px-5 lg:px-20">
      <div className="flex items-center gap-4 w-full max-w-[1440px]">
        <Link href="/" className="shrink-0">
          <Image src="/assets/logo.svg" alt="Tranzat" width={94} height={44} />
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-center gap-1">
          {["Products", "About", "Blog", "FAQ"].map((item) => (
            <Link
              key={item}
              href="#"
              className="font-body text-white text-sm px-3 py-2 flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              {item}
              {item === "Products" && (
                <Image src="/assets/chevron.svg" alt="" width={10} height={6} />
              )}
            </Link>
          ))}
        </div>

        <Link
          href="#"
          className="ml-auto bg-light border border-light rounded-lg px-6 py-1.5 font-display font-semibold text-sm text-dark tracking-[-0.42px] leading-7 whitespace-nowrap hover:bg-white transition-colors"
        >
          Download Tranzat Now
        </Link>
      </div>
    </nav>
  );
}
