import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Assessment & Design",
    description: "We meet with recipients in person to understand their specific needs, anatomy, and lifestyle. Then we design a custom device using CAD software.",
  },
  {
    number: "02",
    title: "3D Printing & Assembly",
    description: "Using the school's 3D printing lab, we manufacture every component. Most devices are printed and assembled within 72 hours.",
  },
  {
    number: "03",
    title: "Testing & Refinement",
    description: "Every prosthetic goes through multiple rounds of testing and iteration. We only stop when the recipient says it's right.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description: "We deliver and fit the device in person, then stay in touch for adjustments as needs evolve. This relationship doesn't end at delivery.",
  },
];

const Process = () => {
  const heading = useScrollReveal(0.1);
  const grid = useScrollReveal(0.05);

  return (
    <section id="process" className="py-20 sm:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">

        <div ref={heading.ref} className={`reveal ${heading.visible ? "visible" : ""} mb-16 sm:mb-24`}>
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-accent flex-shrink-0" />
            <p className="text-xs font-bold text-accent uppercase tracking-[0.3em]">How We Work</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-zinc-950 leading-[0.85] tracking-tighter">
              From first meeting<br className="hidden sm:block" /> to final fitting.
            </h2>
            <p className="text-zinc-400 text-sm max-w-xs lg:pb-4 leading-relaxed">
              Every step of our process is driven by one question: what does this specific person actually need?
            </p>
          </div>
        </div>

        <div ref={grid.ref} className={`reveal-stagger ${grid.visible ? "visible" : ""} grid sm:grid-cols-2 gap-4`}>
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-white rounded-2xl p-8 sm:p-10 border border-zinc-100 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-zinc-950 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl" />
              <div className="relative z-10">
                <div className="text-[4.5rem] sm:text-[5.5rem] font-black leading-none text-zinc-100 group-hover:text-accent mb-5 transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-white mb-3 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-zinc-500 group-hover:text-white/50 leading-relaxed text-sm transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
