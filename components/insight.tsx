"use client"

import { insightsExcerptType } from "@/util/data";
import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link"

const Insight = ({index, item} : {index: number, item: insightsExcerptType}) => {
  return (
    <motion.div
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
  )
}

export default Insight