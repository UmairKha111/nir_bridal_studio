/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Star, MessageSquareCode, Quote, User, Sparkles, Sliders } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolioData";

export default function Testimonials() {
  const { testimonials } = portfolioData;
  const [selectedRole, setSelectedRole] = useState<string>("all");

  const roles = [
    { value: "all", label: "All Reviews" },
    { value: "Bride", label: "Brides" },
    { value: "Student", label: "Students & MUAs" },
    { value: "Party Makeup Client", label: "Party Glams" },
  ];

  const filteredTestimonials = selectedRole === "all"
    ? testimonials
    : testimonials.filter((t) => t.role === selectedRole);

  return (
    <section
      id="testimonials"
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
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-3"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
              The Appreciations
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-white"
          >
            Client Appreciations & Reviews
          </motion.h2>
          <p className="mt-3 text-white/60 text-sm sm:text-base font-sans max-w-2xl mx-auto">
            Words of gratitude and love from beautiful brides and empowered beauty professionals trained in Priyanka Chhabra's academy.
          </p>
          <div className="w-16 h-[1px] bg-white/20 mx-auto mt-4" />
        </div>

        {/* REVIEW TABS */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {roles.map((item) => (
            <button
              id={`testimonial-tab-${item.value}`}
              key={item.value}
              onClick={() => setSelectedRole(item.value)}
              className={`px-4 sm:px-6 py-2 rounded-none text-xs tracking-widest uppercase font-bold transition-all duration-200 cursor-pointer ${
                selectedRole === item.value
                  ? "bg-white text-black border border-white"
                  : "bg-transparent text-white/60 border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* TESTIMONIALS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                id={`testimonial-card-${testimonial.id}`}
                layout
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative bg-[#0d0d0d] border border-white/10 hover:border-white/30 p-8 flex flex-col justify-between rounded-none overflow-hidden group shadow-2xl transition-all duration-300"
              >
                {/* Vintage quotation sign marker */}
                <Quote className="absolute -top-3 right-6 w-16 h-16 text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors" />

                {/* Stars */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < testimonial.rating
                            ? "fill-gold-400 text-gold-400"
                            : "text-white/20"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-gold-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-wider font-bold text-white uppercase sm:text-sm">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-mono text-white/45">
                      <span>{testimonial.role}</span>
                      <span>•</span>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-16 border border-white/10 bg-[#070707] rounded-none">
            <MessageSquareCode className="w-12 h-12 text-white/20 mx-auto mb-3" />
            <p className="text-white/50 tracking-wide text-xs uppercase">No feedback for this specific filtration yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}
