"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./page.css";

export default function BookMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/book-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          eventType: "",
          eventDate: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bookme-section">
      <motion.div
        className="bookme-header"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Book Monsurat</h1>
        <p>
          Invite Monsurat to speak at your conference, organization, or special event.
          Fill out the form below and our team will get back to you within 48 hours.
        </p>
      </motion.div>

      <motion.form
        className="bookme-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="organization">Organization / Company</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Organization name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="eventType">Event Type *</label>
          <input
            type="text"
            id="eventType"
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            placeholder="Conference, Workshop, Panel, etc."
          />
        </div>

        <div className="form-group">
          <label htmlFor="eventDate">Event Date *</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            value={formData.eventDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Additional Details *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe the event, audience size, preferred topics, etc."
          />
        </div>

        <motion.button
          type="submit"
          className="bookme-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Submit Request"}
        </motion.button>

        {status === "success" && (
          <p className="status success">✅ Your request has been sent successfully!</p>
        )}
        {status === "error" && (
          <p className="status error">❌ Something went wrong. Please try again.</p>
        )}
      </motion.form>
    </section>
  );
}
