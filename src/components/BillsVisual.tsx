const bills = [
  { icon: "📱", label: "Airtime" },
  { icon: "🌐", label: "Internet" },
  { icon: "⚡", label: "Electricity" },
  { icon: "📺", label: "TV" },
];

function BillsRow({ opacity = 1 }: { opacity?: number }) {
  return (
    <div
      className="bg-white/10 border-t border-b border-[#e2e4e9] rounded-[38px] p-5 flex gap-7 items-start justify-center"
      style={{ opacity }}
    >
      {bills.map((b) => (
        <div key={b.label} className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-white/15 rounded-[18px] flex items-center justify-center text-[28px]">
            {b.icon}
          </div>
          <span className="font-display font-medium text-sm text-white tracking-[-0.28px] leading-7 text-center">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function BillsVisual() {
  return (
    <div
      className="flex flex-col gap-5 mr-5"
      style={{ transform: "rotate(-18.06deg)" }}
    >
      <BillsRow opacity={1} />
      <BillsRow opacity={0.7} />
      <BillsRow opacity={0.45} />
    </div>
  );
}
