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
    <section id="process" className="py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">

        <div ref={heading.ref} className={`reveal ${heading.visible ? "visible" : ""} mb-20`}>
          <p className="text-xs font-bold text-accent uppercase tracking-[0.25em] mb-4">How We Work</p>
          <h2 className="text-5xl lg:text-7xl font-black text-zinc-950 leading-[0.9] tracking-tighter">
            From first meeting<br />to final fitting.
          </h2>
        </div>

        <div ref={grid.ref} className={`reveal-stagger ${grid.visible ? "visible" : ""} grid md:grid-cols-2 gap-4`}>
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-white rounded-2xl p-10 border border-zinc-100 hover:border-zinc-950/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-[5rem] font-black leading-none text-zinc-100 mb-6 group-hover:text-accent transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-3">{step.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
