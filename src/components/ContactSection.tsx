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

  const mailtoHref = "mailto:info@energlad.com?subject=Asset%20Discussion";
  const openMailto = () => {
    // Using location.assign is typically more reliable than relying on <a> default behavior
    window.location.assign(mailtoHref);
  };
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
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by cooperative and institutional asset owners.
          </p>
          <Button
            size="lg"
            className="rounded-full px-10 py-6 text-base font-semibold"
            onClick={openMailto}
            type="button"
          >
            Discuss Your Asset
          </Button>
        </FadeInUp>

      </div>
    </section>
  );
};

export default ContactSection;
