import Hero from "./components/homeViews/hero/Hero"
import Introduction from "./components/homeViews/Introduction"
import Projects from "./components/homeViews/project/Projects";
import Certificates from "./components/homeViews/certificates/Certificates";
import Contact from "./components/homeViews/Contact"

export default function Home() {
  return (
  <>
    <Hero />
    <Introduction />
    <Projects />
    <Certificates />
    <Contact />
  </>
  );
}
