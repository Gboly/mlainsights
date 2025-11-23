export type insightsExcerptType = {
    title: string,
    excerpt: string,
    image: string,
    link: string,
}
export const insightsExcerpts: insightsExcerptType[] = [ 
    {
    title: "Communicating Confidence in a Complex World",
    excerpt:`In a world where information moves fast and attention is scarce,
              communication has become the new form of capital. Here’s how to use
              your voice to lead, influence, and inspire change — whether you’re
              in a boardroom or on a global stage.`,
    image: "/featured-insight.jpg",
    link: "/insights/communicating-confidence-in-a-complex-world",
  },
    {
    title: "Bridging Confidence and Capital",
    excerpt:
      "How understanding your financial behavior can help you communicate value and attract opportunities.",
    image: "/finance-talk.jpg",
    link: "/insights/bridging-confidence-and-capital",
  },
  {
    title: "Leadership Through Listening",
    excerpt:
      "The power of empathetic communication in corporate leadership and how it builds trust.",
    image: "/leadership.jpg",
    link: "/insights/leadership-through-listening",
  },
  {
    title: "Money Stories That Shape Us",
    excerpt:
      "Why our early experiences with money define our adult financial mindset — and how to rewrite that story.",
    image: "/money-story.jpg",
    link: "/insights/money-stories-that-shape-us",
  },
  {
    title: "Women and Wealth: Beyond the Numbers",
    excerpt:
      "How women can claim space in financial conversations and lead with confidence and clarity.",
    image: "/women-wealth.jpg",
    link: "/insights/women-and-wealth-beyond-the-numbers",
  },
]

import { bridgingConfidenceAndCapitalInsight } from "./story/bridging-confidence-and-capital";
import { communicatingConfidenceInAComplexWorldInsight } from "./story/communicating-confidence-in-a-complex-world";
import { leadershipThroughListeningInsight } from "./story/leadership-through-listening";
import { moneyStoriesThatShapeUsInsight } from "./story/money-stories-that-shape-us";
import { womenAndWealthInsight } from "./story/women-and-wealth-beyond-the-numbers";
export const insights = [
     {
    title: "Bridging Confidence and Capital",
    slug: "bridging-confidence-and-capital",
    date: "January 12, 2025",
    bannerImage: "/finance-talk.jpg",
    content: bridgingConfidenceAndCapitalInsight
 },
     {
    title: "Communicating Confidence in a Complex World",
    slug: "communicating-confidence-in-a-complex-world",
    date: "January 12, 2025",
    bannerImage: "/featured-insight.jpg",
    content: communicatingConfidenceInAComplexWorldInsight
 },
     {
    title: "Leadership Through Listening",
    slug: "leadership-through-listening",
    date: "January 12, 2025",
    bannerImage: "/leadership.jpg",
    content: leadershipThroughListeningInsight
 },
     {
    title: "Money Stories That Shape Us",
    slug: "money-stories-that-shape-us",
    date: "January 12, 2025",
    bannerImage: "/money-story.jpg",
    content: moneyStoriesThatShapeUsInsight
 },
     {
    title: "Women and Wealth: Beyond the Numbers",
    slug: "women-and-wealth-beyond-the-numbers",
    date: "January 12, 2025",
    bannerImage: "/women-wealth.jpg",
    content: womenAndWealthInsight
 },
]