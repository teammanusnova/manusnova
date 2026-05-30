import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Mission", id: "mission" },
  { label: "Process", id: "process" },
  { label: "Team", id: "team" },
  { label: "Support", id: "donations" },
  { label: "Contact", id: "contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/8 shadow-sm"
          : "bg-transparent border-b border-white/0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 hover:opacity-75 transition-opacity"
        >
          <img src={logo} alt="Manus Nova logo" className="h-7 w-7 rounded-full object-cover" />
          <span className={`font-semibold text-sm tracking-tight transition-colors ${scrolled ? "text-zinc-950" : "text-white"}`}>
            Manus Nova
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-zinc-500 hover:text-zinc-950" : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className={`hidden sm:inline-flex text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
              scrolled
                ? "bg-zinc-950 text-white hover:bg-zinc-800"
                : "bg-accent text-zinc-950 hover:bg-accent/90"
            }`}
          >
            Get Involved
          </button>

          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-zinc-600" : "text-white/70"}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-white/5 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-white/60 hover:text-white text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm font-semibold text-accent text-left"
          >
            Get Involved →
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
