/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, MapPin, Award, ArrowRight, Instagram, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { profile, stats } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const handleScrollTo = (id: string, offset: number = 85) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - offset;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 bg-[#fafafa] dark:bg-[#0a0a0a] text-slate-900 dark:text-[#e5e5e5] overflow-hidden"
    >
      {/* Subtle background ambient reflections */}
      <div className="absolute top-1/6 left-1/12 w-80 h-80 rounded-full bg-white/5 dark:bg-white/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 rounded-full bg-white/5 dark:bg-white/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* CONTENT COL */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Tagline */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 px-3 py-1 border border-black/10 dark:border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-gold-550 dark:text-gold-400" />
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-slate-700 dark:text-white/70">
                Premium Bridal Artistry & Education
              </span>
            </motion.div>

            {/* Main title */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl font-bold tracking-wide text-slate-900 dark:text-white leading-tight">
                {profile.name}
              </h1>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-gold-600 dark:text-gold-450 block leading-tight">
                {profile.title}
              </span>
            </motion.div>

            {/* Handle info & location */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-600 dark:text-white/40"
            >
              <a
                id="insta-handle-link"
                href={`https://instagram.com/${profile.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 border border-black/10 dark:border-white/5 bg-black/5 dark:bg-[#121212]/30 px-3 py-1.5 font-sans"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@{profile.handle}</span>
              </a>
              <span className="flex items-center gap-1.5 border border-black/10 dark:border-white/5 bg-black/5 dark:bg-[#121212]/30 px-3 py-1.5 font-sans">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{profile.location}</span>
              </span>
            </motion.div>

            {/* Description phrase */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-slate-600 dark:text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              {profile.bioPhrase}
            </motion.p>

            {/* Social Statistics Counter resembling Elena Vance style */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-white/10 py-5 px-6 bg-[#f5f5f5] dark:bg-[#070707] border border-black/5 dark:border-white/10 max-w-lg mx-auto lg:mx-0 rounded-none shadow-none"
            >
              <div className="text-center px-2">
                <span className="block text-2xl font-serif text-slate-950 dark:text-white">
                  {stats.posts}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 dark:text-white/35 font-bold leading-none block mt-1">
                  Posts
                </span>
              </div>
              <div className="text-center px-2">
                <span className="block text-2xl font-serif text-slate-950 dark:text-white">
                  {stats.followers}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 dark:text-white/35 font-bold leading-none block mt-1">
                  Followers
                </span>
              </div>
              <div className="text-center px-2">
                <span className="block text-2xl font-serif text-slate-950 dark:text-white">
                  {stats.experience}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 dark:text-white/35 font-bold leading-none block mt-1">
                  Experience
                </span>
              </div>
            </motion.div>

            {/* Live Highlight list */}
            <motion.div variants={itemVariants} className="space-y-2 border-l border-black/20 dark:border-white/25 pl-4 py-1 text-left max-w-lg mx-auto lg:mx-0 font-sans">
              <div className="flex items-center gap-2 text-xxs tracking-wider uppercase text-slate-700 dark:text-white/70 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-450 flex-shrink-0" />
                <span>1000+ Happy Brides & Clients Served</span>
              </div>
              <div className="flex items-center gap-2 text-xxs tracking-wider uppercase text-slate-700 dark:text-white/70 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-450 flex-shrink-0" />
                <span>Certified MUA Educator (50+ Students Trained)</span>
              </div>
              <div className="flex items-center gap-2 text-xxs tracking-wider uppercase text-slate-700 dark:text-white/70 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-450 flex-shrink-0" />
                <span>1:1 Sessions for Personal & Professional Batches</span>
              </div>
            </motion.div>

            {/* Dynamic CTAs - Sophisticated Minimalist Style */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <button
                id="cta-book-consultation"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-850 dark:bg-white dark:hover:bg-[#e5e5e5] text-white dark:text-black rounded-none transition-all cursor-pointer text-xs font-bold uppercase tracking-widest border border-slate-900 dark:border-white/20"
              >
                <span>Inquire Bridal Slots</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                id="cta-explore-gallery"
                onClick={() => handleScrollTo("gallery")}
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-transparent text-slate-800 dark:text-[#e5e5e5] hover:bg-black/5 dark:hover:bg-white/5 rounded-none border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-all cursor-pointer text-xs font-bold uppercase tracking-widest"
              >
                <span>View Gallery Portfolio</span>
              </button>
            </motion.div>
          </motion.div>

          {/* IMAGE PORTRAIT COL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              
              {/* Elegant Solid Border Framing her portrait */}
              <div className="absolute -inset-3.5 rounded-full border border-dashed border-black/10 dark:border-white/10 pointer-events-none" />

              {/* Portrait container */}
              <div className="absolute inset-0 rounded-full bg-slate-100 dark:bg-[#121212] border border-black/10 dark:border-white/10 overflow-hidden">
                <img
                  id="profile-portrait-img"
                  src={profile.profileImage}
                  alt={`${profile.name} Makeup Portrait`}
                  className="w-full h-full object-cover grayscale-0 filter brightness-95 hover:scale-105 duration-700 ease-in-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Elegant floating badges matching instagram stories highlights */}
              <div className="absolute -bottom-2 -left-2 bg-[#fbfbfb] dark:bg-[#070707] border border-black/10 dark:border-white/10 rounded-none p-3 shadow-2xl flex items-center space-x-3 max-w-[150px]">
                <div className="flex-shrink-0 w-8 h-8 bg-black/5 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-gold-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-wider font-mono text-slate-400">Exp</span>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-800 dark:text-white">5+ Year</span>
                </div>
              </div>

             
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
