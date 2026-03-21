import Hero from "./components/homeViews/hero/Hero"
import Introduction from "./components/homeViews/Introduction"
import Projects from "./components/homeViews/project/Projects";
import Certificates from "./components/homeViews/certificates/Certificates";
import Contact from "./components/homeViews/Contact"
import ScrollReveal from "./components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Introduction />
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <Certificates />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}

