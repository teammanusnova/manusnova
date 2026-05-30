import heroImage from "@/assets/hero-prosthetics.jpg";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="relative min-h-screen bg-zinc-950 flex overflow-hidden noise">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Radial glow — lime bloom */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "35%",
          left: "15%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(170,255,26,0.07) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Vertical side label — desktop only */}
      <div className="hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 items-center gap-3">
        <div className="w-px h-16 bg-white/15" />
        <span className="writing-vertical text-[10px] font-bold tracking-[0.35em] text-white/20 uppercase">
          Est. 2023 · Bronx, NY
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-24 pt-24 sm:pt-28 pb-14 w-full lg:w-[60%]">

        {/* Pill badge */}
        <div className="animate-fade-in flex items-center gap-2.5 text-xs font-medium text-white/50 border border-white/10 px-3.5 py-2 rounded-full w-fit mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
          Student-led · Free prosthetics · Bronx, NY
        </div>

        {/* Display headline */}
        <div className="overflow-hidden mb-0.5">
          <h1 className="animate-slide-up text-[22vw] sm:text-[18vw] lg:text-[12vw] font-black text-white leading-[0.8] tracking-tighter">
            MANUS
          </h1>
        </div>
        <div className="overflow-hidden mb-6 relative">
          <h1 className="animate-slide-up delay-200 text-[22vw] sm:text-[18vw] lg:text-[12vw] font-black text-accent leading-[0.8] tracking-tighter relative z-10">
            NOVA
          </h1>
          <div
            className="absolute bottom-0 left-0 pointer-events-none"
            style={{
              width: "55%",
              height: "3px",
              background: "linear-gradient(90deg, rgba(170,255,26,0.5) 0%, transparent 100%)",
              filter: "blur(3px)",
            }}
          />
        </div>

        {/* Divider */}
        <div className="animate-line-grow delay-400 h-px w-full max-w-xs bg-white/10 mb-6" />

        {/* Description */}
        <p className="animate-fade-up delay-500 text-sm sm:text-base text-white/50 leading-relaxed max-w-sm mb-8">
          Students from The Bronx High School of Science designing and 3D-printing
          free, custom prosthetics for community members who need them most.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-600 flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => scrollTo("mission")}
            className="bg-accent text-zinc-950 font-bold text-sm px-6 py-3 rounded-lg hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98] glow-lime-sm"
          >
            Our Mission
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="border border-white/15 text-white/80 font-medium text-sm px-6 py-3 rounded-lg hover:bg-white/6 hover:border-white/30 transition-all"
          >
            Support the Mission →
          </button>
        </div>

        {/* Stats — 2×2 on mobile, 4-col on md+ */}
        <div className="animate-fade-up delay-700 pt-8 border-t border-white/8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Prosthetics\nCreated" },
              { value: "25",  label: "Students\nInvolved" },
              { value: "12",  label: "Lives\nChanged" },
              { value: "$0",  label: "Cost to\nRecipients" },
            ].map((s) => (
              <div key={s.label} className="group">
                <div className="text-xl sm:text-2xl font-black text-white group-hover:text-accent transition-colors duration-300">
                  {s.value}
                </div>
                <div className="text-[10px] text-white/30 mt-1 leading-tight whitespace-pre-line">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: hero image — desktop only */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[44%]">
        <img
          src={heroImage}
          alt="Manus Nova students working on 3D-printed prosthetic devices"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
        <div className="absolute bottom-24 right-8 bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-right">
          <p className="text-xs font-bold text-accent tracking-widest uppercase mb-0.5">Workshop</p>
          <p className="text-xs text-white/50">Bronx High School of Science</p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="animate-fade-in delay-900 absolute bottom-6 left-6 sm:left-10 lg:left-24 flex items-center gap-3 text-white/25">
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
      </div>

      {/* Index — desktop only */}
      <div className="animate-fade-in delay-800 hidden sm:block absolute top-28 right-6 sm:right-8 text-xs font-bold text-white/15 tracking-widest">
        01 / 07
      </div>
    </section>
  );
};

export default Hero;
