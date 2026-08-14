import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import resume from "../assets/Ajay_E_Resume.pdf";
import "../App.css";

const navLinks = [
  { to: "#home",      label: "Home" },
  { to: "#about",     label: "About" },
  { to: "#skills",    label: "Skills" },
  { to: "#education", label: "Education" },
  { to: "#contact",   label: "Contact" },
];

const scrollTo = (id, closeFn) => {
  if (closeFn) closeFn();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Header = () => {
  const [open, setOpen]       = useState(false);
  const [active, setActive]   = useState("home");

  // Highlight nav based on scroll position
  useEffect(() => {
    const ids = navLinks.map(n => n.to.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-inner">

          {/* Logo + mini avatar */}
          <button className="header-brand" onClick={() => scrollTo("home")}>
            <div className="header-avatar-ring">
              <img src="/image/Ajay2.png" alt="Ajay" className="header-avatar-img" />
            </div>
            <span className="header-logo">AE.</span>
          </button>

          <ul className="header-nav header-desktop-only">
            {navLinks.map(({ to, label }) => {
              const id = to.replace("#", "");
              return (
                <li key={to}>
                  <button
                    className={`nav-btn${active === id ? " nav-active" : ""}`}
                    onClick={() => scrollTo(id)}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          <a href={resume} download="Ajay_E_Resume.pdf" className="btn-primary header-cv header-desktop-only" style={{ fontSize: 13 }}>
            Download CV
          </a>

          <MenuOutlined
            className="header-mobile-only"
            style={{ fontSize: 22, color: "#e8e8f0", cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
        </div>
      </header>

      <Drawer
        placement="right"
        width={280}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        styles={{ body: { padding: 0, background: "#0a0a0f" } }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="header-avatar-ring header-avatar-sm">
              <img src="/image/Ajay2.png" alt="Ajay" className="header-avatar-img" />
            </div>
            <span className="header-logo">AE.</span>
          </div>
          <CloseOutlined style={{ fontSize: 18, color: "#e8e8f0", cursor: "pointer" }} onClick={() => setOpen(false)} />
        </div>
        <ul className="drawer-nav">
          {navLinks.map(({ to, label }) => {
            const id = to.replace("#", "");
            return (
              <li key={to}>
                <button
                  className={`nav-btn${active === id ? " nav-active" : ""}`}
                  onClick={() => scrollTo(id, () => setOpen(false))}
                >
                  {label}
                </button>
              </li>
            );
          })}
          <li style={{ marginTop: 8 }}>
            <a href={resume} download="Ajay_E_Resume.pdf" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
              Download CV
            </a>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Header;
