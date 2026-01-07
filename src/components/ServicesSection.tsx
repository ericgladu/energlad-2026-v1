import { 
  Monitor, 
  Wrench, 
  BarChart3, 
  ClipboardCheck, 
  FolderKanban 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "24/7 Remote Monitoring",
      description: "Daily energy monitoring to preempt production affecting issues and ensure optimal performance.",
    },
    {
      icon: Wrench,
      title: "Preventative & Reactive Maintenance",
      description: "Routine maintenance to minimize downtime and enhance system ROI with rapid response capabilities.",
    },
    {
      icon: BarChart3,
      title: "Energy Production Analysis",
      description: "Performance metric analysis and comprehensive reporting for informed decision-making.",
    },
    {
      icon: ClipboardCheck,
      title: "3rd Party Due Diligence",
      description: "Inspection services ensuring construction compliance with industry standards and installer accountability.",
    },
    {
      icon: FolderKanban,
      title: "Project Management",
      description: "End-to-end project management from design to commissioning, delivering on-time and within budget.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solar PV solutions tailored to maximize your investment
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
