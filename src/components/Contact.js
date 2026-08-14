import React from 'react';

const contactInfo = [
  { icon: "✉️", label: "Email", value: "ajay.eswaran@outlook.com" },
  { icon: "📱", label: "Phone", value: "+91 902 5440 936" },
  { icon: "📍", label: "Location", value: "Tamil Nadu, India" },
];

const Contact = () => {
  return (
    <section className="section" id="contact" style={{ background: "rgba(108,99,255,0.03)" }}>
      <div className="section-inner">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">Let's <span className="gradient-text">Work Together</span></h2>
        <p className="section-sub">Have a project in mind? I'd love to hear about it.</p>

        <div className="contact-grid">
          {/* Info */}
          <div>
            {contactInfo.map(({ icon, label, value }) => (
              <div className="contact-info-item" key={label}>
                <div className="contact-info-icon">{icon}</div>
                <div>
                  <div className="contact-info-label">{label}</div>
                  <div className="contact-info-value">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <input className="form-input" type="text" placeholder="Your Name" required />
            <input className="form-input" type="email" placeholder="Your Email" required />
            <textarea className="form-input" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-end", padding: "12px 32px" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
