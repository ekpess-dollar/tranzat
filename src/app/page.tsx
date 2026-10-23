import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <div className="h-[60px] bg-white" />
      </main>
      <Footer />
    </>
  );
}
