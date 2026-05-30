import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    num: "01",
    title: "Student Innovation",
    body: "Entirely student-conceived, designed, and built. Real engineering — not a classroom exercise.",
  },
  {
    num: "02",
    title: "Community First",
    body: "Every device goes to a real person who needs it. Recipients pay nothing, ever. Funded entirely by donations.",
  },
  {
    num: "03",
    title: "Open Design",
    body: "Our prosthetic blueprints are shared freely so other schools can build on our work and reach more people.",
  },
];

const Mission = () => {
  const heading = useScrollReveal(0.1);
  const cards = useScrollReveal(0.1);

  return (
    <section id="mission" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div ref={heading.ref} className={`reveal ${heading.visible ? "visible" : ""} mb-20`}>
          <p className="text-xs font-bold text-accent uppercase tracking-[0.25em] mb-4">Our Mission</p>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
            <h2 className="text-5xl lg:text-7xl font-black text-zinc-950 leading-[0.9] tracking-tighter max-w-lg">
              Free prosthetics,<br />built by students.
            </h2>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-sm lg:pb-2">
              Manus Nova empowers students at The Bronx High School of Science to design,
              manufacture, and deliver high-quality prosthetics — custom-fitted and completely free.
            </p>
          </div>
        </div>

        {/* Story callout */}
        <div ref={heading.ref} className={`reveal ${heading.visible ? "visible" : ""} mb-16 relative overflow-hidden rounded-2xl bg-zinc-950 p-10 lg:p-14`}>
          <p className="text-3xl lg:text-4xl font-bold text-white leading-snug max-w-3xl">
            "Over 40 million people worldwide need a prosthetic and can't afford one.
            <span className="text-accent"> We asked ourselves — what if they didn't have to?"</span>
          </p>
          <p className="text-sm text-white/40 mt-6">— The Manus Nova founding team, Advanced Engineering class, 2023</p>
          {/* Decorative number */}
          <div className="absolute -right-6 -bottom-10 text-[18rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
            MN
          </div>
        </div>

        {/* Pillars */}
        <div ref={cards.ref} className={`reveal-stagger ${cards.visible ? "visible" : ""} grid md:grid-cols-3 gap-5`}>
          {pillars.map((p) => (
            <div
              key={p.num}
              className="group border border-zinc-100 rounded-2xl p-8 hover:border-accent/50 hover:bg-accent/[0.03] transition-all duration-300"
            >
              <div className="text-5xl font-black text-zinc-100 leading-none mb-6 group-hover:text-accent/20 transition-colors">
                {p.num}
              </div>
              <h3 className="font-bold text-zinc-950 text-lg mb-3">{p.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
