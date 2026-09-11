import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IndustriesMarquee } from "@/components/IndustriesMarquee";
import { Services } from "@/components/Services";
import { ValueSection } from "@/components/ValueSection";
import { Process } from "@/components/Process";
import { Showcase } from "@/components/Showcase";
import { Stats } from "@/components/Stats";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueSection />
        <IndustriesMarquee />
        <Services />
        <Process />
        <Showcase />
        <Stats />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

