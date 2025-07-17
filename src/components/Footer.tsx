import { Separator } from "@/components/ui/separator";
import { MapPin, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/c40d94cc-6ecd-4197-bd18-3d5ea31af321.png" 
                alt="SysComm International Logo" 
                className="h-8 w-auto mb-4"
              />
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Boutique digital automation agency built by marketing strategists, healthcare growth consultants, and AI engineers.
            </p>
            <p className="text-sm text-muted-foreground">
              Our mission: to make growth feel effortless for ambitious service businesses.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">London, UK</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm">Serving Worldwide</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">hello@syscomm.international</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Marketing Automation</li>
              <li>AI Content Generation</li>
              <li>CRM & Analytics</li>
              <li>Paid Ads & SEO</li>
              <li>Healthcare Solutions</li>
              <li>Growth Consulting</li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 SysComm International. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;