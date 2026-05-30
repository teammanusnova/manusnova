import { Button } from "@/components/ui/button";

const ways = [
  {
    title: "Make a Donation",
    description: "$50 covers materials for one prosthetic hand. $150 funds a full upper-limb device. $500 sponsors our workshop for a month.",
    cta: "Donate via Email",
    onClick: () => window.open("mailto:teammanusnova@gmail.com?subject=Donation%20Inquiry", "_blank"),
    featured: true,
  },
  {
    title: "Donate Materials",
    description: "We always need 3D printing filament, electronics components, and specialized tools. Contact us to arrange a drop-off.",
    cta: "Get in Touch",
    onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    featured: false,
  },
  {
    title: "Volunteer",
    description: "Engineers, healthcare professionals, and community organizers — we'd love your expertise.",
    cta: "Contact Us",
    onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    featured: false,
  },
  {
    title: "Spread the Word",
    description: "Follow us on Instagram and share our mission. Every share helps us reach people who need a prosthetic.",
    cta: "Follow @projectmanusnova",
    onClick: () => window.open("https://instagram.com/projectmanusnova", "_blank"),
    featured: false,
  },
];

const Support = () => {
  return (
    <section id="donations" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Support Us</p>
          <h2 className="text-4xl font-bold text-foreground leading-tight">
            Help us reach more people.
          </h2>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
            Manus Nova is run entirely on donations and goodwill. Every contribution goes directly
            to materials and the community members we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {ways.map((way) => (
            <div
              key={way.title}
              className={`rounded-xl p-8 border flex flex-col gap-5 ${
                way.featured
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background border-border"
              }`}
            >
              <div className="flex-1 space-y-2">
                <h3 className={`font-semibold text-lg ${way.featured ? "text-background" : "text-foreground"}`}>
                  {way.title}
                </h3>
                <p className={`text-sm leading-relaxed ${way.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {way.description}
                </p>
              </div>
              <Button
                variant={way.featured ? "secondary" : "outline"}
                size="sm"
                className={way.featured
                  ? "bg-background text-foreground hover:bg-background/90 self-start"
                  : "border-border text-foreground hover:bg-muted self-start"
                }
                onClick={way.onClick}
              >
                {way.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
