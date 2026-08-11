import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Tour } from "../types/tour";
import { getTourBySlug } from "../services/api";

export default function TourDetails() {
  const { slug } = useParams();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getTourBySlug(slug)
        .then((data) => {
          setTour(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching tour:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <main className="not-found-page"><div className="not-found-content"><p>Loading...</p></div></main>;
  }

  if (!tour) {
    return (
      <main className="not-found-page">
        <div className="not-found-content">
          <h1>Tour Not Found</h1>

          <p>
            Sorry, we couldn't find the destination you're looking for.
          </p>

          <Link to="/tours" className="back-button">
            Back to Tours
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="tour-details-page">

      {/* Hero */}
      <section className="details-hero">
        <img
          src={tour.image_url}
          alt={tour.title}
        />

        <div className="details-overlay">
          <p>{tour.location}, {tour.region}</p>

          <h1>{tour.title}</h1>

          <div className="details-rating">
            ★ {tour.rating}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="details-content">

        {/* Main Content */}
        <div className="details-main">

          <div className="details-meta">
            <span>
              📍 {tour.location}
            </span>

            <span>
              🕐 {tour.duration_days} Days
            </span>

            <span>
              👥 Up to {tour.group_size} people
            </span>
          </div>

          <h2>About this experience</h2>

          <p className="details-description">
            {tour.description}
          </p>

          <h2>Highlights</h2>

          <ul className="highlights-list">
            {tour.highlights.map((highlight) => (
              <li key={highlight}>
                <span>✓</span>
                {highlight}
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
            {tour.duration_days} Days · Up to{" "}
            {tour.group_size} people
          </p>

          <a
            href={`https://wa.me/917012299227?text=${encodeURIComponent(
              `Hello OMI Holidays, I am interested in ${tour.title}.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            Enquire on WhatsApp
          </a>

          <p className="booking-note">
            No payment required. Our travel team will contact
            you to confirm your trip.
          </p>

        </aside>

      </section>

      {/* Back */}
      <div className="details-back">
        <Link to="/tours">
          ← Back to all tours
        </Link>
      </div>

    </main>
  );
}