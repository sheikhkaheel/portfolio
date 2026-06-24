import Hero from "./_components/Hero";
import { Experience } from "./_components/Experience";
import { Marquee } from "./_components/Marquee";
import { Contact } from "./_components/Contact";
import { Footer } from "@/_components/Footer";
import { ALL_TAGS, C, SP } from "@/contants";
import { Navbar } from "@/_components/Navbar";
import { StatsBar } from "@/_components/StatsBar";
import { Skills } from "@/_components/Skills";
import { Projects } from "@/_components/Projects";

export default function Home() {
  return (
    <main
      style={{
        background: C.bg,
        fontFamily: "'Inter', system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero C={C} SP={SP} ALL_TAGS={ALL_TAGS} />
      <StatsBar />
      <Skills />
      <Projects />
      <Marquee />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
