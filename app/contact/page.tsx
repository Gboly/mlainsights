"use client";

import { motion } from "framer-motion";
import "./page.css";

export default function ContactPage() {
  return (
    <section className="contact-section">
      <motion.div
        className="contact-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Get in Touch</h1>
        <p>
          Whether you’re looking to book Monsurat for a speaking engagement,
          inquire about consulting services, or explore potential collaborations
          — she’d love to hear from you.
        </p>
      </motion.div>

      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> mlainsights@amittcsl.com</p>
          <p><strong>Phone:</strong> +44 7887244035</p>
          <p><strong>Phone:</strong> +234 904 612 6671</p>
          <p><strong>Company:</strong> Amitt Training & Consulting Services Ltd.</p>

          <div className="contact-socials">
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="https://instagram.com" target="_blank">Instagram</a>
            <a href="https://youtube.com" target="_blank">YouTube</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h2>Send a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required placeholder="Type your message..."></textarea>
          </div>

          <motion.button
            className="contact-btn"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}