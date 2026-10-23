import styles from "./about.module.css";

const RING = "M140,140 m-112,0 a112,112 0 1,1 224,0 a112,112 0 1,1 -224,0";

export default function TrustSeal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 280"
      className={className}
      role="img"
      aria-label="Safeguarded under Nigeria's data protection laws and overseen by the NDPC"
    >
      <defs>
        <path id="trust-seal-ring" d={RING} />
      </defs>
      <circle cx="140" cy="140" r="139" fill="#100134" />
      <circle cx="140" cy="140" r="132" fill="none" stroke="white" strokeOpacity="0.18" />
      <g className={styles.spin}>
        <text fill="white" fillOpacity="0.9" fontSize="13" fontWeight="600" letterSpacing="2" style={{ fontFamily: "var(--font-onest)" }}>
          <textPath href="#trust-seal-ring" textLength="700" lengthAdjust="spacing">
            SAFEGUARDED UNDER NIGERIA&apos;S DATA PROTECTION LAWS • OVERSEEN BY THE NDPC •
          </textPath>
        </text>
      </g>
      <circle cx="140" cy="140" r="84" fill="#5fcdfa" />
      <path d="M118 140 v-18 a22 22 0 0 1 44 0 v18" fill="none" stroke="#100134" strokeWidth="9" strokeLinecap="round" />
      <rect x="102" y="134" width="76" height="58" rx="15" fill="#100134" />
      <circle cx="140" cy="158" r="7" fill="#5fcdfa" />
      <rect x="136.5" y="160" width="7" height="15" rx="3.5" fill="#5fcdfa" />
    </svg>
  );
}
