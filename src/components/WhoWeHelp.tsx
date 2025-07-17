import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Users, ArrowRight } from "lucide-react";

const WhoWeHelp = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            🎯 <span className="text-gradient">Who We Help</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized growth solutions for clinics and service experts who demand results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Clinics & Health Practices */}
          <Card className="card-elegant border-0 overflow-hidden group">
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                    <Stethoscope className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold">
                    Clinics & Health Practices
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Reduce no-shows, fill underbooked slots, and activate patient loyalty with multi-touch automations.
                </p>
                
                <div className="bg-white rounded-lg p-4 mb-6 border border-border shadow-sm">
                  <p className="font-semibold text-foreground mb-2">Popular with:</p>
                  <p className="text-sm text-foreground">
                    Dental, Aesthetic, Physio, Multi-specialty, Private GPs
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Turn leads into appointments with smart booking flows</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Reduce no-shows with intelligent reminder sequences</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Grow high-value services with targeted funnels</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Stay fully compliant with GDPR/HIPAA workflows</span>
                  </li>
                </ul>

                <Button variant="cta" className="w-full group">
                  Get Healthcare Growth Plan
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Service Providers & Experts */}
          <Card className="card-elegant border-0 overflow-hidden group">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold">
                    Service Providers & Experts
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Coaches, consultants, agencies, and therapists scaling 1:1 or group services.
                </p>
                
                <div className="bg-white rounded-lg p-4 mb-6 border border-border shadow-sm">
                  <p className="font-semibold text-foreground mb-2">Let us handle growth systems</p>
                  <p className="text-sm text-foreground">
                    So you can focus on delivery and client success
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Automated lead qualification and nurturing sequences</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">High-converting sales funnels for premium services</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Multi-platform content distribution and engagement</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Client onboarding and retention automation</span>
                  </li>
                </ul>

                <Button variant="cta" className="w-full group bg-accent hover:bg-accent-light">
                  Get Expert Growth Plan
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;