import { SignUp } from "@clerk/clerk-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignupPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="w-full bg-gradient-to-br from-primary-light via-accent to-secondary py-20 md:py-32 relative overflow-hidden min-h-[calc(100vh-200px)] flex items-center justify-center">
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,91,90,0.12),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(10,91,90,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,234,224,0.15),transparent_50%)]"></div>
        
        <div className="w-full max-w-lg mx-auto px-6 relative z-10 animate-fade-in">
          {/* Glow effect wrapper */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-75 animate-pulse"></div>
            <div className="relative">
              <SignUp
                appearance={{
                  elements: {
                    rootBox: "mx-auto w-full",
                    card: "shadow-2xl bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:border-primary/30",
                    headerTitle: "text-3xl font-bold text-foreground mb-2",
                    headerSubtitle: "text-muted-foreground text-base",
                    socialButtonsBlockButton:
                      "bg-secondary hover:bg-secondary/90 text-secondary-foreground border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md rounded-lg font-medium",
                    socialButtonsBlockButtonText: "font-medium",
                    dividerLine: "bg-border",
                    dividerText: "text-muted-foreground text-sm",
                    formButtonPrimary:
                      "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] rounded-lg font-semibold text-sm py-3 px-4",
                    formFieldInput:
                      "bg-background border-input text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 rounded-lg h-11",
                    formFieldLabel: "text-foreground font-medium text-sm mb-1.5",
                    formFieldErrorText: "text-destructive text-sm",
                    footerActionLink: "text-primary hover:text-primary/80 font-medium transition-colors duration-200",
                    identityPreviewText: "text-foreground",
                    identityPreviewEditButton: "text-primary hover:text-primary/80 transition-colors duration-200",
                    formResendCodeLink: "text-primary hover:text-primary/80 font-medium",
                    otpCodeFieldInput: "bg-background border-input text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 rounded-lg",
                    selectButton: "bg-background border-input text-foreground hover:border-primary/50 transition-all duration-300 rounded-lg",
                    phoneInputBox: "bg-background border-input focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all duration-300 rounded-lg",
                  },
                }}
                routing="path"
                path="/signup"
                signInUrl="/login"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignupPage;

