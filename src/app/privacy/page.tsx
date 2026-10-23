import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Tranzat",
  description: "How Tranzat collects, uses, shares, and protects your personal information.",
};

const EMAIL = "support@tranzat.com";

const limits: [string, string, string][] = [
  ["Crypto deposits", "No daily limit", "No daily limit"],
  ["Naira virtual account funding", "Not available", "Available"],
  ["USD card creation", "Not available", "Available"],
  ["USD card spend", "$10,000 per day", "$10,000 per day"],
  ["Naira bank transfers", "₦10,000,000 per day", "₦20,000,000 per day"],
  ["Stablecoin (crypto) transfers", "$10,000 per day", "$20,000 per day"],
];

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    content: (
      <>
        <p>
          <strong>Controller:</strong> Tranzat Inc.
          <br />
          <strong>Contact email:</strong> <span className="select-all">{EMAIL}</span>
        </p>
        <p>
          Tranzat acts as a data controller in respect of personal data processed through the
          Services, unless stated otherwise in this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "Scope",
    content: (
      <>
        <p>
          This Privacy Policy applies to the Services provided via the Tranzat website, mobile
          application, or widget integration (the &ldquo;Application&rdquo;), including USD card
          issuance, crypto deposit, crypto transfer and swap, and Naira virtual account features.
        </p>
        <p>
          Our Services are not directed to children under 18. We do not knowingly collect
          information from children under 18. If, as a parent or guardian, you become aware that your
          child has provided us with information without your consent, please contact us using the
          details in <a href="#contact-us">Contact Us</a>.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Personal Information We May Collect",
    content: (
      <>
        <p>Depending on how you interact with Tranzat, we may collect the following categories of personal data:</p>
        <ul>
          <li><strong>Identity Data:</strong> name, date of birth, gender, nationality, government-issued identification documents;</li>
          <li><strong>Contact Data:</strong> email address, phone number, residential address;</li>
          <li><strong>Account Data:</strong> usernames, preferences, settings, wallet identifiers;</li>
          <li><strong>Transaction Data:</strong> payment references, contribution records, and transaction history across card, crypto, and Naira virtual account features;</li>
          <li><strong>Technical Data:</strong> IP address, device identifiers, browser type, mobile network information, location derived from GPS-enabled services, logs;</li>
          <li><strong>Communications:</strong> messages, support requests, and correspondence with us.</li>
        </ul>
        <h3>Verification Data</h3>
        <p>
          The specific verification data we collect depends on the KYC level you complete (see{" "}
          <a href="#identity-verification">Identity Verification and Verification Tiers</a>):
        </p>
        <ul>
          <li>
            <strong>Level 1 (Biometric Verification):</strong> Bank Verification Number (BVN) and/or
            National Identification Number (NIN), and a live selfie photo used for liveness and
            facial-match checks;
          </li>
          <li>
            <strong>Level 2 (Document-Based Verification):</strong> an image of a valid
            government-issued identification document (international passport, driver&apos;s
            licence, or voter&apos;s card), and a live selfie photo used for liveness and facial-match
            checks.
          </li>
        </ul>
        <h3>Card Data</h3>
        <p>In connection with our USD card feature, provided in partnership with our card issuing partner, we may collect and process:</p>
        <ul>
          <li>card application and issuance data, including your card token and card reference number;</li>
          <li>card transaction data, including authorisation, spend, and merchant data associated with your card;</li>
          <li>digital wallet provisioning data where you add your card to Apple Pay or Google Pay, including device account numbers and tokenisation identifiers issued by the relevant wallet provider;</li>
          <li>card status and limit information.</li>
        </ul>
        <p>We do not offer Naira-denominated cards. All cards issued through the Application are denominated in US Dollars.</p>
        <h3>Crypto Data</h3>
        <p>In connection with our crypto deposit, transfer, and swap features, we may collect and process:</p>
        <ul>
          <li>on-demand deposit wallet addresses generated for you within the Application;</li>
          <li>blockchain transaction data associated with crypto sent to or from your Tranzat wallet address, including transaction hashes and amounts;</li>
          <li>external wallet addresses you transfer crypto to when using our crypto transfer (stablecoin transfer) feature;</li>
          <li>conversion data where deposited crypto is automatically converted to Naira, or used to fund your USD card;</li>
          <li>data shared with or received from our crypto liquidity, custody, or exchange infrastructure partner(s).</li>
        </ul>
        <h3>Virtual Account Data</h3>
        <p>In connection with our Naira virtual account feature, we may collect and process:</p>
        <ul>
          <li>your dedicated Naira virtual account number and the issuing bank&apos;s details;</li>
          <li>Naira deposit and funding transaction records;</li>
          <li>records of how your Naira balance is used, including crypto purchases, USD card funding, and bill payments made through the Application.</li>
        </ul>
        <p>We do not knowingly collect personal data from children unless permitted by applicable law.</p>
      </>
    ),
  },
  {
    id: "why-we-collect",
    title: "Why We Collect Your Information",
    content: (
      <>
        <p>We use personal data to:</p>
        <ul>
          <li>provide, operate, and improve the Services, including our USD card, crypto deposit, crypto transfer and swap, Naira virtual account features and any other service feature we may add from time to time;</li>
          <li>verify your identity at the applicable KYC level and comply with legal and regulatory obligations, including AML/CFT requirements;</li>
          <li>issue and administer your USD card through our partner(s), process card transactions, and enable Apple Pay and Google Pay provisioning;</li>
          <li>generate deposit wallet addresses, process crypto deposits, transfers, and swaps, and convert crypto to Naira where applicable;</li>
          <li>open and administer your Naira virtual account and process Naira funding, crypto purchases, card funding, and bill payments;</li>
          <li>prevent fraud, abuse, and security incidents;</li>
          <li>communicate with users regarding accounts, services, or support;</li>
          <li>comply with applicable laws and enforce our terms.</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "Legal Bases for Processing",
    content: (
      <>
        <p>We process personal data only where permitted by law. Our legal bases may include:</p>
        <ul>
          <li><strong>Consent,</strong> where you have given clear permission;</li>
          <li><strong>Performance of a contract,</strong> where processing is necessary to provide requested services, including your card, crypto, or virtual account features;</li>
          <li><strong>Legal obligations,</strong> including identity verification and financial compliance requirements under Nigerian and other applicable law;</li>
          <li><strong>Legitimate interests,</strong> such as platform security, fraud prevention, and service improvement, where such interests are not overridden by your rights.</li>
        </ul>
      </>
    ),
  },
  {
    id: "identity-verification",
    title: "Identity Verification and Verification Tiers",
    content: (
      <>
        <p>
          Tranzat operates a two-tier Know Your Customer (KYC) framework. The tier you complete
          determines which features of the Application, including card issuance, crypto deposit,
          crypto transfer and swap, and Naira virtual account features, are available to you.
        </p>
        <h3>Level 1 KYC: Biometric Verification</h3>
        <p>
          Level 1 is our basic, entry-level onboarding tier, currently directed at users in the
          Nigerian market. To complete Level 1, you must submit:
        </p>
        <ul>
          <li>at least one government-linked biometric identifier: your Bank Verification Number (BVN) or your National Identification Number (NIN); and</li>
          <li>a live selfie photo, used to run a liveness check confirming you are physically present and that you match the biometric records associated with your BVN or NIN.</li>
        </ul>
        <p>At Level 1, you can access stablecoin (crypto) transfers and Naira bank transfers, subject to the daily limits set out below.</p>
        <h3>Level 2 KYC: Document-Based Proof of Identity</h3>
        <p>
          Level 2 is our advanced verification tier for Nigerian users who require a higher account
          status. As Tranzat expands into markets outside Nigeria, where BVN and NIN are not
          available, Level 2 will become the default entry-level verification standard for users in
          those regions. To complete Level 2, you must submit:
        </p>
        <ul>
          <li>a clear photo or image of a valid, government-issued physical identification document, such as an international or national passport, a driver&apos;s licence, or a voter&apos;s card; and</li>
          <li>a live selfie photo, used to run a liveness check confirming you are the legitimate owner of the submitted document.</li>
        </ul>
        <p>
          Level 2 is required to fund your Naira virtual account and to create a USD card. Level 2
          also unlocks higher daily limits on stablecoin transfers and Naira bank transfers, as set
          out below.
        </p>
        <h3>Feature Access and Transaction Limits</h3>
        <div className="overflow-x-auto rounded-2xl border border-dark/10">
          <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
            <thead>
              <tr className="bg-navy text-white">
                <th scope="col" className="px-4 py-3 font-display font-semibold">Feature</th>
                <th scope="col" className="px-4 py-3 font-display font-semibold">Level 1</th>
                <th scope="col" className="px-4 py-3 font-display font-semibold">Level 2</th>
              </tr>
            </thead>
            <tbody className="tabular-nums">
              {limits.map(([feature, l1, l2]) => (
                <tr key={feature} className="border-t border-dark/10 even:bg-light">
                  <th scope="row" className="px-4 py-3 font-medium text-dark">{feature}</th>
                  <td className={`px-4 py-3 ${l1 === "Not available" ? "text-dark/45" : ""}`}>{l1}</td>
                  <td className="px-4 py-3">{l2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Tranzat may amend these limits from time to time for risk, compliance, or product reasons,
          and will notify you of material changes in accordance with{" "}
          <a href="#changes">Changes to This Privacy Policy</a>.
        </p>
        <p>
          Verification data may be processed directly by Tranzat or by an identity verification
          service provider acting on our instructions. We do not guarantee the completeness,
          accuracy, or suitability of identity data received from third parties and may require
          additional verification.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing of Personal Data",
    content: (
      <>
        <p>We may share personal data with:</p>
        <ul>
          <li>identity verification and compliance service providers;</li>
          <li>our USD card issuing and processing partner, in connection with card application, issuance, and transaction processing;</li>
          <li>Apple and Google, where you choose to add your Tranzat card to Apple Pay or Google Pay, for the purpose of digital wallet provisioning;</li>
          <li>our crypto liquidity, custody, or exchange infrastructure partner(s), in connection with crypto deposit, transfer, and swap processing;</li>
          <li>our Naira virtual account banking partners, in connection with virtual account issuance and Naira funding;</li>
          <li>payment and financial service providers;</li>
          <li>technology and infrastructure providers;</li>
          <li>regulatory authorities or law enforcement where required by law;</li>
          <li>third parties where you have requested or authorised such sharing.</li>
        </ul>
        <p><strong>We do not sell personal data.</strong></p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: (
      <p>
        Personal data may be transferred and processed outside your country of residence, including
        where our USD card issuing and processing partner, our crypto infrastructure partners, or our
        virtual account banking partners operate servers or systems abroad. Where this occurs, we
        implement appropriate safeguards, such as contractual protections, and will endeavour to
        ensure that such jurisdictions maintain data protection standards no less protective than
        those in force in Nigeria.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain personal data only for as long as necessary to provide the Services and to comply
          with legal and regulatory obligations. Retention periods may vary depending on the type of
          data and legal requirements, including:
        </p>
        <ul>
          <li>transaction information, including card, crypto, and virtual account transaction records, will be retained for a minimum period of 5 years following the date of the transaction, in line with applicable AML/CFT recordkeeping requirements;</li>
          <li>account information will be retained until you delete your account on the Application;</li>
          <li>verification data (Level 1 or Level 2) will be retained for as long as required under applicable KYC/AML regulation;</li>
          <li>information used for product and marketing communication will be retained as long as you have given consent for its use.</li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>access your personal data;</li>
          <li>request correction or deletion;</li>
          <li>object to or restrict processing;</li>
          <li>withdraw consent (where applicable);</li>
          <li>request data portability.</li>
        </ul>
        <p>Requests can be made by contacting us using the details in <a href="#contact-us">Contact Us</a>.</p>
      </>
    ),
  },
  {
    id: "marketing",
    title: "Marketing",
    content: (
      <p>
        We may process your personal data to contact you or send you marketing content about our
        products, services, or surveys. You may object to such contact or opt out at any time. If you
        opt out of marketing content, we may still send you messages relating to transactions and
        other communications necessary for our ongoing service relationship.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        We implement appropriate technical and organisational measures to protect personal data
        against unauthorised access, loss, or misuse, including for card, crypto, and virtual account
        data. However, no system is completely secure.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <>
        <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
        <p>
          <strong>Email:</strong> <span className="select-all">{EMAIL}</span>
        </p>
        <p>
          By using Tranzat&apos;s Services, you acknowledge that you have read, understood, and agree
          to be bound by this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. If a change is material, we will notify
        you before it takes effect. Updates will be posted on this page with a revised &ldquo;Last
        modified&rdquo; date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          title="Privacy Policy"
          updated="4 September 2026"
          sections={sections}
          intro={
            <>
              <p>
                Tranzat Inc. (&ldquo;Tranzat,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal
                data. This policy explains how we collect, use, share, and protect personal
                information when you use our websites, applications, and services, including our USD
                card, crypto deposit, crypto transfer, crypto swap, and Naira virtual account
                features (the &ldquo;Services&rdquo;).
              </p>
              <p className="mt-4">
                It applies globally and is intended to comply with applicable data protection laws,
                including the Nigeria Data Protection Act 2023 (NDPA) and, where applicable, the EU
                GDPR, the UK GDPR, and the data protection laws of other jurisdictions in which
                Tranzat operates.
              </p>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
