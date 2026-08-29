"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./page.css";
import { API_BASE_URL } from "@/util/api";
import FormStatusMessage from "@/components/FormStatusMessage";

type BookingFormState = {
  name: string;
  email: string;
  organization: string;
  serviceType: string;
  preferredDate: string;
  message: string;
};

const initialFormState: BookingFormState = {
  name: "",
  email: "",
  organization: "",
  serviceType: "",
  preferredDate: "",
  message: "",
};

export default function BookMePage() {
  const [formData, setFormData] = useState<BookingFormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_BASE_URL}/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData(initialFormState);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Booking form submit failed:", err);
      setStatus("error");
      setErrorMsg("Couldn't reach the server. Please check your connection and try again.");
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
          whileHover={{ scale: status === "loading" ? 1 : 1.05 }}
          whileTap={{ scale: status === "loading" ? 1 : 0.95 }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Submit Request"}
        </motion.button>

        <FormStatusMessage
      status={status}
      successTitle="Request received!"
      successMessage="We'll review your booking details and reach out within 48 hours."
      errorMessage={errorMsg}
    />
      </motion.form>
    </section>
  );
}