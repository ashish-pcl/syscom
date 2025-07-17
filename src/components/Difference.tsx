import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Handshake } from "lucide-react";

const Difference = () => {
  const differentiators = [
    {
      icon: Brain,
      title: "🧠 AI Where It Matters, Humans Where It Counts",
      description: "You get powerful automations with the empathy and precision of real experts.",
      color: "bg-secondary"
    },
    {
      icon: BarChart3,
      title: "📊 No Fluff, Just Results",
      description: "Every system, sequence, and post we create ties to real KPIs—and we show our work.",
      color: "bg-accent"
    },
    {
      icon: Handshake,
      title: "🤝 One Partner, All Your Growth Needs",
      description: "We don't just \"set it up.\" We help you evolve and expand over time.",
      color: "bg-primary"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            💡 <span className="text-gradient">The SysComm Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why forward-thinking businesses choose SysComm over traditional agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => {
            const IconComponent = diff.icon;
            return (
              <Card key={index} className="card-elegant border-0 text-center h-full">
                <CardHeader className="pb-4">
                  <div className="mb-6 flex justify-center">
                    <div className={`w-20 h-20 rounded-2xl ${diff.color} flex items-center justify-center`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                    {diff.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {diff.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stories Teaser */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                💬 Success Stories
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our clients consistently see 40-300% growth in qualified leads within 90 days.
              </p>
              
              {/* Testimonial preview cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-2">290%</div>
                  <div className="text-sm text-muted-foreground">Increase in qualified leads</div>
                  <div className="text-xs text-muted-foreground mt-2">Dental Practice, London</div>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <div className="text-3xl font-bold text-accent mb-2">75%</div>
                  <div className="text-sm text-muted-foreground">Reduction in no-shows</div>
                  <div className="text-xs text-muted-foreground mt-2">Physio Clinic, Manchester</div>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-2">180%</div>
                  <div className="text-sm text-muted-foreground">Revenue growth in 6 months</div>
                  <div className="text-xs text-muted-foreground mt-2">Business Coach, Birmingham</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;