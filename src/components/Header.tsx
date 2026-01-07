import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import energladLogo from "@/assets/energlad-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={energladLogo}
              alt="EnerGlad Renewables - Independent Solar Asset Management in Ontario"
              className="h-16 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <span className="text-sm font-medium text-muted-foreground">
              613-807-1100
            </span>
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="rounded-full px-6"
            >
              Request PV Support
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <span className="text-base font-medium text-muted-foreground py-2">
                613-807-1100
              </span>
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="rounded-full w-full mt-2"
              >
                Request PV Support
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
