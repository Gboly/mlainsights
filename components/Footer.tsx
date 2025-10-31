import Link from "next/link";
import { Linkedin, Mail, Instagram, Youtube } from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h3 className="footer-title">
            <span className="brand-mla">MLA</span>
            <span className="brand-insights">insights</span>
          </h3>
          <p className="footer-text">
            Public Speaker, Finance Educator, and Consultant empowering professionals and organizations through clarity and confidence in finance and communication.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            {["About", "Services", "Insights", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="footer-link">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-icons">
            <Link href="https://linkedin.com" target="_blank" className="footer-icon">
              <Linkedin size={22} />
            </Link>
            <Link href="mailto:mlainsights@amittcsl.com" className="footer-icon">
              <Mail size={22} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="footer-icon">
              <Instagram size={22} />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="footer-icon">
              <Youtube size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MLAinsights. All rights reserved.</p>
        <p>
          Powered by{" "}
          <Link href="https://amittcsl.com" className="footer-powered">
            Amitt Training & Consulting Services Ltd.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
