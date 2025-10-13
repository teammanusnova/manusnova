const Story = () => {
  return (
    <section id="story" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
            <p className="text-xl text-muted-foreground">
              How a group of passionate students turned an idea into a life-changing reality.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-muted/30 rounded-lg p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                It all started in our Advanced Engineering class when we learned about the global prosthetic crisis. 
                Over 40 million people worldwide need prosthetic devices, but traditional prosthetics can cost tens of 
                thousands of dollars, making them inaccessible to many.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">The Beginning</h3>
                <p className="text-muted-foreground">
                  Our journey began with a simple question: "What if we could use 3D printing and modern materials 
                  to create affordable, functional prosthetics?" With guidance from Dr. Rodriguez and support from 
                  our school's engineering program, we formed Manus Nova.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Making Impact</h3>
                <p className="text-muted-foreground">
                  Today, we've successfully created over 50 prosthetic devices, each custom-designed for its recipient. 
                  Our work has restored independence to 12 community members and inspired 25 students to pursue 
                  careers in biomedical engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;