import heroImage from "@/assets/hero-prosthetics.jpg";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="relative min-h-screen bg-zinc-950 flex overflow-hidden">

      {/* Left: content */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-20 pt-28 pb-16 w-full lg:w-[58%]">

        {/* Pill badge */}
        <div className="animate-fade-in flex items-center gap-2 text-xs font-medium text-white/50 border border-white/10 px-3.5 py-1.5 rounded-full w-fit mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          Student-led · Bronx, NY
        </div>

        {/* HUGE display text */}
        <div className="overflow-hidden mb-1">
          <h1 className="animate-slide-up text-[19vw] sm:text-[16vw] lg:text-[11vw] font-black text-white leading-[0.82] tracking-tighter">
            MANUS
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1 className="animate-slide-up delay-200 text-[19vw] sm:text-[16vw] lg:text-[11vw] font-black text-accent leading-[0.82] tracking-tighter">
            NOVA
          </h1>
        </div>

        {/* Animated line */}
        <div className="animate-line-grow delay-400 h-px w-full bg-white/10 mb-8"></div>

        {/* Description */}
        <p className="animate-fade-up delay-500 text-base lg:text-lg text-white/55 leading-relaxed max-w-md mb-8">
          Students from The Bronx High School of Science designing and 3D-printing
          free, custom prosthetics for community members who need them most.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-600 flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => scrollTo("mission")}
            className="bg-accent text-zinc-950 font-bold text-sm px-6 py-3 rounded-lg hover:bg-accent/85 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Our Mission
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-white/8 transition-all"
          >
            Support the Mission
          </button>
        </div>

        {/* Stats */}
        <div className="animate-fade-up delay-700 flex gap-8 pt-8 border-t border-white/10">
          {[
            { value: "50+", label: "Prosthetics Created" },
            { value: "25", label: "Students Involved" },
            { value: "12", label: "Lives Changed" },
            { value: "$0", label: "Cost to Recipients" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/35 mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: image */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[46%]">
        <img
          src={heroImage}
          alt="Manus Nova students working on 3D-printed prosthetic devices"
          width={800}
          height={900}
          className="w-full h-full object-cover opacity-70"
        />
        {/* Gradient fade to left */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent"></div>
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </div>

      {/* Bottom scroll hint */}
      <div className="animate-fade-in delay-900 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
