import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/omi-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
        <img src={logo} alt="OMI Holidays" />

        <span className="brand-name">
          <b>OMI</b> HOLIDAYS
          <small>UNFORGETTABLE EXPERIENCES | KERALA</small>
        </span>
      </Link>

      <nav className={open ? "navbar-menu active" : "navbar-menu"}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/tours" onClick={() => setOpen(false)}>Tours</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>

      <Link to="/contact" className="nav-cta">
        Plan Your Trip
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
}