import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeatureSection from "@/components/FeatureSection";
import PhoneMockup from "@/components/PhoneMockup";
import BillsVisual from "@/components/BillsVisual";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HowItWorks />
      <FeatureSection
        variant="blue"
        title="Instant Naira from your crypto. Arrives in seconds."
        description="Receive payments from your employers, clients, social media platforms, and other businesses directly to your own foreign account – without hidden fees"
        visual={<PhoneMockup />}
      />
      <FeatureSection
        variant="dark"
        title="Pay your bills with ease"
        description="Receive payments from your employers, clients, social media platforms, and other businesses directly to your own foreign account – without hidden fees"
        visual={<BillsVisual />}
      />
      <FeatureSection
        variant="red"
        title="Send stablecoins to anyone, anywhere"
        description="Receive payments from your employers, clients, social media platforms, and other businesses directly to your own foreign account – without hidden fees"
        centered
      />
      <Footer />
    </>
  );
}
