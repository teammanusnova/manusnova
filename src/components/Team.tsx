import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  { name: "Louis Gui",       role: "Co-Founder", initials: "LG" },
  { name: "Lucas Zelenski",  role: "Co-Founder", initials: "LZ" },
  { name: "Rishi Kothuru",   role: "Co-Founder", initials: "RK" },
];

const Team = () => {
  const heading = useScrollReveal(0.1);
  const cards = useScrollReveal(0.1);

  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div ref={heading.ref} className={`reveal ${heading.visible ? "visible" : ""} mb-20`}>
          <p className="text-xs font-bold text-accent uppercase tracking-[0.25em] mb-4">The Team</p>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20">
            <h2 className="text-5xl lg:text-7xl font-black text-zinc-950 leading-[0.9] tracking-tighter">
              Built by students,<br />for the community.
            </h2>
            <p className="text-zinc-500 leading-relaxed max-w-xs lg:pb-2 text-base">
              Manus Nova is run entirely by high school students who give their time
              to make prosthetics accessible to everyone.
            </p>
          </div>
        </div>

        <div ref={cards.ref} className={`reveal-stagger ${cards.visible ? "visible" : ""} grid md:grid-cols-3 gap-4 mb-12`}>
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-zinc-950 rounded-2xl p-10 flex flex-col gap-8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center">
                <span className="text-xl font-black text-white tracking-tight">{member.initials}</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-xl tracking-tight">{member.name}</h3>
                <p className="text-sm text-white/40 mt-1">{member.role}</p>
              </div>
              <div className="h-px bg-white/10 mt-auto"></div>
              <p className="text-xs text-white/30">
                The Bronx High School of Science
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-zinc-400">
          Want to join Manus Nova?{" "}
          <a href="mailto:teammanusnova@gmail.com" className="text-zinc-950 font-semibold hover:text-accent transition-colors">
            Reach out →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Team;
