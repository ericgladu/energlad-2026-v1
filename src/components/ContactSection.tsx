import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Talk to a Solar Specialist
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need ongoing O&M support, a second opinion on system performance, 
            or help navigating a technical issue—we're here to help.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactItems.map((item) => (
            <div 
              key={item.label}
              className="bg-card rounded-xl p-8 text-center shadow-lg border border-border hover:border-primary/30 transition-colors"
            >
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
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="rounded-full px-10 py-6 text-base font-semibold"
            asChild
          >
            <a href="mailto:info@energlad.com?subject=PV%20Support%20Inquiry">Request PV Support</a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            We typically respond within one business day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
