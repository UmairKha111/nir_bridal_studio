/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BookOpen, Calendar, Clock, Star, ArrowUpRight, GraduationCap, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Course } from "../data/portfolioData";

export default function Courses() {
  const { courses } = portfolioData;
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);

  const selectedCourse = courses.find((c) => c.id === activeCourseId);

  return (
    <section
      id="courses"
      className="py-24 bg-[#070707] dark:bg-[#070707] text-[#e5e5e5] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-3 shadow-xs"
          >
            <GraduationCap className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
              The Academy
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-white"
          >
            MUA Educator & Masterclasses
          </motion.h2>
          <p className="mt-3 text-white/65 text-sm sm:text-base font-sans max-w-2xl mx-auto">
            Acquire precision bridal base techniques, traditional styling secrets, and commercial monetization plans. Priyanka teaches with direct individual guidance.
          </p>
          <div className="w-16 h-[1px] bg-white/20 mx-auto mt-4" />
        </div>

        {/* COURSES LISTINGS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              id={`course-card-${course.id}`}
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 rounded-none overflow-hidden hover:border-white/30 transition-all duration-300 group shadow-2xl"
            >
              <div>
                {/* Course Image Stage */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-widest font-bold border border-white/20 bg-black/60 px-2 py-1">
                    {course.type}
                  </span>
                </div>

                {/* Course Specs */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between text-[10px] tracking-widest font-mono text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {course.duration}
                    </span>
                    <span className="px-2 py-0.5 border border-white/10 bg-white/5">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-1">
                    {course.title}
                  </h3>

                  <p className="text-xs text-white/60 font-sans leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="block text-[10px] tracking-widest font-bold uppercase text-white/40">
                      Highlights
                    </span>
                    <div className="space-y-1">
                      {course.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xxs tracking-wider text-white/70">
                          <Check className="w-3 h-3 text-gold-400 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Action & Footer */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-white/5 bg-[#0e0e0e] mt-auto">
                <span className="text-[11px] tracking-widest font-mono text-gold-400 font-bold uppercase">
                  {course.price || "Inquire Details"}
                </span>

                <button
                  id={`course-detail-btn-${course.id}`}
                  onClick={() => setActiveCourseId(course.id)}
                  className="inline-flex items-center text-[10px] tracking-widest font-bold uppercase text-white hover:text-gold-400 transition-colors gap-1 group/btn cursor-pointer"
                  aria-label={`View syllabus for ${course.title}`}
                >
                  <span>Syllabus</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COLLABORATIVE COURSE SYLLABUS LIGHTBOX OVERLAY */}
        <AnimatePresence>
          {activeCourseId && selectedCourse && (
            <motion.div
              id="course-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCourseId(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            >
              <motion.div
                id="course-modal-content"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 20, stiffness: 150 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0a0a0a] border border-white/10 max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-none text-[#e5e5e5] shadow-2xl"
              >
                {/* Image & Header within Modal */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-[#070707]">
                  <img
                    src={selectedCourse.imageUrl}
                    alt={selectedCourse.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <span className="absolute bottom-4 left-6 text-[10px] uppercase tracking-widest font-bold border border-white/25 bg-black/80 px-2.5 py-1">
                    {selectedCourse.type}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/50 border-b border-white/5 pb-4">
                    <span className="flex items-center gap-1 bg-[#151515] px-2.5 py-1 text-white border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {selectedCourse.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-[#151515] px-2.5 py-1 text-white border border-white/10">
                      <Star className="w-3.5 h-3.5 text-gold-400" />
                      {selectedCourse.level}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      {selectedCourse.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                      {selectedCourse.description}
                    </p>
                  </div>

                  {/* Complete Syllabus */}
                  <div className="space-y-3">
                    <h4 className="text-xs tracking-widest font-bold uppercase text-white/40 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-gold-400" />
                      <span>Detailed Training Syllabus</span>
                    </h4>
                    <div className="divide-y divide-white/5 border-t border-b border-white/5 py-1 font-sans">
                      {selectedCourse.syllabus.map((syl, idx) => (
                        <div key={idx} className="flex gap-3 py-3 text-xs sm:text-sm text-white/85">
                          <span className="font-mono text-gold-400 font-bold">0{idx + 1}.</span>
                          <span>{syl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights of Training */}
                  <div className="space-y-3">
                    <h4 className="text-xs tracking-widest font-bold uppercase text-white/40 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Inclusions & Features</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xxs sm:text-xs">
                      {selectedCourse.highlights.map((high, idx) => (
                        <div key={idx} className="flex gap-2 items-center text-white/80 bg-white/5 px-2.5 py-2 border border-white/10">
                          <Check className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span className="line-clamp-1">{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inquire CTA inside modal */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-sm font-semibold tracking-widest uppercase font-mono text-gold-400">
                      {selectedCourse.price}
                    </span>

                    <div className="flex gap-3 w-full sm:w-auto">
                      <button
                        id="modal-close-btn"
                        onClick={() => setActiveCourseId(null)}
                        className="flex-1 sm:flex-none uppercase text-[10px] tracking-widest font-bold border border-white/20 hover:border-white px-5 py-3 transition-colors cursor-pointer text-center"
                      >
                        Close
                      </button>
                      <a
                        id="modal-cta-whatsapp"
                        href={`${portfolioData.profile.whatsappLink}?text=Hi Priyanka, I'm interested in booking your ${encodeURIComponent(selectedCourse.title)} course details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none uppercase text-[10px] tracking-widest font-bold bg-white text-black hover:bg-white/90 px-6 py-3 transition-colors flex items-center justify-center gap-1 shadow-lg"
                      >
                        <span>Inquire Course</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
