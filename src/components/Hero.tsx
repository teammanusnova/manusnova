import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-prosthetics.jpg";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Engineering
                <span className="block text-primary">Tomorrow's</span>
                Mobility
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Students from The Bronx High School of Science designing and creating 
                life-changing prosthetics for our community members who need them most.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Learn Our Story
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-warm-accent text-warm-accent hover:bg-warm-accent hover:text-warm-accent-foreground px-8 py-3"
              >
                Support the Mission
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">x+</div>
                <div className="text-sm text-muted-foreground">Prosthetics Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">x</div>
                <div className="text-sm text-muted-foreground">Students Involved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">x</div>
                <div className="text-sm text-muted-foreground">Lives Changed</div>
              </div>
            </div>
          </div>
           
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
            <img 
              src={heroImage} 
              alt="Students working on prosthetic devices"
              className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;