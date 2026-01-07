import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueStatement from "@/components/ValueStatement";
import OutcomesSection from "@/components/OutcomesSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ValueStatement />
        <OutcomesSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <HowWeWorkSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
