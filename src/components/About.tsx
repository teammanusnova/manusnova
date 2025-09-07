import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Where Innovation Meets Compassion
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At The Bronx High School of Science, our students are redefining what's possible 
              when young minds come together to solve real-world challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card border-border shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Student-Led Innovation</h3>
                <p className="text-muted-foreground">
                  Our project is entirely student-conceived, designed, and executed. Young engineers 
                  applying classroom knowledge to create tangible solutions for their community.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 bg-card border-border shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-warm-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-warm-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Community Impact</h3>
                <p className="text-muted-foreground">
                  Every prosthetic restores
                  independence, confidence, and possibility to individuals in multiple communities.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <blockquote className="text-center">
              <p className="text-lg italic text-foreground mb-4">
                "these kids can build anything on baby"
              </p>
              <footer className="text-muted-foreground">
                - Rachel Hoyle
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;