import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animate";

const ContactSection = () => {
  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: "613-807-1100",
      href: "tel:6138071100",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@energlad.com",
      href: "mailto:info@energlad.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ottawa, Ontario",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeInUp className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Let's Protect Your Solar Asset
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you manage a single system or a growing portfolio, EnerGlad provides the 
            technical oversight needed to protect performance and long-term value.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </FadeInUp>

        {/* CTA */}
        <FadeInUp delay={0.2} className="text-center mb-16">
          <Button size="lg" className="rounded-full px-10 py-6 text-base font-semibold" asChild>
            <a href="mailto:info@energlad.com?subject=Consultation%20Request">Request a Consultation</a>
          </Button>
        </FadeInUp>

        {/* Contact Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactItems.map((item) => (
            <StaggerItem key={item.label}>
              <div className="bg-card rounded-xl p-8 text-center shadow-lg border border-border hover:border-primary/30 transition-colors h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground font-display mb-2">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{item.value}</span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.4} className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            We typically respond within one business day.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ContactSection;
