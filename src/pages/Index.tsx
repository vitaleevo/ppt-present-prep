import { Hero } from "@/components/Hero";
import { WhyInvest } from "@/components/WhyInvest";
import { Packages } from "@/components/Packages";
import { Comparison } from "@/components/Comparison";
import { Extras } from "@/components/Extras";
import { HowWeWork } from "@/components/HowWeWork";
import { Terms } from "@/components/Terms";
import { NextSteps } from "@/components/NextSteps";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyInvest />
      <Packages />
      <Comparison />
      <Extras />
      <HowWeWork />
      <Terms />
      <NextSteps />
      <Footer />
    </div>
  );
};

export default Index;
