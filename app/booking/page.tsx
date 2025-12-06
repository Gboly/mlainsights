"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./page.css";

export default function BookMePage() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  organization: "",
  serviceType: "",
  preferredDate: "",
  message: "",
});

const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
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
        serviceType: "",
        preferredDate: "",
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
          Invite Monsurat for personalized financial coaching, corporate financial wellness programs, consulting,
          or speaking sessions at your conference, organization, or special event. Fill out the form below and
          our team will get back to you within 48 hours.
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
      placeholder="Organization name (if applicable)"
    />
  </div>

  <div className="form-group">
    <label htmlFor="serviceType">Service Type *</label>
    <select
      id="serviceType"
      name="serviceType"
      required
      value={formData.serviceType}
      onChange={handleChange}
    >
      <option value="">Select a service</option>
      <option value="personalCoaching">Personal Financial Coaching</option>
      <option value="corporateProgram">Corporate Financial Wellness Program</option>
      <option value="consulting">Consulting</option>
      <option value="speaking">Speaking Session</option>
      <option value="workshop">Workshop / Training</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="preferredDate">Preferred Date / Timeline</label>
    <input
      type="date"
      id="preferredDate"
      name="preferredDate"
      value={formData.preferredDate}
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
      placeholder="Describe your needs, audience, goals, preferred topics, or any other relevant details."
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
