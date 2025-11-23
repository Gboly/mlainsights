"use client";
import "./page.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {insightsExcerpts} from "@/util/data";

const InsightsPage = () => {

  const featuredInsights = insightsExcerpts[0];

  return (
    <div className="insights-page">
      {/* HERO SECTION */}
      <section className="insights-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Insights & <span className="highlight">Reflections</span>
          </h1>
          <p>
            Explore perspectives on finance, leadership, and personal growth from
            Monsurat Lape Adeoti — where communication meets transformation.
          </p>
        </motion.div>
      </section>

      {/* FEATURED INSIGHT */}
      <section className="featured-insight">
        <motion.div
          className="featured-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="featured-image">
            <Image
              src={featuredInsights.image}
              alt="Featured Insight"
              width={700}
              height={400}
              className="feature-photo"
            />
          </div>
          <div className="featured-text">
            <h2>{featuredInsights.title}</h2>
            <p>
              {featuredInsights.excerpt}
            </p>
            <Link href={featuredInsights.link} className="read-more">
              Read Full Article →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INSIGHTS GRID */}
      <section className="insights-grid">
        {insightsExcerpts.filter((_, index) => index !== 0).map((item, index) => (
          <motion.div
            key={index}
            className="insight-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="insight-image"
            />
            <div className="insight-content">
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <Link href={item.link} className="read-more">
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="insights-cta">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Stay Inspired</h2>
          <p>
            Get the latest insights and reflections from Monsurat delivered to your inbox.
          </p>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default InsightsPage;
