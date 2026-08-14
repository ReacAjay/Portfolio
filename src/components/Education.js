import React from 'react';

const educations = [
  {
    icon: "🎓",
    degree: "B.Sc. IT — Bachelor of Science in Information Technology",
    desc: "A comprehensive undergraduate program providing in-depth knowledge and practical skills in computer science and IT. Covers software development, network administration, data analysis, and IT consulting.",
  },
  {
    icon: "📚",
    degree: "Higher Secondary Education (11th & 12th Grade)",
    desc: "Specialized academic stage where students deepen their understanding of core disciplines, preparing for tertiary education and career paths through focused coursework and practical learning.",
  },
];

export const Education = () => {
  return (
    <section className="section" id="education">
      <div className="section-inner">
        <span className="section-tag">My Background</span>
        <h2 className="section-title">Education <span className="gradient-text">Journey</span></h2>
        <p className="section-sub">The academic foundation that shaped my technical expertise.</p>

        <div className="edu-grid">
          {educations.map(({ icon, degree, desc }) => (
            <div className="edu-card" key={degree}>
              <div className="edu-icon">{icon}</div>
              <h3 className="edu-degree">{degree}</h3>
              <p className="edu-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
