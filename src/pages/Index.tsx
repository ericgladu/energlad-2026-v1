import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueStatement from "@/components/ValueStatement";
import CredibilityCounter from "@/components/CredibilityCounter";
import OutcomesSection from "@/components/OutcomesSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ValueStatement />
        <CredibilityCounter />
        <OutcomesSection />
        <AboutSection />
        <ServicesSection />
        <HowWeWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
