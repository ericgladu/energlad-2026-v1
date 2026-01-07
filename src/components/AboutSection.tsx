import solarAboutImage from "@/assets/solar-about.jpg";
import { SlideInLeft, SlideInRight } from "@/components/ui/scroll-animate";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <SlideInLeft className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={solarAboutImage}
                alt="Commercial ground-mounted solar array in Ontario maintained by EnerGlad Renewables"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center italic">
              Representative system maintained by EnerGlad. Client details withheld.
            </p>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </SlideInLeft>

          {/* Text Content */}
          <SlideInRight className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Established 2019</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
              Long-Term Partners, Not Short-Term Contractors
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              EnerGlad is an independent solar specialist providing comprehensive O&M, 
              monitoring, and asset management services for PV system owners across 
              Ontario and beyond.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We partner with asset owners for the full operational lifecycle—not just 
              a single project phase. Our focus is objective performance and reliability, 
              free from ties to manufacturers or installers.
            </p>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
