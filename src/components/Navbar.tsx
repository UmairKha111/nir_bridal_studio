/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, Phone, Compass, BookOpen, Image, Heart, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import { portfolioData } from "../data/portfolioData";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "Home", href: "#hero", icon: Compass },
    { label: "Biography", href: "#biography", icon: User },
    { label: "Gallery", href: "#gallery", icon: Image },
    { label: "Courses & Mentorship", href: "#courses", icon: BookOpen },
    { label: "Testimonials", href: "#testimonials", icon: Heart },
    { label: "Book Consultation", href: "#contact", icon: Sparkles },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection observer or manual check to update active tab
      const scrollPosition = window.scrollY + 120;
      const sections = ["hero", "biography", "gallery", "courses", "testimonials", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 85;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close the mobile panel shortly after starting the scroll to prevent sudden layout shifts
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md shadow-md py-2.5 border-b border-black/5 dark:border-white/10"
          : "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm py-4 border-b border-black/5 dark:border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Banding */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex flex-col group focus:outline-none"
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-widest uppercase text-slate-900 dark:text-white group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
              NIRALI BRIDAL STUDIO & ACADEMY
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-slate-500 dark:text-white/40 leading-none mt-1">
              {portfolioData.profile.handle}
            </span>
          </a>
 
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <a
                id={`desktop-nav-link-${item.href.replace("#", "")}`}
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 text-[10px] sm:text-[11px] uppercase tracking-widest font-medium transition-all ${
                  activeSection === item.href.replace("#", "")
                    ? "text-gold-600 dark:text-gold-400 border-b border-gold-500 dark:border-gold-400"
                    : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
 
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Links */}
            <a
              id="insta-direct-link-desktop"
              href={`https://instagram.com/${portfolioData.profile.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram link"
              className="text-slate-500 hover:text-slate-900 dark:text-white/40 dark:hover:text-white transition-colors"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a
              id="whatsapp-direct-link-desktop"
              href={portfolioData.profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp link"
              className="text-slate-500 hover:text-emerald-500 dark:text-white/40 dark:hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-4.5 h-4.5" />
            </a>
 
            {/* Theme Toggle */}
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} id="theme-switcher-desktop" />
          </div>
 
          {/* Mobile Menu Button + Toggle controls */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} id="theme-switcher-mobile" />
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
 
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-rose-100/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] overflow-y-auto max-h-[calc(100vh-80px)] shadow-inner"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    id={`mobile-nav-link-${item.href.replace("#", "")}`}
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center space-x-3 px-4 py-3 text-xs uppercase tracking-widest font-semibold transition-all ${
                      isActive
                        ? "text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-white/5 border-l-4 border-gold-500"
                        : "text-slate-700 dark:text-white/75 hover:text-gold-500 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0 text-slate-400" />
                    <span>{item.label}</span>
                  </a>
                );
              })}

              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex justify-around">
                <a
                  id="insta-direct-link-mobile"
                  href={`https://instagram.com/${portfolioData.profile.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-slate-600 dark:text-white/50 hover:text-rose-500"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  id="whatsapp-direct-link-mobile"
                  href={portfolioData.profile.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-slate-600 dark:text-white/50 hover:text-emerald-500"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
