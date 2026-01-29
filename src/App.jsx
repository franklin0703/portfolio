import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

function App() {

  // scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
