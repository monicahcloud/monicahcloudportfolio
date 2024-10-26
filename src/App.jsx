import './App.css'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import BlurBackground from './components/BlurBackground'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'

function App() {
  return (
    <>
     <NavBar />
     <BlurBackground />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
   <Footer />
     </>
  )
}

export default App
