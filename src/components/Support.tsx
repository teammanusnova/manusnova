import { Button } from "@/components/ui/button";

const Support = () => {
  const supportOptions = [
    {
      title: "Financial Donations",
      description: "Help us purchase materials, 3D printing filament, and equipment for our prosthetic manufacturing.",
      action: "Donate Now"
    },
    {
      title: "Material Donations",
      description: "We need 3D printing filament, electronics components, and specialized tools for our workshop.",
      action: "View Needs"
    },
    {
      title: "Volunteer Time",
      description: "Share your expertise in engineering, manufacturing, or community outreach with our students.",
      action: "Get Involved"
    },
    {
      title: "Spread the Word",
      description: "Help us reach more people who could benefit from our prosthetics or support our mission.",
      action: "Share Our Story"
    }
  ];

  return (
    <section id="donations" className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Support Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your support helps us continue creating life-changing prosthetics and empowering the next generation of engineers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-background rounded-lg p-8 space-y-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground">{option.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{option.description}</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                {option.action}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Every contribution, no matter the size, makes a difference in someone's life.
          </p>
          <div className="bg-primary/5 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-foreground mb-2">Impact of Your Support</p>
            <p className="text-muted-foreground">
              $50 provides materials for one prosthetic hand • $150 covers a full upper limb prosthetic • 
              $500 sponsors our workshop for a month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;