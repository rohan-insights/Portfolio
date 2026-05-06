"use client";

import { motion } from "framer-motion";

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-primary dark:bg-accent text-white shadow-lg hover:scale-110 transition-transform z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10.5 1.5H9.5v1h1v-1zm4.384.615l-.707.707.707.707.707-.707-.707-.707zM15 5h1V4h-1v1zm.385 4.384l.707-.707-.707-.707-.707.707.707.707zM10.5 15v1h1v-1h-1zm-4.384-.615l.707.707-.707.707-.707-.707.707-.707zM5 15h-1v1h1v-1zm-.385-4.384l-.707.707.707.707.707-.707-.707-.707zM10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </motion.button>
  );
}
