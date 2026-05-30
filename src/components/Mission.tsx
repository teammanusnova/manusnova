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
  const quote = useScrollReveal(0.1);
  const cards = useScrollReveal(0.1);

  return (
    <section id="mission" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div ref={heading.ref} className={`reveal ${heading.visible ? "visible" : ""} mb-16 sm:mb-24`}>
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-accent flex-shrink-0" />
            <p className="text-xs font-bold text-accent uppercase tracking-[0.3em]">Our Mission</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-zinc-950 leading-[0.85] tracking-tighter max-w-xl">
              Free prosthetics,<br />
              <span className="text-stroke-lime">built by</span>{" "}
              students.
            </h2>
            <div className="lg:pb-2 max-w-sm space-y-4">
              <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
                Manus Nova empowers students at The Bronx High School of Science to design,
                manufacture, and deliver high-quality prosthetics — custom-fitted and completely free.
              </p>
              <div className="h-px bg-zinc-100" />
              <p className="text-xs text-zinc-400 font-medium tracking-wider uppercase">02 / 07 · Mission</p>
            </div>
          </div>
        </div>

        {/* Quote callout */}
        <div ref={quote.ref} className={`reveal ${quote.visible ? "visible" : ""} mb-10 sm:mb-16`}>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-950 px-8 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20">
            <div
              className="absolute -top-6 -left-2 font-black text-white/[0.04] leading-none select-none pointer-events-none hidden sm:block"
              style={{ fontSize: "20rem", lineHeight: 1 }}
            >
              "
            </div>
            <div className="absolute inset-0 bg-grid rounded-2xl sm:rounded-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-2xl sm:rounded-l-3xl" />
            <div className="relative z-10">
              <p className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-[1.25] max-w-4xl">
                "Over 40 million people worldwide need a prosthetic and can't afford one.
                <span className="text-accent"> We asked ourselves — what if they didn't have to?"</span>
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-8 h-px bg-white/20 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-white/35 tracking-wide">
                  The Manus Nova founding team · Advanced Engineering class, 2023
                </p>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-12 text-[12rem] sm:text-[20rem] font-black text-white/[0.025] leading-none select-none pointer-events-none">
              MN
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div ref={cards.ref} className={`reveal-stagger ${cards.visible ? "visible" : ""} grid sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
          {pillars.map((p) => (
            <div
              key={p.num}
              className="group relative border border-zinc-100 rounded-2xl p-7 sm:p-8 hover:border-zinc-950 hover:bg-zinc-950 transition-all duration-500 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{ background: "radial-gradient(ellipse at bottom right, rgba(170,255,26,0.05) 0%, transparent 70%)" }} />
              <div className="text-[4.5rem] font-black leading-none text-zinc-100 group-hover:text-accent/30 mb-5 transition-colors duration-500">
                {p.num}
              </div>
              <h3 className="font-bold text-zinc-950 group-hover:text-white text-lg mb-2 transition-colors duration-500">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-500 group-hover:text-white/50 leading-relaxed transition-colors duration-500">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
