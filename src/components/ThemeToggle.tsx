/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  id?: string;
}

export default function ThemeToggle({ darkMode, setDarkMode, id = "theme-switcher-btn" }: ThemeToggleProps) {
  return (
    <button
      id={id}
      onClick={() => setDarkMode(!darkMode)}
      className="relative p-2.5 rounded-none focus:outline-none border border-black/10 dark:border-white/10 bg-slate-50 hover:bg-slate-100 dark:bg-[#070707] dark:hover:bg-[#121212] text-slate-800 dark:text-[#e5e5e5] cursor-pointer transition-colors duration-200"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        animate={{ rotate: darkMode ? 360 : 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative w-6 h-6 flex items-center justify-center"
      >
        {darkMode ? (
          <Sun id={`${id}-sun-icon`} className="w-5 h-5 text-gold-400" />
        ) : (
          <Moon id={`${id}-moon-icon`} className="w-5 h-5 text-slate-700" />
        )}
      </motion.div>
    </button>
  );
}
