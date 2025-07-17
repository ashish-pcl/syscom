import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="SysComm International Logo"
              className="h-8 md:h-10 w-auto"
            />

          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              <MessageSquare className="w-4 h-4 mr-2" />
              Examples
            </Button>
            <Button variant="cta" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Book Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;