"use client";
import { insightsExcerpts, insightsExcerptType } from "@/util/data";
import "./insightPage.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface InsightPageProps {
  title: string;
  date: string;
  bannerImage: string;
  content: string; // HTML or plain text
}

const path = window.location.pathname
const InsightPage = ({ title, date, bannerImage, content }: InsightPageProps) => {

const otherInsights = insightsExcerpts.reduce<insightsExcerptType[]>((accum, insight) => {    
  if (insight.link !== path && accum.length < 3 ) { accum = [...accum, insight]; }
  return accum
}, []);

  return (
    <div className="insight-page">

      {/* HERO */}
      <section className="insight-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{title}</h1>
          <p className="insight-date">{date}</p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="insight-body">
        <div className="insight-banner">
          <Image
            src={bannerImage}
            alt="Insight banner"
            width={1100}
            height={600}
            className="insight-banner-img"
          />
        </div>

        <motion.div
          className="insight-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Render content safely */}
          <div
            className="insight-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </motion.div>
      </section>

      {/* MORE INSIGHTS */}
      <section className="more-insights">
        <h2>View More Insights</h2>

        <div className="insights-grid">
          {otherInsights.map(({link, image, title, excerpt}) => (
            <motion.div
              key={link}
              className="insight-card"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image}
                alt="Related insight"
                width={400}
                height={250}
                className="insight-card-img"
              />
              <div className="insight-card-text">
                <h3>{title}</h3>
                <p>
                  {excerpt}
                </p>
                <Link href={link} className="insight-read-more">
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default InsightPage;
