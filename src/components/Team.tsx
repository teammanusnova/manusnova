import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  { name: "Louis Gui",       role: "Co-Founder", initials: "LG", index: "01" },
  { name: "Lucas Zelenski",  role: "Co-Founder", initials: "LZ", index: "02" },
  { name: "Rishi Kothuru",   role: "Co-Founder", initials: "RK", index: "03" },
];

const Team = () => {
  const heading = useScrollReveal(0.1);
  const cards = useScrollReveal(0.1);

  return (
    <section id="team" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div ref={heading.ref} className={`reveal ${heading.visible ? "visible" : ""} mb-16 sm:mb-24`}>
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-accent flex-shrink-0" />
            <p className="text-xs font-bold text-accent uppercase tracking-[0.3em]">The Team</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-zinc-950 leading-[0.85] tracking-tighter">
              Built by students,<br />for the community.
            </h2>
            <p className="text-zinc-500 leading-relaxed max-w-xs lg:pb-2 text-base">
              Manus Nova is run entirely by high school students who give their time
              to make prosthetics accessible to everyone.
            </p>
          </div>
        </div>

        <div ref={cards.ref} className={`reveal-stagger ${cards.visible ? "visible" : ""} grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12`}>
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative bg-zinc-950 rounded-2xl p-8 sm:p-10 flex flex-col gap-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default"
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 0 40px rgba(170,255,26,0.12), 0 20px 60px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(170,255,26,0.06) 0%, transparent 60%)" }} />
              <div className="absolute top-6 right-6 text-xs font-bold text-white/10 tracking-widest">{member.index}</div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                <span className="text-base sm:text-lg font-black text-white group-hover:text-accent transition-colors duration-300 tracking-tight">
                  {member.initials}
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-white text-lg sm:text-xl tracking-tight">{member.name}</h3>
                <p className="text-sm text-white/35 mt-1">{member.role}</p>
              </div>
              <div className="h-px bg-white/8 group-hover:bg-accent/20 transition-colors duration-300 mt-auto" />
              <p className="text-xs text-white/25 group-hover:text-white/40 transition-colors duration-300 relative z-10">
                The Bronx High School of Science
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-100" />
          <p className="text-sm text-zinc-400">
            Want to join?{" "}
            <a href="mailto:teammanusnova@gmail.com" className="text-zinc-950 font-semibold hover:text-accent transition-colors">
              Reach out →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
