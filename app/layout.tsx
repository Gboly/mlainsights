// app/layout.tsx
import "./globals.css";
import { Playfair_Display, Inter, Raleway, Lobster_Two } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-raleway",
});

const lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lobster-two",
});

export const metadata = {
  title: "MLAinsights | Finance Educator",
  description:
    "Empowering minds through finance, leadership, and communication.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
    lang="en" 
    className={`${playfair.variable} ${inter.variable} ${raleway.variable} ${lobster.variable}`}>
      <body className="bg-background text-primary font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
