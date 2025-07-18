import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, Brain, Zap, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-growth.jpg";
import doctorImage from "@/assets/doctor-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-background">
      {/* Animated mesh background */}
      <div className="absolute inset-0 hero-glow opacity-60" />
      
      {/* Floating elements with modern styling */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: '6s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-glass border">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">AI-Powered Growth mayank  Engine</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-modern">
                <span className="text-glow">Smarter Growth.</span>
                <span className="block text-gradient mt-2">
                  Simpler Systems.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-modern">
                We help clinics and service brands grow faster with AI-led digital marketing and automation—so your calendar stays full, and your team stays focused.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-hero text-lg px-8 py-4 h-auto group"
              >
                <Calendar className="mr-2" />
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-glow text-lg px-8 py-4 h-auto"
              >
                <MessageSquare className="mr-2" />
                See Client Examples
              </Button>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>290+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>GDPR/HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="lg:col-span-5 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Image container with modern styling */}
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src={doctorImage} 
                  alt="Healthcare professional working with modern technology" 
                  className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Modern gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"></div>
                
                {/* Floating stats card with glassmorphism */}
                <div className="absolute bottom-6 left-6 card-glass p-6 rounded-2xl max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gradient">290%</div>
                      <div className="text-sm text-muted-foreground">Average Lead Increase</div>
                    </div>
                  </div>
                </div>

                {/* AI indicator */}
                <div className="absolute -top-4 -right-4 card-glass p-4 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">AI Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Value Proposition Card - Modern styling */}
        <div className="mt-16 lg:mt-24 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="card-glass rounded-3xl p-8 md:p-12 border max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl md:text-3xl font-bold text-gradient">
                  Why SysComm?
                </h2>
              </div>
              <p className="text-xl text-foreground font-medium text-modern">
                You don't need more tools. You need results.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-modern">
                We turn disconnected marketing, manual follow-ups, and missed leads into one connected growth engine—powered by automation, AI, and expert strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Discover more</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-secondary to-accent rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;