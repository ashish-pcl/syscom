import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Brain, 
  BarChart3, 
  Target, 
  Cog, 
  Users,
  Mail,
  Bot,
  Database,
  TrendingUp,
  Settings,
  Share2
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Marketing Automation Systems",
      items: [
        "Lead capture → nurturing → booking flows",
        "Multi-platform outreach (Email, SMS, WhatsApp, Facebook, LinkedIn)",
        "24/7 AI-powered follow-up and calendar sync"
      ]
    },
    {
      icon: Brain,
      title: "AI Content Engines",
      items: [
        "Hyper-relevant blog posts, newsletters, and nurture sequences",
        "Lead magnets and interactive content (quizzes, guides, calculators)",
        "SEO-optimized, multilingual if needed"
      ]
    },
    {
      icon: Database,
      title: "CRM, Leads & Analytics",
      items: [
        "Smart segmentation + lead scoring",
        "Conversion dashboards with ROI reporting",
        "Automated engagement triggers (open, click, visit-based)"
      ]
    },
    {
      icon: Target,
      title: "Paid Ads & Organic Funnels",
      items: [
        "Full-funnel strategy across Google, Meta, LinkedIn",
        "Conversion-optimized microsites + tracking setup",
        "SEO clustering and blog strategy for authority building"
      ]
    },
    {
      icon: Cog,
      title: "Process Automation for Growth Ops",
      items: [
        "Seamless integrations with your CRM, PMS, EHR",
        "Staff onboarding, no-show follow-ups, billing & feedback automation",
        "Real-time reporting and intelligent alerts"
      ]
    },
    {
      icon: Share2,
      title: "Social & Community Building",
      items: [
        "Schedule and syndicate content automatically",
        "Webinar, event, and loyalty program workflows",
        "Track engagement and refine voice via AI insights"
      ]
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            🚀 <span className="text-gradient">What We Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive growth systems designed to scale your business automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-elegant border-0 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Healthcare Solutions Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              🏥 <span className="text-gradient">Deep Clinic & Healthcare Solutions</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized tools and workflows designed specifically for healthcare providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                title: "Turn Leads into Appointments",
                description: "Web chat, forms, live availability, and auto-confirmation sequences."
              },
              {
                icon: TrendingUp,
                title: "Reduce No-Shows, Increase Retention",
                description: "Smart reminders, digital pre-visit info, and post-care drip sequences."
              },
              {
                icon: BarChart3,
                title: "Grow High-Value Services",
                description: "Ads + email funnels that build demand for cosmetic, aesthetic, private pay, or specialist services."
              },
              {
                icon: Settings,
                title: "Stay Fully Compliant",
                description: "GDPR/HIPAA-ready workflows and secure messaging tools."
              }
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="card-elegant border-0 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-3">
                      {solution.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;