import NavBar from "../src/components/navbar/NavBar";
import Hero from "../src/components/hero/Hero";
import Skills from "../src/components/skills/Skills";
import About from "../src/components/about/About";
import Projects from "../src/components/projects/Projects";
import SubSkills from "./components/skills/SubSkill";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <SubSkills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
