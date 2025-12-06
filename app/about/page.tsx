"use client";
import "./page.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About <span className="highlight">Monsurat Lape Adeoti</span></h1>
          <p>
            A dedicated financial coach, personal finance educator, and founder of{" "}
            <Link href="https://www.amittcsl.com" target="_blank" className="amitt-link">
              Amitt Training & Consulting
            </Link>.
          </p>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/mla.jpg"
            alt="Monsurat Lape Adeoti"
            width={400}
            height={450}
            className="portrait"
          />
        </motion.div>
      </section>

      {/* PERSONAL STORY */}
      <section className="about-story">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Her Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Monsurat’s journey began with a passion for transforming complex financial concepts 
          into relatable, actionable insights. Over the years, she has empowered professionals, 
          entrepreneurs, and students to gain clarity and confidence in their financial decisions.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Through captivating storytelling and practical guidance, she bridges the gap between 
          personal finance, business strategy, and purpose-driven living.
        </motion.p>
      </section>

      {/* FINANCIAL COACHING PHILOSOPHY */}
      <section className="about-philosophy">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Financial Coaching Philosophy
        </motion.h2>
        <div className="philosophy-grid">
          {[
            "Financial clarity is the foundation of confident decision-making.",
            "Wealth grows when knowledge meets consistent action.",
            "Everyone deserves a simple, personalized path to financial freedom."
          ].map((quote, index) => (
            <motion.div
              key={index}
              className="philosophy-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <p>{quote}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="about-quote">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          “When you understand your money, you transform your future.”
        </motion.blockquote>
      </section>

    </div>
  );
};

export default AboutPage;
