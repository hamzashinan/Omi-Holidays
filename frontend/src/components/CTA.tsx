import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <p className="section-label">PLAN YOUR KERALA JOURNEY</p>

        <h2>
          Your Kerala adventure
          <br />
          starts here.
        </h2>

        <p>
          Tell us what you are looking for, and we'll create a Kerala
          experience around you.
        </p>

        <Link to="/contact" className="cta-button">
          Plan Your Trip
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}