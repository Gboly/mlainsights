"use client";

import { motion } from "framer-motion";
import "./page.css";
import { use, useState } from "react";

type initialFormStateType = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: initialFormStateType = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {

  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading"); 

    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData),
    }); 

    if (res.ok) {
      setStatus("success");
      setFormData(initialFormState); 
    } else {
      setStatus("error");
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        Whether you’re interested in personalized financial coaching, corporate financial wellness programs,
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
            value={formData.name}
            onChange={handleChange}
            type="text" id="name" name="name" required placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
            value={formData.email}
            onChange={handleChange}
            type="email" id="email" name="email" required placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
            value={formData.message}
            onChange={handleChange}
            id="message" name="message" rows={5} required placeholder="Type your message..."></textarea>
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