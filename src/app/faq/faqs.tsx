import type { ReactNode } from "react";

export type Faq = { id: string; topic: Topic; q: string; a: ReactNode; text: string };
export type Topic = "Getting started" | "Cards" | "Deposits & wallet" | "Account & security" | "Referrals";

export const topics: Topic[] = ["Getting started", "Cards", "Deposits & wallet", "Account & security", "Referrals"];

const can = ["Convert crypto to Naira", "Pay bills", "Transfer to Nigerian bank accounts", "Use a USD virtual card", "Send stablecoin from your Naira balance"];

// `text` is the plain-text answer used for search.
export const faqs: Faq[] = [
  {
    id: "what-is-tranzat",
    topic: "Getting started",
    q: "What is Tranzat?",
    text: "Tranzat is a crypto spending app that makes it easier to use crypto in everyday life.",
    a: <p>Tranzat is a crypto spending app that makes it easier to use crypto in everyday life.</p>,
  },
  {
    id: "how-does-tranzat-work",
    topic: "Getting started",
    q: "How does Tranzat work?",
    text: "Deposit supported crypto and it auto-converts to Naira. Pay bills, transfer funds, or spend with your USD virtual card.",
    a: (
      <p>
        Deposit supported crypto and it auto-converts to Naira. Pay bills, transfer funds, or spend
        with your USD virtual card.
      </p>
    ),
  },
  {
    id: "what-can-i-do",
    topic: "Getting started",
    q: "What can I do with Tranzat?",
    text: can.join(". "),
    a: (
      <ul className="grid gap-2 sm:grid-cols-2">
        {can.map((c) => (
          <li key={c} className="flex items-center gap-3 rounded-xl bg-light px-4 py-3 text-dark">
            <span aria-hidden className="size-2 shrink-0 rounded-full bg-tz-red" />
            {c}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "card-services",
    topic: "Cards",
    q: "Does Tranzat offer card services?",
    text: "Yes, a premium USD virtual card for online payments and subscriptions.",
    a: <p>Yes, a premium USD virtual card for online payments and subscriptions.</p>,
  },
  {
    id: "fund-my-card",
    topic: "Cards",
    q: "How do I fund my Tranzat card?",
    text: "From your Naira wallet, or directly with crypto: tap Cards, then Fund.",
    a: (
      <p>
        From your Naira wallet, or directly with crypto: tap <strong>Cards</strong>, then{" "}
        <strong>Fund</strong>.
      </p>
    ),
  },
  {
    id: "deposit-limits",
    topic: "Deposits & wallet",
    q: "Is there a minimum or maximum crypto deposit?",
    text: "No. There is no minimum or maximum crypto deposit.",
    a: <p>No. There is no minimum or maximum crypto deposit.</p>,
  },
  {
    id: "supported-tokens",
    topic: "Deposits & wallet",
    q: "Does Tranzat accept every crypto token?",
    text: "No. Only the tokens and networks shown on the Deposit page are supported. Others will not be credited.",
    a: (
      <p>
        No. Only the tokens and networks shown on the <strong>Deposit</strong> page are supported.
        Others will not be credited.
      </p>
    ),
  },
  {
    id: "unlisted-token",
    topic: "Deposits & wallet",
    q: "Can I deposit an unlisted token on a supported network?",
    text: "No. Both the token and the network must be listed. If you are unsure, ask Support before you send.",
    a: (
      <p>
        No. Both the token and the network must be listed. If you&apos;re unsure, ask Support before
        you send.
      </p>
    ),
  },
  {
    id: "third-party-naira-deposit",
    topic: "Deposits & wallet",
    q: "Can someone else make a Naira deposit for me?",
    text: "No. Only bank transfers from your own account, in the same name, are accepted. Third-party deposits are not accepted.",
    a: (
      <p>
        No. Only bank transfers from your own account, in the same name as your Tranzat account, are
        accepted. Third-party deposits aren&apos;t accepted.
      </p>
    ),
  },
  {
    id: "wallet-address-change",
    topic: "Deposits & wallet",
    q: "Does my wallet address change?",
    text: "No, your wallet address is fixed.",
    a: <p>No, your wallet address is fixed.</p>,
  },
  {
    id: "find-wallet-address",
    topic: "Deposits & wallet",
    q: "Where's my wallet address?",
    text: "Tap Deposit on the home screen, then select the crypto and network.",
    a: (
      <p>
        Tap <strong>Deposit</strong> on the home screen, then select the crypto and network.
      </p>
    ),
  },
  {
    id: "store-crypto",
    topic: "Deposits & wallet",
    q: "Can I store crypto on Tranzat?",
    text: "No. Crypto you deposit converts to Naira automatically.",
    a: <p>No. Crypto you deposit converts to Naira automatically.</p>,
  },
  {
    id: "is-tranzat-secure",
    topic: "Account & security",
    q: "Is Tranzat secure?",
    text: "Yes. Tranzat uses security measures to protect your funds and data.",
    a: (
      <p>
        Yes. Tranzat uses security measures to protect your funds and data. Read how we handle your
        information in our <a href="/privacy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: "multiple-accounts",
    topic: "Account & security",
    q: "Can I verify multiple accounts?",
    text: "No. Your KYC verification links to one Tranzat account only.",
    a: <p>No. Your KYC verification links to one Tranzat account only.</p>,
  },
  {
    id: "referrals",
    topic: "Referrals",
    q: "How do referrals and bonuses work?",
    text: "When you share your referral code with a friend and they sign up, they get a ₦1,000 welcome bonus after their first deposit of $10 and above. You, as the referrer, earn 20% of their deposit fees every time they deposit.",
    a: (
      <>
        <p>
          When you share your referral code with a friend and they sign up, they get a{" "}
          <strong>₦1,000 welcome bonus</strong> after their first deposit of $10 and above.
        </p>
        <p className="mt-3">
          You, as the referrer, earn <strong>20% of their deposit fees</strong>, not just once but
          every single time they deposit.
        </p>
      </>
    ),
  },
];
