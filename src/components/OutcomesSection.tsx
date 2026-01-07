import { Activity, ShieldCheck, FileText, TrendingUp } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animate";

const OutcomesSection = () => {
  const outcomes = [
    {
      icon: Activity,
      title: "Reliable Production",
      description:
        "Proactive monitoring and rapid issue response to keep systems performing.",
    },
    {
      icon: ShieldCheck,
      title: "Lower Risk",
      description:
        "Independent oversight that protects against degradation and hidden failures.",
    },
    {
      icon: FileText,
      title: "Operational Transparency",
      description:
        "Clear reporting and documented findings you can act on.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Asset Value",
      description:
        "Intelligent stewardship that supports lifecycle performance goals.",
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
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
