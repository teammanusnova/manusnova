import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/public/bxhandup.png"
              alt="Manus Nova - A Helping Hand"
              className="h-12 w-auto"
              />

          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors">
              Mission
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="#donations" className="text-muted-foreground hover:text-foreground transition-colors">
              Support Us
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Get Involved
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;