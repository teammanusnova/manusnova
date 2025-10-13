import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Manus Nova - A Helping Hand" 
              className="h-12 w-auto rounded-full logo-3d-hover cursor-pointer"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#mission" 
              onClick={(e) => handleNavClick(e, 'mission')}
              className="text-muted-foreground hover:text-foreground transition-all text-3d-hover cursor-pointer"
            >
              Mission
            </a>
            <a 
              href="#donations" 
              onClick={(e) => handleNavClick(e, 'donations')}
              className="text-muted-foreground hover:text-foreground transition-all text-3d-hover cursor-pointer"
            >
              Support Us
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-muted-foreground hover:text-foreground transition-all text-3d-hover cursor-pointer"
            >
              Contact
            </a>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get Involved
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get Involved with Manus Nova</DialogTitle>
                <DialogDescription>
                  We'd love to have you join our team!
                </DialogDescription>
              </DialogHeader>
              <Card className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contact Us</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Email:</span> teammanusnova@gmail.com
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Location:</span> Bronx High School of Science
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Instagram:</span> @projectmanusnova
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    If you want to join, you must reach out by email or Instagram.
                  </p>
                </div>
              </Card>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;