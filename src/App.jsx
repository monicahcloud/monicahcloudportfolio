import './App.css'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import BlurBackground from './components/BlurBackground'
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
