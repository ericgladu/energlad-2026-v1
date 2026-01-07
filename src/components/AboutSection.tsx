import solarAboutImage from "@/assets/solar-about.jpg";

const AboutSection = () => {
  const stats = [
    { value: "8MW+", label: "Under Contract" },
    { value: "2", label: "Countries Served" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Powering Your Solar Future
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Founded in 2020</span>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              EnerGlad is a rapidly growing company providing comprehensive services for 
              solar PV asset owners across Canada and the USA.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 8MW of solar assets currently under contract, we deliver excellence 
              in operations, maintenance, construction, and project management.
            </p>

            {/* Stats */}
            <div className="flex gap-12 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-number">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={solarAboutImage} 
                alt="Solar installation" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
