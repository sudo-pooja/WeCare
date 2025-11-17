import { Moon, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Moon,
    title: "Advanced Sleep Tracking",
    description: "Monitor your sleep cycles, duration, and quality to wake up refreshed.",
  },
  {
    icon: Heart,
    title: "Stress Monitoring",
    description: "Understand your body's stress responses and find calm with guided exercises.",
  },
  {
    icon: TrendingUp,
    title: "Personalized Insights",
    description: "Get daily, actionable advice based on your unique health data.",
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full bg-gradient-to-b from-background via-secondary to-accent-light py-24 md:py-36 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a5b5a08_1px,transparent_1px),linear-gradient(to_bottom,#0a5b5a08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">All-in-one wellness.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to understand your body and improve your health, all in one elegant device.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-card border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-scale-in backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-10 space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent via-accent to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
