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
          Frontend Developer with hands-on experience in building responsive 
          and user-friendly web applications using React, JavaScript, HTML, and CSS. 
          Strong foundation in Python, SQL, and data visualization using Power BI. 
          Passionate about clean UI design, modern animations, and writing maintainable code. 
          Actively seeking opportunities to apply my technical skills in real-world projects 
          and grow as a software developer.
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
