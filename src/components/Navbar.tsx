import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoImage from "@/assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 pt-2 px-2 md:pt-3 md:px-3 transition-transform duration-300 ease-in-out ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <nav 
        className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4 border-b border-palette-golden/20 bg-palette-light-cream backdrop-blur-sm rounded-xl shadow-[0_10px_15px_-3px_hsl(0_0%_0%_/_0.1),0_4px_6px_-2px_hsl(0_0%_0%_/_0.05)]"
      >
        <div className="flex items-center justify-between w-full">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="WeCare Home"
          >
            <img 
              src={logoImage} 
              alt="WeCare Logo" 
              className="h-8 sm:h-10 md:h-10 w-auto transition-transform group-hover:scale-110"
            />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("pricing")}
            >
              Get Started
            </Button>
            
            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <img 
                      src={logoImage} 
                      alt="WeCare Logo" 
                      className="h-12 w-auto"
                    />
                  </div>
                  
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors duration-300 py-2"
                      >
                        {link.label}
                      </button>
                    ))}
                  </nav>
                  
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 mt-4"
                    onClick={() => scrollToSection("pricing")}
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
