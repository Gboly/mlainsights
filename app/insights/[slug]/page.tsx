"use client";
import InsightPage from "@/components/insightPage";
import { insights } from "@/util/data";
import { title } from "process";
import { useEffect, useState } from "react";



export default function Insight() {

    const [insight, setInsight] = useState({title: '', date: '', bannerImage: '', content: ''});

    useEffect(() => {
        const path = window.location.pathname
        const pathSegments = path.split('/');
        const slug = pathSegments.at(-1);
        
        const insight = insights.find((insight) => insight.slug === slug);
        setInsight(insight ? insight : {title: '', date: '', bannerImage: '', content: ''} )
    }, []);


  return (
    <InsightPage
      title={insight.title}
      date={insight.date}
      bannerImage={insight.bannerImage}
      content={insight.content}
    />
  );
}
