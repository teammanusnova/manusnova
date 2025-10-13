const Mission = () => {
  return (
    <section id="mission" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To empower students at The Bronx High School of Science to design, create, and distribute 
            high-quality, affordable prosthetic devices to community members in need, while fostering 
            innovation, compassion, and real-world engineering experience.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="text-2xl">🎓</div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Student Innovation</h3>
              <p className="text-muted-foreground">
                Empowering the next generation of engineers through hands-on prosthetic design and manufacturing.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Community Impact</h3>
              <p className="text-muted-foreground">
                Providing accessible mobility solutions to those who need them most in our local community.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Affordable Technology</h3>
              <p className="text-muted-foreground">
                Making advanced prosthetic technology accessible through innovative, cost-effective design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;