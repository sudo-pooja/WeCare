import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, X, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "Basic",
    price: "₹0",
    period: "month",
    yearlyPrice: null,
    popular: false,
    features: [
      { text: "Ads supported", included: true },
      { text: "3 AI workouts/month", included: true },
      { text: "1 nutrition plan/month", included: true },
      { text: "Sync 1 wearable", included: true },
      { text: "Expert sessions", included: false },
      { text: "Live classes", included: false },
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "₹299",
    period: "month",
    yearlyPrice: "₹2,999 / year (Save 17%)",
    popular: true,
    features: [
      { text: "Unlimited AI workouts", included: true },
      { text: "4 nutrition plans/month", included: true },
      { text: "4 expert sessions/month", included: true },
      { text: "Sync 3 wearables", included: true },
      { text: "4 live classes/month", included: true },
    ],
    buttonText: "Choose Pro",
  },
  {
    name: "Premium",
    price: "₹599",
    period: "month",
    yearlyPrice: "₹5,999 / year (Save 17%)",
    popular: false,
    features: [
      { text: "AI twin", included: true },
      { text: "Unlimited expert sessions", included: true },
      { text: "Advanced analytics (1-year)", included: true },
      { text: "12 live classes/month", included: true },
      { text: "2 sub-accounts", included: true },
    ],
    buttonText: "Choose Premium",
  },
  {
    name: "Platinum",
    price: "₹1,499",
    period: "month",
    yearlyPrice: "₹14,999 / year (Save 17%)",
    popular: false,
    features: [
      { text: "Concierge MD access", included: true },
      { text: "Predictive insights", included: true },
      { text: "Unlimited live classes", included: true },
      { text: "4 sub-accounts", included: true },
      { text: "Priority support", included: true },
    ],
    buttonText: "Choose Platinum",
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (planName: string) => {
    // Select the new plan (automatically deselects the previous one)
    setSelectedPlan(planName);
    console.log("Selected plan:", planName);
    // You can add additional logic here, like opening a checkout modal
  };

  return (
    <section id="pricing" className="w-full bg-gradient-to-b from-accent-light via-card to-secondary py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">WeCare Subscription Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => {
            const isSelected = selectedPlan === plan.name;
            return (
              <Card
                key={plan.name}
                onClick={() => handleSelectPlan(plan.name)}
                className={`relative border-2 bg-card cursor-pointer transition-all duration-300 ease-out ${
                  isSelected
                    ? "border-primary shadow-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent scale-[1.03] z-10"
                    : selectedPlan && selectedPlan !== plan.name
                    ? "border-border/60 shadow-sm hover:border-border"
                    : plan.popular 
                    ? "border-primary shadow-xl hover:shadow-2xl hover:scale-[1.01] hover:border-primary/80" 
                    : "border-border shadow-md hover:border-primary/50 hover:shadow-lg hover:scale-[1.01]"
                }`}
              >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 shadow-md">
                  Most Popular
                </Badge>
              )}
              
              {isSelected && (
                <div className="absolute top-4 right-4 animate-in fade-in zoom-in duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
                    <CheckCircle2 className="relative h-6 w-6 text-primary fill-primary/20" />
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground"> / {plan.period}</span>
                </div>
                {plan.yearlyPrice && (
                  <p className="text-sm text-green-600 font-medium">{plan.yearlyPrice}</p>
                )}
              </CardHeader>

              <CardContent className="space-y-4 pb-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground/60"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectPlan(plan.name);
                  }}
                  className={`w-full shadow-md transition-all duration-300 ${
                    isSelected
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg scale-105"
                      : plan.popular 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02]" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02]"
                  }`}
                  size="lg"
                >
                  {isSelected ? "Selected" : plan.buttonText}
                </Button>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
