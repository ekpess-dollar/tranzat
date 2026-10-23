import Image from "next/image";

const labels = ["Airtime", "Internet", "Electricity", "TV"];

// Painted back to front. `left`/`top` are the Figma positions inside the 1440px card;
// `mx`/`my` lay the same stack out inside a compact box below the copy on small screens.
const rows = [
  { left: "61.02%", top: 204.37, mx: 70, my: 40, icons: ["bill-airtime", "bill-internet", "bill-electricity", "bill-tv"] },
  { left: "58.94%", top: 184.37, mx: 40, my: 20, icons: ["bill-airtime", "bill-internet", "bill-electricity", "bill-tv"] },
  { left: "56.16%", top: 164.37, mx: 0, my: 0, icons: ["bill-airtime", "bill-internet-alt", "bill-electricity-alt", "bill-tv"] },
];

function BillsRow({ icons }: { icons: string[] }) {
  return (
    <div className="flex rotate-[-18.06deg] items-start justify-center gap-7 rounded-[38px] border-y border-[#e2e4e9] bg-white/10 p-5 backdrop-blur-[6px]">
      {icons.map((icon, i) => (
        <div key={labels[i]} className="flex flex-col items-center">
          <Image src={`/assets/${icon}.svg`} alt="" width={64} height={64} />
          <span className="whitespace-nowrap text-center font-display text-sm font-medium leading-7 tracking-[-0.28px] text-white">
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function BillsStack() {
  return (
    <div
      aria-hidden
      className="mt-6 flex justify-center lg:absolute lg:inset-0 lg:m-0 lg:block"
    >
      <div className="relative h-[290px] w-[490px] shrink-0 [zoom:0.62] sm:[zoom:1] lg:contents">
        {rows.map((row, i) => (
          <div
            key={i}
            className="absolute left-[var(--mx)] top-[var(--my)] flex h-[246px] w-[415px] items-center justify-center lg:left-[var(--left)] lg:top-[var(--top)]"
            style={
              {
                "--left": row.left,
                "--top": `${row.top}px`,
                "--mx": `${row.mx}px`,
                "--my": `${row.my}px`,
              } as React.CSSProperties
            }
          >
            <BillsRow icons={row.icons} />
          </div>
        ))}
      </div>
    </div>
  );
}
