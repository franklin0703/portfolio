import TypingEffect from "./TypingEffect";

function Hero() {
  return (
    <section id="home" className="hero section reveal">
      <div className="hero-text">
        <p className="tagline">Backend Developer </p>
        <h1>
          Hi, I'm <span>Stenis Franklin A</span>
        </h1>
        <p className="hero-sub">
          I build reliable, scalable backend systems and data-driven solutions
          using Python, SQL and modern web technologies.
        </p>
        <p className="hero-sub">
          I'm a <TypingEffect />
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View My Projects
          </a>
          <a href="/Stenis_Franklin_A.pdf" className="btn outline" download>
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <div className="photo-frame">
          <img src="/profile.jpg.png" alt="Stenis Franklin A" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
