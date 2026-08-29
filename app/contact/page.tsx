"use client";

import { motion } from "framer-motion";
import "./page.css";
import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";
import FormStatusMessage from "@/components/FormStatusMessage";

type initialFormStateType = {
  name: string;
  email: string;
  message: string;
}
const initialFormState: initialFormStateType = { name: "", email: "", message: "" }

export default function ContactPage() {

  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async () => {
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
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
      console.error("Contact form submit failed:", err);
      setStatus("error");
      setErrorMsg("Couldn't reach the server. Please check your connection and try again.");
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

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
          Whether you're interested in personalized financial coaching, corporate financial wellness programs,
          consulting services, or exploring strategic collaborations, Monsurat is ready to guide you
          toward clarity, confidence, and long term financial success.
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

        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
          <h2>Send a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              value={formData.name}
              onInput={handleInput}
              type="text" id="name" name="name" required placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              value={formData.email}
              onInput={handleInput}
              type="email" id="email" name="email" required placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              value={formData.message}
              onInput={handleTextInput}
              id="message" name="message" rows={5} required placeholder="Type your message..."></textarea>
          </div>

          <motion.button
            className="contact-btn"
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: status === "loading" ? 1 : 1.05 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.95 }}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          <FormStatusMessage
            status={status}
            successTitle="Message sent!"
            successMessage="Thanks for reaching out — we'll get back to you soon."
            errorMessage={errorMsg}
          />
        </form>
      </motion.div>
    </section>
  );
}