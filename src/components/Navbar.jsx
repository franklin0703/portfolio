import { useEffect, useState } from "react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header">
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <h2 className="logo">Stenis Franklin A</h2>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setNavOpen((prev) => !prev)}
          type="button"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${navOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setNavOpen(false)}>Home</a></li>
          <li><a href="#skills" onClick={() => setNavOpen(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setNavOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setNavOpen(false)}>Projects</a></li>
          <li><a href="#education" onClick={() => setNavOpen(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setNavOpen(false)}>Contact</a></li>
          <li>
            <a
              href="/Stenis_Franklin_A.pdf"
              download
              onClick={() => setNavOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
