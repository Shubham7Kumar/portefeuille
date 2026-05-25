import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      {/* BACKGROUND GLOW */}
      <div className="contact-glow left"></div>
      <div className="contact-glow right"></div>

      <div className="container-custom">
        <div className="contact-card">
          <div className="contact-content">
            <span className="contact-tag">LET’S CONNECT</span>

            <h2>Build Something Exceptional Together</h2>

            <p>
              Open for collaborations, freelance projects, backend architecture
              and creative frontend experiences.
            </p>

            <div className="contact-actions">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhamk3304@gmail.com&su=Hiring%20Inquiry&body=Hello%20Shubham"
                className="contact-btn primary"
              >
                Send Email
              </a>

              <a
                href="https://github.com/Shubham7Kumar"
                target="_blank"
                rel="noreferrer"
                className="contact-btn secondary"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shubhamkumar-tech/"
                target="_blank"
                rel="noreferrer"
                className="contact-btn secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
