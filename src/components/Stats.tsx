import { useScrollReveal, useCounter } from "@/hooks/useScrollReveal";

const data = [
  { end: 50, suffix: "+", label: "Prosthetics Created", sub: "Each custom-fitted for its recipient" },
  { end: 25, suffix: "",  label: "Students Involved",  sub: "Active members across all grades" },
  { end: 12, suffix: "",  label: "Lives Changed",      sub: "Restored independence in our community" },
  { end: 0,  suffix: "",  prefix: "$", label: "Cost to Recipients", sub: "Every device is completely free" },
];

const StatItem = ({ item, active }: { item: typeof data[0]; active: boolean }) => {
  const count = useCounter(item.end, 1600, active);
  return (
    <div className="border-t border-white/10 pt-8">
      <div className="text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-3">
        {item.prefix ?? ""}{item.end === 0 ? "0" : count}{item.suffix}
      </div>
      <p className="font-semibold text-white/80 mb-1">{item.label}</p>
      <p className="text-sm text-white/35">{item.sub}</p>
    </div>
  );
};

const Stats = () => {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section className="bg-zinc-950 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className={`reveal mb-16 ${visible ? "visible" : ""}`} ref={ref}>
          <p className="text-xs font-bold text-accent uppercase tracking-[0.25em] mb-4">Impact</p>
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
            Real numbers.<br />
            <span className="text-accent">Real lives.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {data.map((item) => (
            <StatItem key={item.label} item={item} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
