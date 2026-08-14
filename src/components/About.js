import { useReveal } from '../hooks/useReveal';

const About = () => {
  const headRef   = useReveal();
  const imgRef    = useReveal();
  const textRef   = useReveal();
  const statsRef  = useReveal();

  return (
    <section className="section" id="about">
      <div className="section-inner">

        <div ref={headRef} className="reveal-up">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Crafting Digital <span className="gradient-text">Experiences</span></h2>
        </div>

        <div className="about-grid" style={{ marginTop: 56 }}>
          {/* Image */}
          <div ref={imgRef} className="about-img-wrap reveal-left">
            <div className="about-img-box">
              <img src="/image/Ajay1.png" alt="Ajay Eswaran" />
            </div>
            <div className="about-badge">
              <div className="about-badge-num">1.5+</div>
              <div className="about-badge-label">Years Experience</div>
            </div>
          </div>

          {/* Text */}
          <div ref={textRef} className="about-text reveal-right">
            <span className="section-tag">Who I Am</span>
            <h3 className="section-title" style={{ fontSize: 32, marginBottom: 20 }}>
              Full Stack Developer
            </h3>
            <p>
              I'm a Full Stack Developer with a passion for creating beautiful and functional web applications.
              I specialize in clean, responsive, and visually appealing interfaces using React, Vue, and modern CSS frameworks.
            </p>
            <p>
              On the backend, I design and develop RESTful APIs using Node.js and Express.js, with hands-on experience
              in MySQL and MongoDB. I focus on clean, maintainable code following best practices for performance and scalability.
            </p>

            <div ref={statsRef} className="about-stats reveal-up stagger">
              {[
                { num: "10+", label: "Projects Completed" },
                { num: "5+",  label: "Technologies" },
                { num: "100%", label: "Client Satisfaction" },
              ].map(({ num, label }) => (
                <div key={label} className="reveal-up">
                  <div className="about-stat-num gradient-text">{num}</div>
                  <div className="about-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
