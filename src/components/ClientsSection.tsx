const ClientsSection = () => {
  // Placeholder for client logos - these would be replaced with actual approved client logos
  const clients = [
    { name: "Client logos will appear here with approval" },
  ];

  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Representative Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with commercial, industrial, and institutional asset owners who value 
            long-term operational excellence.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Client Logos Placeholder */}
        <div className="bg-muted/30 border border-border rounded-2xl p-12 text-center">
          <p className="text-muted-foreground mb-4">
            Client logos and case studies available upon request.
          </p>
          <p className="text-sm text-muted-foreground/70">
            We respect client confidentiality and share references only with their explicit approval.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-display mb-2">10MW+</div>
            <p className="text-sm text-muted-foreground">Assets Under Management</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-display mb-2">99.5%</div>
            <p className="text-sm text-muted-foreground">Average System Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-display mb-2">5+ Years</div>
            <p className="text-sm text-muted-foreground">Average Client Relationship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
