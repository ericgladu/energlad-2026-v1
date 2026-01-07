import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animate";

const ClientsSection = () => {
  const credibilityPoints = [
    "10+ MW under active stewardship",
    "Commercial rooftop and ground-mount systems supported across Ontario",
    "Experience with co-ops, institutional owners, and commercial portfolios",
  ];

  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Trusted Oversight for Commercial Solar Assets
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </FadeInUp>

        {/* Credibility Points */}
        <StaggerContainer className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {credibilityPoints.map((point, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">{point}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeInUp delay={0.3} className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            (Client names and asset details are shared with permission or anonymized.)
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ClientsSection;
