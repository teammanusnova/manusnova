const items = [
  "Manus Nova",
  "Free Prosthetics",
  "Bronx, New York",
  "3D Printed",
  "Student Engineers",
  "A Helping Hand",
  "Manus Nova",
  "Free Prosthetics",
  "Bronx, New York",
  "3D Printed",
  "Student Engineers",
  "A Helping Hand",
];

const Marquee = () => {
  return (
    <div className="bg-accent overflow-hidden py-4 border-y border-accent">
      <div className="marquee-track flex gap-0 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 text-zinc-950 font-bold text-sm tracking-widest uppercase">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-950/30 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
