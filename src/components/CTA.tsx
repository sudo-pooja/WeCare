import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-gradient-to-br from-primary-light via-accent to-secondary py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,91,90,0.12),transparent_70%)]"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Ready to find your <span className="text-primary">balance</span>?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join thousands of people already improving their wellness with WeCare.
        </p>
        <Button 
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-12 py-7 mt-6"
          onClick={() => navigate("/login")}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CTA;
