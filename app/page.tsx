"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "./page.css"; // imported globally, not as CSS module
import { insightsExcerpts } from "@/util/data";
import { getRandomItems } from "@/util/helper";
import Insight from "@/components/insight";

export default function HomePage() {

  const selectedInsights = getRandomItems(insightsExcerpts, 3);

  return (
    <main className="main">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>
            Empowering You to Build <span>Wealth</span> & Lead with <span>Financial Clarity</span>
          </h1>
          <p>
            Monsurat Lape Adeoti is a certified financial coach helping individuals and organizations
            make smarter money decisions, build sustainable wealth systems, and create financial confidence that lasts.
          </p>
          <div className="hero-buttons">
            <Link href="/booking" className="btn-primary">Book Monsurat</Link>
            <Link href="/insights" className="btn-secondary">Read Insights</Link>
          </div>
        </motion.div>
      </section>


      {/* ===== SIGNATURE AREAS ===== */}
      <section className="focus">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Areas of Focus
        </motion.h2>
        <div className="focus-grid">
          {[
            {
              title: "Financial Empowerment",
              text: "Simplifying personal finance and helping individuals take control of their money journey.",
            },
            {
              title: "Leadership & Growth",
              text: "Guiding professionals to lead with authenticity, empathy, and influence.",
            },
            {
              title: "Communication Mastery",
              text: "Transforming how leaders express ideas, connect emotionally, and drive impact.",
            },
            {
              title: "Entrepreneurship",
              text: "Nurturing innovative thinking and helping entrepreneurs scale sustainably.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="focus-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED VIDEO ===== */}
      <section className="video-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="video-box"
        >
          <iframe
            src="https://res.cloudinary.com/dirwr8cde/video/upload/v1763411526/Amitt/video_2025-11-17_20-31-44_hinsm2.mp4"
            title="Monsurat Adeoti Keynote"
            frameBorder="0"
            allowFullScreen
          />
        </motion.div>
        <p className="video-caption">
          “Your voice can inspire, your story can transform, and your finance decisions can empower lives.”
        </p>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What People Say
        </motion.h2>
        <div className="testimonial-grid">
          {[
            {
              name: "Tolu Adeyemi",
              quote: "Monsurat has a way of breaking down finance into simple, relatable concepts. A true gem!",
            },
            {
              name: "Dr. Kemi Onabanjo",
              quote: "Her sessions leave you motivated and equipped to make tangible change in your career and finances.",
            },
            {
              name: "Lekan Adebayo",
              quote: "Authentic, engaging, and deeply insightful. Every talk feels like a masterclass.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p>“{t.quote}”</p>
              <h4>- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== INSIGHTS PREVIEW ===== */}
      <section className="insights">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Latest Insights
        </motion.h2>
        <div className="insights-grid">
          {selectedInsights.map((item, index) => (
            <Insight key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="cta-box"
        >
          <h2>Partner with Monsurat</h2>
          <p>
            From personal finance coaching to organizational financial wellness programs,
            Monsurat equips individuals and teams with practical strategies to build wealth,
            improve money habits, and make confident financial decisions.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
