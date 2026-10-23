import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions — Tranzat",
  description: "The terms that apply when you register for, access, or use Tranzat.",
};

const EMAIL = "support@tranzat.com";

const sections: LegalSection[] = [
  {
    id: "our-values",
    title: "Our Values",
    content: (
      <>
        <p>
          Tranzat is a cutting-edge financial technology business devoted to transforming the
          financial industry in Africa and beyond. We offer a full range of financial services, up
          to and including the provision of utility payments and subscriptions paid for directly
          from users&apos; wallets. Businesses are empowered by our resources and simple access to
          financial services and products.
        </p>
        <p>
          By removing the friction between crypto-to-fiat transactions and acceptance, our objective
          is to accelerate business growth, scalability, and financial empowerment across all
          industries and sectors, with low transaction fees. With Tranzat, you can stop hopping
          between crypto and traditional finance apps. All your assets are held in one place.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    content: (
      <dl>
        {[
          ["Account", "the account you create to access and use the Services."],
          ["Application", "the Tranzat mobile application, website, and any associated APIs or widgets."],
          ["Digital Assets", "cryptocurrencies, stablecoins, and other blockchain-based assets supported by the Services from time to time."],
          ["KYC", "know your customer verification, including the Level 1 and Level 2 verification tiers described in our Privacy Policy."],
          ["Naira Virtual Account", "the Naira-denominated bank account made available to you within the Application for sending and receiving funds."],
          ["Services", "the digital wallet, crypto deposit, fiat-stablecoin swap, stablecoin transfer, Naira Virtual Account, card, and related financial technology services made available by Tranzat through the Application."],
          ["Visa Platinum Card", "the USD-denominated payment card issued to eligible Users through the Services."],
          ["User, you, or your", "any person who registers for, accesses, or uses the Services."],
        ].map(([term, def]) => (
          <div key={term}>
            <dt>&ldquo;{term}&rdquo;</dt>
            <dd>means {def}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    id: "use-of-the-services",
    title: "Use of the Services",
    content: (
      <>
        <p>
          You may use Tranzat&apos;s Services only in compliance with these Terms and all applicable
          local, state, national, and international laws, rules, and regulations. You agree not to
          misuse the Services or help anyone else do so.
        </p>
        <p>
          We may modify, suspend, or discontinue any part of the Services at any time, with or
          without notice, where required for legal, security, or operational reasons. Continued use
          of the Services after changes take effect constitutes acceptance of the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility and Who May Use Our Services",
    content: (
      <>
        <p>
          You must be legally capable of entering into a binding contract and meet any age,
          residency, or identity requirements applicable in your jurisdiction to use the Services.
          Without limiting the foregoing, you must be at least 18 years old to open an Account.
        </p>
        <p>By creating an Account, you represent and warrant that:</p>
        <ul>
          <li>all information you provide is true, accurate, and complete;</li>
          <li>
            you are not prohibited from using the Services under applicable law, including
            sanctions, anti-money laundering, and counter-terrorism financing laws;
          </li>
          <li>you are not acting on behalf of a third party unless expressly permitted by Tranzat; and</li>
          <li>your use of the Services complies with all applicable laws in your jurisdiction.</li>
        </ul>
      </>
    ),
  },
  {
    id: "user-accounts",
    title: "User Accounts",
    content: (
      <>
        <p>
          To access our services, you must register for a Tranzat Account and keep your login
          credentials secure. You are responsible for all activity that occurs under your Account,
          whether or not authorised by you.
        </p>
        <p>
          You must notify us promptly at {EMAIL} if you suspect unauthorised access to, or use of,
          your Account. We may suspend or terminate Accounts that violate these Terms or pose a
          security risk, in accordance with <a href="#suspension-and-termination">Suspension and Termination</a>.
        </p>
      </>
    ),
  },
  {
    id: "two-factor-authentication",
    title: "Two-Factor Authentication and Account Security",
    content: (
      <>
        <p>
          We provide two-factor authentication (2FA) to help protect your Account. Depending on the
          feature, 2FA may be required before you can log in, authorise a transaction, or change
          security-sensitive Account settings.
        </p>
        <p>
          You are responsible for keeping your 2FA method, device, and any associated recovery codes
          secure. You must not share your 2FA credentials with any other person. Tranzat is not liable
          for losses arising from your failure to keep your Account, password, or 2FA method secure,
          except where required by law.
        </p>
      </>
    ),
  },
  {
    id: "identity-verification",
    title: "Identity Verification",
    content: (
      <>
        <p>
          We may require identity verification (KYC/AML) before you can use some or all of the
          Services. You agree to provide accurate documents and information when requested. Failure
          to complete verification may limit or prevent access to the Services, including Naira
          Virtual Account funding, Visa Platinum Card creation, and higher transaction limits, as
          described in our <a href="/privacy#identity-verification">Privacy Policy</a>.
        </p>
        <p>We process verification data in accordance with our Privacy Policy.</p>
      </>
    ),
  },
  {
    id: "biometric-data",
    title: "Biometric and Facial Recognition Data",
    content: (
      <>
        <p>
          Where facial recognition or biometric data is used for identity verification, such
          processing is described in our Privacy Policy and only occurs with your consent, where
          required by law.
        </p>
        <p>
          We do not sell your facial or biometric data. Retention, storage, and deletion of biometric
          information follow applicable regulations and our published privacy practices.
        </p>
      </>
    ),
  },
  {
    id: "account-information",
    title: "Account Information",
    content: (
      <>
        <p>
          You agree to keep your Account information current, including contact details and any
          linked payment, bank, or Naira Virtual Account information required to operate the
          Services.
        </p>
        <p>
          We may use the information you provide to operate, improve, and secure the Services, and
          to communicate with you about your Account, in accordance with our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "core-services",
    title: "Core Services",
    content: (
      <>
        <p>
          Tranzat provides digital wallet, crypto deposit, fiat-stablecoin conversion, payments,
          transfer, and related financial technology services as described on our website and
          Application. Availability of specific features may vary by region, account status, and
          regulatory requirements. We reserve the right to add, remove, or change features as needed.
        </p>
        <h3>Digital Wallet</h3>
        <p>
          Your Tranzat wallet allows you to hold and manage supported Digital Assets and fiat
          balances within the Application.
        </p>
        <h3>Crypto Deposits and Fiat-Stablecoin Swaps</h3>
        <p>
          You may receive an on-demand deposit wallet address within the Application to transfer
          supported Digital Assets from external wallets. Deposited crypto may be automatically
          converted to Naira, used to fund your Visa Platinum Card, or swapped between supported fiat
          currency and stablecoins, subject to the KYC tier and limits described in our Privacy
          Policy.
        </p>
        <h3>Stablecoin Transfers</h3>
        <p>
          You may transfer supported stablecoins out of the Application to external wallet
          addresses, subject to the daily limits applicable to your KYC tier.
        </p>
        <h3>Naira Virtual Accounts</h3>
        <p>
          Eligible Users may be issued a Naira Virtual Account for sending and receiving Naira. Naira
          Virtual Account creation and funding requires Level 2 (Advanced) KYC. Funds in your Naira
          Virtual Account may be used to purchase Digital Assets, fund your Visa Platinum Card, or
          pay for everyday bills, subject to applicable limits.
        </p>
        <p>
          Naira Virtual Accounts are provided in partnership with our banking partners. Tranzat is
          not a deposit-taking bank, and funds held in your Naira Virtual Account are held with our
          banking partners in accordance with their terms and applicable regulation.
        </p>
        <h3>Visa Platinum Cards</h3>
        <p>
          Eligible Users may apply for a Visa Platinum Card, a USD-denominated payment card. Visa
          Platinum Card creation requires Level 2 (Advanced) KYC. Card spend is limited to $10,000
          per day, or such other limit as we may notify you of from time to time.
        </p>
        <p>
          Your Visa Platinum Card may be funded from your Naira Virtual Account (subject to
          conversion) or from crypto deposits, and may be added to supported digital wallets such as
          Apple Pay and Google Pay.
        </p>
        <h3>Account Statements</h3>
        <p>
          You may request or download a statement of your Account activity, including wallet, card,
          and Naira Virtual Account transactions, through the Application. Statements are provided
          for your convenience and record-keeping and do not constitute financial or tax advice.
        </p>
        <h3>Bill and Utility Payments</h3>
        <p>
          You may use available balances in the Application to pay for supported bills, utilities,
          and subscriptions. Tranzat is not responsible for the accuracy of billing information
          provided by third-party billers, or for service interruptions caused by such third parties.
        </p>
      </>
    ),
  },
  {
    id: "fees-and-charges",
    title: "Fees and Charges",
    content: (
      <>
        <p>
          We may charge fees for the use of the Services, including transaction fees, conversion
          spreads on crypto-to-fiat and fiat-stablecoin swaps, card issuance and transaction fees,
          Naira Virtual Account fees, and withdrawal or inactivity fees. Applicable fees will be
          displayed to you within the Application before you confirm a transaction, or published on
          our website or fee schedule from time to time.
        </p>
        <p>
          We may introduce new fees or change existing fees at any time. Where required by law, we
          will provide you with reasonable notice of any material change before it takes effect.
          Your continued use of the Services after a fee change takes effect constitutes your
          acceptance of the updated fees.
        </p>
      </>
    ),
  },
  {
    id: "licence",
    title: "Licence to Use Our Services",
    content: (
      <>
        <p>
          Subject to these Terms, Tranzat grants you a limited, non-exclusive, non-transferable,
          revocable licence to access and use the Services for your personal or authorised business
          use.
        </p>
        <p>
          You may not copy, modify, distribute, sell, or lease any part of the Services, or reverse
          engineer our software, except as permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "foreign-exchange",
    title: "Foreign Exchange Fluctuation",
    content: (
      <>
        <p>
          Exchange rates for crypto-to-fiat and fiat-stablecoin conversions may change continuously.
          Rates displayed within the Application are indicative until a transaction is confirmed.
        </p>
        <p>
          Tranzat is not liable for losses arising from market movements between the time you
          request a conversion or swap and the time it is settled, except where required by law.
        </p>
      </>
    ),
  },
  {
    id: "asset-risks",
    title: "Currency and Digital Asset Risks",
    content: (
      <>
        <p>
          Holding, sending, or converting Digital Assets and fiat currencies involves volatility,
          market, liquidity, and operational risks. Values can go down as well as up.
        </p>
        <p>
          You acknowledge that you understand these risks and that past performance is not
          indicative of future results. You are solely responsible for evaluating whether use of the
          Services is appropriate for you in light of your circumstances.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use and Prohibited Conduct",
    content: (
      <>
        <p>You must not use the Services and platform to:</p>
        <ul>
          <li>engage in money laundering, terrorism financing, fraud, or any other unlawful activity;</li>
          <li>impersonate any person, or provide false or misleading information during registration or verification;</li>
          <li>circumvent, disable, or interfere with security features of the Services, including 2FA;</li>
          <li>upload viruses, malware, or other harmful code;</li>
          <li>facilitate viruses, trojans, malware, or code designed to damage, disrupt, or gain unauthorised access to systems or data;</li>
          <li>use devices or software to bypass our security protocols or interfere with our infrastructure, systems, or other users&apos; access;</li>
          <li>participate in Ponzi schemes, pyramid schemes, or multi-level marketing;</li>
          <li>distribute adult content or pseudo-pharmaceuticals, or improper or illegal products or services;</li>
          <li>use the Services in a manner that infringes the rights of Tranzat, its Users, or any third party;</li>
          <li>
            harass, abuse, or threaten any person, including making death threats or any other
            threats of violence or harm directed at Tranzat&apos;s staff, contractors, or
            representatives, whether communicated through the Application, customer support
            channels, social media, or otherwise; or
          </li>
          <li>otherwise misuse the Services or assist any other person in doing so.</li>
        </ul>
      </>
    ),
  },
  {
    id: "complaints-and-disputes",
    title: "Complaint Resolution and Disputes",
    content: (
      <>
        <p>
          If you have disputes regarding a Card transaction, our Services, or platform, or need to
          request a Chargeback (&ldquo;Disputes&rdquo;), contact us at {EMAIL} no later than 90 days
          after the transaction date. We will assist in resolving the dispute or forward your request
          to the appropriate Partner or Card Network.
        </p>
        <p>
          For dispute resolution or Chargeback requests regarding card payments, you must follow our
          Cardholder terms, including submitting detailed written explanations, transaction receipts,
          and other required documentation. Our Partners may charge fees for Chargeback handling at
          their discretion.
        </p>
      </>
    ),
  },
  {
    id: "suspension-and-termination",
    title: "Suspension and Termination",
    content: (
      <>
        <p>
          We may suspend or terminate your Account, or restrict your access to any part of the
          Services, where you breach these Terms, where required by law or a regulator, or where we
          reasonably believe your Account poses a security, fraud, or compliance risk. Without
          limiting the foregoing, grounds for suspension or termination include, but are not limited
          to, where:
        </p>
        <ul>
          <li>you provide false, inaccurate, or misleading information during registration or KYC verification, or fail to complete verification when requested;</li>
          <li>your Account is used, or we reasonably suspect it is being used, for money laundering, terrorism financing, sanctions evasion, fraud, or any other unlawful activity;</li>
          <li>you engage in chargeback abuse, payment reversal fraud, or any attempt to circumvent our fees, transaction limits, or verification requirements;</li>
          <li>you attempt to circumvent, disable, or interfere with 2FA or any other security feature of the Services;</li>
          <li>you use the Services to harass, abuse, defraud, or threaten any other person, including other Users;</li>
          <li>we receive a court order, subpoena, freezing order, or a valid instruction from a regulator or law enforcement authority requiring us to do so;</li>
          <li>your Account has been inactive for an extended period, subject to any applicable notice requirements;</li>
          <li>you are, or become, a sanctioned person, or are located in a jurisdiction subject to sanctions or legal restrictions that prevent us from providing the Services to you;</li>
          <li>a chargeback, payment dispute, or reversal on your Account results in a negative balance that remains unresolved; or</li>
          <li>you breach any representation or warranty given under these Terms.</li>
        </ul>
        <p>
          Without limiting the foregoing, we may immediately suspend or terminate your Account,
          without prior notice, where you make a death threat or any other threat of violence or harm
          against any Tranzat staff member, contractor, or representative. We may report such conduct
          to law enforcement and take any other action available to us under applicable law.
        </p>
        <p>
          On termination, your right to use the Services will cease. We will take reasonable steps to
          enable you to withdraw any available balance, subject to applicable law and our right to
          withhold funds where necessary to comply with legal, regulatory, or fraud-prevention
          obligations.
        </p>
        <h3>Accessing Your Remaining Balance</h3>
        <p>
          Withdrawing your remaining balance from a suspended or closed account depends on the reason
          for the suspension or termination, and we may require additional identification,
          verification, and fraud prevention steps. If we determine the assets are not restricted
          from withdrawal, we have full discretion regarding withdrawal options for receiving those
          assets. We may require additional information before processing withdrawal or transfer
          requests and extend approval deadlines or prohibit transfers in certain circumstances,
          particularly if we detect or suspect fraudulent or illegal activity.
        </p>
        <p>If you cannot access your account, contact us at {EMAIL} to request a fund transfer.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: (
      <>
        <p>
          All rights, title, and interest in the Services, including trademarks, logos, software,
          and content, remain the exclusive property of Tranzat or its licensors.
        </p>
        <p>
          Reproduction, distribution, adaptation, modification, or commercial exploitation of our
          platform content is strictly prohibited without our written consent. You will not sell,
          license, reverse engineer, modify, publish, transfer, create derivative works from, or
          otherwise exploit any Content.
        </p>
        <p>
          Nothing in these Terms transfers any intellectual property rights to you, except the
          limited licence to use the Services described in{" "}
          <a href="#licence">Licence to Use Our Services</a>.
        </p>
      </>
    ),
  },
  {
    id: "quality-and-availability",
    title: "Quality and Availability of the Services",
    content: (
      <>
        <p>
          We strive to keep the Services available and reliable, but we do not guarantee
          uninterrupted, error-free, or fully accessible operation at all times.
        </p>
        <p>
          Scheduled maintenance, third-party outages (including outages affecting our card, banking,
          or crypto infrastructure partners), or force majeure events may affect availability. We
          will take reasonable steps to restore Services promptly.
        </p>
      </>
    ),
  },
  {
    id: "data-protection",
    title: "Data Protection and Privacy",
    content: (
      <p>
        By using our Services, you acknowledge and consent to our data protection practices as
        detailed in our <a href="/privacy">Privacy Policy</a>, including the collection, use,
        disclosure, and sharing of your personal data with us, our Partners, Custodian, service
        providers, and relevant third parties as necessary to facilitate your Service use.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, Tranzat shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or any loss of profits,
          revenue, data, or goodwill, arising out of or in connection with your use of the Services.
        </p>
        <p>
          Nothing in these Terms limits or excludes Tranzat&apos;s liability for fraud, wilful
          misconduct, or any liability that cannot be limited or excluded under applicable law.
        </p>
      </>
    ),
  },
  {
    id: "arbitration",
    title: "Arbitration",
    content: (
      <>
        <p>
          For any disputes arising under or related to these Terms or your use of our Services, you,
          we, and any involved party (collectively, the &ldquo;Parties&rdquo;) agree to resolve the
          issue through binding arbitration rather than court proceedings. The arbitration shall be
          governed by the Arbitration and Mediation Act, held in the Lagos Multidoor Court House and
          conducted in English. The proceedings will occur in Nigeria unless otherwise agreed by the
          parties. A sole arbitrator will be appointed by the Lagos Multidoor Court House.
        </p>
        <p>
          In the event of any conflict between the Act and this arbitration clause, the provisions of
          this clause shall take priority.
        </p>
        <p>
          Each party shall bear its own costs of arbitration, including attorney fees. The
          arbitrator&apos;s fees and administrative costs will be determined according to the
          applicable arbitration rules.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify and hold Tranzat, its officers, directors, employees, and agents
        harmless from any claim, loss, or demand, including reasonable legal fees, made by any third
        party arising out of your breach of these Terms, your violation of applicable law, or your
        misuse of the Services.
      </p>
    ),
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    content: (
      <p>
        Tranzat shall not be liable for any failure or delay in performing its obligations under
        these Terms where such failure or delay results from causes beyond its reasonable control,
        including acts of God, government action, network or infrastructure failures, or failures of
        our third-party card, banking, or crypto infrastructure partners.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <>
        <p>If you have questions or concerns about these Terms, please contact us at:</p>
        <p>
          <strong>Email:</strong> <span className="select-all">{EMAIL}</span>
        </p>
        <p>
          By using Tranzat&apos;s Services, you acknowledge that you have read, understood, and agree
          to be bound by these Terms.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. If a change is material, we will notify you
        before it takes effect. Continued use of the Services after the effective date of any update
        constitutes your acceptance of the updated Terms. Updates will be posted on this page with a
        revised &ldquo;Last modified&rdquo; date.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          title="Terms and Conditions"
          updated="September 2026"
          sections={sections}
          intro={
            <>
              <p>
                These Terms apply to any person that registers, uses, or opens an account through
                Tranzat (our mobile applications, website, or APIs). They are a legally binding
                agreement between you and Tranzat Inc. (&ldquo;Tranzat,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and highlight risks in using our Services
                that you should consider carefully.
              </p>
              <p className="mt-4">
                By accessing or using the Services, you confirm that you have read, understood, and
                agree to be bound by these Terms. If you do not agree, you should not use the
                Services.
              </p>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
