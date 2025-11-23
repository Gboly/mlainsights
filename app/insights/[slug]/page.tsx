"use client";
import InsightPage from "@/components/insightPage";
import { insights } from "@/util/data";

const path = window.location.pathname
const pathSegments = path.split('/');
const slug = pathSegments.at(-1);

export default function Insight() {

const insight = insights.find((insight) => insight.slug === slug);

if (!insight) return <div>Insight page not found</div>

  return (
    <InsightPage
      title={insight.title}
      date={insight.date}
      bannerImage={insight.bannerImage}
      content={insight.content}
    />
  );
}
