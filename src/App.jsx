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
     <nav><NavBar /></nav> 
      <BlurBackground />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    <footer><Footer /></footer>    
     </>
  )
}

export default App
