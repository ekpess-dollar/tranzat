import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="relative max-w-[260px] mx-auto">
      <div
        className="bg-[#26292e] border-[1.5px] border-[#5c6169] rounded-[65px] p-5 pt-5 shadow-[0_24px_24px_rgba(0,0,0,0.4)]"
        style={{ transform: "rotate(5.89deg)" }}
      >
        <div className="bg-[#040405] h-8 w-[40%] mx-auto rounded-[16px] mb-2" />
        <div className="rounded-[42px] overflow-hidden aspect-[786/1704]">
          <Image
            src="/assets/app-screen.png"
            alt="Tranzat app screen"
            width={786}
            height={1704}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
