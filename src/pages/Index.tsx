import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Mission from "@/components/Mission";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Marquee />
      <Mission />
      <Stats />
      <Process />
      <Team />
      <Support />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
