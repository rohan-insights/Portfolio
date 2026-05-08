import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import PowerBIDashboards from "@/components/sections/PowerBIDashboards";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <PowerBIDashboards />
      <Certifications />
      <Contact />
    </main>
  );
}
