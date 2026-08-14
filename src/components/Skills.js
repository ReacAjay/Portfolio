import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

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
    ],
  },
  {
    category: "Backend & DB",
    label: "Server, API & Data",
    skills: [
      { name: "Node.js",    fa: "fa-node-js",  color: "#339933" },
      { name: "Express.js", img: "https://cdn.simpleicons.org/express/ffffff",  color: "#6c63ff" },
      { name: "MongoDB",    img: "https://cdn.simpleicons.org/mongodb/47a248",  color: "#47a248" },
      { name: "MySQL",      img: "https://cdn.simpleicons.org/mysql/00758f",    color: "#00758f" },
      { name: "Redis",      img: "https://cdn.simpleicons.org/redis/dc382d",    color: "#dc382d" },
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

const SkillGroup = ({ category, label, skills, groupDelay }) => {
  const groupRef = useRef(null);

  useEffect(() => {
    const el = groupRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal the group row itself
          el.classList.add('revealed');

          // Reveal each tile with its own stagger delay
          const tiles = el.querySelectorAll('.sb-tile');
          tiles.forEach((tile, i) => {
            setTimeout(() => tile.classList.add('revealed'), (groupDelay + i * 70) * 1000 / 1000);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [groupDelay]);

  return (
    <div ref={groupRef} className="sb-group reveal-up">
      <div className="sb-label">
        <div className="sb-label-line" />
        <div>
          <div className="sb-cat">{category}</div>
          <div className="sb-sub">{label}</div>
        </div>
      </div>

      <div className="sb-tiles">
        {skills.map(({ name, fa, img, color }, i) => (
          <div
            className="sb-tile reveal-scale"
            key={name}
            style={{ "--sc": color }}
          >
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
  );
};

export const Skills = () => {
  const headRef = useReveal();

  return (
    <section className="section" id="skills">
      <div className="section-inner">

        <div ref={headRef} className="reveal-up">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-sub">Technologies and tools I use to bring ideas to life.</p>
        </div>

        <div className="skills-bento">
          {skillGroups.map(({ category, label, skills }, i) => (
            <SkillGroup
              key={category}
              category={category}
              label={label}
              skills={skills}
              groupDelay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
