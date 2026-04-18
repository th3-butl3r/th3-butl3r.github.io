import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CertificationsCTA from "@/components/CertificationsCTA";
import BrandCarousel from "@/components/BrandCarousel";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import ClientCarousel from "@/components/ClientCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <BrandCarousel />
      <CertificationsCTA />
      <ClientCarousel />
      <Team />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
