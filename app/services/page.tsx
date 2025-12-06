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
            Empowering Financial Growth through <br />
            <span className="highlight">Coaching</span> and Consulting
          </h1>
          <p>
            Monsurat Lape Adeoti helps individuals and organizations build wealth,
            improve financial behavior, and make confident, informed money decisions.
          </p>
        </motion.div>
      </section>


      {/* FINANCIAL COACHING & EDUCATION SECTION */}
      <section className="speaking-section">
        <motion.div
          className="speaking-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="speaking-text">
            <h2>Financial Coaching & Education</h2>
            <p>
              Monsurat delivers practical, transformative financial education designed to
              simplify money management, build confidence, and improve financial behavior.
              Her sessions empower teams, professionals, and young adults to make informed,
              intentional financial decisions that create long-term stability and growth.
            </p>
            <ul>
              <li>Personal Finance Coaching Sessions</li>
              <li>Corporate Financial Wellness Programs</li>
              <li>Financial Literacy Training for Schools & Institutions</li>
              <li>Workshops, Masterclasses & Interactive Money Clinics</li>
            </ul>
            <Link href="/booking" className="cta-btn">
              Book a Coaching or Training Session
            </Link>
          </div>

          <div className="speaking-image">
            <Image
              src="/mla-3.jpg"
              alt="Monsurat financial coaching session"
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
              title: "Financial Training Programs",
              desc: "Structured workshops designed to enhance financial literacy, budgeting behavior, and wealth-building habits for individuals and teams.",
              icon: "🎓",
            },
            {
              title: "Financial Consulting",
              desc: "Through Amitt Training & Consulting, Monsurat helps organizations strengthen financial wellness culture, optimize staff money management, and create sustainable learning models.",
              icon: "💼",
            },
            {
              title: "Mentorship & Coaching",
              desc: "Personalized one-on-one guidance for professionals seeking clarity in money management, career direction, and leadership development.",
              icon: "🌱",
            },
            {
              title: "Speaking Engagements",
              desc: "Financial-focused speaking sessions covering money mindset, financial confidence, wealth-building basics, and organizational financial wellness.",
              icon: "🎤",
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
          <h2>Partner with Monsurat for Financial Growth</h2>
          <p>
            Whether it’s personalized coaching, corporate financial wellness programs,
            or strategic consulting, Monsurat is ready to help individuals and organizations
            achieve clarity, confidence, and long term financial success.
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
