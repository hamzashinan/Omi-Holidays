import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-main">OMI</span>
            <span className="footer-logo-text">HOLIDAYS</span>
          </Link>

          <p className="footer-tagline">
            UNFORGETTABLE EXPERIENCES | KERALA
          </p>

          <p className="footer-description">
            Discover Kerala with thoughtfully designed journeys,
            comfortable travel, and experiences made around you.
          </p>

          {/* Social Media */}
          <div className="footer-socials">
            <a
              href="#"
              aria-label="Instagram"
              className="social-link"
            >
              IG
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="social-link"
            >
              f
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3 className="footer-column-title">Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Destinations */}
        <div className="footer-column">
          <h3 className="footer-column-title">Destinations</h3>

          <Link to="/tour/munnar-tea-valley-escape">
            Munnar
          </Link>

          <Link to="/tour/alleppey-private-houseboat-cruise">
            Alleppey
          </Link>

          <Link to="/tour/fort-kochi-heritage-walk">
            Fort Kochi
          </Link>

          <Link to="/tour/varkala-cliff-beach-weekend">
            Varkala
          </Link>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3 className="footer-column-title">Get In Touch</h3>

          <a href="tel:+919876543210">
            <Phone size={17} />
            <span>+91 7994186178</span>
          </a>

          <a href="mailto:hello@omiholidays.com">
            <Mail size={17} />
            <span>omiholidays@gmail.com</span>
          </a>

          <div className="contact-item">
            <MapPin size={17} />
            <span>Kerala, India</span>
          </div>

          <Link to="/contact" className="footer-plan-button">
            Plan Your Trip
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} OMI Holidays.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/contact">
              Privacy Policy
            </Link>

            <Link to="/contact">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}