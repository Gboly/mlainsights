"use client";
import "./page.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* HERO SECTION */}
      <section className="services-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Empowering Growth through <span className="highlight">Speaking</span>,{" "}
            <br /> Training, and Consulting
          </h1>
          <p>
            Monsurat Lape Adeoti transforms communication and financial literacy
            into tools for confidence, clarity, and leadership.
          </p>
        </motion.div>
      </section>

      {/* SPEAKING SECTION */}
      <section className="speaking-section">
        <motion.div
          className="speaking-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="speaking-text">
            <h2>Speaking Engagements</h2>
            <p>
              Monsurat is a sought-after speaker who brings financial awareness,
              emotional intelligence, and leadership insight to life. She delivers
              talks that inspire transformation, empower decision-making, and
              challenge perspectives across diverse audiences.
            </p>
            <ul>
              <li>Keynote Sessions</li>
              <li>Corporate and Leadership Retreats</li>
              <li>University and Youth Events</li>
              <li>Workshops & Panels</li>
            </ul>
            <Link href="/booking" className="cta-btn">
              Book Monsurat to Speak
            </Link>
          </div>
          <div className="speaking-image">
            <Image
              src="/mla-3.jpg"
              alt="Monsurat speaking"
              width={500}
              height={400}
              className="speaking-photo"
            />
          </div>
        </motion.div>
      </section>

      {/* OTHER SERVICES */}
      <section className="other-services">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Other Services
        </motion.h2>

        <div className="services-grid">
          {[
            {
              title: "Training Programs",
              desc: "Tailored workshops designed to equip individuals and teams with practical financial and communication skills.",
              icon: "🎓",
            },
            {
              title: "Consulting",
              desc: "Through Amitt Training & Consulting, Monsurat partners with organizations to design sustainable learning and strategy models.",
              icon: "💼",
            },
            {
              title: "Mentorship",
              desc: "One-on-one sessions to help emerging professionals navigate career, leadership, and personal finance with clarity.",
              icon: "🌱",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Let’s Work Together</h2>
          <p>
            Whether it’s a keynote session, corporate training, or strategic partnership —
            Monsurat is ready to collaborate with you to create impact.
          </p>
          <Link href="/contact" className="cta-btn-dark">
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesPage;
