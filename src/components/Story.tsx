const Story = () => {
  return (
    <section id="story" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-3">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Our Story</p>
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              A question that became a movement.
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              It started with a number: <strong className="text-foreground">40 million.</strong> That's how many
              people worldwide need a prosthetic and can't afford one. Traditional devices can cost tens of
              thousands of dollars. We asked ourselves — what if they didn't have to?
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center mt-0.5">1</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In our Advanced Engineering class at The Bronx High School of Science, we learned that
                    3D printing could change everything. We formed Manus Nova — Latin for "new hand" — and
                    got to work.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center mt-0.5">2</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Making Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, Manus Nova has created over 50 custom prosthetic devices, each one designed
                    specifically for its recipient — restored independence for 12 community members, and
                    inspired a generation of student engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
