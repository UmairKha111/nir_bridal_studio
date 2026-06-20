/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Instagram, MessageCircle, Heart, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#0a0a0a] border-t border-white/10 py-14 text-[#e5e5e5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo & localized credit lines */}
          <div className="space-y-1">
            <span className="font-serif text-lg tracking-widest uppercase text-white block">
              Priyanka Chhabra
            </span>
            <p className="text-[11px] text-white/50 font-sans leading-relaxed">
              Timeless Bridal Artistry & Academy Certifications based in {profile.location}.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-3">
            <a
              id="footer-insta-icon"
              href={`https://instagram.com/${profile.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Priyanka Chhabra's Instagram Page"
              className="p-2.5 rounded-none bg-[#070707] hover:bg-[#121212] text-white/60 hover:text-white transition-all border border-white/10"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="footer-whatsapp-icon"
              href={portfolioData.profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct message with Priyanka via WhatsApp"
              className="p-2.5 rounded-none bg-[#070707] hover:bg-[#121212] text-white/60 hover:text-[#a0e4b0] transition-all border border-white/10"
            >
              <MessageCircle className="w-4 h-4 fill-transparent" />
            </a>
            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              aria-label="Return back to top of the page"
              className="p-2.5 rounded-none bg-[#070707] hover:bg-[#121212] text-white/60 hover:text-white transition-all border border-white/10 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* License tag and legal stamp */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/40 font-bold font-sans">
          <p>© {new Date().getFullYear()} @{profile.handle}. All Rights Reserved.</p>

<p className="flex items-center gap-1.5 text-sm text-white/70">
  Crafted by
  <a
    href="https://umanztechnology.in"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-[#c5a059] hover:text-white transition-colors duration-300"
  >
    Umanz Technology
  </a>
</p>
        </div>
      </div>
    </footer>
  );
}
