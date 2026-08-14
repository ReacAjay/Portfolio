import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useReveal } from '../hooks/useReveal';

// ── Fill these in after setting up EmailJS ──────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'abcDEFghiJKL'
// ────────────────────────────────────────────────────────────────────

const contactInfo = [
  { icon: "✉️", label: "Email",    value: "ajay.eswaran@outlook.com" },
  { icon: "📱", label: "Phone",    value: "+91 902 5440 936" },
  { icon: "📍", label: "Location", value: "Tamil Nadu, India" },
];

const Contact = () => {
  const headRef = useReveal();
  const infoRef = useReveal();
  const formRef = useReveal();

  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="section" id="contact" style={{ background: "rgba(108,99,255,0.03)" }}>
      <div className="section-inner">

        <div ref={headRef} className="reveal-up">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's <span className="gradient-text">Work Together</span></h2>
          <p className="section-sub">Have a project in mind? I'd love to hear about it.</p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div ref={infoRef} className="reveal-left">
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
          <div ref={formRef} className="reveal-right">
          <form
            ref={form}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* name must match EmailJS template variables */}
            <input
              className="form-input"
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              className="form-input"
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="form-input"
              name="message"
              placeholder="Your Message"
              required
            />

            <div className="contact-form-footer">
              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending'}
                style={{ padding: "12px 32px", opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && (
                <span className="form-status form-status--ok">✓ Message sent successfully!</span>
              )}
              {status === 'error' && (
                <span className="form-status form-status--err">✗ Failed to send. Please try again.</span>
              )}
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
