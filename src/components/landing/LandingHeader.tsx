import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import creativosLogo from "@/assets/creativos-logo.jpg";

interface LandingHeaderProps {
  onOpenForm: () => void;
}

const LandingHeader = ({ onOpenForm }: LandingHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src={creativosLogo} 
              alt="CreativOS" 
              className="h-10 w-auto rounded-lg"
            />
            <span className="font-bold text-xl text-foreground hidden sm:block">
              CreativOS
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button
              onClick={onOpenForm}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold hidden sm:inline-flex"
            >
              Get Early Access
            </Button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-2 text-foreground font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onOpenForm();
                  setIsMenuOpen(false);
                }}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-2"
              >
                Get Early Access
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;
