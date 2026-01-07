import { FadeInUp } from "@/components/ui/scroll-animate";

const ValueStatement = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <FadeInUp className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
            With over 10 MW under active contract, EnerGlad provides technical depth, 
            operational transparency, and independent oversight across the full solar asset lifecycle.
          </p>
          <p className="text-lg text-muted-foreground">
            Our role is simple: protect your investment and ensure consistent, reliable energy production.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ValueStatement;
