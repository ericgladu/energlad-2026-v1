import { FadeInUp } from "@/components/ui/scroll-animate";

const ValueStatement = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <FadeInUp className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
            With over 10 MW under active stewardship, EnerGlad brings technical depth, 
            operational transparency, and long-term reliability oversight to commercial solar assets.
          </p>
          <p className="text-lg text-muted-foreground">
            We partner with owners to protect production and maximize lifecycle performance—not just install panels.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ValueStatement;
