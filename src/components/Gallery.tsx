/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolioData";

export default function Gallery() {
  const { gallery } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Filter Categories
  const categories = [
    { value: "all", label: "All Looks" },
    { value: "bridal", label: "Bridal looks" },
    { value: "party", label: "Party Makeup" },
    { value: "cocktail", label: "Cocktail & Glam" },
    { value: "student", label: "Student work" },
  ];

  // Filtered gallery items
  const filteredGallery = selectedFilter === "all"
    ? gallery
    : gallery.filter(item => item.category === selectedFilter);

  // Lightbox navigation helpers
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    const nextIndex = activeLightboxIndex === 0 ? filteredGallery.length - 1 : activeLightboxIndex - 1;
    setActiveLightboxIndex(nextIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    const nextIndex = activeLightboxIndex === filteredGallery.length - 1 ? 0 : activeLightboxIndex + 1;
    setActiveLightboxIndex(nextIndex);
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-[#0a0a0a] dark:bg-[#0a0a0a] text-[#e5e5e5] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1 mb-3"
          >
            <Eye className="w-3.5 h-3.5 text-white/80" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/80">
              Visual Series
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-white"
          >
            Signature Minimalist Lookbook
          </motion.h2>
          <p className="mt-3 text-white/60 text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            A photographic index mapping technical skin prep, bespoke base artistry, and high-fashion wedding styling solutions.
          </p>
          <div className="w-16 h-[1px] bg-white/20 mx-auto mt-4" />
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              id={`filter-btn-${cat.value}`}
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-5 py-2.5 rounded-none text-[10px] sm:text-[11px] tracking-widest uppercase font-bold transition-all duration-200 cursor-pointer ${
                selectedFilter === cat.value
                  ? "bg-white text-black border border-white shadow-xl"
                  : "bg-[#121212] text-white/50 border border-white/5 hover:text-white hover:border-white/25"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => {
              return (
                <motion.div
                  id={`gallery-card-${item.id}`}
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-96 rounded-none overflow-hidden bg-[#151515] border border-white/10 cursor-pointer"
                  onClick={() => setActiveLightboxIndex(index)}
                >
                  {/* Photo Container */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
  src={item.imageUrl}
  alt={item.title}
  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
  loading="lazy"
  referrerPolicy="no-referrer"
/>
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                  </div>

                  {/* Ribbon Category Tag */}
                  <span className="absolute top-4 left-4 bg-black/85 border border-white/20 px-2 py-1 text-[8px] font-mono font-bold uppercase tracking-widest text-[#e5e5e5]">
                    {item.category === "bridal" ? "Bridal Look" : item.category === "party" ? "Party Look" : item.category === "cocktail" ? "Cocktail Look" : "Student Work"}
                  </span>

                  {/* Details Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-white/50">
                      Lookbook Series 0{index + 1}
                    </span>
                    <h3 className="font-serif italic text-base font-medium tracking-wide text-white mt-1 select-none">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-white/60 font-sans leading-relaxed mt-1 line-clamp-2 select-none opacity-0 group-hover:opacity-100 duration-300">
                      {item.description}
                    </p>
                    <div className="flex gap-1.5 items-center text-[9px] tracking-widest uppercase font-bold text-gold-400 mt-2 hover:text-white duration-200">
                      <Eye className="w-3 h-3" />
                      <span>Zoom Stage</span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty placeholder */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-16 bg-[#0a0a0a] border border-white/10 rounded-none">
            <AlertCircle className="w-10 h-10 text-white/20 mx-auto mb-3" />
            <p className="text-white/40 tracking-wider text-xs uppercase font-bold">No looks match this selection criteria.</p>
          </div>
        )}

        {/* PORTABLE HIGH-FIDELITY LIGHTBOX MODAL */}
        <AnimatePresence>
          {activeLightboxIndex !== null && (
            <motion.div
              id="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex flex-col justify-between bg-black/98 p-4 backdrop-blur-md text-[#e5e5e5]"
              onClick={() => setActiveLightboxIndex(null)}
            >
              {/* TOP ACTIONS */}
              <div className="flex items-center justify-between h-14 relative z-10 max-w-7xl mx-auto w-full">
                <span className="text-white/40 font-mono text-xs uppercase tracking-widest font-bold">
                  Stage Series Look {activeLightboxIndex + 1} / {filteredGallery.length}
                </span>

                <button
                  id="lightbox-close-btn"
                  onClick={() => setActiveLightboxIndex(null)}
                  className="p-2 border border-white/10 hover:border-white rounded-none bg-black text-white hover:text-white cursor-pointer transition-colors"
                  aria-label="Close lookbook"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* IMAGE STAGE */}
              <div className="relative flex-grow flex items-center justify-center max-h-[70vh]" onClick={(e) => e.stopPropagation()}>
                {/* PREV BTN */}
                <button
                  id="lightbox-prev-btn"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-10 p-2.5 sm:p-3 border border-white/10 bg-[#070707]/90 hover:bg-black/90 hover:border-white text-white cursor-pointer transition-colors"
                  aria-label="Previous look"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* CURRENT PHOTO */}
                <motion.div
                  key={activeLightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="relative max-w-full max-h-full overflow-hidden border border-white/10 bg-[#000]"
                >
                  <img
                    id="lightbox-main-img"
                    src={filteredGallery[activeLightboxIndex].imageUrl}
                    alt={filteredGallery[activeLightboxIndex].title}
                    className="max-w-full max-h-[60vh] sm:max-h-[66vh] object-contain mx-auto"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* NEXT BTN */}
                <button
                  id="lightbox-next-btn"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-10 p-2.5 sm:p-3 border border-white/10 bg-[#070707]/90 hover:bg-black/90 hover:border-white text-white cursor-pointer transition-colors"
                  aria-label="Next look"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* BOTTOM COPY DETAILS PANEL */}
              <div className="text-center max-w-3xl mx-auto pb-4 relative z-10" onClick={(e) => e.stopPropagation()}>
                <motion.div
                  key={`copy-${activeLightboxIndex}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 px-4"
                >
                  <h3 className="font-serif italic text-2xl font-bold text-white tracking-wide">
                    {filteredGallery[activeLightboxIndex].title}
                  </h3>
                  <p className="text-white/60 text-xs max-w-2xl mx-auto leading-relaxed font-sans">
                    {filteredGallery[activeLightboxIndex].description}
                  </p>
                  <span className="inline-block mt-2 border border-white/15 bg-white/5 px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-gold-400">
                    Category: {filteredGallery[activeLightboxIndex].category}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
