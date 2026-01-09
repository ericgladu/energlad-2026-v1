import { Scale, BarChart2, Handshake, Network } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animate";

const HowWeDeliverSection = () => {
  const principles = [
    {
      icon: Scale,
      title: "Independent by Design",
      description:
        "We are not tied to any manufacturer or installer—our recommendations are based solely on system performance and your best interest.",
    },
    {
      icon: BarChart2,
      title: "Data-Driven Decisions",
      description:
        "Monitoring, inspections, and recommendations are based on measured performance and documented findings.",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      description:
        "We work alongside asset owners throughout the operating life of their systems—not just at handover.",
    },
    {
      icon: Network,
      title: "Connected & Resourceful",
      description:
        "We draw on a curated network of vetted specialists—engineers, inspectors, and technical partners—to assemble the right team for every project.",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            How We Deliver
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </FadeInUp>

        {/* Principles Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {principles.map((principle) => (
            <StaggerItem key={principle.title}>
              <div className="bg-card rounded-xl p-8 text-center shadow-lg border border-border h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-display mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
