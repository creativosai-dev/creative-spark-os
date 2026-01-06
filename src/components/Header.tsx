import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoImage from "@/assets/creativos-logo.jpg";

interface HeaderProps {
  onOpenForm: () => void;
}

const Header = ({ onOpenForm }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src={logoImage} 
              alt="CreativOS.ai" 
              className="h-8 w-auto"
            />
          </a>

          {/* CTA */}
          <Button variant="hero" size="sm" onClick={onOpenForm}>
            Get Early Access
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
