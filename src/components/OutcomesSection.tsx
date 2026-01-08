import { Activity, ShieldCheck, FileText, Users } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animate";

const OutcomesSection = () => {
  const outcomes = [
    {
      icon: Users,
      title: "Owner Representation",
      description:
        "Independent, owner-side technical representation across the full asset lifecycle.",
    },
    {
      icon: Activity,
      title: "Reliable Performance",
      description:
        "Proactive monitoring and inspection to identify issues before they become outages.",
    },
    {
      icon: FileText,
      title: "Operational Transparency",
      description:
        "Clear reporting, documented findings, and data you can trust.",
    },
    {
      icon: ShieldCheck,
      title: "Lifecycle Asset Value",
      description:
        "Reduced risk and preserved system value through disciplined operations and oversight.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            What Asset Owners Gain
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </FadeInUp>

        {/* Outcomes Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome) => (
            <StaggerItem key={outcome.title}>
              <div className="text-center p-6 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <outcome.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-display mb-3">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default OutcomesSection;
