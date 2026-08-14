import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">AE.</div>

        <ul className="footer-nav">
          {["About", "Skills", "Education", "Contact"].map(item => (
            <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
          ))}
        </ul>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/ajay-e/" target="_blank" rel="noreferrer" className="footer-social">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/ReacAjay" target="_blank" rel="noreferrer" className="footer-social">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="http://wa.me/+919025440936" target="_blank" rel="noreferrer" className="footer-social">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} Ajay Eswaran · Full Stack Developer</p>
      </div>
    </footer>
  );
};
