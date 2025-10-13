const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment & Design",
      description: "We meet with recipients to understand their specific needs and lifestyle requirements, then create custom designs using CAD software."
    },
    {
      number: "02", 
      title: "3D Printing & Assembly",
      description: "Using our school's advanced 3D printing lab, we manufacture each component with precision and care, ensuring perfect fit and functionality."
    },
    {
      number: "03",
      title: "Testing & Refinement", 
      description: "Every prosthetic undergoes rigorous testing and multiple iterations based on user feedback to ensure optimal comfort and performance."
    },
    {
      number: "04",
      title: "Delivery & Support",
      description: "We provide ongoing support and adjustments, building lasting relationships with our community members throughout their journey."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              From Concept to Life-Changing Reality
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures every prosthetic is perfectly tailored 
              to enhance mobility and restore confidence.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-accent/20 to-primary/20 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Our Impact</h3>
                    <p className="text-muted-foreground">Making a difference, one prosthetic at a time</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-primary/5 rounded-xl">
                      <div className="text-3xl font-bold text-primary mb-1">98%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                    </div>
                    <div className="text-center p-4 bg-warm-accent/5 rounded-xl">
                      <div className="text-3xl font-bold text-warm-accent mb-1">72hrs</div>
                      <div className="text-sm text-muted-foreground">Avg. Production Time</div>
                    </div>
                    <div className="text-center p-4 bg-accent/5 rounded-xl">
                      <div className="text-3xl font-bold text-accent mb-1">$0</div>
                      <div className="text-sm text-muted-foreground">Cost to Recipients</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-xl">
                      <div className="text-3xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Custom Designed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;