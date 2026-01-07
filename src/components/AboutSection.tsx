import { Shield, Clock, MapPin } from "lucide-react";
import solarAboutImage from "@/assets/solar-about.jpg";
const AboutSection = () => {
  const stats = [{
    value: "10MW+",
    label: "Under Contract"
  }, {
    value: "2",
    label: "Countries Served"
  }];
  const values = [{
    icon: Shield,
    title: "Independent",
    description: "No ties to manufacturers or installers—our recommendations are based solely on asset performance."
  }, {
    icon: Clock,
    title: "Long-Term Focus",
    description: "We measure success in decades, not project milestones. Your asset's lifecycle is our commitment."
  }, {
    icon: MapPin,
    title: "Ontario-Based",
    description: "Headquartered in Ottawa with deep knowledge of Canadian regulatory and utility requirements."
  }];
  return <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Stewards of Solar Assets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with asset owners for the full operational lifecycle—not just a single project phase.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Established 2019</span>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              EnerGlad is an independent solar specialist providing comprehensive O&M, 
              monitoring, and asset management services for PV system owners across 
              Canada and the USA.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">With over 10 MW under active contract, we bring deep technical expertise and operational transparency to every engagement. Our role is to protect your investment and ensure reliable energy production—year after year.</p>

            {/* Stats */}
            <div className="flex gap-12 pt-6">
              {stats.map(stat => <div key={stat.label} className="stat-item">
                  <div className="stat-number">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>)}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={solarAboutImage} alt="Commercial solar installation" className="w-full h-auto object-cover" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(value => <div key={value.title} className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-display mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;