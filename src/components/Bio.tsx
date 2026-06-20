/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Clock, Users, Award, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";

export default function Bio() {
  const { biography, stats, profile } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="biography"
      className="py-24 bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-[#e5e5e5] border-t border-black/5 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3.5 py-1 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-800 dark:text-white/80">
              The Perspective
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-slate-900 dark:text-white"
          >
            Professional Biography & Ethos
          </motion.h2>
          <div className="w-16 h-[1px] bg-black/10 dark:bg-white/20 mx-auto mt-4" />
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* STATS & SPECIALTIES SIDE (Left on desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-8 order-2 lg:order-1"
          >
            {/* Elegant Narrative Quote Block */}
            <motion.div
              variants={itemVariants}
              className="relative p-6 border-l-2 border-slate-300 dark:border-white/20 bg-[#fbfbfb] dark:bg-[#070707] shadow-none overflow-hidden"
            >
              <p className="font-serif italic text-base sm:text-lg text-slate-700 dark:text-white/80 leading-relaxed">
                "{biography.philosophy}"
              </p>
              <div className="flex items-center space-x-3 mt-4">
                <div className="w-6 h-[1px] bg-gold-500"></div>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                  {profile.name}
                </span>
              </div>
            </motion.div>

            {/* Core Value/Impact Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 bg-[#fbfbfb] dark:bg-[#070707] border border-black/5 dark:border-white/10 text-center">
                <div className="mx-auto w-10 h-10 bg-black/5 dark:bg-white/5 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-gold-600 dark:text-gold-450" />
                </div>
                <span className="block text-xl font-serif text-slate-900 dark:text-white">
                  {stats.clientsServed}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 dark:text-white/40 block mt-1">
                  Brides Served
                </span>
              </div>

              <div className="p-6 bg-[#fbfbfb] dark:bg-[#070707] border border-black/5 dark:border-white/10 text-center">
                <div className="mx-auto w-10 h-10 bg-black/5 dark:bg-white/5 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-slate-700 dark:text-rose-455" />
                </div>
                <span className="block text-xl font-serif text-slate-900 dark:text-white">
                  {stats.studentsTrained}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 dark:text-white/40 block mt-1">
                  Students Trained
                </span>
              </div>
            </motion.div>

            {/* Key specialties */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-slate-950 dark:text-white uppercase tracking-wider">
                Artistic Signatures
              </h3>
              <ul className="space-y-3">
                {biography.specialties.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-4 h-4 bg-emerald-100 dark:bg-white/5 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-600 dark:text-gold-450" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-white/70">
                      {spec}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* BIO DESCRIPTION PARAGRAPHS SIDE (Right on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 order-1 lg:order-2"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-bold italic text-slate-900 dark:text-white flex items-center gap-2">
              <span>The Narrative</span>
              <span className="w-9 h-[1px] bg-slate-300 dark:bg-white/10 hidden sm:inline-block"></span>
            </h3>

            {biography.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-slate-600 dark:text-white/60 text-xs sm:text-sm leading-relaxed font-sans"
              >
                {para}
              </p>
            ))}

            {/* Dynamic decorative highlight card */}
            <div className="p-5 bg-black/5 dark:bg-[#070707] border border-black/10 dark:border-white/10 rounded-none flex items-start gap-4">
              <div className="w-10 h-10 bg-black/5 dark:bg-white/5 text-slate-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-sans">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-900 dark:text-white">
                  Trusted & Reliable Excellence
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-white/50 leading-relaxed">
                  Backed by 7+ years of continuous service. Priyanka is fully equipped with global premium cosmetics and tools (Dior, Huda Beauty, MAC, Estée Lauder, NARS) ensuring professional premium hygiene at all bridal consultations.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
