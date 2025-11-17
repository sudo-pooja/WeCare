import { Button } from "@/components/ui/button";
import ringImage from "@/assets/wecare-ring.jpg";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-secondary via-accent-light to-secondary py-24 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(10,91,90,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,234,224,0.15),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-accent/50 rounded-full text-sm font-medium text-accent-foreground mb-2">
              Launching Soon
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Your daily path to <span className="text-primary">wellness</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              The WeCare Ring translates your body's signals into personalized insights. 
              Understand your sleep, activity, and stress to live a more balanced life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base px-8 py-6"
              >
                Order Your Ring
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-slow">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/40 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group bg-card">
              <img 
                src={ringImage} 
                alt="WeCare Ring - Smart wellness tracking device" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
