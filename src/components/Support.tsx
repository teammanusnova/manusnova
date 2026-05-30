import { useScrollReveal } from "@/hooks/useScrollReveal";

const ways = [
  {
    title: "Donate Money",
    body: "$50 = one prosthetic hand. $150 = full upper limb. $500 = one month of workshop operations.",
    cta: "Donate via Email",
    href: "mailto:teammanusnova@gmail.com?subject=Donation%20Inquiry",
    dark: true,
  },
  {
    title: "Donate Materials",
    body: "We need 3D printing filament, electronics, and tools. Contact us to arrange a drop-off.",
    cta: "Get in Touch",
    href: "#contact",
    dark: false,
  },
  {
    title: "Volunteer",
    body: "Engineers, healthcare professionals, and community organizers — your expertise changes lives.",
    cta: "Contact Us",
    href: "#contact",
    dark: false,
  },
  {
    title: "Spread the Word",
    body: "Follow us on Instagram and share our story. Every share helps us reach someone who needs us.",
    cta: "Follow on Instagram",
    href: "https://instagram.com/projectmanusnova",
    dark: false,
    external: true,
  },
];

const Support = () => {
  const heading = useScrollReveal(0.1);
  const cards = useScrollReveal(0.05);

  const handleClick = (href: string, external?: boolean) => {
    if (external) { window.open(href, "_blank"); return; }
    if (href.startsWith("#")) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <section id="donations" className="py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">

        <div ref={heading.ref} className={`reveal ${heading.visible ? "visible" : ""} mb-20`}>
          <p className="text-xs font-bold text-accent uppercase tracking-[0.25em] mb-4">Support Us</p>
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
            Help us reach<br />
            <span className="text-accent">more people.</span>
          </h2>
          <p className="text-zinc-500 mt-6 text-lg max-w-md leading-relaxed">
            Manus Nova runs entirely on donations. Every dollar goes directly to materials
            and the community members we serve.
          </p>
        </div>

        <div ref={cards.ref} className={`reveal-stagger ${cards.visible ? "visible" : ""} grid md:grid-cols-2 gap-4`}>
          {ways.map((way) => (
            <div
              key={way.title}
              className={`rounded-2xl p-10 flex flex-col gap-8 border transition-all duration-300 ${
                way.dark
                  ? "bg-accent border-accent hover:-translate-y-1"
                  : "bg-zinc-900 border-zinc-800 hover:border-zinc-600 hover:-translate-y-1"
              }`}
            >
              <div className="flex-1 space-y-3">
                <h3 className={`font-bold text-xl tracking-tight ${way.dark ? "text-zinc-950" : "text-white"}`}>
                  {way.title}
                </h3>
                <p className={`text-sm leading-relaxed ${way.dark ? "text-zinc-950/70" : "text-zinc-400"}`}>
                  {way.body}
                </p>
              </div>
              <button
                onClick={() => handleClick(way.href, way.external)}
                className={`self-start text-sm font-bold px-5 py-2.5 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  way.dark
                    ? "bg-zinc-950 text-white hover:bg-zinc-800"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {way.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
