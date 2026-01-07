import { 
  Monitor, 
  Wrench, 
  BarChart3, 
  ClipboardCheck, 
  FolderKanban,
  PenTool
} from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animate";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "24/7 Remote Monitoring",
      description:
        "Continuous performance tracking with automated alerting to identify production anomalies before they impact revenue.",
    },
    {
      icon: Wrench,
      title: "Preventative & Corrective Maintenance",
      description:
        "Scheduled inspections and rapid-response service to maintain system uptime and extend asset lifespan.",
    },
    {
      icon: BarChart3,
      title: "Performance Analysis & Reporting",
      description:
        "Detailed production metrics, degradation tracking, and periodic reporting for informed asset management decisions.",
    },
    {
      icon: ClipboardCheck,
      title: "Technical Due Diligence",
      description:
        "Independent inspections and commissioning oversight to verify quality and ensure accountability.",
    },
    {
      icon: FolderKanban,
      title: "Asset Management",
      description:
        "Lifecycle planning, warranty administration, and coordination with utilities and regulatory bodies.",
    },
    {
      icon: PenTool,
      title: "Engineering Services",
      description:
        "Engineering-led design support and technical reviews delivered through vetted third-party partners.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Technical Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Operational support designed to protect performance and extend the productive life of your PV assets.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </FadeInUp>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="service-card group h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground font-display mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
