import { Link } from "react-router-dom";
import logo from "../assets/images/omi-logo.png";

export default function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="navbar-logo">
        <img src={logo} alt="OMI Holidays" />

        <span className="brand-name">
          <b>OMI</b> HOLIDAYS
          <small>UNFORGETTABLE EXPERIENCES | KERALA</small>
        </span>
      </Link>

      <nav className="navbar-menu">
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link to="/contact" className="nav-cta">
        Plan Your Trip
      </Link>

    </header>
  );
}