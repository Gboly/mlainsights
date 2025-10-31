"use client";
import "./page.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const insights = [
  {
    title: "Bridging Confidence and Capital",
    excerpt:
      "How understanding your financial behavior can help you communicate value and attract opportunities.",
    image: "/images/finance-talk.jpg",
    link: "#",
  },
  {
    title: "Leadership Through Listening",
    excerpt:
      "The power of empathetic communication in corporate leadership and how it builds trust.",
    image: "/images/leadership.jpg",
    link: "#",
  },
  {
    title: "Money Stories That Shape Us",
    excerpt:
      "Why our early experiences with money define our adult financial mindset — and how to rewrite that story.",
    image: "/images/money-story.jpg",
    link: "#",
  },
  {
    title: "Women and Wealth: Beyond the Numbers",
    excerpt:
      "How women can claim space in financial conversations and lead with confidence and clarity.",
    image: "/images/women-wealth.jpg",
    link: "#",
  },
];

const InsightsPage = () => {
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
              src="/images/featured-insight.jpg"
              alt="Featured Insight"
              width={700}
              height={400}
              className="feature-photo"
            />
          </div>
          <div className="featured-text">
            <h2>Communicating Confidence in a Complex World</h2>
            <p>
              In a world where information moves fast and attention is scarce,
              communication has become the new form of capital. Here’s how to use
              your voice to lead, influence, and inspire change — whether you’re
              in a boardroom or on a global stage.
            </p>
            <Link href="#" className="read-more">
              Read Full Article →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INSIGHTS GRID */}
      <section className="insights-grid">
        {insights.map((item, index) => (
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
