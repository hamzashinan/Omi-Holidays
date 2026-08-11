import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay" />

      <div className="hero-content">

        <p className="hero-small">
          EXPLORE THE ENCHANTING
        </p>

        <h1>
          Kerala
          <span>God's Own Country</span>
        </h1>

        <p className="hero-description">
          From misty hills and serene backwaters to golden beaches
          and rich cultural heritage, discover unforgettable
          experiences with OMI Holidays.
        </p>

        <div className="hero-buttons">

          <Link to="/tours" className="btn-primary">
            Explore Tours
          </Link>

          <Link to="/contact" className="btn-secondary">
            Plan Your Trip
          </Link>

        </div>

      </div>

    </section>
  )
}