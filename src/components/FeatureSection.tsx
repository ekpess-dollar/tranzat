import Image from "next/image";
import Link from "next/link";

type FeatureVariant = "blue" | "dark" | "red";

interface FeatureSectionProps {
  variant: FeatureVariant;
  title: string;
  description: string;
  visual?: React.ReactNode;
  centered?: boolean;
}

const variantStyles: Record<
  FeatureVariant,
  { section: string; heading: string; body: string }
> = {
  blue: {
    section: "bg-tz-blue",
    heading: "text-[#0d2831]",
    body: "text-[#0d2831]",
  },
  dark: {
    section: "bg-black",
    heading: "text-[#e2e2e2]",
    body: "text-[#9e9e9e]",
  },
  red: {
    section: "bg-tz-red",
    heading: "text-[#e2e2e2]",
    body: "text-white",
  },
};

export default function FeatureSection({
  variant,
  title,
  description,
  visual,
  centered = false,
}: FeatureSectionProps) {
  const styles = variantStyles[variant];

  return (
    <section
      className={`${styles.section} px-6 lg:px-[84px] pt-[72px] pb-24 rounded-t-[6.25rem] -mt-12 relative overflow-hidden`}
    >
      <div
        className={`max-w-[1272px] mx-auto flex ${
          centered ? "flex-col items-center text-center" : "items-start gap-10"
        } min-h-[400px]`}
      >
        <div className={`max-w-[560px] ${centered ? "mx-auto" : ""}`}>
          {/* Icon */}
          <div className="bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center mb-8">
            <Image
              src="/assets/bank-icon.svg"
              alt=""
              width={45}
              height={45}
            />
          </div>

          <h2
            className={`font-display font-semibold text-[clamp(28px,3.33vw,48px)] ${styles.heading} tracking-[-1.44px] leading-[1.04] mb-4`}
          >
            {title}
          </h2>

          <p
            className={`font-body text-[20px] ${styles.body} leading-[1.5] mb-8`}
          >
            {description}
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-3 bg-light border border-light rounded-lg h-12 px-6 font-display font-semibold text-base text-dark tracking-[-0.32px] hover:bg-white transition-colors whitespace-nowrap"
          >
            Download Tranzat
            <Image src="/assets/arrow.svg" alt="" width={15} height={15} />
          </Link>
        </div>

        {visual && !centered && (
          <div className="flex-1 flex items-center justify-end">{visual}</div>
        )}
      </div>
    </section>
  );
}
