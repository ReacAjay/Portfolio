import resume from '../assets/Ajay_E_Resume.pdf';

export const Home = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Left Content */}
        <div>
          {/* <p className="hero-greeting">👋 Welcome to my portfolio</p> */}
          <h1 className="hero-name">
            Hi, I'm <br />
            <span className="gradient-text">Ajay Eswaran</span>
          </h1>
          <h2 className="hero-role gradient-text">Full Stack Developer</h2>
          <p className="hero-desc">
            Passionate about building elegant, high-performance web applications.
            I craft seamless user experiences from pixel-perfect frontends to robust backends.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Hire Me</a>
            <a href={resume} download="Ajay_E_Resume.pdf" className="btn-outline">Download CV</a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/ajay-e/" target="_blank" rel="noreferrer" className="hero-social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ReacAjay" target="_blank" rel="noreferrer" className="hero-social-link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="http://wa.me/+919025440936" target="_blank" rel="noreferrer" className="hero-social-link">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrap">
          <div className="hero-image-ring">
            <div className="hero-image-inner">
              <img src="/image/Ajay2.png" alt="Ajay Eswaran" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
