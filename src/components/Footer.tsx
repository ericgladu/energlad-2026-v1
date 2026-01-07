import { Sun } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-[hsl(var(--text-light))] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-[hsl(var(--text-light)/0.5)]"></div>
              <Sun className="w-5 h-5 text-[hsl(var(--text-light)/0.8)]" strokeWidth={1.5} />
            </div>
            <span className="text-lg font-bold font-display">
              ENER<span className="text-primary">GLAD</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[hsl(var(--text-light)/0.6)]">
            © {currentYear} EnerGlad Renewables. All rights reserved.
          </p>

          {/* Contact */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="tel:6138071100" 
              className="text-[hsl(var(--text-light)/0.6)] hover:text-[hsl(var(--text-light))] transition-colors"
            >
              613-807-1100
            </a>
            <a 
              href="mailto:info@energlad.com" 
              className="text-[hsl(var(--text-light)/0.6)] hover:text-[hsl(var(--text-light))] transition-colors"
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
