const steps = [
  {
    number: "01",
    title: "Assessment & Design",
    description: "We meet with recipients to understand their specific needs and lifestyle, then create a custom design using CAD software tailored to their anatomy.",
  },
  {
    number: "02",
    title: "3D Printing & Assembly",
    description: "Using the school's advanced 3D printing lab, we manufacture every component with precision — typically within 72 hours.",
  },
  {
    number: "03",
    title: "Testing & Refinement",
    description: "Every device goes through multiple rounds of testing and iteration with direct feedback from the recipient until it's right.",
  },
  {
    number: "04",
    title: "Delivery & Ongoing Support",
    description: "We deliver and fit the prosthetic in person, then stay in contact for adjustments as the recipient grows or their needs change.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="text-4xl font-bold text-foreground leading-tight">
            From first meeting to final fitting.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-background rounded-xl p-8 border border-border">
              <div className="text-5xl font-bold text-border mb-4 leading-none">{step.number}</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Impact bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "98%", label: "Satisfaction Rate" },
            { value: "72 hrs", label: "Avg. Build Time" },
            { value: "$0", label: "Cost to Recipients" },
            { value: "100%", label: "Custom Designed" },
          ].map((item) => (
            <div key={item.label} className="bg-background rounded-xl p-6 border border-border text-center">
              <div className="text-3xl font-bold text-foreground">{item.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
