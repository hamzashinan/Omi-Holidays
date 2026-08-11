export default function About() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="section-label">ABOUT OMI HOLIDAYS</p>
        <h1>
          Your Journey,
          <span> Our Expertise</span>
        </h1>
        <p className="page-header-description">
          We craft unforgettable Kerala travel experiences tailored just for you.
        </p>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">Discover the True Essence of Kerala</h2>
            <p>
              From misty hills and serene backwaters to golden beaches and rich cultural heritage, OMI Holidays is dedicated to curating the perfect escape.
            </p>
            <p>
              Whether you're travelling with family, friends, your partner, or exploring alone, our local expertise ensures you get an authentic and safe journey that fits your unique style. We handle the logistics so you can focus on making memories.
            </p>
            
            <div className="about-stats">
              <div className="stat-box">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-box">
                <h3>500+</h3>
                <p>Happy Travellers</p>
              </div>
              <div className="stat-box">
                <h3>100%</h3>
                <p>Customizable</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80" alt="Kerala landscape" />
            <div className="image-decoration"></div>
          </div>
        </div>
      </section>
    </main>
  );
}