import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-prosthetics.jpg";

const stats = [
  { value: "50+", label: "Prosthetics Created" },
  { value: "25", label: "Students Involved" },
  { value: "12", label: "Lives Changed" },
  { value: "$0", label: "Cost to Recipients" },
];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/8 px-3 py-1.5 rounded-full border border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Student-led · Bronx, NY
              </div>
              <h1 className="text-5xl lg:text-[3.75rem] font-bold text-foreground leading-[1.05] tracking-tight">
                Manus Nova
                <span className="block text-muted-foreground font-normal text-3xl lg:text-4xl mt-3 leading-snug">
                  Engineering free prosthetics<br />for those who need them.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Students from The Bronx High School of Science design, 3D-print, and deliver
                custom prosthetic devices to community members — completely free.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-7 h-12 rounded-lg"
                onClick={() => scrollTo("story")}
              >
                Our Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-muted font-semibold px-7 h-12 rounded-lg"
                onClick={() => scrollTo("contact")}
              >
                Support the Mission
              </Button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[520px]">
            <img
              src={heroImage}
              alt="Manus Nova students working on 3D-printed prosthetic devices at The Bronx High School of Science"
              width={600}
              height={520}
              className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-foreground/10"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-border">
              <p className="text-xs text-muted-foreground font-medium">Every prosthetic</p>
              <p className="text-sm font-bold text-foreground">Custom-designed & free</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
