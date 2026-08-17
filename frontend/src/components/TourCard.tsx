import { Link } from "react-router-dom";
import type { Tour } from "../types/tour";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const BACKEND_URL = "https://omi-holidays.onrender.com";

  const imageUrl =
    tour.image_url?.startsWith("http")
      ? tour.image_url
      : `${BACKEND_URL}${tour.image_url}`;

  return (
    <article className="tour-card">
      <div className="tour-image">
        <img src={imageUrl} alt={tour.title} />

        <span className="tour-category">{tour.category}</span>
      </div>

      <div className="tour-content">
        <div className="tour-meta">
          <span>{tour.location}</span>
          <span>★ {tour.rating}</span>
        </div>

        <h3>{tour.title}</h3>

        <p>{tour.description}</p>

        <div className="tour-info">
          <span>{tour.duration_days} Days</span>
          <span>Up to {tour.group_size}</span>
          <strong>₹{Number(tour.price).toLocaleString("en-IN")}</strong>
        </div>

        <div className="tour-actions">
          <Link to={`/tours/${tour.slug}`} className="tour-button">
            View Details →
          </Link>

          <a
            href={`https://wa.me/917994186178?text=${encodeURIComponent(
              `I'm interested in the ${tour.title} tour.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tour-button enquiry"
          >
            Enquiry on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}