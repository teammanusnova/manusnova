import { useScrollReveal, useCounter } from "@/hooks/useScrollReveal";

const data = [
  { end: 50, suffix: "+", label: "Prosthetics Created", sub: "Each custom-fitted for its recipient" },
  { end: 25, suffix: "",  label: "Students Involved",  sub: "Active members across all grades" },
  { end: 12, suffix: "",  label: "Lives Changed",      sub: "Restored independence in our community" },
  { end: 0,  suffix: "",  prefix: "$", label: "Cost to Recipients", sub: "Every device is completely free" },
];

const StatItem = ({ item, active, index }: { item: typeof data[0]; active: boolean; index: number }) => {
  const count = useCounter(item.end, 1800, active);
  return (
    <div className="group relative overflow-hidden">
      {/* Animated top line */}
      <div className="h-px bg-white/10 mb-6 sm:mb-8 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-accent transition-all duration-1000"
          style={{ width: active ? "100%" : "0%", transitionDelay: `${index * 120 + 300}ms` }}
        />
      </div>
      <div
        className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black tracking-tighter leading-none mb-2 transition-colors duration-500"
        style={{ color: active ? "white" : "rgba(255,255,255,0.2)" }}
      >
        {item.prefix ?? ""}{item.end === 0 ? "0" : count}{item.suffix}
      </div>
      <p className="font-semibold text-white/70 mb-1 text-sm">{item.label}</p>
      <p className="text-xs text-white/30 leading-relaxed">{item.sub}</p>
    </div>
  );
};

const Stats = () => {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section className="relative bg-zinc-950 py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%", right: "10%",
          width: "500px", height: "500px",
          background: "radial-gradient(ellipse at center, rgba(170,255,26,0.06) 0%, transparent 65%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`reveal mb-16 sm:mb-20 ${visible ? "visible" : ""}`} ref={ref}>
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-accent flex-shrink-0" />
            <p className="text-xs font-bold text-accent uppercase tracking-[0.3em]">Impact</p>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter">
            Real numbers.<br />
            <span className="text-stroke-lime">Real lives.</span>
          </h2>
        </div>

        {/* 2-col on mobile, 4-col on md+ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {data.map((item, i) => (
            <StatItem key={item.label} item={item} active={visible} index={i} />
          ))}
        </div>

        <div className={`reveal mt-16 sm:mt-20 pt-8 border-t border-white/8 flex items-center justify-between ${visible ? "visible" : ""}`}>
          <p className="text-xs text-white/20 tracking-widest uppercase">Since 2023</p>
          <p className="text-xs text-white/20 tracking-widest uppercase">Bronx, New York</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
