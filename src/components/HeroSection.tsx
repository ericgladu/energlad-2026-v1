import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,30%,15%,0.8)] via-[hsl(220,30%,15%,0.5)] to-[hsl(220,30%,15%,0.7)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        {/* Sun Icon */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border border-primary/40 sun-icon-glow animate-pulse-glow">
            <Sun className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[hsl(var(--text-light))] mb-6 animate-fade-in font-display leading-tight">
          Stewards of Solar Assets
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[hsl(var(--text-light-muted))] max-w-3xl mx-auto mb-4 animate-fade-in-delay-1">
          Operations, Maintenance & Independent Quality Assurance for Commercial Solar
        </p>
        
        <p className="text-base text-[hsl(var(--text-light-muted)/0.8)] max-w-2xl mx-auto mb-10 animate-fade-in-delay-1">
          Protecting production, reducing unplanned downtime, and safeguarding long-term asset value—year after year.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <Button 
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="rounded-full px-8 py-6 text-base font-semibold"
          >
            Request a Consultation
          </Button>
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("#services")}
            className="rounded-full px-8 py-6 text-base font-semibold"
          >
            See Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[hsl(var(--text-light)/0.4)] flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[hsl(var(--text-light)/0.6)] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
