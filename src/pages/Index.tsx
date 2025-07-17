import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Difference from "@/components/Difference";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <WhoWeHelp />
      <div id="services">
        <Services />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="about">
        <Difference />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
