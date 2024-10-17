import './App.css'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import BlurBackground from './components/BlurBackground'
import About from './components/About'
import { BrowserRouter } from 'react-router-dom'
import Services from './components/Services'
import Skills from './components/Skills'

function App() {
  return (
    <>
    <BrowserRouter>
      <BlurBackground />
      <NavBar />
      <About />
      <Services/>
      <Skills/>
      <Portfolio />
      <Contact />
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
