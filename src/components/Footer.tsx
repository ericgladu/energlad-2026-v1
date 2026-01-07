import energladLogo from "@/assets/energlad-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={energladLogo}
              alt="EnerGlad Renewables"
              className="h-12 w-auto"
            />
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} EnerGlad Renewables. All rights reserved.
          </p>

          {/* Contact */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="tel:6138071100" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              613-807-1100
            </a>
            <a 
              href="mailto:info@energlad.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              info@energlad.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
