import { Button } from "@/components/ui/button";
import { Calendar, Eye, ArrowRight, CheckCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-accent text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-glow absolute top-10 right-20 w-40 h-40 rounded-full opacity-20 float-animation"></div>
        <div className="hero-glow absolute bottom-20 left-10 w-32 h-32 rounded-full opacity-30 float-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Smarter Growth.
          <span className="block">Fewer Headaches.</span>
        </h2>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Book your free 30-minute call.
        </p>

        <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto">
          We'll map 2–3 automation opportunities and content wins to grow your revenue—fast.
        </p>

        {/* Benefits list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            "Free digital audit worth £2,000",
            "Custom growth roadmap",
            "3-5 immediate action items"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start">
              <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
              <span className="text-white/90">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto group bg-white text-primary hover:bg-white/90"
          >
            <Calendar className="mr-2" />
            Book Strategy Call
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline-glow" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10"
          >
            <Eye className="mr-2" />
            See Client Examples
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <p className="text-white/70 text-sm mb-4">
            ⭐⭐⭐⭐⭐ Trusted by 150+ clinics and service businesses across the UK
          </p>
          <p className="text-white/60 text-xs">
            No contracts • Cancel anytime • Results guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;