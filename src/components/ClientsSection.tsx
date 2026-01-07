import { FadeInUp, FadeInScale, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animate";

const ClientsSection = () => {
  const trustIndicators = [
    { value: "10MW+", label: "Assets Under Management" },
    { value: "99.5%", label: "Average System Uptime" },
    { value: "5+ Years", label: "Average Client Relationship" },
  ];

  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Clients and Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with commercial, industrial, and institutional asset owners who value 
            long-term operational excellence.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </FadeInUp>

        {/* Client Logos Placeholder */}
        <FadeInScale className="bg-muted/30 border border-border rounded-2xl p-12 text-center">
          <p className="text-muted-foreground mb-4">
            Client logos and case studies available upon request.
          </p>
          <p className="text-sm text-muted-foreground/70">
            We respect client confidentiality and share references only with their explicit approval.
          </p>
        </FadeInScale>

        {/* Trust Indicators */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-16">
          {trustIndicators.map((indicator) => (
            <StaggerItem key={indicator.label} className="text-center">
              <div className="text-4xl font-bold text-primary font-display mb-2">
                {indicator.value}
              </div>
              <p className="text-sm text-muted-foreground">{indicator.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ClientsSection;
