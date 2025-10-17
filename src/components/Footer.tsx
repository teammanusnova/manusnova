import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">MN</span>
              </div>
              <h3 className="text-xl font-semibold">manus nova</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Empowering students to engineer solutions that transform lives, 
              one prosthetic at a time. Join us in our mission to make mobility 
              accessible to everyone in our community.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#mission" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Mission
              </a>
              <a href="#team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Meet the Team
              </a>
              <a href="#donations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Support Us
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Get in Touch
              </a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>The Bronx High School of Science</p>
              <p>75 W 205th St</p>
              <p>Bronx, NY 10468</p>
              <p className="pt-2">
                <a href="mailto:teammanusnova@gmail.com" className="hover:text-primary-foreground transition-colors">
                  teammanusnova@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; 2024 Manus Nova Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;