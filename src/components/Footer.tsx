import logoImage from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img 
              src={logoImage} 
              alt="WeCare Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-110"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <a href="#careers" className="text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Careers
            </a>
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Terms of Service
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 WeCare. All rights reserved. Built with care for your wellness.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
