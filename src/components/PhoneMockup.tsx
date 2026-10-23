import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div
      aria-hidden
      className="relative mx-auto -mb-24 mt-12 flex h-[560px] max-w-full justify-center overflow-visible lg:absolute lg:left-[55.75%] lg:top-[92px] lg:m-0 lg:h-[916px] lg:w-[507px] lg:items-center"
    >
      <div className="relative h-[878px] w-[419px] shrink-0 rotate-[5.89deg] [zoom:0.7] lg:[zoom:1]">
        <div className="relative size-full rounded-[65px] border-[1.5px] border-[#5c6169] bg-[#26292e] drop-shadow-[0_24px_24px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-x-[calc(0.72%-1.48px)] top-[1.5px] h-[872px] rounded-[62px] bg-[#060708]" />
          <div className="absolute inset-x-[calc(3.1%-1.41px)] top-[11.5px] aspect-[786/1704] overflow-hidden rounded-[52px]">
            <Image
              src="/assets/app-screen.png"
              alt=""
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>
          <Image
            src="/assets/phone-power-button.svg"
            alt=""
            width={3}
            height={33}
            className="absolute left-[calc(-0.72%-1.52px)] top-[119.5px] h-[33px] w-[3px]"
          />
          <Image
            src="/assets/phone-left-button.svg"
            alt=""
            width={3}
            height={52}
            className="absolute left-[calc(-0.72%-1.52px)] top-[172.5px] h-[52px] w-[3px]"
          />
          <Image
            src="/assets/phone-right-button.svg"
            alt=""
            width={3}
            height={75}
            className="absolute left-[calc(100%+1.5px)] top-[203.5px] h-[75px] w-[3px]"
          />
          <div className="absolute inset-x-[calc(36.63%-0.4px)] top-[22.5px] h-8 rounded-2xl bg-[#040405]" />
          <Image
            src="/assets/phone-camera.svg"
            alt=""
            width={10}
            height={10}
            className="absolute left-[calc(58%+0.24px)] top-[33.5px] size-2.5"
          />
        </div>
      </div>
    </div>
  );
}
