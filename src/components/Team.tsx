const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Project Lead",
      description: "Senior at Bronx Science with a passion for biomedical engineering."
    },
    {
      name: "Marcus Johnson",
      role: "Design Engineer",
      description: "Specializes in 3D modeling and prosthetic joint mechanisms."
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Faculty Advisor",
      description: "Engineering teacher guiding our mission with 15+ years of experience."
    },
    {
      name: "Aisha Patel",
      role: "Community Liaison",
      description: "Connects with recipients and manages community outreach efforts."
    }
  ];

  return (
    <section id="team" className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated students and educators working together to transform lives through innovative prosthetic solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-background rounded-lg p-6 text-center space-y-4 shadow-sm">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="text-2xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
              <p className="text-muted-foreground text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;