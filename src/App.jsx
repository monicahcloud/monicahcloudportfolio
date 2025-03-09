import Navbar from "../src/components/navbar/NavBarMain";
import Hero from "../src/components/hero/Hero";
import Skills from "../src/components/skills/Skills";
import About from "../src/components/about/About";
import Projects from "../src/components/projects/Projects";
import SubSkills from "./components/skills/SubSkill";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import SubHero from "./components/hero/SubHero";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <main className="">
        <Navbar />
        <Hero />
        <SubHero />
        <About />
        <Skills />
        <SubSkills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
