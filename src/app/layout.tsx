import type { Metadata } from "next";
import { Bricolage_Grotesque, Onest } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  axes: ["opsz", "wdth"],
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Tranzat — Crypto Spending Made Easy",
  description:
    "Open your Spenda wallet, deposit crypto, and spend in Naira instantly. No complicated steps, no waiting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${onest.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
