"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    //{ name: "Speaking", href: "/speaking" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    // { name: "Events", href: "/events" },
    // { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <h3 className="footer-title">
            <span className="brand-mla">MLA</span>
            <span className="brand-insights">insights</span>
          </h3>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="navbar-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta">
          <Link href="/booking" className="navbar-btn">
            Book Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="navbar-toggle">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="navbar-dropdown"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="navbar-dropdown-link"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="navbar-dropdown-btn"
            onClick={() => setOpen(false)}
          >
            Book Me
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
