import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project from './components/Project';
import DeveloperProjects from './components/DeveloperProjects'
import ProfessionalSummary from './components/ProfessionalSummary';
import CoreCompetencies from './components/CoreCompetencies';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';

function App() {
  return (
    <>
<BrowserRouter>
        <nav><NavBar /></nav>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/hire" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project" element={<Project />} />
          <Route path="/summary" element={<ProfessionalSummary />} />
          <Route path="/skills" element={<CoreCompetencies />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certs" element={<Certifications />} />
          <Route path="/developer/" element={<DeveloperProjects />} />
        </Routes>
        <footer><Footer /></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
