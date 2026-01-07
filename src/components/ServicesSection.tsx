import { 
  Settings, 
  ClipboardCheck, 
  LifeBuoy,
  UserCheck
} from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animate";

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Operations & Maintenance (O&M)",
      description:
        "Ongoing system monitoring, preventative maintenance, troubleshooting, and corrective actions to maximize uptime and energy yield.",
    },
    {
      icon: ClipboardCheck,
      title: "Independent Inspections & Quality Assurance",
      description:
        "Commissioning, periodic inspections, and third-party quality reviews aligned with industry standards and best practices.",
    },
    {
      icon: LifeBuoy,
      title: "Lifecycle Asset Support",
      description:
        "From post-installation handover through mid-life inspections and repowering support, we stay engaged beyond a single project phase.",
    },
    {
      icon: UserCheck,
      title: "Technical Advisory & Owner Representation",
      description:
        "Engineering insight and owner-side support for asset owners, co-operatives, and institutional clients.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </FadeInUp>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
