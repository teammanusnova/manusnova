const items = [
  "Manus Nova",
  "Free Prosthetics",
  "Bronx, New York",
  "3D Printed",
  "Student Engineers",
  "A Helping Hand",
  "Since 2023",
  "Zero Cost",
];

const Marquee = () => {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="relative bg-accent overflow-hidden py-5 select-none">
      {/* Top edge line */}
      <div className="absolute top-0 inset-x-0 h-px bg-zinc-950/10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-zinc-950/10" />

      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-5 text-zinc-950 font-black text-sm tracking-[0.2em] uppercase"
          >
            {item}
            <svg width="6" height="6" viewBox="0 0 6 6" className="flex-shrink-0 opacity-30">
              <circle cx="3" cy="3" r="3" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
