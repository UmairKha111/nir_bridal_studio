/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Gallery from "./components/Gallery";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Let her initial lookbook default to dark mode, matching the professional makeup artist instagram screenshots!
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved !== null) {
      return saved === "dark";
    }
    // Default to dark mode for luxury beauty brand
    return true;
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div id="portfolio-root" className={`min-h-screen bg-white text-slate-800 dark:bg-[#0a0a0a] dark:text-[#e5e5e5] font-sans antialiased overflow-x-hidden selection:bg-gold-500/30`}>
      {/* HEADER NAVIGATION */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* CORE PORTFOLIO VIEWS */}
      <main id="portfolio-main-content">
        <Hero />
        <Bio />
        <Gallery />
        <Courses />
        <Testimonials />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
