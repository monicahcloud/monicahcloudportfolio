import './App.css'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlurBackground from './components/BlurBackground'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <>
     <NavBar />
     <BlurBackground />
      <About />
      <Services />
      <Skills />
      <Projects/>
      <Contact />
   <Footer />
     </>
  )
}

export default App
