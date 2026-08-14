import React from 'react';

const skillGroups = [
  {
    category: "Frontend",
    label: "UI & Interaction",
    skills: [
      { name: "HTML",       fa: "fa-html5",    color: "#e34f26" },
      { name: "CSS",        fa: "fa-css3-alt", color: "#1572b6" },
      { name: "JavaScript", fa: "fa-js",       color: "#f7df1e" },
      { name: "React.js",   fa: "fa-react",    color: "#61dafb" },
      { name: "Vue.js",     fa: "fa-vuejs",    color: "#42b883" },
      { name: "Tailwind",   img: "https://cdn.simpleicons.org/tailwindcss/06b6d4", color: "#06b6d4" },
      { name: "Vuetify",    img: "https://cdn.simpleicons.org/vuetify/1867c0",     color: "#1867c0" },
      // { name: "Ant Design", img: "https://cdn.simpleicons.org/antdesign/0170fe",   color: "#0170fe" },
    ],
  },
  {
    category: "Backend & DB",
    label: "Server, API & Data",
    skills: [
      { name: "Node.js",    fa: "fa-node-js",  color: "#339933" },
      {
        name: "Express.js",
        img: "https://cdn.simpleicons.org/express/ffffff",
        color: "#6c63ff",
      },
      {
        name: "MongoDB",
        img: "https://cdn.simpleicons.org/mongodb/47a248",
        color: "#47a248",
      },
      {
        name: "MySQL",
        img: "https://cdn.simpleicons.org/mysql/00758f",
        color: "#00758f",
      },
      {
        name: "Redis",
        img: "https://cdn.simpleicons.org/redis/dc382d",
        color: "#dc382d",
      },
    ],
  },
  {
    category: "Mobile",
    label: "App Development",
    skills: [
      { name: "React Native", fa: "fa-react", color: "#61dafb" },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <span className="section-tag">What I Know</span>
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <p className="section-sub">Technologies and tools I use to bring ideas to life.</p>

        <div className="skills-bento">
          {skillGroups.map(({ category, label, skills }) => (
            <div className="sb-group" key={category}>
              {/* Left: category label */}
              <div className="sb-label">
                <div className="sb-label-line" />
                <div>
                  <div className="sb-cat">{category}</div>
                  <div className="sb-sub">{label}</div>
                </div>
              </div>

              {/* Right: tiles */}
              <div className="sb-tiles">
                {skills.map(({ name, fa, img, color }) => (
                  <div className="sb-tile" key={name} style={{ "--sc": color }}>
                    <div className="sb-tile-glow" />
                    {img
                      ? <img src={img} alt={name} className="sb-tile-img" />
                      : <i className={`fa-brands ${fa} sb-tile-icon`} />
                    }
                    <span className="sb-tile-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
