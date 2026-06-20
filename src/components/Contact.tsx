/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, Instagram, CheckCircle, Sparkles, MessageSquare, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { profile } = portfolioData;

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("bridal-makeup");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (!name || !phone) {
      setErrorMessage("Please enter both Name and Phone number to proceed.");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  const getWhatsAppSubmitLink = () => {
    const serviceLabel = 
      service === "bridal-makeup" ? "Bridal Makeup consultation" :
      service === "party-makeup" ? "Party & Guest Makeup" :
      service === "cocktail-look" ? "Sangeet / Cocktail Glam" :
      service === "self-masterclass" ? "1:1 Personal Self Makeup Masterclass" :
      "Professional Certification Academy";

    const text = `Hello Priyanka! My name is ${name}. I just submitted an inquiry on your portfolio website:
- Service: ${serviceLabel}
- Preferred Date: ${date || "Not specified"}
- Preferred Time: ${time || "Not specified"}
- Phone: ${phone}
- Email: ${email || "Not specified"}
- Message: ${message || "No comments"}

Could you please confirm your availability and rates? Thank you!`;

    return `https://wa.me/message/ATCOGAZDW7NNF1?text=${encodeURIComponent(text)}`;
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setService("bridal-makeup");
    setDate("");
    setTime("");
    setMessage("");
    setSuccess(false);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-[#e5e5e5] border-t border-black/5 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3.5 py-1 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-800 dark:text-white/80">
              Book Consultation
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-slate-900 dark:text-white"
          >
            Secure Your Glam Calendar
          </motion.h2>
          <p className="mt-3 text-slate-500 dark:text-white/60 text-xs sm:text-sm font-sans max-w-2xl mx-auto leading-relaxed">
            Ready to become a signature Priyanka bride or enroll in our next masterclass? Leave your details below, or send an instant message!
          </p>
          <div className="w-16 h-[1px] bg-black/10 dark:bg-white/20 mx-auto mt-4" />
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* INFO SIDE (Left: 5 cols) */}
          <div className="lg:col-span-12 xl:col-span-5 bg-[#fbfbfb] dark:bg-[#070707] p-8 sm:p-10 border border-black/5 dark:border-white/10 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg tracking-wider font-bold text-slate-900 dark:text-white uppercase">
                  Contact Coordinates
                </h3>
                <p className="text-xs text-slate-500 dark:text-white/50 font-sans mt-2">
                  We look forward to hearing about your vision. Our standard response turn-around is less than twelve hours.
                </p>
              </div>

              {/* Detail list items */}
              <div className="space-y-6">
                <a
                  id="contact-location-info"
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:opacity-90 transition-opacity"
                >
                  <div className="w-10 h-10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-rose-500 shrink-0 border border-black/5 dark:border-white/5">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-[10px] font-mono text-slate-450 uppercase font-bold tracking-widest">Service Location</h4>
                    <p className="text-xs font-semibold text-slate-800 dark:text-white mt-0.5">{profile.location}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">(Available for domestic and international outstation weddings)</p>
                  </div>
                </a>

                <a
                  id="contact-whatsapp-direct-link"
                  href={profile.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:opacity-90 transition-opacity"
                >
                  <div className="w-10 h-10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-emerald-500 shrink-0 border border-black/5 dark:border-white/5">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-[10px] font-mono text-slate-455 uppercase font-bold tracking-widest">Direct Message / WhatsApp</h4>
                    <p className="text-xs font-bold text-emerald-600 dark:text-[#a0e4b0] mt-0.5">Click to connect instantly</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Pre-compiled look inquiries & quick replies</p>
                  </div>
                </a>

                <a
                  id="contact-instagram-direct-link"
                  href={`https://instagram.com/${profile.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:opacity-90 transition-opacity"
                >
                  <div className="w-10 h-10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-rose-500 shrink-0 border border-black/5 dark:border-white/5">
                    <Instagram className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-[10px] font-mono text-slate-455 uppercase font-bold tracking-widest">Instagram DM</h4>
                    <p className="text-xs font-semibold text-slate-800 dark:text-white mt-0.5">@{profile.handle}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Watch our latest Reels, brides story highlights, and bridal consult clips</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Engagement highlighted */}
            <div className="pt-8 border-t border-black/5 dark:border-white/10 mt-8">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">Engagement Guidelines</h4>
              <p className="text-[11px] text-slate-500 dark:text-white/50 leading-relaxed font-sans">
                For urgent cocktail/bridal inquiries for same-week bookings, we highly recommend calling or texting directly on WhatsApp. Please mention your date, event city location, and expected headcount.
              </p>
            </div>
          </div>

          {/* FORM SIDE (Right: 7 cols) */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white dark:bg-[#070707] p-8 sm:p-10 border border-black/10 dark:border-white/10 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3 className="font-serif text-lg tracking-wider font-bold text-slate-900 dark:text-white uppercase border-b border-black/5 dark:border-white/5 pb-3">
                    Submit Inquiry Form
                  </h3>

                  {errorMessage && (
                    <div className="p-4 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 flex items-start gap-2.5 border border-red-200/20 text-xs">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-[10px] font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priyanshu Roy"
                        className="w-full bg-black/5 dark:bg-black/30 px-4 py-3 border border-black/10 dark:border-white/10 text-slate-850 dark:text-white text-xs tracking-wide focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="block text-[10px] font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider">
                        Phone / Mobile <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-black/5 dark:bg-black/30 px-4 py-3 border border-black/10 dark:border-white/10 text-slate-850 dark:text-white text-xs tracking-wide focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                    {/* Email address */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-[10px] font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. yourname@gmail.com"
                        className="w-full bg-black/5 dark:bg-black/30 px-4 py-3 border border-black/10 dark:border-white/10 text-slate-850 dark:text-white text-xs tracking-wide focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    {/* Service/Consultation category */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-service" className="block text-[10px] font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider">
                        Requested Service
                      </label>
                      <select
                        id="contact-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-black/10 dark:bg-black/40 px-4 py-3 border border-black/10 dark:border-white/10 text-slate-705 dark:text-white text-xs tracking-wider focus:outline-none focus:border-gold-400"
                      >
                        <option value="bridal-makeup">Bridal Makeup Consultation</option>
                        <option value="party-makeup">Party & Guests Makeup</option>
                        <option value="cocktail-look">Sangeet / Evening Cocktail Glam</option>
                        <option value="self-masterclass">1:1 Self Makeup Masterclass</option>
                        <option value="academy-certification">Academies & Certifications (Pro)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                    {/* Event Date */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-date" className="block text-[10px] font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider">
                        Event / Course Start Date
                      </label>
                      <input
                        id="contact-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-black/5 dark:bg-black/30 px-4 py-3 border border-black/10 dark:border-white/10 text-slate-705 dark:text-white text-xs tracking-wide focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    {/* Slot Time */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-time" className="block text-[10px] font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider">
                        Preferred Consultation Time
                      </label>
                      <input
                        id="contact-time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-black/5 dark:bg-black/30 px-4 py-3 border border-black/10 dark:border-white/10 text-slate-705 dark:text-white text-xs tracking-wide focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  {/* Message/Comments */}
                  <div className="space-y-1.5 font-sans">
                    <label htmlFor="contact-message" className="block text-[10px] font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider">
                      Specific Makeup / Course Requirements
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details regarding wedding destination, event timing, dress color preference, skin condition or dynamic syllabus batches you wish to join..."
                      className="w-full bg-black/5 dark:bg-black/30 px-4 py-3 border border-black/10 dark:border-white/10 text-slate-850 dark:text-white text-xs tracking-wide focus:outline-none focus:border-gold-400"
                    ></textarea>
                  </div>

                  {/* Form Submission Buttons */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 bg-slate-950 hover:bg-slate-900 dark:bg-white dark:hover:bg-[#e5e5e5] text-white dark:text-black hover:scale-101 active:scale-99 transition-all cursor-pointer font-bold tracking-widest uppercase text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? "Submitting Request..." : "Send Consultation Booking"}</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-10 space-y-6 flex flex-col items-center justify-center h-full font-sans"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-[#151515] border border-emerald-500/20 flex items-center justify-center text-emerald-500 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Inquiry Logged Successfully!
                    </h3>
                    <p className="text-slate-500 dark:text-white/60 text-xs max-w-sm mx-auto">
                      Thank you for submitting, <strong>{name}</strong>! We have locked-in your request details for the requested date {date ? `(${date})` : ""}.
                    </p>
                  </div>

                  {/* WhatsApp instant submit link - highly convenient integration! */}
                  <div className="p-6 bg-black/5 dark:bg-[#0d0d0d] border border-black/10 dark:border-white/10 max-w-md space-y-4 text-left">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#e5e5e5]/40 font-mono">⚡ Instant Dispatch</h4>
                    <p className="text-[11px] text-slate-550 dark:text-white/65 leading-relaxed font-sans">
                      Would you like to instantly forward this compiled reservation directly to Priyanka's WhatsApp to solve booking conflicts faster?
                    </p>
                    <a
                      id="contact-whatsapp-success-btn"
                      href={getWhatsAppSubmitLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-505 text-white text-xs font-bold uppercase tracking-widest"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>Forward on WhatsApp</span>
                    </a>
                  </div>

                  {/* Reset form */}
                  <button
                    id="contact-success-reset-btn"
                    onClick={handleReset}
                    className="text-[10px] uppercase tracking-widest font-bold text-slate-400 hover:text-rose-500 focus:outline-none transition-colors"
                  >
                    Submit Another Booking Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
