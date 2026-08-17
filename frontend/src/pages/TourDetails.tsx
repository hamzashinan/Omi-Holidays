import { Link, useParams } from "react-router-dom";
import { tours } from "../data/tours";

export default function TourDetails() {
  const { slug } = useParams();

  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    return (
      <main className="notfound-page">
        <div className="notfound-content">
          <h1>Tour Not Found</h1>

          <p>
            Sorry, we couldn't find the destination you're looking for.
          </p>

          <Link to="/tours" className="notfound-btn">
            Back to Tours
          </Link>
        </div>
      </main>
    );
  }

  const whatsappMessage = `Hello OMI Holidays,

I'm interested in the *${tour.title}*.

📍 Location: ${tour.location}
🕐 Duration: ${tour.duration_days} Days
👥 Group Size: Up to ${tour.group_size}
💰 Price: ₹${Number(tour.price).toLocaleString("en-IN")}

Please share more details.`;

  return (
    <main className="tour-details-page">
      {/* Hero */}
      <section className="details-hero">
        <img src={tour.image_url} alt={tour.title} />

        <div className="details-overlay">
          <p>
            {tour.location}, {tour.region}
          </p>

          <h1>{tour.title}</h1>

          <div className="details-rating">
            ★ {tour.rating}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="details-content">
        <div className="details-main">
          <div className="details-meta">
            <span>📍 {tour.location}</span>
            <span>🕐 {tour.duration_days} Days</span>
            <span>👥 Up to {tour.group_size} People</span>
          </div>

          <h2>About this experience</h2>

          <p className="details-description">
            {tour.description}
          </p>

          <h2>Highlights</h2>

          <ul className="highlights-list">
            {tour.highlights.map((item) => (
              <li key={item}>
                <span>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Booking Card */}
        <aside className="booking-card">
          <p className="booking-label">
            Starting from
          </p>

          <h2>
            ₹{Number(tour.price).toLocaleString("en-IN")}
          </h2>

          <p className="booking-info">
            {tour.duration_days} Days · Up to {tour.group_size} People
          </p>

          <a
            href={`https://wa.me/917994186178?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            Enquire on WhatsApp
          </a>

          <p className="booking-note">
            No payment required. Our travel team will contact you to confirm your
            trip.
          </p>
        </aside>
      </section>

      {/* Back */}
      <div className="details-back">
        <Link to="/tours">← Back to all tours</Link>
      </div>
    </main>
  );
}