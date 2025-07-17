import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, FileText, Cog, Rocket, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Strategy Call",
      description: "Free call + digital audit to uncover 3–5 fast wins using what you already have.",
      color: "from-secondary to-secondary-light"
    },
    {
      number: "02",
      icon: FileText,
      title: "Blueprint Delivery",
      description: "Get a 1-page roadmap tailored to your growth goals, platforms, and audience.",
      color: "from-accent to-accent-light"
    },
    {
      number: "03",
      icon: Cog,
      title: "Build & Automate",
      description: "We deploy your systems, content engines, and automations. You stay focused on service.",
      color: "from-primary to-primary-light"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch + Optimize",
      description: "Performance reviews, optimizations, and ongoing support that grows with you.",
      color: "from-secondary to-accent"
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            🛠️ <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution in 4 simple steps. No complex setups, no lengthy onboarding.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="card-elegant border-0 text-center relative">
                    {/* Step number circle */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className={`w-12 h-12 rounded-full ${index === 0 ? 'bg-secondary' : index === 1 ? 'bg-accent' : index === 2 ? 'bg-primary' : 'bg-secondary'} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {step.number}
                      </div>
                    </div>
                    
                    <CardContent className="p-8 pt-12">
                      <div className="mb-6 flex justify-center">
                        <div className={`w-16 h-16 rounded-full ${index === 0 ? 'bg-secondary' : index === 1 ? 'bg-accent' : index === 2 ? 'bg-primary' : 'bg-secondary'} flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full ${index === 0 ? 'bg-secondary' : index === 1 ? 'bg-accent' : index === 2 ? 'bg-primary' : 'bg-secondary'} flex items-center justify-center text-white font-bold`}>
                    {step.number}
                  </div>
                </div>
                <Card className="card-elegant border-0 flex-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg ${index === 0 ? 'bg-secondary' : index === 1 ? 'bg-accent' : index === 2 ? 'bg-primary' : 'bg-secondary'} flex items-center justify-center mr-3`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your free strategy call today and discover how we can transform your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="group">
                <Phone className="mr-2" />
                Book Free Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-glow" size="lg">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;