import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from "./sections/Home"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import { FlowersBackground } from "./components/FlowersBackground"
import Experience from "./sections/Experience"
import Contacts from "./sections/Contacts"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="relative min-h-screen bg-base-light overflow-hidden">
      <FlowersBackground count={150} />
      <div className="container mx-auto my-3 lg:my-10 relative z-10 lg:px-33">
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Contacts />
      </div>
    </div>
  )
}

export default App