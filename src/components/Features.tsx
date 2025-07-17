import { Card, CardContent } from "@/components/ui/card";
import { Target, RotateCcw, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "🎯 AI + Strategy That Scales",
      description: "Predictable, data-driven campaigns that evolve as your business does."
    },
    {
      icon: RotateCcw,
      title: "🔁 End-to-End Patient/Client Journeys",
      description: "From first click to five-star review—every touchpoint is optimized."
    },
    {
      icon: TrendingUp,
      title: "📈 Performance You Can See",
      description: "Real dashboards. Real growth. Zero fluff."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="card-elegant text-center border-0"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;