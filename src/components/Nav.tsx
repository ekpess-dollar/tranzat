import Image from "next/image";
import Link from "next/link";

const links = ["Products", "About", "Blog", "FAQ"];
const hrefs: Record<string, string> = { About: "/about", FAQ: "/faq" };

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 h-[76px] bg-navy">
      <nav className="mx-auto flex h-full max-w-[1440px] items-center gap-4 px-4 py-4 lg:px-[92px]">
        <Link href="/" className="shrink-0" aria-label="Tranzat home">
          <Image src="/assets/logo.svg" alt="Tranzat" width={94} height={44} priority />
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-6 md:flex">
          {links.map((item) => (
            <li key={item}>
              <Link
                href={hrefs[item] ?? "#"}
                className="flex items-center gap-2 p-2 font-body text-sm leading-7 text-white transition-opacity hover:opacity-75"
              >
                {item}
                {item === "Products" && (
                  <Image src="/assets/chevron.svg" alt="" width={10} height={6} />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className="ml-auto whitespace-nowrap rounded-lg border border-light bg-light px-4 py-1.5 font-display text-sm font-semibold leading-7 tracking-[-0.42px] text-black transition-colors hover:bg-white sm:px-6 md:ml-0"
        >
          Download Tranzat Now
        </Link>
      </nav>
    </header>
  );
}
