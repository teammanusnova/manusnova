const teamMembers = [
  {
    name: "Louis Gui",
    role: "Co-Founder",
    initials: "LG",
  },
  {
    name: "Lucas Zelenski",
    role: "Co-Founder",
    initials: "LZ",
  },
  {
    name: "Rishi Kothuru",
    role: "Co-Founder",
    initials: "RK",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">The Team</p>
          <h2 className="text-4xl font-bold text-foreground leading-tight">
            Built by students, for the community.
          </h2>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
            Manus Nova is run entirely by high school students from The Bronx High School of Science
            who give their time to make prosthetics accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col gap-4 p-6 rounded-xl border border-border hover:border-accent/40 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                <span className="text-lg font-bold text-foreground tracking-tight">{member.initials}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-10">
          Interested in joining Manus Nova?{" "}
          <a href="mailto:teammanusnova@gmail.com" className="text-accent hover:underline font-medium">
            Reach out →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Team;
