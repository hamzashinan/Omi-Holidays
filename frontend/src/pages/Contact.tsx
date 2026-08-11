export default function Contact() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="section-label">GET IN TOUCH</p>
        <h1>
          Let's Plan Your
          <span> Kerala Journey</span>
        </h1>
        <p className="page-header-description">
          We are here to help you craft the perfect itinerary. Reach out to our team today!
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          
          <div className="contact-info-boxes">
            <div className="contact-box">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>Speak directly to our travel experts.</p>
              <strong>+91 70122 99227</strong>
            </div>

            <div className="contact-box">
              <div className="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p>Send us your requirements anytime.</p>
              <strong>omiholidays1767@gmail.com</strong>
            </div>

            <div className="contact-box">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Kerala, India</p>
              <strong>Available 24/7 Online</strong>
            </div>
          </div>

          <div className="contact-action">
            <h2>Ready to start your adventure?</h2>
            <p>
              The fastest way to reach us is via WhatsApp. Chat with our representatives to get instant quotes, customize your packages, and book your dream holiday.
            </p>
            <a
              href="https://wa.me/917012299227"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}