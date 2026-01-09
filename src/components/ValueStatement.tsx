import { FadeInUp } from "@/components/ui/scroll-animate";

const ValueStatement = () => {
  return (
    <section className="py-16 md:py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-6">
        <FadeInUp className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
            With over 10 MW under active contract, EnerGlad provides technical depth, 
            operational transparency, and independent oversight across the full solar asset lifecycle.
          </p>
          <div className="w-12 h-px bg-primary/40 mx-auto" />
          <p className="text-base md:text-lg text-muted-foreground italic">
            Our role is simple: protect your investment and ensure consistent, reliable energy production.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ValueStatement;
